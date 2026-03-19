/**
 * Entrance Quiz — Convergence Tests Summary (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Integral Test
  {
    id: 'cts-ent-1a',
    question: 'The integral test applies when $f(x)$ is continuous, positive, and:',
    options: ['Increasing', 'Decreasing', 'Oscillating', 'Constant'],
    correctIndex: 1,
    explanation: 'The function must be eventually decreasing.',
    partNumber: 1,
    partTitle: 'Integral Test',
  },
  {
    id: 'cts-ent-1b',
    question: 'If $\\int_1^{\\infty} f(x)\\,dx$ converges, then $\\sum_{n=1}^{\\infty} f(n)$:',
    options: ['Diverges', 'Converges', 'Equals the integral', 'Cannot be determined'],
    correctIndex: 1,
    explanation: 'The integral test: integral and series converge or diverge together.',
    partNumber: 1,
    partTitle: 'Integral Test',
  },

  // Part 2: Comparison Test
  {
    id: 'cts-ent-2a',
    question: 'Direct Comparison Test: if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then:',
    options: ['$\\sum a_n$ diverges', '$\\sum a_n$ converges', 'Nothing is known', '$\\sum a_n = \\sum b_n$'],
    correctIndex: 1,
    explanation: 'Smaller than a convergent series → also converges.',
    partNumber: 2,
    partTitle: 'Comparison Test',
  },
  {
    id: 'cts-ent-2b',
    question: 'If $0 \\leq b_n \\leq a_n$ and $\\sum b_n$ diverges, then:',
    options: ['$\\sum a_n$ converges', '$\\sum a_n$ diverges', 'Nothing is known', '$a_n \\to 0$'],
    correctIndex: 1,
    explanation: 'Larger than a divergent series → also diverges.',
    partNumber: 2,
    partTitle: 'Comparison Test',
  },

  // Part 3: Limit Comparison Test
  {
    id: 'cts-ent-3a',
    question: 'The Limit Comparison Test: compute $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L$. If $0 < L < \\infty$:',
    options: ['Both series converge', 'Both series diverge', 'Both series do the same thing (both converge or both diverge)', 'Nothing can be concluded'],
    correctIndex: 2,
    explanation: 'If the limit is positive and finite, both series share the same behavior.',
    partNumber: 3,
    partTitle: 'Limit Comparison Test',
  },
  {
    id: 'cts-ent-3b',
    question: 'To test $\\sum \\frac{n}{n^3+1}$, compare with:',
    options: ['$\\sum \\frac{1}{n^3}$', '$\\sum \\frac{1}{n^2}$', '$\\sum \\frac{1}{n}$', '$\\sum n$'],
    correctIndex: 1,
    explanation: '$\\frac{n}{n^3+1} \\sim \\frac{1}{n^2}$ for large $n$.',
    partNumber: 3,
    partTitle: 'Limit Comparison Test',
  },

  // Part 4: Ratio Test
  {
    id: 'cts-ent-4a',
    question: 'The Ratio Test: $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$. If $L < 1$:',
    options: ['Diverges', 'Converges absolutely', 'Inconclusive', 'Converges conditionally'],
    correctIndex: 1,
    explanation: '$L < 1$: absolute convergence.',
    partNumber: 4,
    partTitle: 'Ratio Test',
  },
  {
    id: 'cts-ent-4b',
    question: 'If the ratio test gives $L = 1$:',
    options: ['Converges', 'Diverges', 'Inconclusive', 'Converges to $1$'],
    correctIndex: 2,
    explanation: '$L = 1$ is inconclusive — use another test.',
    partNumber: 4,
    partTitle: 'Ratio Test',
  },

  // Part 5: Root Test
  {
    id: 'cts-ent-5a',
    question: 'The Root Test: $L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}$. If $L < 1$:',
    options: ['Diverges', 'Converges absolutely', 'Inconclusive', 'The terms are zero'],
    correctIndex: 1,
    explanation: 'Same thresholds as ratio test: $L < 1$ → converges.',
    partNumber: 5,
    partTitle: 'Root Test',
  },
  {
    id: 'cts-ent-5b',
    question: 'The root test is especially useful when $a_n$ involves:',
    options: ['Factorials', '$n$th powers like $a_n = \\left(\\frac{n}{2n+1}\\right)^n$', 'Simple fractions', 'Logarithms'],
    correctIndex: 1,
    explanation: '$n$th powers simplify nicely under $\\sqrt[n]{\\cdot}$.',
    partNumber: 5,
    partTitle: 'Root Test',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'cts-ent-6a',
    question: 'Test $\\sum \\frac{n!}{3^n}$. Best test:',
    options: ['Integral test', 'Ratio test', 'Comparison test', 'nth-Term test'],
    correctIndex: 1,
    explanation: 'Factorials → ratio test. $\\frac{(n+1)!/3^{n+1}}{n!/3^n} = \\frac{n+1}{3} \\to \\infty$. Diverges.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'cts-ent-6b',
    question: 'Test $\\sum \\frac{1}{n\\ln n}$ for $n \\geq 2$:',
    options: ['Converges by ratio test', 'Diverges by integral test', 'Converges by comparison', 'Cannot be tested'],
    correctIndex: 1,
    explanation: '$\\int_2^{\\infty}\\frac{dx}{x\\ln x} = \\lim[\\ln(\\ln x)] = \\infty$. Diverges.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'cts-ent-7a',
    question: 'On the AP BC exam, you must state which test you are using and verify:',
    options: ['Nothing', 'The hypotheses of the test are met', 'Only the final answer', 'Your name'],
    correctIndex: 1,
    explanation: 'Always name the test and verify conditions.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'cts-ent-7b',
    question: 'A good strategy for choosing a convergence test is:',
    options: ['Try them all randomly', 'Match the form of $a_n$ to the best-suited test', 'Always use the ratio test', 'Always use comparison'],
    correctIndex: 1,
    explanation: 'Pattern recognition: factorials → ratio, nth powers → root, similar to known series → comparison.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Integral Test' },
    { partNumber: 2, partTitle: 'Comparison Test' },
    { partNumber: 3, partTitle: 'Limit Comparison Test' },
    { partNumber: 4, partTitle: 'Ratio Test' },
    { partNumber: 5, partTitle: 'Root Test' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
