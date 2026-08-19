// Stereometria — bryły, kąty w przestrzeni, przekroje, wpisywanie w kulę.
export default {
  id: 'stereometria',
  track: 'matura',
  order: 80,
  title: { pl: 'Stereometria', en: 'Solid geometry' },
  blurb: {
    pl: 'Graniastosłupy, ostrosłupy i bryły obrotowe; kąty w przestrzeni, przekroje i bryły wpisane.',
    en: 'Prisms, pyramids and solids of revolution; angles in space, cross-sections, inscribed solids.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'bryly-objetosci',
      title: { pl: 'Objętości i pola brył', en: 'Volumes and surface areas' },
      level: 3,
      prereq: [],
      theory: {
        pl: 'Dwie rodziny wzorów. Bryły „prostopadłe”: graniastosłup i walec mają $V = P_p \\cdot H$ — '
          + 'pole podstawy razy wysokość. Bryły „zbiegające do punktu”: ostrosłup i stożek mają '
          + '$V = \\frac{1}{3}P_p H$ — ta sama zasada z czynnikiem $\\frac13$. Kula stoi osobno: '
          + '$V=\\frac43\\pi R^3$, $S=4\\pi R^2$. W polach powierzchni bocznych stożka występuje tworząca '
          + '$l=\\sqrt{r^2+H^2}$, nie wysokość — mylenie ich to najczęstszy błąd działu. Wysokość w '
          + 'ostrosłupie prawidłowym spada na środek podstawy i z krawędzią lub ścianą boczną tworzy '
          + 'trójkąt prostokątny, w którym rozgrywa się większość zadań.',
        en: 'Two families: prisms and cylinders have $V = P_p H$; pyramids and cones the same with a '
          + 'factor $\\frac13$. The sphere stands apart. The cone\'s lateral surface uses the slant '
          + '$l=\\sqrt{r^2+H^2}$, not the height — confusing them is the classic error. In a right pyramid '
          + 'the height meets the base centre, and the right triangle it forms with an edge or a face is '
          + 'where most problems are actually solved.',
      },
      formulas: [
        { id: 'v-graniastoslup', tex: 'V = P_{p}\\cdot H', name: { pl: 'Objętość graniastosłupa i walca', en: 'Volume of a prism / cylinder' }, note: { pl: 'Dla walca $P_p=\\pi r^2$, więc $V=\\pi r^2 H$.', en: 'For a cylinder $V=\\pi r^2H$.' }, drill: true },
        { id: 'v-ostroslup', tex: 'V = \\frac{1}{3}P_{p}\\cdot H', name: { pl: 'Objętość ostrosłupa i stożka', en: 'Volume of a pyramid / cone' }, note: { pl: 'Dla stożka $V=\\frac13\\pi r^2H$. Czynnik $\\frac13$ ginie najczęściej ze wszystkich.', en: 'For a cone $V=\\frac13\\pi r^2H$. The $\\frac13$ is the most-lost factor.' }, drill: true },
        { id: 'v-kula', tex: 'V = \\frac{4}{3}\\pi R^{3},\\qquad S = 4\\pi R^{2}', name: { pl: 'Kula: objętość i pole', en: 'Sphere: volume and surface' }, note: { pl: 'Warto pamiętać, że $S = V\'(R)$ — pochodna objętości po promieniu.', en: 'Note $S=V\'(R)$ — the derivative of volume in the radius.' }, drill: true },
        { id: 's-walec', tex: 'S_{b} = 2\\pi r H,\\qquad S_{c} = 2\\pi r(r+H)', name: { pl: 'Pola walca', en: 'Cylinder surfaces' }, note: { pl: 'Pobocznica to rozwinięty prostokąt $2\\pi r \\times H$.', en: 'The lateral face unrolls to a $2\\pi r\\times H$ rectangle.' }, drill: true },
        { id: 's-stozek', tex: 'S_{b} = \\pi r l,\\qquad l = \\sqrt{r^{2}+H^{2}}', name: { pl: 'Pobocznica stożka i tworząca', en: 'Cone lateral surface and slant' }, note: { pl: 'W $\\pi r l$ stoi TWORZĄCA. Rozwinięcie pobocznicy to wycinek koła o promieniu $l$.', en: 'It is the SLANT in $\\pi rl$; the development is a sector of radius $l$.' }, drill: true },
        { id: 'podobienstwo-objetosci', tex: 'k = \\frac{a_{2}}{a_{1}} \\ \\Rightarrow\\ \\frac{S_{2}}{S_{1}} = k^{2},\\quad \\frac{V_{2}}{V_{1}} = k^{3}', name: { pl: 'Pola i objętości brył podobnych', en: 'Similar solids' }, note: { pl: 'Skala liniowa $k$: pola rosną jak $k^2$, objętości jak $k^3$.', en: 'Linear scale $k$: areas go as $k^2$, volumes as $k^3$.' }, drill: true },
        { id: 'przekatna-prostopadloscianu', tex: 'd = \\sqrt{a^{2}+b^{2}+c^{2}}', name: { pl: 'Przekątna prostopadłościanu', en: 'Diagonal of a cuboid' }, note: { pl: 'Pitagoras dwa razy: najpierw w podstawie, potem w pionie. Dla sześcianu $d=a\\sqrt3$.', en: 'Pythagoras twice. For a cube $d=a\\sqrt3$.' }, drill: true },
      ],
      skills: [
        { id: 'objetosci-proste', title: { pl: 'Objętości brył', en: 'Volumes' }, levels: [2, 3] },
        { id: 'pola-powierzchni-bryl', title: { pl: 'Pola powierzchni', en: 'Surface areas' }, levels: [3, 4] },
        { id: 'podobienstwo-bryl', title: { pl: 'Bryły podobne', en: 'Similar solids' }, levels: [3, 4] },
      ],
      problems: [
        {
          id: 'bryly-objetosci-l2-01',
          skill: 'objetosci-proste',
          level: 2,
          prompt: { pl: 'Ostrosłup prawidłowy czworokątny ma krawędź podstawy $6$ i wysokość $5$. Oblicz jego objętość.', en: 'A right square pyramid has base edge $6$ and height $5$. Find its volume.' },
          answer: '60',
          accept: ['60'],
          solution: [
            { pl: '$P_p = 6^2 = 36$.', en: '$P_p=36$.' },
            { pl: '$V = \\frac13\\cdot36\\cdot5 = 60$.', en: '$V=\\frac13\\cdot36\\cdot5=60$.' },
          ],
          trap: { pl: 'Zgubiona jedna trzecia — $180$ zamiast $60$ to objętość graniastosłupa, nie ostrosłupa.', en: 'Losing the $\\frac13$: $180$ is the prism, not the pyramid.' },
        },
        {
          id: 'bryly-objetosci-l3-01',
          skill: 'pola-powierzchni-bryl',
          level: 3,
          prompt: { pl: 'Stożek ma promień podstawy $r=6$ i wysokość $H=8$. Oblicz pole powierzchni całkowitej.', en: 'A cone has $r=6$, $H=8$. Find the total surface area.' },
          answer: '96\\pi',
          accept: ['96\\pi'],
          solution: [
            { pl: 'Tworząca: $l=\\sqrt{36+64}=10$.', en: '$l=10$.' },
            { pl: '$S = \\pi r^2 + \\pi r l = 36\\pi + 60\\pi = 96\\pi$.', en: '$S=36\\pi+60\\pi=96\\pi$.' },
          ],
          trap: { pl: 'Policzenie pobocznicy jako $\\pi r H = 48\\pi$ — w wzorze stoi tworząca, nie wysokość.', en: 'Using the height in $\\pi rl$ — it is the slant.' },
        },
        {
          id: 'bryly-objetosci-l4-01',
          skill: 'podobienstwo-bryl',
          level: 4,
          prompt: { pl: 'Dwie kule mają pola powierzchni w stosunku $9:4$. W jakim stosunku pozostają ich objętości?', en: 'Two spheres have surface areas in ratio $9:4$. Find the ratio of their volumes.' },
          answer: '27:8',
          accept: ['27/8', '27:8'],
          solution: [
            { pl: 'Z $\\frac{S_1}{S_2}=k^2=\\frac94$ mamy $k=\\frac32$.', en: '$k=\\frac32$.' },
            { pl: '$\\frac{V_1}{V_2}=k^3=\\frac{27}{8}$.', en: '$k^3=\\frac{27}{8}$.' },
          ],
          trap: { pl: 'Przejście $9:4 \\to 9^{3/2}:4^{3/2}$ na piechotę bywa liczone źle — najpierw wróć do skali liniowej $k$.', en: 'Go back to the linear scale first; raising the area ratio directly invites arithmetic slips.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'katy-w-przestrzeni',
      title: { pl: 'Kąty w przestrzeni', en: 'Angles in space' },
      level: 4,
      prereq: ['bryly-objetosci'],
      theory: {
        pl: 'Kąt między prostą a płaszczyzną to kąt między prostą a jej RZUTEM prostokątnym na tę '
          + 'płaszczyznę — zawsze ten mniejszy. Kąt dwuścienny mierzy się w płaszczyźnie prostopadłej do '
          + 'krawędzi: z punktu na krawędzi prowadzi się w obu ścianach półproste prostopadłe do niej. '
          + 'W zadaniach o ostrosłupach wszystko sprowadza się do znalezienia właściwego trójkąta '
          + 'prostokątnego: wysokość bryły, rzut odcinka na podstawę i sam odcinek. Rysunek pomocniczy '
          + 'z zaznaczonym rzutem jest połową rozwiązania.',
        en: 'The angle between a line and a plane is the angle with its orthogonal PROJECTION — always the '
          + 'smaller one. A dihedral angle is measured in the plane perpendicular to the edge. Pyramid '
          + 'problems reduce to finding the right right-triangle: the solid\'s height, the projection, and '
          + 'the segment itself.',
      },
      formulas: [
        { id: 'kat-prosta-plaszczyzna', tex: '\\operatorname{tg}\\alpha = \\frac{H}{d}', name: { pl: 'Kąt prostej z płaszczyzną', en: 'Line-plane angle' }, note: { pl: '$H$ — wysokość nad płaszczyzną, $d$ — długość rzutu. Trójkąt prostokątny: rzut, wysokość, odcinek.', en: '$H$ above the plane over the projection length $d$.' }, drill: true },
        { id: 'przekatna-szescianu-kat', tex: '\\operatorname{tg}\\alpha = \\frac{a}{a\\sqrt{2}} = \\frac{\\sqrt{2}}{2}', name: { pl: 'Kąt przekątnej sześcianu z podstawą', en: 'Cube diagonal vs base' }, note: { pl: 'Rzut przekątnej sześcianu na podstawę to przekątna podstawy $a\\sqrt2$.', en: 'The projection is the base diagonal $a\\sqrt2$.' }, drill: true },
      ],
      skills: [
        { id: 'kat-krawedz-podstawa', title: { pl: 'Kąt krawędzi z podstawą', en: 'Edge-base angles' }, levels: [3, 4] },
        { id: 'kat-dwuscienny', title: { pl: 'Kąt dwuścienny', en: 'Dihedral angles' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'katy-w-przestrzeni-l3-01',
          skill: 'kat-krawedz-podstawa',
          level: 3,
          prompt: { pl: 'W sześcianie o krawędzi $a$ wyznacz tangens kąta między przekątną sześcianu a płaszczyzną podstawy.', en: 'In a cube of edge $a$, find the tangent of the angle between the space diagonal and the base.' },
          answer: '\\frac{\\sqrt{2}}{2}',
          accept: ['\\frac{1}{\\sqrt{2}}', '\\frac{a}{a\\sqrt{2}}'],
          solution: [
            { pl: 'Rzutem przekątnej sześcianu na podstawę jest przekątna podstawy o długości $a\\sqrt2$.', en: 'The projection is the base diagonal $a\\sqrt2$.' },
            { pl: 'Trójkąt prostokątny: przyprostokątne $a$ (pion) i $a\\sqrt2$ (rzut).', en: 'Legs $a$ and $a\\sqrt2$.' },
            { pl: '$\\operatorname{tg}\\alpha = \\frac{a}{a\\sqrt2} = \\frac{\\sqrt2}{2}$.', en: '$\\operatorname{tg}\\alpha=\\frac{\\sqrt2}{2}$.' },
          ],
          trap: { pl: 'Wzięcie kąta z krawędzią podstawy zamiast z przekątną podstawy — rzut przekątnej NIE jest krawędzią.', en: 'Projecting onto an edge instead of the base diagonal.' },
        },
        {
          id: 'katy-w-przestrzeni-l4-01',
          skill: 'kat-krawedz-podstawa',
          level: 4,
          prompt: { pl: 'Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a=6$ i wysokość $H=3\\sqrt{2}$. Oblicz miarę kąta nachylenia krawędzi bocznej do płaszczyzny podstawy.', en: 'A right square pyramid has $a=6$, $H=3\\sqrt2$. Find the angle between a lateral edge and the base.' },
          answer: '45^{\\circ}',
          accept: ['45', '\\frac{\\pi}{4}'],
          solution: [
            { pl: 'Rzut krawędzi bocznej to połowa przekątnej podstawy: $\\frac{6\\sqrt2}{2}=3\\sqrt2$.', en: 'The projection is half the base diagonal: $3\\sqrt2$.' },
            { pl: '$\\operatorname{tg}\\alpha = \\frac{H}{3\\sqrt2} = \\frac{3\\sqrt2}{3\\sqrt2} = 1$.', en: '$\\operatorname{tg}\\alpha=1$.' },
            { pl: '$\\alpha = 45^{\\circ}$.', en: '$\\alpha=45^{\\circ}$.' },
          ],
          trap: { pl: 'Rzut na środek KRAWĘDZI ($3$) zamiast na środek podstawy ($3\\sqrt2$) — to daje kąt ściany, nie krawędzi.', en: 'Projecting to an edge midpoint gives the FACE angle, not the edge angle.' },
        },
        {
          id: 'katy-w-przestrzeni-l5-01',
          skill: 'kat-dwuscienny',
          level: 5,
          prompt: { pl: 'W ostrosłupie prawidłowym czworokątnym krawędź podstawy wynosi $a=6$, a wysokość $H=4$. Oblicz tangens kąta nachylenia ściany bocznej do płaszczyzny podstawy.', en: 'In a right square pyramid with $a=6$, $H=4$, find the tangent of the face-base dihedral angle.' },
          answer: '\\frac{4}{3}',
          accept: ['4/3'],
          solution: [
            { pl: 'Kąt ściany z podstawą mierzy się przez wysokość ściany i apotemę podstawy: rzutem spodka wysokości ściany jest środek krawędzi podstawy, odległy o $\\frac{a}{2}=3$ od środka.', en: 'Measure through the apothem: the distance from centre to edge midpoint is $3$.' },
            { pl: '$\\operatorname{tg}\\alpha = \\frac{H}{a/2} = \\frac{4}{3}$.', en: '$\\operatorname{tg}\\alpha=\\frac43$.' },
          ],
          trap: { pl: 'Użycie połowy przekątnej $3\\sqrt2$ zamiast połowy krawędzi $3$ — to jest dokładnie odwrotny błąd niż przy kącie krawędzi.', en: 'Using half the diagonal instead of half the edge — the mirror image of the edge-angle trap.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'bryly-wpisane',
      title: { pl: 'Przekroje i bryły wpisane', en: 'Sections and inscribed solids' },
      level: 5,
      prereq: ['katy-w-przestrzeni'],
      theory: {
        pl: 'Przekrój osiowy walca to prostokąt $2r\\times H$; stożka — trójkąt równoramienny o podstawie '
          + '$2r$ i ramionach $l$. W zadaniach o bryłach wpisanych w kulę wszystko dzieje się w dobrze '
          + 'wybranym przekroju: dla walca w kuli przekrój osiowy daje $R^2 = r^2 + \\frac{H^2}{4}$ — '
          + 'promień kuli, promień walca i połowa wysokości tworzą trójkąt prostokątny. Dla sześcianu w '
          + 'kuli średnicą jest przekątna sześcianu: $2R = a\\sqrt3$. Zasada ogólna: znajdź płaszczyznę, '
          + 'w której widać wszystkie istotne odcinki naraz, i tam licz planimetrię.',
        en: 'The axial section of a cylinder is a $2r\\times H$ rectangle; of a cone an isosceles triangle. '
          + 'For solids in a sphere everything happens in a well-chosen section: a cylinder in a sphere '
          + 'gives $R^2=r^2+\\frac{H^2}{4}$; a cube\'s space diagonal is the sphere\'s diameter, $2R=a\\sqrt3$. '
          + 'Find the plane where all the relevant segments are visible at once, then do plane geometry there.',
      },
      formulas: [
        { id: 'walec-w-kuli', tex: 'R^{2} = r^{2} + \\frac{H^{2}}{4}', name: { pl: 'Walec wpisany w kulę', en: 'Cylinder in a sphere' }, note: { pl: 'Z przekroju osiowego: promień kuli, promień walca, połowa wysokości.', en: 'From the axial section.' }, drill: true },
        { id: 'szescian-w-kuli', tex: '2R = a\\sqrt{3}', name: { pl: 'Sześcian wpisany w kulę', en: 'Cube in a sphere' }, note: { pl: 'Średnica kuli = przekątna sześcianu.', en: 'Diameter = space diagonal.' }, drill: true },
        { id: 'kula-w-szescianie', tex: '2R = a', name: { pl: 'Kula wpisana w sześcian', en: 'Sphere in a cube' }, note: { pl: 'Kula dotyka środków ścian: średnica = krawędź.', en: 'The sphere touches the face centres.' }, drill: true },
      ],
      skills: [
        { id: 'przekroje', title: { pl: 'Przekroje brył', en: 'Cross-sections' }, levels: [4, 5] },
        { id: 'wpisywanie-w-kule', title: { pl: 'Bryły w kuli i kula w bryłach', en: 'Solids in spheres' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'bryly-wpisane-l4-01',
          skill: 'przekroje',
          level: 4,
          prompt: { pl: 'Przekrój osiowy stożka jest trójkątem równobocznym o boku $12$. Oblicz objętość stożka.', en: 'The axial section of a cone is an equilateral triangle of side $12$. Find the volume.' },
          answer: '72\\sqrt{3}\\pi',
          accept: ['72\\pi\\sqrt{3}'],
          solution: [
            { pl: 'Podstawa trójkąta to średnica: $2r=12$, więc $r=6$; ramię to tworząca $l=12$.', en: '$r=6$, $l=12$.' },
            { pl: 'Wysokość: $H=\\sqrt{l^2-r^2}=\\sqrt{144-36}=\\sqrt{108}=6\\sqrt3$.', en: '$H=6\\sqrt3$.' },
            { pl: '$V=\\frac13\\pi r^2H = \\frac13\\pi\\cdot36\\cdot6\\sqrt3 = 72\\sqrt3\\,\\pi$.', en: '$V=72\\sqrt3\\pi$.' },
          ],
          trap: { pl: 'Wzięcie boku trójkąta za promień — bok przekroju osiowego to ŚREDNICA podstawy.', en: 'The triangle\'s base is the DIAMETER, not the radius.' },
        },
        {
          id: 'bryly-wpisane-l5-01',
          skill: 'wpisywanie-w-kule',
          level: 5,
          prompt: { pl: 'Sześcian jest wpisany w kulę o promieniu $R=3\\sqrt{3}$. Oblicz objętość sześcianu.', en: 'A cube is inscribed in a sphere of radius $R=3\\sqrt3$. Find the cube\'s volume.' },
          answer: '216',
          accept: ['216'],
          solution: [
            { pl: 'Przekątna sześcianu = średnica: $a\\sqrt3 = 2R = 6\\sqrt3$, więc $a=6$.', en: '$a\\sqrt3=6\\sqrt3$, so $a=6$.' },
            { pl: '$V = a^3 = 216$.', en: '$V=216$.' },
          ],
          trap: { pl: 'Zrównanie $2R$ z przekątną ŚCIANY $a\\sqrt2$ — w kulę celuje przekątna przestrzenna $a\\sqrt3$.', en: 'Equating $2R$ with the FACE diagonal $a\\sqrt2$ instead of the space diagonal.' },
        },
        {
          id: 'bryly-wpisane-l6-01',
          skill: 'wpisywanie-w-kule',
          level: 6,
          prompt: {
            pl: 'W kulę o promieniu $R=5$ wpisano walec o wysokości $H=8$. Oblicz objętość walca.',
            en: 'A cylinder of height $H=8$ is inscribed in a sphere of radius $R=5$. Find its volume.',
          },
          answer: '72\\pi',
          accept: ['72\\pi'],
          solution: [
            { pl: 'Z przekroju osiowego: $R^2 = r^2 + \\left(\\frac{H}{2}\\right)^2$, czyli $25 = r^2 + 16$.', en: '$25=r^2+16$.' },
            { pl: '$r^2 = 9$, więc $r=3$.', en: '$r=3$.' },
            { pl: '$V = \\pi r^2 H = \\pi\\cdot9\\cdot8 = 72\\pi$.', en: '$V=72\\pi$.' },
          ],
          trap: { pl: 'Wstawienie całej wysokości do Pitagorasa: $R^2=r^2+H^2$ daje $r^2=-39$ — znak, że w trójkącie stoi POŁOWA wysokości.', en: 'Using the full height in Pythagoras yields a negative $r^2$ — the triangle takes HALF the height.' },
        },
      ],
    },
  ],
};
