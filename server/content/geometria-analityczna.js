// Geometria analityczna — matura rozszerzona i dalej.
export default {
  id: 'geometria-analityczna',
  track: 'matura',
  order: 70,
  title: { pl: 'Geometria analityczna', en: 'Analytic geometry' },
  blurb: {
    pl: 'Punkty, proste, wektory i okręgi w układzie współrzędnych — od odległości dwóch punktów po styczne, pola wielokątów i symetrie.',
    en: 'Points, lines, vectors and circles in the coordinate plane — from the distance between two points to tangents, polygon areas and symmetries.',
  },
  topics: [
    /* ═══════════════════════════════════════════════════════════════════ */
    {
      id: 'ga-punkt-odcinek',
      title: { pl: 'Punkty i odcinki w układzie współrzędnych', en: 'Points and segments in the coordinate plane' },
      level: 1,
      prereq: [],
      theory: {
        pl: 'Cała geometria analityczna stoi na jednym pomyśle: punkt to para liczb, a odległość liczymy twierdzeniem Pitagorasa dla trójkąta o przyprostokątnych $|x_B-x_A|$ i $|y_B-y_A|$. Stąd wzór $|AB|=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ — kolejność odejmowania nie ma znaczenia, bo różnice są podnoszone do kwadratu. Środek odcinka to średnia arytmetyczna współrzędnych końców, a środek ciężkości trójkąta — średnia współrzędnych trzech wierzchołków. Te same wzory czytane wstecz pozwalają odzyskać brakujący koniec odcinka ($B=2S-A$) albo brakujący wierzchołek trójkąta z danego środka ciężkości. Punkt dzielący odcinek w zadanym stosunku dostajemy, przesuwając się od $A$ o odpowiedni ułamek wektora $\\vec{AB}$. Trzy punkty leżą na jednej prostej dokładnie wtedy, gdy wektory $\\vec{AB}$ i $\\vec{AC}$ są równoległe, co sprawdzamy iloczynem skośnym współrzędnych. Rodzaj trójkąta (równoramienny, prostokątny) rozstrzygamy porównując kwadraty boków — nigdy rysunkiem.',
        en: 'The whole of analytic geometry rests on one idea: a point is a pair of numbers, and distance comes from the Pythagorean theorem applied to a triangle with legs $|x_B-x_A|$ and $|y_B-y_A|$. Hence $|AB|=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ — the order of subtraction is irrelevant because the differences are squared. The midpoint of a segment is the arithmetic mean of the endpoints, and the centroid of a triangle is the mean of the three vertices. Read backwards, the same formulas recover a missing endpoint ($B=2S-A$) or a missing vertex from a given centroid. The point dividing a segment in a given ratio is obtained by moving from $A$ along the appropriate fraction of the vector $\\vec{AB}$. Three points are collinear exactly when $\\vec{AB}$ and $\\vec{AC}$ are parallel, which we test with the cross product of the coordinates. The type of a triangle (isosceles, right-angled) is settled by comparing squares of the sides — never by looking at a picture.',
      },
      formulas: [
        {
          id: 'ga-f-odleglosc-punktow',
          tex: '|AB|=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}',
          name: { pl: 'Odległość dwóch punktów', en: 'Distance between two points' },
          note: {
            pl: 'Różnice są podnoszone do kwadratu, więc kolejność odejmowania jest dowolna. Klasyczna wpadka: liczenie $(x_B-x_A)^2$ jako $x_B^2-x_A^2$.',
            en: 'The differences are squared, so the order of subtraction is free. The classic slip: computing $(x_B-x_A)^2$ as $x_B^2-x_A^2$.',
          },
          drill: true,
        },
        {
          id: 'ga-f-srodek-odcinka',
          tex: 'S=\\left(\\frac{x_A+x_B}{2},\\ \\frac{y_A+y_B}{2}\\right)',
          name: { pl: 'Środek odcinka', en: 'Midpoint of a segment' },
          note: {
            pl: 'Odwrotnie: znając środek $S$ i koniec $A$, drugi koniec to $B=(2x_S-x_A,\\ 2y_S-y_A)$.',
            en: 'Conversely: given the midpoint $S$ and endpoint $A$, the other endpoint is $B=(2x_S-x_A,\\ 2y_S-y_A)$.',
          },
          drill: true,
        },
        {
          id: 'ga-f-podzial-odcinka',
          tex: 'P=\\left(\\frac{n\\,x_A+m\\,x_B}{m+n},\\ \\frac{n\\,y_A+m\\,y_B}{m+n}\\right),\\quad |AP|:|PB|=m:n',
          name: { pl: 'Punkt dzielący odcinek w stosunku $m:n$', en: 'Point dividing a segment in ratio $m:n$' },
          note: {
            pl: 'Uwaga na skrzyżowanie wag: przy $|AP|:|PB|=m:n$ przy $x_A$ stoi $n$, a nie $m$. Równoważnie $P=A+\\frac{m}{m+n}\\vec{AB}$.',
            en: 'Watch the crossed weights: with $|AP|:|PB|=m:n$ the coefficient of $x_A$ is $n$, not $m$. Equivalently $P=A+\\frac{m}{m+n}\\vec{AB}$.',
          },
          drill: true,
        },
        {
          id: 'ga-f-srodek-ciezkosci',
          tex: 'S=\\left(\\frac{x_A+x_B+x_C}{3},\\ \\frac{y_A+y_B+y_C}{3}\\right)',
          name: { pl: 'Środek ciężkości trójkąta', en: 'Centroid of a triangle' },
          note: {
            pl: 'Punkt przecięcia środkowych; dzieli każdą środkową w stosunku $2:1$ od wierzchołka. Odwrotnie $C=3S-A-B$.',
            en: 'The intersection of the medians; it divides each median in ratio $2:1$ from the vertex. Conversely $C=3S-A-B$.',
          },
          drill: true,
        },
        {
          id: 'ga-f-wspolliniowosc',
          tex: '(x_B-x_A)(y_C-y_A)-(y_B-y_A)(x_C-x_A)=0',
          name: { pl: 'Warunek współliniowości trzech punktów', en: 'Collinearity condition for three points' },
          note: {
            pl: 'Lewa strona to podwojone pole trójkąta $ABC$ ze znakiem. Zerowanie się oznacza brak trójkąta, czyli punkty na jednej prostej.',
            en: 'The left-hand side is twice the signed area of triangle $ABC$. It vanishing means there is no triangle, i.e. the points lie on one line.',
          },
          drill: true,
        },
        {
          id: 'ga-f-typ-trojkata',
          tex: '|AB|^2+|BC|^2=|AC|^2\\iff \\sphericalangle ABC=90^{\\circ}',
          name: { pl: 'Rozpoznanie kąta prostego (twierdzenie odwrotne do Pitagorasa)', en: 'Detecting a right angle (converse Pythagoras)' },
          note: {
            pl: 'Porównujemy kwadraty długości — bez pierwiastków rachunek jest wymierny. Kąt prosty jest przy wierzchołku, którego bok nie występuje po prawej stronie.',
            en: 'Compare squared lengths — with no roots the arithmetic stays rational. The right angle sits at the vertex whose opposite side appears on the right-hand side.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'ga-s-odleglosc-punktow', title: { pl: 'Odległość dwóch punktów', en: 'Distance between two points' }, levels: [1, 2] },
        { id: 'ga-s-srodek-odcinka', title: { pl: 'Środek odcinka i brakujący koniec', en: 'Midpoint and missing endpoint' }, levels: [1, 2] },
        { id: 'ga-s-podzial-odcinka', title: { pl: 'Podział odcinka w danym stosunku', en: 'Dividing a segment in a given ratio' }, levels: [2, 3] },
        { id: 'ga-s-srodek-ciezkosci', title: { pl: 'Środek ciężkości trójkąta', en: 'Centroid of a triangle' }, levels: [2, 3] },
        { id: 'ga-s-typ-trojkata', title: { pl: 'Rozpoznawanie rodzaju trójkąta ze współrzędnych', en: 'Classifying a triangle from coordinates' }, levels: [2, 3] },
        { id: 'ga-s-punkt-rownoodlegly', title: { pl: 'Punkt o zadanej odległości lub równoodległy', en: 'Point at a given distance or equidistant' }, levels: [2, 3] },
        { id: 'ga-s-wspolliniowosc-punktow', title: { pl: 'Współliniowość trzech punktów', en: 'Collinearity of three points' }, levels: [2, 3] },
      ],
      problems: [
        {
          id: 'ga-punkt-odcinek-l1-01',
          skill: 'ga-s-odleglosc-punktow',
          level: 1,
          prompt: { pl: 'Dane są punkty $A=(-3,4)$ i $B=(5,-2)$. Oblicz długość odcinka $AB$.', en: 'Given the points $A=(-3,4)$ and $B=(5,-2)$, compute the length of the segment $AB$.' },
          answer: '10',
          accept: ['|AB|=10'],
          solution: [
            { pl: 'Różnice współrzędnych: $x_B-x_A=5-(-3)=8$ oraz $y_B-y_A=-2-4=-6$.', en: 'Coordinate differences: $x_B-x_A=5-(-3)=8$ and $y_B-y_A=-2-4=-6$.' },
            { pl: '$|AB|=\\sqrt{8^2+(-6)^2}=\\sqrt{64+36}=\\sqrt{100}=10$.', en: '$|AB|=\\sqrt{8^2+(-6)^2}=\\sqrt{64+36}=\\sqrt{100}=10$.' },
          ],
          trap: {
            pl: 'Rozbicie $(x_B-x_A)^2$ na $x_B^2-x_A^2$: dałoby $25-9=16$ zamiast $64$. Kwadrat różnicy nie jest różnicą kwadratów.',
            en: 'Expanding $(x_B-x_A)^2$ as $x_B^2-x_A^2$: that would give $25-9=16$ instead of $64$. The square of a difference is not the difference of squares.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l1-02',
          skill: 'ga-s-srodek-odcinka',
          level: 1,
          prompt: { pl: 'Punkt $S=(2,-1)$ jest środkiem odcinka $AB$, przy czym $A=(-4,3)$. Wyznacz współrzędne punktu $B$.', en: 'The point $S=(2,-1)$ is the midpoint of the segment $AB$, where $A=(-4,3)$. Find the coordinates of $B$.' },
          answer: '(8,-5)',
          accept: ['B=(8,-5)'],
          solution: [
            { pl: 'Ze wzoru na środek: $x_S=\\frac{x_A+x_B}{2}$, więc $x_B=2x_S-x_A=4-(-4)=8$.', en: 'From the midpoint formula $x_S=\\frac{x_A+x_B}{2}$, so $x_B=2x_S-x_A=4-(-4)=8$.' },
            { pl: 'Analogicznie $y_B=2y_S-y_A=-2-3=-5$, zatem $B=(8,-5)$.', en: 'Similarly $y_B=2y_S-y_A=-2-3=-5$, hence $B=(8,-5)$.' },
          ],
          trap: {
            pl: 'Uśrednianie zamiast podwajania: policzenie $\\frac{A+S}{2}=(-1,1)$ i podanie tego jako $B$. Wzór trzeba odwrócić, a nie zastosować powtórnie.',
            en: 'Averaging instead of doubling: computing $\\frac{A+S}{2}=(-1,1)$ and reporting it as $B$. The formula must be inverted, not applied again.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l2-03',
          skill: 'ga-s-srodek-ciezkosci',
          level: 2,
          prompt: { pl: 'Wyznacz środek ciężkości trójkąta o wierzchołkach $A=(-2,1)$, $B=(4,-3)$, $C=(7,8)$.', en: 'Find the centroid of the triangle with vertices $A=(-2,1)$, $B=(4,-3)$, $C=(7,8)$.' },
          answer: '(3,2)',
          accept: ['S=(3,2)'],
          solution: [
            { pl: 'Sumy współrzędnych: $-2+4+7=9$ oraz $1-3+8=6$.', en: 'Sums of coordinates: $-2+4+7=9$ and $1-3+8=6$.' },
            { pl: '$S=\\left(\\frac{9}{3},\\frac{6}{3}\\right)=(3,2)$.', en: '$S=\\left(\\frac{9}{3},\\frac{6}{3}\\right)=(3,2)$.' },
          ],
          trap: {
            pl: 'Dzielenie przez $2$ zamiast przez $3$ — czyli użycie wzoru na środek odcinka do trzech punktów.',
            en: 'Dividing by $2$ instead of $3$ — i.e. using the midpoint formula for three points.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l2-04',
          skill: 'ga-s-podzial-odcinka',
          level: 2,
          prompt: { pl: 'Punkt $P$ leży na odcinku $AB$ i dzieli go w stosunku $|AP|:|PB|=2:3$, gdzie $A=(-1,5)$, $B=(9,-5)$. Wyznacz $P$.', en: 'The point $P$ lies on the segment $AB$ and divides it in the ratio $|AP|:|PB|=2:3$, where $A=(-1,5)$, $B=(9,-5)$. Find $P$.' },
          answer: '(3,1)',
          accept: ['P=(3,1)'],
          solution: [
            { pl: 'Wektor $\\vec{AB}=[10,-10]$, a punkt $P$ leży w $\\frac{2}{2+3}=\\frac{2}{5}$ drogi od $A$ do $B$.', en: 'The vector $\\vec{AB}=[10,-10]$, and $P$ lies $\\frac{2}{2+3}=\\frac{2}{5}$ of the way from $A$ to $B$.' },
            { pl: '$P=A+\\frac{2}{5}\\vec{AB}=(-1+4,\\ 5-4)=(3,1)$.', en: '$P=A+\\frac{2}{5}\\vec{AB}=(-1+4,\\ 5-4)=(3,1)$.' },
          ],
          trap: {
            pl: 'Użycie ułamka $\\frac{2}{3}$ zamiast $\\frac{2}{5}$ albo odmierzanie $\\frac{2}{5}$ od $B$ — stosunek $2:3$ odnosi się do części, a nie do całości odcinka.',
            en: 'Using the fraction $\\frac{2}{3}$ instead of $\\frac{2}{5}$, or measuring $\\frac{2}{5}$ from $B$ — the ratio $2:3$ refers to the parts, not to the whole segment.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l3-05',
          skill: 'ga-s-typ-trojkata',
          level: 3,
          prompt: { pl: 'Wykaż, że trójkąt o wierzchołkach $A=(1,1)$, $B=(5,3)$, $C=(3,7)$ jest prostokątny i równoramienny, a następnie podaj długość jego przeciwprostokątnej.', en: 'Show that the triangle with vertices $A=(1,1)$, $B=(5,3)$, $C=(3,7)$ is right-angled and isosceles, then give the length of its hypotenuse.' },
          answer: '2\\sqrt{10}',
          accept: ['\\sqrt{40}', '|AC|=2\\sqrt{10}'],
          solution: [
            { pl: 'Kwadraty boków: $|AB|^2=4^2+2^2=20$, $|BC|^2=(-2)^2+4^2=20$, $|AC|^2=2^2+6^2=40$.', en: 'Squared sides: $|AB|^2=4^2+2^2=20$, $|BC|^2=(-2)^2+4^2=20$, $|AC|^2=2^2+6^2=40$.' },
            { pl: 'Z $|AB|=|BC|$ trójkąt jest równoramienny, a z $|AB|^2+|BC|^2=20+20=40=|AC|^2$ kąt przy $B$ jest prosty.', en: 'From $|AB|=|BC|$ the triangle is isosceles, and from $|AB|^2+|BC|^2=20+20=40=|AC|^2$ the angle at $B$ is right.' },
            { pl: 'Przeciwprostokątną jest $AC$: $|AC|=\\sqrt{40}=2\\sqrt{10}$.', en: 'The hypotenuse is $AC$: $|AC|=\\sqrt{40}=2\\sqrt{10}$.' },
          ],
          trap: {
            pl: 'Odczytanie kąta prostego z rysunku zamiast sprawdzenia twierdzenia odwrotnego do Pitagorasa oraz pozostawienie $\\sqrt{40}$ bez wyłączenia czynnika przed pierwiastek.',
            en: 'Reading the right angle off a sketch instead of checking the converse Pythagorean theorem, and leaving $\\sqrt{40}$ without pulling the factor out of the root.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l3-06',
          skill: 'ga-s-punkt-rownoodlegly',
          level: 3,
          prompt: { pl: 'Na osi $Ox$ wyznacz punkt $P$ równoodległy od punktów $A=(2,-3)$ i $B=(-4,5)$.', en: 'On the $x$-axis find the point $P$ equidistant from $A=(2,-3)$ and $B=(-4,5)$.' },
          answer: '(-\\frac{7}{3},0)',
          accept: ['P=\\left(-\\frac{7}{3},0\\right)', '\\left(-\\frac{7}{3},0\\right)'],
          solution: [
            { pl: 'Punkt osi $Ox$ ma postać $P=(x,0)$. Warunek $|PA|=|PB|$ zapisujemy dla kwadratów: $(x-2)^2+9=(x+4)^2+25$.', en: 'A point of the $x$-axis has the form $P=(x,0)$. Write $|PA|=|PB|$ for the squares: $(x-2)^2+9=(x+4)^2+25$.' },
            { pl: 'Po rozwinięciu $x^2-4x+13=x^2+8x+41$, czyli $-12x=28$.', en: 'Expanding gives $x^2-4x+13=x^2+8x+41$, i.e. $-12x=28$.' },
            { pl: 'Stąd $x=-\\frac{7}{3}$ i $P=\\left(-\\frac{7}{3},0\\right)$.', en: 'Hence $x=-\\frac{7}{3}$ and $P=\\left(-\\frac{7}{3},0\\right)$.' },
          ],
          trap: {
            pl: 'Zapomnienie warunku $y=0$ (wtedy zadanie ma nieskończenie wiele rozwiązań — całą symetralną) albo porównywanie pierwiastków zamiast kwadratów, co prowadzi do gubienia wyrazów.',
            en: 'Forgetting the condition $y=0$ (the problem then has infinitely many solutions — the whole perpendicular bisector), or comparing roots instead of squares, which loses terms.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l3-07',
          skill: 'ga-s-srodek-ciezkosci',
          level: 3,
          prompt: { pl: 'W trójkącie $ABC$ dane są $A=(-3,2)$, $B=(5,-2)$ oraz środek ciężkości $S=(2,3)$. Wyznacz wierzchołek $C$.', en: 'In triangle $ABC$ we are given $A=(-3,2)$, $B=(5,-2)$ and the centroid $S=(2,3)$. Find the vertex $C$.' },
          answer: '(4,9)',
          accept: ['C=(4,9)'],
          solution: [
            { pl: 'Ze wzoru na środek ciężkości $x_A+x_B+x_C=3x_S$, więc $x_C=3\\cdot 2-(-3)-5=4$.', en: 'From the centroid formula $x_A+x_B+x_C=3x_S$, so $x_C=3\\cdot 2-(-3)-5=4$.' },
            { pl: 'Podobnie $y_C=3\\cdot 3-2-(-2)=9$, zatem $C=(4,9)$.', en: 'Similarly $y_C=3\\cdot 3-2-(-2)=9$, hence $C=(4,9)$.' },
          ],
          trap: {
            pl: 'Potraktowanie $S$ jak środka odcinka $AB$ i liczenie $C=2S-\\ldots$; mnożnik przy środku ciężkości to $3$, nie $2$.',
            en: 'Treating $S$ as the midpoint of $AB$ and computing $C=2S-\\ldots$; the multiplier for a centroid is $3$, not $2$.',
          },
        },
        {
          id: 'ga-punkt-odcinek-l3-08',
          skill: 'ga-s-punkt-rownoodlegly',
          level: 3,
          prompt: { pl: 'Wyznacz wszystkie punkty osi $Oy$ odległe o $5$ od punktu $A=(3,2)$.', en: 'Find all points of the $y$-axis at distance $5$ from the point $A=(3,2)$.' },
          answer: '(0,6),(0,-2)',
          accept: ['(0,-2),(0,6)', 'P_1=(0,6),\\ P_2=(0,-2)'],
          solution: [
            { pl: 'Szukany punkt ma postać $P=(0,y)$, a warunek to $(0-3)^2+(y-2)^2=25$.', en: 'The point has the form $P=(0,y)$, and the condition is $(0-3)^2+(y-2)^2=25$.' },
            { pl: 'Stąd $(y-2)^2=16$, czyli $y-2=4$ lub $y-2=-4$.', en: 'Hence $(y-2)^2=16$, i.e. $y-2=4$ or $y-2=-4$.' },
            { pl: 'Otrzymujemy $y=6$ oraz $y=-2$, więc $P_1=(0,6)$, $P_2=(0,-2)$.', en: 'We get $y=6$ and $y=-2$, so $P_1=(0,6)$, $P_2=(0,-2)$.' },
          ],
          trap: {
            pl: 'Wyciągnięcie z $(y-2)^2=16$ tylko $y-2=4$ — pierwiastkowanie równania kwadratowego daje dwie możliwości, bo $\\sqrt{(y-2)^2}=|y-2|$.',
            en: 'Extracting only $y-2=4$ from $(y-2)^2=16$ — taking the root of a quadratic equation gives two options, since $\\sqrt{(y-2)^2}=|y-2|$.',
          },
        },
      ],
    },
  ],
};
