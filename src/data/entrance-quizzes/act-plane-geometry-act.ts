/**
 * Entrance Quiz — Plane Geometry (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'apg-ent-1a', question: 'Two angles are supplementary. If one angle is 65°, what is the other?', options: ['25°', '65°', '115°', '125°'], correctIndex: 2, explanation: 'Supplementary angles sum to 180°. 180° − 65° = 115°.', partNumber: 1, partTitle: 'Angles and Lines' },
  { id: 'apg-ent-1b', question: 'When two parallel lines are cut by a transversal, alternate interior angles are:', options: ['Supplementary', 'Complementary', 'Equal', 'Unrelated'], correctIndex: 2, explanation: 'When parallel lines are cut by a transversal, alternate interior angles are equal. Vertical angles are also equal.', partNumber: 1, partTitle: 'Angles and Lines' },
  { id: 'apg-ent-2a', question: 'What is the sum of the interior angles of any triangle?', options: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'The sum of the interior angles of any triangle is always 180°.', partNumber: 2, partTitle: 'Triangle Properties' },
  { id: 'apg-ent-2b', question: 'In a right triangle with legs 3 and 4, what is the hypotenuse?', options: ['5', '6', '7', '$\\sqrt{7}$'], correctIndex: 0, explanation: 'By the Pythagorean theorem: $c^{2}$ = $3^{2}$ + $4^{2}$ = 9 + 16 = 25, so c = 5.', partNumber: 2, partTitle: 'Triangle Properties' },
  { id: 'apg-ent-3a', question: 'Which property is true of all parallelograms?', options: ['All angles are 90°', 'All sides are equal', 'Opposite sides are parallel and equal', 'Diagonals are equal'], correctIndex: 2, explanation: 'In a parallelogram, opposite sides are parallel and equal in length, and opposite angles are equal.', partNumber: 3, partTitle: 'Quadrilaterals & Polygons' },
  { id: 'apg-ent-3b', question: 'What is the sum of the interior angles of a hexagon (6-sided polygon)?', options: ['540°', '630°', '720°', '900°'], correctIndex: 2, explanation: 'Sum of interior angles of an n-sided polygon = (n − 2) · 180°. For n = 6: (6 − 2) · 180° = 4 · 180° = 720°.', partNumber: 3, partTitle: 'Quadrilaterals & Polygons' },
  { id: 'apg-ent-4a', question: 'What is the area of a circle with radius 6?', options: ['12π', '36π', '6π', '24π'], correctIndex: 1, explanation: 'Area of a circle = $\\pi r^{2}$ = $\\pi (6^{2})$ = 36π.', partNumber: 4, partTitle: 'Circles' },
  { id: 'apg-ent-4b', question: 'A circle has radius 10. What is the arc length of a 90° sector?', options: ['5π', '10π', '20π', '25π'], correctIndex: 0, explanation: 'Arc length = (central angle / 360°) × 2πr = (90/360) × 2π(10) = (1/4) × 20π = 5π.', partNumber: 4, partTitle: 'Circles' },
  { id: 'apg-ent-5a', question: 'What is the area of a triangle with base 10 and height 7?', options: ['17', '35', '70', '140'], correctIndex: 1, explanation: 'Area of a triangle = ½ × base × height = ½ × 10 × 7 = 35.', partNumber: 5, partTitle: 'Area & Perimeter' },
  { id: 'apg-ent-5b', question: 'What is the area of a trapezoid with parallel bases 8 and 12 and height 5?', options: ['40', '50', '60', '100'], correctIndex: 1, explanation: 'Area of a trapezoid = $\\tfrac{1}{2} (b_{1} + b_{2})$ × h = ½(8 + 12) × 5 = ½(20)(5) = 50.', partNumber: 5, partTitle: 'Area & Perimeter' },
  { id: 'apg-ent-6a', question: 'A circle has radius 5. What is the area of a sector with a central angle of 72°?', options: ['π', '3π', '5π', '10π'], correctIndex: 2, explanation: 'Sector area = (72/360) × $\\pi (5^{2})$ = (1/5) × 25π = 5π.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'apg-ent-6b', question: 'In a 30-60-90 triangle, if the shortest side is 4, what is the hypotenuse?', options: ['$4\\sqrt{2}$', '$4\\sqrt{3}$', '8', '6'], correctIndex: 2, explanation: 'In a 30-60-90 triangle, the sides are x, $x\\sqrt{3}$, 2x. With x = 4, the hypotenuse = 2(4) = 8.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'apg-ent-7a', question: 'Which special right triangles should you memorize for the ACT?', options: ['30-60-90 only', '45-45-90 only', 'Both 30-60-90 and 45-45-90', 'Neither — they are always given'], correctIndex: 2, explanation: 'Know both special right triangles: 30-60-90 (sides x, $x\\sqrt{3}$, 2x) and 45-45-90 (sides x, x, $x\\sqrt{2}$). They save time on the ACT.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'apg-ent-7b', question: 'What is a helpful strategy when solving ACT geometry problems with figures?', options: ['Ignore the figure and only use the numbers', 'Always label diagrams and write known information', 'Assume all figures are drawn to scale', 'Only use formulas from memory'], correctIndex: 1, explanation: 'Always label diagrams and write known information on them — visualization helps you identify relationships and avoid mistakes.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angles and Lines' },
    { partNumber: 2, partTitle: 'Triangle Properties' },
    { partNumber: 3, partTitle: 'Quadrilaterals & Polygons' },
    { partNumber: 4, partTitle: 'Circles' },
    { partNumber: 5, partTitle: 'Area & Perimeter' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
