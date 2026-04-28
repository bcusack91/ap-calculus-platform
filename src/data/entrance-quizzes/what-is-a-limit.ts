/** Entrance Quiz — What Is a Limit? — 14 questions (2 per part) */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Intuitive idea
  { id: 'wal-ent-1a', question: 'Which informal sentence best captures $\\lim_{x\\to a} f(x) = L$?', options: ['$f(a) = L$', 'As $x$ gets arbitrarily close to $a$, $f(x)$ gets arbitrarily close to $L$', '$f(x)$ equals $L$ at every point', 'There is some $x$ near $a$ with $f(x) = L$'], correctIndex: 1, explanation: 'A limit describes the value $f$ is approaching as $x$ approaches $a$ — never the value at $a$.', partNumber: 1, partTitle: 'The Intuitive Idea of a Limit' },
  { id: 'wal-ent-1b', question: 'For $f(x) = (x^2-9)/(x-3)$, what is $\\lim_{x\\to 3} f(x)$?', options: ['Undefined (since $f(3)$ is $0/0$)', '0', '6', '$\\infty$'], correctIndex: 2, explanation: 'Factor $(x-3)(x+3)/(x-3) = x+3$ for $x \\ne 3$. Limit as $x \\to 3$ is $6$, even though $f(3)$ is $0/0$.', partNumber: 1, partTitle: 'The Intuitive Idea of a Limit' },

  // Part 2 — Notation
  { id: 'wal-ent-2a', question: 'How do you read $\\lim_{x \\to 2^-} f(x) = 5$ in English?', options: ['The limit of $f$ as $x$ equals 2 minus 1 is 5', 'As $x$ approaches 2 from the left, $f(x)$ approaches 5', 'As $x$ approaches 2 from the right, $f(x)$ approaches 5', '$f(2) - 1 = 5$'], correctIndex: 1, explanation: 'A "$-$" superscript means "from the left."', partNumber: 2, partTitle: 'Limit Notation' },
  { id: 'wal-ent-2b', question: 'Which describes "$f$ approaches 0 as $x$ runs to positive infinity"?', options: ['$\\lim_{x \\to 0} f(x) = \\infty$', '$\\lim_{x \\to \\infty} f(x) = 0$', '$\\lim_{x \\to -\\infty} f(x) = 0$', '$f(\\infty) = 0$'], correctIndex: 1, explanation: 'The arrow points to the value $x$ approaches; here that\'s positive infinity, and the function approaches 0.', partNumber: 2, partTitle: 'Limit Notation' },

  // Part 3 — Existence
  { id: 'wal-ent-3a', question: '$\\lim_{x \\to a} f(x)$ exists if and only if:', options: ['$f(a)$ is defined', 'Both one-sided limits exist and are equal', '$f$ is differentiable at $a$', '$f$ is bounded on an interval around $a$'], correctIndex: 1, explanation: 'The Existence Theorem: two-sided limit ⟺ both one-sided limits exist and are equal.', partNumber: 3, partTitle: 'When Does a Limit Exist?' },
  { id: 'wal-ent-3b', question: 'Let $f(x) = x^2+1$ for $x < 1$ and $f(x) = 3x - 1$ for $x \\ge 1$. Does $\\lim_{x\\to 1} f(x)$ exist?', options: ['No, because $f$ is piecewise', 'No, because the two pieces give different values', 'Yes, both sides give 2', 'Yes, both sides give 0'], correctIndex: 2, explanation: 'Left: $1^2 + 1 = 2$. Right: $3(1) - 1 = 2$. Equal — limit exists and equals 2.', partNumber: 3, partTitle: 'When Does a Limit Exist?' },

  // Part 4 — DNE failure modes
  { id: 'wal-ent-4a', question: 'For $f(x) = |x|/x$, why does $\\lim_{x \\to 0} f(x)$ fail to exist?', options: ['Function blows up', 'Function oscillates', 'Left limit $-1 \\ne$ right limit $+1$ (jump)', 'Function is undefined for $x > 0$'], correctIndex: 2, explanation: 'For $x < 0$ the ratio is $-1$; for $x > 0$ it is $+1$. Two finite but unequal one-sided limits = jump.', partNumber: 4, partTitle: 'Limits That Do Not Exist' },
  { id: 'wal-ent-4b', question: 'Why does $\\lim_{x\\to 0} \\sin(1/x)$ fail to exist?', options: ['Jump', 'Unbounded blow-up', 'Oscillates infinitely fast between $-1$ and $+1$', 'Function equals 0 everywhere'], correctIndex: 2, explanation: 'As $x \\to 0$, $1/x \\to \\infty$, and $\\sin$ keeps cycling — no destination value.', partNumber: 4, partTitle: 'Limits That Do Not Exist' },

  // Part 5 — Reading from a graph
  { id: 'wal-ent-5a', question: 'On a graph, an OPEN circle at $(2, 5)$ tells you:', options: ['$f(2) = 5$', 'The curve approaches $y=5$ but $f(2) \\ne 5$', 'There\'s a vertical asymptote at $x=2$', 'Limit DNE'], correctIndex: 1, explanation: 'Open circle marks a value the curve approaches but doesn\'t take on.', partNumber: 5, partTitle: 'Reading Limits From a Graph' },
  { id: 'wal-ent-5b', question: 'A graph approaches $y=4$ from both sides at $x=3$, with a SOLID dot at $(3, 9)$. What is $\\lim_{x \\to 3} f(x)$?', options: ['4', '9', 'DNE', 'Cannot tell'], correctIndex: 0, explanation: 'Both one-sided limits agree at 4 (ignoring the dot). Value $f(3) = 9$ is irrelevant to the limit.', partNumber: 5, partTitle: 'Reading Limits From a Graph' },

  // Part 6 — Workshop
  { id: 'wal-ent-6a', question: 'For $f(x) = (x^3-8)/(x-2)$, what is $\\lim_{x\\to 2} f(x)$?', options: ['0', '4', '12', 'DNE'], correctIndex: 2, explanation: 'Factor: $x^3 - 8 = (x-2)(x^2+2x+4)$, so the ratio simplifies to $x^2+2x+4$. At $x=2$: $4+4+4 = 12$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'wal-ent-6b', question: 'A piecewise function has $\\lim_{x\\to 0^-} f = 1$, $\\lim_{x\\to 0^+} f = 1$, $f(0) = 5$. Is $f$ continuous at 0?', options: ['Yes', 'No — limit and value disagree (removable discontinuity)', 'No — limit DNE', 'No — function blows up'], correctIndex: 1, explanation: 'Limit exists (=1) but $f(0)=5 \\ne 1$, so the function fails the third continuity check. Removable discontinuity.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7 — Synthesis & AP review
  { id: 'wal-ent-7a', question: 'Which AP-relevant concept is NOT defined as a limit?', options: ['Derivative $f\'(a)$', 'Definite integral', 'A polynomial of degree $n$', 'A horizontal asymptote'], correctIndex: 2, explanation: 'A polynomial is just an algebraic expression. Derivatives, integrals, and asymptotes are all defined via limits.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'wal-ent-7b', question: 'Continuity of $f$ at $a$ requires which three conditions?', options: ['$f(a)$ defined; $\\lim_{x\\to a} f(x)$ exists; the two are equal', '$f$ defined; $f$ differentiable; $f$ bounded', '$\\lim_{x\\to a^-} f(x)$ exists; $\\lim_{x\\to a^+} f(x)$ exists; $f(a)$ exists', '$f(a) > 0$; $f$ increasing; $f$ smooth'], correctIndex: 0, explanation: 'The three-step continuity test: (i) value defined, (ii) limit exists, (iii) value equals limit.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Intuitive Idea of a Limit' },
    { partNumber: 2, partTitle: 'Limit Notation' },
    { partNumber: 3, partTitle: 'When Does a Limit Exist?' },
    { partNumber: 4, partTitle: 'Limits That Do Not Exist' },
    { partNumber: 5, partTitle: 'Reading Limits From a Graph' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
