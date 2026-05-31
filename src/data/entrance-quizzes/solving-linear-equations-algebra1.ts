/**
 * Entrance Quiz — Solving Linear Equations (Algebra 1)
 * 10 questions · 5 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — One-Step Equations
  { id: 'sleq-ent-1a', question: 'Solve for x: x + 7 = 12', options: ['x = 5', 'x = 7', 'x = 12', 'x = 19'], correctIndex: 0, explanation: 'Subtract 7 from both sides: x = 12 − 7 = 5.', partNumber: 1, partTitle: 'One-Step Equations' },
  { id: 'sleq-ent-1b', question: 'Solve for x: 4x = 20', options: ['x = 4', 'x = 5', 'x = 16', 'x = 24'], correctIndex: 1, explanation: 'Divide both sides by 4: x = 20 / 4 = 5.', partNumber: 1, partTitle: 'One-Step Equations' },

  // Part 2 — Two-Step Equations
  { id: 'sleq-ent-2a', question: 'Solve for x: 2x + 3 = 11', options: ['x = 3', 'x = 4', 'x = 5', 'x = 7'], correctIndex: 1, explanation: 'Subtract 3: 2x = 8. Divide by 2: x = 4.', partNumber: 2, partTitle: 'Two-Step Equations' },
  { id: 'sleq-ent-2b', question: 'Solve for x: $\\frac{x}{3} - 4 = 2$', options: ['x = 6', 'x = 12', 'x = 18', 'x = 24'], correctIndex: 2, explanation: 'Add 4: x/3 = 6. Multiply by 3: x = 18.', partNumber: 2, partTitle: 'Two-Step Equations' },

  // Part 3 — Multi-Step Equations
  { id: 'sleq-ent-3a', question: 'Solve for x: 3(x − 4) = 15', options: ['x = 1', 'x = 5', 'x = 9', 'x = 11'], correctIndex: 2, explanation: 'Distribute: 3x − 12 = 15. Add 12: 3x = 27. Divide by 3: x = 9.', partNumber: 3, partTitle: 'Multi-Step Equations' },
  { id: 'sleq-ent-3b', question: 'Solve for x: 5x − 2 = 2x + 13', options: ['x = 3', 'x = 5', 'x = 11/3', 'x = 7'], correctIndex: 1, explanation: 'Subtract 2x: 3x − 2 = 13. Add 2: 3x = 15. Divide: x = 5.', partNumber: 3, partTitle: 'Multi-Step Equations' },

  // Part 4 — Special Cases
  { id: 'sleq-ent-4a', question: 'Solve: 2(x + 3) = 2x + 6', options: ['x = 0', 'x = 3', 'No solution', 'Infinitely many solutions'], correctIndex: 3, explanation: 'Distribute: 2x + 6 = 2x + 6. The equation is always true → infinitely many solutions (an identity).', partNumber: 4, partTitle: 'Special Cases' },
  { id: 'sleq-ent-4b', question: 'Solve: 4x + 5 = 4x − 2', options: ['x = −7/8', 'x = 3/4', 'No solution', 'Infinitely many solutions'], correctIndex: 2, explanation: 'Subtract 4x: 5 = −2, which is false. The equation has no solution.', partNumber: 4, partTitle: 'Special Cases' },

  // Part 5 — Mastery
  { id: 'sleq-ent-5a', question: 'A taxi charges $\\$3$ base plus $\\$0.50$ per mile. If the total cost is $\\$9$, how many miles were driven?', options: ['6 miles', '12 miles', '18 miles', '24 miles'], correctIndex: 1, explanation: '3 + 0.5m = 9 → 0.5m = 6 → m = 12 miles.', partNumber: 5, partTitle: 'Mastery' },
  { id: 'sleq-ent-5b', question: 'Solve for x: $\\frac{2x + 1}{3} = 5$', options: ['x = 2', 'x = 5', 'x = 7', 'x = 8'], correctIndex: 2, explanation: 'Multiply both sides by 3: 2x + 1 = 15. Subtract 1: 2x = 14. Divide: x = 7.', partNumber: 5, partTitle: 'Mastery' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'One-Step Equations' },
    { partNumber: 2, partTitle: 'Two-Step Equations' },
    { partNumber: 3, partTitle: 'Multi-Step Equations' },
    { partNumber: 4, partTitle: 'Special Cases' },
    { partNumber: 5, partTitle: 'Mastery' },
  ]
}
