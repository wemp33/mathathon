// Practice: get a problem, work it by hand, have it read and marked.
//
// The live checking is the part with the interesting constraint. Re-reading the
// whole page on every stroke would be expensive and would make the marks
// flicker under the pen, so a check fires only when the pen has been still for
// a moment AND there is genuinely new ink since the last one — and the previous
// reading is sent back with it so unchanged lines are transcribed identically.

import { api } from './api.js';
import { put, all } from './store.js';
import { t, pick, lang } from './i18n.js';
import { el, fill, clear, toast, busy, tap } from './ui.js';
import { prose, tex } from './tex.js';
import { InkSurface, INKS, makeScribbleWatcher } from './ink.js';
import { plotExpr } from './plot.js';
import { content, reportError } from './main.js';

const PAUSE_MS = 1800;        // how long the pen must rest before a live check
const MIN_NEW_STROKES = 2;    // and how much new ink is worth a call

export function mountTrain(host) {
  const state = {
    track: localStorage.getItem('mathathon.track') || '',
    topicId: localStorage.getItem('mathathon.topic') || '',
    problem: null,
    verdict: null,
    ink: null,
    live: localStorage.getItem('mathathon.live') !== '0',
    snap: localStorage.getItem('mathathon.snap') === '1',
    checking: false,
    lastCheckedStrokes: 0,
    chat: [],
    recorded: false,
  };

  const view = { refresh: () => {} };
  render();
  return view;

  /* ── scope ── */

  function scopeBar() {
    const seg = el('div.seg', {},
      ...[['', 'train.all'], ['matura', 'train.matura'], ['calculus', 'train.calculus']].map(([v, key]) =>
        el(`button${state.track === v ? '.on' : ''}`, {
          onclick: () => { state.track = v; state.topicId = ''; localStorage.setItem('mathathon.track', v); render(); },
        }, t(key))));

    const topics = [...content.topics.values()]
      .filter((tp) => (!state.track || tp.track === state.track) && tp.problemCount > 0);

    const select = el('select', {
      style: { width: '100%', minHeight: '44px', padding: '10px 13px', borderRadius: '11px', border: '1px solid var(--line-2)', background: 'var(--panel)' },
      onchange: (e) => { state.topicId = e.target.value; localStorage.setItem('mathathon.topic', e.target.value); },
    },
    el('option', { value: '' }, t('train.pick')),
    ...topics.map((tp) => el('option', { value: tp.id, selected: tp.id === state.topicId }, pick(tp.title))));

    return el('div.card', {}, el('div.sect-label', {}, t('train.title')), seg, topics.length ? select : null);
  }

  /* ── the problem ── */

  async function nextProblem() {
    try {
      const out = await api.next({
        track: state.track || undefined,
        topicId: state.topicId || undefined,
        count: 1,
      });
      state.problem = out.problems[0];
      state.verdict = null;
      state.chat = [];
      state.recorded = false;
      state.lastCheckedStrokes = 0;
      render();
    } catch (e) {
      if (e.code === 'no_problems') return toast(t('train.noProblems'), 5000);
      reportError(e);
    }
  }

  async function generateProblem() {
    if (!state.topicId) return toast(t('train.pick'));
    const topic = content.topics.get(state.topicId);
    const recent = (await all('attempt')).slice(0, 8).map((a) => a.promptText).filter(Boolean);
    try {
      const p = await api.generate({
        topicId: state.topicId,
        skillId: topic?.skills?.[0]?.id,
        level: Math.round(topic?.level ?? 3),
        avoid: recent,
        lang: lang(),
      });
      // A generated problem has no id on the server, so it is marked by the
      // typed-answer path rather than the authored-problem path.
      state.problem = { ...p, id: null, generated: true, topicId: state.topicId, skill: topic?.skills?.[0]?.id };
      state.verdict = null;
      state.chat = [];
      state.recorded = false;
      render();
    } catch (e) { reportError(e); }
  }

  function problemCard() {
    if (!state.problem) {
      return el('div.card', {},
        el('div.empty', {},
          el('img.mark', { src: '/icons/mark.svg', alt: '' }),
          el('p', {}, content.problemCount() ? t('train.pick') : t('train.noProblems'))),
        el('button.btn.primary.wide', { onclick: nextProblem }, t('train.start')),
        el('button.btn.quiet.wide', { onclick: generateProblem }, t('train.generate')));
    }

    const p = state.problem;
    return el('div.card', {},
      el('div.row.between', {},
        el('span.pill', {}, t('train.level', { n: p.level ?? '?' })),
        el('span.pill', {}, pick(content.topics.get(p.topicId)?.title) || '—')),
      el('div', { tex: pick(p.prompt), style: { fontSize: '17px' } }),
      el('div.row.wrap', {},
        el('button.btn.sm', { onclick: nextProblem }, t('train.another')),
        el('button.btn.sm.ghost', { onclick: generateProblem }, t('train.generate'))));
  }

  /* ── the paper ── */

  function paper() {
    const wrap = el('div.paper');
    const guides = el('canvas.guides');
    const dry = el('canvas.dry');
    const wet = el('canvas.wet');
    const marks = el('div.marks');
    wrap.append(guides, dry, wet, marks);

    // The surface is created after the node is in the document, or it measures
    // a zero-sized box and paints nothing.
    queueMicrotask(() => {
      state.ink?.destroy();
      const surface = new InkSurface({ wrap, dry, wet, guides }, {
        penOnly: localStorage.getItem('mathathon.penOnly') === '1',
        guideStyle: localStorage.getItem('mathathon.guides') || 'ruled',
        snapShapes: state.snap,
        onSnap: (kind) => { tap(14); toast(t(`train.snapped.${kind}`)); },
        onStrokeEnd: (stroke, s) => { watcher(stroke); scheduleLive(s); },
        onChange: () => savePage(),
      });
      surface.colour = INKS[0];
      state.ink = surface;
    });

    const watcher = makeScribbleWatcher(() => {
      toast(lang() === 'pl'
        ? 'Scribble przechwytuje pióro — wyłącz go w Ustawieniach iPada.'
        : 'Scribble is swallowing the pen — turn it off in iPad Settings.', 5000);
    });

    return wrap;
  }

  function tools() {
    const swatches = INKS.map((c, i) => el(`button.swatch${i === 0 ? '.on' : ''}`, {
      style: { background: c },
      onclick: (e) => {
        state.ink.colour = c;
        state.ink.erasing = false;
        for (const s of e.target.parentElement.querySelectorAll('.swatch')) s.classList.remove('on');
        e.target.classList.add('on');
        tap();
      },
    }));

    const eraser = el('button.btn.sm.ghost', {
      onclick: (e) => {
        state.ink.erasing = !state.ink.erasing;
        e.target.classList.toggle('primary', state.ink.erasing);
        tap();
      },
    }, t('train.erase'));

    // Hold-to-snap is off while writing and on while drawing figures: the same
    // gesture that cleans up a circle would mangle a hastily written 0.
    const snapToggle = el('button.btn.sm' + (state.snap ? '.primary' : '.ghost'), {
      onclick: (e) => {
        state.snap = !state.snap;
        localStorage.setItem('mathathon.snap', state.snap ? '1' : '0');
        if (state.ink) state.ink.snapShapes = state.snap;
        e.target.classList.toggle('primary', state.snap);
        e.target.classList.toggle('ghost', !state.snap);
        toast(t(state.snap ? 'train.snapOn' : 'train.snapOff'));
      },
    }, t('train.snap'));

    const liveToggle = el('button.btn.sm' + (state.live ? '.primary' : '.ghost'), {
      onclick: (e) => {
        state.live = !state.live;
        localStorage.setItem('mathathon.live', state.live ? '1' : '0');
        e.target.classList.toggle('primary', state.live);
        e.target.classList.toggle('ghost', !state.live);
      },
    }, t('train.live'));

    return el('div.tools', {},
      ...swatches,
      eraser,
      snapToggle,
      el('button.btn.sm.ghost', { onclick: () => state.ink?.undo() }, t('train.undo')),
      el('button.btn.sm.ghost', {
        onclick: () => { state.ink?.clearInk(); state.verdict = null; state.lastCheckedStrokes = 0; renderVerdict(); },
      }, t('train.clear')),
      el('span.grow'),
      liveToggle);
  }

  /* ── checking ── */

  let liveTimer = null;

  function scheduleLive(surface) {
    if (!state.live || !state.problem) return;
    clearTimeout(liveTimer);
    liveTimer = setTimeout(() => {
      const grown = surface.strokes.length - state.lastCheckedStrokes;
      if (grown >= MIN_NEW_STROKES && !state.checking) check({ silent: true });
    }, PAUSE_MS);
  }

  async function check({ silent = false } = {}) {
    if (!state.problem || !state.ink || state.ink.isEmpty() || state.checking) return;
    state.checking = true;
    state.lastCheckedStrokes = state.ink.strokes.length;
    renderVerdict();

    try {
      const blob = await state.ink.toCritiquePNG();
      if (!blob) { state.checking = false; return; }
      const png = await blobToBase64(blob);

      // A generated problem is not in the server's bank, so it travels inline.
      state.verdict = await api.critique(
        state.problem.id, png, state.verdict, lang(),
        state.problem.id ? undefined : state.problem,
      );
      await recordIfFinished();
    } catch (e) {
      if (!silent) reportError(e);
    } finally {
      state.checking = false;
      renderVerdict();
    }
  }

  async function recordIfFinished() {
    const v = state.verdict;
    if (!v || !v.complete || state.recorded || !state.problem?.skill) return;
    state.recorded = true;
    const score = typeof v.score === 'number' ? v.score : (v.answerCorrect ? 1 : 0);
    try {
      await api.record(state.problem.skill, state.problem.level ?? 3, score);
    } catch { /* the attempt below is still the durable record */ }
    await put('attempt', `${state.problem.id || 'gen'}-${Date.now()}`, {
      problemId: state.problem.id,
      promptText: pick(state.problem.prompt).slice(0, 160),
      skill: state.problem.skill,
      level: state.problem.level,
      score,
      correct: v.answerCorrect === true,
      at: Date.now(),
      lines: (v.lines || []).length,
      ink: state.ink?.toJSON(),
    });
  }

  function savePage() {
    if (!state.problem || !state.ink) return;
    clearTimeout(savePage.timer);
    savePage.timer = setTimeout(() => {
      put('page', `p-${state.problem.id || 'gen'}`, { problemId: state.problem.id, ink: state.ink.toJSON(), at: Date.now() });
    }, 2500);
  }

  /* ── the verdict ── */

  const verdictHost = el('div');

  function renderVerdict() {
    const v = state.verdict;

    if (state.checking && !v) {
      return fill(verdictHost, el('div.card', {},
        el('div.row', {}, el('span.pill', {}, t('train.checking'))),
        el('div.skeleton'), el('div.skeleton', { style: { width: '70%' } })));
    }
    if (!v) return fill(verdictHost);

    if (!v.readable) {
      return fill(verdictHost, el('div.card', {},
        el('div.row', {}, el('span.pill.warn', {}, t('train.unreadable'))),
        el('p', { tex: pick(v.unreadableWhy) })));
    }

    const status = v.complete
      ? (v.answerCorrect ? el('span.pill.ok', {}, t('train.correct'))
        : v.score >= 0.5 ? el('span.pill.warn', {}, t('train.partial'))
          : el('span.pill.bad', {}, t('train.wrong')))
      : el('span.pill', {}, t('train.inProgress'));

    const lines = el('div.lines', {}, (v.lines || []).map((ln, i) =>
      el(`div.ln.${ln.verdict}`, {},
        el('span.dot'),
        el('div.grow', {},
          el('div', { html: tex(ln.tex || '') }),
          pick(ln.note) ? el('div.note', { tex: pick(ln.note) }) : null),
        el('small', {}, String(i + 1)))));

    return fill(verdictHost, el('div.card', {},
      el('div.row.between', {},
        status,
        el('small', {}, t('train.confidence', { n: Math.round((v.confidence ?? 0) * 100) }))),
      lines,
      v.firstErrorLine >= 0
        ? el('div.card.flat', {},
          el('div.sect-label', {}, t('train.firstError', { n: v.firstErrorLine + 1 })),
          el('p', { tex: pick(v.diagnosis) }))
        : el('span.pill.ok', {}, t('train.allOk')),
      v.hint && pick(v.hint)
        ? el('details', {}, el('summary', { style: { cursor: 'pointer', minHeight: '36px', display: 'flex', alignItems: 'center' } }, t('train.hint')),
          el('p', { tex: pick(v.hint), style: { marginTop: '8px' } }))
        : null));
  }

  /* ── typed answer, for when the pen is not to hand ── */

  function typed() {
    const input = el('input', { type: 'text', autocapitalize: 'off', autocorrect: 'off', spellcheck: false, placeholder: t('train.answerPh') });
    const btn = el('button.btn.wide', {
      onclick: async () => {
        if (!state.problem || !input.value.trim()) return;
        const done = busy(btn, t('train.checking'));
        try {
          const out = await api.mark(
            state.problem.id, input.value.trim(), lang(),
            state.problem.id ? undefined : state.problem,
          );
          state.verdict = {
            readable: true, lines: [], firstErrorLine: out.correct ? -1 : 0,
            diagnosis: out.correct ? out.verdict : out.whatWentWrong,
            hint: { pl: '', en: '' }, complete: true,
            finalAnswer: input.value.trim(), answerCorrect: out.correct,
            score: out.score, confidence: 1, unreadableWhy: { pl: '', en: '' },
          };
          await recordIfFinished();
          renderVerdict();
        } catch (e) { reportError(e); } finally { done(); }
      },
    }, t('train.submit'));

    return el('details.card', {},
      el('summary', { style: { cursor: 'pointer', minHeight: '36px', display: 'flex', alignItems: 'center', fontWeight: '550' } }, t('train.typed')),
      el('div.stack', { style: { marginTop: '10px' } }, input, btn));
  }

  /* ── the tutor ── */

  function chat() {
    const log = el('div.stack');
    const sugg = el('div.suggests');
    const input = el('input', { type: 'text', placeholder: t('train.ask') });

    const paint = () => {
      fill(log, state.chat.map((m) => el(`div.msg.${m.role === 'assistant' ? 'them' : 'me'}`, { tex: m.text })));
      log.scrollTop = log.scrollHeight;
    };

    const say = async (text) => {
      if (!text.trim()) return;
      state.chat.push({ role: 'user', text: text.trim() });
      input.value = '';
      paint();
      try {
        const out = await api.tutor({
          history: state.chat,
          problemId: state.problem?.id || undefined,
          verdict: state.verdict || undefined,
          skillId: state.problem?.skill,
          lang: lang(),
        });
        state.chat.push({ role: 'assistant', text: pick(out.reply) });
        paint();
        // The tutor can hand back expressions worth seeing; a wrong expression
        // must not take the chat down, so plotting failures just skip the chart.
        if (out.chart?.length) {
          try {
            const [xMin, xMax] = out.chartRange?.length === 2 ? out.chartRange : [-6, 6];
            const holder = el('div.card.flat', {}, plotExpr(out.chart.slice(0, 3), { xMin, xMax, height: 300 }));
            log.append(holder);
            log.scrollTop = log.scrollHeight;
          } catch { /* unparseable expression — no chart */ }
        }
        fill(sugg, (out.suggestions || []).map((s) =>
          el('button', { onclick: () => say(pick(s)) }, pick(s))));
        if (out.revealedAnswer) {
          // Once the answer has been handed over the attempt is no longer
          // evidence of ability, so it stops counting toward the rating.
          state.recorded = true;
          toast(lang() === 'pl' ? 'Ta próba nie liczy się do postępu.' : "This attempt no longer counts toward progress.");
        }
      } catch (e) { reportError(e); }
    };

    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') say(input.value); });

    if (!state.chat.length) {
      fill(sugg, [
        { pl: 'Nie wiem jak zacząć', en: "I don't know how to start" },
        { pl: 'Sprawdź moje rozwiązanie', en: 'Check my working' },
        { pl: 'Podpowiedz mi', en: 'Give me a hint' },
      ].map((s) => el('button', { onclick: () => say(pick(s)) }, pick(s))));
    }
    paint();

    return el('div.card', {}, el('div.sect-label', {}, t('train.ask')), log, sugg, input);
  }

  /* ── assembly ── */

  function render() {
    const checkBtn = el('button.btn.primary.wide', {
      onclick: () => check(),
    }, t('train.check'));

    fill(host,
      scopeBar(),
      problemCard(),
      state.problem ? paper() : null,
      state.problem ? tools() : null,
      state.problem ? checkBtn : null,
      verdictHost,
      state.problem ? typed() : null,
      state.problem ? chat() : null);

    renderVerdict();
  }
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(',')[1]);
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });
}
