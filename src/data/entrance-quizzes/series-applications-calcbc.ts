/**
 * Entrance Quiz — Series Applications (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Approximating Functions with Series
  { id: 'sa-ent-1a', question: 'Taylor polynomials approximate functions by:', options: ['Exact evaluation', 'Polynomial approximation near a point', 'Geometric construction', 'Random sampling'], correctIndex: 1, explanation: 'Taylor polynomials provide polynomial approximations near the center.', partNumber: 1, partTitle: 'Approximating Functions with Series' },
  { id: 'sa-ent-1b', question: 'Higher-degree Taylor polynomials are generally:', options: ['Less accurate', 'More accurate near the center', 'Only useful at the center', 'Always exact'], correctIndex: 1, explanation: 'More terms → better approximation in the interval of convergence.', partNumber: 1, partTitle: 'Approximating Functions with Series' },

  // Part 2: Computing Limits with Series
  { id: 'sa-ent-2a', question: 'To evaluate $\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$, replace $\\sin x$ with its series:', options: ['$\\frac{-1}{6}$', '$0$', '$1$', '$\\frac{1}{6}$'], correctIndex: 0, explanation: '$\\sin x = x - \\frac{x^3}{6}+\\cdots$. $\\frac{-x^3/6}{x^3} = -\\frac{1}{6}$.', partNumber: 2, partTitle: 'Computing Limits with Series' },
  { id: 'sa-ent-2b', question: '$\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$ using series:', options: ['$0$', '$\\frac{1}{2}$', '$1$', '$2$'], correctIndex: 1, explanation: '$e^x = 1 + x + \\frac{x^2}{2}+\\cdots$. $\\frac{x^2/2}{x^2} = \\frac{1}{2}$.', partNumber: 2, partTitle: 'Computing Limits with Series' },

  // Part 3: Evaluating Integrals with Series
  { id: 'sa-ent-3a', question: 'To evaluate $\\int_0^1 e^{-x^2}\\,dx$, which has no closed form, use:', options: ['u-substitution', 'The series for $e^{-x^2}$ integrated term by term', 'Partial fractions', 'Integration by parts'], correctIndex: 1, explanation: 'Replace with Maclaurin series and integrate each term.', partNumber: 3, partTitle: 'Evaluating Integrals with Series' },
  { id: 'sa-ent-3b', question: '$\\int_0^1 e^{-x^2}\\,dx \\approx \\int_0^1 (1 - x^2 + \\frac{x^4}{2})\\,dx =$', options: ['$1 - \\frac{1}{3} + \\frac{1}{10} = \\frac{23}{30}$', '$1$', '$0$', '$e^{-1}$'], correctIndex: 0, explanation: '$[x - \\frac{x^3}{3} + \\frac{x^5}{10}]_0^1 = 1 - \\frac{1}{3} + \\frac{1}{10} = \\frac{23}{30}$.', partNumber: 3, partTitle: 'Evaluating Integrals with Series' },

  // Part 4: Solving Differential Equations with Series
  { id: 'sa-ent-4a', question: 'Series solutions to DEs involve assuming $y = \\sum c_n x^n$ and:', options: ['Guessing coefficients', 'Substituting into the DE and matching coefficients', 'Taking limits', 'Using L\'Hôpital'], correctIndex: 1, explanation: 'Substitute the series into the DE, then equate coefficients.', partNumber: 4, partTitle: 'Solving Differential Equations with Series' },
  { id: 'sa-ent-4b', question: 'For $y\' = y$ with $y(0) = 1$, the series solution is:', options: ['$\\sum \\frac{x^n}{n}$', '$\\sum \\frac{x^n}{n!}$', '$\\sum x^n$', '$\\sum (-1)^n x^n$'], correctIndex: 1, explanation: 'This recovers the series for $e^x$.', partNumber: 4, partTitle: 'Solving Differential Equations with Series' },

  // Part 5: Physics Applications of Series
  { id: 'sa-ent-5a', question: 'In physics, the small-angle approximation $\\sin\\theta \\approx \\theta$ comes from:', options: ['Geometry', 'The first term of the Taylor series', 'Integration', 'Differentiation'], correctIndex: 1, explanation: 'For small $\\theta$: $\\sin\\theta \\approx \\theta$ (first-order Taylor).', partNumber: 5, partTitle: 'Physics Applications of Series' },
  { id: 'sa-ent-5b', question: 'The binomial series $(1+x)^p = \\sum \\frac{p(p-1)\\cdots(p-n+1)}{n!}x^n$ generalizes:', options: ['The geometric series', 'The binomial theorem to non-integer exponents', 'The exponential function', 'The logarithm'], correctIndex: 1, explanation: 'Works for any real $p$, not just positive integers.', partNumber: 5, partTitle: 'Physics Applications of Series' },

  // Part 6: Problem-Solving Workshop
  { id: 'sa-ent-6a', question: '$\\int_0^{0.5} \\frac{\\sin x}{x}\\,dx$ is best evaluated by:', options: ['u-substitution', 'Series: $\\int \\sum \\frac{(-1)^n x^{2n}}{(2n+1)!}\\,dx$', 'Partial fractions', 'L\'Hôpital'], correctIndex: 1, explanation: '$\\frac{\\sin x}{x} = \\sum \\frac{(-1)^n x^{2n}}{(2n+1)!}$. Integrate term by term.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sa-ent-6b', question: 'Using 3 terms to approximate $\\int_0^{0.5} \\frac{\\sin x}{x}\\,dx$ gives:', options: ['$0.5 - \\frac{(0.5)^3}{18} + \\frac{(0.5)^5}{600} \\approx 0.4931$', '$0.5$', '$1$', '$0$'], correctIndex: 0, explanation: 'Integrate: $[x - \\frac{x^3}{3 \\cdot 3!} + \\frac{x^5}{5 \\cdot 5!}]_0^{0.5} \\approx 0.4931$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'sa-ent-7a', question: 'On the AP BC exam, series applications most often appear in:', options: ['Multiple choice only', 'Free response as integrals that lack elementary antiderivatives', 'Only in the calculator section', 'Not on the exam'], correctIndex: 1, explanation: 'Common FRQ: use series to approximate a definite integral.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'sa-ent-7b', question: 'The key strategy for series application problems is:', options: ['Memorize all integrals', 'Recognize when to substitute a known series and manipulate', 'Use only numerical methods', 'Guess the answer'], correctIndex: 1, explanation: 'Substitute known series, then differentiate/integrate/manipulate as needed.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Approximating Functions with Series' },
    { partNumber: 2, partTitle: 'Computing Limits with Series' },
    { partNumber: 3, partTitle: 'Evaluating Integrals with Series' },
    { partNumber: 4, partTitle: 'Solving Differential Equations with Series' },
    { partNumber: 5, partTitle: 'Physics Applications of Series' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
