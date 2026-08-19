// Boot, the sign-in gate, and the five-way router.

import { api, ApiError, signedIn, user, forget } from './api.js';
import { sync, onSync, getMeta, wipeLocal, cached } from './store.js';
import { t, apply, lang, errText, pick } from './i18n.js';
import { $, $$, el, fill, toast, keypad, ago } from './ui.js';

import { mountTrain } from './train.js';
import { mountQuiz } from './quiz.js';
import { mountFormulas } from './formulas.js';
import { mountProgress } from './progress.js';
import { mountSettings } from './settings.js';

/* ═══ shared content, loaded once ═══ */

export const content = {
  modules: [],
  topics: new Map(),
  skills: new Map(),
  formulas: [],
  async load() {
    const out = await cached('tree', () => api.tree());
    this.modules = out.modules || [];
    this.topics.clear();
    this.skills.clear();
    for (const mod of this.modules) {
      for (const topic of mod.topics) {
        this.topics.set(topic.id, { ...topic, moduleId: mod.id, track: mod.track });
        for (const s of topic.skills || []) this.skills.set(s.id, { ...s, topicId: topic.id, moduleId: mod.id });
      }
    }
    const drills = await cached('drills', () => api.drills());
    this.formulas = drills.formulas || [];
    return this;
  },
  problemCount() {
    return this.modules.reduce((a, m) => a + m.topics.reduce((b, tp) => b + (tp.problemCount || 0), 0), 0);
  },
};

/* ═══ router ═══ */

const VIEWS = {
  train: mountTrain,
  quiz: mountQuiz,
  formulas: mountFormulas,
  progress: mountProgress,
  settings: mountSettings,
};

const mounted = new Map();
let currentView = null;

export function go(name) {
  if (!VIEWS[name]) name = 'train';
  currentView = name;
  localStorage.setItem('mathathon.view', name);

  for (const [key, btn] of Object.entries(tabButtons)) btn.classList.toggle('on', key === name);
  for (const key of Object.keys(VIEWS)) $(`#view-${key}`).classList.toggle('on', key === name);

  const host = $(`#view-${name}`);
  if (!mounted.has(name)) {
    mounted.set(name, VIEWS[name](host) || {});
  } else {
    mounted.get(name).refresh?.();
  }
  // A view switch should always start at the top; iOS keeps the old offset.
  $('main').scrollTop = 0;
}

let tabButtons = {};

function wireTabs() {
  tabButtons = {};
  for (const btn of $$('#tabs button')) {
    tabButtons[btn.dataset.view] = btn;
    btn.addEventListener('click', () => go(btn.dataset.view));
  }
}

/* ═══ the sync chip ═══ */

function wireSyncChip() {
  const chip = $('#sync-chip');
  const paint = async (state) => {
    if (state === 'busy') { chip.textContent = t('sync.busy'); return; }
    if (state === 'off' || !navigator.onLine) { chip.textContent = t('sync.off'); return; }
    const at = await getMeta('lastSync', 0);
    chip.textContent = at ? ago(at, lang()) : t('sync.ok');
  };
  onSync(paint);
  paint('ok');
  chip.addEventListener('click', () => sync());
  setInterval(() => paint('ok'), 60_000);
}

/* ═══ the gate ═══ */

function showGate(show) {
  $('#gate').style.display = show ? 'flex' : 'none';
  $('#app').classList.toggle('on', !show);
}

function mountGate() {
  const nickStep = $('#gate-name-step');
  const codeStep = $('#gate-code-step');
  const nick = $('#gate-nick');
  const err = $('#gate-err');
  const sub = $('.sub', $('#gate'));
  let registering = false;
  let pending = '';

  const setErr = (code) => { err.textContent = code ? errText(code) : ''; };

  const paintMode = () => {
    $('#gate-toggle').textContent = registering ? t('gate.toLogin') : t('gate.toRegister');
    sub.textContent = t('gate.sub');
    setErr('');
  };

  $('#gate-toggle').addEventListener('click', () => { registering = !registering; paintMode(); });

  const toCode = () => {
    const name = nick.value.trim();
    if (name.length < 2) return setErr('nickname_short');
    pending = name;
    nickStep.hidden = true;
    codeStep.hidden = false;
    $('#gate-who').textContent = registering ? t('gate.setCode') : t('gate.enterCode');
    setErr('');
    pad.clear();
  };

  $('#gate-next').addEventListener('click', toCode);
  nick.addEventListener('keydown', (e) => { if (e.key === 'Enter') toCode(); });

  $('#gate-back').addEventListener('click', () => {
    codeStep.hidden = true;
    nickStep.hidden = false;
    setErr('');
  });

  const pad = keypad({
    padEl: $('#gate-pad'),
    dotsEl: $('#gate-dots'),
    onChange: () => setErr(''),
    onComplete: async (code) => {
      try {
        await (registering ? api.register(pending, code) : api.login(pending, code));
        await enterApp();
      } catch (e) {
        setErr(e.code || 'generic');
        pad.clear();
        // A wrong code should feel wrong, briefly.
        $('#gate-dots').animate(
          [{ transform: 'translateX(0)' }, { transform: 'translateX(-7px)' },
            { transform: 'translateX(7px)' }, { transform: 'translateX(0)' }],
          { duration: 220, easing: 'ease-in-out' },
        );
      }
    },
  });

  paintMode();
}

/* ═══ boot ═══ */

async function enterApp() {
  showGate(false);
  try {
    await content.load();
  } catch (e) {
    // No content is survivable — the views say so rather than showing a
    // blank screen with no explanation.
    console.warn('content failed to load', e);
  }
  wireSyncChip();
  go(localStorage.getItem('mathathon.view') || 'train');
  sync().catch(() => {});
}

async function boot() {
  apply(document);
  wireTabs();
  mountGate();

  window.addEventListener('langchange', () => {
    apply(document);
    mounted.clear();
    fill($('#view-train')); fill($('#view-quiz')); fill($('#view-formulas'));
    fill($('#view-progress')); fill($('#view-settings'));
    if (currentView) go(currentView);
  });

  if (signedIn()) {
    await enterApp();
  } else {
    showGate(true);
  }

  // The service worker only makes sense once the app is real; on localhost it
  // would cache a build being edited and hide every change behind a hard reload.
  if ('serviceWorker' in navigator && location.hostname !== 'localhost' && location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

export async function signOut() {
  await api.logout();
  await wipeLocal();
  location.reload();
}

/** Views call this when a request fails, so one place decides what the user sees. */
export function reportError(e) {
  if (e instanceof ApiError) {
    if (e.code === 'no_key') return toast(t('err.no_key'), 4200);
    if (e.status === 401) { forget(); return location.reload(); }
    return toast(errText(e.code));
  }
  console.error(e);
  toast(t('err.generic'));
}

export { pick };

boot();
