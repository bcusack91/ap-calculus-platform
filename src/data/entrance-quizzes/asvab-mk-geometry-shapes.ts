/**
 * Entrance Quiz — Angles, Triangles and Polygons (ASVAB Mathematics Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Shape: src/data/entrance-quizzes/function-modeling-precalc.ts. Item ids
 * 'mk-geometry-shapes-ent-<part><a|b>'; partNumber/partTitle match the lesson.
 * Both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Angles on the ASVAB
  {
    id: 'mk-geometry-shapes-ent-1a',
    question: 'What is the complement of a $26^\\circ$ angle?',
    options: ['$154^\\circ$', '$64^\\circ$', '$74^\\circ$', '$36^\\circ$'],
    correctIndex: 1,
    explanation: 'Complementary angles add to $90^\\circ$: $90 - 26 = 64$. $154^\\circ$ is the supplement (using $180^\\circ$).',
    partNumber: 1,
    partTitle: 'Angles on the ASVAB',
  },
  {
    id: 'mk-geometry-shapes-ent-1b',
    question: 'Which angle measure is obtuse?',
    options: ['$45^\\circ$', '$90^\\circ$', '$180^\\circ$', '$95^\\circ$'],
    correctIndex: 3,
    explanation: 'An obtuse angle is between $90^\\circ$ and $180^\\circ$, so $95^\\circ$. $45^\\circ$ is acute, $90^\\circ$ is right and $180^\\circ$ is straight.',
    partNumber: 1,
    partTitle: 'Angles on the ASVAB',
  },
  // Part 2 — Vertical Angles and Parallel Lines
  {
    id: 'mk-geometry-shapes-ent-2a',
    question: 'Two straight lines cross. One of the four angles measures $35^\\circ$. What does an angle next to it (sharing a side) measure?',
    options: ['$145^\\circ$', '$35^\\circ$', '$55^\\circ$', '$325^\\circ$'],
    correctIndex: 0,
    explanation: 'Neighboring angles lie on a straight line, so they add to $180^\\circ$: $180 - 35 = 145$. The angle across from it (vertical) is the one equal to $35^\\circ$.',
    partNumber: 2,
    partTitle: 'Vertical Angles and Parallel Lines',
  },
  {
    id: 'mk-geometry-shapes-ent-2b',
    question: 'Two parallel lines are cut by a transversal. One of a pair of alternate interior angles measures $76^\\circ$. What does the other measure?',
    options: ['$104^\\circ$', '$14^\\circ$', '$76^\\circ$', '$152^\\circ$'],
    correctIndex: 2,
    explanation: 'Alternate interior angles formed by parallel lines are equal, so the other angle is also $76^\\circ$. $104^\\circ$ would be right for same-side interior angles, which add to $180^\\circ$.',
    partNumber: 2,
    partTitle: 'Vertical Angles and Parallel Lines',
  },
  // Part 3 — Triangles: Types, Angle Sums and Side Rules
  {
    id: 'mk-geometry-shapes-ent-3a',
    question: 'Two angles of a triangle measure $35^\\circ$ and $95^\\circ$. What does the third angle measure?',
    options: ['$60^\\circ$', '$50^\\circ$', '$130^\\circ$', '$40^\\circ$'],
    correctIndex: 1,
    explanation: 'The angles of a triangle add to $180^\\circ$: $180 - 35 - 95 = 50$. $130^\\circ$ is the sum of the two given angles.',
    partNumber: 3,
    partTitle: 'Triangles: Types, Angle Sums and Side Rules',
  },
  {
    id: 'mk-geometry-shapes-ent-3b',
    question: 'The two base angles of an isosceles triangle each measure $50^\\circ$. What is the vertex angle?',
    options: ['$50^\\circ$', '$130^\\circ$', '$100^\\circ$', '$80^\\circ$'],
    correctIndex: 3,
    explanation: 'The base angles use $50 + 50 = 100^\\circ$, leaving $180 - 100 = 80^\\circ$ for the vertex angle. $130^\\circ$ subtracts only one base angle.',
    partNumber: 3,
    partTitle: 'Triangles: Types, Angle Sums and Side Rules',
  },
  // Part 4 — The Pythagorean Theorem and Similar Triangles
  {
    id: 'mk-geometry-shapes-ent-4a',
    question: 'A right triangle has legs of $18$ and $24$. How long is the hypotenuse?',
    options: ['$42$', '$36$', '$30$', '$900$'],
    correctIndex: 2,
    explanation: '$18^2 + 24^2 = 324 + 576 = 900$, and $\\sqrt{900} = 30$ (the $3, 4, 5$ triple times $6$). $42$ adds the legs, and $900$ forgets the square root.',
    partNumber: 4,
    partTitle: 'The Pythagorean Theorem and Similar Triangles',
  },
  {
    id: 'mk-geometry-shapes-ent-4b',
    question: 'Two triangles are similar. A side of $3$ in the small triangle matches a side of $7$ in the large one. Another side of the small triangle is $9$. How long is the matching side of the large triangle?',
    options: ['$21$', '$13$', '$18$', '$27$'],
    correctIndex: 0,
    explanation: 'The scale factor is $7 \\div 3$, so the side is $9 \\times \\frac{7}{3} = 21$. $13$ adds the difference ($7 - 3 = 4$) instead of multiplying.',
    partNumber: 4,
    partTitle: 'The Pythagorean Theorem and Similar Triangles',
  },
  // Part 5 — Quadrilaterals and Other Polygons
  {
    id: 'mk-geometry-shapes-ent-5a',
    question: 'Which statement is true of every rhombus?',
    options: ['All four sides are equal', 'All four angles are $90^\\circ$', 'Only one pair of sides is parallel', 'The two diagonals are equal'],
    correctIndex: 0,
    explanation: 'A rhombus is defined by four equal sides. Four right angles describes a rectangle, one pair of parallel sides a trapezoid, and equal diagonals a rectangle.',
    partNumber: 5,
    partTitle: 'Quadrilaterals and Other Polygons',
  },
  {
    id: 'mk-geometry-shapes-ent-5b',
    question: 'What is the sum of the interior angles of a decagon (10 sides)?',
    options: ['$1800^\\circ$', '$1440^\\circ$', '$1260^\\circ$', '$1620^\\circ$'],
    correctIndex: 1,
    explanation: '$(n - 2) \\cdot 180 = 8 \\cdot 180 = 1440$. $1800^\\circ$ comes from $10 \\cdot 180$, forgetting to subtract $2$.',
    partNumber: 5,
    partTitle: 'Quadrilaterals and Other Polygons',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'mk-geometry-shapes-ent-6a',
    question: 'Two parallel lines are cut by a transversal. Two same-side interior angles measure $(3x)^\\circ$ and $(6x)^\\circ$. What is the smaller angle?',
    options: ['$20^\\circ$', '$120^\\circ$', '$60^\\circ$', '$90^\\circ$'],
    correctIndex: 2,
    explanation: 'Same-side interior angles add to $180^\\circ$: $3x + 6x = 180$, so $x = 20$ and the angles are $60^\\circ$ and $120^\\circ$. The smaller is $60^\\circ$; $20$ is $x$, not an angle.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'mk-geometry-shapes-ent-6b',
    question: 'Which set of lengths CANNOT be the sides of a triangle?',
    options: ['$4, 7, 10$', '$5, 6, 10$', '$6, 7, 10$', '$3, 7, 10$'],
    correctIndex: 3,
    explanation: 'For $3, 7, 10$ the two shorter sides add to exactly $10$, so they lie flat: no triangle. In the other sets the two shorter sides add to more than $10$.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'mk-geometry-shapes-ent-7a',
    question: 'What is the measure of each exterior angle of a regular hexagon?',
    options: ['$120^\\circ$', '$60^\\circ$', '$30^\\circ$', '$72^\\circ$'],
    correctIndex: 1,
    explanation: 'Exterior angles of any polygon add to $360^\\circ$, so each is $360 \\div 6 = 60^\\circ$. $120^\\circ$ is the interior angle; $72^\\circ$ belongs to a regular pentagon.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'mk-geometry-shapes-ent-7b',
    question: 'The hypotenuse of a right triangle is $37$ and one leg is $12$. How long is the other leg?',
    options: ['$25$', '$39$', '$49$', '$35$'],
    correctIndex: 3,
    explanation: 'Subtract the squares: $37^2 - 12^2 = 1369 - 144 = 1225$, and $\\sqrt{1225} = 35$. $25$ subtracts the lengths without squaring, and $39$ adds the squares as if $37$ were a leg ($\\sqrt{1513} \\approx 39$).',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angles on the ASVAB' },
    { partNumber: 2, partTitle: 'Vertical Angles and Parallel Lines' },
    { partNumber: 3, partTitle: 'Triangles: Types, Angle Sums and Side Rules' },
    { partNumber: 4, partTitle: 'The Pythagorean Theorem and Similar Triangles' },
    { partNumber: 5, partTitle: 'Quadrilaterals and Other Polygons' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
