/**
 * Entrance Quiz — Partial Fractions (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Proper vs Improper Fractions
  { id: 'pf-ent-1a', question: 'A rational function $\\frac{P(x)}{Q(x)}$ is proper when:', options: ['deg $P$ > deg $Q$', 'deg $P$ < deg $Q$', 'deg $P$ = deg $Q$', '$P$ and $Q$ have the same roots'], correctIndex: 1, explanation: 'Proper: degree of numerator is less than degree of denominator.', partNumber: 1, partTitle: 'Proper vs Improper Fractions' },
  { id: 'pf-ent-1b', question: 'If the fraction is improper, first perform:', options: ['Partial fractions directly', 'Polynomial long division', 'Factoring', 'Substitution'], correctIndex: 1, explanation: 'Divide first to get a polynomial plus a proper fraction.', partNumber: 1, partTitle: 'Proper vs Improper Fractions' },
  // Part 2: Linear Factors
  { id: 'pf-ent-2a', question: '$\\frac{5x+1}{(x+2)(x-3)}$ decomposes as:', options: ['$\\frac{A}{x+2} + \\frac{B}{x-3}$', '$\\frac{A}{(x+2)(x-3)}$', '$\\frac{Ax+B}{x+2}$', '$\\frac{A}{x+2} \\cdot \\frac{B}{x-3}$'], correctIndex: 0, explanation: 'Distinct linear factors: one constant over each factor.', partNumber: 2, partTitle: 'Linear Factors' },
  { id: 'pf-ent-2b', question: 'To find $A$ in $\\frac{A}{x+2} + \\frac{B}{x-3} = \\frac{5x+1}{(x+2)(x-3)}$, a quick method is to set $x =$', options: ['$0$', '$-2$', '$3$', '$1$'], correctIndex: 1, explanation: 'Setting $x = -2$ eliminates $B$: $A(-5) = 5(-2)+1 = -9$, so $A = \\frac{9}{5}$.', partNumber: 2, partTitle: 'Linear Factors' },
  // Part 3: Repeated Linear Factors
  { id: 'pf-ent-3a', question: 'For $(x-1)^2$ in the denominator, include:', options: ['$\\frac{A}{x-1}$ only', '$\\frac{A}{x-1} + \\frac{B}{(x-1)^2}$', '$\\frac{Ax+B}{(x-1)^2}$', '$\\frac{A}{(x-1)^2}$ only'], correctIndex: 1, explanation: 'Repeated factor: include one fraction for each power.', partNumber: 3, partTitle: 'Repeated Linear Factors' },
  { id: 'pf-ent-3b', question: 'The decomposition of $\\frac{1}{x(x-1)^2}$ has how many unknown constants?', options: ['$2$', '$3$', '$4$', '$1$'], correctIndex: 1, explanation: '$\\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{(x-1)^2}$: three constants.', partNumber: 3, partTitle: 'Repeated Linear Factors' },
  // Part 4: Setting Up Partial Fractions
  { id: 'pf-ent-4a', question: 'To find constants in partial fractions, you can:', options: ['Only use substitution', 'Multiply both sides by the denominator and equate coefficients', 'Differentiate both sides', 'Only use elimination'], correctIndex: 1, explanation: 'Clear the denominator, then match coefficients or plug in strategic values.', partNumber: 4, partTitle: 'Setting Up Partial Fractions' },
  { id: 'pf-ent-4b', question: '$\\frac{3}{x^2-1} = \\frac{3}{(x-1)(x+1)}$ decomposes to:', options: ['$\\frac{3/2}{x-1} - \\frac{3/2}{x+1}$', '$\\frac{3}{x-1} + \\frac{3}{x+1}$', '$\\frac{3}{x-1} - \\frac{3}{x+1}$', '$\\frac{1}{x-1} + \\frac{2}{x+1}$'], correctIndex: 0, explanation: 'Cover-up: $A = \\frac{3}{2}$, $B = -\\frac{3}{2}$.', partNumber: 4, partTitle: 'Setting Up Partial Fractions' },
  // Part 5: Integrating Partial Fractions
  { id: 'pf-ent-5a', question: '$\\int \\frac{1}{x-3}\\,dx =$', options: ['$\\ln|x-3| + C$', '$\\frac{1}{(x-3)^2} + C$', '$-\\ln|x-3| + C$', '$\\frac{-1}{(x-3)^2} + C$'], correctIndex: 0, explanation: 'Standard form: $\\int \\frac{du}{u} = \\ln|u| + C$.', partNumber: 5, partTitle: 'Integrating Partial Fractions' },
  { id: 'pf-ent-5b', question: '$\\int \\frac{1}{(x-1)^2}\\,dx =$', options: ['$\\ln|x-1| + C$', '$\\frac{-1}{x-1} + C$', '$\\frac{1}{x-1} + C$', '$\\frac{-2}{(x-1)^3} + C$'], correctIndex: 1, explanation: '$\\int (x-1)^{-2}\\,dx = \\frac{(x-1)^{-1}}{-1} + C = \\frac{-1}{x-1} + C$.', partNumber: 5, partTitle: 'Integrating Partial Fractions' },
  // Part 6: Problem-Solving Workshop
  { id: 'pf-ent-6a', question: '$\\int \\frac{2x+3}{x^2+3x}\\,dx =$', options: ['$\\ln|x^2+3x| + C$', '$\\frac{2x+3}{2x+3} + C$', '$\\ln|x| + \\ln|x+3| + C$', 'Both A and C'], correctIndex: 3, explanation: '$\\frac{2x+3}{x(x+3)}$: check $u = x^2+3x$, $du = (2x+3)dx$. Both A and C are equivalent.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'pf-ent-6b', question: '$\\int_2^3 \\frac{1}{x^2-1}\\,dx$ requires careful treatment because:', options: ['The integrand is undefined at $x = 1$', 'The function is always positive', 'It needs u-substitution', 'There are no issues'], correctIndex: 3, explanation: 'On $[2,3]$, $x^2-1 > 0$ and the integrand is defined. No issues on this interval.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7: Review & AP Exam Applications
  { id: 'pf-ent-7a', question: 'On the AP BC exam, partial fractions questions typically involve:', options: ['Quadratic factors only', 'Distinct and/or repeated linear factors', 'Complex roots', 'Higher-order polynomials'], correctIndex: 1, explanation: 'AP BC focuses on linear factors (distinct and repeated).', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'pf-ent-7b', question: 'If $\\frac{P(x)}{Q(x)}$ has deg $P$ = deg $Q$, the first step is:', options: ['Partial fractions immediately', 'Long division to get a constant plus a proper fraction', 'Factor the numerator', 'Apply L\'Hôpital'], correctIndex: 1, explanation: 'Always make the fraction proper first.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Proper vs Improper Fractions' },
    { partNumber: 2, partTitle: 'Linear Factors' },
    { partNumber: 3, partTitle: 'Repeated Linear Factors' },
    { partNumber: 4, partTitle: 'Setting Up Partial Fractions' },
    { partNumber: 5, partTitle: 'Integrating Partial Fractions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
