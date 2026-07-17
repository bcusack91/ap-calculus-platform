/**
 * Entrance Quiz — Intermediate Algebra (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'aia-ent-1a', question: 'In the quadratic formula x = $(-b \\pm \\sqrt{b^{2}-4ac})$ / (2a), what is the expression under the square root called?', options: ['The coefficient', 'The vertex', 'The discriminant', 'The axis of symmetry'], correctIndex: 2, explanation: 'The expression $b^{2}$ − 4ac under the square root in the quadratic formula is called the discriminant.', partNumber: 1, partTitle: 'Quadratic Equations' },
  { id: 'aia-ent-1b', question: 'What are the solutions to $x^{2}$ − 5x + 6 = 0?', options: ['x = 1 or x = 6', 'x = 2 or x = 3', 'x = −2 or x = −3', 'x = −1 or x = −6'], correctIndex: 1, explanation: 'Factor: $x^{2}$ − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3.', partNumber: 1, partTitle: 'Quadratic Equations' },
  { id: 'aia-ent-2a', question: 'What is the product (x + 3)(x − 2)?', options: ['$x^{2}$ + x − 6', '$x^{2}$ − x − 6', '$x^{2}$ + 5x − 6', '$x^{2}$ − 5x + 6'], correctIndex: 0, explanation: 'Using FOIL: x·x + x·(−2) + 3·x + 3·(−2) = $x^{2}$ − 2x + 3x − 6 = $x^{2}$ + x − 6.', partNumber: 2, partTitle: 'Polynomial Operations' },
  { id: 'aia-ent-2b', question: 'What is the factored form of $6x^{3}$ + $9x^{2}$?', options: ['$3x(2x^{2} + 3x)$', '$3x^{2}(2x + 3)$', '$6x^{2}(x + 3)$', '$9x(x^{2} + 1)$'], correctIndex: 1, explanation: 'Factor out the GCF of $3x^{2}$: $6x^{3}$ + $9x^{2}$ = $3x^{2}(2x + 3)$.', partNumber: 2, partTitle: 'Polynomial Operations' },
  { id: 'aia-ent-3a', question: 'What is $\\sqrt{50}$ in simplest radical form?', options: ['$2\\sqrt{5}$', '$5\\sqrt{2}$', '$10\\sqrt{5}$', '$25\\sqrt{2}$'], correctIndex: 1, explanation: '$\\sqrt{50}$ = $\\sqrt{25 \\cdot 2}$ = $\\sqrt{25}$ · $\\sqrt{2}$ = $5\\sqrt{2}$.', partNumber: 3, partTitle: 'Radical Expressions' },
  { id: 'aia-ent-3b', question: 'What is $1/\\sqrt{3}$ after rationalizing the denominator?', options: ['$\\sqrt{3}$', '$\\sqrt{3}/3$', '$3\\sqrt{3}$', '1/3'], correctIndex: 1, explanation: 'Multiply numerator and denominator by $\\sqrt{3}$: $(1\\cdot \\sqrt{3})/(\\sqrt{3}\\cdot \\sqrt{3})$ = $\\sqrt{3}/3$.', partNumber: 3, partTitle: 'Radical Expressions' },
  { id: 'aia-ent-4a', question: 'What is the value of $i^{4}$, where i = $\\sqrt{-1}$?', options: ['i', '−1', '−i', '1'], correctIndex: 3, explanation: 'The powers of i cycle: $i^{1}$ = i, $i^{2}$ = −1, $i^{3}$ = −i, $i^{4}$ = 1, and the pattern repeats.', partNumber: 4, partTitle: 'Complex Numbers' },
  { id: 'aia-ent-4b', question: 'What is the product (3 + 2i)(1 − i)?', options: ['5 − i', '1 − i', '3 − 2i', '5 + i'], correctIndex: 0, explanation: '(3 + 2i)(1 − i) = 3 − 3i + 2i − $2i^{2}$ = 3 − i − 2(−1) = 3 − i + 2 = 5 − i.', partNumber: 4, partTitle: 'Complex Numbers' },
  { id: 'aia-ent-5a', question: 'In an arithmetic sequence, which formula gives the nth term?', options: ['$a_{n}$ = $a_{1}$ · $r^{n-1}$', '$a_{n}$ = $a_{1}$ + (n−1)d', '$a_{n}$ = n · $a_{1}$', '$a_{n}$ = $a_{1}$ / (n−1)'], correctIndex: 1, explanation: 'An arithmetic sequence has a constant difference d. The nth term is $a_{n}$ = $a_{1}$ + (n − 1)d.', partNumber: 5, partTitle: 'Sequences & Patterns' },
  { id: 'aia-ent-5b', question: 'In a geometric sequence, how is each term related to the previous one?', options: ['Each term is a constant amount more', 'Each term is a constant ratio times the previous', 'Each term is the square of the previous', 'Each term alternates in sign'], correctIndex: 1, explanation: 'A geometric sequence has a constant ratio r between consecutive terms: $a_{n}$ = $a_{1}$ · $r^{n-1}$.', partNumber: 5, partTitle: 'Sequences & Patterns' },
  { id: 'aia-ent-6a', question: 'If the discriminant $b^{2}$ − 4ac is negative, how many real solutions does the quadratic equation have?', options: ['Two real solutions', 'One real solution', 'No real solutions (two complex)', 'Infinitely many'], correctIndex: 2, explanation: 'A negative discriminant means the square root of a negative number, resulting in two complex (non-real) solutions.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aia-ent-6b', question: 'What is the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, 11, ...?', options: ['110', '145', '155', '165'], correctIndex: 2, explanation: '$a_{1}$ = 2, d = 3, $a_{10}$ = 2 + 9(3) = 29. Sum = 10(2 + 29)/2 = 10(31)/2 = 155.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aia-ent-7a', question: 'In vertex form y = $a(x - h)^{2}$ + k, what is the vertex of the parabola?', options: ['(a, k)', '(h, k)', '(−h, k)', '(h, −k)'], correctIndex: 1, explanation: 'In vertex form y = $a(x - h)^{2}$ + k, the vertex is at the point (h, k).', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'aia-ent-7b', question: 'Which representations of quadratics should you know for the ACT?', options: ['Only standard form', 'Only factored form', 'Factoring, the quadratic formula, and vertex form', 'Only graphing'], correctIndex: 2, explanation: 'The ACT often tests quadratics — you should know factoring, the quadratic formula, and vertex form.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Quadratic Equations' },
    { partNumber: 2, partTitle: 'Polynomial Operations' },
    { partNumber: 3, partTitle: 'Radical Expressions' },
    { partNumber: 4, partTitle: 'Complex Numbers' },
    { partNumber: 5, partTitle: 'Sequences & Patterns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
