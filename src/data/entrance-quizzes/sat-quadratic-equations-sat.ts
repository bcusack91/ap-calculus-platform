/**
 * Entrance Quiz — Quadratic Equations (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sqe-ent-1a', question: 'Which of the following is a quadratic equation in standard form?', options: ['y = 3x + 2', 'y = $x^{2}$ + 5x − 6', 'y = 2/x', 'y = $\\sqrt{x}$ + 1'], correctIndex: 1, explanation: 'Standard form of a quadratic is $ax^{2}$ + bx + c. Only y = $x^{2}$ + 5x − 6 fits this form.', partNumber: 1, partTitle: 'Quadratic Standard Form' },
  { id: 'sqe-ent-1b', question: 'In the quadratic $ax^{2}$ + bx + c = 0, what is the value of a if the equation is $3x^{2}$ − 4x + 1 = 0?', options: ['−4', '1', '3', '4'], correctIndex: 2, explanation: 'In standard form $ax^{2}$ + bx + c, a is the coefficient of $x^{2}$. Here a = 3.', partNumber: 1, partTitle: 'Quadratic Standard Form' },
  { id: 'sqe-ent-2a', question: 'Factor completely: $x^{2}$ − 9x + 20', options: ['(x − 4)(x − 5)', '(x + 4)(x + 5)', '(x − 2)(x − 10)', '(x − 1)(x − 20)'], correctIndex: 0, explanation: 'Find two numbers that multiply to 20 and add to −9: −4 and −5. So $x^{2}$ − 9x + 20 = (x − 4)(x − 5).', partNumber: 2, partTitle: 'Factoring' },
  { id: 'sqe-ent-2b', question: 'What are the solutions of $x^{2}$ + 3x − 10 = 0?', options: ['x = −5 and x = 2', 'x = 5 and x = −2', 'x = 5 and x = 2', 'x = −5 and x = −2'], correctIndex: 0, explanation: 'Factor: (x + 5)(x − 2) = 0 → x = −5 or x = 2.', partNumber: 2, partTitle: 'Factoring' },
  { id: 'sqe-ent-3a', question: 'Use the quadratic formula to solve $2x^{2}$ − 4x − 6 = 0. What are the solutions?', options: ['x = 1 and x = −3', 'x = 3 and x = −1', 'x = 3 and x = 1', 'x = −3 and x = −1'], correctIndex: 1, explanation: 'Divide by 2: $x^{2}$ − 2x − 3 = 0. x = $(2 \\pm \\sqrt{4+12})/2$ = (2 ± 4)/2. x = 3 or x = −1.', partNumber: 3, partTitle: 'Quadratic Formula' },
  { id: 'sqe-ent-3b', question: 'What is the quadratic formula for $ax^{2}$ + bx + c = 0?', options: ['x = −b ± $\\sqrt{b^{2} - 4ac}$', 'x = (−b ± $\\sqrt{b^{2} - 4ac}$) / (2a)', 'x = (b ± $\\sqrt{b^{2} + 4ac}$) / 2a', 'x = $b^{2}$ − 4ac'], correctIndex: 1, explanation: 'The quadratic formula is x = (−b ± $\\sqrt{b^{2} - 4ac}$) / (2a), which gives the solutions for any quadratic.', partNumber: 3, partTitle: 'Quadratic Formula' },
  { id: 'sqe-ent-4a', question: 'What is the vertex of y = $(x - 3)^{2}$ + 5?', options: ['(−3, 5)', '(3, −5)', '(3, 5)', '(5, 3)'], correctIndex: 2, explanation: 'Vertex form y = $(x - h)^{2}$ + k has vertex (h, k). Here h = 3 and k = 5, so vertex = (3, 5).', partNumber: 4, partTitle: 'Vertex & Intercepts' },
  { id: 'sqe-ent-4b', question: 'The parabola y = $x^{2}$ − 4 has how many x-intercepts?', options: ['Zero', 'One', 'Two', 'Three'], correctIndex: 2, explanation: 'Set y = 0: $x^{2}$ = 4 → x = ±2. There are two x-intercepts at x = 2 and x = −2.', partNumber: 4, partTitle: 'Vertex & Intercepts' },
  { id: 'sqe-ent-5a', question: 'For $x^{2}$ + 6x + 9 = 0, what does the discriminant tell us?', options: ['Two distinct real roots', 'One repeated real root', 'No real roots', 'Two imaginary roots'], correctIndex: 1, explanation: 'Discriminant = $b^{2}$ − 4ac = 36 − 36 = 0. A zero discriminant means one repeated real root.', partNumber: 5, partTitle: 'Discriminant' },
  { id: 'sqe-ent-5b', question: 'For which equation are the roots non-real (complex)?', options: ['$x^{2}$ − 5x + 6 = 0', '$x^{2}$ + 2x − 3 = 0', '$x^{2}$ + x + 1 = 0', '$x^{2}$ − 4 = 0'], correctIndex: 2, explanation: 'Discriminant of $x^{2}$ + x + 1: $b^{2}$ − 4ac = 1 − 4 = −3 < 0. Negative discriminant → no real roots.', partNumber: 5, partTitle: 'Discriminant' },
  { id: 'sqe-ent-6a', question: 'The product of two consecutive integers is 56. What are the integers?', options: ['6 and 7', '7 and 8', '8 and 9', '5 and 6'], correctIndex: 1, explanation: 'Let the integers be n and n+1. n(n+1) = 56 → $n^{2}$ + n − 56 = 0 → (n+8)(n−7) = 0. n = 7, so 7 and 8.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sqe-ent-6b', question: 'A ball is thrown upward with height h(t) = $-16t^{2}$ + 32t + 6. What is the maximum height?', options: ['22 feet', '32 feet', '38 feet', '6 feet'], correctIndex: 0, explanation: 'Vertex at t = −b/(2a) = −32/(−32) = 1. h(1) = −16 + 32 + 6 = 22 feet.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sqe-ent-7a', question: 'Which of the following is equivalent to $x^{2}$ − 6x + 9?', options: ['$(x + 3)^{2}$', '$(x - 3)^{2}$', '(x − 9)(x + 1)', '(x − 3)(x + 3)'], correctIndex: 1, explanation: '$x^{2}$ − 6x + 9 is a perfect square trinomial: $(x - 3)^{2}$ = $x^{2}$ − 6x + 9.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sqe-ent-7b', question: 'If one root of $x^{2}$ + kx − 12 = 0 is x = 3, what is the value of k?', options: ['−1', '0', '1', '4'], correctIndex: 2, explanation: 'Substitute x = 3: 9 + 3k − 12 = 0 → 3k = 3 → k = 1.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Quadratic Standard Form' },
    { partNumber: 2, partTitle: 'Factoring' },
    { partNumber: 3, partTitle: 'Quadratic Formula' },
    { partNumber: 4, partTitle: 'Vertex & Intercepts' },
    { partNumber: 5, partTitle: 'Discriminant' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
