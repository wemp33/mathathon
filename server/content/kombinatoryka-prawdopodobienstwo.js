// Kombinatoryka i rachunek prawdopodobieństwa — matura rozszerzona i dalej.
export default {
  id: 'kombinatoryka-prawdopodobienstwo',
  track: 'matura',
  order: 90,
  title: {
    pl: 'Kombinatoryka i prawdopodobieństwo',
    en: 'Combinatorics and probability',
  },
  blurb: {
    pl: 'Od reguły mnożenia i symbolu Newtona po wzór Bayesa i schemat Bernoulliego — pełne zliczanie i pełny rachunek prawdopodobieństwa.',
    en: 'From the multiplication rule and binomial coefficients to Bayes’ formula and Bernoulli trials — counting and probability in full.',
  },
  topics: [
    /* ══════════════════════════════════════════════════════════════════ 1 */
    {
      id: 'reguly-zliczania-permutacje-wariacje',
      title: {
        pl: 'Reguły zliczania, permutacje i wariacje',
        en: 'Counting rules, permutations and variations',
      },
      level: 1,
      prereq: [],
      theory: {
        pl: 'Każde zadanie kombinatoryczne sprowadza się do pytania: czy wybór jest uporządkowany i czy elementy mogą się powtarzać. Regułą mnożenia liczymy ciągi decyzji wykonywanych po kolei — jeśli pierwszą decyzję można podjąć na $n_1$ sposobów, drugą (niezależnie od wyniku pierwszej) na $n_2$ sposobów, to razem jest $n_1\\cdot n_2$ możliwości. Regułą dodawania rozbijamy problem na parami rozłączne przypadki i sumujemy ich liczności; warunek rozłączności jest istotny, bo inaczej policzymy coś dwa razy. Ciąg $k$ elementów wybieranych ze zbioru $n$-elementowego z powtórzeniami to wariacja z powtórzeniami — jest ich $n^k$; bez powtórzeń jest ich $n(n-1)\\cdots(n-k+1)$. Permutacja to ustawienie wszystkich $n$ elementów w ciąg, czyli $n!$ możliwości, a gdy część elementów jest nierozróżnialna, dzielimy przez silnie ich krotności. W zadaniach z warunkiem „co najmniej” prawie zawsze szybciej jest policzyć dopełnienie: wszystkie układy minus te złe. Trzy najczęstsze techniki to sklejanie elementów w blok, metoda przerw (miejsc między elementami) oraz rozbicie na przypadki według pozycji wyróżnionej cyfry.',
        en: 'Every counting problem reduces to two questions: is the choice ordered, and may elements repeat. The multiplication rule counts sequences of successive decisions — if the first can be made in $n_1$ ways and the second in $n_2$ ways regardless of the first, there are $n_1\\cdot n_2$ possibilities. The addition rule splits the problem into pairwise disjoint cases and adds their sizes; disjointness is essential, otherwise something is counted twice. A sequence of $k$ elements drawn from an $n$-element set with repetition is a variation with repetition — there are $n^k$ of them; without repetition there are $n(n-1)\\cdots(n-k+1)$. A permutation orders all $n$ elements, giving $n!$, and when some elements are indistinguishable we divide by the factorials of their multiplicities. For an "at least" condition it is almost always faster to count the complement: all arrangements minus the bad ones. The three standard tricks are gluing elements into a block, the gap method, and splitting into cases by the position of a distinguished digit.',
      },
      formulas: [
        {
          id: 'regula-mnozenia',
          tex: '|A_1\\times A_2\\times\\dots\\times A_k| = n_1\\cdot n_2\\cdot\\dots\\cdot n_k',
          name: { pl: 'Reguła mnożenia', en: 'Multiplication rule' },
          note: {
            pl: 'Działa tylko wtedy, gdy liczba możliwości w każdym kroku nie zależy od tego, co wybrano wcześniej. Jeśli zależy — rozbij na przypadki.',
            en: 'Valid only when the number of options at each step does not depend on earlier choices. If it does — split into cases.',
          },
          drill: true,
        },
        {
          id: 'regula-dodawania',
          tex: 'A\\cap B=\\varnothing\\ \\Rightarrow\\ |A\\cup B|=|A|+|B|',
          name: { pl: 'Reguła dodawania', en: 'Addition rule' },
          note: {
            pl: 'Przypadki muszą być parami rozłączne i wyczerpywać całość. Klasyczny błąd: przypadki zachodzące na siebie.',
            en: 'The cases must be pairwise disjoint and exhaustive. Classic error: overlapping cases.',
          },
          drill: true,
        },
        {
          id: 'wariacje-z-powtorzeniami-wzor',
          tex: 'W_n^{\\,k}=n^{k}',
          name: { pl: 'Wariacje $k$-wyrazowe z powtórzeniami', en: '$k$-element variations with repetition' },
          note: {
            pl: 'Ciągi długości $k$ o wyrazach ze zbioru $n$-elementowego; to także liczba funkcji ze zbioru $k$-elementowego w $n$-elementowy.',
            en: 'Sequences of length $k$ over an $n$-element set; also the number of functions from a $k$-set to an $n$-set.',
          },
          drill: true,
        },
        {
          id: 'wariacje-bez-powtorzen-wzor',
          tex: 'V_n^{\\,k}=\\frac{n!}{(n-k)!}=n(n-1)\\cdots(n-k+1)',
          name: { pl: 'Wariacje $k$-wyrazowe bez powtórzeń', en: '$k$-element variations without repetition' },
          note: {
            pl: 'Dokładnie $k$ czynników malejących o 1. To liczba funkcji różnowartościowych ze zbioru $k$-elementowego w $n$-elementowy; wymaga $k\\le n$.',
            en: 'Exactly $k$ factors decreasing by 1. The number of injections from a $k$-set to an $n$-set; requires $k\\le n$.',
          },
          drill: true,
        },
        {
          id: 'permutacje-wzor',
          tex: 'P_n=n!,\\qquad 0!=1',
          name: { pl: 'Permutacje zbioru $n$-elementowego', en: 'Permutations of an $n$-element set' },
          note: {
            pl: 'Szczególny przypadek wariacji bez powtórzeń dla $k=n$. Umowa $0!=1$ jest potrzebna, by wzory działały na krańcach.',
            en: 'The special case $k=n$ of variations without repetition. The convention $0!=1$ keeps the formulas valid at the edges.',
          },
          drill: true,
        },
        {
          id: 'permutacje-z-powtorzeniami-wzor',
          tex: 'P_n(k_1,k_2,\\dots,k_m)=\\frac{n!}{k_1!\\,k_2!\\cdots k_m!},\\qquad k_1+\\dots+k_m=n',
          name: { pl: 'Permutacje z powtórzeniami', en: 'Permutations with repetition' },
          note: {
            pl: 'Anagramy słowa o powtarzających się literach. Dzielimy przez silnię krotności każdej litery, nie przez silnię liczby różnych liter.',
            en: 'Anagrams of a word with repeated letters. Divide by the factorial of each letter’s multiplicity, not by the factorial of the number of distinct letters.',
          },
          drill: true,
        },
        {
          id: 'permutacje-cykliczne',
          tex: 'P_n^{\\circ}=(n-1)!',
          name: { pl: 'Permutacje cykliczne (ustawienia przy okrągłym stole)', en: 'Cyclic permutations (round table)' },
          note: {
            pl: 'Ustawienia różniące się obrotem uznajemy za takie same, więc jedną osobę „przybijamy” do stołu. Przy naszyjniku (odbicia też utożsamiamy) jest $\\tfrac{(n-1)!}{2}$.',
            en: 'Arrangements differing by rotation are identified, so we pin one person down. For a necklace (reflections identified too) it is $\\tfrac{(n-1)!}{2}$.',
          },
          drill: true,
        },
        {
          id: 'zasada-dopelnienia-zliczanie',
          tex: '|A^{\\prime}|=|\\Omega|-|A|',
          name: { pl: 'Zliczanie przez dopełnienie', en: 'Counting by complement' },
          note: {
            pl: 'Standardowe narzędzie przy warunku „co najmniej jeden”. Uwaga: dopełnienie „co najmniej jedna cyfra parzysta” to „wszystkie cyfry nieparzyste”, a nie „wszystkie parzyste”.',
            en: 'The standard tool for "at least one". Careful: the complement of "at least one even digit" is "all digits odd", not "all digits even".',
          },
          drill: true,
        },
        {
          id: 'wlaczenia-wylaczenia-zliczanie',
          tex: '|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|',
          name: { pl: 'Zasada włączeń i wyłączeń', en: 'Inclusion–exclusion principle' },
          note: {
            pl: 'Znaki na przemian. Dla $m$ zbiorów suma ma $2^m-1$ składników; przy zliczaniu funkcji „na” daje $\\sum_{i}(-1)^{i}\\binom{m}{i}(m-i)^{n}$.',
            en: 'Alternating signs. For $m$ sets the sum has $2^m-1$ terms; counting surjections it gives $\\sum_{i}(-1)^{i}\\binom{m}{i}(m-i)^{n}$.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'regula-mnozenia-zliczanie-kodow', title: { pl: 'Reguła mnożenia: kody, numery, liczby o zadanych cyfrach', en: 'Multiplication rule: codes, numbers, digit constraints' }, levels: [1, 2, 3] },
        { id: 'regula-dodawania-rozbicie-na-przypadki', title: { pl: 'Reguła dodawania i rozbicie na rozłączne przypadki', en: 'Addition rule and splitting into disjoint cases' }, levels: [2, 3, 4] },
        { id: 'wariacje-z-powtorzeniami-zadania', title: { pl: 'Wariacje z powtórzeniami i zliczanie funkcji', en: 'Variations with repetition and counting functions' }, levels: [1, 2, 3, 4] },
        { id: 'wariacje-bez-powtorzen-zadania', title: { pl: 'Wariacje bez powtórzeń i funkcje różnowartościowe', en: 'Variations without repetition and injections' }, levels: [1, 2, 3, 4] },
        { id: 'permutacje-i-anagramy', title: { pl: 'Permutacje, anagramy, ustawienia w rzędzie', en: 'Permutations, anagrams, arrangements in a row' }, levels: [2, 3] },
        { id: 'blok-i-metoda-przerw', title: { pl: 'Metoda bloku i metoda przerw', en: 'Block method and gap method' }, levels: [2, 3, 4] },
        { id: 'zliczanie-przez-dopelnienie', title: { pl: 'Zliczanie przez dopełnienie („co najmniej”)', en: 'Counting by complement ("at least")' }, levels: [3, 4] },
        { id: 'wlaczenia-wylaczenia-w-zliczaniu', title: { pl: 'Włączenia i wyłączenia w zadaniach zliczających', en: 'Inclusion–exclusion in counting problems' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'reguly-zliczania-permutacje-wariacje-l1-01',
          skill: 'wariacje-bez-powtorzen-zadania',
          level: 1,
          prompt: {
            pl: 'Ile jest liczb czterocyfrowych, w których zapisie wszystkie cyfry są różne?',
            en: 'How many four-digit numbers have all digits distinct?',
          },
          answer: '4536',
          accept: [],
          solution: [
            { pl: 'Pierwszą cyfrę wybieramy spośród $1,2,\\dots,9$ — jest 9 możliwości, bo liczba czterocyfrowa nie może zaczynać się od zera.', en: 'The first digit is chosen from $1,2,\\dots,9$ — 9 options, since a four-digit number cannot start with zero.' },
            { pl: 'Drugą cyfrę wybieramy spośród pozostałych 9 cyfr (zero jest już dozwolone), trzecią spośród 8, czwartą spośród 7.', en: 'The second digit comes from the remaining 9 digits (zero is now allowed), the third from 8, the fourth from 7.' },
            { pl: 'Z reguły mnożenia: $9\\cdot 9\\cdot 8\\cdot 7=4536$.', en: 'By the multiplication rule: $9\\cdot 9\\cdot 8\\cdot 7=4536$.' },
          ],
          trap: {
            pl: 'Zapisanie $10\\cdot 9\\cdot 8\\cdot 7$ — zapomnienie, że pierwsza cyfra nie może być zerem, albo odwrotnie: użycie 9 możliwości również na drugiej pozycji z błędnego powodu (tam 9 bierze się z odjęcia jednej użytej cyfry, ale dołożenia zera).',
            en: 'Writing $10\\cdot 9\\cdot 8\\cdot 7$ — forgetting the leading digit cannot be zero; or getting 9 on the second position for the wrong reason (there the 9 comes from removing one used digit but adding zero back).',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l1-02',
          skill: 'wariacje-z-powtorzeniami-zadania',
          level: 1,
          prompt: {
            pl: 'Ile jest liczb pięciocyfrowych, w których każda cyfra jest nieparzysta?',
            en: 'How many five-digit numbers have all digits odd?',
          },
          answer: '3125',
          accept: ['5^{5}'],
          solution: [
            { pl: 'Cyfry nieparzyste to $1,3,5,7,9$ — jest ich 5.', en: 'The odd digits are $1,3,5,7,9$ — five of them.' },
            { pl: 'Na każdej z pięciu pozycji niezależnie wybieramy jedną z tych 5 cyfr; warunek „liczba pięciocyfrowa” jest spełniony automatycznie, bo żadna z nich nie jest zerem.', en: 'On each of the five positions we independently choose one of these 5 digits; the "five-digit" condition holds automatically since none of them is zero.' },
            { pl: 'To wariacje z powtórzeniami: $5^{5}=3125$.', en: 'These are variations with repetition: $5^{5}=3125$.' },
          ],
          trap: {
            pl: 'Odjęcie „przypadków z zerem na początku” — zero nie jest cyfrą nieparzystą, więc żadnego odejmowania tu nie ma; odruch z zadań o wszystkich cyfrach zostaje zastosowany bezmyślnie.',
            en: 'Subtracting "cases with a leading zero" — zero is not an odd digit, so there is nothing to subtract; the reflex from all-digit problems is applied blindly.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l2-03',
          skill: 'permutacje-i-anagramy',
          level: 2,
          prompt: {
            pl: 'Ile różnych napisów (niekoniecznie mających sens) można otrzymać, przestawiając wszystkie litery wyrazu MATEMATYKA?',
            en: 'How many distinct strings (not necessarily meaningful) can be obtained by rearranging all the letters of the word MATEMATYKA?',
          },
          answer: '151200',
          accept: ['\\frac{10!}{3!\\,2!\\,2!}'],
          solution: [
            { pl: 'Wyraz ma 10 liter, w tym $\\mathrm{A}$ trzy razy, $\\mathrm{M}$ dwa razy, $\\mathrm{T}$ dwa razy oraz po jednej literze $\\mathrm{E},\\mathrm{Y},\\mathrm{K}$.', en: 'The word has 10 letters: $\\mathrm{A}$ three times, $\\mathrm{M}$ twice, $\\mathrm{T}$ twice, and one each of $\\mathrm{E},\\mathrm{Y},\\mathrm{K}$.' },
            { pl: 'Permutacje z powtórzeniami: $\\dfrac{10!}{3!\\,2!\\,2!}$.', en: 'Permutations with repetition: $\\dfrac{10!}{3!\\,2!\\,2!}$.' },
            { pl: '$\\dfrac{3\\,628\\,800}{6\\cdot 2\\cdot 2}=\\dfrac{3\\,628\\,800}{24}=151\\,200$.', en: '$\\dfrac{3\\,628\\,800}{6\\cdot 2\\cdot 2}=\\dfrac{3\\,628\\,800}{24}=151\\,200$.' },
          ],
          trap: {
            pl: 'Podzielenie przez $3!\\cdot 2!$ zamiast $3!\\cdot 2!\\cdot 2!$ — przeoczenie, że powtarza się nie tylko A i M, ale także T.',
            en: 'Dividing by $3!\\cdot 2!$ instead of $3!\\cdot 2!\\cdot 2!$ — overlooking that T repeats as well as A and M.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l2-04',
          skill: 'blok-i-metoda-przerw',
          level: 2,
          prompt: {
            pl: 'Na ile sposobów 8 osób może usiąść w rzędzie na 8 krzesłach tak, aby Anna i Bartek siedzieli obok siebie?',
            en: 'In how many ways can 8 people sit in a row of 8 chairs so that Anna and Bartek sit next to each other?',
          },
          answer: '10080',
          accept: ['2\\cdot 7!'],
          solution: [
            { pl: 'Traktujemy Annę i Bartka jako jeden blok. Wtedy ustawiamy 7 obiektów: blok i pozostałe 6 osób.', en: 'Treat Anna and Bartek as one block. We then arrange 7 objects: the block and the other 6 people.' },
            { pl: 'Tych ustawień jest $7!=5040$.', en: 'There are $7!=5040$ such arrangements.' },
            { pl: 'Wewnątrz bloku Anna i Bartek mogą siedzieć na 2 sposoby, więc łącznie $2\\cdot 7!=10\\,080$.', en: 'Inside the block they can sit in 2 orders, so in total $2\\cdot 7!=10\\,080$.' },
          ],
          trap: {
            pl: 'Zapomnienie o czynniku 2 — blok „AB” i blok „BA” to różne ustawienia, a sklejenie w jeden obiekt to zaciera.',
            en: 'Forgetting the factor 2 — the blocks "AB" and "BA" are different arrangements, and gluing them into one object hides this.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l3-05',
          skill: 'regula-mnozenia-zliczanie-kodow',
          level: 3,
          prompt: {
            pl: 'Ile jest liczb czterocyfrowych podzielnych przez 5, w których zapisie nie występuje cyfra 0?',
            en: 'How many four-digit numbers divisible by 5 contain no digit 0?',
          },
          answer: '729',
          accept: ['9^{3}'],
          solution: [
            { pl: 'Liczba jest podzielna przez 5, gdy kończy się cyfrą 0 lub 5. Cyfra 0 jest zabroniona, więc ostatnia cyfra to na pewno 5 — jedna możliwość.', en: 'A number is divisible by 5 when it ends in 0 or 5. The digit 0 is forbidden, so the last digit must be 5 — one option.' },
            { pl: 'Każdą z trzech pozostałych cyfr wybieramy spośród $1,2,\\dots,9$ — po 9 możliwości (pierwsza cyfra i tak nie może być zerem).', en: 'Each of the other three digits is chosen from $1,2,\\dots,9$ — 9 options each (the leading digit could not be zero anyway).' },
            { pl: 'Razem $9\\cdot 9\\cdot 9\\cdot 1=729$.', en: 'In total $9\\cdot 9\\cdot 9\\cdot 1=729$.' },
          ],
          trap: {
            pl: 'Doliczenie liczb kończących się zerem — warunek „bez cyfry 0” dotyczy całego zapisu, także ostatniej pozycji, więc przypadek „kończy się na 0” w ogóle nie istnieje.',
            en: 'Counting numbers ending in 0 — the "no digit 0" condition applies to the whole numeral, including the last position, so the "ends in 0" case does not exist at all.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l3-06',
          skill: 'zliczanie-przez-dopelnienie',
          level: 3,
          prompt: {
            pl: 'Ile jest liczb pięciocyfrowych, w których zapisie występuje co najmniej jedna cyfra parzysta?',
            en: 'How many five-digit numbers contain at least one even digit?',
          },
          answer: '86875',
          accept: ['90000-5^{5}'],
          solution: [
            { pl: 'Wszystkich liczb pięciocyfrowych jest $9\\cdot 10^{4}=90\\,000$.', en: 'There are $9\\cdot 10^{4}=90\\,000$ five-digit numbers in total.' },
            { pl: 'Zdarzeniem przeciwnym jest „wszystkie cyfry nieparzyste”; takich liczb jest $5^{5}=3125$.', en: 'The complement is "all digits odd"; there are $5^{5}=3125$ such numbers.' },
            { pl: 'Zatem szukana liczba to $90\\,000-3125=86\\,875$.', en: 'Hence the answer is $90\\,000-3125=86\\,875$.' },
          ],
          trap: {
            pl: 'Przyjęcie, że dopełnieniem „co najmniej jedna parzysta” jest „co najmniej jedna nieparzysta” albo „wszystkie parzyste”. Poprawne dopełnienie to „ani jedna parzysta”, czyli wszystkie nieparzyste.',
            en: 'Taking the complement of "at least one even" to be "at least one odd" or "all even". The correct complement is "no even digit", i.e. all digits odd.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l3-07',
          skill: 'blok-i-metoda-przerw',
          level: 3,
          prompt: {
            pl: 'Na ile sposobów można ustawić w rzędzie 4 dziewczynki i 3 chłopców tak, aby żadne dwie dziewczynki nie stały obok siebie?',
            en: 'In how many ways can 4 girls and 3 boys stand in a row so that no two girls stand next to each other?',
          },
          answer: '144',
          accept: ['3!\\cdot 4!'],
          solution: [
            { pl: 'Najpierw ustawiamy chłopców: $3!=6$ sposobów.', en: 'First arrange the boys: $3!=6$ ways.' },
            { pl: 'Ustawienie trzech chłopców tworzy 4 przerwy (przed pierwszym, między kolejnymi i za ostatnim): $\\_\\,B\\,\\_\\,B\\,\\_\\,B\\,\\_$.', en: 'Three boys create 4 gaps (before, between, after): $\\_\\,B\\,\\_\\,B\\,\\_\\,B\\,\\_$.' },
            { pl: 'Aby żadne dwie dziewczynki nie sąsiadowały, w każdej przerwie musi stanąć dokładnie jedna dziewczynka — a przerw jest dokładnie 4, więc rozmieszczamy je na $4!=24$ sposoby.', en: 'For no two girls to be adjacent, each gap must hold exactly one girl — and there are exactly 4 gaps, so we place them in $4!=24$ ways.' },
            { pl: 'Razem $6\\cdot 24=144$.', en: 'In total $6\\cdot 24=144$.' },
          ],
          trap: {
            pl: 'Liczenie „wszystkie ustawienia minus te, w których jakieś dwie dziewczynki stoją obok siebie” metodą bloku — bloki nakładają się na siebie i bez włączeń–wyłączeń wynik wychodzi za mały.',
            en: 'Computing "all arrangements minus those with two adjacent girls" via the block method — the blocks overlap and without inclusion–exclusion the result comes out too small.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l4-08',
          skill: 'regula-dodawania-rozbicie-na-przypadki',
          level: 4,
          prompt: {
            pl: 'Ile jest liczb czterocyfrowych, w których zapisie cyfra 7 występuje dokładnie raz?',
            en: 'How many four-digit numbers contain the digit 7 exactly once?',
          },
          answer: '2673',
          accept: ['729+1944'],
          solution: [
            { pl: 'Rozbijamy na dwa rozłączne przypadki według tego, czy siódemka stoi na pierwszej pozycji.', en: 'Split into two disjoint cases according to whether the 7 is in the leading position.' },
            { pl: 'Przypadek 1: pierwsza cyfra to 7. Pozostałe trzy cyfry są dowolne różne od 7: $9^{3}=729$.', en: 'Case 1: the leading digit is 7. The other three digits are anything but 7: $9^{3}=729$.' },
            { pl: 'Przypadek 2: siódemka stoi na jednej z trzech dalszych pozycji — 3 możliwości wyboru pozycji; pierwsza cyfra należy do $\\{1,\\dots,9\\}\\setminus\\{7\\}$, czyli 8 możliwości; dwie pozostałe pozycje to cyfry różne od 7, po 9 możliwości.', en: 'Case 2: the 7 sits in one of the three later positions — 3 choices; the leading digit is from $\\{1,\\dots,9\\}\\setminus\\{7\\}$, i.e. 8 options; the two remaining positions hold digits other than 7, 9 options each.' },
            { pl: 'Daje to $3\\cdot 8\\cdot 9\\cdot 9=1944$, a łącznie $729+1944=2673$.', en: 'That gives $3\\cdot 8\\cdot 9\\cdot 9=1944$, and in total $729+1944=2673$.' },
          ],
          trap: {
            pl: 'Wzór $4\\cdot 9^{3}$ — traktowanie wszystkich czterech pozycji jednakowo, mimo że na pierwszej pozycji zabronione jest zero, a na dalszych nie. Rozbicie na przypadki jest tu konieczne.',
            en: 'The formula $4\\cdot 9^{3}$ — treating all four positions alike, although zero is forbidden only in the leading one. Splitting into cases is essential here.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l4-09',
          skill: 'wariacje-z-powtorzeniami-zadania',
          level: 4,
          prompt: {
            pl: 'Ile jest funkcji ze zbioru $\\{1,2,3,4\\}$ w zbiór $\\{1,2,3,4,5\\}$, które nie są różnowartościowe?',
            en: 'How many functions from $\\{1,2,3,4\\}$ to $\\{1,2,3,4,5\\}$ are not injective?',
          },
          answer: '505',
          accept: ['5^{4}-5\\cdot 4\\cdot 3\\cdot 2'],
          solution: [
            { pl: 'Funkcję zadajemy, przypisując każdemu z 4 argumentów jedną z 5 wartości — wszystkich funkcji jest $5^{4}=625$ (wariacje z powtórzeniami).', en: 'A function assigns to each of the 4 arguments one of 5 values — there are $5^{4}=625$ functions (variations with repetition).' },
            { pl: 'Funkcji różnowartościowych jest tyle, ile wariacji bez powtórzeń: $5\\cdot 4\\cdot 3\\cdot 2=120$.', en: 'Injections correspond to variations without repetition: $5\\cdot 4\\cdot 3\\cdot 2=120$.' },
            { pl: 'Zatem funkcji, które nie są różnowartościowe, jest $625-120=505$.', en: 'Hence the number of non-injective functions is $625-120=505$.' },
          ],
          trap: {
            pl: 'Zamiana ról zbiorów: liczenie $4^{5}$ zamiast $5^{4}$. Wykładnikiem jest liczba elementów dziedziny, a podstawą liczba dostępnych wartości.',
            en: 'Swapping the roles of the sets: computing $4^{5}$ instead of $5^{4}$. The exponent is the size of the domain, the base the number of available values.',
          },
        },
        {
          id: 'reguly-zliczania-permutacje-wariacje-l5-10',
          skill: 'wlaczenia-wylaczenia-w-zliczaniu',
          level: 5,
          prompt: {
            pl: 'Na ile sposobów można rozdać 10 różnych książek trzem osobom tak, aby każda z osób otrzymała co najmniej jedną książkę?',
            en: 'In how many ways can 10 distinct books be distributed among three people so that each person gets at least one book?',
          },
          answer: '55980',
          accept: ['3^{10}-3\\cdot 2^{10}+3'],
          solution: [
            { pl: 'Rozdanie bez żadnych warunków to funkcja ze zbioru 10 książek w zbiór 3 osób: $3^{10}=59\\,049$ sposobów.', en: 'An unrestricted distribution is a function from the 10 books to the 3 people: $3^{10}=59\\,049$ ways.' },
            { pl: 'Niech $A_i$ oznacza zdarzenie, że $i$-ta osoba nie dostaje nic. Wtedy $|A_i|=2^{10}$, a $|A_i\\cap A_j|=1^{10}=1$ dla $i\\ne j$; przecięcie wszystkich trzech jest puste.', en: 'Let $A_i$ be the set of distributions where person $i$ gets nothing. Then $|A_i|=2^{10}$ and $|A_i\\cap A_j|=1^{10}=1$ for $i\\ne j$; the triple intersection is empty.' },
            { pl: 'Z zasady włączeń i wyłączeń $|A_1\\cup A_2\\cup A_3|=3\\cdot 2^{10}-3\\cdot 1=3072-3=3069$.', en: 'By inclusion–exclusion $|A_1\\cup A_2\\cup A_3|=3\\cdot 2^{10}-3\\cdot 1=3072-3=3069$.' },
            { pl: 'Szukana liczba to $59\\,049-3069=55\\,980$.', en: 'The answer is $59\\,049-3069=55\\,980$.' },
          ],
          trap: {
            pl: 'Odjęcie samego $3\\cdot 2^{10}$ — rozdania, w których dwie osoby nie dostają nic, zostają wtedy odjęte dwukrotnie i trzeba je oddać z powrotem. To właśnie punkt, w którym reguła dodawania zawodzi (przypadki nie są rozłączne).',
            en: 'Subtracting just $3\\cdot 2^{10}$ — distributions where two people get nothing are removed twice and must be added back. This is exactly where the addition rule fails (the cases are not disjoint).',
          },
        },
      ],
    },
  ],
};
