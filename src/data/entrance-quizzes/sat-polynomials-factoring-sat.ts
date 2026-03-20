/**
 * Entrance Quiz — Polynomials & Factoring (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'spf-ent-1a', question: 'What is the degree of the polynomial 4x³ − 2x² + 7x − 1?', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: 'The degree of a polynomial is the highest power of the variable. Here it is 3.', partNumber: 1, partTitle: 'Polynomial Basics' },
  { id: 'spf-ent-1b', question: 'Add: (3x² + 2x − 5) + (x² − 4x + 3)', options: ['4x² − 2x − 2', '4x² + 6x + 8', '2x² − 2x − 2', '4x² − 2x + 2'], correctIndex: 0, explanation: 'Combine like terms: (3+1)x² + (2−4)x + (−5+3) = 4x² − 2x − 2.', partNumber: 1, partTitle: 'Polynomial Basics' },
  { id: 'spf-ent-2a', question: 'What is the GCF of 12x³y² and 8x²y⁴?', options: ['4x²y²', '4xy', '8x²y²', '12x³y⁴'], correctIndex: 0, explanation: 'GCF of 12 and 8 is 4. GCF of x³ and x² is x². GCF of y² and y⁴ is y². Total GCF = 4x²y².', partNumber: 2, partTitle: 'Factoring GCF' },
  { id: 'spf-ent-2b', question: 'Factor out the GCF: 6x³ − 9x² + 3x', options: ['3x(2x² − 3x + 1)', '3(2x³ − 3x² + x)', 'x(6x² − 9x + 3)', '3x²(2x − 3)'], correctIndex: 0, explanation: 'GCF is 3x. Factor: 3x(2x² − 3x + 1).', partNumber: 2, partTitle: 'Factoring GCF' },
  { id: 'spf-ent-3a', question: 'Factor: x² + 7x + 12', options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x − 3)(x − 4)'], correctIndex: 0, explanation: 'Find two numbers that multiply to 12 and add to 7: 3 and 4. So (x + 3)(x + 4).', partNumber: 3, partTitle: 'Factoring Trinomials' },
  { id: 'spf-ent-3b', question: 'Factor: 2x² + 5x − 3', options: ['(2x − 1)(x + 3)', '(2x + 3)(x − 1)', '(x + 3)(2x − 1)', '(2x − 3)(x + 1)'], correctIndex: 0, explanation: 'Looking for factors of 2x² + 5x − 3: try (2x − 1)(x + 3) = 2x² + 6x − x − 3 = 2x² + 5x − 3. ✓', partNumber: 3, partTitle: 'Factoring Trinomials' },
  { id: 'spf-ent-4a', question: 'Factor: x² − 49', options: ['(x − 7)²', '(x + 7)²', '(x − 7)(x + 7)', '(x − 49)(x + 1)'], correctIndex: 2, explanation: 'Difference of squares: a² − b² = (a − b)(a + b). Here x² − 49 = (x − 7)(x + 7).', partNumber: 4, partTitle: 'Difference of Squares' },
  { id: 'spf-ent-4b', question: 'Which of the following can be factored using difference of squares?', options: ['x² + 16', 'x² − 12', '4x² − 25', 'x² − 2x − 8'], correctIndex: 2, explanation: '4x² − 25 = (2x)² − 5². Both terms are perfect squares, so it factors as (2x − 5)(2x + 5).', partNumber: 4, partTitle: 'Difference of Squares' },
  { id: 'spf-ent-5a', question: 'Divide: (x² − x − 6) ÷ (x − 3)', options: ['x + 2', 'x − 2', 'x + 3', 'x − 3'], correctIndex: 0, explanation: 'Factor numerator: (x − 3)(x + 2). Cancel (x − 3): result is x + 2.', partNumber: 5, partTitle: 'Polynomial Division' },
  { id: 'spf-ent-5b', question: 'If P(x) = x³ − 2x² + x − 2 and (x − 2) is a factor, what is P(2)?', options: ['0', '2', '4', '−2'], correctIndex: 0, explanation: 'By the Factor Theorem, if (x − 2) is a factor of P(x), then P(2) = 0.', partNumber: 5, partTitle: 'Polynomial Division' },
  { id: 'spf-ent-6a', question: 'Multiply: (x + 3)(x² − 3x + 9)', options: ['x³ + 27', 'x³ − 27', 'x³ + 9x + 27', 'x³ − 9x + 27'], correctIndex: 0, explanation: 'This is the sum of cubes pattern: (a + b)(a² − ab + b²) = a³ + b³. Here a=x, b=3: x³ + 27.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'spf-ent-6b', question: 'What are the zeros of P(x) = x³ − 4x?', options: ['x = 0 only', 'x = ±4', 'x = 0, x = 2, x = −2', 'x = ±2 only'], correctIndex: 2, explanation: 'Factor: x(x² − 4) = x(x − 2)(x + 2). Zeros at x = 0, x = 2, and x = −2.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'spf-ent-7a', question: 'Which polynomial has roots at x = 1 and x = −4?', options: ['x² + 3x − 4', 'x² − 3x − 4', 'x² + 5x + 4', 'x² − 5x + 4'], correctIndex: 0, explanation: 'Roots 1 and −4: (x − 1)(x + 4) = x² + 4x − x − 4 = x² + 3x − 4.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'spf-ent-7b', question: 'Expand: (2x − 3)²', options: ['4x² − 9', '4x² + 9', '4x² − 12x + 9', '4x² + 12x − 9'], correctIndex: 2, explanation: '(2x − 3)² = (2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polynomial Basics' },
    { partNumber: 2, partTitle: 'Factoring GCF' },
    { partNumber: 3, partTitle: 'Factoring Trinomials' },
    { partNumber: 4, partTitle: 'Difference of Squares' },
    { partNumber: 5, partTitle: 'Polynomial Division' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
