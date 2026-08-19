// Całki nieoznaczone. The sixteen-formula table is the user's own course sheet,
// in its order. Every one of them is the derivative table read backwards, which
// is worth saying out loud: there is nothing new to memorise here, only a
// direction to reverse.
export default {
  id: 'calki-nieoznaczone',
  track: 'calculus',
  order: 250,
  title: { pl: 'Całki nieoznaczone', en: 'Indefinite integrals' },
  blurb: {
    pl: 'Tablica całek, podstawienie, całkowanie przez części i rozkład na ułamki proste.',
    en: 'The table of integrals, substitution, integration by parts and partial fractions.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'tablica-calek',
      title: { pl: 'Tablica całek', en: 'The table of integrals' },
      level: 3,
      prereq: ['tablica-pochodnych'],
      theory: {
        pl: 'Funkcja $F$ jest pierwotną funkcji $f$, gdy $F\' = f$. Całka nieoznaczona to zbiór '
          + '\\emph{wszystkich} pierwotnych, stąd $+C$: dwie pierwotne tej samej funkcji różnią się o stałą, '
          + 'bo ich różnica ma pochodną zerową. Pominięcie $+C$ nie jest kosmetyczną niedokładnością — '
          + 'to podanie jednej funkcji zamiast całej rodziny. Całkowanie jest liniowe: '
          + '$\\int(af+bg) = a\\int f + b\\int g$, ale nie ma reguły na iloczyn ani na iloraz — '
          + 'i to jest źródło całej trudności działu.',
        en: 'A function $F$ is an antiderivative of $f$ when $F\'=f$. The indefinite integral is the set of '
          + '*all* antiderivatives, hence $+C$: two antiderivatives of the same function differ by a constant, '
          + 'since their difference has zero derivative. Dropping $+C$ is not a cosmetic slip — it gives one '
          + 'function where a whole family was asked for. Integration is linear, but there is no product rule '
          + 'and no quotient rule, which is where all the difficulty comes from.',
      },
      formulas: [
        { id: 'i-dx', tex: '\\int dx = x + C', name: { pl: 'Całka z jedynki', en: 'Integral of 1' }, note: { pl: 'Podstawa wszystkiego — sprawdzenie: $(x+C)\'=1$.', en: 'Check: $(x+C)\'=1$.' }, drill: true },
        { id: 'i-xn', tex: '\\int x^{n}\\,dx = \\frac{1}{n+1}x^{n+1} + C,\\quad n \\neq -1', name: { pl: 'Całka z potęgi', en: 'Power rule for integrals' }, note: { pl: 'Zastrzeżenie $n\\neq-1$ jest istotne: dla $n=-1$ mianownik byłby zerem, i tam wchodzi logarytm.', en: 'The condition $n\\neq-1$ matters: the denominator would vanish, and that case is the logarithm.' }, drill: true },
        { id: 'i-x', tex: '\\int x\\,dx = \\frac{1}{2}x^{2} + C', name: { pl: 'Całka z $x$', en: 'Integral of $x$' }, note: { pl: 'Przypadek $n=1$ powyższego wzoru.', en: 'The case $n=1$ above.' }, drill: true },
        { id: 'i-inv', tex: '\\int \\frac{1}{x}\\,dx = \\ln|x| + C', name: { pl: 'Całka z odwrotności', en: 'Integral of $1/x$' }, note: { pl: 'Wartość bezwzględna jest konieczna — dziedziną jest $\\mathbb{R}\\setminus\\{0\\}$, a $\\ln$ przyjmuje tylko argumenty dodatnie.', en: 'The absolute value is required — the domain excludes zero and $\\ln$ takes only positive arguments.' }, drill: true },
        { id: 'i-ax', tex: '\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a} + C', name: { pl: 'Całka z funkcji wykładniczej', en: 'Integral of $a^x$' }, note: { pl: 'Dzielimy przez $\\ln a$, bo różniczkując mnożyliśmy. Wymaga $a>0$, $a\\neq 1$.', en: 'We divide by $\\ln a$ because differentiating multiplied by it.' }, drill: true },
        { id: 'i-ex', tex: '\\int e^{x}\\,dx = e^{x} + C', name: { pl: 'Całka z $e^x$', en: 'Integral of $e^x$' }, note: { pl: 'Jedyna funkcja, która przy całkowaniu się nie zmienia.', en: 'The only function unchanged by integration.' }, drill: true },
        { id: 'i-sin', tex: '\\int \\sin x\\,dx = -\\cos x + C', name: { pl: 'Całka z sinusa', en: 'Integral of sine' }, note: { pl: 'Minus pojawia się tutaj — odwrotnie niż przy pochodnej, gdzie był przy cosinusie.', en: 'The minus appears here — the mirror image of the derivative, where it sat on cosine.' }, drill: true },
        { id: 'i-cos', tex: '\\int \\cos x\\,dx = \\sin x + C', name: { pl: 'Całka z cosinusa', en: 'Integral of cosine' }, note: { pl: 'Bez minusa.', en: 'No minus.' }, drill: true },
        { id: 'i-tg', tex: '\\int \\operatorname{tg} x\\,dx = -\\ln|\\cos x| + C', name: { pl: 'Całka z tangensa', en: 'Integral of tangent' }, note: { pl: 'Podstawienie $u=\\cos x$, $du=-\\sin x\\,dx$ — to $\\int\\frac{g\'}{g}$ w przebraniu.', en: 'Substitute $u=\\cos x$; it is $\\int\\frac{g\'}{g}$ in disguise.' }, drill: true },
        { id: 'i-ctg', tex: '\\int \\operatorname{ctg} x\\,dx = \\ln|\\sin x| + C', name: { pl: 'Całka z cotangensa', en: 'Integral of cotangent' }, note: { pl: 'Tu bez minusa, bo $(\\sin x)\' = +\\cos x$.', en: 'No minus here, since $(\\sin x)\'=+\\cos x$.' }, drill: true },
        { id: 'i-sec2', tex: '\\int \\frac{1}{\\cos^{2}x}\\,dx = \\operatorname{tg} x + C', name: { pl: 'Całka z $1/\\cos^2 x$', en: 'Integral of $\\sec^2$' }, note: { pl: 'Wprost z tablicy pochodnych, czytanej wstecz.', en: 'Straight from the derivative table, read backwards.' }, drill: true },
        { id: 'i-csc2', tex: '\\int \\frac{1}{\\sin^{2}x}\\,dx = -\\operatorname{ctg} x + C', name: { pl: 'Całka z $1/\\sin^2 x$', en: 'Integral of $\\csc^2$' }, note: { pl: 'Minus, bo pochodna cotangensa jest ujemna.', en: 'Minus, because the derivative of cotangent is negative.' }, drill: true },
        { id: 'i-arctg', tex: '\\int \\frac{dx}{x^{2}+a^{2}} = \\frac{1}{a}\\operatorname{arctg}\\frac{x}{a} + C', name: { pl: 'Całka dająca arcus tangens', en: 'Integral giving arctangent' }, note: { pl: 'Czynnik $\\frac1a$ przed funkcją ORAZ $a$ w mianowniku argumentu — jedno bez drugiego jest błędem.', en: 'The $\\frac1a$ outside AND the $a$ inside — one without the other is wrong.' }, drill: true },
        { id: 'i-log-roznica', tex: '\\int \\frac{dx}{x^{2}-a^{2}} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C', name: { pl: 'Całka z różnicy kwadratów', en: 'Integral over a difference of squares' }, note: { pl: 'Wynika z rozkładu na ułamki proste. Uwaga na kolejność: $x-a$ w liczniku.', en: 'From partial fractions. Note the order: $x-a$ on top.' }, drill: true },
        { id: 'i-arcsin', tex: '\\int \\frac{dx}{\\sqrt{a^{2}-x^{2}}} = \\arcsin\\frac{x}{a} + C', name: { pl: 'Całka dająca arcus sinus', en: 'Integral giving arcsine' }, note: { pl: 'Tu przed funkcją NIE ma $\\frac1a$ — inaczej niż przy arcus tangensie.', en: 'Here there is NO $\\frac1a$ in front — unlike the arctangent case.' }, drill: true },
        { id: 'i-log-suma', tex: '\\int \\frac{dx}{\\sqrt{x^{2}+q}} = \\ln\\left|x + \\sqrt{x^{2}+q}\\right| + C', name: { pl: 'Całka logarytmiczna z pierwiastkiem', en: 'Logarithmic integral with a root' }, note: { pl: 'Zwana też $\\operatorname{arsinh}$ dla $q>0$. Działa też dla $q<0$ tam, gdzie pierwiastek jest określony.', en: 'Also $\\operatorname{arsinh}$ for $q>0$; works for $q<0$ where the root is defined.' }, drill: true },
        { id: 'i-liniowosc', tex: '\\int \\big(af(x)+bg(x)\\big)dx = a\\int f(x)\\,dx + b\\int g(x)\\,dx', name: { pl: 'Liniowość całki', en: 'Linearity of the integral' }, note: { pl: 'Jedyna reguła algebraiczna, jaką całka ma. Nie ma reguły na iloczyn ani na iloraz.', en: 'The only algebraic rule the integral has. There is no product or quotient rule.' }, drill: true },
      ],
      skills: [
        { id: 'proste-calki', title: { pl: 'Proste całki', en: 'Simple integrals' }, levels: [2, 3] },
        { id: 'calki-z-tablicy', title: { pl: 'Rozpoznanie wzoru z tablicy', en: 'Recognising a table integral' }, levels: [3, 4] },
        { id: 'sprawdzanie-pierwotnej', title: { pl: 'Sprawdzanie pierwotnej', en: 'Verifying an antiderivative' }, levels: [2, 3] },
      ],
      problems: [
        {
          id: 'tablica-calek-l2-01',
          skill: 'proste-calki',
          level: 2,
          prompt: { pl: 'Oblicz $\\int\\left(4x^{3} - \\frac{3}{x} + 2e^{x}\\right)dx$.', en: 'Compute $\\int\\left(4x^{3} - \\frac{3}{x} + 2e^{x}\\right)dx$.' },
          answer: 'x^{4} - 3\\ln|x| + 2e^{x} + C',
          accept: ['x^4-3\\ln|x|+2e^x+C'],
          solution: [
            { pl: '$\\int 4x^3dx = 4\\cdot\\frac{x^4}{4} = x^4$.', en: '$\\int 4x^3dx = x^4$.' },
            { pl: '$\\int\\frac{3}{x}dx = 3\\ln|x|$, ze znakiem minus.', en: '$\\int\\frac{3}{x}dx = 3\\ln|x|$, with the minus sign.' },
            { pl: '$\\int 2e^xdx = 2e^x$. Razem plus $C$.', en: '$\\int 2e^xdx = 2e^x$, plus $C$.' },
          ],
          trap: { pl: 'Napisanie $\\ln x$ zamiast $\\ln|x|$ i pominięcie $+C$ — dwa najczęstsze braki w całym dziale.', en: 'Writing $\\ln x$ instead of $\\ln|x|$, and omitting $+C$.' },
        },
        {
          id: 'tablica-calek-l3-01',
          skill: 'calki-z-tablicy',
          level: 3,
          prompt: { pl: 'Oblicz $\\int\\frac{dx}{x^{2}+9}$.', en: 'Compute $\\int\\frac{dx}{x^{2}+9}$.' },
          answer: '\\frac{1}{3}\\operatorname{arctg}\\frac{x}{3} + C',
          accept: ['\\frac13\\arctan\\frac{x}{3}+C'],
          solution: [
            { pl: 'To wzór $\\int\\frac{dx}{x^2+a^2}$ z $a=3$.', en: 'The table integral with $a=3$.' },
            { pl: '$\\frac{1}{3}\\operatorname{arctg}\\frac{x}{3} + C$.', en: '$\\frac13\\operatorname{arctg}\\frac{x}{3}+C$.' },
          ],
          trap: { pl: 'Napisanie $\\operatorname{arctg}\\frac{x}{3}$ bez czynnika $\\frac13$ albo $\\frac13\\operatorname{arctg}x$ bez podzielenia argumentu.', en: 'Dropping the $\\frac13$, or forgetting to divide the argument.' },
        },
        {
          id: 'tablica-calek-l4-01',
          skill: 'calki-z-tablicy',
          level: 4,
          prompt: { pl: 'Oblicz $\\int\\frac{dx}{\\sqrt{25-x^{2}}}$ i podaj dziedzinę wyniku.', en: 'Compute $\\int\\frac{dx}{\\sqrt{25-x^{2}}}$ and state the domain.' },
          answer: '\\arcsin\\frac{x}{5} + C',
          accept: ['\\arcsin(x/5)+C'],
          solution: [
            { pl: 'Wzór $\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac{x}{a}+C$ z $a=5$.', en: 'The table integral with $a=5$.' },
            { pl: 'Dziedzina: $x\\in(-5,5)$, bo pod pierwiastkiem musi być liczba dodatnia.', en: 'Domain: $x\\in(-5,5)$.' },
          ],
          trap: { pl: 'Dopisanie czynnika $\\frac15$ przez analogię do arcus tangensa — przy arcus sinusie go nie ma.', en: 'Adding a $\\frac15$ by analogy with arctangent — there is none here.' },
        },
        {
          id: 'tablica-calek-l3-02',
          skill: 'sprawdzanie-pierwotnej',
          level: 3,
          prompt: { pl: 'Sprawdź przez różniczkowanie, czy $F(x)=x\\ln x - x$ jest pierwotną funkcji $f(x)=\\ln x$. Podaj $F\'(x)$.', en: 'Verify by differentiating whether $F(x)=x\\ln x - x$ is an antiderivative of $\\ln x$. Give $F\'(x)$.' },
          answer: '\\ln x',
          accept: ['F\'(x)=\\ln x'],
          solution: [
            { pl: '$(x\\ln x)\' = 1\\cdot\\ln x + x\\cdot\\frac1x = \\ln x + 1$ z reguły iloczynu.', en: 'Product rule: $(x\\ln x)\' = \\ln x + 1$.' },
            { pl: '$(-x)\' = -1$.', en: '$(-x)\' = -1$.' },
            { pl: 'Razem $\\ln x + 1 - 1 = \\ln x$, więc tak — $F$ jest pierwotną.', en: 'Total $\\ln x$, so yes.' },
          ],
          trap: { pl: 'Różniczkowanie $x\\ln x$ jako $\\ln x$ — bez reguły iloczynu wynik nie wychodzi.', en: 'Differentiating $x\\ln x$ as $\\ln x$ — the product rule is needed.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'calkowanie-podstawienie',
      title: { pl: 'Całkowanie przez podstawienie', en: 'Integration by substitution' },
      level: 4,
      prereq: ['tablica-calek', 'pochodne-zlozone'],
      theory: {
        pl: 'Podstawienie to reguła łańcucha czytana wstecz: $\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du$ '
          + 'przy $u=g(x)$. Szuka się w całce funkcji wewnętrznej wraz z jej pochodną — jeżeli $g\'$ jest '
          + 'obecna z dokładnością do stałej, podstawienie zadziała. Trzy rzeczy trzeba zrobić za każdym '
          + 'razem: podstawić $u$, przeliczyć $dx$ przez $du$, i na końcu wrócić do zmiennej $x$. '
          + 'Pominięcie ostatniego kroku daje odpowiedź w cudzej zmiennej.',
        en: 'Substitution is the chain rule backwards: $\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du$ with '
          + '$u=g(x)$. Look for an inner function together with its derivative — if $g\'$ is present up to a '
          + 'constant, the substitution works. Three steps every time: substitute $u$, convert $dx$ to $du$, '
          + 'and convert back at the end.',
      },
      formulas: [
        { id: 'podstawienie', tex: '\\int f\\big(g(x)\\big)g\'(x)\\,dx = \\int f(u)\\,du,\\quad u=g(x)', name: { pl: 'Wzór na podstawienie', en: 'Substitution formula' }, note: { pl: 'Warunek: $g\'$ musi być w całce, choćby z dokładnością do stałego czynnika.', en: 'Condition: $g\'$ must be present, up to a constant factor.' }, drill: true },
        { id: 'calka-g-prim-przez-g', tex: '\\int \\frac{g\'(x)}{g(x)}\\,dx = \\ln|g(x)| + C', name: { pl: 'Całka typu $g\'/g$', en: 'The $g\'/g$ integral' }, note: { pl: 'Warto rozpoznawać od razu — pojawia się częściej niż jakikolwiek inny wzór.', en: 'Worth recognising on sight; it appears more often than any other pattern.' }, drill: true },
        { id: 'calka-liniowa-wewnetrzna', tex: '\\int f(ax+b)\\,dx = \\frac{1}{a}F(ax+b) + C', name: { pl: 'Podstawienie liniowe', en: 'Linear substitution' }, note: { pl: 'Czynnik $\\frac1a$ jest tym, co ginie przy „całkowaniu w pamięci”.', en: 'The $\\frac1a$ is what disappears when you integrate in your head.' }, drill: true },
      ],
      skills: [
        { id: 'podstawienie-proste', title: { pl: 'Podstawienie proste', en: 'Simple substitution' }, levels: [3, 4] },
        { id: 'podstawienie-g-prim-g', title: { pl: 'Rozpoznanie $g\'/g$', en: 'Recognising $g\'/g$' }, levels: [3, 4] },
        { id: 'podstawienie-trygonometryczne', title: { pl: 'Podstawienie trygonometryczne', en: 'Trigonometric substitution' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'calkowanie-podstawienie-l3-01',
          skill: 'podstawienie-proste',
          level: 3,
          prompt: { pl: 'Oblicz $\\int 2x\\,e^{x^{2}}\\,dx$.', en: 'Compute $\\int 2x\\,e^{x^{2}}\\,dx$.' },
          answer: 'e^{x^{2}} + C',
          accept: ['e^{x^2}+C'],
          solution: [
            { pl: 'Podstawiamy $u=x^2$, wtedy $du = 2x\\,dx$ — a $2x\\,dx$ stoi w całce.', en: 'Let $u=x^2$; then $du=2x\\,dx$, which is present.' },
            { pl: '$\\int e^u\\,du = e^u + C = e^{x^2}+C$.', en: '$\\int e^u du = e^{x^2}+C$.' },
          ],
          trap: { pl: 'Pozostawienie odpowiedzi w zmiennej $u$ — trzeba wrócić do $x$.', en: 'Leaving the answer in $u$ — convert back to $x$.' },
        },
        {
          id: 'calkowanie-podstawienie-l4-01',
          skill: 'podstawienie-g-prim-g',
          level: 4,
          prompt: { pl: 'Oblicz $\\int\\frac{3x^{2}}{x^{3}+5}\\,dx$.', en: 'Compute $\\int\\frac{3x^{2}}{x^{3}+5}\\,dx$.' },
          answer: '\\ln|x^{3}+5| + C',
          accept: ['\\ln|x^3+5|+C'],
          solution: [
            { pl: 'Licznik jest dokładnie pochodną mianownika: $(x^3+5)\' = 3x^2$.', en: 'The numerator is exactly the derivative of the denominator.' },
            { pl: 'Zatem to $\\int\\frac{g\'}{g} = \\ln|g| + C$.', en: 'So it is $\\int\\frac{g\'}{g} = \\ln|g|+C$.' },
          ],
          trap: { pl: 'Pominięcie wartości bezwzględnej — mianownik może być ujemny dla $x<-\\sqrt[3]{5}$.', en: 'Dropping the absolute value — the denominator is negative for $x<-\\sqrt[3]{5}$.' },
        },
        {
          id: 'calkowanie-podstawienie-l4-02',
          skill: 'podstawienie-proste',
          level: 4,
          prompt: { pl: 'Oblicz $\\int \\sin(5x-2)\\,dx$.', en: 'Compute $\\int \\sin(5x-2)\\,dx$.' },
          answer: '-\\frac{1}{5}\\cos(5x-2) + C',
          accept: ['-\\frac15\\cos(5x-2)+C'],
          solution: [
            { pl: 'Podstawienie liniowe $u=5x-2$, $du=5\\,dx$, więc $dx=\\frac{du}{5}$.', en: 'Let $u=5x-2$, $dx = \\frac{du}{5}$.' },
            { pl: '$\\frac15\\int\\sin u\\,du = -\\frac15\\cos u + C$.', en: '$\\frac15\\int\\sin u\\,du = -\\frac15\\cos u + C$.' },
          ],
          trap: { pl: 'Zapomnienie czynnika $\\frac15$ — sprawdzenie przez różniczkowanie natychmiast go ujawnia.', en: 'Forgetting the $\\frac15$ — differentiating the answer exposes it at once.' },
        },
        {
          id: 'calkowanie-podstawienie-l5-01',
          skill: 'podstawienie-proste',
          level: 5,
          prompt: { pl: 'Oblicz $\\int \\frac{\\ln x}{x}\\,dx$.', en: 'Compute $\\int \\frac{\\ln x}{x}\\,dx$.' },
          answer: '\\frac{\\ln^{2}x}{2} + C',
          accept: ['\\frac{(\\ln x)^2}{2}+C', '\\frac12\\ln^2 x + C'],
          solution: [
            { pl: 'Podstawiamy $u=\\ln x$, wtedy $du=\\frac{dx}{x}$ — i $\\frac{dx}{x}$ jest w całce.', en: 'Let $u=\\ln x$, so $du = \\frac{dx}{x}$, which is present.' },
            { pl: '$\\int u\\,du = \\frac{u^2}{2}+C = \\frac{\\ln^2 x}{2}+C$.', en: '$\\int u\\,du = \\frac{\\ln^2 x}{2}+C$.' },
          ],
          trap: { pl: 'Pomylenie z $\\int\\frac{g\'}{g}$ i napisanie $\\ln|\\ln x|$ — tu licznikiem jest $\\ln x$, nie jego pochodna.', en: 'Confusing it with $\\int\\frac{g\'}{g}$ and writing $\\ln|\\ln x|$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'calkowanie-przez-czesci',
      title: { pl: 'Całkowanie przez części', en: 'Integration by parts' },
      level: 5,
      prereq: ['calkowanie-podstawienie'],
      theory: {
        pl: 'Wzór $\\int u\\,dv = uv - \\int v\\,du$ pochodzi z reguły iloczynu scałkowanej stronami. '
          + 'Cała sztuka to wybór $u$: powinno być tym czynnikiem, który przy różniczkowaniu \\emph{upraszcza się}. '
          + 'Praktyczna kolejność pierwszeństwa dla $u$: logarytm, funkcja odwrotna trygonometryczna, wielomian, '
          + 'funkcja trygonometryczna, wykładnicza. Przy $\\int e^x\\sin x\\,dx$ całka wraca do siebie po dwóch '
          + 'krokach — wtedy traktuje się ją jak niewiadomą i rozwiązuje równanie.',
        en: 'The formula $\\int u\\,dv = uv - \\int v\\,du$ is the product rule integrated. The whole skill is '
          + 'choosing $u$: it should be the factor that *simplifies* when differentiated. A working order of '
          + 'preference: logarithm, inverse trig, polynomial, trig, exponential. For $\\int e^x\\sin x\\,dx$ the '
          + 'integral returns to itself after two steps — treat it as an unknown and solve.',
      },
      formulas: [
        { id: 'przez-czesci', tex: '\\int u\\,dv = uv - \\int v\\,du', name: { pl: 'Całkowanie przez części', en: 'Integration by parts' }, note: { pl: 'Równoważnie $\\int f g\' = fg - \\int f\'g$. Minus przed drugą całką ginie zaskakująco często.', en: 'Equivalently $\\int fg\' = fg - \\int f\'g$. The minus is lost surprisingly often.' }, drill: true },
        { id: 'ilocz-log', tex: '\\int \\ln x\\,dx = x\\ln x - x + C', name: { pl: 'Całka z logarytmu', en: 'Integral of the logarithm' }, note: { pl: 'Klasyka: bierzemy $u=\\ln x$, $dv=dx$. Wzór warto pamiętać gotowy.', en: 'Take $u=\\ln x$, $dv=dx$. Worth memorising outright.' }, drill: true },
      ],
      skills: [
        { id: 'czesci-wielomian-exp', title: { pl: 'Wielomian razy wykładnicza', en: 'Polynomial times exponential' }, levels: [4, 5] },
        { id: 'czesci-logarytm', title: { pl: 'Całki z logarytmem', en: 'Integrals with logarithms' }, levels: [4, 5] },
        { id: 'czesci-cykliczne', title: { pl: 'Całki cykliczne', en: 'Cyclic integrals' }, levels: [6] },
      ],
      problems: [
        {
          id: 'calkowanie-przez-czesci-l4-01',
          skill: 'czesci-wielomian-exp',
          level: 4,
          prompt: { pl: 'Oblicz $\\int x e^{x}\\,dx$.', en: 'Compute $\\int x e^{x}\\,dx$.' },
          answer: 'xe^{x} - e^{x} + C',
          accept: ['e^x(x-1)+C'],
          solution: [
            { pl: 'Bierzemy $u=x$ (upraszcza się przy różniczkowaniu), $dv=e^x dx$, więc $du=dx$, $v=e^x$.', en: 'Take $u=x$, $dv=e^xdx$; then $du=dx$, $v=e^x$.' },
            { pl: '$\\int xe^x dx = xe^x - \\int e^x dx = xe^x - e^x + C$.', en: '$= xe^x - e^x + C$.' },
          ],
          trap: { pl: 'Wybranie $u=e^x$ — wtedy nowa całka jest trudniejsza od wyjściowej.', en: 'Choosing $u=e^x$ — the new integral is then harder than the original.' },
        },
        {
          id: 'calkowanie-przez-czesci-l5-01',
          skill: 'czesci-logarytm',
          level: 5,
          prompt: { pl: 'Oblicz $\\int x\\ln x\\,dx$ dla $x>0$.', en: 'Compute $\\int x\\ln x\\,dx$ for $x>0$.' },
          answer: '\\frac{x^{2}\\ln x}{2} - \\frac{x^{2}}{4} + C',
          accept: ['\\frac{x^2}{2}\\ln x - \\frac{x^2}{4}+C', '\\frac{x^2}{4}(2\\ln x - 1)+C'],
          solution: [
            { pl: '$u=\\ln x$, $dv = x\\,dx$, więc $du=\\frac{dx}{x}$, $v=\\frac{x^2}{2}$.', en: '$u=\\ln x$, $v=\\frac{x^2}{2}$.' },
            { pl: '$\\frac{x^2\\ln x}{2} - \\int\\frac{x^2}{2}\\cdot\\frac1x dx = \\frac{x^2\\ln x}{2} - \\frac12\\int x\\,dx$.', en: '$= \\frac{x^2\\ln x}{2} - \\frac12\\int x\\,dx$.' },
            { pl: '$= \\frac{x^2\\ln x}{2} - \\frac{x^2}{4} + C$.', en: '$= \\frac{x^2\\ln x}{2} - \\frac{x^2}{4}+C$.' },
          ],
          trap: { pl: 'Wzięcie $u=x$ — zostaje $\\int\\frac{x^2}{2}\\cdot$ coś z logarytmem, czyli gorzej niż na starcie.', en: 'Taking $u=x$ leaves a worse integral than you started with.' },
        },
        {
          id: 'calkowanie-przez-czesci-l6-01',
          skill: 'czesci-cykliczne',
          level: 6,
          prompt: { pl: 'Oblicz $\\int e^{x}\\sin x\\,dx$.', en: 'Compute $\\int e^{x}\\sin x\\,dx$.' },
          answer: '\\frac{e^{x}(\\sin x - \\cos x)}{2} + C',
          accept: ['\\frac12 e^x(\\sin x-\\cos x)+C'],
          solution: [
            { pl: 'Oznaczmy $I=\\int e^x\\sin x\\,dx$. Bierzemy $u=\\sin x$, $dv=e^xdx$: $I = e^x\\sin x - \\int e^x\\cos x\\,dx$.', en: 'Let $I=\\int e^x\\sin x\\,dx$. First pass: $I = e^x\\sin x - \\int e^x\\cos x\\,dx$.' },
            { pl: 'Drugi raz, na $\\int e^x\\cos x\\,dx$, z $u=\\cos x$: $\\int e^x\\cos x\\,dx = e^x\\cos x + \\int e^x\\sin x\\,dx = e^x\\cos x + I$.', en: 'Second pass: $\\int e^x\\cos x\\,dx = e^x\\cos x + I$.' },
            { pl: 'Podstawiamy: $I = e^x\\sin x - e^x\\cos x - I$, więc $2I = e^x(\\sin x-\\cos x)$.', en: 'So $I = e^x\\sin x - e^x\\cos x - I$, giving $2I = e^x(\\sin x-\\cos x)$.' },
            { pl: '$I = \\frac{e^x(\\sin x-\\cos x)}{2} + C$.', en: '$I = \\frac{e^x(\\sin x-\\cos x)}{2}+C$.' },
          ],
          trap: { pl: 'Zmiana wyboru $u$ w drugim kroku (np. wzięcie $u=e^x$) — wtedy wszystko się zwija z powrotem do $I=I$ i nic nie wychodzi.', en: 'Switching which factor is $u$ on the second pass — everything collapses back to $I=I$.' },
        },
      ],
    },
  ],
};
