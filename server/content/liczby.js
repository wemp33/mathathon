// Liczby rzeczywiste — the foundation module of the matura track.
//
// Everything else in the syllabus quietly assumes this file: intervals for
// domains, absolute value for distance arguments, rational exponents for
// derivatives of roots, logarithms for exponential models, and the
// irrationality proofs that teach what a proof by contradiction feels like.

export default {
  id: 'liczby',
  track: 'matura',
  order: 10,
  title: {
    pl: 'Liczby rzeczywiste',
    en: 'Real numbers',
  },
  blurb: {
    pl: 'Od osi liczbowej i przedziałów, przez moduł, potęgi wymierne i logarytmy, po procent składany i dowody niewymierności.',
    en: 'From the number line and intervals through absolute value, rational powers and logarithms, to compound interest and irrationality proofs.',
  },
  topics: [

    /* ═══ 1. Zbiory liczbowe, oś liczbowa i przedziały ═══════════════════ */
    {
      id: 'liczby-zbiory-przedzialy',
      title: {
        pl: 'Zbiory liczbowe, oś liczbowa i przedziały',
        en: 'Number sets, the number line and intervals',
      },
      level: 1,
      prereq: [],
      theory: {
        pl: 'Zbiór liczb rzeczywistych $\\mathbb{R}$ powstaje przez kolejne rozszerzenia: liczby naturalne $\\mathbb{N}$, całkowite $\\mathbb{Z}$, wymierne $\\mathbb{Q}$, a na końcu wszystkie punkty osi liczbowej. Każdej liczbie rzeczywistej odpowiada dokładnie jeden punkt osi i odwrotnie — właśnie ta odpowiedniość pozwala myśleć o nierówności jak o zbiorze punktów. Spójne podzbiory osi zapisujemy jako przedziały: $\\langle a,b\\rangle$ jest domknięty (oba końce należą), $(a,b)$ otwarty, a $\\langle a,b)$ i $(a,b\\rangle$ są domknięte jednostronnie. Przy symbolu $\\infty$ nawias jest zawsze otwarty, bo nieskończoność nie jest liczbą i nie może być elementem zbioru. Na przedziałach wykonujemy działania na zbiorach: sumę $\\cup$, iloczyn $\\cap$, różnicę $\\setminus$ i dopełnienie $\\mathbb{R}\\setminus A$ — najbezpieczniej odczytać je z rysunku na osi, zaznaczając końce kółkiem pustym lub pełnym. Po ten język sięgamy zawsze, gdy trzeba zapisać dziedzinę funkcji albo zbiór rozwiązań nierówności.',
        en: 'The set of real numbers $\\mathbb{R}$ is built by successive extensions: the naturals $\\mathbb{N}$, the integers $\\mathbb{Z}$, the rationals $\\mathbb{Q}$, and finally every point of the number line. Each real number corresponds to exactly one point of the line and conversely — it is this correspondence that lets us think of an inequality as a set of points. Connected subsets of the line are written as intervals: $\\langle a,b\\rangle$ is closed (both endpoints belong), $(a,b)$ is open, and $\\langle a,b)$, $(a,b\\rangle$ are half-closed. Next to the symbol $\\infty$ the bracket is always open, because infinity is not a number and cannot be an element of a set. On intervals we perform set operations: union $\\cup$, intersection $\\cap$, difference $\\setminus$ and complement $\\mathbb{R}\\setminus A$ — the safest way is to read them off a sketch of the line, marking endpoints with a hollow or filled dot. We reach for this language whenever we have to write the domain of a function or the solution set of an inequality.',
      },
      formulas: [
        {
          id: 'zbiory-lancuch-rozszerzen',
          tex: '\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}',
          name: { pl: 'Łańcuch zbiorów liczbowych', en: 'Chain of number sets' },
          note: {
            pl: 'Każda liczba naturalna jest całkowita, każda całkowita wymierna. Odwrotne zawierania nie zachodzą: $\\tfrac{1}{2}\\notin\\mathbb{Z}$, $\\sqrt{2}\\notin\\mathbb{Q}$.',
            en: 'Every natural number is an integer, every integer is rational. The reverse inclusions fail: $\\tfrac{1}{2}\\notin\\mathbb{Z}$, $\\sqrt{2}\\notin\\mathbb{Q}$.',
          },
          drill: true,
        },
        {
          id: 'zbior-Q-definicja',
          tex: '\\mathbb{Q}=\\left\\{\\frac{m}{n}:\\ m\\in\\mathbb{Z},\\ n\\in\\mathbb{Z}\\setminus\\{0\\}\\right\\}',
          name: { pl: 'Definicja liczby wymiernej', en: 'Definition of a rational number' },
          note: {
            pl: 'Wymierność to istnienie jakiegokolwiek zapisu ułamkowego. $0{,}(3)$ i $\\sqrt{4}$ są wymierne, choć nie wyglądają jak ułamki.',
            en: 'Rationality means some fractional representation exists. $0{,}(3)$ and $\\sqrt{4}$ are rational even though they do not look like fractions.',
          },
          drill: true,
        },
        {
          id: 'przedzial-domkniety',
          tex: '\\langle a,b\\rangle=\\{x\\in\\mathbb{R}:\\ a\\le x\\le b\\}',
          name: { pl: 'Przedział domknięty', en: 'Closed interval' },
          note: {
            pl: 'Zapis $[a,b]$ znaczy dokładnie to samo. Oba końce należą do zbioru — na osi kółka pełne.',
            en: 'The notation $[a,b]$ means exactly the same. Both endpoints belong — filled dots on the line.',
          },
          drill: true,
        },
        {
          id: 'przedzial-otwarty',
          tex: '(a,b)=\\{x\\in\\mathbb{R}:\\ a<x<b\\}',
          name: { pl: 'Przedział otwarty', en: 'Open interval' },
          note: {
            pl: 'Żaden koniec nie należy. Przedział otwarty nie ma elementu największego ani najmniejszego.',
            en: 'Neither endpoint belongs. An open interval has no greatest and no least element.',
          },
          drill: true,
        },
        {
          id: 'przedzial-jednostronnie-domkniety',
          tex: '\\langle a,b)=\\{x:\\ a\\le x<b\\},\\qquad (a,b\\rangle=\\{x:\\ a<x\\le b\\}',
          name: { pl: 'Przedziały jednostronnie domknięte', en: 'Half-closed intervals' },
          note: {
            pl: 'Nawias idzie za nierównością: $\\le$ daje nawias ostrokątny (domknięty), $<$ daje okrągły (otwarty).',
            en: 'The bracket follows the inequality: $\\le$ gives the angle (closed) bracket, $<$ gives the round (open) one.',
          },
          drill: true,
        },
        {
          id: 'przedzial-nieskonczony',
          tex: '\\langle a,+\\infty)=\\{x:\\ x\\ge a\\},\\qquad (-\\infty,b)=\\{x:\\ x<b\\}',
          name: { pl: 'Przedziały nieskończone', en: 'Unbounded intervals' },
          note: {
            pl: 'Przy $\\pm\\infty$ nawias musi być okrągły — nieskończoność nie jest liczbą, więc nie może należeć do zbioru.',
            en: 'Next to $\\pm\\infty$ the bracket must be round — infinity is not a number, so it cannot belong to the set.',
          },
          drill: true,
        },
        {
          id: 'dzialania-na-zbiorach',
          tex: 'A\\cup B,\\qquad A\\cap B,\\qquad A\\setminus B=\\{x:\\ x\\in A\\ \\wedge\\ x\\notin B\\}',
          name: { pl: 'Suma, iloczyn i różnica zbiorów', en: 'Union, intersection and difference of sets' },
          note: {
            pl: 'Suma to alternatywa warunków, iloczyn to koniunkcja. W różnicy $A\\setminus B$ końce $B$ potrafią wrócić do wyniku, jeśli do $B$ nie należały.',
            en: 'Union is a disjunction of conditions, intersection a conjunction. In $A\\setminus B$ the endpoints of $B$ can return to the answer if they did not belong to $B$.',
          },
          drill: true,
        },
        {
          id: 'dopelnienie-zbioru',
          tex: "A'=\\mathbb{R}\\setminus A",
          name: { pl: 'Dopełnienie zbioru w $\\mathbb{R}$', en: 'Complement of a set in $\\mathbb{R}$' },
          note: {
            pl: 'Dopełnienie odwraca każdą nierówność wraz z jej ostrością: dopełnieniem $\\langle a,b\\rangle$ jest $(-\\infty,a)\\cup(b,+\\infty)$.',
            en: 'The complement flips every inequality together with its strictness: the complement of $\\langle a,b\\rangle$ is $(-\\infty,a)\\cup(b,+\\infty)$.',
          },
          drill: true,
        },
        {
          id: 'otoczenie-punktu',
          tex: '(x_{0}-r,\\ x_{0}+r)=\\{x\\in\\mathbb{R}:\\ |x-x_{0}|<r\\}',
          name: { pl: 'Otoczenie punktu o promieniu $r$', en: 'Neighbourhood of a point of radius $r$' },
          note: {
            pl: 'Most między przedziałem a modułem: środek to średnia końców, promień to połowa długości.',
            en: 'The bridge between intervals and absolute value: the centre is the mean of the endpoints, the radius is half the length.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'zbiory-przynaleznosc', title: { pl: 'Przynależność liczby do $\\mathbb{N},\\mathbb{Z},\\mathbb{Q},\\mathbb{R}$', en: 'Membership of a number in $\\mathbb{N},\\mathbb{Z},\\mathbb{Q},\\mathbb{R}$' }, levels: [1, 2, 3] },
        { id: 'zbiory-zapis-przedzialu', title: { pl: 'Zapis zbioru w postaci przedziału', en: 'Writing a set as an interval' }, levels: [1, 2] },
        { id: 'zbiory-dzialania-na-przedzialach', title: { pl: 'Suma, iloczyn i różnica przedziałów', en: 'Union, intersection and difference of intervals' }, levels: [2, 3] },
        { id: 'zbiory-dopelnienie', title: { pl: 'Dopełnienie zbioru na osi liczbowej', en: 'Complement of a set on the number line' }, levels: [3, 4] },
        { id: 'zbiory-nierownosc-na-osi', title: { pl: 'Zbiór rozwiązań nierówności jako suma przedziałów', en: 'Solution set of an inequality as a union of intervals' }, levels: [2, 3, 4] },
        { id: 'zbiory-parametr', title: { pl: 'Warunki na parametr przy zawieraniu przedziałów', en: 'Conditions on a parameter for interval inclusion' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'liczby-zbiory-przedzialy-l1-01',
          skill: 'zbiory-zapis-przedzialu',
          level: 1,
          prompt: {
            pl: 'Zbiór $A$ składa się ze wszystkich liczb rzeczywistych $x$ spełniających warunek $-3\\le x<7$. Zapisz zbiór $A$ w postaci przedziału.',
            en: 'The set $A$ consists of all real numbers $x$ satisfying $-3\\le x<7$. Write $A$ as an interval.',
          },
          answer: '\\langle -3,7)',
          accept: ['[-3,7)', '\\langle-3;7)', '\\left\\langle -3,7\\right)'],
          solution: [
            { pl: 'Lewy koniec spełnia nierówność nieostrą $-3\\le x$, więc liczba $-3$ należy do zbioru — nawias domknięty.', en: 'The left endpoint satisfies the non-strict inequality $-3\\le x$, so $-3$ belongs to the set — closed bracket.' },
            { pl: 'Prawy koniec spełnia nierówność ostrą $x<7$, więc liczba $7$ nie należy — nawias otwarty.', en: 'The right endpoint satisfies the strict inequality $x<7$, so $7$ does not belong — open bracket.' },
            { pl: 'Stąd $A=\\langle -3,7)$.', en: 'Hence $A=\\langle -3,7)$.' },
          ],
          trap: {
            pl: 'Mechaniczne domykanie obu końców. Rodzaj nawiasu wynika wyłącznie z ostrości nierówności przy danym końcu.',
            en: 'Mechanically closing both ends. The bracket type follows solely from the strictness of the inequality at that end.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l2-01',
          skill: 'zbiory-dzialania-na-przedzialach',
          level: 2,
          prompt: {
            pl: 'Dane są zbiory $A=\\langle -4,3)$ oraz $B=(-1,7\\rangle$. Wyznacz zbiór $A\\setminus B$.',
            en: 'Given the sets $A=\\langle -4,3)$ and $B=(-1,7\\rangle$, determine the set $A\\setminus B$.',
          },
          answer: '\\langle -4,-1\\rangle',
          accept: ['[-4,-1]', '\\left\\langle -4,-1\\right\\rangle'],
          solution: [
            { pl: 'Do różnicy $A\\setminus B$ należą te liczby z $A$, które nie należą do $B$, czyli spełniają $-4\\le x<3$ oraz $x\\le -1$ lub $x>7$.', en: 'The difference $A\\setminus B$ consists of the numbers of $A$ that are not in $B$, i.e. those with $-4\\le x<3$ and ($x\\le -1$ or $x>7$).' },
            { pl: 'Warunek $x>7$ jest sprzeczny z $x<3$, zostaje $-4\\le x\\le -1$.', en: 'The condition $x>7$ contradicts $x<3$, so only $-4\\le x\\le -1$ remains.' },
            { pl: 'Liczba $-1$ nie należy do $B$ (bo $B$ jest tam otwarty), więc zostaje w wyniku: $A\\setminus B=\\langle -4,-1\\rangle$.', en: 'The number $-1$ does not belong to $B$ (which is open there), so it stays in the answer: $A\\setminus B=\\langle -4,-1\\rangle$.' },
          ],
          trap: {
            pl: 'Odrzucenie końca $-1$. Skoro $B$ jest w $-1$ otwarty, to $-1\\notin B$ i punkt ten należy do różnicy — nawias domyka się właśnie tam, gdzie w $B$ był otwarty.',
            en: 'Discarding the endpoint $-1$. Since $B$ is open at $-1$, we have $-1\\notin B$ and the point belongs to the difference — the bracket closes exactly where $B$ was open.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l2-02',
          skill: 'zbiory-przynaleznosc',
          level: 2,
          prompt: {
            pl: 'Ile spośród liczb $\\sqrt{16}$, $\\frac{22}{7}$, $\\sqrt[3]{-8}$, $0{,}(3)$, $\\sqrt{2}\\cdot\\sqrt{8}$, $\\frac{\\pi}{\\pi}$ jest liczbami całkowitymi?',
            en: 'How many of the numbers $\\sqrt{16}$, $\\frac{22}{7}$, $\\sqrt[3]{-8}$, $0{,}(3)$, $\\sqrt{2}\\cdot\\sqrt{8}$, $\\frac{\\pi}{\\pi}$ are integers?',
          },
          answer: '4',
          accept: ['cztery'],
          solution: [
            { pl: 'Upraszczamy każdą liczbę: $\\sqrt{16}=4$, $\\sqrt[3]{-8}=-2$, $\\sqrt{2}\\cdot\\sqrt{8}=\\sqrt{16}=4$, $\\frac{\\pi}{\\pi}=1$.', en: 'Simplify each number: $\\sqrt{16}=4$, $\\sqrt[3]{-8}=-2$, $\\sqrt{2}\\cdot\\sqrt{8}=\\sqrt{16}=4$, $\\frac{\\pi}{\\pi}=1$.' },
            { pl: 'Pozostałe dwie są wymierne, ale nie całkowite: $\\frac{22}{7}$ oraz $0{,}(3)=\\frac{1}{3}$.', en: 'The remaining two are rational but not integers: $\\frac{22}{7}$ and $0{,}(3)=\\frac{1}{3}$.' },
            { pl: 'Całkowite są zatem cztery liczby.', en: 'So four of the numbers are integers.' },
          ],
          trap: {
            pl: 'Ocenianie liczby po jej wyglądzie. $\\sqrt{2}\\cdot\\sqrt{8}$ wygląda niewymiernie, a jest równe $4$; $0{,}(3)$ wygląda „niecałkowicie” i faktycznie takie jest, ale bywa mylnie brane za niewymierne.',
            en: 'Judging a number by its appearance. $\\sqrt{2}\\cdot\\sqrt{8}$ looks irrational but equals $4$; $0{,}(3)$ is indeed not an integer but is often wrongly called irrational.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l3-01',
          skill: 'zbiory-nierownosc-na-osi',
          level: 3,
          prompt: {
            pl: 'Wyznacz zbiór $\\left\\{x\\in\\mathbb{R}:\\ \\dfrac{x-1}{x+2}\\ge 0\\right\\}$ i zapisz go jako sumę przedziałów.',
            en: 'Determine the set $\\left\\{x\\in\\mathbb{R}:\\ \\dfrac{x-1}{x+2}\\ge 0\\right\\}$ and write it as a union of intervals.',
          },
          answer: '(-\\infty,-2)\\cup\\langle 1,+\\infty)',
          accept: ['(-\\infty,-2)\\cup[1,+\\infty)', '(-\\infty,-2)\\cup\\langle 1,\\infty)'],
          solution: [
            { pl: 'Dziedzina: $x+2\\ne 0$, czyli $x\\ne -2$.', en: 'Domain: $x+2\\ne 0$, i.e. $x\\ne -2$.' },
            { pl: 'Nierówność $\\frac{x-1}{x+2}\\ge 0$ jest równoważna $(x-1)(x+2)\\ge 0$ przy $x\\ne -2$, bo mnożymy przez $(x+2)^{2}>0$.', en: 'For $x\\ne -2$ the inequality $\\frac{x-1}{x+2}\\ge 0$ is equivalent to $(x-1)(x+2)\\ge 0$, since we multiply by $(x+2)^{2}>0$.' },
            { pl: 'Miejsca zerowe $-2$ i $1$, parabola dodatnia poza pierwiastkami: $x\\le -2$ lub $x\\ge 1$. Usuwamy $-2$ z dziedziny.', en: 'The roots are $-2$ and $1$; the upward parabola is non-negative outside them: $x\\le -2$ or $x\\ge 1$. Remove $-2$, excluded by the domain.' },
            { pl: 'Zbiorem rozwiązań jest $(-\\infty,-2)\\cup\\langle 1,+\\infty)$.', en: 'The solution set is $(-\\infty,-2)\\cup\\langle 1,+\\infty)$.' },
          ],
          trap: {
            pl: 'Domknięcie przedziału w $-2$ przez analogię do $1$. Zero licznika wchodzi do rozwiązania (nierówność nieostra), zero mianownika nigdy.',
            en: 'Closing the interval at $-2$ by analogy with $1$. A zero of the numerator enters the solution (non-strict inequality); a zero of the denominator never does.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l3-02',
          skill: 'zbiory-dopelnienie',
          level: 3,
          prompt: {
            pl: 'Dane są zbiory $A=(-\\infty,4\\rangle$ oraz $B=\\langle -2,+\\infty)$. Wyznacz zbiór $\\mathbb{R}\\setminus(A\\cap B)$.',
            en: 'Given $A=(-\\infty,4\\rangle$ and $B=\\langle -2,+\\infty)$, determine the set $\\mathbb{R}\\setminus(A\\cap B)$.',
          },
          answer: '(-\\infty,-2)\\cup(4,+\\infty)',
          accept: ['(-\\infty,-2)\\cup(4,\\infty)'],
          solution: [
            { pl: 'Iloczyn to koniunkcja warunków: $x\\le 4$ oraz $x\\ge -2$, czyli $A\\cap B=\\langle -2,4\\rangle$.', en: 'The intersection is the conjunction of conditions: $x\\le 4$ and $x\\ge -2$, so $A\\cap B=\\langle -2,4\\rangle$.' },
            { pl: 'Dopełnienie to zaprzeczenie: $x<-2$ lub $x>4$.', en: 'The complement is the negation: $x<-2$ or $x>4$.' },
            { pl: 'Zatem $\\mathbb{R}\\setminus(A\\cap B)=(-\\infty,-2)\\cup(4,+\\infty)$.', en: 'Hence $\\mathbb{R}\\setminus(A\\cap B)=(-\\infty,-2)\\cup(4,+\\infty)$.' },
          ],
          trap: {
            pl: 'Przepisanie nawiasów bez zmiany. Zaprzeczenie $x\\le 4$ to $x>4$ — dopełnienie przedziału domkniętego składa się z przedziałów otwartych.',
            en: 'Copying the brackets unchanged. The negation of $x\\le 4$ is $x>4$ — the complement of a closed interval consists of open intervals.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l4-01',
          skill: 'zbiory-parametr',
          level: 4,
          prompt: {
            pl: 'Wyznacz wszystkie wartości parametru $m$, dla których przedział $\\langle m,\\,m+3\\rangle$ zawiera się w przedziale $(-2,8)$.',
            en: 'Find all values of the parameter $m$ for which the interval $\\langle m,\\,m+3\\rangle$ is contained in the interval $(-2,8)$.',
          },
          answer: 'm\\in(-2,5)',
          accept: ['(-2,5)', '-2<m<5'],
          solution: [
            { pl: 'Zawieranie oznacza, że oba końce mniejszego przedziału leżą w $(-2,8)$: $m>-2$ oraz $m+3<8$.', en: 'Containment means both endpoints of the smaller interval lie in $(-2,8)$: $m>-2$ and $m+3<8$.' },
            { pl: 'Z drugiego warunku $m<5$.', en: 'The second condition gives $m<5$.' },
            { pl: 'Część wspólna: $m\\in(-2,5)$.', en: 'Intersecting: $m\\in(-2,5)$.' },
          ],
          trap: {
            pl: 'Zapis nierówności nieostrych. Przedział $(-2,8)$ jest otwarty, więc końce $m$ i $m+3$, które do $\\langle m,m+3\\rangle$ należą, muszą leżeć ostro wewnątrz — $m=-2$ dawałoby $-2\\in\\langle m,m+3\\rangle$, a $-2\\notin(-2,8)$.',
            en: 'Writing non-strict inequalities. The interval $(-2,8)$ is open, so the endpoints $m$ and $m+3$, which do belong to $\\langle m,m+3\\rangle$, must lie strictly inside — $m=-2$ would give $-2\\in\\langle m,m+3\\rangle$ while $-2\\notin(-2,8)$.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l4-02',
          skill: 'zbiory-przynaleznosc',
          level: 4,
          prompt: {
            pl: 'Niech $A=\\{x\\in\\mathbb{R}:\\ x^{2}\\le 10\\}$. Wyznacz liczbę elementów zbioru $A\\cap\\mathbb{Z}$.',
            en: 'Let $A=\\{x\\in\\mathbb{R}:\\ x^{2}\\le 10\\}$. Determine the number of elements of $A\\cap\\mathbb{Z}$.',
          },
          answer: '7',
          accept: ['siedem'],
          solution: [
            { pl: 'Nierówność $x^{2}\\le 10$ jest równoważna $|x|\\le\\sqrt{10}$, czyli $-\\sqrt{10}\\le x\\le\\sqrt{10}$.', en: 'The inequality $x^{2}\\le 10$ is equivalent to $|x|\\le\\sqrt{10}$, i.e. $-\\sqrt{10}\\le x\\le\\sqrt{10}$.' },
            { pl: 'Ponieważ $3^{2}=9<10<16=4^{2}$, mamy $3<\\sqrt{10}<4$.', en: 'Since $3^{2}=9<10<16=4^{2}$, we have $3<\\sqrt{10}<4$.' },
            { pl: 'Liczby całkowite w tym przedziale to $-3,-2,-1,0,1,2,3$ — jest ich $7$.', en: 'The integers in that interval are $-3,-2,-1,0,1,2,3$ — seven of them.' },
          ],
          trap: {
            pl: 'Przejście $x^{2}\\le 10\\Rightarrow x\\le\\sqrt{10}$ z pominięciem gałęzi ujemnej. Pierwiastkowanie nierówności kwadratowej daje moduł, a nie samą liczbę.',
            en: 'Going from $x^{2}\\le 10$ to $x\\le\\sqrt{10}$ and dropping the negative branch. Taking the root of a quadratic inequality yields an absolute value, not a bare number.',
          },
        },
        {
          id: 'liczby-zbiory-przedzialy-l5-01',
          skill: 'zbiory-parametr',
          level: 5,
          prompt: {
            pl: 'Dane są przedziały $A=\\langle a,\\,a+2\\rangle$ oraz $B=\\langle 2a-1,\\,2a+1\\rangle$, gdzie $a\\in\\mathbb{R}$. Wyznacz wszystkie wartości $a$, dla których $A\\cap B\\ne\\emptyset$.',
            en: 'Given the intervals $A=\\langle a,\\,a+2\\rangle$ and $B=\\langle 2a-1,\\,2a+1\\rangle$ with $a\\in\\mathbb{R}$, find all $a$ for which $A\\cap B\\ne\\emptyset$.',
          },
          answer: 'a\\in\\langle -1,3\\rangle',
          accept: ['\\langle -1,3\\rangle', '[-1,3]', '-1\\le a\\le 3'],
          solution: [
            { pl: 'Dwa przedziały domknięte $\\langle p,q\\rangle$ i $\\langle r,s\\rangle$ mają punkt wspólny dokładnie wtedy, gdy $p\\le s$ oraz $r\\le q$.', en: 'Two closed intervals $\\langle p,q\\rangle$ and $\\langle r,s\\rangle$ meet exactly when $p\\le s$ and $r\\le q$.' },
            { pl: 'Pierwszy warunek: $a\\le 2a+1$, czyli $a\\ge -1$.', en: 'First condition: $a\\le 2a+1$, i.e. $a\\ge -1$.' },
            { pl: 'Drugi warunek: $2a-1\\le a+2$, czyli $a\\le 3$.', en: 'Second condition: $2a-1\\le a+2$, i.e. $a\\le 3$.' },
            { pl: 'Oba muszą zachodzić jednocześnie, więc $a\\in\\langle -1,3\\rangle$. Sprawdzenie: dla $a=-1$ przedziały stykają się w punkcie $-1$, dla $a=3$ w punkcie $5$.', en: 'Both must hold simultaneously, so $a\\in\\langle -1,3\\rangle$. Check: for $a=-1$ the intervals touch at $-1$, for $a=3$ at $5$.' },
          ],
          trap: {
            pl: 'Sprawdzenie tylko jednej nierówności (np. „lewy koniec $A$ przed prawym końcem $B$”) i podanie połowy odpowiedzi. Drugi błąd to nawiasy otwarte — przedziały domknięte mogą mieć wspólny dokładnie jeden punkt.',
            en: 'Checking only one inequality (e.g. "left end of $A$ before right end of $B$") and giving half the answer. The second error is open brackets — closed intervals may share exactly one point.',
          },
        },
      ],
    },
  ],
};
