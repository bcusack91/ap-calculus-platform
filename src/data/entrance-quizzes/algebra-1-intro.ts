/**
 * Entrance Quiz — Algebra 1
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Variables & Expressions
  { id: 'alg1-ent-1a', question: 'Simplify: 3x + 5 − x + 2', options: ['2x + 7', '4x + 7', '2x + 3', '4x + 3'], correctIndex: 0, explanation: 'Combine like terms: (3x − x) + (5 + 2) = 2x + 7.', partNumber: 1, partTitle: 'Variables & Expressions' },
  { id: 'alg1-ent-1b', question: 'Evaluate 4a − 2b when a = 3 and b = 5.', options: ['2', '22', '7', '4'], correctIndex: 0, explanation: '4(3) − 2(5) = 12 − 10 = 2.', partNumber: 1, partTitle: 'Variables & Expressions' },

  // Part 2: Solving Linear Equations
  { id: 'alg1-ent-2a', question: 'Solve for x: 2x + 6 = 14', options: ['x = 2', 'x = 4', 'x = 8', 'x = 10'], correctIndex: 1, explanation: 'Subtract 6: 2x = 8. Divide by 2: x = 4.', partNumber: 2, partTitle: 'Solving Linear Equations' },
  { id: 'alg1-ent-2b', question: 'Solve: 3(x − 2) = 9', options: ['x = 1', 'x = 3', 'x = 5', 'x = 7'], correctIndex: 2, explanation: 'Distribute: 3x − 6 = 9. Add 6: 3x = 15. Divide by 3: x = 5.', partNumber: 2, partTitle: 'Solving Linear Equations' },

  // Part 3: Linear Inequalities
  { id: 'alg1-ent-3a', question: 'Solve: −4x < 20. What is the solution?', options: ['x < −5', 'x > −5', 'x < 5', 'x > 5'], correctIndex: 1, explanation: 'Divide both sides by −4 and flip the inequality sign: x > −5.', partNumber: 3, partTitle: 'Linear Inequalities' },
  { id: 'alg1-ent-3b', question: 'Which graph represents x ≥ 3 on a number line?', options: ['An open circle on 3 pointing left', 'A closed circle on 3 pointing right', 'An open circle on 3 pointing right', 'A closed circle on 3 pointing left'], correctIndex: 1, explanation: 'x ≥ 3 includes 3 (closed circle) and all values greater than 3 (arrow pointing right).', partNumber: 3, partTitle: 'Linear Inequalities' },

  // Part 4: Graphing Linear Equations
  { id: 'alg1-ent-4a', question: 'What is the slope of the line passing through (1, 2) and (3, 8)?', options: ['2', '3', '4', '6'], correctIndex: 1, explanation: 'Slope = $(y_{2} - y_{1})/(x_{2} - x_{1})$ = (8 − 2)/(3 − 1) = 6/2 = 3.', partNumber: 4, partTitle: 'Graphing Linear Equations' },
  { id: 'alg1-ent-4b', question: 'What is the y-intercept of y = 2x − 5?', options: ['(0, 2)', '(0, −5)', '(2, 0)', '(−5, 0)'], correctIndex: 1, explanation: 'In y = mx + b, b is the y-intercept. Here b = −5, so the y-intercept is (0, −5).', partNumber: 4, partTitle: 'Graphing Linear Equations' },

  // Part 5: Systems of Equations
  { id: 'alg1-ent-5a', question: 'Solve by substitution: y = 2x and x + y = 9. What is x?', options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'], correctIndex: 1, explanation: 'Substitute y = 2x into x + y = 9: x + 2x = 9 → 3x = 9 → x = 3.', partNumber: 5, partTitle: 'Systems of Equations' },
  { id: 'alg1-ent-5b', question: 'What does it mean graphically when a system of equations has no solution?', options: ['The lines intersect at the origin', 'The lines are parallel (never intersect)', 'The lines are the same line', 'The lines intersect at two points'], correctIndex: 1, explanation: 'A system with no solution means the lines are parallel — they have the same slope but different y-intercepts and never cross.', partNumber: 5, partTitle: 'Systems of Equations' },

  // Part 6: Polynomials & Factoring
  { id: 'alg1-ent-6a', question: 'Factor completely: $x^{2}$ − 9', options: ['$(x - 3)^{2}$', '(x + 3)(x − 3)', '(x − 9)(x + 1)', '(x + 9)(x − 1)'], correctIndex: 1, explanation: '$x^{2}$ − 9 is a difference of squares: $a^{2}$ − $b^{2}$ = (a + b)(a − b), so $x^{2}$ − 9 = (x + 3)(x − 3).', partNumber: 6, partTitle: 'Polynomials & Factoring' },
  { id: 'alg1-ent-6b', question: 'Factor: $x^{2}$ + 5x + 6', options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x + 5)(x + 1)', '(x − 2)(x − 3)'], correctIndex: 1, explanation: 'Find two numbers that multiply to 6 and add to 5: 2 × 3 = 6 and 2 + 3 = 5. So $x^{2}$ + 5x + 6 = (x + 2)(x + 3).', partNumber: 6, partTitle: 'Polynomials & Factoring' },

  // Part 7: Quadratics & Functions Intro
  { id: 'alg1-ent-7a', question: 'What are the solutions to $x^{2}$ − 5x + 6 = 0?', options: ['x = 1 and x = 6', 'x = 2 and x = 3', 'x = −2 and x = −3', 'x = −1 and x = 6'], correctIndex: 1, explanation: 'Factor: (x − 2)(x − 3) = 0. Set each factor to zero: x = 2 or x = 3.', partNumber: 7, partTitle: 'Quadratics & Functions Intro' },
  { id: 'alg1-ent-7b', question: 'For the function f(x) = x + 4, what is the domain?', options: ['Only positive numbers', 'x ≥ 0', 'All real numbers', 'x ≠ 0'], correctIndex: 2, explanation: 'A linear function like f(x) = x + 4 has no restrictions — any real number can be plugged in for x. The domain is all real numbers.', partNumber: 7, partTitle: 'Quadratics & Functions Intro' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Variables & Expressions' },
    { partNumber: 2, partTitle: 'Solving Linear Equations' },
    { partNumber: 3, partTitle: 'Linear Inequalities' },
    { partNumber: 4, partTitle: 'Graphing Linear Equations' },
    { partNumber: 5, partTitle: 'Systems of Equations' },
    { partNumber: 6, partTitle: 'Polynomials & Factoring' },
    { partNumber: 7, partTitle: 'Quadratics & Functions Intro' },
  ]
}
