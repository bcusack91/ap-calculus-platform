/**
 * Entrance Quiz — What Is a Limit? — 8 questions (2 per lesson part)
 *
 * Scope is INTENTIONALLY narrow: only the conceptual idea of a limit.
 * No factoring, no rationalizing, no continuity 3-step test, no
 * graph-reading drills, no AP synthesis — those belong to other topics
 * in Unit 1.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Intuitive Idea of a Limit
  {
    id: 'wal-ent-1a',
    question: 'Which informal sentence best captures $\\lim_{x\\to a} f(x) = L$?',
    options: [
      '$f(a) = L$',
      'As $x$ gets arbitrarily close to $a$, $f(x)$ gets arbitrarily close to $L$',
      '$f(x)$ equals $L$ at every point',
      'There is some $x$ near $a$ with $f(x) = L$',
    ],
    correctIndex: 1,
    explanation: 'A limit describes the value $f$ is approaching as $x$ approaches $a$ — it is not the value at $a$.',
    partNumber: 1,
    partTitle: 'The Intuitive Idea of a Limit',
  },
  {
    id: 'wal-ent-1b',
    question: 'In $\\lim_{x \\to 3} f(x)$, the symbol "$x \\to 3$" means:',
    options: [
      '$x$ equals 3',
      '$x$ is getting arbitrarily close to 3, but $x \\ne 3$',
      '$x$ is exactly 3.0001',
      '$x$ is moving away from 3',
    ],
    correctIndex: 1,
    explanation: 'The arrow means "approaches" — $x$ is allowed to be as close as you want to 3, but never equal to 3. The limit deliberately ignores the value at $x = 3$ itself.',
    partNumber: 1,
    partTitle: 'The Intuitive Idea of a Limit',
  },

  // Part 2 — Limit Notation
  {
    id: 'wal-ent-2a',
    question: 'How do you read $\\lim_{x \\to 2^-} f(x) = 5$ in English?',
    options: [
      'The limit of $f$ as $x$ equals 2 minus 1 is 5',
      'As $x$ approaches 2 from the left, $f(x)$ approaches 5',
      'As $x$ approaches 2 from the right, $f(x)$ approaches 5',
      '$f(2) - 1 = 5$',
    ],
    correctIndex: 1,
    explanation: 'A "$-$" superscript on the target means "approach from the left" (from values less than the target).',
    partNumber: 2,
    partTitle: 'Limit Notation',
  },
  {
    id: 'wal-ent-2b',
    question: 'Which symbol expresses "as $x$ runs to positive infinity, $g(x)$ approaches 0"?',
    options: [
      '$\\lim_{x \\to 0} g(x) = \\infty$',
      '$\\lim_{x \\to \\infty} g(x) = 0$',
      '$\\lim_{x \\to -\\infty} g(x) = 0$',
      '$g(\\infty) = 0$',
    ],
    correctIndex: 1,
    explanation: 'The arrow always points to where $x$ is going. Here $x$ goes to $+\\infty$, and the function approaches 0.',
    partNumber: 2,
    partTitle: 'Limit Notation',
  },

  // Part 3 — When Does a Limit Exist?
  {
    id: 'wal-ent-3a',
    question: '$\\lim_{x \\to a} f(x)$ exists if and only if:',
    options: [
      '$f(a)$ is defined',
      'Both one-sided limits exist and are equal',
      '$f$ is differentiable at $a$',
      '$f$ is bounded near $a$',
    ],
    correctIndex: 1,
    explanation: 'The Existence Theorem: the two-sided limit exists ⟺ both one-sided limits exist and are equal. Nothing about $f(a)$ enters the definition.',
    partNumber: 3,
    partTitle: 'When Does a Limit Exist?',
  },
  {
    id: 'wal-ent-3b',
    question: 'Suppose $\\lim_{x \\to 4^-} f(x) = 7$ and $\\lim_{x \\to 4^+} f(x) = 7$, but $f(4) = 100$. What is $\\lim_{x \\to 4} f(x)$?',
    options: ['$7$', '$100$', 'Does not exist', 'Cannot be determined'],
    correctIndex: 0,
    explanation: 'Both one-sided limits agree at 7, so the two-sided limit equals 7. The value $f(4) = 100$ is irrelevant to the limit — it only tells us $f$ is discontinuous at 4.',
    partNumber: 3,
    partTitle: 'When Does a Limit Exist?',
  },

  // Part 4 — Limits That Do Not Exist
  {
    id: 'wal-ent-4a',
    question: 'Suppose $\\lim_{x \\to 0^-} g(x) = -1$ and $\\lim_{x \\to 0^+} g(x) = +1$. What is $\\lim_{x \\to 0} g(x)$?',
    options: ['$-1$', '$+1$', '$0$ (the average)', 'Does not exist'],
    correctIndex: 3,
    explanation: 'The two one-sided limits disagree, so the two-sided limit DNE. This is a jump discontinuity.',
    partNumber: 4,
    partTitle: 'Limits That Do Not Exist',
  },
  {
    id: 'wal-ent-4b',
    question: 'Why does $\\lim_{x\\to 0} \\sin(1/x)$ fail to exist?',
    options: [
      'The function jumps from one finite value to another',
      'The function blows up to $\\pm\\infty$',
      'The function oscillates infinitely fast between $-1$ and $+1$ and never settles',
      'The function equals 0 everywhere near 0',
    ],
    correctIndex: 2,
    explanation: 'As $x \\to 0$, the input $1/x$ races to infinity, and $\\sin$ keeps cycling between $-1$ and $+1$ — there is no destination value.',
    partNumber: 4,
    partTitle: 'Limits That Do Not Exist',
  },
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
  ]
}
