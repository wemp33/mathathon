// Sanity checks for the ability model. Not golden vectors — Glicko has no
// canonical fixtures the way FSRS does — but these pin the properties that
// matter: a rating that moves fast when new and slowly when settled, an
// uncertainty that shrinks with evidence and grows with time, and a mastery
// figure that falls when a skill is left alone.
import assert from 'node:assert';
import * as m from '../server/mastery.js';

const DAY = 86_400_000;
let pass = 0;
const check = (name, fn) => { fn(); pass++; process.stdout.write(`  ok  ${name}\n`); };

check('a new skill is maximally uncertain', () => {
  const s = m.newSkillState('x', 3);
  assert.equal(s.rd, m.RD_NEW);
  assert.equal(m.mastery(s).confident, false);
});

check('the first attempts move the rating far, later ones barely', () => {
  let s = m.newSkillState('x', 3);
  const first = m.applyAttempt(s, { level: 3, score: 1 });
  const firstJump = Math.abs(first.theta - s.theta);
  let settled = first;
  for (let i = 0; i < 25; i++) settled = m.applyAttempt(settled, { level: 3, score: 1 });
  const lateJump = Math.abs(m.applyAttempt(settled, { level: 3, score: 1 }).theta - settled.theta);
  assert.ok(firstJump > lateJump * 4, `first ${firstJump} should dwarf late ${lateJump}`);
});

check('uncertainty shrinks with evidence', () => {
  let s = m.newSkillState('x', 3);
  for (let i = 0; i < 10; i++) s = m.applyAttempt(s, { level: 3, score: i % 2 });
  assert.ok(s.rd < m.RD_NEW / 2, `rd ${s.rd}`);
});

check('uncertainty grows back over months of silence, and stops at the cap', () => {
  let s = m.newSkillState('x', 3);
  for (let i = 0; i < 10; i++) s = m.applyAttempt(s, { level: 3, score: 1 });
  const week = m.decayed(s, s.lastAt + 7 * DAY);
  const halfYear = m.decayed(s, s.lastAt + 180 * DAY);
  assert.ok(week.rd > s.rd, `a week should already cost some certainty: ${s.rd} -> ${week.rd}`);
  assert.ok(halfYear.rd > week.rd, 'and half a year should cost much more');
  // It saturates rather than running away — an untouched skill is "unknown",
  // not "infinitely unknown".
  assert.ok(halfYear.rd <= m.RD_MAX + 1e-9, `rd ${halfYear.rd} exceeded the cap`);
  assert.ok(m.decayed(s, s.lastAt + 3650 * DAY).rd <= m.RD_MAX + 1e-9);
});

// Practise the way the app actually serves problems: always at the level the
// learner is currently working at. This is not a convenience for the test — it
// is the property that makes the model worth having. A problem you were always
// going to get right carries almost no information, so its result barely moves
// the rating; a problem at the edge of your ability carries a lot.
function practise(skill, rounds, { startLevel = 3, ability = 4.5 } = {}) {
  let s = m.newSkillState(skill, startLevel);
  for (let i = 0; i < rounds; i++) {
    const level = m.workingLevel(s);
    // A learner of fixed true ability: right when the problem is below them.
    s = m.applyAttempt(s, { level, score: level <= ability ? 1 : 0 });
  }
  return s;
}

// Where the confidence threshold actually lands, measured rather than guessed:
// rd falls 1.6 → 0.87 by the 5th well-aimed problem, 0.67 by the 10th, 0.50 by
// the 20th and 0.36 by the 40th. `confident` (rd < 0.5) therefore means roughly
// twenty problems at the right level — at which point the 95% band is about
// thirty points wide, which is the point where a solid bar stops overstating
// what the app knows. Twenty is also about where the same twenty problems
// spread over easy ones would still leave the band at fifty.
const CONFIDENT_AFTER = 20;

check('adaptive practice earns confidence; grinding easy problems does not', () => {
  const adaptive = practise('x', CONFIDENT_AFTER + 4);
  let grinding = m.newSkillState('y', 3);
  for (let i = 0; i < CONFIDENT_AFTER + 4; i++) grinding = m.applyAttempt(grinding, { level: 1, score: 1 });
  assert.ok(adaptive.rd < grinding.rd, `adaptive ${adaptive.rd} should beat grinding ${grinding.rd}`);
  assert.ok(m.mastery(adaptive, 4).confident, `rd ${adaptive.rd} after ${CONFIDENT_AFTER + 4} well-aimed problems`);
  assert.ok(!m.mastery(practise('z', 8), 4).confident, 'eight problems is not yet knowledge');
});

check('mastery falls when a skill is abandoned', () => {
  const s = practise('x', CONFIDENT_AFTER + 4);
  const now = s.lastAt;
  const fresh = m.mastery(s, 4, now);
  const stale = m.mastery(s, 4, now + 240 * DAY);
  assert.ok(fresh.confident, `fresh rd should be settled, got ${s.rd}`);
  assert.ok(!stale.confident, 'eight months later it should not be');
  assert.ok(stale.hi - stale.lo > fresh.hi - fresh.lo, 'the band should widen');
});

check('mastery cannot be farmed on easy problems', () => {
  let easy = m.newSkillState('x', 1);
  for (let i = 0; i < 30; i++) easy = m.applyAttempt(easy, { level: 1, score: 1 });
  // Thirty perfect level-1 answers must not read as mastery of level 5.
  assert.ok(m.mastery(easy, 5).pct < 60, `got ${m.mastery(easy, 5).pct}%`);
});

check('the working level tracks ability, not the last question', () => {
  let s = m.newSkillState('x', 3);
  for (let i = 0; i < 20; i++) s = m.applyAttempt(s, { level: 5, score: 1 });
  const wl = m.workingLevel(s);
  assert.ok(wl > 3 && wl <= 6, `working level ${wl}`);
  assert.ok(m.chance(s, m.levelToDifficulty(wl)) > 0.7);
});

check('partial credit lands between right and wrong', () => {
  const base = m.newSkillState('x', 3);
  const right = m.applyAttempt(base, { level: 3, score: 1 }).theta;
  const slip = m.applyAttempt(base, { level: 3, score: 0.7 }).theta;
  const wrong = m.applyAttempt(base, { level: 3, score: 0 }).theta;
  assert.ok(wrong < slip && slip < right, `${wrong} < ${slip} < ${right}`);
});

check('a surprising result does not throw the rating across the scale', () => {
  let s = m.newSkillState('x', 3);
  for (let i = 0; i < 40; i++) s = m.applyAttempt(s, { level: 6, score: 1 });
  const shock = m.applyAttempt(s, { level: 1, score: 0 });
  assert.ok(Math.abs(shock.theta - s.theta) < 1.5, `moved ${Math.abs(shock.theta - s.theta)}`);
  assert.ok(Number.isFinite(shock.theta) && Number.isFinite(shock.rd));
});

check('prerequisites block on an untested topic, not just a failed one', () => {
  const topic = { id: 'b', level: 4, prereq: ['a'] };
  assert.equal(m.prereqReady(topic, new Map()).ready, false);
  const strong = new Map([['a', (() => {
    let s = m.newSkillState('a', 4);
    for (let i = 0; i < 15; i++) s = m.applyAttempt(s, { level: 5, score: 1 });
    return s;
  })()]]);
  assert.equal(m.prereqReady(topic, strong).ready, true);
});

process.stdout.write(`\n${pass}/${pass} checks passed\nAbility model behaves.\n`);
