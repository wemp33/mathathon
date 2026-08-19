// Przebieg zmienności funkcji i optymalizacja — the capstone of the derivative
// track: everything from granice through pochodne and asymptoty meets here.
export default {
  id: 'badanie-funkcji',
  track: 'calculus',
  order: 230,
  title: { pl: 'Przebieg zmienności', en: 'Curve sketching' },
  blurb: {
    pl: 'Pełny schemat badania funkcji, ekstrema, wypukłość i zadania optymalizacyjne.',
    en: 'The full curve-sketching routine, extrema, convexity, and optimisation problems.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'monotonicznosc-ekstrema-adv',
      title: { pl: 'Monotoniczność i ekstrema', en: 'Monotonicity and extrema' },
      level: 4,
      prereq: ['tablica-pochodnych'],
      theory: {
        pl: 'Znak pochodnej steruje przebiegiem: $f\'>0$ na przedziale daje funkcję rosnącą, $f\'<0$ — '
          + 'malejącą. Warunek konieczny ekstremum (Fermat): w ekstremum wewnętrznym $f\'(x_0)=0$. To '
          + 'warunek KONIECZNY, nie wystarczający — $f(x)=x^3$ ma $f\'(0)=0$ i żadnego ekstremum. '
          + 'Wystarczający jest test pierwszej pochodnej: znak $f\'$ musi się w $x_0$ ZMIENIĆ '
          + '(z $+$ na $-$: maksimum; z $-$ na $+$: minimum). Alternatywnie test drugiej pochodnej: '
          + '$f\'(x_0)=0$ i $f\'\'(x_0)<0$ daje maksimum, $f\'\'(x_0)>0$ minimum, a $f\'\'(x_0)=0$ nie '
          + 'rozstrzyga. Kandydatami są też punkty, gdzie $f\'$ nie istnieje — $|x|$ ma minimum w zerze '
          + 'bez żadnego zera pochodnej.',
        en: 'The sign of the derivative drives the shape: $f\'>0$ means increasing, $f\'<0$ decreasing. '
          + 'Fermat: at an interior extremum $f\'(x_0)=0$ — necessary, not sufficient ($x^3$ at zero). '
          + 'Sufficient is the first-derivative test: the sign of $f\'$ must CHANGE at $x_0$. The second-'
          + 'derivative test is the alternative; $f\'\'(x_0)=0$ decides nothing. Points where $f\'$ does '
          + 'not exist are candidates too — $|x|$ has its minimum with no zero of the derivative.',
      },
      formulas: [
        { id: 'monotonicznosc-znak', tex: 'f\'(x) > 0 \\text{ na } (a,b) \\Rightarrow f \\text{ rosnąca na } (a,b)', name: { pl: 'Monotoniczność ze znaku pochodnej', en: 'Monotonicity from the sign of the derivative' }, note: { pl: 'Analogicznie $f\'<0$ daje malejącą. Wniosek działa na PRZEDZIALE, nie w punkcie.', en: 'The conclusion holds on an INTERVAL, not at a point.' }, drill: true },
        { id: 'fermat', tex: 'f \\text{ ma ekstremum w } x_{0} \\Rightarrow f\'(x_{0}) = 0 \\ \\text{lub } f\'(x_{0}) \\text{ nie istnieje}', name: { pl: 'Warunek konieczny ekstremum', en: 'The necessary condition (Fermat)' }, note: { pl: 'Implikacja w jedną stronę: zero pochodnej to dopiero kandydat.', en: 'One-way implication: a zero of the derivative is only a candidate.' }, drill: true },
        { id: 'test-pierwszej', tex: 'f\' \\text{ zmienia znak w } x_{0} \\Rightarrow \\text{ekstremum w } x_{0}', name: { pl: 'Test pierwszej pochodnej', en: 'First-derivative test' }, note: { pl: 'Z $+$ na $-$: maksimum. Z $-$ na $+$: minimum. Bez zmiany znaku: brak ekstremum.', en: '$+$ to $-$: maximum; $-$ to $+$: minimum; no change: no extremum.' }, drill: true },
        { id: 'test-drugiej', tex: 'f\'(x_{0})=0,\\ f\'\'(x_{0})<0 \\Rightarrow \\max;\\qquad f\'\'(x_{0})>0 \\Rightarrow \\min', name: { pl: 'Test drugiej pochodnej', en: 'Second-derivative test' }, note: { pl: 'Gdy $f\'\'(x_0)=0$, test milczy — wracamy do znaku pierwszej pochodnej.', en: 'When $f\'\'(x_0)=0$ the test is silent — fall back to the first-derivative sign.' }, drill: true },
      ],
      skills: [
        { id: 'przedzialy-monotonicznosci', title: { pl: 'Przedziały monotoniczności', en: 'Intervals of monotonicity' }, levels: [3, 4] },
        { id: 'ekstrema-lokalne', title: { pl: 'Ekstrema lokalne', en: 'Local extrema' }, levels: [4, 5] },
        { id: 'najwieksza-najmniejsza', title: { pl: 'Wartości na przedziale domkniętym', en: 'Extremes on a closed interval' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'monotonicznosc-ekstrema-adv-l3-01',
          skill: 'przedzialy-monotonicznosci',
          level: 3,
          prompt: { pl: 'Wyznacz przedziały monotoniczności funkcji $f(x)=x^{3}-3x$.', en: 'Find the intervals of monotonicity of $f(x)=x^{3}-3x$.' },
          answer: '\\text{rosnąca na } (-\\infty,-1) \\text{ i } (1,\\infty),\\ \\text{malejąca na } (-1,1)',
          accept: ['rosnie na (-inf,-1) i (1,inf), maleje na (-1,1)'],
          solution: [
            { pl: '$f\'(x)=3x^2-3 = 3(x-1)(x+1)$.', en: '$f\'(x)=3(x-1)(x+1)$.' },
            { pl: 'Znak: dodatni dla $|x|>1$, ujemny dla $|x|<1$.', en: 'Positive for $|x|>1$, negative between.' },
            { pl: 'Stąd rosnąca na $(-\\infty,-1)$ i $(1,\\infty)$, malejąca na $(-1,1)$.', en: 'Hence the stated intervals.' },
          ],
          trap: { pl: 'Zapisanie „rosnąca na $(-\\infty,-1)\\cup(1,\\infty)$" jako jednego przedziału — monotoniczność orzeka się na każdym przedziale osobno.', en: 'Writing the union as one interval — monotonicity is per-interval.' },
        },
        {
          id: 'monotonicznosc-ekstrema-adv-l4-01',
          skill: 'ekstrema-lokalne',
          level: 4,
          prompt: { pl: 'Wyznacz ekstrema lokalne funkcji $f(x)=x e^{-x}$.', en: 'Find the local extrema of $f(x)=x e^{-x}$.' },
          answer: '\\text{maksimum } f(1)=\\frac{1}{e}',
          accept: ['max w x=1, f(1)=1/e'],
          solution: [
            { pl: '$f\'(x) = e^{-x} - x e^{-x} = e^{-x}(1-x)$.', en: '$f\'(x)=e^{-x}(1-x)$.' },
            { pl: '$e^{-x}>0$ zawsze, więc znak steruje czynnik $(1-x)$: dodatni dla $x<1$, ujemny dla $x>1$.', en: 'The sign follows $(1-x)$.' },
            { pl: 'Znak zmienia się z $+$ na $-$ w $x=1$: maksimum, $f(1)=e^{-1}=\\frac1e$.', en: 'Sign change $+$ to $-$ at $x=1$: maximum $\\frac1e$.' },
          ],
          trap: { pl: 'Zgubienie czynnika z reguły iloczynu i policzenie $f\'=e^{-x}$ — wtedy ekstremów „nie ma”.', en: 'Losing the product-rule term gives $f\'=e^{-x}$ and "no extrema".' },
        },
        {
          id: 'monotonicznosc-ekstrema-adv-l5-01',
          skill: 'najwieksza-najmniejsza',
          level: 5,
          prompt: { pl: 'Wyznacz najmniejszą i największą wartość funkcji $f(x)=x^{3}-6x^{2}+9x+1$ na przedziale $\\langle 0, 5\\rangle$.', en: 'Find the least and greatest values of $f(x)=x^{3}-6x^{2}+9x+1$ on $[0,5]$.' },
          answer: 'f_{\\min}=f(0)=1,\\quad f_{\\max}=f(5)=21',
          accept: ['min 1, max 21'],
          solution: [
            { pl: '$f\'(x)=3x^2-12x+9=3(x-1)(x-3)$; zera w $x=1$ i $x=3$, oba w przedziale.', en: 'Critical points at $1$ and $3$, both inside.' },
            { pl: 'Wartości: $f(0)=1$, $f(1)=5$, $f(3)=1$, $f(5)=21$.', en: '$f(0)=1$, $f(1)=5$, $f(3)=1$, $f(5)=21$.' },
            { pl: 'Najmniejsza $1$ (w $x=0$ i $x=3$), największa $21$ (w $x=5$).', en: 'Min $1$, max $21$.' },
          ],
          trap: { pl: 'Porównanie tylko wartości w punktach krytycznych — końce przedziału też startują w konkursie, i tu właśnie koniec wygrywa.', en: 'Comparing only the critical points — the endpoints compete too, and here an endpoint wins.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wypuklosc-przegiecia',
      title: { pl: 'Wypukłość i punkty przegięcia', en: 'Convexity and inflection' },
      level: 5,
      prereq: ['monotonicznosc-ekstrema-adv'],
      theory: {
        pl: 'Druga pochodna mierzy, jak wykres się wygina: $f\'\'>0$ na przedziale daje funkcję wypukłą '
          + '(wykres nad stycznymi, „uśmiech”), $f\'\'<0$ — wklęsłą. Punkt przegięcia to miejsce, gdzie '
          + 'wypukłość ZMIENIA się na wklęsłość lub odwrotnie; samo $f\'\'(x_0)=0$ nie wystarcza '
          + '($f(x)=x^4$ ma $f\'\'(0)=0$ i żadnego przegięcia — jest wypukła wszędzie). W tabeli przebiegu '
          + 'zmienności druga pochodna dostaje własny wiersz, a strzałki w wierszu funkcji łączą oba '
          + 'wiersze w jeden obraz.',
        en: 'The second derivative measures bending: $f\'\'>0$ gives convex (graph above its tangents), '
          + '$f\'\'<0$ concave. An inflection point is where convexity actually CHANGES; $f\'\'(x_0)=0$ '
          + 'alone is not enough ($x^4$ at zero). In the variation table the second derivative gets its '
          + 'own row.',
      },
      formulas: [
        { id: 'wypuklosc-znak', tex: 'f\'\'(x)>0 \\text{ na } (a,b) \\Rightarrow f \\text{ wypukła na } (a,b)', name: { pl: 'Wypukłość ze znaku drugiej pochodnej', en: 'Convexity from the second derivative' }, note: { pl: '$f\'\'<0$: wklęsła. Mnemonik: plus to uśmiech.', en: '$f\'\'<0$: concave. Plus is a smile.' }, drill: true },
        { id: 'przegiecie', tex: 'f\'\' \\text{ zmienia znak w } x_{0} \\Rightarrow \\text{punkt przegięcia w } x_{0}', name: { pl: 'Punkt przegięcia', en: 'Inflection point' }, note: { pl: 'Znów: zmiana znaku, nie samo zero.', en: 'Again: a sign change, not a bare zero.' }, drill: true },
      ],
      skills: [
        { id: 'wypuklosc', title: { pl: 'Przedziały wypukłości', en: 'Intervals of convexity' }, levels: [4, 5] },
        { id: 'punkty-przegiecia', title: { pl: 'Punkty przegięcia', en: 'Inflection points' }, levels: [5] },
        { id: 'pelne-badanie', title: { pl: 'Pełny przebieg zmienności', en: 'The full sketching routine' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'wypuklosc-przegiecia-l4-01',
          skill: 'wypuklosc',
          level: 4,
          prompt: { pl: 'Wyznacz przedziały wypukłości i wklęsłości funkcji $f(x)=x^{4}-6x^{2}$.', en: 'Find where $f(x)=x^{4}-6x^{2}$ is convex and concave.' },
          answer: '\\text{wypukła na } (-\\infty,-1) \\text{ i } (1,\\infty),\\ \\text{wklęsła na } (-1,1)',
          accept: ['wypukla |x|>1, wklesla |x|<1'],
          solution: [
            { pl: '$f\'(x)=4x^3-12x$, $f\'\'(x)=12x^2-12=12(x-1)(x+1)$.', en: '$f\'\'(x)=12(x-1)(x+1)$.' },
            { pl: '$f\'\'>0$ dla $|x|>1$ (wypukła), $f\'\'<0$ dla $|x|<1$ (wklęsła).', en: 'Convex for $|x|>1$, concave between.' },
          ],
          trap: { pl: 'Odczytanie znaku $f\'$ zamiast $f\'\'$ — monotoniczność i wypukłość to dwa niezależne pytania.', en: 'Reading the sign of $f\'$ instead of $f\'\'$.' },
        },
        {
          id: 'wypuklosc-przegiecia-l5-01',
          skill: 'punkty-przegiecia',
          level: 5,
          prompt: { pl: 'Czy funkcja $f(x)=x^{4}$ ma punkt przegięcia w $x_0=0$? Uzasadnij.', en: 'Does $f(x)=x^{4}$ have an inflection point at $0$? Justify.' },
          answer: '\\text{Nie: } f\'\'(x)=12x^{2} \\ge 0 \\text{ nie zmienia znaku}',
          accept: ['nie', 'no'],
          solution: [
            { pl: '$f\'\'(x)=12x^2$, więc $f\'\'(0)=0$ — kandydat jest.', en: '$f\'\'(0)=0$, so it is a candidate.' },
            { pl: 'Ale $12x^2\\ge0$ po obu stronach zera: znak się nie zmienia.', en: 'But $12x^2\\ge0$ on both sides: no sign change.' },
            { pl: 'Zatem przegięcia nie ma — funkcja jest wszędzie wypukła.', en: 'No inflection; the function is convex everywhere.' },
          ],
          trap: { pl: 'Uznanie $f\'\'(x_0)=0$ za wystarczające — to dokładnie ta sama pułapka co przy ekstremach i $f\'$.', en: 'Treating $f\'\'=0$ as sufficient — the same trap as with extrema.' },
        },
        {
          id: 'wypuklosc-przegiecia-l6-01',
          skill: 'pelne-badanie',
          level: 6,
          prompt: {
            pl: 'Przeprowadź badanie funkcji $f(x)=\\frac{x^{2}}{x-1}$: dziedzina, asymptoty, monotoniczność i ekstrema. Podaj ekstrema.',
            en: 'Analyse $f(x)=\\frac{x^{2}}{x-1}$: domain, asymptotes, monotonicity, extrema. State the extrema.',
          },
          answer: '\\text{max } f(0)=0,\\quad \\text{min } f(2)=4',
          accept: ['max 0 w x=0, min 4 w x=2'],
          solution: [
            { pl: 'Dziedzina $x\\neq1$. Asymptota pionowa $x=1$; dzielenie daje $f(x)=x+1+\\frac{1}{x-1}$, więc ukośna $y=x+1$.', en: 'Domain $x\\neq1$; vertical asymptote $x=1$; division gives the oblique $y=x+1$.' },
            { pl: '$f\'(x)=\\frac{2x(x-1)-x^2}{(x-1)^2}=\\frac{x^2-2x}{(x-1)^2}=\\frac{x(x-2)}{(x-1)^2}$.', en: '$f\'(x)=\\frac{x(x-2)}{(x-1)^2}$.' },
            { pl: 'Znak licznika: $+$ dla $x<0$, $-$ na $(0,1)$ i $(1,2)$, $+$ dla $x>2$.', en: 'Sign: $+$, $-$, $-$, $+$ across $0$, $1$, $2$.' },
            { pl: 'W $x=0$ zmiana $+\\to-$: maksimum $f(0)=0$. W $x=2$ zmiana $-\\to+$: minimum $f(2)=4$.', en: 'Max $0$ at $0$; min $4$ at $2$.' },
          ],
          trap: { pl: 'Nazwanie $f(0)=0$ „minimum, bo zero jest małe” — lokalne maksimum może leżeć PONIŻEJ lokalnego minimum, gdy między nimi jest asymptota.', en: 'A local maximum can sit BELOW a local minimum when an asymptote separates them — as here.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'optymalizacja',
      title: { pl: 'Optymalizacja', en: 'Optimisation' },
      level: 5,
      prereq: ['monotonicznosc-ekstrema-adv'],
      theory: {
        pl: 'Zadanie optymalizacyjne ma stały rytuał i każdy krok bywa punktowany osobno: (1) nazwij '
          + 'zmienną, (2) zapisz funkcję celu, (3) użyj warunku z treści, by zejść do JEDNEJ zmiennej, '
          + '(4) wyznacz dziedzinę z sensu zadania — długości są dodatnie, (5) policz pochodną i znajdź '
          + 'kandydatów, (6) UZASADNIJ, że to ekstremum żądanego typu (test znaku), (7) odpowiedz na '
          + 'pytanie z treści, we właściwych jednostkach. Krok (6) jest tym, który znika najczęściej — '
          + 'zero pochodnej bez uzasadnienia to połowa zadania.',
        en: 'Optimisation has a fixed ritual, each step often marked separately: name the variable, write '
          + 'the objective, use the constraint to reach ONE variable, take the domain from the physical '
          + 'sense, differentiate, JUSTIFY the extremum type with a sign test, and answer the actual '
          + 'question in the right units. Step (6) is the one that vanishes most often.',
      },
      formulas: [
        { id: 'schemat-optymalizacji', tex: '\\text{zmienna} \\to \\text{funkcja celu} \\to \\text{dziedzina} \\to f\'=0 \\to \\text{test znaku} \\to \\text{odpowiedź}', name: { pl: 'Schemat zadania optymalizacyjnego', en: 'The optimisation routine' }, note: { pl: 'Sprawdzenie, że kandydat naprawdę jest minimum/maksimum, to część zadania, nie ozdoba.', en: 'Verifying the extremum type is part of the task, not decoration.' }, drill: true },
      ],
      skills: [
        { id: 'optymalizacja-geometryczna', title: { pl: 'Optymalizacja geometryczna', en: 'Geometric optimisation' }, levels: [4, 5] },
        { id: 'optymalizacja-tekstowa', title: { pl: 'Zadania z treścią', en: 'Word problems' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'optymalizacja-l4-01',
          skill: 'optymalizacja-geometryczna',
          level: 4,
          prompt: { pl: 'Liczbę $24$ rozłóż na sumę dwóch liczb dodatnich, których iloczyn jest największy. Podaj te liczby.', en: 'Split $24$ into two positive numbers with the greatest product.' },
          answer: '12 \\text{ i } 12',
          accept: ['12 i 12', '12, 12'],
          solution: [
            { pl: 'Liczby: $x$ i $24-x$, $x\\in(0,24)$. Cel: $P(x)=x(24-x)=24x-x^2$.', en: 'Objective $P(x)=24x-x^2$ on $(0,24)$.' },
            { pl: '$P\'(x)=24-2x=0$ daje $x=12$; $P\'$ zmienia znak z $+$ na $-$, więc maksimum.', en: '$x=12$, and the sign test confirms a maximum.' },
            { pl: 'Liczby to $12$ i $12$, iloczyn $144$.', en: 'Both numbers are $12$.' },
          ],
          trap: { pl: 'Brak testu znaku — zero pochodnej mogłoby być równie dobrze minimum.', en: 'No sign test — a zero of the derivative could as well be a minimum.' },
        },
        {
          id: 'optymalizacja-l5-01',
          skill: 'optymalizacja-geometryczna',
          level: 5,
          prompt: {
            pl: 'Z kwadratowego arkusza o boku $12$ wycinamy w rogach kwadraty o boku $x$ i zaginamy ścianki, tworząc otwarte pudełko. Dla jakiego $x$ objętość pudełka jest największa? Podaj $x$ i tę objętość.',
            en: 'From a $12\\times12$ sheet cut squares of side $x$ at the corners and fold up an open box. Which $x$ maximises the volume?',
          },
          answer: 'x=2,\\quad V=128',
          accept: ['x=2, V=128'],
          solution: [
            { pl: '$V(x) = x(12-2x)^2$, dziedzina $x\\in(0,6)$.', en: '$V(x)=x(12-2x)^2$ on $(0,6)$.' },
            { pl: '$V\'(x) = (12-2x)^2 + x\\cdot2(12-2x)(-2) = (12-2x)\\big(12-2x-4x\\big) = (12-2x)(12-6x)$.', en: '$V\'(x)=(12-2x)(12-6x)$.' },
            { pl: 'Zera: $x=6$ (poza sensem — pudełko znika) i $x=2$. Na $(0,2)$: $V\'>0$, na $(2,6)$: $V\'<0$ — maksimum w $x=2$.', en: 'Zeros at $6$ (degenerate) and $2$; sign test gives a maximum at $2$.' },
            { pl: '$V(2)=2\\cdot8^2=128$.', en: '$V(2)=128$.' },
          ],
          trap: { pl: 'Pozostawienie $x=6$ jako kandydata — przy $x=6$ nie ma już dna; dziedzinę wyznacza geometria, nie wzór.', en: 'Keeping $x=6$ — the domain comes from the geometry, not the formula.' },
        },
        {
          id: 'optymalizacja-l6-01',
          skill: 'optymalizacja-tekstowa',
          level: 6,
          prompt: {
            pl: 'Puszka w kształcie walca ma mieć objętość $V=250\\pi\\ \\text{cm}^3$. Wyznacz promień $r$, przy którym pole całkowitej powierzchni puszki (z dnem i wieczkiem) jest najmniejsze.',
            en: 'A cylindrical can must hold $V=250\\pi\\ \\text{cm}^3$. Find the radius minimising the total surface area.',
          },
          answer: 'r=5',
          accept: ['r=5 cm', '5'],
          solution: [
            { pl: 'Z objętości: $\\pi r^2 h = 250\\pi$, więc $h = \\frac{250}{r^2}$.', en: '$h=\\frac{250}{r^2}$.' },
            { pl: 'Pole: $S(r) = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{500\\pi}{r}$, $r>0$.', en: '$S(r)=2\\pi r^2+\\frac{500\\pi}{r}$.' },
            { pl: '$S\'(r) = 4\\pi r - \\frac{500\\pi}{r^2} = 0 \\Rightarrow r^3 = 125 \\Rightarrow r=5$.', en: '$r^3=125$, so $r=5$.' },
            { pl: '$S\'$ zmienia znak z $-$ na $+$ w $r=5$ (albo $S\'\'(5)>0$): minimum. Wtedy $h=10=2r$ — puszka optymalna jest tak wysoka jak szeroka.', en: 'Sign test confirms a minimum; then $h=2r$ — the optimal can is as tall as it is wide.' },
          ],
          trap: { pl: 'Pole bez dna albo bez wieczka — treść mówi „z dnem i wieczkiem", więc $2\\pi r^2$, nie $\\pi r^2$.', en: 'Dropping the lid or base — the problem says both, so $2\\pi r^2$.' },
        },
      ],
    },
  ],
};
