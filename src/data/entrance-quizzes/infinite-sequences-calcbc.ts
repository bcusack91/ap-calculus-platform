/**
 * Entrance Quiz — Infinite Sequences (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What is a Sequence
  { id: 'is-ent-1a', question: 'A sequence is:', options: ['A sum of terms', 'An ordered list of numbers', 'A function\'s derivative', 'A set of equations'], correctIndex: 1, explanation: 'A sequence is an ordered list $a_1, a_2, a_3, \\ldots$', partNumber: 1, partTitle: 'What is a Sequence' },
  { id: 'is-ent-1b', question: 'The sequence $a_n = \\frac{1}{n}$ for $n = 1, 2, 3, \\ldots$ begins:', options: ['$0, 1, 2, 3, \\ldots$', '$1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$', '$1, 2, 3, 4, \\ldots$', '$\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots$'], correctIndex: 1, explanation: '$a_1 = 1, a_2 = 1/2, a_3 = 1/3, \\ldots$', partNumber: 1, partTitle: 'What is a Sequence' },

  // Part 2: Convergence & Divergence of Sequences
  { id: 'is-ent-2a', question: 'A sequence converges if:', options: ['$\\lim_{n \\to \\infty} a_n$ exists and is finite', 'All terms are positive', 'The terms alternate', 'The partial sums converge'], correctIndex: 0, explanation: 'Convergence: the limit exists and is finite.', partNumber: 2, partTitle: 'Convergence & Divergence of Sequences' },
  { id: 'is-ent-2b', question: '$\\lim_{n \\to \\infty} \\frac{n}{n+1} =$', options: ['$0$', '$1$', '$\\infty$', 'Does not exist'], correctIndex: 1, explanation: 'Divide by $n$: $\\frac{1}{1+1/n} \\to 1$.', partNumber: 2, partTitle: 'Convergence & Divergence of Sequences' },

  // Part 3: Bounded & Monotonic Sequences
  { id: 'is-ent-3a', question: 'A sequence is bounded above if there exists $M$ such that:', options: ['$a_n > M$ for all $n$', '$a_n \\leq M$ for all $n$', '$a_n = M$', '$a_n \\to M$'], correctIndex: 1, explanation: 'Bounded above: all terms are $\\leq M$.', partNumber: 3, partTitle: 'Bounded & Monotonic Sequences' },
  { id: 'is-ent-3b', question: 'A monotonic increasing sequence that is bounded above:', options: ['Diverges', 'Converges', 'Oscillates', 'Is constant'], correctIndex: 1, explanation: 'Monotone Convergence Theorem: bounded + monotonic → convergent.', partNumber: 3, partTitle: 'Bounded & Monotonic Sequences' },

  // Part 4: Common Sequence Types
  { id: 'is-ent-4a', question: 'The geometric sequence $a_n = r^n$ converges when:', options: ['$|r| > 1$', '$|r| < 1$', '$r > 1$', '$r = 1$'], correctIndex: 1, explanation: '$r^n \\to 0$ when $|r| < 1$.', partNumber: 4, partTitle: 'Common Sequence Types' },
  { id: 'is-ent-4b', question: '$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n =$', options: ['$1$', '$\\infty$', '$e$', '$0$'], correctIndex: 2, explanation: 'This is the definition of $e \\approx 2.718$.', partNumber: 4, partTitle: 'Common Sequence Types' },

  // Part 5: Limit Laws for Sequences
  { id: 'is-ent-5a', question: 'If $\\lim a_n = L$ and $\\lim b_n = M$, then $\\lim(a_n + b_n) =$', options: ['$L \\cdot M$', '$L + M$', '$L - M$', '$L/M$'], correctIndex: 1, explanation: 'Limit of sum = sum of limits.', partNumber: 5, partTitle: 'Limit Laws for Sequences' },
  { id: 'is-ent-5b', question: '$\\lim_{n \\to \\infty} \\frac{\\sin n}{n} =$', options: ['$1$', '$0$', 'Does not exist', '$\\sin 1$'], correctIndex: 1, explanation: 'By squeeze theorem: $-1/n \\leq \\sin n/n \\leq 1/n \\to 0$.', partNumber: 5, partTitle: 'Limit Laws for Sequences' },

  // Part 6: Problem-Solving Workshop
  { id: 'is-ent-6a', question: '$\\lim_{n \\to \\infty} \\frac{2^n}{n!} =$', options: ['$\\infty$', '$1$', '$0$', '$2$'], correctIndex: 2, explanation: 'Factorials grow faster than exponentials.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'is-ent-6b', question: 'If $a_n = (-1)^n$, the sequence:', options: ['Converges to $0$', 'Converges to $1$', 'Diverges (oscillates)', 'Converges to $-1$'], correctIndex: 2, explanation: '$a_n$ alternates between $1$ and $-1$: no limit.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'is-ent-7a', question: 'The difference between a sequence and a series is:', options: ['There is no difference', 'A sequence is a list; a series is a sum', 'A series is a list; a sequence is a sum', 'A sequence is always convergent'], correctIndex: 1, explanation: 'Sequence: list of terms. Series: sum of terms.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'is-ent-7b', question: 'On the AP BC exam, sequence convergence is often tested using:', options: ['Only substitution', 'Squeeze theorem and limit comparison', 'Graphing', 'Factoring'], correctIndex: 1, explanation: 'Squeeze theorem and comparison are key tools for sequences.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is a Sequence' },
    { partNumber: 2, partTitle: 'Convergence & Divergence of Sequences' },
    { partNumber: 3, partTitle: 'Bounded & Monotonic Sequences' },
    { partNumber: 4, partTitle: 'Common Sequence Types' },
    { partNumber: 5, partTitle: 'Limit Laws for Sequences' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
