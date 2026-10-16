/**
 * Entrance Quiz — Infinite Sequences — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Definition & Convergence
  {
    id: 'seq-ent-1a',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{2n^2 - 5}{7 + 3n - 4n^2}$?',
    options: ['$-\\frac{1}{2}$', '$\\frac{1}{2}$', '$0$', '$\\infty$'],
    correctIndex: 0,
    explanation: 'Divide every term by $n^2$: $\\frac{2 - 5/n^2}{7/n^2 + 3/n - 4} \\to \\frac{2}{-4} = -\\frac{1}{2}$. The leading coefficient of the denominator is $-4$, so the sign is negative.',
    partNumber: 1,
    partTitle: 'Definition & Convergence',
  },
  {
    id: 'seq-ent-1b',
    question: 'Exactly one of these sequences fails to converge. Which one?',
    options: [
      '$a_n = \\frac{\\cos n}{\\sqrt{n}}$',
      '$a_n = (1+\\frac{2}{n})^n$',
      '$a_n = (-1)^n\\frac{n}{n+1}$',
      '$a_n = \\frac{n}{2^n}$',
    ],
    correctIndex: 2,
    explanation: 'The terms $(-1)^n\\frac{n}{n+1}$ get close to $1$ for even $n$ and to $-1$ for odd $n$, so they approach no single number. The others converge: to $0$ by squeezing, to $e^2$, and to $0$ because exponentials outgrow powers.',
    partNumber: 1,
    partTitle: 'Definition & Convergence',
  },

  // Part 2 — Decreasing Terms & Limits
  {
    id: 'seq-ent-2a',
    question: 'What is $\\lim_{n \\to \\infty} n\\ln\\left(1 + \\frac{2}{n}\\right)$?',
    options: ['$\\ln 2$', '$2$', '$e^2$', '$\\infty$'],
    correctIndex: 1,
    explanation: 'Write it as $\\frac{\\ln(1 + 2/x)}{1/x}$, a $\\frac{0}{0}$ form; L\'Hospital\'s Rule gives $\\frac{2}{1 + 2/x} \\to 2$. The value $e^2$ is the limit of $\\left(1 + \\frac{2}{n}\\right)^n$, whose logarithm is this sequence.',
    partNumber: 2,
    partTitle: 'Decreasing Terms & Limits',
  },
  {
    id: 'seq-ent-2b',
    question: 'For which $n$ are the terms $b_n = \\frac{n}{n^2 + 9}$ decreasing, and why?',
    options: [
      'For all $n \\ge 1$, since $b_n > 0$ and $b_n \\to 0$ as $n \\to \\infty$',
      'For $n \\ge 1$, since $\\frac{d}{dx}\\left[\\frac{x}{x^2+9}\\right] < 0$ for $x > 0$',
      'For $n \\le 3$, since $\\frac{d}{dx}\\left[\\frac{x}{x^2+9}\\right] < 0$ for $x < 3$',
      'For $n \\ge 3$, since $\\frac{d}{dx}\\left[\\frac{x}{x^2+9}\\right] < 0$ for $x > 3$',
    ],
    correctIndex: 3,
    explanation: 'The quotient rule gives $f\'(x) = \\frac{9 - x^2}{(x^2 + 9)^2}$, which is negative for $x > 3$, so the terms decrease from $n = 3$ on (indeed $b_1 < b_2 < b_3$). The derivative is positive on $(0, 3)$, so the terms rise before they fall, and a limit of $0$ does not make every term smaller than the one before it.',
    partNumber: 2,
    partTitle: 'Decreasing Terms & Limits',
  },

  // Part 3 — Special Limits & Growth Rates
  {
    id: 'seq-ent-3a',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{n! + 4^n}{2 \\cdot n! - n^5}$?',
    options: ['$\\frac{1}{2}$', '$2$', '$0$', '$\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: 'Divide every term by $n!$: since $\\frac{4^n}{n!} \\to 0$ and $\\frac{n^5}{n!} \\to 0$, the limit is $\\frac{1}{2}$. Factorials outgrow both exponentials and powers.',
    partNumber: 3,
    partTitle: 'Special Limits & Growth Rates',
  },
  {
    id: 'seq-ent-3b',
    question: 'Which list is in order from slowest to fastest growth as $n \\to \\infty$?',
    options: [
      '$n^3, n!, 2^n, n^n$',
      '$n^3, 2^n, n!, n^n$',
      '$2^n, n^3, n!, n^n$',
      '$n^3, 2^n, n^n, n!$',
    ],
    correctIndex: 1,
    explanation: 'The hierarchy is powers $\\ll$ exponentials $\\ll$ factorials $\\ll n^n$, so $n^3 \\ll 2^n \\ll n! \\ll n^n$. Each other list swaps one adjacent pair.',
    partNumber: 3,
    partTitle: 'Special Limits & Growth Rates',
  },

  // Part 4 — The Bridge to Series
  {
    id: 'seq-ent-4a',
    question: 'The partial sums of a series $\\sum a_n$ are $S_N = 3 - \\frac{2}{N}$. What are the sum of the series and the term $a_2$?',
    options: [
      'Sum $3$ and $a_2 = 2$',
      'Sum $1$ and $a_2 = 1$',
      'Sum $3$ and $a_2 = 1$',
      'Sum $0$ and $a_2 = 1$',
    ],
    correctIndex: 2,
    explanation: 'The sum is $\\lim S_N = 3$, and $a_2 = S_2 - S_1 = 2 - 1 = 1$. The partial sum $S_2 = 2$ is not the second term, $1$ is only $S_1$, and $0$ is the limit of the terms, not of the sums.',
    partNumber: 4,
    partTitle: 'The Bridge to Series',
  },
  {
    id: 'seq-ent-4b',
    question: 'What is $\\sum_{n=2}^{\\infty} 3\\left(-\\frac{1}{2}\\right)^n$?',
    options: ['$2$', '$-1$', '$6$', '$\\frac{1}{2}$'],
    correctIndex: 3,
    explanation: 'The first term (at $n = 2$) is $3 \\cdot \\frac{1}{4} = \\frac{3}{4}$ and the ratio is $-\\frac{1}{2}$, so the sum is $\\frac{3/4}{1 + 1/2} = \\frac{1}{2}$. Starting at $n = 0$ gives $2$, starting at $n = 1$ gives $-1$, and ignoring the negative ratio gives $6$.',
    partNumber: 4,
    partTitle: 'The Bridge to Series',
  },

  // Part 5 — Special Series Types
  {
    id: 'seq-ent-5a',
    question: 'What is $\\sum_{n=2}^{\\infty} \\frac{2}{n^2 - 1}$?',
    options: ['$\\frac{3}{2}$', '$1$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
    correctIndex: 0,
    explanation: 'Partial fractions give $\\frac{2}{n^2 - 1} = \\frac{1}{n-1} - \\frac{1}{n+1}$, and in the partial sums everything cancels except $1 + \\frac{1}{2}$, so the sum is $\\frac{3}{2}$. Forgetting the factor $2$ gives $\\frac{3}{4}$, and keeping only the first surviving term gives $1$.',
    partNumber: 5,
    partTitle: 'Special Series Types',
  },
  {
    id: 'seq-ent-5b',
    question: 'For which values of $p$ does $\\sum_{n=1}^{\\infty} \\frac{1}{n^{2p - 1}}$ converge?',
    options: ['$p > \\frac{1}{2}$', '$p \\ge 1$', '$p > 1$', '$p > \\frac{3}{2}$'],
    correctIndex: 2,
    explanation: 'This is a $p$-series with exponent $2p - 1$, which converges exactly when $2p - 1 > 1$, that is $p > 1$. At $p = 1$ it is the harmonic series, which diverges, and $p > \\frac{1}{2}$ only makes the exponent positive.',
    partNumber: 5,
    partTitle: 'Special Series Types',
  },

  // Part 6 — Practice Workshop
  {
    id: 'seq-ent-6a',
    question: 'What is $\\sum_{n=1}^{\\infty} \\frac{2^n + 1}{3^n}$?',
    options: ['$\\frac{9}{2}$', '$\\frac{5}{2}$', '$3$', 'Diverges'],
    correctIndex: 1,
    explanation: 'Split into two geometric series starting at $n = 1$: $\\sum \\left(\\frac{2}{3}\\right)^n = 2$ and $\\sum \\left(\\frac{1}{3}\\right)^n = \\frac{1}{2}$, for a total of $\\frac{5}{2}$. Starting both at $n = 0$ gives $\\frac{9}{2}$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'seq-ent-6b',
    question: 'What can be concluded about $\\sum_{n=1}^{\\infty} \\frac{n}{3n + 1}$?',
    options: [
      'Converges, since $a_n < \\frac{1}{3}$ for all $n$',
      'Converges to $\\frac{1}{3}$, the limit of $a_n$',
      'Diverges, since it is a $p$-series with $p = 1$',
      'Diverges, since $a_n \\to \\frac{1}{3}$',
    ],
    correctIndex: 3,
    explanation: 'The terms approach $\\frac{1}{3} \\ne 0$, so the series diverges by the $n$th term test. Bounded terms do not make a series converge, the limit of the terms is not the sum, and the series is not a $p$-series.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'seq-ent-7a',
    question: 'What is $\\lim_{n \\to \\infty} \\left(1 - \\frac{2}{n}\\right)^{3n}$?',
    options: ['$e^{-6}$', '$e^{-2}$', '$e^6$', '$1$'],
    correctIndex: 0,
    explanation: 'Since $\\left(1 - \\frac{2}{n}\\right)^n \\to e^{-2}$, cubing gives $e^{-6}$. The value $1$ comes from letting the base go to $1$ while ignoring the growing exponent.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'seq-ent-7b',
    question: 'Which statement about a sequence $\\{a_n\\}$ and its series $\\sum a_n$ is always true?',
    options: [
      'If $a_n \\to 0$, then $\\sum a_n$ converges',
      'If $\\{a_n\\}$ converges, then $\\sum a_n$ converges',
      'If $\\sum a_n$ converges, then $a_n \\to 0$',
      'If $a_n$ decreases, then $\\sum a_n$ converges',
    ],
    correctIndex: 2,
    explanation: 'A convergent series must have terms approaching $0$; this is the $n$th term test read forward. The converse fails ($\\sum \\frac{1}{n}$ diverges), a convergent sequence such as $a_n = 1$ can give a divergent series, and decreasing terms are not enough.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition & Convergence' },
    { partNumber: 2, partTitle: 'Decreasing Terms & Limits' },
    { partNumber: 3, partTitle: 'Special Limits & Growth Rates' },
    { partNumber: 4, partTitle: 'The Bridge to Series' },
    { partNumber: 5, partTitle: 'Special Series Types' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
