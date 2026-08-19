// Rachunek różniczkowy w zakresie matury rozszerzonej: granica funkcji,
// definicja pochodnej i interpretacja geometryczna, reguły różniczkowania,
// styczna, monotoniczność i ekstrema, optymalizacja.
export default {
  id: 'pochodne-matura',
  track: 'matura',
  order: 110,
  title: { pl: 'Pochodna funkcji', en: 'The derivative' },
  blurb: {
    pl: 'Granica funkcji, definicja pochodnej, reguły różniczkowania, styczna, monotoniczność, ekstrema i maturalne zadania optymalizacyjne.',
    en: 'Function limits, the derivative from the definition, differentiation rules, tangent lines, monotonicity, extrema, and exam optimisation problems.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'granica-funkcji-matura',
      title: { pl: 'Granica funkcji na maturze', en: 'Function limits for the exam' },
      level: 3,
      prereq: ['funkcja-pojecia', 'wzory-skroconego-mnozenia'],
      theory: {
        pl: 'Granica funkcji w punkcie mówi, do czego dążą wartości $f(x)$, gdy $x$ zbliża się do $x_0$ — '
          + 'sama wartość $f(x_0)$ nie ma tu nic do rzeczy i może w ogóle nie istnieć. Na maturze niemal '
          + 'każda granica w punkcie to symbol $\\frac{0}{0}$: rozkładamy licznik i mianownik na czynniki, '
          + 'skracamy $(x-x_0)$ i dopiero podstawiamy. W nieskończoności o granicy funkcji wymiernej '
          + 'decydują najwyższe potęgi — dzielimy licznik i mianownik przez najwyższą potęgę $x$ albo od '
          + 'razu porównujemy stopnie. Granica w punkcie istnieje wtedy i tylko wtedy, gdy obie granice '
          + 'jednostronne istnieją i są równe. Gdy mianownik dąży do zera, a licznik nie, wychodzą granice '
          + 'niewłaściwe $\\pm\\infty$ i pionowa asymptota — znak ustala się z każdej strony osobno.',
        en: 'The limit at a point describes where the values $f(x)$ head as $x$ approaches $x_0$; the value '
          + '$f(x_0)$ itself is irrelevant and may not even exist. On the exam nearly every limit at a point '
          + 'is a $\\frac{0}{0}$ symbol: factor, cancel $(x-x_0)$, then substitute. At infinity the top '
          + 'powers decide: divide through by the highest power of $x$ or compare degrees. A two-sided limit '
          + 'exists iff both one-sided limits exist and agree. When the denominator vanishes and the '
          + 'numerator does not, the one-sided limits are $\\pm\\infty$ — the sign is read off each side '
          + 'separately, and $x=a$ is a vertical asymptote.',
      },
      formulas: [
        { id: 'gr-wymierna-stopnie', tex: '\\lim_{x\\to\\infty}\\frac{a_{n}x^{n}+\\dots}{b_{m}x^{m}+\\dots}=\\begin{cases}0, & n<m\\\\ \\frac{a_{n}}{b_{m}}, & n=m\\\\ \\pm\\infty, & n>m\\end{cases}', name: { pl: 'Granica funkcji wymiernej w nieskończoności', en: 'Rational function limits at infinity' }, note: { pl: 'Decydują najwyższe potęgi. Znak $\\infty$ przy $n>m$ odczytuje się ze znaków współczynników wiodących.', en: 'Top powers decide. For $n>m$ the sign comes from the leading coefficients.' }, drill: true },
        { id: 'gr-zero-zero-skracanie', tex: '\\lim_{x\\to a}\\frac{(x-a)\\,p(x)}{(x-a)\\,q(x)}=\\lim_{x\\to a}\\frac{p(x)}{q(x)}', name: { pl: 'Symbol $\\frac{0}{0}$ — rozkład i skrócenie', en: 'The $\\frac{0}{0}$ symbol — factor and cancel' }, note: { pl: 'Jeśli po podstawieniu $x=a$ wychodzi $\\frac00$, to $(x-a)$ dzieli licznik i mianownik.', en: 'If substitution gives $\\frac00$, then $(x-a)$ divides both top and bottom.' }, drill: true },
        { id: 'gr-jednostronne-warunek', tex: '\\lim_{x\\to a}f(x)=g\\ \\iff\\ \\lim_{x\\to a^{-}}f(x)=\\lim_{x\\to a^{+}}f(x)=g', name: { pl: 'Granica a granice jednostronne', en: 'Two-sided vs one-sided limits' }, note: { pl: 'Różne granice jednostronne = brak granicy. Nie ma żadnego uśredniania.', en: 'Different one-sided limits = no limit. There is no averaging.' }, drill: true },
        { id: 'gr-niewlasciwa-znak', tex: '\\lim_{x\\to a^{+}}\\frac{c}{x-a}=+\\infty,\\qquad \\lim_{x\\to a^{-}}\\frac{c}{x-a}=-\\infty\\quad(c>0)', name: { pl: 'Granice niewłaściwe przy zerze mianownika', en: 'Infinite limits at a vanishing denominator' }, note: { pl: 'Znak mianownika bada się z każdej strony osobno; stąd asymptota pionowa $x=a$.', en: 'Check the denominator sign on each side; this is the vertical asymptote $x=a$.' }, drill: true },
      ],
      skills: [
        { id: 'gr-mat-punkt', title: { pl: 'Granica w punkcie (symbol $\\frac00$)', en: 'Limits at a point ($\\frac00$)' }, levels: [2, 3, 4] },
        { id: 'gr-mat-nieskonczonosc', title: { pl: 'Granice w nieskończoności', en: 'Limits at infinity' }, levels: [3, 5] },
        { id: 'gr-mat-jednostronne', title: { pl: 'Granice jednostronne i niewłaściwe', en: 'One-sided and infinite limits' }, levels: [4] },
      ],
      problems: [
        {
          id: 'granica-funkcji-matura-l2-01',
          skill: 'gr-mat-punkt',
          level: 2,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 2}\\frac{x^{2}-4}{x-2}$.', en: 'Compute $\\lim_{x\\to 2}\\frac{x^{2}-4}{x-2}$.' },
          answer: '4',
          accept: ['4'],
          solution: [
            { pl: 'Podstawienie $x=2$ daje $\\frac00$ — rozkładamy: $x^2-4=(x-2)(x+2)$.', en: 'Substitution gives $\\frac00$ — factor: $x^2-4=(x-2)(x+2)$.' },
            { pl: 'Po skróceniu $\\lim_{x\\to2}(x+2)=4$.', en: 'After cancelling, $\\lim_{x\\to2}(x+2)=4$.' },
          ],
          trap: { pl: 'Odpowiedź „nie istnieje, bo dzielenie przez zero” — $\\frac00$ to symbol do rozwikłania, nie wyrok.', en: 'Answering "does not exist, division by zero" — $\\frac00$ is a symbol to resolve, not a verdict.' },
        },
        {
          id: 'granica-funkcji-matura-l3-01',
          skill: 'gr-mat-punkt',
          level: 3,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 3}\\frac{x^{2}-5x+6}{x^{2}-9}$.', en: 'Compute $\\lim_{x\\to 3}\\frac{x^{2}-5x+6}{x^{2}-9}$.' },
          answer: '\\frac{1}{6}',
          accept: ['1/6'],
          solution: [
            { pl: 'Symbol $\\frac00$. Rozkład: $x^2-5x+6=(x-2)(x-3)$, $x^2-9=(x-3)(x+3)$.', en: 'A $\\frac00$ symbol. Factor: $(x-2)(x-3)$ over $(x-3)(x+3)$.' },
            { pl: 'Skracamy $(x-3)$: $\\lim_{x\\to3}\\frac{x-2}{x+3}=\\frac{1}{6}$.', en: 'Cancel $(x-3)$: $\\frac{x-2}{x+3}\\to\\frac16$.' },
          ],
          trap: { pl: 'Skrócenie $x^2$ z $x^2$ „wyraz po wyrazie” — skracać wolno tylko wspólne czynniki, nie składniki.', en: 'Cancelling $x^2$ against $x^2$ term by term — only common factors cancel, never summands.' },
        },
        {
          id: 'granica-funkcji-matura-l3-02',
          skill: 'gr-mat-nieskonczonosc',
          level: 3,
          prompt: { pl: 'Oblicz $\\lim_{x\\to\\infty}\\frac{2x^{3}-x}{5x^{3}+4x^{2}}$.', en: 'Compute $\\lim_{x\\to\\infty}\\frac{2x^{3}-x}{5x^{3}+4x^{2}}$.' },
          answer: '\\frac{2}{5}',
          accept: ['2/5', '0{,}4'],
          solution: [
            { pl: 'Dzielimy licznik i mianownik przez $x^3$: $\\frac{2-\\frac{1}{x^2}}{5+\\frac{4}{x}}$.', en: 'Divide through by $x^3$: $\\frac{2-\\frac{1}{x^2}}{5+\\frac{4}{x}}$.' },
            { pl: 'Ułamki z $x$ w mianowniku dążą do zera: granica $=\\frac25$.', en: 'The small fractions vanish: the limit is $\\frac25$.' },
          ],
          trap: { pl: 'Iloraz współczynników wiodących wolno brać tylko przy równych stopniach — tutaj akurat są równe, ale to trzeba sprawdzić, nie założyć.', en: 'The leading-coefficient shortcut works only for equal degrees — check it, do not assume it.' },
        },
        {
          id: 'granica-funkcji-matura-l3-03',
          skill: 'gr-mat-nieskonczonosc',
          level: 3,
          prompt: { pl: 'Oblicz $\\lim_{x\\to-\\infty}\\frac{3x^{2}+1}{x^{3}-7}$.', en: 'Compute $\\lim_{x\\to-\\infty}\\frac{3x^{2}+1}{x^{3}-7}$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: 'Stopień licznika (2) jest mniejszy od stopnia mianownika (3) — mianownik rośnie szybciej.', en: 'Numerator degree 2 is below denominator degree 3 — the denominator wins.' },
            { pl: 'Po podzieleniu przez $x^3$: $\\frac{\\frac{3}{x}+\\frac{1}{x^3}}{1-\\frac{7}{x^3}}\\to\\frac{0}{1}=0$.', en: 'Dividing by $x^3$: $\\frac{\\frac3x+\\frac{1}{x^3}}{1-\\frac{7}{x^3}}\\to 0$.' },
          ],
          trap: { pl: 'Odruchowe „$x\\to-\\infty$, więc wynik $-\\infty$” — przy niższym stopniu licznika granica jest zerem niezależnie od strony.', en: 'Reflexively answering $-\\infty$ because $x\\to-\\infty$ — with a lower top degree the limit is 0 from either side.' },
        },
        {
          id: 'granica-funkcji-matura-l4-01',
          skill: 'gr-mat-punkt',
          level: 4,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 1}\\frac{x^{3}-1}{x^{2}-1}$.', en: 'Compute $\\lim_{x\\to 1}\\frac{x^{3}-1}{x^{2}-1}$.' },
          answer: '\\frac{3}{2}',
          accept: ['3/2', '1{,}5'],
          solution: [
            { pl: 'Symbol $\\frac00$. Wzory skróconego mnożenia: $x^3-1=(x-1)(x^2+x+1)$, $x^2-1=(x-1)(x+1)$.', en: 'A $\\frac00$: $x^3-1=(x-1)(x^2+x+1)$, $x^2-1=(x-1)(x+1)$.' },
            { pl: 'Po skróceniu: $\\lim_{x\\to1}\\frac{x^2+x+1}{x+1}=\\frac{3}{2}$.', en: 'After cancelling: $\\frac{x^2+x+1}{x+1}\\to\\frac32$.' },
          ],
          trap: { pl: 'Skrócenie „potęg”: $\\frac{x^3}{x^2}=x\\to1$ — najpierw rozkład na czynniki, skracanie potęg w sumach jest nielegalne.', en: 'Cancelling powers, $\\frac{x^3}{x^2}=x\\to1$ — factor first; cancelling powers inside sums is illegal.' },
        },
        {
          id: 'granica-funkcji-matura-l4-02',
          skill: 'gr-mat-jednostronne',
          level: 4,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 2^{-}}\\frac{x+3}{x-2}$ i zinterpretuj wynik geometrycznie.', en: 'Compute $\\lim_{x\\to 2^{-}}\\frac{x+3}{x-2}$ and interpret it geometrically.' },
          answer: '-\\infty\\ (\\text{asymptota pionowa } x=2)',
          accept: ['-\\infty', 'minus nieskończoność', '-inf'],
          solution: [
            { pl: 'Licznik dąży do $5>0$, mianownik do zera; dla $x<2$ mamy $x-2<0$.', en: 'The numerator tends to $5>0$; for $x<2$ the denominator $x-2$ is a small negative number.' },
            { pl: 'Iloraz „dodatnie przez małe ujemne” ucieka do $-\\infty$.', en: 'Positive over small negative escapes to $-\\infty$.' },
            { pl: 'Geometrycznie: prosta $x=2$ jest asymptotą pionową wykresu.', en: 'Geometrically the line $x=2$ is a vertical asymptote.' },
          ],
          trap: { pl: 'Odpowiedź $+\\infty$ bez zbadania znaku mianownika — z lewej strony $x-2$ jest ujemne.', en: 'Answering $+\\infty$ without checking the sign — from the left $x-2$ is negative.' },
        },
        {
          id: 'granica-funkcji-matura-l5-01',
          skill: 'gr-mat-nieskonczonosc',
          level: 5,
          prompt: { pl: 'Oblicz $\\lim_{x\\to\\infty}\\left(\\sqrt{4x^{2}+x}-2x\\right)$.', en: 'Compute $\\lim_{x\\to\\infty}\\left(\\sqrt{4x^{2}+x}-2x\\right)$.' },
          answer: '\\frac{1}{4}',
          accept: ['1/4', '0{,}25'],
          solution: [
            { pl: 'Symbol $\\infty-\\infty$. Mnożymy przez sprzężenie: $\\frac{4x^2+x-4x^2}{\\sqrt{4x^2+x}+2x}=\\frac{x}{\\sqrt{4x^2+x}+2x}$.', en: 'An $\\infty-\\infty$ symbol. Multiply by the conjugate: $\\frac{x}{\\sqrt{4x^2+x}+2x}$.' },
            { pl: 'Dzielimy przez $x$: $\\frac{1}{\\sqrt{4+\\frac1x}+2}\\to\\frac{1}{2+2}=\\frac14$.', en: 'Divide by $x$: $\\frac{1}{\\sqrt{4+\\frac1x}+2}\\to\\frac14$.' },
          ],
          trap: { pl: 'Uznanie $\\sqrt{4x^2+x}\\approx 2x$, więc granica $0$ — składnik $x$ pod pierwiastkiem zostawia niezerowy ślad.', en: 'Declaring $\\sqrt{4x^2+x}\\approx 2x$ hence limit 0 — the $x$ under the root leaves a nonzero trace.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pochodna-definicja-matura',
      title: { pl: 'Definicja pochodnej i jej interpretacje', en: 'The derivative: definition and meaning' },
      level: 3,
      prereq: ['granica-funkcji-matura'],
      theory: {
        pl: 'Iloraz różnicowy $\\frac{f(x_0+h)-f(x_0)}{h}$ to współczynnik kierunkowy siecznej przechodzącej '
          + 'przez punkty wykresu o odciętych $x_0$ i $x_0+h$. Pochodna $f\'(x_0)$ jest granicą tego ilorazu '
          + 'przy $h\\to0$: sieczne przechodzą w styczną, a pochodna staje się jej współczynnikiem '
          + 'kierunkowym, $f\'(x_0)=\\operatorname{tg}\\alpha$, gdzie $\\alpha$ to kąt nachylenia stycznej '
          + 'do osi $OX$. Interpretacja fizyczna: gdy $s(t)$ opisuje przebytą drogę, to $s\'(t)$ jest '
          + 'prędkością chwilową. Funkcja różniczkowalna w punkcie jest w nim ciągła, ale nie odwrotnie — '
          + '$|x|$ jest ciągła w zerze, a ilorazy różnicowe z obu stron dążą do $-1$ i $1$, więc pochodnej '
          + 'w zerze nie ma.',
        en: 'The difference quotient $\\frac{f(x_0+h)-f(x_0)}{h}$ is the slope of the secant through the '
          + 'graph points at $x_0$ and $x_0+h$. The derivative is its limit as $h\\to0$: secants become the '
          + 'tangent, and $f\'(x_0)=\\operatorname{tg}\\alpha$ is the tangent slope, $\\alpha$ being its '
          + 'inclination to the $x$-axis. Physically, if $s(t)$ is distance travelled then $s\'(t)$ is '
          + 'instantaneous velocity. Differentiability implies continuity but not conversely: $|x|$ is '
          + 'continuous at 0, yet its one-sided difference quotients tend to $-1$ and $1$, so no derivative '
          + 'exists there.',
      },
      formulas: [
        { id: 'def-pochodnej-matura', tex: 'f\'(x_{0})=\\lim_{h\\to 0}\\frac{f(x_{0}+h)-f(x_{0})}{h}', name: { pl: 'Definicja pochodnej', en: 'Definition of the derivative' }, note: { pl: 'Równoważnie $f\'(x_0)=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$.', en: 'Equivalently $\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$.' }, drill: true },
        { id: 'pochodna-tg-alfa', tex: 'f\'(x_{0})=\\operatorname{tg}\\alpha', name: { pl: 'Interpretacja geometryczna', en: 'Geometric meaning' }, note: { pl: '$\\alpha$ — kąt nachylenia stycznej w punkcie $(x_0,f(x_0))$ do osi $OX$.', en: '$\\alpha$ is the inclination of the tangent at $(x_0,f(x_0))$.' }, drill: true },
        { id: 'rozniczkowalnosc-a-ciaglosc', tex: 'f\\ \\text{różniczkowalna w}\\ x_{0}\\ \\Rightarrow\\ f\\ \\text{ciągła w}\\ x_{0}', name: { pl: 'Różniczkowalność a ciągłość', en: 'Differentiability vs continuity' }, note: { pl: 'Implikacja tylko w jedną stronę: $|x|$ jest ciągła w $0$, ale nieróżniczkowalna.', en: 'One way only: $|x|$ is continuous at 0 but not differentiable.' }, drill: true },
      ],
      skills: [
        { id: 'poch-def-iloraz-roznicowy', title: { pl: 'Pochodna z definicji', en: 'Derivative from the definition' }, levels: [3, 4, 5] },
        { id: 'poch-def-interpretacja', title: { pl: 'Interpretacja geometryczna i fizyczna', en: 'Geometric and physical meaning' }, levels: [4] },
      ],
      problems: [
        {
          id: 'pochodna-definicja-matura-l3-01',
          skill: 'poch-def-iloraz-roznicowy',
          level: 3,
          prompt: { pl: 'Korzystając z definicji pochodnej, oblicz $f\'(3)$ dla $f(x)=x^{2}$.', en: 'Using the definition, compute $f\'(3)$ for $f(x)=x^{2}$.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Iloraz różnicowy: $\\frac{(3+h)^2-9}{h}=\\frac{9+6h+h^2-9}{h}=\\frac{6h+h^2}{h}=6+h$.', en: 'The quotient: $\\frac{(3+h)^2-9}{h}=6+h$.' },
            { pl: 'Granica przy $h\\to0$: $f\'(3)=6$.', en: 'Let $h\\to0$: $f\'(3)=6$.' },
          ],
          trap: { pl: 'Napisanie $(x^2)\'=2x$ i podstawienie $x=3$ — wynik ten sam, ale zadanie żąda rachunku z definicji, wzór bez granicy nie jest uzasadnieniem.', en: 'Quoting $(x^2)\'=2x$ — same number, but the task demands the limit computation, not the formula.' },
        },
        {
          id: 'pochodna-definicja-matura-l3-02',
          skill: 'poch-def-iloraz-roznicowy',
          level: 3,
          prompt: { pl: 'Z definicji pochodnej wykaż, że dla $f(x)=5x-2$ zachodzi $f\'(x_{0})=5$ w każdym punkcie $x_{0}$.', en: 'From the definition, show that $f(x)=5x-2$ has $f\'(x_{0})=5$ at every point.' },
          answer: '5',
          accept: ['5'],
          solution: [
            { pl: '$f(x_0+h)-f(x_0)=\\bigl(5x_0+5h-2\\bigr)-\\bigl(5x_0-2\\bigr)=5h$.', en: '$f(x_0+h)-f(x_0)=5h$.' },
            { pl: 'Iloraz $\\frac{5h}{h}=5$ jest stały, więc granica też wynosi $5$.', en: 'The quotient is constantly 5, so the limit is 5.' },
          ],
          trap: { pl: 'Zgubienie nawiasu przy odejmowaniu: $-f(x_0)=-(5x_0-2)=-5x_0+2$, a nie $-5x_0-2$.', en: 'Dropping the bracket: $-f(x_0)=-(5x_0-2)=-5x_0+2$, not $-5x_0-2$.' },
        },
        {
          id: 'pochodna-definicja-matura-l4-01',
          skill: 'poch-def-iloraz-roznicowy',
          level: 4,
          prompt: { pl: 'Korzystając z definicji pochodnej, oblicz $f\'(2)$ dla $f(x)=\\frac{1}{x}$.', en: 'Using the definition, compute $f\'(2)$ for $f(x)=\\frac{1}{x}$.' },
          answer: '-\\frac{1}{4}',
          accept: ['-1/4', '-0{,}25'],
          solution: [
            { pl: '$\\frac{\\frac{1}{2+h}-\\frac{1}{2}}{h}=\\frac{2-(2+h)}{2h(2+h)}=\\frac{-h}{2h(2+h)}=\\frac{-1}{2(2+h)}$.', en: 'Common denominator: the quotient equals $\\frac{-1}{2(2+h)}$.' },
            { pl: 'Przy $h\\to0$: $f\'(2)=-\\frac{1}{4}$.', en: 'As $h\\to0$: $f\'(2)=-\\frac14$.' },
          ],
          trap: { pl: 'Znak: $2-(2+h)=-h$, nie $h$ — zgubiony minus daje $+\\frac14$.', en: 'The sign: $2-(2+h)=-h$, not $h$ — losing the minus gives $+\\frac14$.' },
        },
        {
          id: 'pochodna-definicja-matura-l4-02',
          skill: 'poch-def-interpretacja',
          level: 4,
          prompt: { pl: 'Styczna do wykresu funkcji $f$ w punkcie o odciętej $x_{0}=1$ jest nachylona do osi $OX$ pod kątem $60^{\\circ}$. Oblicz $f\'(1)$.', en: 'The tangent to the graph of $f$ at $x_{0}=1$ meets the $x$-axis at $60^{\\circ}$. Find $f\'(1)$.' },
          answer: '\\sqrt{3}',
          accept: ['sqrt(3)', '√3', 'pierwiastek z 3'],
          solution: [
            { pl: 'Pochodna to tangens kąta nachylenia stycznej: $f\'(1)=\\operatorname{tg}60^{\\circ}$.', en: 'The derivative is the tangent of the inclination: $f\'(1)=\\operatorname{tg}60^{\\circ}$.' },
            { pl: '$\\operatorname{tg}60^{\\circ}=\\sqrt{3}$.', en: '$\\operatorname{tg}60^{\\circ}=\\sqrt{3}$.' },
          ],
          trap: { pl: 'Podanie $60$ albo $\\operatorname{tg}45^{\\circ}$ — odpowiedzią jest tangens kąta, nie sam kąt.', en: 'Answering $60$ — the derivative is the tangent of the angle, not the angle.' },
        },
        {
          id: 'pochodna-definicja-matura-l4-03',
          skill: 'poch-def-interpretacja',
          level: 4,
          prompt: { pl: 'Punkt porusza się po prostej, a droga (w metrach) po czasie $t$ (w sekundach) wynosi $s(t)=t^{2}+3t$. Korzystając z definicji pochodnej, oblicz prędkość chwilową w chwili $t_{0}=2$.', en: 'Distance travelled after $t$ seconds is $s(t)=t^{2}+3t$ metres. Using the definition of the derivative, find the instantaneous velocity at $t_{0}=2$.' },
          answer: 'v(2)=s\'(2)=7\\ \\text{m/s}',
          accept: ['7', '7 m/s'],
          solution: [
            { pl: '$s(2+h)-s(2)=\\bigl(4+4h+h^2+6+3h\\bigr)-10=7h+h^2$.', en: '$s(2+h)-s(2)=7h+h^2$.' },
            { pl: 'Iloraz: $\\frac{7h+h^2}{h}=7+h\\to 7$. Prędkość chwilowa: $7$ m/s.', en: 'The quotient $7+h\\to7$: velocity $7$ m/s.' },
          ],
          trap: { pl: 'Policzenie prędkości średniej $\\frac{s(2)}{2}=5$ m/s — chwilowa to granica ilorazu różnicowego, nie iloraz drogi przez czas.', en: 'Computing the average $\\frac{s(2)}{2}=5$ m/s — instantaneous velocity is the limit of the difference quotient.' },
        },
        {
          id: 'pochodna-definicja-matura-l5-01',
          skill: 'poch-def-iloraz-roznicowy',
          level: 5,
          prompt: { pl: 'Korzystając z definicji pochodnej, oblicz $f\'(4)$ dla $f(x)=\\sqrt{x}$.', en: 'Using the definition, compute $f\'(4)$ for $f(x)=\\sqrt{x}$.' },
          answer: '\\frac{1}{4}',
          accept: ['1/4', '0{,}25'],
          solution: [
            { pl: 'Iloraz $\\frac{\\sqrt{4+h}-2}{h}$ mnożymy przez sprzężenie: $\\frac{(4+h)-4}{h\\left(\\sqrt{4+h}+2\\right)}=\\frac{1}{\\sqrt{4+h}+2}$.', en: 'Multiply by the conjugate: the quotient becomes $\\frac{1}{\\sqrt{4+h}+2}$.' },
            { pl: 'Przy $h\\to0$: $\\frac{1}{2+2}=\\frac14$.', en: 'As $h\\to0$: $\\frac14$.' },
          ],
          trap: { pl: 'Próba „rozpisania” $\\sqrt{4+h}$ jako $2+\\sqrt{h}$ — pierwiastek sumy to nie suma pierwiastków; ratuje tylko sprzężenie.', en: 'Writing $\\sqrt{4+h}=2+\\sqrt{h}$ — roots do not split over sums; the conjugate is the way.' },
        },
        {
          id: 'pochodna-definicja-matura-l5-02',
          skill: 'poch-def-iloraz-roznicowy',
          level: 5,
          prompt: { pl: 'Wykaż, że funkcja $f(x)=|x|$ nie ma pochodnej w punkcie $x_{0}=0$.', en: 'Show that $f(x)=|x|$ has no derivative at $x_{0}=0$.' },
          answer: '\\text{Granice jednostronne ilorazu różnicowego: } -1 \\text{ i } 1 \\text{ — pochodna nie istnieje}',
          accept: ['nie istnieje', 'does not exist'],
          solution: [
            { pl: 'Iloraz różnicowy w zerze: $\\frac{|h|-0}{h}=\\frac{|h|}{h}$.', en: 'The quotient at 0 is $\\frac{|h|}{h}$.' },
            { pl: 'Dla $h>0$ wynosi $1$, dla $h<0$ wynosi $-1$: granice jednostronne to $1$ i $-1$.', en: 'It equals 1 for $h>0$ and $-1$ for $h<0$.' },
            { pl: 'Granice jednostronne są różne, więc granica ilorazu — czyli pochodna — nie istnieje.', en: 'The one-sided limits differ, so the derivative does not exist.' },
          ],
          trap: { pl: 'Argument „$f$ ma w zerze minimum, więc $f\'(0)=0$” — warunek $f\'=0$ w ekstremum dotyczy tylko funkcji różniczkowalnych.', en: 'Arguing "minimum at 0, so $f\'(0)=0$" — Fermat applies only to differentiable functions.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'reguly-rozniczkowania',
      title: { pl: 'Reguły różniczkowania', en: 'Differentiation rules' },
      level: 3,
      prereq: ['pochodna-definicja-matura'],
      theory: {
        pl: 'Maturalny zestaw wzorów: $(x^n)\'=nx^{n-1}$ (także dla wykładników ujemnych), '
          + '$(\\sqrt{x})\'=\\frac{1}{2\\sqrt{x}}$, pochodną sumy i różnicy liczy się wyraz po wyrazie, '
          + 'a stała wychodzi przed pochodną. Iloczyn i iloraz mają własne reguły — $(fg)\'=f\'g+fg\'$ '
          + 'oraz $\\left(\\frac{f}{g}\\right)\'=\\frac{f\'g-fg\'}{g^2}$ — i żadnej z nich nie wolno '
          + 'zastępować różniczkowaniem „po kawałku”. Funkcję złożoną różniczkujemy od zewnątrz do wewnątrz: '
          + '$[f(g(x))]\'=f\'(g(x))\\cdot g\'(x)$, na maturze najczęściej w postaci '
          + '$[(g(x))^n]\'=n(g(x))^{n-1}\\cdot g\'(x)$ oraz $\\left[\\sqrt{g(x)}\\right]\'=\\frac{g\'(x)}{2\\sqrt{g(x)}}$. '
          + 'Przed różniczkowaniem opłaca się uprościć wzór — iloczyn bywa szybciej wymnożyć niż stosować regułę.',
        en: 'The exam toolkit: $(x^n)\'=nx^{n-1}$ (negative exponents included), '
          + '$(\\sqrt{x})\'=\\frac{1}{2\\sqrt{x}}$, sums and differences differentiate term by term, and '
          + 'constants factor out. Products and quotients have their own rules — $(fg)\'=f\'g+fg\'$ and '
          + '$\\left(\\frac{f}{g}\\right)\'=\\frac{f\'g-fg\'}{g^2}$ — never "piece by piece". Compositions '
          + 'differentiate outside-in: $[f(g(x))]\'=f\'(g(x))\\cdot g\'(x)$, on the exam usually as '
          + '$[(g(x))^n]\'=n(g(x))^{n-1}g\'(x)$ or $[\\sqrt{g(x)}]\'=\\frac{g\'(x)}{2\\sqrt{g(x)}}$. '
          + 'Simplify before differentiating — expanding a product is often faster than the rule.',
      },
      formulas: [
        { id: 'poch-potegowa-matura', tex: '(x^{n})\'=nx^{n-1},\\qquad (\\sqrt{x})\'=\\frac{1}{2\\sqrt{x}}', name: { pl: 'Pochodna potęgi i pierwiastka', en: 'Power and root rule' }, note: { pl: 'Działa też dla wykładników ujemnych: $\\left(\\frac1x\\right)\'=-\\frac{1}{x^2}$.', en: 'Negative exponents too: $\\left(\\frac1x\\right)\'=-\\frac{1}{x^2}$.' }, drill: true },
        { id: 'poch-suma-matura', tex: '(f\\pm g)\'=f\'\\pm g\',\\qquad (c\\,f)\'=c\\,f\'', name: { pl: 'Pochodna sumy i iloczynu przez stałą', en: 'Sum and constant multiple' }, note: { pl: 'Wielomiany różniczkuje się wyraz po wyrazie; pochodna stałej to $0$.', en: 'Polynomials go term by term; a constant differentiates to 0.' }, drill: true },
        { id: 'poch-iloczyn-matura', tex: '(f\\,g)\'=f\'g+f\\,g\'', name: { pl: 'Pochodna iloczynu', en: 'Product rule' }, note: { pl: 'NIE $f\'g\'$ — każdy czynnik różniczkujemy raz, drugi zostaje.', en: 'NOT $f\'g\'$ — each factor is differentiated once while the other stands.' }, drill: true },
        { id: 'poch-iloraz-matura', tex: '\\left(\\frac{f}{g}\\right)\'=\\frac{f\'g-f\\,g\'}{g^{2}}', name: { pl: 'Pochodna ilorazu', en: 'Quotient rule' }, note: { pl: 'Kolejność w liczniku jest istotna: najpierw $f\'g$, potem minus $fg\'$.', en: 'Numerator order matters: $f\'g$ first, then minus $fg\'$.' }, drill: true },
        { id: 'poch-zlozenie-matura', tex: '\\left[f(g(x))\\right]\'=f\'(g(x))\\cdot g\'(x)', name: { pl: 'Pochodna funkcji złożonej', en: 'Chain rule' }, note: { pl: 'Maturalne wersje: $[(g)^n]\'=n g^{n-1}g\'$ oraz $[\\sqrt{g}]\'=\\frac{g\'}{2\\sqrt{g}}$.', en: 'Exam forms: $[(g)^n]\'=ng^{n-1}g\'$ and $[\\sqrt{g}]\'=\\frac{g\'}{2\\sqrt{g}}$.' }, drill: true },
      ],
      skills: [
        { id: 'poch-wielomiany-matura', title: { pl: 'Pochodne wielomianów', en: 'Polynomial derivatives' }, levels: [2, 3] },
        { id: 'poch-iloczyn-iloraz-matura', title: { pl: 'Iloczyn i iloraz', en: 'Products and quotients' }, levels: [3, 4] },
        { id: 'poch-zlozenia-matura', title: { pl: 'Funkcje złożone', en: 'Chain rule' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'reguly-rozniczkowania-l2-01',
          skill: 'poch-wielomiany-matura',
          level: 2,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=x^{3}-4x^{2}+7x-1$.', en: 'Differentiate $f(x)=x^{3}-4x^{2}+7x-1$.' },
          answer: 'f\'(x)=3x^{2}-8x+7',
          accept: ['3x^2-8x+7'],
          solution: [
            { pl: 'Wyraz po wyrazie: $(x^3)\'=3x^2$, $(-4x^2)\'=-8x$, $(7x)\'=7$, $(-1)\'=0$.', en: 'Term by term: $3x^2$, $-8x$, $7$, $0$.' },
            { pl: 'Razem: $f\'(x)=3x^2-8x+7$.', en: 'Altogether $f\'(x)=3x^2-8x+7$.' },
          ],
          trap: { pl: 'Pochodna wyrazu wolnego: $(-1)\'=0$, a nie $-1$ — stała znika.', en: 'The constant term: $(-1)\'=0$, not $-1$ — constants vanish.' },
        },
        {
          id: 'reguly-rozniczkowania-l3-01',
          skill: 'poch-wielomiany-matura',
          level: 3,
          prompt: { pl: 'Dla $f(x)=2x^{4}-3x^{2}+x$ oblicz $f\'(-1)$.', en: 'For $f(x)=2x^{4}-3x^{2}+x$ compute $f\'(-1)$.' },
          answer: '-1',
          accept: ['-1'],
          solution: [
            { pl: '$f\'(x)=8x^{3}-6x+1$.', en: '$f\'(x)=8x^{3}-6x+1$.' },
            { pl: '$f\'(-1)=-8+6+1=-1$.', en: '$f\'(-1)=-8+6+1=-1$.' },
          ],
          trap: { pl: 'Znaki przy podstawianiu: $8\\cdot(-1)^3=-8$, ale $-6\\cdot(-1)=+6$.', en: 'Substitution signs: $8(-1)^3=-8$ but $-6(-1)=+6$.' },
        },
        {
          id: 'reguly-rozniczkowania-l3-02',
          skill: 'poch-iloczyn-iloraz-matura',
          level: 3,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=(2x+1)(x^{2}-3)$.', en: 'Differentiate $f(x)=(2x+1)(x^{2}-3)$.' },
          answer: 'f\'(x)=6x^{2}+2x-6',
          accept: ['6x^2+2x-6'],
          solution: [
            { pl: 'Reguła iloczynu: $f\'(x)=2\\cdot(x^2-3)+(2x+1)\\cdot 2x$.', en: 'Product rule: $2(x^2-3)+(2x+1)\\cdot2x$.' },
            { pl: '$=2x^2-6+4x^2+2x=6x^2+2x-6$.', en: '$=6x^2+2x-6$.' },
            { pl: 'Kontrola: po wymnożeniu $f(x)=2x^3+x^2-6x-3$, więc $f\'(x)=6x^2+2x-6$.', en: 'Check by expanding: $f=2x^3+x^2-6x-3$, so $f\'=6x^2+2x-6$.' },
          ],
          trap: { pl: 'Iloczyn pochodnych $2\\cdot 2x=4x$ zamiast reguły iloczynu — $(fg)\'\\neq f\'g\'$.', en: 'Writing $f\'g\'=4x$ — the product rule is not the product of derivatives.' },
        },
        {
          id: 'reguly-rozniczkowania-l3-03',
          skill: 'poch-iloczyn-iloraz-matura',
          level: 3,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=\\frac{x^{2}+1}{x-1}$.', en: 'Differentiate $f(x)=\\frac{x^{2}+1}{x-1}$.' },
          answer: 'f\'(x)=\\frac{x^{2}-2x-1}{(x-1)^{2}}',
          accept: ['(x^2-2x-1)/(x-1)^2'],
          solution: [
            { pl: 'Reguła ilorazu: $f\'(x)=\\frac{2x(x-1)-(x^2+1)\\cdot 1}{(x-1)^2}$.', en: 'Quotient rule: $\\frac{2x(x-1)-(x^2+1)}{(x-1)^2}$.' },
            { pl: 'Licznik: $2x^2-2x-x^2-1=x^2-2x-1$.', en: 'Numerator: $x^2-2x-1$.' },
          ],
          trap: { pl: 'Odwrócenie kolejności w liczniku: najpierw pochodna licznika razy mianownik, potem minus — zamiana daje przeciwny znak.', en: 'Reversing the numerator order flips the sign of the whole derivative.' },
        },
        {
          id: 'reguly-rozniczkowania-l4-01',
          skill: 'poch-zlozenia-matura',
          level: 4,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=(3x-2)^{5}$.', en: 'Differentiate $f(x)=(3x-2)^{5}$.' },
          answer: 'f\'(x)=15(3x-2)^{4}',
          accept: ['15(3x-2)^4'],
          solution: [
            { pl: 'Zewnętrzna: potęga, wewnętrzna: $3x-2$. $f\'(x)=5(3x-2)^4\\cdot(3x-2)\'$.', en: 'Outer: the power; inner: $3x-2$. $f\'=5(3x-2)^4\\cdot(3x-2)\'$.' },
            { pl: '$(3x-2)\'=3$, więc $f\'(x)=15(3x-2)^4$.', en: 'The inner derivative is 3, so $f\'=15(3x-2)^4$.' },
          ],
          trap: { pl: 'Zapomnienie pochodnej wewnętrznej — samo $5(3x-2)^4$ to trzy razy za mało.', en: 'Dropping the inner derivative — $5(3x-2)^4$ alone is off by a factor of 3.' },
        },
        {
          id: 'reguly-rozniczkowania-l4-02',
          skill: 'poch-zlozenia-matura',
          level: 4,
          prompt: { pl: 'Dla $f(x)=\\sqrt{x^{2}+9}$ oblicz $f\'(4)$.', en: 'For $f(x)=\\sqrt{x^{2}+9}$ compute $f\'(4)$.' },
          answer: '\\frac{4}{5}',
          accept: ['4/5', '0{,}8'],
          solution: [
            { pl: '$f\'(x)=\\frac{(x^2+9)\'}{2\\sqrt{x^2+9}}=\\frac{2x}{2\\sqrt{x^2+9}}=\\frac{x}{\\sqrt{x^2+9}}$.', en: '$f\'(x)=\\frac{2x}{2\\sqrt{x^2+9}}=\\frac{x}{\\sqrt{x^2+9}}$.' },
            { pl: '$f\'(4)=\\frac{4}{\\sqrt{25}}=\\frac{4}{5}$.', en: '$f\'(4)=\\frac{4}{5}$.' },
          ],
          trap: { pl: 'Podstawienie $x=4$ przed różniczkowaniem — pochodna stałej $\\sqrt{25}$ to zero; najpierw wzór na $f\'(x)$, potem podstawienie.', en: 'Substituting $x=4$ before differentiating — differentiate first, evaluate second.' },
        },
        {
          id: 'reguly-rozniczkowania-l4-03',
          skill: 'poch-iloczyn-iloraz-matura',
          level: 4,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=\\frac{x^{2}-1}{x^{2}+1}$ i przedstaw ją w najprostszej postaci.', en: 'Differentiate $f(x)=\\frac{x^{2}-1}{x^{2}+1}$ and simplify.' },
          answer: 'f\'(x)=\\frac{4x}{(x^{2}+1)^{2}}',
          accept: ['4x/(x^2+1)^2'],
          solution: [
            { pl: '$f\'(x)=\\frac{2x(x^2+1)-(x^2-1)\\cdot 2x}{(x^2+1)^2}$.', en: '$\\frac{2x(x^2+1)-(x^2-1)2x}{(x^2+1)^2}$.' },
            { pl: 'Licznik: $2x\\bigl[(x^2+1)-(x^2-1)\\bigr]=2x\\cdot 2=4x$.', en: 'Numerator: $2x\\cdot2=4x$.' },
          ],
          trap: { pl: 'Minus przed $(x^2-1)\\cdot 2x$ obejmuje cały iloczyn — bez nawiasu wychodzi błędny licznik $4x^3$.', en: 'The minus covers the whole product $(x^2-1)2x$ — without brackets you get a bogus $4x^3$.' },
        },
        {
          id: 'reguly-rozniczkowania-l4-04',
          skill: 'poch-iloczyn-iloraz-matura',
          level: 4,
          prompt: { pl: 'Rozwiąż równanie $f\'(x)=0$ dla $f(x)=x+\\frac{4}{x}$.', en: 'Solve $f\'(x)=0$ for $f(x)=x+\\frac{4}{x}$.' },
          answer: 'x=-2\\ \\lor\\ x=2',
          accept: ['x=2, x=-2', '-2 i 2', '±2'],
          solution: [
            { pl: '$f\'(x)=1-\\frac{4}{x^2}$ (bo $\\left(\\frac4x\\right)\'=-\\frac{4}{x^2}$).', en: '$f\'(x)=1-\\frac{4}{x^2}$.' },
            { pl: '$1-\\frac{4}{x^2}=0\\Rightarrow x^2=4\\Rightarrow x=\\pm2$ (oba w dziedzinie $x\\neq0$).', en: '$x^2=4$, so $x=\\pm2$, both in the domain.' },
          ],
          trap: { pl: 'Znak: $\\left(\\frac{4}{x}\\right)\'=-\\frac{4}{x^2}$ — zgubiony minus daje równanie $1+\\frac{4}{x^2}=0$ bez rozwiązań.', en: 'The sign: $(4/x)\'=-4/x^2$ — losing the minus leaves an unsolvable equation.' },
        },
        {
          id: 'reguly-rozniczkowania-l5-01',
          skill: 'poch-zlozenia-matura',
          level: 5,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=x^{2}\\sqrt{2x+1}$ i zapisz ją jako jeden ułamek.', en: 'Differentiate $f(x)=x^{2}\\sqrt{2x+1}$ and write the result as a single fraction.' },
          answer: 'f\'(x)=\\frac{5x^{2}+2x}{\\sqrt{2x+1}}',
          accept: ['(5x^2+2x)/sqrt(2x+1)'],
          solution: [
            { pl: 'Iloczyn + złożenie: $f\'(x)=2x\\sqrt{2x+1}+x^2\\cdot\\frac{2}{2\\sqrt{2x+1}}$.', en: 'Product + chain: $2x\\sqrt{2x+1}+\\frac{x^2}{\\sqrt{2x+1}}$.' },
            { pl: 'Wspólny mianownik: $\\frac{2x(2x+1)+x^2}{\\sqrt{2x+1}}=\\frac{5x^2+2x}{\\sqrt{2x+1}}$.', en: 'Common denominator: $\\frac{2x(2x+1)+x^2}{\\sqrt{2x+1}}=\\frac{5x^2+2x}{\\sqrt{2x+1}}$.' },
          ],
          trap: { pl: 'W $\\left(\\sqrt{2x+1}\\right)\'$ czynnik wewnętrzny $2$ skraca się z $\\frac12$ — zapomnienie któregoś z nich psuje licznik.', en: 'In $(\\sqrt{2x+1})\'$ the inner 2 cancels the $\\frac12$ — dropping either wrecks the numerator.' },
        },
        {
          id: 'reguly-rozniczkowania-l5-02',
          skill: 'poch-zlozenia-matura',
          level: 5,
          prompt: { pl: 'Dla $f(x)=\\left(\\frac{x+1}{x-3}\\right)^{2}$ oblicz $f\'(1)$.', en: 'For $f(x)=\\left(\\frac{x+1}{x-3}\\right)^{2}$ compute $f\'(1)$.' },
          answer: '2',
          accept: ['2'],
          solution: [
            { pl: 'Wewnętrzna $g(x)=\\frac{x+1}{x-3}$: $g\'(x)=\\frac{(x-3)-(x+1)}{(x-3)^2}=\\frac{-4}{(x-3)^2}$.', en: 'Inner $g=\\frac{x+1}{x-3}$: $g\'=\\frac{-4}{(x-3)^2}$.' },
            { pl: '$f\'(x)=2g(x)\\cdot g\'(x)=\\frac{-8(x+1)}{(x-3)^{3}}$.', en: '$f\'=2g\\,g\'=\\frac{-8(x+1)}{(x-3)^3}$.' },
            { pl: '$f\'(1)=\\frac{-8\\cdot 2}{(-2)^3}=\\frac{-16}{-8}=2$.', en: '$f\'(1)=\\frac{-16}{-8}=2$.' },
          ],
          trap: { pl: 'Samo $2g(x)$ bez $g\'(x)$ — kwadrat jest funkcją zewnętrzną, iloraz trzeba jeszcze zróżniczkować.', en: 'Writing $2g(x)$ and stopping — the square is the outer layer; the quotient still needs differentiating.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'styczna-do-wykresu',
      title: { pl: 'Styczna do wykresu funkcji', en: 'Tangent lines to graphs' },
      level: 4,
      prereq: ['reguly-rozniczkowania'],
      theory: {
        pl: 'Styczna do wykresu $f$ w punkcie $(x_0,f(x_0))$ ma równanie $y=f(x_0)+f\'(x_0)(x-x_0)$ — '
          + 'wystarczą dwie liczby: wartość i pochodna w $x_0$. Zadania odwrotne zadają kierunek: styczna '
          + 'równoległa do prostej $y=ax+b$ wymaga $f\'(x_0)=a$, prostopadła — $f\'(x_0)\\cdot a=-1$, '
          + 'a zadany kąt nachylenia $\\alpha$ daje $f\'(x_0)=\\operatorname{tg}\\alpha$. Z takiego równania '
          + 'wyznaczamy $x_0$ (bywa, że kilka), a potem piszemy równanie stycznej w każdym znalezionym '
          + 'punkcie. Gdy styczna ma przechodzić przez punkt spoza wykresu, parametryzujemy punkt '
          + 'styczności $(a,f(a))$: warunek przejścia stycznej przez dany punkt daje równanie na $a$.',
        en: 'The tangent at $(x_0,f(x_0))$ is $y=f(x_0)+f\'(x_0)(x-x_0)$ — two numbers suffice: the value '
          + 'and the derivative at $x_0$. Inverse problems prescribe the direction: parallel to $y=ax+b$ '
          + 'means $f\'(x_0)=a$, perpendicular means $f\'(x_0)\\cdot a=-1$, and a given inclination '
          + '$\\alpha$ means $f\'(x_0)=\\operatorname{tg}\\alpha$; solve for $x_0$ (possibly several), '
          + 'then write each tangent. For a tangent through an external point, parametrise the point of '
          + 'tangency $(a,f(a))$ and let the pass-through condition determine $a$.',
      },
      formulas: [
        { id: 'rownanie-stycznej', tex: 'y=f(x_{0})+f\'(x_{0})(x-x_{0})', name: { pl: 'Równanie stycznej', en: 'Tangent line equation' }, note: { pl: 'Współczynnik kierunkowy $a=f\'(x_0)$; punkt styczności leży na wykresie i na stycznej.', en: 'Slope $a=f\'(x_0)$; the tangency point lies on both curves.' }, drill: true },
        { id: 'styczne-rownolegle-prostopadle', tex: 'k_{1}\\parallel k_{2}\\iff a_{1}=a_{2},\\qquad k_{1}\\perp k_{2}\\iff a_{1}a_{2}=-1', name: { pl: 'Proste równoległe i prostopadłe', en: 'Parallel and perpendicular lines' }, note: { pl: 'Warunki na współczynniki kierunkowe — dla stycznej $a=f\'(x_0)$.', en: 'Slope conditions; for a tangent $a=f\'(x_0)$.' }, drill: true },
      ],
      skills: [
        { id: 'styczna-w-punkcie', title: { pl: 'Styczna w danym punkcie', en: 'Tangent at a given point' }, levels: [3, 4] },
        { id: 'styczna-kierunek', title: { pl: 'Styczna o zadanym kierunku', en: 'Tangent with prescribed direction' }, levels: [4, 5] },
        { id: 'styczna-przez-punkt', title: { pl: 'Styczna przez punkt spoza wykresu', en: 'Tangent through an external point' }, levels: [6] },
      ],
      problems: [
        {
          id: 'styczna-do-wykresu-l3-01',
          skill: 'styczna-w-punkcie',
          level: 3,
          prompt: { pl: 'Wyznacz równanie stycznej do wykresu funkcji $f(x)=x^{2}-3x+1$ w punkcie o odciętej $x_{0}=2$.', en: 'Find the tangent to $f(x)=x^{2}-3x+1$ at $x_{0}=2$.' },
          answer: 'y=x-3',
          accept: ['y=x-3'],
          solution: [
            { pl: '$f(2)=4-6+1=-1$, $f\'(x)=2x-3$, więc $f\'(2)=1$.', en: '$f(2)=-1$, $f\'(2)=1$.' },
            { pl: 'Styczna: $y=-1+1\\cdot(x-2)=x-3$.', en: 'Tangent: $y=-1+(x-2)=x-3$.' },
          ],
          trap: { pl: 'Zostawienie współczynnika jako $2x-3$ — do równania stycznej wstawia się liczbę $f\'(2)$, nie wzór pochodnej.', en: 'Leaving the slope as $2x-3$ — the tangent takes the number $f\'(2)$, not the derivative formula.' },
        },
        {
          id: 'styczna-do-wykresu-l4-01',
          skill: 'styczna-w-punkcie',
          level: 4,
          prompt: { pl: 'Wyznacz równanie stycznej do wykresu funkcji $f(x)=x^{3}$ w punkcie o odciętej $x_{0}=-1$.', en: 'Find the tangent to $f(x)=x^{3}$ at $x_{0}=-1$.' },
          answer: 'y=3x+2',
          accept: ['y=3x+2'],
          solution: [
            { pl: '$f(-1)=-1$, $f\'(x)=3x^2$, $f\'(-1)=3$.', en: '$f(-1)=-1$, $f\'(-1)=3$.' },
            { pl: 'Styczna: $y=-1+3(x+1)=3x+2$.', en: 'Tangent: $y=-1+3(x+1)=3x+2$.' },
          ],
          trap: { pl: 'Znaki: $(-1)^3=-1$, ale $3\\cdot(-1)^2=+3$ — kwadrat zjada minus.', en: 'Signs: $(-1)^3=-1$ but $3(-1)^2=+3$ — the square eats the minus.' },
        },
        {
          id: 'styczna-do-wykresu-l4-02',
          skill: 'styczna-kierunek',
          level: 4,
          prompt: { pl: 'Wyznacz współrzędne punktów, w których styczna do wykresu funkcji $f(x)=x^{3}-3x^{2}$ jest równoległa do prostej $y=9x+5$.', en: 'Find the points where the tangent to $f(x)=x^{3}-3x^{2}$ is parallel to $y=9x+5$.' },
          answer: '(3,0)\\ \\text{i}\\ (-1,-4)',
          accept: ['(3,0) i (-1,-4)', '(3,0), (-1,-4)'],
          solution: [
            { pl: 'Równoległość: $f\'(x)=9$, czyli $3x^2-6x=9$, więc $x^2-2x-3=0$.', en: 'Parallel means $f\'(x)=9$: $3x^2-6x=9$, i.e. $x^2-2x-3=0$.' },
            { pl: 'Stąd $x=3$ lub $x=-1$.', en: 'Hence $x=3$ or $x=-1$.' },
            { pl: '$f(3)=27-27=0$, $f(-1)=-1-3=-4$: punkty $(3,0)$ i $(-1,-4)$.', en: 'The points are $(3,0)$ and $(-1,-4)$.' },
          ],
          trap: { pl: 'Przyrównanie $f\'(x)$ do wyrazu wolnego $5$ zamiast do współczynnika kierunkowego $9$.', en: 'Setting $f\'(x)=5$ (the intercept) instead of $9$ (the slope).' },
        },
        {
          id: 'styczna-do-wykresu-l4-03',
          skill: 'styczna-kierunek',
          level: 4,
          prompt: { pl: 'Wyznacz równania stycznych do wykresu funkcji $f(x)=\\frac{1}{x}$ prostopadłych do prostej $y=x$.', en: 'Find the tangents to $f(x)=\\frac{1}{x}$ perpendicular to the line $y=x$.' },
          answer: 'y=-x+2\\ \\text{i}\\ y=-x-2',
          accept: ['y=-x+2, y=-x-2'],
          solution: [
            { pl: 'Prostopadłość do prostej o współczynniku $1$: styczna ma współczynnik $-1$.', en: 'Perpendicular to slope 1 means tangent slope $-1$.' },
            { pl: '$f\'(x)=-\\frac{1}{x^2}=-1\\Rightarrow x^2=1\\Rightarrow x=\\pm1$; punkty $(1,1)$ i $(-1,-1)$.', en: '$-\\frac{1}{x^2}=-1$ gives $x=\\pm1$: points $(1,1)$, $(-1,-1)$.' },
            { pl: 'Styczne: $y=1-(x-1)=-x+2$ oraz $y=-1-(x+1)=-x-2$.', en: 'Tangents: $y=-x+2$ and $y=-x-2$.' },
          ],
          trap: { pl: 'Warunek prostopadłości to $a_1a_2=-1$, a nie $a_2=-a_1$ — dla $a_1=1$ akurat wychodzi to samo, ale uzasadnienie musi być poprawne.', en: 'Perpendicularity is $a_1a_2=-1$, not $a_2=-a_1$ — they coincide here only because $a_1=1$.' },
        },
        {
          id: 'styczna-do-wykresu-l5-01',
          skill: 'styczna-kierunek',
          level: 5,
          prompt: { pl: 'Prosta $y=4x+b$ jest styczna do wykresu funkcji $f(x)=x^{2}+2x+3$. Wyznacz $b$ oraz współrzędne punktu styczności.', en: 'The line $y=4x+b$ is tangent to $f(x)=x^{2}+2x+3$. Find $b$ and the point of tangency.' },
          answer: 'b=2,\\ \\text{punkt styczności } (1,6)',
          accept: ['b=2', '2'],
          solution: [
            { pl: 'Styczność wymaga zgodności kierunków: $f\'(x)=2x+2=4$, więc $x_0=1$.', en: 'Matching slopes: $2x+2=4$, so $x_0=1$.' },
            { pl: 'Punkt styczności: $(1,f(1))=(1,6)$.', en: 'Tangency point $(1,6)$.' },
            { pl: 'Punkt leży na prostej: $6=4\\cdot1+b$, stąd $b=2$.', en: 'It lies on the line: $6=4+b$, so $b=2$.' },
          ],
          trap: { pl: 'Wyznaczanie $b$ z porównania wyrazów wolnych ($b=3$) — $b$ wynika z tego, że punkt styczności leży na prostej.', en: 'Reading $b$ off the constant terms ($b=3$) — $b$ comes from the tangency point lying on the line.' },
        },
        {
          id: 'styczna-do-wykresu-l5-02',
          skill: 'styczna-kierunek',
          level: 5,
          prompt: { pl: 'Wyznacz równanie stycznej do wykresu funkcji $f(x)=\\sqrt{x}$, która jest nachylona do osi $OX$ pod kątem $45^{\\circ}$.', en: 'Find the tangent to $f(x)=\\sqrt{x}$ inclined at $45^{\\circ}$ to the $x$-axis.' },
          answer: 'y=x+\\frac{1}{4}',
          accept: ['y=x+1/4'],
          solution: [
            { pl: 'Kąt $45^{\\circ}$ daje współczynnik $\\operatorname{tg}45^{\\circ}=1$.', en: 'The slope is $\\operatorname{tg}45^{\\circ}=1$.' },
            { pl: '$f\'(x)=\\frac{1}{2\\sqrt{x}}=1\\Rightarrow \\sqrt{x}=\\frac12\\Rightarrow x_0=\\frac14$; punkt $\\left(\\frac14,\\frac12\\right)$.', en: '$\\frac{1}{2\\sqrt{x}}=1$ gives $x_0=\\frac14$, point $(\\frac14,\\frac12)$.' },
            { pl: 'Styczna: $y=\\frac12+1\\cdot\\left(x-\\frac14\\right)=x+\\frac14$.', en: 'Tangent: $y=x+\\frac14$.' },
          ],
          trap: { pl: 'Z $\\sqrt{x}=\\frac12$ wynika $x=\\frac14$, nie $x=\\frac12$ — pierwiastek trzeba podnieść do kwadratu.', en: 'From $\\sqrt{x}=\\frac12$ we get $x=\\frac14$, not $\\frac12$.' },
        },
        {
          id: 'styczna-do-wykresu-l6-01',
          skill: 'styczna-przez-punkt',
          level: 6,
          prompt: { pl: 'Wyznacz równania wszystkich stycznych do wykresu funkcji $f(x)=x^{2}$ przechodzących przez punkt $P=(1,-3)$.', en: 'Find all tangents to $f(x)=x^{2}$ passing through $P=(1,-3)$.' },
          answer: 'y=6x-9\\ \\text{i}\\ y=-2x-1',
          accept: ['y=6x-9, y=-2x-1'],
          solution: [
            { pl: 'Punkt $P$ nie leży na paraboli ($1^2\\neq-3$) — parametryzujemy punkt styczności $(a,a^2)$.', en: '$P$ is off the parabola — parametrise the tangency point $(a,a^2)$.' },
            { pl: 'Styczna w $(a,a^2)$: $y=a^2+2a(x-a)=2ax-a^2$.', en: 'Tangent there: $y=2ax-a^2$.' },
            { pl: 'Przechodzi przez $P$: $-3=2a\\cdot1-a^2$, czyli $a^2-2a-3=0$, więc $a=3$ lub $a=-1$.', en: 'Through $P$: $a^2-2a-3=0$, so $a=3$ or $a=-1$.' },
            { pl: 'Styczne: $y=6x-9$ oraz $y=-2x-1$; obie istotnie przechodzą przez $(1,-3)$.', en: 'Tangents: $y=6x-9$ and $y=-2x-1$; both pass through $(1,-3)$.' },
          ],
          trap: { pl: 'Potraktowanie $P$ jako punktu styczności i policzenie $f\'(1)=2$ — $P$ w ogóle nie leży na wykresie.', en: 'Treating $P$ as the tangency point and using $f\'(1)$ — $P$ is not on the graph at all.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'monotonicznosc-ekstrema',
      title: { pl: 'Monotoniczność i ekstrema lokalne', en: 'Monotonicity and local extrema' },
      level: 4,
      prereq: ['reguly-rozniczkowania'],
      theory: {
        pl: 'Znak pochodnej steruje monotonicznością: jeśli $f\'(x)>0$ na przedziale, to $f$ na nim rośnie, '
          + 'jeśli $f\'(x)<0$ — maleje. Standardowa procedura: dziedzina, pochodna, miejsca zerowe '
          + 'pochodnej, tabelka znaków. Warunek konieczny ekstremum funkcji różniczkowalnej: $f\'(x_0)=0$; '
          + 'warunek wystarczający: pochodna zmienia znak w $x_0$ — z $+$ na $-$ maksimum, z $-$ na $+$ '
          + 'minimum. Samo zero pochodnej to za mało: dla $f(x)=x^3$ mamy $f\'(0)=0$ i żadnego ekstremum. '
          + 'Przy funkcjach wymiernych trzeba pilnować dziedziny — przedziały monotoniczności nie sklejają '
          + 'się przez punkt wyłączony z dziedziny, a ekstremum może być tylko w punkcie dziedziny.',
        en: 'The sign of the derivative drives monotonicity: $f\'>0$ on an interval means increasing, '
          + '$f\'<0$ decreasing. The routine: domain, derivative, its zeros, sign table. Necessary '
          + 'condition for an extremum of a differentiable function: $f\'(x_0)=0$; sufficient: the '
          + 'derivative changes sign there — $+$ to $-$ a maximum, $-$ to $+$ a minimum. A zero of the '
          + 'derivative alone is not enough: $x^3$ has $f\'(0)=0$ and no extremum. With rational functions '
          + 'watch the domain — monotonicity intervals do not glue across an excluded point, and an '
          + 'extremum can only sit inside the domain.',
      },
      formulas: [
        { id: 'monotonicznosc-znak-pochodnej', tex: 'f\'(x)>0\\ \\text{na}\\ (a,b)\\ \\Rightarrow\\ f\\ \\text{rosnąca na}\\ (a,b)', name: { pl: 'Znak pochodnej a monotoniczność', en: 'Derivative sign and monotonicity' }, note: { pl: 'Analogicznie $f\'<0$ daje malenie. Przedziały odczytuje się z tabelki znaków $f\'$.', en: 'Likewise $f\'<0$ gives decreasing; read intervals off the sign table.' }, drill: true },
        { id: 'fermat-warunek-konieczny', tex: 'f\\ \\text{różniczkowalna, ekstremum w}\\ x_{0}\\ \\Rightarrow\\ f\'(x_{0})=0', name: { pl: 'Warunek konieczny ekstremum', en: 'Necessary condition (Fermat)' }, note: { pl: 'Implikacja w jedną stronę: $f(x)=x^3$ ma $f\'(0)=0$ bez ekstremum.', en: 'One way only: $x^3$ has $f\'(0)=0$ and no extremum.' }, drill: true },
        { id: 'ekstremum-zmiana-znaku', tex: 'f\'\\ \\text{zmienia znak w}\\ x_{0}:\\ (+\\to-)\\ \\text{maksimum},\\quad (-\\to+)\\ \\text{minimum}', name: { pl: 'Warunek wystarczający ekstremum', en: 'Sufficient condition: sign change' }, note: { pl: 'Bez zmiany znaku ekstremum nie ma — nawet gdy $f\'(x_0)=0$.', en: 'No sign change, no extremum — even when $f\'(x_0)=0$.' }, drill: true },
      ],
      skills: [
        { id: 'monotonicznosc-z-pochodnej', title: { pl: 'Przedziały monotoniczności', en: 'Monotonicity intervals' }, levels: [3, 4] },
        { id: 'ekstrema-lokalne', title: { pl: 'Ekstrema lokalne', en: 'Local extrema' }, levels: [4, 5] },
        { id: 'ekstrema-parametr', title: { pl: 'Ekstrema z parametrem', en: 'Extrema with a parameter' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'monotonicznosc-ekstrema-l3-01',
          skill: 'monotonicznosc-z-pochodnej',
          level: 3,
          prompt: { pl: 'Wyznacz przedziały monotoniczności funkcji $f(x)=x^{2}-4x+1$.', en: 'Find the monotonicity intervals of $f(x)=x^{2}-4x+1$.' },
          answer: 'f\\ \\text{maleje na}\\ (-\\infty,2\\rangle,\\ \\text{rośnie na}\\ \\langle 2,+\\infty)',
          accept: ['maleje na (-∞,2], rośnie na [2,∞)'],
          solution: [
            { pl: '$f\'(x)=2x-4=2(x-2)$.', en: '$f\'(x)=2(x-2)$.' },
            { pl: '$f\'<0$ dla $x<2$, $f\'>0$ dla $x>2$: malenie na $(-\\infty,2\\rangle$, wzrost na $\\langle2,+\\infty)$.', en: 'Negative left of 2, positive right of 2: decreasing then increasing.' },
          ],
          trap: { pl: 'Zamiana kierunków: $f\'<0$ oznacza malenie — znak pochodnej, nie znak funkcji, decyduje.', en: 'Flipping directions: $f\'<0$ means decreasing — the sign of the derivative decides, not the sign of $f$.' },
        },
        {
          id: 'monotonicznosc-ekstrema-l4-01',
          skill: 'ekstrema-lokalne',
          level: 4,
          prompt: { pl: 'Wyznacz ekstrema lokalne funkcji $f(x)=x^{3}-3x$.', en: 'Find the local extrema of $f(x)=x^{3}-3x$.' },
          answer: '\\text{maksimum lokalne } f(-1)=2,\\ \\text{minimum lokalne } f(1)=-2',
          accept: ['max f(-1)=2, min f(1)=-2'],
          solution: [
            { pl: '$f\'(x)=3x^2-3=3(x-1)(x+1)$; zera: $x=-1$ i $x=1$.', en: '$f\'=3(x-1)(x+1)$, zeros at $\\pm1$.' },
            { pl: 'Znaki $f\'$: $+$ dla $x<-1$, $-$ na $(-1,1)$, $+$ dla $x>1$.', en: 'Signs: $+,-,+$.' },
            { pl: 'W $x=-1$ zmiana $+\\to-$: maksimum $f(-1)=2$; w $x=1$ zmiana $-\\to+$: minimum $f(1)=-2$.', en: 'Max $f(-1)=2$, min $f(1)=-2$.' },
          ],
          trap: { pl: 'Zamiana ról: układ znaków $+,-,+$ daje najpierw maksimum, potem minimum — nie odwrotnie.', en: 'Swapping roles: the $+,-,+$ pattern gives a maximum first, then a minimum.' },
        },
        {
          id: 'monotonicznosc-ekstrema-l4-02',
          skill: 'ekstrema-lokalne',
          level: 4,
          prompt: { pl: 'Wyznacz ekstrema lokalne funkcji $f(x)=x^{4}-4x^{3}$.', en: 'Find the local extrema of $f(x)=x^{4}-4x^{3}$.' },
          answer: '\\text{jedyne ekstremum: minimum lokalne } f(3)=-27',
          accept: ['min f(3)=-27'],
          solution: [
            { pl: '$f\'(x)=4x^3-12x^2=4x^2(x-3)$; zera: $x=0$ (podwójne) i $x=3$.', en: '$f\'=4x^2(x-3)$; zeros 0 (double) and 3.' },
            { pl: 'Czynnik $4x^2\\ge0$, więc znak $f\'$ to znak $(x-3)$: $-$ przed $3$, $+$ za $3$.', en: 'Since $4x^2\\ge0$, the sign is that of $x-3$.' },
            { pl: 'W $x=0$ brak zmiany znaku — brak ekstremum; w $x=3$ minimum $f(3)=81-108=-27$.', en: 'No sign change at 0; a minimum $f(3)=-27$ at 3.' },
          ],
          trap: { pl: 'Ogłoszenie ekstremum w $x=0$, bo $f\'(0)=0$ — pochodna nie zmienia tam znaku, więc ekstremum nie ma.', en: 'Declaring an extremum at 0 because $f\'(0)=0$ — no sign change, no extremum.' },
        },
        {
          id: 'monotonicznosc-ekstrema-l4-03',
          skill: 'monotonicznosc-z-pochodnej',
          level: 4,
          prompt: { pl: 'Zbadaj monotoniczność funkcji $f(x)=x^{3}-3x^{2}+3x-5$ i rozstrzygnij, czy ma ona ekstrema lokalne.', en: 'Study the monotonicity of $f(x)=x^{3}-3x^{2}+3x-5$ and decide whether it has local extrema.' },
          answer: 'f\\ \\text{rosnąca na } \\mathbb{R},\\ \\text{brak ekstremów}',
          accept: ['rosnąca na R, brak ekstremów'],
          solution: [
            { pl: '$f\'(x)=3x^2-6x+3=3(x-1)^2\\ge0$, zero tylko w $x=1$.', en: '$f\'=3(x-1)^2\\ge0$, vanishing only at 1.' },
            { pl: 'Pochodna nieujemna i zeruje się w jednym punkcie: $f$ jest rosnąca na całym $\\mathbb{R}$.', en: 'Nonnegative with an isolated zero: $f$ increases on all of $\\mathbb{R}$.' },
            { pl: 'W $x=1$ nie ma zmiany znaku, więc nie ma ekstremum.', en: 'No sign change at 1, hence no extremum.' },
          ],
          trap: { pl: '$f\'(1)=0$ kusi, by ogłosić ekstremum — kwadrat nie zmienia znaku, funkcja tylko na moment „przystaje”.', en: '$f\'(1)=0$ tempts an extremum call — a square never changes sign; the function merely pauses.' },
        },
        {
          id: 'monotonicznosc-ekstrema-l5-01',
          skill: 'ekstrema-lokalne',
          level: 5,
          prompt: { pl: 'Wyznacz ekstrema lokalne funkcji $f(x)=\\frac{x^{2}}{x-1}$.', en: 'Find the local extrema of $f(x)=\\frac{x^{2}}{x-1}$.' },
          answer: '\\text{maksimum lokalne } f(0)=0,\\ \\text{minimum lokalne } f(2)=4',
          accept: ['max f(0)=0, min f(2)=4'],
          solution: [
            { pl: 'Dziedzina $x\\neq1$. $f\'(x)=\\frac{2x(x-1)-x^2}{(x-1)^2}=\\frac{x^2-2x}{(x-1)^2}=\\frac{x(x-2)}{(x-1)^2}$.', en: 'Domain $x\\neq1$; $f\'=\\frac{x(x-2)}{(x-1)^2}$.' },
            { pl: 'Mianownik dodatni, znak $f\'$ to znak $x(x-2)$: $+$ dla $x<0$, $-$ na $(0,1)\\cup(1,2)$, $+$ dla $x>2$.', en: 'The sign is that of $x(x-2)$: $+,-,-,+$ around $0,1,2$.' },
            { pl: 'W $x=0$: $+\\to-$, maksimum $f(0)=0$; w $x=2$: $-\\to+$, minimum $f(2)=4$.', en: 'Max $f(0)=0$; min $f(2)=4$.' },
          ],
          trap: { pl: 'Sklejenie przedziału malenia w $(0,2)$ — punkt $x=1$ nie należy do dziedziny i przedziały $(0,1)$, $(1,2)$ zapisuje się osobno.', en: 'Gluing the decrease into $(0,2)$ — $x=1$ is outside the domain; the intervals stay separate.' },
        },
        {
          id: 'monotonicznosc-ekstrema-l5-02',
          skill: 'ekstrema-parametr',
          level: 5,
          prompt: { pl: 'Dla jakich wartości parametru $p$ funkcja $f(x)=x^{3}+px^{2}+3x+1$ nie ma ekstremów lokalnych?', en: 'For which $p$ does $f(x)=x^{3}+px^{2}+3x+1$ have no local extrema?' },
          answer: 'p\\in\\langle -3,3\\rangle',
          accept: ['[-3,3]', '-3<=p<=3'],
          solution: [
            { pl: '$f\'(x)=3x^2+2px+3$ — trójmian o dodatnim współczynniku przy $x^2$.', en: '$f\'=3x^2+2px+3$, an upward parabola.' },
            { pl: 'Brak ekstremów $\\iff$ $f\'$ nie zmienia znaku $\\iff$ $\\Delta=4p^2-36\\le0$.', en: 'No extrema iff $f\'$ never changes sign: $\\Delta=4p^2-36\\le0$.' },
            { pl: 'Stąd $p^2\\le9$, czyli $p\\in\\langle-3,3\\rangle$.', en: 'Hence $p\\in\\langle-3,3\\rangle$.' },
          ],
          trap: { pl: 'Ostra nierówność $\\Delta<0$ gubi $p=\\pm3$ — przy $\\Delta=0$ pochodna ma pierwiastek podwójny i znaku nie zmienia, ekstremum nadal brak.', en: 'Using $\\Delta<0$ drops $p=\\pm3$ — a double root of $f\'$ changes no sign, so there is still no extremum.' },
        },
        {
          id: 'monotonicznosc-ekstrema-l6-01',
          skill: 'ekstrema-parametr',
          level: 6,
          prompt: { pl: 'Funkcja $f(x)=x^{3}+ax^{2}+bx+1$ ma w punkcie $x_{0}=1$ ekstremum lokalne równe $-4$. Wyznacz $a$ i $b$ oraz rozstrzygnij, czy jest to maksimum, czy minimum.', en: 'The function $f(x)=x^{3}+ax^{2}+bx+1$ has a local extremum at $x_{0}=1$ with value $-4$. Find $a$, $b$ and classify the extremum.' },
          answer: 'a=3,\\ b=-9,\\ \\text{minimum lokalne}',
          accept: ['a=3, b=-9'],
          solution: [
            { pl: 'Warunek konieczny: $f\'(1)=3+2a+b=0$. Wartość: $f(1)=2+a+b=-4$.', en: 'Conditions: $3+2a+b=0$ and $2+a+b=-4$.' },
            { pl: 'Odejmując: $1+a=6-2+\\dots$ — porządnie: z układu $2a+b=-3$, $a+b=-6$ wychodzi $a=3$, $b=-9$.', en: 'From $2a+b=-3$ and $a+b=-6$: $a=3$, $b=-9$.' },
            { pl: 'Kontrola: $f\'(x)=3x^2+6x-9=3(x+3)(x-1)$; znak $-$ na $(-3,1)$, $+$ za $1$: minimum. $f(1)=1+3-9+1=-4$.', en: 'Check: $f\'=3(x+3)(x-1)$ changes $-$ to $+$ at 1 — a minimum, and $f(1)=-4$.' },
          ],
          trap: { pl: 'Poprzestanie na układzie równań — bez sprawdzenia zmiany znaku $f\'$ nie wiadomo nawet, czy ekstremum rzeczywiście tam jest.', en: 'Stopping at the linear system — without the sign check you have not shown an extremum exists at all.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'optymalizacja-matura',
      title: { pl: 'Wartości ekstremalne i optymalizacja', en: 'Global extrema and optimisation' },
      level: 5,
      prereq: ['monotonicznosc-ekstrema'],
      theory: {
        pl: 'Funkcja ciągła na przedziale domkniętym $\\langle a,b\\rangle$ osiąga wartość najmniejszą '
          + 'i największą (twierdzenie Weierstrassa), a kandydatami są wyłącznie końce przedziału i zera '
          + 'pochodnej leżące wewnątrz — liczymy wartości we wszystkich kandydatach i porównujemy. Zadanie '
          + 'optymalizacyjne to ta sama procedura poprzedzona modelowaniem: wybieramy zmienną, wyrażamy '
          + 'przez nią optymalizowaną wielkość (korzystając z warunku wiążącego wymiary), a dziedzinę '
          + 'wyznaczamy z geometrycznego sensu zadania. Potem pochodna, jej miejsce zerowe i — obowiązkowo '
          + 'na maturze — uzasadnienie znakiem pochodnej, że w znalezionym punkcie jest maksimum lub '
          + 'minimum. Na końcu wracamy do języka zadania: odpowiedzią są wymiary, koszt albo objętość, '
          + 'nie samo $x$.',
        en: 'A continuous function on a closed interval attains its least and greatest values '
          + '(Weierstrass), and the only candidates are the endpoints and the interior zeros of the '
          + 'derivative — evaluate all candidates and compare. An optimisation problem is the same '
          + 'procedure preceded by modelling: pick a variable, express the target quantity through it '
          + 'using the constraint, and read the domain off the geometry. Then differentiate, find the '
          + 'zero, and — obligatorily on the exam — justify by the sign of the derivative that it is a '
          + 'maximum or minimum. Finally answer in the language of the problem: dimensions, cost or '
          + 'volume, not a bare $x$.',
      },
      formulas: [
        { id: 'kandydaci-ekstremum-globalne', tex: '\\max_{\\langle a,b\\rangle}f=\\max\\bigl\\{f(a),\\,f(b),\\,f(x_{i}):\\ f\'(x_{i})=0,\\ x_{i}\\in(a,b)\\bigr\\}', name: { pl: 'Kandydaci na wartości ekstremalne', en: 'Candidates for global extrema' }, note: { pl: 'Analogicznie minimum. Końce przedziału są kandydatami zawsze, bez warunku $f\'=0$.', en: 'Likewise the minimum. Endpoints are always candidates, no $f\'=0$ required.' }, drill: true },
        { id: 'walec-w-kuli-zwiazek', tex: 'r^{2}+\\frac{h^{2}}{4}=R^{2}', name: { pl: 'Walec wpisany w kulę', en: 'Cylinder inscribed in a sphere' }, note: { pl: 'Przekrój osiowy: trójkąt prostokątny o przyprostokątnych $r$ i $\\frac{h}{2}$ oraz przeciwprostokątnej $R$.', en: 'Axial cross-section: right triangle with legs $r$, $\\frac{h}{2}$ and hypotenuse $R$.' }, drill: true },
      ],
      skills: [
        { id: 'wartosc-na-przedziale', title: { pl: 'Najmniejsza i największa wartość na przedziale', en: 'Extreme values on a closed interval' }, levels: [4, 5] },
        { id: 'optymalizacja-geometryczna', title: { pl: 'Optymalizacja geometryczna', en: 'Geometric optimisation' }, levels: [4, 5, 6] },
        { id: 'optymalizacja-koszt', title: { pl: 'Minimalny koszt i zasoby', en: 'Minimal cost and resources' }, levels: [6] },
      ],
      problems: [
        {
          id: 'optymalizacja-matura-l4-01',
          skill: 'wartosc-na-przedziale',
          level: 4,
          prompt: { pl: 'Wyznacz najmniejszą i największą wartość funkcji $f(x)=x^{3}-3x^{2}+1$ na przedziale $\\langle -1,4\\rangle$.', en: 'Find the least and greatest values of $f(x)=x^{3}-3x^{2}+1$ on $\\langle -1,4\\rangle$.' },
          answer: 'f_{\\min}=-3\\ (x=-1\\ \\text{i}\\ x=2),\\ f_{\\max}=17\\ (x=4)',
          accept: ['min -3, max 17'],
          solution: [
            { pl: '$f\'(x)=3x^2-6x=3x(x-2)$; zera $x=0$ i $x=2$, oba wewnątrz przedziału.', en: '$f\'=3x(x-2)$; zeros 0 and 2, both interior.' },
            { pl: 'Kandydaci: $f(-1)=-3$, $f(0)=1$, $f(2)=-3$, $f(4)=17$.', en: 'Candidates: $f(-1)=-3$, $f(0)=1$, $f(2)=-3$, $f(4)=17$.' },
            { pl: 'Najmniejsza wartość $-3$ (przyjmowana w $x=-1$ i $x=2$), największa $17$ w $x=4$.', en: 'Minimum $-3$ (at both $-1$ and $2$), maximum 17 at 4.' },
          ],
          trap: { pl: 'Porównanie tylko zer pochodnej — maksimum siedzi na końcu przedziału $x=4$, gdzie $f\'\\neq0$.', en: 'Comparing only critical points — the maximum sits at the endpoint $x=4$ where $f\'\\neq0$.' },
        },
        {
          id: 'optymalizacja-matura-l4-02',
          skill: 'optymalizacja-geometryczna',
          level: 4,
          prompt: { pl: 'Liczbę $12$ przedstaw jako sumę dwóch liczb dodatnich $x$ i $12-x$ tak, aby iloczyn kwadratu pierwszej z nich i drugiej był największy. Podaj ten iloczyn.', en: 'Split $12$ into positive parts $x$ and $12-x$ so that $x^{2}(12-x)$ is largest. Give the maximal product.' },
          answer: 'x=8\\ \\text{(składniki } 8 \\text{ i } 4\\text{)},\\ \\text{iloczyn } 256',
          accept: ['8 i 4', '256'],
          solution: [
            { pl: 'Funkcja celu: $f(x)=x^2(12-x)=12x^2-x^3$ dla $x\\in(0,12)$.', en: 'Target: $f(x)=12x^2-x^3$ on $(0,12)$.' },
            { pl: '$f\'(x)=24x-3x^2=3x(8-x)$; wewnątrz dziedziny zero w $x=8$.', en: '$f\'=3x(8-x)$; the interior zero is $x=8$.' },
            { pl: '$f\'>0$ na $(0,8)$, $f\'<0$ na $(8,12)$: maksimum. $f(8)=64\\cdot4=256$.', en: 'Sign $+$ then $-$: a maximum; $f(8)=256$.' },
          ],
          trap: { pl: 'Odruch symetrii „$6$ i $6$” — funkcja celu $x^2(12-x)$ nie jest symetryczna i optimum leży w $8$, nie w połowie.', en: 'The symmetric guess $6+6$ — the target $x^2(12-x)$ is not symmetric; the optimum is at 8.' },
        },
        {
          id: 'optymalizacja-matura-l5-01',
          skill: 'wartosc-na-przedziale',
          level: 5,
          prompt: { pl: 'Wyznacz najmniejszą i największą wartość funkcji $f(x)=\\frac{x^{2}+3}{x+1}$ na przedziale $\\langle 0,3\\rangle$.', en: 'Find the least and greatest values of $f(x)=\\frac{x^{2}+3}{x+1}$ on $\\langle 0,3\\rangle$.' },
          answer: 'f_{\\min}=f(1)=2,\\ f_{\\max}=f(0)=f(3)=3',
          accept: ['min 2, max 3'],
          solution: [
            { pl: '$f\'(x)=\\frac{2x(x+1)-(x^2+3)}{(x+1)^2}=\\frac{x^2+2x-3}{(x+1)^2}=\\frac{(x+3)(x-1)}{(x+1)^2}$.', en: '$f\'=\\frac{(x+3)(x-1)}{(x+1)^2}$.' },
            { pl: 'W $(0,3)$ jedyne zero to $x=1$ ($x=-3$ poza przedziałem).', en: 'The only interior zero is $x=1$.' },
            { pl: 'Kandydaci: $f(0)=3$, $f(1)=\\frac42=2$, $f(3)=\\frac{12}{4}=3$. Najmniejsza $2$, największa $3$ (na obu końcach).', en: 'Candidates: 3, 2, 3 — minimum 2, maximum 3 at both endpoints.' },
          ],
          trap: { pl: 'Szukanie maksimum wśród zer pochodnej — tutaj maksimum jest przyjmowane na obu końcach przedziału.', en: 'Hunting the maximum among critical points — here it is attained at both endpoints.' },
        },
        {
          id: 'optymalizacja-matura-l5-02',
          skill: 'optymalizacja-geometryczna',
          level: 5,
          prompt: { pl: 'Z kwadratowego arkusza kartonu o boku $12$ wycinamy w narożnikach cztery kwadraty o boku $x$ i zaginamy ścianki, otrzymując otwarte pudełko. Dla jakiego $x$ objętość pudełka jest największa i ile wynosi?', en: 'From a $12\\times12$ sheet we cut squares of side $x$ at the corners and fold up an open box. Which $x$ maximises the volume, and what is it?' },
          answer: 'x=2,\\ V_{\\max}=128',
          accept: ['x=2', '128'],
          solution: [
            { pl: 'Podstawa $(12-2x)\\times(12-2x)$, wysokość $x$: $V(x)=x(12-2x)^2$, $x\\in(0,6)$.', en: '$V(x)=x(12-2x)^2$ on $(0,6)$.' },
            { pl: '$V\'(x)=(12-2x)^2+x\\cdot2(12-2x)(-2)=(12-2x)(12-6x)$.', en: '$V\'=(12-2x)(12-6x)$.' },
            { pl: 'W $(0,6)$ zero w $x=2$; $V\'>0$ na $(0,2)$, $V\'<0$ na $(2,6)$ — maksimum.', en: 'Interior zero $x=2$, sign $+$ then $-$: a maximum.' },
            { pl: '$V(2)=2\\cdot8^2=128$.', en: '$V(2)=128$.' },
          ],
          trap: { pl: 'Dziedzina: wycięcie $x\\ge6$ zjada cały karton — sens mają tylko $x\\in(0,6)$, a drugi pierwiastek $V\'$, $x=6$, odpada.', en: 'The domain: $x\\ge6$ consumes the sheet — only $(0,6)$ makes sense, discarding the root $x=6$.' },
        },
        {
          id: 'optymalizacja-matura-l5-03',
          skill: 'optymalizacja-geometryczna',
          level: 5,
          prompt: { pl: 'Prostokątny ogródek przylega jednym bokiem do muru. Na pozostałe trzy boki mamy $60$ m siatki. Wyznacz wymiary ogródka o największym polu oraz to pole.', en: 'A rectangular garden has a wall along one side; 60 m of fencing covers the other three sides. Find the dimensions maximising the area, and the area.' },
          answer: '15\\ \\text{m}\\times30\\ \\text{m},\\ P_{\\max}=450\\ \\text{m}^{2}',
          accept: ['15 x 30', '450'],
          solution: [
            { pl: 'Boki prostopadłe do muru: $x$, bok równoległy: $60-2x$. Pole $P(x)=x(60-2x)$, $x\\in(0,30)$.', en: 'Perpendicular sides $x$, parallel side $60-2x$: $P(x)=x(60-2x)$ on $(0,30)$.' },
            { pl: '$P\'(x)=60-4x=0\\Rightarrow x=15$; $P\'>0$ przed, $P\'<0$ po — maksimum.', en: '$P\'=60-4x$ vanishes at 15, sign $+$ then $-$: a maximum.' },
            { pl: 'Wymiary: $15$ m i $60-30=30$ m; $P=450$ m$^2$.', en: 'Dimensions 15 m by 30 m; area 450 m$^2$.' },
          ],
          trap: { pl: 'Warunek $2x+2y=60$ jak dla czterech boków — mur zastępuje jeden bok i siatka idzie tylko na trzy.', en: 'Writing $2x+2y=60$ as if fencing all four sides — the wall replaces one side.' },
        },
        {
          id: 'optymalizacja-matura-l6-01',
          skill: 'optymalizacja-geometryczna',
          level: 6,
          prompt: { pl: 'W kulę o promieniu $R=\\sqrt{3}$ wpisano walec o największej możliwej objętości. Oblicz promień podstawy, wysokość i objętość tego walca.', en: 'A cylinder of maximal volume is inscribed in a sphere of radius $R=\\sqrt{3}$. Find its base radius, height and volume.' },
          answer: 'h=2,\\ r=\\sqrt{2},\\ V=4\\pi',
          accept: ['h=2, r=√2, V=4π', '4pi'],
          solution: [
            { pl: 'Związek wymiarów: $r^2+\\frac{h^2}{4}=R^2=3$, więc $r^2=3-\\frac{h^2}{4}$.', en: 'Constraint: $r^2=3-\\frac{h^2}{4}$.' },
            { pl: '$V(h)=\\pi r^2h=\\pi\\left(3h-\\frac{h^3}{4}\\right)$, $h\\in(0,2\\sqrt{3})$.', en: '$V(h)=\\pi(3h-\\frac{h^3}{4})$ on $(0,2\\sqrt3)$.' },
            { pl: '$V\'(h)=\\pi\\left(3-\\frac{3h^2}{4}\\right)=0\\Rightarrow h^2=4\\Rightarrow h=2$; znak $+\\to-$ potwierdza maksimum.', en: '$V\'=\\pi(3-\\frac{3h^2}{4})$ vanishes at $h=2$; sign $+\\to-$ confirms a maximum.' },
            { pl: '$r^2=3-1=2$, więc $r=\\sqrt{2}$ i $V=\\pi\\cdot2\\cdot2=4\\pi$.', en: '$r=\\sqrt2$ and $V=4\\pi$.' },
          ],
          trap: { pl: 'Związek $r^2+h^2=R^2$ zamiast $r^2+\\frac{h^2}{4}=R^2$ — do trójkąta w przekroju wchodzi połowa wysokości.', en: 'Writing $r^2+h^2=R^2$ — the cross-section triangle uses half the height.' },
        },
        {
          id: 'optymalizacja-matura-l6-02',
          skill: 'optymalizacja-koszt',
          level: 6,
          prompt: { pl: 'Otwarty od góry zbiornik w kształcie prostopadłościanu o podstawie kwadratowej ma mieć objętość $8$ m$^{3}$. Metr kwadratowy dna kosztuje $20$ zł, a ściany bocznej $10$ zł. Wyznacz wymiary zbiornika o najmniejszym koszcie budowy i ten koszt.', en: 'An open-topped tank with a square base must hold $8$ m$^{3}$. The bottom costs 20 zł per m$^2$, the walls 10 zł per m$^2$. Find the cheapest dimensions and the cost.' },
          answer: 'a=2\\ \\text{m},\\ h=2\\ \\text{m},\\ K_{\\min}=240\\ \\text{zł}',
          accept: ['2 x 2 x 2', '240'],
          solution: [
            { pl: 'Bok podstawy $a$, wysokość $h$: $a^2h=8$, więc $h=\\frac{8}{a^2}$.', en: 'Base $a$, height $h=\\frac{8}{a^2}$.' },
            { pl: 'Koszt: dno $20a^2$, cztery ściany $10\\cdot4ah=40a\\cdot\\frac{8}{a^2}=\\frac{320}{a}$; $K(a)=20a^2+\\frac{320}{a}$, $a>0$.', en: 'Cost $K(a)=20a^2+\\frac{320}{a}$ for $a>0$.' },
            { pl: '$K\'(a)=40a-\\frac{320}{a^2}=0\\Rightarrow a^3=8\\Rightarrow a=2$; znak $-\\to+$ daje minimum.', en: '$K\'=40a-\\frac{320}{a^2}$ vanishes at $a=2$; sign $-\\to+$: a minimum.' },
            { pl: '$h=\\frac{8}{4}=2$ m; $K(2)=80+160=240$ zł.', en: '$h=2$ m and $K(2)=240$ zł.' },
          ],
          trap: { pl: 'Doliczenie przykrycia albo policzenie tylko jednej ściany — zbiornik jest otwarty, a ścian bocznych są cztery.', en: 'Adding a lid or counting one wall — the tank is open and has four walls.' },
        },
      ],
    },
  ],
};
