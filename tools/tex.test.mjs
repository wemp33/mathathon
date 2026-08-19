// The formulas from the user's own course sheets, rendered. These are the
// exact strings the content uses, so if the converter breaks on one of them it
// breaks on the app's front page.
import assert from 'node:assert';
import { tex, prose } from '../public/js/tex.js';

let pass = 0;
const has = (src, ...needles) => {
  const out = tex(src, { display: true });
  for (const n of needles) {
    assert.ok(out.includes(n), `${src}\n  expected ${n}\n  got ${out}`);
  }
  assert.ok(!out.includes('tex-error'), `${src} threw`);
  pass++;
};

// ── Screenshot 1: asymptoty, bryły obrotowe, długość łuku ──
has('\\lim_{x\\to\\infty} f(x) = L', '<munder>', '∞', '→');
has('a = \\lim_{x\\to\\infty}\\frac{f(x)}{x}', '<mfrac>', '<munder>');
has('b = \\lim_{x\\to\\infty}\\left(f(x)-ax\\right)', '<munder>', '<mo>(</mo>');
has('V = \\pi\\int_a^b \\left(f(x)\\right)^2\\,dx', 'π', '<msubsup>', '∫', '<mspace');
has('V = 2\\pi\\int_a^b x f(x)\\,dx', '<msubsup>', '∫');
has('S = 2\\pi\\int_a^b f(x)\\sqrt{1+\\left(f\'(x)\\right)^2}\\,dx', '<msqrt>', '′');
has('L = \\int_a^b \\sqrt{1+\\left(f\'(x)\\right)^2}\\,dx', '<msqrt>', '<msubsup>');

// ── Screenshot 2: wzory pochodnych, with the Polish function names ──
has('(\\operatorname{tg} x)\' = \\frac{1}{\\cos^2 x}', 'tg', 'mathvariant="normal"', '<msup>');
has('(\\operatorname{ctg} x)\' = -\\frac{1}{\\sin^2 x}', 'ctg');
has('(\\operatorname{arctg} x)\' = \\frac{1}{x^2+1}', 'arctg');
has('(\\operatorname{arcctg} x)\' = -\\frac{1}{x^2+1}', 'arcctg');
has('(\\log_a x)\' = \\frac{1}{x\\ln a}', '<msub>', 'ln');
has('(\\sqrt{x})\' = \\frac{1}{2\\sqrt{x}}', '<msqrt>');
has('(x^n)\' = nx^{n-1}', '<msup>');
has('(a^x)\' = a^x \\ln a', 'ln');
has('(\\arcsin x)\' = \\frac{1}{\\sqrt{1-x^2}}', 'arcsin', '<msqrt>');

// ── Screenshot 3: wzory na całki ──
has('\\int x^n dx = \\frac{1}{n+1}x^{n+1} + C,\\quad n \\neq -1', '≠', '<mspace width="1em"/>');
has('\\int \\frac{dx}{x} = \\ln|x| + C', 'ln', '|</mo>');
has('\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a}\\operatorname{arctg}\\left(\\frac{x}{a}\\right) + C', 'arctg');
has('\\int \\frac{dx}{x^2-a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C', '|</mo>');
has('\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C', 'arcsin');
has('\\int \\frac{dx}{\\sqrt{x^2+q}} = \\ln\\left|x+\\sqrt{x^2+q}\\right| + C', '<msqrt>');
has('\\int \\operatorname{tg} x\\,dx = -\\ln|\\cos x| + C', 'tg', 'cos');

// ── Matura-level shapes ──
has('\\Delta = b^2 - 4ac', 'Δ');
has('x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}', '±', '<msub>');
has('x \\in \\langle -2, 3\\rangle', '∈', '⟨', '⟩');
has('\\binom{n}{k} = \\frac{n!}{k!(n-k)!}', 'linethickness="0"');
has('\\sum_{i=1}^{n} a_i', '<munderover>', '∑');
has('f: \\mathbb{R} \\to \\mathbb{R}', 'ℝ', '→');
has('\\sqrt[3]{x}', '<mroot>');
has('\\frac{\\partial^2 f}{\\partial x \\partial y}', '∂');
has('P(A|B) = \\frac{P(A \\cap B)}{P(B)}', '∩');
has('\\sin^2\\alpha + \\cos^2\\alpha = 1', 'α', '<msup>');

// Inline keeps limits beside the operator, the way TeX does.
const inline = tex('\\lim_{n\\to\\infty} a_n');
assert.ok(inline.includes('<msub>') && !inline.includes('<munder>'), `inline lim should not stack: ${inline}`);
pass++;

// Prose: maths rendered, everything else escaped.
const p = prose('Oblicz $\\int x e^{x}\\,dx$ dla $x>0$ & sprawdź <to>.');
assert.ok(p.includes('<math'), 'should render maths');
assert.ok(p.includes('&amp;') && p.includes('&lt;to&gt;'), 'should escape the prose around it');
assert.equal((p.match(/<math/g) || []).length, 2, 'two formulas');
pass++;

// A malformed formula degrades to something visible rather than breaking the page.
for (const bad of ['\\frac{1}{', '\\left(', '^{2}', '\\nosuchcommand{x}', '}{']) {
  const out = tex(bad);
  assert.ok(!out.includes('undefined') && !out.includes('null'), `${bad} leaked: ${out}`);
}
pass++;

process.stdout.write(`${pass}/${pass} checks passed\nLaTeX renders.\n`);
