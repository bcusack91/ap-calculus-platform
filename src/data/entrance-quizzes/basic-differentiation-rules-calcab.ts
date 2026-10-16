/**
 * Entrance Quiz — Basic Differentiation Rules (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Power Rule
  {
    id: 'bdr-ent-1a',
    question: 'Find $\\dfrac{d}{dx}\\left(6x^{2/3} - \\dfrac{4}{x^2} + \\pi^3\\right)$.',
    options: ['$4x^{-1/3} + 8x^{-3} + 3\\pi^2$', '$4x^{-1/3} - 8x^{-3}$', '$4x^{-1/3} + 8x^{-3}$', '$4x^{1/3} + 8x^{-3}$'],
    correctIndex: 2,
    explanation: 'Rewrite as $6x^{2/3} - 4x^{-2} + \\pi^3$. The power rule gives $6 \\cdot \\frac{2}{3}x^{-1/3} = 4x^{-1/3}$ and $-4(-2)x^{-3} = 8x^{-3}$, and $\\pi^3$ is a constant with derivative 0.',
    partNumber: 1,
    partTitle: 'The Power Rule',
  },
  {
    id: 'bdr-ent-1b',
    question: 'Let $f(x) = 4\\sqrt{x} + 2^x$. Find $f\'(4)$.',
    options: ['$17$', '$1 + 16\\ln 2$', '$2 + 16\\ln 2$', '$33$'],
    correctIndex: 1,
    explanation: '$f\'(x) = 4 \\cdot \\frac{1}{2}x^{-1/2} + 2^x \\ln 2 = \\frac{2}{\\sqrt{x}} + 2^x \\ln 2$. At $x = 4$: $1 + 16\\ln 2$. Dropping the $\\ln 2$ gives 17, and treating $2^x$ like a power gives 33.',
    partNumber: 1,
    partTitle: 'The Power Rule',
  },
  // Part 2 — Product Rule
  {
    id: 'bdr-ent-2a',
    question: 'Given $f(1) = 2$, $f\'(1) = -3$, $g(1) = 5$ and $g\'(1) = 4$, find the derivative of $f(x)g(x)$ at $x = 1$.',
    options: ['$-12$', '$-23$', '$-7$', '$-15$'],
    correctIndex: 2,
    explanation: 'By the product rule, $f\'(1)g(1) + f(1)g\'(1) = (-3)(5) + (2)(4) = -15 + 8 = -7$. Multiplying the derivatives gives $-12$, which is the classic error.',
    partNumber: 2,
    partTitle: 'Product Rule',
  },
  {
    id: 'bdr-ent-2b',
    question: 'Let $h(x) = x^2 \\sin x$. Find $h\'\\left(\\frac{\\pi}{2}\\right)$.',
    options: ['$\\frac{\\pi^2}{4}$', '$\\pi + \\frac{\\pi^2}{4}$', '$0$', '$\\pi$'],
    correctIndex: 3,
    explanation: '$h\'(x) = 2x\\sin x + x^2\\cos x$. At $\\frac{\\pi}{2}$: $2 \\cdot \\frac{\\pi}{2} \\cdot 1 + \\frac{\\pi^2}{4} \\cdot 0 = \\pi$.',
    partNumber: 2,
    partTitle: 'Product Rule',
  },
  // Part 3 — Quotient Rule
  {
    id: 'bdr-ent-3a',
    question: 'Find $\\dfrac{d}{dx}\\left(\\dfrac{2x - 1}{x + 3}\\right)$.',
    options: ['$\\frac{7}{(x + 3)^2}$', '$\\frac{-7}{(x + 3)^2}$', '$2$', '$\\frac{4x + 5}{(x + 3)^2}$'],
    correctIndex: 0,
    explanation: 'Quotient rule: $\\frac{2(x + 3) - (2x - 1)(1)}{(x + 3)^2} = \\frac{7}{(x + 3)^2}$. Reversing the order of the numerator terms gives $-7$, and dividing the two derivatives gives 2.',
    partNumber: 3,
    partTitle: 'Quotient Rule',
  },
  {
    id: 'bdr-ent-3b',
    question: 'Given $f(2) = 6$, $f\'(2) = 1$, $g(2) = 3$ and $g\'(2) = -2$, find the derivative of $\\dfrac{g(x)}{f(x)}$ at $x = 2$.',
    options: ['$\\frac{5}{3}$', '$-\\frac{5}{12}$', '$-\\frac{1}{4}$', '$-2$'],
    correctIndex: 1,
    explanation: 'With $g$ on top: $\\frac{g\'(2)f(2) - g(2)f\'(2)}{[f(2)]^2} = \\frac{(-2)(6) - (3)(1)}{36} = -\\frac{15}{36} = -\\frac{5}{12}$. Using $\\frac{f}{g}$ instead gives $\\frac{5}{3}$.',
    partNumber: 3,
    partTitle: 'Quotient Rule',
  },
  // Part 4 — Trig Derivatives
  {
    id: 'bdr-ent-4a',
    question: 'Let $f(x) = 3\\sec x - 2\\tan x$. Find $f\'\\left(\\frac{\\pi}{4}\\right)$.',
    options: ['$3\\sqrt{2} + 4$', '$3 - 4\\sqrt{2}$', '$3\\sqrt{2} - 4$', '$3\\sqrt{2} - 2$'],
    correctIndex: 2,
    explanation: '$f\'(x) = 3\\sec x\\tan x - 2\\sec^2 x$. At $\\frac{\\pi}{4}$, $\\sec x = \\sqrt{2}$ and $\\tan x = 1$, so $f\' = 3\\sqrt{2} - 2(2) = 3\\sqrt{2} - 4$.',
    partNumber: 4,
    partTitle: 'Trig Derivatives',
  },
  {
    id: 'bdr-ent-4b',
    question: 'Find $\\dfrac{d}{dx}\\left(\\dfrac{\\cos x}{1 + \\sin x}\\right)$.',
    options: ['$\\frac{1}{1 + \\sin x}$', '$-\\tan x$', '$-\\cot x$', '$-\\frac{1}{1 + \\sin x}$'],
    correctIndex: 3,
    explanation: 'The quotient rule gives $\\frac{-\\sin x(1 + \\sin x) - \\cos^2 x}{(1 + \\sin x)^2} = \\frac{-(\\sin x + 1)}{(1 + \\sin x)^2} = -\\frac{1}{1 + \\sin x}$, using $\\sin^2 x + \\cos^2 x = 1$. Dividing the derivatives gives $-\\tan x$.',
    partNumber: 4,
    partTitle: 'Trig Derivatives',
  },
  // Part 5 — Higher-Order Derivatives
  {
    id: 'bdr-ent-5a',
    question: 'For $f(x) = x^3 - 6x^2 + 9x$, what does the Second Derivative Test conclude at the critical point $x = 1$?',
    options: ['Local maximum', 'Local minimum', 'Inflection point', 'Test is inconclusive'],
    correctIndex: 0,
    explanation: '$f\'(x) = 3x^2 - 12x + 9 = 0$ at $x = 1$, and $f\'\'(x) = 6x - 12$ gives $f\'\'(1) = -6 < 0$. The graph is concave down at a horizontal tangent, so $x = 1$ is a local maximum.',
    partNumber: 5,
    partTitle: 'Higher-Order Derivatives',
  },
  {
    id: 'bdr-ent-5b',
    question: 'On what interval is $f(x) = x^4 - 6x^2$ concave down?',
    options: ['$(-\\sqrt{3}, \\sqrt{3})$', '$(-1, 1)$', '$(-\\infty, -1) \\cup (1, \\infty)$', '$(0, \\sqrt{3})$'],
    correctIndex: 1,
    explanation: '$f\'\'(x) = 12x^2 - 12 = 12(x - 1)(x + 1)$, which is negative for $-1 < x < 1$. The values $\\pm\\sqrt{3}$ are zeros of $f\'$, which locate extrema, not concavity.',
    partNumber: 5,
    partTitle: 'Higher-Order Derivatives',
  },
  // Part 6 — Mixed Differentiation Problems
  {
    id: 'bdr-ent-6a',
    question: 'Find $\\dfrac{d}{dx}\\left(\\dfrac{x^4 - 3x + 2}{x^2}\\right)$.',
    options: ['$2x - \\frac{3}{x^2} - \\frac{4}{x^3}$', '$2x + \\frac{3}{x^2} + \\frac{4}{x^3}$', '$2x + \\frac{3}{x^2} - \\frac{4}{x^3}$', '$\\frac{4x^3 - 3}{2x}$'],
    correctIndex: 2,
    explanation: 'Split first: $x^2 - 3x^{-1} + 2x^{-2}$. Differentiating term by term gives $2x + 3x^{-2} - 4x^{-3}$. Dividing derivative by derivative is never valid.',
    partNumber: 6,
    partTitle: 'Mixed Differentiation Problems',
  },
  {
    id: 'bdr-ent-6b',
    question: 'A particle moves along the $x$-axis with position $s(t) = t^3 - 3t^2 - 9t$. At $t = 2$, which describes its motion?',
    options: ['It moves left and speeds up', 'It moves right and slows down', 'It moves right and speeds up', 'It moves left and slows down'],
    correctIndex: 3,
    explanation: '$v(t) = 3t^2 - 6t - 9$ gives $v(2) = -9 < 0$, so it moves left. $a(t) = 6t - 6$ gives $a(2) = 6 > 0$. Velocity and acceleration have opposite signs, so it is slowing down.',
    partNumber: 6,
    partTitle: 'Mixed Differentiation Problems',
  },
  // Part 7 — Comprehensive Review
  {
    id: 'bdr-ent-7a',
    question: 'At what $x > 0$ does $f(x) = x^2 + \\dfrac{16}{x}$ have a horizontal tangent?',
    options: ['$x = 2$', '$x = 2\\sqrt{2}$', '$x = \\sqrt[3]{16}$', '$x = 4\\sqrt[3]{2}$'],
    correctIndex: 0,
    explanation: 'Set $f\'(x) = 2x - \\frac{16}{x^2} = 0$: $2x^3 = 16$, so $x^3 = 8$ and $x = 2$. Writing the derivative of $\\frac{16}{x}$ as $-\\frac{16}{x}$ leads to $2\\sqrt{2}$.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
  {
    id: 'bdr-ent-7b',
    question: 'What is the equation of the normal line to $y = x^2 - 3x$ at $x = 1$?',
    options: ['$y = -x - 1$', '$y = x - 3$', '$y = x - 1$', '$y = -x + 3$'],
    correctIndex: 1,
    explanation: 'The point is $(1, -2)$ and the tangent slope is $2(1) - 3 = -1$, so the normal slope is the negative reciprocal, 1. Then $y + 2 = x - 1$, or $y = x - 3$; $y = -x - 1$ is the tangent line.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Power Rule' },
    { partNumber: 2, partTitle: 'Product Rule' },
    { partNumber: 3, partTitle: 'Quotient Rule' },
    { partNumber: 4, partTitle: 'Trig Derivatives' },
    { partNumber: 5, partTitle: 'Higher-Order Derivatives' },
    { partNumber: 6, partTitle: 'Mixed Differentiation Problems' },
    { partNumber: 7, partTitle: 'Comprehensive Review' },
  ]
}
