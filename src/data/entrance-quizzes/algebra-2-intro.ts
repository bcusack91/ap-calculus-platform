/**
 * Entrance Quiz — Algebra 2
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Quadratic Functions
  { id: 'alg2-ent-1a', question: 'Using the quadratic formula, the solutions to ax² + bx + c = 0 are x = ?', options: ['x = (−b ± √(b² + 4ac)) / 2a', 'x = (b ± √(b² − 4ac)) / 2a', 'x = (−b ± √(b² − 4ac)) / 2a', 'x = (−b ± √(b² − 4ac)) / a'], correctIndex: 2, explanation: 'The quadratic formula is x = (−b ± √(b² − 4ac)) / 2a. Notice the negative b and the 2a in the denominator.', partNumber: 1, partTitle: 'Quadratic Functions' },
  { id: 'alg2-ent-1b', question: 'What is the vertex of f(x) = (x − 3)² + 5?', options: ['(3, −5)', '(−3, 5)', '(3, 5)', '(5, 3)'], correctIndex: 2, explanation: 'In vertex form f(x) = (x − h)² + k, the vertex is (h, k). Here h = 3 and k = 5, so the vertex is (3, 5).', partNumber: 1, partTitle: 'Quadratic Functions' },

  // Part 2: Polynomial Functions
  { id: 'alg2-ent-2a', question: 'According to the Remainder Theorem, when polynomial p(x) is divided by (x − a), the remainder is:', options: ['p(0)', 'p(a)', 'p(−a)', 'the leading coefficient'], correctIndex: 1, explanation: 'The Remainder Theorem states that when p(x) is divided by (x − a), the remainder equals p(a).', partNumber: 2, partTitle: 'Polynomial Functions' },
  { id: 'alg2-ent-2b', question: 'How many complex zeros (counting multiplicity) does a degree-4 polynomial always have?', options: ['2', '3', '4', 'It varies'], correctIndex: 2, explanation: 'By the Fundamental Theorem of Algebra, a polynomial of degree n has exactly n zeros (counting multiplicity) in the complex number system.', partNumber: 2, partTitle: 'Polynomial Functions' },

  // Part 3: Rational Expressions
  { id: 'alg2-ent-3a', question: 'Simplify: (x² − 4) / (x − 2)', options: ['x + 2', 'x − 2', 'x² + 2', '(x + 2)(x − 2)'], correctIndex: 0, explanation: 'Factor the numerator: x² − 4 = (x + 2)(x − 2). Cancel (x − 2): the result is x + 2 (for x ≠ 2).', partNumber: 3, partTitle: 'Rational Expressions' },
  { id: 'alg2-ent-3b', question: 'Which value is excluded from the domain of f(x) = 1/(x + 5)?', options: ['x = 5', 'x = −5', 'x = 0', 'x = 1'], correctIndex: 1, explanation: 'The denominator cannot equal zero: x + 5 ≠ 0 → x ≠ −5. So x = −5 is excluded from the domain.', partNumber: 3, partTitle: 'Rational Expressions' },

  // Part 4: Exponential & Logarithmic Functions
  { id: 'alg2-ent-4a', question: 'Solve for x: 2^x = 64', options: ['x = 4', 'x = 5', 'x = 6', 'x = 8'], correctIndex: 2, explanation: '2⁶ = 64, so x = 6. You can also write log₂(64) = 6.', partNumber: 4, partTitle: 'Exponential & Logarithmic Functions' },
  { id: 'alg2-ent-4b', question: 'Which equation converts the exponential b^y = x into logarithmic form?', options: ['log_b(y) = x', 'log_x(b) = y', 'log_b(x) = y', 'log_y(x) = b'], correctIndex: 2, explanation: 'b^y = x is equivalent to log_b(x) = y. The base stays the base of the log, x becomes the argument, and y is the result.', partNumber: 4, partTitle: 'Exponential & Logarithmic Functions' },

  // Part 5: Radical & Complex Numbers
  { id: 'alg2-ent-5a', question: 'What is i² (where i is the imaginary unit)?', options: ['1', '−1', 'i', '−i'], correctIndex: 1, explanation: 'By definition, i = √(−1), so i² = −1. This is the fundamental property of the imaginary unit.', partNumber: 5, partTitle: 'Radical & Complex Numbers' },
  { id: 'alg2-ent-5b', question: 'Solve: √(2x + 3) = 5', options: ['x = 1', 'x = 11', 'x = 14', 'x = 22'], correctIndex: 1, explanation: 'Square both sides: 2x + 3 = 25. Subtract 3: 2x = 22. Divide by 2: x = 11. Check: √(25) = 5 ✓', partNumber: 5, partTitle: 'Radical & Complex Numbers' },

  // Part 6: Sequences & Series
  { id: 'alg2-ent-6a', question: 'What is the sum of the first 5 terms of the geometric series 1 + 3 + 9 + 27 + 81?', options: ['100', '121', '242', '243'], correctIndex: 1, explanation: 'Sum = a(rⁿ − 1)/(r − 1) = 1(3⁵ − 1)/(3 − 1) = (243 − 1)/2 = 242/2 = 121. Alternatively: 1 + 3 + 9 + 27 + 81 = 121.', partNumber: 6, partTitle: 'Sequences & Series' },
  { id: 'alg2-ent-6b', question: 'In the expansion of (x + y)⁴ using the Binomial Theorem, what is the coefficient of x²y²?', options: ['4', '6', '8', '12'], correctIndex: 1, explanation: 'Use C(4,2) = 4!/(2!2!) = 6. The term with x²y² has coefficient C(4,2) = 6.', partNumber: 6, partTitle: 'Sequences & Series' },

  // Part 7: Review & Applications
  { id: 'alg2-ent-7a', question: 'A population doubles every 10 years. If it starts at 500, which model describes it after t years?', options: ['P(t) = 500t²', 'P(t) = 500 · 2^(t/10)', 'P(t) = 500 + 2t', 'P(t) = 500 · 10^t'], correctIndex: 1, explanation: 'Doubling every 10 years is exponential growth: P(t) = 500 · 2^(t/10). When t = 10: 500 · 2¹ = 1000 ✓', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'alg2-ent-7b', question: 'What is the discriminant of x² + 4x + 5 = 0, and what does it tell you?', options: ['36; two real solutions', '−4; no real solutions', '4; two real solutions', '0; one real solution'], correctIndex: 1, explanation: 'Discriminant = b² − 4ac = 16 − 20 = −4. A negative discriminant means no real solutions (two complex conjugate solutions).', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Quadratic Functions' },
    { partNumber: 2, partTitle: 'Polynomial Functions' },
    { partNumber: 3, partTitle: 'Rational Expressions' },
    { partNumber: 4, partTitle: 'Exponential & Logarithmic Functions' },
    { partNumber: 5, partTitle: 'Radical & Complex Numbers' },
    { partNumber: 6, partTitle: 'Sequences & Series' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
