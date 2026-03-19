/**
 * Entrance Quiz — Improper Integrals (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Type I (Infinite Limits)
  { id: 'ii-ent-1a', question: '$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ is evaluated as:', options: ['$\\lim_{b \\to \\infty} \\int_1^b \\frac{1}{x^2}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$ directly', '$\\frac{1}{\\infty}$', 'Undefined'], correctIndex: 0, explanation: 'Replace $\\infty$ with $b$ and take the limit.', partNumber: 1, partTitle: 'Type I (Infinite Limits)' },
  { id: 'ii-ent-1b', question: '$\\int_1^{\\infty} \\frac{1}{x^2}\\,dx =$', options: ['$\\infty$', '$1$', '$2$', '$\\frac{1}{2}$'], correctIndex: 1, explanation: '$\\lim_{b \\to \\infty}[-\\frac{1}{x}]_1^b = \\lim_{b \\to \\infty}(-\\frac{1}{b}+1) = 1$.', partNumber: 1, partTitle: 'Type I (Infinite Limits)' },
  // Part 2: Type II (Discontinuous Integrand)
  { id: 'ii-ent-2a', question: '$\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ is improper because:', options: ['The integrand is undefined at $x = 0$', 'The limits are infinite', 'The function is negative', 'It cannot be integrated'], correctIndex: 0, explanation: 'Type II: the integrand $\\to \\infty$ as $x \\to 0^+$.', partNumber: 2, partTitle: 'Type II (Discontinuous Integrand)' },
  { id: 'ii-ent-2b', question: '$\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx =$', options: ['$\\infty$', '$1$', '$2$', '$\\frac{1}{2}$'], correctIndex: 2, explanation: '$\\lim_{a \\to 0^+}[2\\sqrt{x}]_a^1 = 2 - 0 = 2$. Converges.', partNumber: 2, partTitle: 'Type II (Discontinuous Integrand)' },
  // Part 3: Convergence vs Divergence
  { id: 'ii-ent-3a', question: 'An improper integral converges if:', options: ['The integrand goes to zero', 'The limit exists and is finite', 'The function is bounded', 'The interval is finite'], correctIndex: 1, explanation: 'Convergence means the limiting value is a finite number.', partNumber: 3, partTitle: 'Convergence vs Divergence' },
  { id: 'ii-ent-3b', question: '$\\int_1^{\\infty} \\frac{1}{x}\\,dx$:', options: ['Converges to $1$', 'Converges to $\\ln 2$', 'Diverges', 'Converges to $0$'], correctIndex: 2, explanation: '$\\lim_{b \\to \\infty} \\ln b = \\infty$. Diverges.', partNumber: 3, partTitle: 'Convergence vs Divergence' },
  // Part 4: Comparison Test for Integrals
  { id: 'ii-ent-4a', question: 'The comparison test: if $0 \\leq f(x) \\leq g(x)$ and $\\int g$ converges, then:', options: ['$\\int f$ diverges', '$\\int f$ converges', 'Nothing can be concluded', '$\\int f = \\int g$'], correctIndex: 1, explanation: 'If the larger integral converges, so does the smaller.', partNumber: 4, partTitle: 'Comparison Test for Integrals' },
  { id: 'ii-ent-4b', question: 'If $0 \\leq f(x) \\leq g(x)$ and $\\int f$ diverges, then:', options: ['$\\int g$ converges', '$\\int g$ diverges', 'Nothing can be concluded', '$\\int g = \\int f$'], correctIndex: 1, explanation: 'If the smaller integral diverges, so does the larger.', partNumber: 4, partTitle: 'Comparison Test for Integrals' },
  // Part 5: p-Integrals
  { id: 'ii-ent-5a', question: '$\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ converges if and only if:', options: ['$p > 0$', '$p > 1$', '$p < 1$', '$p = 1$'], correctIndex: 1, explanation: 'The p-integral converges for $p > 1$ and diverges for $p \\leq 1$.', partNumber: 5, partTitle: 'p-Integrals' },
  { id: 'ii-ent-5b', question: '$\\int_0^1 \\frac{1}{x^p}\\,dx$ converges if and only if:', options: ['$p > 1$', '$p < 1$', '$p > 0$', '$p = 1$'], correctIndex: 1, explanation: 'At $x = 0$: converges for $p < 1$, diverges for $p \\geq 1$.', partNumber: 5, partTitle: 'p-Integrals' },
  // Part 6: Problem-Solving Workshop
  { id: 'ii-ent-6a', question: '$\\int_0^{\\infty} e^{-x}\\,dx =$', options: ['$0$', '$1$', '$\\infty$', '$e$'], correctIndex: 1, explanation: '$\\lim_{b \\to \\infty}[-e^{-x}]_0^b = 0 - (-1) = 1$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ii-ent-6b', question: 'Does $\\int_1^{\\infty} \\frac{1}{x^2+1}\\,dx$ converge?', options: ['Yes, since $\\frac{1}{x^2+1} \\leq \\frac{1}{x^2}$ and $\\int \\frac{1}{x^2}$ converges', 'No', 'Cannot determine', 'Only conditionally'], correctIndex: 0, explanation: 'By comparison with $\\frac{1}{x^2}$, it converges.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7: Review & AP Exam Applications
  { id: 'ii-ent-7a', question: '$\\int_{-\\infty}^{\\infty} f(x)\\,dx$ is evaluated by:', options: ['A single limit', 'Splitting at any point $c$: $\\int_{-\\infty}^c + \\int_c^{\\infty}$', 'Taking $\\lim_{a \\to -\\infty}\\int_a^{\\infty}$', 'It cannot be evaluated'], correctIndex: 1, explanation: 'Split into two improper integrals; both must converge.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'ii-ent-7b', question: 'On the AP BC exam, you must always show the limit notation when evaluating improper integrals because:', options: ['It looks nicer', 'It demonstrates understanding of the definition', 'The answer requires it', 'It is optional'], correctIndex: 1, explanation: 'Showing the limit earns process points and demonstrates rigor.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Type I (Infinite Limits)' },
    { partNumber: 2, partTitle: 'Type II (Discontinuous Integrand)' },
    { partNumber: 3, partTitle: 'Convergence vs Divergence' },
    { partNumber: 4, partTitle: 'Comparison Test for Integrals' },
    { partNumber: 5, partTitle: 'p-Integrals' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
