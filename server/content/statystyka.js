// Statystyka — miary położenia i rozproszenia: średnie (arytmetyczna, ważona,
// geometryczna), mediana, dominanta i kwartyle, wariancja i odchylenie
// standardowe (wzór podstawowy i skrócony), przekształcenia liniowe danych,
// wartość oczekiwana zmiennej losowej.
export default {
  id: 'statystyka',
  track: 'matura',
  order: 100,
  title: { pl: 'Statystyka', en: 'Statistics' },
  blurb: {
    pl: 'Średnie, mediana i kwartyle, wariancja i odchylenie standardowe, przekształcenia liniowe danych, wartość oczekiwana.',
    en: 'Means, median and quartiles, variance and standard deviation, linear transformations of data, expected value.',
  },
  topics: [
    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'srednie',
      title: { pl: 'Średnia arytmetyczna, ważona i geometryczna', en: 'Arithmetic, weighted and geometric means' },
      level: 2,
      prereq: [],
      theory: {
        pl: 'Średnia arytmetyczna $\\bar{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}$ to suma danych podzielona '
          + 'przez ich liczbę — punkt równowagi zestawu. Gdy wartości mają różne wagi $w_i$ (oceny, dane '
          + 'pogrupowane w tabeli liczności), liczymy średnią ważoną: sumę iloczynów $w_i x_i$ dzielimy '
          + 'przez sumę wag, nigdy przez liczbę różnych wartości. Średnia geometryczna '
          + '$\\sqrt[n]{x_1 x_2\\cdots x_n}$ (dla danych dodatnich) uśrednia mnożenie — dlatego to ona, '
          + 'a nie arytmetyczna, opisuje średnie tempo wzrostu w kolejnych okresach, bo procenty się '
          + 'składają, a nie dodają. Zachodzi nierówność $\\sqrt[n]{x_1\\cdots x_n}\\le\\bar{x}$ '
          + 'z równością dokładnie wtedy, gdy wszystkie dane są równe. W zadaniach odwrotnych kluczowe '
          + 'jest przejście od średniej do sumy: $\\sum x_i=n\\bar{x}$ — z sum wszystko się odtwarza.',
        en: 'The arithmetic mean $\\bar{x}=\\frac{x_1+\\cdots+x_n}{n}$ is the sum divided by the count — '
          + 'the balance point of the data. With weights $w_i$ (grades, frequency tables) use the weighted '
          + 'mean: divide $\\sum w_i x_i$ by the sum of the weights, never by the number of distinct values. '
          + 'The geometric mean $\\sqrt[n]{x_1\\cdots x_n}$ (positive data) averages multiplication, which '
          + 'is why it, not the arithmetic mean, describes average growth rates — percentages compound. '
          + 'The AM–GM inequality $\\sqrt[n]{x_1\\cdots x_n}\\le\\bar{x}$ holds with equality iff all data '
          + 'are equal. In reverse problems, pass from means to sums: $\\sum x_i=n\\bar{x}$.',
      },
      formulas: [
        { id: 'srednia-arytmetyczna-wzor', tex: '\\bar{x}=\\frac{x_{1}+x_{2}+\\cdots+x_{n}}{n}', name: { pl: 'Średnia arytmetyczna', en: 'Arithmetic mean' }, note: { pl: 'Równoważnie $\\sum x_i=n\\bar{x}$ — w zadaniach odwrotnych licz na sumach.', en: 'Equivalently $\\sum x_i=n\\bar{x}$ — reverse problems run on sums.' }, drill: true },
        { id: 'srednia-wazona-wzor', tex: '\\bar{x}_{w}=\\frac{w_{1}x_{1}+w_{2}x_{2}+\\cdots+w_{n}x_{n}}{w_{1}+w_{2}+\\cdots+w_{n}}', name: { pl: 'Średnia ważona', en: 'Weighted mean' }, note: { pl: 'Mianownik to suma wag, nie liczba wartości. Tabela liczności to średnia ważona z wagami $n_i$.', en: 'The denominator is the sum of the weights, not the number of values. Frequency tables are weighted means with weights $n_i$.' }, drill: true },
        { id: 'srednia-geometryczna-wzor', tex: 'G=\\sqrt[n]{x_{1}x_{2}\\cdots x_{n}}\\quad (x_{i}>0)', name: { pl: 'Średnia geometryczna', en: 'Geometric mean' }, note: { pl: 'Uśrednia iloczyny: średnie tempo wzrostu liczy się z niej, nie ze średniej arytmetycznej.', en: 'Averages products: mean growth rates come from it, not from the arithmetic mean.' }, drill: true },
        { id: 'nierownosc-am-gm', tex: '\\sqrt[n]{x_{1}\\cdots x_{n}}\\le\\frac{x_{1}+\\cdots+x_{n}}{n}', name: { pl: 'Nierówność między średnimi (AM–GM)', en: 'The AM–GM inequality' }, note: { pl: 'Równość tylko dla danych równych. Dla $n=2$: $\\sqrt{ab}\\le\\frac{a+b}{2}$ — silnik zadań optymalizacyjnych.', en: 'Equality only for equal data. For $n=2$: $\\sqrt{ab}\\le\\frac{a+b}{2}$ — the engine of optimisation problems.' }, drill: true },
      ],
      skills: [
        { id: 'srednia-arytmetyczna-liczenie', title: { pl: 'Średnia arytmetyczna', en: 'Arithmetic mean' }, levels: [1, 2] },
        { id: 'srednia-wazona-liczenie', title: { pl: 'Średnia ważona i mieszanie grup', en: 'Weighted means and mixing groups' }, levels: [2, 3, 4] },
        { id: 'srednia-geometryczna-liczenie', title: { pl: 'Średnia geometryczna', en: 'Geometric mean' }, levels: [2, 3, 4] },
        { id: 'srednie-zadania-odwrotne', title: { pl: 'Zadania odwrotne o średnich', en: 'Reverse problems about means' }, levels: [3, 4, 5] },
      ],
      problems: [
        {
          id: 'srednie-l1-01',
          skill: 'srednia-arytmetyczna-liczenie',
          level: 1,
          prompt: { pl: 'Oblicz średnią arytmetyczną danych: $3,\\ 7,\\ 8,\\ 10,\\ 12$.', en: 'Compute the arithmetic mean of the data $3,\\ 7,\\ 8,\\ 10,\\ 12$.' },
          answer: '8',
          accept: ['8'],
          solution: [
            { pl: 'Suma danych: $3+7+8+10+12=40$.', en: 'The sum is $3+7+8+10+12=40$.' },
            { pl: 'Danych jest $5$, więc $\\bar{x}=\\frac{40}{5}=8$.', en: 'There are 5 values, so $\\bar{x}=\\frac{40}{5}=8$.' },
          ],
          trap: { pl: 'Pomylenie liczby danych — dzielenie przez 4 zamiast przez 5. Zawsze policz $n$ osobno.', en: 'Miscounting the data — dividing by 4 instead of 5. Count $n$ separately.' },
        },
        {
          id: 'srednie-l2-02',
          skill: 'srednia-wazona-liczenie',
          level: 2,
          prompt: { pl: 'Uczeń ma oceny: $3$ z wagą $2$, $4$ z wagą $3$ i $5$ z wagą $5$. Oblicz średnią ważoną jego ocen.', en: 'A student has grades $3$ with weight $2$, $4$ with weight $3$ and $5$ with weight $5$. Compute the weighted mean.' },
          answer: '4{,}3',
          accept: ['4.3', '4,3', '43/10'],
          solution: [
            { pl: 'Licznik: $2\\cdot3+3\\cdot4+5\\cdot5=6+12+25=43$.', en: 'Numerator: $2\\cdot3+3\\cdot4+5\\cdot5=43$.' },
            { pl: 'Mianownik to suma wag: $2+3+5=10$, więc $\\bar{x}_w=\\frac{43}{10}=4{,}3$.', en: 'Denominator: the weight sum $2+3+5=10$, so $\\bar{x}_w=\\frac{43}{10}=4.3$.' },
          ],
          trap: { pl: 'Dzielenie przez liczbę ocen (3) zamiast przez sumę wag (10).', en: 'Dividing by the number of grades (3) instead of the sum of the weights (10).' },
        },
        {
          id: 'srednie-l2-03',
          skill: 'srednia-geometryczna-liczenie',
          level: 2,
          prompt: { pl: 'Oblicz średnią geometryczną liczb $2,\\ 4,\\ 8$.', en: 'Compute the geometric mean of $2,\\ 4,\\ 8$.' },
          answer: '4',
          accept: ['4'],
          solution: [
            { pl: 'Iloczyn: $2\\cdot4\\cdot8=64$.', en: 'The product is $2\\cdot4\\cdot8=64$.' },
            { pl: '$G=\\sqrt[3]{64}=4$.', en: '$G=\\sqrt[3]{64}=4$.' },
          ],
          trap: { pl: 'Policzenie średniej arytmetycznej ($\\frac{14}{3}$) — geometryczna mnoży i pierwiastkuje, nie dodaje.', en: 'Computing the arithmetic mean ($\\frac{14}{3}$) — the geometric mean multiplies and takes a root.' },
        },
        {
          id: 'srednie-l3-04',
          skill: 'srednie-zadania-odwrotne',
          level: 3,
          prompt: { pl: 'Średnia arytmetyczna pięciu liczb wynosi $12$. Po dopisaniu szóstej liczby średnia całego zestawu wynosi $13$. Jaką liczbę dopisano?', en: 'The mean of five numbers is $12$. After a sixth number is appended the mean of the whole set is $13$. What number was appended?' },
          answer: '18',
          accept: ['18'],
          solution: [
            { pl: 'Suma pięciu liczb: $5\\cdot12=60$.', en: 'Sum of the five numbers: $5\\cdot12=60$.' },
            { pl: 'Suma sześciu liczb: $6\\cdot13=78$.', en: 'Sum of the six numbers: $6\\cdot13=78$.' },
            { pl: 'Dopisano $78-60=18$.', en: 'The appended number is $78-60=18$.' },
          ],
          trap: { pl: 'Uznanie, że dopisana liczba równa się nowej średniej ($13$) — nowa liczba musi być większa, bo podciąga średnią.', en: 'Assuming the new number equals the new mean ($13$) — it must exceed it to pull the mean up.' },
        },
        {
          id: 'srednie-l3-05',
          skill: 'srednia-geometryczna-liczenie',
          level: 3,
          prompt: { pl: 'Średnia geometryczna liczb $3,\\ x,\\ 27$ (gdzie $x>0$) jest równa $9$. Wyznacz $x$.', en: 'The geometric mean of $3,\\ x,\\ 27$ (with $x>0$) equals $9$. Find $x$.' },
          answer: '9',
          accept: ['9', 'x=9'],
          solution: [
            { pl: '$\\sqrt[3]{3\\cdot x\\cdot 27}=9$, czyli $\\sqrt[3]{81x}=9$.', en: '$\\sqrt[3]{3\\cdot x\\cdot 27}=9$, i.e. $\\sqrt[3]{81x}=9$.' },
            { pl: 'Podnosimy do sześcianu: $81x=9^{3}=729$, stąd $x=9$.', en: 'Cube both sides: $81x=729$, so $x=9$.' },
          ],
          trap: { pl: 'Podniesienie do kwadratu zamiast do sześcianu — stopień pierwiastka równa się liczbie danych, tu $3$.', en: 'Squaring instead of cubing — the root index equals the number of data points, here 3.' },
        },
        {
          id: 'srednie-l4-06',
          skill: 'srednia-wazona-liczenie',
          level: 4,
          prompt: { pl: 'W klasie liczącej $25$ uczniów średnia punktów ze sprawdzianu wyniosła $4{,}0$. Średnia w grupie $10$ chłopców to $3{,}7$. Oblicz średnią punktów w grupie $15$ dziewcząt.', en: 'A class of $25$ students averaged $4.0$ on a test. The $10$ boys averaged $3.7$. Compute the average of the $15$ girls.' },
          answer: '4{,}2',
          accept: ['4.2', '4,2', '21/5'],
          solution: [
            { pl: 'Suma punktów klasy: $25\\cdot4{,}0=100$; suma chłopców: $10\\cdot3{,}7=37$.', en: 'Class total: $25\\cdot4.0=100$; boys total: $10\\cdot3.7=37$.' },
            { pl: 'Suma dziewcząt: $100-37=63$.', en: 'Girls total: $100-37=63$.' },
            { pl: 'Średnia dziewcząt: $\\frac{63}{15}=4{,}2$.', en: 'Girls average: $\\frac{63}{15}=4.2$.' },
          ],
          trap: { pl: 'Uśrednianie średnich bez wag: $\\frac{4{,}0+3{,}7}{2}$ nie ma sensu, bo grupy są różnej wielkości — licz na sumach.', en: 'Averaging the averages without weights — the groups differ in size; work with totals.' },
        },
        {
          id: 'srednie-l4-07',
          skill: 'srednia-geometryczna-liczenie',
          level: 4,
          prompt: { pl: 'Cena akcji przez dwa kolejne lata wzrosła łącznie o $21\\%$. O ile procent rocznie rosłaby cena, gdyby tempo wzrostu było co roku takie samo?', en: 'Over two consecutive years a share price rose by $21\\%$ in total. By what constant annual percentage would it have to grow to match this?' },
          answer: '10\\%',
          accept: ['10', '10%'],
          solution: [
            { pl: 'Łączny mnożnik dwóch lat: $1{,}21$. Szukamy stałego rocznego mnożnika $q$ z $q^{2}=1{,}21$.', en: 'The two-year factor is $1.21$; we need $q$ with $q^{2}=1.21$.' },
            { pl: '$q=\\sqrt{1{,}21}=1{,}1$ — to średnia geometryczna rocznych mnożników.', en: '$q=\\sqrt{1.21}=1.1$ — the geometric mean of the annual factors.' },
            { pl: 'Cena rosła średnio o $10\\%$ rocznie.', en: 'The price grew by $10\\%$ per year.' },
          ],
          trap: { pl: 'Podzielenie $21\\%$ przez $2$ i odpowiedź $10{,}5\\%$ — wzrosty procentowe się mnożą, więc uśrednia je średnia geometryczna, nie arytmetyczna.', en: 'Halving $21\\%$ to get $10.5\\%$ — percentage growth compounds, so the geometric mean applies, not the arithmetic one.' },
        },
        {
          id: 'srednie-l5-08',
          skill: 'srednie-zadania-odwrotne',
          level: 5,
          prompt: { pl: 'Liczby dodatnie $a$ i $b$ spełniają $a+b=20$. Wyznacz największą możliwą wartość ich średniej geometrycznej $\\sqrt{ab}$ i wskaż, kiedy jest osiągana.', en: 'Positive numbers $a$ and $b$ satisfy $a+b=20$. Find the largest possible value of their geometric mean $\\sqrt{ab}$ and say when it is attained.' },
          answer: '10 \\text{ (dla } a=b=10\\text{)}',
          accept: ['10', '10 dla a=b=10'],
          solution: [
            { pl: 'Z nierówności AM–GM: $\\sqrt{ab}\\le\\frac{a+b}{2}=10$ dla wszystkich dodatnich $a,b$ o sumie $20$.', en: 'By AM–GM, $\\sqrt{ab}\\le\\frac{a+b}{2}=10$ for all admissible $a,b$.' },
            { pl: 'Równość w AM–GM zachodzi dokładnie dla $a=b$, czyli $a=b=10$; wtedy $\\sqrt{ab}=10$.', en: 'Equality in AM–GM holds exactly for $a=b=10$, giving $\\sqrt{ab}=10$.' },
            { pl: 'Największa wartość średniej geometrycznej to $10$.', en: 'The maximum geometric mean is $10$.' },
          ],
          trap: { pl: 'Szukanie maksimum na brzegu: gdy $a\\to0$, iloczyn $ab\\to0$ — maksimum iloczynu przy stałej sumie jest w środku, w punkcie równości AM–GM.', en: 'Looking at the boundary: as $a\\to0$ the product vanishes — with a fixed sum the product peaks at the AM–GM equality point.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'mediana-kwartyle',
      title: { pl: 'Mediana, dominanta i kwartyle', en: 'Median, mode and quartiles' },
      level: 2,
      prereq: ['srednie'],
      theory: {
        pl: 'Mediana to wyraz środkowy uporządkowanego zestawu: dla $n=2k+1$ jest nim $x_{(k+1)}$, '
          + 'a dla $n=2k$ — średnia arytmetyczna dwóch wyrazów środkowych; bez posortowania danych wynik '
          + 'nie ma sensu. Dominanta (moda) to wartość występująca najczęściej — może być niejednoznaczna '
          + 'albo nie istnieć, gdy wszystkie liczności są równe. Kwartyl dolny $Q_1$ i górny $Q_3$ to '
          + 'mediany dolnej i górnej połowy danych; przy nieparzystym $n$ wyrazu środkowego nie wlicza się '
          + 'do żadnej połowy (konwencja szkolna). Rozstęp międzykwartylowy $\\mathrm{IQR}=Q_3-Q_1$ mierzy '
          + 'rozrzut środkowych 50% danych, a rozstęp $R=x_{\\max}-x_{\\min}$ — całego zestawu. Mediana '
          + 'jest odporna na obserwacje odstające: jedna ekstremalna wartość potrafi dowolnie przesunąć '
          + 'średnią, a mediany prawie nie ruszy.',
        en: 'The median is the middle term of the sorted data: $x_{(k+1)}$ for $n=2k+1$, the average of the '
          + 'two middle terms for $n=2k$; without sorting the result is meaningless. The mode is the most '
          + 'frequent value — possibly non-unique, or non-existent when all frequencies agree. The quartiles '
          + '$Q_1$ and $Q_3$ are the medians of the lower and upper halves; for odd $n$ the middle term '
          + 'joins neither half (the school convention). The interquartile range $\\mathrm{IQR}=Q_3-Q_1$ '
          + 'measures the spread of the middle 50%, the range $R=x_{\\max}-x_{\\min}$ of the whole set. '
          + 'The median resists outliers: one extreme value can drag the mean arbitrarily far while barely '
          + 'moving the median.',
      },
      formulas: [
        { id: 'mediana-wzor', tex: '\\mathrm{Me}=\\begin{cases}x_{(k+1)}, & n=2k+1\\\\ \\tfrac{1}{2}\\left(x_{(k)}+x_{(k+1)}\\right), & n=2k\\end{cases}', name: { pl: 'Mediana (dane uporządkowane)', en: 'Median (sorted data)' }, note: { pl: 'Najpierw sortowanie, potem środek. Przy parzystym $n$ — średnia dwóch środkowych.', en: 'Sort first, then take the middle; for even $n$, average the two middle terms.' }, drill: true },
        { id: 'kwartyle-iqr-wzor', tex: 'Q_{2}=\\mathrm{Me},\\qquad \\mathrm{IQR}=Q_{3}-Q_{1}', name: { pl: 'Kwartyle i rozstęp międzykwartylowy', en: 'Quartiles and the interquartile range' }, note: { pl: '$Q_1$, $Q_3$ to mediany połówek; przy nieparzystym $n$ środkowego wyrazu nie wliczamy do żadnej.', en: '$Q_1$, $Q_3$ are medians of the halves; for odd $n$ the middle term joins neither.' }, drill: true },
        { id: 'rozstep-wzor', tex: 'R=x_{\\max}-x_{\\min}', name: { pl: 'Rozstęp', en: 'Range' }, note: { pl: 'Najgrubsza miara rozrzutu — zależy tylko od dwóch skrajnych obserwacji.', en: 'The crudest spread measure — it sees only the two extremes.' }, drill: true },
      ],
      skills: [
        { id: 'mediana-dominanta-liczenie', title: { pl: 'Mediana i dominanta', en: 'Median and mode' }, levels: [1, 2, 3] },
        { id: 'kwartyle-liczenie', title: { pl: 'Kwartyle i rozstęp międzykwartylowy', en: 'Quartiles and the IQR' }, levels: [3, 4] },
        { id: 'miary-pozycyjne-odwrotnie', title: { pl: 'Zadania odwrotne o medianie', en: 'Reverse problems about the median' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'mediana-kwartyle-l1-01',
          skill: 'mediana-dominanta-liczenie',
          level: 1,
          prompt: { pl: 'Wyznacz medianę danych: $3,\\ 9,\\ 5,\\ 7,\\ 11$.', en: 'Find the median of the data $3,\\ 9,\\ 5,\\ 7,\\ 11$.' },
          answer: '7',
          accept: ['7'],
          solution: [
            { pl: 'Porządkujemy: $3,\\ 5,\\ 7,\\ 9,\\ 11$.', en: 'Sort: $3,\\ 5,\\ 7,\\ 9,\\ 11$.' },
            { pl: '$n=5$ (nieparzyste), mediana to trzeci wyraz: $\\mathrm{Me}=7$.', en: '$n=5$ is odd; the median is the third term: $7$.' },
          ],
          trap: { pl: 'Wzięcie środkowego wyrazu bez posortowania — z surowej listy wyszłoby $5$.', en: 'Taking the middle of the unsorted list — that would give $5$.' },
        },
        {
          id: 'mediana-kwartyle-l2-02',
          skill: 'mediana-dominanta-liczenie',
          level: 2,
          prompt: { pl: 'Wyznacz medianę i dominantę zestawu: $2,\\ 5,\\ 3,\\ 5,\\ 8,\\ 9$.', en: 'Find the median and the mode of the set $2,\\ 5,\\ 3,\\ 5,\\ 8,\\ 9$.' },
          answer: '\\mathrm{Me}=5,\\ D=5',
          accept: ['5 i 5', 'Me=5, D=5', 'mediana 5, dominanta 5'],
          solution: [
            { pl: 'Porządkujemy: $2,\\ 3,\\ 5,\\ 5,\\ 8,\\ 9$; $n=6$ jest parzyste.', en: 'Sorted: $2,\\ 3,\\ 5,\\ 5,\\ 8,\\ 9$; $n=6$ is even.' },
            { pl: 'Mediana to średnia trzeciego i czwartego wyrazu: $\\frac{5+5}{2}=5$.', en: 'Median: the average of the 3rd and 4th terms, $\\frac{5+5}{2}=5$.' },
            { pl: 'Dominanta to wartość najczęstsza: $5$ (występuje dwa razy).', en: 'Mode: the most frequent value, $5$.' },
          ],
          trap: { pl: 'Przy parzystym $n$ wskazanie jednego z dwóch środkowych wyrazów zamiast ich średniej.', en: 'For even $n$: picking one of the two middle terms instead of averaging them.' },
        },
        {
          id: 'mediana-kwartyle-l2-03',
          skill: 'mediana-dominanta-liczenie',
          level: 2,
          prompt: { pl: 'W klasie oceny z klasówki rozłożyły się tak: ocena $2$ — $1$ uczeń, $3$ — $5$ uczniów, $4$ — $8$ uczniów, $5$ — $4$ uczniów, $6$ — $2$ uczniów. Wyznacz medianę ocen.', en: 'Test grades in a class: grade $2$ — $1$ student, $3$ — $5$, $4$ — $8$, $5$ — $4$, $6$ — $2$. Find the median grade.' },
          answer: '4',
          accept: ['4'],
          solution: [
            { pl: '$n=1+5+8+4+2=20$; mediana to średnia 10. i 11. oceny w porządku rosnącym.', en: '$n=20$; the median averages the 10th and 11th sorted grades.' },
            { pl: 'Liczności skumulowane: do oceny $3$ włącznie — $6$ uczniów, do $4$ włącznie — $14$.', en: 'Cumulative counts: up to grade $3$ — $6$ students, up to $4$ — $14$.' },
            { pl: 'Oceny na pozycjach $10$ i $11$ to obie $4$, więc $\\mathrm{Me}=4$.', en: 'Positions 10 and 11 both hold grade $4$, so $\\mathrm{Me}=4$.' },
          ],
          trap: { pl: 'Wzięcie mediany z listy różnych ocen $2,3,4,5,6$ z pominięciem liczności — pozycję środka wyznaczają liczności skumulowane.', en: 'Taking the median of the distinct grades $2,3,4,5,6$ and ignoring frequencies — cumulative counts locate the middle.' },
        },
        {
          id: 'mediana-kwartyle-l3-04',
          skill: 'kwartyle-liczenie',
          level: 3,
          prompt: { pl: 'Dla danych $1,\\ 3,\\ 4,\\ 6,\\ 7,\\ 9,\\ 11,\\ 15$ wyznacz rozstęp międzykwartylowy.', en: 'For the data $1,\\ 3,\\ 4,\\ 6,\\ 7,\\ 9,\\ 11,\\ 15$ find the interquartile range.' },
          answer: '6{,}5',
          accept: ['6.5', '6,5', '13/2'],
          solution: [
            { pl: '$n=8$: dolna połowa $1,3,4,6$, górna $7,9,11,15$.', en: '$n=8$: lower half $1,3,4,6$, upper half $7,9,11,15$.' },
            { pl: '$Q_1=\\frac{3+4}{2}=3{,}5$, $\\ Q_3=\\frac{9+11}{2}=10$.', en: '$Q_1=\\frac{3+4}{2}=3.5$, $Q_3=\\frac{9+11}{2}=10$.' },
            { pl: '$\\mathrm{IQR}=10-3{,}5=6{,}5$.', en: '$\\mathrm{IQR}=10-3.5=6.5$.' },
          ],
          trap: { pl: 'Policzenie rozstępu $15-1=14$ zamiast międzykwartylowego — IQR mierzy środek zestawu, nie skrajności.', en: 'Computing the range $15-1=14$ instead of the IQR — the IQR measures the middle of the data, not the extremes.' },
        },
        {
          id: 'mediana-kwartyle-l4-05',
          skill: 'kwartyle-liczenie',
          level: 4,
          prompt: { pl: 'Dla danych $2,\\ 4,\\ 5,\\ 5,\\ 6,\\ 7,\\ 8,\\ 9,\\ 10,\\ 12,\\ 14$ wyznacz kwartyle $Q_1$ i $Q_3$.', en: 'For the data $2,\\ 4,\\ 5,\\ 5,\\ 6,\\ 7,\\ 8,\\ 9,\\ 10,\\ 12,\\ 14$ find $Q_1$ and $Q_3$.' },
          answer: 'Q_1=5,\\ Q_3=10',
          accept: ['5 i 10', 'Q1=5, Q3=10'],
          solution: [
            { pl: '$n=11$: mediana to szósty wyraz, $\\mathrm{Me}=7$; nie wliczamy go do żadnej połowy.', en: '$n=11$: the median is the 6th term, $7$; it joins neither half.' },
            { pl: 'Dolna połowa $2,4,5,5,6$: $Q_1=5$ (środkowy z pięciu).', en: 'Lower half $2,4,5,5,6$: $Q_1=5$.' },
            { pl: 'Górna połowa $8,9,10,12,14$: $Q_3=10$.', en: 'Upper half $8,9,10,12,14$: $Q_3=10$.' },
          ],
          trap: { pl: 'Wliczenie mediany do obu połówek przy nieparzystym $n$ — w konwencji szkolnej środkowy wyraz odpada.', en: 'Including the median in both halves for odd $n$ — in the school convention the middle term is dropped.' },
        },
        {
          id: 'mediana-kwartyle-l4-06',
          skill: 'miary-pozycyjne-odwrotnie',
          level: 4,
          prompt: { pl: 'Zestaw danych uporządkowany rosnąco ma postać $2,\\ x,\\ x+4,\\ 10$, a jego mediana wynosi $7$. Wyznacz $x$.', en: 'A data set sorted increasingly reads $2,\\ x,\\ x+4,\\ 10$ and its median is $7$. Find $x$.' },
          answer: 'x=5',
          accept: ['5'],
          solution: [
            { pl: '$n=4$, więc mediana to średnia dwóch środkowych wyrazów: $\\frac{x+(x+4)}{2}=x+2$.', en: '$n=4$: the median averages the middle terms, $\\frac{x+(x+4)}{2}=x+2$.' },
            { pl: '$x+2=7$, stąd $x=5$.', en: '$x+2=7$, so $x=5$.' },
            { pl: 'Kontrola porządku: $2\\le5\\le9\\le10$ — zgadza się.', en: 'Order check: $2\\le5\\le9\\le10$ — consistent.' },
          ],
          trap: { pl: 'Uśrednienie skrajnych wyrazów $\\frac{2+10}{2}=6$ — mediana bierze wyrazy środkowe, nie skrajne.', en: 'Averaging the extremes $\\frac{2+10}{2}=6$ — the median uses the middle terms, not the endpoints.' },
        },
        {
          id: 'mediana-kwartyle-l5-07',
          skill: 'miary-pozycyjne-odwrotnie',
          level: 5,
          prompt: { pl: 'Do zestawu $3,\\ 5,\\ 7,\\ 9$ dołączamy liczbę $x$. Wyznacz wszystkie wartości $x$, dla których mediana nowego, pięcioelementowego zestawu jest równa $5$.', en: 'A number $x$ is appended to the set $3,\\ 5,\\ 7,\\ 9$. Find all $x$ for which the median of the new five-element set equals $5$.' },
          answer: 'x\\le 5',
          accept: ['x<=5', 'x \\le 5', '(-\\infty; 5\\rangle', '(-inf,5]'],
          solution: [
            { pl: 'Po dołączeniu $x$ mamy $n=5$, więc mediana to trzeci wyraz po uporządkowaniu.', en: 'With $x$ added, $n=5$, so the median is the 3rd sorted term.' },
            { pl: 'Dla $x\\le5$ porządek zaczyna się od $x$ lub $3$, a trzecim wyrazem jest $5$ — mediana $5$.', en: 'For $x\\le5$ the third sorted term is $5$ — median $5$.' },
            { pl: 'Dla $5<x\\le7$ trzecim wyrazem jest $x>5$, a dla $x>7$ — liczba $7$; w obu przypadkach mediana przekracza $5$.', en: 'For $5<x\\le7$ the third term is $x>5$, for $x>7$ it is $7$; both exceed $5$.' },
            { pl: 'Odpowiedź: $x\\in(-\\infty;5\\rangle$.', en: 'Answer: $x\\in(-\\infty;5]$.' },
          ],
          trap: { pl: 'Zgubienie przypadku brzegowego $x=5$ albo założenie, że $x$ musi trafić dokładnie w środek — dla każdego $x\\le5$ środek i tak wypada na piątce.', en: 'Dropping the boundary case $x=5$, or assuming $x$ itself must land in the middle — for every $x\\le5$ the middle is the existing $5$.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wariancja-odchylenie',
      title: { pl: 'Wariancja i odchylenie standardowe', en: 'Variance and standard deviation' },
      level: 3,
      prereq: ['srednie'],
      theory: {
        pl: 'Wariancja $\\sigma^2=\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})^2$ to średnia kwadratów '
          + 'odchyleń od średniej, a odchylenie standardowe $\\sigma=\\sqrt{\\sigma^2}$ wraca do jednostek '
          + 'danych — mówi, jak daleko od średniej leży typowa obserwacja. W rachunkach szybszy bywa wzór '
          + 'skrócony $\\sigma^2=\\frac{1}{n}\\sum x_i^2-\\bar{x}^2$, czyli „średnia kwadratów minus '
          + 'kwadrat średniej” — wystarczą dwie sumy, bez liczenia poszczególnych odchyleń. Dla danych '
          + 'z tabeli liczności obie sumy liczy się z wagami $n_i$. Uwaga na konwencję: matura dzieli '
          + 'przez $n$ (wariancja populacyjna), natomiast w statystyce akademickiej estymator z próby '
          + 'dzieli przez $n-1$. Ten sam wzór skrócony wróci przy zmiennych losowych jako '
          + '$\\operatorname{Var}(X)=E(X^2)-(E(X))^2$.',
        en: 'The variance $\\sigma^2=\\frac{1}{n}\\sum(x_i-\\bar{x})^2$ is the mean squared deviation from '
          + 'the mean; the standard deviation $\\sigma=\\sqrt{\\sigma^2}$ restores the units of the data — '
          + 'how far a typical observation sits from the mean. The shortcut '
          + '$\\sigma^2=\\frac{1}{n}\\sum x_i^2-\\bar{x}^2$ ("mean of squares minus square of the mean") '
          + 'needs only two sums. For frequency tables both sums carry the weights $n_i$. Convention '
          + 'warning: the matura divides by $n$ (population variance); academic statistics mostly uses the '
          + 'sample estimator with $n-1$. The same shortcut returns for random variables as '
          + '$\\operatorname{Var}(X)=E(X^2)-(E(X))^2$.',
      },
      formulas: [
        { id: 'wariancja-wzor-podstawowy', tex: '\\sigma^{2}=\\frac{1}{n}\\sum_{i=1}^{n}\\left(x_{i}-\\bar{x}\\right)^{2}', name: { pl: 'Wariancja — wzór podstawowy', en: 'Variance — the defining formula' }, note: { pl: 'Średnia kwadratów odchyleń. Matura dzieli przez $n$; statystyka z próby — przez $n-1$.', en: 'The mean squared deviation. Matura divides by $n$; sample statistics by $n-1$.' }, drill: true },
        { id: 'wariancja-wzor-skrocony', tex: '\\sigma^{2}=\\frac{1}{n}\\sum_{i=1}^{n}x_{i}^{2}-\\bar{x}^{2}', name: { pl: 'Wariancja — wzór skrócony', en: 'Variance — the shortcut formula' }, note: { pl: '„Średnia kwadratów minus kwadrat średniej”. Kolejność nieprzypadkowa: odwrotna dałaby liczbę ujemną.', en: '"Mean of squares minus square of the mean". The order matters: reversed, it would go negative.' }, drill: true },
        { id: 'odchylenie-standardowe-wzor', tex: '\\sigma=\\sqrt{\\sigma^{2}}', name: { pl: 'Odchylenie standardowe', en: 'Standard deviation' }, note: { pl: 'Pierwiastek z wariancji — jedyna z tych miar w jednostkach danych.', en: 'The square root of the variance — the only one of these in the data units.' }, drill: true },
      ],
      skills: [
        { id: 'wariancja-z-definicji', title: { pl: 'Wariancja z definicji', en: 'Variance from the definition' }, levels: [2, 3, 4] },
        { id: 'wariancja-wzorem-skroconym', title: { pl: 'Wzór skrócony i tabele liczności', en: 'The shortcut formula and frequency tables' }, levels: [3, 4] },
        { id: 'odchylenie-zadania-odwrotne', title: { pl: 'Zadania odwrotne o rozrzucie', en: 'Reverse problems about spread' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'wariancja-odchylenie-l2-01',
          skill: 'wariancja-z-definicji',
          level: 2,
          prompt: { pl: 'Oblicz wariancję danych: $1,\\ 3,\\ 5,\\ 7,\\ 9$.', en: 'Compute the variance of the data $1,\\ 3,\\ 5,\\ 7,\\ 9$.' },
          answer: '8',
          accept: ['8'],
          solution: [
            { pl: 'Średnia: $\\bar{x}=\\frac{25}{5}=5$.', en: 'Mean: $\\bar{x}=5$.' },
            { pl: 'Odchylenia: $-4,-2,0,2,4$; ich kwadraty: $16,4,0,4,16$, suma $40$.', en: 'Deviations $-4,-2,0,2,4$; squares sum to $40$.' },
            { pl: '$\\sigma^{2}=\\frac{40}{5}=8$.', en: '$\\sigma^{2}=\\frac{40}{5}=8$.' },
          ],
          trap: { pl: 'Dzielenie przez $n-1=4$ — na maturze wariancja to średnia kwadratów odchyleń, dzielona przez $n$.', en: 'Dividing by $n-1=4$ — on the matura the variance divides by $n$.' },
        },
        {
          id: 'wariancja-odchylenie-l3-02',
          skill: 'wariancja-z-definicji',
          level: 3,
          prompt: { pl: 'Oblicz odchylenie standardowe danych: $2,\\ 4,\\ 4,\\ 4,\\ 5,\\ 5,\\ 7,\\ 9$.', en: 'Compute the standard deviation of the data $2,\\ 4,\\ 4,\\ 4,\\ 5,\\ 5,\\ 7,\\ 9$.' },
          answer: '2',
          accept: ['2'],
          solution: [
            { pl: 'Średnia: $\\bar{x}=\\frac{40}{8}=5$.', en: 'Mean: $\\bar{x}=\\frac{40}{8}=5$.' },
            { pl: 'Kwadraty odchyleń: $9,1,1,1,0,0,4,16$; suma $32$, więc $\\sigma^{2}=\\frac{32}{8}=4$.', en: 'Squared deviations sum to $32$, so $\\sigma^{2}=4$.' },
            { pl: '$\\sigma=\\sqrt{4}=2$.', en: '$\\sigma=\\sqrt{4}=2$.' },
          ],
          trap: { pl: 'Zatrzymanie się na wariancji ($4$) — pytanie jest o odchylenie, czyli o pierwiastek z niej.', en: 'Stopping at the variance ($4$) — the question asks for its square root.' },
        },
        {
          id: 'wariancja-odchylenie-l3-03',
          skill: 'wariancja-wzorem-skroconym',
          level: 3,
          prompt: { pl: 'Średnia zestawu danych wynosi $4$, a średnia kwadratów tych danych wynosi $25$. Oblicz odchylenie standardowe zestawu.', en: 'A data set has mean $4$ and mean of squares $25$. Compute its standard deviation.' },
          answer: '3',
          accept: ['3'],
          solution: [
            { pl: 'Wzór skrócony: $\\sigma^{2}=\\frac{1}{n}\\sum x_i^{2}-\\bar{x}^{2}=25-16=9$.', en: 'Shortcut: $\\sigma^{2}=25-16=9$.' },
            { pl: '$\\sigma=\\sqrt{9}=3$.', en: '$\\sigma=3$.' },
          ],
          trap: { pl: 'Odjęcie średniej zamiast jej kwadratu: $25-4=21$ — wzór to średnia kwadratów minus KWADRAT średniej.', en: 'Subtracting the mean instead of its square: $25-4=21$ — it is mean of squares minus the SQUARE of the mean.' },
        },
        {
          id: 'wariancja-odchylenie-l4-04',
          skill: 'wariancja-wzorem-skroconym',
          level: 4,
          prompt: { pl: 'W tabeli liczności wartość $1$ występuje $4$ razy, $2$ — $3$ razy, $3$ — $2$ razy, $4$ — $1$ raz. Oblicz odchylenie standardowe tych danych.', en: 'In a frequency table the value $1$ occurs $4$ times, $2$ — $3$ times, $3$ — $2$ times, $4$ — once. Compute the standard deviation.' },
          answer: '1',
          accept: ['1'],
          solution: [
            { pl: '$n=10$; suma: $1\\cdot4+2\\cdot3+3\\cdot2+4\\cdot1=20$, więc $\\bar{x}=2$.', en: '$n=10$; the total is $20$, so $\\bar{x}=2$.' },
            { pl: 'Suma kwadratów z wagami: $1\\cdot4+4\\cdot3+9\\cdot2+16\\cdot1=50$; średnia kwadratów $5$.', en: 'Weighted sum of squares: $50$; mean of squares $5$.' },
            { pl: '$\\sigma^{2}=5-2^{2}=1$, więc $\\sigma=1$.', en: '$\\sigma^{2}=5-4=1$, so $\\sigma=1$.' },
          ],
          trap: { pl: 'Zapomnienie liczności przy sumie kwadratów — obie sumy, $\\sum n_i x_i$ i $\\sum n_i x_i^{2}$, biorą te same wagi.', en: 'Dropping the frequencies in the sum of squares — both sums carry the same weights.' },
        },
        {
          id: 'wariancja-odchylenie-l4-05',
          skill: 'wariancja-z-definicji',
          level: 4,
          prompt: { pl: 'Zestaw danych $2,\\ 4,\\ 6,\\ x$ ma średnią równą $5$. Oblicz wariancję tego zestawu.', en: 'The data set $2,\\ 4,\\ 6,\\ x$ has mean $5$. Compute its variance.' },
          answer: '5',
          accept: ['5'],
          solution: [
            { pl: 'Ze średniej: $\\frac{12+x}{4}=5$, więc $x=8$.', en: 'From the mean: $\\frac{12+x}{4}=5$, so $x=8$.' },
            { pl: 'Dane $2,4,6,8$ o średniej $5$: odchylenia $-3,-1,1,3$, kwadraty $9,1,1,9$.', en: 'Data $2,4,6,8$, deviations $-3,-1,1,3$, squares $9,1,1,9$.' },
            { pl: '$\\sigma^{2}=\\frac{20}{4}=5$.', en: '$\\sigma^{2}=\\frac{20}{4}=5$.' },
          ],
          trap: { pl: 'Liczenie wariancji z samych $2,4,6$ — najpierw trzeba odzyskać $x$ ze średniej, potem liczyć rozrzut pełnego zestawu.', en: 'Computing the variance of $2,4,6$ alone — recover $x$ from the mean first.' },
        },
        {
          id: 'wariancja-odchylenie-l4-06',
          skill: 'wariancja-wzorem-skroconym',
          level: 4,
          prompt: { pl: 'Zestaw danych $x_1,\\dots,x_n$ ma średnią $\\bar{x}=3$ i odchylenie standardowe $\\sigma=2$. Oblicz średnią kwadratów tych danych, czyli $\\frac{1}{n}\\sum_{i=1}^{n}x_i^{2}$.', en: 'A data set has mean $\\bar{x}=3$ and standard deviation $\\sigma=2$. Compute the mean of the squares, $\\frac{1}{n}\\sum x_i^{2}$.' },
          answer: '13',
          accept: ['13'],
          solution: [
            { pl: 'Ze wzoru skróconego: $\\frac{1}{n}\\sum x_i^{2}=\\sigma^{2}+\\bar{x}^{2}$.', en: 'Rearrange the shortcut: mean of squares $=\\sigma^{2}+\\bar{x}^{2}$.' },
            { pl: '$\\sigma^{2}=4$, $\\bar{x}^{2}=9$, więc średnia kwadratów $=4+9=13$.', en: '$4+9=13$.' },
          ],
          trap: { pl: 'Wstawienie $\\sigma$ zamiast $\\sigma^{2}$ (wynik $2+9=11$) — we wzorze skróconym wszystko jest w kwadratach.', en: 'Using $\\sigma$ instead of $\\sigma^{2}$ (getting $11$) — everything in the shortcut is squared.' },
        },
        {
          id: 'wariancja-odchylenie-l5-07',
          skill: 'odchylenie-zadania-odwrotne',
          level: 5,
          prompt: { pl: 'Uzasadnij, że odchylenie standardowe zestawu $a,\\ a+2,\\ a+4,\\ a+6,\\ a+8$ nie zależy od $a$, i oblicz je.', en: 'Show that the standard deviation of $a,\\ a+2,\\ a+4,\\ a+6,\\ a+8$ does not depend on $a$, and compute it.' },
          answer: '2\\sqrt{2}',
          accept: ['2\\sqrt2', 'sqrt(8)', '2 pierwiastek z 2'],
          solution: [
            { pl: 'Średnia: $\\bar{x}=a+4$ (wyraz środkowy ciągu arytmetycznego).', en: 'The mean is $a+4$, the middle term of the arithmetic progression.' },
            { pl: 'Odchylenia od średniej: $-4,-2,0,2,4$ — nie zawierają $a$, więc rozrzut od $a$ nie zależy.', en: 'The deviations $-4,-2,0,2,4$ contain no $a$, so the spread cannot depend on it.' },
            { pl: '$\\sigma^{2}=\\frac{16+4+0+4+16}{5}=8$, więc $\\sigma=2\\sqrt{2}$.', en: '$\\sigma^{2}=\\frac{40}{5}=8$, so $\\sigma=2\\sqrt{2}$.' },
          ],
          trap: { pl: 'Wrażenie, że skoro dane rosną z $a$, to i odchylenie rośnie — przesunięcie wszystkich danych o stałą nie zmienia odchyleń od średniej.', en: 'Feeling that growing data means growing spread — shifting every value by a constant leaves the deviations untouched.' },
        },
        {
          id: 'wariancja-odchylenie-l5-08',
          skill: 'odchylenie-zadania-odwrotne',
          level: 5,
          prompt: { pl: 'Dwie liczby mają średnią arytmetyczną $10$ i odchylenie standardowe $3$. Wyznacz te liczby.', en: 'Two numbers have arithmetic mean $10$ and standard deviation $3$. Find the numbers.' },
          answer: '7 \\text{ i } 13',
          accept: ['7 i 13', '13 i 7', '7, 13'],
          solution: [
            { pl: 'Zapiszmy liczby symetrycznie względem średniej: $10-t$ i $10+t$, $t\\ge0$.', en: 'Write the numbers symmetrically about the mean: $10-t$ and $10+t$.' },
            { pl: 'Wariancja: $\\frac{(-t)^{2}+t^{2}}{2}=t^{2}=9$, więc $t=3$.', en: 'Variance: $\\frac{t^{2}+t^{2}}{2}=t^{2}=9$, so $t=3$.' },
            { pl: 'Liczby to $7$ i $13$.', en: 'The numbers are $7$ and $13$.' },
          ],
          trap: { pl: 'Dla dwóch liczb każda leży dokładnie $\\sigma$ od średniej — ale po przeciwnych stronach; ustawienie obu po tej samej stronie psuje średnią.', en: 'With two numbers each sits exactly $\\sigma$ from the mean — on opposite sides; putting both on one side breaks the mean.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'przeksztalcenia-danych',
      title: { pl: 'Przekształcenia liniowe danych', en: 'Linear transformations of data' },
      level: 4,
      prereq: ['srednie', 'wariancja-odchylenie'],
      theory: {
        pl: 'Przekształcenie liniowe $y_i=ax_i+b$ działa na miary zestawu w pełni przewidywalnie: '
          + 'średnia przechodzi na $\\bar{y}=a\\bar{x}+b$, a odchylenie standardowe na '
          + '$\\sigma_y=|a|\\,\\sigma_x$. Przesunięcie o $b$ zmienia położenie danych, ale nie ich '
          + 'rozrzut; skalowanie mnoży rozrzut przez $|a|$ — znak $a$ znika, bo odchylenie jest '
          + 'nieujemne. Wariancja skaluje się przez $a^2$, bo jest kwadratem odchylenia. Dowód mieści '
          + 'się w jednej linijce: $y_i-\\bar{y}=a(x_i-\\bar{x})$, więc kwadraty odchyleń mnożą się '
          + 'przez $a^2$. Mediana i kwartyle przechodzą przez to samo przekształcenie (dla $a>0$ porządek '
          + 'danych się zachowuje). Szczególny przypadek to standaryzacja '
          + '$z_i=\\frac{x_i-\\bar{x}}{\\sigma}$, po której zestaw ma średnią $0$ i odchylenie $1$ — '
          + 'wspólna skala do porównywania wyników z różnych testów.',
        en: 'A linear transformation $y_i=ax_i+b$ acts on summary measures completely predictably: '
          + 'the mean becomes $a\\bar{x}+b$, the standard deviation $|a|\\,\\sigma_x$. Shifting by $b$ '
          + 'moves the data without changing spread; scaling multiplies spread by $|a|$ — the sign of $a$ '
          + 'disappears because a standard deviation is nonnegative. The variance scales by $a^2$. The '
          + 'proof is one line: $y_i-\\bar{y}=a(x_i-\\bar{x})$, so squared deviations pick up $a^2$. '
          + 'Median and quartiles transform the same way (order is preserved for $a>0$). The special case '
          + 'is standardisation $z_i=\\frac{x_i-\\bar{x}}{\\sigma}$, which produces mean $0$ and deviation '
          + '$1$ — a common scale for comparing scores across tests.',
      },
      formulas: [
        { id: 'transformacja-srednia', tex: 'y_{i}=ax_{i}+b\\ \\Rightarrow\\ \\bar{y}=a\\bar{x}+b', name: { pl: 'Średnia po przekształceniu liniowym', en: 'The mean under a linear map' }, note: { pl: 'Średnia „przechodzi przez” przekształcenie liniowe bez strat.', en: 'The mean passes through a linear map intact.' }, drill: true },
        { id: 'transformacja-odchylenie', tex: 'y_{i}=ax_{i}+b\\ \\Rightarrow\\ \\sigma_{y}=|a|\\,\\sigma_{x},\\qquad \\sigma_{y}^{2}=a^{2}\\sigma_{x}^{2}', name: { pl: 'Odchylenie po przekształceniu liniowym', en: 'The deviation under a linear map' }, note: { pl: 'Przesunięcie $b$ znika, znak $a$ znika. Wariancja bierze $a^{2}$.', en: 'The shift $b$ vanishes, the sign of $a$ vanishes. The variance takes $a^{2}$.' }, drill: true },
        { id: 'standaryzacja-wzor', tex: 'z_{i}=\\frac{x_{i}-\\bar{x}}{\\sigma}\\ \\Rightarrow\\ \\bar{z}=0,\\ \\sigma_{z}=1', name: { pl: 'Standaryzacja', en: 'Standardisation' }, note: { pl: 'Wynik $z$ mówi, ile odchyleń standardowych dzieli obserwację od średniej.', en: 'The $z$-score counts standard deviations between an observation and the mean.' }, drill: true },
      ],
      skills: [
        { id: 'transformacje-liniowe-obliczenia', title: { pl: 'Nowa średnia i nowe odchylenie', en: 'New mean and new deviation' }, levels: [3, 4, 5] },
        { id: 'standaryzacja-wynikow', title: { pl: 'Standaryzacja i kalibracja wyników', en: 'Standardising and calibrating scores' }, levels: [4, 5] },
        { id: 'transformacje-uzasadnienia', title: { pl: 'Uzasadnienia i dowody', en: 'Justifications and proofs' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'przeksztalcenia-danych-l3-01',
          skill: 'transformacje-liniowe-obliczenia',
          level: 3,
          prompt: { pl: 'Zestaw danych ma średnią $12$ i odchylenie standardowe $3$. Każdą daną zwiększono o $5$. Podaj średnią i odchylenie standardowe nowego zestawu.', en: 'A data set has mean $12$ and standard deviation $3$. Every value is increased by $5$. Give the new mean and standard deviation.' },
          answer: '\\bar{y}=17,\\ \\sigma_y=3',
          accept: ['17 i 3'],
          solution: [
            { pl: 'Przekształcenie $y_i=x_i+5$: średnia $\\bar{y}=12+5=17$.', en: '$y_i=x_i+5$: the mean becomes $17$.' },
            { pl: 'Przesunięcie nie zmienia odchyleń od średniej, więc $\\sigma_y=3$.', en: 'A shift leaves the deviations unchanged: $\\sigma_y=3$.' },
          ],
          trap: { pl: 'Dodanie $5$ także do odchylenia — rozrzut nie widzi przesunięcia.', en: 'Adding $5$ to the deviation as well — spread is blind to shifts.' },
        },
        {
          id: 'przeksztalcenia-danych-l3-02',
          skill: 'transformacje-liniowe-obliczenia',
          level: 3,
          prompt: { pl: 'Zestaw danych ma średnią $12$ i odchylenie standardowe $3$. Każdą daną pomnożono przez $2$. Podaj średnią i odchylenie standardowe nowego zestawu.', en: 'A data set has mean $12$ and standard deviation $3$. Every value is doubled. Give the new mean and standard deviation.' },
          answer: '\\bar{y}=24,\\ \\sigma_y=6',
          accept: ['24 i 6'],
          solution: [
            { pl: '$y_i=2x_i$: średnia $\\bar{y}=2\\cdot12=24$.', en: '$y_i=2x_i$: the mean is $24$.' },
            { pl: 'Odchylenie mnoży się przez $|2|$: $\\sigma_y=6$.', en: 'The deviation scales by $|2|$: $\\sigma_y=6$.' },
          ],
          trap: { pl: 'Pozostawienie odchylenia bez zmian — skalowanie, w odróżnieniu od przesunięcia, rozciąga też rozrzut.', en: 'Leaving the deviation unchanged — scaling, unlike shifting, stretches the spread too.' },
        },
        {
          id: 'przeksztalcenia-danych-l4-03',
          skill: 'transformacje-liniowe-obliczenia',
          level: 4,
          prompt: { pl: 'Zestaw danych ma średnią $12$ i odchylenie standardowe $3$. Każdą daną pomnożono przez $-2$. Podaj średnią i odchylenie standardowe nowego zestawu.', en: 'A data set has mean $12$ and standard deviation $3$. Every value is multiplied by $-2$. Give the new mean and standard deviation.' },
          answer: '\\bar{y}=-24,\\ \\sigma_y=6',
          accept: ['-24 i 6'],
          solution: [
            { pl: '$y_i=-2x_i$: średnia $\\bar{y}=-2\\cdot12=-24$.', en: '$y_i=-2x_i$: the mean is $-24$.' },
            { pl: 'Odchylenie mnoży się przez $|-2|=2$: $\\sigma_y=6$.', en: 'The deviation scales by $|-2|=2$: $\\sigma_y=6$.' },
          ],
          trap: { pl: 'Odpowiedź $\\sigma_y=-6$ — odchylenie standardowe jest z definicji nieujemne; znak mnożnika połyka wartość bezwzględna.', en: 'Answering $\\sigma_y=-6$ — a standard deviation is nonnegative; the absolute value absorbs the sign.' },
        },
        {
          id: 'przeksztalcenia-danych-l4-04',
          skill: 'transformacje-liniowe-obliczenia',
          level: 4,
          prompt: { pl: 'Temperatury dobowe podane w stopniach Celsjusza mają średnią $20$ i odchylenie standardowe $4$. Przeliczono je na stopnie Fahrenheita wzorem $F=1{,}8\\,C+32$. Podaj średnią i odchylenie standardowe temperatur w $^{\\circ}$F.', en: 'Daily temperatures in Celsius have mean $20$ and standard deviation $4$. They are converted by $F=1.8\\,C+32$. Give the mean and standard deviation in Fahrenheit.' },
          answer: '\\bar{y}=68,\\ \\sigma_y=7{,}2',
          accept: ['68 i 7,2', '68 i 7.2'],
          solution: [
            { pl: 'Średnia: $1{,}8\\cdot20+32=68$.', en: 'Mean: $1.8\\cdot20+32=68$.' },
            { pl: 'Odchylenie: tylko skala, bez przesunięcia: $1{,}8\\cdot4=7{,}2$.', en: 'Deviation: scale only, no shift: $1.8\\cdot4=7.2$.' },
          ],
          trap: { pl: 'Dodanie $32$ również do odchylenia ($39{,}2$) — przesunięcie działa na średnią, na rozrzut działa tylko mnożnik $1{,}8$.', en: 'Adding $32$ to the deviation as well ($39.2$) — the shift acts on the mean; only the factor $1.8$ acts on spread.' },
        },
        {
          id: 'przeksztalcenia-danych-l4-05',
          skill: 'standaryzacja-wynikow',
          level: 4,
          prompt: { pl: 'Wyniki testu mają średnią $50$ i odchylenie standardowe $10$. Uczeń zdobył $65$ punktów. Oblicz jego wynik standaryzowany $z$.', en: 'Test scores have mean $50$ and standard deviation $10$. A student scored $65$. Compute the standardised score $z$.' },
          answer: '1{,}5',
          accept: ['1.5', '1,5', '3/2'],
          solution: [
            { pl: '$z=\\frac{x-\\bar{x}}{\\sigma}=\\frac{65-50}{10}=1{,}5$.', en: '$z=\\frac{65-50}{10}=1.5$.' },
            { pl: 'Wynik leży półtora odchylenia standardowego powyżej średniej.', en: 'The score sits 1.5 standard deviations above the mean.' },
          ],
          trap: { pl: 'Dzielenie przez wariancję ($100$) zamiast przez odchylenie — $z$ ma być bezwymiarową liczbą odchyleń, nie ułamkiem wariancji.', en: 'Dividing by the variance ($100$) instead of the deviation — $z$ counts deviations, not variance fractions.' },
        },
        {
          id: 'przeksztalcenia-danych-l5-06',
          skill: 'standaryzacja-wynikow',
          level: 5,
          prompt: { pl: 'Wyniki egzaminu mają średnią $24$ i odchylenie standardowe $8$. Egzaminator przekształca wyniki wzorem $y=ax+b$ (gdzie $a>0$) tak, aby nowa średnia wynosiła $60$, a nowe odchylenie $12$. Wyznacz $a$ i $b$.', en: 'Exam scores have mean $24$ and standard deviation $8$. They are rescaled by $y=ax+b$ (with $a>0$) so that the new mean is $60$ and the new deviation $12$. Find $a$ and $b$.' },
          answer: 'a=1{,}5,\\ b=24',
          accept: ['a=1.5, b=24', 'a=3/2, b=24'],
          solution: [
            { pl: 'Z odchylenia (nie zależy od $b$): $a\\cdot8=12$, więc $a=1{,}5$.', en: 'From the deviation (independent of $b$): $8a=12$, so $a=1.5$.' },
            { pl: 'Ze średniej: $1{,}5\\cdot24+b=60$, czyli $36+b=60$, stąd $b=24$.', en: 'From the mean: $36+b=60$, so $b=24$.' },
          ],
          trap: { pl: 'Policzenie $b=60-24=36$ z pominięciem skalowania średniej — najpierw $a$ z odchylenia, potem $b$ z już przeskalowanej średniej.', en: 'Computing $b=60-24=36$ without scaling the mean first — find $a$ from the deviation, then $b$ from the scaled mean.' },
        },
        {
          id: 'przeksztalcenia-danych-l5-07',
          skill: 'transformacje-liniowe-obliczenia',
          level: 5,
          prompt: { pl: 'Dane $y_i=3x_i-2$ mają średnią $10$ i odchylenie standardowe $6$. Wyznacz średnią i odchylenie standardowe danych $x_i$.', en: 'The data $y_i=3x_i-2$ have mean $10$ and standard deviation $6$. Find the mean and standard deviation of the $x_i$.' },
          answer: '\\bar{x}=4,\\ \\sigma_x=2',
          accept: ['4 i 2'],
          solution: [
            { pl: 'Ze średniej: $3\\bar{x}-2=10$, więc $\\bar{x}=4$.', en: 'From the mean: $3\\bar{x}-2=10$, so $\\bar{x}=4$.' },
            { pl: 'Z odchylenia: $3\\sigma_x=6$, więc $\\sigma_x=2$.', en: 'From the deviation: $3\\sigma_x=6$, so $\\sigma_x=2$.' },
          ],
          trap: { pl: 'Zastosowanie wzoru „w przód”: $3\\cdot10-2=28$ — tu znamy wynik przekształcenia i cofamy się do danych wyjściowych.', en: 'Applying the map forwards ($3\\cdot10-2=28$) — here the transformed measures are known and we invert.' },
        },
        {
          id: 'przeksztalcenia-danych-l6-08',
          skill: 'transformacje-uzasadnienia',
          level: 6,
          prompt: { pl: 'Wykaż, że jeśli $y_i=ax_i+b$ dla $i=1,\\dots,n$, to $\\sigma_y^{2}=a^{2}\\sigma_x^{2}$.', en: 'Prove that if $y_i=ax_i+b$ for $i=1,\\dots,n$, then $\\sigma_y^{2}=a^{2}\\sigma_x^{2}$.' },
          answer: '\\sigma_y^{2}=a^{2}\\sigma_x^{2}',
          accept: ['dowód', 'proof'],
          solution: [
            { pl: 'Średnia: $\\bar{y}=\\frac{1}{n}\\sum(ax_i+b)=a\\bar{x}+b$.', en: 'Mean: $\\bar{y}=\\frac{1}{n}\\sum(ax_i+b)=a\\bar{x}+b$.' },
            { pl: 'Stąd $y_i-\\bar{y}=(ax_i+b)-(a\\bar{x}+b)=a(x_i-\\bar{x})$ — przesunięcie $b$ znika.', en: 'Hence $y_i-\\bar{y}=a(x_i-\\bar{x})$ — the shift $b$ cancels.' },
            { pl: 'Wariancja: $\\sigma_y^{2}=\\frac{1}{n}\\sum a^{2}(x_i-\\bar{x})^{2}=a^{2}\\sigma_x^{2}$.', en: 'Variance: $\\sigma_y^{2}=\\frac{1}{n}\\sum a^{2}(x_i-\\bar{x})^{2}=a^{2}\\sigma_x^{2}$.' },
            { pl: 'Po spierwiastkowaniu $\\sigma_y=|a|\\sigma_x$ — moduł, bo pierwiastek z $a^{2}$ to $|a|$.', en: 'Taking roots, $\\sigma_y=|a|\\sigma_x$ — the root of $a^{2}$ is $|a|$.' },
          ],
          trap: { pl: 'Dowód „dla $b=0$, bo $b$ i tak nie gra roli” — to, że $b$ znika, jest częścią tezy i wymaga pokazania $\\bar{y}=a\\bar{x}+b$.', en: 'Proving only the $b=0$ case "since $b$ does not matter" — that $b$ cancels is part of the claim and needs the $\\bar{y}=a\\bar{x}+b$ step.' },
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────── */
    {
      id: 'wartosc-oczekiwana',
      title: { pl: 'Wartość oczekiwana zmiennej losowej', en: 'Expected value of a random variable' },
      level: 5,
      prereq: ['wariancja-odchylenie', 'reguly-zliczania-permutacje-wariacje'],
      theory: {
        pl: 'Dyskretna zmienna losowa $X$ przyjmuje wartości $x_i$ z prawdopodobieństwami $p_i$, przy '
          + 'czym $\\sum p_i=1$ — tabela tych par to rozkład zmiennej. Wartość oczekiwana '
          + '$E(X)=\\sum x_i p_i$ jest średnią ważoną wartości z wagami-prawdopodobieństwami: przeciętny '
          + 'wynik w długiej serii powtórzeń, a nie wartość, którą $X$ musi kiedykolwiek przyjąć. Grę '
          + 'nazywamy sprawiedliwą, gdy wartość oczekiwana wygranej netto (po odjęciu opłaty za grę) '
          + 'wynosi zero. Wariancję zmiennej liczy się wzorem '
          + '$\\operatorname{Var}(X)=E(X^2)-(E(X))^2$ — to dokładnie skrócony wzór na wariancję danych — '
          + 'a odchylenie to $\\sigma=\\sqrt{\\operatorname{Var}(X)}$. Wartość oczekiwana jest liniowa: '
          + '$E(aX+b)=aE(X)+b$, natomiast $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$ — '
          + 'dokładnie jak przy przekształceniach liniowych danych.',
        en: 'A discrete random variable $X$ takes values $x_i$ with probabilities $p_i$, where '
          + '$\\sum p_i=1$; the table of these pairs is its distribution. The expected value '
          + '$E(X)=\\sum x_i p_i$ is the probability-weighted mean: the long-run average over many '
          + 'repetitions, not a value $X$ must ever take. A game is fair when the expected net gain '
          + '(after the entry fee) is zero. The variance is '
          + '$\\operatorname{Var}(X)=E(X^2)-(E(X))^2$ — exactly the shortcut formula for data — and '
          + '$\\sigma=\\sqrt{\\operatorname{Var}(X)}$. Expectation is linear, $E(aX+b)=aE(X)+b$, while '
          + '$\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$ — precisely as for linearly '
          + 'transformed data.',
      },
      formulas: [
        { id: 'wartosc-oczekiwana-wzor', tex: 'E(X)=\\sum_{i} x_{i}\\,p_{i}', name: { pl: 'Wartość oczekiwana', en: 'Expected value' }, note: { pl: 'Średnia ważona wartości z wagami-prawdopodobieństwami; $\\sum p_i=1$ to pierwszy test poprawności rozkładu.', en: 'The probability-weighted mean; $\\sum p_i=1$ is the first sanity check of a distribution.' }, drill: true },
        { id: 'wariancja-zmiennej-wzor', tex: '\\operatorname{Var}(X)=E\\left(X^{2}\\right)-\\left(E(X)\\right)^{2}', name: { pl: 'Wariancja zmiennej losowej', en: 'Variance of a random variable' }, note: { pl: 'Ten sam wzór skrócony, co dla danych: średnia kwadratów minus kwadrat średniej.', en: 'The same shortcut as for data: mean of squares minus square of the mean.' }, drill: true },
        { id: 'liniowosc-ex-wzor', tex: 'E(aX+b)=aE(X)+b,\\qquad \\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)', name: { pl: 'Liniowość wartości oczekiwanej', en: 'Linearity of expectation' }, note: { pl: 'Przesunięcie $b$ nie zmienia wariancji; mnożnik wchodzi do niej w kwadracie.', en: 'The shift $b$ leaves the variance alone; the factor enters it squared.' }, drill: true },
      ],
      skills: [
        { id: 'ex-z-tabeli-rozkladu', title: { pl: 'Wartość oczekiwana z tabeli rozkładu', en: 'Expected value from a distribution table' }, levels: [3, 4] },
        { id: 'ex-konstrukcja-rozkladu', title: { pl: 'Konstrukcja rozkładu z doświadczenia', en: 'Building the distribution from an experiment' }, levels: [4, 6] },
        { id: 'gry-losowe-oplaty', title: { pl: 'Gry losowe i sprawiedliwa opłata', en: 'Games of chance and the fair fee' }, levels: [4, 5] },
        { id: 'wariancja-zmiennej-losowej', title: { pl: 'Wariancja i odchylenie zmiennej', en: 'Variance and deviation of a variable' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'wartosc-oczekiwana-l3-01',
          skill: 'ex-z-tabeli-rozkladu',
          level: 3,
          prompt: { pl: 'Rzucamy raz symetryczną sześcienną kostką. Zmienna losowa $X$ oznacza liczbę wyrzuconych oczek. Oblicz $E(X)$.', en: 'A fair six-sided die is rolled once. Let $X$ be the number shown. Compute $E(X)$.' },
          answer: '\\frac{7}{2}',
          accept: ['3,5', '3.5', '7/2'],
          solution: [
            { pl: 'Każda z wartości $1,\\dots,6$ ma prawdopodobieństwo $\\frac{1}{6}$.', en: 'Each value $1,\\dots,6$ has probability $\\frac{1}{6}$.' },
            { pl: '$E(X)=\\frac{1+2+3+4+5+6}{6}=\\frac{21}{6}=\\frac{7}{2}$.', en: '$E(X)=\\frac{21}{6}=\\frac{7}{2}$.' },
          ],
          trap: { pl: 'Odrzucenie wyniku $3{,}5$, bo „kostka tak nie wypada” — wartość oczekiwana to średnia długiej serii i nie musi być możliwą wartością $X$.', en: 'Rejecting $3.5$ because "a die cannot show it" — the expectation is a long-run average, not a possible value of $X$.' },
        },
        {
          id: 'wartosc-oczekiwana-l4-02',
          skill: 'ex-z-tabeli-rozkladu',
          level: 4,
          prompt: { pl: 'Zmienna losowa $X$ przyjmuje wartości $1$, $2$, $5$ z prawdopodobieństwami odpowiednio $0{,}3$, $p$, $0{,}2$. Wyznacz $p$ i oblicz $E(X)$.', en: 'A random variable $X$ takes values $1$, $2$, $5$ with probabilities $0.3$, $p$, $0.2$. Find $p$ and compute $E(X)$.' },
          answer: 'E(X)=2{,}3',
          accept: ['2,3', '2.3', '23/10'],
          solution: [
            { pl: 'Prawdopodobieństwa sumują się do $1$: $0{,}3+p+0{,}2=1$, więc $p=0{,}5$.', en: 'Probabilities sum to 1: $p=0.5$.' },
            { pl: '$E(X)=1\\cdot0{,}3+2\\cdot0{,}5+5\\cdot0{,}2=0{,}3+1+1=2{,}3$.', en: '$E(X)=0.3+1+1=2.3$.' },
          ],
          trap: { pl: 'Uśrednienie samych wartości: $\\frac{1+2+5}{3}$ — wartości wchodzą z wagami-prawdopodobieństwami, nie po równo.', en: 'Averaging the bare values $\\frac{1+2+5}{3}$ — the values carry probability weights, not equal ones.' },
        },
        {
          id: 'wartosc-oczekiwana-l4-03',
          skill: 'ex-konstrukcja-rozkladu',
          level: 4,
          prompt: { pl: 'Rzucamy trzy razy symetryczną monetą. Zmienna losowa $X$ oznacza liczbę wyrzuconych orłów. Oblicz $E(X)$.', en: 'A fair coin is tossed three times. Let $X$ be the number of heads. Compute $E(X)$.' },
          answer: '\\frac{3}{2}',
          accept: ['1,5', '1.5', '3/2'],
          solution: [
            { pl: 'Rozkład: $P(X=0)=\\frac{1}{8}$, $P(X=1)=\\frac{3}{8}$, $P(X=2)=\\frac{3}{8}$, $P(X=3)=\\frac{1}{8}$.', en: 'Distribution: $\\frac{1}{8},\\frac{3}{8},\\frac{3}{8},\\frac{1}{8}$ for $0,1,2,3$ heads.' },
            { pl: '$E(X)=0\\cdot\\frac{1}{8}+1\\cdot\\frac{3}{8}+2\\cdot\\frac{3}{8}+3\\cdot\\frac{1}{8}=\\frac{12}{8}=\\frac{3}{2}$.', en: '$E(X)=\\frac{3+6+3}{8}=\\frac{3}{2}$.' },
          ],
          trap: { pl: 'Przyjęcie, że każda z liczb $0,1,2,3$ orłów jest jednakowo prawdopodobna ($\\frac{1}{4}$) — jednakowo prawdopodobne są ciągi rzutów, nie liczby orłów.', en: 'Treating $0,1,2,3$ heads as equally likely ($\\frac{1}{4}$ each) — the toss sequences are equally likely, not the head counts.' },
        },
        {
          id: 'wartosc-oczekiwana-l5-04',
          skill: 'gry-losowe-oplaty',
          level: 5,
          prompt: { pl: 'Gracz płaci $5$ zł za grę, po czym rzuca raz kostką: za szóstkę otrzymuje $12$ zł, za piątkę $6$ zł, w pozostałych przypadkach nic. Oblicz wartość oczekiwaną wygranej gracza (z uwzględnieniem opłaty) i oceń, czy gra jest dla niego korzystna.', en: 'A player pays 5 zl, then rolls a die once: a six pays 12 zl, a five pays 6 zl, anything else pays nothing. Compute the expected net gain (fee included) and judge whether the game favours the player.' },
          answer: '-2 \\text{ zł (gra niekorzystna)}',
          accept: ['-2', '-2 zł', '−2'],
          solution: [
            { pl: 'Wygrana netto $X$: $12-5=7$ z prawdopodobieństwem $\\frac{1}{6}$, $6-5=1$ z $\\frac{1}{6}$, $-5$ z $\\frac{4}{6}$.', en: 'Net gain $X$: $7$ w.p. $\\frac{1}{6}$, $1$ w.p. $\\frac{1}{6}$, $-5$ w.p. $\\frac{4}{6}$.' },
            { pl: '$E(X)=\\frac{7}{6}+\\frac{1}{6}-\\frac{20}{6}=-\\frac{12}{6}=-2$.', en: '$E(X)=\\frac{7+1-20}{6}=-2$.' },
            { pl: 'Średnio gracz traci $2$ zł na grę — gra jest niekorzystna.', en: 'On average the player loses 2 zl per game — unfavourable.' },
          ],
          trap: { pl: 'Policzenie tylko oczekiwanej wypłaty brutto ($\\frac{12+6}{6}=3$ zł) i uznanie gry za korzystną — opłata $5$ zł musi wejść do bilansu.', en: 'Computing only the gross expected payout (3 zl) and calling the game favourable — the 5 zl fee belongs in the balance.' },
        },
        {
          id: 'wartosc-oczekiwana-l5-05',
          skill: 'gry-losowe-oplaty',
          level: 5,
          prompt: { pl: 'Gracz rzuca dwiema kostkami. Jeśli suma oczek wynosi $12$, wygrywa $36$ zł; jeśli $11$ — wygrywa $9$ zł; w pozostałych przypadkach nie wygrywa nic. Jaka opłata za grę czyni ją sprawiedliwą?', en: 'Two dice are rolled. A sum of 12 pays 36 zl, a sum of 11 pays 9 zl, anything else pays nothing. What entry fee makes the game fair?' },
          answer: '1{,}5 \\text{ zł}',
          accept: ['1,5', '1.5', '3/2', '1,5 zł'],
          solution: [
            { pl: '$P(\\text{suma}=12)=\\frac{1}{36}$ (tylko $6{+}6$), $P(\\text{suma}=11)=\\frac{2}{36}$ ($5{+}6$ i $6{+}5$).', en: '$P(12)=\\frac{1}{36}$, $P(11)=\\frac{2}{36}$.' },
            { pl: 'Oczekiwana wypłata: $36\\cdot\\frac{1}{36}+9\\cdot\\frac{2}{36}=1+\\frac{1}{2}=1{,}5$ zł.', en: 'Expected payout: $1+0.5=1.5$ zl.' },
            { pl: 'Gra jest sprawiedliwa, gdy opłata równa się oczekiwanej wypłacie: $1{,}5$ zł.', en: 'Fair fee = expected payout = 1.5 zl.' },
          ],
          trap: { pl: 'Uznanie sum $2,\\dots,12$ za jednakowo prawdopodobne ($\\frac{1}{11}$) — jednakowo prawdopodobne są pary $(a,b)$, a sumę $11$ dają dwie pary, nie jedna.', en: 'Treating the sums $2,\\dots,12$ as equally likely — the ordered pairs are equally likely, and the sum 11 comes from two of them.' },
        },
        {
          id: 'wartosc-oczekiwana-l5-06',
          skill: 'wariancja-zmiennej-losowej',
          level: 5,
          prompt: { pl: 'Zmienna losowa $X$ przyjmuje wartości $0$, $2$, $4$ z prawdopodobieństwami $\\frac{1}{4}$, $\\frac{1}{2}$, $\\frac{1}{4}$. Oblicz odchylenie standardowe $X$.', en: 'A random variable $X$ takes values $0$, $2$, $4$ with probabilities $\\frac{1}{4}$, $\\frac{1}{2}$, $\\frac{1}{4}$. Compute the standard deviation of $X$.' },
          answer: '\\sqrt{2}',
          accept: ['sqrt(2)', '\\sqrt2', 'pierwiastek z 2'],
          solution: [
            { pl: '$E(X)=0\\cdot\\frac{1}{4}+2\\cdot\\frac{1}{2}+4\\cdot\\frac{1}{4}=2$.', en: '$E(X)=1+1=2$.' },
            { pl: '$E(X^{2})=0+4\\cdot\\frac{1}{2}+16\\cdot\\frac{1}{4}=6$.', en: '$E(X^{2})=2+4=6$.' },
            { pl: '$\\operatorname{Var}(X)=6-2^{2}=2$, więc $\\sigma=\\sqrt{2}$.', en: '$\\operatorname{Var}(X)=6-4=2$, so $\\sigma=\\sqrt{2}$.' },
          ],
          trap: { pl: 'Policzenie $(E(X))^{2}=4$ i nazwanie tego $E(X^{2})$ — kwadrat średniej i średnia kwadratów to różne liczby, a ich różnica to właśnie wariancja.', en: 'Calling $(E(X))^{2}$ the value of $E(X^{2})$ — the square of the mean and the mean of the squares differ by exactly the variance.' },
        },
        {
          id: 'wartosc-oczekiwana-l6-07',
          skill: 'ex-konstrukcja-rozkladu',
          level: 6,
          prompt: { pl: 'Ze zbioru $\\{1,2,3,4\\}$ losujemy bez zwracania dwie liczby. Zmienna losowa $X$ oznacza większą z wylosowanych liczb. Wyznacz rozkład $X$ i oblicz $E(X)$.', en: 'Two numbers are drawn without replacement from $\\{1,2,3,4\\}$. Let $X$ be the larger of the two. Find the distribution of $X$ and compute $E(X)$.' },
          answer: 'E(X)=\\frac{10}{3}',
          accept: ['10/3'],
          solution: [
            { pl: 'Wszystkich par (bez kolejności) jest $\\binom{4}{2}=6$ i są jednakowo prawdopodobne.', en: 'There are $\\binom{4}{2}=6$ equally likely pairs.' },
            { pl: '$X=2$ dla pary $\\{1,2\\}$: $P=\\frac{1}{6}$; $X=3$ dla $\\{1,3\\},\\{2,3\\}$: $P=\\frac{2}{6}$; $X=4$ dla $\\{1,4\\},\\{2,4\\},\\{3,4\\}$: $P=\\frac{3}{6}$.', en: '$P(X=2)=\\frac{1}{6}$, $P(X=3)=\\frac{2}{6}$, $P(X=4)=\\frac{3}{6}$.' },
            { pl: '$E(X)=2\\cdot\\frac{1}{6}+3\\cdot\\frac{2}{6}+4\\cdot\\frac{3}{6}=\\frac{2+6+12}{6}=\\frac{20}{6}=\\frac{10}{3}$.', en: '$E(X)=\\frac{2+6+12}{6}=\\frac{10}{3}$.' },
          ],
          trap: { pl: 'Uznanie wartości $2,3,4$ za jednakowo prawdopodobne (co dałoby $E(X)=3$) — im większa wartość, tym więcej par ją realizuje.', en: 'Treating the values $2,3,4$ as equally likely (giving $E(X)=3$) — larger maxima are realised by more pairs.' },
        },
        {
          id: 'wartosc-oczekiwana-l6-08',
          skill: 'wariancja-zmiennej-losowej',
          level: 6,
          prompt: { pl: 'Zmienna losowa $X$ przyjmuje wartości $-1$, $0$, $1$ z prawdopodobieństwami odpowiednio $p$, $1-2p$, $p$. Wyznacz wartość $p$, dla której $\\operatorname{Var}(X)=\\frac{1}{2}$.', en: 'A random variable $X$ takes values $-1$, $0$, $1$ with probabilities $p$, $1-2p$, $p$. Find $p$ such that $\\operatorname{Var}(X)=\\frac{1}{2}$.' },
          answer: 'p=\\frac{1}{4}',
          accept: ['1/4', '0,25', '0.25'],
          solution: [
            { pl: 'Rozkład jest symetryczny względem zera, więc $E(X)=-p+0+p=0$.', en: 'The distribution is symmetric about zero, so $E(X)=0$.' },
            { pl: '$\\operatorname{Var}(X)=E(X^{2})-0^{2}=1\\cdot p+0+1\\cdot p=2p$.', en: '$\\operatorname{Var}(X)=E(X^{2})=2p$.' },
            { pl: '$2p=\\frac{1}{2}$ daje $p=\\frac{1}{4}$.', en: '$2p=\\frac{1}{2}$ gives $p=\\frac{1}{4}$.' },
            { pl: 'Kontrola poprawności rozkładu: $p=\\frac{1}{4}\\in\\left\\langle 0,\\frac{1}{2}\\right\\rangle$, więc $1-2p=\\frac{1}{2}\\ge0$.', en: 'Validity check: $p=\\frac{1}{4}$ keeps $1-2p=\\frac{1}{2}\\ge0$.' },
          ],
          trap: { pl: 'Pominięcie warunku $0\\le p\\le\\frac{1}{2}$ — bez sprawdzenia, że $1-2p\\ge0$, rozwiązanie równania nie jest jeszcze rozkładem prawdopodobieństwa.', en: 'Skipping the constraint $0\\le p\\le\\frac{1}{2}$ — solving the equation is not enough until $1-2p\\ge0$ is checked.' },
        },
      ],
    },
  ],
};
