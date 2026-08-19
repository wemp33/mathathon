// Całki oznaczone — moduł techniczny: definicja przez sumy Riemanna, pole ze
// znakiem, własności, twierdzenie o wartości średniej, podstawienie i części
// w wersji oznaczonej, całki niewłaściwe obu rodzajów.
// Wzór Newtona-Leibniza i pola między krzywymi mieszkają w zastosowania-calek.
export default {
  id: 'calki-oznaczone',
  track: 'calculus',
  order: 260,
  title: { pl: 'Całki oznaczone', en: 'Definite integrals' },
  blurb: {
    pl: 'Sumy Riemanna i pole ze znakiem, własności całki, wartość średnia, podstawienie ze zmianą granic, części w wersji oznaczonej, całki niewłaściwe.',
    en: 'Riemann sums and signed area, properties of the integral, mean value, substitution with new limits, definite integration by parts, improper integrals.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'sumy-riemanna',
      title: { pl: 'Sumy Riemanna i pole ze znakiem', en: 'Riemann sums and signed area' },
      level: 4,
      prereq: ['granice-ciagow', 'tablica-calek'],
      theory: {
        pl: 'Całka oznaczona $\\int_a^b f(x)\\,dx$ to granica sum Riemanna: przedział $\\langle a,b\\rangle$ '
          + 'tniemy na kawałki, na każdym wybieramy punkt, sumujemy $f(x_k^*)\\Delta x_k$ i zagęszczamy podział. '
          + 'Dla funkcji ciągłej granica istnieje i nie zależy ani od podziału, ani od wyboru punktów — w praktyce '
          + 'bierze się podział równomierny i prawe końce. Wynik to pole ZE ZNAKIEM: kawałki nad osią liczą się '
          + 'na plus, kawałki pod osią na minus, więc całka może wyjść zerowa, choć figura ma spore pole. '
          + 'Czytana wstecz, definicja jest narzędziem: granicę sumy o $n$ składnikach postaci '
          + '$\\frac{1}{n}\\sum f(\\frac{k}{n})$ rozpoznaje się jako $\\int_0^1 f$.',
        en: 'The definite integral is the limit of Riemann sums: cut $[a,b]$ into pieces, pick a point in each, '
          + 'sum $f(x_k^*)\\Delta x_k$, refine the partition. For continuous $f$ the limit exists and is independent '
          + 'of the partition and the sample points — in practice one takes a uniform partition with right endpoints. '
          + 'The result is SIGNED area: pieces above the axis count plus, below minus, so an integral can vanish '
          + 'although the region has substantial area. Read backwards, the definition is a tool: a limit of an '
          + '$n$-term sum of the form $\\frac{1}{n}\\sum f(\\frac{k}{n})$ is recognised as $\\int_0^1 f$.',
      },
      formulas: [
        { id: 'riemann-def', tex: '\\int_{a}^{b} f(x)\\,dx = \\lim_{n\\to\\infty} \\sum_{k=1}^{n} f(x_{k}^{*})\\,\\Delta x_{k}', name: { pl: 'Definicja całki przez sumy Riemanna', en: 'The Riemann-sum definition' }, note: { pl: 'Granica po podziałach o średnicy dążącej do zera. Dla $f$ ciągłej istnieje zawsze i nie zależy od wyboru punktów $x_k^*$.', en: 'Limit over partitions of mesh tending to zero; for continuous $f$ it exists and is choice-independent.' }, drill: true },
        { id: 'riemann-prawe-konce', tex: '\\int_{a}^{b} f(x)\\,dx = \\lim_{n\\to\\infty} \\frac{b-a}{n}\\sum_{k=1}^{n} f\\!\\left(a + k\\,\\tfrac{b-a}{n}\\right)', name: { pl: 'Podział równomierny, prawe końce', en: 'Uniform partition, right endpoints' }, note: { pl: 'Wersja robocza definicji: $\\Delta x = \\frac{b-a}{n}$, punkty $x_k = a + k\\Delta x$.', en: 'The working version: $\\Delta x = \\frac{b-a}{n}$, $x_k = a + k\\Delta x$.' }, drill: true },
        { id: 'sumy-potegowe', tex: '\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2},\\qquad \\sum_{k=1}^{n} k^{2} = \\frac{n(n+1)(2n+1)}{6}', name: { pl: 'Sumy potęg potrzebne w sumach Riemanna', en: 'Power sums used in Riemann sums' }, note: { pl: 'Bez nich rachunek z definicji stoi w miejscu.', en: 'Without these, definition-based computation stalls.' }, drill: true },
        { id: 'pole-ze-znakiem', tex: '\\int_{a}^{b} f(x)\\,dx = P_{+} - P_{-}', name: { pl: 'Pole ze znakiem', en: 'Signed area' }, note: { pl: '$P_+$ to pole nad osią, $P_-$ pod osią. Całka i pole to NIE to samo, gdy funkcja zmienia znak.', en: '$P_+$ above the axis, $P_-$ below. Integral and area differ once $f$ changes sign.' }, drill: true },
        { id: 'granica-sumy-riemanna', tex: '\\lim_{n\\to\\infty} \\frac{1}{n}\\sum_{k=1}^{n} f\\!\\left(\\frac{k}{n}\\right) = \\int_{0}^{1} f(x)\\,dx', name: { pl: 'Granica sumy jako całka', en: 'A limit of sums as an integral' }, note: { pl: 'Klucz do granic sum o $n$ składnikach: wyłuskać $\\frac1n$ i rozpoznać $f(\\frac{k}{n})$.', en: 'The key to $n$-term sum limits: extract $\\frac1n$ and recognise $f(\\frac{k}{n})$.' }, drill: true },
      ],
      skills: [
        { id: 'pole-znak-odczyt', title: { pl: 'Całka jako pole ze znakiem', en: 'Integral as signed area' }, levels: [3, 4] },
        { id: 'riemann-z-definicji', title: { pl: 'Całka z definicji', en: 'Integrals from the definition' }, levels: [4, 5] },
        { id: 'granice-sum-jako-calki', title: { pl: 'Granice sum jako całki', en: 'Limits of sums as integrals' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'sumy-riemanna-l3-01',
          skill: 'pole-znak-odczyt',
          level: 3,
          prompt: { pl: 'Interpretując całkę jako pole ze znakiem (bez szukania pierwotnej), oblicz $\\int_{-2}^{3} x\\,dx$.', en: 'Interpreting the integral as signed area (no antiderivative), compute $\\int_{-2}^{3} x\\,dx$.' },
          answer: '\\frac{5}{2}',
          accept: ['5/2', '2{,}5', '2.5'],
          solution: [
            { pl: 'Wykres $y=x$ wycina dwa trójkąty: pod osią na $\\langle -2,0\\rangle$ o polu $\\frac{2\\cdot2}{2}=2$, nad osią na $\\langle 0,3\\rangle$ o polu $\\frac{3\\cdot3}{2}=\\frac92$.', en: 'The line cuts two triangles: area 2 below the axis on $[-2,0]$, area $\\frac92$ above on $[0,3]$.' },
            { pl: 'Pole ze znakiem: $\\frac92 - 2 = \\frac52$.', en: 'Signed area: $\\frac92 - 2 = \\frac52$.' },
          ],
          trap: { pl: 'Dodanie obu pól ($\\frac{13}{2}$) — kawałek pod osią wchodzi z minusem.', en: 'Adding both areas ($\\frac{13}{2}$) — the piece below the axis enters with a minus.' },
        },
        {
          id: 'sumy-riemanna-l3-02',
          skill: 'pole-znak-odczyt',
          level: 3,
          prompt: { pl: 'Nie licząc pierwotnej, uzasadnij wartość $\\int_{0}^{2\\pi} \\sin x\\,dx$.', en: 'Without an antiderivative, justify the value of $\\int_{0}^{2\\pi} \\sin x\\,dx$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: 'Garb sinusa nad osią na $\\langle 0,\\pi\\rangle$ i garb pod osią na $\\langle \\pi,2\\pi\\rangle$ są przystające.', en: 'The hump above the axis on $[0,\\pi]$ and the hump below on $[\\pi,2\\pi]$ are congruent.' },
            { pl: 'Pola znoszą się ze znakiem: całka wynosi $0$.', en: 'The signed areas cancel: the integral is 0.' },
          ],
          trap: { pl: 'Pomylenie całki z polem figury — pole obu garbów to $4$, ale całka (pole ze znakiem) to $0$.', en: 'Confusing the integral with the area — the region has area 4, the integral is 0.' },
        },
        {
          id: 'sumy-riemanna-l4-01',
          skill: 'pole-znak-odczyt',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{-3}^{3} \\sqrt{9-x^{2}}\\,dx$, rozpoznając figurę, której pole opisuje ta całka.', en: 'Compute $\\int_{-3}^{3} \\sqrt{9-x^{2}}\\,dx$ by recognising the region whose area it describes.' },
          answer: '\\frac{9\\pi}{2}',
          accept: ['9pi/2', '9\\pi/2', '(9/2)pi'],
          solution: [
            { pl: 'Krzywa $y=\\sqrt{9-x^2}$ to górny półokrąg okręgu $x^2+y^2=9$ o promieniu 3.', en: '$y=\\sqrt{9-x^2}$ is the upper semicircle of radius 3.' },
            { pl: 'Całka to pole półkola: $\\frac{\\pi\\cdot 3^{2}}{2} = \\frac{9\\pi}{2}$.', en: 'The integral is the semicircle area: $\\frac{9\\pi}{2}$.' },
          ],
          trap: { pl: 'Szukanie pierwotnej na siłę — geometria daje wynik w jednej linijce, pierwotna wymaga podstawienia trygonometrycznego.', en: 'Forcing an antiderivative — geometry gives the answer in one line.' },
        },
        {
          id: 'sumy-riemanna-l4-02',
          skill: 'riemann-z-definicji',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{0}^{1} x^{2}\\,dx$ wprost z definicji, używając podziału równomiernego i prawych końców.', en: 'Compute $\\int_{0}^{1} x^{2}\\,dx$ straight from the definition, with a uniform partition and right endpoints.' },
          answer: '\\frac{1}{3}',
          accept: ['1/3'],
          solution: [
            { pl: '$\\Delta x = \\frac1n$, $x_k = \\frac{k}{n}$, więc $S_n = \\frac1n\\sum_{k=1}^{n}\\left(\\frac{k}{n}\\right)^{2} = \\frac{1}{n^{3}}\\sum_{k=1}^{n} k^{2}$.', en: '$S_n = \\frac{1}{n^3}\\sum k^2$.' },
            { pl: 'Ze wzoru: $S_n = \\frac{n(n+1)(2n+1)}{6n^{3}} = \\frac{(1+\\frac1n)(2+\\frac1n)}{6}$.', en: 'By the power-sum formula: $S_n = \\frac{(1+\\frac1n)(2+\\frac1n)}{6}$.' },
            { pl: 'Granica: $\\frac{1\\cdot 2}{6} = \\frac13$.', en: 'The limit is $\\frac{2}{6} = \\frac13$.' },
          ],
          trap: { pl: 'Zastąpienie $\\sum k^{2}$ przez $\\left(\\sum k\\right)^{2}$ — suma kwadratów to nie kwadrat sumy.', en: 'Replacing $\\sum k^2$ by $(\\sum k)^2$ — the sum of squares is not the square of the sum.' },
        },
        {
          id: 'sumy-riemanna-l5-01',
          skill: 'riemann-z-definicji',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{1}^{3} (2x+1)\\,dx$ z definicji (podział równomierny, prawe końce). Sprawdź wynik geometrycznie.', en: 'Compute $\\int_{1}^{3} (2x+1)\\,dx$ from the definition (uniform partition, right endpoints). Check the result geometrically.' },
          answer: '10',
          accept: ['10'],
          solution: [
            { pl: '$\\Delta x = \\frac2n$, $x_k = 1+\\frac{2k}{n}$, więc $f(x_k) = 2\\left(1+\\frac{2k}{n}\\right)+1 = 3+\\frac{4k}{n}$.', en: '$\\Delta x=\\frac2n$, $x_k=1+\\frac{2k}{n}$, $f(x_k)=3+\\frac{4k}{n}$.' },
            { pl: '$S_n = \\frac2n\\sum_{k=1}^{n}\\left(3+\\frac{4k}{n}\\right) = \\frac2n\\left(3n + \\frac4n\\cdot\\frac{n(n+1)}{2}\\right) = 6 + \\frac{4(n+1)}{n}$.', en: '$S_n = 6 + \\frac{4(n+1)}{n}$.' },
            { pl: '$S_n \\to 6+4 = 10$. Geometrycznie: trapez o podstawach $f(1)=3$, $f(3)=7$ i wysokości 2 ma pole $\\frac{3+7}{2}\\cdot 2 = 10$.', en: 'The limit is 10; the trapezoid with parallel sides 3 and 7 and height 2 confirms it.' },
          ],
          trap: { pl: 'Wzięcie $x_k = \\frac{2k}{n}$ — punkty podziału zaczynają się w $a=1$, nie w zerze.', en: 'Taking $x_k = \\frac{2k}{n}$ — the partition starts at $a=1$, not at 0.' },
        },
        {
          id: 'sumy-riemanna-l5-02',
          skill: 'granice-sum-jako-calki',
          level: 5,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{n}{n^{2}+k^{2}}$, rozpoznając sumę Riemanna.', en: 'Compute $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{n}{n^{2}+k^{2}}$ by recognising a Riemann sum.' },
          answer: '\\frac{\\pi}{4}',
          accept: ['pi/4', '\\pi/4'],
          solution: [
            { pl: 'Wyłuskujemy $\\frac1n$: $\\frac{n}{n^{2}+k^{2}} = \\frac1n\\cdot\\frac{1}{1+(\\frac{k}{n})^{2}}$.', en: 'Extract $\\frac1n$: each term is $\\frac1n\\cdot\\frac{1}{1+(k/n)^2}$.' },
            { pl: 'To suma Riemanna funkcji $f(x)=\\frac{1}{1+x^{2}}$ na $\\langle 0,1\\rangle$.', en: 'This is a Riemann sum of $\\frac{1}{1+x^2}$ on $[0,1]$.' },
            { pl: '$\\int_{0}^{1}\\frac{dx}{1+x^{2}} = \\operatorname{arctg} 1 - \\operatorname{arctg} 0 = \\frac{\\pi}{4}$.', en: 'The integral is $\\operatorname{arctg}1 = \\frac{\\pi}{4}$.' },
          ],
          trap: { pl: '„Każdy składnik dąży do zera, więc granica to zero” — składników jest $n$ i suma zbiega do dodatniej całki.', en: '"Each term tends to zero, so the limit is zero" — there are $n$ terms and the sum converges to a positive integral.' },
        },
        {
          id: 'sumy-riemanna-l6-01',
          skill: 'granice-sum-jako-calki',
          level: 6,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{k}{n^{2}+k^{2}}$.', en: 'Compute $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{k}{n^{2}+k^{2}}$.' },
          answer: '\\frac{1}{2}\\ln 2',
          accept: ['(1/2)ln2', 'ln2/2', '\\ln 2/2', '(ln 2)/2'],
          solution: [
            { pl: 'Dzielimy licznik i mianownik przez $n^{2}$: $\\frac{k}{n^{2}+k^{2}} = \\frac1n\\cdot\\frac{\\frac{k}{n}}{1+(\\frac{k}{n})^{2}}$.', en: 'Divide through by $n^2$: each term is $\\frac1n\\cdot\\frac{k/n}{1+(k/n)^2}$.' },
            { pl: 'To suma Riemanna $f(x)=\\frac{x}{1+x^{2}}$ na $\\langle 0,1\\rangle$, więc granica to $\\int_{0}^{1}\\frac{x}{1+x^{2}}\\,dx$.', en: 'A Riemann sum of $\\frac{x}{1+x^2}$ on $[0,1]$.' },
            { pl: 'Licznik jest połową pochodnej mianownika: $\\left[\\tfrac12\\ln(1+x^{2})\\right]_{0}^{1} = \\tfrac12\\ln 2$.', en: 'The numerator is half the derivative of the denominator: $\\frac12\\ln 2$.' },
          ],
          trap: { pl: 'Rozpoznanie złej funkcji: czynnik $k$ w liczniku daje $f(x)=\\frac{x}{1+x^2}$, nie $\\frac{1}{1+x^2}$.', en: 'Recognising the wrong function: the $k$ upstairs makes it $\\frac{x}{1+x^2}$, not $\\frac{1}{1+x^2}$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wlasnosci-calki',
      title: { pl: 'Własności całki oznaczonej', en: 'Properties of the definite integral' },
      level: 3,
      prereq: ['sumy-riemanna'],
      theory: {
        pl: 'Całka oznaczona jest liniowa i addytywna względem przedziału: $\\int_a^b = \\int_a^c + \\int_c^b$ '
          + 'dla dowolnego ułożenia $a,b,c$, przy umowie $\\int_a^b = -\\int_b^a$ i $\\int_a^a = 0$. '
          + 'Jest też monotoniczna: z $f \\le g$ na przedziale wynika $\\int f \\le \\int g$, a stąd oszacowanie '
          + '$m(b-a) \\le \\int_a^b f \\le M(b-a)$ — często pozwala ono ocenić całkę, której nie umiemy policzyć. '
          + 'Na przedziale symetrycznym $\\langle -a,a\\rangle$ parzystość redukuje robotę o połowę, '
          + 'a nieparzystość zeruje całkę bez żadnego rachunku. Funkcje z wartością bezwzględną lub sklejane '
          + 'całkuje się tnąc przedział w punktach zmiany wzoru.',
        en: 'The definite integral is linear and additive over intervals: $\\int_a^b = \\int_a^c + \\int_c^b$ for '
          + 'any arrangement of $a,b,c$, under the conventions $\\int_a^b = -\\int_b^a$ and $\\int_a^a = 0$. It is '
          + 'monotone: $f \\le g$ gives $\\int f \\le \\int g$, hence the estimate $m(b-a) \\le \\int_a^b f \\le M(b-a)$, '
          + 'which often pins down an integral we cannot evaluate. On a symmetric interval, evenness halves the '
          + 'work and oddness kills the integral outright. Absolute values and piecewise formulas are handled by '
          + 'cutting the interval where the formula changes.',
      },
      formulas: [
        { id: 'wl-liniowosc', tex: '\\int_{a}^{b} \\big(\\alpha f(x) + \\beta g(x)\\big)\\,dx = \\alpha\\int_{a}^{b} f(x)\\,dx + \\beta\\int_{a}^{b} g(x)\\,dx', name: { pl: 'Liniowość całki oznaczonej', en: 'Linearity of the definite integral' }, note: { pl: 'Stałe wychodzą przed całkę, sumy się rozdzielają. Iloczynów i ilorazów NIE wolno rozdzielać.', en: 'Constants come out, sums split. Products and quotients do NOT split.' }, drill: true },
        { id: 'wl-addytywnosc-przedzial', tex: '\\int_{a}^{b} f = \\int_{a}^{c} f + \\int_{c}^{b} f', name: { pl: 'Addytywność względem przedziału', en: 'Additivity over the interval' }, note: { pl: 'Działa przy DOWOLNYM ułożeniu $a,b,c$, jeśli przyjąć $\\int_a^b = -\\int_b^a$.', en: 'Valid for ANY arrangement of $a,b,c$ once $\\int_a^b = -\\int_b^a$ is adopted.' }, drill: true },
        { id: 'wl-zamiana-granic', tex: '\\int_{a}^{b} f = -\\int_{b}^{a} f,\\qquad \\int_{a}^{a} f = 0', name: { pl: 'Zamiana granic całkowania', en: 'Swapping the limits' }, note: { pl: 'Odwrócenie kierunku całkowania zmienia znak — to umowa, która czyni addytywność bezwarunkową.', en: 'Reversing the orientation flips the sign — the convention that makes additivity unconditional.' }, drill: true },
        { id: 'wl-monotonicznosc', tex: 'f \\le g \\ \\text{na}\\ \\langle a,b\\rangle \\ \\Rightarrow\\ \\int_{a}^{b} f \\le \\int_{a}^{b} g,\\qquad m(b-a) \\le \\int_{a}^{b} f \\le M(b-a)', name: { pl: 'Monotoniczność i oszacowanie całki', en: 'Monotonicity and the basic estimate' }, note: { pl: '$m$, $M$ to kresy $f$ na przedziale. Najprostszy sposób oceny całki bez jej liczenia.', en: '$m$, $M$ are the bounds of $f$. The simplest way to estimate an integral without computing it.' }, drill: true },
        { id: 'wl-przedzial-symetryczny', tex: '\\int_{-a}^{a} f = \\begin{cases} 2\\int_{0}^{a} f, & f \\text{ parzysta}\\\\[2pt] 0, & f \\text{ nieparzysta} \\end{cases}', name: { pl: 'Całka na przedziale symetrycznym', en: 'Integrals over symmetric intervals' }, note: { pl: 'Zero TYLKO na przedziale symetrycznym i TYLKO dla nieparzystej — oba warunki trzeba sprawdzić.', en: 'Zero ONLY on a symmetric interval and ONLY for odd $f$ — check both conditions.' }, drill: true },
      ],
      skills: [
        { id: 'wl-rachunek', title: { pl: 'Rachunek na własnościach', en: 'Computing with the properties' }, levels: [2, 3, 4] },
        { id: 'wl-symetria', title: { pl: 'Parzystość i nieparzystość', en: 'Even and odd symmetry' }, levels: [3, 4] },
        { id: 'wl-oszacowania', title: { pl: 'Szacowanie całek', en: 'Estimating integrals' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'wlasnosci-calki-l2-01',
          skill: 'wl-rachunek',
          level: 2,
          prompt: { pl: 'Wiadomo, że $\\int_{0}^{5} f(x)\\,dx = 12$ oraz $\\int_{0}^{2} f(x)\\,dx = 3$. Oblicz $\\int_{2}^{5} f(x)\\,dx$.', en: 'Given $\\int_{0}^{5} f = 12$ and $\\int_{0}^{2} f = 3$, compute $\\int_{2}^{5} f$.' },
          answer: '9',
          accept: ['9'],
          solution: [
            { pl: 'Addytywność: $\\int_{0}^{5} = \\int_{0}^{2} + \\int_{2}^{5}$.', en: 'Additivity: $\\int_0^5 = \\int_0^2 + \\int_2^5$.' },
            { pl: 'Stąd $\\int_{2}^{5} f = 12 - 3 = 9$.', en: 'So $\\int_2^5 f = 12-3 = 9$.' },
          ],
          trap: { pl: 'Dodanie zamiast odjęcia — szukany kawałek to całość minus znany fragment.', en: 'Adding instead of subtracting — the piece sought is the whole minus the known part.' },
        },
        {
          id: 'wlasnosci-calki-l3-01',
          skill: 'wl-rachunek',
          level: 3,
          prompt: { pl: 'Wiadomo, że $\\int_{1}^{4} f(x)\\,dx = 6$ i $\\int_{1}^{4} g(x)\\,dx = -2$. Oblicz $\\int_{4}^{1}\\big(2f(x) - 3g(x)\\big)\\,dx$.', en: 'Given $\\int_{1}^{4} f = 6$ and $\\int_{1}^{4} g = -2$, compute $\\int_{4}^{1}(2f - 3g)$.' },
          answer: '-18',
          accept: ['-18'],
          solution: [
            { pl: 'Liniowość: $\\int_{1}^{4}(2f-3g) = 2\\cdot 6 - 3\\cdot(-2) = 18$.', en: 'Linearity: $2\\cdot6 - 3\\cdot(-2) = 18$.' },
            { pl: 'Granice są odwrócone, więc znak się zmienia: $\\int_{4}^{1} = -18$.', en: 'The limits are reversed, so the sign flips: $-18$.' },
          ],
          trap: { pl: 'Przeoczenie odwróconych granic ($4$ na dole… nie: na górze stoi $1$) — bez zmiany znaku wychodzi $18$.', en: 'Missing the reversed limits — without the sign flip the answer comes out $18$.' },
        },
        {
          id: 'wlasnosci-calki-l3-02',
          skill: 'wl-symetria',
          level: 3,
          prompt: { pl: 'Oblicz $\\int_{-2}^{2}\\left(x^{5} - 3x^{3} + 7x\\right)dx$.', en: 'Compute $\\int_{-2}^{2}\\left(x^{5} - 3x^{3} + 7x\\right)dx$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: 'Każdy składnik ma wykładnik nieparzysty, więc cała funkcja jest nieparzysta.', en: 'Every term has an odd exponent, so the function is odd.' },
            { pl: 'Przedział $\\langle -2,2\\rangle$ jest symetryczny, więc całka wynosi $0$ bez rachunku.', en: 'The interval is symmetric, so the integral is 0 with no computation.' },
          ],
          trap: { pl: 'Liczenie pierwotnej wyraz po wyrazie — dozwolone, ale symetria daje zero natychmiast i bez okazji do błędu rachunkowego.', en: 'Term-by-term antidifferentiation — legal, but symmetry gives zero instantly with no room for arithmetic slips.' },
        },
        {
          id: 'wlasnosci-calki-l4-01',
          skill: 'wl-symetria',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{-1}^{1}\\left(x^{4} + x^{3}\\right)dx$, wykorzystując parzystość i nieparzystość składników.', en: 'Compute $\\int_{-1}^{1}\\left(x^{4} + x^{3}\\right)dx$ using the parity of each term.' },
          answer: '\\frac{2}{5}',
          accept: ['2/5', '0{,}4', '0.4'],
          solution: [
            { pl: 'Rozdzielamy: $\\int_{-1}^{1} x^{4}\\,dx + \\int_{-1}^{1} x^{3}\\,dx$. Druga całka znika ($x^3$ nieparzysta).', en: 'Split; the $x^3$ integral vanishes by oddness.' },
            { pl: 'Pierwsza z parzystości: $2\\int_{0}^{1} x^{4}\\,dx = 2\\cdot\\frac15 = \\frac25$.', en: 'By evenness: $2\\int_0^1 x^4 = \\frac25$.' },
          ],
          trap: { pl: 'Uznanie CAŁEJ funkcji za nieparzystą i odpowiedź $0$ — suma składnika parzystego i nieparzystego nie ma żadnej parzystości.', en: 'Declaring the WHOLE function odd and answering 0 — an even-plus-odd sum has no parity at all.' },
        },
        {
          id: 'wlasnosci-calki-l4-02',
          skill: 'wl-symetria',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{-\\pi}^{\\pi} x^{2}\\sin x\\,dx$.', en: 'Compute $\\int_{-\\pi}^{\\pi} x^{2}\\sin x\\,dx$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: '$x^{2}$ jest parzysta, $\\sin x$ nieparzysta, więc iloczyn jest nieparzysty.', en: '$x^2$ is even, $\\sin x$ odd, so the product is odd.' },
            { pl: 'Przedział $\\langle -\\pi,\\pi\\rangle$ jest symetryczny: całka wynosi $0$.', en: 'Symmetric interval: the integral is 0.' },
          ],
          trap: { pl: 'Rzucenie się na dwukrotne całkowanie przez części — parzystość rozstrzyga zadanie w dwóch linijkach.', en: 'Launching into double integration by parts — parity settles it in two lines.' },
        },
        {
          id: 'wlasnosci-calki-l4-03',
          skill: 'wl-rachunek',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{0}^{3} |x-1|\\,dx$.', en: 'Compute $\\int_{0}^{3} |x-1|\\,dx$.' },
          answer: '\\frac{5}{2}',
          accept: ['5/2', '2{,}5', '2.5'],
          solution: [
            { pl: 'Wartość bezwzględna zmienia wzór w $x=1$: tniemy przedział na $\\langle 0,1\\rangle$ i $\\langle 1,3\\rangle$.', en: 'The absolute value changes formula at $x=1$: split there.' },
            { pl: '$\\int_{0}^{1}(1-x)\\,dx = \\left[x-\\tfrac{x^{2}}{2}\\right]_{0}^{1} = \\tfrac12$ oraz $\\int_{1}^{3}(x-1)\\,dx = \\left[\\tfrac{x^{2}}{2}-x\\right]_{1}^{3} = \\tfrac32+\\tfrac12 = 2$.', en: '$\\int_0^1(1-x)=\\frac12$ and $\\int_1^3(x-1)=2$.' },
            { pl: 'Razem $\\tfrac12 + 2 = \\tfrac52$.', en: 'Total $\\frac52$.' },
          ],
          trap: { pl: 'Zignorowanie modułu i policzenie $\\int_{0}^{3}(x-1)\\,dx = \\frac32$ — pod osią funkcja podpisana jest wzorem $1-x$.', en: 'Dropping the absolute value and computing $\\int_0^3(x-1)=\\frac32$ — below the kink the formula is $1-x$.' },
        },
        {
          id: 'wlasnosci-calki-l5-01',
          skill: 'wl-oszacowania',
          level: 5,
          prompt: { pl: 'Nie obliczając całki, uzasadnij oszacowanie $2e^{-4} \\le \\int_{0}^{2} e^{-x^{2}}\\,dx \\le 2$.', en: 'Without evaluating the integral, justify the estimate $2e^{-4} \\le \\int_{0}^{2} e^{-x^{2}}\\,dx \\le 2$.' },
          answer: '2e^{-4} \\le \\int_{0}^{2} e^{-x^{2}}dx \\le 2',
          accept: ['2e^{-4} <= I <= 2', 'oszacowanie z monotoniczności', 'monotonicity estimate'],
          solution: [
            { pl: 'Na $\\langle 0,2\\rangle$ mamy $0 \\le x^{2} \\le 4$, więc $e^{-4} \\le e^{-x^{2}} \\le e^{0} = 1$.', en: 'On $[0,2]$: $0\\le x^2\\le4$, so $e^{-4}\\le e^{-x^2}\\le 1$.' },
            { pl: 'Monotoniczność całki: $e^{-4}\\cdot(2-0) \\le \\int_{0}^{2} e^{-x^{2}}dx \\le 1\\cdot(2-0)$.', en: 'Monotonicity: $2e^{-4} \\le \\int \\le 2$.' },
            { pl: 'To całe uzasadnienie — pierwotna $e^{-x^{2}}$ nie wyraża się funkcjami elementarnymi, więc oszacowanie jest jedyną dostępną bronią.', en: 'That is the whole argument — $e^{-x^2}$ has no elementary antiderivative, so the estimate is the only available weapon.' },
          ],
          trap: { pl: 'Szukanie pierwotnej $e^{-x^{2}}$ — ona nie istnieje wśród funkcji elementarnych; zadanie sprawdza, czy o tym wiesz.', en: 'Hunting for an antiderivative of $e^{-x^2}$ — it is not elementary; the problem tests whether you know that.' },
        },
        {
          id: 'wlasnosci-calki-l6-01',
          skill: 'wl-oszacowania',
          level: 6,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\int_{0}^{1}\\frac{x^{n}}{1+x}\\,dx$.', en: 'Compute $\\lim_{n\\to\\infty}\\int_{0}^{1}\\frac{x^{n}}{1+x}\\,dx$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: 'Na $\\langle 0,1\\rangle$ mianownik spełnia $1+x \\ge 1$, więc $0 \\le \\frac{x^{n}}{1+x} \\le x^{n}$.', en: 'On $[0,1]$: $0 \\le \\frac{x^n}{1+x} \\le x^n$.' },
            { pl: 'Monotoniczność: $0 \\le \\int_{0}^{1}\\frac{x^{n}}{1+x}\\,dx \\le \\int_{0}^{1} x^{n}\\,dx = \\frac{1}{n+1}$.', en: 'Monotonicity: the integral sits between 0 and $\\frac{1}{n+1}$.' },
            { pl: '$\\frac{1}{n+1}\\to 0$, więc z twierdzenia o trzech ciągach granica wynosi $0$.', en: 'By the squeeze theorem the limit is 0.' },
          ],
          trap: { pl: 'Próba dokładnego policzenia całki dla ogólnego $n$ — oszacowanie $1+x\\ge 1$ i trzy ciągi załatwiają wszystko.', en: 'Trying to evaluate the integral exactly for general $n$ — the bound $1+x\\ge1$ plus the squeeze does everything.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wartosc-srednia-calki',
      title: { pl: 'Wartość średnia i twierdzenie o wartości średniej', en: 'Average value and the mean value theorem' },
      level: 4,
      prereq: ['wlasnosci-calki', 'calka-oznaczona-podstawy'],
      theory: {
        pl: 'Wartość średnia funkcji na przedziale to $f_{\\text{śr}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ — '
          + 'naturalne uogólnienie średniej arytmetycznej na kontinuum wartości. Geometrycznie: prostokąt '
          + 'o podstawie $b-a$ i wysokości $f_{\\text{śr}}$ ma to samo pole ze znakiem co obszar pod wykresem. '
          + 'Twierdzenie o wartości średniej dla całki mówi, że funkcja ciągła swoją średnią faktycznie osiąga: '
          + 'istnieje $c\\in\\langle a,b\\rangle$ z $f(c)(b-a) = \\int_a^b f$. Dowód to jedna linijka: '
          + '$m \\le f_{\\text{śr}} \\le M$ z oszacowania całki, a własność Darboux daje punkt pośredni. '
          + 'W fizyce to dokładnie średnia prędkość: $\\frac{1}{T}\\int_0^T v(t)\\,dt$ to przebyta droga przez czas.',
        en: 'The average value of a function is $f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ — the '
          + 'continuum version of the arithmetic mean. Geometrically, the rectangle of base $b-a$ and height '
          + '$f_{\\text{avg}}$ has the same signed area as the region under the graph. The mean value theorem for '
          + 'integrals says a continuous function actually attains its average: some $c\\in[a,b]$ satisfies '
          + '$f(c)(b-a) = \\int_a^b f$. The proof is one line: $m \\le f_{\\text{avg}} \\le M$ from the basic '
          + 'estimate, then the intermediate value property. In physics this is exactly average velocity: '
          + '$\\frac{1}{T}\\int_0^T v(t)\\,dt$ is distance over time.',
      },
      formulas: [
        { id: 'wartosc-srednia-def', tex: 'f_{\\text{śr}} = \\frac{1}{b-a}\\int_{a}^{b} f(x)\\,dx', name: { pl: 'Wartość średnia funkcji na przedziale', en: 'Average value on an interval' }, note: { pl: 'Czynnik $\\frac{1}{b-a}$ jest obowiązkowy — sama całka to nie średnia.', en: 'The $\\frac{1}{b-a}$ is mandatory — the bare integral is not an average.' }, drill: true },
        { id: 'tw-wartosc-srednia-calka', tex: 'f \\in C\\langle a,b\\rangle \\ \\Rightarrow\\ \\exists\\, c\\in\\langle a,b\\rangle:\\ \\int_{a}^{b} f(x)\\,dx = f(c)\\,(b-a)', name: { pl: 'Twierdzenie o wartości średniej dla całki', en: 'Mean value theorem for integrals' }, note: { pl: 'Wymaga ciągłości — funkcja skokowa może nigdy nie przyjąć swojej średniej.', en: 'Continuity is required — a step function may never attain its average.' }, drill: true },
      ],
      skills: [
        { id: 'ws-obliczanie', title: { pl: 'Obliczanie wartości średniej', en: 'Computing average values' }, levels: [3, 4, 5] },
        { id: 'ws-punkt-c', title: { pl: 'Znajdowanie punktu $c$', en: 'Finding the point $c$' }, levels: [4, 5] },
        { id: 'ws-teoria', title: { pl: 'Zastosowania teoretyczne', en: 'Theoretical applications' }, levels: [6] },
      ],
      problems: [
        {
          id: 'wartosc-srednia-calki-l3-01',
          skill: 'ws-obliczanie',
          level: 3,
          prompt: { pl: 'Oblicz wartość średnią funkcji $f(x)=x^{2}$ na przedziale $\\langle 0,3\\rangle$.', en: 'Find the average value of $f(x)=x^{2}$ on $[0,3]$.' },
          answer: '3',
          accept: ['3'],
          solution: [
            { pl: '$f_{\\text{śr}} = \\frac{1}{3-0}\\int_{0}^{3} x^{2}\\,dx = \\frac13\\left[\\frac{x^{3}}{3}\\right]_{0}^{3} = \\frac13\\cdot 9$.', en: '$f_{\\text{avg}} = \\frac13\\int_0^3 x^2\\,dx = \\frac13\\cdot9$.' },
            { pl: 'Wartość średnia wynosi $3$.', en: 'The average is 3.' },
          ],
          trap: { pl: 'Podanie samej całki ($9$) — bez podzielenia przez długość przedziału to nie jest średnia.', en: 'Reporting the bare integral (9) — without dividing by the interval length it is not an average.' },
        },
        {
          id: 'wartosc-srednia-calki-l4-01',
          skill: 'ws-obliczanie',
          level: 4,
          prompt: { pl: 'Oblicz wartość średnią funkcji $f(x)=\\sin x$ na przedziale $\\langle 0,\\pi\\rangle$.', en: 'Find the average value of $\\sin x$ on $[0,\\pi]$.' },
          answer: '\\frac{2}{\\pi}',
          accept: ['2/pi', '2/\\pi'],
          solution: [
            { pl: '$\\int_{0}^{\\pi}\\sin x\\,dx = \\left[-\\cos x\\right]_{0}^{\\pi} = 1-(-1) = 2$.', en: '$\\int_0^\\pi \\sin x\\,dx = 2$.' },
            { pl: '$f_{\\text{śr}} = \\frac{2}{\\pi} \\approx 0{,}64$.', en: '$f_{\\text{avg}} = \\frac{2}{\\pi} \\approx 0.64$.' },
          ],
          trap: { pl: 'Zgadywanie $\\frac12$ „bo sinus rośnie od 0 do 1 i wraca” — średnia całkowa to nie średnia wartości skrajnych.', en: 'Guessing $\\frac12$ "because sine goes 0 to 1 and back" — the integral mean is not the mean of the extremes.' },
        },
        {
          id: 'wartosc-srednia-calki-l4-02',
          skill: 'ws-punkt-c',
          level: 4,
          prompt: { pl: 'Znajdź punkt $c\\in\\langle 0,3\\rangle$, którego istnienie dla $f(x)=x^{2}$ gwarantuje twierdzenie o wartości średniej dla całki.', en: 'Find the point $c\\in[0,3]$ guaranteed for $f(x)=x^{2}$ by the mean value theorem for integrals.' },
          answer: 'c=\\sqrt{3}',
          accept: ['sqrt(3)', '\\sqrt{3}', 'pierwiastek z 3'],
          solution: [
            { pl: 'Średnia $f$ na $\\langle 0,3\\rangle$ to $3$ (poprzednie zadanie), więc szukamy $c$ z $f(c)=3$.', en: 'The average is 3, so we need $f(c)=3$.' },
            { pl: '$c^{2}=3$ daje $c=\\pm\\sqrt{3}$; w przedziale leży tylko $c=\\sqrt{3}$.', en: '$c^2=3$ gives $c=\\pm\\sqrt3$; only $\\sqrt3$ lies in the interval.' },
          ],
          trap: { pl: 'Zostawienie obu pierwiastków — $-\\sqrt{3}$ leży poza przedziałem i nie jest odpowiedzią.', en: 'Keeping both roots — $-\\sqrt3$ is outside the interval and is not an answer.' },
        },
        {
          id: 'wartosc-srednia-calki-l4-03',
          skill: 'ws-obliczanie',
          level: 4,
          prompt: { pl: 'Prędkość punktu w chwili $t$ wynosi $v(t)=6t-t^{2}$ (m/s) dla $t\\in\\langle 0,6\\rangle$. Oblicz średnią prędkość na tym odcinku czasu.', en: 'A particle moves with velocity $v(t)=6t-t^{2}$ m/s for $t\\in[0,6]$. Find the average velocity.' },
          answer: '6',
          accept: ['6', '6 m/s'],
          solution: [
            { pl: 'Droga: $\\int_{0}^{6}(6t-t^{2})\\,dt = \\left[3t^{2}-\\frac{t^{3}}{3}\\right]_{0}^{6} = 108-72 = 36$.', en: 'Distance: $\\int_0^6(6t-t^2)dt = 108-72 = 36$.' },
            { pl: 'Średnia prędkość: $\\frac{36}{6} = 6$ m/s.', en: 'Average velocity: $\\frac{36}{6} = 6$ m/s.' },
          ],
          trap: { pl: 'Uśrednienie $v(0)=0$ i $v(6)=0$ do zera — punkt cały czas jechał do przodu; średnia całkowa widzi całą historię ruchu, nie końcówki.', en: 'Averaging $v(0)=0$ and $v(6)=0$ to zero — the particle moved forward throughout; the integral mean sees the whole history, not the endpoints.' },
        },
        {
          id: 'wartosc-srednia-calki-l5-01',
          skill: 'ws-punkt-c',
          level: 5,
          prompt: { pl: 'Dla $f(x)=\\frac{1}{x}$ na przedziale $\\langle 1,e\\rangle$ znajdź punkt $c$ z twierdzenia o wartości średniej dla całki.', en: 'For $f(x)=\\frac{1}{x}$ on $[1,e]$, find the point $c$ from the mean value theorem for integrals.' },
          answer: 'c=e-1',
          accept: ['e-1'],
          solution: [
            { pl: '$\\int_{1}^{e}\\frac{dx}{x} = \\left[\\ln x\\right]_{1}^{e} = 1$, więc $f_{\\text{śr}} = \\frac{1}{e-1}$.', en: '$\\int_1^e \\frac{dx}{x} = 1$, so the average is $\\frac{1}{e-1}$.' },
            { pl: 'Warunek $f(c)=\\frac{1}{c} = \\frac{1}{e-1}$ daje $c = e-1$.', en: '$\\frac1c = \\frac{1}{e-1}$ gives $c = e-1$.' },
            { pl: 'Kontrola: $e-1 \\approx 1{,}72 \\in \\langle 1,e\\rangle$.', en: 'Check: $e-1 \\approx 1.72 \\in [1,e]$.' },
          ],
          trap: { pl: 'Pominięcie kontroli, czy $c$ leży w przedziale — tu leży, ale ten krok jest częścią rozwiązania, nie ozdobą.', en: 'Skipping the check that $c$ lies in the interval — it does here, but the check is part of the solution, not decoration.' },
        },
        {
          id: 'wartosc-srednia-calki-l5-02',
          skill: 'ws-obliczanie',
          level: 5,
          prompt: { pl: 'Oblicz wartość średnią funkcji $f(x)=\\cos^{2}x$ na przedziale $\\langle 0,\\pi\\rangle$.', en: 'Find the average value of $\\cos^{2}x$ on $[0,\\pi]$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5', '0.5'],
          solution: [
            { pl: 'Obniżamy potęgę: $\\cos^{2}x = \\frac{1+\\cos 2x}{2}$.', en: 'Power reduction: $\\cos^2x = \\frac{1+\\cos2x}{2}$.' },
            { pl: '$\\int_{0}^{\\pi}\\cos^{2}x\\,dx = \\left[\\frac{x}{2}+\\frac{\\sin 2x}{4}\\right]_{0}^{\\pi} = \\frac{\\pi}{2}$.', en: '$\\int_0^\\pi \\cos^2x\\,dx = \\frac{\\pi}{2}$.' },
            { pl: 'Średnia: $\\frac{1}{\\pi}\\cdot\\frac{\\pi}{2} = \\frac12$ — zgodnie z intuicją, bo $\\cos^{2}$ i $\\sin^{2}$ dzielą się jedynką po równo.', en: 'Average: $\\frac12$ — as expected, since $\\cos^2$ and $\\sin^2$ split 1 evenly.' },
          ],
          trap: { pl: 'Całkowanie $\\cos^{2}x$ jako $\\frac{\\cos^{3}x}{3}$ — wzór potęgowy działa dla $x^{n}$, nie dla $\\cos^{n}x$.', en: 'Integrating $\\cos^2x$ as $\\frac{\\cos^3x}{3}$ — the power rule is for $x^n$, not $\\cos^n x$.' },
        },
        {
          id: 'wartosc-srednia-calki-l6-01',
          skill: 'ws-teoria',
          level: 6,
          prompt: { pl: 'Funkcja $f$ jest ciągła na $\\langle 0,1\\rangle$ i $\\int_{0}^{1} f(x)\\,dx = 0$. Wykaż, że $f$ ma w $\\langle 0,1\\rangle$ miejsce zerowe.', en: '$f$ is continuous on $[0,1]$ with $\\int_{0}^{1} f(x)\\,dx = 0$. Show $f$ has a zero in $[0,1]$.' },
          answer: '\\text{Z tw. o wartości średniej: } f(c) = \\tfrac{1}{1-0}\\int_{0}^{1} f = 0',
          accept: ['f(c)=0', 'twierdzenie o wartości średniej', 'mean value theorem'],
          solution: [
            { pl: '$f$ jest ciągła, więc stosuje się twierdzenie o wartości średniej dla całki.', en: '$f$ is continuous, so the mean value theorem for integrals applies.' },
            { pl: 'Istnieje $c\\in\\langle 0,1\\rangle$ z $f(c)\\cdot(1-0) = \\int_{0}^{1} f = 0$.', en: 'Some $c$ satisfies $f(c)\\cdot 1 = \\int_0^1 f = 0$.' },
            { pl: 'Zatem $f(c)=0$ — punkt $c$ jest szukanym miejscem zerowym.', en: 'Hence $f(c)=0$.' },
          ],
          trap: { pl: 'Dowodzenie przez Darboux ze zmianą znaku — $f$ wcale nie musi zmieniać znaku w sposób, który łatwo wskazać; twierdzenie o wartości średniej daje zero jednym ruchem.', en: 'Arguing via a sign change and the IVT — the mean value theorem yields the zero in one move, no sign analysis needed.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'podstawienie-oznaczone',
      title: { pl: 'Podstawienie ze zmianą granic', en: 'Substitution with new limits' },
      level: 4,
      prereq: ['calkowanie-podstawienie', 'wlasnosci-calki', 'calka-oznaczona-podstawy'],
      theory: {
        pl: 'W całce oznaczonej podstawienie $u=g(x)$ zmienia RÓWNIEŻ granice: dolna staje się $g(a)$, górna '
          + '$g(b)$, i do zmiennej $x$ już się nie wraca — $\\int_a^b f(g(x))\\,g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$. '
          + 'To oszczędza cały krok powrotu do $x$ i eliminuje najczęstszy błąd: wstawienie starych granic do '
          + 'nowej zmiennej. Nowe granice mogą wyjść „odwrócone” ($g(a)>g(b)$) — wtedy zostawiamy je tak, jak '
          + 'wyszły, albo odwracamy ze zmianą znaku. Podstawienie musi być określone i różniczkowalne na całym '
          + 'przedziale; przy pierwiastkach pamiętamy, że $\\sqrt{u^{2}} = |u|$, co na przedziałach ze zmianą '
          + 'znaku wymusza rozcięcie całki.',
        en: 'In a definite integral the substitution $u=g(x)$ changes the LIMITS too: they become $g(a)$ and '
          + '$g(b)$, and one never returns to $x$ — $\\int_a^b f(g(x))\\,g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du$. '
          + 'This saves the back-substitution step and kills the classic error of plugging old limits into the new '
          + 'variable. The new limits may come out "reversed" ($g(a)>g(b)$): leave them as they are, or swap them '
          + 'with a sign change. The substitution must be defined and differentiable on the whole interval; with '
          + 'roots remember $\\sqrt{u^{2}} = |u|$, which forces splitting the integral wherever the sign changes.',
      },
      formulas: [
        { id: 'podstawienie-oznaczone-wzor', tex: '\\int_{a}^{b} f\\big(g(x)\\big)\\,g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du', name: { pl: 'Podstawienie w całce oznaczonej', en: 'Substitution in a definite integral' }, note: { pl: 'Granice wędrują przez $g$: dolna do $g(a)$, górna do $g(b)$. Powrót do $x$ jest zbędny.', en: 'The limits travel through $g$. No back-substitution.' }, drill: true },
        { id: 'pierwiastek-kwadratu-modul', tex: '\\sqrt{u^{2}} = |u|', name: { pl: 'Pierwiastek z kwadratu', en: 'The root of a square' }, note: { pl: 'Nie $u$! Na przedziale, gdzie $u<0$, zapomnienie modułu odwraca znak całki.', en: 'Not $u$! Where $u<0$, dropping the modulus flips the sign.' }, drill: true },
        { id: 'calka-sin2-cos2', tex: '\\int_{0}^{\\pi/2}\\sin^{2}x\\,dx = \\int_{0}^{\\pi/2}\\cos^{2}x\\,dx = \\frac{\\pi}{4}', name: { pl: 'Całki z $\\sin^2$ i $\\cos^2$ na ćwiartce', en: '$\\sin^2$ and $\\cos^2$ over a quarter period' }, note: { pl: 'Z obniżenia potęgi albo z symetrii: obie razem dają $\\frac{\\pi}{2}$, a są równe.', en: 'By power reduction or symmetry: together they make $\\frac{\\pi}{2}$ and they are equal.' }, drill: true },
      ],
      skills: [
        { id: 'po-standard', title: { pl: 'Podstawienie standardowe', en: 'Routine substitution' }, levels: [3, 4] },
        { id: 'po-zaawansowane', title: { pl: 'Podstawienia trygonometryczne i z pierwiastkiem', en: 'Trig and root substitutions' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'podstawienie-oznaczone-l3-01',
          skill: 'po-standard',
          level: 3,
          prompt: { pl: 'Oblicz $\\int_{0}^{2} x\\,e^{x^{2}}\\,dx$.', en: 'Compute $\\int_{0}^{2} x\\,e^{x^{2}}\\,dx$.' },
          answer: '\\frac{e^{4}-1}{2}',
          accept: ['(e^4-1)/2', '\\frac{1}{2}(e^4-1)'],
          solution: [
            { pl: 'Podstawiamy $u = x^{2}$, $du = 2x\\,dx$; granice: $x=0\\mapsto u=0$, $x=2\\mapsto u=4$.', en: '$u=x^2$, $du=2x\\,dx$; limits $0\\mapsto0$, $2\\mapsto4$.' },
            { pl: '$\\int_{0}^{2} x e^{x^{2}}dx = \\frac12\\int_{0}^{4} e^{u}\\,du = \\frac12\\left(e^{4}-1\\right)$.', en: '$\\frac12\\int_0^4 e^u\\,du = \\frac{e^4-1}{2}$.' },
          ],
          trap: { pl: 'Wstawienie starych granic $0$ i $2$ do zmiennej $u$ — po podstawieniu granice to wartości $u$, czyli $0$ i $4$.', en: 'Plugging the old limits 0 and 2 into $u$ — after substituting, the limits are $u$-values: 0 and 4.' },
        },
        {
          id: 'podstawienie-oznaczone-l4-01',
          skill: 'po-standard',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{1}^{e}\\frac{\\ln x}{x}\\,dx$.', en: 'Compute $\\int_{1}^{e}\\frac{\\ln x}{x}\\,dx$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5', '0.5'],
          solution: [
            { pl: '$u = \\ln x$, $du = \\frac{dx}{x}$; granice: $x=1\\mapsto u=0$, $x=e\\mapsto u=1$.', en: '$u=\\ln x$; limits $1\\mapsto0$, $e\\mapsto1$.' },
            { pl: '$\\int_{0}^{1} u\\,du = \\frac12$.', en: '$\\int_0^1 u\\,du = \\frac12$.' },
          ],
          trap: { pl: 'Pozostawienie granic $1$ i $e$ przy całce po $u$ — dałoby $\\frac{e^{2}-1}{2}$, wynik z sufitu.', en: 'Keeping the limits 1 and $e$ on the $u$-integral — that would give $\\frac{e^2-1}{2}$, nonsense.' },
        },
        {
          id: 'podstawienie-oznaczone-l4-02',
          skill: 'po-standard',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\pi/2}\\sin^{2}x\\,\\cos x\\,dx$.', en: 'Compute $\\int_{0}^{\\pi/2}\\sin^{2}x\\,\\cos x\\,dx$.' },
          answer: '\\frac{1}{3}',
          accept: ['1/3'],
          solution: [
            { pl: '$u = \\sin x$, $du = \\cos x\\,dx$; granice: $0\\mapsto 0$, $\\frac{\\pi}{2}\\mapsto 1$.', en: '$u=\\sin x$; limits $0\\mapsto0$, $\\frac{\\pi}{2}\\mapsto1$.' },
            { pl: '$\\int_{0}^{1} u^{2}\\,du = \\frac13$.', en: '$\\int_0^1 u^2\\,du = \\frac13$.' },
          ],
          trap: { pl: 'Granica górna to $u=\\sin\\frac{\\pi}{2}=1$, nie $\\frac{\\pi}{2}$ — nowa zmienna ma własną skalę.', en: 'The upper limit is $u=\\sin\\frac{\\pi}{2}=1$, not $\\frac{\\pi}{2}$ — the new variable has its own scale.' },
        },
        {
          id: 'podstawienie-oznaczone-l4-03',
          skill: 'po-standard',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\pi/2}\\frac{\\cos x}{1+\\sin^{2}x}\\,dx$.', en: 'Compute $\\int_{0}^{\\pi/2}\\frac{\\cos x}{1+\\sin^{2}x}\\,dx$.' },
          answer: '\\frac{\\pi}{4}',
          accept: ['pi/4', '\\pi/4'],
          solution: [
            { pl: '$u = \\sin x$, $du = \\cos x\\,dx$; granice: $0\\mapsto 0$, $\\frac{\\pi}{2}\\mapsto 1$.', en: '$u=\\sin x$; limits $0\\mapsto0$, $\\frac{\\pi}{2}\\mapsto1$.' },
            { pl: '$\\int_{0}^{1}\\frac{du}{1+u^{2}} = \\left[\\operatorname{arctg} u\\right]_{0}^{1} = \\frac{\\pi}{4}$.', en: '$\\int_0^1\\frac{du}{1+u^2} = \\operatorname{arctg}1 = \\frac{\\pi}{4}$.' },
          ],
          trap: { pl: 'Wzięcie $u=\\cos x$ — wtedy $du=-\\sin x\\,dx$, którego w liczniku nie ma; podstawia się to, czego pochodna stoi obok.', en: 'Trying $u=\\cos x$ — its differential $-\\sin x\\,dx$ is not in the numerator; substitute the thing whose derivative is present.' },
        },
        {
          id: 'podstawienie-oznaczone-l5-01',
          skill: 'po-zaawansowane',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{4}\\frac{dx}{1+\\sqrt{x}}$, podstawiając $u=\\sqrt{x}$.', en: 'Compute $\\int_{0}^{4}\\frac{dx}{1+\\sqrt{x}}$ with $u=\\sqrt{x}$.' },
          answer: '4-2\\ln 3',
          accept: ['4-2ln3', '4-2\\ln3', '4 - 2 ln 3'],
          solution: [
            { pl: '$u=\\sqrt{x}$, czyli $x=u^{2}$, $dx = 2u\\,du$; granice: $0\\mapsto 0$, $4\\mapsto 2$.', en: '$x=u^2$, $dx=2u\\,du$; limits $0\\mapsto0$, $4\\mapsto2$.' },
            { pl: '$\\int_{0}^{2}\\frac{2u}{1+u}\\,du = 2\\int_{0}^{2}\\left(1 - \\frac{1}{1+u}\\right)du$ — dzielimy licznik przez mianownik.', en: '$\\frac{2u}{1+u} = 2\\left(1-\\frac{1}{1+u}\\right)$ by polynomial division.' },
            { pl: '$= 2\\Big[u - \\ln(1+u)\\Big]_{0}^{2} = 2(2-\\ln 3) = 4 - 2\\ln 3$.', en: '$2[u-\\ln(1+u)]_0^2 = 4-2\\ln3$.' },
          ],
          trap: { pl: 'Zgubienie czynnika $2u$ z $dx=2u\\,du$ — bez niego wychodzi $\\ln 3$ i cała struktura wyniku znika.', en: 'Losing the $2u$ from $dx=2u\\,du$ — without it the answer degenerates to $\\ln3$.' },
        },
        {
          id: 'podstawienie-oznaczone-l5-02',
          skill: 'po-zaawansowane',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{1}\\sqrt{1-x^{2}}\\,dx$, podstawiając $x=\\sin t$. Porównaj wynik z interpretacją geometryczną.', en: 'Compute $\\int_{0}^{1}\\sqrt{1-x^{2}}\\,dx$ via $x=\\sin t$. Compare with the geometric meaning.' },
          answer: '\\frac{\\pi}{4}',
          accept: ['pi/4', '\\pi/4'],
          solution: [
            { pl: '$x=\\sin t$, $dx=\\cos t\\,dt$; granice: $x=0\\mapsto t=0$, $x=1\\mapsto t=\\frac{\\pi}{2}$.', en: '$x=\\sin t$; limits $0\\mapsto0$, $1\\mapsto\\frac{\\pi}{2}$.' },
            { pl: 'Na $\\langle 0,\\frac{\\pi}{2}\\rangle$ mamy $\\cos t\\ge 0$, więc $\\sqrt{1-\\sin^{2}t} = \\cos t$ i całka to $\\int_{0}^{\\pi/2}\\cos^{2}t\\,dt = \\frac{\\pi}{4}$.', en: 'There $\\cos t\\ge0$, so the integrand is $\\cos^2t$; the integral is $\\frac{\\pi}{4}$.' },
            { pl: 'Zgadza się z geometrią: to ćwiartka koła jednostkowego o polu $\\frac{\\pi}{4}$.', en: 'Consistent with geometry: a quarter of the unit disc.' },
          ],
          trap: { pl: 'Granice po podstawieniu to wartości $t$ ($0$ i $\\frac{\\pi}{2}$), nie stare $0$ i $1$ — wstawienie $t=1$ psuje wynik bezpowrotnie.', en: 'The new limits are $t$-values ($0$ and $\\frac{\\pi}{2}$), not the old $0$ and $1$.' },
        },
        {
          id: 'podstawienie-oznaczone-l5-03',
          skill: 'po-zaawansowane',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\pi}\\sin^{3}x\\,dx$.', en: 'Compute $\\int_{0}^{\\pi}\\sin^{3}x\\,dx$.' },
          answer: '\\frac{4}{3}',
          accept: ['4/3'],
          solution: [
            { pl: 'Rozbijamy: $\\sin^{3}x = \\sin x\\,(1-\\cos^{2}x)$ i podstawiamy $u=\\cos x$, $du=-\\sin x\\,dx$.', en: 'Write $\\sin^3x = \\sin x(1-\\cos^2x)$ and set $u=\\cos x$.' },
            { pl: 'Granice: $x=0\\mapsto u=1$, $x=\\pi\\mapsto u=-1$, więc $\\int_{0}^{\\pi} = -\\int_{1}^{-1}(1-u^{2})\\,du = \\int_{-1}^{1}(1-u^{2})\\,du$.', en: 'Limits $1\\mapsto-1$; the sign from $du$ flips them back: $\\int_{-1}^1(1-u^2)du$.' },
            { pl: '$= 2\\int_{0}^{1}(1-u^{2})\\,du = 2\\left(1-\\frac13\\right) = \\frac43$.', en: '$=2(1-\\frac13)=\\frac43$.' },
          ],
          trap: { pl: 'Podwójny znak: minus z $du=-\\sin x\\,dx$ ORAZ odwrócone granice $1\\mapsto -1$ — uwzględnienie tylko jednego z nich zmienia znak wyniku.', en: 'Two sign effects: the minus from $du$ AND the reversed limits — accounting for only one flips the answer.' },
        },
        {
          id: 'podstawienie-oznaczone-l6-01',
          skill: 'po-zaawansowane',
          level: 6,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\pi}\\sqrt{1+\\cos 2x}\\,dx$.', en: 'Compute $\\int_{0}^{\\pi}\\sqrt{1+\\cos 2x}\\,dx$.' },
          answer: '2\\sqrt{2}',
          accept: ['2sqrt(2)', '2\\sqrt2', '2 pierwiastki z 2'],
          solution: [
            { pl: 'Ze wzoru $1+\\cos 2x = 2\\cos^{2}x$: podcałkowa to $\\sqrt{2}\\,\\sqrt{\\cos^{2}x} = \\sqrt{2}\\,|\\cos x|$.', en: '$1+\\cos2x = 2\\cos^2x$, so the integrand is $\\sqrt2\\,|\\cos x|$.' },
            { pl: 'Na $\\langle 0,\\frac{\\pi}{2}\\rangle$ cosinus jest nieujemny, na $\\langle\\frac{\\pi}{2},\\pi\\rangle$ niedodatni — tniemy: $\\int_{0}^{\\pi}|\\cos x|\\,dx = \\int_{0}^{\\pi/2}\\cos x\\,dx - \\int_{\\pi/2}^{\\pi}\\cos x\\,dx = 1+1 = 2$.', en: 'Split at $\\frac{\\pi}{2}$: $\\int_0^\\pi|\\cos x|dx = 1+1 = 2$.' },
            { pl: 'Wynik: $\\sqrt{2}\\cdot 2 = 2\\sqrt{2}$.', en: 'Total: $2\\sqrt2$.' },
          ],
          trap: { pl: 'Napisanie $\\sqrt{\\cos^{2}x} = \\cos x$ — wtedy całka wychodzi $0$, a podcałkowa jest przecież nieujemna; pierwiastek z kwadratu to moduł.', en: 'Writing $\\sqrt{\\cos^2x}=\\cos x$ — that gives 0 although the integrand is nonnegative; the root of a square is the modulus.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'przez-czesci-oznaczone',
      title: { pl: 'Przez części w wersji oznaczonej', en: 'Definite integration by parts' },
      level: 4,
      prereq: ['calkowanie-przez-czesci', 'wlasnosci-calki', 'calka-oznaczona-podstawy'],
      theory: {
        pl: 'Całkowanie przez części w wersji oznaczonej: $\\int_a^b f(x)\\,g\'(x)\\,dx = \\big[f(x)g(x)\\big]_a^b '
          + '- \\int_a^b f\'(x)\\,g(x)\\,dx$. Wyraz brzegowy $[fg]_a^b$ liczy się OD RAZU — często upraszcza się '
          + 'do zera i zostaje sama całka, co jest znacznie wygodniejsze niż wersja nieoznaczona. Wybór ról jak '
          + 'zwykle: logarytmy i funkcje cyklometryczne różniczkujemy, wykładnicze i trygonometryczne całkujemy, '
          + 'wielomian różniczkujemy przy wykładniczej, a przy logarytmie całujemy. W całkach cyklicznych '
          + '($e^{x}\\cos x$) dwukrotne części odtwarzają wyjściową całkę — traktujemy ją jak niewiadomą '
          + 'i rozwiązujemy równanie.',
        en: 'Definite integration by parts: $\\int_a^b f(x)\\,g\'(x)\\,dx = \\big[f(x)g(x)\\big]_a^b - \\int_a^b '
          + 'f\'(x)\\,g(x)\\,dx$. Evaluate the boundary term $[fg]_a^b$ IMMEDIATELY — it often collapses to zero, '
          + 'leaving only the remaining integral, which beats the indefinite version. Role choice as usual: '
          + 'differentiate logs and inverse trig, integrate exponentials and trig; differentiate the polynomial '
          + 'against an exponential, integrate it against a logarithm. In cyclic integrals ($e^{x}\\cos x$) two '
          + 'rounds of parts reproduce the original integral — treat it as an unknown and solve the equation.',
      },
      formulas: [
        { id: 'czesci-oznaczone-wzor', tex: '\\int_{a}^{b} f(x)\\,g\'(x)\\,dx = \\Big[f(x)\\,g(x)\\Big]_{a}^{b} - \\int_{a}^{b} f\'(x)\\,g(x)\\,dx', name: { pl: 'Całkowanie przez części w całce oznaczonej', en: 'Definite integration by parts' }, note: { pl: 'Wyraz brzegowy od razu z granicami. Minus przed drugą całką ginie najczęściej ze wszystkich znaków w analizie.', en: 'The boundary term carries the limits at once. The minus before the second integral is the most-lost sign in analysis.' }, drill: true },
      ],
      skills: [
        { id: 'co-standard', title: { pl: 'Wielomian razy $e^{x}$ lub trygonometryczna', en: 'Polynomial times exponential or trig' }, levels: [3, 4, 5] },
        { id: 'co-logarytmy', title: { pl: 'Logarytmy pod całką oznaczoną', en: 'Logarithms in definite integrals' }, levels: [4, 5] },
        { id: 'co-zaawansowane', title: { pl: 'Funkcje cyklometryczne i całki cykliczne', en: 'Inverse trig and cyclic integrals' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'przez-czesci-oznaczone-l3-01',
          skill: 'co-standard',
          level: 3,
          prompt: { pl: 'Oblicz $\\int_{0}^{1} x\\,e^{x}\\,dx$.', en: 'Compute $\\int_{0}^{1} x\\,e^{x}\\,dx$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Części: $f=x$, $g\'=e^{x}$, więc $f\'=1$, $g=e^{x}$.', en: 'Parts: $f=x$, $g\'=e^x$.' },
            { pl: '$\\int_{0}^{1} x e^{x}dx = \\big[x e^{x}\\big]_{0}^{1} - \\int_{0}^{1} e^{x}dx = e - (e-1) = 1$.', en: '$[xe^x]_0^1 - \\int_0^1 e^x = e-(e-1) = 1$.' },
          ],
          trap: { pl: 'Zgubienie minusa przed drugą całką — wtedy wychodzi $2e-1$ zamiast $1$.', en: 'Losing the minus before the second integral — that yields $2e-1$ instead of 1.' },
        },
        {
          id: 'przez-czesci-oznaczone-l4-01',
          skill: 'co-logarytmy',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{1}^{e}\\ln x\\,dx$.', en: 'Compute $\\int_{1}^{e}\\ln x\\,dx$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Części z $f=\\ln x$, $g\'=1$: $\\int\\ln x\\,dx = x\\ln x - x$.', en: 'Parts with $f=\\ln x$, $g\'=1$: antiderivative $x\\ln x - x$.' },
            { pl: '$\\big[x\\ln x - x\\big]_{1}^{e} = (e-e) - (0-1) = 1$.', en: '$(e-e)-(0-1) = 1$.' },
          ],
          trap: { pl: 'Pomylenie kierunku: $\\frac{1}{x}$ to POCHODNA logarytmu, nie jego całka — $\\int\\ln x\\,dx \\neq \\frac{1}{x}$.', en: 'Direction confusion: $\\frac1x$ is the DERIVATIVE of the log, not its integral.' },
        },
        {
          id: 'przez-czesci-oznaczone-l4-02',
          skill: 'co-standard',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\pi} x\\sin x\\,dx$.', en: 'Compute $\\int_{0}^{\\pi} x\\sin x\\,dx$.' },
          answer: '\\pi',
          accept: ['pi', '\\pi'],
          solution: [
            { pl: 'Części: $f=x$, $g\'=\\sin x$, więc $g=-\\cos x$.', en: 'Parts: $f=x$, $g\'=\\sin x$, so $g=-\\cos x$.' },
            { pl: '$\\big[-x\\cos x\\big]_{0}^{\\pi} + \\int_{0}^{\\pi}\\cos x\\,dx = \\pi + \\big[\\sin x\\big]_{0}^{\\pi} = \\pi + 0 = \\pi$.', en: '$[-x\\cos x]_0^\\pi + \\int_0^\\pi\\cos x\\,dx = \\pi + 0 = \\pi$.' },
          ],
          trap: { pl: 'Znaki w wyrazie brzegowym: $-\\pi\\cos\\pi = -\\pi\\cdot(-1) = +\\pi$ — podwójny minus, klasyczne miejsce wpadki.', en: 'Signs in the boundary term: $-\\pi\\cos\\pi = +\\pi$ — a double negative, the classic slip.' },
        },
        {
          id: 'przez-czesci-oznaczone-l4-03',
          skill: 'co-logarytmy',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{1}^{2} x\\ln x\\,dx$.', en: 'Compute $\\int_{1}^{2} x\\ln x\\,dx$.' },
          answer: '2\\ln 2-\\frac{3}{4}',
          accept: ['2ln2-3/4', '2\\ln2 - 3/4'],
          solution: [
            { pl: 'Przy logarytmie całujemy wielomian: $f=\\ln x$, $g\'=x$, $g=\\frac{x^{2}}{2}$.', en: 'Against a log, integrate the polynomial: $f=\\ln x$, $g=\\frac{x^2}{2}$.' },
            { pl: '$\\left[\\frac{x^{2}}{2}\\ln x\\right]_{1}^{2} - \\int_{1}^{2}\\frac{x}{2}\\,dx = 2\\ln 2 - \\left[\\frac{x^{2}}{4}\\right]_{1}^{2}$.', en: '$2\\ln2 - [\\frac{x^2}{4}]_1^2$.' },
            { pl: '$= 2\\ln 2 - \\left(1 - \\frac14\\right) = 2\\ln 2 - \\frac34$.', en: '$=2\\ln2-\\frac34$.' },
          ],
          trap: { pl: 'Wzięcie $f=x$ i próba całkowania $\\ln x$ „z pamięci” — role są odwrotne: logarytm się różniczkuje, wielomian całkuje.', en: 'Taking $f=x$ and integrating $\\ln x$ "from memory" — the roles are the other way round.' },
        },
        {
          id: 'przez-czesci-oznaczone-l5-01',
          skill: 'co-zaawansowane',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{1}\\operatorname{arctg} x\\,dx$.', en: 'Compute $\\int_{0}^{1}\\operatorname{arctg} x\\,dx$.' },
          answer: '\\frac{\\pi}{4}-\\frac{1}{2}\\ln 2',
          accept: ['pi/4 - (1/2)ln2', '\\pi/4-\\ln2/2', 'pi/4-ln(2)/2'],
          solution: [
            { pl: 'Części z $f=\\operatorname{arctg} x$, $g\'=1$: $\\big[x\\operatorname{arctg} x\\big]_{0}^{1} - \\int_{0}^{1}\\frac{x}{1+x^{2}}\\,dx$.', en: 'Parts with $f=\\operatorname{arctg}x$, $g\'=1$.' },
            { pl: 'Wyraz brzegowy: $1\\cdot\\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.', en: 'Boundary term: $\\frac{\\pi}{4}$.' },
            { pl: 'Druga całka to $\\frac12\\ln(1+x^{2})$ w granicach $0,1$, czyli $\\frac12\\ln 2$. Wynik: $\\frac{\\pi}{4}-\\frac12\\ln 2$.', en: 'The remaining integral is $\\frac12\\ln2$; answer $\\frac{\\pi}{4}-\\frac12\\ln2$.' },
          ],
          trap: { pl: 'W drugiej całce licznik $x$ to połowa pochodnej mianownika — zgubienie $\\frac12$ przy $\\ln(1+x^{2})$ psuje wynik.', en: 'In the leftover integral the $x$ is HALF the derivative of the denominator — dropping the $\\frac12$ spoils the answer.' },
        },
        {
          id: 'przez-czesci-oznaczone-l5-02',
          skill: 'co-standard',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{1} x^{2}e^{x}\\,dx$.', en: 'Compute $\\int_{0}^{1} x^{2}e^{x}\\,dx$.' },
          answer: 'e-2',
          accept: ['e-2'],
          solution: [
            { pl: 'Pierwsze części: $\\big[x^{2}e^{x}\\big]_{0}^{1} - 2\\int_{0}^{1} x e^{x}\\,dx = e - 2\\int_{0}^{1} x e^{x}\\,dx$.', en: 'First round: $e - 2\\int_0^1 xe^x\\,dx$.' },
            { pl: 'Drugie części (lub gotowy wynik): $\\int_{0}^{1} x e^{x}\\,dx = 1$.', en: 'Second round: $\\int_0^1 xe^x\\,dx = 1$.' },
            { pl: 'Razem: $e - 2\\cdot 1 = e-2$.', en: 'Total: $e-2$.' },
          ],
          trap: { pl: 'Stopień wielomianu wyznacza liczbę rund: $x^{2}$ wymaga DWÓCH całkowań przez części, jedno nie wystarcza.', en: 'The polynomial degree dictates the rounds: $x^2$ needs TWO applications of parts.' },
        },
        {
          id: 'przez-czesci-oznaczone-l6-01',
          skill: 'co-zaawansowane',
          level: 6,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\pi/2} e^{x}\\cos x\\,dx$.', en: 'Compute $\\int_{0}^{\\pi/2} e^{x}\\cos x\\,dx$.' },
          answer: '\\frac{e^{\\pi/2}-1}{2}',
          accept: ['(e^{pi/2}-1)/2', '(e^(pi/2)-1)/2'],
          solution: [
            { pl: 'Oznaczmy $I$. Części: $I = \\big[e^{x}\\sin x\\big]_{0}^{\\pi/2} - \\int_{0}^{\\pi/2} e^{x}\\sin x\\,dx = e^{\\pi/2} - J$.', en: 'Call it $I$: $I = e^{\\pi/2} - J$ with $J=\\int e^x\\sin x$.' },
            { pl: 'Części na $J$: $J = \\big[-e^{x}\\cos x\\big]_{0}^{\\pi/2} + \\int_{0}^{\\pi/2} e^{x}\\cos x\\,dx = 1 + I$.', en: 'Parts on $J$: $J = 1 + I$.' },
            { pl: 'Stąd $I = e^{\\pi/2} - 1 - I$, czyli $2I = e^{\\pi/2}-1$ i $I = \\frac{e^{\\pi/2}-1}{2}$.', en: 'So $2I = e^{\\pi/2}-1$, giving $I = \\frac{e^{\\pi/2}-1}{2}$.' },
          ],
          trap: { pl: 'W drugiej rundzie trzeba różniczkować i całkować TE SAME role co w pierwszej — zamiana ról cofa rachunek do punktu wyjścia i daje $0=0$.', en: 'The second round must keep the SAME role assignment — swapping roles undoes round one and proves $0=0$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'calki-niewlasciwe',
      title: { pl: 'Całki niewłaściwe', en: 'Improper integrals' },
      level: 5,
      prereq: ['podstawienie-oznaczone', 'przez-czesci-oznaczone'],
      theory: {
        pl: 'Całka niewłaściwa pierwszego rodzaju ma nieskończoną granicę całkowania: '
          + '$\\int_a^{\\infty} f = \\lim_{T\\to\\infty}\\int_a^{T} f$; drugiego rodzaju — funkcję nieograniczoną '
          + 'przy końcu przedziału: $\\int_a^b f = \\lim_{\\varepsilon\\to 0^+}\\int_{a+\\varepsilon}^{b} f$ przy '
          + 'osobliwości w $a$. Całka jest zbieżna, gdy granica istnieje i jest skończona. Wzorce odniesienia: '
          + '$\\int_1^{\\infty} x^{-p}\\,dx$ zbieżna dokładnie dla $p>1$, a $\\int_0^1 x^{-p}\\,dx$ dokładnie dla '
          + '$p<1$ — w nieskończoności funkcja musi znikać szybko, przy zerze wolno rosnąć. Osobliwość WEWNĄTRZ '
          + 'przedziału wymaga rozcięcia całki na dwie i zbadania każdej z osobna — mechaniczne wstawienie granic '
          + 'do pierwotnej daje wtedy jawnie fałszywe wyniki. Przy badaniu samej zbieżności działa kryterium '
          + 'porównawcze: $0\\le f\\le g$ i zbieżność $\\int g$ dają zbieżność $\\int f$.',
        en: 'An improper integral of the first kind has an infinite limit of integration: '
          + '$\\int_a^{\\infty} f = \\lim_{T\\to\\infty}\\int_a^T f$; the second kind has an unbounded integrand at '
          + 'an endpoint: $\\int_a^b f = \\lim_{\\varepsilon\\to0^+}\\int_{a+\\varepsilon}^b f$ for a singularity at '
          + '$a$. The integral converges when the limit is finite. Benchmarks: $\\int_1^{\\infty} x^{-p}\\,dx$ '
          + 'converges exactly for $p>1$, and $\\int_0^1 x^{-p}\\,dx$ exactly for $p<1$ — decay fast at infinity, '
          + 'blow up slowly at zero. A singularity INSIDE the interval forces splitting into two integrals studied '
          + 'separately — mechanically plugging limits into an antiderivative then produces visibly false results. '
          + 'For pure convergence questions the comparison test applies: $0\\le f\\le g$ with $\\int g$ convergent '
          + 'forces $\\int f$ convergent.',
      },
      formulas: [
        { id: 'niewlasciwa-1-rodzaju', tex: '\\int_{a}^{\\infty} f(x)\\,dx = \\lim_{T\\to\\infty}\\int_{a}^{T} f(x)\\,dx', name: { pl: 'Całka niewłaściwa pierwszego rodzaju', en: 'Improper integral of the first kind' }, note: { pl: 'Zbieżna, gdy granica skończona. Symbol $\\infty$ nigdy nie trafia do pierwotnej wprost — zawsze przez granicę.', en: 'Convergent when the limit is finite. $\\infty$ never enters the antiderivative directly — always through a limit.' }, drill: true },
        { id: 'niewlasciwa-2-rodzaju', tex: '\\int_{a}^{b} f(x)\\,dx = \\lim_{\\varepsilon\\to 0^{+}}\\int_{a+\\varepsilon}^{b} f(x)\\,dx\\quad (\\text{osobliwość w } a)', name: { pl: 'Całka niewłaściwa drugiego rodzaju', en: 'Improper integral of the second kind' }, note: { pl: 'Osobliwość wewnątrz przedziału: rozcinamy i badamy każdą część osobno.', en: 'A singularity inside the interval: split and study each part separately.' }, drill: true },
        { id: 'p-test-nieskonczonosc', tex: '\\int_{1}^{\\infty}\\frac{dx}{x^{p}} = \\frac{1}{p-1}\\ \\text{dla } p>1,\\quad \\text{rozbieżna dla } p\\le 1', name: { pl: 'Wzorzec $x^{-p}$ w nieskończoności', en: 'The $x^{-p}$ benchmark at infinity' }, note: { pl: 'Granicznym przypadkiem jest $p=1$: $\\ln T\\to\\infty$. Szybciej niż $\\frac1x$ — zbieżna; wolniej — nie.', en: 'The borderline is $p=1$: $\\ln T\\to\\infty$. Faster decay than $\\frac1x$ converges; slower does not.' }, drill: true },
        { id: 'p-test-zero', tex: '\\int_{0}^{1}\\frac{dx}{x^{p}} = \\frac{1}{1-p}\\ \\text{dla } p<1,\\quad \\text{rozbieżna dla } p\\ge 1', name: { pl: 'Wzorzec $x^{-p}$ przy zerze', en: 'The $x^{-p}$ benchmark at zero' }, note: { pl: 'Warunki są LUSTRZANE względem nieskończoności: przy zerze zbieżność wymaga $p<1$.', en: 'MIRROR image of the infinity case: at zero convergence needs $p<1$.' }, drill: true },
        { id: 'kryterium-porownawcze-calki', tex: '0 \\le f \\le g,\\ \\int_{a}^{\\infty} g \\ \\text{zbieżna} \\ \\Rightarrow\\ \\int_{a}^{\\infty} f \\ \\text{zbieżna}', name: { pl: 'Kryterium porównawcze', en: 'The comparison test' }, note: { pl: 'Kontrapozycja: rozbieżność mniejszej wymusza rozbieżność większej. Porównujemy zwykle z $x^{-p}$.', en: 'Contrapositive: divergence of the smaller forces divergence of the larger. Compare with $x^{-p}$.' }, drill: true },
      ],
      skills: [
        { id: 'cn-pierwszy-rodzaj', title: { pl: 'Nieskończona granica całkowania', en: 'Infinite limits of integration' }, levels: [4, 5] },
        { id: 'cn-drugi-rodzaj', title: { pl: 'Osobliwość w punkcie', en: 'Singular integrands' }, levels: [5, 6] },
        { id: 'cn-zbieznosc', title: { pl: 'Badanie zbieżności', en: 'Convergence analysis' }, levels: [4, 5, 6] },
      ],
      problems: [
        {
          id: 'calki-niewlasciwe-l4-01',
          skill: 'cn-pierwszy-rodzaj',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{1}^{\\infty}\\frac{dx}{x^{2}}$.', en: 'Compute $\\int_{1}^{\\infty}\\frac{dx}{x^{2}}$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Z definicji: $\\lim_{T\\to\\infty}\\int_{1}^{T} x^{-2}\\,dx = \\lim_{T\\to\\infty}\\left[-\\frac{1}{x}\\right]_{1}^{T}$.', en: 'By definition: $\\lim_{T\\to\\infty}[-\\frac1x]_1^T$.' },
            { pl: '$= \\lim_{T\\to\\infty}\\left(1 - \\frac{1}{T}\\right) = 1$ — całka zbieżna o wartości 1.', en: '$=\\lim(1-\\frac1T)=1$: convergent with value 1.' },
          ],
          trap: { pl: 'Wpisanie $\\infty$ prosto do pierwotnej — poprawny zapis idzie przez $T$ i granicę, i tego zapisu wymaga egzaminator.', en: 'Plugging $\\infty$ straight into the antiderivative — the correct write-up goes through $T$ and a limit.' },
        },
        {
          id: 'calki-niewlasciwe-l4-02',
          skill: 'cn-pierwszy-rodzaj',
          level: 4,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\infty} e^{-2x}\\,dx$.', en: 'Compute $\\int_{0}^{\\infty} e^{-2x}\\,dx$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5', '0.5'],
          solution: [
            { pl: '$\\int_{0}^{T} e^{-2x}dx = \\left[-\\tfrac12 e^{-2x}\\right]_{0}^{T} = \\tfrac12\\left(1 - e^{-2T}\\right)$.', en: '$\\int_0^T e^{-2x}dx = \\frac12(1-e^{-2T})$.' },
            { pl: '$e^{-2T}\\to 0$, więc całka jest zbieżna i równa $\\frac12$.', en: '$e^{-2T}\\to0$, so the integral converges to $\\frac12$.' },
          ],
          trap: { pl: 'Zgubienie czynnika $-\\frac12$ z pierwotnej $e^{-2x}$ — pochodna wewnętrzna działa też w całkach niewłaściwych.', en: 'Losing the $-\\frac12$ in the antiderivative of $e^{-2x}$ — the chain rule works in improper integrals too.' },
        },
        {
          id: 'calki-niewlasciwe-l4-03',
          skill: 'cn-zbieznosc',
          level: 4,
          prompt: { pl: 'Zbadaj zbieżność całki $\\int_{1}^{\\infty}\\frac{dx}{x}$.', en: 'Determine whether $\\int_{1}^{\\infty}\\frac{dx}{x}$ converges.' },
          answer: '\\text{rozbieżna}',
          accept: ['rozbieżna', 'rozbiezna', 'divergent', 'nie jest zbieżna'],
          solution: [
            { pl: '$\\int_{1}^{T}\\frac{dx}{x} = \\ln T$.', en: '$\\int_1^T\\frac{dx}{x} = \\ln T$.' },
            { pl: '$\\ln T \\to \\infty$ przy $T\\to\\infty$, więc całka jest rozbieżna — to graniczny przypadek $p=1$ wzorca $x^{-p}$.', en: '$\\ln T\\to\\infty$: divergent — the borderline $p=1$ case.' },
          ],
          trap: { pl: '„Funkcja dąży do zera, więc całka zbieżna” — samo znikanie w nieskończoności NIE wystarcza; $\\frac1x$ znika za wolno.', en: '"The function tends to zero, so it converges" — decay alone is NOT enough; $\\frac1x$ decays too slowly.' },
        },
        {
          id: 'calki-niewlasciwe-l5-01',
          skill: 'cn-drugi-rodzaj',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{1}\\frac{dx}{\\sqrt{x}}$.', en: 'Compute $\\int_{0}^{1}\\frac{dx}{\\sqrt{x}}$.' },
          answer: '2',
          accept: ['2'],
          solution: [
            { pl: 'Osobliwość w $x=0$: liczymy $\\lim_{\\varepsilon\\to 0^{+}}\\int_{\\varepsilon}^{1} x^{-1/2}\\,dx$.', en: 'Singularity at 0: $\\lim_{\\varepsilon\\to0^+}\\int_\\varepsilon^1 x^{-1/2}dx$.' },
            { pl: '$\\left[2\\sqrt{x}\\right]_{\\varepsilon}^{1} = 2 - 2\\sqrt{\\varepsilon} \\to 2$.', en: '$[2\\sqrt x]_\\varepsilon^1 = 2-2\\sqrt\\varepsilon \\to 2$.' },
            { pl: 'Zbieżna, bo $p=\\frac12 < 1$ — zgodnie ze wzorcem przy zerze.', en: 'Convergent since $p=\\frac12<1$, matching the benchmark at zero.' },
          ],
          trap: { pl: 'Niezauważenie, że całka w ogóle jest niewłaściwa — funkcja ucieka do $\\infty$ przy zerze i formalnie potrzebna jest granica z $\\varepsilon$.', en: 'Not noticing the integral is improper at all — the integrand blows up at 0 and the $\\varepsilon$-limit is formally required.' },
        },
        {
          id: 'calki-niewlasciwe-l5-02',
          skill: 'cn-pierwszy-rodzaj',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{2}^{\\infty}\\frac{dx}{x\\ln^{2}x}$.', en: 'Compute $\\int_{2}^{\\infty}\\frac{dx}{x\\ln^{2}x}$.' },
          answer: '\\frac{1}{\\ln 2}',
          accept: ['1/ln2', '1/\\ln 2', '1/ln(2)'],
          solution: [
            { pl: 'Podstawienie $u=\\ln x$, $du=\\frac{dx}{x}$; granice: $2\\mapsto\\ln 2$, $T\\mapsto\\ln T$.', en: '$u=\\ln x$; limits $2\\mapsto\\ln2$, $T\\mapsto\\ln T$.' },
            { pl: '$\\int_{\\ln 2}^{\\ln T} u^{-2}\\,du = \\frac{1}{\\ln 2} - \\frac{1}{\\ln T}$.', en: '$\\int u^{-2}du = \\frac{1}{\\ln2}-\\frac{1}{\\ln T}$.' },
            { pl: '$\\frac{1}{\\ln T}\\to 0$, więc całka zbieżna do $\\frac{1}{\\ln 2}$.', en: 'The limit is $\\frac{1}{\\ln2}$.' },
          ],
          trap: { pl: 'Bez kwadratu ($\\frac{1}{x\\ln x}$) całka byłaby ROZBIEŻNA ($\\ln\\ln T\\to\\infty$) — potęga logarytmu rozstrzyga o wszystkim.', en: 'Without the square, $\\frac{1}{x\\ln x}$ DIVERGES ($\\ln\\ln T\\to\\infty$) — the power on the log decides everything.' },
        },
        {
          id: 'calki-niewlasciwe-l5-03',
          skill: 'cn-pierwszy-rodzaj',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{\\infty} x\\,e^{-x}\\,dx$.', en: 'Compute $\\int_{0}^{\\infty} x\\,e^{-x}\\,dx$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Części na $\\langle 0,T\\rangle$: $\\int_{0}^{T} x e^{-x}dx = \\big[-x e^{-x}\\big]_{0}^{T} + \\int_{0}^{T} e^{-x}dx = -T e^{-T} + 1 - e^{-T}$.', en: 'Parts on $[0,T]$: $-Te^{-T}+1-e^{-T}$.' },
            { pl: 'Z hierarchii wzrostu $T e^{-T}\\to 0$ oraz $e^{-T}\\to 0$.', en: 'By the growth hierarchy $Te^{-T}\\to0$ and $e^{-T}\\to0$.' },
            { pl: 'Całka zbieżna, wartość $1$.', en: 'Convergent with value 1.' },
          ],
          trap: { pl: 'Wyraz brzegowy $-T e^{-T}$ to symbol $\\infty\\cdot 0$ — trzeba wiedzieć (hierarchia wzrostu), że wykładnicza wygrywa i granica jest zerem.', en: 'The boundary term $-Te^{-T}$ is an $\\infty\\cdot0$ form — the exponential wins and the limit is 0.' },
        },
        {
          id: 'calki-niewlasciwe-l5-04',
          skill: 'cn-drugi-rodzaj',
          level: 5,
          prompt: { pl: 'Oblicz $\\int_{0}^{1}\\ln x\\,dx$.', en: 'Compute $\\int_{0}^{1}\\ln x\\,dx$.' },
          answer: '-1',
          accept: ['-1'],
          solution: [
            { pl: 'Osobliwość w zerze ($\\ln x\\to-\\infty$): liczymy $\\lim_{\\varepsilon\\to 0^{+}}\\int_{\\varepsilon}^{1}\\ln x\\,dx$.', en: 'Singularity at 0: take $\\lim_{\\varepsilon\\to0^+}\\int_\\varepsilon^1\\ln x\\,dx$.' },
            { pl: '$\\big[x\\ln x - x\\big]_{\\varepsilon}^{1} = -1 - \\varepsilon\\ln\\varepsilon + \\varepsilon$.', en: '$[x\\ln x - x]_\\varepsilon^1 = -1-\\varepsilon\\ln\\varepsilon+\\varepsilon$.' },
            { pl: '$\\varepsilon\\ln\\varepsilon\\to 0$, więc całka zbieżna i równa $-1$.', en: '$\\varepsilon\\ln\\varepsilon\\to0$, so the value is $-1$.' },
          ],
          trap: { pl: 'Uznanie granicy $\\varepsilon\\ln\\varepsilon$ za $-\\infty$ — to symbol $0\\cdot\\infty$, a potęga wygrywa z logarytmem: granica to $0$.', en: 'Calling $\\varepsilon\\ln\\varepsilon\\to-\\infty$ — it is a $0\\cdot\\infty$ form and the power beats the log: the limit is 0.' },
        },
        {
          id: 'calki-niewlasciwe-l6-01',
          skill: 'cn-drugi-rodzaj',
          level: 6,
          prompt: { pl: 'Student obliczył: $\\int_{-1}^{1}\\frac{dx}{x^{2}} = \\left[-\\frac{1}{x}\\right]_{-1}^{1} = -1-1 = -2$. Wskaż błąd i rozstrzygnij, czy całka jest zbieżna.', en: 'A student computed $\\int_{-1}^{1}\\frac{dx}{x^{2}} = [-\\frac1x]_{-1}^{1} = -2$. Find the error and settle convergence.' },
          answer: '\\text{rozbieżna}',
          accept: ['rozbieżna', 'rozbiezna', 'divergent'],
          solution: [
            { pl: 'Wynik jest jawnie fałszywy: funkcja $\\frac{1}{x^{2}}$ jest dodatnia, a „całka” wyszła ujemna.', en: 'The result is visibly false: a positive function cannot have a negative integral.' },
            { pl: 'Błąd: w $x=0$, WEWNĄTRZ przedziału, jest osobliwość — wzoru Newtona-Leibniza nie wolno stosować przez nią na wskroś; trzeba rozciąć: $\\int_{-1}^{0} + \\int_{0}^{1}$.', en: 'The error: a singularity at $x=0$ INSIDE the interval — Newton–Leibniz may not be applied across it; split into $\\int_{-1}^0+\\int_0^1$.' },
            { pl: 'Każda połówka to wzorzec z $p=2\\ge 1$ przy zerze, więc każda jest rozbieżna — cała całka jest rozbieżna.', en: 'Each half is the $p=2$ benchmark at zero, hence divergent — the whole integral diverges.' },
          ],
          trap: { pl: 'Mechaniczne użycie pierwotnej przez osobliwość — dodatnia funkcja z „ujemną całką” to sygnał, że przedział zawiera punkt osobliwy.', en: 'Mechanically using the antiderivative across a singularity — a positive function with a "negative integral" is the tell.' },
        },
        {
          id: 'calki-niewlasciwe-l6-02',
          skill: 'cn-zbieznosc',
          level: 6,
          prompt: { pl: 'Rozstrzygnij, czy istnieje $p$, dla którego całka $\\int_{0}^{\\infty}\\frac{dx}{x^{p}}$ jest zbieżna. Odpowiedź uzasadnij, rozcinając całkę w $x=1$.', en: 'Is there a $p$ for which $\\int_{0}^{\\infty}\\frac{dx}{x^{p}}$ converges? Justify by splitting at $x=1$.' },
          answer: '\\text{nie istnieje}',
          accept: ['nie istnieje', 'nie', 'no', 'brak takiego p'],
          solution: [
            { pl: 'Rozcinamy: $\\int_{0}^{\\infty} = \\int_{0}^{1} + \\int_{1}^{\\infty}$ i obie części muszą być zbieżne naraz.', en: 'Split: both $\\int_0^1$ and $\\int_1^\\infty$ must converge simultaneously.' },
            { pl: 'Przy zerze zbieżność wymaga $p<1$, w nieskończoności $p>1$.', en: 'At zero convergence needs $p<1$; at infinity $p>1$.' },
            { pl: 'Warunki się wykluczają (a $p=1$ psuje obie części), więc takie $p$ nie istnieje.', en: 'The conditions are incompatible (and $p=1$ ruins both), so no such $p$ exists.' },
          ],
          trap: { pl: 'Sprawdzenie tylko jednego końca — całka z dwiema patologiami wymaga zbieżności KAŻDEJ części z osobna, a warunki tu stoją w kontrze.', en: 'Checking only one end — with two pathologies EACH part must converge, and here the conditions oppose each other.' },
        },
      ],
    },
  ],
};
