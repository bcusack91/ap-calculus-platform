/**
 * Entrance Quiz — Circles & Trigonometry (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sct-ent-1a', question: 'What is the center and radius of the circle (x − 3)² + (y + 2)² = 25?', options: ['Center (3, −2), radius 25', 'Center (−3, 2), radius 5', 'Center (3, −2), radius 5', 'Center (3, 2), radius 5'], correctIndex: 2, explanation: 'Standard form (x − h)² + (y − k)² = r². Here h = 3, k = −2, r = √25 = 5. Center (3, −2), radius 5.', partNumber: 1, partTitle: 'Circle Equation' },
  { id: 'sct-ent-1b', question: 'Which equation represents a circle centered at the origin with radius 6?', options: ['x² + y = 36', 'x + y² = 36', 'x² + y² = 6', 'x² + y² = 36'], correctIndex: 3, explanation: 'A circle centered at origin with radius r has equation x² + y² = r². With r = 6, that is x² + y² = 36.', partNumber: 1, partTitle: 'Circle Equation' },
  { id: 'sct-ent-2a', question: 'A circle has radius 9. What is the length of an arc that subtends a central angle of 60°?', options: ['3π', '6π', '9π', '18π'], correctIndex: 0, explanation: 'Arc length = (θ/360°) × 2πr = (60/360) × 2π(9) = (1/6) × 18π = 3π.', partNumber: 2, partTitle: 'Arc & Sector' },
  { id: 'sct-ent-2b', question: 'A circle has a radius of 12. What is the area of a sector with a central angle of 90°?', options: ['9π', '12π', '36π', '144π'], correctIndex: 2, explanation: 'Sector area = (θ/360°) × πr² = (90/360) × π(144) = (1/4)(144π) = 36π.', partNumber: 2, partTitle: 'Arc & Sector' },
  { id: 'sct-ent-3a', question: 'In a right triangle, the side opposite the angle θ has length 4, and the hypotenuse has length 5. What is sin θ?', options: ['3/5', '4/5', '4/3', '5/4'], correctIndex: 1, explanation: 'sin θ = opposite/hypotenuse = 4/5.', partNumber: 3, partTitle: 'Right Triangle Trig' },
  { id: 'sct-ent-3b', question: 'In a right triangle with legs 6 and 8, what is the cosine of the angle opposite the side of length 8?', options: ['3/5', '4/5', '3/4', '5/3'], correctIndex: 0, explanation: 'Hypotenuse = √(36+64) = 10. The angle opposite the side of length 8 has adjacent side = 6. cos θ = 6/10 = 3/5.', partNumber: 3, partTitle: 'Right Triangle Trig' },
  { id: 'sct-ent-4a', question: 'SOH-CAH-TOA: In a right triangle, tan θ = opposite/adjacent. If the opposite side is 7 and adjacent is 24, what is sin θ?', options: ['7/24', '7/25', '24/25', '24/7'], correctIndex: 1, explanation: 'Hypotenuse = √(7² + 24²) = √(49 + 576) = √625 = 25. sin θ = 7/25.', partNumber: 4, partTitle: 'SOH-CAH-TOA' },
  { id: 'sct-ent-4b', question: 'A ladder 20 feet long makes a 30° angle with the ground. How high up the wall does it reach?', options: ['10 feet', '10√3 feet', '20√3 feet', '5 feet'], correctIndex: 0, explanation: 'sin 30° = height/20 → height = 20 × 0.5 = 10 feet.', partNumber: 4, partTitle: 'SOH-CAH-TOA' },
  { id: 'sct-ent-5a', question: 'What is sin 45°?', options: ['√3/2', '1/2', '√2/2', '1'], correctIndex: 2, explanation: 'sin 45° = √2/2 ≈ 0.707. (From the 45-45-90 triangle with legs 1 and hypotenuse √2.)', partNumber: 5, partTitle: 'Trig Ratios & Values' },
  { id: 'sct-ent-5b', question: 'If cos θ = 3/5 in a right triangle, what is tan θ?', options: ['3/4', '4/3', '3/5', '5/4'], correctIndex: 1, explanation: 'cos θ = 3/5 means adjacent = 3 and hypotenuse = 5. Opposite = √(25−9) = 4. tan θ = opposite/adjacent = 4/3.', partNumber: 5, partTitle: 'Trig Ratios & Values' },
  { id: 'sct-ent-6a', question: 'A central angle of 2 radians in a circle of radius 5 corresponds to an arc length of:', options: ['5 units', '10 units', '2π units', 'π units'], correctIndex: 1, explanation: 'Arc length = r × θ (in radians) = 5 × 2 = 10 units.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sct-ent-6b', question: 'A point on a circle is at angle 120° from the positive x-axis. The circle has radius 1. What are the coordinates of that point?', options: ['(1/2, √3/2)', '(−1/2, √3/2)', '(−√3/2, 1/2)', '(√3/2, 1/2)'], correctIndex: 1, explanation: 'At 120°: cos 120° = −1/2 and sin 120° = √3/2. Coordinates: (−1/2, √3/2).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sct-ent-7a', question: 'Two tangent lines are drawn from an external point to a circle. These tangent segments are always:', options: ['Perpendicular to each other', 'Equal in length', 'Parallel to the radius', 'Equal to the diameter'], correctIndex: 1, explanation: 'Tangent segments drawn from the same external point to a circle are always equal in length.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'sct-ent-7b', question: 'In a 30-60-90 triangle, the side opposite 30° has length 5. What is the length of the hypotenuse?', options: ['5√2', '5√3', '10', '10√3'], correctIndex: 2, explanation: 'In a 30-60-90 triangle, the hypotenuse is twice the shorter leg. Hypotenuse = 2 × 5 = 10.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Circle Equation' },
    { partNumber: 2, partTitle: 'Arc & Sector' },
    { partNumber: 3, partTitle: 'Right Triangle Trig' },
    { partNumber: 4, partTitle: 'SOH-CAH-TOA' },
    { partNumber: 5, partTitle: 'Trig Ratios & Values' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
