// Service worker.
//
// The shell is cached so the app opens instantly and works with no signal —
// the formula sheet in particular, which is the screen most likely to be
// wanted on a train. API calls are never cached: a stale problem, a stale
// verdict or a stale mastery figure is worse than an honest failure.

const VERSION = 'mathathon-v1';

const SHELL = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/js/main.js',
  '/js/api.js',
  '/js/store.js',
  '/js/ui.js',
  '/js/i18n.js',
  '/js/tex.js',
  '/js/ink.js',
  '/js/srs.js',
  '/js/train.js',
  '/js/quiz.js',
  '/js/formulas.js',
  '/js/progress.js',
  '/js/settings.js',
  '/icons/mark.svg',
  '/icons/favicon.svg',
  '/icons/icon-180.png',
  '/icons/icon-192.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    // One missing file must not fail the whole install and leave the app
    // permanently un-cached, so each is added on its own.
    await Promise.all(SHELL.map((url) => cache.add(url).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== VERSION) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname === '/healthz') return;

  // Network-first for the shell, so a deploy reaches an installed app on the
  // next launch rather than being hidden behind a cache for a week.
  e.respondWith((async () => {
    try {
      const fresh = await fetch(request);
      if (fresh.ok) {
        const cache = await caches.open(VERSION);
        cache.put(request, fresh.clone()).catch(() => {});
      }
      return fresh;
    } catch {
      const hit = await caches.match(request);
      if (hit) return hit;
      // A client-routed path that was never visited still gets the shell.
      if (request.mode === 'navigate') {
        const shell = await caches.match('/index.html');
        if (shell) return shell;
      }
      return new Response('offline', { status: 503, headers: { 'content-type': 'text/plain' } });
    }
  })());
});
