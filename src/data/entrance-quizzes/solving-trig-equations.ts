/**
 * Entrance Quiz — Solving Trigonometric Equations — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Toolkit: Reference Angles & the Unit Circle
  {
    id: 'ste-ent-1a',
    question: 'An angle $\\theta$ with $0 \\le \\theta < 2\\pi$ has reference angle $\\frac{\\pi}{5}$, and both $\\sin\\theta < 0$ and $\\cos\\theta < 0$. What is $\\theta$?',
    options: ['$\\frac{4\\pi}{5}$', '$\\frac{6\\pi}{5}$', '$\\frac{9\\pi}{5}$', '$\\frac{\\pi}{5}$'],
    correctIndex: 1,
    explanation: 'Both negative means Quadrant III, where $\\theta = \\pi + \\frac{\\pi}{5} = \\frac{6\\pi}{5}$. The angle $\\frac{4\\pi}{5}$ is the Quadrant II angle $\\pi - \\frac{\\pi}{5}$, where sine is positive.',
    partNumber: 1,
    partTitle: 'The Toolkit: Reference Angles & the Unit Circle',
  },
  {
    id: 'ste-ent-1b',
    question: 'Which expression has the same value as $\\cos\\frac{\\pi}{8}$?',
    options: ['$-\\cos\\frac{7\\pi}{8}$', '$\\cos\\frac{7\\pi}{8}$', '$\\cos\\frac{9\\pi}{8}$', '$\\sin\\frac{7\\pi}{8}$'],
    correctIndex: 0,
    explanation: '$\\frac{7\\pi}{8}$ has reference angle $\\frac{\\pi}{8}$ and lies in Quadrant II, where cosine is negative, so $\\cos\\frac{7\\pi}{8} = -\\cos\\frac{\\pi}{8}$ and its negative equals $\\cos\\frac{\\pi}{8}$. The value $\\cos\\frac{9\\pi}{8}$ is also negative (Quadrant III).',
    partNumber: 1,
    partTitle: 'The Toolkit: Reference Angles & the Unit Circle',
  },

  // Part 2 — Basic Equations on [0, 2π)
  {
    id: 'ste-ent-2a',
    question: 'Solve $\\tan\\theta = -\\frac{\\sqrt{3}}{3}$ for $0 \\le \\theta < 2\\pi$.',
    options: ['$\\frac{5\\pi}{6}, \\frac{7\\pi}{6}$', '$\\frac{2\\pi}{3}, \\frac{5\\pi}{3}$', '$\\frac{5\\pi}{6}, \\frac{11\\pi}{6}$', '$\\frac{\\pi}{6}, \\frac{7\\pi}{6}$'],
    correctIndex: 2,
    explanation: 'The reference angle is $\\frac{\\pi}{6}$, and tangent is negative in Quadrants II and IV: $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ and $2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$, which differ by $\\pi$ as tangent solutions must. The pair $\\frac{\\pi}{6}, \\frac{7\\pi}{6}$ solves $\\tan\\theta = +\\frac{\\sqrt{3}}{3}$.',
    partNumber: 2,
    partTitle: 'Basic Equations on [0, 2π)',
  },
  {
    id: 'ste-ent-2b',
    question: 'Solve $\\sin\\theta < -\\frac{\\sqrt{3}}{2}$ for $0 \\le \\theta < 2\\pi$.',
    options: ['$\\frac{7\\pi}{6} < \\theta < \\frac{11\\pi}{6}$', '$\\frac{\\pi}{3} < \\theta < \\frac{2\\pi}{3}$', '$0 \\le \\theta < \\frac{4\\pi}{3}$ or $\\frac{5\\pi}{3} < \\theta < 2\\pi$', '$\\frac{4\\pi}{3} < \\theta < \\frac{5\\pi}{3}$'],
    correctIndex: 3,
    explanation: 'The boundaries are where $\\sin\\theta = -\\frac{\\sqrt{3}}{2}$: $\\frac{4\\pi}{3}$ and $\\frac{5\\pi}{3}$. Between them (test $\\frac{3\\pi}{2}$, where $\\sin\\theta = -1$) the $y$-coordinate is lower still, so the solution is $\\frac{4\\pi}{3} < \\theta < \\frac{5\\pi}{3}$; the other pieces of the circle have larger sine.',
    partNumber: 2,
    partTitle: 'Basic Equations on [0, 2π)',
  },

  // Part 3 — All Solutions: The General Solution
  {
    id: 'ste-ent-3a',
    question: 'Which gives every solution of $2\\sin\\theta + \\sqrt{2} = 0$? ($k$ is any integer.)',
    options: ['$\\theta = \\frac{5\\pi}{4} + 2\\pi k$ or $\\theta = \\frac{3\\pi}{4} + 2\\pi k$', '$\\theta = \\frac{5\\pi}{4} + 2\\pi k$ or $\\theta = \\frac{7\\pi}{4} + 2\\pi k$', '$\\theta = \\frac{5\\pi}{4} + \\pi k$', '$\\theta = \\frac{5\\pi}{4} + 2\\pi k$ only'],
    correctIndex: 1,
    explanation: '$\\sin\\theta = -\\frac{\\sqrt{2}}{2}$ in Quadrants III and IV, at $\\frac{5\\pi}{4}$ and $\\frac{7\\pi}{4}$, and sine repeats every $2\\pi$. The family $\\frac{5\\pi}{4} + \\pi k$ uses tangent\'s period and wrongly includes $\\frac{\\pi}{4}$.',
    partNumber: 3,
    partTitle: 'All Solutions: The General Solution',
  },
  {
    id: 'ste-ent-3b',
    question: 'Which list gives all solutions of $\\cos\\theta = -\\frac{\\sqrt{3}}{2}$ with $0 \\le \\theta < 4\\pi$?',
    options: ['$\\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{17\\pi}{6}, \\frac{19\\pi}{6}$', '$\\frac{5\\pi}{6}, \\frac{7\\pi}{6}$', '$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{8\\pi}{3}, \\frac{10\\pi}{3}$', '$\\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{17\\pi}{6}$'],
    correctIndex: 0,
    explanation: 'On one turn the solutions are $\\frac{5\\pi}{6}$ and $\\frac{7\\pi}{6}$; adding $2\\pi = \\frac{12\\pi}{6}$ to each gives $\\frac{17\\pi}{6}$ and $\\frac{19\\pi}{6}$, both less than $4\\pi$. The list with thirds solves $\\cos\\theta = -\\frac{1}{2}$ instead.',
    partNumber: 3,
    partTitle: 'All Solutions: The General Solution',
  },

  // Part 4 — Equations That Need Algebra First
  {
    id: 'ste-ent-4a',
    question: 'Solve $2\\sin^2\\theta - 3\\sin\\theta + 1 = 0$ for $0 \\le \\theta < 2\\pi$.',
    options: ['$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$', '$\\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}$', '$\\frac{\\pi}{3}, \\frac{\\pi}{2}, \\frac{2\\pi}{3}$', '$\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$'],
    correctIndex: 3,
    explanation: 'Factor as $(2\\sin\\theta - 1)(\\sin\\theta - 1) = 0$, so $\\sin\\theta = \\frac{1}{2}$ ($\\frac{\\pi}{6}, \\frac{5\\pi}{6}$) or $\\sin\\theta = 1$ ($\\frac{\\pi}{2}$). Leaving out $\\frac{\\pi}{2}$ drops the second factor.',
    partNumber: 4,
    partTitle: 'Equations That Need Algebra First',
  },
  {
    id: 'ste-ent-4b',
    question: 'Solve $\\sin\\theta\\tan\\theta = \\sin\\theta$ for $0 \\le \\theta < 2\\pi$.',
    options: ['$\\frac{\\pi}{4}, \\frac{5\\pi}{4}$', '$0, \\frac{\\pi}{4}, \\pi$', '$0, \\frac{\\pi}{4}, \\pi, \\frac{5\\pi}{4}$', '$0, \\pi$'],
    correctIndex: 2,
    explanation: 'Move everything to one side and factor: $\\sin\\theta(\\tan\\theta - 1) = 0$. Then $\\sin\\theta = 0$ gives $0, \\pi$ and $\\tan\\theta = 1$ gives $\\frac{\\pi}{4}, \\frac{5\\pi}{4}$; dividing by $\\sin\\theta$ would lose $0$ and $\\pi$.',
    partNumber: 4,
    partTitle: 'Equations That Need Algebra First',
  },

  // Part 5 — Inverse Trig & the Calculator
  {
    id: 'ste-ent-5a',
    question: 'A calculator in radian mode gives $\\sin^{-1}(-0.4) \\approx -0.41$. To two decimal places, what are the solutions of $\\sin\\theta = -0.4$ with $0 \\le \\theta < 2\\pi$?',
    options: ['$-0.41$ and $3.55$', '$3.55$ and $5.87$', '$0.41$ and $2.73$', '$2.73$ and $5.87$'],
    correctIndex: 1,
    explanation: 'Sine is negative in Quadrants III and IV, with reference angle $0.41$: $\\pi + 0.41 \\approx 3.55$ and $2\\pi - 0.41 \\approx 5.87$. The calculator\'s $-0.41$ is outside $[0, 2\\pi)$ and must be replaced by its coterminal angle $5.87$.',
    partNumber: 5,
    partTitle: 'Inverse Trig & the Calculator',
  },
  {
    id: 'ste-ent-5b',
    question: 'A calculator in radian mode gives $\\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 0.93$. To two decimal places, what are the solutions of $3\\tan\\theta = 4$ with $0 \\le \\theta < 2\\pi$?',
    options: ['$0.93$ and $2.21$', '$0.93$ and $5.36$', '$0.93$ only', '$0.93$ and $4.07$'],
    correctIndex: 3,
    explanation: 'Tangent is positive in Quadrants I and III and has period $\\pi$, so the solutions are $0.93$ and $0.93 + \\pi \\approx 4.07$. The value $\\pi - 0.93 \\approx 2.21$ is in Quadrant II, where tangent is negative.',
    partNumber: 5,
    partTitle: 'Inverse Trig & the Calculator',
  },

  // Part 6 — Applications: Periodic Models
  {
    id: 'ste-ent-6a',
    question: 'The water depth at a pier is $h(t) = 6 + 4\\cos\\left(\\frac{\\pi}{6}t\\right)$ feet, $t$ hours after midnight, for $0 \\le t < 12$. At what times is the depth exactly $4$ feet?',
    options: ['$t = 4$ and $t = 8$', '$t = 2$ and $t = 10$', '$t = \\frac{2\\pi}{3}$ and $t = \\frac{4\\pi}{3}$', '$t = 4$, $t = 8$, and $t = 16$'],
    correctIndex: 0,
    explanation: '$4\\cos\\left(\\frac{\\pi}{6}t\\right) = -2$ gives $\\cos u = -\\frac{1}{2}$ with $u = \\frac{\\pi}{6}t$, so $u = \\frac{2\\pi}{3}$ or $\\frac{4\\pi}{3}$ and $t = 4$ or $8$. The values $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$ are the inner angle, not the time, and $t = 16$ is outside the domain.',
    partNumber: 6,
    partTitle: 'Applications: Periodic Models',
  },
  {
    id: 'ste-ent-6b',
    question: 'For the same pier, $h(t) = 6 + 4\\cos\\left(\\frac{\\pi}{6}t\\right)$ with $0 \\le t < 12$. During which times is the depth greater than $8$ feet?',
    options: ['$2 < t < 10$', '$0 \\le t < 2$ or $10 < t < 12$', '$0 \\le t < 4$ or $8 < t < 12$', '$2 < t < 4$ or $8 < t < 10$'],
    correctIndex: 1,
    explanation: '$h(t) > 8$ means $\\cos\\left(\\frac{\\pi}{6}t\\right) > \\frac{1}{2}$, which holds for inner angles in $\\left[0, \\frac{\\pi}{3}\\right)$ or $\\left(\\frac{5\\pi}{3}, 2\\pi\\right)$, that is $0 \\le t < 2$ or $10 < t < 12$. The interval $2 < t < 10$ is when the depth is below $8$ feet.',
    partNumber: 6,
    partTitle: 'Applications: Periodic Models',
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'ste-ent-7a',
    question: 'Solve $2\\sin^2\\theta = 1 + \\cos\\theta$ for $0 \\le \\theta < 2\\pi$.',
    options: ['$0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$', '$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$', '$\\frac{\\pi}{6}, \\pi, \\frac{11\\pi}{6}$', '$\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$'],
    correctIndex: 3,
    explanation: 'Replace $\\sin^2\\theta$ with $1 - \\cos^2\\theta$: $2 - 2\\cos^2\\theta = 1 + \\cos\\theta$, so $2\\cos^2\\theta + \\cos\\theta - 1 = (2\\cos\\theta - 1)(\\cos\\theta + 1) = 0$. Then $\\cos\\theta = \\frac{1}{2}$ gives $\\frac{\\pi}{3}, \\frac{5\\pi}{3}$ and $\\cos\\theta = -1$ gives $\\pi$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
  {
    id: 'ste-ent-7b',
    question: 'Which gives every solution of $\\sin(2\\theta) = \\frac{\\sqrt{3}}{2}$? ($k$ is any integer.)',
    options: ['$\\theta = \\frac{\\pi}{6} + 2\\pi k$ or $\\theta = \\frac{\\pi}{3} + 2\\pi k$', '$\\theta = \\frac{\\pi}{6} + \\pi k$ or $\\theta = \\frac{\\pi}{3} + \\pi k$', '$\\theta = \\frac{\\pi}{3} + 2\\pi k$ or $\\theta = \\frac{2\\pi}{3} + 2\\pi k$', '$\\theta = \\frac{\\pi}{6} + \\pi k$ or $\\theta = \\frac{5\\pi}{6} + \\pi k$'],
    correctIndex: 1,
    explanation: 'First $2\\theta = \\frac{\\pi}{3} + 2\\pi k$ or $2\\theta = \\frac{2\\pi}{3} + 2\\pi k$; dividing everything by $2$ gives $\\theta = \\frac{\\pi}{6} + \\pi k$ or $\\frac{\\pi}{3} + \\pi k$. Keeping $+2\\pi k$ forgets that the period is halved, and the other list stops before dividing by $2$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Toolkit: Reference Angles & the Unit Circle' },
    { partNumber: 2, partTitle: 'Basic Equations on [0, 2π)' },
    { partNumber: 3, partTitle: 'All Solutions: The General Solution' },
    { partNumber: 4, partTitle: 'Equations That Need Algebra First' },
    { partNumber: 5, partTitle: 'Inverse Trig & the Calculator' },
    { partNumber: 6, partTitle: 'Applications: Periodic Models' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
