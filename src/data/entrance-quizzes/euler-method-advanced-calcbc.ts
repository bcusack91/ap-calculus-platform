/**
 * Entrance Quiz — Euler's Method Advanced (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Review of Euler's Method
  { id: 'em2-ent-1a', question: 'Euler\'s method formula: $y_{n+1} =$', options: ['$y_n + f(x_n, y_n)$', '$y_n + f(x_n, y_n) \\cdot \\Delta x$', '$f(x_n, y_n) \\cdot \\Delta x$', '$y_n \\cdot \\Delta x$'], correctIndex: 1, explanation: '$y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x$.', partNumber: 1, partTitle: 'Review of Euler\'s Method' },
  { id: 'em2-ent-1b', question: 'Euler\'s method is based on following:', options: ['The second derivative', 'Tangent lines (linear approximation)', 'The antiderivative', 'The integral curve exactly'], correctIndex: 1, explanation: 'Each step follows the tangent line, approximating the true solution.', partNumber: 1, partTitle: 'Review of Euler\'s Method' },

  // Part 2: Step Size & Accuracy
  { id: 'em2-ent-2a', question: 'Smaller step size $\\Delta x$ generally gives:', options: ['Less accurate results', 'More accurate results', 'The same results', 'Exact results'], correctIndex: 1, explanation: 'Smaller steps follow the curve more closely.', partNumber: 2, partTitle: 'Step Size & Accuracy' },
  { id: 'em2-ent-2b', question: 'Halving the step size roughly:', options: ['Doubles the error', 'Halves the error', 'Eliminates the error', 'Has no effect'], correctIndex: 1, explanation: 'Euler\'s method has first-order accuracy: error $\\propto \\Delta x$.', partNumber: 2, partTitle: 'Step Size & Accuracy' },

  // Part 3: Implementing Multiple Steps
  { id: 'em2-ent-3a', question: 'With $\\frac{dy}{dx} = x + y$, $y(0) = 1$, $\\Delta x = 0.5$: $y(0.5) =$', options: ['$1.5$', '$2$', '$1.25$', '$0.5$'], correctIndex: 0, explanation: '$y(0.5) = 1 + (0 + 1)(0.5) = 1.5$.', partNumber: 3, partTitle: 'Implementing Multiple Steps' },
  { id: 'em2-ent-3b', question: 'Continuing: $y(1) = y(0.5) + f(0.5, 1.5) \\cdot 0.5 = 1.5 + (0.5+1.5)(0.5) =$', options: ['$2.5$', '$2$', '$3$', '$1.5$'], correctIndex: 0, explanation: '$1.5 + 2(0.5) = 1.5 + 1 = 2.5$.', partNumber: 3, partTitle: 'Implementing Multiple Steps' },

  // Part 4: Error Analysis
  { id: 'em2-ent-4a', question: 'If the solution curve is concave up, Euler\'s method:', options: ['Overestimates', 'Underestimates', 'Is exact', 'Cannot determine'], correctIndex: 1, explanation: 'Concave up: tangent lines lie below the curve → underestimate.', partNumber: 4, partTitle: 'Error Analysis' },
  { id: 'em2-ent-4b', question: 'If the solution curve is concave down, Euler\'s method:', options: ['Underestimates', 'Overestimates', 'Is exact', 'Diverges'], correctIndex: 1, explanation: 'Concave down: tangent lines lie above the curve → overestimate.', partNumber: 4, partTitle: 'Error Analysis' },

  // Part 5: Euler's Method with Tables
  { id: 'em2-ent-5a', question: 'When given a table of $x$, $y$, and $dy/dx$ values, Euler\'s method proceeds by:', options: ['Reading the answer from the table', 'Using each row to compute the next $y$ value', 'Averaging all values', 'Integrating the table'], correctIndex: 1, explanation: 'Use the slope at each point to step to the next $y$ value.', partNumber: 5, partTitle: 'Euler\'s Method with Tables' },
  { id: 'em2-ent-5b', question: 'Table: $x = 0$, $y = 2$, $dy/dx = 3$. With $\\Delta x = 1$: $y(1) =$', options: ['$5$', '$3$', '$6$', '$2$'], correctIndex: 0, explanation: '$y(1) = 2 + 3(1) = 5$.', partNumber: 5, partTitle: 'Euler\'s Method with Tables' },

  // Part 6: Problem-Solving Workshop
  { id: 'em2-ent-6a', question: 'Euler\'s method with $n$ steps of size $\\Delta x = \\frac{b-a}{n}$ approximates $y(b)$. As $n \\to \\infty$:', options: ['The approximation diverges', 'The approximation converges to the exact solution', 'The error grows', 'Nothing changes'], correctIndex: 1, explanation: 'In the limit, Euler\'s method approaches the true solution.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'em2-ent-6b', question: 'For $\\frac{dy}{dx} = y$, $y(0) = 1$, $\\Delta x = 1$: $y(1) =$', options: ['$1$', '$2$', '$e$', '$3$'], correctIndex: 1, explanation: '$y(1) = 1 + 1(1) = 2$. (Exact: $e \\approx 2.718$.)', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'em2-ent-7a', question: 'On the AP BC exam, Euler\'s method questions typically specify:', options: ['Only the formula', 'The initial condition, step size, and number of steps', 'Only a graph', 'Only the solution'], correctIndex: 1, explanation: 'Expect to be given all needed information and asked to compute.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'em2-ent-7b', question: 'After using Euler\'s method, you may be asked whether your approximation is an over or underestimate. Check:', options: ['The sign of $dy/dx$', 'The concavity ($d^2y/dx^2$)', 'The initial condition', 'The step size'], correctIndex: 1, explanation: 'Concavity determines whether Euler over or underestimates.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Review of Euler\'s Method' },
    { partNumber: 2, partTitle: 'Step Size & Accuracy' },
    { partNumber: 3, partTitle: 'Implementing Multiple Steps' },
    { partNumber: 4, partTitle: 'Error Analysis' },
    { partNumber: 5, partTitle: 'Euler\'s Method with Tables' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
