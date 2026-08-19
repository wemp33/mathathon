// The inking engine.
//
// What actually makes handwriting feel right, in order of how much it matters:
//   1. Variable stroke width. A moveTo/lineTo path is a constant-width noodle
//      and no amount of smoothing rescues it. Ink is rendered here as a filled
//      outline whose half-width tracks pen pressure.
//   2. The full sample rate. Apple Pencil samples at up to 240 Hz while
//      pointermove fires at ~60 Hz, so three quarters of the stroke is thrown
//      away unless getCoalescedEvents() is used. That is the real cause of the
//      "why are my curves segmented" complaint on iPad.
//   3. Latency. The in-progress stroke lives on its own desynchronized canvas
//      that is cleared and repainted each frame, so finished ink is never
//      redrawn; a predicted tail is drawn ahead of the pen and discarded.
//   4. Palm rejection. Safari has a long-standing bug where a resting palm
//      draws a line from the palm to the pen tip, so touch input is ignored
//      outright once a pen has been seen.
//
// Strokes, not pixels, are the source of truth: recognition, replay, critique
// and re-rendering at any zoom all read the same {x, y, p, t} arrays.

/* ═══ geometry ═══════════════════════════════════════════════════════════ */

const lerp = (a, b, k) => a + (b - a) * k;
const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

// Exponential smoothing along the path. Higher `streamline` lags further behind
// the pen; handwriting wants less of it than drawing does, because the lag
// eats the small strokes that letters are made of.
function streamlinePoints(pts, streamline) {
  if (pts.length < 2 || streamline <= 0) return pts.slice();
  const k = 1 - streamline;
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const prev = out[out.length - 1];
    out.push({
      x: lerp(prev.x, pts[i].x, k),
      y: lerp(prev.y, pts[i].y, k),
      p: pts[i].p,
      t: pts[i].t,
    });
  }
  return out;
}

// Half-width at a point. `thinning` is how much pressure is allowed to matter.
function radiusAt(pressure, size, thinning) {
  const base = size / 2;
  if (!thinning) return base;
  const p = Math.min(1, Math.max(0, pressure));
  return base * (1 - thinning * (1 - p));
}

// Turn a point list into a closed polygon that can be filled. Walk the left
// side forward and the right side back, with arc caps at both ends.
export function strokeOutline(rawPts, {
  size = 6,
  thinning = 0.55,
  streamline = 0.38,
  taperStart = 0,
  taperEnd = 0,
} = {}) {
  if (!rawPts.length) return [];

  // Drop duplicate samples; a stationary pen otherwise produces NaN normals.
  const dedup = [rawPts[0]];
  for (let i = 1; i < rawPts.length; i++) {
    if (dist(dedup[dedup.length - 1], rawPts[i]) > 0.08) dedup.push(rawPts[i]);
  }

  // A dot: a single tap should leave a round mark, not nothing.
  if (dedup.length === 1) {
    const r = radiusAt(dedup[0].p, size, thinning);
    const c = dedup[0];
    const ring = [];
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      ring.push([c.x + Math.cos(a) * r, c.y + Math.sin(a) * r]);
    }
    return ring;
  }

  const pts = streamlinePoints(dedup, streamline);

  // Running length, so tapers can be expressed in pixels from each end.
  const lens = [0];
  for (let i = 1; i < pts.length; i++) lens.push(lens[i - 1] + dist(pts[i - 1], pts[i]));
  const total = lens[lens.length - 1] || 1;

  const left = [];
  const right = [];

  for (let i = 0; i < pts.length; i++) {
    const prev = pts[i - 1] || pts[i];
    const next = pts[i + 1] || pts[i];
    let nx = next.x - prev.x;
    let ny = next.y - prev.y;
    const len = Math.hypot(nx, ny) || 1;
    nx /= len; ny /= len;
    // Perpendicular.
    const px = -ny;
    const py = nx;

    let r = radiusAt(pts[i].p, size, thinning);
    if (taperStart) r *= Math.min(1, lens[i] / taperStart);
    if (taperEnd) r *= Math.min(1, (total - lens[i]) / taperEnd);
    r = Math.max(r, 0.15);

    left.push([pts[i].x + px * r, pts[i].y + py * r]);
    right.push([pts[i].x - px * r, pts[i].y - py * r]);
  }

  // Round caps, so the stroke ends in a nib rather than a chopped rectangle.
  const cap = (centre, from, to, steps = 8) => {
    const a0 = Math.atan2(from[1] - centre.y, from[0] - centre.x);
    let a1 = Math.atan2(to[1] - centre.y, to[0] - centre.x);
    while (a1 < a0) a1 += Math.PI * 2;
    const out = [];
    for (let i = 1; i < steps; i++) {
      const a = lerp(a0, a1, i / steps);
      const r = Math.hypot(from[0] - centre.x, from[1] - centre.y);
      out.push([centre.x + Math.cos(a) * r, centre.y + Math.sin(a) * r]);
    }
    return out;
  };

  const endCap = cap(pts[pts.length - 1], left[left.length - 1], right[right.length - 1]);
  const startCap = cap(pts[0], right[0], left[0]);

  return [...left, ...endCap, ...right.reverse(), ...startCap];
}

export function outlineToPath2D(outline) {
  const path = new Path2D();
  if (!outline.length) return path;
  path.moveTo(outline[0][0], outline[0][1]);
  // Quadratic through midpoints: rounds off the polygon's corners for free.
  for (let i = 1; i < outline.length; i++) {
    const a = outline[i - 1];
    const b = outline[i];
    path.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
  }
  path.closePath();
  return path;
}

/* ═══ shape recognition ══════════════════════════════════════════════════
   The Notability gesture: draw a shape and hold the pen still without lifting;
   the rough stroke snaps to clean geometry. Recognition is deliberately
   conservative — a snap that misfires on handwriting is worse than no snap at
   all, so anything ambiguous is left as ink. Snapped shapes stay ordinary
   strokes whose points lie on the clean curve: the renderer, the sync format
   and the critique PNG all keep working unchanged.                          */

const centroidOf = (pts) => {
  let x = 0, y = 0;
  for (const p of pts) { x += p.x; y += p.y; }
  return { x: x / pts.length, y: y / pts.length };
};

const pathLength = (pts) => {
  let L = 0;
  for (let i = 1; i < pts.length; i++) L += dist(pts[i - 1], pts[i]);
  return L;
};

// Perpendicular distance of p from the a→b line.
function perpDist(p, a, b) {
  const vx = b.x - a.x, vy = b.y - a.y;
  const len = Math.hypot(vx, vy) || 1;
  return Math.abs((p.x - a.x) * vy - (p.y - a.y) * vx) / len;
}

/**
 * Corners of a CLOSED path.
 *
 * Ramer-Douglas-Peucker cannot be run on a loop directly: its first and last
 * points coincide, so the baseline it measures every deviation against has
 * zero length, every distance comes out ~0, and it happily reports that the
 * whole rectangle is one straight segment. Splitting the loop at the point
 * farthest from the start gives two open arcs, which RDP handles correctly.
 */
function cornersOfClosed(pts, eps) {
  let far = 0;
  let farD = -1;
  for (let i = 1; i < pts.length; i++) {
    const d = dist(pts[0], pts[i]);
    if (d > farD) { farD = d; far = i; }
  }
  if (far < 2 || far > pts.length - 3) return rdp(pts, eps);
  const a = rdp(pts.slice(0, far + 1), eps);
  const b = rdp(pts.slice(far), eps);
  return a.slice(0, -1).concat(b);
}

// Ramer-Douglas-Peucker, used to find a polygon's corners.
function rdp(pts, eps) {
  if (pts.length < 3) return pts.slice();
  let maxD = 0, idx = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = perpDist(pts[i], pts[0], pts[pts.length - 1]);
    if (d > maxD) { maxD = d; idx = i; }
  }
  if (maxD <= eps) return [pts[0], pts[pts.length - 1]];
  const left = rdp(pts.slice(0, idx + 1), eps);
  return left.slice(0, -1).concat(rdp(pts.slice(idx), eps));
}

/**
 * Try to read a stroke as a shape. Returns null when unsure.
 * @returns {null | {kind:'line'|'circle'|'ellipse'|'rect'|'triangle'|'polygon', pts:Array}}
 */
export function recogniseShape(rawPts) {
  // The tail of the stroke is the hold itself — jittering on one spot — and
  // would drag every fit toward that point, so it is trimmed first.
  const pts = trimHoldTail(rawPts);
  if (pts.length < 8) return null;

  const L = pathLength(pts);
  const chord = dist(pts[0], pts[pts.length - 1]);
  const box = boundsOf(pts);
  const diag = Math.hypot(box.w, box.h);
  if (diag < 24) return null;              // too small to mean anything

  /* ---- line: the path barely exceeds its chord and stays near it ---- */
  if (chord > 30 && L / chord < 1.08) {
    let maxDev = 0;
    for (const p of pts) maxDev = Math.max(maxDev, perpDist(p, pts[0], pts[pts.length - 1]));
    if (maxDev < Math.max(6, chord * 0.045)) {
      let a = { ...pts[0] }, b = { ...pts[pts.length - 1] };
      // Snap to horizontal / vertical / 45° when within a few degrees —
      // axes and asymptotes are what these lines usually are.
      const ang = Math.atan2(b.y - a.y, b.x - a.x);
      const step = Math.PI / 4;
      const snapped = Math.round(ang / step) * step;
      if (Math.abs(ang - snapped) < 0.09) {
        const len = dist(a, b);
        b = { x: a.x + Math.cos(snapped) * len, y: a.y + Math.sin(snapped) * len, p: b.p, t: b.t };
      }
      return { kind: 'line', pts: sampleLine(a, b) };
    }
    return null;
  }

  /* ---- closed shapes: the pen came back to its start ---- */
  if (chord > diag * 0.28) return null;    // open curve — leave as ink

  const c = centroidOf(pts);
  const radii = pts.map((p) => Math.hypot(p.x - c.x, p.y - c.y));
  const rMean = radii.reduce((a, r) => a + r, 0) / radii.length;

  // Circle: radius variation small relative to the mean.
  const rVar = Math.sqrt(radii.reduce((a, r) => a + (r - rMean) ** 2, 0) / radii.length);
  if (rVar / rMean < 0.13 && rMean > 14) {
    return { kind: 'circle', pts: sampleEllipse(c, rMean, rMean) };
  }

  // Corner count separates rectangles and triangles from ellipses.
  const corners = cornersOfClosed(closeUp(pts), Math.max(7, diag * 0.045));
  const nCorners = corners.length - 1;     // first == last after closing

  if (nCorners === 4) {
    // Rectangle when the sides alternate near-horizontal / near-vertical, or
    // at least meet at roughly right angles; otherwise an honest quadrilateral.
    const rect = fitRect(corners);
    if (rect) return { kind: 'rect', pts: rect };
    return { kind: 'polygon', pts: samplePolygon(corners) };
  }
  if (nCorners === 3) {
    return { kind: 'triangle', pts: samplePolygon(corners) };
  }

  // Ellipse: everything round that was not round enough to be a circle.
  const rx = box.w / 2, ry = box.h / 2;
  if (rx > 12 && ry > 12) {
    const cc = { x: box.x + rx, y: box.y + ry };
    let dev = 0;
    for (const p of pts) {
      const nx = (p.x - cc.x) / rx, ny = (p.y - cc.y) / ry;
      dev += Math.abs(Math.hypot(nx, ny) - 1);
    }
    if (dev / pts.length < 0.12) return { kind: 'ellipse', pts: sampleEllipse(cc, rx, ry) };
  }
  return null;
}

function trimHoldTail(pts, still = 3.5) {
  let end = pts.length - 1;
  while (end > 4 && dist(pts[end], pts[end - 1]) < still) end--;
  return pts.slice(0, end + 1);
}

function boundsOf(pts) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const p of pts) {
    if (p.x < x0) x0 = p.x; if (p.y < y0) y0 = p.y;
    if (p.x > x1) x1 = p.x; if (p.y > y1) y1 = p.y;
  }
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
}

const closeUp = (pts) => (dist(pts[0], pts[pts.length - 1]) > 1 ? pts.concat([{ ...pts[0] }]) : pts);

// Clean geometry back into stroke points, evenly spaced, constant pressure —
// so the outline renderer draws a calm, even line.
function samplePts(fn, n, from) {
  const out = [];
  for (let i = 0; i <= n; i++) out.push({ ...fn(i / n), p: 0.55, t: (from?.t ?? 0) + i });
  return out;
}
const sampleLine = (a, b) => samplePts((s) => ({ x: lerp(a.x, b.x, s), y: lerp(a.y, b.y, s) }), 24, a);
const sampleEllipse = (c, rx, ry) => samplePts((s) => ({
  x: c.x + Math.cos(s * Math.PI * 2 - Math.PI / 2) * rx,
  y: c.y + Math.sin(s * Math.PI * 2 - Math.PI / 2) * ry,
}), 64);
function samplePolygon(corners) {
  const out = [];
  for (let i = 0; i < corners.length - 1; i++) {
    const seg = samplePts((s) => ({ x: lerp(corners[i].x, corners[i + 1].x, s), y: lerp(corners[i].y, corners[i + 1].y, s) }), 16);
    out.push(...(i ? seg.slice(1) : seg));
  }
  return out;
}
function fitRect(corners) {
  // Axis-aligned bounding box of the corners, accepted when each drawn corner
  // is near one of the box's own corners — a tilted rectangle stays a polygon.
  const quad = corners.slice(0, 4);
  const box = boundsOf(quad);
  if (box.w < 18 || box.h < 18) return null;
  const target = [
    { x: box.x, y: box.y }, { x: box.x + box.w, y: box.y },
    { x: box.x + box.w, y: box.y + box.h }, { x: box.x, y: box.y + box.h },
  ];
  const tol = Math.max(12, Math.hypot(box.w, box.h) * 0.12);
  const used = new Set();
  for (const q of quad) {
    const hit = target.findIndex((t2, i) => !used.has(i) && Math.hypot(q.x - t2.x, q.y - t2.y) < tol);
    if (hit < 0) return null;
    used.add(hit);
  }
  return samplePolygon([...target, target[0]]);
}

/* ═══ surface ════════════════════════════════════════════════════════════ */

export const TOOLS = {
  pen:    { size: 4.2, thinning: 0.58, streamline: 0.36, taperStart: 0, taperEnd: 14 },
  marker: { size: 12,  thinning: 0.18, streamline: 0.44, taperStart: 0, taperEnd: 0 },
  fine:   { size: 2.6, thinning: 0.45, streamline: 0.30, taperStart: 0, taperEnd: 9 },
};

export const INKS = ['#16211B', '#2E7550', '#9B3131', '#26527E'];

export class InkSurface {
  /**
   * @param {{wrap:HTMLElement, dry:HTMLCanvasElement, wet:HTMLCanvasElement,
   *          guides?:HTMLCanvasElement, ghost?:HTMLCanvasElement}} nodes
   */
  constructor(nodes, opts = {}) {
    this.wrap = nodes.wrap;
    this.dry = nodes.dry;
    this.wet = nodes.wet;
    this.guides = nodes.guides || null;
    this.ghost = nodes.ghost || null;

    this.dctx = this.dry.getContext('2d');
    // desynchronized skips the compositor queue for the wet layer, where the
    // latency is actually felt. Safari treats it as a hint, so read it back
    // rather than assuming it was honoured.
    this.wctx = this.wet.getContext('2d', { desynchronized: true });
    this.desynchronized = !!this.wctx.getContextAttributes?.().desynchronized;

    this.strokes = [];
    this.redoStack = [];
    this.tool = 'pen';
    this.colour = INKS[0];
    this.erasing = false;
    this.penOnly = opts.penOnly ?? false;
    this.penSeen = false;
    this.guideStyle = opts.guideStyle || 'ruled';

    this.active = new Map();     // pointerId -> stroke being drawn
    this.dpr = 1;
    this.onStrokeEnd = opts.onStrokeEnd || (() => {});
    this.onChange = opts.onChange || (() => {});

    // Hold-to-snap: draw a shape, keep the pen down and still, and the stroke
    // becomes clean geometry. Off by default for handwriting; the Trening view
    // turns it on when the user asks for figures.
    this.snapShapes = opts.snapShapes ?? false;
    this.onSnap = opts.onSnap || (() => {});
    this.holdMs = opts.holdMs ?? 550;
    this._holdTimer = null;

    this.supportsCoalesced = typeof PointerEvent !== 'undefined'
      && typeof PointerEvent.prototype.getCoalescedEvents === 'function';
    this.supportsPredicted = typeof PointerEvent !== 'undefined'
      && typeof PointerEvent.prototype.getPredictedEvents === 'function';

    this._bind();
    this.resize();
  }

  /* ---- sizing ---- */

  resize() {
    const r = this.wrap.getBoundingClientRect();
    // iOS Safari has a hard canvas-area cap and fails by rendering blank with
    // no exception, so the backing store is capped rather than trusted.
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const maxArea = 16_000_000;
    const scale = Math.min(dpr, Math.sqrt(maxArea / Math.max(1, r.width * r.height)));
    this.dpr = Math.max(1, scale);
    this.w = r.width;
    this.h = r.height;

    for (const c of [this.dry, this.wet, this.guides, this.ghost]) {
      if (!c) continue;
      c.width = Math.round(r.width * this.dpr);
      c.height = Math.round(r.height * this.dpr);
    }
    for (const ctx of [this.dctx, this.wctx]) {
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
    }
    this.drawGuides();
    this.redrawDry();
  }

  /* ---- guides ---- */

  drawGuides() {
    if (!this.guides) return;
    const ctx = this.guides.getContext('2d');
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, this.w, this.h);
    if (this.guideStyle === 'none') return;

    const line = 'rgba(43,98,238,.13)';
    const faint = 'rgba(43,98,238,.07)';

    // Squared paper, for figures and sketched graphs. Every fifth line is
    // darker, the way real graph paper is, so counting units is possible
    // without a ruler.
    if (this.guideStyle === 'grid') {
      const cell = 26;
      for (let i = 0, x = 0; x < this.w; i++, x += cell) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = i % 5 === 0 ? line : faint;
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, this.h);
        ctx.stroke();
      }
      for (let i = 0, y = 0; y < this.h; i++, y += cell) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = i % 5 === 0 ? line : faint;
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(this.w, y + 0.5);
        ctx.stroke();
      }
      return;
    }

    // Dot grid: enough to align by, quiet enough to disappear behind working.
    if (this.guideStyle === 'dots') {
      const cell = 26;
      ctx.fillStyle = 'rgba(43,98,238,.26)';
      for (let x = cell; x < this.w; x += cell) {
        for (let y = cell; y < this.h; y += cell) {
          ctx.beginPath();
          ctx.arc(x, y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      return;
    }

    const step = this.guideStyle === 'fourline' ? 88 : 44;

    ctx.lineWidth = 1;
    for (let y = step; y < this.h; y += step) {
      if (this.guideStyle === 'fourline') {
        // Baseline, x-height, ascender, descender — what a handwriting
        // worksheet uses, and what makes a wrong letter height obvious.
        const base = y;
        [[base - 34, faint], [base - 17, faint], [base, line], [base + 12, faint]].forEach(([yy, col], i) => {
          ctx.beginPath();
          ctx.strokeStyle = col;
          ctx.setLineDash(i === 3 ? [3, 4] : []);
          ctx.moveTo(0, yy + 0.5);
          ctx.lineTo(this.w, yy + 0.5);
          ctx.stroke();
        });
        ctx.setLineDash([]);
      } else {
        ctx.beginPath();
        ctx.strokeStyle = line;
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(this.w, y + 0.5);
        ctx.stroke();
      }
    }
  }

  setGuides(style) { this.guideStyle = style; this.drawGuides(); }

  /* ---- pointer ---- */

  _bind() {
    const opts = { passive: false };
    this.wet.addEventListener('pointerdown', (e) => this._down(e), opts);
    this.wet.addEventListener('pointermove', (e) => this._move(e), opts);
    this.wet.addEventListener('pointerup', (e) => this._up(e), opts);
    this.wet.addEventListener('pointercancel', (e) => this._up(e, true), opts);
    this.wet.addEventListener('pointerleave', (e) => this._up(e), opts);
    // Without this the page scrolls and pinch-zooms under the pen.
    this.wet.addEventListener('touchstart', (e) => e.preventDefault(), opts);
    this._ro = new ResizeObserver(() => this.resize());
    this._ro.observe(this.wrap);
  }

  destroy() { this._ro?.disconnect(); }

  _accepts(e) {
    if (e.pointerType === 'pen') {
      this.penSeen = true;
      return true;
    }
    if (e.pointerType === 'mouse') return true;
    // Touch: rejected once a pen has ever been used on this surface, which is
    // both palm rejection and the "Apple Pencil only" setting in one rule.
    if (this.penOnly) return false;
    return !this.penSeen;
  }

  _pt(e) {
    const r = this.wet.getBoundingClientRect();
    // A finger reports pressure 0 or a constant 0.5; deriving width from speed
    // gives it some life instead. A pen's real pressure is used as-is —
    // combining the two double-counts and makes the width wobble.
    const isPen = e.pointerType === 'pen';
    let p = isPen ? (e.pressure || 0.35) : 0.5;
    return { x: e.clientX - r.left, y: e.clientY - r.top, p, t: e.timeStamp, pen: isPen };
  }

  _down(e) {
    if (!this._accepts(e)) return;
    e.preventDefault();
    // Can throw if the pointer has already ended; capture is optional here.
    try { this.wet.setPointerCapture?.(e.pointerId); } catch { /* pointer already gone */ }

    if (this.erasing) {
      this._eraseAt(this._pt(e));
      this.active.set(e.pointerId, { erasing: true });
      return;
    }

    const cfg = TOOLS[this.tool] || TOOLS.pen;
    const stroke = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      tool: this.tool,
      colour: this.colour,
      pen: e.pointerType === 'pen',
      cfg,
      points: [this._pt(e)],
      t0: e.timeStamp,
    };
    this.active.set(e.pointerId, stroke);
    this.redoStack.length = 0;
    this._paintWet();
  }

  _move(e) {
    const stroke = this.active.get(e.pointerId);
    if (!stroke) return;
    e.preventDefault();

    if (stroke.erasing) { this._eraseAt(this._pt(e)); return; }

    // Recover the full Pencil sample rate. Without this the stroke is
    // decimated to one point per frame and the curves come out faceted.
    const events = this.supportsCoalesced ? e.getCoalescedEvents() : [e];
    for (const ce of (events.length ? events : [e])) stroke.points.push(this._pt(ce));

    if (!stroke.pen) this._simulatePressure(stroke);

    // Draw a provisional tail where the pen is about to be, discarded next
    // frame. This is the web's version of the "reduce latency" trick.
    stroke.predicted = this.supportsPredicted
      ? e.getPredictedEvents().map((pe) => this._pt(pe))
      : [];

    this._armHold(stroke, e.pointerId);
    this._paintWet();
  }

  /* ---- hold-to-snap ----
     The timer is reset on every move that actually travels, so it only fires
     when the pen has genuinely stopped. Snapping mid-stroke rather than on
     lift is the whole point: you see the shape settle while still holding,
     and lifting immediately keeps your rough stroke instead. */
  _armHold(stroke, pointerId) {
    if (!this.snapShapes || stroke.snapped) return;
    const pts = stroke.points;
    const n = pts.length;
    if (n > 2 && dist(pts[n - 1], pts[n - 2]) > 2.2) {
      clearTimeout(this._holdTimer);
      this._holdTimer = setTimeout(() => {
        const live = this.active.get(pointerId);
        if (!live || live !== stroke || stroke.snapped) return;
        const shape = recogniseShape(stroke.points);
        if (!shape) return;
        stroke.points = shape.pts;
        stroke.snapped = shape.kind;
        stroke.predicted = null;
        this._paintWet();
        this.onSnap(shape.kind, stroke);
      }, this.holdMs);
    }
  }

  _up(e, cancelled = false) {
    const stroke = this.active.get(e.pointerId);
    if (!stroke) return;
    clearTimeout(this._holdTimer);
    this.active.delete(e.pointerId);
    try { this.wet.releasePointerCapture?.(e.pointerId); } catch { /* already released */ }

    if (stroke.erasing) { this.onChange(); return; }
    stroke.predicted = null;
    if (!cancelled && stroke.points.length) {
      this.strokes.push(stroke);
      this._paintStroke(this.dctx, stroke);
      this.onChange();
      this.onStrokeEnd(stroke, this);
    }
    this._paintWet();
  }

  // Finger input has no pressure, so width is taken from speed: a fast stroke
  // is thin, a slow one is heavy, which is roughly how a real nib behaves.
  _simulatePressure(stroke) {
    const pts = stroke.points;
    const n = pts.length;
    if (n < 2) return;
    for (let i = Math.max(1, n - 6); i < n; i++) {
      const d = dist(pts[i - 1], pts[i]);
      const dt = Math.max(1, pts[i].t - pts[i - 1].t);
      const speed = d / dt;                 // px per ms
      const target = Math.max(0.18, Math.min(1, 1 - speed / 1.7));
      pts[i].p = lerp(pts[i - 1].p ?? 0.5, target, 0.35);
    }
  }

  /* ---- painting ---- */

  _paintStroke(ctx, stroke, extraPts = null) {
    const pts = extraPts ? stroke.points.concat(extraPts) : stroke.points;
    const outline = strokeOutline(pts, { ...stroke.cfg, size: stroke.cfg.size * (stroke.tool === 'marker' ? 1 : 1) });
    if (!outline.length) return;
    ctx.fillStyle = stroke.colour;
    if (stroke.tool === 'marker') {
      ctx.globalAlpha = 0.42;
      ctx.globalCompositeOperation = 'multiply';
    }
    ctx.fill(outlineToPath2D(outline));
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  _paintWet() {
    if (this._wetQueued) return;
    this._wetQueued = true;
    requestAnimationFrame(() => {
      this._wetQueued = false;
      this.wctx.clearRect(0, 0, this.w, this.h);
      for (const stroke of this.active.values()) {
        if (stroke.erasing) continue;
        this._paintStroke(this.wctx, stroke, stroke.predicted);
      }
    });
  }

  redrawDry() {
    this.dctx.clearRect(0, 0, this.w, this.h);
    for (const s of this.strokes) this._paintStroke(this.dctx, s);
  }

  /* ---- editing ---- */

  _eraseAt(pt, radius = 13) {
    const before = this.strokes.length;
    this.strokes = this.strokes.filter((s) => !s.points.some((p) => Math.hypot(p.x - pt.x, p.y - pt.y) < radius));
    if (this.strokes.length !== before) this.redrawDry();
  }

  undo() {
    const s = this.strokes.pop();
    if (!s) return false;
    this.redoStack.push(s);
    this.redrawDry();
    this.onChange();
    return true;
  }

  redo() {
    const s = this.redoStack.pop();
    if (!s) return false;
    this.strokes.push(s);
    this._paintStroke(this.dctx, s);
    this.onChange();
    return true;
  }

  clearInk() {
    this.strokes = [];
    this.redoStack = [];
    this.redrawDry();
    this.wctx.clearRect(0, 0, this.w, this.h);
    this.onChange();
  }

  isEmpty() { return this.strokes.length === 0; }

  /* ---- serialisation ---- */

  // Rounded to a tenth of a pixel: enough for recognition and replay, and it
  // roughly halves what has to cross the network on sync.
  toJSON() {
    return {
      w: this.w,
      h: this.h,
      strokes: this.strokes.map((s) => ({
        id: s.id, tool: s.tool, colour: s.colour, pen: s.pen, snapped: s.snapped || undefined,
        pts: s.points.map((p) => [
          Math.round(p.x * 10) / 10,
          Math.round(p.y * 10) / 10,
          Math.round(p.p * 100) / 100,
          Math.round(p.t - s.t0),
        ]),
      })),
    };
  }

  fromJSON(data) {
    this.strokes = (data?.strokes || []).map((s) => ({
      id: s.id,
      tool: s.tool,
      colour: s.colour,
      pen: s.pen,
      cfg: TOOLS[s.tool] || TOOLS.pen,
      t0: 0,
      points: (s.pts || []).map(([x, y, p, t]) => ({ x, y, p, t })),
    }));
    this.redoStack = [];
    this.redrawDry();
  }

  /* ---- export for the tutor ---- */

  // Bounding box of the ink, so a single word can be cropped out of a page.
  bounds(strokes = this.strokes, pad = 18) {
    if (!strokes.length) return null;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of strokes) {
      for (const p of s.points) {
        if (p.x < x0) x0 = p.x;
        if (p.y < y0) y0 = p.y;
        if (p.x > x1) x1 = p.x;
        if (p.y > y1) y1 = p.y;
      }
    }
    return { x: x0 - pad, y: y0 - pad, w: x1 - x0 + pad * 2, h: y1 - y0 + pad * 2 };
  }

  // Black ink on white, cropped to the writing, at a size the vision model
  // reads well. Thin Apple Pencil strokes vanish if the image is downscaled by
  // the API, so the crop is rendered at a fixed 1024 px long edge with the ink
  // deliberately thickened, and never JPEG-compressed.
  async toCritiquePNG(strokes = this.strokes, { maxEdge = 1024, minStroke = 5 } = {}) {
    const box = this.bounds(strokes);
    if (!box) return null;
    const scale = Math.min(maxEdge / Math.max(box.w, box.h), 4);
    const cw = Math.max(200, Math.round(box.w * scale));
    const ch = Math.max(200, Math.round(box.h * scale));

    const off = document.createElement('canvas');
    off.width = cw;
    off.height = ch;
    const ctx = off.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, cw, ch);
    ctx.translate(-box.x * scale, -box.y * scale);
    ctx.scale(scale, scale);

    for (const s of strokes) {
      const size = Math.max(s.cfg.size, minStroke / scale);
      const outline = strokeOutline(s.points, { ...s.cfg, size });
      ctx.fillStyle = '#000000';
      ctx.fill(outlineToPath2D(outline));
    }
    return new Promise((res) => off.toBlob((b) => res(b), 'image/png'));
  }

  // Normalised stroke arrays for the recognition endpoint, which wants
  // stroke-major parallel arrays rather than a list of points.
  toRecognitionInk(strokes = this.strokes) {
    return strokes.map((s) => [
      s.points.map((p) => Math.round(p.x)),
      s.points.map((p) => Math.round(p.y)),
      s.points.map((p) => Math.round(p.t - s.t0)),
    ]);
  }

  async thumbnail(maxEdge = 320) {
    const box = this.bounds() || { x: 0, y: 0, w: this.w, h: this.h };
    const scale = Math.min(maxEdge / Math.max(box.w, box.h), 1.6);
    const off = document.createElement('canvas');
    off.width = Math.max(40, Math.round(box.w * scale));
    off.height = Math.max(40, Math.round(box.h * scale));
    const ctx = off.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, off.width, off.height);
    ctx.translate(-box.x * scale, -box.y * scale);
    ctx.scale(scale, scale);
    for (const s of this.strokes) {
      ctx.fillStyle = s.colour;
      ctx.fill(outlineToPath2D(strokeOutline(s.points, s.cfg)));
    }
    return new Promise((res) => off.toBlob((b) => res(b), 'image/png'));
  }
}

/* ═══ stroke health check ════════════════════════════════════════════════
   iPadOS Scribble intercepts Pencil input system-wide and can swallow strokes
   inside a canvas. There is no API to detect or disable it, so the symptom is
   watched for instead: several strokes in a row that are suspiciously short. */

export function makeScribbleWatcher(onSuspect) {
  let shortRun = 0;
  return (stroke) => {
    const len = stroke.points.reduce(
      (a, p, i) => (i ? a + Math.hypot(p.x - stroke.points[i - 1].x, p.y - stroke.points[i - 1].y) : 0), 0);
    if (stroke.pen && len < 4 && stroke.points.length < 4) shortRun += 1;
    else shortRun = 0;
    if (shortRun >= 3) { shortRun = 0; onSuspect(); }
  };
}
