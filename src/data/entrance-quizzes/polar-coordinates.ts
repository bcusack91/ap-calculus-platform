/**
 * Entrance Quiz — Polar Coordinates and Graphs — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Locating a Point with (r, θ)
  {
    id: 'pc-ent-1a',
    question: 'Where is the polar point $\\left(3, \\frac{7\\pi}{3}\\right)$ located?',
    options: ['Quadrant I, $3$ units from the pole', 'Quadrant II, $3$ units from the pole', 'Quadrant III, $3$ units from the pole', 'Quadrant IV, $3$ units from the pole'],
    correctIndex: 0,
    explanation: '$\\frac{7\\pi}{3} = 2\\pi + \\frac{\\pi}{3}$, one full turn plus $\\frac{\\pi}{3}$, so the ray points into Quadrant I and the point is $r = 3$ units out along it.',
    partNumber: 1,
    partTitle: 'Locating a Point with (r, θ)',
  },
  {
    id: 'pc-ent-1b',
    question: 'A point lies on the circle $r = 3$ and on the ray $\\theta = \\frac{4\\pi}{3}$. What are its rectangular coordinates?',
    options: ['$\\left(-\\frac{3\\sqrt{3}}{2}, -\\frac{3}{2}\\right)$', '$\\left(-\\frac{3}{2}, -\\frac{3\\sqrt{3}}{2}\\right)$', '$\\left(\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$', '$\\left(-\\frac{3}{2}, \\frac{3\\sqrt{3}}{2}\\right)$'],
    correctIndex: 1,
    explanation: '$x = 3\\cos\\frac{4\\pi}{3} = 3\\left(-\\frac{1}{2}\\right) = -\\frac{3}{2}$ and $y = 3\\sin\\frac{4\\pi}{3} = 3\\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\frac{3\\sqrt{3}}{2}$. Swapping the coordinates gives the point on the ray $\\frac{7\\pi}{6}$ instead.',
    partNumber: 1,
    partTitle: 'Locating a Point with (r, θ)',
  },

  // Part 2 — Non-Uniqueness & Negative r
  {
    id: 'pc-ent-2a',
    question: 'Which name for the point $\\left(-5, \\frac{7\\pi}{4}\\right)$ has $r > 0$ and $0 \\le \\theta < 2\\pi$?',
    options: ['$\\left(5, \\frac{7\\pi}{4}\\right)$', '$\\left(5, \\frac{\\pi}{4}\\right)$', '$\\left(5, \\frac{3\\pi}{4}\\right)$', '$\\left(5, \\frac{11\\pi}{4}\\right)$'],
    correctIndex: 2,
    explanation: 'A negative radius points the opposite way, so $(-5, \\theta) = (5, \\theta - \\pi)$: $\\frac{7\\pi}{4} - \\pi = \\frac{3\\pi}{4}$. The angle $\\frac{11\\pi}{4}$ names the same point but is not in $[0, 2\\pi)$, and $\\frac{\\pi}{4}$ reflects across the polar axis instead of through the pole.',
    partNumber: 2,
    partTitle: 'Non-Uniqueness & Negative r',
  },
  {
    id: 'pc-ent-2b',
    question: 'For any $r \\ne 0$ and any angle $\\theta$, how are the points $(r, \\theta)$ and $(-r, \\theta)$ related?',
    options: ['They are reflections of each other through the pole', 'They are reflections across the $y$-axis', 'They are reflections across the polar axis', 'They are the same point'],
    correctIndex: 0,
    explanation: 'Both lie on the line through the pole at angle $\\theta$, the same distance $|r|$ from the pole but on opposite sides, so each is the other reflected through the pole: $(-r, \\theta) = (r, \\theta + \\pi)$. A reflection across the polar axis would change $\\theta$ to $-\\theta$ instead.',
    partNumber: 2,
    partTitle: 'Non-Uniqueness & Negative r',
  },

  // Part 3 — Converting Between Polar and Rectangular
  {
    id: 'pc-ent-3a',
    question: 'Convert the rectangular point $\\left(-1, -\\sqrt{3}\\right)$ to polar coordinates with $r > 0$ and $0 \\le \\theta < 2\\pi$.',
    options: ['$\\left(4, \\frac{4\\pi}{3}\\right)$', '$\\left(2, \\frac{\\pi}{3}\\right)$', '$\\left(2, \\frac{7\\pi}{6}\\right)$', '$\\left(2, \\frac{4\\pi}{3}\\right)$'],
    correctIndex: 3,
    explanation: '$r = \\sqrt{1 + 3} = 2$, and $\\tan\\theta = \\sqrt{3}$ with both coordinates negative puts $\\theta$ in Quadrant III: $\\theta = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$. Taking $\\arctan\\sqrt{3} = \\frac{\\pi}{3}$ without the quadrant check gives a point in Quadrant I.',
    partNumber: 3,
    partTitle: 'Converting Between Polar and Rectangular',
  },
  {
    id: 'pc-ent-3b',
    question: 'Convert the polar point $\\left(6, -\\frac{\\pi}{6}\\right)$ to rectangular coordinates.',
    options: ['$\\left(3\\sqrt{3}, -3\\right)$', '$\\left(-3\\sqrt{3}, 3\\right)$', '$\\left(3, -3\\sqrt{3}\\right)$', '$\\left(3\\sqrt{3}, 3\\right)$'],
    correctIndex: 0,
    explanation: '$x = 6\\cos\\left(-\\frac{\\pi}{6}\\right) = 6 \\cdot \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}$ and $y = 6\\sin\\left(-\\frac{\\pi}{6}\\right) = 6\\left(-\\frac{1}{2}\\right) = -3$. Cosine is even and sine is odd, so only the $y$-coordinate turns negative.',
    partNumber: 3,
    partTitle: 'Converting Between Polar and Rectangular',
  },

  // Part 4 — Graphing r = f(θ) Point by Point
  {
    id: 'pc-ent-4a',
    question: 'For $r = 3\\cos(2\\theta)$, compute $r$ at $\\theta = \\frac{\\pi}{3}$. Where is that point of the graph plotted?',
    options: ['Quadrant I, $\\frac{3}{2}$ units from the pole', 'Quadrant II, $\\frac{3}{2}$ units from the pole', 'Quadrant III, $\\frac{3}{2}$ units from the pole', 'Quadrant IV, $\\frac{3}{2}$ units from the pole'],
    correctIndex: 2,
    explanation: '$r = 3\\cos\\frac{2\\pi}{3} = -\\frac{3}{2}$. A negative $r$ is plotted on the ray opposite $\\frac{\\pi}{3}$, which is $\\frac{4\\pi}{3}$ in Quadrant III, at distance $\\frac{3}{2}$. Plotting it along $\\frac{\\pi}{3}$ in Quadrant I ignores the sign of $r$.',
    partNumber: 4,
    partTitle: 'Graphing r = f(θ) Point by Point',
  },
  {
    id: 'pc-ent-4b',
    question: 'A student builds a table of values for $r = 2 - 2\\sin\\theta$. Which entry is correct?',
    options: ['$\\theta = \\frac{\\pi}{2}$, $r = 4$', '$\\theta = \\frac{3\\pi}{2}$, $r = 0$', '$\\theta = \\frac{\\pi}{6}$, $r = 3$', '$\\theta = \\pi$, $r = 2$'],
    correctIndex: 3,
    explanation: '$r(\\pi) = 2 - 2\\sin\\pi = 2 - 0 = 2$. The other entries use $2 + 2\\sin\\theta$: the correct values are $r\\left(\\frac{\\pi}{2}\\right) = 0$, $r\\left(\\frac{3\\pi}{2}\\right) = 4$ and $r\\left(\\frac{\\pi}{6}\\right) = 1$.',
    partNumber: 4,
    partTitle: 'Graphing r = f(θ) Point by Point',
  },

  // Part 5 — The Curve Library: Roses, Cardioids & Limaçons
  {
    id: 'pc-ent-5a',
    question: 'Which equation\'s graph is a rose with exactly $8$ petals?',
    options: ['$r = 3\\cos(4\\theta)$', '$r = 8\\cos\\theta$', '$r = 4\\sin(8\\theta)$', '$r = 3\\sin(5\\theta)$'],
    correctIndex: 0,
    explanation: 'For $r = a\\cos(n\\theta)$ with $n$ even there are $2n$ petals, so $n = 4$ gives $8$. With $n = 8$ the rose has $16$ petals, $n = 5$ (odd) gives $5$, and $r = 8\\cos\\theta$ is a circle.',
    partNumber: 5,
    partTitle: 'The Curve Library: Roses, Cardioids & Limaçons',
  },
  {
    id: 'pc-ent-5b',
    question: 'Which describes the graph of $r = 5 - 5\\sin\\theta$?',
    options: ['A limaçon with an inner loop', 'A circle of diameter $5$', 'A rose with $5$ petals', 'A cardioid'],
    correctIndex: 3,
    explanation: 'In $r = a - b\\sin\\theta$ the two coefficients are equal ($a = b = 5$), which makes a cardioid; it touches the pole where $\\sin\\theta = 1$. An inner loop needs $a < b$.',
    partNumber: 5,
    partTitle: 'The Curve Library: Roses, Cardioids & Limaçons',
  },

  // Part 6 — Rates of Change, Symmetry & Distance from the Pole
  {
    id: 'pc-ent-6a',
    question: 'What is the average rate of change of $r = 2 + 3\\cos\\theta$ with respect to $\\theta$ on $0 \\le \\theta \\le \\frac{\\pi}{2}$?',
    options: ['$\\frac{6}{\\pi}$', '$-3$', '$-\\frac{6}{\\pi}$', '$\\frac{\\pi}{6}$'],
    correctIndex: 2,
    explanation: '$r(0) = 5$ and $r\\left(\\frac{\\pi}{2}\\right) = 2$, so the rate is $\\frac{2 - 5}{\\pi/2} = -\\frac{6}{\\pi}$ radius units per radian. The value $-3$ is only the change in $r$, not divided by the change in $\\theta$.',
    partNumber: 6,
    partTitle: 'Rates of Change, Symmetry & Distance from the Pole',
  },
  {
    id: 'pc-ent-6b',
    question: 'Which statement about the graph of $r = 2 + 4\\cos\\theta$ is true?',
    options: ['Symmetric about the line $\\theta = \\frac{\\pi}{2}$; passes through the pole', 'Symmetric about the polar axis; never passes through the pole', 'Symmetric about the polar axis; passes through the pole', 'Symmetric about the line $\\theta = \\frac{\\pi}{2}$; never passes through the pole'],
    correctIndex: 2,
    explanation: 'Replacing $\\theta$ with $-\\theta$ leaves $2 + 4\\cos\\theta$ unchanged (cosine is even), so the graph is symmetric about the polar axis. It passes through the pole where $r = 0$: $\\cos\\theta = -\\frac{1}{2}$, at $\\theta = \\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$.',
    partNumber: 6,
    partTitle: 'Rates of Change, Symmetry & Distance from the Pole',
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'pc-ent-7a',
    question: 'Convert the polar point $\\left(-2, -\\frac{\\pi}{3}\\right)$ to rectangular coordinates.',
    options: ['$\\left(-1, -\\sqrt{3}\\right)$', '$\\left(-1, \\sqrt{3}\\right)$', '$\\left(1, -\\sqrt{3}\\right)$', '$\\left(-\\sqrt{3}, 1\\right)$'],
    correctIndex: 1,
    explanation: '$x = -2\\cos\\left(-\\frac{\\pi}{3}\\right) = -2 \\cdot \\frac{1}{2} = -1$ and $y = -2\\sin\\left(-\\frac{\\pi}{3}\\right) = -2\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\sqrt{3}$. Ignoring the negative radius gives $\\left(1, -\\sqrt{3}\\right)$, the point on the other side of the pole.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
  {
    id: 'pc-ent-7b',
    question: 'As $\\theta$ increases from $0$ to $\\frac{\\pi}{2}$, the value of $r = 4\\cos(2\\theta)$ falls from $4$ to $-4$. How does the distance from the pole change on this interval?',
    options: ['It decreases, then increases', 'It decreases the whole time', 'It increases, then decreases', 'It increases the whole time'],
    correctIndex: 0,
    explanation: 'The distance is $|r|$. From $\\theta = 0$ to $\\frac{\\pi}{4}$, $r$ falls from $4$ to $0$, so the distance shrinks; from $\\frac{\\pi}{4}$ to $\\frac{\\pi}{2}$, $r$ falls from $0$ to $-4$, so $|r|$ grows. Decreasing $r$ does not mean decreasing distance once $r$ is negative.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Locating a Point with (r, θ)' },
    { partNumber: 2, partTitle: 'Non-Uniqueness & Negative r' },
    { partNumber: 3, partTitle: 'Converting Between Polar and Rectangular' },
    { partNumber: 4, partTitle: 'Graphing r = f(θ) Point by Point' },
    { partNumber: 5, partTitle: 'The Curve Library: Roses, Cardioids & Limaçons' },
    { partNumber: 6, partTitle: 'Rates of Change, Symmetry & Distance from the Pole' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
