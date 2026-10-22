/**
 * Entrance Quiz — Inverse Functions & Their Derivatives (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Derivative of an Inverse Function
  {
    id: 'ifd-ent-1a',
    question: 'Let $f(x) = x^3 + 2x + 1$. Find $(f^{-1})\'(4)$.',
    options: ['$\\frac{1}{5}$', '$\\frac{1}{50}$', '$5$', '$\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: 'First find where $f(b) = 4$: $b = 1$. Then $f\'(x) = 3x^2 + 2$ gives $f\'(1) = 5$, so $(f^{-1})\'(4) = \\frac{1}{5}$. Using $f\'(4) = 50$ is the common error.',
    partNumber: 1,
    partTitle: 'Derivative of an Inverse Function',
  },
  {
    id: 'ifd-ent-1b',
    question: 'Let $f(x) = \\sqrt{x}$ for $x \\ge 0$. Find $(f^{-1})\'(2)$.',
    options: ['$\\frac{1}{4}$', '$2\\sqrt{2}$', '$\\frac{1}{2\\sqrt{2}}$', '$4$'],
    correctIndex: 3,
    explanation: 'Since $f(4) = 2$, $(f^{-1})\'(2) = \\frac{1}{f\'(4)} = \\frac{1}{1/(2\\sqrt{4})} = 4$. This matches $f^{-1}(x) = x^2$, whose derivative at 2 is 4.',
    partNumber: 1,
    partTitle: 'Derivative of an Inverse Function',
  },
  // Part 2 — Table-Based Inverse Problems
  {
    id: 'ifd-ent-2a',
    question: 'A table gives $f(0) = 2$, $f\'(0) = 5$, $f(2) = 3$, $f\'(2) = 4$, $f(3) = 6$ and $f\'(3) = -1$. Find $(f^{-1})\'(3)$.',
    options: ['$-1$', '$\\frac{1}{5}$', '$\\frac{1}{4}$', '$2$'],
    correctIndex: 2,
    explanation: 'Look for the row where $f(x) = 3$: that is $x = 2$. So $(f^{-1})\'(3) = \\frac{1}{f\'(2)} = \\frac{1}{4}$. Using the row $x = 3$ gives $-1$, and 2 is $f^{-1}(3)$, not its derivative.',
    partNumber: 2,
    partTitle: 'Table-Based Inverse Problems',
  },
  {
    id: 'ifd-ent-2b',
    question: 'Let $g = f^{-1}$, where $f(-2) = 5$ and $f\'(-2) = 4$. Which is the tangent line to $y = g(x)$ at $x = 5$?',
    options: ['$y - 5 = 4(x + 2)$', '$y + 2 = 4(x - 5)$', '$y - 5 = \\frac{1}{4}(x + 2)$', '$y + 2 = \\frac{1}{4}(x - 5)$'],
    correctIndex: 3,
    explanation: 'The inverse swaps coordinates, so $g$ passes through $(5, -2)$, and its slope there is $\\frac{1}{f\'(-2)} = \\frac{1}{4}$. The line is $y + 2 = \\frac{1}{4}(x - 5)$; $y - 5 = 4(x + 2)$ is the tangent to $f$.',
    partNumber: 2,
    partTitle: 'Table-Based Inverse Problems',
  },
  // Part 3 — Inverse Trig Derivatives
  {
    id: 'ifd-ent-3a',
    question: 'Find $\\dfrac{d}{dx}\\arctan\\left(\\dfrac{x}{3}\\right)$.',
    options: ['$\\frac{3}{9 + x^2}$', '$\\frac{1}{\\sqrt{9 - x^2}}$', '$\\frac{1}{1 + \\frac{x^2}{9}}$', '$\\frac{-3}{9 + x^2}$'],
    correctIndex: 0,
    explanation: 'With $u = \\frac{x}{3}$: $\\frac{u\'}{1 + u^2} = \\frac{1/3}{1 + x^2/9} = \\frac{3}{9 + x^2}$. Omitting the factor $\\frac{1}{3}$ gives $\\frac{1}{1 + x^2/9}$, and $\\frac{1}{\\sqrt{9 - x^2}}$ is the derivative of $\\arcsin\\frac{x}{3}$.',
    partNumber: 3,
    partTitle: 'Inverse Trig Derivatives',
  },
  {
    id: 'ifd-ent-3b',
    question: 'Let $f(x) = \\arccos x$. Find $f\'\\left(\\frac{1}{2}\\right)$.',
    options: ['$\\frac{2}{\\sqrt{3}}$', '$-\\frac{2}{\\sqrt{3}}$', '$-\\frac{4}{5}$', '$-\\frac{\\sqrt{3}}{2}$'],
    correctIndex: 1,
    explanation: '$\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1 - x^2}}$. At $x = \\frac{1}{2}$: $-\\frac{1}{\\sqrt{3/4}} = -\\frac{2}{\\sqrt{3}}$. Dropping the negative sign gives the arcsine value.',
    partNumber: 3,
    partTitle: 'Inverse Trig Derivatives',
  },
  // Part 4 — Derivatives Involving ln and log
  {
    id: 'ifd-ent-4a',
    question: 'Let $f(x) = \\log_2(x^2 + 1)$. Find $f\'(1)$.',
    options: ['$1$', '$\\ln 2$', '$\\frac{1}{\\ln 2}$', '$\\frac{2}{\\ln 2}$'],
    correctIndex: 2,
    explanation: '$f\'(x) = \\frac{2x}{(x^2 + 1)\\ln 2}$. At $x = 1$: $\\frac{2}{2\\ln 2} = \\frac{1}{\\ln 2}$. Treating $\\log_2$ like $\\ln$ gives 1.',
    partNumber: 4,
    partTitle: 'Derivatives Involving ln and log',
  },
  {
    id: 'ifd-ent-4b',
    question: 'Let $f(x) = \\ln\\left(\\dfrac{x^3}{(x + 1)^2}\\right)$ for $x > 0$. Find $f\'(1)$.',
    options: ['$\\frac{5}{2}$', '$\\frac{11}{4}$', '$\\frac{7}{2}$', '$2$'],
    correctIndex: 3,
    explanation: 'Use log properties first: $f(x) = 3\\ln x - 2\\ln(x + 1)$, so $f\'(x) = \\frac{3}{x} - \\frac{2}{x + 1}$ and $f\'(1) = 3 - 1 = 2$. Dropping the coefficient 2 gives $\\frac{5}{2}$.',
    partNumber: 4,
    partTitle: 'Derivatives Involving ln and log',
  },
  // Part 5 — Combining Techniques
  {
    id: 'ifd-ent-5a',
    question: 'Let $f(x) = x^3 + 2x - 1$ and $g = f^{-1}$. What is $g\'(2)$?',
    options: ['$\\frac{1}{5}$', '$\\frac{1}{14}$', '$5$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: '$f(1) = 2$, so $g(2) = 1$. Then $f\'(x) = 3x^2 + 2$ gives $f\'(1) = 5$ and $g\'(2) = \\frac{1}{5}$. Evaluating $f\'$ at $2$ instead of $1$ gives $\\frac{1}{14}$, and $5$ forgets the reciprocal.',
    partNumber: 5,
    partTitle: 'Combining Techniques',
  },
  {
    id: 'ifd-ent-5b',
    question: 'The point $(0, 1)$ lies on the curve $\\ln y = x - y + 1$. Find $\\dfrac{dy}{dx}$ there.',
    options: ['$1$', '$\\frac{1}{2}$', '$\\frac{3}{2}$', '$0$'],
    correctIndex: 1,
    explanation: 'Differentiate: $\\frac{1}{y}\\frac{dy}{dx} = 1 - \\frac{dy}{dx}$. At $y = 1$ this is $\\frac{dy}{dx} = 1 - \\frac{dy}{dx}$, so $\\frac{dy}{dx} = \\frac{1}{2}$.',
    partNumber: 5,
    partTitle: 'Combining Techniques',
  },
  // Part 6 — Practice Workshop
  {
    id: 'ifd-ent-6a',
    question: 'Let $g = f^{-1}$, where $f(2) = 5$ and $f\'(2) = 3$, and let $h(x) = \\ln(g(x))$. Find $h\'(5)$.',
    options: ['$\\frac{1}{15}$', '$\\frac{3}{2}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
    correctIndex: 2,
    explanation: '$h\'(x) = \\frac{g\'(x)}{g(x)}$. Here $g(5) = 2$ and $g\'(5) = \\frac{1}{f\'(2)} = \\frac{1}{3}$, so $h\'(5) = \\frac{1/3}{2} = \\frac{1}{6}$. Dividing by 5 instead of $g(5)$ gives $\\frac{1}{15}$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'ifd-ent-6b',
    question: 'Let $f(x) = e^{3x}$ and $g = f^{-1}$. Find $g\'(e^6)$.',
    options: ['$3e^6$', '$\\frac{1}{e^6}$', '$\\frac{1}{3}$', '$\\frac{1}{3e^6}$'],
    correctIndex: 3,
    explanation: 'Since $f(2) = e^6$ and $f\'(x) = 3e^{3x}$, $g\'(e^6) = \\frac{1}{f\'(2)} = \\frac{1}{3e^6}$. This agrees with $g(x) = \\frac{\\ln x}{3}$, whose derivative is $\\frac{1}{3x}$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  // Part 7 — Final Assessment
  {
    id: 'ifd-ent-7a',
    question: 'Let $f(x) = x\\arctan x$. Find $f\'(1)$.',
    options: ['$\\frac{\\pi}{4} + \\frac{1}{2}$', '$\\frac{1}{2}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{4} + 1$'],
    correctIndex: 0,
    explanation: 'Product rule: $f\'(x) = \\arctan x + \\frac{x}{1 + x^2}$. At $x = 1$: $\\frac{\\pi}{4} + \\frac{1}{2}$. Taking the derivative of $\\arctan x$ to be $\\frac{1}{x}$ gives $\\frac{\\pi}{4} + 1$, and dropping the second product-rule term gives $\\frac{\\pi}{4}$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ifd-ent-7b',
    question: 'A differentiable, invertible function has $f(5) = -1$ and $f\'(5) = -2$. If $g = f^{-1}$, which pair is correct?',
    options: ['$g(5) = -1$ and $g\'(5) = -\\frac{1}{2}$', '$g(-1) = 5$ and $g\'(-1) = -\\frac{1}{2}$', '$g(-1) = 5$ and $g\'(-1) = -2$', '$g(-1) = 5$ and $g\'(-1) = \\frac{1}{2}$'],
    correctIndex: 1,
    explanation: 'The inverse swaps inputs and outputs, so $g(-1) = 5$, and $g\'(-1) = \\frac{1}{f\'(5)} = -\\frac{1}{2}$. The reciprocal keeps the sign of $f\'$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Derivative of an Inverse Function' },
    { partNumber: 2, partTitle: 'Table-Based Inverse Problems' },
    { partNumber: 3, partTitle: 'Inverse Trig Derivatives' },
    { partNumber: 4, partTitle: 'Derivatives Involving ln and log' },
    { partNumber: 5, partTitle: 'Combining Techniques' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
