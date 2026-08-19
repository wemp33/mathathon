// LaTeX → MathML.
//
// Why not KaTeX: KaTeX renders maths as a lattice of absolutely-positioned
// spans and needs about 300 KB of its own webfonts to do it. Safari — which is
// the only browser this app will ever run in — has had excellent native MathML
// since 2013 and lays maths out with the system fonts, correctly, at any size,
// with real accessibility and real text selection. Converting to MathML is a
// few hundred lines and ships nothing. On an iPad that is the whole argument.
//
// The scope is deliberately the LaTeX that appears in this app's own content
// and nothing else: fractions, roots, scripts, big operators with limits,
// fences, function names, Greek, and the relation and arrow symbols a Polish
// maths course uses. Anything unrecognised is passed through as a literal so a
// typo shows up on screen as a typo rather than vanishing.

/* ═══ symbol tables ══════════════════════════════════════════════════════ */

// Rendered as <mi>: identifiers, italic by default.
const LETTERS = {
  alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varepsilon: 'ε',
  zeta: 'ζ', eta: 'η', theta: 'θ', vartheta: 'ϑ', iota: 'ι', kappa: 'κ',
  lambda: 'λ', mu: 'μ', nu: 'ν', xi: 'ξ', pi: 'π', varpi: 'ϖ', rho: 'ρ',
  varrho: 'ϱ', sigma: 'σ', varsigma: 'ς', tau: 'τ', upsilon: 'υ', phi: 'φ',
  varphi: 'φ', chi: 'χ', psi: 'ψ', omega: 'ω',
  Gamma: 'Γ', Delta: 'Δ', Theta: 'Θ', Lambda: 'Λ', Xi: 'Ξ', Pi: 'Π',
  Sigma: 'Σ', Upsilon: 'Υ', Phi: 'Φ', Psi: 'Ψ', Omega: 'Ω',
  ell: 'ℓ', infty: '∞', partial: '∂', nabla: '∇', imath: 'ı', jmath: 'ȷ',
};

// Rendered as <mo>: operators and relations. Spacing comes from MathML's own
// operator dictionary, which is why these must not be <mi>.
const OPERATORS = {
  times: '×', cdot: '⋅', div: '÷', pm: '±', mp: '∓', ast: '∗', star: '⋆',
  le: '≤', leq: '≤', ge: '≥', geq: '≥', ne: '≠', neq: '≠', equiv: '≡',
  approx: '≈', sim: '∼', simeq: '≃', cong: '≅', propto: '∝',
  ll: '≪', gg: '≫', subset: '⊂', subseteq: '⊆', supset: '⊃', supseteq: '⊇',
  in: '∈', notin: '∉', ni: '∋', cup: '∪', cap: '∩', setminus: '∖',
  emptyset: '∅', varnothing: '∅', forall: '∀', exists: '∃', nexists: '∄',
  neg: '¬', land: '∧', lor: '∨', wedge: '∧', vee: '∨',
  to: '→', rightarrow: '→', longrightarrow: '⟶', leftarrow: '←',
  Rightarrow: '⇒', Leftarrow: '⇐', Leftrightarrow: '⇔', leftrightarrow: '↔',
  mapsto: '↦', implies: '⟹', iff: '⟺',
  perp: '⊥', parallel: '∥', angle: '∠', triangle: '△', circ: '∘',
  degree: '°', prime: '′', dots: '…', ldots: '…', cdots: '⋯', vdots: '⋮',
  ddots: '⋱', therefore: '∴', because: '∵', colon: ':',
};

// Big operators: these take limits, and in display style the limits sit above
// and below rather than beside — except the integrals, which never do.
const BIG = {
  sum: { ch: '∑', stack: true },
  prod: { ch: '∏', stack: true },
  coprod: { ch: '∐', stack: true },
  bigcup: { ch: '⋃', stack: true },
  bigcap: { ch: '⋂', stack: true },
  lim: { ch: 'lim', stack: true, text: true },
  limsup: { ch: 'lim sup', stack: true, text: true },
  liminf: { ch: 'lim inf', stack: true, text: true },
  max: { ch: 'max', stack: true, text: true },
  min: { ch: 'min', stack: true, text: true },
  sup: { ch: 'sup', stack: true, text: true },
  inf: { ch: 'inf', stack: true, text: true },
  int: { ch: '∫', stack: false },
  iint: { ch: '∬', stack: false },
  iiint: { ch: '∭', stack: false },
  oint: { ch: '∮', stack: false },
};

// Function names: upright, and they get a thin space before their argument.
const FUNCS = [
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'arcsin', 'arccos', 'arctan',
  'sinh', 'cosh', 'tanh', 'coth', 'ln', 'log', 'lg', 'exp', 'deg', 'det',
  'dim', 'gcd', 'hom', 'ker', 'arg', 'Pr',
];

// The Polish names. They are not in LaTeX's own list, which is why the content
// writes \operatorname{tg} — but accepting the bare forms costs nothing and
// makes hand-typed input work too.
const PL_FUNCS = ['tg', 'ctg', 'arctg', 'arcctg', 'tgh', 'ctgh'];

const FENCES = {
  '(': '(', ')': ')', '[': '[', ']': ']', '\\{': '{', '\\}': '}',
  '|': '|', '\\|': '‖', '\\langle': '⟨', '\\rangle': '⟩',
  '\\lfloor': '⌊', '\\rfloor': '⌋', '\\lceil': '⌈', '\\rceil': '⌉',
  '.': '',
};

// \, \: \; \! \quad \qquad — widths in em, matching TeX's own.
const SPACES = { ',': '0.167', ':': '0.222', ';': '0.278', '!': '-0.167', ' ': '0.25', quad: '1', qquad: '2' };

const BLACKBOARD = { R: 'ℝ', N: 'ℕ', Z: 'ℤ', Q: 'ℚ', C: 'ℂ', P: 'ℙ', E: '𝔼' };

/* ═══ tokeniser ══════════════════════════════════════════════════════════ */

function tokenize(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '\\') {
      // \\ is a row break; \{ \} \| \, \; are single-character control symbols.
      if (src[i + 1] === '\\') { out.push({ t: 'newrow' }); i += 2; continue; }
      const m = /^\\([a-zA-Z]+)/.exec(src.slice(i));
      if (m) { out.push({ t: 'cmd', v: m[1] }); i += m[0].length; continue; }
      out.push({ t: 'cmd', v: src[i + 1], sym: true });
      i += 2;
      continue;
    }
    if (c === '{') { out.push({ t: '{' }); i++; continue; }
    if (c === '}') { out.push({ t: '}' }); i++; continue; }
    if (c === '^') { out.push({ t: '^' }); i++; continue; }
    if (c === '_') { out.push({ t: '_' }); i++; continue; }
    if (c === '&') { out.push({ t: 'newcol' }); i++; continue; }
    if (/\s/.test(c)) { i++; continue; }
    // A number is one atom, decimal point included, so 3.14 does not become
    // three atoms with operator spacing wedged between them.
    const num = /^\d+(?:[.,]\d+)?/.exec(src.slice(i));
    if (num) { out.push({ t: 'num', v: num[0] }); i += num[0].length; continue; }
    out.push({ t: 'char', v: c });
    i++;
  }
  return out;
}

/* ═══ helpers ════════════════════════════════════════════════════════════ */

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const mi = (s, extra = '') => `<mi${extra}>${esc(s)}</mi>`;
const mn = (s) => `<mn>${esc(s)}</mn>`;
const mo = (s, extra = '') => `<mo${extra}>${esc(s)}</mo>`;
const row = (parts) => (parts.length === 1 ? parts[0] : `<mrow>${parts.join('')}</mrow>`);

/* ═══ parser ═════════════════════════════════════════════════════════════
   Recursive descent over the token stream. `parseGroup` reads atoms until a
   closing brace or the end; `parseAtom` reads one, and the caller attaches any
   ^ and _ that follow it. */

class Parser {
  constructor(tokens, display) {
    this.tk = tokens;
    this.i = 0;
    this.display = display;
  }

  peek() { return this.tk[this.i]; }
  next() { return this.tk[this.i++]; }
  eof() { return this.i >= this.tk.length; }

  /** Everything up to a `}` (which is consumed) or the end. */
  parseGroup(stopAtBrace = true) {
    const parts = [];
    while (!this.eof()) {
      const t = this.peek();
      if (t.t === '}') { if (stopAtBrace) this.next(); break; }
      const atom = this.parseScripted();
      if (atom) parts.push(atom);
    }
    return parts;
  }

  /** One atom plus any sub/superscripts hanging off it. */
  parseScripted() {
    const base = this.parseAtom();
    if (base == null) return null;

    let sub = null;
    let sup = null;
    // ^ and _ may arrive in either order, and both may be present.
    for (let guard = 0; guard < 2; guard++) {
      const t = this.peek();
      if (!t) break;
      if (t.t === '_' && sub === null) { this.next(); sub = row(this.parseArg()); continue; }
      if (t.t === '^' && sup === null) { this.next(); sup = row(this.parseArg()); continue; }
      break;
    }
    if (sub === null && sup === null) return base.mml;

    // A big operator with limits stacks them in display style; everything else
    // — and every integral — puts them beside.
    if (base.stack && this.display) {
      if (sub !== null && sup !== null) return `<munderover>${base.mml}${sub}${sup}</munderover>`;
      if (sub !== null) return `<munder>${base.mml}${sub}</munder>`;
      return `<mover>${base.mml}${sup}</mover>`;
    }
    if (sub !== null && sup !== null) return `<msubsup>${base.mml}${sub}${sup}</msubsup>`;
    if (sub !== null) return `<msub>${base.mml}${sub}</msub>`;
    return `<msup>${base.mml}${sup}</msup>`;
  }

  /** The argument of a command: a braced group, or the single next atom. */
  parseArg() {
    const t = this.peek();
    if (!t) return [];
    if (t.t === '{') { this.next(); return this.parseGroup(); }
    const a = this.parseAtom();
    return a ? [a.mml] : [];
  }

  parseAtom() {
    const t = this.next();
    if (!t) return null;

    if (t.t === '{') return { mml: row(this.parseGroup()) };
    if (t.t === 'num') return { mml: mn(t.v) };
    if (t.t === 'newrow' || t.t === 'newcol') return { mml: '' };

    if (t.t === 'char') {
      const c = t.v;
      if (c === '(' || c === ')' || c === '[' || c === ']' || c === '|') return { mml: mo(FENCES[c] || c, ' stretchy="false"') };
      if (/[a-zA-Z]/.test(c)) return { mml: mi(c) };
      if (c === "'") return { mml: mo('′') };
      if (c === ',' || c === ';') return { mml: mo(c) };
      return { mml: mo(c) };
    }

    if (t.t === '^' || t.t === '_') {
      // A stray script with nothing to attach to — treat the empty string as
      // the base rather than dropping the script silently.
      this.i--;
      return { mml: '<mrow></mrow>' };
    }

    if (t.t === 'cmd') return this.parseCommand(t);
    return { mml: '' };
  }

  parseCommand(t) {
    const name = t.v;

    if (name === 'frac' || name === 'dfrac' || name === 'tfrac' || name === 'cfrac') {
      const num = row(this.parseArg());
      const den = row(this.parseArg());
      return { mml: `<mfrac>${num}${den}</mfrac>` };
    }

    if (name === 'binom' || name === 'dbinom') {
      const n = row(this.parseArg());
      const k = row(this.parseArg());
      return { mml: `<mrow><mo>(</mo><mfrac linethickness="0">${n}${k}</mfrac><mo>)</mo></mrow>` };
    }

    if (name === 'sqrt') {
      // \sqrt[n]{x} — the optional index arrives as literal [ … ] tokens.
      if (this.peek()?.t === 'char' && this.peek().v === '[') {
        this.next();
        const idx = [];
        while (!this.eof() && !(this.peek().t === 'char' && this.peek().v === ']')) {
          const a = this.parseScripted();
          if (a) idx.push(a);
        }
        this.next();
        return { mml: `<mroot>${row(this.parseArg())}${row(idx)}</mroot>` };
      }
      return { mml: `<msqrt>${row(this.parseArg())}</msqrt>` };
    }

    if (name === 'left') {
      const open = this.readFence();
      const inner = [];
      let close = '';
      while (!this.eof()) {
        const p = this.peek();
        if (p.t === 'cmd' && p.v === 'right') { this.next(); close = this.readFence(); break; }
        const a = this.parseScripted();
        if (a) inner.push(a);
      }
      return {
        mml: `<mrow>${open ? mo(open) : ''}${row(inner)}${close ? mo(close) : ''}</mrow>`,
      };
    }
    if (name === 'right') { this.readFence(); return { mml: '' }; }

    if (name === 'operatorname' || name === 'mathrm' || name === 'mathop') {
      return { mml: mi(this.readRawArg(), ' mathvariant="normal"'), stack: name === 'mathop' };
    }
    if (name === 'text' || name === 'textrm' || name === 'mbox') {
      return { mml: `<mtext>${esc(this.readRawArg())}</mtext>` };
    }
    if (name === 'mathbb') {
      const s = this.readRawArg();
      return { mml: mi([...s].map((c) => BLACKBOARD[c] || c).join(''), ' mathvariant="normal"') };
    }
    if (name === 'mathbf' || name === 'bm' || name === 'boldsymbol') {
      return { mml: mi(this.readRawArg(), ' mathvariant="bold"') };
    }
    if (name === 'mathcal' || name === 'mathscr' || name === 'mathfrak' || name === 'mathsf' || name === 'mathit') {
      return { mml: mi(this.readRawArg()) };
    }

    if (name === 'overline' || name === 'bar') {
      return { mml: `<mover accent="true">${row(this.parseArg())}<mo>&#xAF;</mo></mover>` };
    }
    if (name === 'vec') {
      return { mml: `<mover accent="true">${row(this.parseArg())}<mo>&#x2192;</mo></mover>` };
    }
    if (name === 'hat' || name === 'widehat') {
      return { mml: `<mover accent="true">${row(this.parseArg())}<mo>&#x5E;</mo></mover>` };
    }
    if (name === 'underline') {
      return { mml: `<munder accentunder="true">${row(this.parseArg())}<mo>&#x5F;</mo></munder>` };
    }

    if (name === 'begin' || name === 'end') {
      // Environments are out of scope; swallow the name so it does not print.
      this.readRawArg();
      return { mml: '' };
    }

    if (name === 'displaystyle') { this.display = true; return { mml: '' }; }
    if (name === 'limits' || name === 'nolimits') return { mml: '' };

    if (Object.prototype.hasOwnProperty.call(SPACES, name)) {
      return { mml: `<mspace width="${SPACES[name]}em"/>` };
    }
    if (name === 'dx' || name === 'dy') return { mml: `<mspace width="0.167em"/>${mi('d')}${mi(name[1])}` };

    if (BIG[name]) {
      const b = BIG[name];
      return {
        mml: b.text ? mo(b.ch, ' movablelimits="true"') : mo(b.ch, ' largeop="true" movablelimits="false"'),
        stack: b.stack,
      };
    }
    if (FUNCS.includes(name) || PL_FUNCS.includes(name)) {
      return { mml: `${mi(name, ' mathvariant="normal"')}<mspace width="0.167em"/>` };
    }
    if (LETTERS[name]) return { mml: mi(LETTERS[name], name === name.toUpperCase() && name.length > 1 ? ' mathvariant="normal"' : '') };
    if (OPERATORS[name]) return { mml: mo(OPERATORS[name]) };
    if (FENCES[`\\${name}`] !== undefined) return { mml: mo(FENCES[`\\${name}`]) };

    if (t.sym) return { mml: mo(name) };            // \{ \} \% \& \$ \#
    return { mml: mi(name) };                        // unknown: show it, do not hide it
  }

  readFence() {
    const t = this.next();
    if (!t) return '';
    if (t.t === 'char') return FENCES[t.v] ?? t.v;
    if (t.t === 'cmd') return FENCES[`\\${t.v}`] ?? (LETTERS[t.v] || OPERATORS[t.v] || '');
    return '';
  }

  /** The literal text of a braced argument, for \text and friends. */
  readRawArg() {
    if (this.peek()?.t !== '{') {
      const t = this.next();
      return t ? (t.v ?? '') : '';
    }
    this.next();
    let out = '';
    let depth = 1;
    while (!this.eof()) {
      const t = this.next();
      if (t.t === '{') { depth++; out += '{'; continue; }
      if (t.t === '}') { if (--depth === 0) break; out += '}'; continue; }
      if (t.t === 'cmd') { out += t.v; continue; }
      out += t.v ?? '';
    }
    return out;
  }
}

/* ═══ public ═════════════════════════════════════════════════════════════ */

const cache = new Map();

/** LaTeX source → a `<math>` element as an HTML string. */
export function tex(src, { display = false } = {}) {
  const key = `${display ? 'D' : 'I'}${src}`;
  if (cache.has(key)) return cache.get(key);

  let out;
  try {
    const p = new Parser(tokenize(String(src)), display);
    out = `<math xmlns="http://www.w3.org/1998/Math/MathML"${display ? ' display="block"' : ''}>`
      + row(p.parseGroup(false)) + '</math>';
  } catch {
    // A malformed formula must not take the page down with it.
    out = `<code class="tex-error">${esc(src)}</code>`;
  }
  if (cache.size > 4000) cache.clear();
  cache.set(key, out);
  return out;
}

/**
 * Prose with `$…$` and `$$…$$` in it → HTML with real maths in place.
 * Everything outside the delimiters is escaped, so content is safe to insert.
 */
export function prose(str) {
  if (str == null) return '';
  const src = String(str);
  let out = '';
  let i = 0;
  while (i < src.length) {
    const at = src.indexOf('$', i);
    if (at < 0) { out += esc(src.slice(i)); break; }
    out += esc(src.slice(i, at));
    const block = src[at + 1] === '$';
    const open = at + (block ? 2 : 1);
    const closeAt = src.indexOf(block ? '$$' : '$', open);
    if (closeAt < 0) { out += esc(src.slice(at)); break; }
    out += tex(src.slice(open, closeAt), { display: block });
    i = closeAt + (block ? 2 : 1);
  }
  return out;
}

/** Set an element's content from prose, safely. */
export function setProse(el, str) {
  el.innerHTML = prose(str);
  return el;
}
