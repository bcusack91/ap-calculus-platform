/**
 * Entrance Quiz — Factoring (Algebra 1)
 * 12 questions · 6 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — GCF
  { id: 'fact-ent-1a', question: 'What is the greatest common factor of $6x^2$ and $9x$?', options: ['$3$', '$3x$', '$6x$', '$9x$'], correctIndex: 1, explanation: 'GCF of 6 and 9 is 3; GCF of $x^2$ and $x$ is $x$. So GCF = $3x$.', partNumber: 1, partTitle: 'GCF' },
  { id: 'fact-ent-1b', question: 'Factor out the GCF: $4x^3 - 8x^2 + 12x$', options: ['$2x(2x^2 - 4x + 6)$', '$4x(x^2 - 2x + 3)$', '$4(x^3 - 2x^2 + 3x)$', '$x(4x^2 - 8x + 12)$'], correctIndex: 1, explanation: 'GCF is $4x$. Dividing each term: $4x(x^2 − 2x + 3)$.', partNumber: 1, partTitle: 'GCF' },

  // Part 2 — Difference of Squares
  { id: 'fact-ent-2a', question: 'Factor: $x^2 - 25$', options: ['$(x - 5)^2$', '$(x + 5)^2$', '$(x - 5)(x + 5)$', '$(x - 25)(x + 1)$'], correctIndex: 2, explanation: 'Difference of squares: $a^2 − b^2 = (a − b)(a + b)$. Here $a = x, b = 5$.', partNumber: 2, partTitle: 'Difference of Squares' },
  { id: 'fact-ent-2b', question: 'Factor: $4x^2 - 49$', options: ['$(2x - 7)(2x + 7)$', '$(4x - 7)(x + 7)$', '$(2x - 49)(2x + 1)$', 'Cannot be factored'], correctIndex: 0, explanation: '$(2x)^2 − 7^2 = (2x − 7)(2x + 7)$.', partNumber: 2, partTitle: 'Difference of Squares' },

  // Part 3 — Simple Trinomials
  { id: 'fact-ent-3a', question: 'Factor: $x^2 + 7x + 12$', options: ['$(x + 1)(x + 12)$', '$(x + 2)(x + 6)$', '$(x + 3)(x + 4)$', '$(x + 6)(x + 2)$'], correctIndex: 2, explanation: 'Find two numbers multiplying to 12 and summing to 7: 3 and 4. So $(x + 3)(x + 4)$.', partNumber: 3, partTitle: 'Simple Trinomials' },
  { id: 'fact-ent-3b', question: 'Factor: $x^2 - 5x + 6$', options: ['$(x - 1)(x - 6)$', '$(x - 2)(x - 3)$', '$(x + 2)(x - 3)$', '$(x + 1)(x - 6)$'], correctIndex: 1, explanation: 'Two numbers that multiply to +6 and sum to −5: −2 and −3. So $(x − 2)(x − 3)$.', partNumber: 3, partTitle: 'Simple Trinomials' },

  // Part 4 — Complex Trinomials
  { id: 'fact-ent-4a', question: 'Factor: $2x^2 + 7x + 3$', options: ['$(2x + 1)(x + 3)$', '$(2x + 3)(x + 1)$', '$(x + 1)(x + 6)$', '$(2x - 1)(x - 3)$'], correctIndex: 0, explanation: 'Look for $(2x + a)(x + b)$ with $ab = 3, a + 2b = 7$. Try $a = 1, b = 3$: $(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 ✓$.', partNumber: 4, partTitle: 'Complex Trinomials' },
  { id: 'fact-ent-4b', question: 'Factor: $3x^2 - 10x + 8$', options: ['$(3x - 4)(x - 2)$', '$(3x - 2)(x - 4)$', '$(3x + 4)(x - 2)$', '$(x - 4)(3x + 2)$'], correctIndex: 0, explanation: '$(3x − 4)(x − 2) = 3x^2 − 6x − 4x + 8 = 3x^2 − 10x + 8 ✓$.', partNumber: 4, partTitle: 'Complex Trinomials' },

  // Part 5 — Special Patterns
  { id: 'fact-ent-5a', question: 'Factor as a perfect square: $x^2 + 10x + 25$', options: ['$(x + 5)^2$', '$(x - 5)^2$', '$(x + 25)(x + 1)$', '$(x + 5)(x + 25)$'], correctIndex: 0, explanation: '$x^2 + 2(5)x + 5^2 = (x + 5)^2$.', partNumber: 5, partTitle: 'Special Patterns' },
  { id: 'fact-ent-5b', question: 'Factor: $9x^2 - 12x + 4$', options: ['$(3x - 2)^2$', '$(3x + 2)^2$', '$(3x - 2)(3x + 2)$', '$(9x - 4)(x - 1)$'], correctIndex: 0, explanation: '$(3x)^2 − 2(3x)(2) + 2^2 = (3x − 2)^2$.', partNumber: 5, partTitle: 'Special Patterns' },

  // Part 6 — Mixed Practice
  { id: 'fact-ent-6a', question: 'Factor completely: $2x^3 - 18x$', options: ['$2x(x^2 - 9)$', '$2x(x - 3)(x + 3)$', '$x(2x - 6)(x + 3)$', '$(2x - 9)(x^2 + 1)$'], correctIndex: 1, explanation: 'Factor out GCF $2x$: $2x(x^2 − 9)$. Then difference of squares: $2x(x − 3)(x + 3)$.', partNumber: 6, partTitle: 'Mixed Practice' },
  { id: 'fact-ent-6b', question: 'Solve by factoring: $x^2 - 5x - 14 = 0$', options: ['x = 2 and x = 7', 'x = −2 and x = 7', 'x = −7 and x = 2', 'x = −2 and x = −7'], correctIndex: 1, explanation: 'Factor: $(x − 7)(x + 2) = 0$. So x = 7 or x = −2.', partNumber: 6, partTitle: 'Mixed Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'GCF' },
    { partNumber: 2, partTitle: 'Difference of Squares' },
    { partNumber: 3, partTitle: 'Simple Trinomials' },
    { partNumber: 4, partTitle: 'Complex Trinomials' },
    { partNumber: 5, partTitle: 'Special Patterns' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
  ]
}
