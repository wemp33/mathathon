// The formula sheet: everything, searchable, grouped the way the syllabus is.
//
// This is the screen that gets opened in a hurry the night before, so it opens
// from the local cache with no network and the search runs on every keystroke
// over the whole set rather than behind a request.

import { api } from './api.js';
import { t, pick, lang } from './i18n.js';
import { el, fill, fold } from './ui.js';
import { tex } from './tex.js';
import { content, reportError } from './main.js';
import { section, list } from './quiz.js';

export function mountFormulas(host) {
  let query = '';

  render();
  return { refresh: render };

  function matches(f, topic, mod) {
    if (!query) return true;
    const q = query.toLowerCase();
    return [pick(f.name), f.tex, pick(f.note), pick(topic.title), pick(mod.title)]
      .some((s) => String(s).toLowerCase().includes(q));
  }

  function formulaCard(f, topic) {
    const body = el('div', {},
      el('div.row.between', {},
        el('strong', {}, pick(f.name)),
        f.drill !== false ? el('span.pill.ok', {}, t('formulas.drill')) : null),
      el('div.formula', { html: tex(f.tex, { display: true }) }),
      pick(f.note) ? el('div.note', { tex: pick(f.note), style: { fontSize: '13.5px', color: 'var(--muted)' } }) : null,
      el('button.btn.sm.quiet', {
        onclick: async (e) => {
          const btn = e.target;
          btn.disabled = true;
          const slot = el('div');
          btn.after(slot);
          fill(slot, el('div.skeleton'), el('div.skeleton', { style: { width: '75%' } }));
          try {
            const out = await api.explain(f.id, lang());
            fill(slot,
              section('formulas.idea', out.idea),
              list('formulas.derivation', out.derivation),
              section('formulas.when', out.whenToUse),
              section('formulas.trap', out.trap),
              section('formulas.example', out.example));
            btn.remove();
          } catch (err) { slot.remove(); btn.disabled = false; reportError(err); }
        },
      }, t('formulas.explain')));
    body.style.paddingTop = '4px';
    return body;
  }

  function render() {
    const search = el('input', {
      type: 'search', value: query, placeholder: t('formulas.search'),
      autocapitalize: 'off', autocorrect: 'off', spellcheck: false,
      oninput: (e) => { query = e.target.value; paintList(); },
    });

    const listHost = el('div.stack');
    fill(host,
      el('div.card', {}, el('h2', {}, t('formulas.title')), search),
      listHost);

    function paintList() {
      const blocks = [];
      for (const mod of content.modules) {
        const topics = [];
        for (const topic of mod.topics) {
          const hits = (topic.formulas || []).filter((f) => matches(f, topic, mod));
          if (!hits.length) continue;
          topics.push(el('div.card.flat', {},
            el('div.sect-label', {}, pick(topic.title)),
            el('div.stack', {}, hits.map((f) => formulaCard(f, topic)))));
        }
        if (!topics.length) continue;
        blocks.push(el('div.card', {},
          fold(`${pick(mod.title)}  ·  ${topics.length}`, () => el('div.stack', { style: { marginTop: '10px' } }, topics),
            { open: Boolean(query) })));
      }
      fill(listHost, blocks.length ? blocks : el('div.empty', {}, t('formulas.empty')));
    }

    paintList();
    // Keep focus while typing — re-rendering the list must not steal the caret.
    if (query) search.focus();
  }
}
