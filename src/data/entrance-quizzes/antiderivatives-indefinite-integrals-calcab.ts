/**
 * Entrance Quiz — Antiderivatives & Indefinite Integrals (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Understanding Antiderivatives
  {
    id: 'ai-ent-1a',
    question: 'An antiderivative of $f(x)$ is a function $F(x)$ such that:',
    options: ['$F(x) = f(x)$', '$F\'(x) = f(x)$', '$F(x) = f\'(x)$', '$F\'\'(x) = f(x)$'],
    correctIndex: 1,
    explanation: 'By definition, $F$ is an antiderivative of $f$ when $F\'(x) = f(x)$.',
    partNumber: 1,
    partTitle: 'Understanding Antiderivatives',
  },
  {
    id: 'ai-ent-1b',
    question: 'Why do we add $+ C$ to indefinite integrals?',
    options: ['It represents the variable', 'Antiderivatives differ by a constant', '$C$ is always zero', 'It is the chain rule'],
    correctIndex: 1,
    explanation: 'Any two antiderivatives of the same function differ by a constant.',
    partNumber: 1,
    partTitle: 'Understanding Antiderivatives',
  },

  // Part 2: Power Rule for Integration
  {
    id: 'ai-ent-2a',
    question: '$\\int x^n\\,dx =$ (for $n \\neq -1$):',
    options: ['$\\frac{x^n}{n}$', '$\\frac{x^{n+1}}{n+1} + C$', '$nx^{n-1} + C$', '$x^{n+1} + C$'],
    correctIndex: 1,
    explanation: 'The power rule for integration: add 1 to the exponent and divide.',
    partNumber: 2,
    partTitle: 'Power Rule for Integration',
  },
  {
    id: 'ai-ent-2b',
    question: '$\\int 3x^2\\,dx =$',
    options: ['$x^3 + C$', '$6x + C$', '$x^3$', '$3x^3 + C$'],
    correctIndex: 0,
    explanation: '$3 \\cdot \\frac{x^3}{3} + C = x^3 + C$.',
    partNumber: 2,
    partTitle: 'Power Rule for Integration',
  },

  // Part 3: Trigonometric Antiderivatives
  {
    id: 'ai-ent-3a',
    question: '$\\int \\cos x\\,dx =$',
    options: ['$-\\sin x + C$', '$\\sin x + C$', '$\\cos x + C$', '$-\\cos x + C$'],
    correctIndex: 1,
    explanation: 'The antiderivative of $\\cos x$ is $\\sin x + C$.',
    partNumber: 3,
    partTitle: 'Trigonometric Antiderivatives',
  },
  {
    id: 'ai-ent-3b',
    question: '$\\int \\sec^2 x\\,dx =$',
    options: ['$\\tan x + C$', '$\\sec x + C$', '$-\\cot x + C$', '$\\sin x + C$'],
    correctIndex: 0,
    explanation: 'Since $\\frac{d}{dx}[\\tan x] = \\sec^2 x$.',
    partNumber: 3,
    partTitle: 'Trigonometric Antiderivatives',
  },

  // Part 4: Exponential & Logarithmic Antiderivatives
  {
    id: 'ai-ent-4a',
    question: '$\\int e^x\\,dx =$',
    options: ['$xe^{x-1} + C$', '$e^x + C$', '$\\frac{e^{x+1}}{x+1} + C$', '$\\ln(e^x) + C$'],
    correctIndex: 1,
    explanation: '$e^x$ is its own antiderivative.',
    partNumber: 4,
    partTitle: 'Exponential & Logarithmic Antiderivatives',
  },
  {
    id: 'ai-ent-4b',
    question: '$\\int \\frac{1}{x}\\,dx =$',
    options: ['$\\ln x + C$', '$\\ln |x| + C$', '$\\frac{x^0}{0}$', '$-x^{-2} + C$'],
    correctIndex: 1,
    explanation: '$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ (absolute value needed).',
    partNumber: 4,
    partTitle: 'Exponential & Logarithmic Antiderivatives',
  },

  // Part 5: Initial Value Problems
  {
    id: 'ai-ent-5a',
    question: 'An initial value problem gives you:',
    options: ['Only the derivative', 'The derivative and a point on the curve', 'Two derivatives', 'Only the function'],
    correctIndex: 1,
    explanation: 'An IVP provides $f\'(x)$ and a condition like $f(a) = b$ to find $C$.',
    partNumber: 5,
    partTitle: 'Initial Value Problems',
  },
  {
    id: 'ai-ent-5b',
    question: 'If $f\'(x) = 2x$ and $f(1) = 5$, then $f(x) =$',
    options: ['$x^2 + 4$', '$x^2 + 5$', '$2x + 3$', '$x^2$'],
    correctIndex: 0,
    explanation: '$f(x) = x^2 + C$. $f(1) = 1 + C = 5$, so $C = 4$.',
    partNumber: 5,
    partTitle: 'Initial Value Problems',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ai-ent-6a',
    question: '$\\int (3x^2 - 4x + 1)\\,dx =$',
    options: ['$x^3 - 2x^2 + x + C$', '$6x - 4 + C$', '$x^3 - 4x^2 + x + C$', '$3x^3 - 2x^2 + C$'],
    correctIndex: 0,
    explanation: 'Integrate term by term.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ai-ent-6b',
    question: '$\\int (\\sin x + e^x)\\,dx =$',
    options: ['$\\cos x + e^x + C$', '$-\\cos x + e^x + C$', '$-\\sin x + e^x + C$', '$\\cos x - e^x + C$'],
    correctIndex: 1,
    explanation: '$-\\cos x + e^x + C$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'ai-ent-7a',
    question: 'The general antiderivative of $f(x) = 0$ is:',
    options: ['$0$', '$C$ (a constant)', '$x$', 'Does not exist'],
    correctIndex: 1,
    explanation: 'If $f(x)=0$, then $F(x) = C$ for any constant $C$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'ai-ent-7b',
    question: 'If $v(t) = 3t^2$ and $s(0) = 2$, find $s(t)$:',
    options: ['$t^3 + 2$', '$6t + 2$', '$t^3$', '$3t^3 + 2$'],
    correctIndex: 0,
    explanation: '$s(t) = t^3 + C$. $s(0) = 0 + C = 2$, so $s(t) = t^3 + 2$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding Antiderivatives' },
    { partNumber: 2, partTitle: 'Power Rule for Integration' },
    { partNumber: 3, partTitle: 'Trigonometric Antiderivatives' },
    { partNumber: 4, partTitle: 'Exponential & Logarithmic Antiderivatives' },
    { partNumber: 5, partTitle: 'Initial Value Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
