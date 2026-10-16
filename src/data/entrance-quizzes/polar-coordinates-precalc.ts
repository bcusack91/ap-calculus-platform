/**
 * Entrance Quiz — Polar Coordinates — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Polar Coordinate System
  {
    id: 'pcp-ent-1a',
    question: 'Convert the rectangular point $\\left(-2\\sqrt{3}, -2\\right)$ to polar coordinates $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$.',
    options: ['$\\left(4, \\frac{11\\pi}{6}\\right)$', '$\\left(16, \\frac{7\\pi}{6}\\right)$', '$\\left(4, \\frac{7\\pi}{6}\\right)$', '$\\left(-4, \\frac{7\\pi}{6}\\right)$'],
    correctIndex: 2,
    explanation: '$r = \\sqrt{12 + 4} = 4$. Both coordinates are negative, so $\\theta$ is in Quadrant III with reference angle $\\frac{\\pi}{6}$ (since $\\tan\\theta = \\frac{1}{\\sqrt{3}}$): $\\theta = \\frac{7\\pi}{6}$. Writing $16$ forgets the square root, and $\\frac{11\\pi}{6}$ is in Quadrant IV.',
    partNumber: 1,
    partTitle: 'Polar Coordinate System',
  },
  {
    id: 'pcp-ent-1b',
    question: 'Which polar coordinates name the same point as $\\left(3, \\frac{\\pi}{4}\\right)$?',
    options: ['$\\left(-3, \\frac{\\pi}{4}\\right)$', '$\\left(-3, \\frac{5\\pi}{4}\\right)$', '$\\left(3, -\\frac{\\pi}{4}\\right)$', '$\\left(3, \\frac{5\\pi}{4}\\right)$'],
    correctIndex: 1,
    explanation: 'A negative $r$ plots on the ray opposite the angle. The angle $\\frac{5\\pi}{4}$ points into Quadrant III, so $r = -3$ lands $3$ units into Quadrant I along $\\frac{\\pi}{4}$. The point $\\left(-3, \\frac{\\pi}{4}\\right)$ lands in Quadrant III instead.',
    partNumber: 1,
    partTitle: 'Polar Coordinate System',
  },

  // Part 2 — Polar Curves — Basic Shapes
  {
    id: 'pcp-ent-2a',
    question: 'How many petals does the graph of $r = 2\\sin(4\\theta)$ have, and how far from the pole does each petal reach?',
    options: ['$4$ petals, each reaching $2$', '$8$ petals, each reaching $4$', '$8$ petals, each reaching $2$', '$4$ petals, each reaching $8$'],
    correctIndex: 2,
    explanation: 'For $r = a\\sin(n\\theta)$ with $n$ even there are $2n = 8$ petals, and each reaches $|a| = 2$ from the pole. Answering $4$ petals applies the odd-$n$ rule ($n$ petals) to an even $n$.',
    partNumber: 2,
    partTitle: 'Polar Curves — Basic Shapes',
  },
  {
    id: 'pcp-ent-2b',
    question: 'Which describes the graph of $r = 2 - 4\\cos\\theta$?',
    options: ['A circle of diameter $4$', 'A limaçon with an inner loop', 'A cardioid', 'A rose with $4$ petals'],
    correctIndex: 1,
    explanation: 'This is $r = a - b\\cos\\theta$ with $\\frac{a}{b} = \\frac{2}{4} < 1$, so $r$ changes sign and the curve has an inner loop. A cardioid needs $a = b$, and a rose needs $\\cos(n\\theta)$ with no constant term.',
    partNumber: 2,
    partTitle: 'Polar Curves — Basic Shapes',
  },

  // Part 3 — Converting Polar ↔ Rectangular Equations
  {
    id: 'pcp-ent-3a',
    question: 'Which rectangular equation is equivalent to $r = 8\\sin\\theta$?',
    options: ['$x^2 + y^2 = 64$', '$x^2 + y^2 = 8x$', '$x^2 + (y - 8)^2 = 64$', '$x^2 + y^2 = 8y$'],
    correctIndex: 3,
    explanation: 'Multiply by $r$: $r^2 = 8r\\sin\\theta$, so $x^2 + y^2 = 8y$, a circle with center $(0, 4)$ and radius $4$. The equation $x^2 + y^2 = 64$ would be $r = 8$, a circle centered at the pole.',
    partNumber: 3,
    partTitle: 'Converting Polar ↔ Rectangular Equations',
  },
  {
    id: 'pcp-ent-3b',
    question: 'Which polar equation is equivalent to $x^2 + y^2 = 10x$?',
    options: ['$r = 10\\cos\\theta$', '$r^2 = 10\\cos\\theta$', '$r = \\sqrt{10\\cos\\theta}$', '$r = 10r\\cos\\theta$'],
    correctIndex: 0,
    explanation: 'Substitute $r^2 = x^2 + y^2$ and $x = r\\cos\\theta$: $r^2 = 10r\\cos\\theta$. Dividing by $r$ gives $r = 10\\cos\\theta$, which still includes the pole (at $\\theta = \\frac{\\pi}{2}$). Writing $r^2 = 10\\cos\\theta$ replaces $x$ with $\\cos\\theta$ and drops the factor $r$.',
    partNumber: 3,
    partTitle: 'Converting Polar ↔ Rectangular Equations',
  },

  // Part 4 — Graphing Polar Equations by Hand
  {
    id: 'pcp-ent-4a',
    question: 'The graph of $r = 4\\sin(3\\theta)$ is a three-petal rose. About which line or point is it symmetric?',
    options: ['The polar axis', 'The line $\\theta = \\frac{\\pi}{2}$', 'The pole', 'The line $\\theta = \\frac{\\pi}{4}$'],
    correctIndex: 1,
    explanation: 'Replacing $\\theta$ with $\\pi - \\theta$ gives $\\sin(3\\pi - 3\\theta) = \\sin(3\\theta)$, so the equation is unchanged and the graph is symmetric about $\\theta = \\frac{\\pi}{2}$. Its petals point toward $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$ and $\\frac{3\\pi}{2}$, which are not mirrored by the polar axis or the pole.',
    partNumber: 4,
    partTitle: 'Graphing Polar Equations by Hand',
  },
  {
    id: 'pcp-ent-4b',
    question: 'For $r = 2 + 4\\cos\\theta$, find $r$ at $\\theta = \\pi$. In rectangular coordinates, where is that point plotted?',
    options: ['The point $(2, 0)$', 'The point $(-2, 0)$', 'The point $(-6, 0)$', 'The point $(0, -2)$'],
    correctIndex: 0,
    explanation: 'At $\\theta = \\pi$, $r = 2 + 4(-1) = -2$. Then $x = r\\cos\\theta = (-2)(-1) = 2$ and $y = r\\sin\\theta = 0$: a negative $r$ is plotted on the ray opposite $\\theta = \\pi$, giving $(2, 0)$, not $(-2, 0)$.',
    partNumber: 4,
    partTitle: 'Graphing Polar Equations by Hand',
  },

  // Part 5 — Polar Function Graphs and Domain Restrictions
  {
    id: 'pcp-ent-5a',
    question: 'The graph of $r = 1 - 2\\sin\\theta$ is a limaçon with an inner loop. Which interval of $\\theta$ traces exactly the inner loop?',
    options: ['$\\frac{7\\pi}{6} \\le \\theta \\le \\frac{11\\pi}{6}$', '$\\frac{5\\pi}{6} \\le \\theta \\le \\frac{13\\pi}{6}$', '$\\frac{\\pi}{6} \\le \\theta \\le \\frac{5\\pi}{6}$', '$\\frac{2\\pi}{3} \\le \\theta \\le \\frac{4\\pi}{3}$'],
    correctIndex: 2,
    explanation: 'The loop starts and ends at the pole, where $r = 0$: $\\sin\\theta = \\frac{1}{2}$ gives $\\theta = \\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$, and between them $r < 0$. The interval from $\\frac{5\\pi}{6}$ to $\\frac{13\\pi}{6}$, where $r > 0$, traces the outer loop.',
    partNumber: 5,
    partTitle: 'Polar Function Graphs and Domain Restrictions',
  },
  {
    id: 'pcp-ent-5b',
    question: 'Which interval of $\\theta$ traces exactly one complete petal of $r = 3\\cos(2\\theta)$, the petal that lies along the positive $x$-axis?',
    options: ['$0 \\le \\theta \\le \\frac{\\pi}{2}$', '$0 \\le \\theta \\le \\frac{\\pi}{4}$', '$0 \\le \\theta \\le \\pi$', '$-\\frac{\\pi}{4} \\le \\theta \\le \\frac{\\pi}{4}$'],
    correctIndex: 3,
    explanation: 'That petal starts and ends at the pole, where $\\cos(2\\theta) = 0$, at $\\theta = \\pm\\frac{\\pi}{4}$, and reaches $r = 3$ at $\\theta = 0$. The interval $0 \\le \\theta \\le \\frac{\\pi}{4}$ draws only half of it.',
    partNumber: 5,
    partTitle: 'Polar Function Graphs and Domain Restrictions',
  },

  // Part 6 — Polar Rates of Change and Distance from the Origin
  {
    id: 'pcp-ent-6a',
    question: 'On an interval of $\\theta$, a polar function $r = f(\\theta)$ is negative and increasing. Which describes the points of the graph as $\\theta$ increases through the interval?',
    options: ['They move farther from the origin', 'They move closer to the origin', 'They stay the same distance from the origin', 'They move farther from, then closer to, the origin'],
    correctIndex: 1,
    explanation: 'The distance from the origin is $|r|$. A negative value that increases moves toward $0$ (for example from $-3$ to $-1$), so $|r|$ shrinks and the points move closer to the origin.',
    partNumber: 6,
    partTitle: 'Polar Rates of Change and Distance from the Origin',
  },
  {
    id: 'pcp-ent-6b',
    question: 'What is the average rate of change of $r = 3 - 2\\sin\\theta$ with respect to $\\theta$ on the interval $\\frac{\\pi}{2} \\le \\theta \\le \\pi$?',
    options: ['$-\\frac{4}{\\pi}$', '$\\frac{4}{\\pi}$', '$\\frac{\\pi}{4}$', '$2$'],
    correctIndex: 1,
    explanation: '$r\\left(\\frac{\\pi}{2}\\right) = 3 - 2 = 1$ and $r(\\pi) = 3 - 0 = 3$, so the rate is $\\frac{3 - 1}{\\pi - \\frac{\\pi}{2}} = \\frac{2}{\\pi/2} = \\frac{4}{\\pi}$ radius units per radian. The value $2$ is the change in $r$ alone, without dividing by the change in $\\theta$.',
    partNumber: 6,
    partTitle: 'Polar Rates of Change and Distance from the Origin',
  },

  // Part 7 — Review & Applications
  {
    id: 'pcp-ent-7a',
    question: 'Convert the polar point $\\left(-4, \\frac{2\\pi}{3}\\right)$ to rectangular coordinates.',
    options: ['$\\left(-2, 2\\sqrt{3}\\right)$', '$\\left(2\\sqrt{3}, -2\\right)$', '$\\left(2, -2\\sqrt{3}\\right)$', '$\\left(-2\\sqrt{3}, 2\\right)$'],
    correctIndex: 2,
    explanation: '$x = -4\\cos\\frac{2\\pi}{3} = -4\\left(-\\frac{1}{2}\\right) = 2$ and $y = -4\\sin\\frac{2\\pi}{3} = -4 \\cdot \\frac{\\sqrt{3}}{2} = -2\\sqrt{3}$. Using $r = 4$ instead of $-4$ gives $\\left(-2, 2\\sqrt{3}\\right)$, the point on the opposite side of the pole.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'pcp-ent-7b',
    question: 'A polar function $f$ is decreasing on $\\frac{\\pi}{2} \\le \\theta \\le \\pi$, with $f\\left(\\frac{\\pi}{2}\\right) = -2$ and $f(\\pi) = -5$. Which statement is true on this interval?',
    options: ['The average rate of change of $f$ is $-\\frac{6}{\\pi}$, and the points move toward the origin', 'The average rate of change of $f$ is $-\\frac{6}{\\pi}$, and the points move away from the origin', 'The average rate of change of $f$ is $-\\frac{\\pi}{6}$, and the points move away from the origin', 'The average rate of change of $f$ is $-\\frac{3}{\\pi}$, and the points move toward the origin'],
    correctIndex: 1,
    explanation: 'The rate is $\\frac{-5 - (-2)}{\\pi - \\frac{\\pi}{2}} = \\frac{-3}{\\pi/2} = -\\frac{6}{\\pi}$. Because $f$ is negative and decreasing, $|f|$ grows from $2$ to $5$, so the points move away from the origin even though $r$ is decreasing.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polar Coordinate System' },
    { partNumber: 2, partTitle: 'Polar Curves — Basic Shapes' },
    { partNumber: 3, partTitle: 'Converting Polar ↔ Rectangular Equations' },
    { partNumber: 4, partTitle: 'Graphing Polar Equations by Hand' },
    { partNumber: 5, partTitle: 'Polar Function Graphs and Domain Restrictions' },
    { partNumber: 6, partTitle: 'Polar Rates of Change and Distance from the Origin' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
