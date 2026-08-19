// Mathathon server: serves the PWA and the endpoints that need a secret or a
// database. Plain node:http with a small router — the only dependencies in the
// whole project are `pg` and the Anthropic SDK.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

import { migrate, usageFor } from './db.js';
import * as auth from './auth.js';
import * as sync from './sync.js';
import * as keys from './keys.js';
import * as ai from './ai.js';
import * as mastery from './mastery.js';
import {
  loadContent, tree, drillFormulas, getProblem, getTopic, getSkill, getFormula,
  pickProblems, allSkills, contentWarnings,
} from './content/index.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(HERE, '..', 'public');
const PORT = process.env.PORT || 3000;

/* ═══ helpers ═══ */

const send = (res, status, body, headers = {}) => {
  const isJson = typeof body === 'object' && !Buffer.isBuffer(body);
  const payload = isJson ? JSON.stringify(body) : body;
  res.writeHead(status, {
    'content-type': isJson ? 'application/json; charset=utf-8' : 'text/plain; charset=utf-8',
    'content-length': Buffer.byteLength(payload),
    ...headers,
  });
  res.end(payload);
};

const fail = (res, status, code, extra = {}) => send(res, status, { error: code, ...extra });

// An ink page can be a few hundred kilobytes and a critique carries a PNG, so
// the ceiling is generous; anything past it is a bug or an attack, not a page.
async function readJson(req, limit = 12_000_000) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > limit) { reject(new Error('too_large')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      if (!chunks.length) return resolve({});
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
      catch { reject(new Error('bad_json')); }
    });
    req.on('error', reject);
  });
}

// Railway terminates TLS upstream, so the caller's address is in the header.
const clientIp = (req) =>
  (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress || 'unknown';

const bearer = (req) => {
  const h = req.headers.authorization || '';
  return h.startsWith('Bearer ') ? h.slice(7) : null;
};

/* ═══ static files ═══ */

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

const etagCache = new Map();

function etagFor(file, stat) {
  const k = `${file}:${stat.mtimeMs}:${stat.size}`;
  if (!etagCache.has(k)) {
    etagCache.set(k, `"${createHash('sha1').update(k).digest('base64url').slice(0, 20)}"`);
  }
  return etagCache.get(k);
}

function serveStatic(req, res, urlPath) {
  let rel = decodeURIComponent(urlPath.split('?')[0]);
  if (rel === '/' || rel === '') rel = '/index.html';

  const full = path.join(PUBLIC, path.normalize(rel).replace(/^(\.\.[/\\])+/, ''));
  if (!full.startsWith(PUBLIC)) return fail(res, 403, 'forbidden');

  let stat;
  try { stat = fs.statSync(full); } catch { stat = null; }

  // Unknown paths fall through to the shell so client routing survives a reload.
  if (!stat || stat.isDirectory()) {
    if (path.extname(rel)) return fail(res, 404, 'not_found');
    return serveStatic(req, res, '/index.html');
  }

  const ext = path.extname(full).toLowerCase();
  const etag = etagFor(full, stat);
  if (req.headers['if-none-match'] === etag) {
    res.writeHead(304, { etag });
    return res.end();
  }

  // The shell and the service worker must never be served stale, or an update
  // can never reach an installed app.
  const isShell = rel === '/index.html' || rel === '/sw.js' || rel.endsWith('.webmanifest');
  const cache = isShell
    ? 'no-cache'
    : ext === '.png' || ext === '.svg'
      ? 'public, max-age=86400, must-revalidate'
      : 'no-cache';

  res.writeHead(200, {
    'content-type': MIME[ext] || 'application/octet-stream',
    'content-length': stat.size,
    'cache-control': cache,
    etag,
    // The browser talks to this origin only — the Anthropic key never leaves
    // the server, so there is no third-party connect-src to allow.
    ...(ext === '.html' ? {
      'content-security-policy':
        "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; "
        + "img-src 'self' data: blob:; font-src 'self'; "
        + "connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'same-origin',
    } : {}),
  });
  fs.createReadStream(full).pipe(res);
}

/* ═══ practice: choosing what to ask next ═══
   The skill ratings live in the sync store like everything else, so the picker
   reads them from there rather than trusting a client-supplied summary — the
   whole point of the rating is that it cannot be farmed. */

async function skillStates(userId) {
  const rows = await sync.readKind(userId, 'skill');
  const byId = new Map();
  for (const r of rows) if (r.skillId) byId.set(r.skillId, r);
  return byId;
}

async function seenProblems(userId) {
  const rows = await sync.readKind(userId, 'attempt', 600);
  const seen = new Map();
  for (const r of rows) {
    if (!r.problemId) continue;
    const at = Number(r.at || r.updatedAt) || 0;
    if (at > (seen.get(r.problemId) || 0)) seen.set(r.problemId, at);
  }
  return seen;
}

async function chooseNext(userId, { topicId, skillId, track, level, count = 1 }) {
  const states = await skillStates(userId);
  const seen = await seenProblems(userId);
  const now = Date.now();

  const candidates = pickProblems({ topicId, skillId, track, level, levelSpread: 2 });
  if (!candidates.length) return [];

  const scored = candidates.map((p) => {
    const state = states.get(p.skill) || mastery.newSkillState(p.skill, getSkill(p.skill)?.levels?.[0] ?? 3);
    const s = mastery.scoreCandidate(p, state, { now, seenAt: seen.get(p.id) || null });
    return { problem: p, ...s };
  });

  scored.sort((a, b) => b.score - a.score);

  // A little jitter among the near-best, so two sessions in a row do not open
  // with the same question when the top few are effectively tied.
  const top = scored.slice(0, Math.max(count, Math.min(6, scored.length)));
  for (let i = top.length - 1; i > 0; i--) {
    const j = Math.floor(((now % 9973) / 9973) * (i + 1));
    [top[i], top[j]] = [top[j], top[i]];
  }
  return top.slice(0, count);
}

/* ═══ routes ═══ */

async function requireUser(req, res) {
  const user = await auth.userForToken(bearer(req));
  if (!user) { fail(res, 401, 'unauthorized'); return null; }
  return user;
}

// An inline (generated) problem is client-supplied, so only the fields the AI
// actually needs pass through, with sane size caps.
function sanitizeInline(p) {
  if (!p || typeof p !== 'object') return null;
  const text = (v) => (typeof v === 'string' ? v.slice(0, 4000) : '');
  const pair = (v) => (v && typeof v === 'object' ? { pl: text(v.pl), en: text(v.en) } : { pl: text(v), en: '' });
  const prompt = pair(p.prompt);
  if (!prompt.pl && !prompt.en) return null;
  return {
    id: null,
    prompt,
    answer: text(p.answer),
    accept: Array.isArray(p.accept) ? p.accept.slice(0, 8).map(text) : [],
    level: Number(p.level) || 3,
    skill: typeof p.skill === 'string' ? p.skill : null,
  };
}

const ROUTES = {
  'GET /api/health': async (req, res) => send(res, 200, {
    ok: true,
    content: contentSummary,
    warnings: contentWarnings().length,
  }),

  /* ---- accounts ---- */

  'POST /api/auth/register': async (req, res) => {
    const ip = clientIp(req);
    if (auth.ipThrottled(ip)) return fail(res, 429, 'too_many_attempts', { retryAfter: 900 });
    auth.noteIpAttempt(ip);
    const { nickname, code, device } = await readJson(req);
    const out = await auth.register({ nickname, code, device });
    if (out.error) return fail(res, 400, out.error);
    send(res, 200, out);
  },

  'POST /api/auth/login': async (req, res) => {
    const { nickname, code, device } = await readJson(req);
    const out = await auth.login({ nickname, code, device, ip: clientIp(req) });
    if (out.error) {
      const status = out.error === 'too_many_attempts' ? 429 : 401;
      return fail(res, status, out.error, out.retryAfter ? { retryAfter: out.retryAfter } : {});
    }
    send(res, 200, out);
  },

  'POST /api/auth/logout': async (req, res) => {
    await auth.logout(bearer(req));
    send(res, 200, { ok: true });
  },

  'POST /api/auth/code': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { currentCode, newCode } = await readJson(req);
    const out = await auth.changeCode({ userId: user.id, currentCode, newCode });
    if (out.error) return fail(res, 400, out.error);
    send(res, 200, out);
  },

  'GET /api/auth/me': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    send(res, 200, {
      user,
      devices: await auth.devices(user.id),
      keys: await keys.keyStatus(user.id),
    });
  },

  'POST /api/auth/settings': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const patch = await readJson(req);
    send(res, 200, { settings: await auth.saveSettings(user.id, patch) });
  },

  /* ---- sync ---- */

  'GET /api/sync/pull': async (req, res, url) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const since = Number(url.searchParams.get('since') || 0);
    send(res, 200, await sync.pull(user.id, since));
  },

  'POST /api/sync/push': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { records } = await readJson(req);
    const out = await sync.push(user.id, records);
    if (out.error) return fail(res, 400, out.error, out);
    send(res, 200, out);
  },

  /* ---- content ---- */

  'GET /api/content/tree': async (req, res) => send(res, 200, { modules: tree() }),
  'GET /api/content/drills': async (req, res) => send(res, 200, { formulas: drillFormulas() }),

  /* ---- practice ---- */

  'POST /api/practice/next': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { topicId, skillId, track, level, count = 1 } = await readJson(req);
    const picked = await chooseNext(user.id, { topicId, skillId, track, level, count });
    if (!picked.length) return fail(res, 404, 'no_problems');
    send(res, 200, {
      problems: picked.map(({ problem, chance, fit }) => ({
        // The answer stays on the server: the browser must not be able to read
        // it before the attempt, because the browser is where the student is.
        id: problem.id,
        prompt: problem.prompt,
        level: problem.level,
        skill: problem.skill,
        topicId: problem.topicId,
        moduleId: problem.moduleId,
        predictedChance: Math.round(chance * 100) / 100,
        fit: Math.round(fit * 100) / 100,
      })),
    });
  },

  // An AI-generated problem is not in the authored bank, so the client sends
  // it back inline. That does mean the client saw the answer — acceptable for
  // generated problems, since /generate handed the whole object over anyway;
  // authored problems still never leave the server with their answers.
  'POST /api/practice/mark': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { problemId, problem: inline, answer, lang } = await readJson(req);
    const problem = problemId ? getProblem(problemId) : sanitizeInline(inline);
    if (!problem) return fail(res, 404, 'unknown_problem');
    const out = await ai.mark(user.id, { problem, answer, lang });
    if (out.error) return fail(res, out.error === 'no_key' ? 428 : 502, out.error, out);
    send(res, 200, { problem: { id: problem.id ?? null, level: problem.level, skill: problem.skill }, ...out.data });
  },

  'POST /api/practice/critique': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { problemId, problem: inline, png, previous, lang } = await readJson(req);
    const problem = problemId ? getProblem(problemId) : sanitizeInline(inline);
    if (!problem) return fail(res, 404, 'unknown_problem');
    if (typeof png !== 'string' || png.length < 100) return fail(res, 400, 'no_ink');
    const out = await ai.critique(user.id, { problem, ink: { png }, previous, lang });
    if (out.error) return fail(res, out.error === 'no_key' ? 428 : 502, out.error, out);
    send(res, 200, out.data);
  },

  'POST /api/practice/generate': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { topicId, skillId, level = 3, avoid = [], lang } = await readJson(req);
    const topic = getTopic(topicId);
    const skill = getSkill(skillId);
    const calibration = pickProblems({ topicId, skillId, level, levelSpread: 1 }).slice(0, 3);
    const out = await ai.generate(user.id, { topic, skill, level, avoid, calibration, lang });
    if (out.error) return fail(res, out.error === 'no_key' ? 428 : 502, out.error, out);
    send(res, 200, out.data);
  },

  'POST /api/practice/record': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { skillId, level, score } = await readJson(req);
    if (!getSkill(skillId)) return fail(res, 404, 'unknown_skill');
    const states = await skillStates(user.id);
    const before = states.get(skillId) || mastery.newSkillState(skillId, level);
    const after = mastery.applyAttempt(before, { level, score });
    // Written back through the same sync pipe every other record uses, so the
    // other device picks it up on its next pull.
    await sync.push(user.id, [{
      kind: 'skill', id: skillId, updatedAt: Date.now(), data: after,
    }]);
    send(res, 200, { state: after, mastery: mastery.mastery(after), workingLevel: mastery.workingLevel(after) });
  },

  'GET /api/progress': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const states = await skillStates(user.id);
    const byTopic = new Map();
    for (const skill of allSkills()) {
      const st = states.get(skill.id);
      if (!byTopic.has(skill.topicId)) byTopic.set(skill.topicId, []);
      byTopic.get(skill.topicId).push(st || null);
    }
    const topics = [...byTopic.entries()].map(([topicId, list]) => {
      const topic = getTopic(topicId);
      return {
        topicId,
        moduleId: topic?.moduleId,
        title: topic?.title,
        level: topic?.level,
        ...mastery.aggregate(list, topic?.level ?? 4),
      };
    });
    send(res, 200, {
      topics,
      skills: [...states.values()].map((st) => ({
        skillId: st.skillId,
        ...mastery.mastery(st),
        workingLevel: Math.round(mastery.workingLevel(st) * 10) / 10,
        history: st.history || [],
      })),
    });
  },

  /* ---- conversation ---- */

  'POST /api/tutor': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { history, problemId, verdict, skillId, lang } = await readJson(req);
    const problem = problemId ? getProblem(problemId) : null;
    let m = null;
    if (skillId) {
      const st = (await skillStates(user.id)).get(skillId);
      if (st) m = { ...mastery.mastery(st), level: Math.round(mastery.workingLevel(st) * 10) / 10 };
    }
    const out = await ai.tutor(user.id, { history, problem, verdict, mastery: m, lang });
    if (out.error) return fail(res, out.error === 'no_key' ? 428 : 502, out.error, out);
    send(res, 200, out.data);
  },

  'POST /api/explain': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { formulaId, lang } = await readJson(req);
    const formula = getFormula(formulaId);
    if (!formula) return fail(res, 404, 'unknown_formula');
    const out = await ai.explain(user.id, { formula, topic: getTopic(formula.topicId), lang });
    if (out.error) return fail(res, out.error === 'no_key' ? 428 : 502, out.error, out);
    send(res, 200, out.data);
  },

  /* ---- keys and usage ---- */

  'GET /api/keys': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    send(res, 200, await keys.keyStatus(user.id));
  },

  'POST /api/keys': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    const { provider = 'anthropic', value } = await readJson(req);
    const out = await keys.setKey(user.id, provider, value);
    if (out.error) return fail(res, 400, out.error);
    send(res, 200, out);
  },

  'DELETE /api/keys': async (req, res, url) => {
    const user = await requireUser(req, res);
    if (!user) return;
    send(res, 200, await keys.clearKey(user.id, url.searchParams.get('provider') || 'anthropic'));
  },

  'GET /api/usage': async (req, res) => {
    const user = await requireUser(req, res);
    if (!user) return;
    send(res, 200, { days: await usageFor(user.id, 30) });
  },
};

/* ═══ server ═══ */

let contentSummary = null;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/healthz') return send(res, 200, 'ok');

  const key = `${req.method} ${url.pathname}`;
  const handler = ROUTES[key];

  if (!handler) {
    if (url.pathname.startsWith('/api/')) return fail(res, 404, 'not_found');
    return serveStatic(req, res, url.pathname);
  }

  try {
    await handler(req, res, url);
  } catch (e) {
    if (e.message === 'too_large') return fail(res, 413, 'too_large');
    if (e.message === 'bad_json') return fail(res, 400, 'bad_json');
    process.stderr.write(`500 ${key}: ${e.stack || e.message}\n`);
    if (!res.headersSent) fail(res, 500, 'server_error');
  }
});

async function start() {
  contentSummary = await loadContent();
  process.stdout.write(
    `content: ${contentSummary.modules} modules, ${contentSummary.topics} topics, `
    + `${contentSummary.formulas} formulas, ${contentSummary.problems} problems\n`,
  );
  if (process.env.DATABASE_URL) {
    await migrate();
    process.stdout.write('database: migrated\n');
  } else {
    process.stderr.write('database: DATABASE_URL is not set — accounts and sync will fail\n');
  }
  server.listen(PORT, () => process.stdout.write(`mathathon listening on ${PORT}\n`));
}

start().catch((e) => {
  process.stderr.write(`fatal: ${e.stack || e.message}\n`);
  process.exit(1);
});
