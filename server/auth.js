// Nickname + 4-digit passcode.
//
// The user asked for no security friction at all, and that is what this is:
// any four digits are accepted, 0000 included, there is no lockout and no
// "your code is too weak" wall between them and their own maths. What is kept
// is the part they never see — the code is scrypt-hashed so the database does
// not hold it in the clear, tokens are stored as sha256 so a database read
// cannot mint a session, and the login path spends the same wall clock on an
// unknown nickname as on a wrong code so the endpoint cannot enumerate
// accounts. A gentle per-IP rate limit stops a stray script hammering the box;
// it is high enough that a human fat-fingering their passcode never meets it.
import crypto from 'node:crypto';
import { q } from './db.js';

const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 };
const SESSION_DAYS = 400;

const scrypt = (code, salt) =>
  new Promise((resolve, reject) =>
    crypto.scrypt(code, salt, SCRYPT.keylen, SCRYPT, (err, key) =>
      err ? reject(err) : resolve(key.toString('hex'))));

const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');

export const normNick = (n) => String(n || '').trim();
export const nickKey = (n) => normNick(n).toLowerCase().normalize('NFKC');

export function validateNickname(nick) {
  const n = normNick(nick);
  if (n.length < 2) return 'nickname_short';
  if (n.length > 24) return 'nickname_long';
  if (!/^[\p{L}\p{N} _.-]+$/u.test(n)) return 'nickname_chars';
  return null;
}

// Four digits. That is the whole rule.
export function validateCode(code) {
  return /^\d{4}$/.test(String(code || '')) ? null : 'code_format';
}

/* ---- per-IP throttle (in-memory; the service runs as one instance) ---- */

const ipHits = new Map();
const IP_WINDOW_MS = 15 * 60_000;
const IP_MAX = 300;              // deliberately generous: a script, not a person

export function ipThrottled(ip) {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < IP_WINDOW_MS);
  ipHits.set(ip, hits);
  return hits.length >= IP_MAX;
}

export function noteIpAttempt(ip) {
  const hits = ipHits.get(ip) || [];
  hits.push(Date.now());
  ipHits.set(ip, hits);
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of ipHits) {
    const live = hits.filter((t) => now - t < IP_WINDOW_MS);
    if (live.length) ipHits.set(ip, live);
    else ipHits.delete(ip);
  }
}, 5 * 60_000).unref();

/* ---- accounts ---- */

export async function register({ nickname, code, device }) {
  const nickErr = validateNickname(nickname);
  if (nickErr) return { error: nickErr };
  const codeErr = validateCode(code);
  if (codeErr) return { error: codeErr };

  // Optional allow-list, for when the instance is meant for one household.
  const allow = (process.env.ALLOWED_NICKNAMES || '').trim();
  if (allow) {
    const list = allow.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
    if (!list.includes(nickKey(nickname))) return { error: 'nickname_not_allowed' };
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = await scrypt(code, salt);
  try {
    const { rows } = await q(
      `INSERT INTO users (nickname, nickname_key, code_hash, code_salt)
       VALUES ($1, $2, $3, $4) RETURNING id, nickname, settings`,
      [normNick(nickname), nickKey(nickname), hash, salt],
    );
    const user = rows[0];
    return { user, token: await issueToken(user.id, device) };
  } catch (e) {
    if (e.code === '23505') return { error: 'nickname_taken' };
    throw e;
  }
}

export async function login({ nickname, code, device, ip }) {
  if (ipThrottled(ip)) return { error: 'too_many_attempts', retryAfter: 900 };

  const { rows } = await q(
    `SELECT id, nickname, code_hash, code_salt, settings
       FROM users WHERE nickname_key = $1`,
    [nickKey(nickname)],
  );
  const user = rows[0];

  // Spend the scrypt time either way, so an unknown nickname and a wrong code
  // take the same wall clock and the endpoint cannot enumerate accounts.
  const salt = user?.code_salt || 'decoy-salt-decoy-salt-0000000000';
  const attempt = await scrypt(String(code || ''), salt);

  if (!user) {
    noteIpAttempt(ip);
    return { error: 'bad_credentials' };
  }

  const a = Buffer.from(attempt, 'hex');
  const b = Buffer.from(user.code_hash, 'hex');
  const ok = a.length === b.length && crypto.timingSafeEqual(a, b);

  if (!ok) {
    noteIpAttempt(ip);
    return { error: 'bad_credentials' };
  }

  await q(`UPDATE users SET last_seen_at = now() WHERE id = $1`, [user.id]);
  return {
    user: { id: user.id, nickname: user.nickname, settings: user.settings },
    token: await issueToken(user.id, device),
  };
}

export async function changeCode({ userId, currentCode, newCode }) {
  const codeErr = validateCode(newCode);
  if (codeErr) return { error: codeErr };

  const { rows } = await q(`SELECT code_hash, code_salt FROM users WHERE id = $1`, [userId]);
  if (!rows[0]) return { error: 'bad_credentials' };

  const attempt = Buffer.from(await scrypt(String(currentCode || ''), rows[0].code_salt), 'hex');
  const stored = Buffer.from(rows[0].code_hash, 'hex');
  if (attempt.length !== stored.length || !crypto.timingSafeEqual(attempt, stored)) {
    return { error: 'bad_credentials' };
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = await scrypt(newCode, salt);
  await q(`UPDATE users SET code_hash = $2, code_salt = $3 WHERE id = $1`, [userId, hash, salt]);
  // Every device signs in again with the new code, including this one.
  await q(`DELETE FROM sessions WHERE user_id = $1`, [userId]);
  return { ok: true };
}

export async function saveSettings(userId, patch) {
  const { rows } = await q(
    `UPDATE users SET settings = settings || $2::jsonb WHERE id = $1 RETURNING settings`,
    [userId, JSON.stringify(patch || {})],
  );
  return rows[0]?.settings || {};
}

async function issueToken(userId, device) {
  const token = crypto.randomBytes(32).toString('base64url');
  await q(
    `INSERT INTO sessions (token_hash, user_id, device, expires_at)
     VALUES ($1, $2, $3, now() + make_interval(days => $4))`,
    [sha256(token), userId, String(device || '').slice(0, 120), SESSION_DAYS],
  );
  return token;
}

export async function userForToken(token) {
  if (!token) return null;
  const hash = sha256(token);
  const { rows } = await q(
    `SELECT u.id, u.nickname, u.settings
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = $1 AND s.expires_at > now()`,
    [hash],
  );
  if (!rows[0]) return null;
  q(`UPDATE sessions SET last_used_at = now() WHERE token_hash = $1`, [hash]).catch(() => {});
  return rows[0];
}

export async function logout(token) {
  if (token) await q(`DELETE FROM sessions WHERE token_hash = $1`, [sha256(token)]);
}

export async function devices(userId) {
  const { rows } = await q(
    `SELECT device, created_at, last_used_at FROM sessions
      WHERE user_id = $1 ORDER BY last_used_at DESC`,
    [userId],
  );
  return rows;
}
