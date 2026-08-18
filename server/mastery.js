// What "tracking my maths skills" actually means here.
//
// Two different questions need two different models, and conflating them is the
// usual mistake:
//
//   "Do I remember this formula?"  → forgetting over time  → FSRS-6 (srs.js)
//   "Can I do this kind of problem?" → ability vs difficulty → this file
//
// Ability is Glicko-1 in logits. Each skill carries a rating θ and an
// uncertainty RD; every problem carries a difficulty b derived from its level.
// The chance of getting it right is σ(θ − b), the rating moves by how surprising
// the result was, and RD shrinks with evidence and grows again with time. That
// last part is what makes the app honest: a skill you nailed in March is not a
// skill you have today, and the model says so instead of showing a stale 100%.
//
// Why Glicko rather than plain Elo: Elo's fixed K-factor either moves too
// slowly for a new skill or too wildly for a settled one. Glicko's step size is
// derived from RD, so the first few attempts at a new skill move the rating a
// long way and later ones barely nudge it — which is how learning actually
// looks — and it gives an uncertainty band to show, and to steer the next
// question with.

const DAY = 86_400_000;

/* ═══ scale ══════════════════════════════════════════════════════════════ */

// Everything is in logits, so σ(θ − b) is a probability with no extra constant.
// A level is mapped so that a student sitting exactly at level L has a ~50%
// chance on an L problem, and the six bands span roughly ±2.3 logits — a
// 10:1 odds swing from the easiest matura question to the hardest analysis one.
export const LEVEL_SPREAD = 0.9;
export const levelToDifficulty = (level) => ((level ?? 3) - 3.5) * LEVEL_SPREAD;
export const difficultyToLevel = (b) => b / LEVEL_SPREAD + 3.5;

export const RD_NEW = 1.6;    // a skill never attempted: almost no information
export const RD_MIN = 0.22;   // the floor; more evidence than this stops helping
export const RD_MAX = 1.6;

// How fast certainty decays. Chosen so a skill left alone for half a year goes
// from well-known (RD 0.3) back to nearly unknown (RD_MAX).
const C2 = (RD_MAX ** 2 - 0.3 ** 2) / 180;

// Uncertainty on a problem's own difficulty. Authored problems with a stated
// level are fairly trustworthy, so this is small but not zero.
const PROBLEM_RD = 0.30;

export const sigmoid = (x) => 1 / (1 + Math.exp(-x));

/* ═══ the model ══════════════════════════════════════════════════════════ */

export function newSkillState(skillId, level = 3) {
  return {
    skillId,
    theta: levelToDifficulty(level),   // start a learner at the skill's own level
    rd: RD_NEW,
    n: 0,
    right: 0,
    lastAt: null,
    streak: 0,
    history: [],                        // last few outcomes, for the UI sparkline
  };
}

/** RD grows while a skill sits untouched. Call before using a rating for
 *  anything — prediction, display or scheduling. */
export function decayed(state, now = Date.now()) {
  if (!state.lastAt) return { ...state, rd: Math.min(RD_MAX, state.rd) };
  const days = Math.max(0, (now - state.lastAt) / DAY);
  return { ...state, rd: Math.min(RD_MAX, Math.sqrt(state.rd ** 2 + C2 * days)) };
}

// Glicko's attenuation: an opponent whose own rating is uncertain tells you
// less, so their result moves you less.
const g = (rd) => 1 / Math.sqrt(1 + (3 * rd * rd) / (Math.PI * Math.PI));

/** Probability this learner solves a problem of difficulty `b` right now. */
export function chance(state, b, now = Date.now()) {
  const s = decayed(state, now);
  return sigmoid(g(Math.hypot(s.rd, PROBLEM_RD)) * (s.theta - b));
}

/**
 * Fold one attempt into a skill's rating.
 *
 * `score` is not just 0 or 1. A solution with the right method and one slipped
 * sign is genuinely different evidence from one that never found the method,
 * and the marker returns that distinction, so it is used: 1 correct,
 * 0.7 right method with an arithmetic slip, 0.35 partial, 0 wrong or blank.
 */
export function applyAttempt(state, { level, score, now = Date.now() }) {
  const s = decayed(state, now);
  const b = levelToDifficulty(level);
  const outcome = Math.min(1, Math.max(0, score));

  const gp = g(PROBLEM_RD);
  const expected = sigmoid(gp * (s.theta - b));

  // Guard the variance term: a near-certain prediction divides by ~0 and would
  // throw the rating across the scale on one surprising answer.
  const variance = Math.max(1e-4, expected * (1 - expected));
  const dSq = 1 / (gp * gp * variance);

  const denom = 1 / (s.rd * s.rd) + 1 / dSq;
  const theta = s.theta + (gp / denom) * (outcome - expected);
  const rd = Math.max(RD_MIN, Math.sqrt(1 / denom));

  const correct = outcome >= 0.999;
  return {
    ...s,
    theta,
    rd,
    n: s.n + 1,
    right: s.right + (correct ? 1 : 0),
    streak: correct ? s.streak + 1 : 0,
    lastAt: now,
    history: [...(s.history || []), Math.round(outcome * 100)].slice(-20),
    lastExpected: expected,
  };
}

/* ═══ what the user sees ═════════════════════════════════════════════════ */

/**
 * Mastery as a percentage, with an honest band.
 *
 * Deliberately NOT "percent of problems you got right" — that number rises just
 * by choosing easy problems. This is the model's estimate of the chance you
 * solve a problem at `target` level right now, so it falls when you avoid a
 * topic and cannot be farmed by grinding easy ones.
 */
export function mastery(state, target = 4, now = Date.now()) {
  const s = decayed(state, now);
  const b = levelToDifficulty(target);
  const p = sigmoid(s.theta - b);
  const lo = sigmoid(s.theta - 1.96 * s.rd - b);
  const hi = sigmoid(s.theta + 1.96 * s.rd - b);
  return {
    pct: Math.round(p * 100),
    lo: Math.round(lo * 100),
    hi: Math.round(hi * 100),
    // A wide band means "we do not actually know yet", which the UI shows as
    // hatching rather than a confident bar.
    confident: s.rd < 0.5,
    level: Math.round(difficultyToLevel(s.theta) * 10) / 10,
    attempts: s.n,
    rd: s.rd,
  };
}

/** The level this learner should be working at: where they get it right about
 *  three times in four. Below that is boring, above it is demoralising. */
export const TARGET_SUCCESS = 0.75;

export function workingLevel(state, now = Date.now()) {
  const s = decayed(state, now);
  // σ(θ − b) = 0.75  ⇒  b = θ − ln 3
  const b = s.theta - Math.log(TARGET_SUCCESS / (1 - TARGET_SUCCESS));
  return Math.min(6, Math.max(1, difficultyToLevel(b)));
}

/* ═══ choosing the next problem ══════════════════════════════════════════ */

/**
 * Score a candidate problem for how much it is worth asking right now.
 *
 * Three things are traded off, and the weights are the interesting part:
 *
 *   fit          — how close its difficulty is to the learner's working level.
 *                  Dominant, because a question that is far too easy or too
 *                  hard teaches nothing whatever else is true about it.
 *   information  — how uncertain we are about this skill. An unknown skill is
 *                  worth probing even when the fit is imperfect, otherwise the
 *                  app only ever asks about what it already knows.
 *   staleness    — how long since this skill was touched at all, so a topic
 *                  cannot quietly fall out of rotation.
 *
 * Anything the learner saw recently is pushed down hard rather than banned, so
 * a small bank still works but does not repeat itself.
 */
export function scoreCandidate(problem, state, { now = Date.now(), seenAt = null } = {}) {
  const s = decayed(state, now);
  const p = chance(s, levelToDifficulty(problem.level), now);

  // Peak at TARGET_SUCCESS, falling off either side; the asymmetry is
  // deliberate — too hard is worse than too easy.
  const err = p - TARGET_SUCCESS;
  const fit = Math.exp(-((err < 0 ? err * 1.6 : err) ** 2) / (2 * 0.18 ** 2));

  const information = (s.rd - RD_MIN) / (RD_MAX - RD_MIN);

  const days = s.lastAt ? (now - s.lastAt) / DAY : 999;
  const staleness = Math.min(1, days / 21);

  let score = 0.62 * fit + 0.23 * information + 0.15 * staleness;

  if (seenAt) {
    const sinceSeen = (now - seenAt) / DAY;
    if (sinceSeen < 1) score *= 0.05;
    else if (sinceSeen < 7) score *= 0.25 + 0.1 * sinceSeen;
  }
  return { score, chance: p, fit, information, staleness };
}

/**
 * Are the prerequisites for a topic in place?
 *
 * Serving integration by parts to someone who cannot differentiate a product
 * produces a wrong answer the learner cannot diagnose, and the rating then
 * blames the wrong skill. `ready` is false until every prerequisite topic is
 * at least plausible — note it uses the LOW end of the band, so an untested
 * prerequisite counts as not ready rather than as fine.
 */
export function prereqReady(topic, stateByTopic, { threshold = 55, now = Date.now() } = {}) {
  const missing = [];
  for (const id of topic.prereq || []) {
    const st = stateByTopic.get(id);
    if (!st) { missing.push(id); continue; }
    if (mastery(st, topic.level ?? 3, now).lo < threshold) missing.push(id);
  }
  return { ready: missing.length === 0, missing };
}

/** Roll several skill states into one figure for a topic or module. Weighted by
 *  evidence, so one confident skill does not get outvoted by four guesses. */
export function aggregate(states, target = 4, now = Date.now()) {
  const live = states.filter(Boolean);
  if (!live.length) return { pct: 0, confident: false, attempts: 0, covered: 0 };

  let wSum = 0;
  let pSum = 0;
  let attempts = 0;
  let covered = 0;
  for (const st of live) {
    const m = mastery(st, target, now);
    const w = 1 / (decayed(st, now).rd ** 2);
    wSum += w;
    pSum += w * m.pct;
    attempts += m.attempts;
    if (m.attempts > 0) covered += 1;
  }
  return {
    pct: Math.round(pSum / wSum),
    confident: live.every((st) => decayed(st, now).rd < 0.6),
    attempts,
    covered,
    of: live.length,
  };
}
