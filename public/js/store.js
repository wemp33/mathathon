// Local storage and sync.
//
// The client writes to IndexedDB first and always — an attempt, a card's
// schedule, a sheet of ink — and pushes afterwards. That is what makes the app
// work on a train, and it is also why the ink never stutters: nothing on the
// writing path waits for the network.
//
// Safari evicts IndexedDB for sites it decides are "unengaged", and
// storage.persist() is unreliable on iOS, so the server copy is not a
// convenience here — it is the only durable copy. Anything not yet pushed is
// one Safari housekeeping pass away from being gone.

import { api, signedIn } from './api.js';

const DB_NAME = 'mathathon';
const DB_VERSION = 1;

let dbp = null;

function open() {
  if (dbp) return dbp;
  dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('records')) {
        const s = db.createObjectStore('records', { keyPath: ['kind', 'id'] });
        s.createIndex('kind', 'kind');
        s.createIndex('dirty', 'dirty');
      }
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'k' });
      if (!db.objectStoreNames.contains('cache')) db.createObjectStore('cache', { keyPath: 'k' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbp;
}

const tx = async (store, mode, fn) => {
  const db = await open();
  return new Promise((resolve, reject) => {
    const t = db.transaction(store, mode);
    const out = fn(t.objectStore(store));
    t.oncomplete = () => resolve(out?.result ?? out);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
  });
};

const wrap = (req) => new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error); });

/* ═══ meta ═══ */

export const getMeta = async (k, fallback = null) =>
  (await tx('meta', 'readonly', (s) => wrap(s.get(k))))?.v ?? fallback;
export const setMeta = (k, v) => tx('meta', 'readwrite', (s) => s.put({ k, v }));

/* ═══ records ═══ */

/**
 * Write one record locally and mark it for the next push. `updatedAt` is the
 * client's clock: the server merges last-write-wins on it, so two devices
 * editing the same record settle on whichever was edited later, not whichever
 * synced later.
 */
export async function put(kind, id, data, { deleted = false } = {}) {
  const rec = { kind, id, data, deleted, updatedAt: Date.now(), dirty: 1 };
  await tx('records', 'readwrite', (s) => s.put(rec));
  schedulePush();
  return rec;
}

export const remove = (kind, id) => put(kind, id, {}, { deleted: true });

export async function get(kind, id) {
  const r = await tx('records', 'readonly', (s) => wrap(s.get([kind, id])));
  return r && !r.deleted ? r.data : null;
}

export async function all(kind) {
  const rows = await tx('records', 'readonly', (s) => wrap(s.index('kind').getAll(kind)));
  return rows.filter((r) => !r.deleted).map((r) => ({ id: r.id, updatedAt: r.updatedAt, ...r.data }));
}

/* ═══ a small cache for server content ═══
   The curriculum is large and changes only when the server redeploys, so it is
   kept locally and revalidated in the background. This is what lets the
   formula sheet open instantly, and open at all with no signal. */

export async function cached(key, loader, { maxAge = 6 * 3600_000 } = {}) {
  const hit = await tx('cache', 'readonly', (s) => wrap(s.get(key)));
  const fresh = hit && Date.now() - hit.at < maxAge;
  if (fresh) {
    // Revalidate without blocking, so the next open is current.
    loader().then((v) => tx('cache', 'readwrite', (s) => s.put({ k: key, v, at: Date.now() }))).catch(() => {});
    return hit.v;
  }
  try {
    const v = await loader();
    await tx('cache', 'readwrite', (s) => s.put({ k: key, v, at: Date.now() }));
    return v;
  } catch (e) {
    if (hit) return hit.v;   // stale beats nothing
    throw e;
  }
}

/* ═══ sync ═══ */

let pushTimer = null;
let syncing = false;
const listeners = new Set();

export const onSync = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
const emit = (state, extra = {}) => { for (const fn of listeners) fn(state, extra); };

function schedulePush(delay = 1200) {
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => { sync().catch(() => {}); }, delay);
}

/** Push everything dirty, then pull everything new. Safe to call at any time. */
export async function sync() {
  if (syncing || !signedIn() || !navigator.onLine) return { skipped: true };
  syncing = true;
  emit('busy');
  try {
    const dirty = await tx('records', 'readonly', (s) => wrap(s.index('dirty').getAll(1)));
    if (dirty.length) {
      // The server caps a batch at 500; a first sync from a well-used iPad can
      // exceed that, so it goes up in slices rather than being rejected whole.
      for (let i = 0; i < dirty.length; i += 400) {
        const slice = dirty.slice(i, i + 400);
        await api.push(slice.map(({ kind, id, updatedAt, deleted, data }) => ({ kind, id, updatedAt, deleted, data })));
        await tx('records', 'readwrite', (s) => {
          for (const r of slice) s.put({ ...r, dirty: 0 });
        });
      }
    }

    let cursor = await getMeta('cursor', 0);
    for (let page = 0; page < 40; page++) {
      const out = await api.pull(cursor);
      if (out.records.length) {
        await tx('records', 'readwrite', (s) => {
          for (const r of out.records) {
            // A record we have edited since the last push wins locally until it
            // is pushed; overwriting it here would lose the user's newer work.
            const req = s.get([r.kind, r.id]);
            req.onsuccess = () => {
              const mine = req.result;
              if (mine?.dirty && mine.updatedAt >= r.updatedAt) return;
              s.put({ kind: r.kind, id: r.id, data: r.data, deleted: r.deleted, updatedAt: r.updatedAt, dirty: 0 });
            };
          }
        });
      }
      cursor = out.cursor;
      await setMeta('cursor', cursor);
      if (!out.more) break;
    }

    await setMeta('lastSync', Date.now());
    emit('ok', { at: Date.now() });
    return { ok: true };
  } catch (e) {
    emit(navigator.onLine ? 'error' : 'off', { error: e });
    return { error: e };
  } finally {
    syncing = false;
  }
}

/** Wipe the local copy — used on sign-out so the next account starts clean. */
export async function wipeLocal() {
  const db = await open();
  await new Promise((res) => {
    const t = db.transaction(['records', 'meta', 'cache'], 'readwrite');
    t.objectStore('records').clear();
    t.objectStore('meta').clear();
    t.objectStore('cache').clear();
    t.oncomplete = res;
    t.onerror = res;
  });
}

/* Sync on the moments that matter: coming back online, and coming back to the
   foreground — which on iOS is the only reliable "the user is here" signal. */
window.addEventListener('online', () => schedulePush(300));
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') schedulePush(600); });
