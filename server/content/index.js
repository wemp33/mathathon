// The curriculum loader.
//
// Every sibling file in this directory is a module: one area of the syllabus,
// holding topics, and each topic holding the formulas worth memorising, the
// skills a task can target, and a bank of authored problems with worked
// solutions. Nothing here is generated at runtime — the bank is what makes the
// app usable with no API key at all, and what calibrates the model's difficulty
// when there is one.
//
// Loading is deliberately forgiving: a malformed module is skipped with a
// warning rather than taking the server down, because content is authored
// separately from the app and a bad file must never cost the user their
// training session.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

/* ═══ validation ═════════════════════════════════════════════════════════ */

const isText = (v) => v && typeof v === 'object' && typeof v.pl === 'string' && typeof v.en === 'string';

function checkModule(mod, file) {
  const bad = [];
  if (!mod || typeof mod !== 'object') return ['not an object'];
  if (typeof mod.id !== 'string' || !mod.id) bad.push('missing id');
  if (mod.track !== 'matura' && mod.track !== 'calculus') bad.push(`bad track ${mod.track}`);
  if (!isText(mod.title)) bad.push('title must be {pl, en}');
  if (!Array.isArray(mod.topics) || !mod.topics.length) bad.push('no topics');
  for (const t of mod.topics || []) {
    const where = `${mod.id}/${t?.id ?? '?'}`;
    if (typeof t?.id !== 'string' || !t.id) bad.push(`${where}: missing topic id`);
    if (!isText(t?.title)) bad.push(`${where}: title must be {pl, en}`);
    if (!Array.isArray(t?.formulas)) bad.push(`${where}: formulas must be an array`);
    if (!Array.isArray(t?.skills)) bad.push(`${where}: skills must be an array`);
    if (!Array.isArray(t?.problems)) bad.push(`${where}: problems must be an array`);
    const skillIds = new Set((t?.skills || []).map((s) => s.id));
    for (const p of t?.problems || []) {
      if (typeof p?.answer !== 'string' || !p.answer) bad.push(`${where}/${p?.id}: missing answer`);
      if (!isText(p?.prompt)) bad.push(`${where}/${p?.id}: prompt must be {pl, en}`);
      if (p?.skill && !skillIds.has(p.skill)) bad.push(`${where}/${p.id}: unknown skill ${p.skill}`);
    }
  }
  if (bad.length) bad.unshift(`${file}:`);
  return bad;
}

/* ═══ load ═══════════════════════════════════════════════════════════════ */

const modules = [];
const problems = new Map();   // problemId  -> { ...problem, topicId, moduleId }
const topics = new Map();     // topicId    -> { ...topic, moduleId, track }
const skills = new Map();     // skillId    -> { ...skill, topicId, moduleId }
const formulas = new Map();   // formulaId  -> { ...formula, topicId, moduleId }
const warnings = [];

export async function loadContent() {
  if (modules.length) return summary();

  let files = [];
  try {
    files = fs.readdirSync(HERE)
      .filter((f) => f.endsWith('.js') && f !== 'index.js')
      .sort();
  } catch {
    files = [];
  }

  for (const file of files) {
    let mod;
    try {
      mod = (await import(`./${file}`)).default;
    } catch (e) {
      warnings.push(`${file}: failed to import — ${e.message}`);
      continue;
    }
    const bad = checkModule(mod, file);
    if (bad.length) {
      warnings.push(...bad);
      continue;
    }
    modules.push(mod);
  }

  modules.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  for (const mod of modules) {
    for (const t of mod.topics) {
      if (topics.has(t.id)) warnings.push(`duplicate topic id ${t.id}`);
      topics.set(t.id, { ...t, moduleId: mod.id, track: mod.track });
      for (const f of t.formulas || []) formulas.set(f.id, { ...f, topicId: t.id, moduleId: mod.id });
      for (const s of t.skills || []) skills.set(s.id, { ...s, topicId: t.id, moduleId: mod.id });
      for (const p of t.problems || []) {
        problems.set(p.id, { ...p, topicId: t.id, moduleId: mod.id, track: mod.track });
      }
    }
  }

  if (warnings.length) {
    process.stderr.write(`content: ${warnings.length} warning(s)\n`);
    for (const w of warnings.slice(0, 40)) process.stderr.write(`  ${w}\n`);
  }
  return summary();
}

function summary() {
  return {
    modules: modules.length,
    topics: topics.size,
    formulas: formulas.size,
    skills: skills.size,
    problems: problems.size,
    warnings: warnings.length,
  };
}

/* ═══ read ═══════════════════════════════════════════════════════════════ */

/** The whole tree, shaped for the client. Problems are stripped of their
 *  answers — the browser must not be able to read the answer before the
 *  attempt, and it is the server that marks. */
export function tree({ withAnswers = false } = {}) {
  return modules.map((mod) => ({
    id: mod.id,
    track: mod.track,
    order: mod.order,
    title: mod.title,
    blurb: mod.blurb,
    topics: mod.topics.map((t) => ({
      id: t.id,
      title: t.title,
      level: t.level,
      prereq: t.prereq || [],
      theory: t.theory,
      formulas: t.formulas || [],
      skills: t.skills || [],
      problemCount: (t.problems || []).length,
      problems: withAnswers ? t.problems : undefined,
    })),
  }));
}

/** Every formula flagged for the recall deck, flattened. */
export function drillFormulas() {
  const out = [];
  for (const [id, f] of formulas) {
    if (f.drill === false) continue;
    out.push({ ...f, id, topicId: f.topicId, moduleId: f.moduleId });
  }
  return out;
}

export const getProblem = (id) => problems.get(id) || null;
export const getTopic = (id) => topics.get(id) || null;
export const getSkill = (id) => skills.get(id) || null;
export const getFormula = (id) => formulas.get(id) || null;
export const allTopics = () => [...topics.values()];
export const allSkills = () => [...skills.values()];
export const allProblems = () => [...problems.values()];
export const contentWarnings = () => warnings.slice();

/** Problems matching a filter, for the practice picker. */
export function pickProblems({ topicId, skillId, track, level, levelSpread = 1, exclude = new Set() } = {}) {
  const out = [];
  for (const p of problems.values()) {
    if (exclude.has(p.id)) continue;
    if (topicId && p.topicId !== topicId) continue;
    if (skillId && p.skill !== skillId) continue;
    if (track && p.track !== track) continue;
    if (level != null && Math.abs((p.level ?? 3) - level) > levelSpread) continue;
    out.push(p);
  }
  return out;
}
