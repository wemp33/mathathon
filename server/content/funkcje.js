// Funkcje — matura rozszerzona i dalej.
export default {
  id: 'funkcje',
  track: 'matura',
  order: 30,
  title: { pl: 'Funkcje', en: 'Functions' },
  blurb: {
    pl: 'Od definicji i dziedziny, przez funkcję liniową, kwadratową, wykładniczą, logarytmiczną i wymierną, po pełny warsztat przekształceń wykresów.',
    en: 'From the definition and the domain, through linear, quadratic, exponential, logarithmic and rational functions, to the full toolkit of graph transformations.',
  },
  topics: [
    /* ═══ 1 ═══════════════════════════════════════════════════════════════ */
    {
      id: 'funkcja-pojecia',
      title: { pl: 'Funkcja i jej własności', en: 'Functions and their properties' },
      level: 2,
      prereq: [],
      theory: {
        pl: 'Funkcja $f\\colon X\\to Y$ przyporządkowuje każdemu argumentowi ze zbioru $X$ dokładnie jedną wartość. Dziedzina $D_f$ to zbiór wszystkich dopuszczalnych argumentów — przy wzorze wyznaczamy ją z warunków: mianownik różny od zera, wyrażenie pod pierwiastkiem parzystego stopnia nieujemne, liczba logarytmowana dodatnia, podstawa logarytmu dodatnia i różna od $1$. Zbiór wartości $ZW_f$ to zbiór wszystkich $y$, dla których równanie $f(x)=y$ ma rozwiązanie w dziedzinie. Miejsce zerowe to argument $x_0\\in D_f$ spełniający $f(x_0)=0$ — punkt przecięcia wykresu z osią $OX$. Funkcja jest rosnąca w przedziale, gdy większemu argumentowi odpowiada większa wartość; monotoniczność zawsze orzekamy w przedziale, nigdy w sumie przedziałów. Funkcja jest parzysta, gdy $f(-x)=f(x)$ (wykres symetryczny względem osi $OY$), nieparzysta, gdy $f(-x)=-f(x)$ (wykres symetryczny względem początku układu); warunkiem koniecznym jest symetria dziedziny względem zera.',
        en: 'A function $f\\colon X\\to Y$ assigns to every argument of $X$ exactly one value. The domain $D_f$ is the set of admissible arguments — from a formula we read it off from the conditions: denominator nonzero, expression under an even root nonnegative, the argument of a logarithm positive, its base positive and different from $1$. The range $ZW_f$ is the set of all $y$ for which $f(x)=y$ has a solution in the domain. A zero is an argument $x_0\\in D_f$ with $f(x_0)=0$ — where the graph meets the $OX$ axis. A function is increasing on an interval when a larger argument gives a larger value; monotonicity is always stated on an interval, never on a union of intervals. A function is even when $f(-x)=f(x)$ (graph symmetric about $OY$), odd when $f(-x)=-f(x)$ (graph symmetric about the origin); a necessary condition is that the domain be symmetric about zero.',
      },
      formulas: [
        {
          id: 'warunki-dziedziny',
          tex: '\\frac{1}{g(x)}\\colon g(x)\\neq 0,\\qquad \\sqrt{h(x)}\\colon h(x)\\ge 0,\\qquad \\log_{a}w(x)\\colon w(x)>0',
          name: { pl: 'Warunki dziedziny', en: 'Domain conditions' },
          note: {
            pl: 'Warunki składamy koniunkcją i przecinamy przedziały. Pierwiastek nieparzystego stopnia nie nakłada żadnego warunku.',
            en: 'Conditions are joined by conjunction and the intervals intersected. An odd-degree root imposes no condition.',
          },
          drill: true,
        },
        {
          id: 'miejsce-zerowe-def',
          tex: 'x_{0}\\in D_{f}\\ \\wedge\\ f(x_{0})=0',
          name: { pl: 'Miejsce zerowe', en: 'Zero of a function' },
          note: {
            pl: 'Pierwiastek licznika, który wypada z dziedziny, nie jest miejscem zerowym — to najczęściej tracony punkt.',
            en: 'A root of the numerator excluded from the domain is not a zero — the most commonly lost mark.',
          },
          drill: true,
        },
        {
          id: 'monotonicznosc-def',
          tex: 'f\\ \\text{rosnąca w } I \\iff \\forall\\, x_{1},x_{2}\\in I\\colon x_{1}<x_{2}\\Rightarrow f(x_{1})<f(x_{2})',
          name: { pl: 'Definicja monotoniczności', en: 'Definition of monotonicity' },
          note: {
            pl: 'W dowodach wygodniej badać znak różnicy $f(x_2)-f(x_1)$ albo ilorazu $\\frac{f(x_2)-f(x_1)}{x_2-x_1}$.',
            en: 'In proofs it is easier to test the sign of the difference $f(x_2)-f(x_1)$ or of the quotient $\\frac{f(x_2)-f(x_1)}{x_2-x_1}$.',
          },
          drill: true,
        },
        {
          id: 'funkcja-parzysta',
          tex: '\\forall\\, x\\in D_{f}\\colon -x\\in D_{f}\\ \\wedge\\ f(-x)=f(x)',
          name: { pl: 'Funkcja parzysta', en: 'Even function' },
          note: {
            pl: 'Najpierw sprawdzamy symetrię dziedziny — funkcja o dziedzinie $\\langle 0,\\infty)$ nie może być parzysta.',
            en: 'Check the symmetry of the domain first — a function with domain $\\langle 0,\\infty)$ cannot be even.',
          },
          drill: true,
        },
        {
          id: 'funkcja-nieparzysta',
          tex: '\\forall\\, x\\in D_{f}\\colon -x\\in D_{f}\\ \\wedge\\ f(-x)=-f(x)',
          name: { pl: 'Funkcja nieparzysta', en: 'Odd function' },
          note: {
            pl: 'Jeśli $0\\in D_f$ i funkcja jest nieparzysta, to $f(0)=0$. Większość funkcji nie jest ani parzysta, ani nieparzysta.',
            en: 'If $0\\in D_f$ and the function is odd then $f(0)=0$. Most functions are neither even nor odd.',
          },
          drill: true,
        },
        {
          id: 'zbior-wartosci-metoda',
          tex: 'y\\in ZW_{f}\\iff \\text{równanie } f(x)=y \\text{ ma rozwiązanie } x\\in D_{f}',
          name: { pl: 'Zbiór wartości — kryterium', en: 'Range — the criterion' },
          note: {
            pl: 'Dla funkcji wymiernej prowadzi to do równania kwadratowego względem $x$ z parametrem $y$ i warunku $\\Delta\\ge 0$.',
            en: 'For a rational function this leads to a quadratic in $x$ with parameter $y$ and the condition $\\Delta\\ge 0$.',
          },
          drill: true,
        },
        {
          id: 'funkcja-ograniczona',
          tex: 'f \\text{ ograniczona} \\iff \\exists\\, m,M\\ \\forall\\, x\\in D_{f}\\colon m\\le f(x)\\le M',
          name: { pl: 'Ograniczoność funkcji', en: 'Boundedness' },
          note: {
            pl: 'Wartość najmniejsza to element $ZW_f$; kres dolny może nie być osiągany, np. dla $f(x)=\\frac{1}{x^2+1}$ na $\\mathbb{R}$ kres dolny $0$ nie należy do $ZW_f$.',
            en: 'A minimum belongs to $ZW_f$; the infimum need not be attained — for $f(x)=\\frac{1}{x^2+1}$ on $\\mathbb{R}$ the infimum $0$ is not in $ZW_f$.',
          },
          drill: false,
        },
      ],
      skills: [
        { id: 'wyznacz-dziedzine', title: { pl: 'Wyznaczanie dziedziny', en: 'Finding the domain' }, levels: [2, 3, 5] },
        { id: 'miejsca-zerowe-fn', title: { pl: 'Miejsca zerowe', en: 'Zeros of a function' }, levels: [2, 3, 4] },
        { id: 'zbior-wartosci-fn', title: { pl: 'Zbiór wartości', en: 'Range of a function' }, levels: [3, 4, 5, 6] },
        { id: 'parzystosc-badanie', title: { pl: 'Parzystość i nieparzystość', en: 'Even and odd functions' }, levels: [3, 4] },
        { id: 'monotonicznosc-badanie', title: { pl: 'Badanie monotoniczności', en: 'Testing monotonicity' }, levels: [3, 4, 5] },
        { id: 'odczyt-z-wykresu', title: { pl: 'Odczyt własności z wykresu', en: 'Reading properties off a graph' }, levels: [2, 3] },
      ],
      problems: [
        {
          id: 'funkcja-pojecia-l2-01',
          skill: 'wyznacz-dziedzine',
          level: 2,
          prompt: {
            pl: 'Wyznacz dziedzinę funkcji $f(x)=\\dfrac{\\sqrt{x+3}}{x^{2}-4}$.',
            en: 'Find the domain of $f(x)=\\dfrac{\\sqrt{x+3}}{x^{2}-4}$.',
          },
          answer: '\\langle-3,-2)\\cup(-2,2)\\cup(2,+\\infty)',
          accept: ['[-3,-2)\\cup(-2,2)\\cup(2,+\\infty)', '\\langle-3,-2)\\cup(-2,2)\\cup(2,\\infty)'],
          solution: [
            { pl: 'Pierwiastek: $x+3\\ge 0$, czyli $x\\ge -3$.', en: 'The root requires $x+3\\ge 0$, i.e. $x\\ge -3$.' },
            { pl: 'Mianownik: $x^{2}-4\\neq 0$, czyli $x\\neq -2$ i $x\\neq 2$.', en: 'The denominator requires $x^{2}-4\\neq 0$, i.e. $x\\neq -2$ and $x\\neq 2$.' },
            { pl: 'Część wspólna: $D_f=\\langle-3,-2)\\cup(-2,2)\\cup(2,+\\infty)$.', en: 'Intersecting: $D_f=\\langle-3,-2)\\cup(-2,2)\\cup(2,+\\infty)$.' },
          ],
          trap: {
            pl: 'Wyrzucenie tylko $x=2$ — mianownik zeruje się także dla $x=-2$, które leży już w przedziale $x\\ge-3$.',
            en: 'Excluding only $x=2$ — the denominator also vanishes at $x=-2$, which already lies in $x\\ge-3$.',
          },
        },
        {
          id: 'funkcja-pojecia-l3-02',
          skill: 'wyznacz-dziedzine',
          level: 3,
          prompt: {
            pl: 'Wyznacz dziedzinę funkcji $f(x)=\\log_{2}(x^{2}-5x+6)+\\dfrac{1}{\\sqrt{4-x}}$.',
            en: 'Find the domain of $f(x)=\\log_{2}(x^{2}-5x+6)+\\dfrac{1}{\\sqrt{4-x}}$.',
          },
          answer: '(-\\infty,2)\\cup(3,4)',
          accept: [],
          solution: [
            { pl: 'Logarytm: $x^{2}-5x+6>0$, pierwiastki $2$ i $3$, więc $x<2$ lub $x>3$.', en: 'Logarithm: $x^{2}-5x+6>0$, roots $2$ and $3$, so $x<2$ or $x>3$.' },
            { pl: 'Pierwiastek w mianowniku: $4-x>0$ (ostro, bo dzielimy), czyli $x<4$.', en: 'The root in the denominator: $4-x>0$ (strict, since we divide), i.e. $x<4$.' },
            { pl: 'Część wspólna: $D_f=(-\\infty,2)\\cup(3,4)$.', en: 'Intersecting: $D_f=(-\\infty,2)\\cup(3,4)$.' },
          ],
          trap: {
            pl: 'Zapisanie $4-x\\ge 0$ — pierwiastek stoi w mianowniku, więc nierówność musi być ostra.',
            en: 'Writing $4-x\\ge 0$ — the root sits in a denominator, so the inequality must be strict.',
          },
        },
        {
          id: 'funkcja-pojecia-l3-03',
          skill: 'miejsca-zerowe-fn',
          level: 3,
          prompt: {
            pl: 'Wyznacz miejsca zerowe funkcji $f(x)=\\dfrac{x^{2}-9}{x^{2}-3x}$.',
            en: 'Find the zeros of $f(x)=\\dfrac{x^{2}-9}{x^{2}-3x}$.',
          },
          answer: 'x=-3',
          accept: ['-3', '\\{-3\\}'],
          solution: [
            { pl: 'Dziedzina: $x^{2}-3x=x(x-3)\\neq 0$, więc $x\\neq 0$ i $x\\neq 3$.', en: 'Domain: $x^{2}-3x=x(x-3)\\neq 0$, so $x\\neq 0$ and $x\\neq 3$.' },
            { pl: 'Licznik: $x^{2}-9=0$ daje $x=-3$ lub $x=3$.', en: 'Numerator: $x^{2}-9=0$ gives $x=-3$ or $x=3$.' },
            { pl: 'Wartość $x=3$ odpada, bo nie należy do dziedziny. Jedyne miejsce zerowe to $x=-3$.', en: 'The value $x=3$ drops out — it is not in the domain. The only zero is $x=-3$.' },
          ],
          trap: {
            pl: 'Skrócenie ułamka do $\\frac{x+3}{x}$ przed wypisaniem dziedziny i podanie $x=3$ jako miejsca zerowego.',
            en: 'Cancelling to $\\frac{x+3}{x}$ before stating the domain and reporting $x=3$ as a zero.',
          },
        },
        {
          id: 'funkcja-pojecia-l3-04',
          skill: 'parzystosc-badanie',
          level: 3,
          prompt: {
            pl: 'Zbadaj parzystość funkcji $f(x)=\\dfrac{x^{3}-x}{x^{2}+1}$.',
            en: 'Determine whether $f(x)=\\dfrac{x^{3}-x}{x^{2}+1}$ is even or odd.',
          },
          answer: '\\text{funkcja nieparzysta}',
          accept: ['\\text{nieparzysta}', 'f(-x)=-f(x)'],
          solution: [
            { pl: 'Dziedziną jest $\\mathbb{R}$ (bo $x^{2}+1>0$), więc jest ona symetryczna względem zera.', en: 'The domain is $\\mathbb{R}$ (since $x^{2}+1>0$), hence symmetric about zero.' },
            { pl: '$f(-x)=\\dfrac{-x^{3}+x}{x^{2}+1}=-\\dfrac{x^{3}-x}{x^{2}+1}=-f(x)$.', en: '$f(-x)=\\dfrac{-x^{3}+x}{x^{2}+1}=-\\dfrac{x^{3}-x}{x^{2}+1}=-f(x)$.' },
            { pl: 'Zatem funkcja jest nieparzysta, jej wykres jest symetryczny względem początku układu.', en: 'So the function is odd; its graph is symmetric about the origin.' },
          ],
          trap: {
            pl: 'Podstawienie $-x$ tylko w liczniku albo pomylenie znaku przy $(-x)^{3}=-x^{3}$.',
            en: 'Substituting $-x$ only in the numerator, or losing the sign in $(-x)^{3}=-x^{3}$.',
          },
        },
        {
          id: 'funkcja-pojecia-l3-05',
          skill: 'zbior-wartosci-fn',
          level: 3,
          prompt: {
            pl: 'Wyznacz zbiór wartości funkcji $f(x)=\\dfrac{3}{x^{2}+1}$ określonej dla $x\\in\\mathbb{R}$.',
            en: 'Find the range of $f(x)=\\dfrac{3}{x^{2}+1}$ defined for $x\\in\\mathbb{R}$.',
          },
          answer: '(0,3\\rangle',
          accept: ['(0,3]'],
          solution: [
            { pl: 'Dla każdego $x$ mamy $x^{2}+1\\ge 1$, przy czym równość zachodzi tylko dla $x=0$.', en: 'For every $x$ we have $x^{2}+1\\ge 1$, with equality only at $x=0$.' },
            { pl: 'Funkcja $t\\mapsto \\frac{3}{t}$ jest malejąca na $(0,\\infty)$, więc z $t\\ge 1$ wynika $0<\\frac{3}{t}\\le 3$.', en: 'The map $t\\mapsto \\frac{3}{t}$ is decreasing on $(0,\\infty)$, so $t\\ge 1$ gives $0<\\frac{3}{t}\\le 3$.' },
            { pl: 'Wartość $3$ jest osiągana ($x=0$), zera funkcja nie osiąga: $ZW_f=(0,3\\rangle$.', en: 'The value $3$ is attained (at $x=0$), zero never is: $ZW_f=(0,3\\rangle$.' },
          ],
          trap: {
            pl: 'Domknięcie przedziału w zerze — $\\frac{3}{x^{2}+1}$ nigdy nie przyjmuje wartości $0$, choć się do niej zbliża.',
            en: 'Closing the interval at zero — $\\frac{3}{x^{2}+1}$ never equals $0$, it only tends to it.',
          },
        },
        {
          id: 'funkcja-pojecia-l4-06',
          skill: 'zbior-wartosci-fn',
          level: 4,
          prompt: {
            pl: 'Wyznacz dziedzinę i zbiór wartości funkcji $f(x)=\\sqrt{x^{2}-6x+8}$.',
            en: 'Find the domain and the range of $f(x)=\\sqrt{x^{2}-6x+8}$.',
          },
          answer: 'D=(-\\infty,2\\rangle\\cup\\langle4,+\\infty),\\ ZW=\\langle0,+\\infty)',
          accept: ['D=(-\\infty,2]\\cup[4,+\\infty),\\ ZW=[0,+\\infty)'],
          solution: [
            { pl: 'Warunek: $x^{2}-6x+8\\ge 0$; pierwiastki trójmianu to $2$ i $4$, ramiona w górę, więc $x\\le 2$ lub $x\\ge 4$.', en: 'Condition: $x^{2}-6x+8\\ge 0$; the roots are $2$ and $4$, the parabola opens up, so $x\\le 2$ or $x\\ge 4$.' },
            { pl: 'Na tej dziedzinie wyrażenie $x^{2}-6x+8$ przyjmuje wszystkie wartości z $\\langle 0,+\\infty)$ (jest ciągłe, równe $0$ w $x=2$ i nieograniczone).', en: 'On this domain $x^{2}-6x+8$ takes every value in $\\langle 0,+\\infty)$ (it is continuous, equals $0$ at $x=2$ and is unbounded).' },
            { pl: 'Pierwiastek zachowuje ten zbiór: $ZW_f=\\langle 0,+\\infty)$.', en: 'The square root preserves this set: $ZW_f=\\langle 0,+\\infty)$.' },
          ],
          trap: {
            pl: 'Liczenie zbioru wartości z wierzchołka trójmianu ($q=-1$) — wierzchołek leży poza dziedziną funkcji $f$.',
            en: 'Reading the range from the vertex of the quadratic ($q=-1$) — the vertex lies outside the domain of $f$.',
          },
        },
        {
          id: 'funkcja-pojecia-l4-07',
          skill: 'monotonicznosc-badanie',
          level: 4,
          prompt: {
            pl: 'Wykaż, że funkcja $f(x)=x^{3}+x$ jest rosnąca w zbiorze $\\mathbb{R}$.',
            en: 'Prove that $f(x)=x^{3}+x$ is increasing on $\\mathbb{R}$.',
          },
          answer: 'f(x_{2})-f(x_{1})=(x_{2}-x_{1})\\left(x_{1}^{2}+x_{1}x_{2}+x_{2}^{2}+1\\right)>0',
          accept: ['(x_2-x_1)(x_1^2+x_1x_2+x_2^2+1)>0'],
          solution: [
            { pl: 'Weźmy dowolne $x_{1}<x_{2}$ i policzmy różnicę: $f(x_{2})-f(x_{1})=x_{2}^{3}-x_{1}^{3}+x_{2}-x_{1}$.', en: 'Take arbitrary $x_{1}<x_{2}$ and compute the difference: $f(x_{2})-f(x_{1})=x_{2}^{3}-x_{1}^{3}+x_{2}-x_{1}$.' },
            { pl: 'Ze wzoru skróconego mnożenia $x_{2}^{3}-x_{1}^{3}=(x_{2}-x_{1})(x_{2}^{2}+x_{1}x_{2}+x_{1}^{2})$, więc różnica równa się $(x_{2}-x_{1})\\left(x_{1}^{2}+x_{1}x_{2}+x_{2}^{2}+1\\right)$.', en: 'By the difference-of-cubes identity $x_{2}^{3}-x_{1}^{3}=(x_{2}-x_{1})(x_{2}^{2}+x_{1}x_{2}+x_{1}^{2})$, so the difference equals $(x_{2}-x_{1})\\left(x_{1}^{2}+x_{1}x_{2}+x_{2}^{2}+1\\right)$.' },
            { pl: 'Drugi czynnik jest dodatni, bo $x_{1}^{2}+x_{1}x_{2}+x_{2}^{2}=\\left(x_{1}+\\frac{x_{2}}{2}\\right)^{2}+\\frac{3}{4}x_{2}^{2}\\ge 0$, a dodajemy jeszcze $1$. Pierwszy czynnik jest dodatni z założenia, więc $f(x_{2})>f(x_{1})$.', en: 'The second factor is positive because $x_{1}^{2}+x_{1}x_{2}+x_{2}^{2}=\\left(x_{1}+\\frac{x_{2}}{2}\\right)^{2}+\\frac{3}{4}x_{2}^{2}\\ge 0$, and we add $1$. The first factor is positive by assumption, so $f(x_{2})>f(x_{1})$.' },
          ],
          trap: {
            pl: 'Sprawdzenie kilku par liczb zamiast dowodu dla dowolnych $x_1<x_2$ — przykłady nie dowodzą monotoniczności.',
            en: 'Checking a few pairs of numbers instead of proving it for arbitrary $x_1<x_2$ — examples prove nothing.',
          },
        },
        {
          id: 'funkcja-pojecia-l5-08',
          skill: 'zbior-wartosci-fn',
          level: 5,
          prompt: {
            pl: 'Wyznacz zbiór wartości funkcji $f(x)=\\dfrac{x^{2}+x+1}{x^{2}+1}$.',
            en: 'Find the range of $f(x)=\\dfrac{x^{2}+x+1}{x^{2}+1}$.',
          },
          answer: '\\left\\langle\\frac{1}{2},\\frac{3}{2}\\right\\rangle',
          accept: ['\\left[\\frac{1}{2},\\frac{3}{2}\\right]'],
          solution: [
            { pl: 'Szukamy tych $y$, dla których równanie $\\frac{x^{2}+x+1}{x^{2}+1}=y$ ma rozwiązanie. Mianownik nie znika, więc $x^{2}(y-1)-x+(y-1)=0$.', en: 'We look for those $y$ for which $\\frac{x^{2}+x+1}{x^{2}+1}=y$ is solvable. The denominator never vanishes, so $x^{2}(y-1)-x+(y-1)=0$.' },
            { pl: 'Dla $y=1$ równanie redukuje się do $-x=0$, więc $x=0$ i wartość $1$ jest przyjmowana.', en: 'For $y=1$ the equation reduces to $-x=0$, so $x=0$ and the value $1$ is attained.' },
            { pl: 'Dla $y\\neq 1$ to równanie kwadratowe: $\\Delta=1-4(y-1)^{2}\\ge 0$, czyli $|y-1|\\le\\frac{1}{2}$.', en: 'For $y\\neq 1$ it is a quadratic: $\\Delta=1-4(y-1)^{2}\\ge 0$, i.e. $|y-1|\\le\\frac{1}{2}$.' },
            { pl: 'Stąd $ZW_f=\\left\\langle\\frac{1}{2},\\frac{3}{2}\\right\\rangle$.', en: 'Hence $ZW_f=\\left\\langle\\frac{1}{2},\\frac{3}{2}\\right\\rangle$.' },
          ],
          trap: {
            pl: 'Pominięcie przypadku $y=1$, w którym równanie przestaje być kwadratowe, i liczenie $\\Delta$ tak, jakby zawsze było.',
            en: 'Ignoring the case $y=1$, where the equation stops being quadratic, and computing $\\Delta$ as if it always were.',
          },
        },
        {
          id: 'funkcja-pojecia-l5-09',
          skill: 'wyznacz-dziedzine',
          level: 5,
          prompt: {
            pl: 'Wyznacz dziedzinę funkcji $f(x)=\\log_{x-1}\\left(9-x^{2}\\right)$.',
            en: 'Find the domain of $f(x)=\\log_{x-1}\\left(9-x^{2}\\right)$.',
          },
          answer: '(1,2)\\cup(2,3)',
          accept: [],
          solution: [
            { pl: 'Podstawa: $x-1>0$ i $x-1\\neq 1$, czyli $x>1$ i $x\\neq 2$.', en: 'Base: $x-1>0$ and $x-1\\neq 1$, i.e. $x>1$ and $x\\neq 2$.' },
            { pl: 'Liczba logarytmowana: $9-x^{2}>0$, czyli $-3<x<3$.', en: 'Argument: $9-x^{2}>0$, i.e. $-3<x<3$.' },
            { pl: 'Część wspólna: $D_f=(1,2)\\cup(2,3)$.', en: 'Intersecting: $D_f=(1,2)\\cup(2,3)$.' },
          ],
          trap: {
            pl: 'Zapomnienie warunku $x-1\\neq 1$ — podstawa logarytmu nie może być równa $1$.',
            en: 'Forgetting $x-1\\neq 1$ — the base of a logarithm cannot equal $1$.',
          },
        },
        {
          id: 'funkcja-pojecia-l6-10',
          skill: 'zbior-wartosci-fn',
          level: 6,
          prompt: {
            pl: 'Wyznacz zbiór wartości funkcji $f(x)=\\dfrac{x^{2}-4}{|x|-2}$.',
            en: 'Find the range of $f(x)=\\dfrac{x^{2}-4}{|x|-2}$.',
          },
          answer: '\\langle2,4)\\cup(4,+\\infty)',
          accept: ['[2,4)\\cup(4,+\\infty)'],
          solution: [
            { pl: 'Dziedzina: $|x|\\neq 2$, czyli $x\\neq 2$ i $x\\neq -2$.', en: 'Domain: $|x|\\neq 2$, i.e. $x\\neq 2$ and $x\\neq -2$.' },
            { pl: 'Ponieważ $x^{2}=|x|^{2}$, mamy $f(x)=\\frac{|x|^{2}-4}{|x|-2}=|x|+2$ dla $|x|\\neq 2$.', en: 'Since $x^{2}=|x|^{2}$, we get $f(x)=\\frac{|x|^{2}-4}{|x|-2}=|x|+2$ for $|x|\\neq 2$.' },
            { pl: '$|x|$ przebiega $\\langle 0,+\\infty)$ z wyłączeniem $2$, więc $|x|+2$ przebiega $\\langle 2,+\\infty)$ z wyłączeniem $4$.', en: '$|x|$ runs over $\\langle 0,+\\infty)$ except $2$, so $|x|+2$ runs over $\\langle 2,+\\infty)$ except $4$.' },
            { pl: 'Ostatecznie $ZW_f=\\langle2,4)\\cup(4,+\\infty)$.', en: 'Finally $ZW_f=\\langle2,4)\\cup(4,+\\infty)$.' },
          ],
          trap: {
            pl: 'Skrócenie do $x+2$ (bez wartości bezwzględnej) i podanie $ZW=\\mathbb{R}\\setminus\\{4\\}$; gubi się wtedy zarówno minimum $2$ w $x=0$, jak i luka w $4$.',
            en: 'Cancelling to $x+2$ (dropping the absolute value) and answering $ZW=\\mathbb{R}\\setminus\\{4\\}$; that loses both the minimum $2$ at $x=0$ and the gap at $4$.',
          },
        },
      ],
    },
    // __NEXT_TOPIC__
  ],
};
