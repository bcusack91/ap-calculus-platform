/**
 * Entrance Quiz — Geometry & Angles (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sga-ent-1a', question: 'Two angles are supplementary. One angle measures $65^\\circ$. What is the measure of the other angle?', options: ['$25^\\circ$', '$35^\\circ$', '$115^\\circ$', '$125^\\circ$'], correctIndex: 2, explanation: 'Supplementary angles sum to $180^\\circ$. $180^\\circ - 65^\\circ = 115^\\circ$.', partNumber: 1, partTitle: 'Angle Relationships' },
  { id: 'sga-ent-1b', question: 'Two parallel lines are cut by a transversal. A pair of alternate interior angles measures $(3x + 10)^\\circ$ and $(5x - 20)^\\circ$. What is x?', options: ['10', '15', '20', '25'], correctIndex: 1, explanation: 'Alternate interior angles are equal: $3x + 10 = 5x - 20$ → $30 = 2x$ → $x = 15$.', partNumber: 1, partTitle: 'Angle Relationships' },
  { id: 'sga-ent-2a', question: 'What is the sum of the interior angles of a pentagon?', options: ['$360^\\circ$', '$450^\\circ$', '$540^\\circ$', '$720^\\circ$'], correctIndex: 2, explanation: 'Sum of interior angles of an n-gon = $(n - 2) \\times 180^\\circ$. For a pentagon: $(5 - 2) \\times 180^\\circ = 540^\\circ$.', partNumber: 2, partTitle: 'Triangle Properties' },
  { id: 'sga-ent-2b', question: 'A triangle has angles $45^\\circ$, $75^\\circ$, and $x^\\circ$. What is x?', options: ['$50^\\circ$', '$55^\\circ$', '$60^\\circ$', '$65^\\circ$'], correctIndex: 2, explanation: 'Angles in a triangle sum to $180^\\circ$: $45 + 75 + x = 180$ → $x = 60^\\circ$.', partNumber: 2, partTitle: 'Triangle Properties' },
  { id: 'sga-ent-3a', question: 'A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?', options: ['11', '13', '14', '17'], correctIndex: 1, explanation: '$c^{2}$ = $5^{2}$ + $12^{2}$ = 25 + 144 = 169 → c = 13.', partNumber: 3, partTitle: 'Pythagorean Theorem' },
  { id: 'sga-ent-3b', question: 'A ladder 10 feet long leans against a wall. The base is 6 feet from the wall. How high does the ladder reach?', options: ['4 ft', '6 ft', '8 ft', '10 ft'], correctIndex: 2, explanation: '$h^{2}$ + $6^{2}$ = $10^{2}$ → $h^{2} = 100 - 36 = 64$ → h = 8 feet.', partNumber: 3, partTitle: 'Pythagorean Theorem' },
  { id: 'sga-ent-4a', question: 'What is the area of a trapezoid with parallel bases of 6 and 10, and height 4?', options: ['32', '40', '48', '60'], correctIndex: 0, explanation: 'Area of trapezoid = $\\tfrac{1}{2} (b_{1} + b_{2})h$ = $\\frac{1}{2}(6 + 10)(4) = \\frac{1}{2}(16)(4) = 32$.', partNumber: 4, partTitle: 'Area & Perimeter' },
  { id: 'sga-ent-4b', question: 'A rectangle has perimeter 34 and length 10. What is its width?', options: ['5', '6', '7', '8'], correctIndex: 2, explanation: 'Perimeter = 2(l + w) → 34 = 2(10 + w) → 17 = 10 + w → w = 7.', partNumber: 4, partTitle: 'Area & Perimeter' },
  { id: 'sga-ent-5a', question: 'A circle has a radius of 7. What is its area? (Use $\\pi \\approx 3.14$)', options: ['21.98', '43.96', '153.86', '307.72'], correctIndex: 2, explanation: 'Area = $\\pi r^{2}$ = $3.14 \\times 7^{2} = 3.14 \\times 49 \\approx 153.86$.', partNumber: 5, partTitle: 'Circle Basics' },
  { id: 'sga-ent-5b', question: 'A circle has a circumference of $20\\pi$. What is its diameter?', options: ['10', '20', '40', '5'], correctIndex: 1, explanation: '$C = \\pi d$ → $20\\pi = \\pi d$ → $d = 20$.', partNumber: 5, partTitle: 'Circle Basics' },
  { id: 'sga-ent-6a', question: 'Two similar triangles have corresponding sides in the ratio 3:5. If the area of the smaller triangle is 27, what is the area of the larger?', options: ['45', '75', '135', '225'], correctIndex: 1, explanation: 'Area ratio = (3:5)$ {}^{2}$ = 9:25. Area of larger = $27 \\times (25/9) = 75$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sga-ent-6b', question: 'An isosceles right triangle has legs of length 6. What is the length of the hypotenuse?', options: ['$6\\sqrt{2}$', '$6\\sqrt{3}$', '12', '$3\\sqrt{2}$'], correctIndex: 0, explanation: 'Isosceles right triangle: hypotenuse = leg $\\times \\sqrt{2}$ = $6\\sqrt{2}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sga-ent-7a', question: 'A square has a diagonal of length $8\\sqrt{2}$. What is the area of the square?', options: ['32', '64', '128', '256'], correctIndex: 1, explanation: 'For a square with side s, diagonal = $s\\sqrt{2}$. So $s\\sqrt{2}$ = $8\\sqrt{2}$ → s = 8. Area = $8^{2}$ = 64.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sga-ent-7b', question: 'In the figure, a right triangle has hypotenuse 17 and one leg 15. What is the area of the triangle?', options: ['60', '64', '75', '127.5'], correctIndex: 0, explanation: 'Find the missing leg: $\\sqrt{17^{2} - 15^{2}}$ = $\\sqrt{289 - 225}$ = $\\sqrt{64}$ = 8. Area = $\\frac{1}{2}(15)(8) = 60$.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angle Relationships' },
    { partNumber: 2, partTitle: 'Triangle Properties' },
    { partNumber: 3, partTitle: 'Pythagorean Theorem' },
    { partNumber: 4, partTitle: 'Area & Perimeter' },
    { partNumber: 5, partTitle: 'Circle Basics' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
