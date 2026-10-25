/**
 * Entrance Quiz — Area, Volume, Circles and Coordinates (ASVAB Mathematics Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Item ids 'mk-geometry-measurement-ent-<part><a|b>'; partNumber/partTitle match the lesson.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Measurement on the ASVAB: Perimeter and Formulas'
const P2 = 'Area of Polygons and Composite Figures'
const P3 = 'Circles: Circumference and Area'
const P4 = 'Volume and Surface Area'
const P5 = 'The Coordinate Plane: Slope, Midpoint and Distance'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Measurement on the ASVAB: Perimeter and Formulas
  {
    id: 'mk-geometry-measurement-ent-1a',
    question: 'A rectangular sign is 11 inches long and 6 inches wide. What is its perimeter?',
    options: ['66 inches', '17 inches', '34 inches', '28 inches'],
    correctIndex: 2,
    explanation: '$P = 2(11) + 2(6) = 22 + 12 = 34$ inches. $66$ is the area, and $17$ adds only one length and one width.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mk-geometry-measurement-ent-1b',
    question: 'Each side of a regular octagon (8 equal sides) is 5 centimeters. What is its perimeter?',
    options: ['40 centimeters', '25 centimeters', '30 centimeters', '13 centimeters'],
    correctIndex: 0,
    explanation: 'An octagon has 8 sides: $8 \\times 5 = 40$ cm. $25$ is $5^2$, $30$ counts 6 sides, and $13$ adds $8 + 5$.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2 — Area of Polygons and Composite Figures
  {
    id: 'mk-geometry-measurement-ent-2a',
    question: 'A triangle has a base of 8 feet and a height of 11 feet. What is its area?',
    options: ['88 square feet', '44 square feet', '19 square feet', '38 square feet'],
    correctIndex: 1,
    explanation: '$A = \\frac{1}{2}(8)(11) = 4 \\times 11 = 44$ square feet. $88$ forgets the $\\frac{1}{2}$.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mk-geometry-measurement-ent-2b',
    question: 'A rectangular deck is 15 feet by 10 feet. A 5 foot by 4 foot rectangular corner is cut out for a planter. What area of deck remains?',
    options: ['150 square feet', '170 square feet', '20 square feet', '130 square feet'],
    correctIndex: 3,
    explanation: 'Whole deck minus the corner: $15 \\times 10 - 5 \\times 4 = 150 - 20 = 130$ square feet. $170$ adds the corner instead of removing it.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3 — Circles: Circumference and Area
  {
    id: 'mk-geometry-measurement-ent-3a',
    question: 'What is the area of a circle with a radius of 3 meters?',
    options: ['$6\\pi$ square meters', '$3\\pi$ square meters', '$9\\pi$ square meters', '$36\\pi$ square meters'],
    correctIndex: 2,
    explanation: '$A = \\pi r^2 = \\pi(3^2) = 9\\pi$ square meters. $6\\pi$ is the circumference, and $36\\pi$ squares the diameter.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mk-geometry-measurement-ent-3b',
    question: 'A round table has a diameter of 20 inches. What is its circumference?',
    options: ['$20\\pi$ inches', '$40\\pi$ inches', '$100\\pi$ inches', '$10\\pi$ inches'],
    correctIndex: 0,
    explanation: '$C = \\pi d = 20\\pi$ inches. $40\\pi$ uses 20 as the radius in $2\\pi r$, and $100\\pi$ is the area.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4 — Volume and Surface Area
  {
    id: 'mk-geometry-measurement-ent-4a',
    question: 'A storage bin is 5 feet long, 4 feet wide and 2 feet high. What is its volume?',
    options: ['11 cubic feet', '40 cubic feet', '76 cubic feet', '20 cubic feet'],
    correctIndex: 1,
    explanation: '$V = 5 \\times 4 \\times 2 = 40$ cubic feet. $11$ adds the edges, $76$ is the surface area, and $20$ is only the base.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mk-geometry-measurement-ent-4b',
    question: 'A can has a radius of 4 centimeters and a height of 3 centimeters. What is its volume?',
    options: ['$12\\pi$ cubic centimeters', '$24\\pi$ cubic centimeters', '$36\\pi$ cubic centimeters', '$48\\pi$ cubic centimeters'],
    correctIndex: 3,
    explanation: '$V = \\pi r^2 h = \\pi(4^2)(3) = 48\\pi$ cubic cm. $12\\pi$ forgets to square the radius, and $36\\pi$ swaps the radius and height.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5 — The Coordinate Plane: Slope, Midpoint and Distance
  {
    id: 'mk-geometry-measurement-ent-5a',
    question: 'What is the slope of the line through $(0, 4)$ and $(2, 10)$?',
    options: ['$\\frac{1}{3}$', '$3$', '$6$', '$5$'],
    correctIndex: 1,
    explanation: '$m = \\frac{10 - 4}{2 - 0} = \\frac{6}{2} = 3$. $6$ is only the rise, and $\\frac{1}{3}$ is run over rise.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mk-geometry-measurement-ent-5b',
    question: 'What is the midpoint of the segment from $(2, -4)$ to $(10, 8)$?',
    options: ['$(4, 6)$', '$(12, 4)$', '$(6, 2)$', '$(6, 6)$'],
    correctIndex: 2,
    explanation: '$\\left(\\frac{2 + 10}{2}, \\frac{-4 + 8}{2}\\right) = (6, 2)$. $(12, 4)$ forgets to divide by 2, and $(4, 6)$ takes half the differences.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'mk-geometry-measurement-ent-6a',
    question: 'A floor has an area of 90 square feet. What is its area in square yards?',
    options: ['30 square yards', '810 square yards', '45 square yards', '10 square yards'],
    correctIndex: 3,
    explanation: '1 square yard is $3 \\times 3 = 9$ square feet, so $90 \\div 9 = 10$ square yards. Dividing by 3 gives $30$, the classic trap.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mk-geometry-measurement-ent-6b',
    question: 'The length and the width of a rectangle are both multiplied by 5. Its area is multiplied by:',
    options: ['25', '5', '10', '125'],
    correctIndex: 0,
    explanation: 'Area uses two lengths, so it grows by $5 \\times 5 = 25$. $5$ treats area like a length, and $125$ is the growth for a volume.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'mk-geometry-measurement-ent-7a',
    question: 'A square has an area of 100 square meters. What is its perimeter?',
    options: ['25 meters', '400 meters', '40 meters', '10 meters'],
    correctIndex: 2,
    explanation: 'Each side is $\\sqrt{100} = 10$ m, so $P = 4 \\times 10 = 40$ m. $10$ is just one side and $25$ is $100 \\div 4$.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mk-geometry-measurement-ent-7b',
    question: 'What is the distance between the points $(1, -3)$ and $(8, 21)$?',
    options: ['31', '24', '17', '25'],
    correctIndex: 3,
    explanation: 'The legs are $8 - 1 = 7$ and $21 - (-3) = 24$, so $d = \\sqrt{49 + 576} = \\sqrt{625} = 25$ (a 7-24-25 triangle). $31$ adds the legs, and $17$ subtracts them.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
