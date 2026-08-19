// The one place that talks to the server.
//
// The token lives in localStorage rather than a cookie because an installed iOS
// PWA and Safari do not always share a cookie jar, and being signed out every
// time you open the app from the home screen is the fastest way to stop using it.

const TOKEN_KEY = 'mathathon.token';
const USER_KEY = 'mathathon.user';

export const token = () => localStorage.getItem(TOKEN_KEY);
export const user = () => { try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; } };
export const signedIn = () => Boolean(token());

function remember(out) {
  if (out.token) localStorage.setItem(TOKEN_KEY, out.token);
  if (out.user) localStorage.setItem(USER_KEY, JSON.stringify(out.user));
  return out;
}

export function forget() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

/** Thrown with a `code` the UI can translate, rather than a raw message. */
export class ApiError extends Error {
  constructor(code, status, extra = {}) {
    super(code);
    this.code = code;
    this.status = status;
    Object.assign(this, extra);
  }
}

async function call(method, path, body, { timeout = 120_000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  let res;
  try {
    res = await fetch(path, {
      method,
      signal: ctrl.signal,
      headers: {
        ...(body === undefined ? {} : { 'content-type': 'application/json' }),
        ...(token() ? { authorization: `Bearer ${token()}` } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch (e) {
    throw new ApiError(e.name === 'AbortError' ? 'timeout' : 'network', 0);
  } finally {
    clearTimeout(timer);
  }

  let data = null;
  try { data = await res.json(); } catch { /* empty or non-JSON body */ }

  if (!res.ok) {
    // A dead token means the account was signed out elsewhere or the code was
    // changed; drop it so the gate reappears instead of every call failing.
    if (res.status === 401) forget();
    throw new ApiError(data?.error || `http_${res.status}`, res.status, data || {});
  }
  return data;
}

const get = (p, o) => call('GET', p, undefined, o);
const post = (p, b, o) => call('POST', p, b ?? {}, o);
const del = (p, o) => call('DELETE', p, undefined, o);

const device = () => {
  const ua = navigator.userAgent;
  const kind = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? 'iPad'
    : /iPhone/.test(ua) ? 'iPhone' : /Android/.test(ua) ? 'Android' : 'Desktop';
  return `${kind} · ${navigator.language}`;
};

export const api = {
  health: () => get('/api/health'),

  register: (nickname, code) => post('/api/auth/register', { nickname, code, device: device() }).then(remember),
  login: (nickname, code) => post('/api/auth/login', { nickname, code, device: device() }).then(remember),
  logout: () => post('/api/auth/logout').catch(() => {}).finally(forget),
  me: () => get('/api/auth/me'),
  changeCode: (currentCode, newCode) => post('/api/auth/code', { currentCode, newCode }),
  saveSettings: (patch) => post('/api/auth/settings', patch),

  pull: (since) => get(`/api/sync/pull?since=${Number(since) || 0}`),
  push: (records) => post('/api/sync/push', { records }),

  tree: () => get('/api/content/tree'),
  drills: () => get('/api/content/drills'),

  next: (opts) => post('/api/practice/next', opts),
  mark: (problemId, answer, lang, problem) => post('/api/practice/mark', { problemId, answer, lang, problem }),
  // Reading a page of handwriting is a slow call — the model is solving the
  // problem itself before it reads yours — so it gets a long leash.
  critique: (problemId, png, previous, lang, problem) =>
    post('/api/practice/critique', { problemId, png, previous, lang, problem }, { timeout: 180_000 }),
  generate: (opts) => post('/api/practice/generate', opts, { timeout: 180_000 }),
  record: (skillId, level, score) => post('/api/practice/record', { skillId, level, score }),
  progress: () => get('/api/progress'),

  tutor: (payload) => post('/api/tutor', payload),
  explain: (formulaId, lang) => post('/api/explain', { formulaId, lang }),

  keys: () => get('/api/keys'),
  setKey: (value, provider = 'anthropic') => post('/api/keys', { provider, value }, { timeout: 60_000 }),
  clearKey: (provider = 'anthropic') => del(`/api/keys?provider=${provider}`),
  usage: () => get('/api/usage'),
};
