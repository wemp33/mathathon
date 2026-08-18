// Per-user API keys, encrypted at rest and never returned to the browser.
//
// The key is entered in the app rather than set on Railway so the user can
// change it from their phone, and it stays server-side so the browser bundle
// can never leak it. Only ever exposed as a masked tail (…AB12) plus whether
// it verified.
import crypto from 'node:crypto';
import { q } from './db.js';

const ALGO = 'aes-256-gcm';

let cachedSecret = null;

// APP_SECRET if set; otherwise a generated one, stored once in server_meta so
// keys survive a redeploy. Losing it only means re-entering the API key.
async function secret() {
  if (cachedSecret) return cachedSecret;
  const env = process.env.APP_SECRET;
  if (env) {
    cachedSecret = crypto.createHash('sha256').update(env).digest();
    return cachedSecret;
  }
  const { rows } = await q(`SELECT value FROM server_meta WHERE key = 'app_secret'`);
  let hex = rows[0]?.value;
  if (!hex) {
    hex = crypto.randomBytes(32).toString('hex');
    await q(
      `INSERT INTO server_meta (key, value) VALUES ('app_secret', $1)
       ON CONFLICT (key) DO NOTHING`,
      [hex],
    );
    const again = await q(`SELECT value FROM server_meta WHERE key = 'app_secret'`);
    hex = again.rows[0].value;
  }
  cachedSecret = Buffer.from(hex, 'hex');
  return cachedSecret;
}

async function encrypt(plain) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGO, await secret(), iv);
  const enc = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()]);
  return [iv.toString('base64'), cipher.getAuthTag().toString('base64'), enc.toString('base64')].join('.');
}

async function decrypt(packed) {
  if (!packed || typeof packed !== 'string') return null;
  const [ivB, tagB, dataB] = packed.split('.');
  if (!ivB || !tagB || !dataB) return null;
  try {
    const decipher = crypto.createDecipheriv(ALGO, await secret(), Buffer.from(ivB, 'base64'));
    decipher.setAuthTag(Buffer.from(tagB, 'base64'));
    return Buffer.concat([decipher.update(Buffer.from(dataB, 'base64')), decipher.final()]).toString('utf8');
  } catch {
    // Wrong secret (APP_SECRET changed) — treat as no key rather than crashing.
    return null;
  }
}

const mask = (key) => (key && key.length > 8 ? `…${key.slice(-4)}` : '…');

/** Verify a key against Anthropic before storing it, so a typo is caught here
 *  and not in the middle of a training session. */
async function verifyAnthropic(key) {
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1,
        messages: [{ role: 'user', content: 'hi' }],
      }),
    });
    // 200 or a 400 about max_tokens both mean the key authenticated.
    if (res.ok) return { ok: true };
    if (res.status === 401 || res.status === 403) return { ok: false, error: 'key_rejected' };
    if (res.status === 429) return { ok: true, warning: 'rate_limited' };
    const body = await res.text();
    if (res.status === 400 && !/authentication|api[_ ]key/i.test(body)) return { ok: true };
    return { ok: false, error: 'key_rejected' };
  } catch {
    return { ok: false, error: 'verify_failed' };
  }
}

export async function setKey(userId, provider, value) {
  if (provider !== 'anthropic') return { error: 'unknown_provider' };
  const key = String(value || '').trim();
  if (!key) return { error: 'empty_key' };
  if (!/^sk-ant-/.test(key)) return { error: 'key_format' };

  const check = await verifyAnthropic(key);
  if (!check.ok) return { error: check.error };

  const packed = await encrypt(key);
  await q(
    `UPDATE users SET keys = keys || jsonb_build_object($2::text, jsonb_build_object(
       'v', $3::text, 'tail', $4::text, 'at', $5::bigint))
      WHERE id = $1`,
    [userId, provider, packed, mask(key), Date.now()],
  );
  return { ok: true, tail: mask(key), warning: check.warning };
}

export async function clearKey(userId, provider) {
  await q(`UPDATE users SET keys = keys - $2::text WHERE id = $1`, [userId, provider]);
  return { ok: true };
}

/** What the browser is allowed to know: that a key exists, and its last four. */
export async function keyStatus(userId) {
  const { rows } = await q(`SELECT keys FROM users WHERE id = $1`, [userId]);
  const keys = rows[0]?.keys || {};
  const out = {};
  for (const [provider, rec] of Object.entries(keys)) {
    out[provider] = { present: true, tail: rec.tail || '…', at: Number(rec.at) || null };
  }
  return out;
}

/** Server-side only. Falls back to a shared env key if one is configured, so a
 *  fresh install is usable before the user has pasted anything. */
export async function keyFor(userId, provider = 'anthropic') {
  const { rows } = await q(`SELECT keys FROM users WHERE id = $1`, [userId]);
  const packed = rows[0]?.keys?.[provider]?.v;
  const own = await decrypt(packed);
  if (own) return own;
  if (provider === 'anthropic' && process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  return null;
}
