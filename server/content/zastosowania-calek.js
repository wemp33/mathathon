// Zastosowania geometryczne całki oznaczonej — dokładnie wzory z arkusza
// użytkownika: asymptoty są w module hospital-asymptoty, tu jest długość łuku,
// objętość i pole powierzchni brył obrotowych, wokół obu osi.
export default {
  id: 'zastosowania-calek',
  track: 'calculus',
  order: 270,
  title: { pl: 'Zastosowania całek', en: 'Applications of integrals' },
  blurb: {
    pl: 'Długość łuku, objętość i pole powierzchni brył obrotowych — wokół OX i OY.',
    en: 'Arc length, and the volume and surface area of solids of revolution about both axes.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'calka-oznaczona-podstawy',
      title: { pl: 'Całka oznaczona i pole', en: 'The definite integral and area' },
      level: 4,
      prereq: ['tablica-calek'],
      theory: {
        pl: 'Wzór Newtona-Leibniza: $\\int_a^b f(x)\\,dx = F(b)-F(a)$, gdzie $F$ jest dowolną pierwotną $f$. '
          + 'Całka oznaczona to pole ze znakiem — kawałki pod osią liczą się ujemnie. Pole \\emph{figury} '
          + 'wymaga więc modułu albo podziału przedziału w miejscach zerowych. Pole między krzywymi to '
          + '$\\int_a^b(\\text{górna}-\\text{dolna})\\,dx$, a granice całkowania są odciętymi punktów przecięcia, '
          + 'które często trzeba najpierw wyznaczyć.',
        en: 'Newton–Leibniz: $\\int_a^b f(x)\\,dx = F(b)-F(a)$ for any antiderivative $F$. The definite '
          + 'integral is signed area — pieces below the axis count negative. The area of a *region* therefore '
          + 'needs absolute values or splitting at the zeros. Area between curves is $\\int(\\text{upper}-\\text{lower})$, '
          + 'with the limits at the intersection points, which usually have to be found first.',
      },
      formulas: [
        { id: 'newton-leibniz', tex: '\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)', name: { pl: 'Wzór Newtona-Leibniza', en: 'Newton–Leibniz formula' }, note: { pl: 'Wymaga ciągłości $f$ na $\\langle a,b\\rangle$. Stała $C$ znika w różnicy.', en: 'Requires continuity on $[a,b]$. The constant $C$ cancels in the difference.' }, drill: true },
        { id: 'pole-miedzy', tex: 'P = \\int_{a}^{b}\\big(f(x)-g(x)\\big)\\,dx,\\quad f \\ge g', name: { pl: 'Pole między krzywymi', en: 'Area between curves' }, note: { pl: 'Górna minus dolna. Gdy krzywe się przecinają wewnątrz przedziału, trzeba go rozciąć.', en: 'Upper minus lower; split the interval where the curves cross.' }, drill: true },
        { id: 'addytywnosc', tex: '\\int_{a}^{b} = \\int_{a}^{c} + \\int_{c}^{b}', name: { pl: 'Addytywność względem przedziału', en: 'Additivity over the interval' }, note: { pl: 'Wraz z $\\int_a^b = -\\int_b^a$ pozwala porządkować dowolne granice.', en: 'With $\\int_a^b = -\\int_b^a$ this handles any arrangement of limits.' }, drill: true },
        { id: 'parzysta-nieparzysta', tex: '\\int_{-a}^{a} f = \\begin{cases}2\\int_{0}^{a} f, & f \\text{ parzysta}\\\\ 0, & f \\text{ nieparzysta}\\end{cases}', name: { pl: 'Całka na przedziale symetrycznym', en: 'Integral over a symmetric interval' }, note: { pl: 'Zero dla nieparzystej tylko na przedziale symetrycznym — warunek bywa pomijany.', en: 'Zero for odd functions only on a symmetric interval — a condition often forgotten.' }, drill: true },
      ],
      skills: [
        { id: 'newton-leibniz-uzycie', title: { pl: 'Wzór Newtona-Leibniza', en: 'Using Newton–Leibniz' }, levels: [3, 4] },
        { id: 'pole-pod-krzywa', title: { pl: 'Pole pod krzywą', en: 'Area under a curve' }, levels: [3, 4] },
        { id: 'pole-miedzy-krzywymi', title: { pl: 'Pole między krzywymi', en: 'Area between curves' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'calka-oznaczona-podstawy-l3-01',
          skill: 'newton-leibniz-uzycie',
          level: 3,
          prompt: { pl: 'Oblicz $\\int_{1}^{4}\\left(2x - \\frac{1}{\\sqrt{x}}\\right)dx$.', en: 'Compute $\\int_{1}^{4}\\left(2x - \\frac{1}{\\sqrt{x}}\\right)dx$.' },
          answer: '13',
          accept: ['13'],
          solution: [
            { pl: 'Pierwotna: $x^2 - 2\\sqrt{x}$.', en: 'Antiderivative: $x^2 - 2\\sqrt{x}$.' },
            { pl: 'W $x=4$: $16-4=12$. W $x=1$: $1-2=-1$.', en: 'At $4$: $12$; at $1$: $-1$.' },
            { pl: '$12-(-1)=13$.', en: '$12-(-1)=13$.' },
          ],
          trap: { pl: 'Znak przy $F(a)$: odejmuje się całą wartość, a $F(1)$ jest tu ujemne, więc wychodzi dodawanie.', en: 'The sign at $F(a)$: subtracting a negative value becomes addition.' },
        },
        {
          id: 'calka-oznaczona-podstawy-l4-01',
          skill: 'pole-pod-krzywa',
          level: 4,
          prompt: { pl: 'Oblicz pole figury ograniczonej wykresem $f(x)=x^{2}-4$ i osią $Ox$.', en: 'Find the area enclosed by $f(x)=x^{2}-4$ and the $x$-axis.' },
          answer: '\\frac{32}{3}',
          accept: ['32/3', '10\\frac{2}{3}'],
          solution: [
            { pl: 'Miejsca zerowe: $x=\\pm 2$. Na $(-2,2)$ funkcja jest ujemna.', en: 'Zeros at $\\pm 2$; the function is negative between them.' },
            { pl: 'Pole $= -\\int_{-2}^{2}(x^2-4)dx = \\int_{-2}^{2}(4-x^2)dx$.', en: 'Area $= \\int_{-2}^{2}(4-x^2)dx$.' },
            { pl: 'Z parzystości: $2\\int_0^2(4-x^2)dx = 2\\left[4x-\\frac{x^3}{3}\\right]_0^2 = 2\\left(8-\\frac83\\right) = \\frac{32}{3}$.', en: 'By symmetry $= 2(8-\\frac83) = \\frac{32}{3}$.' },
          ],
          trap: { pl: 'Policzenie $\\int_{-2}^{2}(x^2-4)dx = -\\frac{32}{3}$ i podanie ujemnego pola — całka ze znakiem to nie pole.', en: 'Reporting $-\\frac{32}{3}$ — signed integral is not area.' },
        },
        {
          id: 'calka-oznaczona-podstawy-l5-01',
          skill: 'pole-miedzy-krzywymi',
          level: 5,
          prompt: { pl: 'Oblicz pole figury ograniczonej krzywymi $y=x^{2}$ i $y=2x+3$.', en: 'Find the area enclosed by $y=x^{2}$ and $y=2x+3$.' },
          answer: '\\frac{32}{3}',
          accept: ['32/3'],
          solution: [
            { pl: 'Przecięcia: $x^2=2x+3 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$, więc $x=-1$ i $x=3$.', en: 'Intersections at $x=-1$ and $x=3$.' },
            { pl: 'Na $(-1,3)$ prosta leży nad parabolą.', en: 'The line is above the parabola there.' },
            { pl: '$\\int_{-1}^{3}\\big(2x+3-x^2\\big)dx = \\left[x^2+3x-\\frac{x^3}{3}\\right]_{-1}^{3} = (9+9-9) - \\left(1-3+\\frac13\\right) = 9 + \\frac{5}{3} = \\frac{32}{3}$.', en: '$= 9 + \\frac53 = \\frac{32}{3}$.' },
          ],
          trap: { pl: 'Nieustalenie, która krzywa jest na górze — odwrotna kolejność daje wynik ujemny.', en: 'Not checking which curve is on top — the reverse order gives a negative answer.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'dlugosc-luku',
      title: { pl: 'Długość łuku', en: 'Arc length' },
      level: 5,
      prereq: ['calka-oznaczona-podstawy', 'pochodne-zlozone'],
      theory: {
        pl: 'Długość łuku to suma nieskończenie krótkich odcinków: element długości '
          + '$ds = \\sqrt{dx^2+dy^2} = \\sqrt{1+(f\'(x))^2}\\,dx$ — twierdzenie Pitagorasa w wersji '
          + 'różniczkowej. Stąd $L=\\int_a^b\\sqrt{1+(f\'(x))^2}\\,dx$. Rachunkowo trudność polega na tym, '
          + 'że pierwiastek rzadko całkuje się elegancko — zadania dobiera się tak, by $1+(f\')^2$ było '
          + 'pełnym kwadratem, i warto to sprawdzać, zanim zacznie się liczyć na siłę.',
        en: 'Arc length is a sum of infinitesimal segments: $ds = \\sqrt{1+(f\'(x))^2}\\,dx$, Pythagoras in '
          + 'differential form. Hence $L=\\int_a^b\\sqrt{1+(f\'(x))^2}\\,dx$. The practical difficulty is that '
          + 'the root rarely integrates cleanly — good problems make $1+(f\')^2$ a perfect square, and it pays '
          + 'to check for that before grinding.',
      },
      formulas: [
        { id: 'dlugosc-luku-wzor', tex: 'L = \\int_{a}^{b} \\sqrt{1 + \\big(f\'(x)\\big)^{2}}\\,dx', name: { pl: 'Długość łuku krzywej $y=f(x)$', en: 'Arc length of $y=f(x)$' }, note: { pl: 'Jedynka jest POD pierwiastkiem, razem z kwadratem pochodnej — nie przed nim.', en: 'The 1 is UNDER the root, with the squared derivative — not outside it.' }, drill: true },
        { id: 'dlugosc-luku-parametryczna', tex: 'L = \\int_{\\alpha}^{\\beta} \\sqrt{\\big(x\'(t)\\big)^{2} + \\big(y\'(t)\\big)^{2}}\\,dt', name: { pl: 'Długość łuku krzywej parametrycznej', en: 'Arc length, parametric form' }, note: { pl: 'Dla $x(t)=t$, $y=f(t)$ odtwarza wzór podstawowy.', en: 'With $x(t)=t$ it recovers the basic formula.' }, drill: true },
      ],
      skills: [
        { id: 'luk-jawny', title: { pl: 'Długość łuku $y=f(x)$', en: 'Arc length of a graph' }, levels: [4, 5] },
        { id: 'luk-parametryczny', title: { pl: 'Łuk parametryczny', en: 'Parametric arc' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'dlugosc-luku-l4-01',
          skill: 'luk-jawny',
          level: 4,
          prompt: { pl: 'Oblicz długość łuku krzywej $y=\\frac{2}{3}x^{3/2}$ dla $x\\in\\langle 0, 3\\rangle$.', en: 'Find the arc length of $y=\\frac{2}{3}x^{3/2}$ for $x\\in[0,3]$.' },
          answer: '\\frac{14}{3}',
          accept: ['14/3'],
          solution: [
            { pl: '$f\'(x) = x^{1/2}$, więc $1+(f\')^2 = 1+x$.', en: '$f\'(x)=\\sqrt{x}$, so $1+(f\')^2 = 1+x$.' },
            { pl: '$L = \\int_0^3\\sqrt{1+x}\\,dx = \\left[\\frac{2}{3}(1+x)^{3/2}\\right]_0^3$.', en: '$L = \\left[\\frac23(1+x)^{3/2}\\right]_0^3$.' },
            { pl: '$= \\frac23\\left(4^{3/2}-1\\right) = \\frac23(8-1) = \\frac{14}{3}$.', en: '$= \\frac23(8-1) = \\frac{14}{3}$.' },
          ],
          trap: { pl: '$4^{3/2}$ to $8$, nie $6$ — najpierw pierwiastek, potem sześcian.', en: '$4^{3/2}=8$, not $6$ — root first, then cube.' },
        },
        {
          id: 'dlugosc-luku-l5-01',
          skill: 'luk-jawny',
          level: 5,
          prompt: { pl: 'Oblicz długość łuku krzywej $y=\\frac{x^{2}}{4}-\\frac{\\ln x}{2}$ dla $x\\in\\langle 1, e\\rangle$.', en: 'Find the arc length of $y=\\frac{x^{2}}{4}-\\frac{\\ln x}{2}$ for $x\\in[1,e]$.' },
          answer: '\\frac{e^{2}+1}{4}',
          accept: ['\\frac{e^2+1}{4}', '\\frac{e^2-1}{4}+\\frac{1}{2}'],
          solution: [
            { pl: '$f\'(x) = \\frac{x}{2}-\\frac{1}{2x}$.', en: '$f\'(x) = \\frac{x}{2}-\\frac{1}{2x}$.' },
            { pl: '$1+(f\')^2 = 1 + \\frac{x^2}{4} - \\frac12 + \\frac{1}{4x^2} = \\left(\\frac{x}{2}+\\frac{1}{2x}\\right)^2$ — pełny kwadrat.', en: '$1+(f\')^2 = \\left(\\frac{x}{2}+\\frac{1}{2x}\\right)^2$ — a perfect square.' },
            { pl: '$L = \\int_1^e\\left(\\frac{x}{2}+\\frac{1}{2x}\\right)dx = \\left[\\frac{x^2}{4}+\\frac{\\ln x}{2}\\right]_1^e$.', en: '$L = \\left[\\frac{x^2}{4}+\\frac{\\ln x}{2}\\right]_1^e$.' },
            { pl: '$= \\left(\\frac{e^2}{4}+\\frac12\\right) - \\frac14 = \\frac{e^2+1}{4}$.', en: '$= \\frac{e^2+1}{4}$.' },
          ],
          trap: { pl: 'Nierozpoznanie pełnego kwadratu pod pierwiastkiem — bez tego całka wygląda na niewykonalną. Znak środkowego wyrazu zmienia się z $-$ na $+$.', en: 'Missing the perfect square under the root; the middle term flips from $-$ to $+$.' },
        },
        {
          id: 'dlugosc-luku-l6-01',
          skill: 'luk-parametryczny',
          level: 6,
          prompt: { pl: 'Oblicz długość jednego łuku cykloidy $x(t)=t-\\sin t$, $y(t)=1-\\cos t$ dla $t\\in\\langle 0, 2\\pi\\rangle$.', en: 'Find the length of one arch of the cycloid $x(t)=t-\\sin t$, $y(t)=1-\\cos t$, $t\\in[0,2\\pi]$.' },
          answer: '8',
          accept: ['8'],
          solution: [
            { pl: '$x\'=1-\\cos t$, $y\'=\\sin t$, więc $(x\')^2+(y\')^2 = 1-2\\cos t+\\cos^2 t+\\sin^2 t = 2-2\\cos t$.', en: '$(x\')^2+(y\')^2 = 2-2\\cos t$.' },
            { pl: 'Z tożsamości $1-\\cos t = 2\\sin^2\\frac{t}{2}$: $\\sqrt{2-2\\cos t} = 2\\left|\\sin\\frac{t}{2}\\right|$, a na $(0,2\\pi)$ sinus połówki jest nieujemny.', en: '$\\sqrt{2-2\\cos t} = 2\\sin\\frac{t}{2}$ on $[0,2\\pi]$.' },
            { pl: '$L = \\int_0^{2\\pi} 2\\sin\\frac{t}{2}\\,dt = \\left[-4\\cos\\frac{t}{2}\\right]_0^{2\\pi} = 4+4 = 8$.', en: '$L = [-4\\cos\\frac{t}{2}]_0^{2\\pi} = 8$.' },
          ],
          trap: { pl: 'Opuszczenie modułu przy $\\sqrt{\\sin^2}$ bez sprawdzenia znaku — tu akurat wolno, ale trzeba to uzasadnić.', en: 'Dropping the absolute value on $\\sqrt{\\sin^2}$ without checking the sign — here it happens to be legitimate, but it must be justified.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'bryly-obrotowe',
      title: { pl: 'Bryły obrotowe', en: 'Solids of revolution' },
      level: 5,
      prereq: ['calka-oznaczona-podstawy'],
      theory: {
        pl: 'Obrót wokół $Ox$: plaster w punkcie $x$ jest kołem o promieniu $f(x)$, więc '
          + '$V=\\pi\\int_a^b f(x)^2dx$ — metoda plastrów. Obrót wokół $Oy$: pionowy pasek w $x$ zatacza '
          + 'walec o promieniu $x$ i wysokości $f(x)$, stąd $V=2\\pi\\int_a^b x f(x)\\,dx$ — metoda powłok '
          + '(wymaga $a\\ge 0$ i $f\\ge 0$). Pole powierzchni bocznej bierze element długości łuku zamiast '
          + '$dx$: $S=2\\pi\\int f\\sqrt{1+(f\')^2}\\,dx$ wokół $Ox$ — i to jest różnica, którą egzaminy '
          + 'lubią sprawdzać: objętość używa $dx$, pole używa $ds$.',
        en: 'About $Ox$: the slice at $x$ is a disc of radius $f(x)$, so $V=\\pi\\int f^2dx$. About $Oy$: '
          + 'a vertical strip sweeps a shell of radius $x$ and height $f(x)$, so $V=2\\pi\\int xf\\,dx$ '
          + '(needs $a\\ge0$, $f\\ge0$). Surface area replaces $dx$ with the arc element $ds$: '
          + '$S=2\\pi\\int f\\sqrt{1+(f\')^2}dx$ — and that is the distinction exams test: volume uses $dx$, '
          + 'surface uses $ds$.',
      },
      formulas: [
        { id: 'v-ox', tex: 'V = \\pi\\int_{a}^{b} \\big(f(x)\\big)^{2}\\,dx', name: { pl: 'Objętość bryły obrotowej wokół $Ox$', en: 'Volume about $Ox$' }, note: { pl: 'Kwadrat całej funkcji, $\\pi$ przed całką. Metoda plastrów.', en: 'The whole function squared; $\\pi$ outside. The disc method.' }, drill: true },
        { id: 'v-oy', tex: 'V = 2\\pi\\int_{a}^{b} x\\,f(x)\\,dx', name: { pl: 'Objętość bryły obrotowej wokół $Oy$', en: 'Volume about $Oy$' }, note: { pl: 'Metoda powłok: $2\\pi$, i $x$ razy funkcja BEZ kwadratu. Wymaga $0\\le a$ i $f\\ge 0$.', en: 'The shell method: $2\\pi$, and $x$ times the function, NOT squared. Needs $a\\ge0$, $f\\ge0$.' }, drill: true },
        { id: 's-ox', tex: 'S = 2\\pi\\int_{a}^{b} f(x)\\sqrt{1+\\big(f\'(x)\\big)^{2}}\\,dx', name: { pl: 'Pole powierzchni bryły obrotowej wokół $Ox$', en: 'Surface area about $Ox$' }, note: { pl: 'To $2\\pi r\\,ds$: promień razy element łuku. Wymaga $f\\ge 0$.', en: 'It is $2\\pi r\\,ds$: radius times arc element. Needs $f\\ge0$.' }, drill: true },
        { id: 's-oy', tex: 'S = 2\\pi\\int_{a}^{b} x\\sqrt{1+\\big(f\'(x)\\big)^{2}}\\,dx', name: { pl: 'Pole powierzchni bryły obrotowej wokół $Oy$', en: 'Surface area about $Oy$' }, note: { pl: 'Promieniem jest teraz $x$, element łuku bez zmian.', en: 'The radius is now $x$; the arc element is unchanged.' }, drill: true },
        { id: 'pierscienie', tex: 'V = \\pi\\int_{a}^{b}\\Big(R(x)^{2} - r(x)^{2}\\Big)\\,dx', name: { pl: 'Metoda pierścieni', en: 'The washer method' }, note: { pl: 'Bryła z otworem: kwadrat promienia zewnętrznego minus kwadrat wewnętrznego — nie kwadrat różnicy.', en: 'Outer radius squared minus inner squared — not the square of the difference.' }, drill: true },
      ],
      skills: [
        { id: 'objetosc-ox', title: { pl: 'Objętość wokół $Ox$', en: 'Volume about $Ox$' }, levels: [4, 5] },
        { id: 'objetosc-oy', title: { pl: 'Objętość wokół $Oy$', en: 'Volume about $Oy$' }, levels: [5, 6] },
        { id: 'pole-powierzchni', title: { pl: 'Pole powierzchni obrotowej', en: 'Surface of revolution' }, levels: [5, 6] },
        { id: 'wyprowadzenia-bryl', title: { pl: 'Wyprowadzenia klasycznych wzorów', en: 'Deriving the classical formulas' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'bryly-obrotowe-l4-01',
          skill: 'objetosc-ox',
          level: 4,
          prompt: { pl: 'Krzywa $y=\\sqrt{x}$ dla $x\\in\\langle 0,4\\rangle$ obraca się wokół osi $Ox$. Oblicz objętość powstałej bryły.', en: 'The curve $y=\\sqrt{x}$, $x\\in[0,4]$, revolves about $Ox$. Find the volume.' },
          answer: '8\\pi',
          accept: ['8\\pi'],
          solution: [
            { pl: '$V = \\pi\\int_0^4 (\\sqrt{x})^2 dx = \\pi\\int_0^4 x\\,dx$.', en: '$V = \\pi\\int_0^4 x\\,dx$.' },
            { pl: '$= \\pi\\cdot\\frac{16}{2} = 8\\pi$.', en: '$= 8\\pi$.' },
          ],
          trap: { pl: 'Niepodniesienie funkcji do kwadratu — $(\\sqrt{x})^2=x$ upraszcza całkę, ale o tym kroku trzeba pamiętać.', en: 'Forgetting to square the function.' },
        },
        {
          id: 'bryly-obrotowe-l5-01',
          skill: 'wyprowadzenia-bryl',
          level: 5,
          prompt: { pl: 'Wyprowadź wzór na objętość kuli o promieniu $R$, obracając półokrąg $f(x)=\\sqrt{R^{2}-x^{2}}$ wokół osi $Ox$. Podaj wynik.', en: 'Derive the volume of a ball of radius $R$ by revolving $f(x)=\\sqrt{R^{2}-x^{2}}$ about $Ox$.' },
          answer: '\\frac{4}{3}\\pi R^{3}',
          accept: ['\\frac43\\pi R^3'],
          solution: [
            { pl: '$V = \\pi\\int_{-R}^{R}\\big(R^2-x^2\\big)dx$.', en: '$V = \\pi\\int_{-R}^{R}(R^2-x^2)dx$.' },
            { pl: 'Z parzystości: $2\\pi\\int_0^R(R^2-x^2)dx = 2\\pi\\left[R^2x-\\frac{x^3}{3}\\right]_0^R$.', en: 'By symmetry $= 2\\pi\\left[R^2x-\\frac{x^3}{3}\\right]_0^R$.' },
            { pl: '$= 2\\pi\\left(R^3-\\frac{R^3}{3}\\right) = 2\\pi\\cdot\\frac{2R^3}{3} = \\frac{4}{3}\\pi R^3$.', en: '$= \\frac43\\pi R^3$.' },
          ],
          trap: { pl: 'Granice od $0$ do $R$ bez podwojenia — wychodzi półkula.', en: 'Integrating $0$ to $R$ without doubling gives a hemisphere.' },
        },
        {
          id: 'bryly-obrotowe-l5-02',
          skill: 'objetosc-oy',
          level: 5,
          prompt: { pl: 'Obszar pod krzywą $y=x^{2}$ dla $x\\in\\langle 0,2\\rangle$ obraca się wokół osi $Oy$. Oblicz objętość bryły metodą powłok.', en: 'The region under $y=x^{2}$, $x\\in[0,2]$, revolves about $Oy$. Find the volume by shells.' },
          answer: '8\\pi',
          accept: ['8\\pi'],
          solution: [
            { pl: '$V = 2\\pi\\int_0^2 x\\cdot x^2\\,dx = 2\\pi\\int_0^2 x^3 dx$.', en: '$V = 2\\pi\\int_0^2 x^3dx$.' },
            { pl: '$= 2\\pi\\cdot\\frac{16}{4} = 8\\pi$.', en: '$= 8\\pi$.' },
          ],
          trap: { pl: 'Użycie wzoru z kwadratem (dla $Ox$) — wokół $Oy$ funkcja wchodzi bez kwadratu, za to z czynnikiem $x$.', en: 'Using the squared ($Ox$) formula — about $Oy$ the function enters unsquared, with a factor $x$.' },
        },
        {
          id: 'bryly-obrotowe-l6-01',
          skill: 'pole-powierzchni',
          level: 6,
          prompt: { pl: 'Wyprowadź wzór na pole powierzchni kuli, obracając $f(x)=\\sqrt{R^{2}-x^{2}}$ wokół $Ox$. Podaj wynik.', en: 'Derive the surface area of a sphere by revolving $f(x)=\\sqrt{R^{2}-x^{2}}$ about $Ox$.' },
          answer: '4\\pi R^{2}',
          accept: ['4\\pi R^2'],
          solution: [
            { pl: '$f\'(x) = \\frac{-x}{\\sqrt{R^2-x^2}}$, więc $1+(f\')^2 = \\frac{R^2}{R^2-x^2}$.', en: '$1+(f\')^2 = \\frac{R^2}{R^2-x^2}$.' },
            { pl: '$f(x)\\sqrt{1+(f\')^2} = \\sqrt{R^2-x^2}\\cdot\\frac{R}{\\sqrt{R^2-x^2}} = R$ — stała!', en: '$f\\sqrt{1+(f\')^2} = R$ — constant!' },
            { pl: '$S = 2\\pi\\int_{-R}^{R} R\\,dx = 2\\pi R\\cdot 2R = 4\\pi R^2$.', en: '$S = 2\\pi R\\cdot 2R = 4\\pi R^2$.' },
          ],
          trap: { pl: 'Rachunek na $1+(f\')^2$ bez wspólnego mianownika — upraszczające się pierwiastki to sedno tego wyprowadzenia.', en: 'Not combining $1+(f\')^2$ over a common denominator — the cancelling roots are the whole point.' },
        },
        {
          id: 'bryly-obrotowe-l6-02',
          skill: 'objetosc-ox',
          level: 6,
          prompt: { pl: 'Obszar między $y=x$ a $y=x^{2}$ dla $x\\in\\langle 0,1\\rangle$ obraca się wokół osi $Ox$. Oblicz objętość powstałej bryły.', en: 'The region between $y=x$ and $y=x^{2}$, $x\\in[0,1]$, revolves about $Ox$. Find the volume.' },
          answer: '\\frac{2\\pi}{15}',
          accept: ['\\frac{2}{15}\\pi'],
          solution: [
            { pl: 'Na $(0,1)$ prosta $y=x$ leży wyżej. Metoda pierścieni: $R=x$, $r=x^2$.', en: 'On $(0,1)$ the line is above. Washers: $R=x$, $r=x^2$.' },
            { pl: '$V = \\pi\\int_0^1\\big(x^2 - x^4\\big)dx = \\pi\\left(\\frac13-\\frac15\\right)$.', en: '$V = \\pi(\\frac13-\\frac15)$.' },
            { pl: '$= \\pi\\cdot\\frac{2}{15} = \\frac{2\\pi}{15}$.', en: '$= \\frac{2\\pi}{15}$.' },
          ],
          trap: { pl: 'Policzenie $\\pi\\int(x-x^2)^2dx$ — kwadrat różnicy zamiast różnicy kwadratów to inna, mniejsza bryła.', en: 'Computing $\\pi\\int(x-x^2)^2dx$ — the square of the difference is a different, smaller solid.' },
        },
      ],
    },
  ],
};
