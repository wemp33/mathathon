// Recall: the wyrywkowe sprawdzanie the user asked for.
//
// One card per formula, scheduled by FSRS-6. The card shows the *name* and asks
// for the formula, because that is the direction an exam asks in — you are told
// "pole powierzchni bryły obrotowej" and have to produce the integral, never the
// other way round.
//
// The app cannot mark a formula written from memory in your head, so it does not
// pretend to: you look, then you say whether you had it. That is the honest
// design, and self-grading is what FSRS was built for anyway.

import { api } from './api.js';
import { all, put } from './store.js';
import { t, pick, lang } from './i18n.js';
import { el, fill, toast, tap } from './ui.js';
import { tex } from './tex.js';
import { Scheduler, RATING, newCard, buildQueue } from './srs.js';
import { content, reportError } from './main.js';

const scheduler = new Scheduler();

export function mountQuiz(host) {
  const state = { cards: new Map(), queue: [], i: 0, shown: false, done: 0, running: false };

  load();
  return { refresh: () => { if (!state.running) load(); } };

  async function load() {
    const rows = await all('card');
    state.cards = new Map(rows.map((c) => [c.id, c]));
    // A formula that has never been seen gets a card the moment the deck is
    // opened, so new content appears without a separate "add to deck" step.
    for (const f of content.formulas) {
      const id = `${f.id}:recall`;
      if (!state.cards.has(id)) state.cards.set(id, { ...newCard(f.id, 'recall'), formulaId: f.id });
    }
    renderStart();
  }

  function due() {
    return buildQueue([...state.cards.values()], { newPerDay: 15, maxReviews: 120 });
  }

  function renderStart() {
    const q = due();
    fill(host,
      el('div.card', {},
        el('h2', {}, t('quiz.title')),
        el('p', {}, t('quiz.sub')),
        el('div.row.wrap', {},
          el('span.pill' + (q.length ? '' : '.ok'), {}, q.length ? t('quiz.due', { n: q.length }) : t('quiz.none')),
          el('span.pill', {}, `${content.formulas.length} ${lang() === 'pl' ? 'wzorów' : 'formulas'}`)),
        q.length
          ? el('button.btn.primary.wide', { onclick: () => start(q) }, t('quiz.start'))
          : el('button.btn.wide', {
            onclick: () => start([...state.cards.values()].sort(() => Math.random() - 0.5).slice(0, 20)),
          }, t('quiz.anyway'))));
  }

  function start(queue) {
    if (!queue.length) return;
    state.queue = queue;
    state.i = 0;
    state.done = 0;
    state.shown = false;
    state.running = true;
    renderCard();
  }

  function formulaFor(card) {
    return content.formulas.find((f) => f.id === (card.formulaId || card.wordId));
  }

  function renderCard() {
    const card = state.queue[state.i];
    if (!card) {
      state.running = false;
      toast(t('quiz.done', { n: state.done }));
      return renderStart();
    }
    const f = formulaFor(card);
    if (!f) { state.i++; return renderCard(); }

    const topic = content.topics.get(f.topicId);

    fill(host,
      el('div.card', {},
        el('div.row.between', {},
          el('span.pill', {}, pick(topic?.title) || '—'),
          el('small', {}, `${state.i + 1} / ${state.queue.length}`)),
        el('h2', {}, pick(f.name)),

        state.shown
          ? el('div.formula', { html: tex(f.tex, { display: true }) })
          : el('button.btn.wide', { onclick: () => { state.shown = true; tap(); renderCard(); } }, t('quiz.show')),

        state.shown && pick(f.note) ? el('p', { tex: pick(f.note) }) : null,

        state.shown
          ? el('div.row.wrap', {},
            grade(card, RATING.AGAIN, 'quiz.again', 'bad'),
            grade(card, RATING.HARD, 'quiz.hard', 'warn'),
            grade(card, RATING.GOOD, 'quiz.good', ''),
            grade(card, RATING.EASY, 'quiz.easy', 'ok'))
          : null,

        state.shown
          ? el('button.btn.quiet.wide', { onclick: () => explain(f) }, t('quiz.explain'))
          : null));
  }

  function grade(card, rating, key, tone) {
    return el(`button.btn.sm.grow${tone ? '' : ''}`, {
      style: tone ? { borderColor: `var(--${tone})`, color: `var(--${tone})` } : null,
      onclick: async () => {
        tap();
        const out = scheduler.review(card, rating);
        const next = out.card || out;
        state.cards.set(next.id, { ...next, formulaId: card.formulaId || card.wordId });
        await put('card', next.id, state.cards.get(next.id));
        state.done++;
        state.i++;
        state.shown = false;
        renderCard();
      },
    }, t(key));
  }

  async function explain(f) {
    const host2 = el('div.card', {}, el('div.skeleton'), el('div.skeleton', { style: { width: '80%' } }));
    host.append(host2);
    try {
      const out = await api.explain(f.id, lang());
      fill(host2,
        section('formulas.idea', out.idea),
        list('formulas.derivation', out.derivation),
        section('formulas.when', out.whenToUse),
        section('formulas.trap', out.trap),
        section('formulas.example', out.example));
    } catch (e) { host2.remove(); reportError(e); }
  }
}

export const section = (key, body) => (pick(body)
  ? el('div', {}, el('div.sect-label', {}, t(key)), el('div', { tex: pick(body) }))
  : null);

export const list = (key, items) => (items?.length
  ? el('div', {}, el('div.sect-label', {}, t(key)),
    el('ol', { style: { margin: 0, paddingLeft: '20px' } },
      items.map((s) => el('li', { tex: pick(s), style: { marginBottom: '4px' } }))))
  : null);
