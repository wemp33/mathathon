// Charts, drawn as inline SVG.
//
// Two jobs, one renderer:
//   • plot(fns, opts) — graphs of the functions a problem is actually about,
//     so "naszkicuj wykres" has something to check against and the tutor can
//     point at a picture instead of describing one.
//   • The Postęp view's history chart.
//
// Hand-rolled rather than a library: a chart library is bigger than this whole
// app, and none of them know that a rational function must break at its
// asymptote rather than draw a vertical line across the screen.
//
// Colour follows the app's single gradient. Series are distinguished by hue
// taken from that ramp, never by a per-series arbitrary palette.

const NS = 'http://www.w3.org/2000/svg';

// Stops of the Antigravity ramp, used in order for successive series.
export const SERIES = ['#2B62EE', '#DF4038', '#35B27C', '#EE6B2E', '#7A5AF0'];

const svg = (tag, attrs = {}) => {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) n.setAttribute(k, String(v));
  return n;
};

/** A "nice" step for axis ticks: 1, 2, 5 × a power of ten. */
function niceStep(range, target = 8) {
  const raw = range / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
  return step * mag;
}

const fmt = (v, step) => {
  const dp = Math.max(0, -Math.floor(Math.log10(step)));
  const s = v.toFixed(Math.min(dp, 4));
  // Polish decimal comma, and no "-0".
  return (Number(s) === 0 ? '0' : s).replace('.', ',');
};

/**
 * Plot one or more functions.
 *
 * @param {Array<{f:(x:number)=>number, label?:string, dash?:boolean}>} fns
 * @param {object} opts  xMin xMax yMin yMax width height points grid
 * @returns {SVGElement}
 */
export function plot(fns, opts = {}) {
  const {
    xMin = -6, xMax = 6, width = 640, height = 400,
    samples = 900, padding = 30, title = '',
  } = opts;

  // Sample first, so the y-range can be derived from what is actually drawn
  // rather than guessed — a function with a pole would otherwise force a
  // useless scale of ±10^9.
  const series = fns.map(({ f, label, dash }) => {
    const pts = [];
    for (let i = 0; i <= samples; i++) {
      const x = xMin + ((xMax - xMin) * i) / samples;
      let y;
      try { y = f(x); } catch { y = NaN; }
      pts.push({ x, y: Number.isFinite(y) ? y : NaN });
    }
    return { pts, label, dash };
  });

  let yMin = opts.yMin;
  let yMax = opts.yMax;
  if (yMin == null || yMax == null) {
    // Robust range: drop the extreme 2% at each end so one pole does not set
    // the scale for the whole picture.
    const ys = series.flatMap((s) => s.pts.map((p) => p.y)).filter(Number.isFinite).sort((a, b) => a - b);
    if (!ys.length) { yMin = -1; yMax = 1; } else {
      const lo = ys[Math.floor(ys.length * 0.02)];
      const hi = ys[Math.floor(ys.length * 0.98)];
      const pad = Math.max((hi - lo) * 0.12, 0.5);
      yMin = opts.yMin ?? lo - pad;
      yMax = opts.yMax ?? hi + pad;
    }
  }
  if (yMax - yMin < 1e-9) { yMin -= 1; yMax += 1; }

  const W = width - padding * 2;
  const H = height - padding * 2;
  const sx = (x) => padding + ((x - xMin) / (xMax - xMin)) * W;
  const sy = (y) => padding + H - ((y - yMin) / (yMax - yMin)) * H;

  const root = svg('svg', {
    viewBox: `0 0 ${width} ${height}`,
    width: '100%',
    role: 'img',
    'aria-label': title || 'wykres',
    style: 'display:block;max-width:100%;height:auto',
  });

  /* ── grid and axes ── */
  const xStep = niceStep(xMax - xMin);
  const yStep = niceStep(yMax - yMin);
  const grid = svg('g', { stroke: 'var(--line)', 'stroke-width': '1' });
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + 1e-9; x += xStep) {
    grid.append(svg('line', { x1: sx(x), y1: padding, x2: sx(x), y2: padding + H }));
  }
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + 1e-9; y += yStep) {
    grid.append(svg('line', { x1: padding, y1: sy(y), x2: padding + W, y2: sy(y) }));
  }
  root.append(grid);

  const axes = svg('g', { stroke: 'var(--ink-2)', 'stroke-width': '1.4' });
  if (yMin <= 0 && yMax >= 0) axes.append(svg('line', { x1: padding, y1: sy(0), x2: padding + W, y2: sy(0) }));
  if (xMin <= 0 && xMax >= 0) axes.append(svg('line', { x1: sx(0), y1: padding, x2: sx(0), y2: padding + H }));
  root.append(axes);

  const labels = svg('g', { fill: 'var(--muted)', 'font-size': '11', 'font-family': 'system-ui, sans-serif' });
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + 1e-9; x += xStep) {
    if (Math.abs(x) < 1e-9) continue;
    labels.append(Object.assign(svg('text', {
      x: sx(x), y: (yMin <= 0 && yMax >= 0 ? sy(0) + 14 : padding + H + 14), 'text-anchor': 'middle',
    }), { textContent: fmt(x, xStep) }));
  }
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + 1e-9; y += yStep) {
    if (Math.abs(y) < 1e-9) continue;
    labels.append(Object.assign(svg('text', {
      x: (xMin <= 0 && xMax >= 0 ? sx(0) - 6 : padding - 6), y: sy(y) + 4, 'text-anchor': 'end',
    }), { textContent: fmt(y, yStep) }));
  }
  root.append(labels);

  /* ── the curves ── */
  series.forEach((s, i) => {
    const colour = SERIES[i % SERIES.length];
    // A path is broken wherever the function is undefined OR jumps by more
    // than a screenful — that is what stops a rational function from being
    // drawn with a vertical line through its asymptote.
    const jumpLimit = (yMax - yMin) * 0.6;
    let d = '';
    let penDown = false;
    let prev = null;
    for (const p of s.pts) {
      const bad = !Number.isFinite(p.y) || p.y < yMin - (yMax - yMin) * 4 || p.y > yMax + (yMax - yMin) * 4;
      if (bad) { penDown = false; prev = null; continue; }
      if (penDown && prev && Math.abs(p.y - prev.y) > jumpLimit) { penDown = false; prev = null; }
      d += `${penDown ? 'L' : 'M'}${sx(p.x).toFixed(2)} ${sy(p.y).toFixed(2)}`;
      penDown = true;
      prev = p;
    }
    root.append(svg('path', {
      d, fill: 'none', stroke: colour, 'stroke-width': '2.2',
      'stroke-linejoin': 'round', 'stroke-linecap': 'round',
      'stroke-dasharray': s.dash ? '6 5' : null,
    }));
  });

  /* ── legend, only when it earns its place ── */
  if (series.some((s) => s.label) && series.length > 1) {
    const g = svg('g', { 'font-size': '12', 'font-family': 'system-ui, sans-serif' });
    series.forEach((s, i) => {
      if (!s.label) return;
      const y = padding + 4 + i * 18;
      g.append(svg('line', {
        x1: padding + 8, y1: y, x2: padding + 28, y2: y,
        stroke: SERIES[i % SERIES.length], 'stroke-width': '2.6',
        'stroke-dasharray': s.dash ? '6 5' : null,
      }));
      g.append(Object.assign(svg('text', { x: padding + 34, y: y + 4, fill: 'var(--ink-2)' }), { textContent: s.label }));
    });
    root.append(g);
  }

  return root;
}

/**
 * Compile a small arithmetic expression in x into a function.
 *
 * Deliberately not `new Function`: the expression can come from a model, and
 * the app must not hand arbitrary strings to the JS engine. This parses only
 * arithmetic, the standard functions, and the constants — anything else is
 * rejected rather than evaluated.
 */
export function compile(expr) {
  const src = String(expr).toLowerCase().replace(/\s+/g, '');
  let i = 0;

  const FUNCS = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan, tg: Math.tan,
    ctg: (v) => 1 / Math.tan(v), cot: (v) => 1 / Math.tan(v),
    asin: Math.asin, arcsin: Math.asin, acos: Math.acos, arccos: Math.acos,
    atan: Math.atan, arctg: Math.atan, arctan: Math.atan,
    ln: Math.log, log: Math.log10, exp: Math.exp,
    sqrt: Math.sqrt, abs: Math.abs, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
    floor: Math.floor, ceil: Math.ceil, sign: Math.sign,
  };
  const CONSTS = { pi: Math.PI, e: Math.E };

  const peek = () => src[i];
  const eat = (c) => (src[i] === c ? (i++, true) : false);

  function expression() {
    let v = term();
    for (;;) {
      if (eat('+')) v = add(v, term());
      else if (eat('-')) v = sub(v, term());
      else return v;
    }
  }
  function term() {
    let v = unary();
    for (;;) {
      if (eat('*')) v = mul(v, unary());
      else if (eat('/')) v = div(v, unary());
      else return v;
    }
  }
  function unary() {
    if (eat('-')) { const v = unary(); return (x) => -v(x); }
    if (eat('+')) return unary();
    return power();
  }
  function power() {
    const base = atom();
    if (eat('^')) { const ex = unary(); return (x) => base(x) ** ex(x); }
    return base;
  }
  function atom() {
    if (eat('(')) { const v = expression(); if (!eat(')')) throw new Error('expected )'); return v; }
    const num = /^\d+(\.\d+)?/.exec(src.slice(i));
    if (num) { i += num[0].length; const n = Number(num[0]); return () => n; }
    const word = /^[a-z]+/.exec(src.slice(i));
    if (word) {
      const w = word[0];
      i += w.length;
      if (w === 'x') return (x) => x;
      if (Object.hasOwn(CONSTS, w)) { const c = CONSTS[w]; return () => c; }
      if (Object.hasOwn(FUNCS, w)) {
        if (!eat('(')) throw new Error(`expected ( after ${w}`);
        const arg = expression();
        if (!eat(')')) throw new Error('expected )');
        const fn = FUNCS[w];
        return (x) => fn(arg(x));
      }
      throw new Error(`unknown name ${w}`);
    }
    throw new Error(`unexpected ${peek() ?? 'end'}`);
  }

  const add = (a, b) => (x) => a(x) + b(x);
  const sub = (a, b) => (x) => a(x) - b(x);
  const mul = (a, b) => (x) => a(x) * b(x);
  const div = (a, b) => (x) => a(x) / b(x);

  const fn = expression();
  if (i < src.length) throw new Error(`trailing "${src.slice(i)}"`);
  return fn;
}

/** `plotExpr('x^2-3', {…})` — convenience for the common single-curve case. */
export function plotExpr(exprs, opts = {}) {
  const list = (Array.isArray(exprs) ? exprs : [exprs]).map((e) => {
    const src = typeof e === 'string' ? e : e.expr;
    return { f: compile(src), label: (typeof e === 'string' ? null : e.label) ?? `y = ${src}`, dash: e.dash };
  });
  return plot(list, opts);
}
