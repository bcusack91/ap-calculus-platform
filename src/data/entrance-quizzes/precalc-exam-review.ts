/**
 * Entrance Quiz — AP Precalculus Exam Review (cumulative Units 1–3, 2027 format) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Exam Format, Pacing and the Calculator Split
  {
    id: 'per-ent-1a',
    question: 'Which statement describes Section I Part B of the AP Precalculus exam?',
    options: ['$29$ questions in $65$ minutes with a graphing calculator', '$13$ questions in $40$ minutes without a calculator', '$13$ questions in $40$ minutes with a graphing calculator', '$21$ questions in $50$ minutes with a graphing calculator'],
    correctIndex: 2,
    explanation: 'Part B is the short calculator part: $13$ questions in $40$ minutes. Part A is $29$ questions in $65$ minutes without a calculator.',
    partNumber: 1,
    partTitle: 'Exam Format, Pacing and the Calculator Split',
  },
  {
    id: 'per-ent-1b',
    question: 'Which task is a no-calculator skill on the exam?',
    options: ['Finding an exponential regression model from a table of data', 'Evaluating $\\sin\\left(\\dfrac{5\\pi}{3}\\right)$ exactly', 'Finding where $y = 2\\cos x$ and $y = x$ intersect, to three decimal places', 'Computing the residuals of a regression model'],
    correctIndex: 1,
    explanation: 'Unit-circle values are expected by hand: $\\sin\\frac{5\\pi}{3} = -\\frac{\\sqrt{3}}{2}$. Regression, numeric intersections and residual computations are calculator tasks.',
    partNumber: 1,
    partTitle: 'Exam Format, Pacing and the Calculator Split',
  },

  // Part 2 — Unit 1: Rates of Change and Polynomial Functions
  {
    id: 'per-ent-2a',
    question: 'For equally spaced inputs $0, 1, 2, 3$, a function has outputs $1, 3, 9, 19$. Which model type do the differences indicate?',
    options: ['Quadratic, since the second differences are constant', 'Linear, since the first differences are constant', 'Exponential, since each output is about three times the last', 'Cubic, since there are four data points'],
    correctIndex: 0,
    explanation: 'First differences $2, 6, 10$ are not constant; second differences $4, 4$ are. Constant second differences mean a quadratic model. The ratios $3, 3, 2.1$ are not constant, so the data is not exponential.',
    partNumber: 2,
    partTitle: 'Unit 1: Rates of Change and Polynomial Functions',
  },
  {
    id: 'per-ent-2b',
    question: 'What is the end behavior of $q(x) = 3x^4 - 5x^3 + x$?',
    options: ['$\\lim_{x \\to \\infty} q(x) = \\infty$ and $\\lim_{x \\to -\\infty} q(x) = -\\infty$', '$\\lim_{x \\to \\infty} q(x) = -\\infty$ and $\\lim_{x \\to -\\infty} q(x) = -\\infty$', '$\\lim_{x \\to \\infty} q(x) = -\\infty$ and $\\lim_{x \\to -\\infty} q(x) = \\infty$', '$\\lim_{x \\to \\infty} q(x) = \\infty$ and $\\lim_{x \\to -\\infty} q(x) = \\infty$'],
    correctIndex: 3,
    explanation: 'The leading term $3x^4$ has even degree and a positive coefficient, so both ends of the graph rise without bound.',
    partNumber: 2,
    partTitle: 'Unit 1: Rates of Change and Polynomial Functions',
  },

  // Part 3 — Unit 1: Rational Functions, Transformations and Models
  {
    id: 'per-ent-3a',
    question: 'What is the horizontal asymptote of $r(x) = \\dfrac{3x^2 - 1}{x^2 + 4}$?',
    options: ['$y = 0$', '$y = 3$', '$y = -\\dfrac{1}{4}$', 'There is no horizontal asymptote'],
    correctIndex: 1,
    explanation: 'Numerator and denominator have the same degree, so the horizontal asymptote is the ratio of leading coefficients: $y = \\frac{3}{1} = 3$. The ratio of constants, $-\\frac{1}{4}$, is the $y$-intercept.',
    partNumber: 3,
    partTitle: 'Unit 1: Rational Functions, Transformations and Models',
  },
  {
    id: 'per-ent-3b',
    question: 'The graph of $g(x) = f(x + 2) - 5$ is the graph of $f$ shifted:',
    options: ['right $2$ and down $5$', 'left $2$ and up $5$', 'left $2$ and down $5$', 'right $2$ and up $5$'],
    correctIndex: 2,
    explanation: 'Adding $2$ to the input shifts the graph left $2$; subtracting $5$ from the output shifts it down $5$.',
    partNumber: 3,
    partTitle: 'Unit 1: Rational Functions, Transformations and Models',
  },

  // Part 4 — Unit 2: Sequences, Exponential and Logarithmic Functions
  {
    id: 'per-ent-4a',
    question: 'In an arithmetic sequence, $a_3 = 11$ and $a_7 = 27$. What is $a_{10}$?',
    options: ['$43$', '$35$', '$39$', '$31$'],
    correctIndex: 2,
    explanation: 'Four steps raise the terms by $16$, so $d = 4$. Then $a_{10} = a_7 + 3d = 27 + 12 = 39$.',
    partNumber: 4,
    partTitle: 'Unit 2: Sequences, Exponential and Logarithmic Functions',
  },
  {
    id: 'per-ent-4b',
    question: 'What is the value of $\\log_4 32$?',
    options: ['$\\dfrac{5}{2}$', '$8$', '$2$', '$\\dfrac{3}{2}$'],
    correctIndex: 0,
    explanation: '$4^y = 32$ means $2^{2y} = 2^5$, so $2y = 5$ and $y = \\frac{5}{2}$. The value $8$ is $32 \\div 4$, and $\\frac{3}{2}$ is $\\log_4 8$.',
    partNumber: 4,
    partTitle: 'Unit 2: Sequences, Exponential and Logarithmic Functions',
  },

  // Part 5 — Unit 3: Trigonometric Functions and Sinusoidal Models
  {
    id: 'per-ent-5a',
    question: 'What is the exact value of $\\cos\\left(\\dfrac{5\\pi}{3}\\right)$?',
    options: ['$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{1}{2}$'],
    correctIndex: 3,
    explanation: '$\\frac{5\\pi}{3}$ is in Quadrant IV with reference angle $\\frac{\\pi}{3}$, and cosine is positive there: $\\cos\\frac{5\\pi}{3} = \\frac{1}{2}$.',
    partNumber: 5,
    partTitle: 'Unit 3: Trigonometric Functions and Sinusoidal Models',
  },
  {
    id: 'per-ent-5b',
    question: 'What is the period of $y = 2\\sin(4x)$?',
    options: ['$\\dfrac{\\pi}{4}$', '$\\dfrac{\\pi}{2}$', '$4\\pi$', '$8\\pi$'],
    correctIndex: 1,
    explanation: 'The period of $\\sin(bx)$ is $\\frac{2\\pi}{b} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$. The amplitude $2$ does not affect the period.',
    partNumber: 5,
    partTitle: 'Unit 3: Trigonometric Functions and Sinusoidal Models',
  },

  // Part 6 — Unit 3: Inverse Trigonometry, Equations, Identities and Polar Functions
  {
    id: 'per-ent-6a',
    question: 'What is the exact value of $\\arcsin\\left(-\\dfrac{\\sqrt{2}}{2}\\right)$?',
    options: ['$\\dfrac{7\\pi}{4}$', '$\\dfrac{5\\pi}{4}$', '$-\\dfrac{\\pi}{4}$', '$\\dfrac{3\\pi}{4}$'],
    correctIndex: 2,
    explanation: 'The range of arcsine is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, and the angle there with sine $-\\frac{\\sqrt{2}}{2}$ is $-\\frac{\\pi}{4}$. The angles $\\frac{5\\pi}{4}$ and $\\frac{7\\pi}{4}$ have the right sine but are outside the range.',
    partNumber: 6,
    partTitle: 'Unit 3: Inverse Trigonometry, Equations, Identities and Polar Functions',
  },
  {
    id: 'per-ent-6b',
    question: 'The point with rectangular coordinates $\\left(1, -\\sqrt{3}\\right)$ has polar coordinates $(r, \\theta)$ with $r > 0$ and $0 \\le \\theta < 2\\pi$. Which is it?',
    options: ['$\\left(2, \\dfrac{\\pi}{3}\\right)$', '$\\left(2, \\dfrac{5\\pi}{3}\\right)$', '$\\left(2, \\dfrac{2\\pi}{3}\\right)$', '$\\left(4, \\dfrac{5\\pi}{3}\\right)$'],
    correctIndex: 1,
    explanation: '$r = \\sqrt{1 + 3} = 2$, and the point lies in Quadrant IV with reference angle $\\frac{\\pi}{3}$, so $\\theta = \\frac{5\\pi}{3}$. The value $4$ is $r^2$, not $r$.',
    partNumber: 6,
    partTitle: 'Unit 3: Inverse Trigonometry, Equations, Identities and Polar Functions',
  },

  // Part 7 — Final Mixed Set: Part A and Part B Practice
  {
    id: 'per-ent-7a',
    question: 'What is the solution of $9^x = 27$?',
    options: ['$x = \\dfrac{2}{3}$', '$x = 3$', '$x = \\dfrac{3}{2}$', '$x = \\dfrac{1}{3}$'],
    correctIndex: 2,
    explanation: 'With base $3$: $3^{2x} = 3^3$, so $2x = 3$ and $x = \\frac{3}{2}$. The value $\\frac{2}{3}$ is $\\log_{27} 9$, the reciprocal.',
    partNumber: 7,
    partTitle: 'Final Mixed Set: Part A and Part B Practice',
  },
  {
    id: 'per-ent-7b',
    question: 'Using a graphing calculator, how many solutions does $3\\sin x = x$ have on $0 \\le x \\le 2\\pi$?',
    options: ['$1$', '$3$', '$4$', '$2$'],
    correctIndex: 3,
    explanation: 'The graphs of $y = 3\\sin x$ and $y = x$ meet at $x = 0$ and once more near $x \\approx 2.279$; for $x > \\pi$ the sine side is negative or too small while $x$ keeps growing, so there are exactly two solutions.',
    partNumber: 7,
    partTitle: 'Final Mixed Set: Part A and Part B Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exam Format, Pacing and the Calculator Split' },
    { partNumber: 2, partTitle: 'Unit 1: Rates of Change and Polynomial Functions' },
    { partNumber: 3, partTitle: 'Unit 1: Rational Functions, Transformations and Models' },
    { partNumber: 4, partTitle: 'Unit 2: Sequences, Exponential and Logarithmic Functions' },
    { partNumber: 5, partTitle: 'Unit 3: Trigonometric Functions and Sinusoidal Models' },
    { partNumber: 6, partTitle: 'Unit 3: Inverse Trigonometry, Equations, Identities and Polar Functions' },
    { partNumber: 7, partTitle: 'Final Mixed Set: Part A and Part B Practice' },
  ]
}
