/**
 * Entrance Quiz — Quadratic Equations (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sqe-ent-1a', question: 'Which expression is equivalent to $x^2 - 9x + 20$?', options: ['$(x - 4)(x - 5)$', '$(x + 4)(x + 5)$', '$(x - 2)(x - 10)$', '$(x - 1)(x - 20)$'], correctIndex: 0, explanation: 'Find two numbers that multiply to 20 and add to $-9$: $-4$ and $-5$. So $x^2 - 9x + 20 = (x - 4)(x - 5)$.', partNumber: 1, partTitle: 'Standard Form and Factoring' },
  { id: 'sqe-ent-1b', question: 'What are the solutions of $x^2 + 3x - 10 = 0$?', options: ['$x = -5$ and $x = 2$', '$x = 5$ and $x = -2$', '$x = 5$ and $x = 2$', '$x = -5$ and $x = -2$'], correctIndex: 0, explanation: 'Factor: $(x + 5)(x - 2) = 0$. By the zero product property, $x = -5$ or $x = 2$. Each factor $x - a$ gives the solution $x = a$.', partNumber: 1, partTitle: 'Standard Form and Factoring' },
  { id: 'sqe-ent-2a', question: 'What are the solutions of $x^2 - 4x + 1 = 0$?', options: ['$x = 2 \\pm \\sqrt{3}$', '$x = -2 \\pm \\sqrt{3}$', '$x = 2 \\pm 2\\sqrt{3}$', '$x = 4 \\pm \\sqrt{3}$'], correctIndex: 0, explanation: 'Quadratic formula: $x = \\dfrac{4 \\pm \\sqrt{16 - 4}}{2} = \\dfrac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$. ($2 \\pm 2\\sqrt{3}$ divides only the 4 by 2.)', partNumber: 2, partTitle: 'The Quadratic Formula & Discriminant' },
  { id: 'sqe-ent-2b', question: 'Which equation has no real solutions?', options: ['$x^2 - 5x + 6 = 0$', '$x^2 + 2x - 3 = 0$', '$x^2 + x + 1 = 0$', '$x^2 - 4 = 0$'], correctIndex: 2, explanation: 'Check the discriminant $b^2 - 4ac$: for $x^2 + x + 1$ it is $1 - 4 = -3 < 0$, so there are no real solutions. The others have discriminants 1, 16, and 16.', partNumber: 2, partTitle: 'The Quadratic Formula & Discriminant' },
  { id: 'sqe-ent-3a', question: 'What is the vertex of the graph of $y = (x - 3)^2 + 5$?', options: ['$(-3, 5)$', '$(3, -5)$', '$(3, 5)$', '$(5, 3)$'], correctIndex: 2, explanation: 'Vertex form $y = a(x - h)^2 + k$ has vertex $(h, k)$. Here $h = 3$ and $k = 5$.', partNumber: 3, partTitle: 'Vertex Form and Completing the Square' },
  { id: 'sqe-ent-3b', question: 'Which expression is equivalent to $x^2 + 8x + 3$?', options: ['$(x + 4)^2 - 13$', '$(x + 4)^2 + 3$', '$(x + 8)^2 - 61$', '$(x - 4)^2 - 13$'], correctIndex: 0, explanation: 'Complete the square: half of 8 is 4, and $4^2 = 16$. So $x^2 + 8x + 3 = (x^2 + 8x + 16) - 16 + 3 = (x + 4)^2 - 13$.', partNumber: 3, partTitle: 'Vertex Form and Completing the Square' },
  { id: 'sqe-ent-4a', question: 'What is the axis of symmetry of the graph of $y = 2x^2 - 12x + 7$?', options: ['$x = 3$', '$x = -3$', '$x = 6$', '$x = 12$'], correctIndex: 0, explanation: 'The axis of symmetry is $x = -\\dfrac{b}{2a} = -\\dfrac{-12}{2(2)} = 3$. ($x = 6$ forgets the factor $a = 2$ in the denominator.)', partNumber: 4, partTitle: 'Graphing Parabolas' },
  { id: 'sqe-ent-4b', question: 'A parabola passes through the points $(-2, 5)$ and $(6, 5)$. What is the $x$-coordinate of its vertex?', options: ['$2$', '$4$', '$-4$', '$8$'], correctIndex: 0, explanation: 'Points with the same $y$-value are mirror images across the axis of symmetry, so the vertex lies midway: $\\dfrac{-2 + 6}{2} = 2$. (4 is half the distance between the points, not the midpoint.)', partNumber: 4, partTitle: 'Graphing Parabolas' },
  { id: 'sqe-ent-5a', question: 'A ball\'s height, in feet, $t$ seconds after it is thrown is $h(t) = -16t^2 + 32t + 6$. What is the maximum height of the ball?', options: ['6 feet', '22 feet', '32 feet', '38 feet'], correctIndex: 1, explanation: 'The maximum occurs at the vertex, $t = -\\dfrac{32}{2(-16)} = 1$. Then $h(1) = -16 + 32 + 6 = 22$ feet. (6 feet is the starting height.)', partNumber: 5, partTitle: 'Quadratic Word Problems' },
  { id: 'sqe-ent-5b', question: 'A rectangle\'s length is 3 units more than its width, and its area is 70 square units. What is its width?', options: ['5', '7', '10', '14'], correctIndex: 1, explanation: '$w(w + 3) = 70$, so $w^2 + 3w - 70 = 0$ and $(w + 10)(w - 7) = 0$. Width cannot be negative, so $w = 7$ (and the length is 10).', partNumber: 5, partTitle: 'Quadratic Word Problems' },
  { id: 'sqe-ent-6a', question: 'What are the $x$-coordinates of the points where $y = x^2 - 4$ and $y = x + 2$ intersect?', options: ['$x = -2$ and $x = 3$', '$x = 2$ and $x = -3$', '$x = -2$ and $x = 2$', '$x = 3$ and $x = 6$'], correctIndex: 0, explanation: 'Set the expressions equal: $x^2 - 4 = x + 2$, so $x^2 - x - 6 = 0$ and $(x - 3)(x + 2) = 0$. The graphs meet at $x = 3$ and $x = -2$.', partNumber: 6, partTitle: 'Quadratic Systems and Intersections' },
  { id: 'sqe-ent-6b', question: 'For what value of $k$ does the line $y = 2x + k$ intersect the parabola $y = x^2$ at exactly one point?', options: ['$-1$', '$0$', '$1$', '$-4$'], correctIndex: 0, explanation: 'Set $x^2 = 2x + k$, so $x^2 - 2x - k = 0$. Exactly one intersection means the discriminant is zero: $4 + 4k = 0$, so $k = -1$.', partNumber: 6, partTitle: 'Quadratic Systems and Intersections' },
  { id: 'sqe-ent-7a', question: 'What is the sum of the solutions of $2x^2 - 10x + 3 = 0$?', options: ['$5$', '$-5$', '$10$', '$\\frac{3}{2}$'], correctIndex: 0, explanation: 'For $ax^2 + bx + c = 0$, the sum of the solutions is $-\\dfrac{b}{a} = -\\dfrac{-10}{2} = 5$. ($\\frac{3}{2}$ is the product, $\\frac{c}{a}$.)', partNumber: 7, partTitle: 'Review & Hard Problems' },
  { id: 'sqe-ent-7b', question: 'One solution of $x^2 + kx - 12 = 0$ is $x = 3$. What is the value of $k$?', options: ['$-1$', '$0$', '$1$', '$4$'], correctIndex: 2, explanation: 'Substitute $x = 3$: $9 + 3k - 12 = 0$, so $3k = 3$ and $k = 1$. Check: $x^2 + x - 12 = (x + 4)(x - 3)$.', partNumber: 7, partTitle: 'Review & Hard Problems' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Standard Form and Factoring' },
    { partNumber: 2, partTitle: 'The Quadratic Formula & Discriminant' },
    { partNumber: 3, partTitle: 'Vertex Form and Completing the Square' },
    { partNumber: 4, partTitle: 'Graphing Parabolas' },
    { partNumber: 5, partTitle: 'Quadratic Word Problems' },
    { partNumber: 6, partTitle: 'Quadratic Systems and Intersections' },
    { partNumber: 7, partTitle: 'Review & Hard Problems' },
  ]
}
