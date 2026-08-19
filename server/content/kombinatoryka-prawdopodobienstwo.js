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

    /* ══════════════════════════════════════════════════════════════════ 2 */
    {
      id: 'kombinacje-symbol-newtona',
      title: {
        pl: 'Kombinacje, symbol Newtona i dwumian',
        en: 'Combinations, binomial coefficients and the binomial theorem',
      },
      level: 2,
      prereq: ['reguly-zliczania-permutacje-wariacje'],
      theory: {
        pl: 'Kombinacja to wybór $k$-elementowego podzbioru ze zbioru $n$-elementowego — kolejność nie gra roli, elementy się nie powtarzają. Liczbę kombinacji podaje symbol Newtona $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$; powstaje on z wariacji bez powtórzeń przez podzielenie przez $k!$, bo każdy podzbiór był liczony w $k!$ kolejnościach. Dwie tożsamości strukturalne to symetria $\\binom{n}{k}=\\binom{n}{n-k}$ oraz reguła Pascala $\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}$, na której stoi trójkąt Pascala. Wzór dwumianowy Newtona $(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^{k}$ zamienia zliczanie w algebrę: współczynnik przy zadanej potędze odczytujemy z wyrazu ogólnego $T_{k+1}=\\binom{n}{k}a^{n-k}b^{k}$. Podstawienia $a=b=1$ oraz $a=1,\\ b=-1$ dają natychmiast $\\sum_k\\binom{n}{k}=2^n$ i zerowanie się sumy naprzemiennej — stąd np. równoliczność podzbiorów parzystych i nieparzystych. W zadaniach z warunkami („dokładnie dwie kobiety”, „co najmniej jeden as”) mnożymy kombinacje wyborów z rozłącznych grup albo przechodzimy do dopełnienia.',
        en: 'A combination is a choice of a $k$-element subset of an $n$-element set — order does not matter and elements do not repeat. Their number is the binomial coefficient $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$; it arises from variations without repetition by dividing by $k!$, since each subset was counted in $k!$ orders. Two structural identities are the symmetry $\\binom{n}{k}=\\binom{n}{n-k}$ and Pascal’s rule $\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}$, which underlies Pascal’s triangle. Newton’s binomial theorem $(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^{k}$ turns counting into algebra: the coefficient of a given power is read off the general term $T_{k+1}=\\binom{n}{k}a^{n-k}b^{k}$. Substituting $a=b=1$ and $a=1,\\ b=-1$ instantly gives $\\sum_k\\binom{n}{k}=2^n$ and the vanishing of the alternating sum — hence e.g. the equinumerosity of even- and odd-sized subsets. In constrained selections ("exactly two women", "at least one ace") we multiply combinations from disjoint groups or pass to the complement.',
      },
      formulas: [
        {
          id: 'symbol-newtona-definicja',
          tex: '\\binom{n}{k}=\\frac{n!}{k!\\,(n-k)!}=\\frac{n(n-1)\\cdots(n-k+1)}{k!}',
          name: { pl: 'Symbol Newtona (liczba kombinacji)', en: 'Binomial coefficient (number of combinations)' },
          note: {
            pl: 'Liczba $k$-elementowych podzbiorów zbioru $n$-elementowego. Druga postać jest wygodniejsza rachunkowo: $k$ czynników w liczniku, $k!$ w mianowniku.',
            en: 'The number of $k$-element subsets of an $n$-element set. The second form is handier: $k$ factors on top, $k!$ below.',
          },
          drill: true,
        },
        {
          id: 'symetria-symbolu-newtona',
          tex: '\\binom{n}{k}=\\binom{n}{n-k},\\qquad \\binom{n}{0}=\\binom{n}{n}=1',
          name: { pl: 'Symetria symbolu Newtona', en: 'Symmetry of binomial coefficients' },
          note: {
            pl: 'Wybór $k$ elementów to to samo, co wskazanie $n-k$ odrzuconych. Przy dużym $k$ zawsze przechodź na mniejszy: $\\binom{100}{98}=\\binom{100}{2}$.',
            en: 'Choosing $k$ elements equals pointing at the $n-k$ rejected ones. For large $k$ always switch to the smaller: $\\binom{100}{98}=\\binom{100}{2}$.',
          },
          drill: true,
        },
        {
          id: 'tozsamosc-pascala',
          tex: '\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}',
          name: { pl: 'Tożsamość Pascala', en: 'Pascal’s identity' },
          note: {
            pl: 'Podzbiory dzielimy według tego, czy zawierają wyróżniony element. To reguła budowy trójkąta Pascala.',
            en: 'Split subsets by whether they contain a distinguished element. This is the construction rule of Pascal’s triangle.',
          },
          drill: true,
        },
        {
          id: 'dwumian-newtona',
          tex: '(a+b)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^{k}',
          name: { pl: 'Wzór dwumianowy Newtona', en: 'Newton’s binomial theorem' },
          note: {
            pl: 'Rozwinięcie ma $n+1$ wyrazów; wykładniki $a$ maleją, $b$ rosną, w każdym wyrazie sumują się do $n$.',
            en: 'The expansion has $n+1$ terms; exponents of $a$ decrease, of $b$ increase, and in each term they sum to $n$.',
          },
          drill: true,
        },
        {
          id: 'wyraz-ogolny-dwumianu',
          tex: 'T_{k+1}=\\binom{n}{k}a^{n-k}b^{k},\\qquad k=0,1,\\dots,n',
          name: { pl: 'Wyraz ogólny rozwinięcia', en: 'General term of the expansion' },
          note: {
            pl: 'Numeracja jest przesunięta: $T_{k+1}$ odpowiada indeksowi $k$. Znak i stałe z $b$ (np. $b=-\\tfrac{1}{x^{2}}$) wchodzą do potęgi razem z nim.',
            en: 'Numbering is shifted: $T_{k+1}$ corresponds to index $k$. Signs and constants inside $b$ (e.g. $b=-\\tfrac{1}{x^{2}}$) are raised to the power along with it.',
          },
          drill: true,
        },
        {
          id: 'suma-wspolczynnikow-dwumianu',
          tex: '\\sum_{k=0}^{n}\\binom{n}{k}=2^{n},\\qquad \\sum_{k=0}^{n}(-1)^{k}\\binom{n}{k}=0\\ (n\\ge 1)',
          name: { pl: 'Suma wiersza i suma naprzemienna', en: 'Row sum and alternating sum' },
          note: {
            pl: 'Podstaw $a=b=1$ oraz $a=1,\\ b=-1$ do dwumianu. Stąd: zbiór $n$-elementowy ma $2^{n}$ podzbiorów, a podzbiorów parzystych i nieparzystych jest po $2^{n-1}$.',
            en: 'Substitute $a=b=1$ and $a=1,\\ b=-1$ into the binomial theorem. Hence an $n$-set has $2^{n}$ subsets, and even- and odd-sized subsets number $2^{n-1}$ each.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'kombinacje-obliczanie', title: { pl: 'Obliczanie liczby kombinacji i proste wybory', en: 'Computing combinations and simple selections' }, levels: [1, 2] },
        { id: 'kombinacje-wybory-z-warunkami', title: { pl: 'Wybory z warunkami: dokładnie / co najmniej', en: 'Constrained selections: exactly / at least' }, levels: [2, 3, 4] },
        { id: 'kombinacje-geometryczne', title: { pl: 'Kombinacje w geometrii: przekątne, trójkąty, punkty', en: 'Combinations in geometry: diagonals, triangles, points' }, levels: [3, 4] },
        { id: 'dwumian-newtona-wyraz-ogolny', title: { pl: 'Wyraz ogólny i współczynniki rozwinięcia', en: 'General term and coefficients of expansions' }, levels: [3, 4] },
        { id: 'rownania-tozsamosci-dwumianowe', title: { pl: 'Równania i tożsamości z symbolem Newtona', en: 'Equations and identities with binomial coefficients' }, levels: [2, 4, 5] },
      ],
      problems: [
        {
          id: 'kombinacje-symbol-newtona-l1-01',
          skill: 'kombinacje-obliczanie',
          level: 1,
          prompt: {
            pl: 'Na ile sposobów można wybrać trzyosobową delegację z klasy liczącej 10 uczniów?',
            en: 'In how many ways can a three-person delegation be chosen from a class of 10 students?',
          },
          answer: '120',
          accept: ['\\binom{10}{3}'],
          solution: [
            { pl: 'Delegacja to podzbiór — kolejność wyboru nie ma znaczenia, więc liczymy kombinacje.', en: 'A delegation is a subset — the order of choosing is irrelevant, so we count combinations.' },
            { pl: '$\\binom{10}{3}=\\dfrac{10\\cdot 9\\cdot 8}{3!}=\\dfrac{720}{6}=120$.', en: '$\\binom{10}{3}=\\dfrac{10\\cdot 9\\cdot 8}{3!}=\\dfrac{720}{6}=120$.' },
          ],
          trap: {
            pl: 'Policzenie wariacji $10\\cdot 9\\cdot 8=720$ — każda delegacja zostaje wtedy policzona $3!=6$ razy, raz dla każdej kolejności wybierania.',
            en: 'Computing the variation $10\\cdot 9\\cdot 8=720$ — each delegation is then counted $3!=6$ times, once per order of selection.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l2-02',
          skill: 'kombinacje-obliczanie',
          level: 2,
          prompt: {
            pl: 'W turnieju szachowym każdy zawodnik rozegrał z każdym innym dokładnie jedną partię. Łącznie rozegrano 45 partii. Ilu zawodników brało udział w turnieju?',
            en: 'In a chess tournament every player played exactly one game against every other player. In total 45 games were played. How many players took part?',
          },
          answer: '10',
          accept: ['n=10'],
          solution: [
            { pl: 'Każda partia odpowiada dwuelementowemu podzbiorowi zbioru zawodników, więc $\\binom{n}{2}=45$.', en: 'Each game corresponds to a two-element subset of the players, so $\\binom{n}{2}=45$.' },
            { pl: '$\\dfrac{n(n-1)}{2}=45$, czyli $n^{2}-n-90=0$.', en: '$\\dfrac{n(n-1)}{2}=45$, i.e. $n^{2}-n-90=0$.' },
            { pl: 'Pierwiastki: $n=\\dfrac{1\\pm 19}{2}$, więc $n=10$ (ujemny odrzucamy). Sprawdzenie: $\\binom{10}{2}=45$.', en: 'Roots: $n=\\dfrac{1\\pm 19}{2}$, so $n=10$ (reject the negative). Check: $\\binom{10}{2}=45$.' },
          ],
          trap: {
            pl: 'Równanie $n(n-1)=45$ — zgubienie dwójki z mianownika symbolu $\\binom{n}{2}$; wtedy równanie nie ma rozwiązań całkowitych i widać, że coś poszło źle.',
            en: 'The equation $n(n-1)=45$ — dropping the 2 from the denominator of $\\binom{n}{2}$; then there is no integer solution, a sign something went wrong.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l2-03',
          skill: 'kombinacje-wybory-z-warunkami',
          level: 2,
          prompt: {
            pl: 'Z grupy złożonej z 6 kobiet i 5 mężczyzn wybieramy czteroosobowy zespół, w którym mają być dokładnie 2 kobiety. Ile jest takich zespołów?',
            en: 'From a group of 6 women and 5 men we choose a four-person team containing exactly 2 women. How many such teams are there?',
          },
          answer: '150',
          accept: ['\\binom{6}{2}\\binom{5}{2}'],
          solution: [
            { pl: 'Dokładnie 2 kobiety w czteroosobowym zespole oznacza także dokładnie 2 mężczyzn.', en: 'Exactly 2 women in a team of four means exactly 2 men as well.' },
            { pl: 'Kobiety wybieramy na $\\binom{6}{2}=15$ sposobów, mężczyzn na $\\binom{5}{2}=10$ sposobów.', en: 'Choose the women in $\\binom{6}{2}=15$ ways and the men in $\\binom{5}{2}=10$ ways.' },
            { pl: 'Wybory są niezależne, więc z reguły mnożenia $15\\cdot 10=150$.', en: 'The choices are independent, so by the multiplication rule $15\\cdot 10=150$.' },
          ],
          trap: {
            pl: 'Dodanie $\\binom{6}{2}+\\binom{5}{2}$ zamiast pomnożenia — reguła dodawania dotyczy rozłącznych przypadków, a tu oba wybory składają się na jeden zespół.',
            en: 'Adding $\\binom{6}{2}+\\binom{5}{2}$ instead of multiplying — the addition rule is for disjoint cases, while here both choices build one team.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l3-04',
          skill: 'kombinacje-geometryczne',
          level: 3,
          prompt: {
            pl: 'Na płaszczyźnie zaznaczono 10 punktów, z których dokładnie 4 leżą na jednej prostej, a poza tym żadne trzy nie są współliniowe. Ile trójkątów ma wszystkie wierzchołki w zaznaczonych punktach?',
            en: 'Ten points are marked in the plane; exactly 4 of them lie on one line and otherwise no three are collinear. How many triangles have all vertices among the marked points?',
          },
          answer: '116',
          accept: ['\\binom{10}{3}-\\binom{4}{3}'],
          solution: [
            { pl: 'Każda trójka punktów wyznacza trójkąt, o ile punkty nie są współliniowe. Wszystkich trójek jest $\\binom{10}{3}=120$.', en: 'Every triple of points spans a triangle unless the points are collinear. There are $\\binom{10}{3}=120$ triples in all.' },
            { pl: 'Trójki współliniowe to dokładnie trójki wybrane spośród 4 punktów leżących na wspólnej prostej: $\\binom{4}{3}=4$.', en: 'The collinear triples are exactly those chosen from the 4 points on the common line: $\\binom{4}{3}=4$.' },
            { pl: 'Trójkątów jest więc $120-4=116$.', en: 'Hence there are $120-4=116$ triangles.' },
          ],
          trap: {
            pl: 'Odjęcie $4$ punktów zamiast $\\binom{4}{3}$ trójek albo pominięcie odejmowania w ogóle — zdegenerowane „trójkąty” o wierzchołkach współliniowych nie są trójkątami.',
            en: 'Subtracting the $4$ points instead of the $\\binom{4}{3}$ triples, or not subtracting at all — degenerate "triangles" with collinear vertices are not triangles.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l3-05',
          skill: 'dwumian-newtona-wyraz-ogolny',
          level: 3,
          prompt: {
            pl: 'Wyznacz współczynnik przy $x^{5}$ w rozwinięciu wyrażenia $(2x-1)^{8}$.',
            en: 'Find the coefficient of $x^{5}$ in the expansion of $(2x-1)^{8}$.',
          },
          answer: '-1792',
          accept: ['-1792'],
          solution: [
            { pl: 'Wyraz ogólny: $T_{k+1}=\\binom{8}{k}(2x)^{8-k}(-1)^{k}=\\binom{8}{k}2^{8-k}(-1)^{k}x^{8-k}$.', en: 'General term: $T_{k+1}=\\binom{8}{k}(2x)^{8-k}(-1)^{k}=\\binom{8}{k}2^{8-k}(-1)^{k}x^{8-k}$.' },
            { pl: 'Potęga $x^{5}$ wymaga $8-k=5$, czyli $k=3$.', en: 'The power $x^{5}$ requires $8-k=5$, i.e. $k=3$.' },
            { pl: 'Współczynnik: $\\binom{8}{3}\\cdot 2^{5}\\cdot(-1)^{3}=56\\cdot 32\\cdot(-1)=-1792$.', en: 'Coefficient: $\\binom{8}{3}\\cdot 2^{5}\\cdot(-1)^{3}=56\\cdot 32\\cdot(-1)=-1792$.' },
          ],
          trap: {
            pl: 'Zgubienie potęgi dwójki (wynik $-56$) albo znaku minusa (wynik $+1792$) — stała $2$ i znak $-1$ podnoszą się do potęgi razem ze swoimi składnikami dwumianu.',
            en: 'Dropping the power of two (giving $-56$) or the minus sign (giving $+1792$) — the constant $2$ and the sign $-1$ are raised to powers along with their binomial parts.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l4-06',
          skill: 'dwumian-newtona-wyraz-ogolny',
          level: 4,
          prompt: {
            pl: 'W rozwinięciu wyrażenia $\\left(x+\\dfrac{1}{x^{2}}\\right)^{9}$ wskaż wyraz niezawierający $x$.',
            en: 'In the expansion of $\\left(x+\\dfrac{1}{x^{2}}\\right)^{9}$ find the term free of $x$.',
          },
          answer: '84',
          accept: ['\\binom{9}{3}', 'T_{4}=84'],
          solution: [
            { pl: 'Wyraz ogólny: $T_{k+1}=\\binom{9}{k}x^{9-k}\\left(x^{-2}\\right)^{k}=\\binom{9}{k}x^{9-3k}$.', en: 'General term: $T_{k+1}=\\binom{9}{k}x^{9-k}\\left(x^{-2}\\right)^{k}=\\binom{9}{k}x^{9-3k}$.' },
            { pl: 'Wyraz wolny od $x$: $9-3k=0$, czyli $k=3$.', en: 'The $x$-free term needs $9-3k=0$, i.e. $k=3$.' },
            { pl: 'Zatem $T_{4}=\\binom{9}{3}=84$.', en: 'Hence $T_{4}=\\binom{9}{3}=84$.' },
          ],
          trap: {
            pl: 'Dodawanie wykładników zamiast ich sumowania z uwzględnieniem znaku: $x^{9-k}\\cdot x^{-2k}=x^{9-3k}$, nie $x^{9-k-2}$; a także pomylenie numeru wyrazu ($T_4$) z indeksem $k=3$.',
            en: 'Mishandling exponents: $x^{9-k}\\cdot x^{-2k}=x^{9-3k}$, not $x^{9-k-2}$; also confusing the term number ($T_4$) with the index $k=3$.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l4-07',
          skill: 'kombinacje-wybory-z-warunkami',
          level: 4,
          prompt: {
            pl: 'Z talii 52 kart wybieramy 5 kart. Ile jest wyborów, w których znajdzie się co najmniej jeden as?',
            en: 'From a deck of 52 cards we choose 5. How many selections contain at least one ace?',
          },
          answer: '886656',
          accept: ['\\binom{52}{5}-\\binom{48}{5}'],
          solution: [
            { pl: 'Liczymy przez dopełnienie: od wszystkich wyborów odejmujemy te bez żadnego asa.', en: 'Count by complement: from all selections subtract those with no ace.' },
            { pl: 'Wszystkich wyborów jest $\\binom{52}{5}=2\\,598\\,960$, a bez asa $\\binom{48}{5}=1\\,712\\,304$.', en: 'There are $\\binom{52}{5}=2\\,598\\,960$ selections in all and $\\binom{48}{5}=1\\,712\\,304$ with no ace.' },
            { pl: 'Zatem $2\\,598\\,960-1\\,712\\,304=886\\,656$.', en: 'Hence $2\\,598\\,960-1\\,712\\,304=886\\,656$.' },
          ],
          trap: {
            pl: 'Rachunek $\\binom{4}{1}\\binom{51}{4}$ — „wybierz asa, dopełnij czymkolwiek” liczy układy z dwoma asami wielokrotnie (raz dla każdego asa wskazanego jako „ten wybrany”). Dopełnienie jest tu jedyną czystą drogą.',
            en: 'The computation $\\binom{4}{1}\\binom{51}{4}$ — "pick an ace, fill up with anything" counts hands with two aces multiple times (once per ace designated as "the chosen one"). The complement is the only clean route.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l4-08',
          skill: 'rownania-tozsamosci-dwumianowe',
          level: 4,
          prompt: {
            pl: 'Rozwiąż równanie $\\binom{n+1}{3}=2\\binom{n}{2}$ w zbiorze liczb naturalnych $n\\ge 2$.',
            en: 'Solve the equation $\\binom{n+1}{3}=2\\binom{n}{2}$ for natural numbers $n\\ge 2$.',
          },
          answer: 'n=5',
          accept: ['5'],
          solution: [
            { pl: 'Rozpisujemy: $\\binom{n+1}{3}=\\dfrac{(n+1)n(n-1)}{6}$ oraz $2\\binom{n}{2}=n(n-1)$.', en: 'Expand: $\\binom{n+1}{3}=\\dfrac{(n+1)n(n-1)}{6}$ and $2\\binom{n}{2}=n(n-1)$.' },
            { pl: 'Dla $n\\ge 2$ mamy $n(n-1)\\ne 0$, więc wolno podzielić obustronnie: $\\dfrac{n+1}{6}=1$.', en: 'For $n\\ge 2$ we have $n(n-1)\\ne 0$, so we may divide both sides: $\\dfrac{n+1}{6}=1$.' },
            { pl: 'Stąd $n=5$. Sprawdzenie: $\\binom{6}{3}=20$ i $2\\binom{5}{2}=20$.', en: 'Hence $n=5$. Check: $\\binom{6}{3}=20$ and $2\\binom{5}{2}=20$.' },
          ],
          trap: {
            pl: 'Dzielenie przez $n(n-1)$ bez zastrzeżenia $n\\ge 2$ — poza dziedziną zadania równanie spełniają też trywialnie $n=0$ i $n=1$, a bezrefleksyjne skracanie w ogóle tego nie ujawnia.',
            en: 'Dividing by $n(n-1)$ without the proviso $n\\ge 2$ — outside the stated domain $n=0$ and $n=1$ also satisfy the equation trivially, and mechanical cancelling hides this entirely.',
          },
        },
        {
          id: 'kombinacje-symbol-newtona-l5-09',
          skill: 'rownania-tozsamosci-dwumianowe',
          level: 5,
          prompt: {
            pl: 'Oblicz sumę $\\displaystyle\\sum_{k=1}^{10}k\\binom{10}{k}$.',
            en: 'Compute the sum $\\displaystyle\\sum_{k=1}^{10}k\\binom{10}{k}$.',
          },
          answer: '5120',
          accept: ['10\\cdot 2^{9}'],
          solution: [
            { pl: 'Korzystamy z tożsamości pochłaniania: $k\\binom{10}{k}=10\\binom{9}{k-1}$ (obie strony liczą wybór $k$-osobowej komisji z przewodniczącym: najpierw komisja i szef, albo najpierw szef spośród 10, potem reszta komisji spośród 9).', en: 'Use the absorption identity: $k\\binom{10}{k}=10\\binom{9}{k-1}$ (both sides count a $k$-person committee with a chair: committee then chair, or chair first from 10, then the rest from 9).' },
            { pl: 'Zatem $\\sum_{k=1}^{10}k\\binom{10}{k}=10\\sum_{k=1}^{10}\\binom{9}{k-1}=10\\sum_{j=0}^{9}\\binom{9}{j}$.', en: 'Hence $\\sum_{k=1}^{10}k\\binom{10}{k}=10\\sum_{k=1}^{10}\\binom{9}{k-1}=10\\sum_{j=0}^{9}\\binom{9}{j}$.' },
            { pl: 'Suma wiersza trójkąta Pascala: $\\sum_{j=0}^{9}\\binom{9}{j}=2^{9}=512$, więc wynik to $10\\cdot 512=5120$.', en: 'The Pascal row sum: $\\sum_{j=0}^{9}\\binom{9}{j}=2^{9}=512$, so the answer is $10\\cdot 512=5120$.' },
          ],
          trap: {
            pl: 'Próba „wyciągnięcia” $k$ przed sumę, jakby było stałą — $k$ jest indeksem sumowania; bez tożsamości $k\\binom{n}{k}=n\\binom{n-1}{k-1}$ (albo pochodnej $(1+x)^{n}$ w $x=1$) suma się nie zwija.',
            en: 'Trying to "pull $k$ out" of the sum as if it were constant — $k$ is the summation index; without $k\\binom{n}{k}=n\\binom{n-1}{k-1}$ (or differentiating $(1+x)^{n}$ at $x=1$) the sum does not collapse.',
          },
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════ 3 */
    {
      id: 'prawdopodobienstwo-klasyczne-aksjomaty',
      title: {
        pl: 'Prawdopodobieństwo klasyczne i aksjomaty',
        en: 'Classical probability and the axioms',
      },
      level: 3,
      prereq: ['reguly-zliczania-permutacje-wariacje', 'kombinacje-symbol-newtona'],
      theory: {
        pl: 'Klasyczna definicja prawdopodobieństwa mówi: jeśli wszystkie zdarzenia elementarne są jednakowo prawdopodobne, to $P(A)=\\frac{|A|}{|\\Omega|}$ — i cała trudność zadania siedzi w konsekwentnym wyborze modelu $\\Omega$ (losowanie z kolejnością albo bez, ale tak samo w liczniku i mianowniku). Ogólna teoria opiera się na aksjomatach Kołmogorowa: $P(A)\\ge 0$, $P(\\Omega)=1$ oraz addytywność $P(A\\cup B)=P(A)+P(B)$ dla zdarzeń rozłącznych. Z aksjomatów wynikają wszystkie wzory robocze: $P(A^{\\prime})=1-P(A)$ dla zdarzenia przeciwnego, $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ dla sumy dowolnych zdarzeń oraz $P(A\\setminus B)=P(A)-P(A\\cap B)$ dla różnicy. Monotoniczność $A\\subset B\\Rightarrow P(A)\\le P(B)$ pozwala szacować prawdopodobieństwa, których nie umiemy policzyć dokładnie — w szczególności $P(A\\cap B)\\ge P(A)+P(B)-1$. Warunek „co najmniej jeden” niemal zawsze obsługujemy zdarzeniem przeciwnym. Częsty błąd modelowania: mieszanie porządku — licznik liczony ciągami, mianownik podzbiorami.',
        en: 'The classical definition says: when all elementary outcomes are equally likely, $P(A)=\\frac{|A|}{|\\Omega|}$ — and the whole difficulty is a consistent choice of the model $\\Omega$ (ordered or unordered drawing, but the same in numerator and denominator). The general theory rests on Kolmogorov’s axioms: $P(A)\\ge 0$, $P(\\Omega)=1$, and additivity $P(A\\cup B)=P(A)+P(B)$ for disjoint events. All the working formulas follow: $P(A^{\\prime})=1-P(A)$ for the complementary event, $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ for the union of arbitrary events, and $P(A\\setminus B)=P(A)-P(A\\cap B)$ for the difference. Monotonicity $A\\subset B\\Rightarrow P(A)\\le P(B)$ lets us bound probabilities we cannot compute exactly — in particular $P(A\\cap B)\\ge P(A)+P(B)-1$. An "at least one" condition is almost always handled via the complement. A frequent modelling error: mixing order — numerator counted with sequences, denominator with subsets.',
      },
      formulas: [
        {
          id: 'klasyczna-definicja-prawdopodobienstwa',
          tex: 'P(A)=\\frac{|A|}{|\\Omega|}',
          name: { pl: 'Klasyczna definicja prawdopodobieństwa', en: 'Classical definition of probability' },
          note: {
            pl: 'Tylko dla jednakowo prawdopodobnych zdarzeń elementarnych. Licznik i mianownik muszą pochodzić z tego samego modelu: oba z kolejnością albo oba bez.',
            en: 'Only for equally likely outcomes. Numerator and denominator must come from the same model: both ordered or both unordered.',
          },
          drill: true,
        },
        {
          id: 'aksjomaty-kolmogorowa',
          tex: 'P(A)\\ge 0,\\qquad P(\\Omega)=1,\\qquad A\\cap B=\\varnothing\\ \\Rightarrow\\ P(A\\cup B)=P(A)+P(B)',
          name: { pl: 'Aksjomaty prawdopodobieństwa (Kołmogorow)', en: 'The probability axioms (Kolmogorov)' },
          note: {
            pl: 'Trzy własności, z których wynika cała reszta: nieujemność, unormowanie, addytywność dla zdarzeń rozłącznych. Stąd też $P(\\varnothing)=0$ i $P(A)\\le 1$.',
            en: 'Three properties from which everything else follows: non-negativity, normalisation, additivity for disjoint events. Hence also $P(\\varnothing)=0$ and $P(A)\\le 1$.',
          },
          drill: true,
        },
        {
          id: 'zdarzenie-przeciwne-wzor',
          tex: 'P(A^{\\prime})=1-P(A)',
          name: { pl: 'Prawdopodobieństwo zdarzenia przeciwnego', en: 'Probability of the complementary event' },
          note: {
            pl: 'Najważniejszy skrót rachunkowy w całym dziale: „co najmniej jeden” liczymy przez „ani jeden”.',
            en: 'The most important shortcut in the whole chapter: "at least one" is computed via "none".',
          },
          drill: true,
        },
        {
          id: 'prawdopodobienstwo-sumy-zdarzen',
          tex: 'P(A\\cup B)=P(A)+P(B)-P(A\\cap B)',
          name: { pl: 'Prawdopodobieństwo sumy zdarzeń', en: 'Probability of a union' },
          note: {
            pl: 'Wersja włączeń i wyłączeń dla prawdopodobieństwa; dla rozłącznych $A,B$ składnik $P(A\\cap B)$ znika.',
            en: 'Inclusion–exclusion for probability; for disjoint $A,B$ the term $P(A\\cap B)$ vanishes.',
          },
          drill: true,
        },
        {
          id: 'prawdopodobienstwo-roznicy-zdarzen',
          tex: 'P(A\\setminus B)=P(A)-P(A\\cap B)',
          name: { pl: 'Prawdopodobieństwo różnicy zdarzeń', en: 'Probability of a difference' },
          note: {
            pl: 'Odejmuje się część wspólną, nie całe $P(B)$: wzór $P(A)-P(B)$ jest poprawny tylko przy $B\\subset A$.',
            en: 'Subtract the intersection, not all of $P(B)$: the formula $P(A)-P(B)$ is valid only when $B\\subset A$.',
          },
          drill: true,
        },
        {
          id: 'monotonicznosc-prawdopodobienstwa',
          tex: 'A\\subset B\\ \\Rightarrow\\ P(A)\\le P(B),\\qquad P(A\\cap B)\\ge P(A)+P(B)-1',
          name: { pl: 'Monotoniczność i nierówność Bonferroniego', en: 'Monotonicity and Bonferroni’s inequality' },
          note: {
            pl: 'Druga nierówność to przestawiony wzór na sumę z oszacowaniem $P(A\\cup B)\\le 1$ — klucz do zadań „znajdź najmniejszą możliwą wartość”.',
            en: 'The second inequality is the union formula rearranged with $P(A\\cup B)\\le 1$ — the key to "find the least possible value" problems.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'klasyczna-model-omega', title: { pl: 'Budowa modelu: kostki, monety, ciągi losowań', en: 'Building the model: dice, coins, ordered draws' }, levels: [1, 2, 4] },
        { id: 'klasyczna-losowanie-kombinacje', title: { pl: 'Losowania bez kolejności: urny, karty, zbiory liczb', en: 'Unordered draws: urns, cards, number sets' }, levels: [2, 3, 5] },
        { id: 'suma-roznica-zdarzen', title: { pl: 'Suma i różnica zdarzeń — rachunek na $P$', en: 'Union and difference of events — computing with $P$' }, levels: [2, 3] },
        { id: 'zdarzenie-przeciwne-conajmniej', title: { pl: 'Zdarzenie przeciwne i warunek „co najmniej”', en: 'Complementary event and "at least" conditions' }, levels: [3, 4] },
        { id: 'aksjomaty-wlasnosci', title: { pl: 'Aksjomaty i szacowanie prawdopodobieństw', en: 'Axioms and probability bounds' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l1-01',
          skill: 'klasyczna-model-omega',
          level: 1,
          prompt: {
            pl: 'Rzucamy dwiema symetrycznymi sześciennymi kostkami. Oblicz prawdopodobieństwo, że suma wyrzuconych oczek jest równa 8.',
            en: 'Two fair six-sided dice are rolled. Find the probability that the sum of the pips equals 8.',
          },
          answer: '\\frac{5}{36}',
          accept: ['5/36'],
          solution: [
            { pl: 'Model: pary uporządkowane $(a,b)$, $|\\Omega|=6^{2}=36$, wszystkie jednakowo prawdopodobne.', en: 'Model: ordered pairs $(a,b)$, $|\\Omega|=6^{2}=36$, all equally likely.' },
            { pl: 'Sumę 8 dają pary: $(2,6),(3,5),(4,4),(5,3),(6,2)$ — jest ich 5.', en: 'Sum 8 comes from $(2,6),(3,5),(4,4),(5,3),(6,2)$ — five pairs.' },
            { pl: 'Zatem $P=\\dfrac{5}{36}$.', en: 'Hence $P=\\dfrac{5}{36}$.' },
          ],
          trap: {
            pl: 'Model nieuporządkowany „$\\{2,6\\},\\{3,5\\},\\{4,4\\}$ — trzy wyniki” — pary nieuporządkowane nie są jednakowo prawdopodobne: $\\{2,6\\}$ wypada dwa razy częściej niż $\\{4,4\\}$.',
            en: 'The unordered model "$\\{2,6\\},\\{3,5\\},\\{4,4\\}$ — three outcomes" — unordered pairs are not equally likely: $\\{2,6\\}$ occurs twice as often as $\\{4,4\\}$.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l2-02',
          skill: 'klasyczna-losowanie-kombinacje',
          level: 2,
          prompt: {
            pl: 'W urnie jest 5 kul białych i 7 czarnych. Losujemy jednocześnie dwie kule. Oblicz prawdopodobieństwo, że obie są białe.',
            en: 'An urn holds 5 white and 7 black balls. Two balls are drawn at once. Find the probability that both are white.',
          },
          answer: '\\frac{5}{33}',
          accept: ['5/33'],
          solution: [
            { pl: 'Model bez kolejności: $|\\Omega|=\\binom{12}{2}=66$.', en: 'Unordered model: $|\\Omega|=\\binom{12}{2}=66$.' },
            { pl: 'Dwie białe wybieramy na $\\binom{5}{2}=10$ sposobów.', en: 'Two whites can be chosen in $\\binom{5}{2}=10$ ways.' },
            { pl: '$P=\\dfrac{10}{66}=\\dfrac{5}{33}$.', en: '$P=\\dfrac{10}{66}=\\dfrac{5}{33}$.' },
          ],
          trap: {
            pl: 'Licznik $\\binom{5}{2}$, a mianownik $12\\cdot 11$ — pomieszanie modelu bez kolejności z modelem z kolejnością zaniża wynik dwukrotnie. Oba piętra ułamka muszą używać tej samej konwencji.',
            en: 'Numerator $\\binom{5}{2}$ over denominator $12\\cdot 11$ — mixing the unordered and ordered models halves the result. Both layers of the fraction must use the same convention.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l2-03',
          skill: 'suma-roznica-zdarzen',
          level: 2,
          prompt: {
            pl: 'O zdarzeniach $A,B\\subset\\Omega$ wiadomo, że $P(A)=0{,}4$, $P(B)=0{,}5$ oraz $P(A\\cup B)=0{,}7$. Oblicz $P(A\\setminus B)$.',
            en: 'For events $A,B\\subset\\Omega$ we know $P(A)=0.4$, $P(B)=0.5$ and $P(A\\cup B)=0.7$. Compute $P(A\\setminus B)$.',
          },
          answer: '0{,}2',
          accept: ['0.2', '\\frac{1}{5}', '1/5'],
          solution: [
            { pl: 'Ze wzoru na sumę: $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=0{,}4+0{,}5-0{,}7=0{,}2$.', en: 'From the union formula: $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=0.4+0.5-0.7=0.2$.' },
            { pl: 'Różnica zdarzeń: $P(A\\setminus B)=P(A)-P(A\\cap B)=0{,}4-0{,}2=0{,}2$.', en: 'Difference of events: $P(A\\setminus B)=P(A)-P(A\\cap B)=0.4-0.2=0.2$.' },
          ],
          trap: {
            pl: 'Wzór $P(A\\setminus B)=P(A)-P(B)$ — dałby $-0{,}1$, czyli liczbę ujemną; odejmować wolno tylko część wspólną, a $P(B)$ w całości jedynie przy $B\\subset A$.',
            en: 'The formula $P(A\\setminus B)=P(A)-P(B)$ — it would give $-0.1$, a negative number; only the intersection may be subtracted, all of $P(B)$ only when $B\\subset A$.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l3-04',
          skill: 'zdarzenie-przeciwne-conajmniej',
          level: 3,
          prompt: {
            pl: 'Rzucamy symetryczną kostką trzy razy. Oblicz prawdopodobieństwo, że co najmniej raz wypadnie szóstka.',
            en: 'A fair die is rolled three times. Find the probability that a six appears at least once.',
          },
          answer: '\\frac{91}{216}',
          accept: ['91/216', '1-\\left(\\frac{5}{6}\\right)^{3}'],
          solution: [
            { pl: 'Zdarzenie przeciwne: w żadnym rzucie nie wypada szóstka.', en: 'Complementary event: no six in any roll.' },
            { pl: '$P(A^{\\prime})=\\left(\\dfrac{5}{6}\\right)^{3}=\\dfrac{125}{216}$.', en: '$P(A^{\\prime})=\\left(\\dfrac{5}{6}\\right)^{3}=\\dfrac{125}{216}$.' },
            { pl: '$P(A)=1-\\dfrac{125}{216}=\\dfrac{91}{216}$.', en: '$P(A)=1-\\dfrac{125}{216}=\\dfrac{91}{216}$.' },
          ],
          trap: {
            pl: 'Rachunek $3\\cdot\\frac{1}{6}=\\frac{1}{2}$ — dodawanie prawdopodobieństw zdarzeń, które nie są rozłączne (szóstka może wypaść w dwóch rzutach naraz); przy 7 rzutach ta metoda dałaby prawdopodobieństwo większe od 1.',
            en: 'Computing $3\\cdot\\frac{1}{6}=\\frac{1}{2}$ — adding probabilities of non-disjoint events (sixes can occur in two rolls at once); with 7 rolls this method would exceed 1.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l3-05',
          skill: 'klasyczna-losowanie-kombinacje',
          level: 3,
          prompt: {
            pl: 'Ze zbioru $\\{1,2,\\dots,10\\}$ losujemy jednocześnie dwie różne liczby. Oblicz prawdopodobieństwo, że ich suma jest parzysta.',
            en: 'From the set $\\{1,2,\\dots,10\\}$ two distinct numbers are drawn at once. Find the probability that their sum is even.',
          },
          answer: '\\frac{4}{9}',
          accept: ['4/9'],
          solution: [
            { pl: 'Suma dwóch liczb jest parzysta dokładnie wtedy, gdy obie są parzyste albo obie nieparzyste.', en: 'A sum of two numbers is even exactly when both are even or both are odd.' },
            { pl: 'W zbiorze jest 5 liczb parzystych i 5 nieparzystych: sprzyjających wyborów jest $\\binom{5}{2}+\\binom{5}{2}=10+10=20$.', en: 'The set has 5 even and 5 odd numbers: favourable choices number $\\binom{5}{2}+\\binom{5}{2}=10+10=20$.' },
            { pl: 'Wszystkich wyborów jest $\\binom{10}{2}=45$, więc $P=\\dfrac{20}{45}=\\dfrac{4}{9}$.', en: 'All choices: $\\binom{10}{2}=45$, so $P=\\dfrac{20}{45}=\\dfrac{4}{9}$.' },
          ],
          trap: {
            pl: 'Odpowiedź $\\frac{1}{2}$ „z symetrii” — sumy parzyste i nieparzyste nie są równoliczne: mieszana para (parzysta, nieparzysta) daje sumę nieparzystą, a takich par jest $5\\cdot 5=25>20$.',
            en: 'Answering $\\frac{1}{2}$ "by symmetry" — even and odd sums are not equinumerous: a mixed pair gives an odd sum, and there are $5\\cdot 5=25>20$ of those.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l4-06',
          skill: 'aksjomaty-wlasnosci',
          level: 4,
          prompt: {
            pl: 'Zdarzenia $A,B\\subset\\Omega$ spełniają $P(A)=0{,}6$ i $P(B)=0{,}7$. Wyznacz najmniejszą możliwą wartość $P(A\\cap B)$.',
            en: 'Events $A,B\\subset\\Omega$ satisfy $P(A)=0.6$ and $P(B)=0.7$. Find the least possible value of $P(A\\cap B)$.',
          },
          answer: '0{,}3',
          accept: ['0.3', '\\frac{3}{10}', '3/10'],
          solution: [
            { pl: 'Ze wzoru na sumę: $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=1{,}3-P(A\\cup B)$.', en: 'From the union formula: $P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=1.3-P(A\\cup B)$.' },
            { pl: 'Przecięcie jest najmniejsze, gdy suma jest największa, a z aksjomatów $P(A\\cup B)\\le 1$.', en: 'The intersection is smallest when the union is largest, and by the axioms $P(A\\cup B)\\le 1$.' },
            { pl: 'Stąd $P(A\\cap B)\\ge 1{,}3-1=0{,}3$; wartość $0{,}3$ jest osiągana, gdy $A\\cup B=\\Omega$.', en: 'Hence $P(A\\cap B)\\ge 1.3-1=0.3$; the value $0.3$ is attained when $A\\cup B=\\Omega$.' },
          ],
          trap: {
            pl: 'Odpowiedź $0$ — zdarzenia o prawdopodobieństwach $0{,}6$ i $0{,}7$ nie mogą być rozłączne, bo wtedy $P(A\\cup B)=1{,}3>1$, wbrew aksjomatom.',
            en: 'Answering $0$ — events with probabilities $0.6$ and $0.7$ cannot be disjoint, since then $P(A\\cup B)=1.3>1$, contradicting the axioms.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l4-07',
          skill: 'klasyczna-model-omega',
          level: 4,
          prompt: {
            pl: 'Cztery dziewczynki i trzej chłopcy ustawiają się losowo w rzędzie, przy czym każde ustawienie jest jednakowo prawdopodobne. Oblicz prawdopodobieństwo, że żadne dwie dziewczynki nie stoją obok siebie.',
            en: 'Four girls and three boys line up at random, all orders equally likely. Find the probability that no two girls stand next to each other.',
          },
          answer: '\\frac{1}{35}',
          accept: ['1/35'],
          solution: [
            { pl: 'Model: wszystkie ustawienia 7 osób, $|\\Omega|=7!=5040$.', en: 'Model: all orders of the 7 people, $|\\Omega|=7!=5040$.' },
            { pl: 'Sprzyjające ustawienia liczymy metodą przerw: chłopcy na $3!$ sposobów tworzą 4 przerwy, w które wchodzą po jednej dziewczynce na $4!$ sposobów — razem $3!\\cdot 4!=144$.', en: 'Favourable orders via the gap method: the boys in $3!$ ways create 4 gaps, filled with one girl each in $4!$ ways — $3!\\cdot 4!=144$ in total.' },
            { pl: '$P=\\dfrac{144}{5040}=\\dfrac{1}{35}$.', en: '$P=\\dfrac{144}{5040}=\\dfrac{1}{35}$.' },
          ],
          trap: {
            pl: 'Mianownik $\\binom{7}{4}$ zamiast $7!$ albo licznik z innego modelu niż mianownik — prawdopodobieństwo klasyczne wymaga tej samej przestrzeni w liczniku i mianowniku; tu najprościej pracować na pełnych permutacjach.',
            en: 'Using $\\binom{7}{4}$ as denominator against a permutation numerator — classical probability demands one model for both layers; full permutations are simplest here.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l4-08',
          skill: 'zdarzenie-przeciwne-conajmniej',
          level: 4,
          prompt: {
            pl: 'Rzucamy symetryczną kostką cztery razy. Oblicz prawdopodobieństwo, że co najmniej dwa wyniki będą jednakowe.',
            en: 'A fair die is rolled four times. Find the probability that at least two results coincide.',
          },
          answer: '\\frac{13}{18}',
          accept: ['13/18', '1-\\frac{360}{1296}'],
          solution: [
            { pl: 'Zdarzenie przeciwne: wszystkie cztery wyniki są różne.', en: 'Complementary event: all four results are distinct.' },
            { pl: 'Ciągów różnowartościowych jest $6\\cdot 5\\cdot 4\\cdot 3=360$, wszystkich $6^{4}=1296$, więc $P(A^{\\prime})=\\dfrac{360}{1296}=\\dfrac{5}{18}$.', en: 'Injective sequences: $6\\cdot 5\\cdot 4\\cdot 3=360$ out of $6^{4}=1296$, so $P(A^{\\prime})=\\dfrac{360}{1296}=\\dfrac{5}{18}$.' },
            { pl: '$P(A)=1-\\dfrac{5}{18}=\\dfrac{13}{18}$.', en: '$P(A)=1-\\dfrac{5}{18}=\\dfrac{13}{18}$.' },
          ],
          trap: {
            pl: 'Próba bezpośredniego zliczania „co najmniej dwa jednakowe” przez przypadki (dokładnie jedna para, dwie pary, trójka…) — to paradoks dnia urodzin w miniaturze: przypadków jest dużo i łatwo któryś policzyć podwójnie; dopełnienie załatwia rzecz jedną linijką.',
            en: 'Counting "at least two equal" directly by cases (one pair, two pairs, a triple…) — the birthday paradox in miniature: many cases, easy double counting; the complement does it in one line.',
          },
        },
        {
          id: 'prawdopodobienstwo-klasyczne-aksjomaty-l5-09',
          skill: 'klasyczna-losowanie-kombinacje',
          level: 5,
          prompt: {
            pl: 'W urnie jest $n$ kul, w tym 6 białych. Losujemy jednocześnie dwie kule. Prawdopodobieństwo, że obie są białe, wynosi $\\dfrac{1}{3}$. Wyznacz $n$.',
            en: 'An urn holds $n$ balls, 6 of them white. Two balls are drawn at once. The probability that both are white equals $\\dfrac{1}{3}$. Find $n$.',
          },
          answer: 'n=10',
          accept: ['10'],
          solution: [
            { pl: 'Równanie: $\\dfrac{\\binom{6}{2}}{\\binom{n}{2}}=\\dfrac{1}{3}$, czyli $\\dfrac{15}{\\tfrac{n(n-1)}{2}}=\\dfrac{1}{3}$.', en: 'Equation: $\\dfrac{\\binom{6}{2}}{\\binom{n}{2}}=\\dfrac{1}{3}$, i.e. $\\dfrac{15}{\\tfrac{n(n-1)}{2}}=\\dfrac{1}{3}$.' },
            { pl: 'Stąd $\\dfrac{30}{n(n-1)}=\\dfrac{1}{3}$, więc $n(n-1)=90$, czyli $n^{2}-n-90=0$.', en: 'Hence $\\dfrac{30}{n(n-1)}=\\dfrac{1}{3}$, so $n(n-1)=90$, i.e. $n^{2}-n-90=0$.' },
            { pl: 'Pierwiastki $n=10$ i $n=-9$; sensowny jest tylko $n=10$ (i $n\\ge 6$ się zgadza). Sprawdzenie: $\\dfrac{15}{45}=\\dfrac{1}{3}$.', en: 'Roots $n=10$ and $n=-9$; only $n=10$ makes sense (and $n\\ge 6$ holds). Check: $\\dfrac{15}{45}=\\dfrac{1}{3}$.' },
          ],
          trap: {
            pl: 'Model z kolejnością tylko po jednej stronie: $\\frac{6\\cdot 5}{\\binom{n}{2}}$ — daje $n(n-1)=180$ i fałszywe „$n$ niecałkowite”. Konsekwencja modelu obowiązuje także w równaniach z niewiadomą.',
            en: 'Ordering on one side only: $\\frac{6\\cdot 5}{\\binom{n}{2}}$ — gives $n(n-1)=180$ and a spurious non-integer $n$. Model consistency binds in equations with unknowns too.',
          },
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════ 4 */
    {
      id: 'prawdopodobienstwo-warunkowe-niezaleznosc',
      title: {
        pl: 'Prawdopodobieństwo warunkowe i niezależność',
        en: 'Conditional probability and independence',
      },
      level: 4,
      prereq: ['prawdopodobienstwo-klasyczne-aksjomaty'],
      theory: {
        pl: 'Prawdopodobieństwo warunkowe $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$ (dla $P(B)>0$) to przeskalowanie modelu: informacja „zaszło $B$” zawęża przestrzeń zdarzeń do $B$, a wszystkie prawdopodobieństwa dzielimy przez $P(B)$, by suma znów wynosiła 1. W modelu klasycznym sprowadza się to do $P(A\\mid B)=\\frac{|A\\cap B|}{|B|}$ — liczymy sprzyjające wśród wyników zgodnych z warunkiem. Przekształcenie definicji daje wzór łańcuchowy $P(A\\cap B)=P(B)\\,P(A\\mid B)$, który dla losowań kolejnych bez zwracania jest podstawowym narzędziem: mnożymy prawdopodobieństwa kroków, aktualizując skład urny. Zdarzenia $A$ i $B$ są niezależne, gdy $P(A\\cap B)=P(A)\\,P(B)$ — równoważnie $P(A\\mid B)=P(A)$: informacja o $B$ niczego nie zmienia. Niezależności nie wolno mylić z rozłącznością; zdarzenia rozłączne o dodatnich prawdopodobieństwach są zawsze zależne, bo zajście jednego wyklucza drugie. Jeśli $A$ i $B$ są niezależne, to niezależne są też pary $(A,B^{\\prime})$, $(A^{\\prime},B)$ i $(A^{\\prime},B^{\\prime})$; ta obserwacja skraca wiele rachunków z sumą zdarzeń.',
        en: 'Conditional probability $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$ (for $P(B)>0$) is a rescaling of the model: the information "$B$ occurred" shrinks the sample space to $B$, and all probabilities are divided by $P(B)$ so they again sum to 1. In the classical model this reduces to $P(A\\mid B)=\\frac{|A\\cap B|}{|B|}$ — count favourable outcomes among those consistent with the condition. Rearranging the definition gives the chain rule $P(A\\cap B)=P(B)\\,P(A\\mid B)$, the basic tool for successive draws without replacement: multiply step probabilities, updating the urn as you go. Events $A$ and $B$ are independent when $P(A\\cap B)=P(A)\\,P(B)$ — equivalently $P(A\\mid B)=P(A)$: learning $B$ changes nothing. Independence must not be confused with disjointness; disjoint events of positive probability are always dependent, since one occurring excludes the other. If $A$ and $B$ are independent, so are the pairs $(A,B^{\\prime})$, $(A^{\\prime},B)$ and $(A^{\\prime},B^{\\prime})$; this observation shortens many union computations.',
      },
      formulas: [
        {
          id: 'definicja-prawdopodobienstwa-warunkowego',
          tex: 'P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},\\qquad P(B)>0',
          name: { pl: 'Prawdopodobieństwo warunkowe', en: 'Conditional probability' },
          note: {
            pl: 'W modelu klasycznym: $P(A\\mid B)=\\frac{|A\\cap B|}{|B|}$ — nowa, mniejsza przestrzeń to $B$. Uwaga: na ogół $P(A\\mid B)\\ne P(B\\mid A)$.',
            en: 'Classically: $P(A\\mid B)=\\frac{|A\\cap B|}{|B|}$ — the new, smaller space is $B$. Note: in general $P(A\\mid B)\\ne P(B\\mid A)$.',
          },
          drill: true,
        },
        {
          id: 'wzor-lancuchowy',
          tex: 'P(A\\cap B)=P(B)\\,P(A\\mid B),\\qquad P(A\\cap B\\cap C)=P(A)\\,P(B\\mid A)\\,P(C\\mid A\\cap B)',
          name: { pl: 'Wzór łańcuchowy (mnożenia)', en: 'Chain (multiplication) rule' },
          note: {
            pl: 'Losowania kolejne bez zwracania: mnożymy prawdopodobieństwa kroków, po każdym kroku aktualizując stan urny.',
            en: 'Successive draws without replacement: multiply the step probabilities, updating the urn after each step.',
          },
          drill: true,
        },
        {
          id: 'definicja-niezaleznosci',
          tex: 'P(A\\cap B)=P(A)\\cdot P(B)',
          name: { pl: 'Niezależność zdarzeń', en: 'Independence of events' },
          note: {
            pl: 'Równoważnie $P(A\\mid B)=P(A)$ przy $P(B)>0$. Niezależność to własność rachunkowa — sprawdza się ją wzorem, nie intuicją „nie mają ze sobą nic wspólnego”.',
            en: 'Equivalently $P(A\\mid B)=P(A)$ when $P(B)>0$. Independence is a computational property — verified by the formula, not by the intuition "they have nothing to do with each other".',
          },
          drill: true,
        },
        {
          id: 'niezaleznosc-dopelnien',
          tex: 'P(A\\cap B)=P(A)P(B)\\ \\Rightarrow\\ P(A\\cap B^{\\prime})=P(A)\\,P(B^{\\prime})',
          name: { pl: 'Niezależność przenosi się na dopełnienia', en: 'Independence passes to complements' },
          note: {
            pl: 'Dowód w jednej linijce: $P(A\\cap B^{\\prime})=P(A)-P(A\\cap B)=P(A)(1-P(B))$. Rozłączność NIE jest niezależnością: dla rozłącznych $P(A\\cap B)=0\\ne P(A)P(B)$.',
            en: 'One-line proof: $P(A\\cap B^{\\prime})=P(A)-P(A\\cap B)=P(A)(1-P(B))$. Disjointness is NOT independence: for disjoint events $P(A\\cap B)=0\\ne P(A)P(B)$.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'warunkowe-z-definicji', title: { pl: 'Rachunek z definicji $P(A\\mid B)$', en: 'Computing from the definition of $P(A\\mid B)$' }, levels: [3, 4] },
        { id: 'warunkowe-zawezenie-omegi', title: { pl: 'Zawężenie przestrzeni: warunek w modelu klasycznym', en: 'Restricting the space: conditions in the classical model' }, levels: [3, 5] },
        { id: 'lancuch-mnozenia', title: { pl: 'Wzór łańcuchowy: losowania bez zwracania', en: 'Chain rule: draws without replacement' }, levels: [3, 4] },
        { id: 'niezaleznosc-sprawdzanie', title: { pl: 'Sprawdzanie i wykorzystywanie niezależności', en: 'Verifying and using independence' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l3-01',
          skill: 'warunkowe-zawezenie-omegi',
          level: 3,
          prompt: {
            pl: 'Rzucamy dwiema symetrycznymi kostkami. Oblicz prawdopodobieństwo, że suma oczek jest równa 8, jeśli wiadomo, że na pierwszej kostce wypadła parzysta liczba oczek.',
            en: 'Two fair dice are rolled. Find the probability that the sum equals 8, given that the first die shows an even number.',
          },
          answer: '\\frac{1}{6}',
          accept: ['1/6'],
          solution: [
            { pl: 'Warunek $B$: pierwsza kostka parzysta — $|B|=3\\cdot 6=18$ par.', en: 'Condition $B$: first die even — $|B|=3\\cdot 6=18$ pairs.' },
            { pl: 'W $B$ sumę 8 dają pary $(2,6),(4,4),(6,2)$ — trzy wyniki, więc $|A\\cap B|=3$.', en: 'Within $B$ the sum 8 comes from $(2,6),(4,4),(6,2)$ — three outcomes, so $|A\\cap B|=3$.' },
            { pl: '$P(A\\mid B)=\\dfrac{|A\\cap B|}{|B|}=\\dfrac{3}{18}=\\dfrac{1}{6}$.', en: '$P(A\\mid B)=\\dfrac{|A\\cap B|}{|B|}=\\dfrac{3}{18}=\\dfrac{1}{6}$.' },
          ],
          trap: {
            pl: 'Dzielenie przez pełne $|\\Omega|=36$ zamiast przez $|B|=18$ — warunek zawęża przestrzeń i to $B$, a nie $\\Omega$, staje się mianownikiem.',
            en: 'Dividing by the full $|\\Omega|=36$ instead of $|B|=18$ — the condition shrinks the space, and $B$, not $\\Omega$, becomes the denominator.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l3-02',
          skill: 'warunkowe-z-definicji',
          level: 3,
          prompt: {
            pl: 'Dane są zdarzenia $A,B$ o prawdopodobieństwach $P(A)=0{,}5$, $P(B)=0{,}4$ i $P(A\\cap B)=0{,}2$. Oblicz $P(A\\mid B)$ i rozstrzygnij, czy zdarzenia $A$ i $B$ są niezależne.',
            en: 'Events $A,B$ satisfy $P(A)=0.5$, $P(B)=0.4$ and $P(A\\cap B)=0.2$. Compute $P(A\\mid B)$ and decide whether $A$ and $B$ are independent.',
          },
          answer: 'P(A\\mid B)=0{,}5;\\ \\text{zdarzenia niezależne}',
          accept: ['0{,}5', '0.5', 'niezależne', 'independent'],
          solution: [
            { pl: '$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0{,}2}{0{,}4}=0{,}5$.', en: '$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{0.2}{0.4}=0.5$.' },
            { pl: 'Ponieważ $P(A\\mid B)=0{,}5=P(A)$, informacja o $B$ nie zmienia szans $A$.', en: 'Since $P(A\\mid B)=0.5=P(A)$, learning $B$ does not change the chances of $A$.' },
            { pl: 'Równoważnie: $P(A)\\,P(B)=0{,}5\\cdot 0{,}4=0{,}2=P(A\\cap B)$ — zdarzenia są niezależne.', en: 'Equivalently: $P(A)\\,P(B)=0.5\\cdot 0.4=0.2=P(A\\cap B)$ — the events are independent.' },
          ],
          trap: {
            pl: 'Uznanie, że skoro $A\\cap B\\ne\\varnothing$, to zdarzenia „muszą być zależne” — niezależność to równość rachunkowa $P(A\\cap B)=P(A)P(B)$, a nie brak części wspólnej.',
            en: 'Concluding that $A\\cap B\\ne\\varnothing$ makes the events "dependent" — independence is the computational identity $P(A\\cap B)=P(A)P(B)$, not an empty intersection.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l4-03',
          skill: 'lancuch-mnozenia',
          level: 4,
          prompt: {
            pl: 'W urnie są 4 kule białe i 6 czarnych. Losujemy kolejno dwie kule bez zwracania. Oblicz prawdopodobieństwo, że obie wylosowane kule są białe.',
            en: 'An urn holds 4 white and 6 black balls. Two balls are drawn one after another without replacement. Find the probability that both are white.',
          },
          answer: '\\frac{2}{15}',
          accept: ['2/15'],
          solution: [
            { pl: 'Wzór łańcuchowy: $P(B_1\\cap B_2)=P(B_1)\\,P(B_2\\mid B_1)$.', en: 'Chain rule: $P(B_1\\cap B_2)=P(B_1)\\,P(B_2\\mid B_1)$.' },
            { pl: '$P(B_1)=\\dfrac{4}{10}$, a po zabraniu jednej białej $P(B_2\\mid B_1)=\\dfrac{3}{9}$.', en: '$P(B_1)=\\dfrac{4}{10}$, and with one white removed $P(B_2\\mid B_1)=\\dfrac{3}{9}$.' },
            { pl: '$P=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{12}{90}=\\dfrac{2}{15}$.', en: '$P=\\dfrac{4}{10}\\cdot\\dfrac{3}{9}=\\dfrac{12}{90}=\\dfrac{2}{15}$.' },
          ],
          trap: {
            pl: 'Rachunek $\\frac{4}{10}\\cdot\\frac{4}{10}$ — potraktowanie losowania bez zwracania jak niezależnych prób; po pierwszym losowaniu urna ma już inny skład i drugi czynnik musi być warunkowy.',
            en: 'Computing $\\frac{4}{10}\\cdot\\frac{4}{10}$ — treating draws without replacement as independent trials; after the first draw the urn has changed and the second factor must be conditional.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l4-04',
          skill: 'niezaleznosc-sprawdzanie',
          level: 4,
          prompt: {
            pl: 'Rzucamy dwiema symetrycznymi kostkami. Niech $A$ — „na pierwszej kostce wypadła parzysta liczba oczek”, $B$ — „suma oczek jest parzysta”. Sprawdź, czy zdarzenia $A$ i $B$ są niezależne.',
            en: 'Two fair dice are rolled. Let $A$ — "the first die shows an even number", $B$ — "the sum is even". Check whether $A$ and $B$ are independent.',
          },
          answer: '\\text{Tak: } P(A\\cap B)=\\tfrac{1}{4}=P(A)\\,P(B)',
          accept: ['tak', 'niezależne', 'yes', 'independent'],
          solution: [
            { pl: '$P(A)=\\dfrac{18}{36}=\\dfrac{1}{2}$ oraz $P(B)=\\dfrac{18}{36}=\\dfrac{1}{2}$ (suma parzysta: obie kostki parzyste lub obie nieparzyste, $9+9=18$ par).', en: '$P(A)=\\dfrac{18}{36}=\\dfrac{1}{2}$ and $P(B)=\\dfrac{18}{36}=\\dfrac{1}{2}$ (even sum: both dice even or both odd, $9+9=18$ pairs).' },
            { pl: '$A\\cap B$: pierwsza parzysta i suma parzysta, czyli obie parzyste — $3\\cdot 3=9$ par, więc $P(A\\cap B)=\\dfrac{9}{36}=\\dfrac{1}{4}$.', en: '$A\\cap B$: first even and sum even, i.e. both even — $3\\cdot 3=9$ pairs, so $P(A\\cap B)=\\dfrac{9}{36}=\\dfrac{1}{4}$.' },
            { pl: '$P(A)\\,P(B)=\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{4}=P(A\\cap B)$ — zdarzenia są niezależne.', en: '$P(A)\\,P(B)=\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{4}=P(A\\cap B)$ — the events are independent.' },
          ],
          trap: {
            pl: 'Werdykt „zależne, bo suma zależy od pierwszej kostki” — intuicja przyczynowa nie zastępuje rachunku; parzystość sumy jest wyznaczana przez drugą kostkę tak samo losowo przy każdej wartości pierwszej.',
            en: 'The verdict "dependent, because the sum depends on the first die" — causal intuition is no substitute for the computation; the parity of the sum is set by the second die equally randomly for every value of the first.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l4-05',
          skill: 'warunkowe-z-definicji',
          level: 4,
          prompt: {
            pl: 'O zdarzeniach $A,B$ wiadomo, że $P(A\\mid B)=0{,}6$, $P(B)=0{,}5$ oraz $P(A\\cap B^{\\prime})=0{,}2$. Oblicz $P(A)$.',
            en: 'Events $A,B$ satisfy $P(A\\mid B)=0.6$, $P(B)=0.5$ and $P(A\\cap B^{\\prime})=0.2$. Compute $P(A)$.',
          },
          answer: '0{,}5',
          accept: ['0.5', '\\frac{1}{2}', '1/2'],
          solution: [
            { pl: 'Z wzoru łańcuchowego: $P(A\\cap B)=P(B)\\,P(A\\mid B)=0{,}5\\cdot 0{,}6=0{,}3$.', en: 'By the chain rule: $P(A\\cap B)=P(B)\\,P(A\\mid B)=0.5\\cdot 0.6=0.3$.' },
            { pl: 'Zdarzenie $A$ rozbijamy na rozłączne części: $A=(A\\cap B)\\cup(A\\cap B^{\\prime})$.', en: 'Split $A$ into disjoint parts: $A=(A\\cap B)\\cup(A\\cap B^{\\prime})$.' },
            { pl: '$P(A)=0{,}3+0{,}2=0{,}5$.', en: '$P(A)=0.3+0.2=0.5$.' },
          ],
          trap: {
            pl: 'Pomylenie $P(A\\mid B)$ z $P(A\\cap B)$ i policzenie $P(A)=0{,}6+0{,}2=0{,}8$ — warunkowe trzeba najpierw pomnożyć przez $P(B)$, zanim wolno je dodawać w rozbiciu.',
            en: 'Confusing $P(A\\mid B)$ with $P(A\\cap B)$ and computing $P(A)=0.6+0.2=0.8$ — the conditional must first be multiplied by $P(B)$ before it may enter the decomposition.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l4-06',
          skill: 'lancuch-mnozenia',
          level: 4,
          prompt: {
            pl: 'Z talii 52 kart losujemy kolejno trzy karty bez zwracania. Oblicz prawdopodobieństwo, że wszystkie trzy są asami.',
            en: 'Three cards are drawn one after another without replacement from a 52-card deck. Find the probability that all three are aces.',
          },
          answer: '\\frac{1}{5525}',
          accept: ['1/5525'],
          solution: [
            { pl: 'Wzór łańcuchowy dla trzech zdarzeń: $P=\\dfrac{4}{52}\\cdot\\dfrac{3}{51}\\cdot\\dfrac{2}{50}$.', en: 'Chain rule for three events: $P=\\dfrac{4}{52}\\cdot\\dfrac{3}{51}\\cdot\\dfrac{2}{50}$.' },
            { pl: 'Licznik: $4\\cdot 3\\cdot 2=24$; mianownik: $52\\cdot 51\\cdot 50=132\\,600$.', en: 'Numerator: $4\\cdot 3\\cdot 2=24$; denominator: $52\\cdot 51\\cdot 50=132\\,600$.' },
            { pl: '$P=\\dfrac{24}{132\\,600}=\\dfrac{1}{5525}$. (Kontrola modelem bez kolejności: $\\binom{4}{3}/\\binom{52}{3}=4/22\\,100$ — to samo.)', en: '$P=\\dfrac{24}{132\\,600}=\\dfrac{1}{5525}$. (Cross-check with the unordered model: $\\binom{4}{3}/\\binom{52}{3}=4/22\\,100$ — the same.)' },
          ],
          trap: {
            pl: 'Rachunek $\\left(\\frac{4}{52}\\right)^{3}$ — ignorowanie zmieniającego się składu talii; każdy kolejny czynnik musi mieć zaktualizowany licznik i mianownik.',
            en: 'Computing $\\left(\\frac{4}{52}\\right)^{3}$ — ignoring the changing deck; each successive factor needs an updated numerator and denominator.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l5-07',
          skill: 'niezaleznosc-sprawdzanie',
          level: 5,
          prompt: {
            pl: 'Zdarzenia $A$ i $B$ są niezależne, przy czym $P(A)=\\dfrac{1}{3}$ oraz $P(A\\cup B)=\\dfrac{3}{5}$. Oblicz $P(B)$.',
            en: 'Events $A$ and $B$ are independent, with $P(A)=\\dfrac{1}{3}$ and $P(A\\cup B)=\\dfrac{3}{5}$. Compute $P(B)$.',
          },
          answer: '\\frac{2}{5}',
          accept: ['2/5', '0{,}4', '0.4'],
          solution: [
            { pl: 'Z niezależności $P(A\\cap B)=P(A)\\,P(B)$, więc $P(A\\cup B)=P(A)+P(B)-P(A)\\,P(B)$.', en: 'By independence $P(A\\cap B)=P(A)\\,P(B)$, so $P(A\\cup B)=P(A)+P(B)-P(A)\\,P(B)$.' },
            { pl: 'Oznaczając $p=P(B)$: $\\dfrac{3}{5}=\\dfrac{1}{3}+p-\\dfrac{p}{3}=\\dfrac{1}{3}+\\dfrac{2p}{3}$.', en: 'Writing $p=P(B)$: $\\dfrac{3}{5}=\\dfrac{1}{3}+p-\\dfrac{p}{3}=\\dfrac{1}{3}+\\dfrac{2p}{3}$.' },
            { pl: 'Stąd $\\dfrac{2p}{3}=\\dfrac{3}{5}-\\dfrac{1}{3}=\\dfrac{4}{15}$, czyli $p=\\dfrac{2}{5}$.', en: 'Hence $\\dfrac{2p}{3}=\\dfrac{3}{5}-\\dfrac{1}{3}=\\dfrac{4}{15}$, i.e. $p=\\dfrac{2}{5}$.' },
          ],
          trap: {
            pl: 'Wzór $P(A\\cup B)=P(A)+P(B)$ — pominięcie części wspólnej dałoby $P(B)=\\frac{4}{15}$; niezależność oznacza, że część wspólna jest niezerowa (o ile oba zdarzenia mają dodatnie prawdopodobieństwa), a nie że jej nie ma.',
            en: 'Using $P(A\\cup B)=P(A)+P(B)$ — dropping the intersection would give $P(B)=\\frac{4}{15}$; independence means the intersection is nonzero (when both events have positive probability), not absent.',
          },
        },
        {
          id: 'prawdopodobienstwo-warunkowe-niezaleznosc-l5-08',
          skill: 'warunkowe-zawezenie-omegi',
          level: 5,
          prompt: {
            pl: 'W pewnej rodzinie jest dwoje dzieci, a każde z nich jest chłopcem albo dziewczynką z prawdopodobieństwem $\\tfrac{1}{2}$, niezależnie. Wiadomo, że co najmniej jedno z dzieci jest chłopcem. Oblicz prawdopodobieństwo, że oboje dzieci to chłopcy.',
            en: 'A family has two children, each independently a boy or a girl with probability $\\tfrac{1}{2}$. It is known that at least one child is a boy. Find the probability that both children are boys.',
          },
          answer: '\\frac{1}{3}',
          accept: ['1/3'],
          solution: [
            { pl: 'Model: uporządkowane pary płci (starsze, młodsze): $\\{CC, CD, DC, DD\\}$, każda z prawdopodobieństwem $\\tfrac{1}{4}$.', en: 'Model: ordered sex pairs (elder, younger): $\\{BB, BG, GB, GG\\}$, each with probability $\\tfrac{1}{4}$.' },
            { pl: 'Warunek „co najmniej jeden chłopiec” wyklucza tylko $DD$; zostają trzy równoprawdopodobne wyniki $CC, CD, DC$.', en: 'The condition "at least one boy" excludes only $GG$; three equally likely outcomes remain: $BB, BG, GB$.' },
            { pl: '$P(CC\\mid \\text{co najmniej jeden chłopiec})=\\dfrac{1/4}{3/4}=\\dfrac{1}{3}$.', en: '$P(BB\\mid \\text{at least one boy})=\\dfrac{1/4}{3/4}=\\dfrac{1}{3}$.' },
          ],
          trap: {
            pl: 'Odpowiedź $\\frac{1}{2}$ — potraktowanie warunku „co najmniej jedno jest chłopcem” tak, jakby wskazano konkretne dziecko („starsze jest chłopcem”). Te dwa warunki zawężają przestrzeń inaczej: pierwszy zostawia trzy wyniki, drugi dwa.',
            en: 'Answering $\\frac{1}{2}$ — reading "at least one is a boy" as if a specific child were named ("the elder is a boy"). The two conditions shrink the space differently: the first leaves three outcomes, the second two.',
          },
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════ 5 */
    {
      id: 'prawdopodobienstwo-calkowite-bayes-drzewa',
      title: {
        pl: 'Prawdopodobieństwo całkowite, wzór Bayesa i drzewa',
        en: 'Total probability, Bayes’ formula and trees',
      },
      level: 5,
      prereq: ['prawdopodobienstwo-warunkowe-niezaleznosc'],
      theory: {
        pl: 'Gdy doświadczenie przebiega etapami, zdarzenia pierwszego etapu $B_1,\\dots,B_n$ tworzą zwykle rozbicie przestrzeni: są parami rozłączne, mają dodatnie prawdopodobieństwa i wyczerpują $\\Omega$. Wzór na prawdopodobieństwo całkowite $P(A)=\\sum_i P(B_i)\\,P(A\\mid B_i)$ mówi, że $P(A)$ jest średnią ważoną prawdopodobieństw warunkowych — wagami są prawdopodobieństwa scenariuszy. Graficznym zapisem tego wzoru jest drzewo: wzdłuż gałęzi mnożymy, a prawdopodobieństwo zdarzenia to suma po wszystkich gałęziach, które do niego prowadzą. Wzór Bayesa $P(B_k\\mid A)=\\frac{P(B_k)\\,P(A\\mid B_k)}{\\sum_i P(B_i)\\,P(A\\mid B_i)}$ odwraca kierunek wnioskowania: znamy skutek $A$ i pytamy o przyczynę $B_k$; na drzewie to po prostu iloraz jednej gałęzi przez sumę wszystkich gałęzi kończących się w $A$. Mianownik wzoru Bayesa jest zawsze prawdopodobieństwem całkowitym — liczy się go osobno i tylko raz. Klasyczna pułapka to mylenie $P(A\\mid B)$ z $P(B\\mid A)$: czułość testu diagnostycznego bywa wysoka, a wartość predykcyjna niska, gdy choroba jest rzadka, bo rzadki scenariusz dostaje małą wagę.',
        en: 'When an experiment unfolds in stages, the first-stage events $B_1,\\dots,B_n$ usually form a partition: pairwise disjoint, of positive probability, exhausting $\\Omega$. The law of total probability $P(A)=\\sum_i P(B_i)\\,P(A\\mid B_i)$ says $P(A)$ is a weighted average of conditional probabilities — the weights being the scenario probabilities. A tree is the graphic form of this law: multiply along a branch, and the probability of an event is the sum over all branches leading to it. Bayes’ formula $P(B_k\\mid A)=\\frac{P(B_k)\\,P(A\\mid B_k)}{\\sum_i P(B_i)\\,P(A\\mid B_i)}$ reverses the direction of inference: we observe the effect $A$ and ask about the cause $B_k$; on the tree it is simply one branch divided by the sum of all branches ending in $A$. The denominator of Bayes’ formula is always the total probability — compute it separately and only once. The classic pitfall is confusing $P(A\\mid B)$ with $P(B\\mid A)$: a diagnostic test can have high sensitivity yet low predictive value when the disease is rare, because the rare scenario carries little weight.',
      },
      formulas: [
        {
          id: 'wzor-prawdopodobienstwo-calkowite',
          tex: 'P(A)=\\sum_{i=1}^{n}P(B_i)\\,P(A\\mid B_i)',
          name: { pl: 'Wzór na prawdopodobieństwo całkowite', en: 'Law of total probability' },
          note: {
            pl: 'Wymaga rozbicia: $B_i$ parami rozłączne, $P(B_i)>0$, $B_1\\cup\\dots\\cup B_n=\\Omega$. Kontrola: wagi $P(B_i)$ muszą sumować się do 1.',
            en: 'Requires a partition: $B_i$ pairwise disjoint, $P(B_i)>0$, $B_1\\cup\\dots\\cup B_n=\\Omega$. Check: the weights $P(B_i)$ must sum to 1.',
          },
          drill: true,
        },
        {
          id: 'wzor-bayesa',
          tex: 'P(B_k\\mid A)=\\frac{P(B_k)\\,P(A\\mid B_k)}{\\sum_{i=1}^{n}P(B_i)\\,P(A\\mid B_i)}',
          name: { pl: 'Wzór Bayesa', en: 'Bayes’ formula' },
          note: {
            pl: 'Licznik to jedna gałąź drzewa, mianownik — suma wszystkich gałęzi prowadzących do $A$ (prawdopodobieństwo całkowite). Odwraca kierunek warunkowania: z $P(A\\mid B)$ robi $P(B\\mid A)$.',
            en: 'The numerator is one tree branch, the denominator the sum of all branches leading to $A$ (the total probability). It reverses the conditioning: from $P(A\\mid B)$ to $P(B\\mid A)$.',
          },
          drill: true,
        },
        {
          id: 'regula-drzewka',
          tex: 'P(\\text{gałąź})=p_{1}\\,p_{2}\\cdots p_{m},\\qquad P(A)=\\sum_{\\text{gałęzie prowadzące do }A}P(\\text{gałąź})',
          name: { pl: 'Reguła drzewka: mnożymy wzdłuż, dodajemy w poprzek', en: 'Tree rule: multiply along, add across' },
          note: {
            pl: 'Na każdym rozgałęzieniu prawdopodobieństwa muszą sumować się do 1 — to najszybszy test poprawności drzewa. Etykiety dalszych krawędzi to prawdopodobieństwa warunkowe.',
            en: 'At every fork the probabilities must sum to 1 — the quickest sanity check of a tree. Labels on later edges are conditional probabilities.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'drzewa-losowanie-etapami', title: { pl: 'Drzewa: doświadczenia wieloetapowe', en: 'Trees: multi-stage experiments' }, levels: [3, 4] },
        { id: 'calkowite-dwie-urny', title: { pl: 'Prawdopodobieństwo całkowite: wybór źródła losowania', en: 'Total probability: choosing the source of the draw' }, levels: [4, 5] },
        { id: 'calkowite-losowanie-bez-zwracania', title: { pl: 'Drugie losowanie bez zwracania jako zdarzenie etapowe', en: 'The second draw without replacement as a staged event' }, levels: [3, 4] },
        { id: 'bayes-odwracanie', title: { pl: 'Wzór Bayesa: wnioskowanie o przyczynie', en: 'Bayes’ formula: inferring the cause' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l3-01',
          skill: 'calkowite-losowanie-bez-zwracania',
          level: 3,
          prompt: {
            pl: 'W urnie są 3 kule białe i 2 czarne. Losujemy kulę, odkładamy ją na bok, po czym losujemy drugą. Oblicz prawdopodobieństwo, że druga wylosowana kula jest biała.',
            en: 'An urn holds 3 white and 2 black balls. One ball is drawn and set aside, then a second is drawn. Find the probability that the second ball is white.',
          },
          answer: '\\frac{3}{5}',
          accept: ['3/5'],
          solution: [
            { pl: 'Rozbicie według pierwszego losowania: $B_1$ — pierwsza biała ($P=\\tfrac{3}{5}$), $B_2$ — pierwsza czarna ($P=\\tfrac{2}{5}$).', en: 'Partition by the first draw: $B_1$ — first white ($P=\\tfrac{3}{5}$), $B_2$ — first black ($P=\\tfrac{2}{5}$).' },
            { pl: 'Warunkowe dla drugiej białej: po białej $\\tfrac{2}{4}$, po czarnej $\\tfrac{3}{4}$.', en: 'Conditionals for the second white: after a white $\\tfrac{2}{4}$, after a black $\\tfrac{3}{4}$.' },
            { pl: '$P=\\dfrac{3}{5}\\cdot\\dfrac{2}{4}+\\dfrac{2}{5}\\cdot\\dfrac{3}{4}=\\dfrac{6}{20}+\\dfrac{6}{20}=\\dfrac{3}{5}$ — tyle samo, co dla pierwszej kuli.', en: '$P=\\dfrac{3}{5}\\cdot\\dfrac{2}{4}+\\dfrac{2}{5}\\cdot\\dfrac{3}{4}=\\dfrac{6}{20}+\\dfrac{6}{20}=\\dfrac{3}{5}$ — the same as for the first ball.' },
          ],
          trap: {
            pl: 'Odpowiedź $\\frac{2}{4}$ — policzenie tylko gałęzi „pierwsza biała”. Bez informacji o pierwszym losowaniu trzeba uśrednić po obu scenariuszach; symetria daje ten sam wynik co dla pierwszej kuli.',
            en: 'Answering $\\frac{2}{4}$ — using only the "first white" branch. With no information about the first draw one must average over both scenarios; symmetry gives the same value as for the first ball.',
          },
        },
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l4-02',
          skill: 'calkowite-dwie-urny',
          level: 4,
          prompt: {
            pl: 'Rzucamy symetryczną monetą. Jeśli wypadnie orzeł, losujemy kulę z urny I (4 białe, 2 czarne), a jeśli reszka — z urny II (1 biała, 3 czarne). Oblicz prawdopodobieństwo wylosowania kuli białej.',
            en: 'A fair coin is tossed. On heads we draw from urn I (4 white, 2 black), on tails from urn II (1 white, 3 black). Find the probability of drawing a white ball.',
          },
          answer: '\\frac{11}{24}',
          accept: ['11/24'],
          solution: [
            { pl: 'Rozbicie: wybór urny I lub II, każda z prawdopodobieństwem $\\tfrac{1}{2}$.', en: 'Partition: urn I or urn II, each with probability $\\tfrac{1}{2}$.' },
            { pl: 'Warunkowe: $P(W\\mid \\mathrm{I})=\\dfrac{4}{6}=\\dfrac{2}{3}$, $P(W\\mid \\mathrm{II})=\\dfrac{1}{4}$.', en: 'Conditionals: $P(W\\mid \\mathrm{I})=\\dfrac{4}{6}=\\dfrac{2}{3}$, $P(W\\mid \\mathrm{II})=\\dfrac{1}{4}$.' },
            { pl: '$P(W)=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}+\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=\\dfrac{1}{3}+\\dfrac{1}{8}=\\dfrac{8}{24}+\\dfrac{3}{24}=\\dfrac{11}{24}$.', en: '$P(W)=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}+\\dfrac{1}{2}\\cdot\\dfrac{1}{4}=\\dfrac{1}{3}+\\dfrac{1}{8}=\\dfrac{8}{24}+\\dfrac{3}{24}=\\dfrac{11}{24}$.' },
          ],
          trap: {
            pl: 'Zsypanie kul do jednej urny: $\\frac{5}{10}=\\frac{1}{2}$ — urny nie są równoliczne, więc kule nie są jednakowo prawdopodobne; wagą każdej urny jest $\\frac{1}{2}$ niezależnie od liczby kul w niej.',
            en: 'Pooling the balls into one urn: $\\frac{5}{10}=\\frac{1}{2}$ — the urns differ in size, so the balls are not equally likely; each urn carries weight $\\frac{1}{2}$ regardless of how many balls it holds.',
          },
        },
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l4-03',
          skill: 'drzewa-losowanie-etapami',
          level: 4,
          prompt: {
            pl: 'Z urny A (2 kule białe i 3 czarne) przekładamy losowo wybraną kulę do urny B (3 białe i 1 czarna), po czym losujemy jedną kulę z urny B. Oblicz prawdopodobieństwo, że kula wylosowana z urny B jest biała.',
            en: 'A randomly chosen ball is moved from urn A (2 white, 3 black) to urn B (3 white, 1 black), then one ball is drawn from urn B. Find the probability that the ball drawn from B is white.',
          },
          answer: '\\frac{17}{25}',
          accept: ['17/25'],
          solution: [
            { pl: 'Etap 1: przełożona kula jest biała z prawdopodobieństwem $\\tfrac{2}{5}$, czarna z $\\tfrac{3}{5}$. Po przełożeniu urna B ma 5 kul.', en: 'Stage 1: the moved ball is white with probability $\\tfrac{2}{5}$, black with $\\tfrac{3}{5}$. Afterwards urn B holds 5 balls.' },
            { pl: 'Etap 2: po białej w B są 4 białe i 1 czarna — $P(W)=\\tfrac{4}{5}$; po czarnej 3 białe i 2 czarne — $P(W)=\\tfrac{3}{5}$.', en: 'Stage 2: after a white, B has 4 white and 1 black — $P(W)=\\tfrac{4}{5}$; after a black, 3 white and 2 black — $P(W)=\\tfrac{3}{5}$.' },
            { pl: 'Drzewo: $P(W)=\\dfrac{2}{5}\\cdot\\dfrac{4}{5}+\\dfrac{3}{5}\\cdot\\dfrac{3}{5}=\\dfrac{8}{25}+\\dfrac{9}{25}=\\dfrac{17}{25}$.', en: 'Tree: $P(W)=\\dfrac{2}{5}\\cdot\\dfrac{4}{5}+\\dfrac{3}{5}\\cdot\\dfrac{3}{5}=\\dfrac{8}{25}+\\dfrac{9}{25}=\\dfrac{17}{25}$.' },
          ],
          trap: {
            pl: 'Losowanie z urny B „po staremu” z 4 kul ($\\frac{3}{4}$ na białą) — po przełożeniu urna B ma 5 kul i to zaktualizowany skład wchodzi do drugiego etapu drzewa.',
            en: 'Drawing from B "as before" out of 4 balls ($\\frac{3}{4}$ for white) — after the transfer urn B holds 5 balls, and the updated contents feed the second stage of the tree.',
          },
        },
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l4-04',
          skill: 'calkowite-losowanie-bez-zwracania',
          level: 4,
          prompt: {
            pl: 'Z talii 52 kart losujemy kolejno dwie karty bez zwracania. Oblicz prawdopodobieństwo, że druga wylosowana karta jest asem.',
            en: 'Two cards are drawn in succession without replacement from a 52-card deck. Find the probability that the second card is an ace.',
          },
          answer: '\\frac{1}{13}',
          accept: ['1/13', '\\frac{4}{52}'],
          solution: [
            { pl: 'Rozbicie według pierwszej karty: as ($\\tfrac{4}{52}$) albo nie-as ($\\tfrac{48}{52}$).', en: 'Partition by the first card: ace ($\\tfrac{4}{52}$) or non-ace ($\\tfrac{48}{52}$).' },
            { pl: '$P=\\dfrac{4}{52}\\cdot\\dfrac{3}{51}+\\dfrac{48}{52}\\cdot\\dfrac{4}{51}=\\dfrac{12+192}{2652}=\\dfrac{204}{2652}=\\dfrac{1}{13}$.', en: '$P=\\dfrac{4}{52}\\cdot\\dfrac{3}{51}+\\dfrac{48}{52}\\cdot\\dfrac{4}{51}=\\dfrac{12+192}{2652}=\\dfrac{204}{2652}=\\dfrac{1}{13}$.' },
            { pl: 'Wynik równy $\\tfrac{4}{52}$ nie jest przypadkiem: z symetrii każda pozycja w losowej kolejności talii ma tę samą szansę być asem.', en: 'The value $\\tfrac{4}{52}$ is no accident: by symmetry every position in a shuffled deck is equally likely to hold an ace.' },
          ],
          trap: {
            pl: 'Przekonanie, że wynik musi zależeć od pierwszego losowania i być różny od $\\frac{1}{13}$ — zależy warunkowo, ale uśrednienie wzorem całkowitym odtwarza dokładnie prawdopodobieństwo bezwarunkowe.',
            en: 'Believing the answer must differ from $\\frac{1}{13}$ because it depends on the first draw — it does conditionally, but averaging via total probability recovers exactly the unconditional value.',
          },
        },
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l5-05',
          skill: 'bayes-odwracanie',
          level: 5,
          prompt: {
            pl: 'Na pewną chorobę cierpi 1% populacji. Test wykrywa chorobę u chorego z prawdopodobieństwem $0{,}95$, ale u zdrowego daje (fałszywie) wynik dodatni z prawdopodobieństwem $0{,}1$. Losowo wybranej osobie test dał wynik dodatni. Oblicz prawdopodobieństwo, że osoba ta jest chora.',
            en: 'A disease affects 1% of a population. A test detects it in a sick person with probability $0.95$, but gives a (false) positive for a healthy person with probability $0.1$. A randomly chosen person tests positive. Find the probability that this person is sick.',
          },
          answer: '\\frac{19}{217}',
          accept: ['19/217', '\\approx 0{,}088'],
          solution: [
            { pl: 'Oznaczenia: $C$ — chory, $D$ — wynik dodatni. Dane: $P(C)=0{,}01$, $P(D\\mid C)=0{,}95$, $P(D\\mid C^{\\prime})=0{,}1$.', en: 'Notation: $C$ — sick, $D$ — positive. Given: $P(C)=0.01$, $P(D\\mid C)=0.95$, $P(D\\mid C^{\\prime})=0.1$.' },
            { pl: 'Prawdopodobieństwo całkowite: $P(D)=0{,}01\\cdot 0{,}95+0{,}99\\cdot 0{,}1=0{,}0095+0{,}099=0{,}1085$.', en: 'Total probability: $P(D)=0.01\\cdot 0.95+0.99\\cdot 0.1=0.0095+0.099=0.1085$.' },
            { pl: 'Wzór Bayesa: $P(C\\mid D)=\\dfrac{0{,}0095}{0{,}1085}=\\dfrac{95}{1085}=\\dfrac{19}{217}\\approx 0{,}088$.', en: 'Bayes: $P(C\\mid D)=\\dfrac{0.0095}{0.1085}=\\dfrac{95}{1085}=\\dfrac{19}{217}\\approx 0.088$.' },
            { pl: 'Mimo czułości $95\\%$ tylko ok. $9\\%$ dodatnich wyników pochodzi od chorych — rzadka choroba dostaje małą wagę w mianowniku.', en: 'Despite $95\\%$ sensitivity only about $9\\%$ of positives come from the sick — the rare disease carries little weight in the denominator.' },
          ],
          trap: {
            pl: 'Odpowiedź $0{,}95$ — pomylenie $P(D\\mid C)$ z $P(C\\mid D)$. Kierunek warunkowania odwraca dopiero wzór Bayesa, a wynik odwrócony bywa o rząd wielkości mniejszy.',
            en: 'Answering $0.95$ — confusing $P(D\\mid C)$ with $P(C\\mid D)$. Only Bayes’ formula reverses the conditioning, and the reversed value can be an order of magnitude smaller.',
          },
        },
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l5-06',
          skill: 'bayes-odwracanie',
          level: 5,
          prompt: {
            pl: 'W fabryce maszyna I wytwarza 60% produkcji i daje 2% braków, a maszyna II — 40% produkcji i 5% braków. Wylosowana z całej produkcji sztuka okazała się brakiem. Oblicz prawdopodobieństwo, że wyprodukowała ją maszyna II.',
            en: 'Machine I makes 60% of a factory’s output with 2% defectives; machine II makes 40% with 5% defectives. An item drawn from the whole output turns out to be defective. Find the probability that machine II made it.',
          },
          answer: '\\frac{5}{8}',
          accept: ['5/8', '0{,}625', '0.625'],
          solution: [
            { pl: 'Gałęzie prowadzące do braku $W$: przez maszynę I — $0{,}6\\cdot 0{,}02=0{,}012$; przez maszynę II — $0{,}4\\cdot 0{,}05=0{,}02$.', en: 'Branches leading to a defective $W$: via machine I — $0.6\\cdot 0.02=0.012$; via machine II — $0.4\\cdot 0.05=0.02$.' },
            { pl: 'Prawdopodobieństwo całkowite braku: $P(W)=0{,}012+0{,}02=0{,}032$.', en: 'Total probability of a defective: $P(W)=0.012+0.02=0.032$.' },
            { pl: 'Bayes: $P(\\mathrm{II}\\mid W)=\\dfrac{0{,}02}{0{,}032}=\\dfrac{5}{8}$.', en: 'Bayes: $P(\\mathrm{II}\\mid W)=\\dfrac{0.02}{0.032}=\\dfrac{5}{8}$.' },
          ],
          trap: {
            pl: 'Porównanie samych odsetków braków ($5\\%$ wobec $2\\%$) z pominięciem udziałów w produkcji — do licznika i mianownika wchodzą iloczyny waga razy warunkowe, a nie same warunkowe.',
            en: 'Comparing defect rates alone ($5\\%$ vs $2\\%$) while ignoring production shares — numerator and denominator take products weight times conditional, not the conditionals alone.',
          },
        },
        {
          id: 'prawdopodobienstwo-calkowite-bayes-drzewa-l6-07',
          skill: 'bayes-odwracanie',
          level: 6,
          prompt: {
            pl: 'W pudełku są trzy monety: dwie symetryczne i jedna z orłami po obu stronach. Losujemy monetę i rzucamy nią dwa razy; w obu rzutach wypadł orzeł. Oblicz prawdopodobieństwo, że losowaliśmy monetę z dwoma orłami.',
            en: 'A box holds three coins: two fair and one with heads on both sides. A coin is drawn and tossed twice; both tosses come up heads. Find the probability that the drawn coin is the two-headed one.',
          },
          answer: '\\frac{2}{3}',
          accept: ['2/3'],
          solution: [
            { pl: 'Rozbicie: $F$ — moneta symetryczna ($P=\\tfrac{2}{3}$), $O$ — dwustronny orzeł ($P=\\tfrac{1}{3}$). Zdarzenie $A$ — dwa orły w dwóch rzutach.', en: 'Partition: $F$ — fair coin ($P=\\tfrac{2}{3}$), $O$ — two-headed ($P=\\tfrac{1}{3}$). Event $A$ — two heads in two tosses.' },
            { pl: 'Warunkowe: $P(A\\mid F)=\\left(\\tfrac{1}{2}\\right)^{2}=\\tfrac{1}{4}$, $P(A\\mid O)=1$.', en: 'Conditionals: $P(A\\mid F)=\\left(\\tfrac{1}{2}\\right)^{2}=\\tfrac{1}{4}$, $P(A\\mid O)=1$.' },
            { pl: 'Całkowite: $P(A)=\\dfrac{2}{3}\\cdot\\dfrac{1}{4}+\\dfrac{1}{3}\\cdot 1=\\dfrac{1}{6}+\\dfrac{1}{3}=\\dfrac{1}{2}$.', en: 'Total: $P(A)=\\dfrac{2}{3}\\cdot\\dfrac{1}{4}+\\dfrac{1}{3}\\cdot 1=\\dfrac{1}{6}+\\dfrac{1}{3}=\\dfrac{1}{2}$.' },
            { pl: 'Bayes: $P(O\\mid A)=\\dfrac{\\tfrac{1}{3}\\cdot 1}{\\tfrac{1}{2}}=\\dfrac{2}{3}$. Każdy kolejny orzeł zwiększa wiarygodność monety dwustronnej — po jednym rzucie byłoby to $\\tfrac{1}{2}$, po dwóch jest $\\tfrac{2}{3}$.', en: 'Bayes: $P(O\\mid A)=\\dfrac{\\tfrac{1}{3}\\cdot 1}{\\tfrac{1}{2}}=\\dfrac{2}{3}$. Each further head raises the odds of the two-headed coin — after one toss it would be $\\tfrac{1}{2}$, after two it is $\\tfrac{2}{3}$.' },
          ],
          trap: {
            pl: 'Pozostanie przy prawdopodobieństwie a priori $\\frac{1}{3}$ („przecież monetę już wylosowano”) — zaobserwowane orły są informacją i wymagają aktualizacji bayesowskiej; ignorowanie danych to najczystsza postać błędu prokuratora.',
            en: 'Sticking with the prior $\\frac{1}{3}$ ("the coin was already drawn") — the observed heads are evidence and demand a Bayesian update; ignoring data is the prosecutor’s fallacy in its purest form.',
          },
        },
      ],
    },

    /* ══════════════════════════════════════════════════════════════════ 6 */
    {
      id: 'schemat-bernoulliego',
      title: {
        pl: 'Schemat Bernoulliego',
        en: 'Bernoulli trials',
      },
      level: 5,
      prereq: ['kombinacje-symbol-newtona', 'prawdopodobienstwo-warunkowe-niezaleznosc'],
      theory: {
        pl: 'Schemat Bernoulliego to ciąg $n$ niezależnych powtórzeń tej samej próby o dwóch wynikach: sukces z prawdopodobieństwem $p$ i porażka z $q=1-p$. Prawdopodobieństwo dokładnie $k$ sukcesów wynosi $P_n(k)=\\binom{n}{k}p^{k}q^{n-k}$: czynnik $p^{k}q^{n-k}$ to prawdopodobieństwo jednego konkretnego ciągu wyników, a symbol Newtona zlicza rozmieszczenia sukcesów wśród prób. Suma $\\sum_k P_n(k)=(p+q)^n=1$ — to dwumian Newtona w roli kontroli rachunku. Warunki „co najmniej”/„co najwyżej” liczymy sumując odpowiednie $P_n(k)$, przy czym „co najmniej jeden sukces” niemal zawsze przez dopełnienie: $1-q^{n}$. Najbardziej prawdopodobną liczbę sukcesów znajduje się z nierówności $(n+1)p-1\\le k_0\\le (n+1)p$ albo badając iloraz $\\frac{P_n(k+1)}{P_n(k)}=\\frac{n-k}{k+1}\\cdot\\frac{p}{q}$; oczekiwana liczba sukcesów to $np$. Zadania „ile prób potrzeba” prowadzą do nierówności wykładniczych rozwiązywanych logarytmowaniem — pamiętaj, że dzielenie przez ujemny logarytm odwraca znak nierówności.',
        en: 'A Bernoulli scheme is a sequence of $n$ independent repetitions of the same two-outcome trial: success with probability $p$, failure with $q=1-p$. The probability of exactly $k$ successes is $P_n(k)=\\binom{n}{k}p^{k}q^{n-k}$: the factor $p^{k}q^{n-k}$ is the probability of one specific outcome string, and the binomial coefficient counts the placements of successes among the trials. The sum $\\sum_k P_n(k)=(p+q)^n=1$ — the binomial theorem serving as a sanity check. Conditions "at least"/"at most" are handled by summing the relevant $P_n(k)$, with "at least one success" almost always via the complement: $1-q^{n}$. The most probable number of successes follows from $(n+1)p-1\\le k_0\\le (n+1)p$ or from the ratio $\\frac{P_n(k+1)}{P_n(k)}=\\frac{n-k}{k+1}\\cdot\\frac{p}{q}$; the expected number of successes is $np$. "How many trials are needed" problems lead to exponential inequalities solved by taking logarithms — remember that dividing by a negative logarithm reverses the inequality.',
      },
      formulas: [
        {
          id: 'wzor-bernoulliego',
          tex: 'P_{n}(k)=\\binom{n}{k}p^{k}(1-p)^{n-k},\\qquad k=0,1,\\dots,n',
          name: { pl: 'Wzór Bernoulliego', en: 'Bernoulli’s formula' },
          note: {
            pl: 'Wymaga niezależności prób i stałego $p$. Kontrola: $\\sum_{k=0}^{n}P_n(k)=(p+q)^{n}=1$ z dwumianu Newtona.',
            en: 'Requires independent trials and constant $p$. Check: $\\sum_{k=0}^{n}P_n(k)=(p+q)^{n}=1$ by the binomial theorem.',
          },
          drill: true,
        },
        {
          id: 'conajmniej-jeden-sukces',
          tex: 'P(S_{n}\\ge 1)=1-(1-p)^{n}',
          name: { pl: 'Co najmniej jeden sukces', en: 'At least one success' },
          note: {
            pl: 'Dopełnieniem jest „zero sukcesów”, czyli $q^{n}$. Analogicznie „co najmniej dwa” $=1-q^{n}-npq^{n-1}$.',
            en: 'The complement is "zero successes", i.e. $q^{n}$. Similarly "at least two" $=1-q^{n}-npq^{n-1}$.',
          },
          drill: true,
        },
        {
          id: 'najbardziej-prawdopodobna-liczba-sukcesow',
          tex: '(n+1)p-1\\ \\le\\ k_{0}\\ \\le\\ (n+1)p',
          name: { pl: 'Najbardziej prawdopodobna liczba sukcesów', en: 'Most probable number of successes' },
          note: {
            pl: 'Wyprowadzenie: $\\frac{P_n(k+1)}{P_n(k)}=\\frac{n-k}{k+1}\\cdot\\frac{p}{q}\\ge 1$. Gdy $(n+1)p$ jest całkowite, maksima są dwa: $k_0=(n+1)p-1$ i $k_0=(n+1)p$.',
            en: 'Derivation: $\\frac{P_n(k+1)}{P_n(k)}=\\frac{n-k}{k+1}\\cdot\\frac{p}{q}\\ge 1$. When $(n+1)p$ is an integer there are two maxima: $k_0=(n+1)p-1$ and $k_0=(n+1)p$.',
          },
          drill: true,
        },
        {
          id: 'wartosc-oczekiwana-sukcesow',
          tex: '\\mathbb{E}\\,S_{n}=np,\\qquad \\operatorname{Var}S_{n}=np(1-p)',
          name: { pl: 'Wartość oczekiwana i wariancja liczby sukcesów', en: 'Mean and variance of the number of successes' },
          note: {
            pl: 'Suma $n$ niezależnych prób zero-jedynkowych: wartości oczekiwane i wariancje się dodają. $\\mathbb{E}S_n$ i $k_0$ różnią się co najwyżej o 1.',
            en: 'A sum of $n$ independent zero–one trials: means and variances add. $\\mathbb{E}S_n$ and $k_0$ differ by at most 1.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'bernoulli-dokladnie-k', title: { pl: 'Dokładnie $k$ sukcesów', en: 'Exactly $k$ successes' }, levels: [3, 4] },
        { id: 'bernoulli-conajmniej', title: { pl: 'Warunki „co najmniej” i „co najwyżej”', en: '"At least" and "at most" conditions' }, levels: [3, 4] },
        { id: 'bernoulli-najbardziej-prawdopodobne', title: { pl: 'Najbardziej prawdopodobna liczba sukcesów', en: 'The most probable number of successes' }, levels: [5] },
        { id: 'bernoulli-parametry', title: { pl: 'Wyznaczanie $n$ lub $p$ z warunków', en: 'Determining $n$ or $p$ from conditions' }, levels: [5, 6] },
      ],
      problems: [
        {
          id: 'schemat-bernoulliego-l3-01',
          skill: 'bernoulli-dokladnie-k',
          level: 3,
          prompt: {
            pl: 'Rzucamy symetryczną monetą 6 razy. Oblicz prawdopodobieństwo, że orzeł wypadnie dokładnie 4 razy.',
            en: 'A fair coin is tossed 6 times. Find the probability of exactly 4 heads.',
          },
          answer: '\\frac{15}{64}',
          accept: ['15/64'],
          solution: [
            { pl: 'Schemat Bernoulliego: $n=6$, $p=q=\\tfrac{1}{2}$, $k=4$.', en: 'Bernoulli scheme: $n=6$, $p=q=\\tfrac{1}{2}$, $k=4$.' },
            { pl: '$P_{6}(4)=\\binom{6}{4}\\left(\\tfrac{1}{2}\\right)^{4}\\left(\\tfrac{1}{2}\\right)^{2}=\\binom{6}{4}\\cdot\\dfrac{1}{64}$.', en: '$P_{6}(4)=\\binom{6}{4}\\left(\\tfrac{1}{2}\\right)^{4}\\left(\\tfrac{1}{2}\\right)^{2}=\\binom{6}{4}\\cdot\\dfrac{1}{64}$.' },
            { pl: '$\\binom{6}{4}=\\binom{6}{2}=15$, więc $P=\\dfrac{15}{64}$.', en: '$\\binom{6}{4}=\\binom{6}{2}=15$, so $P=\\dfrac{15}{64}$.' },
          ],
          trap: {
            pl: 'Pominięcie symbolu $\\binom{6}{4}$, czyli policzenie prawdopodobieństwa jednego konkretnego ciągu $\\left(\\frac{1}{2}\\right)^{6}=\\frac{1}{64}$ — orły mogą rozmieścić się na 15 sposobów i każdy trzeba doliczyć.',
            en: 'Dropping the $\\binom{6}{4}$, i.e. computing the probability of one specific string $\\left(\\frac{1}{2}\\right)^{6}=\\frac{1}{64}$ — the heads can be placed in 15 ways and each must be counted.',
          },
        },
        {
          id: 'schemat-bernoulliego-l3-02',
          skill: 'bernoulli-conajmniej',
          level: 3,
          prompt: {
            pl: 'Strzelec trafia do celu z prawdopodobieństwem $0{,}8$, a wyniki strzałów są niezależne. Oddaje 4 strzały. Oblicz prawdopodobieństwo, że trafi co najmniej raz.',
            en: 'A marksman hits the target with probability $0.8$, shots independent. He fires 4 shots. Find the probability of at least one hit.',
          },
          answer: '0{,}9984',
          accept: ['0.9984', '\\frac{624}{625}', '624/625'],
          solution: [
            { pl: 'Zdarzenie przeciwne: cztery pudła z rzędu, $q^{4}=0{,}2^{4}=0{,}0016$.', en: 'Complement: four misses in a row, $q^{4}=0.2^{4}=0.0016$.' },
            { pl: '$P(S_4\\ge 1)=1-0{,}0016=0{,}9984=\\dfrac{624}{625}$.', en: '$P(S_4\\ge 1)=1-0.0016=0.9984=\\dfrac{624}{625}$.' },
          ],
          trap: {
            pl: 'Rachunek $4\\cdot 0{,}8=3{,}2$ — dodawanie prawdopodobieństw niepodzielnych zdarzeń daje wynik większy od 1; „co najmniej jeden” w schemacie Bernoulliego zawsze idzie przez $1-q^{n}$.',
            en: 'Computing $4\\cdot 0.8=3.2$ — adding probabilities of non-disjoint events exceeds 1; "at least one" in a Bernoulli scheme always goes through $1-q^{n}$.',
          },
        },
        {
          id: 'schemat-bernoulliego-l4-03',
          skill: 'bernoulli-dokladnie-k',
          level: 4,
          prompt: {
            pl: 'Łucznik trafia w tarczę z prawdopodobieństwem $0{,}7$, a wyniki strzałów są niezależne. Oddaje 4 strzały. Oblicz prawdopodobieństwo, że trafi dokładnie 3 razy.',
            en: 'An archer hits the target with probability $0.7$, shots independent. She shoots 4 times. Find the probability of exactly 3 hits.',
          },
          answer: '0{,}4116',
          accept: ['0.4116', '\\frac{1029}{2500}'],
          solution: [
            { pl: '$P_{4}(3)=\\binom{4}{3}\\,(0{,}7)^{3}\\,(0{,}3)^{1}$.', en: '$P_{4}(3)=\\binom{4}{3}\\,(0.7)^{3}\\,(0.3)^{1}$.' },
            { pl: '$(0{,}7)^{3}=0{,}343$, więc $P=4\\cdot 0{,}343\\cdot 0{,}3=0{,}4116$.', en: '$(0.7)^{3}=0.343$, so $P=4\\cdot 0.343\\cdot 0.3=0.4116$.' },
          ],
          trap: {
            pl: 'Zapomnienie czynnika porażki $(0{,}3)^{1}$ — „dokładnie 3 z 4” wymaga jednego pudła; bez niego liczy się „3 trafienia w 3 strzałach” i wychodzi zawyżone $4\\cdot 0{,}343$.',
            en: 'Omitting the failure factor $(0.3)^{1}$ — "exactly 3 of 4" requires one miss; without it one computes "3 hits in 3 shots" and gets an inflated $4\\cdot 0.343$.',
          },
        },
        {
          id: 'schemat-bernoulliego-l4-04',
          skill: 'bernoulli-conajmniej',
          level: 4,
          prompt: {
            pl: 'Rzucamy symetryczną kostką 5 razy. Oblicz prawdopodobieństwo, że szóstka wypadnie co najmniej dwa razy.',
            en: 'A fair die is rolled 5 times. Find the probability that a six appears at least twice.',
          },
          answer: '\\frac{763}{3888}',
          accept: ['763/3888'],
          solution: [
            { pl: 'Dopełnienie: zero szóstek lub dokładnie jedna. $P_5(0)=\\left(\\tfrac{5}{6}\\right)^{5}=\\dfrac{3125}{7776}$.', en: 'Complement: zero sixes or exactly one. $P_5(0)=\\left(\\tfrac{5}{6}\\right)^{5}=\\dfrac{3125}{7776}$.' },
            { pl: '$P_5(1)=\\binom{5}{1}\\cdot\\dfrac{1}{6}\\cdot\\left(\\dfrac{5}{6}\\right)^{4}=5\\cdot\\dfrac{625}{7776}=\\dfrac{3125}{7776}$.', en: '$P_5(1)=\\binom{5}{1}\\cdot\\dfrac{1}{6}\\cdot\\left(\\dfrac{5}{6}\\right)^{4}=5\\cdot\\dfrac{625}{7776}=\\dfrac{3125}{7776}$.' },
            { pl: '$P(S_5\\ge 2)=1-\\dfrac{3125}{7776}-\\dfrac{3125}{7776}=\\dfrac{7776-6250}{7776}=\\dfrac{1526}{7776}=\\dfrac{763}{3888}$.', en: '$P(S_5\\ge 2)=1-\\dfrac{3125}{7776}-\\dfrac{3125}{7776}=\\dfrac{7776-6250}{7776}=\\dfrac{1526}{7776}=\\dfrac{763}{3888}$.' },
          ],
          trap: {
            pl: 'Odjęcie tylko $P_5(0)$ — dopełnieniem „co najmniej dwa” jest „co najwyżej jeden”, czyli zarówno zero, jak i dokładnie jedna szóstka. Przypadkowa równość $P_5(0)=P_5(1)$ tutaj kusi, by jeden ze składników uznać za pomyłkę.',
            en: 'Subtracting only $P_5(0)$ — the complement of "at least two" is "at most one", i.e. both zero and exactly one six. The accidental equality $P_5(0)=P_5(1)$ tempts one to dismiss a term as an error.',
          },
        },
        {
          id: 'schemat-bernoulliego-l5-05',
          skill: 'bernoulli-najbardziej-prawdopodobne',
          level: 5,
          prompt: {
            pl: 'Rzucamy symetryczną kostką 50 razy. Wyznacz najbardziej prawdopodobną liczbę wyrzuconych szóstek.',
            en: 'A fair die is rolled 50 times. Find the most probable number of sixes.',
          },
          answer: '8',
          accept: ['k_{0}=8', 'k=8'],
          solution: [
            { pl: 'Stosujemy nierówność $(n+1)p-1\\le k_0\\le (n+1)p$ dla $n=50$, $p=\\tfrac{1}{6}$: $(n+1)p=\\dfrac{51}{6}=8{,}5$.', en: 'Use $(n+1)p-1\\le k_0\\le (n+1)p$ with $n=50$, $p=\\tfrac{1}{6}$: $(n+1)p=\\dfrac{51}{6}=8.5$.' },
            { pl: 'Przedział $\\langle 7{,}5;\\ 8{,}5\\rangle$ zawiera dokładnie jedną liczbę całkowitą: $k_0=8$.', en: 'The interval $\\langle 7.5,\\ 8.5\\rangle$ contains exactly one integer: $k_0=8$.' },
            { pl: 'Kontrola ilorazem: $\\dfrac{P_{50}(k+1)}{P_{50}(k)}=\\dfrac{50-k}{k+1}\\cdot\\dfrac{1}{5}>1$ dla $k\\le 7$ i $<1$ dla $k\\ge 8$ — maksimum w $k=8$.', en: 'Ratio check: $\\dfrac{P_{50}(k+1)}{P_{50}(k)}=\\dfrac{50-k}{k+1}\\cdot\\dfrac{1}{5}>1$ for $k\\le 7$ and $<1$ for $k\\ge 8$ — maximum at $k=8$.' },
          ],
          trap: {
            pl: 'Zaokrąglenie wartości oczekiwanej $np=\\frac{50}{6}\\approx 8{,}33$ do „8 lub 9 — wszystko jedno” — poprawne kryterium używa $(n+1)p$, a nie $np$, i tu rozstrzyga jednoznacznie na rzecz 8.',
            en: 'Rounding the mean $np=\\frac{50}{6}\\approx 8.33$ to "8 or 9 — whatever" — the correct criterion uses $(n+1)p$, not $np$, and here it decides unambiguously for 8.',
          },
        },
        {
          id: 'schemat-bernoulliego-l5-06',
          skill: 'bernoulli-parametry',
          level: 5,
          prompt: {
            pl: 'Ile razy co najmniej trzeba rzucić symetryczną kostką, aby prawdopodobieństwo wyrzucenia co najmniej jednej szóstki było większe od $0{,}9$?',
            en: 'How many times, at minimum, must a fair die be rolled so that the probability of at least one six exceeds $0.9$?',
          },
          answer: 'n=13',
          accept: ['13'],
          solution: [
            { pl: 'Warunek: $1-\\left(\\tfrac{5}{6}\\right)^{n}>0{,}9$, czyli $\\left(\\tfrac{5}{6}\\right)^{n}<0{,}1$.', en: 'Condition: $1-\\left(\\tfrac{5}{6}\\right)^{n}>0.9$, i.e. $\\left(\\tfrac{5}{6}\\right)^{n}<0.1$.' },
            { pl: 'Logarytmujemy: $n\\ln\\tfrac{5}{6}<\\ln 0{,}1$; ponieważ $\\ln\\tfrac{5}{6}<0$, dzielenie odwraca nierówność: $n>\\dfrac{\\ln 10}{\\ln\\tfrac{6}{5}}\\approx\\dfrac{2{,}3026}{0{,}1823}\\approx 12{,}63$.', en: 'Take logs: $n\\ln\\tfrac{5}{6}<\\ln 0.1$; since $\\ln\\tfrac{5}{6}<0$, dividing flips the inequality: $n>\\dfrac{\\ln 10}{\\ln\\tfrac{6}{5}}\\approx\\dfrac{2.3026}{0.1823}\\approx 12.63$.' },
            { pl: 'Najmniejsze całkowite $n$ to $13$. Kontrola: $\\left(\\tfrac{5}{6}\\right)^{12}\\approx 0{,}112>0{,}1$, a $\\left(\\tfrac{5}{6}\\right)^{13}\\approx 0{,}093<0{,}1$.', en: 'The least integer $n$ is $13$. Check: $\\left(\\tfrac{5}{6}\\right)^{12}\\approx 0.112>0.1$ and $\\left(\\tfrac{5}{6}\\right)^{13}\\approx 0.093<0.1$.' },
          ],
          trap: {
            pl: 'Niedostrzeżenie, że $\\ln\\frac{5}{6}$ jest ujemny — dzielenie nierówności bez zmiany znaku daje $n<12{,}63$ i absurdalną odpowiedź „co najwyżej 12”.',
            en: 'Missing that $\\ln\\frac{5}{6}$ is negative — dividing without flipping gives $n<12.63$ and the absurd answer "at most 12".',
          },
        },
        {
          id: 'schemat-bernoulliego-l6-07',
          skill: 'bernoulli-parametry',
          level: 6,
          prompt: {
            pl: 'Rzucamy symetryczną kostką 10 razy. Oblicz prawdopodobieństwo, że liczba wyrzuconych szóstek jest parzysta (zero szóstek uznajemy za liczbę parzystą).',
            en: 'A fair die is rolled 10 times. Find the probability that the number of sixes is even (zero counts as even).',
          },
          answer: '\\frac{60073}{118098}',
          accept: ['60073/118098', '\\frac{1}{2}\\left(1+\\left(\\frac{2}{3}\\right)^{10}\\right)'],
          solution: [
            { pl: 'Niech $p=\\tfrac{1}{6}$, $q=\\tfrac{5}{6}$. Z dwumianu Newtona: $(q+p)^{10}=\\sum_k\\binom{10}{k}p^{k}q^{10-k}=1$ oraz $(q-p)^{10}=\\sum_k\\binom{10}{k}(-p)^{k}q^{10-k}$.', en: 'Let $p=\\tfrac{1}{6}$, $q=\\tfrac{5}{6}$. By the binomial theorem: $(q+p)^{10}=\\sum_k\\binom{10}{k}p^{k}q^{10-k}=1$ and $(q-p)^{10}=\\sum_k\\binom{10}{k}(-p)^{k}q^{10-k}$.' },
            { pl: 'Po dodaniu składniki o nieparzystych $k$ się znoszą, a parzyste podwajają: $P(\\text{parzysta})=\\dfrac{1+(q-p)^{10}}{2}$.', en: 'Adding the two, odd-$k$ terms cancel and even ones double: $P(\\text{even})=\\dfrac{1+(q-p)^{10}}{2}$.' },
            { pl: '$q-p=\\dfrac{2}{3}$, więc $P=\\dfrac{1}{2}\\left(1+\\left(\\dfrac{2}{3}\\right)^{10}\\right)=\\dfrac{1}{2}\\left(1+\\dfrac{1024}{59049}\\right)=\\dfrac{60073}{118098}\\approx 0{,}509$.', en: '$q-p=\\dfrac{2}{3}$, so $P=\\dfrac{1}{2}\\left(1+\\left(\\dfrac{2}{3}\\right)^{10}\\right)=\\dfrac{1}{2}\\left(1+\\dfrac{1024}{59049}\\right)=\\dfrac{60073}{118098}\\approx 0.509$.' },
            { pl: 'Wynik jest odrobinę większy od $\\tfrac{1}{2}$ — nadwyżkę robi składnik $k=0$; przy $p=\\tfrac{1}{2}$ (moneta) dostalibyśmy dokładnie $\\tfrac{1}{2}$.', en: 'The value slightly exceeds $\\tfrac{1}{2}$ — the surplus comes from the $k=0$ term; for $p=\\tfrac{1}{2}$ (a coin) we would get exactly $\\tfrac{1}{2}$.' },
          ],
          trap: {
            pl: 'Odpowiedź $\\frac{1}{2}$ „z symetrii parzyste–nieparzyste” — symetria zachodzi tylko dla $p=\\frac{1}{2}$; dla $p\\ne\\frac{1}{2}$ potrzebny jest trik z $(q-p)^{n}$, a ręczne sumowanie sześciu składników $P_{10}(0),P_{10}(2),\\dots$ jest proszeniem się o błąd rachunkowy.',
            en: 'Answering $\\frac{1}{2}$ "by even–odd symmetry" — the symmetry holds only for $p=\\frac{1}{2}$; for $p\\ne\\frac{1}{2}$ the $(q-p)^{n}$ trick is needed, and summing six terms $P_{10}(0),P_{10}(2),\\dots$ by hand invites arithmetic errors.',
          },
        },
      ],
    },
  ],
};
