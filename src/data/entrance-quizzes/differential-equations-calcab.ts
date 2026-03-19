/**
 * Entrance Quiz — Differential Equations (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Differential Equations
  { id: 'de-ent-1a', question: 'A differential equation relates:', options: ['Two functions', 'A function and its derivatives', 'Two integrals', 'Two limits'], correctIndex: 1, explanation: 'A differential equation involves a function and one or more of its derivatives.', partNumber: 1, partTitle: 'Introduction to Differential Equations' },
  { id: 'de-ent-1b', question: '$\\frac{dy}{dx} = 3x^2$ is a differential equation. Its solution is:', options: ['$y = 6x$', '$y = x^3 + C$', '$y = 3x^3$', '$y = x^2$'], correctIndex: 1, explanation: 'Integrate both sides: $y = x^3 + C$.', partNumber: 1, partTitle: 'Introduction to Differential Equations' },

  // Part 2: Separation of Variables
  { id: 'de-ent-2a', question: 'Separation of variables works for equations of the form:', options: ['$\\frac{dy}{dx} = f(x,y)$', '$\\frac{dy}{dx} = g(x) \\cdot h(y)$', 'Any differential equation', '$\\frac{d^2y}{dx^2} = f(x)$'], correctIndex: 1, explanation: 'Separable equations can be written as $\\frac{dy}{h(y)} = g(x)\\,dx$.', partNumber: 2, partTitle: 'Separation of Variables' },
  { id: 'de-ent-2b', question: 'Solve $\\frac{dy}{dx} = \\frac{x}{y}$. After separation:', options: ['$y\\,dy = x\\,dx$', '$\\frac{dy}{y} = x\\,dx$', '$y\\,dx = x\\,dy$', '$dy = \\frac{x}{y}dx$'], correctIndex: 0, explanation: 'Multiply both sides by $y$: $y\\,dy = x\\,dx$.', partNumber: 2, partTitle: 'Separation of Variables' },

  // Part 3: General & Particular Solutions
  { id: 'de-ent-3a', question: 'A general solution contains:', options: ['No constants', 'An arbitrary constant $C$', 'A specific value', 'Only integers'], correctIndex: 1, explanation: 'The general solution has an arbitrary constant from integration.', partNumber: 3, partTitle: 'General & Particular Solutions' },
  { id: 'de-ent-3b', question: 'Given $\\frac{dy}{dx} = 2x$, $y(0) = 3$. The particular solution is:', options: ['$y = x^2 + 3$', '$y = x^2$', '$y = 2x + 3$', '$y = x^2 + C$'], correctIndex: 0, explanation: '$y = x^2 + C$. At $x=0$: $3 = 0 + C$, so $y = x^2 + 3$.', partNumber: 3, partTitle: 'General & Particular Solutions' },

  // Part 4: Slope Fields
  { id: 'de-ent-4a', question: 'A slope field shows:', options: ['The solution curve', 'Short line segments indicating $dy/dx$ at each point', 'The second derivative', 'Level curves'], correctIndex: 1, explanation: 'At each point $(x,y)$, the segment has slope $= f(x,y)$.', partNumber: 4, partTitle: 'Slope Fields' },
  { id: 'de-ent-4b', question: 'On a slope field for $\\frac{dy}{dx} = x$, all segments along the $y$-axis have slope:', options: ['$1$', '$0$', 'Undefined', '$-1$'], correctIndex: 1, explanation: 'On the $y$-axis, $x = 0$, so slope $= 0$.', partNumber: 4, partTitle: 'Slope Fields' },

  // Part 5: Euler's Method (AB Version)
  { id: 'de-ent-5a', question: 'Euler\'s method approximates solutions by:', options: ['Exact integration', 'Following tangent line steps', 'Using Taylor series', 'Guessing values'], correctIndex: 1, explanation: 'Euler\'s method: $y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x$.', partNumber: 5, partTitle: "Euler's Method (AB Version)" },
  { id: 'de-ent-5b', question: 'With $\\frac{dy}{dx} = x+y$, $y(0) = 1$, step size $\\Delta x = 0.5$: $y(0.5) \\approx$', options: ['$1.5$', '$2$', '$1.25$', '$0.5$'], correctIndex: 0, explanation: '$y(0.5) = 1 + (0+1)(0.5) = 1 + 0.5 = 1.5$.', partNumber: 5, partTitle: "Euler's Method (AB Version)" },

  // Part 6: Problem-Solving Workshop
  { id: 'de-ent-6a', question: 'Solve $\\frac{dy}{dx} = ky$. The solution is:', options: ['$y = kx + C$', '$y = Ce^{kx}$', '$y = e^{kx}$', '$y = \\frac{k}{y}$'], correctIndex: 1, explanation: 'Separate: $\\frac{dy}{y} = k\\,dx$. $\\ln|y| = kx + C_1$. $y = Ce^{kx}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'de-ent-6b', question: 'If $\\frac{dy}{dx} = 3y$ and $y(0) = 2$, then $y(t) =$', options: ['$2e^{3t}$', '$3e^{2t}$', '$2 + 3t$', '$6e^t$'], correctIndex: 0, explanation: '$y = Ce^{3t}$. $y(0) = C = 2$. So $y = 2e^{3t}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'de-ent-7a', question: 'Which is NOT a separable equation?', options: ['$\\frac{dy}{dx} = xy$', '$\\frac{dy}{dx} = x + y$', '$\\frac{dy}{dx} = \\frac{x^2}{y}$', '$\\frac{dy}{dx} = e^{x+y}$'], correctIndex: 1, explanation: '$x + y$ cannot be written as $g(x) \\cdot h(y)$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'de-ent-7b', question: 'On a slope field, solution curves are:', options: ['Straight lines', 'Curves that follow the slope segments', 'Horizontal lines', 'Vertical lines'], correctIndex: 1, explanation: 'Solution curves are tangent to the slope segments at every point.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Differential Equations' },
    { partNumber: 2, partTitle: 'Separation of Variables' },
    { partNumber: 3, partTitle: 'General & Particular Solutions' },
    { partNumber: 4, partTitle: 'Slope Fields' },
    { partNumber: 5, partTitle: "Euler's Method (AB Version)" },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
