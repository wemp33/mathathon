// Settings: language, the API key, the pen, the account.

import { api, user } from './api.js';
import { sync, getMeta } from './store.js';
import { t, lang, setLang } from './i18n.js';
import { el, fill, toast, busy, ago, keypad } from './ui.js';
import { signOut, reportError } from './main.js';

export function mountSettings(host) {
  render();
  return { refresh: render };

  async function render() {
    const me = user();
    let keys = {};
    let devices = [];
    try {
      const out = await api.me();
      keys = out.keys || {};
      devices = out.devices || [];
    } catch { /* offline: show what we can */ }

    fill(host,
      langCard(),
      keyCard(keys),
      penCard(),
      await syncCard(),
      accountCard(me, devices),
      await usageCard());
  }

  function langCard() {
    return el('div.card', {},
      el('div.sect-label', {}, t('settings.lang')),
      el('div.seg', {}, ...[['pl', 'Polski'], ['en', 'English']].map(([code, label]) =>
        el(`button${lang() === code ? '.on' : ''}`, { onclick: () => setLang(code) }, label))));
  }

  function keyCard(keys) {
    const present = keys.anthropic?.present;
    const input = el('input', {
      type: 'text', placeholder: t('settings.keyPh'),
      autocapitalize: 'off', autocorrect: 'off', spellcheck: false,
    });
    const save = el('button.btn.primary.wide', {
      onclick: async () => {
        const v = input.value.trim();
        if (!v) return;
        const done = busy(save, '…');
        try {
          const out = await api.setKey(v);
          input.value = '';
          toast(t('settings.keyPresent', { tail: out.tail }));
          render();
        } catch (e) { reportError(e); } finally { done(); }
      },
    }, t('settings.keySave'));

    return el('div.card', {},
      el('div.sect-label', {}, t('settings.key')),
      present
        ? el('div.row.between', {},
          el('span.pill.ok', {}, t('settings.keyPresent', { tail: keys.anthropic.tail })),
          el('button.btn.sm.danger', {
            onclick: async () => { await api.clearKey(); render(); },
          }, t('settings.keyRemove')))
        : null,
      el('p', { style: { fontSize: '13.5px', color: 'var(--muted)' } }, t('settings.keyHelp')),
      input, save);
  }

  function penCard() {
    const penOnly = localStorage.getItem('mathathon.penOnly') === '1';
    const guides = localStorage.getItem('mathathon.guides') || 'ruled';
    return el('div.card', {},
      el('div.sect-label', {}, t('settings.penOnly')),
      el('div.row.between', {},
        el('span.grow', { style: { fontSize: '13.5px', color: 'var(--muted)' } }, t('settings.penOnlyHelp')),
        el('button.btn.sm' + (penOnly ? '.primary' : '.ghost'), {
          onclick: () => { localStorage.setItem('mathathon.penOnly', penOnly ? '0' : '1'); render(); },
        }, penOnly ? 'ON' : 'OFF')),
      el('div.sect-label', { style: { marginTop: '12px' } }, t('settings.guides')),
      el('div.seg', {}, ...[['ruled', 'settings.guides.ruled'], ['grid', 'settings.guides.grid'], ['dots', 'settings.guides.dots'], ['none', 'settings.guides.none']]
        .map(([v, key]) => el(`button${guides === v ? '.on' : ''}`, {
          onclick: () => { localStorage.setItem('mathathon.guides', v); render(); },
        }, t(key)))));
  }

  async function syncCard() {
    const at = await getMeta('lastSync', 0);
    return el('div.card', {},
      el('div.row.between', {},
        el('div', {}, el('div.sect-label', { style: { margin: 0 } }, t('settings.sync')),
          el('small', {}, at ? ago(at, lang()) : '—')),
        el('button.btn.sm', { onclick: async () => { await sync(); toast(t('sync.ok')); render(); } }, t('settings.syncNow'))));
  }

  function accountCard(me, devices) {
    return el('div.card', {},
      el('div.sect-label', {}, t('settings.account')),
      el('div.row.between', {}, el('strong', {}, me?.nickname || '—')),
      devices.length
        ? el('div', {},
          el('div.sect-label', { style: { marginTop: '10px' } }, t('settings.devices')),
          el('div.stack', {}, devices.slice(0, 6).map((d) =>
            el('div.row.between', {},
              el('small.grow', {}, d.device || '—'),
              el('small', {}, ago(new Date(d.last_used_at).getTime(), lang()))))))
        : null,
      el('div.row.wrap', { style: { marginTop: '12px' } },
        el('button.btn.sm.ghost', { onclick: changeCode }, t('settings.changeCode')),
        el('button.btn.sm.danger', { onclick: signOut }, t('settings.logout'))));
  }

  function changeCode() {
    const dots = (id) => el('div.dots', { id }, el('i'), el('i'), el('i'), el('i'));
    const padNode = () => el('div.pad', {},
      ...'123456789'.split('').map((d) => el('button', {}, d)),
      el('button.wide', { dataset: { k: 'back' } }, t('pad.back')),
      el('button', {}, '0'));

    const curDots = dots();
    const curPad = padNode();
    const newDots = dots();
    const newPad = padNode();
    const step2 = el('div', { hidden: true }, el('p', {}, t('gate.setCode')), newDots, newPad);
    let currentCode = '';

    const box = el('div.card', {},
      el('div.sect-label', {}, t('settings.changeCode')),
      el('div', {}, el('p', {}, t('gate.enterCode')), curDots, curPad),
      step2);
    host.prepend(box);
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });

    keypad({
      padEl: curPad,
      dotsEl: curDots,
      onComplete: (code) => { currentCode = code; step2.hidden = false; },
    });
    keypad({
      padEl: newPad,
      dotsEl: newDots,
      onComplete: async (code) => {
        try {
          await api.changeCode(currentCode, code);
          toast(t('settings.changeCode'));
          // Every device signs in again, including this one.
          setTimeout(() => location.reload(), 900);
        } catch (e) { reportError(e); box.remove(); }
      },
    });
  }

  async function usageCard() {
    let days = [];
    try { days = (await api.usage()).days || []; } catch { return null; }
    if (!days.length) return null;

    const totals = {};
    for (const d of days) totals[d.kind] = (totals[d.kind] || 0) + d.amount;

    const rows = [
      ['claude_in', lang() === 'pl' ? 'tokeny wejściowe' : 'input tokens'],
      ['claude_out', lang() === 'pl' ? 'tokeny wyjściowe' : 'output tokens'],
      ['critiques', lang() === 'pl' ? 'odczytów pisma' : 'handwriting reads'],
      ['marks', lang() === 'pl' ? 'sprawdzeń' : 'markings'],
      ['generated', lang() === 'pl' ? 'wygenerowanych zadań' : 'generated problems'],
    ].filter(([k]) => totals[k]);

    // Opus 5 list price, so the figure means something rather than being a
    // token count nobody can convert in their head.
    const cost = ((totals.claude_in || 0) / 1e6) * 5 + ((totals.claude_out || 0) / 1e6) * 25;

    return el('div.card', {},
      el('div.sect-label', {}, t('settings.usage')),
      el('div.stack', {}, rows.map(([k, label]) =>
        el('div.row.between', {}, el('small.grow', {}, label), el('small', {}, totals[k].toLocaleString())))),
      el('div.row.between', { style: { marginTop: '8px', paddingTop: '8px', borderTop: '1px solid var(--line)' } },
        el('small.grow', {}, lang() === 'pl' ? 'szacunkowy koszt' : 'estimated cost'),
        el('strong', {}, `$${cost.toFixed(2)}`)));
  }
}
