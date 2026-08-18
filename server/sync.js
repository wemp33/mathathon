// Device sync. The client is the source of truth while offline: it writes to
// IndexedDB immediately, stamps every record with its own `updatedAt`, and
// pushes later. The server merges last-write-wins per record and hands back a
// `seq` cursor so the other device can pull just what changed.
//
// Last-write-wins is the right trade here: one person on a phone and an iPad,
// editing small independent records — an attempt, a card's schedule, a sheet of
// working. The one case worth protecting is a deletion racing an edit, so a
// delete carries its own updatedAt and loses to a later edit like anything else.
import { pool, q } from './db.js';

const KINDS = new Set([
  'attempt',   // one problem worked: what was asked, what was written, what the AI said
  'card',      // spaced-repetition state for a formula or a skill
  'page',      // a sheet of handwritten working (ink strokes, not pixels)
  'skill',     // mastery rating for one skill
  'session',   // a training session summary
  'pref',      // preferences that are not on the users row
  'note',      // the user's own notes on a topic
  'goal',      // a target they set themselves
]);

const MAX_BATCH = 500;
// A page of Apple Pencil working is the big one: 240 Hz sampling over a full
// A4-shaped canvas runs to a few hundred kilobytes of stroke data.
const MAX_RECORD_BYTES = 1_500_000;

export async function pull(userId, since = 0, limit = 400) {
  const capped = Math.min(limit, 1000);
  const { rows } = await q(
    `SELECT kind, id, updated_at, deleted, data, seq
       FROM records
      WHERE user_id = $1 AND seq > $2
      ORDER BY seq ASC
      LIMIT $3`,
    [userId, Number(since) || 0, capped],
  );
  const cursor = rows.length ? Number(rows[rows.length - 1].seq) : Number(since) || 0;
  return {
    records: rows.map((r) => ({
      kind: r.kind,
      id: r.id,
      updatedAt: Number(r.updated_at),
      deleted: r.deleted,
      data: r.data,
    })),
    cursor,
    more: rows.length >= capped,
  };
}

export async function push(userId, records) {
  if (!Array.isArray(records)) return { error: 'bad_payload' };
  if (records.length > MAX_BATCH) return { error: 'batch_too_large', max: MAX_BATCH };

  const rejected = [];
  const accepted = [];

  for (const r of records) {
    if (!r || !KINDS.has(r.kind) || typeof r.id !== 'string' || !r.id) {
      rejected.push({ id: r?.id ?? null, reason: 'bad_record' });
      continue;
    }
    const updatedAt = Number(r.updatedAt);
    if (!Number.isFinite(updatedAt) || updatedAt <= 0) {
      rejected.push({ id: r.id, reason: 'bad_updated_at' });
      continue;
    }
    const json = JSON.stringify(r.data ?? {});
    if (json.length > MAX_RECORD_BYTES) {
      rejected.push({ id: r.id, reason: 'too_large' });
      continue;
    }
    accepted.push({ kind: r.kind, id: r.id, updatedAt, deleted: !!r.deleted, json });
  }

  if (!accepted.length) return { cursor: await headSeq(userId), applied: 0, rejected };

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    let applied = 0;
    for (const a of accepted) {
      // nextval() per row keeps `seq` strictly increasing even inside one
      // transaction, so a pull cursor never skips a sibling record.
      const res = await client.query(
        `INSERT INTO records (user_id, kind, id, updated_at, deleted, data, seq)
         VALUES ($1, $2, $3, $4, $5, $6::jsonb, nextval('record_seq'))
         ON CONFLICT (user_id, kind, id) DO UPDATE
           SET updated_at = EXCLUDED.updated_at,
               deleted    = EXCLUDED.deleted,
               data       = EXCLUDED.data,
               seq        = nextval('record_seq')
           WHERE records.updated_at < EXCLUDED.updated_at`,
        [userId, a.kind, a.id, a.updatedAt, a.deleted, a.json],
      );
      applied += res.rowCount;
    }
    await client.query('COMMIT');
    return { cursor: await headSeq(userId), applied, rejected };
  } catch (e) {
    await client.query('ROLLBACK').catch(() => {});
    throw e;
  } finally {
    client.release();
  }
}

async function headSeq(userId) {
  const { rows } = await q(
    `SELECT COALESCE(MAX(seq), 0) AS seq FROM records WHERE user_id = $1`,
    [userId],
  );
  return Number(rows[0].seq);
}

// Read one kind straight off the server. The client normally works from its
// own IndexedDB copy, but the AI endpoints need to see the real history —
// which skills are weak, what was got wrong last week — without trusting a
// client-supplied summary.
export async function readKind(userId, kind, limit = 2000) {
  if (!KINDS.has(kind)) return [];
  const { rows } = await q(
    `SELECT id, data, updated_at FROM records
      WHERE user_id = $1 AND kind = $2 AND deleted = false
      ORDER BY updated_at DESC LIMIT $3`,
    [userId, kind, limit],
  );
  return rows.map((r) => ({ id: r.id, updatedAt: Number(r.updated_at), ...r.data }));
}

export async function wipe(userId) {
  await q(`DELETE FROM records WHERE user_id = $1`, [userId]);
}
