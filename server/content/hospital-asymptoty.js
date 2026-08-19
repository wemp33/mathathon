// Reguła de l'Hospitala i asymptoty — trzy wzory na asymptoty są dokładnie te
// z arkusza użytkownika: pozioma, pionowa, ukośna z a i b jako granicami.
export default {
  id: 'hospital-asymptoty',
  track: 'calculus',
  order: 220,
  title: { pl: 'De l\'Hospital i asymptoty', en: 'L\'Hospital and asymptotes' },
  blurb: {
    pl: 'Symbole nieoznaczone, reguła de l\'Hospitala i pełna klasyfikacja asymptot.',
    en: 'Indeterminate forms, l\'Hospital\'s rule, and the full classification of asymptotes.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'regula-hospitala',
      title: { pl: 'Reguła de l\'Hospitala', en: 'L\'Hospital\'s rule' },
      level: 4,
      prereq: ['tablica-pochodnych', 'granice-funkcji'],
      theory: {
        pl: 'Jeżeli granica $\\lim\\frac{f}{g}$ ma postać $\\frac00$ lub $\\frac{\\infty}{\\infty}$, '
          + 'obie funkcje są różniczkowalne w otoczeniu punktu, $g\'\\neq 0$ w tym otoczeniu, '
          + 'i granica $\\lim\\frac{f\'}{g\'}$ \\emph{istnieje}, to $\\lim\\frac{f}{g} = \\lim\\frac{f\'}{g\'}$. '
          + 'Wszystkie założenia są istotne: reguła stosuje się tylko do dwóch symboli — pozostałe pięć '
          + '($0\\cdot\\infty$, $\\infty-\\infty$, $1^{\\infty}$, $0^0$, $\\infty^0$) trzeba najpierw sprowadzić: '
          + 'iloczyn przenosi się do mianownika, różnicę na wspólny mianownik, potęgi przez logarytm. '
          + 'Reguła bywa też bezradna: dla $\\frac{x+\\sin x}{x}$ iloraz pochodnych oscyluje, choć granica '
          + 'istnieje i wynosi 1 — wtedy trzeba wrócić do metod elementarnych.',
        en: 'If $\\lim\\frac{f}{g}$ has the form $\\frac00$ or $\\frac{\\infty}{\\infty}$, both functions are '
          + 'differentiable near the point, $g\'\\neq0$ there, and $\\lim\\frac{f\'}{g\'}$ *exists*, then the two '
          + 'limits agree. Every hypothesis matters: the rule applies to exactly two forms — the other five '
          + 'must first be converted (products into quotients, differences over a common denominator, powers '
          + 'via logarithms). And it can fail: for $\\frac{x+\\sin x}{x}$ the quotient of derivatives oscillates '
          + 'although the limit exists and equals 1.',
      },
      formulas: [
        { id: 'hospital', tex: '\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f\'(x)}{g\'(x)}', name: { pl: 'Reguła de l\'Hospitala', en: 'L\'Hospital\'s rule' }, note: { pl: 'Tylko dla $\\frac00$ i $\\frac{\\infty}{\\infty}$, i tylko gdy granica po prawej istnieje. Różniczkuje się licznik i mianownik OSOBNO — to nie reguła ilorazu.', en: 'Only for $\\frac00$ and $\\frac{\\infty}{\\infty}$, and only when the right-hand limit exists. Numerator and denominator are differentiated SEPARATELY — this is not the quotient rule.' }, drill: true },
        { id: 'symbole-nieoznaczone', tex: '\\frac{0}{0},\\ \\frac{\\infty}{\\infty},\\ 0\\cdot\\infty,\\ \\infty-\\infty,\\ 1^{\\infty},\\ 0^{0},\\ \\infty^{0}', name: { pl: 'Siedem symboli nieoznaczonych', en: 'The seven indeterminate forms' }, note: { pl: 'Uwaga: $0^{\\infty}=0$, $\\frac{1}{0^+}=+\\infty$ NIE są nieoznaczone.', en: 'Note $0^{\\infty}$ and $\\frac{1}{0^+}$ are NOT indeterminate.' }, drill: true },
        { id: 'potegi-przez-log', tex: '\\lim f^{g} = e^{\\lim g\\ln f}', name: { pl: 'Potęgi nieoznaczone przez logarytm', en: 'Indeterminate powers via the logarithm' }, note: { pl: 'Dla $1^{\\infty}$, $0^0$, $\\infty^0$: liczy się $\\lim g\\ln f$, a wynik wykładniczy.', en: 'For $1^{\\infty}$, $0^0$, $\\infty^0$: compute $\\lim g\\ln f$, then exponentiate.' }, drill: true },
      ],
      skills: [
        { id: 'hospital-00', title: { pl: 'Postać $\\frac00$', en: 'The $\\frac00$ form' }, levels: [3, 4] },
        { id: 'hospital-inf-inf', title: { pl: 'Postać $\\frac{\\infty}{\\infty}$', en: 'The $\\frac{\\infty}{\\infty}$ form' }, levels: [4] },
        { id: 'hospital-przeksztalcenia', title: { pl: 'Sprowadzanie pozostałych symboli', en: 'Converting the other forms' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'regula-hospitala-l3-01',
          skill: 'hospital-00',
          level: 3,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 0}\\frac{e^{x}-1-x}{x^{2}}$.', en: 'Compute $\\lim_{x\\to 0}\\frac{e^{x}-1-x}{x^{2}}$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5'],
          solution: [
            { pl: 'Postać $\\frac00$. Pierwsze zastosowanie: $\\lim\\frac{e^x-1}{2x}$ — nadal $\\frac00$.', en: '$\\frac00$; first application gives $\\lim\\frac{e^x-1}{2x}$, still $\\frac00$.' },
            { pl: 'Drugie zastosowanie: $\\lim\\frac{e^x}{2} = \\frac12$.', en: 'Second application: $\\frac12$.' },
          ],
          trap: { pl: 'Zatrzymanie się po pierwszym kroku i wstawienie zera: $\\frac{e^0-1}{0}$ to znów symbol, nie wynik.', en: 'Stopping after one step — the result is again indeterminate, not an answer.' },
        },
        {
          id: 'regula-hospitala-l4-01',
          skill: 'hospital-inf-inf',
          level: 4,
          prompt: { pl: 'Oblicz $\\lim_{x\\to\\infty}\\frac{\\ln x}{x}$.', en: 'Compute $\\lim_{x\\to\\infty}\\frac{\\ln x}{x}$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: 'Postać $\\frac{\\infty}{\\infty}$. Po zróżniczkowaniu: $\\lim\\frac{1/x}{1} = 0$.', en: '$\\frac{\\infty}{\\infty}$; after differentiating, $\\lim\\frac{1/x}{1}=0$.' },
            { pl: 'Morał ogólniejszy: logarytm rośnie wolniej niż każda potęga $x$.', en: 'The general moral: logarithms grow slower than any power.' },
          ],
          trap: { pl: 'Różniczkowanie ilorazem — regułę stosuje się do licznika i mianownika osobno.', en: 'Using the quotient rule — l\'Hospital differentiates numerator and denominator separately.' },
        },
        {
          id: 'regula-hospitala-l5-01',
          skill: 'hospital-przeksztalcenia',
          level: 5,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 0^{+}} x\\ln x$.', en: 'Compute $\\lim_{x\\to 0^{+}} x\\ln x$.' },
          answer: '0',
          accept: ['0'],
          solution: [
            { pl: 'Postać $0\\cdot(-\\infty)$. Przenosimy do mianownika: $\\lim_{x\\to0^+}\\frac{\\ln x}{1/x}$ — teraz $\\frac{-\\infty}{\\infty}$.', en: 'Rewrite as $\\frac{\\ln x}{1/x}$, a $\\frac{\\infty}{\\infty}$ form.' },
            { pl: 'De l\'Hospital: $\\lim\\frac{1/x}{-1/x^2} = \\lim(-x) = 0$.', en: 'L\'Hospital: $\\lim(-x)=0$.' },
          ],
          trap: { pl: 'Przeniesienie $\\ln x$ do mianownika zamiast $x$ — formalnie wolno, ale pochodne robią się gorsze, nie lepsze.', en: 'Moving $\\ln x$ down instead of $x$ — legal, but the derivatives get worse, not better.' },
        },
        {
          id: 'regula-hospitala-l6-01',
          skill: 'hospital-przeksztalcenia',
          level: 6,
          prompt: { pl: 'Oblicz $\\lim_{x\\to 0^{+}} x^{x}$.', en: 'Compute $\\lim_{x\\to 0^{+}} x^{x}$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Postać $0^0$. Logarytmujemy: $\\ln(x^x) = x\\ln x$.', en: 'A $0^0$ form; $\\ln(x^x) = x\\ln x$.' },
            { pl: 'Z poprzedniego zadania $\\lim_{x\\to0^+}x\\ln x = 0$.', en: 'From the previous problem that limit is $0$.' },
            { pl: 'Zatem $\\lim x^x = e^{0} = 1$.', en: 'Hence $\\lim x^x = e^0 = 1$.' },
          ],
          trap: { pl: 'Podanie $0$ jako wyniku — zapomnienie, że policzona granica była granicą logarytmu i trzeba ją jeszcze podnieść do wykładnika.', en: 'Answering $0$ — forgetting the computed limit was of the logarithm, and must still be exponentiated.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'asymptoty',
      title: { pl: 'Asymptoty', en: 'Asymptotes' },
      level: 4,
      prereq: ['granice-funkcji'],
      theory: {
        pl: 'Trzy rodzaje, wszystkie zdefiniowane granicami. Pozioma: $\\lim_{x\\to\\infty}f(x)=L$ daje '
          + '$y=L$. Pionowa: nieskończona granica \\emph{jednostronna} w $a$ daje $x=a$ — kandydatami są '
          + 'punkty brzegowe dziedziny. Ukośna: $a=\\lim\\frac{f(x)}{x}$, $b=\\lim(f(x)-ax)$; jeśli obie '
          + 'istnieją i są skończone, asymptotą jest $y=ax+b$. Pozioma to szczególny przypadek ukośnej '
          + 'z $a=0$ — funkcja nie może mieć obu po tej samej stronie. Każdą nieskończoność '
          + '($+\\infty$ i $-\\infty$) bada się osobno, bo wyniki bywają różne.',
        en: 'Three kinds, all defined by limits. Horizontal: $\\lim_{x\\to\\infty}f=L$ gives $y=L$. Vertical: '
          + 'an infinite *one-sided* limit at $a$ gives $x=a$ — candidates are the boundary points of the '
          + 'domain. Oblique: $a=\\lim\\frac{f}{x}$, $b=\\lim(f-ax)$; both finite gives $y=ax+b$. Horizontal '
          + 'is the oblique case $a=0$, so a function cannot have both on the same side. Each infinity is '
          + 'examined separately.',
      },
      formulas: [
        { id: 'asymptota-pozioma', tex: '\\lim_{x\\to\\infty} f(x) = L \\ \\Rightarrow\\ y = L', name: { pl: 'Asymptota pozioma', en: 'Horizontal asymptote' }, note: { pl: 'Badana osobno w $+\\infty$ i $-\\infty$ — mogą wyjść dwie różne, jak w $\\operatorname{arctg}$.', en: 'Checked separately at each infinity — they can differ, as for $\\operatorname{arctg}$.' }, drill: true },
        { id: 'asymptota-pionowa', tex: '\\lim_{x\\to a^{-}} f(x) = \\pm\\infty \\ \\text{lub}\\ \\lim_{x\\to a^{+}} f(x) = \\pm\\infty \\ \\Rightarrow\\ x = a', name: { pl: 'Asymptota pionowa', en: 'Vertical asymptote' }, note: { pl: 'Wystarczy jedna strona. Kandydaci: zera mianownika i brzegi dziedziny — ale $\\frac{\\sin x}{x}$ w zerze asymptoty NIE ma.', en: 'One side suffices. Candidates are the domain boundary — but $\\frac{\\sin x}{x}$ has NO asymptote at zero.' }, drill: true },
        { id: 'asymptota-ukosna', tex: 'a = \\lim_{x\\to\\infty}\\frac{f(x)}{x},\\quad b = \\lim_{x\\to\\infty}\\big(f(x)-ax\\big) \\ \\Rightarrow\\ y = ax+b', name: { pl: 'Asymptota ukośna', en: 'Oblique asymptote' }, note: { pl: 'Kolejność jest istotna: najpierw $a$, potem $b$ z tym konkretnym $a$. Obie granice muszą być skończone.', en: 'Order matters: first $a$, then $b$ using that $a$. Both limits must be finite.' }, drill: true },
      ],
      skills: [
        { id: 'asymptoty-wymierne', title: { pl: 'Asymptoty funkcji wymiernych', en: 'Asymptotes of rational functions' }, levels: [3, 4] },
        { id: 'asymptoty-ukosne', title: { pl: 'Asymptoty ukośne', en: 'Oblique asymptotes' }, levels: [4, 5] },
        { id: 'asymptoty-niestandardowe', title: { pl: 'Pierwiastki, moduły, $e^x$', en: 'Roots, absolute values, $e^x$' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'asymptoty-l3-01',
          skill: 'asymptoty-wymierne',
          level: 3,
          prompt: { pl: 'Wyznacz wszystkie asymptoty funkcji $f(x)=\\frac{2x+1}{x-3}$.', en: 'Find all asymptotes of $f(x)=\\frac{2x+1}{x-3}$.' },
          answer: 'x=3,\\ y=2',
          accept: ['x=3, y=2'],
          solution: [
            { pl: 'Pionowa: mianownik zeruje się w $x=3$, licznik nie; granice jednostronne to $\\mp\\infty$. Zatem $x=3$.', en: 'Vertical at $x=3$.' },
            { pl: 'Pozioma: $\\lim_{x\\to\\pm\\infty}\\frac{2x+1}{x-3} = 2$. Zatem $y=2$.', en: 'Horizontal: the limit at both infinities is $2$.' },
          ],
          trap: { pl: 'Wzięcie $y=\\frac21$ z wyrazów wolnych zamiast ilorazu współczynników wiodących.', en: 'Reading the ratio of constants instead of leading coefficients.' },
        },
        {
          id: 'asymptoty-l4-01',
          skill: 'asymptoty-ukosne',
          level: 4,
          prompt: { pl: 'Wyznacz asymptotę ukośną funkcji $f(x)=\\frac{x^{2}+2x-1}{x-1}$ w $+\\infty$.', en: 'Find the oblique asymptote of $f(x)=\\frac{x^{2}+2x-1}{x-1}$ at $+\\infty$.' },
          answer: 'y=x+3',
          accept: ['y = x+3'],
          solution: [
            { pl: '$a = \\lim\\frac{f(x)}{x} = \\lim\\frac{x^2+2x-1}{x^2-x} = 1$.', en: '$a = 1$.' },
            { pl: '$b = \\lim\\big(f(x)-x\\big) = \\lim\\frac{x^2+2x-1-x^2+x}{x-1} = \\lim\\frac{3x-1}{x-1} = 3$.', en: '$b = \\lim\\frac{3x-1}{x-1} = 3$.' },
            { pl: 'Asymptota: $y=x+3$. (To samo daje dzielenie wielomianów: $f(x)=x+3+\\frac{2}{x-1}$.)', en: '$y=x+3$; polynomial division gives the same.' },
          ],
          trap: { pl: 'Policzenie $b$ jako $\\lim f(x) - \\lim ax$ — różnicy granic, które osobno są nieskończone. $b$ to granica RÓŻNICY.', en: 'Computing $b$ as a difference of two infinite limits — $b$ is the limit of the difference.' },
        },
        {
          id: 'asymptoty-l5-01',
          skill: 'asymptoty-niestandardowe',
          level: 5,
          prompt: { pl: 'Wyznacz asymptoty ukośne funkcji $f(x)=\\sqrt{x^{2}+4x}$ w $+\\infty$ oraz w $-\\infty$.', en: 'Find the oblique asymptotes of $f(x)=\\sqrt{x^{2}+4x}$ at both infinities.' },
          answer: 'y=x+2\\ (+\\infty),\\quad y=-x-2\\ (-\\infty)',
          accept: ['y=x+2 i y=-x-2'],
          solution: [
            { pl: 'W $+\\infty$: $a=\\lim\\frac{\\sqrt{x^2+4x}}{x} = \\lim\\sqrt{1+\\frac4x} = 1$.', en: 'At $+\\infty$: $a=1$.' },
            { pl: '$b=\\lim\\big(\\sqrt{x^2+4x}-x\\big) = \\lim\\frac{4x}{\\sqrt{x^2+4x}+x} = \\frac42 = 2$. Zatem $y=x+2$.', en: '$b=2$ by conjugation, so $y=x+2$.' },
            { pl: 'W $-\\infty$: dla $x<0$ mamy $\\sqrt{x^2}=|x|=-x$, więc $a=\\lim\\frac{\\sqrt{x^2+4x}}{x} = -1$ i po analogicznym rachunku $b=-2$. Zatem $y=-x-2$.', en: 'At $-\\infty$, $\\sqrt{x^2}=-x$, giving $a=-1$, $b=-2$: $y=-x-2$.' },
          ],
          trap: { pl: 'Przyjęcie $\\sqrt{x^2}=x$ przy $x\\to-\\infty$ — moduł zmienia znak $a$ i całą asymptotę.', en: 'Taking $\\sqrt{x^2}=x$ as $x\\to-\\infty$ — the absolute value flips the sign of $a$.' },
        },
        {
          id: 'asymptoty-l4-02',
          skill: 'asymptoty-wymierne',
          level: 4,
          prompt: { pl: 'Czy funkcja $f(x)=\\frac{x^{2}-1}{x-1}$ ma asymptotę pionową w $x=1$? Odpowiedz i uzasadnij granicą.', en: 'Does $f(x)=\\frac{x^{2}-1}{x-1}$ have a vertical asymptote at $x=1$? Justify with a limit.' },
          answer: '\\text{Nie: } \\lim_{x\\to 1} f(x) = 2',
          accept: ['nie', 'no'],
          solution: [
            { pl: 'Dla $x\\neq1$: $f(x)=\\frac{(x-1)(x+1)}{x-1} = x+1$.', en: 'For $x\\neq1$, $f(x)=x+1$.' },
            { pl: '$\\lim_{x\\to1}f(x) = 2$ — granica skończona, więc to dziura w wykresie, nie asymptota.', en: 'The limit is $2$ — a hole, not an asymptote.' },
          ],
          trap: { pl: 'Automatyczne „mianownik się zeruje, więc jest asymptota” — zero licznika w tym samym punkcie potrafi ją skasować.', en: '"Denominator vanishes therefore asymptote" — a matching zero upstairs can cancel it.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pole-kola-granica',
      title: { pl: 'Pole koła jako granica', en: 'The area of a circle as a limit' },
      level: 4,
      prereq: ['granice-ciagow'],
      theory: {
        pl: 'Klasyczne zastosowanie granicy: wielokąt foremny o $n$ bokach wpisany w okrąg o promieniu $R$ '
          + 'ma pole $P_n = \\frac{n R^2}{2}\\sin\\frac{2\\pi}{n}$ — $n$ trójkątów równoramiennych o kącie '
          + 'środkowym $\\frac{2\\pi}{n}$. Przy $n\\to\\infty$ podstawienie $t=\\frac{2\\pi}{n}$ i granica '
          + '$\\lim_{t\\to0}\\frac{\\sin t}{t}=1$ dają $P_n \\to \\pi R^2$. To samo rozumowanie z obwodem '
          + 'daje $2\\pi R$ — i pokazuje, skąd naprawdę bierze się $\\pi$ w obu wzorach.',
        en: 'The classic application of a limit: a regular $n$-gon inscribed in a circle of radius $R$ has '
          + 'area $P_n = \\frac{nR^2}{2}\\sin\\frac{2\\pi}{n}$. As $n\\to\\infty$, substituting $t=\\frac{2\\pi}{n}$ '
          + 'and using $\\lim_{t\\to0}\\frac{\\sin t}{t}=1$ gives $P_n\\to\\pi R^2$.',
      },
      formulas: [
        { id: 'pole-wielokata', tex: 'P_{n} = \\frac{n R^{2}}{2}\\sin\\frac{2\\pi}{n}', name: { pl: 'Pole $n$-kąta foremnego wpisanego', en: 'Area of an inscribed regular $n$-gon' }, note: { pl: '$n$ trójkątów o ramionach $R$ i kącie $\\frac{2\\pi}{n}$; pole trójkąta ze wzoru $\\frac12ab\\sin\\gamma$.', en: '$n$ triangles with legs $R$ and angle $\\frac{2\\pi}{n}$.' }, drill: true },
        { id: 'granica-sin-t-t', tex: '\\lim_{t\\to 0}\\frac{\\sin t}{t} = 1', name: { pl: 'Granica specjalna $\\frac{\\sin t}{t}$', en: 'The special limit $\\frac{\\sin t}{t}$' }, note: { pl: 'Tylko w mierze łukowej. To z niej wynika $(\\sin x)\'=\\cos x$.', en: 'Radians only. This is what makes $(\\sin x)\'=\\cos x$ true.' }, drill: true },
      ],
      skills: [
        { id: 'pole-kola-wyprowadzenie', title: { pl: 'Wyprowadzenie pola koła', en: 'Deriving the circle area' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'pole-kola-granica-l4-01',
          skill: 'pole-kola-wyprowadzenie',
          level: 4,
          prompt: { pl: 'Korzystając z $P_n = \\frac{nR^2}{2}\\sin\\frac{2\\pi}{n}$ i granicy $\\lim_{t\\to0}\\frac{\\sin t}{t}=1$, oblicz $\\lim_{n\\to\\infty} P_n$.', en: 'From $P_n = \\frac{nR^2}{2}\\sin\\frac{2\\pi}{n}$ and $\\lim_{t\\to0}\\frac{\\sin t}{t}=1$, compute $\\lim_{n\\to\\infty}P_n$.' },
          answer: '\\pi R^{2}',
          accept: ['\\pi R^2'],
          solution: [
            { pl: 'Przepisujemy: $P_n = \\pi R^2\\cdot\\frac{\\sin\\frac{2\\pi}{n}}{\\frac{2\\pi}{n}}$.', en: 'Rewrite: $P_n = \\pi R^2\\cdot\\frac{\\sin(2\\pi/n)}{2\\pi/n}$.' },
            { pl: 'Przy $n\\to\\infty$ argument $t=\\frac{2\\pi}{n}\\to0$, więc ułamek dąży do 1.', en: 'As $n\\to\\infty$ the fraction tends to 1.' },
            { pl: '$\\lim P_n = \\pi R^2$.', en: '$\\lim P_n = \\pi R^2$.' },
          ],
          trap: { pl: 'Wstawienie $\\sin\\frac{2\\pi}{n}\\approx\\frac{2\\pi}{n}$ bez przepisania w jawną postać $\\frac{\\sin t}{t}$ — działa, ale bez uzasadnienia jest strzałem.', en: 'Substituting the small-angle approximation without exhibiting the $\\frac{\\sin t}{t}$ structure.' },
        },
        {
          id: 'pole-kola-granica-l5-01',
          skill: 'pole-kola-wyprowadzenie',
          level: 5,
          prompt: { pl: 'Obwód $n$-kąta foremnego wpisanego w okrąg o promieniu $R$ wynosi $L_n = 2nR\\sin\\frac{\\pi}{n}$. Oblicz $\\lim_{n\\to\\infty}L_n$.', en: 'The perimeter of an inscribed regular $n$-gon is $L_n = 2nR\\sin\\frac{\\pi}{n}$. Compute the limit.' },
          answer: '2\\pi R',
          accept: ['2\\pi R'],
          solution: [
            { pl: '$L_n = 2\\pi R\\cdot\\frac{\\sin\\frac{\\pi}{n}}{\\frac{\\pi}{n}}$.', en: '$L_n = 2\\pi R\\cdot\\frac{\\sin(\\pi/n)}{\\pi/n}$.' },
            { pl: 'Ułamek dąży do 1, więc $\\lim L_n = 2\\pi R$ — obwód okręgu.', en: 'The fraction tends to 1: $2\\pi R$.' },
          ],
          trap: { pl: 'Pomylenie kąta: przy obwodzie bok odpowiada połowie kąta środkowego, stąd $\\frac{\\pi}{n}$, nie $\\frac{2\\pi}{n}$.', en: 'Using $\\frac{2\\pi}{n}$ — the side subtends half the central angle here.' },
        },
      ],
    },
  ],
};
