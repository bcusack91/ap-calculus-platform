/**
 * Entrance Quiz — Polar Calculus — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Polar Coordinates & Conversions
  {
    id: 'pol-ent-1a',
    question: 'Which polar coordinates $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$ name the Cartesian point $(-\\sqrt{3}, -1)$?',
    options: [
      '$(2, \\frac{\\pi}{6})$',
      '$(2, \\frac{7\\pi}{6})$',
      '$(2, \\frac{5\\pi}{6})$',
      '$(4, \\frac{7\\pi}{6})$',
    ],
    correctIndex: 1,
    explanation: '$r = \\sqrt{3 + 1} = 2$, and the point is in the third quadrant with reference angle $\\frac{\\pi}{6}$, so $\\theta = \\frac{7\\pi}{6}$. The angle $\\frac{\\pi}{6}$ ignores the quadrant, and $r = 4$ forgets the square root.',
    partNumber: 1,
    partTitle: 'Polar Coordinates & Conversions',
  },
  {
    id: 'pol-ent-1b',
    question: 'What curve is given by the polar equation $r = -4\\cos\\theta$?',
    options: [
      'A circle of radius $2$ centered at $(-2, 0)$',
      'A circle of radius $4$ centered at the origin',
      'A circle of radius $2$ centered at $(2, 0)$',
      'A circle of radius $2$ centered at $(0, -2)$',
    ],
    correctIndex: 0,
    explanation: 'Multiply by $r$: $x^2 + y^2 = -4x$, so $(x + 2)^2 + y^2 = 4$. The minus sign moves the center to the negative $x$-axis, and a center on the $y$-axis would come from $\\sin\\theta$.',
    partNumber: 1,
    partTitle: 'Polar Coordinates & Conversions',
  },

  // Part 2 — Graphing Polar Curves & Symmetry
  {
    id: 'pol-ent-2a',
    question: 'For $r = 1 - 2\\sin\\theta$ with $0 \\le \\theta < 2\\pi$, for which $\\theta$ is $r < 0$ (the part that forms the inner loop)?',
    options: [
      '$\\frac{7\\pi}{6}<\\theta<\\frac{11\\pi}{6}$',
      '$0<\\theta<\\pi$',
      '$\\frac{\\pi}{6}<\\theta<\\frac{5\\pi}{6}$',
      '$\\frac{\\pi}{3}<\\theta<\\frac{2\\pi}{3}$',
    ],
    correctIndex: 2,
    explanation: '$r < 0$ exactly when $\\sin\\theta > \\frac{1}{2}$, which is $\\frac{\\pi}{6} < \\theta < \\frac{5\\pi}{6}$. The interval $\\frac{7\\pi}{6}$ to $\\frac{11\\pi}{6}$ is where $\\sin\\theta < -\\frac{1}{2}$, and $\\frac{\\pi}{3}$ to $\\frac{2\\pi}{3}$ uses the cosine values by mistake.',
    partNumber: 2,
    partTitle: 'Graphing Polar Curves & Symmetry',
  },
  {
    id: 'pol-ent-2b',
    question: 'How many petals does $r = 2\\sin(5\\theta)$ have, and on what interval is the whole curve traced exactly once?',
    options: [
      '$10$ petals, traced once on $[0, 2\\pi]$',
      '$5$ petals, traced once on $[0, 2\\pi]$',
      '$10$ petals, traced once on $[0, \\pi]$',
      '$5$ petals, traced once on $[0, \\pi]$',
    ],
    correctIndex: 3,
    explanation: 'With odd $n = 5$ the rose has $5$ petals, and the negative values of $r$ retrace the same petals, so $[0, \\pi]$ traces the curve once and $[0, 2\\pi]$ traces it twice. Doubling to $10$ applies only to even $n$.',
    partNumber: 2,
    partTitle: 'Graphing Polar Curves & Symmetry',
  },

  // Part 3 — Area in Polar Coordinates
  {
    id: 'pol-ent-3a',
    question: 'What is the area enclosed by the limaçon $r = 2 + \\sin\\theta$?',
    options: ['$\\frac{9\\pi}{2}$', '$9\\pi$', '$4\\pi$', '$5\\pi$'],
    correctIndex: 0,
    explanation: '$A = \\frac{1}{2}\\int_0^{2\\pi}(4 + 4\\sin\\theta + \\sin^2\\theta)\\,d\\theta = \\frac{1}{2}(8\\pi + 0 + \\pi) = \\frac{9\\pi}{2}$. Leaving out the $\\frac{1}{2}$ gives $9\\pi$, and dropping the $\\sin^2\\theta$ term gives $4\\pi$.',
    partNumber: 3,
    partTitle: 'Area in Polar Coordinates',
  },
  {
    id: 'pol-ent-3b',
    question: 'What is the area of the region inside $r = 2\\sin\\theta$ and outside $r = 1$?',
    options: [
      '$\\frac{\\pi}{3}-\\frac{\\sqrt{3}}{2}$',
      '$\\frac{\\pi}{3}+\\frac{\\sqrt{3}}{2}$',
      '$\\frac{2\\pi}{3}+\\sqrt{3}$',
      '$\\frac{\\pi}{6}+\\frac{\\sqrt{3}}{4}$',
    ],
    correctIndex: 1,
    explanation: 'The curves meet where $\\sin\\theta = \\frac{1}{2}$, at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$, so $A = \\frac{1}{2}\\int_{\\pi/6}^{5\\pi/6}(4\\sin^2\\theta - 1)\\,d\\theta = \\frac{1}{2}\\left[\\theta - \\sin 2\\theta\\right]_{\\pi/6}^{5\\pi/6} = \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}$. Leaving out the $\\frac{1}{2}$ doubles it, and stopping at $\\frac{\\pi}{2}$ gives half.',
    partNumber: 3,
    partTitle: 'Area in Polar Coordinates',
  },

  // Part 4 — Slopes of Polar Curves
  {
    id: 'pol-ent-4a',
    question: 'What is the slope $\\frac{dy}{dx}$ of the curve $r = 1 + 2\\cos\\theta$ at $\\theta = \\frac{\\pi}{2}$?',
    options: ['$-2$', '$\\frac{1}{2}$', '$2$', '$-\\frac{1}{2}$'],
    correctIndex: 2,
    explanation: 'At $\\theta = \\frac{\\pi}{2}$, $r = 1$ and $\\frac{dr}{d\\theta} = -2$. Then $\\frac{dy}{d\\theta} = r\'\\sin\\theta + r\\cos\\theta = -2$ and $\\frac{dx}{d\\theta} = r\'\\cos\\theta - r\\sin\\theta = -1$, so the slope is $2$. The value $-2$ is $\\frac{dr}{d\\theta}$, not the slope, and $\\frac{1}{2}$ inverts the ratio.',
    partNumber: 4,
    partTitle: 'Slopes of Polar Curves',
  },
  {
    id: 'pol-ent-4b',
    question: 'For the circle $r = 2\\sin\\theta$, at which $\\theta$ in $(0, \\pi)$ is the tangent line horizontal?',
    options: [
      '$\\theta = \\frac{\\pi}{4}$ and $\\theta = \\frac{3\\pi}{4}$',
      '$\\theta = \\frac{\\pi}{6}$ and $\\theta = \\frac{5\\pi}{6}$',
      'There is none in $(0, \\pi)$',
      '$\\theta = \\frac{\\pi}{2}$',
    ],
    correctIndex: 3,
    explanation: 'Here $y = 2\\sin^2\\theta$, so $\\frac{dy}{d\\theta} = 4\\sin\\theta\\cos\\theta = 0$ at $\\theta = \\frac{\\pi}{2}$, where $\\frac{dx}{d\\theta} = 2\\cos 2\\theta = -2 \\ne 0$. The angles $\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$ make $\\frac{dx}{d\\theta} = 0$, which gives vertical tangents.',
    partNumber: 4,
    partTitle: 'Slopes of Polar Curves',
  },

  // Part 5 — Rates of Change on Polar Curves
  {
    id: 'pol-ent-5a',
    question: 'For $r = 3 - 4\\cos\\theta$ at $\\theta = \\frac{\\pi}{6}$, is the point on the curve moving toward or away from the origin as $\\theta$ increases?',
    options: [
      'Toward the origin, since $r < 0$ and $\\frac{dr}{d\\theta} > 0$',
      'Away from the origin, since $\\frac{dr}{d\\theta} > 0$',
      'Away, since $r$ and $\\frac{dr}{d\\theta}$ have opposite signs',
      'Toward the origin, since $r$ is decreasing',
    ],
    correctIndex: 0,
    explanation: 'At $\\frac{\\pi}{6}$, $r = 3 - 2\\sqrt{3} \\approx -0.46$ and $\\frac{dr}{d\\theta} = 4\\sin\\theta = 2$. Opposite signs mean $|r|$ is shrinking, so the point moves toward the origin. A positive $\\frac{dr}{d\\theta}$ alone does not decide it when $r < 0$, and $r$ is increasing here, not decreasing.',
    partNumber: 5,
    partTitle: 'Rates of Change on Polar Curves',
  },
  {
    id: 'pol-ent-5b',
    question: 'For the spiral $r = \\theta^2$, what is $\\frac{dy}{d\\theta}$ at $\\theta = \\pi$?',
    options: ['$2\\pi$', '$\\pi^2$', '$-\\pi^2$', '$-2\\pi$'],
    correctIndex: 2,
    explanation: '$\\frac{dy}{d\\theta} = r\'\\sin\\theta + r\\cos\\theta = 2\\pi(0) + \\pi^2(-1) = -\\pi^2$, so $y$ is decreasing there. The value $2\\pi$ is $\\frac{dr}{d\\theta}$, and $-2\\pi$ is $\\frac{dx}{d\\theta}$.',
    partNumber: 5,
    partTitle: 'Rates of Change on Polar Curves',
  },

  // Part 6 — Problem-Solving Workshop
  {
    id: 'pol-ent-6a',
    question: 'How many distinct points do the curves $r = 1 + \\cos\\theta$ and $r = 3\\cos\\theta$ have in common?',
    options: ['$2$', '$3$', '$1$', '$4$'],
    correctIndex: 1,
    explanation: 'Setting $1 + \\cos\\theta = 3\\cos\\theta$ gives $\\cos\\theta = \\frac{1}{2}$, at $\\theta = \\pm\\frac{\\pi}{3}$. Both curves also pass through the origin, at different values of $\\theta$ ($\\pi$ and $\\frac{\\pi}{2}$), so there are three shared points. Solving only $r_1 = r_2$ misses the origin.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pol-ent-6b',
    question: 'Which integral gives the area inside $r = 3\\cos\\theta$ and outside $r = 1 + \\cos\\theta$?',
    options: [
      '$\\frac{1}{2}\\int_0^{\\pi/3}[9\\cos^2\\theta-(1+\\cos\\theta)^2]\\,d\\theta$',
      '$\\frac{1}{2}\\int_{-\\pi/3}^{\\pi/3}(2\\cos\\theta-1)^2\\,d\\theta$',
      '$\\int_{-\\pi/3}^{\\pi/3}[9\\cos^2\\theta-(1+\\cos\\theta)^2]\\,d\\theta$',
      '$\\frac{1}{2}\\int_{-\\pi/3}^{\\pi/3}[9\\cos^2\\theta-(1+\\cos\\theta)^2]\\,d\\theta$',
    ],
    correctIndex: 3,
    explanation: 'The curves meet at $\\theta = \\pm\\frac{\\pi}{3}$, and between them $3\\cos\\theta$ is the outer curve, so $A = \\frac{1}{2}\\int (r_{\\text{out}}^2 - r_{\\text{in}}^2)\\,d\\theta$ on that interval. Integrating from $0$ covers only half the region (it would need doubling), and squaring the difference of the radii or leaving out the $\\frac{1}{2}$ are the usual errors.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7 — Comprehensive Review
  {
    id: 'pol-ent-7a',
    question: 'What is the total area enclosed by all the petals of $r = 2\\sin(4\\theta)$?',
    options: ['$2\\pi$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{16}$'],
    correctIndex: 0,
    explanation: 'With even $n = 4$ there are $8$ petals, each spanning $\\frac{\\pi}{4}$: one petal has area $\\frac{1}{2}\\int_0^{\\pi/4} 4\\sin^2(4\\theta)\\,d\\theta = \\frac{\\pi}{4}$, so the total is $2\\pi$. Counting only $4$ petals gives $\\frac{\\pi}{2}$, and $\\frac{\\pi}{4}$ is a single petal.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
  {
    id: 'pol-ent-7b',
    question: 'Which integral gives the area of the inner loop of $r = 1 + 2\\cos\\theta$?',
    options: [
      '$\\frac{1}{2}\\int_{4\\pi/3}^{2\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta$',
      '$\\frac{1}{2}\\int_{0}^{2\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta$',
      '$\\frac{1}{2}\\int_{2\\pi/3}^{4\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta$',
      '$\\int_{2\\pi/3}^{4\\pi/3}(1+2\\cos\\theta)\\,d\\theta$',
    ],
    correctIndex: 2,
    explanation: 'The inner loop is traced while $r \\le 0$, from $\\theta = \\frac{2\\pi}{3}$ to $\\frac{4\\pi}{3}$ (where $\\cos\\theta = -\\frac{1}{2}$), and the area formula squares $r$. Reversed limits give a negative value, $0$ to $\\frac{2\\pi}{3}$ covers part of the outer loop, and the last option forgets the $\\frac{1}{2}$ and the square.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polar Coordinates & Conversions' },
    { partNumber: 2, partTitle: 'Graphing Polar Curves & Symmetry' },
    { partNumber: 3, partTitle: 'Area in Polar Coordinates' },
    { partNumber: 4, partTitle: 'Slopes of Polar Curves' },
    { partNumber: 5, partTitle: 'Rates of Change on Polar Curves' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Review' },
  ]
}
