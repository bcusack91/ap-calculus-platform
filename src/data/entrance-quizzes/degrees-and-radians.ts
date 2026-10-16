/**
 * Entrance Quiz — Degrees and Radians — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Two Ways to Measure an Angle
  {
    id: 'dr-ent-1a',
    question: 'A circle has radius $7$ cm. A central angle of the circle cuts off an arc that is $14$ cm long. What is the measure of the angle?',
    options: ['$14$ radians', '$2$ radians', '$\\frac{1}{2}$ radian', '$28$ radians'],
    correctIndex: 1,
    explanation: 'Radian measure counts how many radius-lengths of arc the angle sweeps: $\\frac{14}{7} = 2$ radians. Multiplying $7 \\cdot 14$ to get $28$ confuses the angle with an arc length.',
    partNumber: 1,
    partTitle: 'Two Ways to Measure an Angle',
  },
  {
    id: 'dr-ent-1b',
    question: 'What fraction of one full revolution is an angle of exactly $1$ radian?',
    options: ['$\\frac{1}{360}$', '$\\frac{1}{\\pi}$', '$\\frac{1}{180}$', '$\\frac{1}{2\\pi}$'],
    correctIndex: 3,
    explanation: 'A full revolution is $2\\pi$ radians, so $1$ radian is $\\frac{1}{2\\pi}$ of a turn (about $57^\\circ$). The fraction $\\frac{1}{360}$ describes one degree, not one radian.',
    partNumber: 1,
    partTitle: 'Two Ways to Measure an Angle',
  },

  // Part 2 — Converting Between Units
  {
    id: 'dr-ent-2a',
    question: 'Convert $252^\\circ$ to radians.',
    options: ['$\\frac{5\\pi}{7}$', '$\\frac{7\\pi}{10}$', '$\\frac{7\\pi}{5}$', '$\\frac{14\\pi}{5}$'],
    correctIndex: 2,
    explanation: '$252^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{252\\pi}{180} = \\frac{7\\pi}{5}$. Dividing by $360$ instead of $180$ gives $\\frac{7\\pi}{10}$, which is only half the angle.',
    partNumber: 2,
    partTitle: 'Converting Between Units',
  },
  {
    id: 'dr-ent-2b',
    question: 'To the nearest degree, how many degrees are in an angle of $3$ radians?',
    options: ['$172^\\circ$', '$540^\\circ$', '$57^\\circ$', '$270^\\circ$'],
    correctIndex: 0,
    explanation: '$3 \\cdot \\frac{180^\\circ}{\\pi} = \\frac{540^\\circ}{\\pi} \\approx 171.9^\\circ$, so about $172^\\circ$. Writing $540^\\circ$ treats $3$ radians as if it were $3\\pi$ radians.',
    partNumber: 2,
    partTitle: 'Converting Between Units',
  },

  // Part 3 — The Special Angles
  {
    id: 'dr-ent-3a',
    question: 'Which radian measure equals $330^\\circ$?',
    options: ['$\\frac{5\\pi}{3}$', '$\\frac{7\\pi}{4}$', '$\\frac{7\\pi}{6}$', '$\\frac{11\\pi}{6}$'],
    correctIndex: 3,
    explanation: '$330^\\circ$ is $11$ steps of $30^\\circ$, and each step is $\\frac{\\pi}{6}$, so $330^\\circ = \\frac{11\\pi}{6}$. The measure $\\frac{5\\pi}{3}$ is $300^\\circ$ and $\\frac{7\\pi}{4}$ is $315^\\circ$.',
    partNumber: 3,
    partTitle: 'The Special Angles',
  },
  {
    id: 'dr-ent-3b',
    question: 'Which of these angles has the greatest measure?',
    options: ['$\\frac{3\\pi}{4}$', '$\\frac{5\\pi}{6}$', '$140^\\circ$', '$\\frac{2\\pi}{3}$'],
    correctIndex: 1,
    explanation: 'In degrees, $\\frac{5\\pi}{6} = 150^\\circ$, $\\frac{3\\pi}{4} = 135^\\circ$ and $\\frac{2\\pi}{3} = 120^\\circ$, so $\\frac{5\\pi}{6}$ beats $140^\\circ$ and the rest.',
    partNumber: 3,
    partTitle: 'The Special Angles',
  },

  // Part 4 — Coterminal Angles & Standard Position
  {
    id: 'dr-ent-4a',
    question: 'What is the smallest positive angle coterminal with $-\\frac{9\\pi}{4}$?',
    options: ['$\\frac{9\\pi}{4}$', '$\\frac{7\\pi}{4}$', '$\\frac{\\pi}{4}$', '$\\frac{3\\pi}{4}$'],
    correctIndex: 1,
    explanation: 'Adding one turn gives $-\\frac{9\\pi}{4} + \\frac{8\\pi}{4} = -\\frac{\\pi}{4}$, still negative; adding a second turn gives $\\frac{7\\pi}{4}$. Dropping the negative sign to get $\\frac{9\\pi}{4}$ reflects the angle instead of rotating it.',
    partNumber: 4,
    partTitle: 'Coterminal Angles & Standard Position',
  },
  {
    id: 'dr-ent-4b',
    question: 'Which pair of angles in standard position is coterminal?',
    options: ['$\\frac{\\pi}{3}$ and $-\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$ and $\\frac{7\\pi}{6}$', '$\\frac{5\\pi}{4}$ and $-\\frac{5\\pi}{4}$', '$\\frac{2\\pi}{3}$ and $-\\frac{4\\pi}{3}$'],
    correctIndex: 3,
    explanation: 'Coterminal angles differ by a multiple of $2\\pi$: $\\frac{2\\pi}{3} - 2\\pi = -\\frac{4\\pi}{3}$. The pair $\\frac{\\pi}{6}$ and $\\frac{7\\pi}{6}$ differ by only $\\pi$, so they point in opposite directions.',
    partNumber: 4,
    partTitle: 'Coterminal Angles & Standard Position',
  },

  // Part 5 — Arc Length and the Meaning of a Radian
  {
    id: 'dr-ent-5a',
    question: 'A circle has radius $18$ cm. What is the length of the arc cut off by a central angle of $40^\\circ$?',
    options: ['$720$ cm', '$4\\pi$ cm', '$2\\pi$ cm', '$8\\pi$ cm'],
    correctIndex: 1,
    explanation: 'Convert first: $40^\\circ = \\frac{2\\pi}{9}$, so $s = r\\theta = 18 \\cdot \\frac{2\\pi}{9} = 4\\pi$ cm. Multiplying $18$ by $40$ uses degrees in $s = r\\theta$, which is not allowed.',
    partNumber: 5,
    partTitle: 'Arc Length and the Meaning of a Radian',
  },
  {
    id: 'dr-ent-5b',
    question: 'A wheel of radius $0.5$ m turns without slipping while $3$ m of rope winds onto its rim. Through what angle, in radians, does the wheel turn?',
    options: ['$1.5$', '$6\\pi$', '$6$', '$\\frac{1}{6}$'],
    correctIndex: 2,
    explanation: 'The rope length is the arc length, so $\\theta = \\frac{s}{r} = \\frac{3}{0.5} = 6$ radians. A radian measure need not contain $\\pi$, and $1.5$ comes from multiplying instead of dividing.',
    partNumber: 5,
    partTitle: 'Arc Length and the Meaning of a Radian',
  },

  // Part 6 — Points on a Circle of Radius r
  {
    id: 'dr-ent-6a',
    question: 'The terminal ray of $\\theta = \\frac{3\\pi}{4}$ meets the circle of radius $8$ centered at the origin at the point $P$. What are the coordinates of $P$?',
    options: ['$(4\\sqrt{2}, -4\\sqrt{2})$', '$(-4\\sqrt{2}, -4\\sqrt{2})$', '$(-8\\sqrt{2}, 8\\sqrt{2})$', '$(-4\\sqrt{2}, 4\\sqrt{2})$'],
    correctIndex: 3,
    explanation: '$P = (8\\cos\\frac{3\\pi}{4}, 8\\sin\\frac{3\\pi}{4}) = \\left(8 \\cdot \\left(-\\frac{\\sqrt{2}}{2}\\right), 8 \\cdot \\frac{\\sqrt{2}}{2}\\right) = (-4\\sqrt{2}, 4\\sqrt{2})$, in Quadrant II as expected.',
    partNumber: 6,
    partTitle: 'Points on a Circle of Radius r',
  },
  {
    id: 'dr-ent-6b',
    question: 'A point starts at $(5, 0)$ and travels $20$ units counterclockwise along the circle of radius $5$ centered at the origin. In which quadrant does it stop?',
    options: ['Quadrant I', 'Quadrant III', 'Quadrant II', 'Quadrant IV'],
    correctIndex: 1,
    explanation: 'It turns through $\\theta = \\frac{20}{5} = 4$ radians, and $\\pi \\approx 3.14 < 4 < \\frac{3\\pi}{2} \\approx 4.71$, so it stops in Quadrant III. Reading $4$ as $4^\\circ$ would wrongly place it in Quadrant I.',
    partNumber: 6,
    partTitle: 'Points on a Circle of Radius r',
  },

  // Part 7 — Mixed Mastery & Exit Quiz
  {
    id: 'dr-ent-7a',
    question: 'A point starts at $(12, 0)$ and travels $8\\pi$ units clockwise along the circle of radius $12$ centered at the origin. Where does it stop?',
    options: ['$(-6, -6\\sqrt{3})$', '$(-6, 6\\sqrt{3})$', '$(-6\\sqrt{3}, -6)$', '$(6, -6\\sqrt{3})$'],
    correctIndex: 0,
    explanation: 'Clockwise travel gives a negative angle: $\\theta = -\\frac{8\\pi}{12} = -\\frac{2\\pi}{3}$. Then $P = (12\\cos(-\\frac{2\\pi}{3}), 12\\sin(-\\frac{2\\pi}{3})) = (-6, -6\\sqrt{3})$; going counterclockwise instead would give $(-6, 6\\sqrt{3})$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
  {
    id: 'dr-ent-7b',
    question: 'An angle in standard position measures $-\\frac{14\\pi}{3}$. On the circle of radius $3$ centered at the origin, what is the length of the counterclockwise arc, less than one full turn, from $(3, 0)$ to the point on the angle\'s terminal side?',
    options: ['$-2\\pi$', '$14\\pi$', '$\\frac{4\\pi}{9}$', '$4\\pi$'],
    correctIndex: 3,
    explanation: 'The smallest positive coterminal angle is $-\\frac{14\\pi}{3} + 6\\pi = \\frac{4\\pi}{3}$, so the arc is $s = 3 \\cdot \\frac{4\\pi}{3} = 4\\pi$. Using the original $\\frac{14\\pi}{3}$ gives $14\\pi$, which wraps around more than twice.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Two Ways to Measure an Angle' },
    { partNumber: 2, partTitle: 'Converting Between Units' },
    { partNumber: 3, partTitle: 'The Special Angles' },
    { partNumber: 4, partTitle: 'Coterminal Angles & Standard Position' },
    { partNumber: 5, partTitle: 'Arc Length and the Meaning of a Radian' },
    { partNumber: 6, partTitle: 'Points on a Circle of Radius r' },
    { partNumber: 7, partTitle: 'Mixed Mastery & Exit Quiz' },
  ]
}
