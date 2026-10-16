/**
 * Entrance Quiz — Linearization & Differentials (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Tangent Line Approximation
  {
    id: 'lin-ent-1a',
    question: 'Use the linearization of $f(x) = \\sqrt[3]{x}$ at $a = 8$ to approximate $\\sqrt[3]{8.24}$.',
    options: ['$2.02$', '$2.08$', '$2.12$', '$2.24$'],
    correctIndex: 0,
    explanation: '$f(8) = 2$ and $f\'(x) = \\frac{1}{3}x^{-2/3}$, so $f\'(8) = \\frac{1}{12}$. Then $L(8.24) = 2 + \\frac{0.24}{12} = 2.02$. Using a slope of $\\frac{1}{3}$ gives 2.08.',
    partNumber: 1,
    partTitle: 'The Tangent Line Approximation',
  },
  {
    id: 'lin-ent-1b',
    question: 'What is the linearization of $f(x) = \\tan x$ at $a = \\frac{\\pi}{4}$?',
    options: ['$L(x) = 1 + \\left(x - \\frac{\\pi}{4}\\right)$', '$L(x) = 1 + 2\\left(x - \\frac{\\pi}{4}\\right)$', '$L(x) = 2 + \\left(x - \\frac{\\pi}{4}\\right)$', '$L(x) = 1 + 2x$'],
    correctIndex: 1,
    explanation: '$f\\left(\\frac{\\pi}{4}\\right) = 1$ and $f\'(x) = \\sec^2 x$, so $f\'\\left(\\frac{\\pi}{4}\\right) = (\\sqrt{2})^2 = 2$. Then $L(x) = 1 + 2\\left(x - \\frac{\\pi}{4}\\right)$; the displacement must be measured from $\\frac{\\pi}{4}$, not from 0.',
    partNumber: 1,
    partTitle: 'The Tangent Line Approximation',
  },
  // Part 2 — Approximating Values
  {
    id: 'lin-ent-2a',
    question: 'Use the approximation $(1 + x)^n \\approx 1 + nx$ for small $x$ to estimate $(1.02)^{10}$.',
    options: ['$1.02$', '$1.002$', '$1.2$', '$10.2$'],
    correctIndex: 2,
    explanation: 'Here $x = 0.02$ and $n = 10$, so $(1.02)^{10} \\approx 1 + 10(0.02) = 1.2$. Leaving out the factor $n$ gives 1.02.',
    partNumber: 2,
    partTitle: 'Approximating Values',
  },
  {
    id: 'lin-ent-2b',
    question: 'Use the tangent line to $y = e^x$ at $x = 0$ to estimate $e^{-0.1}$. How does the estimate compare with the true value?',
    options: ['$0.9$, an overestimate', '$1.1$, an underestimate', '$1.1$, an overestimate', '$0.9$, an underestimate'],
    correctIndex: 3,
    explanation: 'The tangent line is $L(x) = 1 + x$, so $L(-0.1) = 0.9$. Since $(e^x)\'\' = e^x > 0$, the graph is concave up and lies above its tangent, so 0.9 is an underestimate (indeed $e^{-0.1} \\approx 0.905$).',
    partNumber: 2,
    partTitle: 'Approximating Values',
  },
  // Part 3 — Differentials
  {
    id: 'lin-ent-3a',
    question: 'For $y = \\dfrac{1}{x}$, find the differential $dy$ when $x = 2$ and $dx = 0.1$.',
    options: ['$-0.025$', '$0.025$', '$-0.05$', '$-0.0238$'],
    correctIndex: 0,
    explanation: '$dy = -\\frac{1}{x^2}\\,dx = -\\frac{1}{4}(0.1) = -0.025$. The value $-0.0238$ is the actual change $\\Delta y = \\frac{1}{2.1} - \\frac{1}{2}$, not the differential.',
    partNumber: 3,
    partTitle: 'Differentials',
  },
  {
    id: 'lin-ent-3b',
    question: 'For $y = x^3$ at $x = 1$ with $dx = \\Delta x = 0.1$, which pair gives the differential $dy$ and the actual change $\\Delta y$?',
    options: ['$dy = 0.331$ and $\\Delta y = 0.3$', '$dy = 0.3$ and $\\Delta y = 0.331$', '$dy = 0.3$ and $\\Delta y = 0.3$', '$dy = 3$ and $\\Delta y = 3.31$'],
    correctIndex: 1,
    explanation: '$dy = 3x^2\\,dx = 3(1)(0.1) = 0.3$ is the change along the tangent line, while $\\Delta y = (1.1)^3 - 1 = 0.331$ is the change along the curve.',
    partNumber: 3,
    partTitle: 'Differentials',
  },
  // Part 4 — Error Analysis
  {
    id: 'lin-ent-4a',
    question: 'The tangent line to $f(x) = x^2$ at $a = 6$ is used to estimate $f(6.2)$. What is the absolute error of the estimate?',
    options: ['$0.4$', '$2.4$', '$0.04$', '$0.2$'],
    correctIndex: 2,
    explanation: 'The estimate is $L(6.2) = 36 + 12(0.2) = 38.4$, and the true value is $6.2^2 = 38.44$. The absolute error is $|38.44 - 38.4| = 0.04$; the value 2.4 is $dy$ itself.',
    partNumber: 4,
    partTitle: 'Error Analysis',
  },
  {
    id: 'lin-ent-4b',
    question: 'A function has $f\'\'(x) < 0$ near $x = a$. The tangent line at $a$ is used to estimate both $f(a + h)$ and $f(a - h)$ for a small $h > 0$. Which is true?',
    options: ['Both are underestimates', 'The one at $a + h$ is over, the other under', 'The one at $a + h$ is under, the other over', 'Both are overestimates'],
    correctIndex: 3,
    explanation: 'Concave down means the graph lies below its tangent line on both sides of $a$, so the tangent-line values are too large on both sides. The direction of the displacement does not matter.',
    partNumber: 4,
    partTitle: 'Error Analysis',
  },
  // Part 5 — Applications
  {
    id: 'lin-ent-5a',
    question: 'A cube\'s side is measured as $5$ cm with a possible error of $0.1$ cm. Use differentials to estimate the possible error in its volume.',
    options: ['$7.5$ cm$^3$', '$15$ cm$^3$', '$2.5$ cm$^3$', '$0.3$ cm$^3$'],
    correctIndex: 0,
    explanation: 'With $V = s^3$, $dV = 3s^2\\,ds = 3(25)(0.1) = 7.5$ cm$^3$. The value 15 comes from using the surface area $6s^2$ in place of $3s^2$.',
    partNumber: 5,
    partTitle: 'Applications',
  },
  {
    id: 'lin-ent-5b',
    question: 'A circle\'s radius is measured as $10$ cm with a possible error of $0.2$ cm. Estimate the relative error $\\frac{dA}{A}$ in its area.',
    options: ['$0.02$', '$0.04$', '$0.4$', '$4\\pi$'],
    correctIndex: 1,
    explanation: '$\\frac{dA}{A} = \\frac{2\\pi r\\,dr}{\\pi r^2} = \\frac{2\\,dr}{r} = \\frac{2(0.2)}{10} = 0.04$. The relative error in the radius alone is 0.02; squaring doubles it. The value $4\\pi$ is $dA$, not the relative error.',
    partNumber: 5,
    partTitle: 'Applications',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'lin-ent-6a',
    question: 'A table gives $f(1) = 4$, $f\'(1) = -2$, $f(3) = 1$ and $f\'(3) = 5$. Using the tangent line at the nearest table value, approximate $f(2.9)$.',
    options: ['$1.5$', '$0.2$', '$0.5$', '$-0.5$'],
    correctIndex: 2,
    explanation: 'The nearest point is $x = 3$: $L(2.9) = f(3) + f\'(3)(2.9 - 3) = 1 + 5(-0.1) = 0.5$. Using $+0.1$ for the displacement gives 1.5.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'lin-ent-6b',
    question: 'Given $f(5) = 3$, $f\'(5) = 2$ and $f\'\'(x) < 0$ on $[4, 6]$, a student estimates $f(5.3) \\approx 3.6$ and says it is an overestimate. Which reason completes the justification?',
    options: ['The graph is increasing, so the tangent lies below it', 'Since $f\'(5) > 0$, the estimate is too small', 'Since $f\'\'(5)$ exists, the estimate is exact', 'The graph is concave down, so the tangent lies above it'],
    correctIndex: 3,
    explanation: 'An over/underestimate is justified by concavity: $f\'\' < 0$ means the graph is concave down and lies below its tangent line, so the tangent-line value 3.6 is too large. The sign of $f\'$ is irrelevant.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Final Assessment
  {
    id: 'lin-ent-7a',
    question: 'Use the linearization of $\\ln x$ at $a = 1$ to approximate $\\ln(0.96)$.',
    options: ['$-0.04$', '$0.04$', '$0.96$', '$1.04$'],
    correctIndex: 0,
    explanation: 'At $a = 1$, $\\ln 1 = 0$ and the slope is $\\frac{1}{1} = 1$, so $L(x) = x - 1$ and $L(0.96) = -0.04$. A logarithm of a number below 1 must be negative.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'lin-ent-7b',
    question: 'For $y = \\sin x$, find $dy$ when $x = \\frac{\\pi}{3}$ and $dx = 0.06$.',
    options: ['$0.06$', '$0.03$', '$0.03\\sqrt{3}$', '$\\frac{1}{2}$'],
    correctIndex: 1,
    explanation: '$dy = \\cos x\\,dx = \\cos\\frac{\\pi}{3}(0.06) = \\frac{1}{2}(0.06) = 0.03$. Using $\\sin\\frac{\\pi}{3}$ instead of the derivative gives $0.03\\sqrt{3}$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Tangent Line Approximation' },
    { partNumber: 2, partTitle: 'Approximating Values' },
    { partNumber: 3, partTitle: 'Differentials' },
    { partNumber: 4, partTitle: 'Error Analysis' },
    { partNumber: 5, partTitle: 'Applications' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
