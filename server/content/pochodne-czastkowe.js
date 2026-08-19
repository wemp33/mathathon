// Pochodne cząstkowe — funkcje dwóch zmiennych: dziedzina i poziomice,
// pochodne cząstkowe pierwszego i drugiego rzędu (tw. Schwarza), gradient
// i różniczka zupełna, ekstrema lokalne z hesjanem, reguła łańcuchowa.
export default {
  id: 'pochodne-czastkowe',
  track: 'calculus',
  order: 240,
  title: { pl: 'Pochodne cząstkowe', en: 'Partial derivatives' },
  blurb: {
    pl: 'Funkcje dwóch zmiennych: dziedziny, poziomice, pochodne cząstkowe, gradient, różniczka zupełna, ekstrema lokalne z hesjanem i reguła łańcuchowa.',
    en: 'Functions of two variables: domains, level curves, partial derivatives, the gradient, the total differential, local extrema via the Hessian, and the chain rule.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'funkcje-dwoch-zmiennych',
      title: { pl: 'Funkcje dwóch zmiennych: dziedzina i poziomice', en: 'Functions of two variables: domain and level curves' },
      level: 3,
      prereq: ['funkcja-pojecia'],
      theory: {
        pl: 'Funkcja dwóch zmiennych $f(x,y)$ przypisuje liczbę punktom płaszczyzny; jej wykres jest '
          + 'powierzchnią w $\\mathbb{R}^{3}$. Dziedzina naturalna to zbiór punktów $(x,y)$, dla których wzór '
          + 'ma sens — wypisuje się wszystkie warunki (pierwiastek: $\\ge 0$, logarytm: $>0$, mianownik: '
          + '$\\neq 0$, $\\arcsin$/$\\arccos$: argument w $\\langle-1,1\\rangle$) i bierze ich część wspólną. '
          + 'Dziedzina jest obszarem na płaszczyźnie: kołem, półpłaszczyzną, pasem, obszarem między krzywymi. '
          + 'Poziomica $f(x,y)=c$ to zbiór punktów, w których funkcja przyjmuje wartość $c$ — jak warstwice '
          + 'na mapie: dla $f=x^{2}+y^{2}$ poziomice są okręgami, dla funkcji liniowej — prostymi. '
          + 'Rodzina poziomic dla różnych $c$ pokazuje kształt powierzchni bez rysowania jej w trzech wymiarach.',
        en: 'A function of two variables assigns a number to points of the plane; its graph is a surface in '
          + '$\\mathbb{R}^{3}$. The natural domain collects every condition the formula imposes (roots: '
          + '$\\ge0$, logs: $>0$, denominators: $\\neq0$, $\\arcsin$/$\\arccos$: argument in $[-1,1]$) and '
          + 'intersects them; the result is a region of the plane. The level curve $f(x,y)=c$ is the set '
          + 'where $f$ takes the value $c$ — contour lines on a map: circles for $x^{2}+y^{2}$, lines for a '
          + 'linear function. The family of level curves reveals the surface without a 3D picture.',
      },
      formulas: [
        { id: 'warunki-dziedziny-2z', tex: '\\sqrt{u}:\\ u\\ge 0,\\qquad \\ln u:\\ u>0,\\qquad \\frac{1}{u}:\\ u\\neq 0,\\qquad \\arcsin u,\\ \\arccos u:\\ -1\\le u\\le 1', name: { pl: 'Warunki dziedziny naturalnej', en: 'Natural-domain conditions' }, note: { pl: 'Dziedzina to część wspólna wszystkich warunków — obszar na płaszczyźnie $Oxy$.', en: 'The domain is the intersection of all conditions — a region of the $Oxy$ plane.' }, drill: true },
        { id: 'poziomica-def', tex: 'P_{c} = \\{(x,y):\\ f(x,y)=c\\}', name: { pl: 'Poziomica funkcji', en: 'Level curve' }, note: { pl: 'Warstwica na mapie: zbiór punktów o tej samej wartości funkcji. Różne $c$ dają rodzinę krzywych.', en: 'A contour line: points sharing the value $c$. Varying $c$ gives a family of curves.' }, drill: true },
        { id: 'okrag-postac-kanoniczna', tex: '(x-a)^{2}+(y-b)^{2}=r^{2}', name: { pl: 'Równanie okręgu', en: 'Equation of a circle' }, note: { pl: 'Podstawowe narzędzie opisu dziedzin i poziomic: uzupełnianie do pełnego kwadratu.', en: 'The workhorse for describing domains and level curves: complete the square.' }, drill: true },
      ],
      skills: [
        { id: 'dziedzina-podstawowa', title: { pl: 'Dziedzina z jednym warunkiem', en: 'Single-condition domains' }, levels: [2, 3] },
        { id: 'poziomice', title: { pl: 'Poziomice', en: 'Level curves' }, levels: [3, 5] },
        { id: 'dziedzina-uklad-warunkow', title: { pl: 'Dziedzina z układem warunków', en: 'Multi-condition domains' }, levels: [4, 6] },
      ],
      problems: [
        {
          id: 'funkcje-dwoch-zmiennych-l2-01',
          skill: 'dziedzina-podstawowa',
          level: 2,
          prompt: { pl: 'Wyznacz dziedzinę naturalną funkcji $f(x,y)=\\sqrt{x+y}$.', en: 'Find the natural domain of $f(x,y)=\\sqrt{x+y}$.' },
          answer: '\\{(x,y):\\ x+y\\ge 0\\}\\ \\text{(półpłaszczyzna nad prostą } y=-x\\text{)}',
          accept: ['x+y>=0', 'y>=-x'],
          solution: [
            { pl: 'Pierwiastek wymaga $x+y\\ge 0$, czyli $y\\ge -x$.', en: 'The root requires $x+y\\ge0$, i.e. $y\\ge-x$.' },
            { pl: 'To domknięta półpłaszczyzna leżąca nad prostą $y=-x$ (wraz z nią).', en: 'That is the closed half-plane above the line $y=-x$, line included.' },
          ],
          trap: { pl: 'Ostra nierówność $x+y>0$ — pierwiastek z zera istnieje, brzeg należy do dziedziny.', en: 'Writing $x+y>0$ — the root of zero exists, the boundary belongs to the domain.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l3-01',
          skill: 'dziedzina-podstawowa',
          level: 3,
          prompt: { pl: 'Wyznacz dziedzinę naturalną funkcji $f(x,y)=\\ln\\left(9-x^{2}-y^{2}\\right)$ i opisz ją geometrycznie.', en: 'Find the natural domain of $f(x,y)=\\ln\\left(9-x^{2}-y^{2}\\right)$ and describe it geometrically.' },
          answer: 'x^{2}+y^{2}<9\\ \\text{— otwarte koło o środku } (0,0)\\ \\text{i promieniu } 3',
          accept: ['x^2+y^2<9'],
          solution: [
            { pl: 'Logarytm wymaga $9-x^{2}-y^{2}>0$, czyli $x^{2}+y^{2}<9$.', en: 'The log requires $9-x^{2}-y^{2}>0$, i.e. $x^{2}+y^{2}<9$.' },
            { pl: 'To wnętrze okręgu o środku $(0,0)$ i promieniu $3$ — koło otwarte, bez brzegu.', en: 'The interior of the circle of radius 3 about the origin — an open disk, boundary excluded.' },
          ],
          trap: { pl: 'Nierówność nieostra $\\le 9$ — na okręgu argument logarytmu jest zerem, a $\\ln 0$ nie istnieje.', en: 'Writing $\\le9$ — on the circle the log argument is zero, and $\\ln0$ does not exist.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l3-02',
          skill: 'poziomice',
          level: 3,
          prompt: { pl: 'Wyznacz poziomicę funkcji $f(x,y)=x^{2}+y^{2}$ odpowiadającą wartości $c=4$. Co to za krzywa?', en: 'Find the level curve of $f(x,y)=x^{2}+y^{2}$ for $c=4$. What curve is it?' },
          answer: 'x^{2}+y^{2}=4\\ \\text{— okrąg o środku } (0,0)\\ \\text{i promieniu } 2',
          accept: ['x^2+y^2=4', 'okrag o promieniu 2'],
          solution: [
            { pl: 'Poziomica to rozwiązanie równania $f(x,y)=4$: $x^{2}+y^{2}=4$.', en: 'The level curve solves $f(x,y)=4$: $x^{2}+y^{2}=4$.' },
            { pl: 'To okrąg o środku w początku układu i promieniu $r=\\sqrt{4}=2$.', en: 'A circle centred at the origin with radius $\\sqrt4=2$.' },
          ],
          trap: { pl: 'Promień $4$ zamiast $2$ — w równaniu okręgu po prawej stoi $r^{2}$, nie $r$.', en: 'Radius 4 instead of 2 — the right side of a circle equation is $r^{2}$, not $r$.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l4-01',
          skill: 'dziedzina-uklad-warunkow',
          level: 4,
          prompt: { pl: 'Wyznacz dziedzinę naturalną funkcji $f(x,y)=\\sqrt{y-x^{2}}+\\ln\\left(4-x^{2}-y^{2}\\right)$.', en: 'Find the natural domain of $f(x,y)=\\sqrt{y-x^{2}}+\\ln\\left(4-x^{2}-y^{2}\\right)$.' },
          answer: '\\{(x,y):\\ y\\ge x^{2}\\ \\wedge\\ x^{2}+y^{2}<4\\}',
          accept: ['y>=x^2 i x^2+y^2<4'],
          solution: [
            { pl: 'Pierwiastek: $y-x^{2}\\ge 0$, czyli $y\\ge x^{2}$ — obszar nad parabolą (z parabolą).', en: 'Root: $y\\ge x^{2}$ — on and above the parabola.' },
            { pl: 'Logarytm: $4-x^{2}-y^{2}>0$, czyli $x^{2}+y^{2}<4$ — wnętrze okręgu o promieniu $2$.', en: 'Log: $x^{2}+y^{2}<4$ — the open disk of radius 2.' },
            { pl: 'Dziedzina to część wspólna: kawałek otwartego koła leżący nad parabolą $y=x^{2}$.', en: 'The domain is the intersection: the part of the open disk on and above $y=x^{2}$.' },
          ],
          trap: { pl: 'Zapisanie tylko jednego warunku — każdy składnik wzoru dokłada swój warunek i obowiązują wszystkie naraz.', en: 'Recording only one condition — every term contributes a condition and all hold simultaneously.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l4-02',
          skill: 'poziomice',
          level: 4,
          prompt: { pl: 'Opisz rodzinę poziomic funkcji $f(x,y)=x^{2}-y$ i podaj równanie poziomicy przechodzącej przez punkt $(2,1)$.', en: 'Describe the family of level curves of $f(x,y)=x^{2}-y$ and give the level curve through $(2,1)$.' },
          answer: '\\text{Parabole } y=x^{2}-c;\\ \\text{przez } (2,1)\\text{: } y=x^{2}-3',
          accept: ['y=x^2-3', 'c=3'],
          solution: [
            { pl: 'Poziomica $f=c$: $x^{2}-y=c$, czyli $y=x^{2}-c$ — parabole $y=x^{2}$ przesuwane pionowo.', en: 'The level set $f=c$ is $y=x^{2}-c$: vertical shifts of the parabola $y=x^{2}$.' },
            { pl: 'Przez $(2,1)$: $c=f(2,1)=4-1=3$, więc poziomica ma równanie $y=x^{2}-3$.', en: 'Through $(2,1)$: $c=f(2,1)=3$, so the curve is $y=x^{2}-3$.' },
          ],
          trap: { pl: 'Wstawienie punktu do $y=x^{2}-c$ ze złym znakiem: $c=x^{2}-y$, a nie $y-x^{2}$.', en: 'Sign slip when solving for $c$: $c=x^{2}-y$, not $y-x^{2}$.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l5-01',
          skill: 'dziedzina-uklad-warunkow',
          level: 5,
          prompt: { pl: 'Wyznacz dziedzinę naturalną funkcji $f(x,y)=\\arccos\\left(x^{2}+y^{2}-1\\right)$.', en: 'Find the natural domain of $f(x,y)=\\arccos\\left(x^{2}+y^{2}-1\\right)$.' },
          answer: 'x^{2}+y^{2}\\le 2\\ \\text{— koło domknięte o promieniu } \\sqrt{2}',
          accept: ['x^2+y^2<=2'],
          solution: [
            { pl: 'Argument $\\arccos$ musi leżeć w $\\langle-1,1\\rangle$: $-1\\le x^{2}+y^{2}-1\\le 1$.', en: 'The $\\arccos$ argument must lie in $[-1,1]$: $-1\\le x^{2}+y^{2}-1\\le1$.' },
            { pl: 'Lewa nierówność daje $x^{2}+y^{2}\\ge 0$ — spełniona zawsze.', en: 'The left inequality reads $x^{2}+y^{2}\\ge0$ — always true.' },
            { pl: 'Prawa daje $x^{2}+y^{2}\\le 2$: koło domknięte o środku $(0,0)$ i promieniu $\\sqrt{2}$.', en: 'The right one gives $x^{2}+y^{2}\\le2$: the closed disk of radius $\\sqrt2$.' },
          ],
          trap: { pl: 'Zgubienie jednej strony podwójnej nierówności — tu lewa jest pusta, ale trzeba to POKAZAĆ, nie założyć.', en: 'Dropping one side of the double inequality — here the left side is vacuous, but that must be shown, not assumed.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l5-02',
          skill: 'poziomice',
          level: 5,
          prompt: { pl: 'Dana jest funkcja $f(x,y)=x^{2}+y^{2}-4x$. Opisz poziomice $f(x,y)=c$ w zależności od $c$ i podaj, dla jakiej wartości $c$ poziomica jest jednym punktem.', en: 'For $f(x,y)=x^{2}+y^{2}-4x$ describe the level sets by $c$ and find the $c$ for which the level set is a single point.' },
          answer: '(x-2)^{2}+y^{2}=c+4;\\ \\text{jeden punkt dla } c=-4',
          accept: ['c=-4', '-4'],
          solution: [
            { pl: 'Uzupełniamy do kwadratu: $x^{2}-4x+y^{2}=c$ daje $(x-2)^{2}+y^{2}=c+4$.', en: 'Complete the square: $(x-2)^{2}+y^{2}=c+4$.' },
            { pl: 'Dla $c>-4$: okrąg o środku $(2,0)$ i promieniu $\\sqrt{c+4}$; dla $c<-4$: zbiór pusty.', en: 'For $c>-4$: a circle about $(2,0)$ of radius $\\sqrt{c+4}$; for $c<-4$: empty.' },
            { pl: 'Dla $c=-4$ prawa strona jest zerem — poziomica to jeden punkt $(2,0)$.', en: 'For $c=-4$ the right side is zero — the single point $(2,0)$.' },
          ],
          trap: { pl: 'Zapomnienie o $+4$ z uzupełniania kwadratu — środek $(2,0)$ przesuwa też skalę wartości $c$.', en: 'Losing the $+4$ from completing the square — the shift of centre also shifts the $c$ scale.' },
        },
        {
          id: 'funkcje-dwoch-zmiennych-l6-01',
          skill: 'dziedzina-uklad-warunkow',
          level: 6,
          prompt: { pl: 'Wyznacz dziedzinę naturalną funkcji $f(x,y)=\\dfrac{\\ln(xy)}{\\sqrt{1-x^{2}-y^{2}}}$ i opisz ją geometrycznie.', en: 'Find the natural domain of $f(x,y)=\\dfrac{\\ln(xy)}{\\sqrt{1-x^{2}-y^{2}}}$ and describe it.' },
          answer: '\\{(x,y):\\ xy>0\\ \\wedge\\ x^{2}+y^{2}<1\\}',
          accept: ['xy>0 i x^2+y^2<1'],
          solution: [
            { pl: 'Logarytm: $xy>0$ — punkty, w których $x$ i $y$ mają ten sam znak (I i III ćwiartka, bez osi).', en: 'Log: $xy>0$ — first and third open quadrants, axes excluded.' },
            { pl: 'Mianownik z pierwiastkiem: $1-x^{2}-y^{2}>0$ OSTRO, bo pierwiastek stoi w mianowniku.', en: 'Root in the denominator: $1-x^{2}-y^{2}>0$ STRICTLY, because it sits downstairs.' },
            { pl: 'Dziedzina: dwa wycinki otwartego koła jednostkowego leżące w I i III ćwiartce.', en: 'The domain: the two sectors of the open unit disk lying in quadrants I and III.' },
          ],
          trap: { pl: 'Nieostra nierówność przy pierwiastku — zwykle $\\ge$, ale pierwiastek w MIANOWNIKU wyklucza zero.', en: 'Writing $\\ge$ at the root — usually correct, but a root in the DENOMINATOR excludes zero.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pochodne-czastkowe-pierwsze',
      title: { pl: 'Pochodne cząstkowe pierwszego rzędu', en: 'First-order partial derivatives' },
      level: 4,
      prereq: ['funkcje-dwoch-zmiennych', 'tablica-pochodnych', 'pochodne-zlozone'],
      theory: {
        pl: 'Pochodna cząstkowa $\\frac{\\partial f}{\\partial x}$ mierzy tempo zmian funkcji przy ruchu '
          + 'równoległym do osi $Ox$: różniczkujemy po $x$, traktując $y$ jak STAŁĄ — i symetrycznie dla '
          + '$\\frac{\\partial f}{\\partial y}$. Cała technika jednej zmiennej przenosi się bez zmian: wzory '
          + 'tablicowe, iloczyn, iloraz, funkcja złożona; jedyną nowością jest dyscyplina „która litera jest '
          + 'zmienną”. Na przykład dla $f(x,y)=x^{y}$ pochodna po $x$ liczy się wzorem na potęgę '
          + '($yx^{y-1}$), a po $y$ — wzorem na funkcję wykładniczą ($x^{y}\\ln x$). W punktach, gdzie wzór '
          + 'się psuje, wraca definicja: $f_x(x_0,y_0)=\\lim_{h\\to0}\\frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}$. '
          + 'Piszemy krótko $f_x$ i $f_y$.',
        en: 'The partial $\\frac{\\partial f}{\\partial x}$ measures the rate of change along the $x$ '
          + 'direction: differentiate in $x$ treating $y$ as a CONSTANT, and symmetrically for $y$. All '
          + 'one-variable technique carries over — tables, product, quotient, chain rule; the only new skill '
          + 'is the discipline of "which letter is the variable". For $f=x^{y}$, the $x$-derivative uses the '
          + 'power rule ($yx^{y-1}$) while the $y$-derivative uses the exponential rule ($x^{y}\\ln x$). '
          + 'Where formulas break down, the definition takes over: '
          + '$f_x(x_0,y_0)=\\lim_{h\\to0}\\frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}$.',
      },
      formulas: [
        { id: 'def-pochodnej-czastkowej', tex: 'f_x(x_0,y_0) = \\lim_{h\\to 0}\\frac{f(x_0+h,\\,y_0)-f(x_0,y_0)}{h}', name: { pl: 'Definicja pochodnej cząstkowej', en: 'Definition of the partial derivative' }, note: { pl: 'Druga zmienna zamrożona na $y_0$. Analogicznie $f_y$ z przyrostem przy $y$.', en: 'The other variable is frozen at $y_0$; $f_y$ is analogous.' }, drill: true },
        { id: 'technika-czastkowych', tex: '\\frac{\\partial f}{\\partial x}:\\ y=\\text{const},\\qquad \\frac{\\partial f}{\\partial y}:\\ x=\\text{const}', name: { pl: 'Technika różniczkowania cząstkowego', en: 'The partial-differentiation technique' }, note: { pl: 'Wszystkie wzory jednej zmiennej działają — trzeba tylko pamiętać, która litera jest zmienną.', en: 'All single-variable rules apply — just track which letter is the variable.' }, drill: true },
      ],
      skills: [
        { id: 'czastkowe-technika', title: { pl: 'Wielomiany i ilorazy', en: 'Polynomials and quotients' }, levels: [3, 4] },
        { id: 'czastkowe-zlozone', title: { pl: 'Funkcje złożone', en: 'Composite functions' }, levels: [4, 5] },
        { id: 'czastkowe-definicja', title: { pl: 'Pochodna cząstkowa z definicji', en: 'Partials from the definition' }, levels: [6] },
      ],
      problems: [
        {
          id: 'pochodne-czastkowe-pierwsze-l3-01',
          skill: 'czastkowe-technika',
          level: 3,
          prompt: { pl: 'Wyznacz obie pochodne cząstkowe pierwszego rzędu funkcji $f(x,y)=x^{3}y^{2}-2xy+y$.', en: 'Find both first-order partials of $f(x,y)=x^{3}y^{2}-2xy+y$.' },
          answer: 'f_x = 3x^{2}y^{2}-2y,\\qquad f_y = 2x^{3}y-2x+1',
          accept: ['3x^2y^2-2y; 2x^3y-2x+1'],
          solution: [
            { pl: 'Po $x$ (przy $y=\\text{const}$): $f_x = 3x^{2}\\cdot y^{2} - 2y\\cdot 1 + 0 = 3x^{2}y^{2}-2y$.', en: 'In $x$ ($y$ constant): $f_x=3x^{2}y^{2}-2y$.' },
            { pl: 'Po $y$ (przy $x=\\text{const}$): $f_y = x^{3}\\cdot 2y - 2x + 1$.', en: 'In $y$ ($x$ constant): $f_y=2x^{3}y-2x+1$.' },
          ],
          trap: { pl: 'Zgubienie $+1$ z pochodnej ostatniego składnika $y$ — składnik bez $x$ nie znika przy różniczkowaniu po $y$.', en: 'Losing the $+1$ from the lone $y$ term — a term without $x$ does not vanish when differentiating in $y$.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l3-02',
          skill: 'czastkowe-technika',
          level: 3,
          prompt: { pl: 'Dla funkcji $f(x,y)=\\dfrac{x}{y}$ oblicz $f_y(2,1)$.', en: 'For $f(x,y)=\\dfrac{x}{y}$ compute $f_y(2,1)$.' },
          answer: '-2',
          accept: ['-2'],
          solution: [
            { pl: 'Przy stałym $x$: $f(x,y)=x\\cdot y^{-1}$, więc $f_y = -x y^{-2} = -\\frac{x}{y^{2}}$.', en: 'With $x$ fixed, $f=xy^{-1}$, so $f_y=-\\frac{x}{y^{2}}$.' },
            { pl: 'W punkcie: $f_y(2,1) = -\\frac{2}{1} = -2$.', en: 'At the point: $f_y(2,1)=-2$.' },
          ],
          trap: { pl: 'Użycie wzoru na iloraz z pochodną $x$ po $y$ równą 1 — przy różniczkowaniu po $y$ licznik $x$ jest stałą.', en: 'Quotient rule with $x$ treated as the variable — when differentiating in $y$, the numerator is a constant.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l4-01',
          skill: 'czastkowe-zlozone',
          level: 4,
          prompt: { pl: 'Wyznacz $f_x$ i $f_y$ dla funkcji $f(x,y)=e^{xy}$.', en: 'Find $f_x$ and $f_y$ for $f(x,y)=e^{xy}$.' },
          answer: 'f_x = y\\,e^{xy},\\qquad f_y = x\\,e^{xy}',
          accept: ['ye^{xy}; xe^{xy}'],
          solution: [
            { pl: 'Funkcja złożona: zewnętrzna $e^{u}$, wewnętrzna $u=xy$.', en: 'Composite: outer $e^{u}$, inner $u=xy$.' },
            { pl: 'Po $x$: $e^{xy}\\cdot\\frac{\\partial}{\\partial x}(xy) = e^{xy}\\cdot y$. Po $y$ symetrycznie: $x\\,e^{xy}$.', en: 'In $x$: $e^{xy}\\cdot y$; in $y$: $e^{xy}\\cdot x$.' },
          ],
          trap: { pl: 'Zapomnienie o pochodnej funkcji wewnętrznej — $\\left(e^{xy}\\right)_x \\neq e^{xy}$, mnożnik $y$ jest obowiązkowy.', en: 'Skipping the inner derivative — the factor $y$ is mandatory.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l4-02',
          skill: 'czastkowe-zlozone',
          level: 4,
          prompt: { pl: 'Dla funkcji $f(x,y)=\\ln\\left(x^{2}+y^{2}\\right)$ oblicz $f_x(1,2)$.', en: 'For $f(x,y)=\\ln\\left(x^{2}+y^{2}\\right)$ compute $f_x(1,2)$.' },
          answer: '\\frac{2}{5}',
          accept: ['2/5', '0.4', '0{,}4'],
          solution: [
            { pl: 'Reguła łańcuchowa: $f_x = \\frac{1}{x^{2}+y^{2}}\\cdot 2x = \\frac{2x}{x^{2}+y^{2}}$.', en: 'Chain rule: $f_x=\\frac{2x}{x^{2}+y^{2}}$.' },
            { pl: 'W punkcie $(1,2)$: $f_x = \\frac{2}{1+4} = \\frac{2}{5}$.', en: 'At $(1,2)$: $\\frac{2}{5}$.' },
          ],
          trap: { pl: 'Różniczkowanie całego $x^{2}+y^{2}$ po obu zmiennych naraz ($2x+2y$ w liczniku) — po $x$ składnik $y^{2}$ jest stałą.', en: 'Getting $2x+2y$ upstairs — in the $x$-derivative the $y^{2}$ term is constant.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l4-03',
          skill: 'czastkowe-zlozone',
          level: 4,
          prompt: { pl: 'Wyznacz $f_x$ i $f_y$ dla funkcji $f(x,y)=\\sin\\left(x^{2}y\\right)$.', en: 'Find $f_x$ and $f_y$ for $f(x,y)=\\sin\\left(x^{2}y\\right)$.' },
          answer: 'f_x = 2xy\\cos\\left(x^{2}y\\right),\\qquad f_y = x^{2}\\cos\\left(x^{2}y\\right)',
          accept: ['2xycos(x^2y); x^2cos(x^2y)'],
          solution: [
            { pl: 'Zewnętrzna $\\sin u$, wewnętrzna $u=x^{2}y$: pochodna to $\\cos(x^{2}y)$ razy pochodna wnętrza.', en: 'Outer $\\sin u$, inner $u=x^{2}y$: $\\cos(x^{2}y)$ times the inner derivative.' },
            { pl: 'Po $x$: wnętrze daje $2xy$, więc $f_x = 2xy\\cos(x^{2}y)$. Po $y$: wnętrze daje $x^{2}$.', en: 'In $x$ the inside gives $2xy$; in $y$ it gives $x^{2}$.' },
          ],
          trap: { pl: 'Mnożnik wewnętrzny po $x$ to $2xy$, nie $2x$ — stała $y$ zostaje przy różniczkowaniu $x^{2}y$.', en: 'The inner factor in $x$ is $2xy$, not $2x$ — the constant $y$ survives.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l5-01',
          skill: 'czastkowe-zlozone',
          level: 5,
          prompt: { pl: 'Dla funkcji $f(x,y)=x^{y}$ (gdzie $x>0$) wyznacz $f_x$ oraz $f_y$.', en: 'For $f(x,y)=x^{y}$ (with $x>0$) find $f_x$ and $f_y$.' },
          answer: 'f_x = y\\,x^{y-1},\\qquad f_y = x^{y}\\ln x',
          accept: ['yx^{y-1}; x^y ln x'],
          solution: [
            { pl: 'Po $x$ wykładnik $y$ jest stałą — działa wzór potęgowy: $f_x = y\\,x^{y-1}$.', en: 'In $x$ the exponent is constant — power rule: $yx^{y-1}$.' },
            { pl: 'Po $y$ podstawa $x$ jest stałą — to funkcja wykładnicza $a^{y}$ o podstawie $a=x$: $f_y = x^{y}\\ln x$.', en: 'In $y$ the base is constant — exponential rule: $x^{y}\\ln x$.' },
          ],
          trap: { pl: 'Użycie jednego wzoru do obu pochodnych — ta sama funkcja jest potęgową względem $x$, a wykładniczą względem $y$.', en: 'One rule for both partials — the same function is a power in $x$ and an exponential in $y$.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l5-02',
          skill: 'czastkowe-zlozone',
          level: 5,
          prompt: { pl: 'Wyznacz $f_x$ i $f_y$ dla funkcji $f(x,y)=\\operatorname{arctg}\\dfrac{y}{x}$ i uprość wyniki.', en: 'Find and simplify $f_x$ and $f_y$ for $f(x,y)=\\operatorname{arctg}\\dfrac{y}{x}$.' },
          answer: 'f_x = \\frac{-y}{x^{2}+y^{2}},\\qquad f_y = \\frac{x}{x^{2}+y^{2}}',
          accept: ['-y/(x^2+y^2); x/(x^2+y^2)'],
          solution: [
            { pl: 'Po $x$: $f_x = \\frac{1}{1+\\frac{y^{2}}{x^{2}}}\\cdot\\left(-\\frac{y}{x^{2}}\\right)$.', en: 'In $x$: $\\frac{1}{1+y^{2}/x^{2}}\\cdot\\left(-\\frac{y}{x^{2}}\\right)$.' },
            { pl: 'Rozszerzamy przez $x^{2}$: $f_x = \\frac{-y}{x^{2}+y^{2}}$.', en: 'Multiply through by $x^{2}$: $\\frac{-y}{x^{2}+y^{2}}$.' },
            { pl: 'Po $y$: $f_y = \\frac{1}{1+\\frac{y^{2}}{x^{2}}}\\cdot\\frac{1}{x} = \\frac{x}{x^{2}+y^{2}}$.', en: 'In $y$: $\\frac{x}{x^{2}+y^{2}}$.' },
          ],
          trap: { pl: 'Pochodna wewnętrzna $\\frac{y}{x}$ po $x$ to $-\\frac{y}{x^{2}}$ (wzór $\\left(\\frac{c}{x}\\right)\' = -\\frac{c}{x^{2}}$), nie $\\frac{1}{x}$.', en: 'The inner derivative in $x$ is $-\\frac{y}{x^{2}}$, not $\\frac{1}{x}$.' },
        },
        {
          id: 'pochodne-czastkowe-pierwsze-l6-01',
          skill: 'czastkowe-definicja',
          level: 6,
          prompt: { pl: 'Dana jest funkcja $f(x,y)=\\sqrt[3]{x^{3}+y^{3}}$. Korzystając z definicji, oblicz $f_x(0,0)$.', en: 'For $f(x,y)=\\sqrt[3]{x^{3}+y^{3}}$ compute $f_x(0,0)$ from the definition.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: 'Wzorami się nie da: reguła łańcuchowa dawałaby w $(0,0)$ dzielenie przez zero.', en: 'Formulas fail: the chain rule would divide by zero at the origin.' },
            { pl: 'Definicja: $f_x(0,0) = \\lim_{h\\to0}\\frac{f(h,0)-f(0,0)}{h} = \\lim_{h\\to0}\\frac{\\sqrt[3]{h^{3}}-0}{h}$.', en: 'Definition: $\\lim_{h\\to0}\\frac{\\sqrt[3]{h^{3}}}{h}$.' },
            { pl: '$\\sqrt[3]{h^{3}} = h$ dla każdego $h$ (pierwiastek nieparzysty), więc granica równa się $\\lim_{h\\to0}\\frac{h}{h} = 1$.', en: '$\\sqrt[3]{h^{3}}=h$ for all $h$, so the limit is 1.' },
          ],
          trap: { pl: 'Mechaniczne różniczkowanie wzorem i wstawienie $(0,0)$ — wzór daje symbol $\\frac{0}{0}$; w punktach osobliwych ratuje tylko definicja.', en: 'Differentiating by formula and plugging in $(0,0)$ — the formula yields $\\frac00$; at singular points only the definition works.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pochodne-czastkowe-drugie',
      title: { pl: 'Pochodne drugiego rzędu i twierdzenie Schwarza', en: 'Second-order partials and Schwarz\u2019s theorem' },
      level: 4,
      prereq: ['pochodne-czastkowe-pierwsze'],
      theory: {
        pl: 'Pochodne cząstkowe można różniczkować dalej: powstają cztery pochodne drugiego rzędu '
          + '$f_{xx}$, $f_{xy}$, $f_{yx}$, $f_{yy}$, gdzie $f_{xy}=(f_x)_y$ — najpierw po $x$, potem po $y$. '
          + 'Twierdzenie Schwarza: jeśli pochodne mieszane $f_{xy}$ i $f_{yx}$ są ciągłe, to są RÓWNE — '
          + 'kolejność różniczkowania nie gra roli. Dla wszystkich funkcji elementarnych spotykanych na '
          + 'egzaminie warunek ciągłości jest spełniony, więc równość $f_{xy}=f_{yx}$ służy jako darmowy test '
          + 'poprawności rachunków: policz obie i porównaj. Wyrażenie $\\Delta f = f_{xx}+f_{yy}$ nazywa się '
          + 'laplasjanem, a funkcje z $\\Delta f=0$ — harmonicznymi; pojawiają się w fizyce jako potencjały.',
        en: 'Partials can be differentiated again: four second-order partials $f_{xx}$, $f_{xy}$, $f_{yx}$, '
          + '$f_{yy}$, with $f_{xy}=(f_x)_y$ — first $x$, then $y$. Schwarz\u2019s theorem: if the mixed '
          + 'partials are continuous, they are EQUAL — the order does not matter. Every elementary function '
          + 'on an exam satisfies the hypothesis, so $f_{xy}=f_{yx}$ is a free check on your algebra: compute '
          + 'both and compare. The expression $\\Delta f=f_{xx}+f_{yy}$ is the Laplacian; functions with '
          + '$\\Delta f=0$ are called harmonic and appear in physics as potentials.',
      },
      formulas: [
        { id: 'notacja-drugich', tex: 'f_{xy} = \\left(f_x\\right)_y = \\frac{\\partial^{2} f}{\\partial y\\,\\partial x}', name: { pl: 'Pochodna mieszana — notacja', en: 'Mixed partial — notation' }, note: { pl: 'W indeksie kolejność czytamy od lewej: najpierw $x$, potem $y$. W zapisie $\\partial$ — od prawej.', en: 'Subscripts read left to right; the $\\partial$ notation reads right to left.' }, drill: true },
        { id: 'tw-schwarza', tex: 'f_{xy},\\ f_{yx}\\ \\text{ciągłe}\\ \\Rightarrow\\ f_{xy} = f_{yx}', name: { pl: 'Twierdzenie Schwarza', en: 'Schwarz\u2019s theorem' }, note: { pl: 'Kolejność różniczkowania nie gra roli. Darmowy test rachunków: policz obie mieszane i porównaj.', en: 'Order of differentiation is irrelevant — a free consistency check.' }, drill: true },
        { id: 'laplasjan', tex: '\\Delta f = f_{xx} + f_{yy}', name: { pl: 'Laplasjan', en: 'The Laplacian' }, note: { pl: 'Funkcje z $\\Delta f = 0$ nazywamy harmonicznymi.', en: 'Functions with $\\Delta f=0$ are harmonic.' }, drill: true },
      ],
      skills: [
        { id: 'drugie-rzedu', title: { pl: 'Cztery pochodne drugiego rzędu', en: 'The four second-order partials' }, levels: [3, 4] },
        { id: 'schwarz-mieszane', title: { pl: 'Pochodne mieszane i tw. Schwarza', en: 'Mixed partials and Schwarz' }, levels: [4, 5] },
        { id: 'rownanie-laplace', title: { pl: 'Równanie Laplace\'a', en: 'The Laplace equation' }, levels: [4, 6] },
      ],
      problems: [
        {
          id: 'pochodne-czastkowe-drugie-l3-01',
          skill: 'drugie-rzedu',
          level: 3,
          prompt: { pl: 'Wyznacz wszystkie pochodne cząstkowe drugiego rzędu funkcji $f(x,y)=x^{3}y-xy^{3}$.', en: 'Find all second-order partials of $f(x,y)=x^{3}y-xy^{3}$.' },
          answer: 'f_{xx}=6xy,\\quad f_{yy}=-6xy,\\quad f_{xy}=f_{yx}=3x^{2}-3y^{2}',
          accept: ['6xy; -6xy; 3x^2-3y^2'],
          solution: [
            { pl: 'Pierwszy rząd: $f_x = 3x^{2}y - y^{3}$, $f_y = x^{3} - 3xy^{2}$.', en: 'First order: $f_x=3x^{2}y-y^{3}$, $f_y=x^{3}-3xy^{2}$.' },
            { pl: 'Drugi rząd: $f_{xx} = 6xy$, $f_{yy} = -6xy$.', en: 'Second order: $f_{xx}=6xy$, $f_{yy}=-6xy$.' },
            { pl: 'Mieszane: $f_{xy} = (f_x)_y = 3x^{2}-3y^{2}$ i $f_{yx} = (f_y)_x = 3x^{2}-3y^{2}$ — zgodnie z tw. Schwarza równe.', en: 'Mixed: both equal $3x^{2}-3y^{2}$, as Schwarz promises.' },
          ],
          trap: { pl: 'Jeśli policzone $f_{xy}$ i $f_{yx}$ wychodzą różne, to sygnał błędu rachunkowego, a nie „ciekawy przypadek”.', en: 'If your $f_{xy}$ and $f_{yx}$ differ, that flags an algebra error, not an interesting exception.' },
        },
        {
          id: 'pochodne-czastkowe-drugie-l4-01',
          skill: 'drugie-rzedu',
          level: 4,
          prompt: { pl: 'Dla funkcji $f(x,y)=\\cos(xy)$ wyznacz $f_{yy}$.', en: 'For $f(x,y)=\\cos(xy)$ find $f_{yy}$.' },
          answer: '-x^{2}\\cos(xy)',
          accept: ['-x^2cos(xy)'],
          solution: [
            { pl: '$f_y = -\\sin(xy)\\cdot x = -x\\sin(xy)$.', en: '$f_y=-x\\sin(xy)$.' },
            { pl: '$f_{yy} = -x\\cdot\\cos(xy)\\cdot x = -x^{2}\\cos(xy)$ — czynnik $x$ jest stały przy różniczkowaniu po $y$.', en: '$f_{yy}=-x^{2}\\cos(xy)$ — the factor $x$ is constant in $y$.' },
          ],
          trap: { pl: 'Użycie wzoru na iloczyn do $-x\\sin(xy)$ przy różniczkowaniu po $y$ — czynnik $-x$ to stała, iloczynu nie ma.', en: 'Product rule on $-x\\sin(xy)$ in the $y$-derivative — the $-x$ is a constant.' },
        },
        {
          id: 'pochodne-czastkowe-drugie-l4-02',
          skill: 'schwarz-mieszane',
          level: 4,
          prompt: { pl: 'Dla funkcji $f(x,y)=x^{2}y^{3}$ oblicz $f_{xy}$ oraz $f_{yx}$ i sprawdź, że są równe.', en: 'For $f(x,y)=x^{2}y^{3}$ compute $f_{xy}$ and $f_{yx}$ and verify they agree.' },
          answer: 'f_{xy} = f_{yx} = 6xy^{2}',
          accept: ['6xy^2'],
          solution: [
            { pl: 'Droga 1: $f_x = 2xy^{3}$, więc $f_{xy} = 6xy^{2}$.', en: 'Route 1: $f_x=2xy^{3}$, so $f_{xy}=6xy^{2}$.' },
            { pl: 'Droga 2: $f_y = 3x^{2}y^{2}$, więc $f_{yx} = 6xy^{2}$.', en: 'Route 2: $f_y=3x^{2}y^{2}$, so $f_{yx}=6xy^{2}$.' },
            { pl: 'Obie drogi dają to samo — pochodne mieszane wielomianu są ciągłe, działa tw. Schwarza.', en: 'Both routes agree — Schwarz applies.' },
          ],
          trap: { pl: 'Pomylenie notacji: $f_{xy}$ znaczy „najpierw po $x$, potem po $y$” — w zapisie $\\frac{\\partial^{2}f}{\\partial y\\,\\partial x}$ kolejność czyta się od prawej.', en: 'Notation mix-up: subscript order reads left to right; the $\\partial$ form reads right to left.' },
        },
        {
          id: 'pochodne-czastkowe-drugie-l4-03',
          skill: 'rownanie-laplace',
          level: 4,
          prompt: { pl: 'Sprawdź, że funkcja $f(x,y)=e^{x}\\sin y$ spełnia równanie Laplace\'a $f_{xx}+f_{yy}=0$.', en: 'Verify that $f(x,y)=e^{x}\\sin y$ satisfies the Laplace equation $f_{xx}+f_{yy}=0$.' },
          answer: 'f_{xx} = e^{x}\\sin y,\\quad f_{yy} = -e^{x}\\sin y,\\quad f_{xx}+f_{yy}=0',
          accept: ['0', 'spelnia'],
          solution: [
            { pl: '$f_x = e^{x}\\sin y$, więc $f_{xx} = e^{x}\\sin y$.', en: '$f_{xx}=e^{x}\\sin y$.' },
            { pl: '$f_y = e^{x}\\cos y$, więc $f_{yy} = -e^{x}\\sin y$.', en: '$f_{yy}=-e^{x}\\sin y$.' },
            { pl: 'Suma: $e^{x}\\sin y - e^{x}\\sin y = 0$ — funkcja jest harmoniczna.', en: 'The sum vanishes — $f$ is harmonic.' },
          ],
          trap: { pl: 'Znak przy drugiej pochodnej sinusa: $(\\sin y)\'\' = -\\sin y$ — zgubiony minus psuje cały rachunek.', en: 'The sign of $(\\sin y)\'\'=-\\sin y$ — a dropped minus wrecks the check.' },
        },
        {
          id: 'pochodne-czastkowe-drugie-l5-01',
          skill: 'schwarz-mieszane',
          level: 5,
          prompt: { pl: 'Dla funkcji $f(x,y)=\\ln(x+2y)$ oblicz $f_{xy}(1,0)$.', en: 'For $f(x,y)=\\ln(x+2y)$ compute $f_{xy}(1,0)$.' },
          answer: '-2',
          accept: ['-2'],
          solution: [
            { pl: '$f_x = \\frac{1}{x+2y}$.', en: '$f_x=\\frac{1}{x+2y}$.' },
            { pl: '$f_{xy} = \\frac{\\partial}{\\partial y}(x+2y)^{-1} = -(x+2y)^{-2}\\cdot 2 = \\frac{-2}{(x+2y)^{2}}$.', en: '$f_{xy}=\\frac{-2}{(x+2y)^{2}}$.' },
            { pl: 'W punkcie $(1,0)$: $f_{xy} = \\frac{-2}{1} = -2$.', en: 'At $(1,0)$: $-2$.' },
          ],
          trap: { pl: 'Zgubienie czynnika 2 z pochodnej wewnętrznej $x+2y$ po $y$ — reguła łańcuchowa obowiązuje też w drugim rzędzie.', en: 'Losing the factor 2 from the inner derivative — the chain rule applies at second order too.' },
        },
        {
          id: 'pochodne-czastkowe-drugie-l5-02',
          skill: 'schwarz-mieszane',
          level: 5,
          prompt: { pl: 'Wyznacz $f_{xy}$ dla funkcji $f(x,y)=x\\,e^{xy}$. Wskazówka: wybierz wygodniejszą kolejność różniczkowania.', en: 'Find $f_{xy}$ for $f(x,y)=x\\,e^{xy}$. Hint: pick the friendlier order.' },
          answer: 'x\\,e^{xy}\\left(xy+2\\right)',
          accept: ['xe^{xy}(xy+2)', 'e^{xy}(x^2y+2x)'],
          solution: [
            { pl: 'Z tw. Schwarza $f_{xy}=f_{yx}$, a droga przez $f_y$ jest prostsza: $f_y = x\\cdot x\\,e^{xy} = x^{2}e^{xy}$.', en: 'By Schwarz compute $f_{yx}$ instead: $f_y=x^{2}e^{xy}$.' },
            { pl: 'Teraz po $x$ (iloczyn): $f_{yx} = 2x\\,e^{xy} + x^{2}\\cdot y\\,e^{xy} = e^{xy}\\left(2x + x^{2}y\\right)$.', en: 'Then in $x$: $e^{xy}(2x+x^{2}y)$.' },
            { pl: 'Po wyłączeniu $x$: $f_{xy} = x\\,e^{xy}(xy+2)$.', en: 'Factor out $x$: $x\\,e^{xy}(xy+2)$.' },
          ],
          trap: { pl: 'Uparta droga przez $f_x = e^{xy}(1+xy)$ wymaga dwóch iloczynów — tw. Schwarza pozwala wybrać łatwiejszą kolejność.', en: 'Grinding through $f_x=e^{xy}(1+xy)$ needs two product rules — Schwarz lets you pick the easier order.' },
        },
        {
          id: 'pochodne-czastkowe-drugie-l6-01',
          skill: 'rownanie-laplace',
          level: 6,
          prompt: { pl: 'Dla jakiej wartości parametru $\\lambda$ funkcja $f(x,y)=x^{3}+\\lambda x y^{2}$ jest harmoniczna, tzn. spełnia $f_{xx}+f_{yy}=0$ w całej płaszczyźnie?', en: 'For which $\\lambda$ is $f(x,y)=x^{3}+\\lambda xy^{2}$ harmonic, i.e. $f_{xx}+f_{yy}=0$ on the whole plane?' },
          answer: '\\lambda = -3',
          accept: ['-3'],
          solution: [
            { pl: '$f_x = 3x^{2}+\\lambda y^{2}$, więc $f_{xx} = 6x$.', en: '$f_{xx}=6x$.' },
            { pl: '$f_y = 2\\lambda xy$, więc $f_{yy} = 2\\lambda x$.', en: '$f_{yy}=2\\lambda x$.' },
            { pl: 'Warunek $6x + 2\\lambda x = 0$ ma zachodzić dla KAŻDEGO $x$: $2\\lambda = -6$, czyli $\\lambda=-3$.', en: '$6x+2\\lambda x=0$ for every $x$ forces $\\lambda=-3$.' },
            { pl: 'Otrzymana funkcja $x^{3}-3xy^{2}$ to część rzeczywista $(x+iy)^{3}$ — klasyczna funkcja harmoniczna.', en: 'The result $x^{3}-3xy^{2}$ is $\\operatorname{Re}(x+iy)^{3}$ — a classic harmonic function.' },
          ],
          trap: { pl: 'Rozwiązanie $6x+2\\lambda x=0$ „dla jakiegoś $x$” — tożsamość ma zachodzić w całej płaszczyźnie, więc znika współczynnik, nie $x$.', en: 'Solving $6x+2\\lambda x=0$ for some $x$ — the identity must hold everywhere, so the coefficient vanishes, not $x$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'gradient-rozniczka-zupelna',
      title: { pl: 'Gradient i różniczka zupełna', en: 'Gradient and the total differential' },
      level: 5,
      prereq: ['pochodne-czastkowe-pierwsze'],
      theory: {
        pl: 'Gradient $\\nabla f = \\left[f_x,\\ f_y\\right]$ zbiera obie pochodne cząstkowe w wektor. '
          + 'Wskazuje on kierunek najszybszego wzrostu funkcji, jego długość $|\\nabla f|$ jest tempem tego '
          + 'wzrostu, a sam wektor jest prostopadły do poziomicy przechodzącej przez dany punkt. '
          + 'Różniczka zupełna $df = f_x\\,dx + f_y\\,dy$ opisuje, jak zmienia się funkcja przy małych '
          + 'przyrostach obu zmiennych naraz. Stąd wzór przybliżony: '
          + '$f(x_0+\\Delta x,\\,y_0+\\Delta y)\\approx f(x_0,y_0)+f_x(x_0,y_0)\\Delta x+f_y(x_0,y_0)\\Delta y$ '
          + '— dwuwymiarowy odpowiednik przybliżenia styczną. Punkt $(x_0,y_0)$ wybiera się „okrągły”, tak by '
          + 'wartość funkcji i pochodne liczyły się dokładnie, a przyrosty były małe. Ten sam wzór szacuje '
          + 'błąd wielkości wyliczanej z niedokładnych pomiarów.',
        en: 'The gradient $\\nabla f=[f_x,\\ f_y]$ packages both partials into a vector: it points in the '
          + 'direction of steepest ascent, its length $|\\nabla f|$ is the rate of that ascent, and it is '
          + 'perpendicular to the level curve through the point. The total differential '
          + '$df=f_x\\,dx+f_y\\,dy$ tracks the change of $f$ under small increments of both variables, giving '
          + 'the approximation $f(x_0+\\Delta x,y_0+\\Delta y)\\approx f(x_0,y_0)+f_x\\Delta x+f_y\\Delta y$ — '
          + 'the two-variable tangent-line approximation. Choose a "round" base point where values and '
          + 'partials are exact and the increments small. The same formula estimates the error of a quantity '
          + 'computed from imprecise measurements.',
      },
      formulas: [
        { id: 'gradient-def', tex: '\\nabla f = \\left[\\frac{\\partial f}{\\partial x},\\ \\frac{\\partial f}{\\partial y}\\right]', name: { pl: 'Gradient', en: 'The gradient' }, note: { pl: 'Wskazuje kierunek najszybszego wzrostu; jest prostopadły do poziomicy.', en: 'Points along steepest ascent; perpendicular to the level curve.' }, drill: true },
        { id: 'dlugosc-gradientu', tex: '\\left|\\nabla f\\right| = \\sqrt{f_x^{2}+f_y^{2}}', name: { pl: 'Tempo najszybszego wzrostu', en: 'The maximal rate of increase' }, note: { pl: 'Największa pochodna kierunkowa w punkcie równa się długości gradientu.', en: 'The largest directional derivative equals the gradient length.' }, drill: true },
        { id: 'rozniczka-zupelna', tex: 'df = f_x\\,dx + f_y\\,dy', name: { pl: 'Różniczka zupełna', en: 'The total differential' }, note: { pl: 'Liniowa część przyrostu funkcji przy małych $dx$, $dy$.', en: 'The linear part of the increment for small $dx$, $dy$.' }, drill: true },
        { id: 'przyblizenie-rozniczka', tex: 'f(x_0+\\Delta x,\\,y_0+\\Delta y) \\approx f(x_0,y_0) + f_x(x_0,y_0)\\,\\Delta x + f_y(x_0,y_0)\\,\\Delta y', name: { pl: 'Przybliżenie różniczką', en: 'Differential approximation' }, note: { pl: 'Punkt $(x_0,y_0)$ okrągły, przyrosty małe — dwuwymiarowa wersja przybliżenia styczną.', en: 'Round base point, small increments — the 2D tangent approximation.' }, drill: true },
      ],
      skills: [
        { id: 'gradient-obliczanie', title: { pl: 'Obliczanie gradientu', en: 'Computing gradients' }, levels: [3, 5] },
        { id: 'rozniczka-obliczanie', title: { pl: 'Różniczka zupełna i szacowanie błędu', en: 'Differentials and error estimates' }, levels: [4, 6] },
        { id: 'przyblizenia-rozniczka', title: { pl: 'Przybliżanie wartości', en: 'Approximating values' }, levels: [5] },
      ],
      problems: [
        {
          id: 'gradient-rozniczka-zupelna-l3-01',
          skill: 'gradient-obliczanie',
          level: 3,
          prompt: { pl: 'Oblicz gradient funkcji $f(x,y)=x^{2}y$ w punkcie $(1,2)$.', en: 'Compute the gradient of $f(x,y)=x^{2}y$ at $(1,2)$.' },
          answer: '\\nabla f(1,2) = \\left[4,\\ 1\\right]',
          accept: ['[4,1]', '(4,1)'],
          solution: [
            { pl: '$f_x = 2xy$, $f_y = x^{2}$.', en: '$f_x=2xy$, $f_y=x^{2}$.' },
            { pl: 'W punkcie: $f_x(1,2) = 4$, $f_y(1,2) = 1$, więc $\\nabla f(1,2)=[4,1]$.', en: 'At the point: $[4,1]$.' },
          ],
          trap: { pl: 'Zamiana współrzędnych miejscami — pierwsza współrzędna gradientu to pochodna po $x$, druga po $y$.', en: 'Swapping the coordinates — first comes the $x$-partial, then the $y$-partial.' },
        },
        {
          id: 'gradient-rozniczka-zupelna-l4-01',
          skill: 'gradient-obliczanie',
          level: 4,
          prompt: { pl: 'Oblicz $\\nabla f(2,1)$ dla $f(x,y)=x^{2}+y^{2}-xy$. Co oznacza zerowa druga współrzędna?', en: 'Compute $\\nabla f(2,1)$ for $f(x,y)=x^{2}+y^{2}-xy$. What does the zero second coordinate mean?' },
          answer: '\\nabla f(2,1) = \\left[3,\\ 0\\right]\\ \\text{— w kierunku osi } Oy\\ \\text{funkcja chwilowo się nie zmienia}',
          accept: ['[3,0]', '(3,0)'],
          solution: [
            { pl: '$f_x = 2x-y$, $f_y = 2y-x$.', en: '$f_x=2x-y$, $f_y=2y-x$.' },
            { pl: 'W $(2,1)$: $f_x = 3$, $f_y = 0$.', en: 'At $(2,1)$: $f_x=3$, $f_y=0$.' },
            { pl: 'Zero przy $y$ znaczy, że ruch pionowy chwilowo nie zmienia wartości funkcji — kierunek osi $Oy$ jest styczny do poziomicy.', en: 'The zero means vertical motion momentarily leaves $f$ unchanged — the $Oy$ direction is tangent to the level curve.' },
          ],
          trap: { pl: 'Odruchowe „$f_y=0$, więc błąd w rachunkach” — zerowa składowa gradientu jest legalna i ma interpretację geometryczną.', en: 'Assuming a zero component signals an error — it is legal and has a geometric meaning.' },
        },
        {
          id: 'gradient-rozniczka-zupelna-l4-02',
          skill: 'rozniczka-obliczanie',
          level: 4,
          prompt: { pl: 'Wyznacz różniczkę zupełną funkcji $f(x,y)=x^{2}y^{3}$.', en: 'Find the total differential of $f(x,y)=x^{2}y^{3}$.' },
          answer: 'df = 2xy^{3}\\,dx + 3x^{2}y^{2}\\,dy',
          accept: ['2xy^3 dx + 3x^2y^2 dy'],
          solution: [
            { pl: '$f_x = 2xy^{3}$ oraz $f_y = 3x^{2}y^{2}$.', en: '$f_x=2xy^{3}$, $f_y=3x^{2}y^{2}$.' },
            { pl: 'Różniczka: $df = f_x\\,dx + f_y\\,dy = 2xy^{3}\\,dx + 3x^{2}y^{2}\\,dy$.', en: '$df=2xy^{3}\\,dx+3x^{2}y^{2}\\,dy$.' },
          ],
          trap: { pl: 'Pominięcie któregoś z czynników $dx$, $dy$ — różniczka jest wyrażeniem w $dx$ i $dy$, nie parą liczb.', en: 'Dropping the $dx$/$dy$ factors — the differential is an expression in them, not a pair of numbers.' },
        },
        {
          id: 'gradient-rozniczka-zupelna-l5-01',
          skill: 'przyblizenia-rozniczka',
          level: 5,
          prompt: { pl: 'Korzystając z różniczki zupełnej, oblicz przybliżoną wartość $\\sqrt{4{,}02^{2}+3{,}03^{2}}$.', en: 'Using the total differential, approximate $\\sqrt{4.02^{2}+3.03^{2}}$.' },
          answer: '\\approx 5{,}034',
          accept: ['5.034', '5,034'],
          solution: [
            { pl: 'Bierzemy $f(x,y)=\\sqrt{x^{2}+y^{2}}$, punkt $(4,3)$ (bo $f(4,3)=5$), przyrosty $\\Delta x = 0{,}02$, $\\Delta y = 0{,}03$.', en: 'Take $f=\\sqrt{x^{2}+y^{2}}$ at $(4,3)$ where $f=5$; $\\Delta x=0.02$, $\\Delta y=0.03$.' },
            { pl: '$f_x = \\frac{x}{\\sqrt{x^{2}+y^{2}}} = \\frac{4}{5}$, $f_y = \\frac{y}{\\sqrt{x^{2}+y^{2}}} = \\frac{3}{5}$.', en: '$f_x=\\frac45$, $f_y=\\frac35$ at the base point.' },
            { pl: '$f \\approx 5 + 0{,}8\\cdot0{,}02 + 0{,}6\\cdot0{,}03 = 5 + 0{,}016 + 0{,}018 = 5{,}034$.', en: '$5+0.016+0.018=5.034$.' },
          ],
          trap: { pl: 'Start z punktu $(4{,}02;\\,3{,}03)$ — bazą musi być punkt okrągły $(4,3)$, w którym wartość i pochodne liczą się dokładnie.', en: 'Basing at $(4.02,3.03)$ — the base must be the round point $(4,3)$ where everything is exact.' },
        },
        {
          id: 'gradient-rozniczka-zupelna-l5-02',
          skill: 'przyblizenia-rozniczka',
          level: 5,
          prompt: { pl: 'Korzystając z różniczki zupełnej, oblicz przybliżoną wartość $1{,}02^{3}\\cdot 0{,}97^{2}$.', en: 'Using the total differential, approximate $1.02^{3}\\cdot0.97^{2}$.' },
          answer: '\\approx 1{,}00',
          accept: ['1', '1.00', '1,00'],
          solution: [
            { pl: '$f(x,y)=x^{3}y^{2}$, punkt $(1,1)$, przyrosty $\\Delta x = 0{,}02$, $\\Delta y = -0{,}03$.', en: '$f=x^{3}y^{2}$ at $(1,1)$; $\\Delta x=0.02$, $\\Delta y=-0.03$.' },
            { pl: '$f_x = 3x^{2}y^{2} = 3$, $f_y = 2x^{3}y = 2$ w punkcie $(1,1)$; $f(1,1)=1$.', en: '$f_x=3$, $f_y=2$, $f(1,1)=1$.' },
            { pl: '$f \\approx 1 + 3\\cdot0{,}02 + 2\\cdot(-0{,}03) = 1 + 0{,}06 - 0{,}06 = 1{,}00$.', en: '$1+0.06-0.06=1.00$.' },
          ],
          trap: { pl: 'Znak przyrostu: $0{,}97 = 1 - 0{,}03$, więc $\\Delta y = -0{,}03$ — dodatni $\\Delta y$ daje błędne $1{,}12$.', en: 'The increment sign: $\\Delta y=-0.03$; taking it positive yields a wrong $1.12$.' },
        },
        {
          id: 'gradient-rozniczka-zupelna-l5-03',
          skill: 'gradient-obliczanie',
          level: 5,
          prompt: { pl: 'W którym kierunku funkcja $f(x,y)=x^{2}-y^{2}$ rośnie najszybciej w punkcie $(1,2)$ i jakie jest tempo tego wzrostu?', en: 'In which direction does $f(x,y)=x^{2}-y^{2}$ increase fastest at $(1,2)$, and at what rate?' },
          answer: '\\text{W kierunku } \\nabla f(1,2) = \\left[2,\\ -4\\right],\\ \\text{tempo } \\left|\\nabla f\\right| = 2\\sqrt{5}',
          accept: ['[2,-4], 2sqrt(5)', '2\\sqrt{5}'],
          solution: [
            { pl: '$\\nabla f = \\left[2x,\\ -2y\\right]$, więc $\\nabla f(1,2) = [2,\\ -4]$.', en: '$\\nabla f(1,2)=[2,-4]$.' },
            { pl: 'Najszybszy wzrost jest w kierunku gradientu, a jego tempo to $\\left|\\nabla f\\right| = \\sqrt{4+16} = 2\\sqrt{5}$.', en: 'Steepest ascent along the gradient; rate $\\sqrt{20}=2\\sqrt5$.' },
          ],
          trap: { pl: 'Znak w $f_y = -2y$ — funkcja MALEJE wzdłuż $y$, więc kierunek najszybszego wzrostu ma ujemną drugą współrzędną.', en: 'The sign of $f_y=-2y$ — $f$ decreases along $y$, so the ascent direction has negative second coordinate.' },
        },
        {
          id: 'gradient-rozniczka-zupelna-l6-01',
          skill: 'rozniczka-obliczanie',
          level: 6,
          prompt: { pl: 'Przyprostokątne trójkąta prostokątnego zmierzono: $a=3$ cm, $b=4$ cm, każdą z dokładnością $0{,}1$ cm. Oszacuj różniczką zupełną maksymalny błąd obliczonej przeciwprostokątnej $c=\\sqrt{a^{2}+b^{2}}$.', en: 'The legs of a right triangle measure $a=3$ cm and $b=4$ cm, each to within $0.1$ cm. Use the total differential to bound the error of the computed hypotenuse $c=\\sqrt{a^{2}+b^{2}}$.' },
          answer: '\\left|\\Delta c\\right| \\lessapprox \\frac{3\\cdot 0{,}1 + 4\\cdot 0{,}1}{5} = 0{,}14\\ \\text{cm}',
          accept: ['0.14', '0,14'],
          solution: [
            { pl: '$c_a = \\frac{a}{\\sqrt{a^{2}+b^{2}}} = \\frac{3}{5}$, $c_b = \\frac{b}{\\sqrt{a^{2}+b^{2}}} = \\frac{4}{5}$ (w punkcie $a=3$, $b=4$, $c=5$).', en: '$c_a=\\frac35$, $c_b=\\frac45$ at $a=3$, $b=4$, $c=5$.' },
            { pl: 'Różniczka: $\\Delta c \\approx \\frac{3}{5}\\Delta a + \\frac{4}{5}\\Delta b$.', en: '$\\Delta c\\approx\\frac35\\Delta a+\\frac45\\Delta b$.' },
            { pl: 'Najgorszy przypadek: oba błędy tego samego znaku, $|\\Delta a|=|\\Delta b|=0{,}1$: $|\\Delta c| \\le \\frac{3}{5}\\cdot0{,}1+\\frac{4}{5}\\cdot0{,}1 = 0{,}14$ cm.', en: 'Worst case, same signs: $0.06+0.08=0.14$ cm.' },
          ],
          trap: { pl: 'Szacowanie błędu maksymalnego wymaga MODUŁÓW i zgodnych znaków — błędy pomiarów mogą się dodać, nie wolno liczyć na to, że się zniosą.', en: 'A maximal-error bound needs absolute values and aligned signs — measurement errors may add up; do not bank on cancellation.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'ekstrema-dwoch-zmiennych',
      title: { pl: 'Ekstrema lokalne funkcji dwóch zmiennych', en: 'Local extrema of two-variable functions' },
      level: 5,
      prereq: ['pochodne-czastkowe-drugie'],
      theory: {
        pl: 'Warunek konieczny ekstremum: obie pochodne cząstkowe znikają, $f_x=0$ i $f_y=0$ — rozwiązania '
          + 'tego układu to punkty stacjonarne. O charakterze punktu rozstrzyga wyznacznik hesjanu '
          + '$W = f_{xx}f_{yy}-\\left(f_{xy}\\right)^{2}$ liczony w tym punkcie: dla $W>0$ ekstremum jest '
          + '($f_{xx}>0$ — minimum, $f_{xx}<0$ — maksimum), dla $W<0$ ekstremum nie ma — to punkt siodłowy, '
          + 'a dla $W=0$ kryterium NIE ROZSTRZYGA i trzeba badać funkcję bezpośrednio, np. wzdłuż wybranych '
          + 'prostych lub przez oszacowanie znaku $f-f(x_0,y_0)$. Schemat zadania: układ $f_x=f_y=0$, '
          + 'wszystkie punkty stacjonarne, trzy drugie pochodne, $W$ i klasyfikacja w każdym punkcie z osobna. '
          + 'Typowy błąd: znaleziony punkt stacjonarny to dopiero KANDYDAT — bez hesjanu (lub innego argumentu) '
          + 'nie wolno ogłaszać ekstremum.',
        en: 'The necessary condition: both partials vanish, $f_x=0=f_y$ — solutions are the stationary '
          + 'points. The Hessian determinant $W=f_{xx}f_{yy}-(f_{xy})^{2}$ at such a point decides: $W>0$ '
          + 'gives an extremum ($f_{xx}>0$ minimum, $f_{xx}<0$ maximum), $W<0$ gives a saddle, and $W=0$ is '
          + 'INCONCLUSIVE — study the function directly, e.g. along chosen lines or by the sign of '
          + '$f-f(x_0,y_0)$. The routine: solve the system, list every stationary point, compute the three '
          + 'second partials, evaluate $W$ and classify each point separately. The classic error: a '
          + 'stationary point is only a CANDIDATE — no verdict without the Hessian or another argument.',
      },
      formulas: [
        { id: 'warunek-konieczny-2z', tex: 'f_x(x_0,y_0) = 0 \\quad\\wedge\\quad f_y(x_0,y_0) = 0', name: { pl: 'Warunek konieczny ekstremum', en: 'Necessary condition for an extremum' }, note: { pl: 'Rozwiązania układu to punkty stacjonarne — dopiero kandydaci na ekstrema.', en: 'Solutions are stationary points — candidates only.' }, drill: true },
        { id: 'hesjan-wyznacznik', tex: 'W = \\begin{vmatrix} f_{xx} & f_{xy} \\\\ f_{xy} & f_{yy} \\end{vmatrix} = f_{xx}f_{yy} - \\left(f_{xy}\\right)^{2}', name: { pl: 'Wyznacznik hesjanu', en: 'The Hessian determinant' }, note: { pl: 'Liczony w punkcie stacjonarnym; z tw. Schwarza wystarczy jedna pochodna mieszana.', en: 'Evaluated at the stationary point; Schwarz makes one mixed partial enough.' }, drill: true },
        { id: 'klasyfikacja-hesjan', tex: 'W>0,\\ f_{xx}>0:\\ \\min\\qquad W>0,\\ f_{xx}<0:\\ \\max\\qquad W<0:\\ \\text{siodło}\\qquad W=0:\\ \\text{brak rozstrzygnięcia}', name: { pl: 'Klasyfikacja punktów stacjonarnych', en: 'Classification of stationary points' }, note: { pl: 'Przy $W>0$ znaki $f_{xx}$ i $f_{yy}$ są zgodne — o rodzaju ekstremum mówi dowolny z nich.', en: 'When $W>0$ the signs of $f_{xx}$ and $f_{yy}$ agree — either decides the type.' }, drill: true },
      ],
      skills: [
        { id: 'stacjonarne-klasyfikacja', title: { pl: 'Punkty stacjonarne i hesjan', en: 'Stationary points and the Hessian' }, levels: [3, 4] },
        { id: 'ekstrema-uklady', title: { pl: 'Układy równań i pełna analiza', en: 'Systems and full analysis' }, levels: [4, 5] },
        { id: 'hesjan-zero', title: { pl: 'Przypadek wątpliwy $W=0$', en: 'The inconclusive case $W=0$' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'ekstrema-dwoch-zmiennych-l3-01',
          skill: 'stacjonarne-klasyfikacja',
          level: 3,
          prompt: { pl: 'Wyznacz ekstremum lokalne funkcji $f(x,y)=x^{2}+y^{2}-2x+4y$.', en: 'Find the local extremum of $f(x,y)=x^{2}+y^{2}-2x+4y$.' },
          answer: '\\text{Minimum lokalne w } (1,-2),\\ f(1,-2) = -5',
          accept: ['minimum w (1,-2), -5', '(1,-2); -5'],
          solution: [
            { pl: 'Układ: $f_x = 2x-2 = 0$ i $f_y = 2y+4 = 0$ daje jedyny punkt stacjonarny $(1,-2)$.', en: 'The system $2x-2=0$, $2y+4=0$ gives $(1,-2)$.' },
            { pl: 'Hesjan: $f_{xx}=2$, $f_{yy}=2$, $f_{xy}=0$, więc $W = 4 > 0$ i $f_{xx}>0$ — minimum.', en: '$W=4>0$, $f_{xx}=2>0$ — a minimum.' },
            { pl: 'Wartość: $f(1,-2) = 1+4-2-8 = -5$.', en: '$f(1,-2)=-5$.' },
          ],
          trap: { pl: 'Ogłoszenie minimum bez hesjanu — punkt stacjonarny to kandydat; uzasadnienie wymaga $W$ i znaku $f_{xx}$.', en: 'Declaring a minimum without the Hessian — a stationary point is only a candidate.' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l3-02',
          skill: 'stacjonarna-klasyfikacja' === 'x' ? '' : 'stacjonarne-klasyfikacja',
          level: 3,
          prompt: { pl: 'Zbadaj punkt stacjonarny funkcji $f(x,y)=xy$.', en: 'Classify the stationary point of $f(x,y)=xy$.' },
          answer: '(0,0)\\ \\text{— punkt siodłowy } (W = -1 < 0)',
          accept: ['siodlo', 'saddle'],
          solution: [
            { pl: '$f_x = y = 0$ i $f_y = x = 0$: jedyny punkt stacjonarny $(0,0)$.', en: 'The only stationary point is $(0,0)$.' },
            { pl: '$f_{xx} = 0$, $f_{yy} = 0$, $f_{xy} = 1$: $W = 0\\cdot0 - 1^{2} = -1 < 0$ — siodło.', en: '$W=-1<0$ — a saddle.' },
            { pl: 'Geometrycznie: wzdłuż prostej $y=x$ funkcja rośnie od zera ($f=x^{2}$), wzdłuż $y=-x$ maleje ($f=-x^{2}$).', en: 'Along $y=x$ the function rises; along $y=-x$ it falls.' },
          ],
          trap: { pl: 'Wniosek „$f_{xx}=0$, więc $W=0$” — o $W$ decyduje też pochodna mieszana, a tu właśnie ona robi całą robotę.', en: 'Concluding $W=0$ from $f_{xx}=0$ — the mixed partial also enters, and here it does all the work.' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l4-01',
          skill: 'stacjonarne-klasyfikacja',
          level: 4,
          prompt: { pl: 'Wyznacz ekstremum lokalne funkcji $f(x,y)=e^{-\\left(x^{2}+y^{2}\\right)}$.', en: 'Find the local extremum of $f(x,y)=e^{-\\left(x^{2}+y^{2}\\right)}$.' },
          answer: '\\text{Maksimum lokalne w } (0,0),\\ f(0,0) = 1',
          accept: ['maksimum w (0,0), 1'],
          solution: [
            { pl: '$f_x = -2x\\,e^{-\\left(x^{2}+y^{2}\\right)}$, $f_y = -2y\\,e^{-\\left(x^{2}+y^{2}\\right)}$; czynnik wykładniczy nigdy nie znika, więc $x=y=0$.', en: 'The exponential never vanishes, so $x=y=0$.' },
            { pl: 'W $(0,0)$: $f_{xx} = -2$, $f_{yy} = -2$, $f_{xy} = 0$ (składnik $4xy\\,e^{\\dots}$ znika).', en: 'At the origin $f_{xx}=f_{yy}=-2$, $f_{xy}=0$.' },
            { pl: '$W = 4 > 0$ i $f_{xx} < 0$ — maksimum lokalne o wartości $f(0,0)=e^{0}=1$.', en: '$W=4>0$, $f_{xx}<0$ — a maximum of value 1.' },
          ],
          trap: { pl: 'Przy $W>0$ o RODZAJU ekstremum decyduje znak $f_{xx}$ — sam warunek $W>0$ nie mówi jeszcze, czy to minimum, czy maksimum.', en: 'With $W>0$ the SIGN of $f_{xx}$ picks min vs max — $W>0$ alone does not.' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l4-02',
          skill: 'ekstrema-uklady',
          level: 4,
          prompt: { pl: 'Wyznacz i sklasyfikuj wszystkie punkty stacjonarne funkcji $f(x,y)=x^{3}-3x+y^{2}$.', en: 'Find and classify all stationary points of $f(x,y)=x^{3}-3x+y^{2}$.' },
          answer: '\\text{Minimum w } (1,0),\\ f=-2;\\ \\text{siodło w } (-1,0)',
          accept: ['min (1,0) -2, siodlo (-1,0)'],
          solution: [
            { pl: '$f_x = 3x^{2}-3 = 0$ daje $x = \\pm1$; $f_y = 2y = 0$ daje $y=0$. Punkty: $(1,0)$ i $(-1,0)$.', en: 'Stationary points: $(1,0)$ and $(-1,0)$.' },
            { pl: '$f_{xx} = 6x$, $f_{yy} = 2$, $f_{xy} = 0$, więc $W = 12x$.', en: '$W=12x$.' },
            { pl: 'W $(1,0)$: $W = 12 > 0$, $f_{xx} = 6 > 0$ — minimum, $f(1,0) = 1-3 = -2$.', en: 'At $(1,0)$: a minimum of value $-2$.' },
            { pl: 'W $(-1,0)$: $W = -12 < 0$ — punkt siodłowy, ekstremum nie ma.', en: 'At $(-1,0)$: $W<0$, a saddle.' },
          ],
          trap: { pl: 'Klasyfikowanie obu punktów jednym hesjanem — $W$ zależy od punktu i każdy punkt stacjonarny bada się OSOBNO.', en: 'One Hessian verdict for both points — $W$ depends on the point; classify each separately.' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l5-01',
          skill: 'ekstrema-uklady',
          level: 5,
          prompt: { pl: 'Wyznacz ekstremum lokalne funkcji $f(x,y)=x^{2}+y^{2}+xy-4x-5y$.', en: 'Find the local extremum of $f(x,y)=x^{2}+y^{2}+xy-4x-5y$.' },
          answer: '\\text{Minimum lokalne w } (1,2),\\ f(1,2) = -7',
          accept: ['minimum w (1,2), -7', '(1,2); -7'],
          solution: [
            { pl: 'Układ: $f_x = 2x+y-4 = 0$, $f_y = 2y+x-5 = 0$.', en: 'System: $2x+y=4$, $x+2y=5$.' },
            { pl: 'Z pierwszego $y = 4-2x$; podstawiamy: $2(4-2x)+x-5 = 3-3x = 0$, więc $x=1$, $y=2$.', en: 'Substitute $y=4-2x$: $x=1$, $y=2$.' },
            { pl: 'Hesjan: $f_{xx}=2$, $f_{yy}=2$, $f_{xy}=1$: $W = 4-1 = 3 > 0$, $f_{xx}>0$ — minimum.', en: '$W=3>0$, $f_{xx}=2>0$ — a minimum.' },
            { pl: 'Wartość: $f(1,2) = 1+4+2-4-10 = -7$.', en: '$f(1,2)=-7$.' },
          ],
          trap: { pl: 'Zapomnienie o wyrazie mieszanym: $f_{xy}=1$, więc $W = 4-1$, a nie $4$ — przy $xy$ w wzorze pochodna mieszana nie jest zerem.', en: 'Forgetting the cross term: $f_{xy}=1$, so $W=3$, not 4.' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l5-02',
          skill: 'ekstrema-uklady',
          level: 5,
          prompt: { pl: 'Wyznacz i sklasyfikuj wszystkie punkty stacjonarne funkcji $f(x,y)=x^{3}+y^{3}-3xy$.', en: 'Find and classify all stationary points of $f(x,y)=x^{3}+y^{3}-3xy$.' },
          answer: '\\text{Siodło w } (0,0);\\ \\text{minimum w } (1,1),\\ f(1,1) = -1',
          accept: ['siodlo (0,0), min (1,1) -1'],
          solution: [
            { pl: 'Układ: $f_x = 3x^{2}-3y = 0$ i $f_y = 3y^{2}-3x = 0$, czyli $y = x^{2}$ i $x = y^{2}$.', en: 'The system gives $y=x^{2}$, $x=y^{2}$.' },
            { pl: 'Podstawienie: $x = x^{4}$, więc $x(x^{3}-1) = 0$: $x=0$ lub $x=1$. Punkty: $(0,0)$ i $(1,1)$.', en: '$x=x^{4}$ yields $(0,0)$ and $(1,1)$.' },
            { pl: '$f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$, więc $W = 36xy - 9$.', en: '$W=36xy-9$.' },
            { pl: 'W $(0,0)$: $W = -9 < 0$ — siodło. W $(1,1)$: $W = 27 > 0$, $f_{xx} = 6 > 0$ — minimum, $f(1,1) = -1$.', en: 'Saddle at the origin; minimum of $-1$ at $(1,1)$.' },
          ],
          trap: { pl: 'Rozwiązanie $x=x^{4}$ tylko przez skrócenie przez $x$ — gubi punkt $(0,0)$, a to właśnie tam siedzi siodło.', en: 'Cancelling $x$ in $x=x^{4}$ loses $(0,0)$ — exactly where the saddle sits.' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l5-03',
          skill: 'hesjan-zero',
          level: 5,
          prompt: { pl: 'Zbadaj punkt stacjonarny $(0,0)$ funkcji $f(x,y)=x^{4}+y^{4}$. Co mówi hesjan, a jaka jest prawda?', en: 'Study the stationary point $(0,0)$ of $f(x,y)=x^{4}+y^{4}$. What does the Hessian say, and what is the truth?' },
          answer: 'W = 0\\ \\text{— kryterium nie rozstrzyga; jest minimum, bo } f(x,y)>0=f(0,0)\\ \\text{poza } (0,0)',
          accept: ['W=0, minimum'],
          solution: [
            { pl: '$f_x = 4x^{3}$, $f_y = 4y^{3}$: punkt stacjonarny $(0,0)$.', en: 'The origin is stationary.' },
            { pl: '$f_{xx} = 12x^{2}$, $f_{yy} = 12y^{2}$, $f_{xy} = 0$ — w $(0,0)$ wszystkie zera, więc $W = 0$: brak rozstrzygnięcia.', en: 'All second partials vanish at the origin: $W=0$, inconclusive.' },
            { pl: 'Bezpośrednio: $f(x,y) = x^{4}+y^{4} > 0 = f(0,0)$ dla $(x,y)\\neq(0,0)$ — minimum lokalne (nawet globalne).', en: 'Directly: $f>0=f(0,0)$ off the origin — a (global) minimum.' },
          ],
          trap: { pl: 'Wniosek „$W=0$, więc nie ma ekstremum” — $W=0$ znaczy „kryterium milczy”, a nie „ekstremum nie istnieje”.', en: 'Reading $W=0$ as "no extremum" — it means "the test is silent", not "none exists".' },
        },
        {
          id: 'ekstrema-dwoch-zmiennych-l6-01',
          skill: 'hesjan-zero',
          level: 6,
          prompt: { pl: 'Wyznacz wszystkie punkty stacjonarne funkcji $f(x,y)=x^{3}-3xy^{2}$ i rozstrzygnij, czy funkcja ma w nich ekstrema lokalne.', en: 'Find all stationary points of $f(x,y)=x^{3}-3xy^{2}$ and decide whether they are local extrema.' },
          answer: '\\text{Jedyny punkt } (0,0);\\ W=0,\\ \\text{ekstremum NIE MA, bo } f(x,0)=x^{3}\\ \\text{zmienia znak}',
          accept: ['brak ekstremum', 'nie ma ekstremum'],
          solution: [
            { pl: 'Układ: $f_x = 3x^{2}-3y^{2} = 0$ i $f_y = -6xy = 0$.', en: 'System: $3x^{2}-3y^{2}=0$, $-6xy=0$.' },
            { pl: 'Z drugiego równania $x=0$ lub $y=0$; pierwsze wtedy wymusza odpowiednio $y=0$ lub $x=0$. Jedyny punkt: $(0,0)$.', en: 'Either case forces the other variable to vanish: only $(0,0)$.' },
            { pl: 'W $(0,0)$: $f_{xx} = 6x = 0$, $f_{yy} = -6x = 0$, $f_{xy} = -6y = 0$, więc $W = 0$ — hesjan milczy.', en: 'All second partials vanish: $W=0$.' },
            { pl: 'Badamy wzdłuż osi $Ox$: $f(x,0) = x^{3}$ przyjmuje wartości dodatnie i ujemne dowolnie blisko zera — ekstremum w $(0,0)$ nie istnieje (tzw. małpie siodło).', en: 'Along $Ox$: $f(x,0)=x^{3}$ changes sign arbitrarily close to the origin — no extremum (a monkey saddle).' },
          ],
          trap: { pl: 'Przy $W=0$ wystarczy JEDNA prosta, wzdłuż której $f-f(0,0)$ zmienia znak, by wykluczyć ekstremum — szukanie „dowodu przez hesjan” prowadzi donikąd.', en: 'With $W=0$ a single line where $f-f(0,0)$ changes sign kills the extremum — hunting for a Hessian proof leads nowhere.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'regula-lancuchowa-2z',
      title: { pl: 'Reguła łańcuchowa dla dwóch zmiennych', en: 'The chain rule in two variables' },
      level: 5,
      prereq: ['pochodne-czastkowe-pierwsze'],
      theory: {
        pl: 'Gdy $z = f(x,y)$, a obie zmienne zależą od parametru $t$, funkcja złożona $z(t)$ ma pochodną '
          + '$\\frac{dz}{dt} = f_x\\,\\frac{dx}{dt} + f_y\\,\\frac{dy}{dt}$ — wkłady obu dróg zależności '
          + 'SUMUJĄ SIĘ. Gdy $x$ i $y$ zależą od dwóch parametrów $u$, $v$, wzór działa dla każdego z nich '
          + 'osobno: $\\frac{\\partial z}{\\partial u} = f_x\\,\\frac{\\partial x}{\\partial u} + '
          + 'f_y\\,\\frac{\\partial y}{\\partial u}$. Pochodne $f_x$, $f_y$ liczy się w punkcie '
          + '$(x(t),y(t))$ i na końcu wyraża wynik w zmiennej parametru. Fizyczna interpretacja: cząstka '
          + 'porusza się po krzywej $(x(t),y(t))$ w polu $f$, a $\\frac{dz}{dt}$ mierzy zmianę wartości pola '
          + 'wzdłuż trajektorii. Reguła łańcuchowa dowodzi też tożsamości ogólnych — np. dla '
          + '$z=f(x^{2}+y^{2})$ zachodzi $y\\,z_x - x\\,z_y = 0$ niezależnie od $f$.',
        en: 'When $z=f(x,y)$ and both variables depend on a parameter $t$, the composite has derivative '
          + '$\\frac{dz}{dt}=f_x\\frac{dx}{dt}+f_y\\frac{dy}{dt}$ — the two dependency paths ADD. With two '
          + 'parameters $u,v$ the formula applies to each separately: '
          + '$\\frac{\\partial z}{\\partial u}=f_x\\frac{\\partial x}{\\partial u}+f_y\\frac{\\partial y}{\\partial u}$. '
          + 'Evaluate $f_x$, $f_y$ at $(x(t),y(t))$ and express the result in the parameter. Physically: a '
          + 'particle moves along $(x(t),y(t))$ through the field $f$, and $\\frac{dz}{dt}$ is the rate of '
          + 'change of the field along the trajectory. The chain rule also proves general identities — for '
          + '$z=f(x^{2}+y^{2})$ one gets $y\\,z_x-x\\,z_y=0$ for every $f$.',
      },
      formulas: [
        { id: 'lancuch-jeden-parametr', tex: '\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\,\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\,\\frac{dy}{dt}', name: { pl: 'Reguła łańcuchowa (jeden parametr)', en: 'Chain rule (one parameter)' }, note: { pl: 'Wkłady obu zmiennych się sumują; $f_x$, $f_y$ liczone w $(x(t),y(t))$.', en: 'The contributions add; partials evaluated along the curve.' }, drill: true },
        { id: 'lancuch-dwa-parametry', tex: '\\frac{\\partial z}{\\partial u} = f_x\\,\\frac{\\partial x}{\\partial u} + f_y\\,\\frac{\\partial y}{\\partial u},\\qquad \\frac{\\partial z}{\\partial v} = f_x\\,\\frac{\\partial x}{\\partial v} + f_y\\,\\frac{\\partial y}{\\partial v}', name: { pl: 'Reguła łańcuchowa (dwa parametry)', en: 'Chain rule (two parameters)' }, note: { pl: 'Ten sam schemat dla każdego parametru osobno — drugi parametr chwilowo zamrożony.', en: 'Same pattern per parameter, the other one frozen.' }, drill: true },
      ],
      skills: [
        { id: 'lancuch-parametr', title: { pl: 'Pochodna wzdłuż krzywej', en: 'Derivative along a curve' }, levels: [4, 6] },
        { id: 'lancuch-dwie-zmienne', title: { pl: 'Zamiana zmiennych i tożsamości', en: 'Change of variables and identities' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'regula-lancuchowa-2z-l4-01',
          skill: 'lancuch-parametr',
          level: 4,
          prompt: { pl: 'Niech $z=x^{2}y$, gdzie $x=t^{2}$, $y=t^{3}$. Oblicz $\\dfrac{dz}{dt}$ regułą łańcuchową i sprawdź wynik, podstawiając wprost.', en: 'Let $z=x^{2}y$ with $x=t^{2}$, $y=t^{3}$. Compute $\\dfrac{dz}{dt}$ by the chain rule and verify by direct substitution.' },
          answer: '\\frac{dz}{dt} = 7t^{6}',
          accept: ['7t^6'],
          solution: [
            { pl: '$f_x = 2xy$, $f_y = x^{2}$; $\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^{2}$.', en: '$f_x=2xy$, $f_y=x^{2}$; $x\'=2t$, $y\'=3t^{2}$.' },
            { pl: '$\\frac{dz}{dt} = 2xy\\cdot 2t + x^{2}\\cdot 3t^{2} = 2t^{2}t^{3}\\cdot 2t + t^{4}\\cdot 3t^{2} = 4t^{6}+3t^{6} = 7t^{6}$.', en: 'Substitute: $4t^{6}+3t^{6}=7t^{6}$.' },
            { pl: 'Kontrola: $z = (t^{2})^{2}\\,t^{3} = t^{7}$, więc $\\frac{dz}{dt} = 7t^{6}$ — zgadza się.', en: 'Check: $z=t^{7}$, so $z\'=7t^{6}$.' },
          ],
          trap: { pl: 'Pozostawienie w wyniku mieszaniny $x$, $y$ i $t$ — po podstawieniu $x=t^{2}$, $y=t^{3}$ odpowiedź musi zależeć tylko od $t$.', en: 'Leaving a mix of $x$, $y$, $t$ — the final answer must be in $t$ alone.' },
        },
        {
          id: 'regula-lancuchowa-2z-l4-02',
          skill: 'lancuch-parametr',
          level: 4,
          prompt: { pl: 'Niech $z=x^{2}+y^{2}$, gdzie $x=\\cos t$, $y=\\sin t$. Oblicz $\\dfrac{dz}{dt}$ i zinterpretuj wynik.', en: 'Let $z=x^{2}+y^{2}$ with $x=\\cos t$, $y=\\sin t$. Compute $\\dfrac{dz}{dt}$ and interpret.' },
          answer: '\\frac{dz}{dt} = 0\\ \\text{— ruch odbywa się po poziomicy } x^{2}+y^{2}=1',
          accept: ['0'],
          solution: [
            { pl: '$\\frac{dz}{dt} = 2x\\cdot(-\\sin t) + 2y\\cdot\\cos t = -2\\cos t\\sin t + 2\\sin t\\cos t = 0$.', en: 'The two terms cancel: 0.' },
            { pl: 'Interpretacja: krzywa $(\\cos t,\\sin t)$ to okrąg jednostkowy — poziomica funkcji $z$, więc wartość $z=1$ jest stała wzdłuż ruchu.', en: 'The path is the unit circle — a level curve of $z$, so $z\\equiv1$ along it.' },
          ],
          trap: { pl: 'Znak pochodnej $\\frac{dx}{dt} = -\\sin t$ — zgubiony minus daje $\\frac{dz}{dt} = 4\\sin t\\cos t$ zamiast zera.', en: 'The sign of $x\'=-\\sin t$ — dropping the minus gives $4\\sin t\\cos t$ instead of 0.' },
        },
        {
          id: 'regula-lancuchowa-2z-l5-01',
          skill: 'lancuch-parametr',
          level: 5,
          prompt: { pl: 'Niech $z=\\ln\\left(x^{2}+y^{2}\\right)$, gdzie $x=e^{t}$, $y=e^{-t}$. Oblicz i uprość $\\dfrac{dz}{dt}$.', en: 'Let $z=\\ln\\left(x^{2}+y^{2}\\right)$ with $x=e^{t}$, $y=e^{-t}$. Compute and simplify $\\dfrac{dz}{dt}$.' },
          answer: '\\frac{dz}{dt} = \\frac{2\\left(e^{2t}-e^{-2t}\\right)}{e^{2t}+e^{-2t}}',
          accept: ['2(e^{2t}-e^{-2t})/(e^{2t}+e^{-2t})', '2tgh(2t)'],
          solution: [
            { pl: '$f_x = \\frac{2x}{x^{2}+y^{2}}$, $f_y = \\frac{2y}{x^{2}+y^{2}}$; $\\frac{dx}{dt} = e^{t}$, $\\frac{dy}{dt} = -e^{-t}$.', en: 'Partials over $x^{2}+y^{2}$; $x\'=e^{t}$, $y\'=-e^{-t}$.' },
            { pl: '$\\frac{dz}{dt} = \\frac{2x\\,e^{t} - 2y\\,e^{-t}}{x^{2}+y^{2}} = \\frac{2e^{2t}-2e^{-2t}}{e^{2t}+e^{-2t}}$.', en: 'Substitute the parametrisation.' },
            { pl: 'Wynik można zapisać jako $2\\operatorname{tgh}(2t)$ — funkcja rosnąca, zerująca się w $t=0$.', en: 'Equivalently $2\\tanh(2t)$.' },
          ],
          trap: { pl: 'Pochodna $\\left(e^{-t}\\right)\' = -e^{-t}$ — bez minusa oba składniki się dodają i wynik wychodzi stały równy 2, co jest fałszem.', en: 'Missing the minus in $(e^{-t})\'$ — then the terms add to the constant 2, which is false.' },
        },
        {
          id: 'regula-lancuchowa-2z-l5-02',
          skill: 'lancuch-dwie-zmienne',
          level: 5,
          prompt: { pl: 'Niech $z=e^{xy}$, gdzie $x=u+v$, $y=u-v$. Wyraź $\\dfrac{\\partial z}{\\partial u}$ przez $u$ i $v$.', en: 'Let $z=e^{xy}$ with $x=u+v$, $y=u-v$. Express $\\dfrac{\\partial z}{\\partial u}$ in $u$ and $v$.' },
          answer: '\\frac{\\partial z}{\\partial u} = 2u\\,e^{u^{2}-v^{2}}',
          accept: ['2ue^{u^2-v^2}'],
          solution: [
            { pl: '$f_x = y\\,e^{xy}$, $f_y = x\\,e^{xy}$; $\\frac{\\partial x}{\\partial u} = 1$, $\\frac{\\partial y}{\\partial u} = 1$.', en: '$f_x=ye^{xy}$, $f_y=xe^{xy}$; both inner $u$-derivatives are 1.' },
            { pl: '$\\frac{\\partial z}{\\partial u} = y\\,e^{xy} + x\\,e^{xy} = (x+y)\\,e^{xy}$.', en: 'Sum: $(x+y)e^{xy}$.' },
            { pl: 'Podstawiamy: $x+y = 2u$ oraz $xy = (u+v)(u-v) = u^{2}-v^{2}$, więc wynik to $2u\\,e^{u^{2}-v^{2}}$.', en: 'With $x+y=2u$, $xy=u^{2}-v^{2}$: $2ue^{u^{2}-v^{2}}$.' },
          ],
          trap: { pl: 'Zostawienie odpowiedzi w zmiennych $x$, $y$ — zadanie żąda wyniku w $u$, $v$, a uproszczenie $xy=u^{2}-v^{2}$ to część roboty.', en: 'Leaving the answer in $x$, $y$ — the simplification $xy=u^{2}-v^{2}$ is part of the task.' },
        },
        {
          id: 'regula-lancuchowa-2z-l5-03',
          skill: 'lancuch-dwie-zmienne',
          level: 5,
          prompt: { pl: 'Niech $z=f\\left(x^{2}+y^{2}\\right)$, gdzie $f$ jest dowolną funkcją różniczkowalną. Wykaż, że $y\\,\\dfrac{\\partial z}{\\partial x} - x\\,\\dfrac{\\partial z}{\\partial y} = 0$.', en: 'Let $z=f\\left(x^{2}+y^{2}\\right)$ for an arbitrary differentiable $f$. Show that $y\\,z_x - x\\,z_y = 0$.' },
          answer: 'y\\,z_x - x\\,z_y = 2xy\\,f\' - 2xy\\,f\' = 0',
          accept: ['0'],
          solution: [
            { pl: 'Reguła łańcuchowa z $u = x^{2}+y^{2}$: $z_x = f\'(u)\\cdot 2x$, $z_y = f\'(u)\\cdot 2y$.', en: 'Chain rule: $z_x=2xf\'(u)$, $z_y=2yf\'(u)$.' },
            { pl: 'Podstawiamy: $y\\,z_x - x\\,z_y = 2xy\\,f\'(u) - 2xy\\,f\'(u) = 0$.', en: 'Substitute — the terms cancel identically.' },
            { pl: 'Interpretacja: poziomice $z$ są okręgami, a pole $[y,-x]$ jest do nich styczne — pochodna w tym kierunku znika.', en: 'The level curves are circles and $[y,-x]$ is tangent to them.' },
          ],
          trap: { pl: 'Próba „odgadnięcia” konkretnego $f$ — dowód ma działać dla KAŻDEJ funkcji różniczkowalnej, więc $f\'$ musi zostać w rachunku jako symbol.', en: 'Testing a specific $f$ — the identity must hold for EVERY differentiable $f$, so $f\'$ stays symbolic.' },
        },
        {
          id: 'regula-lancuchowa-2z-l6-01',
          skill: 'lancuch-parametr',
          level: 6,
          prompt: { pl: 'Niech $z=\\operatorname{arctg}\\dfrac{y}{x}$, gdzie $x=2t$, $y=1-t^{2}$, $t>0$. Oblicz i maksymalnie uprość $\\dfrac{dz}{dt}$.', en: 'Let $z=\\operatorname{arctg}\\dfrac{y}{x}$ with $x=2t$, $y=1-t^{2}$, $t>0$. Compute and fully simplify $\\dfrac{dz}{dt}$.' },
          answer: '\\frac{dz}{dt} = \\frac{-2}{1+t^{2}}',
          accept: ['-2/(1+t^2)'],
          solution: [
            { pl: 'Pochodne cząstkowe: $z_x = \\frac{-y}{x^{2}+y^{2}}$, $z_y = \\frac{x}{x^{2}+y^{2}}$; nadto $\\frac{dx}{dt} = 2$, $\\frac{dy}{dt} = -2t$.', en: '$z_x=\\frac{-y}{x^{2}+y^{2}}$, $z_y=\\frac{x}{x^{2}+y^{2}}$; $x\'=2$, $y\'=-2t$.' },
            { pl: '$\\frac{dz}{dt} = \\frac{-2y - 2tx}{x^{2}+y^{2}} = \\frac{-2\\left(1-t^{2}\\right)-4t^{2}}{4t^{2}+\\left(1-t^{2}\\right)^{2}}$.', en: 'Combine over the common denominator and substitute.' },
            { pl: 'Licznik: $-2+2t^{2}-4t^{2} = -2\\left(1+t^{2}\\right)$. Mianownik: $t^{4}+2t^{2}+1 = \\left(1+t^{2}\\right)^{2}$.', en: 'Numerator $-2(1+t^{2})$; denominator $(1+t^{2})^{2}$.' },
            { pl: 'Po skróceniu: $\\frac{dz}{dt} = \\frac{-2}{1+t^{2}}$.', en: 'Cancel: $\\frac{-2}{1+t^{2}}$.' },
          ],
          trap: { pl: 'Mianownik $4t^{2}+\\left(1-t^{2}\\right)^{2}$ trzeba rozpoznać jako pełny kwadrat $\\left(1+t^{2}\\right)^{2}$ — bez tego wynik zostaje nieuproszczony i punkty przepadają.', en: 'The denominator must be recognised as $(1+t^{2})^{2}$ — otherwise the answer stays unsimplified.' },
        },
      ],
    },
  ],
};
