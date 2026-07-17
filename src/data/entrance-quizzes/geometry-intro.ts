/**
 * Entrance Quiz — Geometry
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Triangles & Congruence
  { id: 'geo-ent-1a', question: 'Which congruence postulate can you use if you know two triangles share two sides and the included angle?', options: ['SSS', 'SAS', 'ASA', 'AAS'], correctIndex: 1, explanation: 'SAS (Side-Angle-Side) applies when two sides and the angle between them are congruent. The included angle is key.', partNumber: 1, partTitle: 'Triangles & Congruence' },
  { id: 'geo-ent-1b', question: 'The sum of the interior angles of any triangle is:', options: ['90°', '180°', '270°', '360°'], correctIndex: 1, explanation: 'The Triangle Angle Sum Theorem states that the three interior angles of any triangle always add up to 180°.', partNumber: 1, partTitle: 'Triangles & Congruence' },

  // Part 2: Similarity & Proportions
  { id: 'geo-ent-2a', question: 'Two triangles are similar with a scale factor of 3:1. If a side of the smaller triangle is 5 cm, what is the corresponding side of the larger?', options: ['8 cm', '15 cm', '5 cm', '10 cm'], correctIndex: 1, explanation: 'Scale factor 3:1 means the larger triangle is 3× the smaller. 5 × 3 = 15 cm.', partNumber: 2, partTitle: 'Similarity & Proportions' },
  { id: 'geo-ent-2b', question: 'Which postulate proves two triangles similar if two pairs of corresponding angles are congruent?', options: ['SSS~', 'SAS~', 'AA~', 'ASA~'], correctIndex: 2, explanation: 'AA (Angle-Angle) Similarity Postulate: if two angles of one triangle equal two angles of another, the triangles are similar.', partNumber: 2, partTitle: 'Similarity & Proportions' },

  // Part 3: Right Triangles & Trigonometry
  { id: 'geo-ent-3a', question: 'In a right triangle with legs 3 and 4, what is the hypotenuse?', options: ['5', '6', '7', '$\\sqrt{7}$'], correctIndex: 0, explanation: 'Pythagorean Theorem: $a^{2}$ + $b^{2}$ = $c^{2}$. $3^{2}$ + $4^{2}$ = 9 + 16 = 25. c = $\\sqrt{25}$ = 5.', partNumber: 3, partTitle: 'Right Triangles & Trigonometry' },
  { id: 'geo-ent-3b', question: 'In a 45-45-90 triangle, if the legs are each 1, what is the hypotenuse?', options: ['1', '$\\sqrt{2}$', '2', '$\\sqrt{3}$'], correctIndex: 1, explanation: 'In a 45-45-90 triangle, the hypotenuse = leg × $\\sqrt{2}$. So hypotenuse = 1 × $\\sqrt{2}$ = $\\sqrt{2}$.', partNumber: 3, partTitle: 'Right Triangles & Trigonometry' },

  // Part 4: Circles
  { id: 'geo-ent-4a', question: 'An inscribed angle equals how much of the intercepted arc?', options: ['Equal to the arc', 'Twice the arc', 'Half the arc', 'One-fourth the arc'], correctIndex: 2, explanation: 'Inscribed Angle Theorem: an inscribed angle equals half its intercepted arc. So if the arc is 80°, the inscribed angle is 40°.', partNumber: 4, partTitle: 'Circles' },
  { id: 'geo-ent-4b', question: 'What is the arc length of a 90° arc in a circle with radius 8?', options: ['2π', '4π', '8π', '16π'], correctIndex: 1, explanation: 'Arc length = (θ/360°) × 2πr = (90/360) × 2π(8) = (1/4) × 16π = 4π.', partNumber: 4, partTitle: 'Circles' },

  // Part 5: Area & Perimeter
  { id: 'geo-ent-5a', question: 'What is the area of a trapezoid with bases 6 and 10 and height 4?', options: ['24', '32', '40', '48'], correctIndex: 1, explanation: 'Area of trapezoid = $\\tfrac{1}{2} (b_{1} + b_{2})$ × h = ½(6 + 10) × 4 = ½ × 16 × 4 = 32.', partNumber: 5, partTitle: 'Area & Perimeter' },
  { id: 'geo-ent-5b', question: 'What is the area of a regular hexagon with side length 4? (Area = $(3\\sqrt{3}/2)s^{2}$)', options: ['$24\\sqrt{3}$', '$16\\sqrt{3}$', '$12\\sqrt{3}$', '$8\\sqrt{3}$'], correctIndex: 0, explanation: 'Area = $(3\\sqrt{3}/2)(4^{2})$ = $(3\\sqrt{3}/2)(16)$ = $24\\sqrt{3}$.', partNumber: 5, partTitle: 'Area & Perimeter' },

  // Part 6: Surface Area & Volume
  { id: 'geo-ent-6a', question: 'What is the volume of a cylinder with radius 3 and height 5?', options: ['15π', '30π', '45π', '90π'], correctIndex: 2, explanation: 'Volume of cylinder = $\\pi r^{2}h$ = $\\pi (3^{2})(5)$ = π(9)(5) = 45π.', partNumber: 6, partTitle: 'Surface Area & Volume' },
  { id: 'geo-ent-6b', question: 'A sphere has radius 6. What is its volume? (V = $(4/3)\\pi r^{3}$)', options: ['72π', '144π', '216π', '288π'], correctIndex: 3, explanation: 'V = $(4/3)\\pi (6^{3})$ = (4/3)π(216) = 288π.', partNumber: 6, partTitle: 'Surface Area & Volume' },

  // Part 7: Coordinate Geometry
  { id: 'geo-ent-7a', question: 'What is the midpoint of the segment with endpoints (2, 6) and (8, −2)?', options: ['(3, 2)', '(5, 2)', '(6, 4)', '(10, 4)'], correctIndex: 1, explanation: 'Midpoint = ($(x_{1}+x_{2})/2$, $(y_{1}+y_{2})/2$) = ((2+8)/2, (6+(−2))/2) = (5, 2).', partNumber: 7, partTitle: 'Coordinate Geometry' },
  { id: 'geo-ent-7b', question: 'Two lines are perpendicular. If one has slope 2/3, what is the slope of the other?', options: ['−3/2', '3/2', '−2/3', '2/3'], correctIndex: 0, explanation: 'Perpendicular lines have slopes that are negative reciprocals. The negative reciprocal of 2/3 is −3/2.', partNumber: 7, partTitle: 'Coordinate Geometry' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Triangles & Congruence' },
    { partNumber: 2, partTitle: 'Similarity & Proportions' },
    { partNumber: 3, partTitle: 'Right Triangles & Trigonometry' },
    { partNumber: 4, partTitle: 'Circles' },
    { partNumber: 5, partTitle: 'Area & Perimeter' },
    { partNumber: 6, partTitle: 'Surface Area & Volume' },
    { partNumber: 7, partTitle: 'Coordinate Geometry' },
  ]
}
