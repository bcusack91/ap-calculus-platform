/**
 * Entrance Quiz — Trigonometric Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Angles & Radian Measure
  {
    id: 'tf-ent-1a',
    question: 'What is the smallest positive angle coterminal with $-\\frac{9\\pi}{4}$?',
    options: ['$\\frac{9\\pi}{4}$', '$\\frac{7\\pi}{4}$', '$\\frac{\\pi}{4}$', '$\\frac{3\\pi}{4}$'],
    correctIndex: 1,
    explanation: 'Adding one turn gives $-\\frac{9\\pi}{4} + \\frac{8\\pi}{4} = -\\frac{\\pi}{4}$, still negative; adding a second turn gives $\\frac{7\\pi}{4}$. Dropping the negative sign to get $\\frac{9\\pi}{4}$ reflects the angle instead of rotating it.',
    partNumber: 1,
    partTitle: 'Trigonometric Functions — Angles & Radian Measure',
  },
  {
    id: 'tf-ent-1b',
    question: 'An angle in standard position measures $4.2$ radians. In which quadrant does its terminal side lie?',
    options: ['Quadrant I', 'Quadrant II', 'Quadrant IV', 'Quadrant III'],
    correctIndex: 3,
    explanation: 'Compare with $\\pi \\approx 3.14$ and $\\frac{3\\pi}{2} \\approx 4.71$: since $3.14 < 4.2 < 4.71$, the terminal side is in Quadrant III. Treating $4.2$ as degrees would wrongly give Quadrant I.',
    partNumber: 1,
    partTitle: 'Trigonometric Functions — Angles & Radian Measure',
  },

  // Part 2 — The Unit Circle
  {
    id: 'tf-ent-2a',
    question: 'Which of these values is negative?',
    options: ['$\\sin\\frac{3\\pi}{4}$', '$\\cos\\frac{2\\pi}{3}$', '$\\cos\\frac{5\\pi}{3}$', '$\\cos\\frac{11\\pi}{6}$'],
    correctIndex: 1,
    explanation: '$\\frac{2\\pi}{3}$ is in Quadrant II, where cosine ($x$) is negative, so $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$. Sine is positive in Quadrant II, and cosine is positive in Quadrant IV, where $\\frac{5\\pi}{3}$ and $\\frac{11\\pi}{6}$ lie.',
    partNumber: 2,
    partTitle: 'Trigonometric Functions — The Unit Circle',
  },
  {
    id: 'tf-ent-2b',
    question: 'What is the exact value of $\\cos\\frac{4\\pi}{3} - \\sin\\frac{7\\pi}{4}$?',
    options: ['$-\\frac{1+\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}-1}{2}$', '$\\frac{1-\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}-\\sqrt{3}}{2}$'],
    correctIndex: 1,
    explanation: '$\\cos\\frac{4\\pi}{3} = -\\frac{1}{2}$ (Quadrant III) and $\\sin\\frac{7\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ (Quadrant IV), so the difference is $-\\frac{1}{2} + \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}-1}{2}$. Forgetting that subtracting a negative adds gives $-\\frac{1+\\sqrt{2}}{2}$.',
    partNumber: 2,
    partTitle: 'Trigonometric Functions — The Unit Circle',
  },

  // Part 3 — Sine & Cosine Definitions
  {
    id: 'tf-ent-3a',
    question: 'Angle $\\theta$ is in Quadrant IV and $\\sin\\theta = -\\frac{3}{7}$. What is $\\cos\\theta$?',
    options: ['$-\\frac{2\\sqrt{10}}{7}$', '$\\frac{4}{7}$', '$\\frac{2\\sqrt{10}}{7}$', '$\\frac{\\sqrt{58}}{7}$'],
    correctIndex: 2,
    explanation: '$\\cos^2\\theta = 1 - \\frac{9}{49} = \\frac{40}{49}$, so $\\cos\\theta = \\pm\\frac{2\\sqrt{10}}{7}$; cosine is positive in Quadrant IV. The value $\\frac{4}{7}$ subtracts $1 - \\frac{3}{7}$ without squaring.',
    partNumber: 3,
    partTitle: 'Trigonometric Functions — Sine & Cosine Definitions',
  },
  {
    id: 'tf-ent-3b',
    question: 'The terminal ray of $\\theta = \\frac{3\\pi}{4}$ meets the circle of radius $8$ centered at the origin at the point $P$. What are the coordinates of $P$?',
    options: ['$(4\\sqrt{2}, -4\\sqrt{2})$', '$(-4\\sqrt{2}, -4\\sqrt{2})$', '$(-8\\sqrt{2}, 8\\sqrt{2})$', '$(-4\\sqrt{2}, 4\\sqrt{2})$'],
    correctIndex: 3,
    explanation: '$P = (8\\cos\\frac{3\\pi}{4}, 8\\sin\\frac{3\\pi}{4}) = \\left(8 \\cdot \\left(-\\frac{\\sqrt{2}}{2}\\right), 8 \\cdot \\frac{\\sqrt{2}}{2}\\right) = (-4\\sqrt{2}, 4\\sqrt{2})$, in Quadrant II as expected.',
    partNumber: 3,
    partTitle: 'Trigonometric Functions — Sine & Cosine Definitions',
  },

  // Part 4 — Tangent, Cotangent, Secant & Cosecant
  {
    id: 'tf-ent-4a',
    question: 'Angle $\\theta$ is in Quadrant III and $\\cot\\theta = 2$. What is $\\sec\\theta$?',
    options: ['$-\\frac{\\sqrt{5}}{2}$', '$\\frac{\\sqrt{5}}{2}$', '$-\\sqrt{5}$', '$-\\frac{5}{4}$'],
    correctIndex: 0,
    explanation: '$\\tan\\theta = \\frac{1}{2}$, so $\\sec^2\\theta = 1 + \\frac{1}{4} = \\frac{5}{4}$ and $\\sec\\theta = \\pm\\frac{\\sqrt{5}}{2}$; cosine, and so secant, is negative in Quadrant III. The value $-\\sqrt{5}$ is $\\csc\\theta$.',
    partNumber: 4,
    partTitle: 'Trigonometric Functions — Tangent, Cotangent, Secant & Cosecant',
  },
  {
    id: 'tf-ent-4b',
    question: 'At which value of $\\theta$ is $\\tan\\theta$ defined but $\\cot\\theta$ undefined?',
    options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$\\frac{3\\pi}{2}$', '$\\frac{\\pi}{4}$'],
    correctIndex: 1,
    explanation: '$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$ is undefined where $\\sin\\theta = 0$, and $\\tan\\theta$ is defined where $\\cos\\theta \\ne 0$. At $\\theta = \\pi$, $\\sin\\theta = 0$ and $\\cos\\theta = -1$, so $\\tan\\pi = 0$ while $\\cot\\pi$ is undefined.',
    partNumber: 4,
    partTitle: 'Trigonometric Functions — Tangent, Cotangent, Secant & Cosecant',
  },

  // Part 5 — Graphing Sinusoids
  {
    id: 'tf-ent-5a',
    question: 'A function $f$ is periodic with period $5$, and $f(2) = 7$. Which statement must be true?',
    options: ['$f(17) = 7$', '$f(7) = 12$', '$f(10) = 7$', '$f(2.5) = 0$'],
    correctIndex: 0,
    explanation: 'Periodic with period $5$ means $f(x + 5) = f(x)$ for every $x$, so $f(17) = f(12) = f(7) = f(2) = 7$. Nothing forces $f(7)$ to grow, $10$ is not $2$ plus a whole number of periods, and a period says nothing about the value halfway through a cycle.',
    partNumber: 5,
    partTitle: 'Trigonometric Functions — Periodic Functions & Graphing Sinusoids',
  },
  {
    id: 'tf-ent-5b',
    question: 'What is the distance between consecutive vertical asymptotes of $y = 2\\tan(3x)$?',
    options: ['$\\frac{\\pi}{3}$', '$\\frac{2\\pi}{3}$', '$3\\pi$', '$\\frac{\\pi}{6}$'],
    correctIndex: 0,
    explanation: 'Tangent has period $\\frac{\\pi}{|b|} = \\frac{\\pi}{3}$, and its asymptotes are one period apart. Using $\\frac{2\\pi}{|b|}$, the sine and cosine formula, gives $\\frac{2\\pi}{3}$.',
    partNumber: 5,
    partTitle: 'Trigonometric Functions — Periodic Functions & Graphing Sinusoids',
  },

  // Part 6 — Applied Problems & Modeling
  {
    id: 'tf-ent-6a',
    question: 'The temperature in a greenhouse varies sinusoidally each day. It reaches a low of $58^\\circ$F at 4 AM and a high of $82^\\circ$F at 4 PM. Which model gives the temperature $T$, in degrees Fahrenheit, $t$ hours after midnight?',
    options: ['$T(t) = 70 + 12\\cos\\left(\\frac{\\pi}{12}(t - 4)\\right)$', '$T(t) = 70 - 12\\cos\\left(\\frac{\\pi}{24}(t - 4)\\right)$', '$T(t) = 70 - 24\\cos\\left(\\frac{\\pi}{12}(t - 4)\\right)$', '$T(t) = 70 - 12\\cos\\left(\\frac{\\pi}{12}(t - 4)\\right)$'],
    correctIndex: 3,
    explanation: 'Midline $\\frac{82+58}{2} = 70$, amplitude $\\frac{82-58}{2} = 12$, period $24$ h so $b = \\frac{2\\pi}{24} = \\frac{\\pi}{12}$, and a minimum at $t = 4$ calls for a negative cosine shifted right $4$. A positive cosine would put the high, not the low, at 4 AM.',
    partNumber: 6,
    partTitle: 'Trigonometric Functions — Applied Problems & Modeling',
  },
  {
    id: 'tf-ent-6b',
    question: 'A rider\'s height on a Ferris wheel is $h(t) = 18 - 15\\cos\\left(\\frac{\\pi}{4}t\\right)$ meters, $t$ minutes after boarding. When does the rider first reach the top, and how high is it?',
    options: ['At $8$ min, $33$ m up', 'At $4$ min, $33$ m up', 'At $4$ min, $30$ m up', 'At $2$ min, $33$ m up'],
    correctIndex: 1,
    explanation: 'The height is greatest when $\\cos\\left(\\frac{\\pi}{4}t\\right) = -1$, first at $\\frac{\\pi}{4}t = \\pi$, so $t = 4$ min, where $h = 18 + 15 = 33$ m. The period is $8$ min, so $8$ min is back at the bottom.',
    partNumber: 6,
    partTitle: 'Trigonometric Functions — Applied Problems & Modeling',
  },

  // Part 7 — Full Synthesis & Review
  {
    id: 'tf-ent-7a',
    question: 'Given $\\sin\\theta = \\frac{12}{13}$ and $\\tan\\theta < 0$, what is $\\sec\\theta$?',
    options: ['$\\frac{13}{5}$', '$-\\frac{13}{5}$', '$-\\frac{13}{12}$', '$-\\frac{5}{13}$'],
    correctIndex: 1,
    explanation: 'Sine positive and tangent negative put $\\theta$ in Quadrant II, so $\\cos\\theta = -\\frac{5}{13}$ and $\\sec\\theta = -\\frac{13}{5}$. The value $-\\frac{5}{13}$ is the cosine itself, not its reciprocal.',
    partNumber: 7,
    partTitle: 'Trigonometric Functions — Full Synthesis & Review',
  },
  {
    id: 'tf-ent-7b',
    question: 'Let $f(x) = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right)$. What is the exact value of $f\\left(\\frac{\\pi}{4}\\right)$?',
    options: ['$\\frac{3\\sqrt{3}}{2}$', '$-\\frac{3}{2}$', '$3$', '$\\frac{3}{2}$'],
    correctIndex: 3,
    explanation: '$f\\left(\\frac{\\pi}{4}\\right) = 3\\sin\\left(\\frac{\\pi}{2} - \\frac{\\pi}{3}\\right) = 3\\sin\\frac{\\pi}{6} = \\frac{3}{2}$. Rewriting the input as $2\\left(x - \\frac{\\pi}{3}\\right)$ by mistake leads to $3\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{3}{2}$.',
    partNumber: 7,
    partTitle: 'Trigonometric Functions — Full Synthesis & Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Trigonometric Functions — Angles & Radian Measure' },
    { partNumber: 2, partTitle: 'Trigonometric Functions — The Unit Circle' },
    { partNumber: 3, partTitle: 'Trigonometric Functions — Sine & Cosine Definitions' },
    { partNumber: 4, partTitle: 'Trigonometric Functions — Tangent, Cotangent, Secant & Cosecant' },
    { partNumber: 5, partTitle: 'Trigonometric Functions — Periodic Functions & Graphing Sinusoids' },
    { partNumber: 6, partTitle: 'Trigonometric Functions — Applied Problems & Modeling' },
    { partNumber: 7, partTitle: 'Trigonometric Functions — Full Synthesis & Review' },
  ]
}
