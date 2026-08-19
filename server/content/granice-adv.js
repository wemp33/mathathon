// Granice i ciągłość — otwarcie toru analizy: granice ciągów, twierdzenie
// o trzech ciągach, granice funkcji z granicami specjalnymi, ciągłość.
export default {
  id: 'granice-adv',
  track: 'calculus',
  order: 200,
  title: { pl: 'Granice i ciągłość', en: 'Limits and continuity' },
  blurb: {
    pl: 'Granice ciągów i funkcji, twierdzenie o trzech ciągach, symbole nieoznaczone, ciągłość.',
    en: 'Limits of sequences and functions, the squeeze theorem, indeterminate forms, continuity.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'granice-ciagow',
      title: { pl: 'Granice ciągów', en: 'Limits of sequences' },
      level: 3,
      prereq: [],
      theory: {
        pl: 'Ciąg $(a_n)$ ma granicę $g$, gdy w każdym otoczeniu $g$ leżą prawie wszystkie wyrazy — '
          + 'formalnie: dla każdego $\\varepsilon>0$ istnieje $N$ takie, że $|a_n-g|<\\varepsilon$ dla $n>N$. '
          + 'W praktyce liczy się granice ciągów wymiernych dzieląc przez najwyższą potęgę $n$, a wyrażenia '
          + 'z pierwiastkami mnoży przez sprzężenie. Hierarchia tempa wzrostu: '
          + '$\\ln n \\ll n^a \\ll q^n \\ll n! \\ll n^n$ — każdy kolejny wygrywa z poprzednim, '
          + 'co rozstrzyga większość granic ilorazów.',
        en: 'A sequence has limit $g$ when every neighbourhood of $g$ contains all but finitely many terms: '
          + 'for every $\\varepsilon>0$ there is $N$ with $|a_n-g|<\\varepsilon$ for $n>N$. In practice: divide '
          + 'rational expressions by the highest power of $n$, multiply root expressions by the conjugate. The '
          + 'growth hierarchy $\\ln n \\ll n^a \\ll q^n \\ll n! \\ll n^n$ settles most quotient limits.',
      },
      formulas: [
        { id: 'granica-en', tex: '\\lim_{n\\to\\infty}\\left(1+\\frac{1}{n}\\right)^{n} = e', name: { pl: 'Granica definiująca $e$', en: 'The limit defining $e$' }, note: { pl: 'Ogólniej $\\left(1+\\frac{x}{n}\\right)^n \\to e^x$. Symbol $1^{\\infty}$ w najczystszej postaci.', en: 'More generally $(1+\\frac{x}{n})^n \\to e^x$. The purest $1^{\\infty}$.' }, drill: true },
        { id: 'granica-pierwiastek-n', tex: '\\lim_{n\\to\\infty}\\sqrt[n]{n} = 1,\\qquad \\lim_{n\\to\\infty}\\sqrt[n]{a} = 1\\ (a>0)', name: { pl: 'Pierwiastki $n$-tego stopnia', en: '$n$-th roots' }, note: { pl: 'Oba przez oszacowanie lub logarytm; częsty składnik trzech ciągów.', en: 'Both via estimates or logs; a frequent squeeze ingredient.' }, drill: true },
        { id: 'granica-qn', tex: '\\lim_{n\\to\\infty} q^{n} = 0 \\ \\text{dla}\\ |q|<1', name: { pl: 'Granica ciągu geometrycznego', en: 'Limit of a geometric sequence' }, note: { pl: 'Dla $q>1$ rozbieżny do $\\infty$; dla $q\\le -1$ nie ma granicy.', en: 'Divergent for $q>1$; no limit for $q\\le-1$.' }, drill: true },
        { id: 'hierarchia-wzrostu', tex: '\\ln n \\ll n^{a} \\ll q^{n} \\ll n! \\ll n^{n}\\quad (a>0,\\ q>1)', name: { pl: 'Hierarchia tempa wzrostu', en: 'The growth hierarchy' }, note: { pl: 'Iloraz wolniejszego przez szybszy dąży do zera.', en: 'Slower over faster tends to zero.' }, drill: true },
      ],
      skills: [
        { id: 'granice-wymierne', title: { pl: 'Ciągi wymierne', en: 'Rational sequences' }, levels: [2, 3] },
        { id: 'granice-sprzezenie', title: { pl: 'Mnożenie przez sprzężenie', en: 'Conjugate multiplication' }, levels: [3, 4] },
        { id: 'granice-z-e', title: { pl: 'Granice z liczbą $e$', en: 'Limits with $e$' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'granice-ciagow-l2-01',
          skill: 'granice-wymierne',
          level: 2,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\frac{3n^{2}-n+2}{2n^{2}+5}$.', en: 'Compute $\\lim_{n\\to\\infty}\\frac{3n^{2}-n+2}{2n^{2}+5}$.' },
          answer: '\\frac{3}{2}',
          accept: ['3/2', '1{,}5'],
          solution: [
            { pl: 'Dzielimy licznik i mianownik przez $n^2$: $\\frac{3-\\frac1n+\\frac{2}{n^2}}{2+\\frac{5}{n^2}}$.', en: 'Divide through by $n^2$.' },
            { pl: 'Wszystkie ułamki z $n$ dążą do zera: granica $= \\frac32$.', en: 'All the $\\frac1n$ terms vanish: $\\frac32$.' },
          ],
          trap: { pl: 'Dzielenie tylko licznika — obie strony ułamka dzieli się przez tę samą potęgę.', en: 'Dividing only the numerator.' },
        },
        {
          id: 'granice-ciagow-l4-01',
          skill: 'granice-sprzezenie',
          level: 4,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\left(\\sqrt{n^{2}+6n}-n\\right)$.', en: 'Compute $\\lim_{n\\to\\infty}\\left(\\sqrt{n^{2}+6n}-n\\right)$.' },
          answer: '3',
          accept: ['3'],
          solution: [
            { pl: 'Symbol $\\infty-\\infty$. Mnożymy przez sprzężenie: $\\frac{(n^2+6n)-n^2}{\\sqrt{n^2+6n}+n} = \\frac{6n}{\\sqrt{n^2+6n}+n}$.', en: 'Multiply by the conjugate: $\\frac{6n}{\\sqrt{n^2+6n}+n}$.' },
            { pl: 'Dzielimy przez $n$: $\\frac{6}{\\sqrt{1+\\frac6n}+1} \\to \\frac{6}{2} = 3$.', en: 'Divide by $n$: $\\to \\frac62 = 3$.' },
          ],
          trap: { pl: 'Uznanie $\\infty-\\infty=0$ — to symbol nieoznaczony, a wynik tutaj jest niezerowy.', en: 'Declaring $\\infty-\\infty=0$ — indeterminate, and nonzero here.' },
        },
        {
          id: 'granice-ciagow-l5-01',
          skill: 'granice-z-e',
          level: 5,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\left(\\frac{n+3}{n}\\right)^{2n}$.', en: 'Compute $\\lim_{n\\to\\infty}\\left(\\frac{n+3}{n}\\right)^{2n}$.' },
          answer: 'e^{6}',
          accept: ['e^6'],
          solution: [
            { pl: '$\\left(1+\\frac{3}{n}\\right)^{2n} = \\left[\\left(1+\\frac{3}{n}\\right)^{n}\\right]^{2}$.', en: 'Rewrite as $\\left[(1+\\frac3n)^n\\right]^2$.' },
            { pl: '$\\left(1+\\frac{3}{n}\\right)^{n}\\to e^{3}$, więc całość dąży do $e^{6}$.', en: 'The inner limit is $e^3$; squared, $e^6$.' },
          ],
          trap: { pl: 'Policzenie granicy podstawy (czyli 1) i podniesienie do potęgi — $1^{\\infty}$ to symbol, nie jedynka.', en: 'Taking the base limit (1) and exponentiating — $1^{\\infty}$ is indeterminate.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'trzy-ciagi',
      title: { pl: 'Twierdzenie o trzech ciągach', en: 'The squeeze theorem' },
      level: 4,
      prereq: ['granice-ciagow'],
      theory: {
        pl: 'Jeśli $a_n \\le b_n \\le c_n$ od pewnego miejsca oraz $\\lim a_n = \\lim c_n = g$, to '
          + '$\\lim b_n = g$. Schemat użycia jest zawsze ten sam: (1) oszacować badany ciąg z dołu i z góry, '
          + '(2) pokazać, że oba ograniczenia mają tę samą granicę, (3) powołać się na twierdzenie. '
          + 'Sztuką jest krok (1) — oszacowania muszą być na tyle ciasne, by graniczyły do tego samego. '
          + 'Typowe chwyty: $-1\\le\\sin\\le 1$, zastąpienie sumy $n$ razy największym/najmniejszym '
          + 'składnikiem, a w $\\sqrt[n]{a^n+b^n}$ — zostawienie samego większego składnika.',
        en: 'If $a_n \\le b_n \\le c_n$ eventually and the outer limits agree, the middle one equals them. '
          + 'The routine: (1) bound the sequence below and above, (2) show both bounds share a limit, '
          + '(3) invoke the theorem. The art is step (1): bounds tight enough to converge to the same value. '
          + 'Stock tricks: $-1\\le\\sin\\le1$, replacing a sum by $n$ copies of its largest/smallest term, '
          + 'and keeping only the dominant term inside $\\sqrt[n]{a^n+b^n}$.',
      },
      formulas: [
        { id: 'tw-trzy-ciagi', tex: 'a_{n} \\le b_{n} \\le c_{n},\\ \\lim a_{n} = \\lim c_{n} = g \\ \\Rightarrow\\ \\lim b_{n} = g', name: { pl: 'Twierdzenie o trzech ciągach', en: 'The squeeze theorem' }, note: { pl: 'Nierówności wystarczą od pewnego $N$. Wersja dla funkcji działa tak samo.', en: 'The inequalities need only hold eventually; the function version is identical.' }, drill: true },
        { id: 'szacowanie-sumy', tex: 'n\\cdot\\min_{k} x_{k} \\le \\sum_{k=1}^{n} x_{k} \\le n\\cdot\\max_{k} x_{k}', name: { pl: 'Szacowanie sumy przez skrajne składniki', en: 'Bounding a sum by its extremes' }, note: { pl: 'Standardowy krok pierwszy przy sumach pod granicą.', en: 'The standard first step for sums under a limit.' }, drill: true },
      ],
      skills: [
        { id: 'trzy-ciagi-sin', title: { pl: 'Szacowanie z sinusem', en: 'Squeezing with sine' }, levels: [3, 4] },
        { id: 'trzy-ciagi-pierwiastki', title: { pl: 'Pierwiastki $n$-tego stopnia z sum', en: '$n$-th roots of sums' }, levels: [4, 5] },
        { id: 'trzy-ciagi-sumy', title: { pl: 'Sumy o $n$ składnikach', en: 'Sums with $n$ terms' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'trzy-ciagi-l3-01',
          skill: 'trzy-ciagi-sin',
          level: 3,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\frac{\\sin n}{n}$, uzasadniając twierdzeniem o trzech ciągach.', en: 'Compute $\\lim_{n\\to\\infty}\\frac{\\sin n}{n}$ using the squeeze theorem.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: '$-1 \\le \\sin n \\le 1$, więc $-\\frac1n \\le \\frac{\\sin n}{n} \\le \\frac1n$.', en: '$-\\frac1n \\le \\frac{\\sin n}{n} \\le \\frac1n$.' },
            { pl: 'Oba skrajne dążą do 0, więc środkowy też.', en: 'Both bounds tend to 0, so the middle does.' },
          ],
          trap: { pl: 'Twierdzenie, że $\\sin n$ „dąży do czegoś” — nie ma granicy, ale jest ograniczony, i to wystarcza.', en: 'Claiming $\\sin n$ converges — it does not, but boundedness is all that is needed.' },
        },
        {
          id: 'trzy-ciagi-l4-01',
          skill: 'trzy-ciagi-pierwiastki',
          level: 4,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\sqrt[n]{2^{n}+5^{n}}$.', en: 'Compute $\\lim_{n\\to\\infty}\\sqrt[n]{2^{n}+5^{n}}$.' },
          answer: '5',
          accept: ['5'],
          solution: [
            { pl: 'Szacujemy: $5^n \\le 2^n+5^n \\le 2\\cdot 5^n$.', en: '$5^n \\le 2^n+5^n \\le 2\\cdot5^n$.' },
            { pl: 'Po pierwiastku: $5 \\le \\sqrt[n]{2^n+5^n} \\le 5\\sqrt[n]{2}$.', en: 'Take roots: $5 \\le \\cdot \\le 5\\sqrt[n]{2}$.' },
            { pl: '$\\sqrt[n]{2}\\to1$, więc obie strony dążą do 5.', en: '$\\sqrt[n]{2}\\to1$, so both sides tend to 5.' },
          ],
          trap: { pl: 'Ogólna reguła: $\\sqrt[n]{a^n+b^n}\\to\\max(a,b)$ — większy składnik wygrywa, mniejszy znika w granicy.', en: 'The general rule: the larger base wins; the smaller vanishes in the limit.' },
        },
        {
          id: 'trzy-ciagi-l5-01',
          skill: 'trzy-ciagi-sumy',
          level: 5,
          prompt: { pl: 'Oblicz $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{n}{n^{2}+k}$.', en: 'Compute $\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{n}{n^{2}+k}$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Każdy z $n$ składników leży między $\\frac{n}{n^2+n}$ a $\\frac{n}{n^2+1}$.', en: 'Each of the $n$ terms lies between $\\frac{n}{n^2+n}$ and $\\frac{n}{n^2+1}$.' },
            { pl: 'Suma: $\\frac{n^2}{n^2+n} \\le S_n \\le \\frac{n^2}{n^2+1}$.', en: 'Sum: $\\frac{n^2}{n^2+n} \\le S_n \\le \\frac{n^2}{n^2+1}$.' },
            { pl: 'Obie strony dążą do 1, więc $\\lim S_n = 1$.', en: 'Both tend to 1.' },
          ],
          trap: { pl: '„Każdy składnik dąży do zera, więc suma dąży do zera” — składników przybywa dokładnie w tempie, w jakim maleją.', en: '"Each term tends to zero so the sum does" — the number of terms grows exactly as fast as they shrink.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'granice-funkcji',
      title: { pl: 'Granice funkcji', en: 'Limits of functions' },
      level: 4,
      prereq: ['granice-ciagow'],
      theory: {
        pl: 'Granica funkcji w punkcie istnieje wtedy i tylko wtedy, gdy obie granice jednostronne istnieją '
          + 'i są równe. Granice specjalne, na których stoi cała reszta: $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$, '
          + '$\\lim_{x\\to0}\\frac{e^x-1}{x}=1$, $\\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1$, '
          + '$\\lim_{x\\to0}\\frac{a^x-1}{x}=\\ln a$, $\\lim_{x\\to0}\\frac{(1+x)^a-1}{x}=a$. '
          + 'Każda mówi to samo: przy zerze funkcja zachowuje się jak jej styczna.',
        en: 'A function limit exists at a point iff both one-sided limits exist and agree. The special limits '
          + 'everything else stands on: $\\frac{\\sin x}{x}\\to1$, $\\frac{e^x-1}{x}\\to1$, '
          + '$\\frac{\\ln(1+x)}{x}\\to1$, $\\frac{a^x-1}{x}\\to\\ln a$, $\\frac{(1+x)^a-1}{x}\\to a$. '
          + 'Each says the same thing: near zero a function behaves like its tangent.',
      },
      formulas: [
        { id: 'gr-sinx-x', tex: '\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1', name: { pl: 'Granica $\\frac{\\sin x}{x}$', en: 'The $\\frac{\\sin x}{x}$ limit' }, note: { pl: 'Miara łukowa. Stąd $\\frac{\\sin(kx)}{x}\\to k$.', en: 'Radians. Hence $\\frac{\\sin kx}{x}\\to k$.' }, drill: true },
        { id: 'gr-ex-1-x', tex: '\\lim_{x\\to 0}\\frac{e^{x}-1}{x} = 1', name: { pl: 'Granica $\\frac{e^x-1}{x}$', en: 'The $\\frac{e^x-1}{x}$ limit' }, note: { pl: 'To po prostu $(e^x)\'$ w zerze.', en: 'It is $(e^x)\'$ at zero.' }, drill: true },
        { id: 'gr-ax-1-x', tex: '\\lim_{x\\to 0}\\frac{a^{x}-1}{x} = \\ln a', name: { pl: 'Granica $\\frac{a^x-1}{x}$', en: 'The $\\frac{a^x-1}{x}$ limit' }, note: { pl: 'Uogólnienie poprzedniej; dla $a=e$ wraca jedynka.', en: 'Generalises the previous one.' }, drill: true },
        { id: 'gr-ln1x-x', tex: '\\lim_{x\\to 0}\\frac{\\ln(1+x)}{x} = 1', name: { pl: 'Granica $\\frac{\\ln(1+x)}{x}$', en: 'The $\\frac{\\ln(1+x)}{x}$ limit' }, note: { pl: 'Odwrotność granicy z $e^x$ — obie mówią, że styczne w zerze mają nachylenie 1.', en: 'The inverse statement of the $e^x$ limit.' }, drill: true },
        { id: 'gr-1xa-1-x', tex: '\\lim_{x\\to 0}\\frac{(1+x)^{a}-1}{x} = a', name: { pl: 'Granica $\\frac{(1+x)^a-1}{x}$', en: 'The $\\frac{(1+x)^a-1}{x}$ limit' }, note: { pl: 'Dla $a=\\frac12$: $\\sqrt{1+x}\\approx 1+\\frac{x}{2}$ przy małym $x$.', en: 'For $a=\\frac12$: $\\sqrt{1+x}\\approx1+\\frac{x}{2}$ for small $x$.' }, drill: true },
      ],
      skills: [
        { id: 'granice-jednostronne', title: { pl: 'Granice jednostronne', en: 'One-sided limits' }, levels: [3, 4] },
        { id: 'granice-specjalne', title: { pl: 'Granice specjalne', en: 'Special limits' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'granice-funkcji-l4-01',
          skill: 'granice-specjalne',
          level: 4,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 0}\\frac{\\sin 5x}{\\sin 3x}$.', en: 'Compute $\\lim_{x\\to 0}\\frac{\\sin 5x}{\\sin 3x}$.' },
          answer: '\\frac{5}{3}',
          accept: ['5/3'],
          solution: [
            { pl: 'Rozszerzamy: $\\frac{\\sin 5x}{5x}\\cdot\\frac{3x}{\\sin 3x}\\cdot\\frac{5}{3}$.', en: 'Rewrite as $\\frac{\\sin5x}{5x}\\cdot\\frac{3x}{\\sin3x}\\cdot\\frac53$.' },
            { pl: 'Oba ułamki sinusowe dążą do 1, zostaje $\\frac53$.', en: 'Both sine fractions tend to 1, leaving $\\frac53$.' },
          ],
          trap: { pl: 'Skrócenie „$\\sin$ przez $\\sin$” — sinus nie jest czynnikiem, tylko funkcją.', en: 'Cancelling "sin over sin" — sine is not a factor.' },
        },
        {
          id: 'granice-funkcji-l4-02',
          skill: 'granice-jednostronne',
          level: 4,
          prompt: { pl: 'Zbadaj, czy istnieje $\\lim_{x\\to 0}\\frac{|x|}{x}$. Podaj granice jednostronne.', en: 'Does $\\lim_{x\\to 0}\\frac{|x|}{x}$ exist? Give the one-sided limits.' },
          answer: '\\text{Nie istnieje: } \\lim_{x\\to0^-}=-1,\\ \\lim_{x\\to0^+}=1',
          accept: ['nie istnieje', 'does not exist'],
          solution: [
            { pl: 'Dla $x>0$: $\\frac{|x|}{x}=1$. Dla $x<0$: $\\frac{|x|}{x}=-1$.', en: 'For $x>0$ the value is 1; for $x<0$ it is $-1$.' },
            { pl: 'Granice jednostronne różne ($1\\neq-1$), więc granica nie istnieje.', en: 'One-sided limits differ, so the limit does not exist.' },
          ],
          trap: { pl: 'Podanie $0$ przez „uśrednienie” — granica to nie średnia stron.', en: 'Answering 0 by "averaging" — a limit is not the mean of the sides.' },
        },
        {
          id: 'granice-funkcji-l5-01',
          skill: 'granice-specjalne',
          level: 5,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 0}\\frac{e^{3x}-1}{\\ln(1+2x)}$.', en: 'Compute $\\lim_{x\\to 0}\\frac{e^{3x}-1}{\\ln(1+2x)}$.' },
          answer: '\\frac{3}{2}',
          accept: ['3/2', '1{,}5'],
          solution: [
            { pl: 'Rozszerzamy: $\\frac{e^{3x}-1}{3x}\\cdot\\frac{2x}{\\ln(1+2x)}\\cdot\\frac{3}{2}$.', en: 'Insert the canonical fractions: $\\frac{e^{3x}-1}{3x}\\cdot\\frac{2x}{\\ln(1+2x)}\\cdot\\frac32$.' },
            { pl: 'Obie granice specjalne dają 1, zostaje $\\frac32$.', en: 'Both special limits are 1, leaving $\\frac32$.' },
          ],
          trap: { pl: 'Dopasowanie argumentów: w $\\frac{e^{3x}-1}{3x}$ musi stać $3x$, w logarytmie $2x$ — pomieszanie daje zły współczynnik.', en: 'Argument matching: $3x$ under the exponential, $2x$ under the log — mixing them skews the constant.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'ciaglosc',
      title: { pl: 'Ciągłość', en: 'Continuity' },
      level: 4,
      prereq: ['granice-funkcji'],
      theory: {
        pl: 'Funkcja jest ciągła w $x_0$, gdy $\\lim_{x\\to x_0}f(x) = f(x_0)$ — granica istnieje, wartość '
          + 'istnieje i są równe. Nieciągłości: usuwalna (granica istnieje, ale różna od wartości albo wartości '
          + 'brak), skokowa (granice jednostronne różne, obie skończone), istotna (któraś granica nie istnieje '
          + 'lub jest nieskończona). Dwa wielkie twierdzenia o funkcjach ciągłych na przedziale domkniętym: '
          + 'Darboux — funkcja przyjmuje każdą wartość pośrednią (stąd dowody istnienia pierwiastków), '
          + 'i Weierstrass — osiąga kres górny i dolny.',
        en: 'Continuity at $x_0$: the limit exists, the value exists, and they agree. Discontinuities: removable, '
          + 'jump, essential. The two big theorems on a closed interval: Darboux (intermediate values — root '
          + 'existence proofs) and Weierstrass (the extremes are attained).',
      },
      formulas: [
        { id: 'def-ciaglosci', tex: '\\lim_{x\\to x_{0}} f(x) = f(x_{0})', name: { pl: 'Definicja ciągłości w punkcie', en: 'Continuity at a point' }, note: { pl: 'Trzy warunki naraz: granica istnieje, wartość istnieje, są równe.', en: 'Three conditions at once.' }, drill: true },
        { id: 'tw-darboux', tex: 'f \\in C\\langle a,b\\rangle,\\ w \\text{ między } f(a) \\text{ i } f(b) \\ \\Rightarrow\\ \\exists\\, c:\\ f(c)=w', name: { pl: 'Twierdzenie Darboux', en: 'Intermediate value theorem' }, note: { pl: 'Najczęstsze użycie: $f(a)f(b)<0$ daje miejsce zerowe w $(a,b)$.', en: 'Most used as: a sign change gives a root.' }, drill: true },
        { id: 'tw-weierstrass', tex: 'f \\in C\\langle a,b\\rangle \\ \\Rightarrow\\ f \\text{ osiąga } \\min \\text{ i } \\max', name: { pl: 'Twierdzenie Weierstrassa', en: 'Extreme value theorem' }, note: { pl: 'Wymaga przedziału DOMKNIĘTEGO: $\\frac1x$ na $(0,1)$ nie osiąga niczego.', en: 'Needs a CLOSED interval: $\\frac1x$ on $(0,1)$ attains neither.' }, drill: true },
      ],
      skills: [
        { id: 'ciaglosc-sklejane', title: { pl: 'Funkcje sklejane z parametrem', en: 'Piecewise functions with a parameter' }, levels: [3, 4] },
        { id: 'ciaglosc-rodzaje', title: { pl: 'Klasyfikacja nieciągłości', en: 'Classifying discontinuities' }, levels: [4] },
        { id: 'ciaglosc-darboux', title: { pl: 'Zastosowania tw. Darboux', en: 'Using the IVT' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'ciaglosc-l3-01',
          skill: 'ciaglosc-sklejane',
          level: 3,
          prompt: { pl: 'Dla jakiej wartości parametru $m$ funkcja $f(x)=\\begin{cases}\\frac{x^{2}-9}{x-3}, & x\\neq 3\\\\ m, & x=3\\end{cases}$ jest ciągła w $x_0=3$?', en: 'For what $m$ is $f$ continuous at 3, where $f(x)=\\frac{x^{2}-9}{x-3}$ off 3 and $m$ at 3?' },
          answer: 'm=6',
          accept: ['6'],
          solution: [
            { pl: 'Dla $x\\neq3$: $f(x)=\\frac{(x-3)(x+3)}{x-3}=x+3$.', en: 'Off 3 the function is $x+3$.' },
            { pl: '$\\lim_{x\\to3}f(x) = 6$; ciągłość wymaga $m=6$.', en: 'The limit is 6, so $m=6$.' },
          ],
          trap: { pl: 'Wstawienie $x=3$ do pierwotnego wzoru i uznanie, że się nie da — granicę liczy się po skróceniu.', en: 'Plugging 3 into the raw formula — cancel first, then take the limit.' },
        },
        {
          id: 'ciaglosc-l4-01',
          skill: 'ciaglosc-darboux',
          level: 4,
          prompt: { pl: 'Wykaż, że równanie $x^{3}+x-1=0$ ma pierwiastek w przedziale $(0,1)$. Jakiego twierdzenia używasz?', en: 'Show $x^{3}+x-1=0$ has a root in $(0,1)$. Which theorem?' },
          answer: '\\text{Tw. Darboux: } f(0)=-1<0<1=f(1)',
          accept: ['Darboux', 'IVT'],
          solution: [
            { pl: '$f(x)=x^3+x-1$ jest ciągła jako wielomian.', en: '$f$ is continuous (a polynomial).' },
            { pl: '$f(0)=-1<0$ oraz $f(1)=1>0$.', en: '$f(0)=-1$, $f(1)=1$.' },
            { pl: 'Z twierdzenia Darboux istnieje $c\\in(0,1)$ z $f(c)=0$.', en: 'By the IVT there is a root in $(0,1)$.' },
          ],
          trap: { pl: 'Pominięcie zdania o ciągłości — bez niego twierdzenie nie działa i argument jest dziurawy.', en: 'Skipping the continuity sentence — without it the theorem does not apply.' },
        },
        {
          id: 'ciaglosc-l5-01',
          skill: 'ciaglosc-sklejane',
          level: 5,
          prompt: { pl: 'Dla jakich wartości $a$ funkcja $f(x)=\\begin{cases}\\frac{\\sin(ax)}{x}, & x\\neq 0\\\\ 4, & x=0\\end{cases}$ jest ciągła w zerze?', en: 'For which $a$ is $f$ continuous at 0, where $f=\\frac{\\sin(ax)}{x}$ off 0 and $4$ at 0?' },
          answer: 'a=4',
          accept: ['4'],
          solution: [
            { pl: '$\\lim_{x\\to0}\\frac{\\sin(ax)}{x} = a\\cdot\\lim_{x\\to0}\\frac{\\sin(ax)}{ax} = a$.', en: 'The limit is $a$.' },
            { pl: 'Ciągłość wymaga $a=4$.', en: 'Continuity forces $a=4$.' },
          ],
          trap: { pl: 'Uznanie granicy za 1 niezależnie od $a$ — jedynka jest dla $\\frac{\\sin t}{t}$, a tu w mianowniku stoi $x$, nie $ax$.', en: 'Calling the limit 1 regardless of $a$ — the denominator is $x$, not $ax$.' },
        },
      ],
    },
  ],
};
