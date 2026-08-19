// Trygonometria — od miary łukowej i okręgu jednostkowego przez tożsamości,
// wzory redukcyjne i sumy kątów po równania, nierówności i wykresy.
export default {
  id: 'trygonometria',
  track: 'matura',
  order: 50,
  title: { pl: 'Trygonometria', en: 'Trigonometry' },
  blurb: {
    pl: 'Od miary łukowej i okręgu jednostkowego przez wszystkie tożsamości aż po równania, nierówności i wykresy funkcji trygonometrycznych.',
    en: 'From radian measure and the unit circle through every identity to trigonometric equations, inequalities and graphs.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'miara-katow-okrag',
      title: { pl: 'Miara kątów i okrąg jednostkowy', en: 'Angle measure and the unit circle' },
      level: 2,
      prereq: [],
      theory: {
        pl: 'Kąt mierzy się w stopniach albo w radianach: kąt pełny to $360^\\circ = 2\\pi$, więc przelicznik '
          + 'brzmi $\\alpha\\,[\\text{rad}] = \\frac{\\pi}{180}\\cdot\\alpha\\,[^\\circ]$. Na okręgu jednostkowym kąt '
          + '$\\alpha$, odmierzany od dodatniej półosi $OX$ przeciwnie do ruchu wskazówek zegara, wyznacza punkt $P$ '
          + 'i wtedy $\\cos\\alpha = x_P$, $\\sin\\alpha = y_P$, $\\operatorname{tg}\\alpha = \\frac{y_P}{x_P}$ — '
          + 'to uogólnienie definicji z trójkąta prostokątnego na dowolne kąty. Znaki odczytuje się z ćwiartki: '
          + 'w I wszystkie dodatnie, w II tylko sinus, w III tylko tangens i kotangens, w IV tylko cosinus. '
          + 'Wartości dla $30^\\circ$, $45^\\circ$, $60^\\circ$ trzeba znać na pamięć — każdy inny kąt „szkolny” '
          + 'sprowadza się do nich. W mierze łukowej długość łuku i pole wycinka mają najprostszą postać: '
          + '$l = \\alpha r$ oraz $P = \\frac{1}{2}\\alpha r^{2}$.',
        en: 'Angles come in degrees or radians: a full turn is $360^\\circ = 2\\pi$, so the conversion is '
          + '$\\alpha\\,[\\text{rad}] = \\frac{\\pi}{180}\\cdot\\alpha\\,[^\\circ]$. On the unit circle the angle, '
          + 'measured counterclockwise from the positive $x$-axis, marks a point $P$ with $\\cos\\alpha = x_P$, '
          + '$\\sin\\alpha = y_P$, $\\operatorname{tg}\\alpha = \\frac{y_P}{x_P}$ — the right-triangle definitions '
          + 'extended to all angles. Signs follow the quadrant: all positive in I, only sine in II, only tangent '
          + 'and cotangent in III, only cosine in IV. The $30^\\circ$, $45^\\circ$, $60^\\circ$ values must be '
          + 'memorised — every other standard angle reduces to them. In radians the arc length and sector area '
          + 'take their simplest form: $l = \\alpha r$ and $P = \\frac{1}{2}\\alpha r^{2}$.',
      },
      formulas: [
        { id: 'stopnie-radiany', tex: '180^\\circ = \\pi\\ \\text{rad},\\qquad \\alpha\\,[\\text{rad}] = \\frac{\\pi}{180}\\cdot\\alpha\\,[^\\circ]', name: { pl: 'Przeliczanie stopni na radiany', en: 'Degrees to radians' }, note: { pl: 'W drugą stronę mnoży się przez $\\frac{180}{\\pi}$. Kierunek przelicznika to najczęstszy błąd.', en: 'The reverse conversion multiplies by $\\frac{180}{\\pi}$. Getting the direction wrong is the classic slip.' }, drill: true },
        { id: 'okrag-definicje', tex: '\\cos\\alpha = x_{P},\\qquad \\sin\\alpha = y_{P},\\qquad \\operatorname{tg}\\alpha = \\frac{y_{P}}{x_{P}}', name: { pl: 'Definicje na okręgu jednostkowym', en: 'Unit-circle definitions' }, note: { pl: '$P$ — punkt okręgu jednostkowego wyznaczony przez kąt $\\alpha$. Cosinus to współrzędna POZIOMA.', en: '$P$ is the point the angle marks on the unit circle. Cosine is the HORIZONTAL coordinate.' }, drill: true },
        { id: 'znaki-w-cwiartkach', tex: '\\text{I: wszystkie},\\quad \\text{II: } \\sin,\\quad \\text{III: } \\operatorname{tg},\\ \\operatorname{ctg},\\quad \\text{IV: } \\cos', name: { pl: 'Znaki funkcji w ćwiartkach', en: 'Signs by quadrant' }, note: { pl: 'Mnemonik: „W pierwszej wszystkie są dodatnie, w drugiej tylko sinus…”', en: 'Which functions are positive in each quadrant.' }, drill: true },
        { id: 'wartosci-podstawowe', tex: '\\sin 30^\\circ = \\tfrac{1}{2},\\quad \\sin 45^\\circ = \\tfrac{\\sqrt{2}}{2},\\quad \\sin 60^\\circ = \\tfrac{\\sqrt{3}}{2}', name: { pl: 'Wartości kątów podstawowych', en: 'Values at the basic angles' }, note: { pl: 'Cosinus czyta tę listę od końca: $\\cos 30^\\circ = \\tfrac{\\sqrt{3}}{2}$ itd. Do tego $\\operatorname{tg}45^\\circ = 1$.', en: 'Cosine reads the list backwards; also $\\operatorname{tg}45^\\circ = 1$.' }, drill: true },
        { id: 'luk-wycinek', tex: 'l = \\alpha r,\\qquad P_{\\text{wyc}} = \\tfrac{1}{2}\\alpha r^{2}\\quad (\\alpha\\ \\text{w radianach})', name: { pl: 'Długość łuku i pole wycinka', en: 'Arc length and sector area' }, note: { pl: 'Obie formuły wymagają miary łukowej — dla stopni trzeba wrócić do proporcji z $360^\\circ$.', en: 'Both require radians — with degrees you are back to proportions of $360^\\circ$.' }, drill: true },
      ],
      skills: [
        { id: 'miary-przeliczanie', title: { pl: 'Przeliczanie stopni i radianów', en: 'Converting degrees and radians' }, levels: [1, 3] },
        { id: 'wartosci-katow', title: { pl: 'Wartości funkcji dowolnych kątów', en: 'Evaluating at arbitrary angles' }, levels: [2, 4] },
        { id: 'znaki-cwiartki', title: { pl: 'Znaki funkcji w ćwiartkach', en: 'Signs by quadrant' }, levels: [2, 3] },
        { id: 'okrag-jednostkowy', title: { pl: 'Definicje na okręgu jednostkowym', en: 'Unit-circle definitions' }, levels: [3, 4] },
      ],
      problems: [
        {
          id: 'miara-katow-okrag-l1-01',
          skill: 'miary-przeliczanie',
          level: 1,
          prompt: { pl: 'Wyraź kąt $150^\\circ$ w mierze łukowej.', en: 'Express $150^\\circ$ in radians.' },
          answer: '\\frac{5\\pi}{6}',
          accept: ['5pi/6', '5π/6'],
          solution: [
            { pl: '$150^\\circ = 150\\cdot\\frac{\\pi}{180} = \\frac{150\\pi}{180}$.', en: '$150^\\circ = 150\\cdot\\frac{\\pi}{180}$.' },
            { pl: 'Po skróceniu przez 30: $\\frac{5\\pi}{6}$.', en: 'Reduce the fraction: $\\frac{5\\pi}{6}$.' },
          ],
          trap: { pl: 'Pomnożenie przez $\\frac{180}{\\pi}$ zamiast $\\frac{\\pi}{180}$ — przelicznik działa w jedną stronę.', en: 'Multiplying by $\\frac{180}{\\pi}$ instead of $\\frac{\\pi}{180}$ — the conversion has a direction.' },
        },
        {
          id: 'miara-katow-okrag-l1-02',
          skill: 'miary-przeliczanie',
          level: 1,
          prompt: { pl: 'Wyraź kąt $\\frac{7\\pi}{6}$ w stopniach.', en: 'Express $\\frac{7\\pi}{6}$ in degrees.' },
          answer: '210^\\circ',
          accept: ['210', '210°', '210 stopni'],
          solution: [
            { pl: '$\\frac{7\\pi}{6} = \\frac{7}{6}\\cdot 180^\\circ$.', en: '$\\frac{7\\pi}{6} = \\frac{7}{6}\\cdot 180^\\circ$.' },
            { pl: '$\\frac{7}{6}\\cdot 180^\\circ = 7\\cdot 30^\\circ = 210^\\circ$.', en: '$= 7\\cdot 30^\\circ = 210^\\circ$.' },
          ],
          trap: { pl: 'Podstawienie $\\pi \\approx 3{,}14$ i liczenie na przybliżeniach — $\\pi$ w mierze kąta to dokładnie $180^\\circ$.', en: 'Plugging in $\\pi \\approx 3.14$ — in angle measure $\\pi$ is exactly $180^\\circ$.' },
        },
        {
          id: 'miara-katow-okrag-l2-01',
          skill: 'wartosci-katow',
          level: 2,
          prompt: { pl: 'Oblicz $\\sin 240^\\circ$.', en: 'Compute $\\sin 240^\\circ$.' },
          answer: '-\\frac{\\sqrt{3}}{2}',
          accept: ['-sqrt(3)/2', '-√3/2'],
          solution: [
            { pl: '$240^\\circ = 180^\\circ + 60^\\circ$ leży w III ćwiartce, gdzie sinus jest ujemny.', en: '$240^\\circ = 180^\\circ + 60^\\circ$ sits in quadrant III, where sine is negative.' },
            { pl: 'Kąt odniesienia to $60^\\circ$: $\\sin 240^\\circ = -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$.', en: 'Reference angle $60^\\circ$: $\\sin 240^\\circ = -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$.' },
          ],
          trap: { pl: 'Zgubienie znaku — wartość bezwzględna z kąta odniesienia jest łatwa, o wyniku decyduje ćwiartka.', en: 'Dropping the sign — the reference angle gives the magnitude, the quadrant decides the sign.' },
        },
        {
          id: 'miara-katow-okrag-l2-02',
          skill: 'znaki-cwiartki',
          level: 2,
          prompt: { pl: 'W której ćwiartce leży kąt $\\alpha$, jeśli $\\sin\\alpha < 0$ i $\\operatorname{tg}\\alpha > 0$?', en: 'In which quadrant does $\\alpha$ lie if $\\sin\\alpha < 0$ and $\\operatorname{tg}\\alpha > 0$?' },
          answer: '\\text{III ćwiartka}',
          accept: ['III', '3', 'trzecia'],
          solution: [
            { pl: '$\\sin\\alpha < 0$ oznacza ćwiartkę III lub IV.', en: '$\\sin\\alpha < 0$ narrows it to III or IV.' },
            { pl: '$\\operatorname{tg}\\alpha > 0$ zachodzi w I i III. Część wspólna: III ćwiartka.', en: '$\\operatorname{tg}\\alpha > 0$ holds in I and III. Intersection: quadrant III.' },
          ],
          trap: { pl: 'Uznanie, że skoro sinus ujemny, to i tangens ujemny — w III ćwiartce cosinus też jest ujemny i iloraz wychodzi dodatni.', en: 'Assuming negative sine forces negative tangent — in III cosine is negative too, so the quotient is positive.' },
        },
        {
          id: 'miara-katow-okrag-l3-01',
          skill: 'okrag-jednostkowy',
          level: 3,
          prompt: { pl: 'Końcowe ramię kąta $\\alpha$ przechodzi przez punkt $P(-3, 4)$. Oblicz $\\sin\\alpha$ i $\\cos\\alpha$.', en: 'The terminal side of angle $\\alpha$ passes through $P(-3, 4)$. Compute $\\sin\\alpha$ and $\\cos\\alpha$.' },
          answer: '\\sin\\alpha=\\frac{4}{5},\\quad \\cos\\alpha=-\\frac{3}{5}',
          accept: ['sin=4/5, cos=-3/5', '4/5, -3/5'],
          solution: [
            { pl: 'Odległość $P$ od początku układu: $r = \\sqrt{(-3)^{2}+4^{2}} = 5$.', en: 'Distance from the origin: $r = \\sqrt{9+16} = 5$.' },
            { pl: '$\\sin\\alpha = \\frac{y}{r} = \\frac{4}{5}$, $\\cos\\alpha = \\frac{x}{r} = -\\frac{3}{5}$.', en: '$\\sin\\alpha = \\frac{y}{r} = \\frac{4}{5}$, $\\cos\\alpha = \\frac{x}{r} = -\\frac{3}{5}$.' },
          ],
          trap: { pl: 'Wzięcie $\\sin\\alpha = 4$ wprost ze współrzędnej — punkt nie leży na okręgu jednostkowym, trzeba podzielić przez $r$.', en: 'Reading $\\sin\\alpha = 4$ straight off the coordinate — the point is not on the unit circle, so divide by $r$.' },
        },
        {
          id: 'miara-katow-okrag-l3-02',
          skill: 'okrag-jednostkowy',
          level: 3,
          prompt: { pl: 'Podaj współrzędne punktu okręgu jednostkowego odpowiadającego kątowi $\\alpha = \\frac{5\\pi}{4}$.', en: 'Give the coordinates of the unit-circle point for $\\alpha = \\frac{5\\pi}{4}$.' },
          answer: '\\left(-\\frac{\\sqrt{2}}{2},\\ -\\frac{\\sqrt{2}}{2}\\right)',
          accept: ['(-sqrt(2)/2, -sqrt(2)/2)', '(-√2/2, -√2/2)'],
          solution: [
            { pl: 'Współrzędne to $(\\cos\\alpha, \\sin\\alpha)$; kąt $\\frac{5\\pi}{4} = \\pi + \\frac{\\pi}{4}$ leży w III ćwiartce.', en: 'The point is $(\\cos\\alpha, \\sin\\alpha)$; the angle sits in quadrant III.' },
            { pl: '$\\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$, $\\sin\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$.', en: 'Both coordinates equal $-\\frac{\\sqrt{2}}{2}$.' },
          ],
          trap: { pl: 'Zamiana kolejności współrzędnych — pierwsza jest $\\cos$ (oś pozioma), druga $\\sin$.', en: 'Swapping the coordinates — cosine is the first (horizontal), sine the second.' },
        },
        {
          id: 'miara-katow-okrag-l3-03',
          skill: 'miary-przeliczanie',
          level: 3,
          prompt: { pl: 'W okręgu o promieniu $6$ poprowadzono kąt środkowy $\\frac{5\\pi}{6}$. Oblicz długość łuku, na którym oparty jest ten kąt.', en: 'A central angle of $\\frac{5\\pi}{6}$ is drawn in a circle of radius $6$. Find the length of the subtended arc.' },
          answer: '5\\pi',
          accept: ['5pi', '5π'],
          solution: [
            { pl: 'W mierze łukowej $l = \\alpha r$.', en: 'In radians $l = \\alpha r$.' },
            { pl: '$l = \\frac{5\\pi}{6}\\cdot 6 = 5\\pi$.', en: '$l = \\frac{5\\pi}{6}\\cdot 6 = 5\\pi$.' },
          ],
          trap: { pl: 'Wzór $l = \\alpha r$ działa tylko dla radianów — kąt w stopniach wymaga proporcji $\\frac{\\alpha}{360^\\circ}\\cdot 2\\pi r$.', en: '$l = \\alpha r$ needs radians — with degrees you must take the proportion $\\frac{\\alpha}{360^\\circ}\\cdot 2\\pi r$.' },
        },
        {
          id: 'miara-katow-okrag-l4-01',
          skill: 'wartosci-katow',
          level: 4,
          prompt: { pl: 'Oblicz $\\sin\\frac{19\\pi}{6}$.', en: 'Compute $\\sin\\frac{19\\pi}{6}$.' },
          answer: '-\\frac{1}{2}',
          accept: ['-1/2', '-0{,}5'],
          solution: [
            { pl: 'Redukujemy o okres: $\\frac{19\\pi}{6} = 2\\pi + \\frac{7\\pi}{6}$, więc $\\sin\\frac{19\\pi}{6} = \\sin\\frac{7\\pi}{6}$.', en: 'Strip a full period: $\\frac{19\\pi}{6} = 2\\pi + \\frac{7\\pi}{6}$.' },
            { pl: '$\\frac{7\\pi}{6} = \\pi + \\frac{\\pi}{6}$ leży w III ćwiartce: $\\sin\\frac{7\\pi}{6} = -\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$.', en: '$\\frac{7\\pi}{6} = \\pi + \\frac{\\pi}{6}$ is in quadrant III: the value is $-\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$.' },
          ],
          trap: { pl: 'Odejmowanie $\\pi$ zamiast $2\\pi$ — okres sinusa to $2\\pi$, a $\\sin(x-\\pi) = -\\sin x$ zmienia znak.', en: 'Subtracting $\\pi$ instead of $2\\pi$ — the period of sine is $2\\pi$, and $\\sin(x-\\pi) = -\\sin x$ flips the sign.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'jedynka-tozsamosci',
      title: { pl: 'Jedynka trygonometryczna i tożsamości', en: 'The Pythagorean identity and friends' },
      level: 3,
      prereq: ['miara-katow-okrag'],
      theory: {
        pl: 'Jedynka trygonometryczna $\\sin^{2}\\alpha + \\cos^{2}\\alpha = 1$ to twierdzenie Pitagorasa zapisane '
          + 'na okręgu jednostkowym — podstawa wszystkich rachunków. Schemat zadania: dana jedna funkcja kąta '
          + 'i ćwiartka, z jedynki liczymy drugą funkcję co do wartości bezwzględnej, znak dobieramy z ćwiartki, '
          + 'a resztę daje $\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$. Wyrażenia jednorodne '
          + 'w $\\sin\\alpha$ i $\\cos\\alpha$ dzieli się przez potęgę cosinusa, żeby wyrazić wszystko przez '
          + '$\\operatorname{tg}\\alpha$. Wyrażenia symetryczne, jak $\\sin\\alpha+\\cos\\alpha$ oraz '
          + '$\\sin\\alpha\\cos\\alpha$, wiąże podniesienie sumy do kwadratu. W dowodzie tożsamości przekształca '
          + 'się jedną stronę do postaci drugiej, pilnując dziedziny.',
        en: 'The identity $\\sin^{2}\\alpha + \\cos^{2}\\alpha = 1$ is Pythagoras on the unit circle and the base '
          + 'of every computation here. Standard task: given one function of an angle plus its quadrant, the '
          + 'identity gives the other one up to sign, the quadrant fixes the sign, and '
          + '$\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$ does the rest. Homogeneous '
          + 'expressions in sine and cosine are divided by a power of cosine to rewrite them in '
          + '$\\operatorname{tg}\\alpha$. Symmetric expressions like $\\sin\\alpha+\\cos\\alpha$ and '
          + '$\\sin\\alpha\\cos\\alpha$ are linked by squaring the sum. To prove an identity, transform one side '
          + 'into the other, minding the domain.',
      },
      formulas: [
        { id: 'jedynka-tryg', tex: '\\sin^{2}\\alpha + \\cos^{2}\\alpha = 1', name: { pl: 'Jedynka trygonometryczna', en: 'The Pythagorean identity' }, note: { pl: 'Twierdzenie Pitagorasa na okręgu jednostkowym. Daje drugą funkcję z dokładnością do znaku.', en: 'Pythagoras on the unit circle. Recovers the other function up to sign.' }, drill: true },
        { id: 'def-tg-ctg', tex: '\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha},\\qquad \\operatorname{ctg}\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha},\\qquad \\operatorname{tg}\\alpha\\cdot\\operatorname{ctg}\\alpha = 1', name: { pl: 'Tangens i kotangens', en: 'Tangent and cotangent' }, note: { pl: 'Dziedziny: $\\cos\\alpha\\neq 0$ dla tangensa, $\\sin\\alpha\\neq 0$ dla kotangensa.', en: 'Domains: $\\cos\\alpha\\neq0$ for tangent, $\\sin\\alpha\\neq0$ for cotangent.' }, drill: true },
        { id: 'jedynka-przez-cos2', tex: '1+\\operatorname{tg}^{2}\\alpha = \\frac{1}{\\cos^{2}\\alpha},\\qquad 1+\\operatorname{ctg}^{2}\\alpha = \\frac{1}{\\sin^{2}\\alpha}', name: { pl: 'Jedynka podzielona przez $\\cos^{2}$ i $\\sin^{2}$', en: 'The identity over $\\cos^{2}$ and $\\sin^{2}$' }, note: { pl: 'Przejście od tangensa do cosinusa bez wyznaczania sinusa. Znak cosinusa i tak trzeba dobrać z ćwiartki.', en: 'From tangent straight to cosine. The sign still comes from the quadrant.' }, drill: true },
        { id: 'tg-plus-ctg', tex: '\\operatorname{tg}\\alpha + \\operatorname{ctg}\\alpha = \\frac{1}{\\sin\\alpha\\cos\\alpha}', name: { pl: 'Suma tangensa i kotangensa', en: 'Tangent plus cotangent' }, note: { pl: 'Sprowadzenie do wspólnego mianownika i jedynka w liczniku. Częsty pomost w zadaniach dowodowych.', en: 'Common denominator plus the identity in the numerator. A frequent bridge in proofs.' }, drill: true },
      ],
      skills: [
        { id: 'jedynka-obliczanie', title: { pl: 'Wyznaczanie funkcji z jedynki', en: 'Computing functions from the identity' }, levels: [2, 4] },
        { id: 'wyrazenia-jednorodne', title: { pl: 'Wyrażenia jednorodne i tangens', en: 'Homogeneous expressions via tangent' }, levels: [3, 4] },
        { id: 'tozsamosci-dowodzenie', title: { pl: 'Dowodzenie tożsamości', en: 'Proving identities' }, levels: [4, 5] },
        { id: 'wyrazenia-symetryczne', title: { pl: 'Wyrażenia symetryczne', en: 'Symmetric expressions' }, levels: [5] },
      ],
      problems: [
        {
          id: 'jedynka-tozsamosci-l2-01',
          skill: 'jedynka-obliczanie',
          level: 2,
          prompt: { pl: 'Kąt $\\alpha$ jest ostry i $\\sin\\alpha = \\frac{3}{5}$. Oblicz $\\cos\\alpha$ i $\\operatorname{tg}\\alpha$.', en: 'The angle $\\alpha$ is acute and $\\sin\\alpha = \\frac{3}{5}$. Compute $\\cos\\alpha$ and $\\operatorname{tg}\\alpha$.' },
          answer: '\\cos\\alpha=\\frac{4}{5},\\quad \\operatorname{tg}\\alpha=\\frac{3}{4}',
          accept: ['cos=4/5, tg=3/4', '4/5, 3/4'],
          solution: [
            { pl: 'Z jedynki: $\\cos^{2}\\alpha = 1-\\frac{9}{25} = \\frac{16}{25}$; kąt ostry, więc $\\cos\\alpha = \\frac{4}{5}$.', en: 'From the identity $\\cos^{2}\\alpha = \\frac{16}{25}$; acute angle, so $\\cos\\alpha = \\frac{4}{5}$.' },
            { pl: '$\\operatorname{tg}\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\frac{3/5}{4/5} = \\frac{3}{4}$.', en: '$\\operatorname{tg}\\alpha = \\frac{3/5}{4/5} = \\frac{3}{4}$.' },
          ],
          trap: { pl: 'Odwrócenie ułamka: $\\operatorname{tg}\\alpha = \\frac{\\sin}{\\cos} = \\frac{3}{4}$, nie $\\frac{4}{3}$ — to byłby kotangens.', en: 'Flipping the fraction: $\\operatorname{tg}$ is $\\frac{\\sin}{\\cos} = \\frac{3}{4}$, not $\\frac{4}{3}$ — that would be cotangent.' },
        },
        {
          id: 'jedynka-tozsamosci-l3-01',
          skill: 'jedynka-obliczanie',
          level: 3,
          prompt: { pl: 'Kąt $\\alpha\\in\\left(\\frac{\\pi}{2},\\pi\\right)$ i $\\cos\\alpha = -\\frac{5}{13}$. Oblicz $\\sin\\alpha$ i $\\operatorname{tg}\\alpha$.', en: 'Given $\\alpha\\in\\left(\\frac{\\pi}{2},\\pi\\right)$ and $\\cos\\alpha = -\\frac{5}{13}$, compute $\\sin\\alpha$ and $\\operatorname{tg}\\alpha$.' },
          answer: '\\sin\\alpha=\\frac{12}{13},\\quad \\operatorname{tg}\\alpha=-\\frac{12}{5}',
          accept: ['sin=12/13, tg=-12/5', '12/13, -12/5'],
          solution: [
            { pl: '$\\sin^{2}\\alpha = 1-\\frac{25}{169} = \\frac{144}{169}$. W II ćwiartce sinus jest dodatni: $\\sin\\alpha = \\frac{12}{13}$.', en: '$\\sin^{2}\\alpha = \\frac{144}{169}$; in quadrant II sine is positive: $\\sin\\alpha = \\frac{12}{13}$.' },
            { pl: '$\\operatorname{tg}\\alpha = \\frac{12/13}{-5/13} = -\\frac{12}{5}$.', en: '$\\operatorname{tg}\\alpha = \\frac{12/13}{-5/13} = -\\frac{12}{5}$.' },
          ],
          trap: { pl: 'Automatyczne wzięcie $\\sin\\alpha$ z minusem „bo cosinus ujemny” — w II ćwiartce sinus jest dodatni, znak każdej funkcji dobiera się osobno.', en: 'Copying the minus onto sine "because cosine is negative" — in quadrant II sine is positive; each sign is chosen separately.' },
        },
        {
          id: 'jedynka-tozsamosci-l3-02',
          skill: 'wyrazenia-jednorodne',
          level: 3,
          prompt: { pl: 'Wiedząc, że $\\operatorname{tg}\\alpha = 3$, oblicz $\\frac{\\sin\\alpha-\\cos\\alpha}{\\sin\\alpha+\\cos\\alpha}$.', en: 'Given $\\operatorname{tg}\\alpha = 3$, compute $\\frac{\\sin\\alpha-\\cos\\alpha}{\\sin\\alpha+\\cos\\alpha}$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5'],
          solution: [
            { pl: 'Dzielimy licznik i mianownik przez $\\cos\\alpha$: $\\frac{\\operatorname{tg}\\alpha-1}{\\operatorname{tg}\\alpha+1}$.', en: 'Divide top and bottom by $\\cos\\alpha$: $\\frac{\\operatorname{tg}\\alpha-1}{\\operatorname{tg}\\alpha+1}$.' },
            { pl: 'Podstawiamy: $\\frac{3-1}{3+1} = \\frac{1}{2}$.', en: 'Substitute: $\\frac{2}{4} = \\frac{1}{2}$.' },
          ],
          trap: { pl: 'Wyznaczanie $\\sin\\alpha$ i $\\cos\\alpha$ osobno — wymaga wyboru ćwiartki, a wynik od niej nie zależy; dzielenie przez $\\cos\\alpha$ omija problem.', en: 'Solving for sine and cosine separately — that needs a quadrant choice, yet the result is quadrant-independent; dividing by cosine avoids it.' },
        },
        {
          id: 'jedynka-tozsamosci-l4-01',
          skill: 'wyrazenia-jednorodne',
          level: 4,
          prompt: { pl: 'Wiedząc, że $\\operatorname{tg}\\alpha = 2$, oblicz $\\sin\\alpha\\cos\\alpha$.', en: 'Given $\\operatorname{tg}\\alpha = 2$, compute $\\sin\\alpha\\cos\\alpha$.' },
          answer: '\\frac{2}{5}',
          accept: ['2/5', '0{,}4'],
          solution: [
            { pl: 'Dzielimy przez jedynkę: $\\sin\\alpha\\cos\\alpha = \\frac{\\sin\\alpha\\cos\\alpha}{\\sin^{2}\\alpha+\\cos^{2}\\alpha}$.', en: 'Divide by the identity: $\\sin\\alpha\\cos\\alpha = \\frac{\\sin\\alpha\\cos\\alpha}{\\sin^{2}\\alpha+\\cos^{2}\\alpha}$.' },
            { pl: 'Licznik i mianownik przez $\\cos^{2}\\alpha$: $\\frac{\\operatorname{tg}\\alpha}{\\operatorname{tg}^{2}\\alpha+1} = \\frac{2}{5}$.', en: 'Divide through by $\\cos^{2}\\alpha$: $\\frac{\\operatorname{tg}\\alpha}{\\operatorname{tg}^{2}\\alpha+1} = \\frac{2}{5}$.' },
          ],
          trap: { pl: 'Zgubienie mianownika $1+\\operatorname{tg}^{2}\\alpha$ — samo $\\operatorname{tg}\\alpha\\cdot\\cos^{2}\\alpha$ wymaga wiedzy, ile wynosi $\\cos^{2}\\alpha$.', en: 'Losing the $1+\\operatorname{tg}^{2}\\alpha$ denominator — $\\cos^{2}\\alpha$ has to come from somewhere.' },
        },
        {
          id: 'jedynka-tozsamosci-l4-02',
          skill: 'jedynka-obliczanie',
          level: 4,
          prompt: { pl: 'Kąt $\\alpha\\in\\left(\\pi,\\frac{3\\pi}{2}\\right)$ i $\\operatorname{tg}\\alpha = 2$. Oblicz $\\sin\\alpha$ i $\\cos\\alpha$.', en: 'Given $\\alpha\\in\\left(\\pi,\\frac{3\\pi}{2}\\right)$ and $\\operatorname{tg}\\alpha = 2$, compute $\\sin\\alpha$ and $\\cos\\alpha$.' },
          answer: '\\sin\\alpha=-\\frac{2\\sqrt{5}}{5},\\quad \\cos\\alpha=-\\frac{\\sqrt{5}}{5}',
          accept: ['sin=-2sqrt(5)/5, cos=-sqrt(5)/5', '-2/sqrt5, -1/sqrt5'],
          solution: [
            { pl: 'Z $1+\\operatorname{tg}^{2}\\alpha = \\frac{1}{\\cos^{2}\\alpha}$: $\\cos^{2}\\alpha = \\frac{1}{5}$.', en: 'From $1+\\operatorname{tg}^{2}\\alpha = \\frac{1}{\\cos^{2}\\alpha}$: $\\cos^{2}\\alpha = \\frac{1}{5}$.' },
            { pl: 'W III ćwiartce cosinus ujemny: $\\cos\\alpha = -\\frac{1}{\\sqrt{5}} = -\\frac{\\sqrt{5}}{5}$.', en: 'In quadrant III cosine is negative: $\\cos\\alpha = -\\frac{\\sqrt{5}}{5}$.' },
            { pl: '$\\sin\\alpha = \\operatorname{tg}\\alpha\\cdot\\cos\\alpha = 2\\cdot\\left(-\\frac{\\sqrt{5}}{5}\\right) = -\\frac{2\\sqrt{5}}{5}$.', en: '$\\sin\\alpha = \\operatorname{tg}\\alpha\\cdot\\cos\\alpha = -\\frac{2\\sqrt{5}}{5}$.' },
          ],
          trap: { pl: 'Dodatni tangens nie znaczy, że sinus i cosinus są dodatnie — w III ćwiartce oba są ujemne, a iloraz i tak wychodzi dodatni.', en: 'Positive tangent does not make sine and cosine positive — in quadrant III both are negative and the quotient is still positive.' },
        },
        {
          id: 'jedynka-tozsamosci-l4-03',
          skill: 'tozsamosci-dowodzenie',
          level: 4,
          prompt: { pl: 'Wykaż, że dla każdego kąta $\\alpha$, dla którego wyrażenia mają sens, zachodzi $\\frac{1-\\cos\\alpha}{\\sin\\alpha} = \\frac{\\sin\\alpha}{1+\\cos\\alpha}$.', en: 'Show that $\\frac{1-\\cos\\alpha}{\\sin\\alpha} = \\frac{\\sin\\alpha}{1+\\cos\\alpha}$ whenever both sides are defined.' },
          answer: '(1-\\cos\\alpha)(1+\\cos\\alpha)=\\sin^{2}\\alpha',
          accept: ['dowód', 'proof'],
          solution: [
            { pl: 'Rozszerzamy lewą stronę przez $(1+\\cos\\alpha)$: $\\frac{(1-\\cos\\alpha)(1+\\cos\\alpha)}{\\sin\\alpha\\,(1+\\cos\\alpha)} = \\frac{1-\\cos^{2}\\alpha}{\\sin\\alpha\\,(1+\\cos\\alpha)}$.', en: 'Multiply the left side by $\\frac{1+\\cos\\alpha}{1+\\cos\\alpha}$: the numerator becomes $1-\\cos^{2}\\alpha$.' },
            { pl: 'Z jedynki $1-\\cos^{2}\\alpha = \\sin^{2}\\alpha$, więc ułamek równa się $\\frac{\\sin\\alpha}{1+\\cos\\alpha}$.', en: 'By the identity $1-\\cos^{2}\\alpha = \\sin^{2}\\alpha$, so the fraction equals $\\frac{\\sin\\alpha}{1+\\cos\\alpha}$.' },
          ],
          trap: { pl: 'Mnożenie „na krzyż” obu stron tezy — dowód prowadzi się od jednej strony do drugiej, a nie od tezy do prawdy.', en: 'Cross-multiplying the claim itself — a proof transforms one side into the other, not the claim into a truth.' },
        },
        {
          id: 'jedynka-tozsamosci-l5-01',
          skill: 'wyrazenia-symetryczne',
          level: 5,
          prompt: { pl: 'Wiadomo, że $\\sin\\alpha+\\cos\\alpha = \\frac{1}{2}$. Oblicz $\\sin\\alpha\\cos\\alpha$ oraz $\\sin^{3}\\alpha+\\cos^{3}\\alpha$.', en: 'Given $\\sin\\alpha+\\cos\\alpha = \\frac{1}{2}$, compute $\\sin\\alpha\\cos\\alpha$ and $\\sin^{3}\\alpha+\\cos^{3}\\alpha$.' },
          answer: '\\sin\\alpha\\cos\\alpha=-\\frac{3}{8},\\quad \\sin^{3}\\alpha+\\cos^{3}\\alpha=\\frac{11}{16}',
          accept: ['-3/8, 11/16'],
          solution: [
            { pl: 'Kwadrat sumy: $\\frac{1}{4} = \\sin^{2}\\alpha+2\\sin\\alpha\\cos\\alpha+\\cos^{2}\\alpha = 1+2\\sin\\alpha\\cos\\alpha$, stąd $\\sin\\alpha\\cos\\alpha = -\\frac{3}{8}$.', en: 'Square the sum: $\\frac{1}{4} = 1+2\\sin\\alpha\\cos\\alpha$, hence $\\sin\\alpha\\cos\\alpha = -\\frac{3}{8}$.' },
            { pl: 'Suma sześcianów: $\\sin^{3}\\alpha+\\cos^{3}\\alpha = (\\sin\\alpha+\\cos\\alpha)(1-\\sin\\alpha\\cos\\alpha)$.', en: 'Sum of cubes: $(\\sin\\alpha+\\cos\\alpha)(1-\\sin\\alpha\\cos\\alpha)$.' },
            { pl: '$= \\frac{1}{2}\\left(1+\\frac{3}{8}\\right) = \\frac{1}{2}\\cdot\\frac{11}{8} = \\frac{11}{16}$.', en: '$= \\frac{1}{2}\\cdot\\frac{11}{8} = \\frac{11}{16}$.' },
          ],
          trap: { pl: 'Zdziwienie ujemnym iloczynem i „poprawienie” znaku — suma $\\frac12$ jest możliwa tylko, gdy jedna z funkcji jest ujemna.', en: 'Fixing the negative product by hand — a sum of $\\frac12$ is only possible when one of the two functions is negative.' },
        },
        {
          id: 'jedynka-tozsamosci-l5-02',
          skill: 'wyrazenia-symetryczne',
          level: 5,
          prompt: { pl: 'Wiedząc, że $\\operatorname{tg}\\alpha+\\operatorname{ctg}\\alpha = 4$, oblicz $\\sin\\alpha\\cos\\alpha$ oraz $\\sin^{4}\\alpha+\\cos^{4}\\alpha$.', en: 'Given $\\operatorname{tg}\\alpha+\\operatorname{ctg}\\alpha = 4$, compute $\\sin\\alpha\\cos\\alpha$ and $\\sin^{4}\\alpha+\\cos^{4}\\alpha$.' },
          answer: '\\sin\\alpha\\cos\\alpha=\\frac{1}{4},\\quad \\sin^{4}\\alpha+\\cos^{4}\\alpha=\\frac{7}{8}',
          accept: ['1/4, 7/8'],
          solution: [
            { pl: '$\\operatorname{tg}\\alpha+\\operatorname{ctg}\\alpha = \\frac{\\sin^{2}\\alpha+\\cos^{2}\\alpha}{\\sin\\alpha\\cos\\alpha} = \\frac{1}{\\sin\\alpha\\cos\\alpha} = 4$, więc $\\sin\\alpha\\cos\\alpha = \\frac{1}{4}$.', en: 'Common denominator: $\\frac{1}{\\sin\\alpha\\cos\\alpha} = 4$, so $\\sin\\alpha\\cos\\alpha = \\frac{1}{4}$.' },
            { pl: '$\\sin^{4}\\alpha+\\cos^{4}\\alpha = (\\sin^{2}\\alpha+\\cos^{2}\\alpha)^{2}-2\\sin^{2}\\alpha\\cos^{2}\\alpha = 1-2\\left(\\frac{1}{4}\\right)^{2}$.', en: '$\\sin^{4}\\alpha+\\cos^{4}\\alpha = 1-2(\\sin\\alpha\\cos\\alpha)^{2} = 1-2\\cdot\\frac{1}{16}$.' },
            { pl: '$= 1-\\frac{1}{8} = \\frac{7}{8}$.', en: '$= \\frac{7}{8}$.' },
          ],
          trap: { pl: 'Próba wyznaczenia $\\operatorname{tg}\\alpha$ z równania kwadratowego — działa, ale wyrażenie $\\frac{1}{\\sin\\alpha\\cos\\alpha}$ daje wynik w jednej linijce.', en: 'Solving a quadratic for $\\operatorname{tg}\\alpha$ — it works, but the identity $\\frac{1}{\\sin\\alpha\\cos\\alpha}$ finishes in one line.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wzory-redukcyjne',
      title: { pl: 'Wzory redukcyjne', en: 'Reduction formulas' },
      level: 3,
      prereq: ['miara-katow-okrag'],
      theory: {
        pl: 'Wzory redukcyjne sprowadzają funkcje dowolnego kąta do funkcji kąta ostrego. Recepta: przy kątach '
          + '$\\pi\\pm\\alpha$ i $2\\pi-\\alpha$ funkcja zostaje ta sama, przy $\\frac{\\pi}{2}\\pm\\alpha$ '
          + 'i $\\frac{3\\pi}{2}\\pm\\alpha$ zamienia się na kofunkcję ($\\sin\\leftrightarrow\\cos$, '
          + '$\\operatorname{tg}\\leftrightarrow\\operatorname{ctg}$), a znak bierze się z ćwiartki, w której leży '
          + 'wyjściowy kąt, traktując $\\alpha$ jako ostry. Do tego parzystość — cosinus jest funkcją parzystą, '
          + 'sinus i tangens nieparzystymi — oraz okresowość: $2\\pi$ dla sinusa i cosinusa, $\\pi$ dla tangensa '
          + 'i kotangensa. Duże kąty najpierw redukuje się o pełne okresy, dopiero potem stosuje wzory.',
        en: 'Reduction formulas turn any angle into an acute one. The recipe: at $\\pi\\pm\\alpha$ and '
          + '$2\\pi-\\alpha$ the function stays itself, at $\\frac{\\pi}{2}\\pm\\alpha$ and '
          + '$\\frac{3\\pi}{2}\\pm\\alpha$ it swaps to its cofunction ($\\sin\\leftrightarrow\\cos$, '
          + '$\\operatorname{tg}\\leftrightarrow\\operatorname{ctg}$); the sign comes from the quadrant of the '
          + 'original angle with $\\alpha$ treated as acute. Add parity — cosine even, sine and tangent odd — '
          + 'and periodicity: $2\\pi$ for sine and cosine, $\\pi$ for tangent and cotangent. Strip full periods '
          + 'first, then reduce.',
      },
      formulas: [
        { id: 'parzystosc-funkcji', tex: '\\sin(-\\alpha) = -\\sin\\alpha,\\qquad \\cos(-\\alpha) = \\cos\\alpha,\\qquad \\operatorname{tg}(-\\alpha) = -\\operatorname{tg}\\alpha', name: { pl: 'Parzystość i nieparzystość', en: 'Parity' }, note: { pl: 'Cosinus parzysty, pozostałe nieparzyste — minus „wychodzi” przed sinus i tangens.', en: 'Cosine is even, the rest odd — the minus pulls out of sine and tangent.' }, drill: true },
        { id: 'okresowosc-funkcji', tex: '\\sin(\\alpha+2k\\pi) = \\sin\\alpha,\\qquad \\cos(\\alpha+2k\\pi) = \\cos\\alpha,\\qquad \\operatorname{tg}(\\alpha+k\\pi) = \\operatorname{tg}\\alpha', name: { pl: 'Okresowość', en: 'Periodicity' }, note: { pl: 'Tangens ma okres $\\pi$, o połowę krótszy niż sinus i cosinus.', en: 'Tangent repeats every $\\pi$ — half the sine period.' }, drill: true },
        { id: 'redukcja-o-pi', tex: '\\sin(\\pi-\\alpha) = \\sin\\alpha,\\qquad \\sin(\\pi+\\alpha) = -\\sin\\alpha,\\qquad \\cos(\\pi\\pm\\alpha) = -\\cos\\alpha', name: { pl: 'Redukcja o kąt półpełny', en: 'Reduction about $\\pi$' }, note: { pl: 'Funkcja zostaje sobą, znak z ćwiartki: $\\pi-\\alpha$ to II ćwiartka, $\\pi+\\alpha$ to III.', en: 'The function keeps its name; the sign follows the quadrant.' }, drill: true },
        { id: 'kofunkcje', tex: '\\sin\\left(\\tfrac{\\pi}{2}-\\alpha\\right) = \\cos\\alpha,\\qquad \\sin\\left(\\tfrac{\\pi}{2}+\\alpha\\right) = \\cos\\alpha,\\qquad \\cos\\left(\\tfrac{3\\pi}{2}+\\alpha\\right) = \\sin\\alpha', name: { pl: 'Zamiana na kofunkcję', en: 'Cofunction swaps' }, note: { pl: 'Przy nieparzystych wielokrotnościach $\\frac{\\pi}{2}$ sinus i cosinus zamieniają się rolami; znak nadal z ćwiartki.', en: 'At odd multiples of $\\frac{\\pi}{2}$ sine and cosine trade places; the sign still follows the quadrant.' }, drill: true },
      ],
      skills: [
        { id: 'parzystosc-okresowosc', title: { pl: 'Parzystość i okresowość', en: 'Parity and periodicity' }, levels: [2, 3] },
        { id: 'redukcja-wartosci', title: { pl: 'Redukcja do kąta ostrego', en: 'Reducing to an acute angle' }, levels: [2, 4] },
        { id: 'redukcja-wyrazen', title: { pl: 'Upraszczanie wyrażeń wzorami redukcyjnymi', en: 'Simplifying with reduction formulas' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'wzory-redukcyjne-l2-01',
          skill: 'parzystosc-okresowosc',
          level: 2,
          prompt: { pl: 'Oblicz $\\cos(-60^\\circ)$.', en: 'Compute $\\cos(-60^\\circ)$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5'],
          solution: [
            { pl: 'Cosinus jest funkcją parzystą: $\\cos(-60^\\circ) = \\cos 60^\\circ$.', en: 'Cosine is even: $\\cos(-60^\\circ) = \\cos 60^\\circ$.' },
            { pl: '$\\cos 60^\\circ = \\frac{1}{2}$.', en: '$\\cos 60^\\circ = \\frac{1}{2}$.' },
          ],
          trap: { pl: 'Wyciągnięcie minusa przed cosinus — to sinus i tangens są nieparzyste, cosinus znaku nie zmienia.', en: 'Pulling the minus out of cosine — sine and tangent are odd, cosine is not.' },
        },
        {
          id: 'wzory-redukcyjne-l2-02',
          skill: 'redukcja-wartosci',
          level: 2,
          prompt: { pl: 'Oblicz $\\sin 150^\\circ$.', en: 'Compute $\\sin 150^\\circ$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5'],
          solution: [
            { pl: '$150^\\circ = 180^\\circ-30^\\circ$: $\\sin(180^\\circ-\\alpha) = \\sin\\alpha$.', en: '$150^\\circ = 180^\\circ-30^\\circ$ and $\\sin(180^\\circ-\\alpha) = \\sin\\alpha$.' },
            { pl: '$\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.', en: '$\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.' },
          ],
          trap: { pl: 'Dopisanie minusa „bo kąt rozwarty” — w II ćwiartce sinus jest właśnie dodatni.', en: 'Adding a minus "because the angle is obtuse" — sine is exactly the function that stays positive in quadrant II.' },
        },
        {
          id: 'wzory-redukcyjne-l3-01',
          skill: 'redukcja-wartosci',
          level: 3,
          prompt: { pl: 'Oblicz $\\operatorname{tg}\\frac{5\\pi}{4}$.', en: 'Compute $\\operatorname{tg}\\frac{5\\pi}{4}$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: '$\\frac{5\\pi}{4} = \\pi+\\frac{\\pi}{4}$, a tangens ma okres $\\pi$: $\\operatorname{tg}\\frac{5\\pi}{4} = \\operatorname{tg}\\frac{\\pi}{4}$.', en: '$\\frac{5\\pi}{4} = \\pi+\\frac{\\pi}{4}$ and tangent has period $\\pi$.' },
            { pl: '$\\operatorname{tg}\\frac{\\pi}{4} = 1$.', en: '$\\operatorname{tg}\\frac{\\pi}{4} = 1$.' },
          ],
          trap: { pl: 'Odpowiedź $-1$ przez skojarzenie „III ćwiartka = minus” — tangens jest w III ćwiartce dodatni.', en: 'Answering $-1$ on the reflex "quadrant III means minus" — tangent is positive there.' },
        },
        {
          id: 'wzory-redukcyjne-l3-02',
          skill: 'redukcja-wartosci',
          level: 3,
          prompt: { pl: 'Oblicz $\\cos 210^\\circ$.', en: 'Compute $\\cos 210^\\circ$.' },
          answer: '-\\frac{\\sqrt{3}}{2}',
          accept: ['-sqrt(3)/2', '-√3/2'],
          solution: [
            { pl: '$210^\\circ = 180^\\circ+30^\\circ$: $\\cos(180^\\circ+\\alpha) = -\\cos\\alpha$.', en: '$210^\\circ = 180^\\circ+30^\\circ$ and $\\cos(180^\\circ+\\alpha) = -\\cos\\alpha$.' },
            { pl: '$\\cos 210^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.', en: '$= -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.' },
          ],
          trap: { pl: 'Pomylenie wartości: $\\cos 30^\\circ = \\frac{\\sqrt3}{2}$, a nie $\\frac12$ — tabelkę sinusów czyta się dla cosinusa od końca.', en: 'Value swap: $\\cos 30^\\circ = \\frac{\\sqrt3}{2}$, not $\\frac12$ — cosine reads the sine table backwards.' },
        },
        {
          id: 'wzory-redukcyjne-l3-03',
          skill: 'parzystosc-okresowosc',
          level: 3,
          prompt: { pl: 'Oblicz $\\sin 1470^\\circ$.', en: 'Compute $\\sin 1470^\\circ$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', '0{,}5'],
          solution: [
            { pl: '$1470^\\circ = 4\\cdot 360^\\circ + 30^\\circ$, a okres sinusa to $360^\\circ$.', en: '$1470^\\circ = 4\\cdot 360^\\circ + 30^\\circ$; the period of sine is $360^\\circ$.' },
            { pl: '$\\sin 1470^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.', en: '$\\sin 1470^\\circ = \\sin 30^\\circ = \\frac{1}{2}$.' },
          ],
          trap: { pl: 'Redukowanie po $180^\\circ$ — okres sinusa to $360^\\circ$; po $180^\\circ$ sinus zmienia znak.', en: 'Stripping multiples of $180^\\circ$ — the sine period is $360^\\circ$; every $180^\\circ$ flips the sign.' },
        },
        {
          id: 'wzory-redukcyjne-l4-01',
          skill: 'redukcja-wyrazen',
          level: 4,
          prompt: { pl: 'Uprość wyrażenie $\\frac{\\sin(\\pi-\\alpha)\\,\\cos\\left(\\frac{3\\pi}{2}+\\alpha\\right)}{\\operatorname{tg}(\\pi+\\alpha)\\,\\cos(-\\alpha)}$ (zakładamy, że wszystkie wyrażenia mają sens).', en: 'Simplify $\\frac{\\sin(\\pi-\\alpha)\\,\\cos\\left(\\frac{3\\pi}{2}+\\alpha\\right)}{\\operatorname{tg}(\\pi+\\alpha)\\,\\cos(-\\alpha)}$ (all expressions defined).' },
          answer: '\\sin\\alpha',
          accept: ['sin(a)', 'sin alpha', 'sinα'],
          solution: [
            { pl: 'Redukujemy po kolei: $\\sin(\\pi-\\alpha) = \\sin\\alpha$, $\\cos\\left(\\frac{3\\pi}{2}+\\alpha\\right) = \\sin\\alpha$, $\\operatorname{tg}(\\pi+\\alpha) = \\operatorname{tg}\\alpha$, $\\cos(-\\alpha) = \\cos\\alpha$.', en: 'Reduce each factor: $\\sin\\alpha$, $\\sin\\alpha$, $\\operatorname{tg}\\alpha$, $\\cos\\alpha$.' },
            { pl: 'Mianownik: $\\operatorname{tg}\\alpha\\cos\\alpha = \\sin\\alpha$.', en: 'The denominator is $\\operatorname{tg}\\alpha\\cos\\alpha = \\sin\\alpha$.' },
            { pl: 'Całość: $\\frac{\\sin^{2}\\alpha}{\\sin\\alpha} = \\sin\\alpha$.', en: 'Altogether $\\frac{\\sin^{2}\\alpha}{\\sin\\alpha} = \\sin\\alpha$.' },
          ],
          trap: { pl: 'Znak przy $\\cos\\left(\\frac{3\\pi}{2}+\\alpha\\right)$ — to IV ćwiartka, w której cosinus jest dodatni, więc wynik to $+\\sin\\alpha$, nie $-\\sin\\alpha$.', en: 'The sign of $\\cos\\left(\\frac{3\\pi}{2}+\\alpha\\right)$ — that angle sits in quadrant IV where cosine is positive, so it equals $+\\sin\\alpha$.' },
        },
        {
          id: 'wzory-redukcyjne-l4-02',
          skill: 'redukcja-wyrazen',
          level: 4,
          prompt: { pl: 'Oblicz wartość wyrażenia $\\sin^{2}\\left(\\frac{\\pi}{2}+\\alpha\\right)+\\sin^{2}(\\pi+\\alpha)$.', en: 'Evaluate $\\sin^{2}\\left(\\frac{\\pi}{2}+\\alpha\\right)+\\sin^{2}(\\pi+\\alpha)$.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: '$\\sin\\left(\\frac{\\pi}{2}+\\alpha\\right) = \\cos\\alpha$ oraz $\\sin(\\pi+\\alpha) = -\\sin\\alpha$.', en: '$\\sin\\left(\\frac{\\pi}{2}+\\alpha\\right) = \\cos\\alpha$ and $\\sin(\\pi+\\alpha) = -\\sin\\alpha$.' },
            { pl: 'Po podniesieniu do kwadratu: $\\cos^{2}\\alpha+\\sin^{2}\\alpha = 1$.', en: 'After squaring: $\\cos^{2}\\alpha+\\sin^{2}\\alpha = 1$.' },
          ],
          trap: { pl: 'Uznanie $\\sin\\left(\\frac{\\pi}{2}+\\alpha\\right)$ za $\\sin\\alpha$ — przy $\\frac{\\pi}{2}$ funkcja zamienia się na kofunkcję.', en: 'Treating $\\sin\\left(\\frac{\\pi}{2}+\\alpha\\right)$ as $\\sin\\alpha$ — at $\\frac{\\pi}{2}$ the function swaps to its cofunction.' },
        },
        {
          id: 'wzory-redukcyjne-l5-01',
          skill: 'redukcja-wyrazen',
          level: 5,
          prompt: { pl: 'Oblicz sumę $\\cos^{2}1^\\circ+\\cos^{2}2^\\circ+\\cos^{2}3^\\circ+\\dots+\\cos^{2}89^\\circ$.', en: 'Compute $\\cos^{2}1^\\circ+\\cos^{2}2^\\circ+\\dots+\\cos^{2}89^\\circ$.' },
          answer: '\\frac{89}{2}',
          accept: ['89/2', '44{,}5', '44.5'],
          solution: [
            { pl: 'Łączymy w pary: $\\cos^{2}k^\\circ+\\cos^{2}(90^\\circ-k^\\circ) = \\cos^{2}k^\\circ+\\sin^{2}k^\\circ = 1$.', en: 'Pair the terms: $\\cos^{2}k^\\circ+\\cos^{2}(90^\\circ-k^\\circ) = \\cos^{2}k^\\circ+\\sin^{2}k^\\circ = 1$.' },
            { pl: 'Pary $(1^\\circ,89^\\circ),\\dots,(44^\\circ,46^\\circ)$ dają $44$ jedynek; bez pary zostaje $\\cos^{2}45^\\circ = \\frac{1}{2}$.', en: 'Pairs $(1,89),\\dots,(44,46)$ give $44$ ones; the unpaired $\\cos^{2}45^\\circ$ adds $\\frac{1}{2}$.' },
            { pl: 'Suma: $44+\\frac{1}{2} = \\frac{89}{2}$.', en: 'Total: $44+\\frac{1}{2} = \\frac{89}{2}$.' },
          ],
          trap: { pl: 'Zgubienie środkowego składnika — $45^\\circ$ paruje się sam ze sobą i wnosi $\\frac12$, nie $1$.', en: 'Losing the middle term — $45^\\circ$ pairs with itself and contributes $\\frac12$, not $1$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'sumy-katow',
      title: { pl: 'Sumy kątów, kąt podwojony i połówkowy', en: 'Angle sums, double and half angles' },
      level: 4,
      prereq: ['jedynka-tozsamosci', 'wzory-redukcyjne'],
      theory: {
        pl: 'Wzory na sinus i cosinus sumy kątów to silnik całej trygonometrii — z nich wyprowadza się kąt '
          + 'podwojony, połówkowy i zamianę sum na iloczyny. Kluczowe są trzy postacie kąta podwojonego: '
          + '$\\cos 2\\alpha = \\cos^{2}\\alpha-\\sin^{2}\\alpha = 2\\cos^{2}\\alpha-1 = 1-2\\sin^{2}\\alpha$ — '
          + 'wybór postaci decyduje o długości rachunku. Wzory połówkowe to dwie ostatnie postacie odwrócone: '
          + '$\\sin^{2}\\frac{\\alpha}{2} = \\frac{1-\\cos\\alpha}{2}$, '
          + '$\\cos^{2}\\frac{\\alpha}{2} = \\frac{1+\\cos\\alpha}{2}$ — po pierwiastkowaniu znak dobiera się '
          + 'z ćwiartki kąta $\\frac{\\alpha}{2}$. Zamiana sum na iloczyny służy do rozkładania równań na czynniki '
          + 'i liczenia wartości typu $\\sin 75^\\circ+\\sin 15^\\circ$. Na maturze wzory są w tablicach — '
          + 'sztuką jest wybór właściwego.',
        en: 'The angle-sum formulas are the engine of trigonometry — double angles, half angles and '
          + 'sum-to-product all follow from them. Know the three faces of the double angle: '
          + '$\\cos 2\\alpha = \\cos^{2}\\alpha-\\sin^{2}\\alpha = 2\\cos^{2}\\alpha-1 = 1-2\\sin^{2}\\alpha$; '
          + 'choosing the right one decides how long the computation is. Half-angle formulas are the last two '
          + 'solved backwards: $\\sin^{2}\\frac{\\alpha}{2} = \\frac{1-\\cos\\alpha}{2}$, '
          + '$\\cos^{2}\\frac{\\alpha}{2} = \\frac{1+\\cos\\alpha}{2}$ — after the square root the sign comes from '
          + 'the quadrant of $\\frac{\\alpha}{2}$. Sum-to-product factorises equations and evaluates sums like '
          + '$\\sin 75^\\circ+\\sin 15^\\circ$. The exam sheet lists all of these — the art is picking the right one.',
      },
      formulas: [
        { id: 'sin-suma-roznica', tex: '\\sin(\\alpha\\pm\\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta', name: { pl: 'Sinus sumy i różnicy', en: 'Sine of a sum and difference' }, note: { pl: 'Znaki zgodne: plus po lewej, plus po prawej.', en: 'Signs agree on both sides.' }, drill: true },
        { id: 'cos-suma-roznica', tex: '\\cos(\\alpha\\pm\\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta', name: { pl: 'Cosinus sumy i różnicy', en: 'Cosine of a sum and difference' }, note: { pl: 'Znaki przeciwne: cosinus sumy ma minus. Najczęściej mylony wzór z tablic.', en: 'Signs flip: the cosine of a sum carries a minus.' }, drill: true },
        { id: 'tg-suma-roznica', tex: '\\operatorname{tg}(\\alpha\\pm\\beta) = \\frac{\\operatorname{tg}\\alpha \\pm \\operatorname{tg}\\beta}{1 \\mp \\operatorname{tg}\\alpha\\,\\operatorname{tg}\\beta}', name: { pl: 'Tangens sumy i różnicy', en: 'Tangent of a sum and difference' }, note: { pl: 'Wymaga $\\cos\\alpha,\\cos\\beta,\\cos(\\alpha\\pm\\beta)\\neq 0$.', en: 'Needs all relevant cosines nonzero.' }, drill: true },
        { id: 'kat-podwojony', tex: '\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha,\\qquad \\cos 2\\alpha = \\cos^{2}\\alpha-\\sin^{2}\\alpha = 2\\cos^{2}\\alpha-1 = 1-2\\sin^{2}\\alpha', name: { pl: 'Funkcje kąta podwojonego', en: 'Double-angle formulas' }, note: { pl: 'Trzy postacie $\\cos 2\\alpha$ — do zadania wybiera się tę, która eliminuje niepotrzebną funkcję.', en: 'Three faces of $\\cos2\\alpha$ — pick the one that eliminates what you do not know.' }, drill: true },
        { id: 'kat-polowkowy', tex: '\\sin^{2}\\frac{\\alpha}{2} = \\frac{1-\\cos\\alpha}{2},\\qquad \\cos^{2}\\frac{\\alpha}{2} = \\frac{1+\\cos\\alpha}{2}', name: { pl: 'Funkcje kąta połówkowego', en: 'Half-angle formulas' }, note: { pl: 'Po spierwiastkowaniu znak dobiera się z ćwiartki kąta $\\frac{\\alpha}{2}$, nie kąta $\\alpha$.', en: 'After the root, the sign follows the quadrant of $\\frac{\\alpha}{2}$, not of $\\alpha$.' }, drill: true },
        { id: 'sumy-na-iloczyny', tex: '\\sin\\alpha+\\sin\\beta = 2\\sin\\tfrac{\\alpha+\\beta}{2}\\cos\\tfrac{\\alpha-\\beta}{2},\\qquad \\cos\\alpha+\\cos\\beta = 2\\cos\\tfrac{\\alpha+\\beta}{2}\\cos\\tfrac{\\alpha-\\beta}{2}', name: { pl: 'Sumy na iloczyny', en: 'Sum to product' }, note: { pl: 'Argumenty iloczynu to średnia i połowa różnicy wyjściowych kątów.', en: 'The product arguments are the mean and half-difference of the original angles.' }, drill: true },
        { id: 'roznice-na-iloczyny', tex: '\\sin\\alpha-\\sin\\beta = 2\\cos\\tfrac{\\alpha+\\beta}{2}\\sin\\tfrac{\\alpha-\\beta}{2},\\qquad \\cos\\alpha-\\cos\\beta = -2\\sin\\tfrac{\\alpha+\\beta}{2}\\sin\\tfrac{\\alpha-\\beta}{2}', name: { pl: 'Różnice na iloczyny', en: 'Difference to product' }, note: { pl: 'Różnica cosinusów wnosi minus przed iloczyn — najczęściej gubiony znak w tym rozdziale.', en: 'The cosine difference carries a leading minus — the most-dropped sign in this chapter.' }, drill: true },
      ],
      skills: [
        { id: 'sumy-roznice-katow', title: { pl: 'Sinus, cosinus i tangens sumy kątów', en: 'Sum formulas' }, levels: [3, 4] },
        { id: 'kat-podwojony-uzycie', title: { pl: 'Kąt podwojony', en: 'Double angles' }, levels: [4, 5] },
        { id: 'kat-polowkowy-uzycie', title: { pl: 'Kąt połówkowy', en: 'Half angles' }, levels: [4, 5] },
        { id: 'sumy-na-iloczyny-uzycie', title: { pl: 'Zamiana sum na iloczyny', en: 'Sum to product' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'sumy-katow-l3-01',
          skill: 'sumy-roznice-katow',
          level: 3,
          prompt: { pl: 'Oblicz $\\sin 75^\\circ$, korzystając z tego, że $75^\\circ = 45^\\circ+30^\\circ$.', en: 'Compute $\\sin 75^\\circ$ using $75^\\circ = 45^\\circ+30^\\circ$.' },
          answer: '\\frac{\\sqrt{6}+\\sqrt{2}}{4}',
          accept: ['(sqrt6+sqrt2)/4', '(√6+√2)/4'],
          solution: [
            { pl: '$\\sin(45^\\circ+30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ+\\cos 45^\\circ\\sin 30^\\circ$.', en: 'Apply the sum formula.' },
            { pl: '$= \\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2}+\\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$.', en: '$= \\frac{\\sqrt6}{4}+\\frac{\\sqrt2}{4} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$.' },
          ],
          trap: { pl: 'Rozdzielenie sinusa na sumę: $\\sin(45^\\circ+30^\\circ)\\neq\\sin 45^\\circ+\\sin 30^\\circ$ — sinus nie jest liniowy.', en: 'Splitting sine over the sum: $\\sin(\\alpha+\\beta)\\neq\\sin\\alpha+\\sin\\beta$ — sine is not linear.' },
        },
        {
          id: 'sumy-katow-l4-01',
          skill: 'sumy-roznice-katow',
          level: 4,
          prompt: { pl: 'Oblicz $\\operatorname{tg}105^\\circ$.', en: 'Compute $\\operatorname{tg}105^\\circ$.' },
          answer: '-2-\\sqrt{3}',
          accept: ['-2-sqrt3', '-(2+√3)'],
          solution: [
            { pl: '$105^\\circ = 60^\\circ+45^\\circ$: $\\operatorname{tg}105^\\circ = \\frac{\\operatorname{tg}60^\\circ+\\operatorname{tg}45^\\circ}{1-\\operatorname{tg}60^\\circ\\operatorname{tg}45^\\circ} = \\frac{\\sqrt{3}+1}{1-\\sqrt{3}}$.', en: 'With $105^\\circ = 60^\\circ+45^\\circ$: $\\frac{\\sqrt{3}+1}{1-\\sqrt{3}}$.' },
            { pl: 'Usuwamy niewymierność: $\\frac{(\\sqrt{3}+1)(1+\\sqrt{3})}{(1-\\sqrt{3})(1+\\sqrt{3})} = \\frac{4+2\\sqrt{3}}{-2} = -2-\\sqrt{3}$.', en: 'Rationalise: $\\frac{(\\sqrt{3}+1)^{2}}{1-3} = \\frac{4+2\\sqrt{3}}{-2} = -2-\\sqrt{3}$.' },
            { pl: 'Kontrola znaku: $105^\\circ$ leży w II ćwiartce, więc tangens musi być ujemny.', en: 'Sign check: $105^\\circ$ is in quadrant II, so tangent must be negative.' },
          ],
          trap: { pl: 'Błąd znaku przy usuwaniu niewymierności — mianownik $(1-\\sqrt3)(1+\\sqrt3) = -2$ jest ujemny; warto na końcu sprawdzić znak z ćwiartki.', en: 'A sign slip while rationalising — the denominator $1-3 = -2$ is negative; check the final sign against the quadrant.' },
        },
        {
          id: 'sumy-katow-l4-02',
          skill: 'sumy-roznice-katow',
          level: 4,
          prompt: { pl: 'Kąty $\\alpha$ i $\\beta$ są ostre, $\\operatorname{tg}\\alpha = \\frac{1}{2}$ i $\\operatorname{tg}\\beta = \\frac{1}{3}$. Oblicz $\\alpha+\\beta$.', en: 'Angles $\\alpha,\\beta$ are acute with $\\operatorname{tg}\\alpha = \\frac{1}{2}$, $\\operatorname{tg}\\beta = \\frac{1}{3}$. Find $\\alpha+\\beta$.' },
          answer: '\\alpha+\\beta=\\frac{\\pi}{4}',
          accept: ['pi/4', '45', '45°'],
          solution: [
            { pl: '$\\operatorname{tg}(\\alpha+\\beta) = \\frac{\\frac{1}{2}+\\frac{1}{3}}{1-\\frac{1}{2}\\cdot\\frac{1}{3}} = \\frac{\\frac{5}{6}}{\\frac{5}{6}} = 1$.', en: '$\\operatorname{tg}(\\alpha+\\beta) = \\frac{5/6}{5/6} = 1$.' },
            { pl: 'Oba tangensy są mniejsze od 1, więc $\\alpha,\\beta<\\frac{\\pi}{4}$ i $\\alpha+\\beta\\in\\left(0,\\frac{\\pi}{2}\\right)$: jedyna możliwość to $\\alpha+\\beta = \\frac{\\pi}{4}$.', en: 'Both tangents are below 1, so $\\alpha+\\beta<\\frac{\\pi}{2}$; the only candidate is $\\frac{\\pi}{4}$.' },
          ],
          trap: { pl: 'Zakończenie na $\\operatorname{tg}(\\alpha+\\beta) = 1$ bez lokalizacji kąta — tangens ma okres $\\pi$, więc trzeba wskazać przedział, w którym leży suma.', en: 'Stopping at $\\operatorname{tg}(\\alpha+\\beta) = 1$ — tangent has period $\\pi$, so you must pin the sum inside an interval first.' },
        },
        {
          id: 'sumy-katow-l4-03',
          skill: 'kat-podwojony-uzycie',
          level: 4,
          prompt: { pl: 'Kąt $\\alpha$ jest ostry i $\\sin\\alpha = \\frac{3}{5}$. Oblicz $\\sin 2\\alpha$ i $\\cos 2\\alpha$.', en: 'The angle $\\alpha$ is acute with $\\sin\\alpha = \\frac{3}{5}$. Compute $\\sin 2\\alpha$ and $\\cos 2\\alpha$.' },
          answer: '\\sin 2\\alpha=\\frac{24}{25},\\quad \\cos 2\\alpha=\\frac{7}{25}',
          accept: ['24/25, 7/25'],
          solution: [
            { pl: 'Kąt ostry: $\\cos\\alpha = \\sqrt{1-\\frac{9}{25}} = \\frac{4}{5}$.', en: 'Acute angle: $\\cos\\alpha = \\frac{4}{5}$.' },
            { pl: '$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}$.', en: '$\\sin 2\\alpha = 2\\cdot\\frac{3}{5}\\cdot\\frac{4}{5} = \\frac{24}{25}$.' },
            { pl: '$\\cos 2\\alpha = 1-2\\sin^{2}\\alpha = 1-\\frac{18}{25} = \\frac{7}{25}$.', en: '$\\cos 2\\alpha = 1-2\\sin^{2}\\alpha = \\frac{7}{25}$.' },
          ],
          trap: { pl: 'Postać $1-2\\sin^{2}\\alpha$ liczy $\\cos 2\\alpha$ bez cosinusa — wybór postaci $\\cos^{2}-\\sin^{2}$ dubluje pracę i okazje do błędu.', en: 'The $1-2\\sin^{2}\\alpha$ form skips computing cosine — using $\\cos^{2}-\\sin^{2}$ doubles the work and the error surface.' },
        },
        {
          id: 'sumy-katow-l4-04',
          skill: 'kat-polowkowy-uzycie',
          level: 4,
          prompt: { pl: 'Oblicz $\\cos\\frac{\\pi}{8}$.', en: 'Compute $\\cos\\frac{\\pi}{8}$.' },
          answer: '\\frac{\\sqrt{2+\\sqrt{2}}}{2}',
          accept: ['sqrt(2+sqrt2)/2', '√(2+√2)/2'],
          solution: [
            { pl: 'Wzór połówkowy dla $\\alpha = \\frac{\\pi}{4}$: $\\cos^{2}\\frac{\\pi}{8} = \\frac{1+\\cos\\frac{\\pi}{4}}{2} = \\frac{1+\\frac{\\sqrt{2}}{2}}{2} = \\frac{2+\\sqrt{2}}{4}$.', en: 'Half-angle with $\\alpha = \\frac{\\pi}{4}$: $\\cos^{2}\\frac{\\pi}{8} = \\frac{2+\\sqrt{2}}{4}$.' },
            { pl: '$\\frac{\\pi}{8}$ jest kątem ostrym, więc $\\cos\\frac{\\pi}{8} = +\\frac{\\sqrt{2+\\sqrt{2}}}{2}$.', en: '$\\frac{\\pi}{8}$ is acute, so the positive root: $\\frac{\\sqrt{2+\\sqrt{2}}}{2}$.' },
          ],
          trap: { pl: 'Pominięcie wyboru znaku po pierwiastkowaniu — tu ćwiartka daje plus, ale sam wzór go nie rozstrzyga.', en: 'Skipping the sign choice after the square root — here the quadrant says plus, but the formula alone does not.' },
        },
        {
          id: 'sumy-katow-l5-01',
          skill: 'kat-podwojony-uzycie',
          level: 5,
          prompt: { pl: 'Wykaż, że dla $\\cos\\alpha\\neq 0$ i $\\cos 2\\alpha\\neq -1$ zachodzi $\\frac{\\sin 2\\alpha}{1+\\cos 2\\alpha} = \\operatorname{tg}\\alpha$.', en: 'Show that $\\frac{\\sin 2\\alpha}{1+\\cos 2\\alpha} = \\operatorname{tg}\\alpha$ for $\\cos\\alpha\\neq0$.' },
          answer: '\\frac{2\\sin\\alpha\\cos\\alpha}{2\\cos^{2}\\alpha}=\\operatorname{tg}\\alpha',
          accept: ['dowód', 'proof'],
          solution: [
            { pl: 'W liczniku $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$; w mianowniku wybieramy postać $\\cos 2\\alpha = 2\\cos^{2}\\alpha-1$, więc $1+\\cos 2\\alpha = 2\\cos^{2}\\alpha$.', en: 'Numerator: $2\\sin\\alpha\\cos\\alpha$. Denominator: with $\\cos2\\alpha = 2\\cos^{2}\\alpha-1$ we get $1+\\cos2\\alpha = 2\\cos^{2}\\alpha$.' },
            { pl: '$\\frac{2\\sin\\alpha\\cos\\alpha}{2\\cos^{2}\\alpha} = \\frac{\\sin\\alpha}{\\cos\\alpha} = \\operatorname{tg}\\alpha$.', en: 'Cancel: $\\frac{\\sin\\alpha}{\\cos\\alpha} = \\operatorname{tg}\\alpha$.' },
          ],
          trap: { pl: 'Wybór postaci $1-2\\sin^{2}\\alpha$ w mianowniku — jedynka się nie skróci i rachunek stanie w miejscu; postać dobiera się do tego, co ma się skrócić.', en: 'Picking $1-2\\sin^{2}\\alpha$ in the denominator — the ones do not cancel and the computation stalls; choose the form that cancels.' },
        },
        {
          id: 'sumy-katow-l5-02',
          skill: 'sumy-na-iloczyny-uzycie',
          level: 5,
          prompt: { pl: 'Oblicz $\\sin 75^\\circ+\\sin 15^\\circ$. Wynik podaj w postaci $\\frac{\\sqrt{a}}{b}$.', en: 'Compute $\\sin 75^\\circ+\\sin 15^\\circ$ in the form $\\frac{\\sqrt{a}}{b}$.' },
          answer: '\\frac{\\sqrt{6}}{2}',
          accept: ['sqrt6/2', '√6/2'],
          solution: [
            { pl: 'Suma na iloczyn: $\\sin 75^\\circ+\\sin 15^\\circ = 2\\sin\\frac{75^\\circ+15^\\circ}{2}\\cos\\frac{75^\\circ-15^\\circ}{2} = 2\\sin 45^\\circ\\cos 30^\\circ$.', en: 'Sum to product: $2\\sin 45^\\circ\\cos 30^\\circ$.' },
            { pl: '$= 2\\cdot\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{6}}{2}$.', en: '$= 2\\cdot\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{6}}{2}$.' },
          ],
          trap: { pl: 'Wstawienie do wzoru całych kątów zamiast średniej i połowy różnicy — argumenty iloczynu to $45^\\circ$ i $30^\\circ$, nie $75^\\circ$ i $15^\\circ$.', en: 'Feeding the raw angles into the product — the arguments are the mean and half-difference, $45^\\circ$ and $30^\\circ$.' },
        },
        {
          id: 'sumy-katow-l5-03',
          skill: 'kat-podwojony-uzycie',
          level: 5,
          prompt: { pl: 'Wykaż tożsamość $\\sin 3\\alpha = 3\\sin\\alpha-4\\sin^{3}\\alpha$.', en: 'Prove the identity $\\sin 3\\alpha = 3\\sin\\alpha-4\\sin^{3}\\alpha$.' },
          answer: '\\sin 3\\alpha=\\sin 2\\alpha\\cos\\alpha+\\cos 2\\alpha\\sin\\alpha=3\\sin\\alpha-4\\sin^{3}\\alpha',
          accept: ['dowód', 'proof'],
          solution: [
            { pl: '$\\sin 3\\alpha = \\sin(2\\alpha+\\alpha) = \\sin 2\\alpha\\cos\\alpha+\\cos 2\\alpha\\sin\\alpha$.', en: 'Write $3\\alpha = 2\\alpha+\\alpha$ and expand.' },
            { pl: '$= 2\\sin\\alpha\\cos^{2}\\alpha+(1-2\\sin^{2}\\alpha)\\sin\\alpha = 2\\sin\\alpha(1-\\sin^{2}\\alpha)+\\sin\\alpha-2\\sin^{3}\\alpha$.', en: 'Substitute $\\cos^{2}\\alpha = 1-\\sin^{2}\\alpha$ and $\\cos2\\alpha = 1-2\\sin^{2}\\alpha$.' },
            { pl: '$= 2\\sin\\alpha-2\\sin^{3}\\alpha+\\sin\\alpha-2\\sin^{3}\\alpha = 3\\sin\\alpha-4\\sin^{3}\\alpha$.', en: 'Collect: $3\\sin\\alpha-4\\sin^{3}\\alpha$.' },
          ],
          trap: { pl: 'Cel dyktuje podstawienia: wszystko trzeba wyrazić przez $\\sin\\alpha$, więc $\\cos^{2}\\alpha$ i $\\cos 2\\alpha$ od razu zamieniamy na sinusy.', en: 'The target dictates the substitutions: everything must become $\\sin\\alpha$, so convert $\\cos^{2}\\alpha$ and $\\cos2\\alpha$ immediately.' },
        },
        {
          id: 'sumy-katow-l6-01',
          skill: 'sumy-na-iloczyny-uzycie',
          level: 6,
          prompt: { pl: 'Wykaż, że $\\cos 36^\\circ-\\cos 72^\\circ = \\frac{1}{2}$.', en: 'Prove that $\\cos 36^\\circ-\\cos 72^\\circ = \\frac{1}{2}$.' },
          answer: '\\frac{1}{2}',
          accept: ['1/2', 'dowód', 'proof'],
          solution: [
            { pl: 'Różnica na iloczyn: $\\cos 36^\\circ-\\cos 72^\\circ = -2\\sin 54^\\circ\\sin(-18^\\circ) = 2\\sin 54^\\circ\\sin 18^\\circ = 2\\cos 36^\\circ\\sin 18^\\circ$.', en: 'Difference to product: $2\\sin 54^\\circ\\sin 18^\\circ = 2\\cos 36^\\circ\\sin 18^\\circ$ (since $\\sin54^\\circ = \\cos36^\\circ$).' },
            { pl: 'Rozszerzamy przez $\\cos 18^\\circ$: $\\frac{2\\sin 18^\\circ\\cos 18^\\circ\\cos 36^\\circ}{\\cos 18^\\circ} = \\frac{\\sin 36^\\circ\\cos 36^\\circ}{\\cos 18^\\circ}$.', en: 'Multiply and divide by $\\cos 18^\\circ$: $\\frac{\\sin 36^\\circ\\cos 36^\\circ}{\\cos 18^\\circ}$.' },
            { pl: 'Jeszcze raz kąt podwojony: $= \\frac{\\sin 72^\\circ}{2\\cos 18^\\circ} = \\frac{\\cos 18^\\circ}{2\\cos 18^\\circ} = \\frac{1}{2}$.', en: 'Double angle again: $\\frac{\\sin 72^\\circ}{2\\cos 18^\\circ} = \\frac{\\cos 18^\\circ}{2\\cos 18^\\circ} = \\frac{1}{2}$.' },
          ],
          trap: { pl: 'Próba obliczenia $\\cos 36^\\circ$ i $\\cos 72^\\circ$ osobno — da się (złoty podział), ale sztuczka z mnożeniem przez $\\cos 18^\\circ$ i podwajaniem kąta omija cały ten rachunek.', en: 'Computing $\\cos 36^\\circ$ and $\\cos 72^\\circ$ separately — possible via the golden ratio, but the multiply-by-$\\cos18^\\circ$ doubling trick skips all of it.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'rownania-trygonometryczne',
      title: { pl: 'Równania i nierówności trygonometryczne', en: 'Trigonometric equations and inequalities' },
      level: 5,
      prereq: ['sumy-katow', 'wzory-redukcyjne'],
      theory: {
        pl: 'Równanie trygonometryczne sprowadza się do postaci podstawowej i wypisuje pełne serie rozwiązań: '
          + '$\\sin x = \\sin\\alpha$ daje dwie serie $x = \\alpha+2k\\pi$ lub $x = \\pi-\\alpha+2k\\pi$, '
          + '$\\cos x = \\cos\\alpha$ daje $x = \\pm\\alpha+2k\\pi$, a $\\operatorname{tg}x = \\operatorname{tg}\\alpha$ '
          + 'jedną serię $x = \\alpha+k\\pi$ — zawsze z dopiskiem $k\\in\\mathbb{Z}$. Równania złożone sprowadza '
          + 'się podstawieniem $t = \\sin x$ lub $t = \\cos x$ do kwadratowych (z warunkiem $|t|\\le 1$) albo '
          + 'rozkłada na czynniki; nigdy nie dzieli się przez wyrażenie mogące być zerem, bo to gubi całe serie '
          + 'rozwiązań. Kombinację $a\\sin x+b\\cos x$ zwija się do $\\sqrt{a^{2}+b^{2}}\\,\\sin(x+\\varphi)$. '
          + 'Nierówności czyta się z okręgu jednostkowego lub wykresu: rozwiązanie na jednym okresie przesuwa się '
          + 'potem o wielokrotności okresu.',
        en: 'Reduce every equation to a basic one and write the full solution series: $\\sin x = \\sin\\alpha$ '
          + 'gives the two series $x = \\alpha+2k\\pi$ or $x = \\pi-\\alpha+2k\\pi$, $\\cos x = \\cos\\alpha$ '
          + 'gives $x = \\pm\\alpha+2k\\pi$, and $\\operatorname{tg}x = \\operatorname{tg}\\alpha$ a single series '
          + '$x = \\alpha+k\\pi$ — always with $k\\in\\mathbb{Z}$. Composite equations become quadratics via '
          + '$t = \\sin x$ or $t = \\cos x$ (with $|t|\\le1$) or are factored; never divide by an expression that '
          + 'can vanish, because that silently deletes whole series. The combination $a\\sin x+b\\cos x$ collapses '
          + 'to $\\sqrt{a^{2}+b^{2}}\\,\\sin(x+\\varphi)$. Inequalities are read off the unit circle or the graph: '
          + 'solve one period, then translate by multiples of the period.',
      },
      formulas: [
        { id: 'rownanie-sin', tex: '\\sin x = \\sin\\alpha \\iff x = \\alpha+2k\\pi \\ \\vee\\ x = \\pi-\\alpha+2k\\pi,\\quad k\\in\\mathbb{Z}', name: { pl: 'Rozwiązania równania z sinusem', en: 'Solving a sine equation' }, note: { pl: 'Dwie serie: kąt i jego dopełnienie do $\\pi$. Zgubienie drugiej serii to połowa rozwiązań mniej.', en: 'Two series: the angle and its supplement. Dropping the second one loses half the solutions.' }, drill: true },
        { id: 'rownanie-cos', tex: '\\cos x = \\cos\\alpha \\iff x = \\alpha+2k\\pi \\ \\vee\\ x = -\\alpha+2k\\pi,\\quad k\\in\\mathbb{Z}', name: { pl: 'Rozwiązania równania z cosinusem', en: 'Solving a cosine equation' }, note: { pl: 'Serie symetryczne: $\\pm\\alpha$. Wynika to z parzystości cosinusa.', en: 'Symmetric series $\\pm\\alpha$ — cosine is even.' }, drill: true },
        { id: 'rownanie-tg', tex: '\\operatorname{tg} x = \\operatorname{tg}\\alpha \\iff x = \\alpha+k\\pi,\\quad k\\in\\mathbb{Z}', name: { pl: 'Rozwiązania równania z tangensem', en: 'Solving a tangent equation' }, note: { pl: 'Jedna seria co $\\pi$ — okres tangensa jest o połowę krótszy.', en: 'One series every $\\pi$ — the tangent period is half as long.' }, drill: true },
        { id: 'postac-asin-bcos', tex: 'a\\sin x+b\\cos x = \\sqrt{a^{2}+b^{2}}\\,\\sin(x+\\varphi),\\quad \\operatorname{tg}\\varphi = \\tfrac{b}{a}', name: { pl: 'Postać $a\\sin x+b\\cos x$', en: 'The $a\\sin x+b\\cos x$ form' }, note: { pl: 'Amplituda $\\sqrt{a^{2}+b^{2}}$ od razu mówi, czy równanie $a\\sin x+b\\cos x = c$ ma rozwiązania.', en: 'The amplitude $\\sqrt{a^{2}+b^{2}}$ immediately decides solvability of $= c$.' }, drill: true },
      ],
      skills: [
        { id: 'rownania-podstawowe', title: { pl: 'Równania podstawowe', en: 'Basic equations' }, levels: [3, 4] },
        { id: 'rownania-sprowadzalne', title: { pl: 'Równania sprowadzalne do kwadratowych', en: 'Equations reducible to quadratics' }, levels: [4, 5] },
        { id: 'rownania-rozklad', title: { pl: 'Rozkład na czynniki i postać $a\\sin x+b\\cos x$', en: 'Factoring and the linear combination' }, levels: [5, 6] },
        { id: 'nierownosci-tryg', title: { pl: 'Nierówności trygonometryczne', en: 'Trigonometric inequalities' }, levels: [4, 6] },
      ],
      problems: [
        {
          id: 'rownania-trygonometryczne-l3-01',
          skill: 'rownania-podstawowe',
          level: 3,
          prompt: { pl: 'Rozwiąż równanie $\\sin x = \\frac{1}{2}$.', en: 'Solve $\\sin x = \\frac{1}{2}$.' },
          answer: 'x=\\frac{\\pi}{6}+2k\\pi\\ \\vee\\ x=\\frac{5\\pi}{6}+2k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['pi/6+2kpi lub 5pi/6+2kpi', 'x=pi/6+2kpi, x=5pi/6+2kpi'],
          solution: [
            { pl: '$\\sin x = \\sin\\frac{\\pi}{6}$, więc $x = \\frac{\\pi}{6}+2k\\pi$ lub $x = \\pi-\\frac{\\pi}{6}+2k\\pi$.', en: '$\\sin x = \\sin\\frac{\\pi}{6}$ gives the two series.' },
            { pl: 'Druga seria: $x = \\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.', en: 'The second series is $x = \\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.' },
          ],
          trap: { pl: 'Podanie tylko $x = \\frac{\\pi}{6}+2k\\pi$ — sinus przyjmuje wartość $\\frac12$ także w II ćwiartce; bez drugiej serii brakuje połowy rozwiązań.', en: 'Giving only $x = \\frac{\\pi}{6}+2k\\pi$ — sine also hits $\\frac12$ in quadrant II; the second series is half the answer.' },
        },
        {
          id: 'rownania-trygonometryczne-l4-01',
          skill: 'rownania-podstawowe',
          level: 4,
          prompt: { pl: 'Rozwiąż równanie $\\cos 2x = -\\frac{\\sqrt{2}}{2}$.', en: 'Solve $\\cos 2x = -\\frac{\\sqrt{2}}{2}$.' },
          answer: 'x=\\frac{3\\pi}{8}+k\\pi\\ \\vee\\ x=-\\frac{3\\pi}{8}+k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['x=3pi/8+kpi lub x=-3pi/8+kpi'],
          solution: [
            { pl: '$-\\frac{\\sqrt{2}}{2} = \\cos\\frac{3\\pi}{4}$, więc $2x = \\frac{3\\pi}{4}+2k\\pi$ lub $2x = -\\frac{3\\pi}{4}+2k\\pi$.', en: '$\\cos 2x = \\cos\\frac{3\\pi}{4}$, so $2x = \\pm\\frac{3\\pi}{4}+2k\\pi$.' },
            { pl: 'Dzielimy wszystko przez 2: $x = \\pm\\frac{3\\pi}{8}+k\\pi$, $k\\in\\mathbb{Z}$.', en: 'Divide everything by 2: $x = \\pm\\frac{3\\pi}{8}+k\\pi$.' },
          ],
          trap: { pl: 'Dzielenie kąta bez dzielenia okresu — z $2k\\pi$ po podzieleniu robi się $k\\pi$; zostawienie $2k\\pi$ gubi co drugą serię.', en: 'Halving the angle but not the period — $2k\\pi$ becomes $k\\pi$ after division; keeping $2k\\pi$ loses every other series.' },
        },
        {
          id: 'rownania-trygonometryczne-l4-02',
          skill: 'rownania-podstawowe',
          level: 4,
          prompt: { pl: 'Rozwiąż równanie $\\operatorname{tg}x = -\\sqrt{3}$.', en: 'Solve $\\operatorname{tg}x = -\\sqrt{3}$.' },
          answer: 'x=-\\frac{\\pi}{3}+k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['x=-pi/3+kpi', 'x=2pi/3+kpi'],
          solution: [
            { pl: '$-\\sqrt{3} = \\operatorname{tg}\\left(-\\frac{\\pi}{3}\\right)$.', en: '$-\\sqrt{3} = \\operatorname{tg}\\left(-\\frac{\\pi}{3}\\right)$.' },
            { pl: 'Tangens ma okres $\\pi$: $x = -\\frac{\\pi}{3}+k\\pi$, $k\\in\\mathbb{Z}$ (równoważnie $x = \\frac{2\\pi}{3}+k\\pi$).', en: 'Period $\\pi$: $x = -\\frac{\\pi}{3}+k\\pi$, equivalently $x = \\frac{2\\pi}{3}+k\\pi$.' },
          ],
          trap: { pl: 'Wypisanie dwóch serii z $2k\\pi$ jak dla sinusa — tangens ma okres $\\pi$ i jedną serię, która obejmuje wszystko.', en: 'Writing two $2k\\pi$ series as for sine — tangent has period $\\pi$ and a single series covers everything.' },
        },
        {
          id: 'rownania-trygonometryczne-l4-03',
          skill: 'nierownosci-tryg',
          level: 4,
          prompt: { pl: 'Rozwiąż nierówność $\\sin x > \\frac{1}{2}$ w przedziale $\\langle 0, 2\\pi\\rangle$.', en: 'Solve $\\sin x > \\frac{1}{2}$ on $\\langle 0, 2\\pi\\rangle$.' },
          answer: 'x\\in\\left(\\frac{\\pi}{6},\\ \\frac{5\\pi}{6}\\right)',
          accept: ['(pi/6, 5pi/6)'],
          solution: [
            { pl: 'Na okręgu jednostkowym $\\sin x = \\frac12$ dla $x = \\frac{\\pi}{6}$ i $x = \\frac{5\\pi}{6}$.', en: 'Equality holds at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$.' },
            { pl: 'Sinus przekracza $\\frac12$ między tymi kątami (górny łuk okręgu): $x\\in\\left(\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right)$.', en: 'Sine exceeds $\\frac12$ between them (the upper arc): $x\\in\\left(\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right)$.' },
          ],
          trap: { pl: 'Domknięcie przedziału — nierówność jest ostra, końce, w których $\\sin x = \\frac12$, nie należą do rozwiązania.', en: 'Closing the interval — the inequality is strict, so the endpoints where $\\sin x = \\frac12$ are excluded.' },
        },
        {
          id: 'rownania-trygonometryczne-l5-01',
          skill: 'rownania-sprowadzalne',
          level: 5,
          prompt: { pl: 'Rozwiąż równanie $2\\sin^{2}x-3\\cos x = 0$.', en: 'Solve $2\\sin^{2}x-3\\cos x = 0$.' },
          answer: 'x=\\frac{\\pi}{3}+2k\\pi\\ \\vee\\ x=-\\frac{\\pi}{3}+2k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['x=pi/3+2kpi lub x=-pi/3+2kpi'],
          solution: [
            { pl: 'Z jedynki $\\sin^{2}x = 1-\\cos^{2}x$: $2-2\\cos^{2}x-3\\cos x = 0$, czyli $2\\cos^{2}x+3\\cos x-2 = 0$.', en: 'Substitute $\\sin^{2}x = 1-\\cos^{2}x$: $2\\cos^{2}x+3\\cos x-2 = 0$.' },
            { pl: 'Podstawienie $t = \\cos x$, $|t|\\le 1$: $2t^{2}+3t-2 = 0$, $\\Delta = 25$, $t = \\frac{1}{2}$ lub $t = -2$ (odpada).', en: 'With $t = \\cos x$: $t = \\frac{1}{2}$ or $t = -2$ (rejected, $|t|\\le1$).' },
            { pl: '$\\cos x = \\frac{1}{2}$: $x = \\pm\\frac{\\pi}{3}+2k\\pi$, $k\\in\\mathbb{Z}$.', en: '$\\cos x = \\frac{1}{2}$ gives $x = \\pm\\frac{\\pi}{3}+2k\\pi$.' },
          ],
          trap: { pl: 'Pozostawienie pierwiastka $t = -2$ — podstawienie trygonometryczne ma warunek $|t|\\le 1$ i jeden pierwiastek kwadratowego zwykle odpada.', en: 'Keeping the root $t = -2$ — the substitution carries $|t|\\le1$ and one quadratic root usually dies.' },
        },
        {
          id: 'rownania-trygonometryczne-l5-02',
          skill: 'rownania-rozklad',
          level: 5,
          prompt: { pl: 'Rozwiąż równanie $\\sin 2x = \\cos x$.', en: 'Solve $\\sin 2x = \\cos x$.' },
          answer: 'x=\\frac{\\pi}{2}+k\\pi\\ \\vee\\ x=\\frac{\\pi}{6}+2k\\pi\\ \\vee\\ x=\\frac{5\\pi}{6}+2k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['x=pi/2+kpi, x=pi/6+2kpi, x=5pi/6+2kpi'],
          solution: [
            { pl: '$2\\sin x\\cos x-\\cos x = 0$, czyli $\\cos x\\,(2\\sin x-1) = 0$.', en: 'Factor: $\\cos x\\,(2\\sin x-1) = 0$.' },
            { pl: '$\\cos x = 0$: $x = \\frac{\\pi}{2}+k\\pi$.', en: '$\\cos x = 0$: $x = \\frac{\\pi}{2}+k\\pi$.' },
            { pl: '$\\sin x = \\frac{1}{2}$: $x = \\frac{\\pi}{6}+2k\\pi$ lub $x = \\frac{5\\pi}{6}+2k\\pi$, $k\\in\\mathbb{Z}$.', en: '$\\sin x = \\frac{1}{2}$: the two sine series.' },
          ],
          trap: { pl: 'Podzielenie obu stron przez $\\cos x$ — to skreśla całą serię $x = \\frac{\\pi}{2}+k\\pi$; wolno tylko wyłączać przed nawias.', en: 'Dividing by $\\cos x$ — that deletes the whole series $x = \\frac{\\pi}{2}+k\\pi$; factor it out instead.' },
        },
        {
          id: 'rownania-trygonometryczne-l5-03',
          skill: 'rownania-rozklad',
          level: 5,
          prompt: { pl: 'Rozwiąż równanie $\\sin x+\\sin 3x = 0$.', en: 'Solve $\\sin x+\\sin 3x = 0$.' },
          answer: 'x=\\frac{k\\pi}{2},\\quad k\\in\\mathbb{Z}',
          accept: ['x=kpi/2'],
          solution: [
            { pl: 'Suma na iloczyn: $\\sin 3x+\\sin x = 2\\sin 2x\\cos x = 0$.', en: 'Sum to product: $2\\sin 2x\\cos x = 0$.' },
            { pl: '$\\sin 2x = 0$ daje $2x = k\\pi$, czyli $x = \\frac{k\\pi}{2}$; $\\cos x = 0$ daje $x = \\frac{\\pi}{2}+k\\pi$ — ta seria zawiera się w poprzedniej.', en: '$\\sin 2x = 0$ gives $x = \\frac{k\\pi}{2}$; the $\\cos x = 0$ series is contained in it.' },
            { pl: 'Odpowiedź: $x = \\frac{k\\pi}{2}$, $k\\in\\mathbb{Z}$.', en: 'Answer: $x = \\frac{k\\pi}{2}$, $k\\in\\mathbb{Z}$.' },
          ],
          trap: { pl: 'Rozpisywanie $\\sin 3x = 3\\sin x-4\\sin^{3}x$ i walka z równaniem sześciennym — suma na iloczyn załatwia to w jednej linijce.', en: 'Expanding $\\sin 3x$ into the cubic — sum-to-product finishes in one line.' },
        },
        {
          id: 'rownania-trygonometryczne-l5-04',
          skill: 'nierownosci-tryg',
          level: 5,
          prompt: { pl: 'Rozwiąż nierówność $\\cos x\\le -\\frac{1}{2}$ (podaj pełne rozwiązanie w $\\mathbb{R}$).', en: 'Solve $\\cos x\\le -\\frac{1}{2}$ over all of $\\mathbb{R}$.' },
          answer: 'x\\in\\left\\langle\\frac{2\\pi}{3}+2k\\pi,\\ \\frac{4\\pi}{3}+2k\\pi\\right\\rangle,\\quad k\\in\\mathbb{Z}',
          accept: ['[2pi/3+2kpi, 4pi/3+2kpi]'],
          solution: [
            { pl: 'Na okręgu $\\cos x = -\\frac12$ dla $x = \\frac{2\\pi}{3}$ i $x = \\frac{4\\pi}{3}$.', en: 'Equality at $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$.' },
            { pl: 'Cosinus (współrzędna pozioma) jest $\\le -\\frac12$ na lewym łuku między tymi kątami: $\\left\\langle\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\right\\rangle$.', en: 'The horizontal coordinate is $\\le-\\frac12$ on the left arc: $\\left\\langle\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\right\\rangle$.' },
            { pl: 'Pełne rozwiązanie: przesunięcia o okres, $x\\in\\left\\langle\\frac{2\\pi}{3}+2k\\pi,\\frac{4\\pi}{3}+2k\\pi\\right\\rangle$, $k\\in\\mathbb{Z}$.', en: 'Translate by the period: $\\left\\langle\\frac{2\\pi}{3}+2k\\pi,\\frac{4\\pi}{3}+2k\\pi\\right\\rangle$, $k\\in\\mathbb{Z}$.' },
          ],
          trap: { pl: 'Zatrzymanie się na jednym okresie — bez „$+2k\\pi$” odpowiedź obejmuje ułamek zbioru rozwiązań; nierówność nieostra wymaga też przedziału domkniętego.', en: 'Stopping at one period — without the $+2k\\pi$ the answer misses almost all solutions; the non-strict inequality also needs a closed interval.' },
        },
        {
          id: 'rownania-trygonometryczne-l6-01',
          skill: 'rownania-rozklad',
          level: 6,
          prompt: { pl: 'Rozwiąż równanie $\\sin x+\\cos x = 1$.', en: 'Solve $\\sin x+\\cos x = 1$.' },
          answer: 'x=2k\\pi\\ \\vee\\ x=\\frac{\\pi}{2}+2k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['x=2kpi lub x=pi/2+2kpi'],
          solution: [
            { pl: 'Zwijamy: $\\sin x+\\cos x = \\sqrt{2}\\sin\\left(x+\\frac{\\pi}{4}\\right)$, więc $\\sin\\left(x+\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.', en: 'Collapse: $\\sqrt{2}\\sin\\left(x+\\frac{\\pi}{4}\\right) = 1$, so $\\sin\\left(x+\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.' },
            { pl: '$x+\\frac{\\pi}{4} = \\frac{\\pi}{4}+2k\\pi$ lub $x+\\frac{\\pi}{4} = \\frac{3\\pi}{4}+2k\\pi$.', en: 'Two series: $x+\\frac{\\pi}{4} = \\frac{\\pi}{4}+2k\\pi$ or $\\frac{3\\pi}{4}+2k\\pi$.' },
            { pl: 'Stąd $x = 2k\\pi$ lub $x = \\frac{\\pi}{2}+2k\\pi$, $k\\in\\mathbb{Z}$. Sprawdzenie: $\\sin 0+\\cos 0 = 1$, $\\sin\\frac{\\pi}{2}+\\cos\\frac{\\pi}{2} = 1$.', en: 'Hence $x = 2k\\pi$ or $x = \\frac{\\pi}{2}+2k\\pi$; both check out.' },
          ],
          trap: { pl: 'Podnoszenie obu stron do kwadratu — daje $\\sin 2x = 0$, czyli także fałszywe rozwiązania typu $x = \\pi$, gdzie suma wynosi $-1$; po kwadratowaniu konieczna jest weryfikacja.', en: 'Squaring both sides — it yields $\\sin 2x = 0$ and fake roots like $x = \\pi$, where the sum is $-1$; squaring demands a final check.' },
        },
        {
          id: 'rownania-trygonometryczne-l6-02',
          skill: 'nierownosci-tryg',
          level: 6,
          prompt: { pl: 'Rozwiąż nierówność $\\sin^{2}x < \\frac{1}{4}$ (podaj pełne rozwiązanie w $\\mathbb{R}$).', en: 'Solve $\\sin^{2}x < \\frac{1}{4}$ over all of $\\mathbb{R}$.' },
          answer: 'x\\in\\left(-\\frac{\\pi}{6}+k\\pi,\\ \\frac{\\pi}{6}+k\\pi\\right),\\quad k\\in\\mathbb{Z}',
          accept: ['(-pi/6+kpi, pi/6+kpi)'],
          solution: [
            { pl: 'Równoważnie $|\\sin x| < \\frac{1}{2}$, czyli $-\\frac{1}{2} < \\sin x < \\frac{1}{2}$.', en: 'Equivalently $|\\sin x| < \\frac{1}{2}$.' },
            { pl: 'Wokół każdego miejsca zerowego sinusa ($x = k\\pi$) wartości pozostają w $\\left(-\\frac12,\\frac12\\right)$ aż do $\\pm\\frac{\\pi}{6}$.', en: 'Around every zero of sine ($x = k\\pi$) the values stay within the band up to $\\pm\\frac{\\pi}{6}$.' },
            { pl: 'Rozwiązanie: $x\\in\\left(-\\frac{\\pi}{6}+k\\pi,\\ \\frac{\\pi}{6}+k\\pi\\right)$, $k\\in\\mathbb{Z}$ — pasy o okresie $\\pi$, nie $2\\pi$.', en: 'Solution: $\\left(-\\frac{\\pi}{6}+k\\pi,\\ \\frac{\\pi}{6}+k\\pi\\right)$, $k\\in\\mathbb{Z}$ — bands repeating every $\\pi$.' },
          ],
          trap: { pl: 'Rozwiązanie tylko $\\sin x < \\frac12$ z pominięciem $\\sin x > -\\frac12$ — kwadrat zamienia nierówność w podwójną; dodatkowo okresem odpowiedzi jest $\\pi$, bo warunek dotyczy $|\\sin x|$.', en: 'Solving only $\\sin x < \\frac12$ and forgetting $\\sin x > -\\frac12$ — the square makes it two-sided; and the answer repeats every $\\pi$ because it constrains $|\\sin x|$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wykresy-trygonometryczne',
      title: { pl: 'Wykresy i ich przekształcenia', en: 'Graphs and their transformations' },
      level: 4,
      prereq: ['rownania-trygonometryczne'],
      theory: {
        pl: 'Wykres $y = A\\sin\\bigl(B(x-C)\\bigr)+D$ powstaje z sinusoidy przez zmianę amplitudy na $|A|$, '
          + 'zmianę okresu na $\\frac{2\\pi}{|B|}$ i przesunięcie o wektor $[C, D]$. Kluczowa pułapka: w zapisie '
          + '$y = \\sin(Bx-\\varphi)$ przesunięcie w prawo wynosi $\\frac{\\varphi}{B}$, nie $\\varphi$ — najpierw '
          + 'wyłącza się $B$ przed nawias. Zbiór wartości to $\\langle D-|A|,\\ D+|A|\\rangle$. Wartość bezwzględna '
          + 'nałożona na funkcję odbija część podosiową do góry i potrafi skrócić okres: $y = |\\sin x|$ ma okres '
          + '$\\pi$. Liczbę rozwiązań równania $f(x) = g(x)$ odczytuje się jako liczbę punktów wspólnych wykresów — '
          + 'standardowa technika w zadaniach z parametrem.',
        en: 'The graph of $y = A\\sin\\bigl(B(x-C)\\bigr)+D$ comes from the sine curve by scaling the amplitude '
          + 'to $|A|$, the period to $\\frac{2\\pi}{|B|}$, and shifting by the vector $[C, D]$. The key trap: in '
          + 'the form $y = \\sin(Bx-\\varphi)$ the rightward shift is $\\frac{\\varphi}{B}$, not $\\varphi$ — '
          + 'factor $B$ out first. The range is $\\langle D-|A|,\\ D+|A|\\rangle$. An absolute value reflects the '
          + 'below-axis part upward and can halve the period: $y = |\\sin x|$ has period $\\pi$. The number of '
          + 'solutions of $f(x) = g(x)$ is the number of intersection points of the graphs — the standard '
          + 'technique in parameter problems.',
      },
      formulas: [
        { id: 'parametry-sinusoidy', tex: 'y = A\\sin\\bigl(B(x-C)\\bigr)+D:\\quad \\text{amplituda } |A|,\\quad \\text{okres } \\tfrac{2\\pi}{|B|},\\quad \\text{przesunięcie } [C,\\ D]', name: { pl: 'Parametry przekształconej sinusoidy', en: 'Parameters of the transformed sine curve' }, note: { pl: 'Z postaci $\\sin(Bx-\\varphi)$ najpierw wyłącz $B$: przesunięcie to $\\frac{\\varphi}{B}$.', en: 'From $\\sin(Bx-\\varphi)$ factor out $B$ first: the shift is $\\frac{\\varphi}{B}$.' }, drill: true },
        { id: 'zbior-wartosci-sinusoidy', tex: 'y = A\\sin(Bx)+D\\ \\Rightarrow\\ ZW = \\langle D-|A|,\\ D+|A|\\rangle', name: { pl: 'Zbiór wartości', en: 'The range' }, note: { pl: 'Środek $D$, promień $|A|$ — znak $A$ nie zmienia zbioru wartości.', en: 'Centre $D$, radius $|A|$ — the sign of $A$ does not change the range.' }, drill: true },
        { id: 'okres-tangensa-b', tex: 'y = \\operatorname{tg}(Bx)\\ \\text{ma okres}\\ \\tfrac{\\pi}{|B|}', name: { pl: 'Okres tangensa', en: 'The tangent period' }, note: { pl: 'Bazowy okres tangensa to $\\pi$, nie $2\\pi$.', en: 'The base period of tangent is $\\pi$, not $2\\pi$.' }, drill: true },
      ],
      skills: [
        { id: 'okres-amplituda', title: { pl: 'Okres, amplituda, zbiór wartości', en: 'Period, amplitude, range' }, levels: [2, 4] },
        { id: 'przesuniecia-wykresu', title: { pl: 'Przesunięcia i postać kanoniczna', en: 'Shifts and the canonical form' }, levels: [3, 4] },
        { id: 'analiza-graficzna', title: { pl: 'Analiza graficzna równań', en: 'Graphical analysis of equations' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'wykresy-trygonometryczne-l2-01',
          skill: 'okres-amplituda',
          level: 2,
          prompt: { pl: 'Podaj okres podstawowy funkcji $y = \\sin 3x$.', en: 'Give the fundamental period of $y = \\sin 3x$.' },
          answer: '\\frac{2\\pi}{3}',
          accept: ['2pi/3', '2π/3'],
          solution: [
            { pl: 'Okres $y = \\sin(Bx)$ to $\\frac{2\\pi}{|B|}$.', en: 'The period of $\\sin(Bx)$ is $\\frac{2\\pi}{|B|}$.' },
            { pl: 'Dla $B = 3$: $T = \\frac{2\\pi}{3}$.', en: 'For $B = 3$: $T = \\frac{2\\pi}{3}$.' },
          ],
          trap: { pl: 'Pomnożenie zamiast podzielenia: $6\\pi$ — szybsza oscylacja to KRÓTSZY okres.', en: 'Multiplying instead of dividing ($6\\pi$) — faster oscillation means a SHORTER period.' },
        },
        {
          id: 'wykresy-trygonometryczne-l3-01',
          skill: 'okres-amplituda',
          level: 3,
          prompt: { pl: 'Podaj amplitudę i okres podstawowy funkcji $y = 3\\cos\\frac{x}{2}$.', en: 'Give the amplitude and fundamental period of $y = 3\\cos\\frac{x}{2}$.' },
          answer: '\\text{amplituda } 3,\\quad T = 4\\pi',
          accept: ['3, 4pi', 'amplituda 3, okres 4pi'],
          solution: [
            { pl: 'Amplituda to $|A| = 3$.', en: 'The amplitude is $|A| = 3$.' },
            { pl: 'Okres: $T = \\frac{2\\pi}{1/2} = 4\\pi$ — współczynnik mniejszy od 1 ROZCIĄGA wykres.', en: '$T = \\frac{2\\pi}{1/2} = 4\\pi$ — a coefficient below 1 stretches the graph.' },
          ],
          trap: { pl: 'Okres $\\pi$ z pomylenia kierunku: dzielimy $2\\pi$ przez $B = \\frac12$, a dzielenie przez ułamek to mnożenie przez 2.', en: 'Getting $\\pi$ by dividing the wrong way — dividing $2\\pi$ by $\\frac12$ doubles it.' },
        },
        {
          id: 'wykresy-trygonometryczne-l3-02',
          skill: 'okres-amplituda',
          level: 3,
          prompt: { pl: 'Podaj okres podstawowy funkcji $y = |\\sin x|$.', en: 'Give the fundamental period of $y = |\\sin x|$.' },
          answer: '\\pi',
          accept: ['pi', 'π'],
          solution: [
            { pl: 'Moduł odbija ujemne łuki sinusoidy do góry — wykres na $\\langle\\pi, 2\\pi\\rangle$ staje się kopią wykresu na $\\langle 0,\\pi\\rangle$.', en: 'The absolute value reflects the negative arches up — the graph on $\\langle\\pi,2\\pi\\rangle$ copies the one on $\\langle0,\\pi\\rangle$.' },
            { pl: 'Okres podstawowy skraca się do $\\pi$.', en: 'The fundamental period shrinks to $\\pi$.' },
          ],
          trap: { pl: 'Zostawienie $2\\pi$ — liczba $2\\pi$ wciąż jest okresem, ale nie podstawowym; pytanie jest o najmniejszy.', en: 'Keeping $2\\pi$ — it is still a period, but not the fundamental one; the question asks for the smallest.' },
        },
        {
          id: 'wykresy-trygonometryczne-l4-01',
          skill: 'przesuniecia-wykresu',
          level: 4,
          prompt: { pl: 'Wyznacz zbiór wartości funkcji $y = 5-2\\cos x$.', en: 'Find the range of $y = 5-2\\cos x$.' },
          answer: '\\langle 3,\\ 7\\rangle',
          accept: ['[3,7]', '<3,7>'],
          solution: [
            { pl: '$\\cos x\\in\\langle -1, 1\\rangle$, więc $-2\\cos x\\in\\langle -2, 2\\rangle$.', en: '$\\cos x\\in\\langle-1,1\\rangle$, so $-2\\cos x\\in\\langle-2,2\\rangle$.' },
            { pl: 'Po dodaniu 5: $y\\in\\langle 3, 7\\rangle$. Maksimum $7$ wypada tam, gdzie $\\cos x = -1$.', en: 'Add 5: $y\\in\\langle3,7\\rangle$. The maximum 7 occurs where $\\cos x = -1$.' },
          ],
          trap: { pl: 'Minus przy $2\\cos x$ zamienia końce: największa wartość $y$ odpowiada NAJMNIEJSZEJ wartości cosinusa.', en: 'The minus swaps the ends: the largest $y$ corresponds to the SMALLEST cosine.' },
        },
        {
          id: 'wykresy-trygonometryczne-l4-02',
          skill: 'przesuniecia-wykresu',
          level: 4,
          prompt: { pl: 'O jaki wektor należy przesunąć wykres $y = 2\\sin 2x$, aby otrzymać wykres $y = 2\\sin\\left(2x-\\frac{\\pi}{3}\\right)$?', en: 'By what vector must the graph of $y = 2\\sin 2x$ be shifted to obtain $y = 2\\sin\\left(2x-\\frac{\\pi}{3}\\right)$?' },
          answer: '\\vec{u}=\\left[\\frac{\\pi}{6},\\ 0\\right]',
          accept: ['[pi/6, 0]', 'pi/6 w prawo'],
          solution: [
            { pl: 'Wyłączamy 2 przed nawias: $2\\sin\\left(2x-\\frac{\\pi}{3}\\right) = 2\\sin\\left(2\\left(x-\\frac{\\pi}{6}\\right)\\right)$.', en: 'Factor out the 2: $2\\sin\\left(2\\left(x-\\frac{\\pi}{6}\\right)\\right)$.' },
            { pl: 'To przesunięcie o $\\frac{\\pi}{6}$ w prawo: $\\vec{u} = \\left[\\frac{\\pi}{6}, 0\\right]$.', en: 'A shift $\\frac{\\pi}{6}$ to the right: $\\vec{u} = \\left[\\frac{\\pi}{6}, 0\\right]$.' },
          ],
          trap: { pl: 'Odczytanie przesunięcia $\\frac{\\pi}{3}$ wprost z wzoru — przed odczytem trzeba wyłączyć współczynnik $B = 2$ przed nawias.', en: 'Reading the shift as $\\frac{\\pi}{3}$ straight from the formula — factor out $B = 2$ before reading.' },
        },
        {
          id: 'wykresy-trygonometryczne-l4-03',
          skill: 'okres-amplituda',
          level: 4,
          prompt: { pl: 'Wyznacz okres podstawowy funkcji $f(x) = \\sin x\\cos x$.', en: 'Find the fundamental period of $f(x) = \\sin x\\cos x$.' },
          answer: '\\pi',
          accept: ['pi', 'π'],
          solution: [
            { pl: 'Z kąta podwojonego: $f(x) = \\frac{1}{2}\\sin 2x$.', en: 'By the double angle: $f(x) = \\frac{1}{2}\\sin 2x$.' },
            { pl: 'Okres $\\sin 2x$ to $\\frac{2\\pi}{2} = \\pi$; mnożenie przez $\\frac12$ okresu nie zmienia.', en: 'The period of $\\sin 2x$ is $\\pi$; the factor $\\frac12$ does not affect it.' },
          ],
          trap: { pl: 'Odpowiedź $2\\pi$ „bo sinus i cosinus mają okres $2\\pi$” — iloczyn potrafi mieć okres krótszy niż czynniki; najpierw uprość wzór.', en: 'Answering $2\\pi$ "because both factors have period $2\\pi$" — a product can beat its factors; simplify first.' },
        },
        {
          id: 'wykresy-trygonometryczne-l5-01',
          skill: 'analiza-graficzna',
          level: 5,
          prompt: { pl: 'Wyznacz wszystkie argumenty, dla których funkcja $f(x) = 2\\sin\\left(2x-\\frac{\\pi}{3}\\right)$ przyjmuje wartość największą.', en: 'Find all $x$ at which $f(x) = 2\\sin\\left(2x-\\frac{\\pi}{3}\\right)$ attains its maximum.' },
          answer: 'x=\\frac{5\\pi}{12}+k\\pi,\\quad k\\in\\mathbb{Z}',
          accept: ['x=5pi/12+kpi'],
          solution: [
            { pl: 'Wartość największa $2$ wymaga $\\sin\\left(2x-\\frac{\\pi}{3}\\right) = 1$, czyli $2x-\\frac{\\pi}{3} = \\frac{\\pi}{2}+2k\\pi$.', en: 'The maximum 2 needs $\\sin(\\cdot) = 1$: $2x-\\frac{\\pi}{3} = \\frac{\\pi}{2}+2k\\pi$.' },
            { pl: '$2x = \\frac{5\\pi}{6}+2k\\pi$, więc $x = \\frac{5\\pi}{12}+k\\pi$, $k\\in\\mathbb{Z}$.', en: 'Hence $x = \\frac{5\\pi}{12}+k\\pi$, $k\\in\\mathbb{Z}$.' },
          ],
          trap: { pl: 'Zapis $2x-\\frac{\\pi}{3} = \\frac{\\pi}{2}+k\\pi$ — warunek $\\sin t = 1$ zachodzi co $2\\pi$, nie co $\\pi$; co drugi punkt z serii $k\\pi$ to minimum.', en: 'Writing $\\frac{\\pi}{2}+k\\pi$ — $\\sin t = 1$ recurs every $2\\pi$, not $\\pi$; half of those points are minima.' },
        },
        {
          id: 'wykresy-trygonometryczne-l6-01',
          skill: 'analiza-graficzna',
          level: 6,
          prompt: { pl: 'Ile rozwiązań ma równanie $\\sin x = \\frac{x}{10}$? Odpowiedź uzasadnij, analizując wykresy.', en: 'How many solutions does $\\sin x = \\frac{x}{10}$ have? Justify by analysing the graphs.' },
          answer: '7',
          accept: ['7', 'siedem', 'seven'],
          solution: [
            { pl: 'Rozwiązania leżą w $\\langle -10, 10\\rangle$, bo $|\\sin x|\\le 1$ wymusza $\\left|\\frac{x}{10}\\right|\\le 1$. Obie funkcje są nieparzyste, więc rozwiązania są symetryczne, a $x = 0$ jest jednym z nich.', en: 'Solutions must lie in $\\langle-10,10\\rangle$ since $|\\sin x|\\le1$. Both sides are odd, so solutions come in symmetric pairs, with $x = 0$ among them.' },
            { pl: 'Dla $x>0$: na $(0,\\pi)$ jedna nitka przecięcia (sinus startuje nad prostą, kończy pod nią); na $(\\pi, 2\\pi)$ sinus ujemny — brak; na $(2\\pi, 3\\pi)$ prosta wchodzi w garb sinusa i wychodzi: dwa przecięcia; dla $x>3\\pi$ aż do 10 sinus jest ujemny — brak.', en: 'For $x>0$: one crossing on $(0,\\pi)$, none on $(\\pi,2\\pi)$ (sine negative), two on $(2\\pi,3\\pi)$ (the line enters and leaves the arch: at $x = \\frac{5\\pi}{2}$ sine is 1 versus 0.79), none between $3\\pi$ and 10.' },
            { pl: 'Razem: $3$ dodatnie, $3$ ujemne (symetria) i zero: $3+3+1 = 7$.', en: 'Total: 3 positive, 3 negative by symmetry, plus zero: 7.' },
          ],
          trap: { pl: 'Podwójne policzenie zera albo zgubienie pary przecięć na $(2\\pi, 3\\pi)$ — prosta wciąż jest tam poniżej 1 (bo $\\frac{5\\pi/2}{10}\\approx 0{,}79$), więc garb sinusa przecina ją dwa razy.', en: 'Double-counting zero or missing the pair on $(2\\pi,3\\pi)$ — the line is still below 1 there ($\\approx0.79$ at the crest), so the arch crosses it twice.' },
        },
      ],
    },
  ],
};
