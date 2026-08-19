// The expression compiler feeds a plotter with model-supplied strings, so the
// property that matters most is refusal: nothing that is not arithmetic may
// run. The plotting itself is DOM-dependent and is exercised in the browser.
import assert from 'node:assert';
import { compile } from '../public/js/plot.js';

let pass = 0;
const check = (name, fn) => { fn(); pass++; process.stdout.write(`  ok  ${name}\n`); };
const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} !~ ${b}`);

check('polynomials', () => {
  const f = compile('x^2 - 3*x + 2');
  near(f(0), 2); near(f(1), 0); near(f(2), 0); near(f(10), 72);
});

check('precedence and unary minus', () => {
  near(compile('-x^2')(3), -9);          // -(x²), as in maths
  near(compile('(-x)^2')(3), 9);
  near(compile('2+3*4')(0), 14);
  near(compile('2^3^1')(0), 8);
});

check('the Polish function names work', () => {
  near(compile('tg(x)')(Math.PI / 4), 1, 1e-12);
  near(compile('ctg(x)')(Math.PI / 4), 1, 1e-12);
  near(compile('arctg(1)')(0), Math.PI / 4);
});

check('constants', () => {
  near(compile('e^x')(1), Math.E);
  near(compile('sin(pi/2)')(0), 1);
});

check('division by zero yields Infinity, not a crash', () => {
  assert.equal(compile('1/x')(0), Infinity);
  assert.ok(Number.isNaN(compile('sqrt(x)')(-1)));
});

check('anything that is not arithmetic is refused', () => {
  for (const evil of [
    'alert(1)', 'window', 'x;alert(1)', 'constructor', 'x`', 'x=>1',
    'this.x', 'globalThis', 'process', 'require("fs")', 'x[0]', '"str"',
  ]) {
    assert.throws(() => compile(evil), undefined, `should refuse: ${evil}`);
  }
});

check('trailing garbage is refused, not ignored', () => {
  assert.throws(() => compile('x^2)'));
  assert.throws(() => compile('x^2 x'));
});

process.stdout.write(`\n${pass}/${pass} checks passed\nExpression compiler behaves.\n`);
