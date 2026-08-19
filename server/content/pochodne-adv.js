// Pochodne — poziom analizy I. The seventeen-formula table is exactly the one
// from the user's own course sheet, in the same order, so the app and the sheet
// never disagree.
export default {
  id: 'pochodne-adv',
  track: 'calculus',
  order: 210,
  title: { pl: 'Pochodne', en: 'Derivatives' },
  blurb: {
    pl: 'Od definicji przez tablicę wzorów po funkcje złożone, uwikłane i pochodną logarytmiczną.',
    en: 'From the definition through the table of derivatives to composite, implicit and logarithmic differentiation.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pochodna-definicja',
      title: { pl: 'Definicja pochodnej', en: 'The definition of a derivative' },
      level: 3,
      prereq: ['granice-funkcji'],
      theory: {
        pl: 'Pochodna funkcji $f$ w punkcie $x_0$ to granica ilorazu różnicowego '
          + '$f\'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, o ile ta granica istnieje i jest skończona. '
          + 'Geometrycznie to współczynnik kierunkowy stycznej do wykresu w punkcie $(x_0, f(x_0))$, '
          + 'fizycznie — prędkość chwilowa. Funkcja różniczkowalna w punkcie jest w nim ciągła, '
          + 'ale nie odwrotnie: $f(x)=|x|$ jest ciągła w zerze i nie ma tam pochodnej, bo pochodne '
          + 'jednostronne wynoszą $-1$ i $1$. To rozróżnienie jest sednem: ciągłość mówi, że wykres się '
          + 'nie rwie, różniczkowalność — że nie ma ostrza.',
        en: 'The derivative of $f$ at $x_0$ is the limit of the difference quotient '
          + '$f\'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$, when that limit exists and is finite. '
          + 'Geometrically it is the slope of the tangent at $(x_0, f(x_0))$; physically, instantaneous velocity. '
          + 'A differentiable function is continuous, but not conversely: $f(x)=|x|$ is continuous at zero and has '
          + 'no derivative there, because the one-sided derivatives are $-1$ and $1$. Continuity says the graph '
          + 'does not break; differentiability says it has no corner.',
      },
      formulas: [
        {
          id: 'def-pochodnej',
          tex: 'f\'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}',
          name: { pl: 'Definicja pochodnej', en: 'Definition of the derivative' },
          note: {
            pl: 'Równoważnie $\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$. Granica musi być skończona.',
            en: 'Equivalently $\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$. The limit must be finite.',
          },
          drill: true,
        },
        {
          id: 'styczna',
          tex: 'y = f\'(x_0)(x-x_0) + f(x_0)',
          name: { pl: 'Równanie stycznej', en: 'Equation of the tangent' },
          note: {
            pl: 'Normalna ma współczynnik $-\\frac{1}{f\'(x_0)}$, o ile $f\'(x_0)\\neq 0$.',
            en: 'The normal has slope $-\\frac{1}{f\'(x_0)}$, provided $f\'(x_0)\\neq 0$.',
          },
          drill: true,
        },
        {
          id: 'rozniczkowalnosc-ciaglosc',
          tex: 'f \\text{ różniczkowalna w } x_0 \\Rightarrow f \\text{ ciągła w } x_0',
          name: { pl: 'Różniczkowalność a ciągłość', en: 'Differentiability implies continuity' },
          note: {
            pl: 'Implikacja odwrotna jest fałszywa — kontrprzykład $|x|$ w zerze.',
            en: 'The converse is false — $|x|$ at zero is the counterexample.',
          },
          drill: true,
        },
        {
          id: 'rozniczka',
          tex: 'f(x_0+\\Delta x) \\approx f(x_0) + f\'(x_0)\\,\\Delta x',
          name: { pl: 'Różniczka i przybliżenie liniowe', en: 'Differential and linear approximation' },
          note: {
            pl: 'Stąd np. $\\sqrt{4{,}02}\\approx 2 + \\tfrac{1}{4}\\cdot 0{,}02 = 2{,}005$.',
            en: 'Hence e.g. $\\sqrt{4.02}\\approx 2 + \\tfrac14\\cdot 0.02 = 2.005$.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'pochodna-z-definicji', title: { pl: 'Pochodna z definicji', en: 'Derivative from the definition' }, levels: [3, 4] },
        { id: 'styczna-normalna', title: { pl: 'Styczna i normalna', en: 'Tangent and normal' }, levels: [3, 4] },
        { id: 'rozniczkowalnosc', title: { pl: 'Badanie różniczkowalności', en: 'Testing differentiability' }, levels: [4, 5] },
        { id: 'przyblizenie-liniowe', title: { pl: 'Przybliżenie liniowe', en: 'Linear approximation' }, levels: [3, 4] },
      ],
      problems: [
        {
          id: 'pochodna-definicja-l3-01',
          skill: 'pochodna-z-definicji',
          level: 3,
          prompt: {
            pl: 'Korzystając wyłącznie z definicji pochodnej, oblicz $f\'(2)$ dla $f(x)=x^{2}-3x$.',
            en: 'Using only the definition of the derivative, compute $f\'(2)$ for $f(x)=x^{2}-3x$.',
          },
          answer: '1',
          accept: ['f\'(2)=1'],
          solution: [
            { pl: '$f(2+h)-f(2) = \\big((2+h)^2-3(2+h)\\big)-(4-6) = (4+4h+h^2-6-3h)+2 = h^2+h$.', en: '$f(2+h)-f(2) = \\big((2+h)^2-3(2+h)\\big)-(4-6) = h^2+h$.' },
            { pl: 'Iloraz różnicowy: $\\frac{h^2+h}{h}=h+1$ dla $h\\neq 0$.', en: 'Difference quotient: $\\frac{h^2+h}{h}=h+1$ for $h\\neq 0$.' },
            { pl: '$f\'(2)=\\lim_{h\\to 0}(h+1)=1$.', en: '$f\'(2)=\\lim_{h\\to 0}(h+1)=1$.' },
          ],
          trap: {
            pl: 'Skrócenie przez $h$ bez zastrzeżenia $h\\neq 0$ — w ilorazie różnicowym $h$ nigdy nie jest zerem, ale trzeba to powiedzieć.',
            en: 'Cancelling $h$ without noting $h\\neq 0$ — in a difference quotient $h$ is never zero, but you must say so.',
          },
        },
        {
          id: 'pochodna-definicja-l4-01',
          skill: 'styczna-normalna',
          level: 4,
          prompt: {
            pl: 'Wyznacz równanie stycznej do wykresu $f(x)=\\ln x$ w punkcie o odciętej $x_0=e$.',
            en: 'Find the tangent to the graph of $f(x)=\\ln x$ at the point with abscissa $x_0=e$.',
          },
          answer: 'y=\\frac{x}{e}',
          accept: ['y=\\frac{1}{e}x', 'y = x/e'],
          solution: [
            { pl: '$f\'(x)=\\frac1x$, więc $f\'(e)=\\frac1e$, a $f(e)=1$.', en: '$f\'(x)=\\frac1x$, so $f\'(e)=\\frac1e$ and $f(e)=1$.' },
            { pl: '$y=\\frac1e(x-e)+1=\\frac{x}{e}-1+1=\\frac{x}{e}$.', en: '$y=\\frac1e(x-e)+1=\\frac{x}{e}$.' },
          ],
          trap: {
            pl: 'Zapomnienie o $f(x_0)$ i podanie $y=\\frac1e(x-e)$ — styczna musi przechodzić przez punkt styczności.',
            en: 'Forgetting $f(x_0)$ and writing $y=\\frac1e(x-e)$ — the tangent must pass through the point of tangency.',
          },
        },
        {
          id: 'pochodna-definicja-l5-01',
          skill: 'rozniczkowalnosc',
          level: 5,
          prompt: {
            pl: 'Dla jakich wartości $a, b \\in \\mathbb{R}$ funkcja $f(x)=\\begin{cases}x^{2}, & x\\le 1\\\\ ax+b, & x>1\\end{cases}$ '
              + 'jest różniczkowalna w punkcie $x_0=1$? Podaj parę $(a,b)$.',
            en: 'For which $a, b \\in \\mathbb{R}$ is $f(x)=x^{2}$ for $x\\le 1$ and $ax+b$ for $x>1$ differentiable at $x_0=1$? Give the pair $(a,b)$.',
          },
          answer: '(a,b)=(2,-1)',
          accept: ['a=2, b=-1', 'a=2,\\ b=-1'],
          solution: [
            { pl: 'Różniczkowalność wymaga najpierw ciągłości: $\\lim_{x\\to 1^-}x^2 = 1$ oraz $\\lim_{x\\to 1^+}(ax+b)=a+b$, więc $a+b=1$.', en: 'Differentiability first requires continuity: $1 = a+b$.' },
            { pl: 'Pochodne jednostronne: z lewej $2x\\big|_{x=1}=2$, z prawej $a$. Zatem $a=2$.', en: 'One-sided derivatives: $2$ on the left, $a$ on the right, so $a=2$.' },
            { pl: 'Z $a+b=1$ dostajemy $b=-1$.', en: 'From $a+b=1$ we get $b=-1$.' },
          ],
          trap: {
            pl: 'Zrównanie samych pochodnych i pominięcie warunku ciągłości — funkcja z uskokiem nie jest różniczkowalna, choćby nachylenia się zgadzały.',
            en: 'Matching only the derivatives and skipping continuity — a function with a jump is not differentiable however well the slopes agree.',
          },
        },
        {
          id: 'pochodna-definicja-l3-02',
          skill: 'przyblizenie-liniowe',
          level: 3,
          prompt: {
            pl: 'Korzystając z różniczki, oszacuj $\\sqrt[3]{8{,}12}$. Podaj wynik jako ułamek lub liczbę dziesiętną.',
            en: 'Use the differential to estimate $\\sqrt[3]{8.12}$.',
          },
          answer: '2{,}01',
          accept: ['2.01', '2\\frac{1}{100}', '\\frac{201}{100}'],
          solution: [
            { pl: 'Bierzemy $f(x)=\\sqrt[3]{x}$, $x_0=8$, $\\Delta x = 0{,}12$.', en: 'Take $f(x)=\\sqrt[3]{x}$, $x_0=8$, $\\Delta x = 0.12$.' },
            { pl: '$f\'(x)=\\frac{1}{3}x^{-2/3}$, więc $f\'(8)=\\frac{1}{3\\cdot 4}=\\frac{1}{12}$.', en: '$f\'(8)=\\frac{1}{12}$.' },
            { pl: '$\\sqrt[3]{8{,}12}\\approx 2 + \\frac{1}{12}\\cdot 0{,}12 = 2{,}01$.', en: '$\\approx 2 + \\frac{1}{12}\\cdot 0.12 = 2.01$.' },
          ],
          trap: {
            pl: 'Policzenie $f\'(8)$ jako $\\frac13\\cdot 8^{-2/3}$ i pomylenie $8^{2/3}=4$ z $8^{3/2}$.',
            en: 'Mis-evaluating $8^{-2/3}$ — note $8^{2/3}=4$, not $8^{3/2}$.',
          },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'tablica-pochodnych',
      title: { pl: 'Tablica pochodnych', en: 'The table of derivatives' },
      level: 3,
      prereq: ['pochodna-definicja'],
      theory: {
        pl: 'Siedemnaście wzorów, które trzeba mieć w palcach — dalej wszystko jest już tylko regułą '
          + 'sumy, iloczynu, ilorazu i łańcucha. Warto zauważyć symetrie: $\\arcsin$ i $\\arccos$ różnią się '
          + 'tylko znakiem, tak samo $\\operatorname{arctg}$ i $\\operatorname{arcctg}$, a $\\operatorname{tg}$ '
          + 'i $\\operatorname{ctg}$ mają pochodne będące odwrotnościami kwadratów cosinusa i sinusa. '
          + 'Wzory na $\\arcsin$ i $\\arccos$ obowiązują na $(-1,1)$, a na $\\operatorname{tg}$ — poza '
          + 'punktami $\\frac{\\pi}{2}+k\\pi$.',
        en: 'Seventeen formulas to know cold — after that everything is the sum, product, quotient and chain '
          + 'rules. Note the symmetries: $\\arcsin$ and $\\arccos$ differ only in sign, as do $\\operatorname{arctg}$ '
          + 'and $\\operatorname{arcctg}$. The inverse-trig formulas hold on $(-1,1)$.',
      },
      formulas: [
        { id: 'd-const', tex: '(C)\' = 0', name: { pl: 'Pochodna stałej', en: 'Derivative of a constant' }, note: { pl: 'Stąd stała addytywna nie zmienia pochodnej — i stąd bierze się $+C$ przy całkowaniu.', en: 'Hence an additive constant never changes a derivative — which is where $+C$ comes from.' }, drill: true },
        { id: 'd-xn', tex: '(x^{n})\' = n x^{n-1}', name: { pl: 'Pochodna potęgi', en: 'Derivative of a power' }, note: { pl: 'Działa dla dowolnego rzeczywistego $n$, nie tylko naturalnego — także $n=\\frac12$ i $n=-1$.', en: 'Holds for any real $n$, not just natural — including $\\tfrac12$ and $-1$.' }, drill: true },
        { id: 'd-x', tex: '(x)\' = 1', name: { pl: 'Pochodna $x$', en: 'Derivative of $x$' }, note: { pl: 'Szczególny przypadek $n=1$.', en: 'The case $n=1$.' }, drill: true },
        { id: 'd-inv', tex: '\\left(\\frac{1}{x}\\right)\' = -\\frac{1}{x^{2}}', name: { pl: 'Pochodna odwrotności', en: 'Derivative of $1/x$' }, note: { pl: 'Przypadek $n=-1$: $-1\\cdot x^{-2}$. Minus ginie najczęściej ze wszystkich.', en: 'The case $n=-1$. This minus sign is the most commonly lost one in the table.' }, drill: true },
        { id: 'd-sqrt', tex: '\\left(\\sqrt{x}\\right)\' = \\frac{1}{2\\sqrt{x}}', name: { pl: 'Pochodna pierwiastka', en: 'Derivative of the square root' }, note: { pl: 'Dziedzina pochodnej to $(0,\\infty)$ — w zerze pochodna nie istnieje, choć funkcja jest tam określona.', en: 'The derivative exists only on $(0,\\infty)$ — not at zero, though the function is defined there.' }, drill: true },
        { id: 'd-ax', tex: '(a^{x})\' = a^{x}\\ln a', name: { pl: 'Pochodna funkcji wykładniczej', en: 'Derivative of $a^x$' }, note: { pl: 'Dla $a=e$ czynnik $\\ln e = 1$ znika — dlatego $e$ jest wyjątkowe.', en: 'For $a=e$ the factor $\\ln e=1$ vanishes — which is what makes $e$ special.' }, drill: true },
        { id: 'd-ex', tex: '(e^{x})\' = e^{x}', name: { pl: 'Pochodna $e^x$', en: 'Derivative of $e^x$' }, note: { pl: 'Jedyna (z dokładnością do stałej) funkcja równa swojej pochodnej.', en: 'Up to a constant multiple, the only function equal to its own derivative.' }, drill: true },
        { id: 'd-loga', tex: '(\\log_{a} x)\' = \\frac{1}{x\\ln a}', name: { pl: 'Pochodna logarytmu o podstawie $a$', en: 'Derivative of $\\log_a x$' }, note: { pl: 'Wynika z $\\log_a x = \\frac{\\ln x}{\\ln a}$ — stała $\\frac{1}{\\ln a}$ wychodzi przed pochodną.', en: 'From $\\log_a x = \\frac{\\ln x}{\\ln a}$; the constant factors out.' }, drill: true },
        { id: 'd-ln', tex: '(\\ln x)\' = \\frac{1}{x}', name: { pl: 'Pochodna logarytmu naturalnego', en: 'Derivative of $\\ln x$' }, note: { pl: 'Dla $\\ln|x|$ też $\\frac1x$ — i to jest powód, dla którego całka z $\\frac1x$ ma wartość bezwzględną.', en: 'Also $\\frac1x$ for $\\ln|x|$ — which is why the integral of $\\frac1x$ carries an absolute value.' }, drill: true },
        { id: 'd-sin', tex: '(\\sin x)\' = \\cos x', name: { pl: 'Pochodna sinusa', en: 'Derivative of sine' }, note: { pl: 'Tylko dla miary łukowej. W stopniach pojawiłby się czynnik $\\frac{\\pi}{180}$.', en: 'Only in radians; in degrees a factor $\\frac{\\pi}{180}$ appears.' }, drill: true },
        { id: 'd-cos', tex: '(\\cos x)\' = -\\sin x', name: { pl: 'Pochodna cosinusa', en: 'Derivative of cosine' }, note: { pl: 'Minus jest tu, nie przy sinusie. Cztery kolejne pochodne wracają do punktu wyjścia.', en: 'The minus is here, not on sine. Four derivatives return to the start.' }, drill: true },
        { id: 'd-tg', tex: '(\\operatorname{tg} x)\' = \\frac{1}{\\cos^{2} x}', name: { pl: 'Pochodna tangensa', en: 'Derivative of tangent' }, note: { pl: 'Równoważnie $1+\\operatorname{tg}^2 x$. Dziedzina: $x \\neq \\frac{\\pi}{2}+k\\pi$.', en: 'Equivalently $1+\\operatorname{tg}^2 x$. Domain: $x \\neq \\frac{\\pi}{2}+k\\pi$.' }, drill: true },
        { id: 'd-ctg', tex: '(\\operatorname{ctg} x)\' = -\\frac{1}{\\sin^{2} x}', name: { pl: 'Pochodna cotangensa', en: 'Derivative of cotangent' }, note: { pl: 'Znak przeciwny niż przy tangensie. Dziedzina: $x \\neq k\\pi$.', en: 'Opposite sign to tangent. Domain: $x \\neq k\\pi$.' }, drill: true },
        { id: 'd-arcsin', tex: '(\\arcsin x)\' = \\frac{1}{\\sqrt{1-x^{2}}}', name: { pl: 'Pochodna arcus sinus', en: 'Derivative of arcsine' }, note: { pl: 'Tylko na $(-1,1)$ — w $\\pm 1$ styczna jest pionowa.', en: 'Only on $(-1,1)$ — at $\\pm 1$ the tangent is vertical.' }, drill: true },
        { id: 'd-arccos', tex: '(\\arccos x)\' = -\\frac{1}{\\sqrt{1-x^{2}}}', name: { pl: 'Pochodna arcus cosinus', en: 'Derivative of arccosine' }, note: { pl: 'Suma $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ jest stała — dlatego pochodne się znoszą.', en: 'Since $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ is constant, the derivatives cancel.' }, drill: true },
        { id: 'd-arctg', tex: '(\\operatorname{arctg} x)\' = \\frac{1}{x^{2}+1}', name: { pl: 'Pochodna arcus tangens', en: 'Derivative of arctangent' }, note: { pl: 'Dziedzina to całe $\\mathbb{R}$ — mianownik nigdy nie zeruje się.', en: 'Defined on all of $\\mathbb{R}$; the denominator never vanishes.' }, drill: true },
        { id: 'd-arcctg', tex: '(\\operatorname{arcctg} x)\' = -\\frac{1}{x^{2}+1}', name: { pl: 'Pochodna arcus cotangens', en: 'Derivative of arccotangent' }, note: { pl: 'Znów tylko znak różni ją od arcus tangensa.', en: 'Again only the sign differs from arctangent.' }, drill: true },
        { id: 'd-suma', tex: '(f \\pm g)\' = f\' \\pm g\'', name: { pl: 'Pochodna sumy', en: 'Derivative of a sum' }, note: { pl: 'Wraz ze wzorem $(cf)\'=cf\'$ daje liniowość różniczkowania.', en: 'With $(cf)\'=cf\'$ this gives linearity.' }, drill: true },
        { id: 'd-iloczyn', tex: '(f\\cdot g)\' = f\'g + fg\'', name: { pl: 'Pochodna iloczynu', en: 'Product rule' }, note: { pl: 'Nie $f\'g\'$ — to najczęstszy błąd całego działu.', en: 'Not $f\'g\'$ — the single most common error in the whole subject.' }, drill: true },
        { id: 'd-iloraz', tex: '\\left(\\frac{f}{g}\\right)\' = \\frac{f\'g - fg\'}{g^{2}}', name: { pl: 'Pochodna ilorazu', en: 'Quotient rule' }, note: { pl: 'Kolejność w liczniku ma znaczenie — $fg\'-f\'g$ daje wynik z odwrotnym znakiem.', en: 'The order in the numerator matters; swapping it flips the sign.' }, drill: true },
      ],
      skills: [
        { id: 'proste-pochodne', title: { pl: 'Proste pochodne', en: 'Simple derivatives' }, levels: [2, 3] },
        { id: 'regula-iloczynu', title: { pl: 'Reguła iloczynu', en: 'The product rule' }, levels: [3, 4] },
        { id: 'regula-ilorazu', title: { pl: 'Reguła ilorazu', en: 'The quotient rule' }, levels: [3, 4] },
        { id: 'pochodne-trygonometryczne', title: { pl: 'Pochodne trygonometryczne', en: 'Trigonometric derivatives' }, levels: [3, 4] },
      ],
      problems: [
        {
          id: 'tablica-pochodnych-l2-01',
          skill: 'proste-pochodne',
          level: 2,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=3x^{4}-\\frac{2}{x}+5\\sqrt{x}$.', en: 'Differentiate $f(x)=3x^{4}-\\frac{2}{x}+5\\sqrt{x}$.' },
          answer: '12x^{3}+\\frac{2}{x^{2}}+\\frac{5}{2\\sqrt{x}}',
          accept: ['12x^3 + 2x^{-2} + \\frac{5}{2}x^{-1/2}'],
          solution: [
            { pl: '$(3x^4)\'=12x^3$.', en: '$(3x^4)\'=12x^3$.' },
            { pl: '$\\left(-\\frac{2}{x}\\right)\' = -2\\cdot\\left(-\\frac{1}{x^2}\\right) = \\frac{2}{x^2}$.', en: '$\\left(-\\frac{2}{x}\\right)\' = \\frac{2}{x^2}$.' },
            { pl: '$(5\\sqrt{x})\' = \\frac{5}{2\\sqrt{x}}$.', en: '$(5\\sqrt{x})\' = \\frac{5}{2\\sqrt{x}}$.' },
          ],
          trap: { pl: 'Podwójny minus przy $-\\frac{2}{x}$ — pochodna $\\frac1x$ jest ujemna, więc wynik jest dodatni.', en: 'The double minus on $-\\frac{2}{x}$: the derivative of $\\frac1x$ is negative, so the result is positive.' },
        },
        {
          id: 'tablica-pochodnych-l3-01',
          skill: 'regula-iloczynu',
          level: 3,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=x^{2}e^{x}$.', en: 'Differentiate $f(x)=x^{2}e^{x}$.' },
          answer: 'e^{x}(x^{2}+2x)',
          accept: ['2xe^{x}+x^{2}e^{x}', 'xe^{x}(x+2)'],
          solution: [
            { pl: 'Reguła iloczynu z $f=x^2$, $g=e^x$: $f\'g+fg\' = 2x\\,e^x + x^2 e^x$.', en: 'Product rule: $2xe^x + x^2e^x$.' },
            { pl: 'Wyłączamy $e^x$: $e^x(x^2+2x)$.', en: 'Factor out $e^x$: $e^x(x^2+2x)$.' },
          ],
          trap: { pl: 'Napisanie $2x\\cdot e^x$ jako całej odpowiedzi — czyli policzenie $f\'g\'$ zamiast $f\'g+fg\'$.', en: 'Writing $2xe^x$ alone — i.e. computing $f\'g\'$ instead of $f\'g+fg\'$.' },
        },
        {
          id: 'tablica-pochodnych-l4-01',
          skill: 'regula-ilorazu',
          level: 4,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=\\frac{\\ln x}{x}$ i wskaż, dla jakiego $x$ jest ona równa zeru.', en: 'Differentiate $f(x)=\\frac{\\ln x}{x}$ and find where the derivative is zero.' },
          answer: 'f\'(x)=\\frac{1-\\ln x}{x^{2}},\\ x=e',
          accept: ['\\frac{1-\\ln x}{x^2}, x=e'],
          solution: [
            { pl: 'Reguła ilorazu: $\\frac{\\frac1x\\cdot x - \\ln x\\cdot 1}{x^2} = \\frac{1-\\ln x}{x^2}$.', en: 'Quotient rule: $\\frac{1-\\ln x}{x^2}$.' },
            { pl: 'Zeruje się, gdy $1-\\ln x = 0$, czyli $\\ln x = 1$, czyli $x=e$ (mianownik nigdy nie jest zerem w dziedzinie).', en: 'Zero when $\\ln x = 1$, i.e. $x=e$.' },
          ],
          trap: { pl: 'Odwrócenie kolejności w liczniku i otrzymanie $\\frac{\\ln x - 1}{x^2}$ — znak pochodnej decyduje potem o monotoniczności.', en: 'Reversing the numerator to $\\frac{\\ln x-1}{x^2}$ — the sign then reverses the monotonicity conclusion.' },
        },
        {
          id: 'tablica-pochodnych-l4-02',
          skill: 'pochodne-trygonometryczne',
          level: 4,
          prompt: { pl: 'Wykaż, że $(\\operatorname{tg} x)\' = \\frac{1}{\\cos^{2}x}$, wychodząc z definicji $\\operatorname{tg} x = \\frac{\\sin x}{\\cos x}$ i reguły ilorazu. Podaj postać pochodnej po uproszczeniu.', en: 'Derive $(\\operatorname{tg} x)\' = \\frac{1}{\\cos^{2}x}$ from the quotient rule.' },
          answer: '\\frac{1}{\\cos^{2}x}',
          accept: ['1+\\operatorname{tg}^2 x', '\\sec^2 x'],
          solution: [
            { pl: '$\\left(\\frac{\\sin x}{\\cos x}\\right)\' = \\frac{\\cos x\\cdot\\cos x - \\sin x\\cdot(-\\sin x)}{\\cos^2 x}$.', en: 'Quotient rule gives $\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$.' },
            { pl: 'Licznik to $\\cos^2 x + \\sin^2 x = 1$ z jedynki trygonometrycznej.', en: 'The numerator is $1$ by the Pythagorean identity.' },
            { pl: 'Zatem pochodna wynosi $\\frac{1}{\\cos^2 x}$.', en: 'Hence $\\frac{1}{\\cos^2 x}$.' },
          ],
          trap: { pl: 'Zgubienie minusa przy $(\\cos x)\'$ — wtedy licznik daje $\\cos^2 x - \\sin^2 x$ zamiast $1$.', en: 'Losing the minus in $(\\cos x)\'$ — the numerator then becomes $\\cos^2 x-\\sin^2 x$ instead of $1$.' },
        },
        {
          id: 'tablica-pochodnych-l5-01',
          skill: 'proste-pochodne',
          level: 5,
          prompt: { pl: 'Oblicz $f\'(x)$ dla $f(x)=\\operatorname{arctg} x + \\operatorname{arcctg} x$ i wyjaśnij wynik.', en: 'Compute $f\'(x)$ for $f(x)=\\operatorname{arctg} x + \\operatorname{arcctg} x$ and explain the result.' },
          answer: '0',
          accept: ['f\'(x)=0'],
          solution: [
            { pl: '$\\frac{1}{x^2+1} + \\left(-\\frac{1}{x^2+1}\\right) = 0$.', en: '$\\frac{1}{x^2+1} - \\frac{1}{x^2+1} = 0$.' },
            { pl: 'Pochodna zerowa na przedziale oznacza funkcję stałą — istotnie $\\operatorname{arctg} x + \\operatorname{arcctg} x = \\frac{\\pi}{2}$ dla każdego $x$.', en: 'A zero derivative on an interval means a constant function — indeed the sum is $\\frac{\\pi}{2}$ everywhere.' },
          ],
          trap: { pl: 'Uznanie, że skoro pochodna to $0$, funkcja jest tożsamościowo zerem — zero jest pochodną, nie wartością.', en: 'Concluding the function is zero because its derivative is — zero is the derivative, not the value.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pochodne-zlozone',
      title: { pl: 'Pochodne złożone', en: 'The chain rule' },
      level: 4,
      prereq: ['tablica-pochodnych'],
      theory: {
        pl: 'Reguła łańcucha: $\\big(f(g(x))\\big)\' = f\'\\big(g(x)\\big)\\cdot g\'(x)$ — pochodna zewnętrzna '
          + 'liczona w punkcie funkcji wewnętrznej, razy pochodna wewnętrzna. Przy wielokrotnym zagnieżdżeniu '
          + 'schodzi się warstwa po warstwie i mnoży wszystko po drodze. Czynnik $g\'(x)$ jest tym, co ginie '
          + 'najczęściej, i ginie cicho: wynik wygląda poprawnie.',
        en: 'The chain rule: $\\big(f(g(x))\\big)\' = f\'\\big(g(x)\\big)\\cdot g\'(x)$ — the outer derivative '
          + 'evaluated at the inner function, times the inner derivative. With nesting you peel layer by layer '
          + 'and multiply everything. The $g\'(x)$ factor is the one that goes missing, and it goes missing '
          + 'quietly: the answer still looks right.',
      },
      formulas: [
        { id: 'lancuch', tex: '\\big(f(g(x))\\big)\' = f\'\\big(g(x)\\big)\\cdot g\'(x)', name: { pl: 'Reguła łańcucha', en: 'Chain rule' }, note: { pl: 'Przy $n$ zagnieżdżeniach mnoży się $n$ czynników.', en: 'With $n$ nestings you multiply $n$ factors.' }, drill: true },
        { id: 'lancuch-exp', tex: '\\left(e^{g(x)}\\right)\' = e^{g(x)}\\,g\'(x)', name: { pl: 'Pochodna $e$ do funkcji', en: 'Derivative of $e^{g(x)}$' }, note: { pl: 'Najczęstszy przypadek szczególny.', en: 'The most common special case.' }, drill: true },
        { id: 'lancuch-ln', tex: '\\big(\\ln g(x)\\big)\' = \\frac{g\'(x)}{g(x)}', name: { pl: 'Pochodna logarytmu funkcji', en: 'Derivative of $\\ln g(x)$' }, note: { pl: 'Ten wzór czytany od prawej do lewej jest kluczem do całek typu $\\int\\frac{g\'}{g}$.', en: 'Read right to left, this is the key to integrals of the form $\\int\\frac{g\'}{g}$.' }, drill: true },
        { id: 'pochodna-logarytmiczna', tex: '\\big(f(x)^{g(x)}\\big)\' = f(x)^{g(x)}\\left(g\'(x)\\ln f(x) + \\frac{g(x)f\'(x)}{f(x)}\\right)', name: { pl: 'Pochodna logarytmiczna', en: 'Logarithmic differentiation' }, note: { pl: 'Ani wzór na potęgę, ani na funkcję wykładniczą tu nie działa — trzeba zlogarytmować.', en: 'Neither the power rule nor the exponential rule applies — take logarithms first.' }, drill: true },
        { id: 'pochodna-odwrotnej', tex: '\\big(f^{-1}\\big)\'(y) = \\frac{1}{f\'\\big(f^{-1}(y)\\big)}', name: { pl: 'Pochodna funkcji odwrotnej', en: 'Derivative of an inverse function' }, note: { pl: 'Stąd biorą się wzory na pochodne $\\arcsin$ i $\\operatorname{arctg}$.', en: 'This is where the inverse-trig derivatives come from.' }, drill: true },
      ],
      skills: [
        { id: 'lancuch-podstawowy', title: { pl: 'Reguła łańcucha', en: 'Chain rule' }, levels: [3, 4] },
        { id: 'lancuch-wielokrotny', title: { pl: 'Wielokrotne zagnieżdżenie', en: 'Nested chain rule' }, levels: [4, 5] },
        { id: 'log-rozniczkowanie', title: { pl: 'Pochodna logarytmiczna', en: 'Logarithmic differentiation' }, levels: [5, 6] },
        { id: 'pochodne-wyzszych-rzedow', title: { pl: 'Pochodne wyższych rzędów', en: 'Higher derivatives' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'pochodne-zlozone-l3-01',
          skill: 'lancuch-podstawowy',
          level: 3,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=\\sin(3x^{2}+1)$.', en: 'Differentiate $f(x)=\\sin(3x^{2}+1)$.' },
          answer: '6x\\cos(3x^{2}+1)',
          accept: ['\\cos(3x^2+1)\\cdot 6x'],
          solution: [
            { pl: 'Zewnętrzna: $(\\sin u)\' = \\cos u$, więc $\\cos(3x^2+1)$.', en: 'Outer: $\\cos(3x^2+1)$.' },
            { pl: 'Wewnętrzna: $(3x^2+1)\' = 6x$.', en: 'Inner: $6x$.' },
            { pl: 'Iloczyn: $6x\\cos(3x^2+1)$.', en: 'Product: $6x\\cos(3x^2+1)$.' },
          ],
          trap: { pl: 'Napisanie samego $\\cos(3x^2+1)$ — zgubiona pochodna wewnętrzna $6x$.', en: 'Writing $\\cos(3x^2+1)$ alone — the inner derivative $6x$ is missing.' },
        },
        {
          id: 'pochodne-zlozone-l4-01',
          skill: 'lancuch-podstawowy',
          level: 4,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=\\sqrt{x^{2}+4}$.', en: 'Differentiate $f(x)=\\sqrt{x^{2}+4}$.' },
          answer: '\\frac{x}{\\sqrt{x^{2}+4}}',
          accept: ['\\frac{2x}{2\\sqrt{x^2+4}}'],
          solution: [
            { pl: 'Zewnętrzna: $\\frac{1}{2\\sqrt{x^2+4}}$.', en: 'Outer: $\\frac{1}{2\\sqrt{x^2+4}}$.' },
            { pl: 'Wewnętrzna: $2x$.', en: 'Inner: $2x$.' },
            { pl: 'Po skróceniu dwójek: $\\frac{x}{\\sqrt{x^2+4}}$.', en: 'The twos cancel: $\\frac{x}{\\sqrt{x^2+4}}$.' },
          ],
          trap: { pl: 'Zapisanie $\\frac{1}{2\\sqrt{x^2+4}}$ jako całej odpowiedzi.', en: 'Stopping at $\\frac{1}{2\\sqrt{x^2+4}}$.' },
        },
        {
          id: 'pochodne-zlozone-l5-01',
          skill: 'lancuch-wielokrotny',
          level: 5,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=e^{\\sin^{2}x}$.', en: 'Differentiate $f(x)=e^{\\sin^{2}x}$.' },
          answer: 'e^{\\sin^{2}x}\\cdot 2\\sin x\\cos x',
          accept: ['e^{\\sin^2 x}\\sin(2x)', '\\sin(2x)e^{\\sin^2 x}'],
          solution: [
            { pl: 'Trzy warstwy: $e^{u}$, $u=v^2$, $v=\\sin x$.', en: 'Three layers: $e^u$, $u=v^2$, $v=\\sin x$.' },
            { pl: '$e^{\\sin^2 x}\\cdot 2\\sin x\\cdot\\cos x$.', en: '$e^{\\sin^2 x}\\cdot 2\\sin x\\cdot\\cos x$.' },
            { pl: 'Można zapisać zwięźlej jako $e^{\\sin^2 x}\\sin 2x$.', en: 'More compactly $e^{\\sin^2 x}\\sin 2x$.' },
          ],
          trap: { pl: 'Zejście tylko o jedną warstwę i napisanie $e^{\\sin^2 x}\\cdot 2\\sin x$ — brakuje $\\cos x$.', en: 'Peeling only one layer: $e^{\\sin^2 x}\\cdot 2\\sin x$ is missing $\\cos x$.' },
        },
        {
          id: 'pochodne-zlozone-l6-01',
          skill: 'log-rozniczkowanie',
          level: 6,
          prompt: { pl: 'Oblicz pochodną funkcji $f(x)=x^{x}$ dla $x>0$.', en: 'Differentiate $f(x)=x^{x}$ for $x>0$.' },
          answer: 'x^{x}(\\ln x + 1)',
          accept: ['x^x\\ln x + x^x'],
          solution: [
            { pl: 'Ani $(x^n)\'$, ani $(a^x)\'$ tu nie działa — podstawa i wykładnik zależą od $x$.', en: 'Neither the power nor the exponential rule applies.' },
            { pl: 'Logarytmujemy: $\\ln f = x\\ln x$. Różniczkujemy obie strony: $\\frac{f\'}{f} = \\ln x + 1$.', en: 'Take logs: $\\ln f = x\\ln x$, so $\\frac{f\'}{f} = \\ln x + 1$.' },
            { pl: 'Stąd $f\' = x^x(\\ln x + 1)$.', en: 'Hence $f\' = x^x(\\ln x+1)$.' },
          ],
          trap: { pl: 'Zastosowanie wzoru na potęgę i napisanie $x\\cdot x^{x-1}=x^x$ — wykładnik nie jest stały.', en: 'Applying the power rule to get $x\\cdot x^{x-1}=x^x$ — the exponent is not constant.' },
        },
        {
          id: 'pochodne-zlozone-l4-02',
          skill: 'pochodne-wyzszych-rzedow',
          level: 4,
          prompt: { pl: 'Oblicz $f\'\'(x)$ dla $f(x)=e^{-2x}$.', en: 'Compute $f\'\'(x)$ for $f(x)=e^{-2x}$.' },
          answer: '4e^{-2x}',
          accept: ['4e^{-2x}'],
          solution: [
            { pl: '$f\'(x) = -2e^{-2x}$.', en: '$f\'(x) = -2e^{-2x}$.' },
            { pl: '$f\'\'(x) = -2\\cdot(-2)e^{-2x} = 4e^{-2x}$.', en: '$f\'\'(x) = 4e^{-2x}$.' },
          ],
          trap: { pl: 'Zatrzymanie się na $-2e^{-2x}$ przy drugiej pochodnej — czynnik $-2$ pojawia się za każdym różniczkowaniem.', en: 'Getting $-2e^{-2x}$ again — the factor $-2$ appears at every differentiation.' },
        },
      ],
    },
  ],
};
