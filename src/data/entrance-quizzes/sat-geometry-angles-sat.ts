/**
 * Entrance Quiz — Geometry & Angles (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sga-ent-1a', question: 'Two angles are supplementary. One angle measures 65°. What is the measure of the other angle?', options: ['25°', '35°', '115°', '125°'], correctIndex: 2, explanation: 'Supplementary angles sum to 180°. 180° − 65° = 115°.', partNumber: 1, partTitle: 'Angle Relationships' },
  { id: 'sga-ent-1b', question: 'Two parallel lines are cut by a transversal. A pair of alternate interior angles measures (3x + 10)° and (5x − 20)°. What is x?', options: ['10', '15', '20', '25'], correctIndex: 1, explanation: 'Alternate interior angles are equal: 3x + 10 = 5x − 20 → 30 = 2x → x = 15.', partNumber: 1, partTitle: 'Angle Relationships' },
  { id: 'sga-ent-2a', question: 'What is the sum of the interior angles of a pentagon?', options: ['360°', '450°', '540°', '720°'], correctIndex: 2, explanation: 'Sum of interior angles of an n-gon = (n − 2) × 180°. For a pentagon: (5 − 2) × 180° = 540°.', partNumber: 2, partTitle: 'Triangle Properties' },
  { id: 'sga-ent-2b', question: 'A triangle has angles 45°, 75°, and x°. What is x?', options: ['50°', '55°', '60°', '65°'], correctIndex: 2, explanation: 'Angles in a triangle sum to 180°: 45 + 75 + x = 180 → x = 60°.', partNumber: 2, partTitle: 'Triangle Properties' },
  { id: 'sga-ent-3a', question: 'A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?', options: ['11', '13', '14', '17'], correctIndex: 1, explanation: 'c² = 5² + 12² = 25 + 144 = 169 → c = 13.', partNumber: 3, partTitle: 'Pythagorean Theorem' },
  { id: 'sga-ent-3b', question: 'A ladder 10 feet long leans against a wall. The base is 6 feet from the wall. How high does the ladder reach?', options: ['4 ft', '6 ft', '8 ft', '10 ft'], correctIndex: 2, explanation: 'h² + 6² = 10² → h² = 100 − 36 = 64 → h = 8 feet.', partNumber: 3, partTitle: 'Pythagorean Theorem' },
  { id: 'sga-ent-4a', question: 'What is the area of a trapezoid with parallel bases of 6 and 10, and height 4?', options: ['32', '40', '48', '60'], correctIndex: 0, explanation: 'Area of trapezoid = ½(b₁ + b₂)h = ½(6 + 10)(4) = ½(16)(4) = 32.', partNumber: 4, partTitle: 'Area & Perimeter' },
  { id: 'sga-ent-4b', question: 'A rectangle has perimeter 34 and length 10. What is its width?', options: ['5', '6', '7', '8'], correctIndex: 2, explanation: 'Perimeter = 2(l + w) → 34 = 2(10 + w) → 17 = 10 + w → w = 7.', partNumber: 4, partTitle: 'Area & Perimeter' },
  { id: 'sga-ent-5a', question: 'A circle has a radius of 7. What is its area? (Use π ≈ 3.14)', options: ['21.98', '43.96', '153.86', '307.72'], correctIndex: 2, explanation: 'Area = πr² = 3.14 × 7² = 3.14 × 49 ≈ 153.86.', partNumber: 5, partTitle: 'Circle Basics' },
  { id: 'sga-ent-5b', question: 'A circle has a circumference of 20π. What is its diameter?', options: ['10', '20', '40', '5'], correctIndex: 1, explanation: 'C = πd → 20π = πd → d = 20.', partNumber: 5, partTitle: 'Circle Basics' },
  { id: 'sga-ent-6a', question: 'Two similar triangles have corresponding sides in the ratio 3:5. If the area of the smaller triangle is 27, what is the area of the larger?', options: ['45', '75', '135', '225'], correctIndex: 1, explanation: 'Area ratio = (3:5)² = 9:25. Area of larger = 27 × (25/9) = 75.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sga-ent-6b', question: 'An isosceles right triangle has legs of length 6. What is the length of the hypotenuse?', options: ['6√2', '6√3', '12', '3√2'], correctIndex: 0, explanation: 'Isosceles right triangle: hypotenuse = leg × √2 = 6√2.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sga-ent-7a', question: 'A square has a diagonal of length 8√2. What is the area of the square?', options: ['32', '64', '128', '256'], correctIndex: 1, explanation: 'For a square with side s, diagonal = s√2. So s√2 = 8√2 → s = 8. Area = 8² = 64.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sga-ent-7b', question: 'In the figure, a right triangle has hypotenuse 17 and one leg 15. What is the area of the triangle?', options: ['60', '64', '75', '127.5'], correctIndex: 0, explanation: 'Find the missing leg: √(17² − 15²) = √(289 − 225) = √64 = 8. Area = ½(15)(8) = 60.', partNumber: 7, partTitle: 'Review & Applications' },
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
