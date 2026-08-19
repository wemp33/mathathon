// Polish and English, switchable in Settings. Polish is the default because
// that is the exam this app is for; the English is there because the user asked
// for both, and because a formula sheet you cannot read in either language is
// no use in a hurry.

const PL = {
  'gate.sub': 'Twoja matematyka, śledzona uczciwie.',
  'gate.nick': 'Nazwa użytkownika',
  'gate.next': 'Dalej',
  'gate.back': 'Zmień nazwę',
  'gate.toRegister': 'Nie mam jeszcze konta',
  'gate.toLogin': 'Mam już konto',
  'gate.enterCode': 'Wpisz swój czterocyfrowy kod',
  'gate.setCode': 'Ustaw czterocyfrowy kod',
  'gate.hi': 'Cześć, {name}',
  'pad.back': 'Cofnij',

  'tab.train': 'Trening',
  'tab.quiz': 'Szybki test',
  'tab.formulas': 'Wzory',
  'tab.progress': 'Postęp',
  'tab.settings': 'Ustawienia',

  'train.title': 'Trening',
  'train.pick': 'Wybierz zakres',
  'train.all': 'Wszystko',
  'train.matura': 'Matura rozszerzona',
  'train.calculus': 'Analiza',
  'train.start': 'Daj mi zadanie',
  'train.another': 'Następne zadanie',
  'train.generate': 'Wygeneruj nowe (AI)',
  'train.level': 'Poziom {n}',
  'train.check': 'Sprawdź moje rozwiązanie',
  'train.checking': 'Czytam…',
  'train.live': 'Sprawdzanie na żywo',
  'train.snap': 'Figury',
  'train.snapOn': 'Przytrzymaj pióro, żeby wyprostować kształt.',
  'train.snapOff': 'Wyrównywanie kształtów wyłączone.',
  'train.snapped.line': 'Prosta',
  'train.snapped.circle': 'Okrąg',
  'train.snapped.ellipse': 'Elipsa',
  'train.snapped.rect': 'Prostokąt',
  'train.snapped.triangle': 'Trójkąt',
  'train.snapped.polygon': 'Wielokąt',
  'train.clear': 'Wyczyść',
  'train.undo': 'Cofnij',
  'train.pen': 'Pióro',
  'train.erase': 'Gumka',
  'train.typed': 'Wpisz odpowiedź',
  'train.answerPh': 'Sama odpowiedź, np. x^2/2 + C',
  'train.submit': 'Sprawdź odpowiedź',
  'train.hint': 'Podpowiedź',
  'train.solution': 'Pokaż rozwiązanie',
  'train.ask': 'Zapytaj',
  'train.noProblems': 'Brak zadań w tym zakresie. Program nauczania jeszcze się wgrywa albo trzeba go dodać.',
  'train.unreadable': 'Nie mogę tego odczytać',
  'train.firstError': 'Pierwszy błąd: linijka {n}',
  'train.allOk': 'Wszystkie linijki poprawne',
  'train.correct': 'Dobrze',
  'train.wrong': 'Źle',
  'train.partial': 'Częściowo',
  'train.inProgress': 'W trakcie',
  'train.confidence': 'pewność odczytu {n}%',

  'quiz.title': 'Szybki test',
  'quiz.sub': 'Wyrywkowe sprawdzanie wzorów. Odpowiadasz z głowy, potem oceniasz się sam.',
  'quiz.start': 'Zacznij',
  'quiz.due': '{n} do powtórki',
  'quiz.none': 'Nic dziś do powtórki. Możesz i tak poćwiczyć.',
  'quiz.anyway': 'Ćwicz mimo to',
  'quiz.show': 'Pokaż wzór',
  'quiz.again': 'Nie pamiętałem',
  'quiz.hard': 'Z trudem',
  'quiz.good': 'Pamiętam',
  'quiz.easy': 'Łatwe',
  'quiz.done': 'Koniec na dziś. {n} powtórzonych.',
  'quiz.explain': 'Wyjaśnij ten wzór',

  'formulas.title': 'Wzory',
  'formulas.search': 'Szukaj wzoru lub tematu',
  'formulas.empty': 'Nic nie pasuje.',
  'formulas.drill': 'W powtórkach',
  'formulas.explain': 'Wyjaśnij',
  'formulas.idea': 'O co chodzi',
  'formulas.derivation': 'Skąd się bierze',
  'formulas.when': 'Kiedy tego użyć',
  'formulas.trap': 'Pułapka',
  'formulas.example': 'Przykład',

  'progress.title': 'Postęp',
  'progress.sub': 'To nie jest procent poprawnych odpowiedzi. To szansa, że rozwiążesz zadanie na docelowym poziomie — dziś.',
  'progress.unsure': 'za mało danych',
  'progress.attempts': '{n} prób',
  'progress.never': 'nietknięte',
  'progress.weakest': 'Najsłabsze miejsca',
  'progress.stale': 'Dawno nietykane',
  'progress.nothing': 'Jeszcze nic tu nie ma. Rozwiąż kilka zadań.',

  'settings.title': 'Ustawienia',
  'settings.lang': 'Język',
  'settings.account': 'Konto',
  'settings.devices': 'Urządzenia',
  'settings.key': 'Klucz Anthropic',
  'settings.keyHelp': 'Wklej swój klucz API. Jest szyfrowany na serwerze i nigdy nie wraca do przeglądarki. Bez niego działa wszystko poza pomocą AI.',
  'settings.keyPh': 'sk-ant-…',
  'settings.keySave': 'Zapisz klucz',
  'settings.keyPresent': 'Klucz zapisany ({tail})',
  'settings.keyRemove': 'Usuń klucz',
  'settings.usage': 'Zużycie (30 dni)',
  'settings.changeCode': 'Zmień kod',
  'settings.logout': 'Wyloguj',
  'settings.sync': 'Synchronizacja',
  'settings.syncNow': 'Synchronizuj teraz',
  'settings.penOnly': 'Tylko Apple Pencil',
  'settings.penOnlyHelp': 'Ignoruj palec na płótnie. Włącz na iPadzie.',
  'settings.guides': 'Linie pomocnicze',
  'settings.guides.ruled': 'Linie',
  'settings.guides.grid': 'Kratka',
  'settings.guides.dots': 'Kropki',
  'settings.guides.none': 'Brak',

  'sync.ok': 'zsynchronizowano',
  'sync.busy': 'synchronizuję…',
  'sync.off': 'offline',
  'err.network': 'Brak połączenia.',
  'err.no_key': 'Najpierw dodaj klucz Anthropic w Ustawieniach.',
  'err.rate_limited': 'Limit API. Spróbuj za chwilę.',
  'err.key_rejected': 'Klucz odrzucony przez Anthropic.',
  'err.bad_credentials': 'Zły kod albo nazwa.',
  'err.nickname_taken': 'Ta nazwa jest zajęta.',
  'err.code_format': 'Kod to dokładnie cztery cyfry.',
  'err.generic': 'Coś poszło nie tak.',
};

const EN = {
  'gate.sub': 'Your mathematics, tracked honestly.',
  'gate.nick': 'Username',
  'gate.next': 'Continue',
  'gate.back': 'Change name',
  'gate.toRegister': "I don't have an account yet",
  'gate.toLogin': 'I already have an account',
  'gate.enterCode': 'Enter your four-digit code',
  'gate.setCode': 'Choose a four-digit code',
  'gate.hi': 'Hello, {name}',
  'pad.back': 'Delete',

  'tab.train': 'Practice',
  'tab.quiz': 'Recall',
  'tab.formulas': 'Formulas',
  'tab.progress': 'Progress',
  'tab.settings': 'Settings',

  'train.title': 'Practice',
  'train.pick': 'Choose a scope',
  'train.all': 'Everything',
  'train.matura': 'Extended matura',
  'train.calculus': 'Analysis',
  'train.start': 'Give me a problem',
  'train.another': 'Next problem',
  'train.generate': 'Generate a new one (AI)',
  'train.level': 'Level {n}',
  'train.check': 'Check my working',
  'train.checking': 'Reading…',
  'train.live': 'Live checking',
  'train.snap': 'Shapes',
  'train.snapOn': 'Hold the pen still to straighten a shape.',
  'train.snapOff': 'Shape snapping off.',
  'train.snapped.line': 'Line',
  'train.snapped.circle': 'Circle',
  'train.snapped.ellipse': 'Ellipse',
  'train.snapped.rect': 'Rectangle',
  'train.snapped.triangle': 'Triangle',
  'train.snapped.polygon': 'Polygon',
  'train.clear': 'Clear',
  'train.undo': 'Undo',
  'train.pen': 'Pen',
  'train.erase': 'Eraser',
  'train.typed': 'Type an answer',
  'train.answerPh': 'Just the answer, e.g. x^2/2 + C',
  'train.submit': 'Check answer',
  'train.hint': 'Hint',
  'train.solution': 'Show the solution',
  'train.ask': 'Ask',
  'train.noProblems': 'No problems in this scope yet. The curriculum is still loading, or needs adding.',
  'train.unreadable': 'I cannot read this',
  'train.firstError': 'First error: line {n}',
  'train.allOk': 'Every line checks out',
  'train.correct': 'Correct',
  'train.wrong': 'Wrong',
  'train.partial': 'Partly right',
  'train.inProgress': 'In progress',
  'train.confidence': '{n}% sure of the reading',

  'quiz.title': 'Recall',
  'quiz.sub': 'Spot checks on the formulas. Answer from memory, then mark yourself.',
  'quiz.start': 'Start',
  'quiz.due': '{n} due',
  'quiz.none': 'Nothing due today. You can drill anyway.',
  'quiz.anyway': 'Drill anyway',
  'quiz.show': 'Show the formula',
  'quiz.again': "Didn't know it",
  'quiz.hard': 'Struggled',
  'quiz.good': 'Knew it',
  'quiz.easy': 'Easy',
  'quiz.done': 'Done for today. {n} reviewed.',
  'quiz.explain': 'Explain this formula',

  'formulas.title': 'Formulas',
  'formulas.search': 'Search a formula or topic',
  'formulas.empty': 'Nothing matches.',
  'formulas.drill': 'In the deck',
  'formulas.explain': 'Explain',
  'formulas.idea': 'The idea',
  'formulas.derivation': 'Where it comes from',
  'formulas.when': 'When to use it',
  'formulas.trap': 'The trap',
  'formulas.example': 'Example',

  'progress.title': 'Progress',
  'progress.sub': 'This is not the percentage you got right. It is the chance you solve a problem at the target level — today.',
  'progress.unsure': 'not enough data',
  'progress.attempts': '{n} attempts',
  'progress.never': 'untouched',
  'progress.weakest': 'Weakest',
  'progress.stale': 'Going stale',
  'progress.nothing': 'Nothing here yet. Solve a few problems.',

  'settings.title': 'Settings',
  'settings.lang': 'Language',
  'settings.account': 'Account',
  'settings.devices': 'Devices',
  'settings.key': 'Anthropic key',
  'settings.keyHelp': 'Paste your API key. It is encrypted on the server and never returned to the browser. Everything except the AI help works without it.',
  'settings.keyPh': 'sk-ant-…',
  'settings.keySave': 'Save key',
  'settings.keyPresent': 'Key saved ({tail})',
  'settings.keyRemove': 'Remove key',
  'settings.usage': 'Usage (30 days)',
  'settings.changeCode': 'Change code',
  'settings.logout': 'Sign out',
  'settings.sync': 'Sync',
  'settings.syncNow': 'Sync now',
  'settings.penOnly': 'Apple Pencil only',
  'settings.penOnlyHelp': 'Ignore fingers on the canvas. Turn this on for the iPad.',
  'settings.guides': 'Guide lines',
  'settings.guides.ruled': 'Ruled',
  'settings.guides.grid': 'Grid',
  'settings.guides.dots': 'Dots',
  'settings.guides.none': 'None',

  'sync.ok': 'synced',
  'sync.busy': 'syncing…',
  'sync.off': 'offline',
  'err.network': 'No connection.',
  'err.no_key': 'Add your Anthropic key in Settings first.',
  'err.rate_limited': 'API rate limit. Try again shortly.',
  'err.key_rejected': 'Anthropic rejected that key.',
  'err.bad_credentials': 'Wrong name or code.',
  'err.nickname_taken': 'That name is taken.',
  'err.code_format': 'The code is exactly four digits.',
  'err.generic': 'Something went wrong.',
};

const TABLES = { pl: PL, en: EN };

let current = localStorage.getItem('mathathon.lang')
  || (navigator.language || '').toLowerCase().startsWith('pl') ? 'pl' : 'pl';
if (!TABLES[current]) current = 'pl';

export const lang = () => current;

export function setLang(next) {
  if (!TABLES[next]) return;
  current = next;
  localStorage.setItem('mathathon.lang', next);
  apply(document);
  window.dispatchEvent(new CustomEvent('langchange'));
}

/** t('train.level', {n: 3}) */
export function t(key, vars) {
  let s = TABLES[current][key] ?? TABLES.pl[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(String(v));
  return s;
}

/** Pick the right half of a {pl, en} pair, falling back rather than blanking. */
export const pick = (obj) => (obj == null ? '' : typeof obj === 'string' ? obj : (obj[current] || obj.pl || obj.en || ''));

/** Fill every [data-i18n] in a tree. */
export function apply(root = document) {
  for (const el of root.querySelectorAll('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const el of root.querySelectorAll('[data-i18n-ph]')) el.placeholder = t(el.dataset.i18nPh);
  document.documentElement.lang = current;
}

/** Server error codes → something a person can act on. */
export const errText = (code) => t(`err.${code}`) === `err.${code}` ? t('err.generic') : t(`err.${code}`);
