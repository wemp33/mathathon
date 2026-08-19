// Progress.
//
// The number on this screen is not "percent of problems you got right" — that
// rises just by choosing easy problems, and it never falls. It is the model's
// estimate of the chance you solve a problem at the target level *right now*,
// which goes down when you avoid a topic and cannot be farmed. The screen says
// so out loud, because a mastery figure nobody understands is decoration.
//
// Where the estimate is weak the bar is hatched rather than solid: drawing a
// crisp 78% after four attempts would be a lie told in a nice font.

import { api } from './api.js';
import { t, pick, lang } from './i18n.js';
import { el, fill, bar, spark, pct } from './ui.js';
import { content, reportError, go } from './main.js';

export function mountProgress(host) {
  render();
  return { refresh: render };

  async function render() {
    fill(host, el('div.card', {}, el('div.skeleton'), el('div.skeleton', { style: { width: '60%' } })));

    let data;
    try { data = await api.progress(); } catch (e) { return reportError(e); }

    const topics = (data.topics || []).map((tp) => ({ ...tp, meta: content.topics.get(tp.topicId) }));
    const touched = topics.filter((tp) => tp.attempts > 0);

    if (!touched.length) {
      return fill(host, el('div.card', {},
        el('h2', {}, t('progress.title')),
        el('p', {}, t('progress.sub')),
        el('div.empty', {},
          el('img.mark', { src: '/icons/mark.svg', alt: '' }),
          el('p', {}, t('progress.nothing')),
          el('button.btn.primary', { onclick: () => go('train') }, t('train.start')))));
    }

    const weakest = [...touched].sort((a, b) => a.pct - b.pct).slice(0, 5);
    const skillById = new Map((data.skills || []).map((s) => [s.skillId, s]));

    // "Going stale" is the honest half of the model: skills you knew, whose
    // estimate has widened because nothing has tested them in weeks.
    const stale = (data.skills || [])
      .filter((s) => s.attempts >= 3 && !s.confident)
      .sort((a, b) => b.attempts - a.attempts)
      .slice(0, 5);

    const byModule = new Map();
    for (const tp of topics) {
      const key = tp.moduleId || tp.meta?.moduleId || '—';
      if (!byModule.has(key)) byModule.set(key, []);
      byModule.get(key).push(tp);
    }

    fill(host,
      el('div.card', {},
        el('h2', {}, t('progress.title')),
        el('p', { style: { color: 'var(--muted)', fontSize: '14px' } }, t('progress.sub'))),

      weakest.length ? el('div.card', {},
        el('div.sect-label', {}, t('progress.weakest')),
        el('div.stack', {}, weakest.map((tp) => topicRow(tp)))) : null,

      stale.length ? el('div.card', {},
        el('div.sect-label', {}, t('progress.stale')),
        el('div.stack', {}, stale.map((s) => el('div.row.between', {},
          el('span.grow', {}, pick(content.skills.get(s.skillId)?.title) || s.skillId),
          spark(s.history),
          el('span.pill.warn', {}, t('progress.unsure')))))) : null,

      ...[...byModule.entries()].map(([modId, list]) => {
        const mod = content.modules.find((m) => m.id === modId);
        const seen = list.filter((tp) => tp.attempts > 0);
        return el('div.card', {},
          el('div.row.between', {},
            el('div.sect-label', { style: { margin: 0 } }, pick(mod?.title) || modId),
            el('small', {}, `${seen.length}/${list.length}`)),
          el('div.stack', { style: { marginTop: '10px' } }, list.map((tp) => topicRow(tp))));
      }));

    function topicRow(tp) {
      const untouched = !tp.attempts;
      return el('div.topic', {},
        el('span.grow', { style: untouched ? { color: 'var(--muted)' } : null },
          pick(tp.meta?.title || tp.title) || tp.topicId),
        el('span.pct', { style: untouched ? { color: 'var(--muted)', fontWeight: '400' } : null },
          untouched ? '—' : pct(tp.pct)),
        bar({ pct: untouched ? 0 : tp.pct, confident: tp.confident && !untouched }),
        el('small', { style: { gridColumn: '1 / -1' } },
          untouched ? t('progress.never')
            : `${t('progress.attempts', { n: tp.attempts })}${tp.confident ? '' : ` · ${t('progress.unsure')}`}`));
    }
  }
}
