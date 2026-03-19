/**
 * Entrance Quiz — Infinite Series (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Definition of a Series
  { id: 'ifs-ent-1a', question: 'An infinite series $\\sum_{n=1}^{\\infty} a_n$ is:', options: ['A sequence of terms', 'The sum of an infinite sequence', 'A finite sum', 'A product of terms'], correctIndex: 1, explanation: 'A series is the sum $a_1 + a_2 + a_3 + \\cdots$', partNumber: 1, partTitle: 'Definition of a Series' },
  { id: 'ifs-ent-1b', question: 'The partial sum $S_N =$', options: ['$a_N$', '$\\sum_{n=1}^{N} a_n$', '$a_1 \\cdot a_N$', '$\\frac{a_1 + a_N}{2}$'], correctIndex: 1, explanation: '$S_N = a_1 + a_2 + \\cdots + a_N$.', partNumber: 1, partTitle: 'Definition of a Series' },

  // Part 2: Geometric Series
  { id: 'ifs-ent-2a', question: 'A geometric series $\\sum_{n=0}^{\\infty} ar^n$ converges when:', options: ['$|r| > 1$', '$|r| < 1$', '$a > 0$', '$r > 0$'], correctIndex: 1, explanation: 'Geometric series converges iff $|r| < 1$.', partNumber: 2, partTitle: 'Geometric Series' },
  { id: 'ifs-ent-2b', question: 'When $|r| < 1$, the sum of $\\sum_{n=0}^{\\infty} ar^n =$', options: ['$\\frac{a}{1+r}$', '$\\frac{a}{1-r}$', '$\\frac{1}{1-r}$', '$ar$'], correctIndex: 1, explanation: 'Sum $= \\frac{a}{1-r}$.', partNumber: 2, partTitle: 'Geometric Series' },

  // Part 3: Telescoping Series
  { id: 'ifs-ent-3a', question: 'A telescoping series is one where:', options: ['All terms are equal', 'Consecutive terms cancel', 'The ratio is constant', 'Terms grow exponentially'], correctIndex: 1, explanation: 'In telescoping, most terms cancel in the partial sum.', partNumber: 3, partTitle: 'Telescoping Series' },
  { id: 'ifs-ent-3b', question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) =$', options: ['$0$', '$1$', '$\\infty$', '$\\frac{1}{2}$'], correctIndex: 1, explanation: 'Telescoping: $S_N = 1 - \\frac{1}{N+1} \\to 1$.', partNumber: 3, partTitle: 'Telescoping Series' },

  // Part 4: nth-Term Test for Divergence
  { id: 'ifs-ent-4a', question: 'The nth-Term Test states: if $\\lim_{n \\to \\infty} a_n \\neq 0$, then:', options: ['The series converges', 'The series diverges', 'Nothing can be concluded', 'The series is geometric'], correctIndex: 1, explanation: 'If terms don\'t approach zero, the series diverges.', partNumber: 4, partTitle: 'nth-Term Test for Divergence' },
  { id: 'ifs-ent-4b', question: 'If $\\lim_{n \\to \\infty} a_n = 0$, the series:', options: ['Must converge', 'Must diverge', 'May converge or diverge', 'Equals zero'], correctIndex: 2, explanation: 'Terms $\\to 0$ is necessary but NOT sufficient. ($\\sum 1/n$ diverges.)', partNumber: 4, partTitle: 'nth-Term Test for Divergence' },

  // Part 5: Properties of Convergent Series
  { id: 'ifs-ent-5a', question: 'If $\\sum a_n$ and $\\sum b_n$ both converge, then $\\sum (a_n + b_n)$:', options: ['Diverges', 'Converges', 'Cannot be determined', 'Equals zero'], correctIndex: 1, explanation: 'The sum of convergent series converges.', partNumber: 5, partTitle: 'Properties of Convergent Series' },
  { id: 'ifs-ent-5b', question: '$\\sum_{n=0}^{\\infty} \\frac{3}{2^n} =$', options: ['$3$', '$6$', '$\\frac{3}{2}$', '$\\infty$'], correctIndex: 1, explanation: 'Geometric: $a = 3$, $r = \\frac{1}{2}$. Sum $= \\frac{3}{1-1/2} = 6$.', partNumber: 5, partTitle: 'Properties of Convergent Series' },

  // Part 6: Problem-Solving Workshop
  { id: 'ifs-ent-6a', question: '$\\sum_{n=1}^{\\infty} \\frac{1}{n}$ (harmonic series):', options: ['Converges to $1$', 'Converges to $\\ln 2$', 'Diverges', 'Converges to $e$'], correctIndex: 2, explanation: 'The harmonic series diverges (classic result).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ifs-ent-6b', question: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ (p-series with $p = 2$):', options: ['Diverges', 'Converges to $\\frac{\\pi^2}{6}$', 'Converges to $1$', 'Converges to $2$'], correctIndex: 1, explanation: '$p = 2 > 1$: converges. The sum is $\\frac{\\pi^2}{6}$ (Basel problem).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'ifs-ent-7a', question: 'On the BC exam, the first test to apply to any series is usually:', options: ['Ratio test', 'Root test', 'nth-Term Test for Divergence', 'Integral test'], correctIndex: 2, explanation: 'Always check: do the terms $\\to 0$? If not, diverges immediately.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'ifs-ent-7b', question: 'A p-series $\\sum \\frac{1}{n^p}$ converges when:', options: ['$p > 0$', '$p > 1$', '$p < 1$', '$p = 1$'], correctIndex: 1, explanation: 'p-series converges for $p > 1$, diverges for $p \\leq 1$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition of a Series' },
    { partNumber: 2, partTitle: 'Geometric Series' },
    { partNumber: 3, partTitle: 'Telescoping Series' },
    { partNumber: 4, partTitle: 'nth-Term Test for Divergence' },
    { partNumber: 5, partTitle: 'Properties of Convergent Series' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
