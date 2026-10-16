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

  // Part 5 — Inverse Trig with Right Triangles
  {
    id: 'it-ent-5a',
    question: 'For $-4 < x < 4$, which algebraic expression equals $\\cos\\left(\\arcsin\\frac{x}{4}\\right)$?',
    options: ['$\\frac{\\sqrt{16 - x^2}}{4}$', '$\\frac{\\sqrt{16 + x^2}}{4}$', '$\\frac{4}{\\sqrt{16 - x^2}}$', '$\\frac{x}{\\sqrt{16 - x^2}}$'],
    correctIndex: 0,
    explanation: 'Let $\\theta = \\arcsin\\frac{x}{4}$: a right triangle with opposite side $x$ and hypotenuse $4$ has adjacent side $\\sqrt{16 - x^2}$, so $\\cos\\theta = \\frac{\\sqrt{16 - x^2}}{4}$ (positive, since $\\theta$ is in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$). The expression $\\frac{x}{\\sqrt{16 - x^2}}$ is $\\tan\\theta$.',
    partNumber: 5,
    partTitle: 'Inverse Trig with Right Triangles',
  },
  {
    id: 'it-ent-5b',
    question: 'A wheelchair ramp is $12$ m long and rises $1$ m from the ground to the top. Using a calculator in radian mode, what angle does the ramp make with the ground, to the nearest hundredth of a radian?',
    options: ['$4.78$', '$1.49$', '$0.08$', '$\\frac{\\pi}{12}$'],
    correctIndex: 2,
    explanation: 'The ramp is the hypotenuse and the rise is opposite the angle, so $\\theta = \\arcsin\\frac{1}{12} \\approx 0.08$ radian. The value $4.78$ is the same angle in degrees, and $1.49$ is the angle at the top of the ramp.',
    partNumber: 5,
    partTitle: 'Inverse Trig with Right Triangles',
  },

  // Part 6 — Applications of Inverse Trig
  {
    id: 'it-ent-6a',
    question: 'Solve $\\arccos(2x - 1) = \\frac{2\\pi}{3}$.',
    options: ['$\\frac{2\\pi+3}{6}$', '$\\frac{1}{4}$', '$-\\frac{1}{4}$', '$\\frac{2-\\sqrt{3}}{4}$'],
    correctIndex: 1,
    explanation: 'Apply cosine to both sides: $2x - 1 = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, so $2x = \\frac{1}{2}$ and $x = \\frac{1}{4}$. Setting $2x - 1$ equal to the angle itself gives $\\frac{2\\pi+3}{6}$.',
    partNumber: 6,
    partTitle: 'Applications of Inverse Trig',
  },
  {
    id: 'it-ent-6b',
    question: 'From the top of a $60$ m cliff, an observer sees a boat $150$ m from the base of the cliff. Using a calculator in radian mode, what is the angle of depression to the boat, to the nearest hundredth of a radian?',
    options: ['$1.19$', '$0.41$', '$21.80$', '$0.38$'],
    correctIndex: 3,
    explanation: 'The angle of depression equals the angle of elevation from the boat, so $\\theta = \\arctan\\frac{60}{150} \\approx 0.38$. Using $\\arctan\\frac{150}{60}$ gives $1.19$, the angle measured from the vertical, and $21.80$ is the answer in degrees.',
    partNumber: 6,
    partTitle: 'Applications of Inverse Trig',
  },

  // Part 7 — Full Synthesis
  {
    id: 'it-ent-7a',
    question: 'What is the exact value of $\\cos\\left(\\arcsin\\frac{3}{5} + \\arccos\\frac{5}{13}\\right)$?',
    options: ['$-\\frac{16}{65}$', '$\\frac{56}{65}$', '$\\frac{16}{65}$', '$\\frac{63}{65}$'],
    correctIndex: 0,
    explanation: 'Let $A = \\arcsin\\frac{3}{5}$ and $B = \\arccos\\frac{5}{13}$, both in Quadrant I, so $\\cos A = \\frac{4}{5}$ and $\\sin B = \\frac{12}{13}$. Then $\\cos(A + B) = \\frac{4}{5} \\cdot \\frac{5}{13} - \\frac{3}{5} \\cdot \\frac{12}{13} = -\\frac{16}{65}$; $\\frac{56}{65}$ is $\\cos(A - B)$.',
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
    { partNumber: 5, partTitle: 'Inverse Trig with Right Triangles' },
    { partNumber: 6, partTitle: 'Applications of Inverse Trig' },
    { partNumber: 7, partTitle: 'Inverse Trig — Full Synthesis' },
  ]
}
