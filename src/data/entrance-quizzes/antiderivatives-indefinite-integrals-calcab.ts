/**
 * Entrance Quiz — Antiderivatives & Indefinite Integrals (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What is an Antiderivative?
  {
    id: 'aii-ent-1a',
    question: 'Evaluate $\\displaystyle\\int \\left(6x^2 - \\frac{4}{x^3}\\right) dx$.',
    options: ['$2x^3 + \\frac{1}{2x^2} + C$', '$2x^3 - \\frac{2}{x^2} + C$', '$2x^3 + \\frac{2}{x^2} + C$', '$12x + \\frac{12}{x^4} + C$'],
    correctIndex: 2,
    explanation: 'Rewrite as $6x^2 - 4x^{-3}$. The power rule gives $2x^3 - 4\\cdot\\frac{x^{-2}}{-2} = 2x^3 + 2x^{-2}$, plus $C$. The last option is the derivative, not an antiderivative.',
    partNumber: 1,
    partTitle: 'What is an Antiderivative?',
  },
  {
    id: 'aii-ent-1b',
    question: 'The function $F(x) = x^3 + 4$ is an antiderivative of $f(x) = 3x^2$. Which function is also an antiderivative of $f$?',
    options: ['$3x^3 + 12$', '$x^3 - 10$', '$x^3 + 4x - 1$', '$\\frac{x^4}{4} + 4$'],
    correctIndex: 1,
    explanation: 'Antiderivatives of the same function differ only by a constant, and $x^3 - 10$ has derivative $3x^2$. The others have derivatives $9x^2$, $3x^2 + 4$ and $x^3$; scaling by 3 or adding a term with $x$ changes the derivative.',
    partNumber: 1,
    partTitle: 'What is an Antiderivative?',
  },
  // Part 2 — Essential Antiderivative Formulas
  {
    id: 'aii-ent-2a',
    question: 'Evaluate $\\displaystyle\\int \\left(2\\sec x\\tan x - 3\\csc^2 x\\right) dx$.',
    options: ['$2\\sec x - 3\\cot x + C$', '$2\\tan x + 3\\cot x + C$', '$2\\sec x + 3\\cot x + C$', '$2\\sec^2 x + 3\\cot x + C$'],
    correctIndex: 2,
    explanation: 'Since $\\frac{d}{dx}\\sec x = \\sec x\\tan x$ and $\\frac{d}{dx}\\cot x = -\\csc^2 x$, the antiderivative is $2\\sec x - 3(-\\cot x) = 2\\sec x + 3\\cot x$, plus $C$. Missing the negative from cotangent gives $-3\\cot x$.',
    partNumber: 2,
    partTitle: 'Essential Antiderivative Formulas',
  },
  {
    id: 'aii-ent-2b',
    question: 'Evaluate $\\displaystyle\\int \\left(3^x + e^x\\right) dx$.',
    options: ['$3^x\\ln 3 + e^x + C$', '$\\frac{3^{x+1}}{x+1} + e^x + C$', '$3^x + e^x + C$', '$\\frac{3^x}{\\ln 3} + e^x + C$'],
    correctIndex: 3,
    explanation: 'Since $\\frac{d}{dx}3^x = 3^x\\ln 3$, an antiderivative of $3^x$ is $\\frac{3^x}{\\ln 3}$. Multiplying by $\\ln 3$ is the derivative rule, and the power-rule form does not apply to a variable exponent.',
    partNumber: 2,
    partTitle: 'Essential Antiderivative Formulas',
  },
  // Part 3 — Initial Value Problems (IVPs)
  {
    id: 'aii-ent-3a',
    question: 'If $f\'(x) = 3\\sqrt{x}$ and $f(4) = 10$, what is $f(9)$?',
    options: ['$48$', '$54$', '$64$', '$60$'],
    correctIndex: 0,
    explanation: '$f(x) = 2x^{3/2} + C$. From $f(4) = 16 + C = 10$, $C = -6$, so $f(9) = 2(27) - 6 = 48$. Leaving out $C$ gives 54.',
    partNumber: 3,
    partTitle: 'Initial Value Problems (IVPs)',
  },
  {
    id: 'aii-ent-3b',
    question: 'If $f\'\'(x) = 6x - 2$, $f\'(1) = 4$ and $f(0) = 1$, what is $f(2)$?',
    options: ['$5$', '$11$', '$10$', '$13$'],
    correctIndex: 1,
    explanation: '$f\'(x) = 3x^2 - 2x + C_1$ with $3 - 2 + C_1 = 4$, so $C_1 = 3$. Then $f(x) = x^3 - x^2 + 3x + C_2$ with $C_2 = 1$, giving $f(2) = 8 - 4 + 6 + 1 = 11$. Forgetting $C_1$ gives 5.',
    partNumber: 3,
    partTitle: 'Initial Value Problems (IVPs)',
  },
  // Part 4 — Rewriting Before Integrating
  {
    id: 'aii-ent-4a',
    question: 'Evaluate $\\displaystyle\\int \\frac{(x + 2)^2}{x}\\,dx$ for $x \\ne 0$.',
    options: ['$\\frac{x^2}{2} + 2x + 4\\ln|x| + C$', '$\\frac{x^2}{2} + 4x - \\frac{4}{x^2} + C$', '$\\frac{x^2}{2} + 4x + 4\\ln|x| + C$', '$\\frac{(x + 2)^3}{3x} + C$'],
    correctIndex: 2,
    explanation: 'Expand and split: $\\frac{x^2 + 4x + 4}{x} = x + 4 + \\frac{4}{x}$, which integrates to $\\frac{x^2}{2} + 4x + 4\\ln|x| + C$. Integrating the top and bottom separately is not valid.',
    partNumber: 4,
    partTitle: 'Rewriting Before Integrating',
  },
  {
    id: 'aii-ent-4b',
    question: 'Evaluate $\\displaystyle\\int \\cot^2 x\\,dx$.',
    options: ['$\\frac{\\cot^3 x}{3} + C$', '$\\ln|\\sin x| - x + C$', '$-2\\csc^2 x\\cot x + C$', '$-\\cot x - x + C$'],
    correctIndex: 3,
    explanation: 'Use $\\cot^2 x = \\csc^2 x - 1$: $\\int (\\csc^2 x - 1)\\,dx = -\\cot x - x + C$. The power rule does not apply to $\\cot^2 x$, and $-2\\csc^2 x\\cot x$ is its derivative.',
    partNumber: 4,
    partTitle: 'Rewriting Before Integrating',
  },
  // Part 5 — Inverse Trig Antiderivatives
  {
    id: 'aii-ent-5a',
    question: 'Evaluate $\\displaystyle\\int \\frac{6}{9 + x^2}\\,dx$.',
    options: ['$2\\arctan\\left(\\frac{x}{3}\\right) + C$', '$6\\arctan\\left(\\frac{x}{3}\\right) + C$', '$\\frac{2}{3}\\arctan\\left(\\frac{x}{3}\\right) + C$', '$6\\ln(9 + x^2) + C$'],
    correctIndex: 0,
    explanation: 'With $a = 3$, $\\int \\frac{dx}{a^2 + x^2} = \\frac{1}{a}\\arctan\\frac{x}{a}$, so the integral is $6 \\cdot \\frac{1}{3}\\arctan\\frac{x}{3} = 2\\arctan\\frac{x}{3} + C$. Forgetting the $\\frac{1}{a}$ gives $6\\arctan\\frac{x}{3}$.',
    partNumber: 5,
    partTitle: 'Inverse Trig Antiderivatives',
  },
  {
    id: 'aii-ent-5b',
    question: 'Evaluate $\\displaystyle\\int \\frac{dx}{x^2 - 4x + 8}$.',
    options: ['$\\arctan\\left(\\frac{x - 2}{2}\\right) + C$', '$\\frac{1}{2}\\arctan\\left(\\frac{x - 2}{2}\\right) + C$', '$\\frac{1}{2}\\arctan\\left(\\frac{x + 2}{2}\\right) + C$', '$\\ln|x^2 - 4x + 8| + C$'],
    correctIndex: 1,
    explanation: 'Complete the square: $x^2 - 4x + 8 = (x - 2)^2 + 4$. With $a = 2$, the antiderivative is $\\frac{1}{2}\\arctan\\frac{x - 2}{2} + C$. The logarithm form would need the derivative $2x - 4$ in the numerator.',
    partNumber: 5,
    partTitle: 'Inverse Trig Antiderivatives',
  },
  // Part 6 — Mixed Practice
  {
    id: 'aii-ent-6a',
    question: 'If $f\'(x) = e^x - 4x$ and $f(0) = 3$, what is $f(1)$?',
    options: ['$e - 2$', '$e + 1$', '$e$', '$e + 2$'],
    correctIndex: 2,
    explanation: '$f(x) = e^x - 2x^2 + C$, and $f(0) = 1 + C = 3$ gives $C = 2$. Then $f(1) = e - 2 + 2 = e$. Leaving out $C$ gives $e - 2$, and using $C = 3$ (forgetting $e^0 = 1$) gives $e + 1$.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'aii-ent-6b',
    question: 'Evaluate $\\displaystyle\\int \\left(\\sqrt{x} - 1\\right)^2 dx$.',
    options: ['$\\frac{(\\sqrt{x} - 1)^3}{3} + C$', '$\\frac{x^2}{2} - 2\\sqrt{x} + x + C$', '$\\frac{x^2}{2} + x + C$', '$\\frac{x^2}{2} - \\frac{4}{3}x^{3/2} + x + C$'],
    correctIndex: 3,
    explanation: 'Expand first: $(\\sqrt{x} - 1)^2 = x - 2x^{1/2} + 1$, which integrates to $\\frac{x^2}{2} - \\frac{4}{3}x^{3/2} + x + C$. The cube form ignores the chain rule, so its derivative is not the integrand.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  // Part 7 — Comprehensive Assessment
  {
    id: 'aii-ent-7a',
    question: 'A particle has $a(t) = 6t + 2$, $v(0) = -3$ and $s(0) = 4$. Find $s(2)$.',
    options: ['$10$', '$6$', '$13$', '$16$'],
    correctIndex: 0,
    explanation: '$v(t) = 3t^2 + 2t - 3$ and $s(t) = t^3 + t^2 - 3t + 4$, so $s(2) = 8 + 4 - 6 + 4 = 10$. Leaving out $s(0)$ gives 6, and 13 is $v(2)$.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
  {
    id: 'aii-ent-7b',
    question: 'Evaluate $\\displaystyle\\int \\left(1 + \\tan^2 x\\right) dx$.',
    options: ['$x + \\frac{\\tan^3 x}{3} + C$', '$\\tan x + C$', '$\\sec x\\tan x + C$', '$x + \\sec^2 x + C$'],
    correctIndex: 1,
    explanation: 'By the Pythagorean identity, $1 + \\tan^2 x = \\sec^2 x$, whose antiderivative is $\\tan x + C$. Applying the power rule to $\\tan^2 x$ is not valid.',
    partNumber: 7,
    partTitle: 'Comprehensive Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is an Antiderivative?' },
    { partNumber: 2, partTitle: 'Essential Antiderivative Formulas' },
    { partNumber: 3, partTitle: 'Initial Value Problems (IVPs)' },
    { partNumber: 4, partTitle: 'Rewriting Before Integrating' },
    { partNumber: 5, partTitle: 'Inverse Trig Antiderivatives' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
