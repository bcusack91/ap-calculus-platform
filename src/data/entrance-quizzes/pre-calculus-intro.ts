/**
 * Entrance Quiz — Pre-Calculus
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Functions & Analysis
  { id: 'pc-ent-1a', question: 'Which of the following is the correct way to determine if a graph represents a function?', options: ['Check if the graph crosses the x-axis', 'Apply the vertical line test', 'Apply the horizontal line test', 'Check if the graph is a straight line'], correctIndex: 1, explanation: 'The vertical line test states that a graph represents a function if and only if every vertical line crosses the graph at most once.', partNumber: 1, partTitle: 'Functions & Analysis' },
  { id: 'pc-ent-1b', question: 'If f(x) = $3x^{2}$ − 2x + 1, what is f(−1)?', options: ['2', '4', '6', '0'], correctIndex: 2, explanation: 'f(−1) = $3(-1)^{2}$ − 2(−1) + 1 = 3(1) + 2 + 1 = 6.', partNumber: 1, partTitle: 'Functions & Analysis' },

  // Part 2: Polynomial & Rational Functions
  { id: 'pc-ent-2a', question: 'What is the end behavior of f(x) = $-2x^{3}$ + 5x as x → +∞?', options: ['f(x) → +∞', 'f(x) → −∞', 'f(x) → 0', 'f(x) → 2'], correctIndex: 1, explanation: 'The leading term is $-2x^{3}$. Since the leading coefficient is negative and the degree is odd, f(x) → −∞ as x → +∞.', partNumber: 2, partTitle: 'Polynomial & Rational Functions' },
  { id: 'pc-ent-2b', question: 'What is a vertical asymptote of the function f(x) = (x + 1)/(x − 3)?', options: ['x = −1', 'x = 3', 'x = 1', 'y = 1'], correctIndex: 1, explanation: 'Vertical asymptotes occur where the denominator equals zero (and the numerator ≠ 0). Setting x − 3 = 0 gives x = 3.', partNumber: 2, partTitle: 'Polynomial & Rational Functions' },

  // Part 3: Exponential & Logarithmic Functions
  { id: 'pc-ent-3a', question: 'Evaluate $\\log_{2}(32)$.', options: ['4', '5', '6', '16'], correctIndex: 1, explanation: '$2^{5}$ = 32, so $\\log_{2}(32)$ = 5.', partNumber: 3, partTitle: 'Exponential & Logarithmic Functions' },
  { id: 'pc-ent-3b', question: 'Which property allows you to write log(AB) as log(A) + log(B)?', options: ['Power Rule', 'Quotient Rule', 'Product Rule', 'Change of Base'], correctIndex: 2, explanation: 'The Product Rule of logarithms states log(AB) = log(A) + log(B).', partNumber: 3, partTitle: 'Exponential & Logarithmic Functions' },

  // Part 4: Trigonometry Foundations
  { id: 'pc-ent-4a', question: 'In a right triangle, if sin(θ) = opposite/hypotenuse, what is cos(θ)?', options: ['opposite/adjacent', 'adjacent/hypotenuse', 'hypotenuse/adjacent', 'opposite/hypotenuse'], correctIndex: 1, explanation: 'cosine is defined as adjacent/hypotenuse (SOH-CAH-TOA: CAH = Cosine, Adjacent, Hypotenuse).', partNumber: 4, partTitle: 'Trigonometry Foundations' },
  { id: 'pc-ent-4b', question: 'What is the value of sin(90°)?', options: ['0', '½', '$\\sqrt{2}/2$', '1'], correctIndex: 3, explanation: 'On the unit circle, the point at 90° is (0, 1). The sine equals the y-coordinate, so sin(90°) = 1.', partNumber: 4, partTitle: 'Trigonometry Foundations' },

  // Part 5: Trigonometric Identities & Equations
  { id: 'pc-ent-5a', question: 'Which Pythagorean identity is always true?', options: ['$\\sin^{2}(x)$ − $\\cos^{2}(x)$ = 1', '$\\sin^{2}(x)$ + $\\cos^{2}(x)$ = 1', '$\\tan^{2}(x)$ + 1 = $\\sin^{2}(x)$', '$\\cos^{2}(x)$ − $\\sin^{2}(x)$ = 1'], correctIndex: 1, explanation: 'The fundamental Pythagorean identity is $\\sin^{2}(x)$ + $\\cos^{2}(x)$ = 1, derived from the unit circle definition.', partNumber: 5, partTitle: 'Trig Identities & Equations' },
  { id: 'pc-ent-5b', question: 'Solve sin(x) = ½ for 0 ≤ x < 2π. Which values satisfy this?', options: ['x = π/6 only', 'x = π/6 and x = 5π/6', 'x = π/3 and x = 2π/3', 'x = π/4 and x = 3π/4'], correctIndex: 1, explanation: 'sin(x) = ½ in [0, 2π) at x = π/6 (30°) and x = π − π/6 = 5π/6 (150°), both in Q1 and Q2 where sine is positive.', partNumber: 5, partTitle: 'Trig Identities & Equations' },

  // Part 6: Sequences & Series
  { id: 'pc-ent-6a', question: 'In an arithmetic sequence with first term $a_{1}$ = 3 and common difference d = 4, what is the 10th term?', options: ['39', '31', '43', '36'], correctIndex: 0, explanation: '$a_{n}$ = $a_{1}$ + (n − 1)d = 3 + (10 − 1)(4) = 3 + 36 = 39.', partNumber: 6, partTitle: 'Sequences & Series' },
  { id: 'pc-ent-6b', question: 'What is the common ratio of the geometric sequence 2, 6, 18, 54, …?', options: ['2', '3', '4', '6'], correctIndex: 1, explanation: 'Divide consecutive terms: 6/2 = 3, 18/6 = 3. The common ratio r = 3.', partNumber: 6, partTitle: 'Sequences & Series' },

  // Part 7: Review & Applications
  { id: 'pc-ent-7a', question: 'The graph of y = f(x − 2) + 3 is the graph of y = f(x) shifted in which direction?', options: ['Left 2, Down 3', 'Right 2, Up 3', 'Left 2, Up 3', 'Right 2, Down 3'], correctIndex: 1, explanation: 'Replacing x with (x − 2) shifts the graph right by 2. Adding 3 outside the function shifts it up by 3.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'pc-ent-7b', question: 'Which of the following correctly converts 270° to radians?', options: ['π/2', 'π', '3π/2', '2π'], correctIndex: 2, explanation: 'Multiply by π/180: 270 × (π/180) = 270π/180 = 3π/2.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Functions & Analysis' },
    { partNumber: 2, partTitle: 'Polynomial & Rational Functions' },
    { partNumber: 3, partTitle: 'Exponential & Logarithmic Functions' },
    { partNumber: 4, partTitle: 'Trigonometry Foundations' },
    { partNumber: 5, partTitle: 'Trig Identities & Equations' },
    { partNumber: 6, partTitle: 'Sequences & Series' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
