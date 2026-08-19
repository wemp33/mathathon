// Shape recognition. The bar these tests hold is asymmetric on purpose: a
// missed snap costs the user one extra tap, a wrong snap destroys working they
// cannot get back. So the "must NOT snap" half matters more than the other.
import assert from 'node:assert';
import { recogniseShape } from '../public/js/ink.js';

let pass = 0;
const check = (name, fn) => { fn(); pass++; process.stdout.write(`  ok  ${name}\n`); };

// Draw a path with human jitter, then a still tail — the hold gesture itself.
function draw(fn, n = 60, jitter = 1.6, seed = 7) {
  let s = seed;
  const rnd = () => { s = (s * 1103515245 + 12345) % 2147483648; return (s / 2147483648) * 2 - 1; };
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const q = fn(i / n);
    pts.push({ x: q.x + rnd() * jitter, y: q.y + rnd() * jitter, p: 0.5, t: i * 8 });
  }
  const last = pts[pts.length - 1];
  for (let i = 0; i < 10; i++) pts.push({ x: last.x + rnd() * 0.6, y: last.y + rnd() * 0.6, p: 0.5, t: last.t + 8 * i });
  return pts;
}

const line = (a, b) => draw((s) => ({ x: a[0] + (b[0] - a[0]) * s, y: a[1] + (b[1] - a[1]) * s }), 40);
const circle = (cx, cy, r) => draw((s) => ({ x: cx + Math.cos(s * 2 * Math.PI) * r, y: cy + Math.sin(s * 2 * Math.PI) * r }), 80);
const ellipse = (cx, cy, rx, ry) => draw((s) => ({ x: cx + Math.cos(s * 2 * Math.PI) * rx, y: cy + Math.sin(s * 2 * Math.PI) * ry }), 80);

function poly(corners, per = 22) {
  const pts = [];
  const loop = corners.concat([corners[0]]);
  for (let i = 0; i < loop.length - 1; i++) {
    const seg = draw((s) => ({
      x: loop[i][0] + (loop[i + 1][0] - loop[i][0]) * s,
      y: loop[i][1] + (loop[i + 1][1] - loop[i][1]) * s,
    }), per, 1.4, 11 + i * 3).slice(0, per + 1);
    pts.push(...(i ? seg.slice(1) : seg));
  }
  const last = pts[pts.length - 1];
  for (let i = 0; i < 10; i++) pts.push({ x: last.x, y: last.y, p: 0.5, t: last.t + i });
  return pts;
}

/* ── shapes that must be recognised ── */

check('a straight stroke becomes a line', () => {
  const r = recogniseShape(line([40, 200], [320, 205]));
  assert.equal(r?.kind, 'line');
});

check('a nearly-horizontal line snaps flat', () => {
  const r = recogniseShape(line([40, 200], [320, 209]));
  assert.equal(r.kind, 'line');
  const dy = Math.abs(r.pts[0].y - r.pts[r.pts.length - 1].y);
  assert.ok(dy < 1, `expected a flat line, got dy=${dy}`);
});

check('a diagonal near 45° snaps to exactly 45°', () => {
  const r = recogniseShape(line([50, 300], [250, 108]));
  const a = Math.atan2(r.pts[r.pts.length - 1].y - r.pts[0].y, r.pts[r.pts.length - 1].x - r.pts[0].x);
  assert.ok(Math.abs(Math.abs(a) - Math.PI / 4) < 1e-6, `angle ${a}`);
});

check('a round loop becomes a circle', () => {
  assert.equal(recogniseShape(circle(200, 200, 80))?.kind, 'circle');
});

check('a squashed loop becomes an ellipse', () => {
  assert.equal(recogniseShape(ellipse(200, 200, 120, 50))?.kind, 'ellipse');
});

check('a box becomes a rectangle with square corners', () => {
  const r = recogniseShape(poly([[60, 60], [260, 64], [258, 190], [62, 186]]));
  assert.equal(r?.kind, 'rect');
  const xs = r.pts.map((p) => p.x), ys = r.pts.map((p) => p.y);
  // Every point must sit on one of the four axis-aligned edges.
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  for (const p of r.pts) {
    const onEdge = Math.abs(p.x - x0) < 0.01 || Math.abs(p.x - x1) < 0.01
      || Math.abs(p.y - y0) < 0.01 || Math.abs(p.y - y1) < 0.01;
    assert.ok(onEdge, `point off the box: ${p.x},${p.y}`);
  }
});

check('three corners become a triangle', () => {
  const r = recogniseShape(poly([[150, 50], [260, 220], [40, 216]]));
  assert.ok(r && (r.kind === 'triangle' || r.kind === 'polygon'), `got ${r?.kind}`);
});

/* ── the half that matters more: things that must NOT snap ── */

check('handwriting is left alone', () => {
  // A cursive-ish scribble: several reversals, open ends.
  const pts = draw((s) => ({
    x: 40 + s * 240,
    y: 200 + Math.sin(s * 14) * 26 + Math.sin(s * 41) * 9,
  }), 140, 1.2);
  assert.equal(recogniseShape(pts), null);
});

check('a lone digit is left alone', () => {
  // A "2", drawn as one continuous stroke: an arc over the top from the
  // upper-left, a diagonal sweeping down to the bottom-left, then the base
  // stroke to the right. Three phases that must join without jumping.
  const arcEnd = { x: 86 + 26, y: 106 };          // where the top arc finishes
  const baseL = { x: 60, y: 168 };                 // bottom-left of the diagonal
  const pts = draw((s) => {
    if (s < 0.5) {                                 // top arc, upper-left → right
      const a = Math.PI * (1 - s / 0.5);           // π → 0
      return { x: 86 + Math.cos(a) * 26, y: 106 - Math.sin(a) * 26 };
    }
    if (s < 0.8) {                                 // diagonal down-left
      const k = (s - 0.5) / 0.3;
      return { x: arcEnd.x + (baseL.x - arcEnd.x) * k, y: arcEnd.y + (baseL.y - arcEnd.y) * k };
    }
    const k = (s - 0.8) / 0.2;                     // base, left → right
    return { x: baseL.x + 56 * k, y: baseL.y };
  }, 90, 1.0);
  assert.equal(recogniseShape(pts), null, 'a digit must never snap');
});

check('an open arc does not become a circle', () => {
  const pts = draw((s) => ({ x: 200 + Math.cos(s * Math.PI * 1.1) * 80, y: 200 + Math.sin(s * Math.PI * 1.1) * 80 }), 60);
  assert.equal(recogniseShape(pts), null);
});

check('a tiny mark never snaps', () => {
  assert.equal(recogniseShape(circle(100, 100, 7)), null);
  assert.equal(recogniseShape(line([100, 100], [112, 101])), null);
});

check('a wobbly curve is not forced into a line', () => {
  const pts = draw((s) => ({ x: 40 + s * 260, y: 200 + Math.sin(s * Math.PI) * 46 }), 60, 1.0);
  const r = recogniseShape(pts);
  assert.notEqual(r?.kind, 'line', 'a visible bow must not flatten');
});

check('too few points never snaps', () => {
  assert.equal(recogniseShape([{ x: 0, y: 0, p: 1, t: 0 }, { x: 10, y: 0, p: 1, t: 1 }]), null);
});

/* ── the output must be usable as an ordinary stroke ── */

check('snapped output carries pressure and time on every point', () => {
  for (const r of [recogniseShape(circle(200, 200, 80)), recogniseShape(line([40, 40], [300, 44]))]) {
    assert.ok(r.pts.length > 8);
    for (const p of r.pts) {
      assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y), 'finite coords');
      assert.ok(typeof p.p === 'number' && typeof p.t === 'number', 'pressure and time present');
    }
  }
});

process.stdout.write(`\n${pass}/${pass} checks passed\nShape recognition behaves.\n`);
