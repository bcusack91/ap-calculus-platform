/**
 * Entrance Quiz — Inverse Trigonometric Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Principal Values & Restricted Domains
  {
    id: 'it-ent-1a',
    question: 'Which expression is undefined?',
    options: ['$\\arcsin(1.2)$', '$\\arctan(12)$', '$\\arccos(-1)$', '$\\arcsin\\left(-\\frac{\\pi}{4}\\right)$'],
    correctIndex: 0,
    explanation: 'Arcsine only accepts inputs in $[-1, 1]$, because sine never outputs anything else, and $1.2$ is outside that interval. The input $-\\frac{\\pi}{4} \\approx -0.785$ is inside it, and arctangent accepts every real number.',
    partNumber: 1,
    partTitle: 'Inverse Trigonometric Functions — Principal Values & Restricted Domains',
  },
  {
    id: 'it-ent-1b',
    question: 'Which equation is true?',
    options: ['$\\arcsin\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{4\\pi}{3}$', '$\\arccos\\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\frac{\\pi}{6}$', '$\\arccos\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{5\\pi}{6}$', '$\\arctan(-1) = \\frac{7\\pi}{4}$'],
    correctIndex: 2,
    explanation: 'Arccosine returns an angle in $[0, \\pi]$, and $\\cos\\frac{5\\pi}{6} = -\\frac{\\sqrt{3}}{2}$. The other outputs fall outside the principal ranges: arcsine and arctangent stay between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$, and arccosine is never negative.',
    partNumber: 1,
    partTitle: 'Inverse Trigonometric Functions — Principal Values & Restricted Domains',
  },

  // Part 2 — Graphs of Inverse Trig Functions
  {
    id: 'it-ent-2a',
    question: 'Which description matches the graph of $y = \\arctan x$?',
    options: ['Increasing, with vertical asymptotes $x = -\\frac{\\pi}{2}$ and $x = \\frac{\\pi}{2}$', 'Decreasing, with horizontal asymptotes $y = 0$ and $y = \\pi$', 'Increasing, and defined only for $-1 \\le x \\le 1$', 'Increasing, with horizontal asymptotes $y = -\\frac{\\pi}{2}$ and $y = \\frac{\\pi}{2}$'],
    correctIndex: 3,
    explanation: 'Reflecting the restricted tangent graph across $y = x$ turns its vertical asymptotes $x = \\pm\\frac{\\pi}{2}$ into horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$, and arctangent is increasing on all real numbers. The domain $[-1, 1]$ belongs to arcsine and arccosine.',
    partNumber: 2,
    partTitle: 'Graphs of Inverse Trig Functions',
  },
  {
    id: 'it-ent-2b',
    question: 'The graph of $y = \\arccos x$ is neither odd nor even. For every $x$ in $[-1, 1]$, $\\arccos(-x)$ equals which expression?',
    options: ['$-\\arccos x$', '$\\pi - \\arccos x$', '$\\arccos x$', '$\\frac{\\pi}{2} - \\arccos x$'],
    correctIndex: 1,
    explanation: 'The arccosine graph is symmetric about the point $\\left(0, \\frac{\\pi}{2}\\right)$, so $\\arccos(-x) = \\pi - \\arccos x$; for example $\\arccos\\left(-\\frac{1}{2}\\right) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. The rule $-\\arccos x$ would give negative outputs, which arccosine never produces.',
    partNumber: 2,
    partTitle: 'Graphs of Inverse Trig Functions',
  },

  // Part 3 — Evaluating Inverse Trig — Exact Values
  {
    id: 'it-ent-3a',
    question: 'What is the exact value of $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) + \\arcsin\\left(-\\frac{\\sqrt{2}}{2}\\right)$?',
    options: ['$\\frac{\\pi}{2}$', '$\\frac{5\\pi}{2}$', '$-\\frac{\\pi}{2}$', '$\\frac{3\\pi}{2}$'],
    correctIndex: 0,
    explanation: '$\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$ (in $[0, \\pi]$) and $\\arcsin\\left(-\\frac{\\sqrt{2}}{2}\\right) = -\\frac{\\pi}{4}$ (in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$), so the sum is $\\frac{\\pi}{2}$. Using $\\frac{7\\pi}{4}$ for the arcsine gives $\\frac{5\\pi}{2}$, but that angle is outside its range.',
    partNumber: 3,
    partTitle: 'Evaluating Inverse Trig — Exact Values',
  },
  {
    id: 'it-ent-3b',
    question: 'Which expression has the greatest value?',
    options: ['$\\arctan(100)$', '$\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right)$', '$\\arccos\\left(-\\frac{1}{2}\\right)$', '$\\arccos(0.1)$'],
    correctIndex: 2,
    explanation: '$\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3} \\approx 2.09$. Arctangent is always less than $\\frac{\\pi}{2} \\approx 1.57$ however large its input, $\\arcsin\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$, and $\\arccos(0.1)$ is just under $\\frac{\\pi}{2}$ because $0.1$ is positive.',
    partNumber: 3,
    partTitle: 'Evaluating Inverse Trig — Exact Values',
  },

  // Part 4 — Compositions of Trig & Inverse Trig
  {
    id: 'it-ent-4a',
    question: 'What is the exact value of $\\sin\\left(\\arccos\\left(-\\frac{5}{13}\\right)\\right)$?',
    options: ['$-\\frac{12}{13}$', '$\\frac{12}{13}$', '$\\frac{5}{12}$', '$-\\frac{12}{5}$'],
    correctIndex: 1,
    explanation: 'Let $\\theta = \\arccos\\left(-\\frac{5}{13}\\right)$, an angle in Quadrant II, so $\\cos\\theta = -\\frac{5}{13}$ and $\\sin\\theta = +\\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$. Sine is positive on all of $[0, \\pi]$, so a negative answer is impossible here.',
    partNumber: 4,
    partTitle: 'Compositions of Trig & Inverse Trig',
  },
  {
    id: 'it-ent-4b',
    question: 'What is the exact value of $\\arccos\\left(\\cos\\frac{7\\pi}{5}\\right)$?',
    options: ['$\\frac{7\\pi}{5}$', '$\\frac{2\\pi}{5}$', '$-\\frac{3\\pi}{5}$', '$\\frac{3\\pi}{5}$'],
    correctIndex: 3,
    explanation: '$\\frac{7\\pi}{5}$ is outside $[0, \\pi]$, so find the angle in $[0, \\pi]$ with the same cosine: $\\cos\\frac{7\\pi}{5} = \\cos\\left(2\\pi - \\frac{7\\pi}{5}\\right) = \\cos\\frac{3\\pi}{5}$. Simply cancelling to get $\\frac{7\\pi}{5}$ ignores the restricted range.',
    partNumber: 4,
    partTitle: 'Compositions of Trig & Inverse Trig',
  },

  // Part 5 — Solving Equations with Inverse Trig Functions
  {
    id: 'it-ent-5a',
    question: 'A calculator in radian mode gives $\\cos^{-1}(-0.4) \\approx 1.98$. To two decimal places, what are the solutions of $\\cos\\theta = -0.4$ with $0 \\le \\theta < 2\\pi$?',
    options: ['$1.98$ and $4.30$', '$1.98$ and $5.12$', '$1.16$ and $1.98$', '$1.98$ only'],
    correctIndex: 0,
    explanation: 'Arccosine returns the Quadrant II solution $1.98$; cosine is also negative in Quadrant III, at the reflection $2\\pi - 1.98 \\approx 4.30$. Adding $\\pi$ gives $5.12$, which is in Quadrant IV where cosine is positive, and $\\pi - 1.98 \\approx 1.16$ has cosine $+0.4$.',
    partNumber: 5,
    partTitle: 'Solving Equations with Inverse Trig Functions',
  },
  {
    id: 'it-ent-5b',
    question: 'Which expression is the solution of $\\tan\\theta = 5$ that lies in the interval $\\left(\\pi, \\frac{3\\pi}{2}\\right)$?',
    options: ['$\\arctan 5 + \\pi$', '$\\arctan 5$', '$\\pi - \\arctan 5$', '$\\arctan 5 + 2\\pi$'],
    correctIndex: 0,
    explanation: '$\\arctan 5 \\approx 1.37$ is the Quadrant I solution. Tangent has period $\\pi$, so $\\arctan 5 + \\pi \\approx 4.51$ is also a solution, and it lies in Quadrant III, between $\\pi$ and $\\frac{3\\pi}{2}$. $\\pi - \\arctan 5$ is in Quadrant II, where tangent is negative, and $\\arctan 5 + 2\\pi$ is past $2\\pi$.',
    partNumber: 5,
    partTitle: 'Solving Equations with Inverse Trig Functions',
  },

  // Part 6 — Inverse Trig in Periodic Models
  {
    id: 'it-ent-6a',
    question: 'Solve $\\arccos(2x - 1) = \\frac{2\\pi}{3}$.',
    options: ['$\\frac{2\\pi+3}{6}$', '$\\frac{1}{4}$', '$-\\frac{1}{4}$', '$\\frac{2-\\sqrt{3}}{4}$'],
    correctIndex: 1,
    explanation: 'Apply cosine to both sides: $2x - 1 = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, so $2x = \\frac{1}{2}$ and $x = \\frac{1}{4}$. Setting $2x - 1$ equal to the angle itself gives $\\frac{2\\pi+3}{6}$.',
    partNumber: 6,
    partTitle: 'Inverse Trig in Periodic Models',
  },
  {
    id: 'it-ent-6b',
    question: 'The depth of water at a pier is $D(t) = 3\\cos\\left(\\frac{\\pi}{6}t\\right) + 7$ feet, $t$ hours after midnight, for $0 \\le t < 12$. Using a calculator in radian mode, at which times is the depth $5$ feet, to two decimal places?',
    options: ['$t \\approx 4.39$ and $7.61$', '$t \\approx 4.39$ only', '$t \\approx 4.39$ and $10.39$', '$t \\approx 1.61$ and $4.39$'],
    correctIndex: 0,
    explanation: 'Isolate: $\\cos\\left(\\frac{\\pi}{6}t\\right) = -\\frac{2}{3}$. The inner angle is $\\arccos\\left(-\\frac{2}{3}\\right) \\approx 2.30$ or its reflection $2\\pi - 2.30 \\approx 3.98$; multiplying by $\\frac{6}{\\pi}$ gives $t \\approx 4.39$ and $t \\approx 7.61$. Stopping at one value misses the second time, adding half a period ($6$ hours) lands where the cosine is $+\\frac{2}{3}$, and $\\pi - 2.30$ is the sine pattern.',
    partNumber: 6,
    partTitle: 'Inverse Trig in Periodic Models',
  },

  // Part 7 — Full Synthesis
  {
    id: 'it-ent-7a',
    question: 'For which values of $x$ is $\\arcsin(\\sin x) = x$?',
    options: ['$-\\frac{\\pi}{2} \\le x \\le \\frac{\\pi}{2}$', 'All real $x$', '$0 \\le x \\le \\pi$', '$-1 \\le x \\le 1$'],
    correctIndex: 0,
    explanation: 'Arcsine undoes sine only on the interval sine was restricted to, $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, which is also the range of arcsine. For any other $x$ the output is a different angle with the same sine (for example $\\arcsin(\\sin\\pi) = 0$). The interval $[0, \\pi]$ belongs to arccosine, and $[-1, 1]$ is the domain of arcsine, not a set of angles.',
    partNumber: 7,
    partTitle: 'Inverse Trig — Full Synthesis',
  },
  {
    id: 'it-ent-7b',
    question: 'What is the domain of $f(x) = \\arccos(3x - 2)$?',
    options: ['$-1 \\le x \\le 1$', '$\\frac{1}{3} \\le x \\le 1$', '$0 \\le x \\le \\pi$', '$-\\frac{1}{3} \\le x \\le 1$'],
    correctIndex: 1,
    explanation: 'The input of arccosine must lie in $[-1, 1]$: $-1 \\le 3x - 2 \\le 1$ gives $1 \\le 3x \\le 3$, so $\\frac{1}{3} \\le x \\le 1$. The interval $[0, \\pi]$ is the range of arccosine, not this domain.',
    partNumber: 7,
    partTitle: 'Inverse Trig — Full Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Inverse Trigonometric Functions — Principal Values & Restricted Domains' },
    { partNumber: 2, partTitle: 'Graphs of Inverse Trig Functions' },
    { partNumber: 3, partTitle: 'Evaluating Inverse Trig — Exact Values' },
    { partNumber: 4, partTitle: 'Compositions of Trig & Inverse Trig' },
    { partNumber: 5, partTitle: 'Solving Equations with Inverse Trig Functions' },
    { partNumber: 6, partTitle: 'Inverse Trig in Periodic Models' },
    { partNumber: 7, partTitle: 'Inverse Trig — Full Synthesis' },
  ]
}
