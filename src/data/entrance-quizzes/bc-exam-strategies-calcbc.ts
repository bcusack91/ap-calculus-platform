/**
 * Entrance Quiz — BC Exam Strategies (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: BC Exam Format Overview
  { id: 'bcs-ent-1a', question: 'The AP Calculus BC exam has how many sections?', options: ['$1$', '$2$', '$3$', '$4$'], correctIndex: 1, explanation: 'Two sections: Multiple Choice and Free Response.', partNumber: 1, partTitle: 'BC Exam Format Overview' },
  { id: 'bcs-ent-1b', question: 'The BC exam covers all AB topics plus:', options: ['Statistics', 'Series, parametric/polar, advanced integration, and more', 'Linear algebra', 'Multivariable calculus'], correctIndex: 1, explanation: 'BC = AB + additional topics (series, parametric, polar, advanced integration).', partNumber: 1, partTitle: 'BC Exam Format Overview' },

  // Part 2: Series on the Exam
  { id: 'bcs-ent-2a', question: 'Series questions on the BC exam typically involve:', options: ['Only geometric series', 'Taylor/Maclaurin series, convergence tests, and error bounds', 'Only the nth-term test', 'Only alternating series'], correctIndex: 1, explanation: 'Series is a major BC topic: expect multiple questions.', partNumber: 2, partTitle: 'Series on the Exam' },
  { id: 'bcs-ent-2b', question: 'You should memorize the Maclaurin series for:', options: ['Only $e^x$', '$e^x$, $\\sin x$, $\\cos x$, $\\frac{1}{1-x}$, $\\ln(1+x)$', 'All possible functions', 'None — the formula sheet has them'], correctIndex: 1, explanation: 'These 5 core series are the building blocks for all manipulations.', partNumber: 2, partTitle: 'Series on the Exam' },

  // Part 3: Parametric & Polar on the Exam
  { id: 'bcs-ent-3a', question: 'Parametric questions commonly ask for:', options: ['Only the parameter value', '$dy/dx$, arc length, and area', 'Only the Cartesian equation', 'Only graphing'], correctIndex: 1, explanation: 'Expect slopes, arc length, and area from parametric equations.', partNumber: 3, partTitle: 'Parametric & Polar on the Exam' },
  { id: 'bcs-ent-3b', question: 'Polar area uses the formula:', options: ['$\\int r\\,d\\theta$', '$\\frac{1}{2}\\int r^2\\,d\\theta$', '$\\pi r^2$', '$2\\pi r$'], correctIndex: 1, explanation: 'Polar area = $\\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$.', partNumber: 3, partTitle: 'Parametric & Polar on the Exam' },

  // Part 4: Integration Techniques on the Exam
  { id: 'bcs-ent-4a', question: 'Integration by parts appears on the BC exam when:', options: ['Never', 'The integrand is a product of different function types', 'Only for trig functions', 'Only for polynomials'], correctIndex: 1, explanation: 'IBP for products like $x e^x$, $x \\ln x$, $x \\sin x$.', partNumber: 4, partTitle: 'Integration Techniques on the Exam' },
  { id: 'bcs-ent-4b', question: 'Partial fractions on the BC exam typically involve:', options: ['Only quadratic denominators', 'Linear factors (distinct and repeated)', 'Complex roots', 'Degree-5 polynomials'], correctIndex: 1, explanation: 'BC exam focuses on linear factors.', partNumber: 4, partTitle: 'Integration Techniques on the Exam' },

  // Part 5: Calculator Strategy
  { id: 'bcs-ent-5a', question: 'On calculator-active sections, you should use your calculator to:', options: ['Show all algebraic work', 'Evaluate definite integrals and find zeros', 'Write paragraphs', 'Only graph'], correctIndex: 1, explanation: 'Store intermediate results and use numerical integration.', partNumber: 5, partTitle: 'Calculator Strategy' },
  { id: 'bcs-ent-5b', question: 'On non-calculator sections:', options: ['You can still use a calculator', 'All work must be shown analytically', 'Skip to the next section', 'Only estimate answers'], correctIndex: 1, explanation: 'No calculator: show complete analytical solutions.', partNumber: 5, partTitle: 'Calculator Strategy' },

  // Part 6: Problem-Solving Workshop
  { id: 'bcs-ent-6a', question: 'Time management on the BC exam: approximately how many minutes per FRQ?', options: ['$5$', '$15$', '$30$', '$45$'], correctIndex: 1, explanation: '6 FRQs in 90 minutes ≈ 15 minutes each.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'bcs-ent-6b', question: 'If stuck on a part of an FRQ:', options: ['Skip the entire problem', 'Write what you know and move to the next part', 'Erase everything', 'Spend all remaining time on it'], correctIndex: 1, explanation: 'Later parts may not depend on earlier parts. Move on.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & Comprehensive Strategies
  { id: 'bcs-ent-7a', question: 'The BC subscore on the exam is:', options: ['A separate grade', 'The AB portion of the BC exam', 'Not reported', 'Only for Series topics'], correctIndex: 1, explanation: 'You receive both a BC score and an AB subscore.', partNumber: 7, partTitle: 'Review & Comprehensive Strategies' },
  { id: 'bcs-ent-7b', question: 'The most important preparation strategy is:', options: ['Memorizing everything', 'Practicing problems under timed conditions', 'Only reading the textbook', 'Only watching videos'], correctIndex: 1, explanation: 'Timed practice builds speed, accuracy, and confidence.', partNumber: 7, partTitle: 'Review & Comprehensive Strategies' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'BC Exam Format Overview' },
    { partNumber: 2, partTitle: 'Series on the Exam' },
    { partNumber: 3, partTitle: 'Parametric & Polar on the Exam' },
    { partNumber: 4, partTitle: 'Integration Techniques on the Exam' },
    { partNumber: 5, partTitle: 'Calculator Strategy' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Comprehensive Strategies' },
  ]
}
