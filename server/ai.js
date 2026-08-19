// The part that watches you work.
//
// Four jobs, deliberately kept apart because they want different things:
//
//   mark()      — is this answer right? Correctness only. Opus, high effort.
//   critique()  — read the handwriting, find the FIRST wrong line, say why.
//   generate()  — invent a fresh problem at a target difficulty.
//   tutor()     — talk about it, and suggest what to write next.
//
// The rule that matters most is the same one Lingvisto learned the hard way:
// **the model must be allowed to say it cannot read something.** A vision model
// asked to transcribe unreadable handwriting will produce beautiful, confident,
// wrong LaTeX, and the app will then mark a correct solution as wrong — which is
// far worse than saying "nie mogę tego odczytać, napisz wyraźniej". Every
// schema below has an explicit escape hatch for that, and the prompts say so.
//
// The second rule: the marker is never the tutor. Conversation makes a model
// agreeable, and an agreeable marker says "świetnie!" to a dropped minus sign.
// mark() and critique() get their own calls with their own system prompts and
// no chat history.
import Anthropic from '@anthropic-ai/sdk';
import { keyFor } from './keys.js';
import { bumpUsage } from './db.js';

// Correctness is the product here, so the marker runs on the strongest model.
// The conversational side can run cheaper without anyone noticing.
export const MODELS = {
  mark: 'claude-opus-5',
  critique: 'claude-opus-5',
  generate: 'claude-opus-5',
  tutor: 'claude-sonnet-5',
};

const clients = new Map();

function clientFor(apiKey) {
  if (!clients.has(apiKey)) clients.set(apiKey, new Anthropic({ apiKey, maxRetries: 3 }));
  return clients.get(apiKey);
}

export async function keyPresent(userId) {
  return Boolean(await keyFor(userId, 'anthropic'));
}

/* ═══ the shared brief ════════════════════════════════════════════════════
   One large block, identical on every call of a given kind, marked with
   cache_control so it is written once and read at a tenth of the price for
   the rest of the session. Anything that varies — the problem, the ink, the
   student's history — goes in the user turn, after the breakpoint, or the
   cache never hits. */

const HOUSE_STYLE = `
You are the mathematics engine behind Mathathon, a trainer for one Polish
student working through the **matura rozszerzona** and then university analysis.

NOTATION — this is Polish mathematics, and the conventions differ from English:
  • tangent and cotangent are \\operatorname{tg} and \\operatorname{ctg}, never
    \\tan / \\cot; inverses are \\operatorname{arctg} and \\operatorname{arcctg}.
  • The quadratic discriminant is \\Delta, and "wzory Viete'a" are the standard name.
  • Intervals are written $\\langle a, b\\rangle$ for closed in school material;
    $[a,b]$ is fine at university level. Follow whichever the problem uses.
  • Decimal separator in prose is a comma; inside LaTeX use a dot.
  • All LaTeX must render in KaTeX: no \\begin{align}, no custom macros,
    no \\text outside math mode.

LANGUAGE: every human-readable field is bilingual — a \`pl\` and an \`en\`. The
Polish is primary and must be idiomatic mathematical Polish, not translated
English. The English is a faithful translation of the Polish.

STANDARD OF CORRECTNESS: a solution is correct or it is not. A dropped minus
sign, a missing $+C$, an absolute value left out of a logarithm, a forgotten
half of a $\\pm$, a domain not excluded — each of these makes an answer wrong,
and saying otherwise teaches the student that it does not matter. Be exact.
Being encouraging about a wrong answer is the one failure that is not recoverable.
`.trim();

const HONESTY = `
You may not guess. If the handwriting is genuinely unreadable, if the image is
too dark or cropped, or if you cannot follow what the student intended, say so
in the designated field and stop — do not reconstruct a plausible solution and
mark that instead. "I could not read line 3" is a useful, honest answer.
"I read line 3 as something you did not write, and it was wrong" is not.
`.trim();

/* ═══ transport ═══════════════════════════════════════════════════════════ */

/**
 * One request. `system` is an array so the long shared brief can carry a cache
 * breakpoint; everything volatile stays in `messages`.
 */
async function ask(userId, {
  model, system, messages, schema, effort = 'high', maxTokens = 8000, kind = 'ai',
}) {
  const apiKey = await keyFor(userId, 'anthropic');
  if (!apiKey) return { error: 'no_key' };

  const req = {
    model,
    max_tokens: maxTokens,
    system,
    messages,
    output_config: { effort, ...(schema ? { format: { type: 'json_schema', schema } } : {}) },
    thinking: { type: 'adaptive' },
  };

  let res;
  try {
    res = await clientFor(apiKey).messages.create(req);
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) return { error: 'key_rejected' };
    if (e instanceof Anthropic.RateLimitError) return { error: 'rate_limited' };
    if (e instanceof Anthropic.APIConnectionError) return { error: 'network' };
    if (e instanceof Anthropic.APIError) return { error: 'api_error', status: e.status, detail: e.message };
    throw e;
  }

  // Safety classifiers can decline; content is empty or partial when they do.
  if (res.stop_reason === 'refusal') return { error: 'refused', category: res.stop_details?.category ?? null };

  bumpUsage(userId, 'claude_in', res.usage.input_tokens).catch(() => {});
  bumpUsage(userId, 'claude_out', res.usage.output_tokens).catch(() => {});
  bumpUsage(userId, kind, 1).catch(() => {});

  const text = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  if (!schema) return { ok: true, text, usage: res.usage };

  try {
    return { ok: true, data: JSON.parse(text), usage: res.usage };
  } catch {
    // output_config.format guarantees valid JSON unless the response was cut off.
    return { error: res.stop_reason === 'max_tokens' ? 'truncated' : 'bad_json' };
  }
}

const cachedSystem = (...parts) => {
  const blocks = parts.filter(Boolean).map((text) => ({ type: 'text', text }));
  // The breakpoint goes on the last stable block: tools → system → messages is
  // the render order, so this caches the entire brief in one entry.
  if (blocks.length) blocks[blocks.length - 1].cache_control = { type: 'ephemeral' };
  return blocks;
};

const bilingual = (desc) => ({
  type: 'object',
  properties: { pl: { type: 'string', description: `${desc} (Polish)` }, en: { type: 'string', description: `${desc} (English)` } },
  required: ['pl', 'en'],
  additionalProperties: false,
});

/* ═══ 1. marking a typed answer ═══════════════════════════════════════════ */

const MARK_SCHEMA = {
  type: 'object',
  properties: {
    correct: { type: 'boolean', description: 'Is the answer mathematically equivalent to the expected one?' },
    equivalent: { type: 'boolean', description: 'true if it differs in form only (unsimplified, other valid branch, different but equal expression)' },
    score: { type: 'number', description: '1 fully correct; 0.7 right method with an arithmetic slip; 0.35 partial; 0 wrong or blank' },
    verdict: bilingual('One sentence: what is right or wrong'),
    whatWentWrong: bilingual('The specific error, or an empty string if none'),
    canonical: { type: 'string', description: 'The expected answer in LaTeX, no surrounding $' },
  },
  required: ['correct', 'equivalent', 'score', 'verdict', 'whatWentWrong', 'canonical'],
  additionalProperties: false,
};

const MARK_BRIEF = `
${HOUSE_STYLE}

You are marking one typed answer. Work the problem yourself first, from scratch,
BEFORE you look at what the student wrote or at any expected answer you are given
— then compare. That order matters: reading the answer first makes a wrong one
look plausible.

Mark on mathematical equivalence, not on string equality. $\\frac{1}{2}$, $0.5$
and $2^{-1}$ are the same number. $e^{x}(x-1)+C$ and $xe^{x}-e^{x}+C$ are the
same family. An unsimplified but correct answer is CORRECT — set \`equivalent\`
true and say so kindly. An answer that is only correct on part of the domain,
or that has lost a branch of a $\\pm$, is NOT correct.
`.trim();

export async function mark(userId, { problem, answer, lang = 'pl' }) {
  return ask(userId, {
    model: MODELS.mark,
    kind: 'marks',
    effort: 'high',
    maxTokens: 3000,
    schema: MARK_SCHEMA,
    system: cachedSystem(MARK_BRIEF),
    messages: [{
      role: 'user',
      content: `PROBLEM (${lang}):\n${problem.prompt?.[lang] ?? problem.prompt?.pl ?? problem.prompt}\n\n`
        + (problem.answer ? `EXPECTED ANSWER (authored, may itself be wrong — verify it):\n${problem.answer}\n`
          + (problem.accept?.length ? `ALSO ACCEPTED: ${problem.accept.join(' ; ')}\n` : '') : '')
        + `\nSTUDENT'S ANSWER:\n${answer}`,
    }],
  });
}

/* ═══ 2. reading and critiquing handwritten working ═══════════════════════ */

const CRITIQUE_SCHEMA = {
  type: 'object',
  properties: {
    readable: { type: 'boolean', description: 'false if the handwriting genuinely cannot be read — then leave lines empty and explain in unreadableWhy' },
    unreadableWhy: bilingual('If readable is false, what exactly is illegible and what the student should do'),
    lines: {
      type: 'array',
      description: 'One entry per line of working, in the order written',
      items: {
        type: 'object',
        properties: {
          tex: { type: 'string', description: 'The line transcribed to LaTeX, no surrounding $' },
          verdict: { type: 'string', enum: ['ok', 'suspect', 'wrong', 'unreadable'] },
          note: bilingual('Only when verdict is not ok: what is wrong with THIS line. Empty string otherwise'),
        },
        required: ['tex', 'verdict', 'note'],
        additionalProperties: false,
      },
    },
    firstErrorLine: { type: 'integer', description: '0-based index of the first line that is wrong; -1 if nothing is wrong' },
    diagnosis: bilingual('The single most useful sentence about the first error — name the mistake, do not just restate the line'),
    hint: bilingual('A nudge that gets them past the first error WITHOUT giving the answer or the next line'),
    complete: { type: 'boolean', description: 'Has the student actually finished, or is this working still in progress?' },
    finalAnswer: { type: 'string', description: 'The final answer as written, in LaTeX; empty string if not reached yet' },
    answerCorrect: { type: ['boolean', 'null'], description: 'null while the work is unfinished' },
    score: { type: 'number', description: '1 correct; 0.7 right method, arithmetic slip; 0.35 partial; 0 wrong. null-ish work scores 0' },
    confidence: { type: 'number', description: '0 to 1 — how sure you are that you read this correctly' },
  },
  required: ['readable', 'unreadableWhy', 'lines', 'firstErrorLine', 'diagnosis', 'hint', 'complete', 'finalAnswer', 'answerCorrect', 'score', 'confidence'],
  additionalProperties: false,
};

const CRITIQUE_BRIEF = `
${HOUSE_STYLE}

You are looking at a photograph of one student's handwritten working on a maths
problem — black ink on white, written with a stylus. Your job is what a good
tutor does when they lean over a desk: read it, find the FIRST place it goes
wrong, and say what the mistake actually is.

METHOD, in this order:
  1. Solve the problem yourself, correctly, before reading their working.
  2. Transcribe their working line by line. A "line" is one step of reasoning,
     which may be a single equation. Keep their order.
  3. Walk the lines in order and mark each: \`ok\` if it follows correctly from
     what precedes it; \`wrong\` if it does not; \`suspect\` if it is unjustified
     or risky but not yet an error (a division that assumes a non-zero
     denominator, a squaring that can add roots, a domain not yet checked);
     \`unreadable\` if you cannot make it out.
  4. **Stop diagnosing at the first \`wrong\`.** Everything after a real error is
     downstream of it, and listing five consequences of one dropped sign buries
     the thing the student needs to see. Mark later lines, but let the diagnosis
     and the hint be about the first error only.

WHAT A GOOD DIAGNOSIS IS: name the mistake. "Zgubiony minus przy przenoszeniu
$3x$ na drugą stronę" is useful. "Linia 3 jest niepoprawna" is not. If the error
is conceptual rather than arithmetic — the chain rule skipped, the constant of
integration dropped, a domain never checked — say which, because that is the
thing that will happen again.

WHAT A HINT IS: the smallest push that lets them find it themselves. Point at
the line, name the kind of thing to check, and stop. Never write the corrected
line, and never state the final answer.

${HONESTY}

A correct solution reached by an unusual route is CORRECT. Do not mark down for
not matching the expected method; mark down only for being wrong.
`.trim();

/**
 * @param {{png: string}} ink base64 PNG of the cropped, thickened ink
 */
export async function critique(userId, { problem, ink, previous = null, lang = 'pl' }) {
  const content = [
    { type: 'image', source: { type: 'base64', media_type: 'image/png', data: ink.png } },
    {
      type: 'text',
      text: `PROBLEM (${lang}):\n${problem.prompt?.[lang] ?? problem.prompt?.pl ?? problem.prompt}\n\n`
        + (problem.answer ? `EXPECTED ANSWER (authored — verify it yourself, it can be wrong):\n${problem.answer}\n\n` : '')
        + (previous?.lines?.length
          // Live checking re-reads the whole page every few seconds. Handing back
          // the previous transcription keeps the earlier lines stable, so the
          // marks under the student's pen stop flickering as they write.
          ? `YOUR PREVIOUS READING of this same page (keep unchanged lines identical; `
            + `only re-read what has changed or been added):\n`
            + previous.lines.map((l, i) => `${i}. [${l.verdict}] ${l.tex}`).join('\n')
          : ''),
    },
  ];

  return ask(userId, {
    model: MODELS.critique,
    kind: 'critiques',
    effort: 'high',
    maxTokens: 8000,
    schema: CRITIQUE_SCHEMA,
    system: cachedSystem(CRITIQUE_BRIEF),
    messages: [{ role: 'user', content }],
  });
}

/* ═══ 3. generating a fresh problem ═══════════════════════════════════════ */

const GENERATE_SCHEMA = {
  type: 'object',
  properties: {
    prompt: bilingual('The problem statement, exam-realistic, inline maths in $…$'),
    answer: { type: 'string', description: 'The canonical answer in LaTeX, no surrounding $' },
    accept: { type: 'array', items: { type: 'string' }, description: 'Other correct forms' },
    solution: { type: 'array', items: bilingual('One step of the worked solution') },
    trap: bilingual('The specific mistake this problem is built to catch'),
    level: { type: 'integer', description: 'The difficulty band you actually hit, 1-6' },
  },
  required: ['prompt', 'answer', 'accept', 'solution', 'trap', 'level'],
  additionalProperties: false,
};

const GENERATE_BRIEF = `
${HOUSE_STYLE}

You are writing one new problem. It must be:
  • **Solvable**, with an answer you have actually computed — work it through
    completely before you write the statement down, and again afterwards to
    check the statement says what you meant.
  • **Exam-realistic**: the phrasing a Polish matura paper or a university
    analysis sheet would really use. Not "znajdź x". Give it the context,
    the constraints, and the precision an exam would.
  • **At the requested difficulty**, judged by how much has to go right, not by
    how big the numbers are. Ugly arithmetic is not difficulty.
  • **Different** from the problems listed as recently seen — a new surface, not
    the same problem with the coefficients changed.

Each problem should have a point: one specific thing it is testing, and one
specific mistake it punishes. Say what that mistake is in \`trap\`.
`.trim();

export async function generate(userId, { topic, skill, level, avoid = [], calibration = [], lang = 'pl' }) {
  return ask(userId, {
    model: MODELS.generate,
    kind: 'generated',
    effort: 'high',
    maxTokens: 4000,
    schema: GENERATE_SCHEMA,
    system: cachedSystem(GENERATE_BRIEF),
    messages: [{
      role: 'user',
      content: `TOPIC: ${topic?.title?.pl ?? topic?.id ?? '—'}\n`
        + `SKILL: ${skill?.title?.pl ?? skill?.id ?? '—'}\n`
        + `TARGET DIFFICULTY: ${level} of 6\n\n`
        + (calibration.length
          ? `AUTHORED PROBLEMS AT NEARBY LEVELS — match this calibration:\n`
            + calibration.map((p) => `[level ${p.level}] ${p.prompt?.pl ?? ''}`).join('\n') + '\n\n'
          : '')
        + (avoid.length ? `RECENTLY SEEN — do not repeat these:\n${avoid.map((a) => `- ${a}`).join('\n')}` : ''),
    }],
  });
}

/* ═══ 4. the tutor ════════════════════════════════════════════════════════ */

const TUTOR_SCHEMA = {
  type: 'object',
  properties: {
    reply: bilingual('What you say back — short, spoken aloud well'),
    suggestions: {
      type: 'array',
      description: '2-4 things the student could say or write next, as they would say them, first person, short',
      items: bilingual('One suggestion'),
    },
    chart: {
      type: 'array',
      description: 'OPTIONAL, at most 3: when a picture would genuinely help (asymptotes, extrema, '
        + 'intersections, the shape of a graph), expressions in x to plot. Plain calculator syntax, '
        + 'NOT LaTeX: x^2-3*x+2, sin(2*x), (x+1)/(x-2), e^x, ln(x), sqrt(x), abs(x), tg(x). '
        + 'Multiplication always explicit (3*x, never 3x). Empty array when a chart adds nothing.',
      items: { type: 'string' },
    },
    chartRange: {
      type: 'array',
      description: 'With chart: [xMin, xMax] worth looking at. Empty array for the default.',
      items: { type: 'number' },
    },
    nextTask: bilingual('If the student is ready to move on, the next thing to try; empty string otherwise'),
    revealedAnswer: { type: 'boolean', description: 'true only if the student explicitly asked for the answer and you gave it' },
  },
  required: ['reply', 'suggestions', 'chart', 'chartRange', 'nextTask', 'revealedAnswer'],
  additionalProperties: false,
};

const TUTOR_BRIEF = `
${HOUSE_STYLE}

You are the tutor sitting next to this student. You talk; you do not mark. A
separate, colder pass has already decided what is right and wrong, and you are
given its verdict — do not overturn it and do not soften it. If the working is
wrong, say so plainly and then help.

HOW YOU TALK:
  • Short. Two or three sentences. This is spoken aloud as often as read.
  • Ask before you tell. "Co się dzieje z pochodną wewnętrzną?" beats a lecture.
  • Never give the final answer unless the student asks for it in so many words.
    If they do ask, give it, and then set \`revealedAnswer\` true so the app knows
    this attempt no longer counts as their own.
  • Do not praise a wrong answer. Do not say "prawie" when it is not close.

SUGGESTIONS are the student's next line, written as THEY would say it — first
person, short, immediately usable: "Nie wiem jak zacząć", "Sprawdź moją trzecią
linijkę", "Podpowiedz mi", "Skąd się bierze ten wzór?". They are there so
someone stuck has something to tap rather than a blank field to stare at.
`.trim();

export async function tutor(userId, { history = [], problem = null, verdict = null, mastery = null, lang = 'pl' }) {
  const context = [
    problem ? `CURRENT PROBLEM:\n${problem.prompt?.[lang] ?? problem.prompt?.pl ?? ''}` : '',
    verdict ? `THE MARKER'S VERDICT ON THEIR WORKING (authoritative — do not contradict it):\n${JSON.stringify({
      firstErrorLine: verdict.firstErrorLine,
      diagnosis: verdict.diagnosis,
      complete: verdict.complete,
      answerCorrect: verdict.answerCorrect,
      readable: verdict.readable,
    }, null, 1)}` : '',
    mastery ? `WHERE THEY ARE: ${mastery.pct}% on this skill (${mastery.attempts} attempts, `
      + `${mastery.confident ? 'settled' : 'still uncertain'}), working level ${mastery.level}.` : '',
  ].filter(Boolean).join('\n\n');

  return ask(userId, {
    model: MODELS.tutor,
    kind: 'tutor',
    effort: 'medium',
    maxTokens: 2000,
    schema: TUTOR_SCHEMA,
    system: cachedSystem(TUTOR_BRIEF),
    messages: [
      ...(context ? [{ role: 'user', content: context }, { role: 'assistant', content: 'Rozumiem sytuację.' }] : []),
      ...history.slice(-16).map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.text || '') })),
    ],
  });
}

/* ═══ 5. explaining a formula on demand ══════════════════════════════════ */

const EXPLAIN_SCHEMA = {
  type: 'object',
  properties: {
    idea: bilingual('What this formula is really saying, in plain language'),
    derivation: { type: 'array', items: bilingual('One step of where it comes from') },
    whenToUse: bilingual('How you recognise a problem that wants this formula'),
    trap: bilingual('The mistake people make with it'),
    example: bilingual('One short worked example'),
  },
  required: ['idea', 'derivation', 'whenToUse', 'trap', 'example'],
  additionalProperties: false,
};

export async function explain(userId, { formula, topic, lang = 'pl' }) {
  return ask(userId, {
    model: MODELS.tutor,
    kind: 'explain',
    effort: 'medium',
    maxTokens: 3000,
    schema: EXPLAIN_SCHEMA,
    system: cachedSystem(`${HOUSE_STYLE}\n\nYou are explaining one formula to a student who has it in front of them and wants to understand it rather than memorise it. Derive it if the derivation is short and illuminating; say plainly if it is not.`),
    messages: [{
      role: 'user',
      content: `FORMULA: $${formula.tex}$\nNAME: ${formula.name?.pl ?? ''}\nTOPIC: ${topic?.title?.pl ?? ''}`,
    }],
  });
}
