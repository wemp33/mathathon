# Mathathon 🕷️

A maths trainer that watches you work. Built for one student going through the
Polish **matura rozszerzona** and continuing into university analysis.

**The idea:** you get a problem, you work it by hand — Apple Pencil on an iPad,
finger on a phone, keyboard if you must — and the app reads your working line by
line, finds the *first* place it goes wrong, and tells you what the mistake
actually was. Not "incorrect", but "you dropped the minus when moving $3x$
across".

## Sections

| | |
|---|---|
| **Trening** | A problem picked to be right at the edge of your ability. Handwrite the solution; live checking marks each line as you go. A tutor you can talk to sits alongside — it suggests what to try, never blurts the answer, and if you ask for the answer outright the attempt stops counting toward your progress. |
| **Szybki test** | Wyrywkowe sprawdzanie wzorów — spot checks on the formula deck, scheduled by FSRS-6 spaced repetition. |
| **Wzory** | The whole formula sheet: every CKE matura formula plus the analysis tables (17 derivatives, 16 integrals, arc length, solids of revolution). Searchable, offline, with AI explanations of where each formula comes from and the trap it hides. |
| **Postęp** | Skill tracking that cannot be farmed. The number is the modelled chance you solve a problem at the target level *today* — it falls when you avoid a topic, and grinding easy problems does not move it. Uncertain estimates are drawn hatched, because a crisp 78% after four attempts would be a lie. |
| **Ustawienia** | Language (PL/EN), your Anthropic API key (encrypted server-side, never returned to the browser), Apple Pencil options, devices, usage. |

## How the marking works

Three separate AI roles that are deliberately not one conversation:

- **The marker** (Opus) solves the problem itself first, from scratch, and only
  then reads your answer. Correctness is judged on mathematical equivalence.
- **The reader** (Opus, vision) transcribes your handwriting line by line and
  stops diagnosing at the first real error — everything after it is downstream.
  It is explicitly allowed to say *"I can't read line 3"* rather than guess.
- **The tutor** (Sonnet) talks. It receives the marker's verdict and may not
  overturn or soften it.

The skill model is Glicko-1 in logits: every skill carries a rating and an
uncertainty; the uncertainty shrinks with evidence and grows back with neglect.
Problems are chosen to land near your 75% success point — hard enough to teach,
not hard enough to demoralise.

## Stack

Node 22, `node:http`, Postgres, no framework, two dependencies (`pg`,
`@anthropic-ai/sdk`). The client is a vanilla-JS PWA: IndexedDB-first storage
with last-write-wins sync across devices, a custom ink engine (240 Hz Apple
Pencil via coalesced events, pressure-tracked stroke outlines), and LaTeX
rendered to native MathML — no KaTeX, no webfonts, nothing external. Works
offline; installs from Safari via Add to Home Screen.

```
npm install
DATABASE_URL=postgres://… node server/index.js
```

Tests: `node tools/srs.test.mjs` (FSRS-6 against golden vectors),
`node tools/mastery.test.mjs` (the ability model), `node tools/tex.test.mjs`
(the LaTeX renderer against the app's own formula sheet).

Icons are generated, not drawn: `node tools/gen-icons.mjs` renders the spider
from named geometric constants — two body ellipses, eight two-segment legs, and
an integral sign cut out of the abdomen — as both PNG set and SVG from the same
numbers.
