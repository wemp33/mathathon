// Wyrażenia algebraiczne i równania — the workhorse module of the matura track.
//
// Almost every later technique bottoms out here: a limit that needs a cube
// factored, a derivative zero that needs Horner, a domain that needs a rational
// inequality, an integral that needs partial fractions. The order inside the
// module is deliberate — identities, then polynomials, then the three families
// of equations built on top of them.

export default {
  id: 'algebra',
  track: 'matura',
  order: 20,
  title: {
    pl: 'Wyrażenia algebraiczne i równania',
    en: 'Algebraic expressions and equations',
  },
  blurb: {
    pl: 'Od wzorów skróconego mnożenia i schematu Hornera, przez siatkę znaków i dziedzinę wyrażeń wymiernych, po wartość bezwzględną, układy z parametrem oraz równania wykładnicze i logarytmiczne.',
    en: 'From the algebraic identities and Horner scheme, through sign grids and the domain of rational expressions, to absolute value, parametrised systems and exponential and logarithmic equations.',
  },
  topics: [

    /* ═══ 1. Wzory skróconego mnożenia ═══════════════════════════════════ */
    {
      id: 'wzory-skroconego-mnozenia',
      title: {
        pl: 'Wzory skróconego mnożenia',
        en: 'Algebraic identities (special products)',
      },
      level: 2,
      prereq: [],
      theory: {
        pl: 'Wzory skróconego mnożenia to tożsamości — równości prawdziwe dla wszystkich wartości występujących w nich liter, więc wolno je czytać w obie strony. W lewo służą do rozwinięcia nawiasu, w prawo do rozkładu wyrażenia na czynniki, a to właśnie rozkład jest w praktyce cenniejszy: iloczyn można skrócić, przyrównać do zera albo zbadać jego znak. Poza kwadratami trzeba mieć w palcach sześciany: $(a\\pm b)^{3}$ z czterema wyrazami oraz $a^{3}\\pm b^{3}$, gdzie drugi czynnik jest kwadratem niezupełnym — ma wyraz $ab$ bez dwójki i znak przeciwny do znaku w nawiasie liniowym. Osobną rodziną są tożsamości symetryczne, pozwalające policzyć $a^{2}+b^{2}$ czy $a^{3}+b^{3}$, gdy znamy tylko sumę $a+b$ i iloczyn $ab$ — bez wyznaczania samych liczb. Po te wzory sięgamy przy skracaniu wyrażeń wymiernych, usuwaniu niewymierności z mianownika, rozkładzie wielomianu na czynniki i wszędzie tam, gdzie podstawienie wprost prowadzi do symbolu nieoznaczonego.',
        en: 'The special products are identities — equalities true for every value of the letters in them, so they may be read in both directions. Read leftwards they expand a bracket, read rightwards they factorise an expression, and in practice factorising is the more valuable direction: a product can be cancelled, set equal to zero, or have its sign examined. Beyond the squares one must have the cubes at one’s fingertips: $(a\\pm b)^{3}$ with its four terms, and $a^{3}\\pm b^{3}$, whose second factor is an incomplete square — it carries the term $ab$ without a factor of two and with the sign opposite to the one in the linear bracket. A separate family are the symmetric identities, which let us compute $a^{2}+b^{2}$ or $a^{3}+b^{3}$ knowing only the sum $a+b$ and the product $ab$ — without finding the numbers themselves. We reach for these identities when cancelling rational expressions, rationalising denominators, factorising polynomials, and everywhere direct substitution leads to an indeterminate form.',
      },
      formulas: [
        {
          id: 'wsm-kwadrat-sumy',
          tex: '(a+b)^{2}=a^{2}+2ab+b^{2}',
          name: { pl: 'Kwadrat sumy', en: 'Square of a sum' },
          note: {
            pl: 'Wyraz środkowy $2ab$ ginie najczęściej ze wszystkich. Zapis $(a+b)^{2}=a^{2}+b^{2}$ jest fałszywy dla każdej pary $a,b\\ne 0$.',
            en: 'The middle term $2ab$ is the one most often lost. Writing $(a+b)^{2}=a^{2}+b^{2}$ is false for every pair $a,b\\ne 0$.',
          },
          drill: true,
        },
        {
          id: 'wsm-kwadrat-roznicy',
          tex: '(a-b)^{2}=a^{2}-2ab+b^{2}',
          name: { pl: 'Kwadrat różnicy', en: 'Square of a difference' },
          note: {
            pl: 'Ostatni wyraz jest zawsze dodatni, bo $(-b)^{2}=b^{2}$. Minus dotyczy wyłącznie wyrazu środkowego.',
            en: 'The last term is always positive, since $(-b)^{2}=b^{2}$. The minus sign affects only the middle term.',
          },
          drill: true,
        },
        {
          id: 'wsm-roznica-kwadratow',
          tex: 'a^{2}-b^{2}=(a-b)(a+b)',
          name: { pl: 'Różnica kwadratów', en: 'Difference of squares' },
          note: {
            pl: 'Suma kwadratów $a^{2}+b^{2}$ nie rozkłada się nad liczbami rzeczywistymi — nie ma wzoru symetrycznego do tego.',
            en: 'The sum of squares $a^{2}+b^{2}$ does not factorise over the reals — there is no symmetric counterpart to this identity.',
          },
          drill: true,
        },
        {
          id: 'wsm-szescian-sumy',
          tex: '(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}',
          name: { pl: 'Sześcian sumy', en: 'Cube of a sum' },
          note: {
            pl: 'Cztery wyrazy, współczynniki $1,3,3,1$, potęgi $a$ maleją, a $b$ rosną. Wszystkie znaki dodatnie.',
            en: 'Four terms, coefficients $1,3,3,1$, powers of $a$ decreasing and of $b$ increasing. All signs positive.',
          },
          drill: true,
        },
        {
          id: 'wsm-szescian-roznicy',
          tex: '(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}',
          name: { pl: 'Sześcian różnicy', en: 'Cube of a difference' },
          note: {
            pl: 'Znaki na przemian, zaczynając od plusa. Wyraz ostatni jest ujemny, w odróżnieniu od kwadratu różnicy.',
            en: 'Alternating signs starting with a plus. The last term is negative, unlike in the square of a difference.',
          },
          drill: true,
        },
        {
          id: 'wsm-roznica-szescianow',
          tex: 'a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})',
          name: { pl: 'Różnica sześcianów', en: 'Difference of cubes' },
          note: {
            pl: 'Drugi czynnik to kwadrat niezupełny: wyraz $ab$ bez dwójki, znak przeciwny niż w nawiasie liniowym. Ma on ujemną deltę, więc jest stale dodatni dla $a,b$ nie równych zeru jednocześnie.',
            en: 'The second factor is an incomplete square: the term $ab$ without a factor of two, sign opposite to the linear bracket. Its discriminant is negative, so it is always positive unless $a$ and $b$ vanish together.',
          },
          drill: true,
        },
        {
          id: 'wsm-suma-szescianow',
          tex: 'a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})',
          name: { pl: 'Suma sześcianów', en: 'Sum of cubes' },
          note: {
            pl: 'W odróżnieniu od sumy kwadratów suma sześcianów rozkłada się zawsze. Typowy błąd to napisanie $(a+b)(a^{2}-2ab+b^{2})$, czyli pomylenie z kwadratem różnicy.',
            en: 'Unlike the sum of squares, the sum of cubes always factorises. The typical slip is writing $(a+b)(a^{2}-2ab+b^{2})$, confusing it with the square of a difference.',
          },
          drill: true,
        },
        {
          id: 'wsm-kwadrat-sumy-trzech',
          tex: '(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2ab+2ac+2bc',
          name: { pl: 'Kwadrat sumy trzech składników', en: 'Square of a sum of three terms' },
          note: {
            pl: 'Kwadraty wszystkich składników plus podwojone iloczyny wszystkich par. Przy $n$ składnikach par jest $\\binom{n}{2}$.',
            en: 'The squares of all terms plus twice the products of all pairs. With $n$ terms there are $\\binom{n}{2}$ pairs.',
          },
          drill: true,
        },
        {
          id: 'wsm-suma-kwadratow-symetryczna',
          tex: 'a^{2}+b^{2}=(a+b)^{2}-2ab',
          name: { pl: 'Suma kwadratów przez sumę i iloczyn', en: 'Sum of squares from sum and product' },
          note: {
            pl: 'Klucz do zadań, w których dane są tylko $a+b$ i $ab$ (np. wzory Viète’a). Nie trzeba wtedy znać samych liczb $a$ i $b$.',
            en: 'The key to problems giving only $a+b$ and $ab$ (e.g. from Vieta’s formulas). The numbers $a$ and $b$ themselves are never needed.',
          },
          drill: true,
        },
        {
          id: 'wsm-suma-szescianow-symetryczna',
          tex: 'a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)',
          name: { pl: 'Suma sześcianów przez sumę i iloczyn', en: 'Sum of cubes from sum and product' },
          note: {
            pl: 'Analogicznie $a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$. Wersja z $x+\\tfrac1x$ pojawia się na maturze rozszerzonej niemal co roku.',
            en: 'Analogously $a^{3}-b^{3}=(a-b)^{3}+3ab(a-b)$. The version with $x+\\tfrac1x$ appears on the extended matura almost every year.',
          },
          drill: true,
        },
        {
          id: 'wsm-roznica-czwartych',
          tex: 'a^{4}-b^{4}=(a-b)(a+b)(a^{2}+b^{2})',
          name: { pl: 'Różnica czwartych potęg', en: 'Difference of fourth powers' },
          note: {
            pl: 'Dwukrotne zastosowanie różnicy kwadratów. Czynnik $a^{2}+b^{2}$ jest już nierozkładalny nad $\\mathbb{R}$.',
            en: 'Two applications of the difference of squares. The factor $a^{2}+b^{2}$ is already irreducible over $\\mathbb{R}$.',
          },
          drill: true,
        },
        {
          id: 'wsm-roznica-n-tych-poteg',
          tex: 'a^{n}-b^{n}=(a-b)\\left(a^{n-1}+a^{n-2}b+\\dots+ab^{n-2}+b^{n-1}\\right)',
          name: { pl: 'Różnica $n$-tych potęg', en: 'Difference of $n$-th powers' },
          note: {
            pl: 'Uogólnienie obejmujące wszystkie poprzednie przypadki: dla każdego $n$ czynnik $a-b$ się wydziela. Analogiczny wzór dla sumy istnieje tylko dla $n$ nieparzystych.',
            en: 'The generalisation covering every earlier case: the factor $a-b$ splits off for every $n$. The analogous formula for a sum exists only for odd $n$.',
          },
          drill: false,
        },
        {
          id: 'wsm-tozsamosc-trzech-szescianow',
          tex: 'a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)',
          name: { pl: 'Tożsamość o trzech sześcianach', en: 'Three-cubes identity' },
          note: {
            pl: 'Wniosek natychmiastowy: jeśli $a+b+c=0$, to $a^{3}+b^{3}+c^{3}=3abc$. To najczęstsza postać, w jakiej ten wzór pojawia się w zadaniu.',
            en: 'Immediate corollary: if $a+b+c=0$ then $a^{3}+b^{3}+c^{3}=3abc$. That is the form in which the identity usually appears in a problem.',
          },
          drill: false,
        },
        {
          id: 'wsm-sophie-germain',
          tex: 'a^{4}+4b^{4}=\\left(a^{2}-2ab+2b^{2}\\right)\\left(a^{2}+2ab+2b^{2}\\right)',
          name: { pl: 'Tożsamość Sophie Germain', en: 'Sophie Germain identity' },
          note: {
            pl: 'Dowód przez uzupełnienie do kwadratu: $a^{4}+4b^{4}=(a^{2}+2b^{2})^{2}-(2ab)^{2}$. Kontrprzykład na przekonanie, że suma czwartych potęg jest nierozkładalna.',
            en: 'Proved by completing the square: $a^{4}+4b^{4}=(a^{2}+2b^{2})^{2}-(2ab)^{2}$. A counterexample to the belief that a sum of fourth powers is irreducible.',
          },
          drill: false,
        },
        {
          id: 'wsm-dwumian-newtona',
          tex: '(a+b)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^{k}',
          name: { pl: 'Wzór dwumianowy Newtona', en: 'Newton’s binomial theorem' },
          note: {
            pl: 'Uogólnienie kwadratu i sześcianu sumy. Współczynniki to kolejne wiersze trójkąta Pascala; wyraz ogólny to $\\binom{n}{k}a^{n-k}b^{k}$.',
            en: 'The generalisation of the square and the cube of a sum. The coefficients are the rows of Pascal’s triangle; the general term is $\\binom{n}{k}a^{n-k}b^{k}$.',
          },
          drill: true,
        },
      ],
      skills: [
        { id: 'sk-wsm-kwadraty', title: { pl: 'Kwadrat sumy i różnicy', en: 'Square of a sum and of a difference' }, levels: [1, 2] },
        { id: 'sk-wsm-roznica-kwadratow', title: { pl: 'Rozkład z różnicy kwadratów', en: 'Factorising by difference of squares' }, levels: [1, 2, 3] },
        { id: 'sk-wsm-szesciany-sumy-roznicy', title: { pl: 'Sześcian sumy i różnicy', en: 'Cube of a sum and of a difference' }, levels: [2, 3] },
        { id: 'sk-wsm-suma-roznica-szescianow', title: { pl: 'Suma i różnica sześcianów', en: 'Sum and difference of cubes' }, levels: [2, 3, 4] },
        { id: 'sk-wsm-wyrazenia-symetryczne', title: { pl: 'Wyrażenia symetryczne z sumy i iloczynu', en: 'Symmetric expressions from sum and product' }, levels: [3, 4] },
        { id: 'sk-wsm-usuwanie-niewymiernosci', title: { pl: 'Usuwanie niewymierności z mianownika', en: 'Rationalising a denominator' }, levels: [2, 3, 4] },
        { id: 'sk-wsm-rozklad-zaawansowany', title: { pl: 'Rozkład wyrażeń przez uzupełnianie do kwadratu', en: 'Factorising by completing the square' }, levels: [4, 5] },
      ],
      problems: [
        {
          id: 'wzory-skroconego-mnozenia-l1-01',
          skill: 'sk-wsm-kwadraty',
          level: 1,
          prompt: {
            pl: 'Doprowadź do najprostszej postaci wyrażenie $(2x-3y)^{2}$.',
            en: 'Simplify the expression $(2x-3y)^{2}$.',
          },
          answer: '4x^{2}-12xy+9y^{2}',
          accept: ['4x^2-12xy+9y^2', '9y^{2}-12xy+4x^{2}'],
          solution: [
            { pl: 'Stosujemy wzór na kwadrat różnicy z $a=2x$ oraz $b=3y$.', en: 'Apply the square of a difference with $a=2x$ and $b=3y$.' },
            { pl: '$a^{2}=(2x)^{2}=4x^{2}$, $b^{2}=(3y)^{2}=9y^{2}$, $2ab=2\\cdot 2x\\cdot 3y=12xy$.', en: '$a^{2}=(2x)^{2}=4x^{2}$, $b^{2}=(3y)^{2}=9y^{2}$, $2ab=2\\cdot 2x\\cdot 3y=12xy$.' },
            { pl: 'Zatem $(2x-3y)^{2}=4x^{2}-12xy+9y^{2}$.', en: 'Hence $(2x-3y)^{2}=4x^{2}-12xy+9y^{2}$.' },
          ],
          trap: {
            pl: 'Podniesienie do kwadratu wyłącznie liter i pominięcie współczynników: $(2x)^{2}$ to $4x^{2}$, nie $2x^{2}$. Drugi klasyk to ujemny wyraz $-9y^{2}$.',
            en: 'Squaring only the letters and dropping the coefficients: $(2x)^{2}$ is $4x^{2}$, not $2x^{2}$. The other classic is a negative last term $-9y^{2}$.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l2-01',
          skill: 'sk-wsm-kwadraty',
          level: 2,
          prompt: {
            pl: 'Oblicz wartość wyrażenia $\\left(\\sqrt{7}-\\sqrt{3}\\right)^{2}$ i zapisz ją w najprostszej postaci.',
            en: 'Evaluate $\\left(\\sqrt{7}-\\sqrt{3}\\right)^{2}$ and write the result in simplest form.',
          },
          answer: '10-2\\sqrt{21}',
          accept: ['10-2\\sqrt21', '-2\\sqrt{21}+10'],
          solution: [
            { pl: 'Kwadrat różnicy: $\\left(\\sqrt{7}\\right)^{2}-2\\sqrt{7}\\sqrt{3}+\\left(\\sqrt{3}\\right)^{2}$.', en: 'Square of a difference: $\\left(\\sqrt{7}\\right)^{2}-2\\sqrt{7}\\sqrt{3}+\\left(\\sqrt{3}\\right)^{2}$.' },
            { pl: 'Pierwiastek i kwadrat się znoszą: $7-2\\sqrt{21}+3$.', en: 'The root and the square cancel: $7-2\\sqrt{21}+3$.' },
            { pl: 'Po redukcji otrzymujemy $10-2\\sqrt{21}$.', en: 'Collecting terms gives $10-2\\sqrt{21}$.' },
          ],
          trap: {
            pl: 'Zapis $\\left(\\sqrt{7}-\\sqrt{3}\\right)^{2}=7-3=4$, czyli pominięcie wyrazu środkowego. Wynik $10-2\\sqrt{21}\\approx 0{,}83$ — kontrola rzędu wielkości od razu demaskuje błąd.',
            en: 'Writing $\\left(\\sqrt{7}-\\sqrt{3}\\right)^{2}=7-3=4$, i.e. dropping the middle term. The answer is $10-2\\sqrt{21}\\approx 0.83$ — an order-of-magnitude check exposes the error at once.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l2-02',
          skill: 'sk-wsm-suma-roznica-szescianow',
          level: 2,
          prompt: {
            pl: 'Rozłóż na czynniki wyrażenie $8a^{3}-27b^{3}$.',
            en: 'Factorise the expression $8a^{3}-27b^{3}$.',
          },
          answer: '(2a-3b)(4a^{2}+6ab+9b^{2})',
          accept: ['(2a-3b)(4a^2+6ab+9b^2)'],
          solution: [
            { pl: 'Rozpoznajemy różnicę sześcianów: $8a^{3}=(2a)^{3}$, $27b^{3}=(3b)^{3}$, więc $a\\to 2a$, $b\\to 3b$.', en: 'Recognise a difference of cubes: $8a^{3}=(2a)^{3}$, $27b^{3}=(3b)^{3}$, so $a\\to 2a$, $b\\to 3b$.' },
            { pl: 'Kwadrat niezupełny: $(2a)^{2}+(2a)(3b)+(3b)^{2}=4a^{2}+6ab+9b^{2}$.', en: 'The incomplete square: $(2a)^{2}+(2a)(3b)+(3b)^{2}=4a^{2}+6ab+9b^{2}$.' },
            { pl: 'Zatem $8a^{3}-27b^{3}=(2a-3b)(4a^{2}+6ab+9b^{2})$.', en: 'Hence $8a^{3}-27b^{3}=(2a-3b)(4a^{2}+6ab+9b^{2})$.' },
          ],
          trap: {
            pl: 'Napisanie drugiego czynnika jako $4a^{2}+12ab+9b^{2}$, czyli wstawienie kwadratu sumy zamiast kwadratu niezupełnego. W kwadracie niezupełnym środkowy wyraz nie ma dwójki.',
            en: 'Writing the second factor as $4a^{2}+12ab+9b^{2}$, i.e. inserting a full square instead of the incomplete one. In the incomplete square the middle term has no factor of two.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l2-03',
          skill: 'sk-wsm-szesciany-sumy-roznicy',
          level: 2,
          prompt: {
            pl: 'Doprowadź do postaci wielomianu wyrażenie $(2x-1)^{3}$.',
            en: 'Expand $(2x-1)^{3}$ into polynomial form.',
          },
          answer: '8x^{3}-12x^{2}+6x-1',
          accept: ['8x^3-12x^2+6x-1'],
          solution: [
            { pl: 'Sześcian różnicy z $a=2x$, $b=1$: $a^{3}-3a^{2}b+3ab^{2}-b^{3}$.', en: 'Cube of a difference with $a=2x$, $b=1$: $a^{3}-3a^{2}b+3ab^{2}-b^{3}$.' },
            { pl: '$a^{3}=8x^{3}$, $3a^{2}b=3\\cdot 4x^{2}=12x^{2}$, $3ab^{2}=3\\cdot 2x=6x$, $b^{3}=1$.', en: '$a^{3}=8x^{3}$, $3a^{2}b=3\\cdot 4x^{2}=12x^{2}$, $3ab^{2}=3\\cdot 2x=6x$, $b^{3}=1$.' },
            { pl: 'Zatem $(2x-1)^{3}=8x^{3}-12x^{2}+6x-1$.', en: 'Hence $(2x-1)^{3}=8x^{3}-12x^{2}+6x-1$.' },
          ],
          trap: {
            pl: 'Zapominanie, że współczynnik $2$ przy $x$ też podlega potęgowaniu w każdym wyrazie — częsty wynik $2x^{3}-3x^{2}+3x-1$ powstaje z podstawienia $a=x$.',
            en: 'Forgetting that the coefficient $2$ of $x$ is raised to a power in every term — the common wrong answer $2x^{3}-3x^{2}+3x-1$ comes from substituting $a=x$.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l3-01',
          skill: 'sk-wsm-wyrazenia-symetryczne',
          level: 3,
          prompt: {
            pl: 'Liczba rzeczywista $x$ spełnia warunek $x+\\dfrac{1}{x}=4$. Oblicz $x^{3}+\\dfrac{1}{x^{3}}$.',
            en: 'A real number $x$ satisfies $x+\\dfrac{1}{x}=4$. Compute $x^{3}+\\dfrac{1}{x^{3}}$.',
          },
          answer: '52',
          accept: [],
          solution: [
            { pl: 'Korzystamy z tożsamości $a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)$ dla $a=x$, $b=\\tfrac1x$.', en: 'Use the identity $a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)$ with $a=x$, $b=\\tfrac1x$.' },
            { pl: 'Tutaj $ab=x\\cdot\\tfrac1x=1$, więc $x^{3}+\\tfrac{1}{x^{3}}=\\left(x+\\tfrac1x\\right)^{3}-3\\left(x+\\tfrac1x\\right)$.', en: 'Here $ab=x\\cdot\\tfrac1x=1$, so $x^{3}+\\tfrac{1}{x^{3}}=\\left(x+\\tfrac1x\\right)^{3}-3\\left(x+\\tfrac1x\\right)$.' },
            { pl: 'Podstawiamy $4$: $4^{3}-3\\cdot 4=64-12=52$.', en: 'Substitute $4$: $4^{3}-3\\cdot 4=64-12=52$.' },
          ],
          trap: {
            pl: 'Próba wyznaczenia $x$ z równania $x^{2}-4x+1=0$ i potęgowanie liczby niewymiernej — droga poprawna, ale rachunkowo zabójcza. Drugi błąd to $x^{3}+\\tfrac{1}{x^{3}}=\\left(x+\\tfrac1x\\right)^{3}=64$, czyli pominięcie wyrazów mieszanych.',
            en: 'Trying to solve $x^{2}-4x+1=0$ and cube an irrational number — correct but computationally brutal. The other error is $x^{3}+\\tfrac{1}{x^{3}}=\\left(x+\\tfrac1x\\right)^{3}=64$, dropping the mixed terms.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l3-02',
          skill: 'sk-wsm-usuwanie-niewymiernosci',
          level: 3,
          prompt: {
            pl: 'Usuń niewymierność z mianownika wyrażenia $\\dfrac{1}{\\sqrt[3]{2}-1}$.',
            en: 'Rationalise the denominator of $\\dfrac{1}{\\sqrt[3]{2}-1}$.',
          },
          answer: '\\sqrt[3]{4}+\\sqrt[3]{2}+1',
          accept: ['1+\\sqrt[3]{2}+\\sqrt[3]{4}', '\\sqrt[3]{2^2}+\\sqrt[3]{2}+1'],
          solution: [
            { pl: 'Sprzężenie dla pierwiastka trzeciego stopnia bierzemy ze wzoru $a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$, gdzie $a=\\sqrt[3]{2}$, $b=1$.', en: 'The conjugate for a cube root comes from $a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})$ with $a=\\sqrt[3]{2}$, $b=1$.' },
            { pl: 'Mnożymy licznik i mianownik przez $\\sqrt[3]{4}+\\sqrt[3]{2}+1$.', en: 'Multiply numerator and denominator by $\\sqrt[3]{4}+\\sqrt[3]{2}+1$.' },
            { pl: 'Mianownik: $\\left(\\sqrt[3]{2}\\right)^{3}-1^{3}=2-1=1$.', en: 'The denominator becomes $\\left(\\sqrt[3]{2}\\right)^{3}-1^{3}=2-1=1$.' },
            { pl: 'Zatem wyrażenie równa się $\\sqrt[3]{4}+\\sqrt[3]{2}+1$.', en: 'Hence the expression equals $\\sqrt[3]{4}+\\sqrt[3]{2}+1$.' },
          ],
          trap: {
            pl: 'Mnożenie przez $\\sqrt[3]{2}+1$ jak przy pierwiastku kwadratowym — daje $\\sqrt[3]{4}-1$, więc niewymierność zostaje. Przy pierwiastku stopnia trzeciego sprzężeniem jest kwadrat niezupełny, nie dwumian.',
            en: 'Multiplying by $\\sqrt[3]{2}+1$ as for a square root — that gives $\\sqrt[3]{4}-1$, so the irrationality survives. For a cube root the conjugate is the incomplete square, not the binomial.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l3-03',
          skill: 'sk-wsm-suma-roznica-szescianow',
          level: 3,
          prompt: {
            pl: 'Rozłóż na czynniki możliwie najdalej (nad zbiorem liczb rzeczywistych) wyrażenie $x^{6}-64$.',
            en: 'Factorise $x^{6}-64$ as far as possible over the reals.',
          },
          answer: '(x-2)(x+2)(x^{2}+2x+4)(x^{2}-2x+4)',
          accept: ['(x-2)(x^{2}+2x+4)(x+2)(x^{2}-2x+4)', '(x+2)(x-2)(x^2-2x+4)(x^2+2x+4)'],
          solution: [
            { pl: 'Traktujemy wyrażenie jako różnicę kwadratów: $x^{6}-64=\\left(x^{3}\\right)^{2}-8^{2}=(x^{3}-8)(x^{3}+8)$.', en: 'Read it as a difference of squares: $x^{6}-64=\\left(x^{3}\\right)^{2}-8^{2}=(x^{3}-8)(x^{3}+8)$.' },
            { pl: 'Różnica sześcianów: $x^{3}-8=(x-2)(x^{2}+2x+4)$.', en: 'Difference of cubes: $x^{3}-8=(x-2)(x^{2}+2x+4)$.' },
            { pl: 'Suma sześcianów: $x^{3}+8=(x+2)(x^{2}-2x+4)$.', en: 'Sum of cubes: $x^{3}+8=(x+2)(x^{2}-2x+4)$.' },
            { pl: 'Oba trójmiany mają $\\Delta=4-16=-12<0$, więc dalszy rozkład nad $\\mathbb{R}$ jest niemożliwy.', en: 'Both trinomials have $\\Delta=4-16=-12<0$, so no further factorisation over $\\mathbb{R}$ is possible.' },
          ],
          trap: {
            pl: 'Zatrzymanie się na $(x^{3}-8)(x^{3}+8)$ i uznanie rozkładu za zakończony. Polecenie „możliwie najdalej” wymaga sprawdzenia delty każdego pozostałego trójmianu.',
            en: 'Stopping at $(x^{3}-8)(x^{3}+8)$ and declaring the job done. The phrase "as far as possible" demands checking the discriminant of every remaining trinomial.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l3-04',
          skill: 'sk-wsm-wyrazenia-symetryczne',
          level: 3,
          prompt: {
            pl: 'Liczby rzeczywiste $a,b,c$ spełniają warunki $a+b+c=6$ oraz $ab+bc+ca=11$. Oblicz $a^{2}+b^{2}+c^{2}$.',
            en: 'Real numbers $a,b,c$ satisfy $a+b+c=6$ and $ab+bc+ca=11$. Compute $a^{2}+b^{2}+c^{2}$.',
          },
          answer: '14',
          accept: [],
          solution: [
            { pl: 'Ze wzoru na kwadrat sumy trzech składników: $(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)$.', en: 'From the square of a sum of three terms: $(a+b+c)^{2}=a^{2}+b^{2}+c^{2}+2(ab+bc+ca)$.' },
            { pl: 'Stąd $a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)$.', en: 'Hence $a^{2}+b^{2}+c^{2}=(a+b+c)^{2}-2(ab+bc+ca)$.' },
            { pl: 'Podstawiamy: $6^{2}-2\\cdot 11=36-22=14$.', en: 'Substituting: $6^{2}-2\\cdot 11=36-22=14$.' },
          ],
          trap: {
            pl: 'Pominięcie dwójki przy iloczynach mieszanych i wynik $36-11=25$. We wzorze na kwadrat sumy trzech składników każda para wchodzi z podwojonym iloczynem.',
            en: 'Dropping the factor two on the mixed products and answering $36-11=25$. In the square of a sum of three terms every pair enters doubled.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l4-01',
          skill: 'sk-wsm-wyrazenia-symetryczne',
          level: 4,
          prompt: {
            pl: 'Liczby rzeczywiste $a,b,c$ spełniają warunki $a+b+c=0$ oraz $abc=5$. Oblicz $a^{3}+b^{3}+c^{3}$.',
            en: 'Real numbers $a,b,c$ satisfy $a+b+c=0$ and $abc=5$. Compute $a^{3}+b^{3}+c^{3}$.',
          },
          answer: '15',
          accept: [],
          solution: [
            { pl: 'Korzystamy z tożsamości $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$.', en: 'Use the identity $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$.' },
            { pl: 'Ponieważ $a+b+c=0$, prawa strona jest zerem niezależnie od drugiego nawiasu.', en: 'Since $a+b+c=0$, the right-hand side vanishes regardless of the second bracket.' },
            { pl: 'Zatem $a^{3}+b^{3}+c^{3}=3abc=3\\cdot 5=15$.', en: 'Hence $a^{3}+b^{3}+c^{3}=3abc=3\\cdot 5=15$.' },
          ],
          trap: {
            pl: 'Wniosek $a^{3}+b^{3}+c^{3}=(a+b+c)^{3}=0$. Sześcian sumy zawiera wyrazy mieszane, których tu nie ma — dopiero tożsamość o trzech sześcianach daje właściwe przejście.',
            en: 'Concluding $a^{3}+b^{3}+c^{3}=(a+b+c)^{3}=0$. The cube of a sum carries mixed terms that are absent here — only the three-cubes identity gives the right step.',
          },
        },
        {
          id: 'wzory-skroconego-mnozenia-l4-02',
          skill: 'sk-wsm-rozklad-zaawansowany',
          level: 4,
          prompt: {
            pl: 'Rozłóż na czynniki nad zbiorem liczb rzeczywistych wyrażenie $x^{4}+4$.',
            en: 'Factorise $x^{4}+4$ over the reals.',
          },
          answer: '(x^{2}-2x+2)(x^{2}+2x+2)',
          accept: ['(x^{2}+2x+2)(x^{2}-2x+2)', '(x^2-2x+2)(x^2+2x+2)'],
          solution: [
            { pl: 'Uzupełniamy do kwadratu: $x^{4}+4=x^{4}+4x^{2}+4-4x^{2}=\\left(x^{2}+2\\right)^{2}-(2x)^{2}$.', en: 'Complete the square: $x^{4}+4=x^{4}+4x^{2}+4-4x^{2}=\\left(x^{2}+2\\right)^{2}-(2x)^{2}$.' },
            { pl: 'Teraz to różnica kwadratów: $\\left(x^{2}+2-2x\\right)\\left(x^{2}+2+2x\\right)$.', en: 'Now it is a difference of squares: $\\left(x^{2}+2-2x\\right)\\left(x^{2}+2+2x\\right)$.' },
            { pl: 'Porządkując: $x^{4}+4=\\left(x^{2}-2x+2\\right)\\left(x^{2}+2x+2\\right)$; oba czynniki mają $\\Delta=4-8<0$, więc rozkład jest pełny.', en: 'Tidying up: $x^{4}+4=\\left(x^{2}-2x+2\\right)\\left(x^{2}+2x+2\\right)$; both factors have $\\Delta=4-8<0$, so the factorisation is complete.' },
            { pl: 'Sprawdzenie: iloczyn daje $x^{4}+2x^{3}+2x^{2}-2x^{3}-4x^{2}-4x+2x^{2}+4x+4=x^{4}+4$.', en: 'Check: the product gives $x^{4}+2x^{3}+2x^{2}-2x^{3}-4x^{2}-4x+2x^{2}+4x+4=x^{4}+4$.' },
          ],
          trap: {
            pl: 'Odpowiedź „nie rozkłada się, bo to suma potęg parzystych”. Suma kwadratów istotnie jest nierozkładalna, ale $x^{4}+4$ nie jest sumą kwadratów dwóch wielomianów w sposób nieusuwalny — sztuczka polega na dodaniu i odjęciu $4x^{2}$.',
            en: 'Answering "irreducible, because it is a sum of even powers". A sum of two squares is indeed irreducible, but $x^{4}+4$ is not irreducibly such — the trick is adding and subtracting $4x^{2}$.',
          },
        },
      ],
    },
  ],
};
