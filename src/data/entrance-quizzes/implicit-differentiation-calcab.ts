/**
 * Entrance Quiz — Implicit Differentiation (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Differentiating Equations Not Solved for y
  {
    id: 'imp-ent-1a',
    question: 'Find the slope of the curve $4x^2 + y^2 = 20$ at the point $(2, -2)$.',
    options: ['$4$', '$-4$', '$\\frac{1}{4}$', '$-\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: 'Differentiate: $8x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{4x}{y}$. At $(2, -2)$: $-\\frac{8}{-2} = 4$. Ignoring the negative $y$-coordinate gives $-4$.',
    partNumber: 1,
    partTitle: 'Differentiating Equations Not Solved for y',
  },
  {
    id: 'imp-ent-1b',
    question: 'Which is the tangent line to the curve $y^3 + x = 10$ at the point $(2, 2)$?',
    options: ['$y - 2 = -12(x - 2)$', '$y - 2 = \\frac{1}{12}(x - 2)$', '$y - 2 = -\\frac{1}{3}(x - 2)$', '$y - 2 = -\\frac{1}{12}(x - 2)$'],
    correctIndex: 3,
    explanation: 'Differentiate: $3y^2\\frac{dy}{dx} + 1 = 0$, so $\\frac{dy}{dx} = -\\frac{1}{3y^2} = -\\frac{1}{12}$ at $y = 2$. The tangent line is $y - 2 = -\\frac{1}{12}(x - 2)$.',
    partNumber: 1,
    partTitle: 'Differentiating Equations Not Solved for y',
  },
  // Part 2 — Product & Quotient Rule in Implicit Context
  {
    id: 'imp-ent-2a',
    question: 'The point $(2, 2)$ lies on the curve $xy^2 + y = 10$. Find $\\dfrac{dy}{dx}$ there.',
    options: ['$\\frac{4}{9}$', '$-12$', '$-\\frac{4}{9}$', '$0$'],
    correctIndex: 2,
    explanation: 'Product rule on $xy^2$: $y^2 + 2xy\\frac{dy}{dx} + \\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = \\frac{-y^2}{2xy + 1} = \\frac{-4}{9}$. Dropping the $y^2$ term of the product rule gives 0.',
    partNumber: 2,
    partTitle: 'Product & Quotient Rule in Implicit Context',
  },
  {
    id: 'imp-ent-2b',
    question: 'Find $\\dfrac{dy}{dx}$ for the curve $\\dfrac{x + y}{x - y} = 3$ (with $x \\ne y$).',
    options: ['$2$', '$-\\frac{1}{2}$', '$-2$', '$\\frac{1}{2}$'],
    correctIndex: 3,
    explanation: 'Cross-multiply first: $x + y = 3x - 3y$, so $4y = 2x$. Differentiating gives $4\\frac{dy}{dx} = 2$ and $\\frac{dy}{dx} = \\frac{1}{2}$. The value 2 is $\\frac{dx}{dy}$, not $\\frac{dy}{dx}$.',
    partNumber: 2,
    partTitle: 'Product & Quotient Rule in Implicit Context',
  },
  // Part 3 — Trigonometric & Exponential Implicit Equations
  {
    id: 'imp-ent-3a',
    question: 'The point $\\left(1, \\frac{\\pi}{2}\\right)$ lies on the curve $x + \\cos y = 1$. Find $\\dfrac{dy}{dx}$ there.',
    options: ['$1$', '$-1$', '$\\frac{\\pi}{2}$', 'Undefined'],
    correctIndex: 0,
    explanation: 'Differentiate: $1 - \\sin y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = \\frac{1}{\\sin y}$. At $y = \\frac{\\pi}{2}$, $\\sin y = 1$, so the slope is 1. Forgetting the negative in the derivative of cosine gives $-1$.',
    partNumber: 3,
    partTitle: 'Trigonometric & Exponential Implicit Equations',
  },
  {
    id: 'imp-ent-3b',
    question: 'The point $(0, 1)$ lies on the curve $e^y + xy = e$. Find $\\dfrac{dy}{dx}$ there.',
    options: ['$\\frac{1}{e}$', '$-\\frac{1}{e}$', '$-e$', '$0$'],
    correctIndex: 1,
    explanation: 'Differentiate: $e^y\\frac{dy}{dx} + y + x\\frac{dy}{dx} = 0$. At $(0, 1)$: $e\\frac{dy}{dx} + 1 = 0$, so $\\frac{dy}{dx} = -\\frac{1}{e}$.',
    partNumber: 3,
    partTitle: 'Trigonometric & Exponential Implicit Equations',
  },
  // Part 4 — Second Derivatives & Higher-Order
  {
    id: 'imp-ent-4a',
    question: 'For the curve $y^2 = 2x + 1$, find $\\dfrac{d^2y}{dx^2}$ at the point $(4, 3)$.',
    options: ['$-\\frac{1}{9}$', '$\\frac{1}{3}$', '$-\\frac{1}{27}$', '$-\\frac{1}{3}$'],
    correctIndex: 2,
    explanation: 'First $2y\\frac{dy}{dx} = 2$, so $\\frac{dy}{dx} = \\frac{1}{y} = \\frac{1}{3}$. Then $\\frac{d^2y}{dx^2} = -\\frac{1}{y^2}\\frac{dy}{dx} = -\\frac{1}{9} \\cdot \\frac{1}{3} = -\\frac{1}{27}$. Forgetting the chain factor $\\frac{dy}{dx}$ gives $-\\frac{1}{9}$.',
    partNumber: 4,
    partTitle: 'Second Derivatives & Higher-Order',
  },
  {
    id: 'imp-ent-4b',
    question: 'For the curve $x^2 - y^2 = 16$, find $\\dfrac{d^2y}{dx^2}$ at the point $(5, 3)$.',
    options: ['$\\frac{16}{27}$', '$\\frac{34}{27}$', '$\\frac{5}{3}$', '$-\\frac{16}{27}$'],
    correctIndex: 3,
    explanation: '$\\frac{dy}{dx} = \\frac{x}{y}$, so $\\frac{d^2y}{dx^2} = \\frac{y - x\\frac{dy}{dx}}{y^2} = \\frac{y^2 - x^2}{y^3} = \\frac{-16}{y^3} = -\\frac{16}{27}$. A sign slip in the quotient rule gives $\\frac{34}{27}$, and $\\frac{5}{3}$ is the first derivative.',
    partNumber: 4,
    partTitle: 'Second Derivatives & Higher-Order',
  },
  // Part 5 — Horizontal & Vertical Tangents
  {
    id: 'imp-ent-5a',
    question: 'For the curve $x^2 - xy + y^2 = 12$, $\\dfrac{dy}{dx} = \\dfrac{y - 2x}{2y - x}$. At which points is the tangent line horizontal?',
    options: ['$(2, 4)$ and $(-2, -4)$', '$(4, 2)$ and $(-4, -2)$', '$(2, -4)$ and $(-2, 4)$', '$(0, 2\\sqrt{3})$ and $(0, -2\\sqrt{3})$'],
    correctIndex: 0,
    explanation: 'Horizontal tangents need the numerator to be 0: $y = 2x$. Substituting, $x^2 - 2x^2 + 4x^2 = 3x^2 = 12$, so $x = \\pm 2$, giving $(2, 4)$ and $(-2, -4)$. The points with $x = 2y$ have vertical tangents.',
    partNumber: 5,
    partTitle: 'Horizontal & Vertical Tangents',
  },
  {
    id: 'imp-ent-5b',
    question: 'Where does the circle $(x - 2)^2 + (y + 1)^2 = 9$ have vertical tangent lines?',
    options: ['$y = -4$ and $y = 2$', '$x = -1$ and $x = 5$', '$x = -3$ and $x = 3$', '$x = 2$ and $y = -1$'],
    correctIndex: 1,
    explanation: '$\\frac{dy}{dx} = -\\frac{x - 2}{y + 1}$ is undefined where $y = -1$; then $(x - 2)^2 = 9$ gives $x = -1$ and $x = 5$. The lines $y = -4$ and $y = 2$ are the horizontal tangents.',
    partNumber: 5,
    partTitle: 'Horizontal & Vertical Tangents',
  },
  // Part 6 — Related Connections & Inverse Functions
  {
    id: 'imp-ent-6a',
    question: 'What is the slope of the normal line to the curve $x^2 + 3y^2 = 28$ at the point $(1, 3)$?',
    options: ['$-9$', '$-\\frac{1}{9}$', '$9$', '$\\frac{1}{9}$'],
    correctIndex: 2,
    explanation: 'The tangent slope is $\\frac{dy}{dx} = -\\frac{x}{3y} = -\\frac{1}{9}$. The normal slope is its negative reciprocal, 9.',
    partNumber: 6,
    partTitle: 'Related Connections & Inverse Functions',
  },
  {
    id: 'imp-ent-6b',
    question: 'Suppose $x = y^3 + y$. Find $\\dfrac{dy}{dx}$ when $x = 10$.',
    options: ['$13$', '$\\frac{1}{301}$', '$\\frac{1}{12}$', '$\\frac{1}{13}$'],
    correctIndex: 3,
    explanation: 'When $x = 10$, $y = 2$. Differentiate implicitly: $1 = (3y^2 + 1)\\frac{dy}{dx}$, so $\\frac{dy}{dx} = \\frac{1}{3(4) + 1} = \\frac{1}{13}$. Evaluating at $y = 10$ instead of 2 gives $\\frac{1}{301}$.',
    partNumber: 6,
    partTitle: 'Related Connections & Inverse Functions',
  },
  // Part 7 — AP Exam Review & Mixed Practice
  {
    id: 'imp-ent-7a',
    question: 'The point $(1, 3)$ lies on the curve $x^3 + xy^2 = 10$. Find $\\dfrac{dy}{dx}$ there.',
    options: ['$-2$', '$-\\frac{1}{2}$', '$-12$', '$-\\frac{3}{2}$'],
    correctIndex: 0,
    explanation: 'Differentiate: $3x^2 + y^2 + 2xy\\frac{dy}{dx} = 0$. Plugging in $(1, 3)$: $3 + 9 + 6\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -2$. Dropping the $y^2$ term of the product rule gives $-\\frac{1}{2}$.',
    partNumber: 7,
    partTitle: 'AP Exam Review & Mixed Practice',
  },
  {
    id: 'imp-ent-7b',
    question: 'A curve satisfies $\\dfrac{dy}{dx} = \\dfrac{x^2 - 4}{2y}$ and passes through $(2, 3)$. Which describes the curve at $(2, 3)$?',
    options: ['$\\frac{dy}{dx} = 0$ and concave down', '$\\frac{dy}{dx} = 0$ and concave up', '$\\frac{dy}{dx}$ undefined and concave up', '$\\frac{dy}{dx} = \\frac{2}{3}$ and concave up'],
    correctIndex: 1,
    explanation: 'At $(2, 3)$ the numerator is 0, so the tangent is horizontal. Then $\\frac{d^2y}{dx^2} = \\frac{2x \\cdot 2y - (x^2 - 4) \\cdot 2\\frac{dy}{dx}}{4y^2} = \\frac{24 - 0}{36} = \\frac{2}{3} > 0$, so the curve is concave up there.',
    partNumber: 7,
    partTitle: 'AP Exam Review & Mixed Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Differentiating Equations Not Solved for y' },
    { partNumber: 2, partTitle: 'Product & Quotient Rule in Implicit Context' },
    { partNumber: 3, partTitle: 'Trigonometric & Exponential Implicit Equations' },
    { partNumber: 4, partTitle: 'Second Derivatives & Higher-Order' },
    { partNumber: 5, partTitle: 'Horizontal & Vertical Tangents' },
    { partNumber: 6, partTitle: 'Related Connections & Inverse Functions' },
    { partNumber: 7, partTitle: 'AP Exam Review & Mixed Practice' },
  ]
}
