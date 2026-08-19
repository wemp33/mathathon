// Planimetria — geometria płaska do matury rozszerzonej: podobieństwo i Tales,
// twierdzenia sinusów i cosinusów, wszystkie wzory na pole trójkąta, środkowe
// i dwusieczne, kąty w okręgu z potęgą punktu, czworokąty i wielokąty foremne.
export default {
  id: 'planimetria',
  track: 'matura',
  order: 60,
  title: { pl: 'Planimetria', en: 'Plane geometry' },
  blurb: {
    pl: 'Podobieństwo i twierdzenie Talesa, sinusy i cosinusy w trójkącie, wzory na pole, okręgi wpisane i opisane, kąty w okręgu, potęga punktu, czworokąty i wielokąty foremne.',
    en: 'Similarity and Thales, the sine and cosine rules, area formulas, incircles and circumcircles, circle angles, power of a point, quadrilaterals and regular polygons.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'przystawanie-podobienstwo',
      title: { pl: 'Przystawanie, podobieństwo i twierdzenie Talesa', en: 'Congruence, similarity and Thales’ theorem' },
      level: 2,
      prereq: [],
      theory: {
        pl: 'Dwa trójkąty są przystające, gdy zgadzają się wszystkie boki i kąty — rozstrzygają o tym cechy '
          + 'BBB, BKB i KBK. Podobieństwo wymaga tylko zgodności kształtu: najczęściej używa się cechy kk '
          + '(dwa równe kąty), rzadziej cech z proporcjonalnością boków. Skala podobieństwa $k$ działa liniowo '
          + 'na wszystkie długości — boki, obwody, wysokości, promienie — ale pola mnoży przez $k^{2}$. '
          + 'Twierdzenie Talesa: proste równoległe przecinające ramiona kąta wycinają na nich odcinki '
          + 'proporcjonalne; twierdzenie odwrotne pozwala z równości proporcji wywnioskować równoległość. '
          + 'Klasyczna konfiguracja maturalna: wysokość poprowadzona z wierzchołka kąta prostego rozcina '
          + 'trójkąt na dwa trójkąty podobne do wyjściowego, skąd $h^{2}=pq$ oraz $a^{2}=pc$.',
        en: 'Two triangles are congruent when all sides and angles match — the SSS, SAS and ASA criteria decide. '
          + 'Similarity only requires the same shape: the AA criterion (two equal angles) is used most often. '
          + 'The similarity ratio $k$ acts linearly on every length — sides, perimeters, heights, radii — but '
          + 'multiplies areas by $k^{2}$. Thales’ theorem: parallel lines crossing the arms of an angle cut '
          + 'proportional segments; the converse turns an equal proportion into parallelism. The classic exam '
          + 'configuration: the altitude from the right angle splits a right triangle into two triangles similar '
          + 'to the original, giving $h^{2}=pq$ and $a^{2}=pc$.',
      },
      formulas: [
        { id: 'cecha-kk-podobienstwa', tex: '\\alpha_{1}=\\alpha_{2},\\ \\beta_{1}=\\beta_{2}\\ \\Rightarrow\\ \\triangle_{1}\\sim\\triangle_{2}', name: { pl: 'Cecha podobieństwa kk', en: 'AA similarity criterion' }, note: { pl: 'Dwa kąty wystarczą — trzeci jest wymuszony sumą $180^{\\circ}$.', en: 'Two angles suffice — the third is forced by the $180^{\\circ}$ sum.' }, drill: true },
        { id: 'stosunek-pol-podobnych', tex: '\\frac{L_{2}}{L_{1}}=k,\\qquad \\frac{P_{2}}{P_{1}}=k^{2}', name: { pl: 'Obwody i pola figur podobnych', en: 'Perimeters and areas of similar figures' }, note: { pl: 'Długości skalują się jak $k$, pola jak $k^{2}$ — najczęstszy błąd to pomylenie tych dwóch.', en: 'Lengths scale by $k$, areas by $k^{2}$ — mixing the two is the classic error.' }, drill: true },
        { id: 'tw-talesa', tex: 'AC \\parallel BD\\ \\Rightarrow\\ \\frac{|OA|}{|OB|}=\\frac{|OC|}{|OD|}', name: { pl: 'Twierdzenie Talesa', en: 'Thales’ theorem' }, note: { pl: '$A$, $B$ na jednym ramieniu kąta o wierzchołku $O$, $C$, $D$ na drugim. Proporcja zestawia odcinki liczone od wierzchołka.', en: '$A$, $B$ on one arm of the angle at $O$, $C$, $D$ on the other. Segments are measured from the vertex.' }, drill: true },
        { id: 'tw-talesa-odwrotne', tex: '\\frac{|OA|}{|OB|}=\\frac{|OC|}{|OD|}\\ \\Rightarrow\\ AC \\parallel BD', name: { pl: 'Twierdzenie odwrotne do twierdzenia Talesa', en: 'Converse of Thales’ theorem' }, note: { pl: 'Z proporcji wnioskujemy równoległość — narzędzie dowodowe.', en: 'Proportion implies parallelism — a proof tool.' }, drill: true },
        { id: 'relacje-euklidesa', tex: 'h^{2}=pq,\\qquad a^{2}=p\\,c', name: { pl: 'Relacje w trójkącie prostokątnym (wysokość z kąta prostego)', en: 'Right-triangle altitude relations' }, note: { pl: '$p$, $q$ — odcinki przeciwprostokątnej $c$ wycięte przez wysokość $h$; wszystko z podobieństwa trzech trójkątów.', en: '$p$, $q$ — the parts of the hypotenuse $c$ cut by the altitude $h$; all from the similarity of the three triangles.' }, drill: true },
      ],
      skills: [
        { id: 'podob-skala', title: { pl: 'Skala podobieństwa, obwody i pola', en: 'Similarity ratio, perimeters and areas' }, levels: [1, 2] },
        { id: 'podob-tales', title: { pl: 'Twierdzenie Talesa i odwrotne', en: 'Thales’ theorem and its converse' }, levels: [2, 3] },
        { id: 'podob-konfiguracje', title: { pl: 'Podobieństwo w konfiguracjach', en: 'Similarity inside configurations' }, levels: [4, 5, 6] },
      ],
      problems: [
        {
          id: 'przystawanie-podobienstwo-l1-01',
          skill: 'podob-skala',
          level: 1,
          prompt: { pl: 'Trójkąt $KLM$ jest podobny do trójkąta $ABC$ w skali $k=3$. Obwód trójkąta $ABC$ jest równy $12$. Oblicz obwód trójkąta $KLM$.', en: 'Triangle $KLM$ is similar to triangle $ABC$ with ratio $k=3$. The perimeter of $ABC$ is $12$. Find the perimeter of $KLM$.' },
          answer: '36',
          accept: ['36'],
          solution: [
            { pl: 'Każdy bok trójkąta $KLM$ jest $3$ razy dłuższy od odpowiedniego boku $ABC$.', en: 'Every side of $KLM$ is $3$ times the corresponding side of $ABC$.' },
            { pl: 'Obwód skaluje się tak samo jak boki: $3\\cdot 12 = 36$.', en: 'The perimeter scales like the sides: $3\\cdot 12 = 36$.' },
          ],
          trap: { pl: 'Obwody figur podobnych mają się jak $k$, nie jak $k^{2}$ — kwadrat skali dotyczy wyłącznie pól.', en: 'Perimeters scale by $k$, not $k^{2}$ — the square applies only to areas.' },
        },
        {
          id: 'przystawanie-podobienstwo-l2-02',
          skill: 'podob-skala',
          level: 2,
          prompt: { pl: 'Pola dwóch trójkątów podobnych są równe $8$ i $18$. Wyznacz skalę podobieństwa trójkąta większego do mniejszego.', en: 'Two similar triangles have areas $8$ and $18$. Find the ratio of similarity of the larger to the smaller.' },
          answer: '\\frac{3}{2}',
          accept: ['3/2', '1{,}5', '1.5'],
          solution: [
            { pl: 'Stosunek pól to kwadrat skali: $k^{2}=\\frac{18}{8}=\\frac{9}{4}$.', en: 'The area ratio is the square of the similarity ratio: $k^{2}=\\frac{18}{8}=\\frac94$.' },
            { pl: 'Stąd $k=\\frac{3}{2}$.', en: 'Hence $k=\\frac32$.' },
          ],
          trap: { pl: 'Podanie $\\frac{18}{8}$ jako skali — stosunek pól to $k^{2}$; skalę dostaje się dopiero po spierwiastkowaniu.', en: 'Reporting $\\frac{18}{8}$ as the ratio — areas give $k^{2}$; take the square root first.' },
        },
        {
          id: 'przystawanie-podobienstwo-l2-03',
          skill: 'podob-tales',
          level: 2,
          prompt: { pl: 'Punkty $A$ i $B$ leżą na jednym ramieniu kąta o wierzchołku $O$, punkty $C$ i $D$ na drugim, przy czym $AC \\parallel BD$. Dane: $|OA|=4$, $|AB|=6$, $|OC|=6$. Oblicz $|CD|$.', en: 'Points $A$, $B$ lie on one arm of an angle with vertex $O$, points $C$, $D$ on the other, with $AC \\parallel BD$. Given $|OA|=4$, $|AB|=6$, $|OC|=6$, find $|CD|$.' },
          answer: '9',
          accept: ['9'],
          solution: [
            { pl: 'Z twierdzenia Talesa odcinki „od wierzchołka do pierwszej prostej" i „między prostymi" są proporcjonalne: $\\frac{|OA|}{|AB|}=\\frac{|OC|}{|CD|}$.', en: 'By Thales, the segments from the vertex and between the parallels are proportional: $\\frac{|OA|}{|AB|}=\\frac{|OC|}{|CD|}$.' },
            { pl: '$\\frac{4}{6}=\\frac{6}{|CD|}$, więc $|CD|=\\frac{36}{4}=9$.', en: '$\\frac46=\\frac{6}{|CD|}$, so $|CD|=9$.' },
          ],
          trap: { pl: 'Mieszanie odcinków „od wierzchołka" z odcinkami „między prostymi" w jednej proporcji — pary muszą sobie odpowiadać po obu stronach.', en: 'Mixing vertex-to-line with between-lines segments in one proportion — the pairs must correspond on both arms.' },
        },
        {
          id: 'przystawanie-podobienstwo-l3-04',
          skill: 'podob-tales',
          level: 3,
          prompt: { pl: 'Na jednym ramieniu kąta o wierzchołku $O$ wybrano punkty $A$ i $B$, na drugim $C$ i $D$, przy czym $|OA|=3$, $|OB|=7{,}5$, $|OC|=4$, $|OD|=10$. Rozstrzygnij, czy proste $AC$ i $BD$ są równoległe. Odpowiedź uzasadnij.', en: 'On one arm of an angle with vertex $O$ take $A$ and $B$, on the other $C$ and $D$, with $|OA|=3$, $|OB|=7.5$, $|OC|=4$, $|OD|=10$. Decide whether the lines $AC$ and $BD$ are parallel. Justify.' },
          answer: '\\text{Tak: } \\frac{|OA|}{|OB|}=\\frac{|OC|}{|OD|}=\\frac{2}{5}',
          accept: ['tak', 'yes', 'sa rownolegle', 'są równoległe'],
          solution: [
            { pl: 'Liczymy proporcje wzdłuż każdego ramienia: $\\frac{|OA|}{|OB|}=\\frac{3}{7{,}5}=\\frac{2}{5}$ oraz $\\frac{|OC|}{|OD|}=\\frac{4}{10}=\\frac{2}{5}$.', en: 'Compute the proportion along each arm: $\\frac{3}{7.5}=\\frac25$ and $\\frac{4}{10}=\\frac25$.' },
            { pl: 'Proporcje są równe, więc z twierdzenia odwrotnego do twierdzenia Talesa $AC \\parallel BD$.', en: 'The ratios agree, so by the converse of Thales’ theorem $AC \\parallel BD$.' },
          ],
          trap: { pl: 'Do wniosku o równoległości potrzeba twierdzenia ODWROTNEGO — samo twierdzenie Talesa działa w przeciwną stronę i niczego tu nie dowodzi.', en: 'Parallelism needs the CONVERSE — Thales’ theorem itself points the other way and proves nothing here.' },
        },
        {
          id: 'przystawanie-podobienstwo-l3-05',
          skill: 'podob-tales',
          level: 3,
          prompt: { pl: 'W trójkącie $ABC$ punkt $D$ leży na boku $CA$, a punkt $E$ na boku $CB$, przy czym $DE \\parallel AB$. Dane: $|CD|=4$, $|DA|=2$, $|AB|=9$. Oblicz $|DE|$.', en: 'In triangle $ABC$ point $D$ lies on side $CA$ and $E$ on side $CB$, with $DE \\parallel AB$. Given $|CD|=4$, $|DA|=2$, $|AB|=9$, find $|DE|$.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Z $DE \\parallel AB$ trójkąty $CDE$ i $CAB$ są podobne (cecha kk — wspólny kąt $C$ i kąty odpowiadające).', en: 'From $DE \\parallel AB$ triangles $CDE$ and $CAB$ are similar (AA — common angle $C$ plus corresponding angles).' },
            { pl: 'Skala: $k=\\frac{|CD|}{|CA|}=\\frac{4}{4+2}=\\frac{2}{3}$.', en: 'Ratio: $k=\\frac{|CD|}{|CA|}=\\frac{4}{6}=\\frac23$.' },
            { pl: '$|DE|=k\\cdot|AB|=\\frac{2}{3}\\cdot 9=6$.', en: '$|DE|=\\frac23\\cdot 9=6$.' },
          ],
          trap: { pl: 'Użycie $\\frac{|CD|}{|DA|}=2$ zamiast $\\frac{|CD|}{|CA|}=\\frac{2}{3}$ — skala podobieństwa odnosi się do całego boku, nie do jego kawałka.', en: 'Using $\\frac{|CD|}{|DA|}=2$ instead of $\\frac{|CD|}{|CA|}=\\frac23$ — the ratio compares whole sides, not a piece.' },
        },
        {
          id: 'przystawanie-podobienstwo-l4-06',
          skill: 'podob-konfiguracje',
          level: 4,
          prompt: { pl: 'Wysokość poprowadzona z wierzchołka kąta prostego trójkąta prostokątnego dzieli przeciwprostokątną na odcinki długości $4$ i $9$. Oblicz długość tej wysokości.', en: 'The altitude from the right angle of a right triangle cuts the hypotenuse into segments of lengths $4$ and $9$. Find the altitude.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Wysokość rozcina trójkąt na dwa trójkąty podobne do siebie, stąd $\\frac{h}{4}=\\frac{9}{h}$.', en: 'The altitude creates two similar triangles, so $\\frac h4=\\frac 9h$.' },
            { pl: '$h^{2}=4\\cdot 9=36$, więc $h=6$.', en: '$h^{2}=36$, hence $h=6$.' },
          ],
          trap: { pl: 'Branie średniej arytmetycznej $\\frac{4+9}{2}$ — wysokość jest średnią GEOMETRYCZNĄ odcinków przeciwprostokątnej.', en: 'Taking the arithmetic mean $\\frac{4+9}{2}$ — the altitude is the GEOMETRIC mean of the two segments.' },
        },
        {
          id: 'przystawanie-podobienstwo-l5-07',
          skill: 'podob-konfiguracje',
          level: 5,
          prompt: { pl: 'W trapezie $ABCD$ o podstawach $|AB|=10$ i $|CD|=6$ przekątne przecinają się w punkcie $P$. Pole trójkąta $ABP$ jest równe $50$. Oblicz pole trójkąta $CDP$.', en: 'In trapezoid $ABCD$ with parallel sides $|AB|=10$ and $|CD|=6$ the diagonals meet at $P$. The area of triangle $ABP$ is $50$. Find the area of triangle $CDP$.' },
          answer: '18',
          accept: ['18'],
          solution: [
            { pl: 'Trójkąty $ABP$ i $CDP$ są podobne (kąty wierzchołkowe przy $P$, kąty naprzemianległe przy podstawach).', en: 'Triangles $ABP$ and $CDP$ are similar (vertical angles at $P$, alternate angles at the parallel bases).' },
            { pl: 'Skala: $k=\\frac{|AB|}{|CD|}=\\frac{10}{6}=\\frac{5}{3}$, więc pola mają się jak $k^{2}=\\frac{25}{9}$.', en: 'Ratio $k=\\frac{10}{6}=\\frac53$, so areas are in ratio $k^{2}=\\frac{25}{9}$.' },
            { pl: '$P_{CDP}=50\\cdot\\frac{9}{25}=18$.', en: '$P_{CDP}=50\\cdot\\frac{9}{25}=18$.' },
          ],
          trap: { pl: 'Podzielenie $50$ przez $\\frac{5}{3}$ — pola trójkątów podobnych mają się jak $k^{2}$, nie jak $k$.', en: 'Dividing $50$ by $\\frac53$ — areas of similar triangles scale by $k^{2}$, not $k$.' },
        },
        {
          id: 'przystawanie-podobienstwo-l6-08',
          skill: 'podob-konfiguracje',
          level: 6,
          prompt: { pl: 'W trójkącie $ABC$ punkt $D$ leży na boku $AB$, przy czym $\\angle ACD = \\angle ABC$. Dane: $|AC|=6$, $|AB|=9$. Oblicz $|AD|$.', en: 'In triangle $ABC$ point $D$ lies on side $AB$ with $\\angle ACD = \\angle ABC$. Given $|AC|=6$ and $|AB|=9$, find $|AD|$.' },
          answer: '4',
          accept: ['4'],
          solution: [
            { pl: 'Trójkąty $ACD$ i $ABC$ mają wspólny kąt $A$ oraz $\\angle ACD=\\angle ABC$, więc są podobne (kk) z odpowiedniością $A\\to A$, $C\\to B$, $D\\to C$.', en: 'Triangles $ACD$ and $ABC$ share angle $A$ and have $\\angle ACD=\\angle ABC$, so they are similar (AA) with $A\\to A$, $C\\to B$, $D\\to C$.' },
            { pl: 'Z odpowiedniości boków: $\\frac{|AC|}{|AB|}=\\frac{|AD|}{|AC|}$, czyli $|AC|^{2}=|AD|\\cdot|AB|$.', en: 'Matching sides: $\\frac{|AC|}{|AB|}=\\frac{|AD|}{|AC|}$, i.e. $|AC|^{2}=|AD|\\cdot|AB|$.' },
            { pl: '$36=9\\,|AD|$, więc $|AD|=4$.', en: '$36=9\\,|AD|$, so $|AD|=4$.' },
          ],
          trap: { pl: 'Złe sparowanie wierzchołków: w podobieństwie $ACD\\sim ABC$ bok $AC$ odpowiada bokowi $AB$, a $AD$ bokowi $AC$ — pomylenie par daje $|AD|=|AC|$ albo inne bzdury.', en: 'Wrong vertex pairing: in $ACD\\sim ABC$ side $AC$ corresponds to $AB$ and $AD$ to $AC$ — mismatching gives nonsense.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'tw-sinusow-cosinusow',
      title: { pl: 'Pitagoras, twierdzenie sinusów i cosinusów', en: 'Pythagoras, sine rule and cosine rule' },
      level: 3,
      prereq: ['przystawanie-podobienstwo'],
      theory: {
        pl: 'Twierdzenie Pitagorasa charakteryzuje trójkąty prostokątne, a porównanie $c^{2}$ z $a^{2}+b^{2}$ '
          + '(dla $c$ — najdłuższego boku) klasyfikuje trójkąt jako ostrokątny, prostokątny lub rozwartokątny. '
          + 'Twierdzenie cosinusów $c^{2}=a^{2}+b^{2}-2ab\\cos\\gamma$ uogólnia Pitagorasa i jest właściwym '
          + 'narzędziem, gdy dane są dwa boki i kąt między nimi albo trzy boki. Twierdzenie sinusów '
          + '$\\frac{a}{\\sin\\alpha}=2R$ wiąże każdy bok z sinusem kąta naprzeciwległego i promieniem okręgu '
          + 'opisanego — sięgamy po nie, gdy w danych występuje para bok–kąt naprzeciwległy albo promień $R$. '
          + 'Uwaga na przypadek dwuznaczny: z $\\sin\\beta$ nie odczytamy, czy $\\beta$ jest ostry, czy rozwarty, '
          + 'bo $\\sin\\beta=\\sin(180^{\\circ}-\\beta)$; cosinus rozstrzyga znak jednoznacznie. Wzory cosinusowe '
          + 'są jednorodne, więc działają także na samych stosunkach boków.',
        en: 'Pythagoras characterises right triangles, and comparing $c^{2}$ with $a^{2}+b^{2}$ (for the longest '
          + 'side $c$) classifies a triangle as acute, right or obtuse. The cosine rule '
          + '$c^{2}=a^{2}+b^{2}-2ab\\cos\\gamma$ generalises Pythagoras and is the tool of choice given two sides '
          + 'and the included angle, or all three sides. The sine rule $\\frac{a}{\\sin\\alpha}=2R$ ties each side '
          + 'to the sine of the opposite angle and the circumradius — use it when a side–opposite-angle pair or '
          + '$R$ appears in the data. Beware the ambiguous case: $\\sin\\beta$ cannot tell an acute $\\beta$ from '
          + 'an obtuse one, since $\\sin\\beta=\\sin(180^{\\circ}-\\beta)$; the cosine settles the sign. Cosine '
          + 'formulas are homogeneous, so they work on side ratios alone.',
      },
      formulas: [
        { id: 'tw-pitagorasa', tex: 'a^{2}+b^{2}=c^{2}', name: { pl: 'Twierdzenie Pitagorasa', en: 'Pythagorean theorem' }, note: { pl: 'Równoważność: zachodzi wtedy i tylko wtedy, gdy kąt naprzeciw $c$ jest prosty — twierdzenie odwrotne też jest prawdziwe.', en: 'An equivalence: holds iff the angle opposite $c$ is right — the converse is also true.' }, drill: true },
        { id: 'klasyfikacja-cosinusowa', tex: 'c^{2}<a^{2}+b^{2}\\iff\\gamma<90^{\\circ},\\qquad c^{2}>a^{2}+b^{2}\\iff\\gamma>90^{\\circ}', name: { pl: 'Klasyfikacja trójkąta po bokach', en: 'Classifying a triangle by its sides' }, note: { pl: '$\\gamma$ naprzeciw $c$; o typie całego trójkąta decyduje kąt naprzeciw NAJDŁUŻSZEGO boku.', en: '$\\gamma$ opposite $c$; the triangle’s type is decided by the angle opposite the LONGEST side.' }, drill: true },
        { id: 'tw-sinusow', tex: '\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2R', name: { pl: 'Twierdzenie sinusów', en: 'Sine rule' }, note: { pl: 'Wspólna wartość to ŚREDNICA okręgu opisanego, nie promień — zgubiona dwójka to klasyk.', en: 'The common value is the DIAMETER of the circumcircle, not the radius — losing the 2 is a classic.' }, drill: true },
        { id: 'tw-cosinusow', tex: 'c^{2}=a^{2}+b^{2}-2ab\\cos\\gamma', name: { pl: 'Twierdzenie cosinusów', en: 'Cosine rule' }, note: { pl: '$\\gamma$ to kąt MIĘDZY bokami $a$ i $b$. Dla $\\gamma=90^{\\circ}$ wraca Pitagoras.', en: '$\\gamma$ is the angle BETWEEN $a$ and $b$. At $\\gamma=90^{\\circ}$ it collapses to Pythagoras.' }, drill: true },
      ],
      skills: [
        { id: 'pit-klasyfikacja', title: { pl: 'Pitagoras i klasyfikacja trójkąta', en: 'Pythagoras and triangle classification' }, levels: [2, 3] },
        { id: 'tw-cosinusow-uzycie', title: { pl: 'Twierdzenie cosinusów', en: 'Using the cosine rule' }, levels: [3, 4, 5] },
        { id: 'tw-sinusow-uzycie', title: { pl: 'Twierdzenie sinusów i okrąg opisany', en: 'Sine rule and the circumcircle' }, levels: [3, 4] },
        { id: 'sin-cos-dowodowe', title: { pl: 'Zadania dowodowe z sinusami i cosinusami', en: 'Proof problems with sines and cosines' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'tw-sinusow-cosinusow-l2-01',
          skill: 'pit-klasyfikacja',
          level: 2,
          prompt: { pl: 'Boki trójkąta mają długości $7$, $8$ i $12$. Rozstrzygnij, czy trójkąt jest ostrokątny, prostokątny, czy rozwartokątny.', en: 'A triangle has sides $7$, $8$ and $12$. Decide whether it is acute, right or obtuse.' },
          answer: '\\text{rozwartokątny}',
          accept: ['rozwartokatny', 'rozwartokątny', 'obtuse'],
          solution: [
            { pl: 'Porównujemy kwadrat najdłuższego boku z sumą kwadratów pozostałych: $12^{2}=144$, $7^{2}+8^{2}=113$.', en: 'Compare the square of the longest side with the sum of the other squares: $144$ vs $113$.' },
            { pl: '$144>113$, więc kąt naprzeciw boku $12$ jest rozwarty — trójkąt jest rozwartokątny.', en: '$144>113$, so the angle opposite $12$ is obtuse — the triangle is obtuse.' },
          ],
          trap: { pl: 'Test działa tylko z NAJDŁUŻSZYM bokiem po lewej stronie — porównanie $7^{2}+12^{2}$ z $8^{2}$ nic nie mówi o typie trójkąta.', en: 'The test only works with the LONGEST side on the left — comparing $7^{2}+12^{2}$ with $8^{2}$ says nothing.' },
        },
        {
          id: 'tw-sinusow-cosinusow-l3-02',
          skill: 'tw-cosinusow-uzycie',
          level: 3,
          prompt: { pl: 'W trójkącie dane są boki $a=5$, $b=8$ oraz kąt między nimi $\\gamma=60^{\\circ}$. Oblicz długość trzeciego boku.', en: 'A triangle has sides $a=5$, $b=8$ and included angle $\\gamma=60^{\\circ}$. Find the third side.' },
          answer: '7',
          accept: ['7'],
          solution: [
            { pl: 'Twierdzenie cosinusów: $c^{2}=5^{2}+8^{2}-2\\cdot 5\\cdot 8\\cos 60^{\\circ}$.', en: 'Cosine rule: $c^{2}=25+64-80\\cos 60^{\\circ}$.' },
            { pl: '$c^{2}=25+64-80\\cdot\\frac{1}{2}=49$, więc $c=7$.', en: '$c^{2}=89-40=49$, so $c=7$.' },
          ],
          trap: { pl: 'Zgubienie dwójki lub minusa w składniku $-2ab\\cos\\gamma$ — z $89-40$ robi się wtedy $89+40$ albo $89-20$.', en: 'Losing the 2 or the minus in $-2ab\\cos\\gamma$ turns $89-40$ into $89+40$ or $89-20$.' },
        },
        {
          id: 'tw-sinusow-cosinusow-l3-03',
          skill: 'tw-sinusow-uzycie',
          level: 3,
          prompt: { pl: 'W trójkącie bok długości $6$ leży naprzeciw kąta o mierze $30^{\\circ}$. Oblicz promień okręgu opisanego na tym trójkącie.', en: 'In a triangle a side of length $6$ lies opposite a $30^{\\circ}$ angle. Find the circumradius.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Twierdzenie sinusów: $2R=\\frac{a}{\\sin\\alpha}=\\frac{6}{\\sin 30^{\\circ}}=\\frac{6}{\\frac{1}{2}}=12$.', en: 'Sine rule: $2R=\\frac{6}{\\sin 30^{\\circ}}=12$.' },
            { pl: 'Stąd $R=6$.', en: 'Hence $R=6$.' },
          ],
          trap: { pl: 'Iloraz $\\frac{a}{\\sin\\alpha}$ to średnica $2R$, nie promień — odpowiedź $12$ oznacza zgubioną dwójkę.', en: 'The quotient $\\frac{a}{\\sin\\alpha}$ is the diameter $2R$, not the radius — answering $12$ means the 2 was lost.' },
        },
        {
          id: 'tw-sinusow-cosinusow-l4-04',
          skill: 'tw-cosinusow-uzycie',
          level: 4,
          prompt: { pl: 'Boki trójkąta mają długości $7$, $8$ i $13$. Oblicz miarę największego kąta tego trójkąta.', en: 'A triangle has sides $7$, $8$ and $13$. Find the measure of its largest angle.' },
          answer: '120^{\\circ}',
          accept: ['120', '120°', '120 stopni'],
          solution: [
            { pl: 'Największy kąt leży naprzeciw najdłuższego boku, czyli naprzeciw $13$.', en: 'The largest angle is opposite the longest side, $13$.' },
            { pl: '$\\cos\\gamma=\\frac{7^{2}+8^{2}-13^{2}}{2\\cdot 7\\cdot 8}=\\frac{113-169}{112}=-\\frac{1}{2}$.', en: '$\\cos\\gamma=\\frac{49+64-169}{112}=-\\frac12$.' },
            { pl: 'Stąd $\\gamma=120^{\\circ}$.', en: 'Hence $\\gamma=120^{\\circ}$.' },
          ],
          trap: { pl: 'Zignorowanie znaku minus i odczytanie $60^{\\circ}$ — ujemny cosinus to sygnał kąta rozwartego.', en: 'Dropping the minus and reading $60^{\\circ}$ — a negative cosine signals an obtuse angle.' },
        },
        {
          id: 'tw-sinusow-cosinusow-l4-05',
          skill: 'tw-sinusow-uzycie',
          level: 4,
          prompt: { pl: 'W trójkącie $\\alpha=45^{\\circ}$, $\\beta=60^{\\circ}$, a bok leżący naprzeciw kąta $\\alpha$ ma długość $4\\sqrt{2}$. Oblicz długość boku leżącego naprzeciw kąta $\\beta$.', en: 'In a triangle $\\alpha=45^{\\circ}$, $\\beta=60^{\\circ}$, and the side opposite $\\alpha$ has length $4\\sqrt{2}$. Find the side opposite $\\beta$.' },
          answer: '4\\sqrt{3}',
          accept: ['4\\sqrt{3}', '4sqrt(3)', '4√3'],
          solution: [
            { pl: 'Twierdzenie sinusów: $\\frac{b}{\\sin 60^{\\circ}}=\\frac{4\\sqrt{2}}{\\sin 45^{\\circ}}$.', en: 'Sine rule: $\\frac{b}{\\sin 60^{\\circ}}=\\frac{4\\sqrt2}{\\sin 45^{\\circ}}$.' },
            { pl: '$b=4\\sqrt{2}\\cdot\\frac{\\sin 60^{\\circ}}{\\sin 45^{\\circ}}=4\\sqrt{2}\\cdot\\frac{\\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}}=4\\sqrt{3}$.', en: '$b=4\\sqrt2\\cdot\\frac{\\sqrt3/2}{\\sqrt2/2}=4\\sqrt3$.' },
          ],
          trap: { pl: 'Sparowanie boku z niewłaściwym kątem — w twierdzeniu sinusów bok stoi zawsze nad sinusem kąta NAPRZECIWLEGŁEGO.', en: 'Pairing a side with the wrong angle — each side sits over the sine of its OPPOSITE angle.' },
        },
        {
          id: 'tw-sinusow-cosinusow-l5-06',
          skill: 'tw-cosinusow-uzycie',
          level: 5,
          prompt: { pl: 'Boki trójkąta pozostają w stosunku $4:5:6$. Oblicz cosinus największego kąta tego trójkąta.', en: 'The sides of a triangle are in ratio $4:5:6$. Find the cosine of its largest angle.' },
          answer: '\\frac{1}{8}',
          accept: ['1/8', '0{,}125', '0.125'],
          solution: [
            { pl: 'Przyjmujemy $a=4t$, $b=5t$, $c=6t$; największy kąt leży naprzeciw $6t$.', en: 'Set $a=4t$, $b=5t$, $c=6t$; the largest angle is opposite $6t$.' },
            { pl: '$\\cos\\gamma=\\frac{(4t)^{2}+(5t)^{2}-(6t)^{2}}{2\\cdot 4t\\cdot 5t}=\\frac{16+25-36}{40}=\\frac{5}{40}=\\frac{1}{8}$ — czynnik $t^{2}$ się skraca.', en: '$\\cos\\gamma=\\frac{16+25-36}{40}=\\frac18$ — the factor $t^{2}$ cancels.' },
          ],
          trap: { pl: 'Przekonanie, że „nie znamy boków, więc się nie da" — wzór cosinusów jest jednorodny i wspólny czynnik zawsze się skraca.', en: 'Believing "we don’t know the sides, so it can’t be done" — the cosine rule is homogeneous, the common factor always cancels.' },
        },
        {
          id: 'tw-sinusow-cosinusow-l6-07',
          skill: 'sin-cos-dowodowe',
          level: 6,
          prompt: { pl: 'Wykaż, że w trójkącie o bokach $4$, $5$, $6$ największy kąt ma miarę dwa razy większą od najmniejszego.', en: 'Prove that in the triangle with sides $4$, $5$, $6$ the largest angle is twice the smallest.' },
          answer: '\\gamma=2\\alpha',
          accept: ['gamma=2alpha', 'γ=2α', 'gamma = 2 alpha'],
          solution: [
            { pl: 'Najmniejszy kąt $\\alpha$ leży naprzeciw $4$: $\\cos\\alpha=\\frac{5^{2}+6^{2}-4^{2}}{2\\cdot 5\\cdot 6}=\\frac{45}{60}=\\frac{3}{4}$.', en: 'The smallest angle $\\alpha$ is opposite $4$: $\\cos\\alpha=\\frac{25+36-16}{60}=\\frac34$.' },
            { pl: 'Największy kąt $\\gamma$ naprzeciw $6$: $\\cos\\gamma=\\frac{4^{2}+5^{2}-6^{2}}{2\\cdot 4\\cdot 5}=\\frac{5}{40}=\\frac{1}{8}$.', en: 'The largest angle $\\gamma$ is opposite $6$: $\\cos\\gamma=\\frac{16+25-36}{40}=\\frac18$.' },
            { pl: 'Ze wzoru na kąt podwojony: $\\cos 2\\alpha=2\\cos^{2}\\alpha-1=2\\cdot\\frac{9}{16}-1=\\frac{1}{8}=\\cos\\gamma$.', en: 'Double angle: $\\cos2\\alpha=2\\cos^{2}\\alpha-1=\\frac98-1=\\frac18=\\cos\\gamma$.' },
            { pl: 'Kąty $2\\alpha$ i $\\gamma$ leżą w $(0^{\\circ},180^{\\circ})$, gdzie cosinus jest różnowartościowy, więc $\\gamma=2\\alpha$.', en: 'Both $2\\alpha$ and $\\gamma$ lie in $(0^{\\circ},180^{\\circ})$, where cosine is injective, so $\\gamma=2\\alpha$.' },
          ],
          trap: { pl: 'Sama równość $\\cos\\gamma=\\cos 2\\alpha$ nie kończy dowodu — trzeba dopisać, że cosinus jest różnowartościowy na $(0^{\\circ},180^{\\circ})$, i sprawdzić, że $2\\alpha$ mieści się w tym przedziale.', en: 'The equality $\\cos\\gamma=\\cos2\\alpha$ alone does not finish the proof — cite injectivity of cosine on $(0^{\\circ},180^{\\circ})$ and check $2\\alpha$ lies there.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'pola-trojkata',
      title: { pl: 'Pola trójkąta, okrąg wpisany i opisany', en: 'Triangle areas, incircle and circumcircle' },
      level: 3,
      prereq: ['tw-sinusow-cosinusow'],
      theory: {
        pl: 'Pole trójkąta ma pięć twarzy i wybiera się tę, która pasuje do danych: podstawa i wysokość — '
          + '$P=\\frac{1}{2}ah_{a}$; dwa boki i kąt między nimi — $P=\\frac{1}{2}ab\\sin\\gamma$; trzy boki — '
          + 'wzór Herona; trzy boki i promień okręgu wpisanego — $P=pr$; trzy boki i promień okręgu opisanego — '
          + '$P=\\frac{abc}{4R}$. Te same wzory czytane wspak dają promienie: $r=\\frac{P}{p}$ oraz '
          + '$R=\\frac{abc}{4P}$. W trójkącie prostokątnym wszystko się upraszcza: $R=\\frac{c}{2}$, bo '
          + 'przeciwprostokątna jest średnicą okręgu opisanego, oraz $r=\\frac{a+b-c}{2}$. W trójkącie '
          + 'równobocznym $P=\\frac{a^{2}\\sqrt{3}}{4}$, $h=\\frac{a\\sqrt{3}}{2}$, a środek okręgu wpisanego '
          + 'i opisanego to ten sam punkt z $R=2r$.',
        en: 'A triangle’s area has five faces; pick the one matching the data: base and height — '
          + '$P=\\frac12 ah_a$; two sides with the included angle — $P=\\frac12 ab\\sin\\gamma$; three sides — '
          + 'Heron; three sides and the inradius — $P=pr$; three sides and the circumradius — $P=\\frac{abc}{4R}$. '
          + 'Read backwards the same formulas yield the radii: $r=\\frac Pp$ and $R=\\frac{abc}{4P}$. In a right '
          + 'triangle everything simplifies: $R=\\frac c2$ because the hypotenuse is a diameter, and '
          + '$r=\\frac{a+b-c}{2}$. In an equilateral triangle $P=\\frac{a^{2}\\sqrt3}{4}$, $h=\\frac{a\\sqrt3}{2}$, '
          + 'and the incentre and circumcentre coincide with $R=2r$.',
      },
      formulas: [
        { id: 'pole-podstawa-wysokosc', tex: 'P=\\frac{1}{2}\\,a\\,h_{a}', name: { pl: 'Pole: podstawa i wysokość', en: 'Area: base and height' }, note: { pl: 'Wysokość musi być opuszczona NA tę podstawę, którą mnożymy.', en: 'The height must be dropped onto the base being used.' }, drill: true },
        { id: 'pole-dwa-boki-sinus', tex: 'P=\\frac{1}{2}\\,ab\\sin\\gamma', name: { pl: 'Pole: dwa boki i sinus kąta między nimi', en: 'Area: two sides and the included angle' }, note: { pl: '$\\gamma$ to kąt MIĘDZY bokami $a$ i $b$; wzór działa też dla kąta rozwartego.', en: '$\\gamma$ is the angle BETWEEN $a$ and $b$; works for obtuse angles too.' }, drill: true },
        { id: 'wzor-herona', tex: 'P=\\sqrt{p(p-a)(p-b)(p-c)},\\qquad p=\\frac{a+b+c}{2}', name: { pl: 'Wzór Herona', en: 'Heron’s formula' }, note: { pl: '$p$ to POŁOWA obwodu. Wybór przy trzech znanych bokach.', en: '$p$ is HALF the perimeter. The choice when all three sides are known.' }, drill: true },
        { id: 'pole-pr', tex: 'P=p\\,r', name: { pl: 'Pole a okrąg wpisany', en: 'Area via the incircle' }, note: { pl: 'Stąd $r=\\frac{P}{p}$ — standardowa droga do promienia okręgu wpisanego.', en: 'Hence $r=\\frac Pp$ — the standard route to the inradius.' }, drill: true },
        { id: 'pole-abc-4r', tex: 'P=\\frac{abc}{4R}', name: { pl: 'Pole a okrąg opisany', en: 'Area via the circumcircle' }, note: { pl: 'Stąd $R=\\frac{abc}{4P}$; wynika z $P=\\frac{1}{2}ab\\sin\\gamma$ i $\\sin\\gamma=\\frac{c}{2R}$.', en: 'Hence $R=\\frac{abc}{4P}$; follows from $P=\\frac12 ab\\sin\\gamma$ and $\\sin\\gamma=\\frac{c}{2R}$.' }, drill: true },
        { id: 'trojkat-rownoboczny', tex: 'P=\\frac{a^{2}\\sqrt{3}}{4},\\quad h=\\frac{a\\sqrt{3}}{2},\\quad R=2r=\\frac{a\\sqrt{3}}{3}', name: { pl: 'Trójkąt równoboczny', en: 'Equilateral triangle' }, note: { pl: 'Środek ciężkości dzieli wysokość w stosunku $2:1$, stąd $R=2r$.', en: 'The centroid splits the height $2:1$, hence $R=2r$.' }, drill: true },
        { id: 'prostokatny-r-R', tex: 'r=\\frac{a+b-c}{2},\\qquad R=\\frac{c}{2}', name: { pl: 'Promienie w trójkącie prostokątnym', en: 'Radii of a right triangle' }, note: { pl: 'Przeciwprostokątna jest średnicą okręgu opisanego (kąt wpisany oparty na średnicy).', en: 'The hypotenuse is a diameter of the circumcircle (angle in a semicircle).' }, drill: true },
      ],
      skills: [
        { id: 'pole-z-sinusem', title: { pl: 'Pole z sinusem', en: 'Area with a sine' }, levels: [2, 3] },
        { id: 'wzor-herona-uzycie', title: { pl: 'Wzór Herona', en: 'Using Heron’s formula' }, levels: [3, 4] },
        { id: 'okrag-w-trojkacie', title: { pl: 'Promienie okręgu wpisanego i opisanego', en: 'Inradius and circumradius' }, levels: [3, 4, 5] },
        { id: 'pole-strategia', title: { pl: 'Dobór i łączenie wzorów na pole', en: 'Choosing and combining area formulas' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'pola-trojkata-l2-01',
          skill: 'pole-z-sinusem',
          level: 2,
          prompt: { pl: 'Oblicz pole trójkąta o bokach $6$ i $8$, jeżeli kąt między nimi ma miarę $30^{\\circ}$.', en: 'Find the area of a triangle with sides $6$ and $8$ and included angle $30^{\\circ}$.' },
          answer: '12',
          accept: ['12'],
          solution: [
            { pl: '$P=\\frac{1}{2}\\cdot 6\\cdot 8\\cdot\\sin 30^{\\circ}$.', en: '$P=\\frac12\\cdot6\\cdot8\\cdot\\sin30^{\\circ}$.' },
            { pl: '$P=24\\cdot\\frac{1}{2}=12$.', en: '$P=24\\cdot\\frac12=12$.' },
          ],
          trap: { pl: 'Zgubienie $\\frac{1}{2}$ przed iloczynem albo wzięcie $\\cos 30^{\\circ}$ zamiast $\\sin 30^{\\circ}$ — oba błędy dają $24$ lub $12\\sqrt{3}$.', en: 'Dropping the $\\frac12$ or using $\\cos30^{\\circ}$ instead of $\\sin30^{\\circ}$ — giving $24$ or $12\\sqrt3$.' },
        },
        {
          id: 'pola-trojkata-l3-02',
          skill: 'wzor-herona-uzycie',
          level: 3,
          prompt: { pl: 'Oblicz pole trójkąta o bokach $13$, $14$, $15$.', en: 'Find the area of the triangle with sides $13$, $14$, $15$.' },
          answer: '84',
          accept: ['84'],
          solution: [
            { pl: 'Połowa obwodu: $p=\\frac{13+14+15}{2}=21$.', en: 'Semi-perimeter: $p=21$.' },
            { pl: 'Heron: $P=\\sqrt{21\\cdot(21-13)(21-14)(21-15)}=\\sqrt{21\\cdot 8\\cdot 7\\cdot 6}=\\sqrt{7056}=84$.', en: 'Heron: $P=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84$.' },
          ],
          trap: { pl: 'Wstawienie do wzoru całego obwodu $42$ zamiast połowy — $p$ w Heronie to zawsze półobwód.', en: 'Plugging the full perimeter $42$ instead of half — $p$ in Heron is always the semi-perimeter.' },
        },
        {
          id: 'pola-trojkata-l3-03',
          skill: 'okrag-w-trojkacie',
          level: 3,
          prompt: { pl: 'Przyprostokątne trójkąta prostokątnego mają długości $6$ i $8$. Oblicz promień okręgu wpisanego w ten trójkąt.', en: 'A right triangle has legs $6$ and $8$. Find the radius of its inscribed circle.' },
          answer: '2',
          accept: ['2'],
          solution: [
            { pl: 'Przeciwprostokątna: $c=\\sqrt{36+64}=10$.', en: 'Hypotenuse: $c=10$.' },
            { pl: 'Dla trójkąta prostokątnego $r=\\frac{a+b-c}{2}=\\frac{6+8-10}{2}=2$ (albo $r=\\frac{P}{p}=\\frac{24}{12}=2$).', en: 'For a right triangle $r=\\frac{a+b-c}{2}=2$ (or $r=\\frac Pp=\\frac{24}{12}=2$).' },
          ],
          trap: { pl: 'Pomylenie promieni: $R=\\frac{c}{2}=5$ to okrąg OPISANY; wpisany liczy się z $\\frac{a+b-c}{2}$ albo $\\frac{P}{p}$.', en: 'Confusing radii: $R=\\frac c2=5$ is the CIRCUMcircle; the incircle uses $\\frac{a+b-c}{2}$ or $\\frac Pp$.' },
        },
        {
          id: 'pola-trojkata-l4-04',
          skill: 'okrag-w-trojkacie',
          level: 4,
          prompt: { pl: 'Oblicz promień okręgu wpisanego w trójkąt o bokach $13$, $14$, $15$.', en: 'Find the inradius of the triangle with sides $13$, $14$, $15$.' },
          answer: '4',
          accept: ['4'],
          solution: [
            { pl: 'Z Herona (jak wyżej): $p=21$, $P=84$.', en: 'From Heron: $p=21$, $P=84$.' },
            { pl: '$r=\\frac{P}{p}=\\frac{84}{21}=4$.', en: '$r=\\frac Pp=\\frac{84}{21}=4$.' },
          ],
          trap: { pl: 'Dzielenie pola przez cały obwód ($\\frac{84}{42}=2$) — we wzorze $P=pr$ stoi półobwód.', en: 'Dividing the area by the full perimeter ($\\frac{84}{42}=2$) — $P=pr$ uses the semi-perimeter.' },
        },
        {
          id: 'pola-trojkata-l4-05',
          skill: 'okrag-w-trojkacie',
          level: 4,
          prompt: { pl: 'Oblicz promień okręgu opisanego na trójkącie o bokach $13$, $14$, $15$.', en: 'Find the circumradius of the triangle with sides $13$, $14$, $15$.' },
          answer: '\\frac{65}{8}',
          accept: ['65/8', '8{,}125', '8.125'],
          solution: [
            { pl: 'Pole z Herona: $P=84$.', en: 'Heron gives $P=84$.' },
            { pl: '$R=\\frac{abc}{4P}=\\frac{13\\cdot 14\\cdot 15}{4\\cdot 84}=\\frac{2730}{336}=\\frac{65}{8}$.', en: '$R=\\frac{abc}{4P}=\\frac{2730}{336}=\\frac{65}{8}$.' },
          ],
          trap: { pl: 'Zapomnienie czwórki w mianowniku: $\\frac{abc}{P}=\\frac{2730}{84}=32{,}5$ to cztery razy za dużo.', en: 'Forgetting the 4 in the denominator: $\\frac{abc}{P}=32.5$ is four times too big.' },
        },
        {
          id: 'pola-trojkata-l4-06',
          skill: 'okrag-w-trojkacie',
          level: 4,
          prompt: { pl: 'Trójkąt równoboczny jest wpisany w okrąg o promieniu $R=4$. Oblicz pole tego trójkąta.', en: 'An equilateral triangle is inscribed in a circle of radius $R=4$. Find its area.' },
          answer: '12\\sqrt{3}',
          accept: ['12\\sqrt{3}', '12sqrt(3)', '12√3'],
          solution: [
            { pl: 'Dla trójkąta równobocznego $R=\\frac{a\\sqrt{3}}{3}$, więc $a=R\\sqrt{3}=4\\sqrt{3}$.', en: 'For an equilateral triangle $R=\\frac{a\\sqrt3}{3}$, so $a=R\\sqrt3=4\\sqrt3$.' },
            { pl: '$P=\\frac{a^{2}\\sqrt{3}}{4}=\\frac{48\\sqrt{3}}{4}=12\\sqrt{3}$.', en: '$P=\\frac{a^{2}\\sqrt3}{4}=\\frac{48\\sqrt3}{4}=12\\sqrt3$.' },
          ],
          trap: { pl: 'Podstawienie $a=R$ — bok równy promieniowi okręgu opisanego to własność sześciokąta foremnego, nie trójkąta równobocznego.', en: 'Setting $a=R$ — side equal to circumradius is a property of the regular hexagon, not the equilateral triangle.' },
        },
        {
          id: 'pola-trojkata-l5-07',
          skill: 'pole-strategia',
          level: 5,
          prompt: { pl: 'W trójkącie dane są boki $a=7$, $b=8$ oraz kąt między nimi $\\gamma=120^{\\circ}$. Oblicz promień okręgu opisanego na tym trójkącie.', en: 'A triangle has sides $a=7$, $b=8$ with included angle $\\gamma=120^{\\circ}$. Find its circumradius.' },
          answer: '\\frac{13\\sqrt{3}}{3}',
          accept: ['13\\sqrt{3}/3', '13/\\sqrt{3}', '13sqrt(3)/3', '13√3/3'],
          solution: [
            { pl: 'Trzeci bok z twierdzenia cosinusów: $c^{2}=49+64-2\\cdot 56\\cos 120^{\\circ}=113+56=169$, więc $c=13$.', en: 'Cosine rule: $c^{2}=113-112\\cos120^{\\circ}=113+56=169$, so $c=13$.' },
            { pl: 'Twierdzenie sinusów: $2R=\\frac{c}{\\sin\\gamma}=\\frac{13}{\\sin 120^{\\circ}}=\\frac{13}{\\frac{\\sqrt{3}}{2}}=\\frac{26}{\\sqrt{3}}$.', en: 'Sine rule: $2R=\\frac{13}{\\sin120^{\\circ}}=\\frac{26}{\\sqrt3}$.' },
            { pl: '$R=\\frac{13}{\\sqrt{3}}=\\frac{13\\sqrt{3}}{3}$.', en: '$R=\\frac{13}{\\sqrt3}=\\frac{13\\sqrt3}{3}$.' },
          ],
          trap: { pl: '$\\cos 120^{\\circ}=-\\frac{1}{2}$, więc składnik $-2ab\\cos\\gamma$ DODAJE $56$; z błędnym znakiem wychodzi $c^{2}=57$ i cały wynik się sypie.', en: '$\\cos120^{\\circ}=-\\frac12$, so $-2ab\\cos\\gamma$ ADDS $56$; the wrong sign gives $c^{2}=57$ and everything collapses.' },
        },
        {
          id: 'pola-trojkata-l6-08',
          skill: 'pole-strategia',
          level: 6,
          prompt: { pl: 'W trójkąt prostokątny wpisano okrąg o promieniu $r=3$, a promień okręgu opisanego na tym trójkącie jest równy $R=\\frac{25}{2}$. Oblicz pole tego trójkąta.', en: 'A right triangle has inradius $r=3$ and circumradius $R=\\frac{25}{2}$. Find its area.' },
          answer: '84',
          accept: ['84'],
          solution: [
            { pl: 'W trójkącie prostokątnym przeciwprostokątna jest średnicą okręgu opisanego: $c=2R=25$.', en: 'In a right triangle the hypotenuse is a diameter: $c=2R=25$.' },
            { pl: 'Z $r=\\frac{a+b-c}{2}=3$ dostajemy $a+b=c+2r=31$; z Pitagorasa $a^{2}+b^{2}=625$.', en: 'From $r=\\frac{a+b-c}{2}=3$ we get $a+b=31$; Pythagoras gives $a^{2}+b^{2}=625$.' },
            { pl: '$ab=\\frac{(a+b)^{2}-(a^{2}+b^{2})}{2}=\\frac{961-625}{2}=168$.', en: '$ab=\\frac{(a+b)^{2}-(a^{2}+b^{2})}{2}=\\frac{961-625}{2}=168$.' },
            { pl: 'Pole: $P=\\frac{ab}{2}=84$.', en: 'Area: $P=\\frac{ab}{2}=84$.' },
          ],
          trap: { pl: 'Szukanie $a$ i $b$ osobno (wyjdą $7$ i $24$) jest niepotrzebne — pole wymaga tylko iloczynu $ab$, a ten wyciąga się z kwadratu sumy.', en: 'Solving for $a$ and $b$ individually ($7$ and $24$) is unnecessary — the area needs only $ab$, extracted from the squared sum.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'srodkowe-dwusieczne',
      title: { pl: 'Środkowe i dwusieczne', en: 'Medians and angle bisectors' },
      level: 4,
      prereq: ['pola-trojkata'],
      theory: {
        pl: 'Środkowa łączy wierzchołek ze środkiem przeciwległego boku; trzy środkowe przecinają się w jednym '
          + 'punkcie — środku ciężkości, który dzieli każdą z nich w stosunku $2:1$ licząc od wierzchołka. '
          + 'Środkowa dzieli trójkąt na dwa trójkąty o równych polach, a wszystkie trzy środkowe — na sześć '
          + 'trójkątów o równych polach. Długość środkowej: $m_{a}=\\frac{1}{2}\\sqrt{2b^{2}+2c^{2}-a^{2}}$; '
          + 'w trójkącie prostokątnym środkowa poprowadzona do przeciwprostokątnej ma długość $\\frac{c}{2}$, '
          + 'bo środek przeciwprostokątnej jest środkiem okręgu opisanego. Dwusieczne kątów przecinają się '
          + 'w środku okręgu wpisanego, a twierdzenie o dwusiecznej mówi, że dwusieczna z wierzchołka $C$ dzieli '
          + 'bok $AB$ w stosunku $|AD|:|DB|=|CA|:|CB|$. Symetralne boków przecinają się w środku okręgu '
          + 'opisanego — leży on wewnątrz trójkąta tylko wtedy, gdy trójkąt jest ostrokątny.',
        en: 'A median joins a vertex to the midpoint of the opposite side; the three medians meet at the '
          + 'centroid, which divides each of them $2:1$ measured from the vertex. A median splits the triangle '
          + 'into two triangles of equal area, and all three medians split it into six. Median length: '
          + '$m_a=\\frac12\\sqrt{2b^{2}+2c^{2}-a^{2}}$; in a right triangle the median to the hypotenuse equals '
          + '$\\frac c2$, since the hypotenuse’s midpoint is the circumcentre. The angle bisectors meet at the '
          + 'incentre, and the bisector theorem states that the bisector from $C$ divides side $AB$ in ratio '
          + '$|AD|:|DB|=|CA|:|CB|$. The perpendicular bisectors of the sides meet at the circumcentre — inside '
          + 'the triangle only when it is acute.',
      },
      formulas: [
        { id: 'srodkowe-2-1', tex: '|AS|:|SM|=2:1', name: { pl: 'Środek ciężkości dzieli środkową $2:1$', en: 'The centroid splits each median $2:1$' }, note: { pl: '$S$ — środek ciężkości, $M$ — środek boku; dłuższy kawałek od strony wierzchołka.', en: '$S$ — centroid, $M$ — side midpoint; the longer piece is at the vertex.' }, drill: true },
        { id: 'dlugosc-srodkowej', tex: 'm_{a}=\\frac{1}{2}\\sqrt{2b^{2}+2c^{2}-a^{2}}', name: { pl: 'Długość środkowej', en: 'Length of a median' }, note: { pl: 'Podwojone kwadraty boków SĄSIEDNICH minus kwadrat boku, do którego środkowa biegnie.', en: 'Twice the squares of the ADJACENT sides minus the square of the side the median meets.' }, drill: true },
        { id: 'tw-o-dwusiecznej', tex: '\\frac{|AD|}{|DB|}=\\frac{|CA|}{|CB|}', name: { pl: 'Twierdzenie o dwusiecznej', en: 'Angle bisector theorem' }, note: { pl: '$D$ — punkt przecięcia dwusiecznej z $C$ z bokiem $AB$: dzieli go w stosunku boków przyległych.', en: '$D$ — where the bisector from $C$ meets $AB$: it divides it in the ratio of the adjacent sides.' }, drill: true },
        { id: 'srodkowa-pola', tex: 'P_{\\triangle ABM}=P_{\\triangle ACM}=\\frac{1}{2}P_{\\triangle ABC}', name: { pl: 'Środkowa a pola', en: 'Medians and areas' }, note: { pl: 'Równe podstawy i wspólna wysokość; trzy środkowe dają sześć trójkątów o równych polach.', en: 'Equal bases, common height; the three medians give six triangles of equal area.' }, drill: true },
      ],
      skills: [
        { id: 'srodkowe-centroid', title: { pl: 'Środek ciężkości i własności środkowych', en: 'The centroid and median properties' }, levels: [2, 3] },
        { id: 'srodkowa-dlugosc', title: { pl: 'Długość środkowej', en: 'Median length' }, levels: [4] },
        { id: 'dwusieczna-tw-uzycie', title: { pl: 'Twierdzenie o dwusiecznej', en: 'Using the bisector theorem' }, levels: [3, 4, 5, 6] },
        { id: 'podzialy-pol', title: { pl: 'Podziały pól przez środkowe i dwusieczne', en: 'Area splits by medians and bisectors' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'srodkowe-dwusieczne-l2-01',
          skill: 'srodkowe-centroid',
          level: 2,
          prompt: { pl: 'Środkowa trójkąta ma długość $12$. Oblicz odległość wierzchołka, z którego wychodzi, od środka ciężkości trójkąta.', en: 'A median of a triangle has length $12$. Find the distance from its vertex to the centroid.' },
          answer: '8',
          accept: ['8'],
          solution: [
            { pl: 'Środek ciężkości dzieli środkową w stosunku $2:1$ od wierzchołka.', en: 'The centroid divides the median $2:1$ from the vertex.' },
            { pl: 'Odcinek przy wierzchołku: $\\frac{2}{3}\\cdot 12=8$.', en: 'The vertex piece: $\\frac23\\cdot12=8$.' },
          ],
          trap: { pl: 'Wzięcie $\\frac{1}{3}$ zamiast $\\frac{2}{3}$ — dłuższa część środkowej leży zawsze przy wierzchołku.', en: 'Taking $\\frac13$ instead of $\\frac23$ — the longer piece is always at the vertex.' },
        },
        {
          id: 'srodkowe-dwusieczne-l3-02',
          skill: 'dwusieczna-tw-uzycie',
          level: 3,
          prompt: { pl: 'W trójkącie $ABC$ dane są $|AB|=8$, $|AC|=6$, $|BC|=7$. Dwusieczna kąta $A$ przecina bok $BC$ w punkcie $D$. Oblicz $|BD|$.', en: 'In triangle $ABC$, $|AB|=8$, $|AC|=6$, $|BC|=7$. The bisector of angle $A$ meets $BC$ at $D$. Find $|BD|$.' },
          answer: '4',
          accept: ['4'],
          solution: [
            { pl: 'Twierdzenie o dwusiecznej: $\\frac{|BD|}{|DC|}=\\frac{|AB|}{|AC|}=\\frac{8}{6}=\\frac{4}{3}$.', en: 'Bisector theorem: $\\frac{|BD|}{|DC|}=\\frac{|AB|}{|AC|}=\\frac43$.' },
            { pl: '$|BD|+|DC|=7$ i $|BD|:|DC|=4:3$, więc $|BD|=7\\cdot\\frac{4}{7}=4$.', en: 'With $|BD|+|DC|=7$ in ratio $4:3$, $|BD|=4$.' },
          ],
          trap: { pl: 'Odwrócenie proporcji: $|BD|$ przylega do wierzchołka $B$, więc odpowiada bokowi $|AB|$, nie $|AC|$.', en: 'Inverting the ratio: $|BD|$ touches vertex $B$, so it corresponds to $|AB|$, not $|AC|$.' },
        },
        {
          id: 'srodkowe-dwusieczne-l3-03',
          skill: 'srodkowe-centroid',
          level: 3,
          prompt: { pl: 'Przyprostokątne trójkąta prostokątnego mają długości $6$ i $8$. Oblicz długość środkowej poprowadzonej do przeciwprostokątnej.', en: 'A right triangle has legs $6$ and $8$. Find the length of the median to the hypotenuse.' },
          answer: '5',
          accept: ['5'],
          solution: [
            { pl: 'Przeciwprostokątna: $c=\\sqrt{36+64}=10$.', en: 'Hypotenuse: $c=10$.' },
            { pl: 'Środek przeciwprostokątnej jest środkiem okręgu opisanego, więc środkowa do niej równa się promieniowi: $\\frac{c}{2}=5$.', en: 'The hypotenuse’s midpoint is the circumcentre, so this median equals the radius: $\\frac c2=5$.' },
          ],
          trap: { pl: 'Nie trzeba wzoru na długość środkowej — wystarczy własność: w trójkącie prostokątnym środkowa do przeciwprostokątnej to zawsze $\\frac{c}{2}$.', en: 'No median-length formula needed — in a right triangle the median to the hypotenuse is always $\\frac c2$.' },
        },
        {
          id: 'srodkowe-dwusieczne-l4-04',
          skill: 'srodkowa-dlugosc',
          level: 4,
          prompt: { pl: 'Boki trójkąta mają długości $4$, $7$ i $9$. Oblicz długość środkowej poprowadzonej do najdłuższego boku.', en: 'A triangle has sides $4$, $7$ and $9$. Find the length of the median to the longest side.' },
          answer: '\\frac{7}{2}',
          accept: ['7/2', '3{,}5', '3.5'],
          solution: [
            { pl: 'Środkowa do boku $a=9$ przy bokach $b=4$, $c=7$: $m=\\frac{1}{2}\\sqrt{2\\cdot 16+2\\cdot 49-81}$.', en: 'Median to $a=9$ with $b=4$, $c=7$: $m=\\frac12\\sqrt{2\\cdot16+2\\cdot49-81}$.' },
            { pl: '$m=\\frac{1}{2}\\sqrt{32+98-81}=\\frac{1}{2}\\sqrt{49}=\\frac{7}{2}$.', en: '$m=\\frac12\\sqrt{49}=\\frac72$.' },
          ],
          trap: { pl: 'Zgubienie $\\frac{1}{2}$ przed pierwiastkiem daje $7$; pod pierwiastkiem podwaja się boki SĄSIEDNIE, a odejmuje kwadrat boku docelowego.', en: 'Dropping the $\\frac12$ gives $7$; inside the root you double the ADJACENT sides and subtract the target side’s square.' },
        },
        {
          id: 'srodkowe-dwusieczne-l4-05',
          skill: 'podzialy-pol',
          level: 4,
          prompt: { pl: 'Pole trójkąta $ABC$ jest równe $36$, a $S$ jest jego środkiem ciężkości. Oblicz pole trójkąta $ABS$.', en: 'Triangle $ABC$ has area $36$ and centroid $S$. Find the area of triangle $ABS$.' },
          answer: '12',
          accept: ['12'],
          solution: [
            { pl: 'Środkowe dzielą trójkąt na sześć trójkątów o równych polach $\\frac{36}{6}=6$.', en: 'The medians split the triangle into six triangles of equal area $6$.' },
            { pl: 'Trójkąt $ABS$ składa się z dwóch z nich: $P_{ABS}=12$. Równoważnie: każdy z trójkątów $ABS$, $BCS$, $CAS$ ma pole $\\frac{1}{3}$ całości.', en: '$ABS$ consists of two of them: $P_{ABS}=12$. Equivalently each of $ABS$, $BCS$, $CAS$ has $\\frac13$ of the total.' },
          ],
          trap: { pl: 'Odpowiedź $\\frac{36}{2}=18$ lub $\\frac{36}{4}=9$ — środkowe wyznaczają przy wierzchołku $S$ trzy trójkąty, każdy o polu $\\frac{1}{3}$ całości.', en: 'Answering $18$ or $9$ — the medians create three triangles around $S$, each with $\\frac13$ of the area.' },
        },
        {
          id: 'srodkowe-dwusieczne-l5-06',
          skill: 'podzialy-pol',
          level: 5,
          prompt: { pl: 'W trójkącie $ABC$ dane są $|AC|=9$ i $|BC|=6$, a pole trójkąta wynosi $30$. Dwusieczna kąta $C$ przecina bok $AB$ w punkcie $D$. Oblicz pole trójkąta $ACD$.', en: 'In triangle $ABC$, $|AC|=9$, $|BC|=6$ and the area is $30$. The bisector of angle $C$ meets $AB$ at $D$. Find the area of triangle $ACD$.' },
          answer: '18',
          accept: ['18'],
          solution: [
            { pl: 'Z twierdzenia o dwusiecznej $\\frac{|AD|}{|DB|}=\\frac{|CA|}{|CB|}=\\frac{9}{6}=\\frac{3}{2}$.', en: 'Bisector theorem: $\\frac{|AD|}{|DB|}=\\frac96=\\frac32$.' },
            { pl: 'Trójkąty $ACD$ i $BCD$ mają wspólną wysokość z $C$ na $AB$, więc ich pola mają się jak podstawy: $3:2$.', en: 'Triangles $ACD$ and $BCD$ share the height from $C$, so their areas are as the bases: $3:2$.' },
            { pl: '$P_{ACD}=30\\cdot\\frac{3}{5}=18$.', en: '$P_{ACD}=30\\cdot\\frac35=18$.' },
          ],
          trap: { pl: 'Odruch „$k^{2}$" jest tu błędny: trójkąty $ACD$ i $BCD$ NIE są podobne — mają wspólną wysokość, więc pola dzielą się liniowo jak podstawy.', en: 'The "$k^{2}$" reflex is wrong here: $ACD$ and $BCD$ are NOT similar — they share a height, so areas split linearly with the bases.' },
        },
        {
          id: 'srodkowe-dwusieczne-l6-07',
          skill: 'dwusieczna-tw-uzycie',
          level: 6,
          prompt: { pl: 'W trójkącie prostokątnym przyprostokątne mają długości $6$ i $8$. Oblicz długość dwusiecznej poprowadzonej z wierzchołka kąta prostego do przeciwprostokątnej.', en: 'A right triangle has legs $6$ and $8$. Find the length of the bisector from the right angle to the hypotenuse.' },
          answer: '\\frac{24\\sqrt{2}}{7}',
          accept: ['24\\sqrt{2}/7', '24sqrt(2)/7', '24√2/7', '48/(7\\sqrt{2})'],
          solution: [
            { pl: 'Dwusieczna dzieli kąt prosty na dwa kąty po $45^{\\circ}$. Oznaczmy jej długość przez $d$.', en: 'The bisector splits the right angle into two $45^{\\circ}$ angles. Call its length $d$.' },
            { pl: 'Pole całości to suma pól po obu stronach dwusiecznej: $\\frac{1}{2}\\cdot 6\\cdot 8=\\frac{1}{2}\\cdot 6\\,d\\sin 45^{\\circ}+\\frac{1}{2}\\cdot 8\\,d\\sin 45^{\\circ}$.', en: 'The total area is the sum on both sides of the bisector: $24=\\frac12\\cdot6\\,d\\sin45^{\\circ}+\\frac12\\cdot8\\,d\\sin45^{\\circ}$.' },
            { pl: '$24=\\frac{\\sqrt{2}}{4}\\,d\\,(6+8)=\\frac{7\\sqrt{2}}{2}\\,d$, więc $d=\\frac{48}{7\\sqrt{2}}=\\frac{24\\sqrt{2}}{7}$.', en: '$24=\\frac{7\\sqrt2}{2}d$, so $d=\\frac{48}{7\\sqrt2}=\\frac{24\\sqrt2}{7}$.' },
          ],
          trap: { pl: 'Dwusieczna z kąta prostego NIE jest ani wysokością ($\\frac{24}{5}$), ani środkową ($5$) — rozbicie pola z kątami $45^{\\circ}$ to najkrótsza poprawna droga.', en: 'The bisector from the right angle is NEITHER the altitude ($\\frac{24}{5}$) nor the median ($5$) — splitting the area with $45^{\\circ}$ angles is the clean route.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'katy-w-okregu',
      title: { pl: 'Kąty w okręgu i potęga punktu', en: 'Circle angles and power of a point' },
      level: 4,
      prereq: ['przystawanie-podobienstwo'],
      theory: {
        pl: 'Kąt środkowy jest dwa razy większy od kąta wpisanego opartego na tym samym łuku; wszystkie kąty '
          + 'wpisane oparte na tym samym łuku są równe, a kąt wpisany oparty na średnicy jest prosty. Kąt między '
          + 'styczną a cięciwą (kąt dopisany) równa się kątowi wpisanemu opartemu na tej cięciwie po drugiej '
          + 'stronie. Styczna jest prostopadła do promienia w punkcie styczności, a dwie styczne poprowadzone '
          + 'z punktu zewnętrznego mają równe długości. Potęga punktu $P$ względem okręgu spina to wszystko '
          + 'w jeden rachunek: dla dwóch cięciw przechodzących przez $P$ zachodzi $|PA|\\cdot|PB|=|PC|\\cdot|PD|$, '
          + 'dla siecznej i stycznej z punktu zewnętrznego $|PT|^{2}=|PA|\\cdot|PB|$, a wspólna wartość tych '
          + 'iloczynów to $\\bigl||PO|^{2}-r^{2}\\bigr|$ — dla punktu wewnątrz okręgu potęga liczy się jako '
          + '$r^{2}-|PO|^{2}$. Wszystkie te równości to zamaskowane podobieństwo trójkątów z kątami wpisanymi.',
        en: 'A central angle is twice any inscribed angle on the same arc; inscribed angles on the same arc are '
          + 'equal, and an angle inscribed in a semicircle is right. The tangent–chord angle equals the inscribed '
          + 'angle on that chord from the other side. A tangent is perpendicular to the radius at the point of '
          + 'tangency, and two tangents from an external point have equal lengths. The power of a point ties it '
          + 'together: for two chords through $P$, $|PA|\\cdot|PB|=|PC|\\cdot|PD|$; for a secant and a tangent '
          + 'from an external point, $|PT|^{2}=|PA|\\cdot|PB|$; the common value is '
          + '$\\bigl||PO|^{2}-r^{2}\\bigr|$ — for an interior point compute $r^{2}-|PO|^{2}$. Every one of these '
          + 'identities is triangle similarity via inscribed angles in disguise.',
      },
      formulas: [
        { id: 'kat-srodkowy-wpisany', tex: '\\angle AOB = 2\\,\\angle ACB', name: { pl: 'Kąt środkowy i wpisany', en: 'Central and inscribed angle' }, note: { pl: 'Oba oparte na tym samym łuku $AB$; stąd równość kątów wpisanych na wspólnym łuku.', en: 'Both on the same arc $AB$; hence inscribed angles on a common arc are equal.' }, drill: true },
        { id: 'kat-na-srednicy', tex: 'AB\\ \\text{— średnica}\\ \\Rightarrow\\ \\angle ACB = 90^{\\circ}', name: { pl: 'Kąt wpisany oparty na średnicy', en: 'Angle in a semicircle' }, note: { pl: 'Przypadek szczególny: kąt środkowy $180^{\\circ}$. Działa też w drugą stronę — kąt prosty wpisany opiera się na średnicy.', en: 'Special case of a $180^{\\circ}$ central angle. Also in reverse — a right inscribed angle subtends a diameter.' }, drill: true },
        { id: 'kat-styczna-cieciwa', tex: '\\angle(\\text{styczna},AB) = \\angle ACB', name: { pl: 'Kąt między styczną a cięciwą', en: 'Tangent–chord angle' }, note: { pl: '$C$ leży na łuku PO DRUGIEJ stronie cięciwy $AB$ niż kąt dopisany.', en: '$C$ lies on the arc on the FAR side of chord $AB$ from the tangent–chord angle.' }, drill: true },
        { id: 'potega-punktu', tex: '|PA|\\cdot|PB| = |PC|\\cdot|PD| = \\bigl||PO|^{2}-r^{2}\\bigr|', name: { pl: 'Potęga punktu', en: 'Power of a point' }, note: { pl: 'Dla punktu wewnątrz okręgu wartość iloczynu to $r^{2}-|PO|^{2}$, dla zewnętrznego $|PO|^{2}-r^{2}$.', en: 'Inside the circle the product equals $r^{2}-|PO|^{2}$; outside, $|PO|^{2}-r^{2}$.' }, drill: true },
        { id: 'styczna-sieczna', tex: '|PT|^{2} = |PA|\\cdot|PB|', name: { pl: 'Styczna i sieczna z punktu zewnętrznego', en: 'Tangent–secant relation' }, note: { pl: '$|PA|$, $|PB|$ liczone OD $P$ do obu punktów przecięcia siecznej z okręgiem.', en: '$|PA|$, $|PB|$ measured FROM $P$ to both intersection points of the secant.' }, drill: true },
      ],
      skills: [
        { id: 'kat-wpisany-srodkowy', title: { pl: 'Kąt środkowy i wpisany', en: 'Central and inscribed angles' }, levels: [2, 3] },
        { id: 'styczna-cieciwa', title: { pl: 'Styczna, cięciwa i kąt dopisany', en: 'Tangents and the tangent–chord angle' }, levels: [3, 4, 5] },
        { id: 'potega-punktu-liczenie', title: { pl: 'Potęga punktu', en: 'Power of a point' }, levels: [3, 4, 5, 6] },
      ],
      problems: [
        {
          id: 'katy-w-okregu-l2-01',
          skill: 'kat-wpisany-srodkowy',
          level: 2,
          prompt: { pl: 'Kąt środkowy oparty na łuku $AB$ ma miarę $100^{\\circ}$. Oblicz miarę kąta wpisanego opartego na tym samym łuku.', en: 'A central angle on arc $AB$ measures $100^{\\circ}$. Find the inscribed angle on the same arc.' },
          answer: '50^{\\circ}',
          accept: ['50', '50°', '50 stopni'],
          solution: [
            { pl: 'Kąt wpisany oparty na tym samym łuku to połowa kąta środkowego: $\\frac{100^{\\circ}}{2}=50^{\\circ}$.', en: 'The inscribed angle is half the central angle: $50^{\\circ}$.' },
          ],
          trap: { pl: 'Podwojenie zamiast połowienia — to kąt ŚRODKOWY jest dwa razy większy od wpisanego, nie odwrotnie.', en: 'Doubling instead of halving — the CENTRAL angle is the double, not the inscribed one.' },
        },
        {
          id: 'katy-w-okregu-l2-02',
          skill: 'kat-wpisany-srodkowy',
          level: 2,
          prompt: { pl: 'Trójkąt $ABC$ jest wpisany w okrąg, przy czym bok $AB$ jest średnicą tego okręgu, a $\\angle BAC=35^{\\circ}$. Oblicz $\\angle ABC$.', en: 'Triangle $ABC$ is inscribed in a circle with $AB$ a diameter and $\\angle BAC=35^{\\circ}$. Find $\\angle ABC$.' },
          answer: '55^{\\circ}',
          accept: ['55', '55°', '55 stopni'],
          solution: [
            { pl: 'Kąt wpisany oparty na średnicy jest prosty: $\\angle ACB=90^{\\circ}$.', en: 'The angle in a semicircle is right: $\\angle ACB=90^{\\circ}$.' },
            { pl: 'Z sumy kątów trójkąta: $\\angle ABC=180^{\\circ}-90^{\\circ}-35^{\\circ}=55^{\\circ}$.', en: 'Angle sum: $\\angle ABC=180^{\\circ}-90^{\\circ}-35^{\\circ}=55^{\\circ}$.' },
          ],
          trap: { pl: 'Przeoczenie, że średnica wymusza kąt prosty przy $C$ — bez tej obserwacji zadanie wydaje się niedookreślone.', en: 'Missing that the diameter forces a right angle at $C$ — without it the problem looks underdetermined.' },
        },
        {
          id: 'katy-w-okregu-l3-03',
          skill: 'styczna-cieciwa',
          level: 3,
          prompt: { pl: 'Styczna do okręgu w punkcie $A$ tworzy z cięciwą $AB$ kąt $65^{\\circ}$. Oblicz miarę kąta środkowego opartego na cięciwie $AB$ (od strony kąta dopisanego).', en: 'A tangent at $A$ makes a $65^{\\circ}$ angle with chord $AB$. Find the central angle subtending $AB$ (on the tangent–chord side).' },
          answer: '130^{\\circ}',
          accept: ['130', '130°', '130 stopni'],
          solution: [
            { pl: 'Kąt między styczną a cięciwą równa się kątowi wpisanemu opartemu na $AB$ z drugiej strony: $65^{\\circ}$.', en: 'The tangent–chord angle equals the inscribed angle on $AB$ from the other side: $65^{\\circ}$.' },
            { pl: 'Kąt środkowy oparty na tym samym łuku jest dwa razy większy: $2\\cdot 65^{\\circ}=130^{\\circ}$.', en: 'The central angle is its double: $130^{\\circ}$.' },
          ],
          trap: { pl: 'Uznanie $65^{\\circ}$ od razu za kąt środkowy — kąt dopisany odpowiada kątowi WPISANEMU i dopiero jego podwojenie daje środkowy.', en: 'Taking $65^{\\circ}$ directly as the central angle — the tangent–chord angle matches the INSCRIBED angle; double it for the central one.' },
        },
        {
          id: 'katy-w-okregu-l3-04',
          skill: 'potega-punktu-liczenie',
          level: 3,
          prompt: { pl: 'Cięciwy $AB$ i $CD$ okręgu przecinają się w punkcie $P$, przy czym $|PA|=3$, $|PB|=8$, $|PC|=4$. Oblicz $|PD|$.', en: 'Chords $AB$ and $CD$ of a circle meet at $P$, with $|PA|=3$, $|PB|=8$, $|PC|=4$. Find $|PD|$.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Potęga punktu $P$: $|PA|\\cdot|PB|=|PC|\\cdot|PD|$.', en: 'Power of the point: $|PA|\\cdot|PB|=|PC|\\cdot|PD|$.' },
            { pl: '$3\\cdot 8=4\\cdot|PD|$, więc $|PD|=6$.', en: '$24=4|PD|$, so $|PD|=6$.' },
          ],
          trap: { pl: 'Zapisanie proporcji $\\frac{|PA|}{|PB|}=\\frac{|PC|}{|PD|}$ — w potędze punktu odcinki się MNOŻY, nie dzieli.', en: 'Writing $\\frac{|PA|}{|PB|}=\\frac{|PC|}{|PD|}$ — the segments MULTIPLY, they are not a ratio.' },
        },
        {
          id: 'katy-w-okregu-l4-05',
          skill: 'potega-punktu-liczenie',
          level: 4,
          prompt: { pl: 'Z punktu $P$ leżącego na zewnątrz okręgu poprowadzono styczną (punkt styczności $T$) oraz sieczną przecinającą okrąg w punktach $A$ i $B$, przy czym $|PA|=4$ i $|AB|=5$. Oblicz $|PT|$.', en: 'From an external point $P$ a tangent (touching at $T$) and a secant through $A$ and $B$ are drawn, with $|PA|=4$ and $|AB|=5$. Find $|PT|$.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Odległość od $P$ do dalszego przecięcia: $|PB|=|PA|+|AB|=9$.', en: 'Distance to the far intersection: $|PB|=4+5=9$.' },
            { pl: '$|PT|^{2}=|PA|\\cdot|PB|=4\\cdot 9=36$, więc $|PT|=6$.', en: '$|PT|^{2}=36$, so $|PT|=6$.' },
          ],
          trap: { pl: 'Wstawienie $|AB|=5$ zamiast $|PB|=9$ — w potędze punktu obie odległości liczy się OD $P$, do bliższego i dalszego przecięcia.', en: 'Using $|AB|=5$ instead of $|PB|=9$ — both distances are measured FROM $P$ to the near and far intersections.' },
        },
        {
          id: 'katy-w-okregu-l5-06',
          skill: 'styczna-cieciwa',
          level: 5,
          prompt: { pl: 'Z punktu $P$ poprowadzono dwie styczne do okręgu o środku $O$, styczne w punktach $A$ i $B$. Kąt między stycznymi ma miarę $50^{\\circ}$. Oblicz miarę kąta wpisanego opartego na cięciwie $AB$ od strony dłuższego łuku.', en: 'Two tangents from $P$ touch a circle with centre $O$ at $A$ and $B$; the angle between them is $50^{\\circ}$. Find the inscribed angle on chord $AB$ from the major arc.' },
          answer: '65^{\\circ}',
          accept: ['65', '65°', '65 stopni'],
          solution: [
            { pl: 'Promienie $OA$ i $OB$ są prostopadłe do stycznych, więc w czworokącie $PAOB$: $\\angle AOB=360^{\\circ}-90^{\\circ}-90^{\\circ}-50^{\\circ}=130^{\\circ}$.', en: 'Radii are perpendicular to tangents, so in quadrilateral $PAOB$: $\\angle AOB=360^{\\circ}-90^{\\circ}-90^{\\circ}-50^{\\circ}=130^{\\circ}$.' },
            { pl: 'Kąt wpisany oparty na $AB$ z dłuższego łuku to połowa kąta środkowego: $\\frac{130^{\\circ}}{2}=65^{\\circ}$.', en: 'The inscribed angle from the major arc is half the central angle: $65^{\\circ}$.' },
          ],
          trap: { pl: 'Połowienie kąta $50^{\\circ}$ między stycznymi — najpierw trzeba przejść przez czworokąt $PAOB$ do kąta środkowego $130^{\\circ}$.', en: 'Halving the $50^{\\circ}$ between the tangents — first pass through quadrilateral $PAOB$ to get the $130^{\\circ}$ central angle.' },
        },
        {
          id: 'katy-w-okregu-l5-07',
          skill: 'potega-punktu-liczenie',
          level: 5,
          prompt: { pl: 'Punkt $P$ leży w odległości $13$ od środka okręgu o promieniu $5$. Prosta przechodząca przez $P$ przecina okrąg w punktach $A$ i $B$. Oblicz $|PA|\\cdot|PB|$.', en: 'Point $P$ lies at distance $13$ from the centre of a circle of radius $5$. A line through $P$ meets the circle at $A$ and $B$. Compute $|PA|\\cdot|PB|$.' },
          answer: '144',
          accept: ['144'],
          solution: [
            { pl: 'Iloczyn nie zależy od wyboru prostej — to potęga punktu: $|PA|\\cdot|PB|=|PO|^{2}-r^{2}$.', en: 'The product is independent of the line — it is the power of the point: $|PO|^{2}-r^{2}$.' },
            { pl: '$169-25=144$. Kontrola prostą przez środek: $(13-5)(13+5)=8\\cdot 18=144$.', en: '$169-25=144$. Check with the line through the centre: $8\\cdot18=144$.' },
          ],
          trap: { pl: 'Policzenie $(13-5)^{2}=64$ — potęga to $(d-r)(d+r)=d^{2}-r^{2}$, iloczyn odległości do OBU przecięć, a nie kwadrat najbliższej.', en: 'Computing $(13-5)^{2}=64$ — the power is $(d-r)(d+r)=d^{2}-r^{2}$, the product of distances to BOTH intersections.' },
        },
        {
          id: 'katy-w-okregu-l6-08',
          skill: 'potega-punktu-liczenie',
          level: 6,
          prompt: { pl: 'Cięciwa $AB$ okręgu ma długość $16$. Punkt $P$ leży na tej cięciwie, przy czym $|AP|=4$, a odległość punktu $P$ od środka okręgu wynosi $6$. Oblicz promień okręgu.', en: 'Chord $AB$ of a circle has length $16$. Point $P$ lies on it with $|AP|=4$, and $P$ is at distance $6$ from the centre. Find the radius.' },
          answer: '2\\sqrt{21}',
          accept: ['2\\sqrt{21}', '2sqrt(21)', '2√21', '\\sqrt{84}'],
          solution: [
            { pl: '$|PB|=16-4=12$. Dla punktu WEWNĄTRZ okręgu potęga daje $|PA|\\cdot|PB|=r^{2}-|PO|^{2}$.', en: '$|PB|=12$. For an INTERIOR point the power gives $|PA|\\cdot|PB|=r^{2}-|PO|^{2}$.' },
            { pl: '$4\\cdot 12=r^{2}-36$, więc $r^{2}=84$.', en: '$48=r^{2}-36$, so $r^{2}=84$.' },
            { pl: '$r=\\sqrt{84}=2\\sqrt{21}$.', en: '$r=\\sqrt{84}=2\\sqrt{21}$.' },
          ],
          trap: { pl: 'Użycie $|PO|^{2}-r^{2}$ jak dla punktu zewnętrznego — dla punktu wewnątrz okręgu iloczyn odcinków cięciwy równa się $r^{2}-|PO|^{2}$, inaczej wychodzi $r^{2}=-12$.', en: 'Using $|PO|^{2}-r^{2}$ as for an external point — inside the circle the chord product equals $r^{2}-|PO|^{2}$; otherwise $r^{2}=-12$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'czworokaty-wielokaty',
      title: { pl: 'Czworokąty w okręgu i wielokąty foremne', en: 'Quadrilaterals in circles and regular polygons' },
      level: 5,
      prereq: ['katy-w-okregu'],
      theory: {
        pl: 'Czworokąt można wpisać w okrąg wtedy i tylko wtedy, gdy sumy jego przeciwległych kątów są równe '
          + '$180^{\\circ}$; można na nim opisać okrąg (czyli wpisać okrąg w czworokąt) wtedy i tylko wtedy, gdy '
          + 'sumy długości przeciwległych boków są równe: $a+c=b+d$. Stąd natychmiast: trapez wpisany w okrąg '
          + 'musi być równoramienny, a romb zawsze ma okrąg wpisany. W czworokącie wpisanym cosinus kąta '
          + 'przeciwległego jest przeciwny: $\\cos\\delta=-\\cos\\beta$, co pozwala liczyć przekątne dwoma '
          + 'twierdzeniami cosinusów. Wielokąt foremny o $n$ bokach ma kąt wewnętrzny '
          + '$\\frac{(n-2)\\cdot 180^{\\circ}}{n}$ i kąt środkowy $\\frac{360^{\\circ}}{n}$; ma zarazem okrąg '
          + 'opisany o promieniu $R$ i wpisany o promieniu $r$, a jego pole to $\\frac{1}{2}nR^{2}\\sin\\frac{360^{\\circ}}{n}$ '
          + 'lub równoważnie $\\frac{1}{2}nar$. Sześciokąt foremny rozpada się na sześć trójkątów równobocznych, '
          + 'więc jego bok równa się promieniowi okręgu opisanego.',
        en: 'A quadrilateral is cyclic iff its opposite angles sum to $180^{\\circ}$; it has an inscribed circle '
          + 'iff the sums of opposite sides agree: $a+c=b+d$. Immediate consequences: a trapezoid inscribed in a '
          + 'circle must be isosceles, and a rhombus always has an incircle. In a cyclic quadrilateral opposite '
          + 'angles have opposite cosines, $\\cos\\delta=-\\cos\\beta$, which lets you compute diagonals with two '
          + 'cosine rules. A regular $n$-gon has interior angle $\\frac{(n-2)\\cdot 180^{\\circ}}{n}$ and central '
          + 'angle $\\frac{360^{\\circ}}{n}$; it has both a circumradius $R$ and an inradius $r$, and its area is '
          + '$\\frac12 nR^{2}\\sin\\frac{360^{\\circ}}{n}$, equivalently $\\frac12 nar$. A regular hexagon splits '
          + 'into six equilateral triangles, so its side equals its circumradius.',
      },
      formulas: [
        { id: 'warunek-czworokata-wpisanego', tex: '\\alpha+\\gamma=\\beta+\\delta=180^{\\circ}', name: { pl: 'Warunek wpisania czworokąta w okrąg', en: 'Cyclic quadrilateral condition' }, note: { pl: 'Równoważność: sumują się kąty PRZECIWLEGŁE. Test i narzędzie dowodowe zarazem.', en: 'An equivalence: OPPOSITE angles sum to $180^{\\circ}$. Both a test and a proof tool.' }, drill: true },
        { id: 'warunek-czworokata-opisanego', tex: 'a+c=b+d', name: { pl: 'Warunek opisania czworokąta na okręgu', en: 'Tangential quadrilateral condition' }, note: { pl: 'Sumy przeciwległych boków równe — z równości odcinków stycznych z jednego punktu.', en: 'Opposite side sums agree — from equal tangent segments at each vertex.' }, drill: true },
        { id: 'kat-wielokata-foremnego', tex: '\\alpha_{n}=\\frac{(n-2)\\cdot 180^{\\circ}}{n}=180^{\\circ}-\\frac{360^{\\circ}}{n}', name: { pl: 'Kąt wewnętrzny wielokąta foremnego', en: 'Interior angle of a regular polygon' }, note: { pl: 'Druga postać (przez kąt zewnętrzny $\\frac{360^{\\circ}}{n}$) najszybciej odzyskuje $n$ z kąta.', en: 'The second form (exterior angle $\\frac{360^{\\circ}}{n}$) recovers $n$ from the angle fastest.' }, drill: true },
        { id: 'pole-wielokata-foremnego', tex: 'P=\\frac{1}{2}\\,nR^{2}\\sin\\frac{360^{\\circ}}{n}=\\frac{1}{2}\\,n\\,a\\,r', name: { pl: 'Pole wielokąta foremnego', en: 'Area of a regular polygon' }, note: { pl: '$n$ trójkątów równoramiennych o ramieniu $R$; druga postać to $\\frac{1}{2}\\cdot$obwód$\\cdot r$.', en: '$n$ isosceles triangles with legs $R$; the second form is $\\frac12\\cdot$perimeter$\\cdot r$.' }, drill: true },
        { id: 'szesciokat-foremny', tex: 'a=R,\\qquad P=\\frac{3a^{2}\\sqrt{3}}{2}', name: { pl: 'Sześciokąt foremny', en: 'Regular hexagon' }, note: { pl: 'Sześć trójkątów równobocznych o boku $a$; apotema $r=\\frac{a\\sqrt{3}}{2}$.', en: 'Six equilateral triangles of side $a$; apothem $r=\\frac{a\\sqrt3}{2}$.' }, drill: true },
      ],
      skills: [
        { id: 'czworokat-wpisany-uzycie', title: { pl: 'Czworokąt wpisany w okrąg', en: 'Cyclic quadrilaterals' }, levels: [2, 3] },
        { id: 'czworokat-opisany-uzycie', title: { pl: 'Czworokąt opisany na okręgu', en: 'Tangential quadrilaterals' }, levels: [3, 4, 5] },
        { id: 'wielokaty-foremne-uzycie', title: { pl: 'Wielokąty foremne', en: 'Regular polygons' }, levels: [3, 4, 5] },
        { id: 'czworokaty-lacznie', title: { pl: 'Czworokąty w okręgu — zadania łączone', en: 'Cyclic quadrilaterals — combined problems' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'czworokaty-wielokaty-l2-01',
          skill: 'czworokat-wpisany-uzycie',
          level: 2,
          prompt: { pl: 'Czworokąt $ABCD$ jest wpisany w okrąg, przy czym $\\angle A=75^{\\circ}$ i $\\angle B=110^{\\circ}$. Oblicz $\\angle C$.', en: 'Quadrilateral $ABCD$ is cyclic with $\\angle A=75^{\\circ}$ and $\\angle B=110^{\\circ}$. Find $\\angle C$.' },
          answer: '105^{\\circ}',
          accept: ['105', '105°', '105 stopni'],
          solution: [
            { pl: 'W czworokącie wpisanym sumują się kąty przeciwległe: $\\angle A+\\angle C=180^{\\circ}$.', en: 'In a cyclic quadrilateral opposite angles sum to $180^{\\circ}$.' },
            { pl: '$\\angle C=180^{\\circ}-75^{\\circ}=105^{\\circ}$.', en: '$\\angle C=180^{\\circ}-75^{\\circ}=105^{\\circ}$.' },
          ],
          trap: { pl: 'Odejmowanie od $180^{\\circ}$ kąta SĄSIEDNIEGO ($110^{\\circ}$) — warunek dotyczy wyłącznie kątów przeciwległych.', en: 'Subtracting the ADJACENT angle ($110^{\\circ}$) from $180^{\\circ}$ — the condition binds opposite angles only.' },
        },
        {
          id: 'czworokaty-wielokaty-l3-02',
          skill: 'czworokat-opisany-uzycie',
          level: 3,
          prompt: { pl: 'Czworokąt o bokach $a=7$, $b=9$, $c=12$, $d$ (w tej kolejności) jest opisany na okręgu. Oblicz $d$.', en: 'A quadrilateral with consecutive sides $a=7$, $b=9$, $c=12$, $d$ is circumscribed about a circle. Find $d$.' },
          answer: '10',
          accept: ['10'],
          solution: [
            { pl: 'Warunek opisania: $a+c=b+d$.', en: 'Tangential condition: $a+c=b+d$.' },
            { pl: '$7+12=9+d$, więc $d=10$.', en: '$19=9+d$, so $d=10$.' },
          ],
          trap: { pl: 'Parowanie boków sąsiednich ($a+b=c+d$ daje $d=4$) — sumują się boki PRZECIWLEGŁE, czyli pierwszy z trzecim.', en: 'Pairing adjacent sides ($a+b=c+d$ gives $4$) — OPPOSITE sides sum, first with third.' },
        },
        {
          id: 'czworokaty-wielokaty-l3-03',
          skill: 'wielokaty-foremne-uzycie',
          level: 3,
          prompt: { pl: 'Kąt wewnętrzny wielokąta foremnego ma miarę $144^{\\circ}$. Wyznacz liczbę boków tego wielokąta.', en: 'The interior angle of a regular polygon measures $144^{\\circ}$. Find the number of sides.' },
          answer: '10',
          accept: ['10', 'n=10'],
          solution: [
            { pl: 'Kąt zewnętrzny: $180^{\\circ}-144^{\\circ}=36^{\\circ}$.', en: 'Exterior angle: $180^{\\circ}-144^{\\circ}=36^{\\circ}$.' },
            { pl: 'Kąty zewnętrzne sumują się do $360^{\\circ}$: $n=\\frac{360^{\\circ}}{36^{\\circ}}=10$.', en: 'Exterior angles total $360^{\\circ}$: $n=\\frac{360}{36}=10$.' },
          ],
          trap: { pl: 'Pomylenie kąta wewnętrznego ze środkowym: $\\frac{360^{\\circ}}{n}=144^{\\circ}$ daje $n=2{,}5$ — sygnał, że wzory się pomieszały.', en: 'Confusing interior with central angle: $\\frac{360}{n}=144$ gives $n=2.5$ — a sign the formulas got mixed.' },
        },
        {
          id: 'czworokaty-wielokaty-l3-04',
          skill: 'czworokat-wpisany-uzycie',
          level: 3,
          prompt: { pl: 'Trapez $ABCD$ o podstawach $AB$ i $CD$ jest wpisany w okrąg, przy czym $\\angle A=70^{\\circ}$. Oblicz pozostałe kąty trapezu.', en: 'Trapezoid $ABCD$ with parallel sides $AB$ and $CD$ is inscribed in a circle, and $\\angle A=70^{\\circ}$. Find the remaining angles.' },
          answer: '\\angle B=70^{\\circ},\\ \\angle C=\\angle D=110^{\\circ}',
          accept: ['70, 110, 110', 'B=70, C=110, D=110'],
          solution: [
            { pl: 'Z równoległości $AB\\parallel CD$: $\\angle A+\\angle D=180^{\\circ}$, więc $\\angle D=110^{\\circ}$.', en: 'From $AB\\parallel CD$: $\\angle A+\\angle D=180^{\\circ}$, so $\\angle D=110^{\\circ}$.' },
            { pl: 'Z wpisania w okrąg: $\\angle B+\\angle D=180^{\\circ}$, więc $\\angle B=70^{\\circ}$, a $\\angle C=180^{\\circ}-\\angle A=110^{\\circ}$.', en: 'Cyclic condition: $\\angle B=70^{\\circ}$ and $\\angle C=110^{\\circ}$.' },
            { pl: 'Kąty przy każdej podstawie są równe — trapez wpisany w okrąg musi być równoramienny.', en: 'Base angles are equal — a cyclic trapezoid must be isosceles.' },
          ],
          trap: { pl: 'Równoramienności nie wolno założyć z góry — ona WYNIKA z połączenia warunku wpisania z równoległością podstaw.', en: 'Do not assume the trapezoid is isosceles — it FOLLOWS from combining the cyclic condition with the parallel bases.' },
        },
        {
          id: 'czworokaty-wielokaty-l4-05',
          skill: 'wielokaty-foremne-uzycie',
          level: 4,
          prompt: { pl: 'Obwód sześciokąta foremnego jest równy $24$. Oblicz jego pole.', en: 'A regular hexagon has perimeter $24$. Find its area.' },
          answer: '24\\sqrt{3}',
          accept: ['24\\sqrt{3}', '24sqrt(3)', '24√3'],
          solution: [
            { pl: 'Bok: $a=\\frac{24}{6}=4$.', en: 'Side: $a=4$.' },
            { pl: 'Sześciokąt foremny to sześć trójkątów równobocznych: $P=6\\cdot\\frac{4^{2}\\sqrt{3}}{4}=24\\sqrt{3}$.', en: 'Six equilateral triangles: $P=6\\cdot\\frac{16\\sqrt3}{4}=24\\sqrt3$.' },
          ],
          trap: { pl: 'Wzór $\\frac{3a^{2}\\sqrt{3}}{2}$ łatwo przekręcić — bezpieczniej złożyć sześciokąt z sześciu trójkątów równobocznych o boku $a$.', en: 'The formula $\\frac{3a^{2}\\sqrt3}{2}$ is easy to garble — safer to assemble six equilateral triangles of side $a$.' },
        },
        {
          id: 'czworokaty-wielokaty-l5-06',
          skill: 'wielokaty-foremne-uzycie',
          level: 5,
          prompt: { pl: 'Oblicz pole dwunastokąta foremnego wpisanego w okrąg o promieniu $2$.', en: 'Find the area of a regular $12$-gon inscribed in a circle of radius $2$.' },
          answer: '12',
          accept: ['12'],
          solution: [
            { pl: 'Dwanaście trójkątów równoramiennych o ramionach $R=2$ i kącie środkowym $\\frac{360^{\\circ}}{12}=30^{\\circ}$.', en: 'Twelve isosceles triangles with legs $R=2$ and apex angle $30^{\\circ}$.' },
            { pl: '$P=12\\cdot\\frac{1}{2}R^{2}\\sin 30^{\\circ}=12\\cdot\\frac{1}{2}\\cdot 4\\cdot\\frac{1}{2}=12$.', en: '$P=12\\cdot\\frac12\\cdot4\\cdot\\frac12=12$.' },
          ],
          trap: { pl: 'Pole $\\pi R^{2}\\approx 12{,}57$ jest tuż obok — wynik większy od pola koła oznacza błąd; tu liczy się $\\sin$ kąta środkowego, nie $\\operatorname{tg}$.', en: 'The circle’s area $\\pi R^{2}\\approx12.57$ sits just above — an answer exceeding it signals an error; the formula takes $\\sin$ of the central angle, not $\\operatorname{tg}$.' },
        },
        {
          id: 'czworokaty-wielokaty-l5-07',
          skill: 'czworokat-opisany-uzycie',
          level: 5,
          prompt: { pl: 'Trapez równoramienny o podstawach długości $8$ i $18$ jest opisany na okręgu. Oblicz promień tego okręgu.', en: 'An isosceles trapezoid with parallel sides $8$ and $18$ is circumscribed about a circle. Find the radius of the circle.' },
          answer: '6',
          accept: ['6'],
          solution: [
            { pl: 'Z warunku opisania $a+c=b+d$: suma ramion $=8+18=26$, więc każde ramię ma $13$.', en: 'Tangential condition: the legs sum to $8+18=26$, so each leg is $13$.' },
            { pl: 'Rzut ramienia na podstawę: $\\frac{18-8}{2}=5$, więc wysokość $h=\\sqrt{13^{2}-5^{2}}=12$.', en: 'Horizontal projection of a leg: $5$, so the height is $h=\\sqrt{169-25}=12$.' },
            { pl: 'Okrąg wpisany dotyka obu podstaw, więc $2r=h$, czyli $r=6$.', en: 'The incircle touches both parallel sides, so $2r=h$ and $r=6$.' },
          ],
          trap: { pl: 'Podanie $r=h=12$ — średnica, nie promień, równa się odległości między podstawami.', en: 'Answering $r=h=12$ — it is the DIAMETER that equals the distance between the parallel sides.' },
        },
        {
          id: 'czworokaty-wielokaty-l6-08',
          skill: 'czworokaty-lacznie',
          level: 6,
          prompt: { pl: 'Czworokąt $ABCD$ o bokach $|AB|=1$, $|BC|=7$, $|CD|=5$, $|DA|=5$ jest wpisany w okrąg. Oblicz promień tego okręgu.', en: 'Quadrilateral $ABCD$ with $|AB|=1$, $|BC|=7$, $|CD|=5$, $|DA|=5$ is inscribed in a circle. Find the radius.' },
          answer: '\\frac{5\\sqrt{2}}{2}',
          accept: ['5\\sqrt{2}/2', '5sqrt(2)/2', '5√2/2', '\\frac{5}{\\sqrt{2}}'],
          solution: [
            { pl: 'Przekątna $AC$ z twierdzenia cosinusów w $\\triangle ABC$: $|AC|^{2}=1+49-14\\cos\\beta$, a w $\\triangle ACD$: $|AC|^{2}=25+25-50\\cos\\delta$.', en: 'Diagonal $AC$ by the cosine rule in $\\triangle ABC$: $|AC|^{2}=50-14\\cos\\beta$; in $\\triangle ACD$: $|AC|^{2}=50-50\\cos\\delta$.' },
            { pl: 'W czworokącie wpisanym $\\delta=180^{\\circ}-\\beta$, więc $\\cos\\delta=-\\cos\\beta$: $50-14\\cos\\beta=50+50\\cos\\beta$.', en: 'Cyclic: $\\cos\\delta=-\\cos\\beta$, so $50-14\\cos\\beta=50+50\\cos\\beta$.' },
            { pl: 'Stąd $\\cos\\beta=0$, czyli $\\beta=90^{\\circ}$ — kąt wpisany prosty opiera się na średnicy, więc $AC$ jest średnicą: $|AC|=\\sqrt{50}=5\\sqrt{2}$.', en: 'Hence $\\beta=90^{\\circ}$ — a right inscribed angle subtends a diameter, so $AC$ is a diameter of length $5\\sqrt2$.' },
            { pl: '$R=\\frac{|AC|}{2}=\\frac{5\\sqrt{2}}{2}$.', en: '$R=\\frac{5\\sqrt2}{2}$.' },
          ],
          trap: { pl: 'Nie wolno zgadnąć, że $AC$ to średnica — dopiero układ dwóch twierdzeń cosinusów z $\\cos\\delta=-\\cos\\beta$ wymusza $\\beta=90^{\\circ}$ i to uzasadnia.', en: 'Do not guess that $AC$ is a diameter — only the two cosine rules with $\\cos\\delta=-\\cos\\beta$ force $\\beta=90^{\\circ}$ and justify it.' },
        },
      ],
    },
  ],
};
