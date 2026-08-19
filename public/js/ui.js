// Small DOM helpers. No framework: the app has five views and a canvas, and a
// framework would be more code than the app.

import { prose } from './tex.js';

/**
 * el('div.card', {onclick}, 'text', childEl)
 * The tag string takes CSS-ish shorthand: 'button.btn.primary', 'span#id'.
 */
export function el(spec, props = null, ...kids) {
  const [head, ...classes] = String(spec).split('.');
  const [tag, id] = head.split('#');
  const node = document.createElement(tag || 'div');
  if (id) node.id = id;
  if (classes.length) node.className = classes.join(' ');

  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') node.className = [node.className, v].filter(Boolean).join(' ');
      else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'tex') node.innerHTML = prose(v);
      else if (k === 'dataset') Object.assign(node.dataset, v);
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k in node && k !== 'list') node[k] = v;
      else node.setAttribute(k, v === true ? '' : v);
    }
  }

  for (const kid of kids.flat(4)) {
    if (kid == null || kid === false) continue;
    node.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return node;
}

export const clear = (node) => { while (node.firstChild) node.removeChild(node.firstChild); return node; };
export const fill = (node, ...kids) => { clear(node); node.append(...kids.flat(4).filter((k) => k != null && k !== false)); return node; };
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ── toast ── */

let toastTimer = null;
export function toast(text, ms = 2600) {
  const node = $('#toast');
  if (!node) return;
  node.textContent = text;
  node.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('on'), ms);
}

/* ── haptics ──
   iOS gives a web app no Taptic Engine, and navigator.vibrate does nothing in
   Safari. This is here so the call sites read honestly rather than pretending;
   on an iPhone it is a no-op, and that is a platform limit, not a bug. */
export const tap = (ms = 8) => { try { navigator.vibrate?.(ms); } catch { /* not on iOS */ } };

/* ── formatting ── */

export const pct = (n) => `${Math.round(n)}%`;

export function ago(ts, lang = 'pl') {
  if (!ts) return '—';
  const s = Math.max(0, (Date.now() - ts) / 1000);
  const pl = lang === 'pl';
  if (s < 60) return pl ? 'przed chwilą' : 'just now';
  if (s < 3600) return `${Math.floor(s / 60)} ${pl ? 'min temu' : 'min ago'}`;
  if (s < 86400) return `${Math.floor(s / 3600)} ${pl ? 'godz. temu' : 'h ago'}`;
  return `${Math.floor(s / 86400)} ${pl ? 'dni temu' : 'd ago'}`;
}

/* ── a mastery bar that shows its own uncertainty ──
   The hatching is load-bearing: a solid bar at 78% claims a precision the
   model does not have after four attempts, and the band shows how wide the
   estimate really is. */
export function bar({ pct: p = 0, lo = null, hi = null, confident = true }) {
  const node = el(`div.bar${confident ? '' : '.unsure'}`, {}, el('i', { style: { width: `${Math.max(0, Math.min(100, p))}%` } }));
  if (lo != null && hi != null && !confident) {
    node.append(el('span.band', { style: { left: `${lo}%`, width: `${Math.max(0, hi - lo)}%` } }));
  }
  return node;
}

/** The last twenty outcomes as a sparkline. */
export function spark(history = []) {
  return el('div.spark', {}, history.slice(-20).map((v) =>
    el(`i.${v >= 99 ? 'hit' : v <= 20 ? 'miss' : ''}`, { style: { height: `${6 + (v / 100) * 16}px` } })));
}

/* ── a four-digit pad bound to a row of dots ── */

export function keypad({ padEl, dotsEl, length = 4, onComplete, onChange }) {
  let value = '';
  const paint = () => {
    [...dotsEl.children].forEach((d, i) => d.classList.toggle('on', i < value.length));
    onChange?.(value);
  };
  const set = (v) => { value = v.slice(0, length); paint(); if (value.length === length) onComplete?.(value); };

  padEl.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    tap();
    if (b.dataset.k === 'back') return set(value.slice(0, -1));
    if (/^\d$/.test(b.textContent.trim())) set(value + b.textContent.trim());
  });

  // A real keyboard should still work — this app runs on a desktop too.
  const onKey = (e) => {
    if (!padEl.isConnected || padEl.offsetParent === null) return;
    if (/^\d$/.test(e.key)) { e.preventDefault(); set(value + e.key); }
    else if (e.key === 'Backspace') { e.preventDefault(); set(value.slice(0, -1)); }
  };
  window.addEventListener('keydown', onKey);

  return {
    clear: () => set(''),
    value: () => value,
    destroy: () => window.removeEventListener('keydown', onKey),
  };
}

/* ── a disclosure row ── */

export function fold(title, buildBody, { open = false } = {}) {
  let built = false;
  const body = el('div', { hidden: !open });
  const caret = el('span', { style: { transition: 'transform .15s ease', display: 'inline-block' } }, '›');
  const head = el('button.row.between', {
    style: { width: '100%', textAlign: 'left', minHeight: '44px' },
    onclick: () => {
      body.hidden = !body.hidden;
      caret.style.transform = body.hidden ? '' : 'rotate(90deg)';
      if (!built && !body.hidden) { built = true; body.append(buildBody()); }
    },
  }, el('span', { style: { fontWeight: '550' } }, title), caret);
  if (open) { built = true; body.append(buildBody()); caret.style.transform = 'rotate(90deg)'; }
  return el('div', {}, head, body);
}

/** Wrap an async action so the button shows it is working and cannot double-fire. */
export function busy(button, label) {
  const original = button.textContent;
  button.disabled = true;
  if (label) button.textContent = label;
  return () => { button.disabled = false; button.textContent = original; };
}
