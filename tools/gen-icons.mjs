// Mathathon — PWA icon generator. The mark is a spider drawn as pure geometry:
// two body ellipses, eight legs (a thick femur and a thin tibia meeting at a
// knee), and an integral sign cut clean out of the abdomen. No font, no image
// file, no dependencies, so every size renders exactly rather than resampled.
//
// The spider and the integral are not two ideas stapled together: the mark is
// one silhouette with a real hole in it, which is why the cutout is a mask in
// the SVG and a second predicate in the raster rather than a shape painted in
// the background colour. It survives on cream, on a dark plate, and on nothing.
//
//   node tools/gen-icons.mjs      (run from the mathathon/ directory)
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'public', 'icons');

/* ═══ minimal PNG encoder ════════════════════════════════════════════════ */

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td), 0);
  return Buffer.concat([len, td, crc]);
}

function encodePNG(width, height, rgba) {
  const stride = width * 4 + 1;
  const raw = Buffer.alloc(height * stride);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0; // filter: none
    rgba.copy(raw, y * stride + 1, y * width * 4, (y + 1) * width * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // truecolour + alpha
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ═══ palette ════════════════════════════════════════════════════════════
   The Antigravity sweep: blue climbing through azure and green into amber,
   orange and a final red. Six stops is a lot for a logo, but the mark is
   mostly long thin legs, and a gradient with too few stops reads as two flat
   colours once the legs separate it.                                      */

export const CREAM = [0xfc, 0xfa, 0xf5];

export const STOPS = [
  { at: 0.00, hex: '#2B62EE', rgb: [0x2b, 0x62, 0xee] },
  { at: 0.22, hex: '#2E9AD8', rgb: [0x2e, 0x9a, 0xd8] },
  { at: 0.44, hex: '#35B27C', rgb: [0x35, 0xb2, 0x7c] },
  { at: 0.64, hex: '#E7B23A', rgb: [0xe7, 0xb2, 0x3a] },
  { at: 0.83, hex: '#EE6B2E', rgb: [0xee, 0x6b, 0x2e] },
  { at: 1.00, hex: '#DF4038', rgb: [0xdf, 0x40, 0x38] },
];

function gradientAt(t) {
  const u = Math.min(1, Math.max(0, t));
  for (let i = 1; i < STOPS.length; i++) {
    if (u <= STOPS[i].at) {
      const a = STOPS[i - 1];
      const b = STOPS[i];
      const k = (u - a.at) / (b.at - a.at);
      return [0, 1, 2].map((c) => Math.round(a.rgb[c] + (b.rgb[c] - a.rgb[c]) * k));
    }
  }
  return STOPS[STOPS.length - 1].rgb;
}

// The gradient runs down a diagonal rather than straight down, so it crosses
// the legs instead of banding along them. The axis has to reach past the
// outermost feet (x ≈ ±1.08), or the end stops never appear and the mark
// loses its deep blue and its red.
export const GRAD_A = [-1.08, -0.92];   // t = 0
export const GRAD_B = [1.08, 0.86];     // t = 1

// The legs reach 0.92 above the body and only 0.70 below it, so the drawn
// shape is not centred on the origin. Push it down by half the difference,
// or every icon sits high in its frame.
export const SHIFT_Y = 0.08;

function gradientT(x, y) {
  const dx = GRAD_B[0] - GRAD_A[0];
  const dy = GRAD_B[1] - GRAD_A[1];
  return ((x - GRAD_A[0]) * dx + (y - GRAD_A[1]) * dy) / (dx * dx + dy * dy);
}

/* ═══ spider geometry ════════════════════════════════════════════════════
   Glyph space is [-1, 1] on both axes with y pointing down — the convention
   the raster and the SVG both read. Everything below is a named constant;
   nothing is measured off a drawing.                                      */

// Abdomen and cephalothorax overlap a little so the body fuses into one shape
// instead of reading as a snowman with a seam.
export const ABDOMEN = { cx: 0, cy: 0.36, rx: 0.31, ry: 0.40 };
export const THORAX = { cx: 0, cy: -0.16, rx: 0.22, ry: 0.21 };

export const FEMUR_W = 0.058;   // half-width, body to knee
export const TIBIA_W = 0.036;   // half-width, knee to foot

// One entry per right-hand leg, front to back; the left side is the mirror.
// a → k is the femur, k → t the tibia. Each is a cubic so the leg bows the way
// a real one does rather than folding at a hinge.
//
// The rule that makes this read as a spider rather than a moth: every foot
// lands on the OUTSIDE, fanned around the body from forward-up to back-down,
// and the knee always sits above the straight line from hip to foot. A leg
// whose tip curls back inwards closes the gap to its neighbour and the eight
// legs fuse into two wings — which is exactly what the first attempt did.
export const LEGS = [
  { a: [0.15, -0.33], c1: [0.22, -0.52], c2: [0.34, -0.68], k: [0.50, -0.74], c3: [0.66, -0.80], c4: [0.78, -0.86], t: [0.90, -0.86] },
  { a: [0.21, -0.24], c1: [0.32, -0.36], c2: [0.46, -0.48], k: [0.60, -0.52], c3: [0.76, -0.56], c4: [0.92, -0.52], t: [1.02, -0.46] },
  { a: [0.21, -0.13], c1: [0.34, -0.20], c2: [0.48, -0.20], k: [0.62, -0.14], c3: [0.78, -0.08], c4: [0.94, 0.02], t: [1.04, 0.14] },
  { a: [0.15, -0.02], c1: [0.28, 0.02], c2: [0.42, 0.10], k: [0.56, 0.18], c3: [0.72, 0.28], c4: [0.84, 0.46], t: [0.90, 0.66] },
];

// The integral, cut out of the abdomen: top terminal curling left, a leaning
// stem, bottom terminal curling right. Kept well inside the ellipse — if the
// stroke reaches the edge the hole opens onto the outside and the silhouette
// loses its abdomen.
export const INTEGRAL = {
  w: 0.048,     // half-width of the cut
  d: [
    [0.087, 0.209],
    [0.087, 0.115], [-0.005, 0.115], [-0.005, 0.242],
    [-0.005, 0.360], [0.023, 0.444], [0.023, 0.562],
    [0.023, 0.689], [-0.069, 0.689], [-0.069, 0.595],
  ],
};

/* ---- flattening: curves become capsules, shared by every renderer ---- */

function cubicAt(p0, p1, p2, p3, s) {
  const m = 1 - s;
  const a = m * m * m;
  const b = 3 * m * m * s;
  const c = 3 * m * s * s;
  const d = s * s * s;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  ];
}

function flattenCubic(p0, p1, p2, p3, steps = 26) {
  const pts = [];
  for (let i = 0; i <= steps; i++) pts.push(cubicAt(p0, p1, p2, p3, i / steps));
  return pts;
}

// A stroked path is a list of capsules: segment plus half-width. Round joins
// and caps come for free, because a capsule already has round ends.
function capsulesFor(points, w) {
  const out = [];
  for (let i = 1; i < points.length; i++) out.push({ a: points[i - 1], b: points[i], w });
  return out;
}

const mirrorX = (p) => [-p[0], p[1]];

function buildInk(weight = 1) {
  const caps = [];
  for (const leg of LEGS) {
    for (const m of [(p) => p, mirrorX]) {
      caps.push(...capsulesFor(flattenCubic(m(leg.a), m(leg.c1), m(leg.c2), m(leg.k)), FEMUR_W * weight));
      caps.push(...capsulesFor(flattenCubic(m(leg.k), m(leg.c3), m(leg.c4), m(leg.t)), TIBIA_W * weight));
    }
  }
  return caps;
}

function buildCut() {
  const d = INTEGRAL.d;
  const pts = [
    ...flattenCubic(d[0], d[1], d[2], d[3], 20),
    ...flattenCubic(d[3], d[4], d[5], d[6], 20).slice(1),
    ...flattenCubic(d[6], d[7], d[8], d[9], 20).slice(1),
  ];
  return capsulesFor(pts, INTEGRAL.w);
}

/* ---- point tests ---- */

const inEllipse = (x, y, e) => {
  const dx = (x - e.cx) / e.rx;
  const dy = (y - e.cy) / e.ry;
  return dx * dx + dy * dy <= 1;
};

function inCapsule(x, y, c) {
  const vx = c.b[0] - c.a[0];
  const vy = c.b[1] - c.a[1];
  const len2 = vx * vx + vy * vy;
  let s = len2 ? ((x - c.a[0]) * vx + (y - c.a[1]) * vy) / len2 : 0;
  s = s < 0 ? 0 : s > 1 ? 1 : s;
  const px = c.a[0] + vx * s - x;
  const py = c.a[1] + vy * s - y;
  return px * px + py * py <= c.w * c.w;
}

/* ---- a uniform grid over the capsules, so a sample tests three of them and
        not four hundred. Without it a 1024 icon takes minutes.        ---- */

function buildGrid(caps, cell = 0.06) {
  const lo = -1.3;
  const n = Math.ceil(2.6 / cell);
  const grid = Array.from({ length: n * n }, () => []);
  caps.forEach((c, i) => {
    const gx0 = Math.max(0, Math.floor((Math.min(c.a[0], c.b[0]) - c.w - lo) / cell));
    const gx1 = Math.min(n - 1, Math.floor((Math.max(c.a[0], c.b[0]) + c.w - lo) / cell));
    const gy0 = Math.max(0, Math.floor((Math.min(c.a[1], c.b[1]) - c.w - lo) / cell));
    const gy1 = Math.min(n - 1, Math.floor((Math.max(c.a[1], c.b[1]) + c.w - lo) / cell));
    for (let gy = gy0; gy <= gy1; gy++) {
      for (let gx = gx0; gx <= gx1; gx++) grid[gy * n + gx].push(i);
    }
  });
  return { lo, cell, n, grid, caps };
}

function hitsAny(x, y, g) {
  const gx = Math.floor((x - g.lo) / g.cell);
  const gy = Math.floor((y - g.lo) / g.cell);
  if (gx < 0 || gy < 0 || gx >= g.n || gy >= g.n) return false;
  for (const i of g.grid[gy * g.n + gx]) if (inCapsule(x, y, g.caps[i])) return true;
  return false;
}

// One grid per leg weight, built on demand — small sizes need fatter legs and
// therefore a differently-padded grid.
const inkGrids = new Map();
function inkGrid(weight) {
  const key = weight.toFixed(3);
  if (!inkGrids.has(key)) inkGrids.set(key, buildGrid(buildInk(weight)));
  return inkGrids.get(key);
}

const CUT_GRID = buildGrid(buildCut());

// Is (x, y) inside the mark? Body and legs, minus the integral.
export function insideMark(x, y, { weight = 1, cut = true } = {}) {
  const solid = inEllipse(x, y, ABDOMEN) || inEllipse(x, y, THORAX) || hitsAny(x, y, inkGrid(weight));
  if (!solid) return false;
  return cut ? !hitsAny(x, y, CUT_GRID) : true;
}

/* ═══ raster ═════════════════════════════════════════════════════════════ */

export function renderIcon(size, {
  inset = 0.9, background = CREAM, transparent = false, ss = 4,
  minStrokePx = 1.8, minCutPx = 1.6,
} = {}) {
  const rgba = Buffer.alloc(size * size * 4);
  const radiusPx = (size * inset) / 2;
  const c = size / 2;

  // Optical sizing. A tibia that lands under two device pixels antialiases
  // into a grey smear and the whole spider dissolves, so small sizes get
  // fatter legs; and once the integral's cut is under ~1.6 px it stops being
  // a readable glyph and just eats a hole in the abdomen, so it is dropped.
  // The mark is still one geometry — the same constants, weighted.
  const weight = Math.max(1, (minStrokePx / 2) / (TIBIA_W * radiusPx));
  const cut = INTEGRAL.w * 2 * radiusPx >= minCutPx;
  const opts = { weight, cut };

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let hits = 0;
      let tAcc = 0;
      for (let sy = 0; sy < ss; sy++) {
        for (let sx = 0; sx < ss; sx++) {
          const gx = (px + (sx + 0.5) / ss - c) / radiusPx;
          const gy = (py + (sy + 0.5) / ss - c) / radiusPx - SHIFT_Y;
          if (insideMark(gx, gy, opts)) { hits++; tAcc += gradientT(gx, gy); }
        }
      }
      const i = (py * size + px) * 4;
      const cov = hits / (ss * ss);
      if (cov === 0) {
        rgba[i] = background[0];
        rgba[i + 1] = background[1];
        rgba[i + 2] = background[2];
        rgba[i + 3] = transparent ? 0 : 255;
        continue;
      }
      const ink = gradientAt(tAcc / hits);
      if (transparent) {
        rgba[i] = ink[0];
        rgba[i + 1] = ink[1];
        rgba[i + 2] = ink[2];
        rgba[i + 3] = Math.round(cov * 255);
      } else {
        for (let k = 0; k < 3; k++) rgba[i + k] = Math.round(ink[k] * cov + background[k] * (1 - cov));
        rgba[i + 3] = 255;
      }
    }
  }
  return encodePNG(size, size, rgba);
}

/* ═══ SVG twin ═══════════════════════════════════════════════════════════
   The same constants as real paths, so the vector mark and the PNGs cannot
   drift apart. The integral is a mask, not a second fill, so the hole is a
   hole on any background.                                                 */

export function svgMark({ transparent = true, id = 'm', label = 'Mathathon', inset = 0.9 } = {}) {
  const S = 100;
  const K = (S * inset) / 2;         // glyph radius in SVG units
  const C = S / 2;
  const f = (n) => (C + n * K).toFixed(2);                 // x
  const g = (n) => (C + (n + SHIFT_Y) * K).toFixed(2);     // y, optically centred
  const u = (n) => (n * K).toFixed(2);
  const pt = (p) => `${f(p[0])} ${g(p[1])}`;

  const femurs = [];
  const tibiae = [];
  for (const leg of LEGS) {
    for (const m of [(p) => p, mirrorX]) {
      femurs.push(`M ${pt(m(leg.a))} C ${pt(m(leg.c1))} ${pt(m(leg.c2))} ${pt(m(leg.k))}`);
      tibiae.push(`M ${pt(m(leg.k))} C ${pt(m(leg.c3))} ${pt(m(leg.c4))} ${pt(m(leg.t))}`);
    }
  }

  const d = INTEGRAL.d;
  const integral = `M ${pt(d[0])} C ${pt(d[1])} ${pt(d[2])} ${pt(d[3])}`
    + ` C ${pt(d[4])} ${pt(d[5])} ${pt(d[6])}`
    + ` C ${pt(d[7])} ${pt(d[8])} ${pt(d[9])}`;

  const ell = (e) => `<ellipse cx="${f(e.cx)}" cy="${g(e.cy)}" rx="${u(e.rx)}" ry="${u(e.ry)}"/>`;
  const stops = STOPS.map((s) => `<stop offset="${s.at}" stop-color="${s.hex}"/>`).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${id}g" x1="${f(GRAD_A[0])}" y1="${g(GRAD_A[1])}" x2="${f(GRAD_B[0])}" y2="${g(GRAD_B[1])}" gradientUnits="userSpaceOnUse">${stops}</linearGradient>
    <mask id="${id}c">
      <rect width="${S}" height="${S}" fill="#fff"/>
      <path d="${integral}" fill="none" stroke="#000" stroke-width="${u(INTEGRAL.w * 2)}" stroke-linecap="round"/>
    </mask>
  </defs>
${transparent ? '' : `  <rect width="${S}" height="${S}" fill="#FCFAF5"/>\n`}  <g mask="url(#${id}c)">
    <g fill="none" stroke="url(#${id}g)" stroke-linecap="round">
      <path stroke-width="${u(FEMUR_W * 2)}" d="${femurs.join(' ')}"/>
      <path stroke-width="${u(TIBIA_W * 2)}" d="${tibiae.join(' ')}"/>
    </g>
    <g fill="url(#${id}g)">
      ${ell(ABDOMEN)}
      ${ell(THORAX)}
    </g>
  </g>
</svg>
`;
}

/* ═══ write ══════════════════════════════════════════════════════════════ */

if (process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('gen-icons.mjs')) {
  fs.mkdirSync(OUT, { recursive: true });

  const jobs = [
    ['icon-180.png', 180, { inset: 0.88 }],                   // apple-touch-icon
    ['icon-192.png', 192, { inset: 0.88 }],
    ['icon-256.png', 256, { inset: 0.88 }],
    ['icon-512.png', 512, { inset: 0.88 }],
    ['icon-1024.png', 1024, { inset: 0.88, ss: 3 }],
    ['icon-maskable-192.png', 192, { inset: 0.62 }],
    ['icon-maskable-512.png', 512, { inset: 0.62 }],
    ['favicon-64.png', 64, { inset: 0.96, minStrokePx: 2.2 }],
    ['favicon-32.png', 32, { inset: 0.98, minStrokePx: 2.8 }],
  ];

  for (const [name, size, opts] of jobs) {
    fs.writeFileSync(path.join(OUT, name), renderIcon(size, opts));
    process.stdout.write(`  ${name}\n`);
  }

  fs.writeFileSync(path.join(OUT, 'favicon.svg'), svgMark({ transparent: true }));
  fs.writeFileSync(path.join(OUT, 'mark.svg'), svgMark({ transparent: true }));
  // A cream plate at 1024 for anywhere a preview needs an opaque image.
  fs.writeFileSync(path.join(OUT, 'og-1024.png'), renderIcon(1024, { inset: 0.62, ss: 3 }));
  process.stdout.write('  favicon.svg\n  mark.svg\n  og-1024.png\nMathathon icons written to public/icons\n');
}
