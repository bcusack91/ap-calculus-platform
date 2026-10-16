/**
 * Entrance Quiz — Trigonometric Identities — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Pythagorean Identities
  {
    id: 'ti-ent-1a',
    question: 'Simplify $(1 - \\sin^2 x)(1 + \\tan^2 x)$ for all $x$ where it is defined.',
    options: ['$1$', '$\\cos^2 x$', '$\\sec^2 x$', '$\\tan^2 x$'],
    correctIndex: 0,
    explanation: '$1 - \\sin^2 x = \\cos^2 x$ and $1 + \\tan^2 x = \\sec^2 x = \\frac{1}{\\cos^2 x}$, so the product is $\\cos^2 x \\cdot \\frac{1}{\\cos^2 x} = 1$.',
    partNumber: 1,
    partTitle: 'Pythagorean Identities',
  },
  {
    id: 'ti-ent-1b',
    question: 'Angle $\\theta$ is in Quadrant IV and $\\tan\\theta = -2$. What is $\\cos\\theta$?',
    options: ['$-\\frac{\\sqrt{5}}{5}$', '$\\frac{2\\sqrt{5}}{5}$', '$\\frac{\\sqrt{5}}{5}$', '$-\\frac{2\\sqrt{5}}{5}$'],
    correctIndex: 2,
    explanation: '$\\sec^2\\theta = 1 + \\tan^2\\theta = 5$, so $\\sec\\theta = \\pm\\sqrt{5}$; cosine is positive in Quadrant IV, so $\\cos\\theta = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$. The value $-\\frac{2\\sqrt{5}}{5}$ is $\\sin\\theta$.',
    partNumber: 1,
    partTitle: 'Pythagorean Identities',
  },

  // Part 2 — Reciprocal & Quotient Identities
  {
    id: 'ti-ent-2a',
    question: 'Which expression is equivalent to $\\csc x - \\sin x$ for all $x$ where both are defined?',
    options: ['$\\cos x\\cot x$', '$\\cos^2 x$', '$\\cot x$', '$\\csc^2 x$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{\\sin x} - \\sin x = \\frac{1 - \\sin^2 x}{\\sin x} = \\frac{\\cos^2 x}{\\sin x} = \\cos x \\cdot \\frac{\\cos x}{\\sin x} = \\cos x\\cot x$. Writing just $\\cos^2 x$ drops the denominator $\\sin x$.',
    partNumber: 2,
    partTitle: 'Reciprocal & Quotient Identities',
  },
  {
    id: 'ti-ent-2b',
    question: 'Simplify $\\sin x(\\cot x + \\tan x)$ for all $x$ where it is defined.',
    options: ['$\\cos x + 1$', '$\\sec x$', '$\\cos x + \\sin x$', '$\\cos x + \\sin^2 x$'],
    correctIndex: 1,
    explanation: '$\\sin x\\cot x = \\cos x$ and $\\sin x\\tan x = \\frac{\\sin^2 x}{\\cos x}$, so the sum is $\\frac{\\cos^2 x + \\sin^2 x}{\\cos x} = \\frac{1}{\\cos x} = \\sec x$. Writing $\\sin x\\tan x$ as $\\sin^2 x$ drops the $\\cos x$ in the denominator.',
    partNumber: 2,
    partTitle: 'Reciprocal & Quotient Identities',
  },

  // Part 3 — Even-Odd & Cofunction Identities
  {
    id: 'ti-ent-3a',
    question: 'Simplify $\\dfrac{\\cos(-x)}{\\sin\\left(\\frac{\\pi}{2} - x\\right)} + \\tan(-x)\\cot x$ for all $x$ where it is defined.',
    options: ['$2$', '$-2$', '$0$', '$1 - \\tan^2 x$'],
    correctIndex: 2,
    explanation: 'Cosine is even and $\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x$, so the fraction is $1$; tangent is odd, so $\\tan(-x)\\cot x = -\\tan x\\cot x = -1$. The total is $0$, while treating tangent as even gives $2$.',
    partNumber: 3,
    partTitle: 'Even-Odd & Cofunction Identities',
  },
  {
    id: 'ti-ent-3b',
    question: 'Which expression is equal to $-\\cos\\frac{\\pi}{8}$?',
    options: ['$\\sin\\left(-\\frac{3\\pi}{8}\\right)$', '$\\cos\\left(-\\frac{\\pi}{8}\\right)$', '$\\sin\\left(-\\frac{\\pi}{8}\\right)$', '$\\cos\\left(\\frac{5\\pi}{8}\\right)$'],
    correctIndex: 0,
    explanation: 'Sine is odd, so $\\sin\\left(-\\frac{3\\pi}{8}\\right) = -\\sin\\frac{3\\pi}{8}$, and by the cofunction identity $\\sin\\frac{3\\pi}{8} = \\cos\\left(\\frac{\\pi}{2} - \\frac{3\\pi}{8}\\right) = \\cos\\frac{\\pi}{8}$. Cosine is even, so $\\cos\\left(-\\frac{\\pi}{8}\\right)$ is positive.',
    partNumber: 3,
    partTitle: 'Even-Odd & Cofunction Identities',
  },

  // Part 4 — Sum & Difference Formulas
  {
    id: 'ti-ent-4a',
    question: 'What is the exact value of $\\cos\\frac{7\\pi}{12}$?',
    options: ['$\\frac{\\sqrt{2}+\\sqrt{6}}{4}$', '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$', '$\\frac{1+\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$'],
    correctIndex: 3,
    explanation: '$\\cos\\left(\\frac{\\pi}{3} + \\frac{\\pi}{4}\\right) = \\frac{1}{2} \\cdot \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}-\\sqrt{6}}{4}$, which is negative as expected in Quadrant II. Using a plus sign in the cosine sum formula gives $\\frac{\\sqrt{2}+\\sqrt{6}}{4}$.',
    partNumber: 4,
    partTitle: 'Sum & Difference Formulas',
  },
  {
    id: 'ti-ent-4b',
    question: 'Angle $\\alpha$ is in Quadrant II with $\\sin\\alpha = \\frac{3}{5}$, and angle $\\beta$ is in Quadrant I with $\\cos\\beta = \\frac{5}{13}$. What is $\\cos(\\alpha - \\beta)$?',
    options: ['$\\frac{16}{65}$', '$-\\frac{56}{65}$', '$\\frac{56}{65}$', '$-\\frac{16}{65}$'],
    correctIndex: 0,
    explanation: 'Here $\\cos\\alpha = -\\frac{4}{5}$ and $\\sin\\beta = \\frac{12}{13}$, so $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta = -\\frac{20}{65} + \\frac{36}{65} = \\frac{16}{65}$. The value $-\\frac{56}{65}$ is $\\cos(\\alpha + \\beta)$.',
    partNumber: 4,
    partTitle: 'Sum & Difference Formulas',
  },

  // Part 5 — Double-Angle Identities
  {
    id: 'ti-ent-5a',
    question: 'Angle $\\theta$ is in Quadrant III and $\\cos\\theta = -\\frac{1}{3}$. What is $\\sin 2\\theta$?',
    options: ['$-\\frac{4\\sqrt{2}}{9}$', '$\\frac{4\\sqrt{2}}{9}$', '$-\\frac{2}{3}$', '$-\\frac{7}{9}$'],
    correctIndex: 1,
    explanation: 'In Quadrant III, $\\sin\\theta = -\\sqrt{1 - \\frac{1}{9}} = -\\frac{2\\sqrt{2}}{3}$, so $\\sin 2\\theta = 2\\left(-\\frac{2\\sqrt{2}}{3}\\right)\\left(-\\frac{1}{3}\\right) = \\frac{4\\sqrt{2}}{9}$. The value $-\\frac{7}{9}$ is $\\cos 2\\theta$.',
    partNumber: 5,
    partTitle: 'Double-Angle Identities',
  },
  {
    id: 'ti-ent-5b',
    question: 'Which expression is equivalent to $\\cos^4 x - \\sin^4 x$?',
    options: ['$1 - 2\\sin^2 x$', '$1 - \\sin^2 x$', '$\\cos 4x$', '$\\cos^2 2x$'],
    correctIndex: 0,
    explanation: 'Factor as a difference of squares: $(\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) = \\cos 2x \\cdot 1 = \\cos 2x$, and $\\cos 2x = 1 - 2\\sin^2 x$. The second factor is $1$; the first is $\\cos^2 x - \\sin^2 x$, not $\\cos^2 x = 1 - \\sin^2 x$.',
    partNumber: 5,
    partTitle: 'Double-Angle Identities',
  },

  // Part 6 — Verifying Identities
  {
    id: 'ti-ent-6a',
    question: 'To verify $\\dfrac{\\cos x}{1 + \\sin x} = \\sec x - \\tan x$, a student multiplies the left side by $\\dfrac{1 - \\sin x}{1 - \\sin x}$. What does the left side become once the denominator is simplified?',
    options: ['$\\frac{\\cos x(1 - \\sin x)}{\\sin^2 x}$', '$\\frac{\\cos x - \\sin x}{\\cos^2 x}$', '$\\frac{\\cos x(1 - \\sin x)}{\\cos^2 x}$', '$\\frac{\\cos x(1 - \\sin x)}{1 - \\sin x}$'],
    correctIndex: 2,
    explanation: 'The denominator becomes $(1 + \\sin x)(1 - \\sin x) = 1 - \\sin^2 x = \\cos^2 x$, giving $\\frac{\\cos x(1 - \\sin x)}{\\cos^2 x} = \\frac{1 - \\sin x}{\\cos x} = \\sec x - \\tan x$. Writing $\\sin^2 x$ uses the wrong Pythagorean rearrangement.',
    partNumber: 6,
    partTitle: 'Verifying Identities',
  },
  {
    id: 'ti-ent-6b',
    question: 'Which equation is an identity, true for every $x$ at which both sides are defined?',
    options: ['$\\frac{\\sin x}{1 + \\cos x} = \\csc x + \\cot x$', '$\\frac{\\sin x}{1 - \\cos x} = \\csc x - \\cot x$', '$\\frac{1 - \\cos x}{\\sin x} = \\csc x + \\cot x$', '$\\frac{\\sin x}{1 - \\cos x} = \\csc x + \\cot x$'],
    correctIndex: 3,
    explanation: 'Multiply by the conjugate: $\\frac{\\sin x(1 + \\cos x)}{1 - \\cos^2 x} = \\frac{\\sin x(1 + \\cos x)}{\\sin^2 x} = \\frac{1 + \\cos x}{\\sin x} = \\csc x + \\cot x$. The same steps show $\\frac{\\sin x}{1 + \\cos x} = \\frac{1 - \\cos x}{\\sin x} = \\csc x - \\cot x$, so the options with those pairings are false.',
    partNumber: 6,
    partTitle: 'Verifying Identities',
  },

  // Part 7 — Review & Applications
  {
    id: 'ti-ent-7a',
    question: 'Simplify $\\dfrac{\\sin 2x}{1 - \\cos 2x}$ for all $x$ where it is defined.',
    options: ['$\\cot x$', '$\\tan x$', '$2\\cot x$', '$\\cot 2x$'],
    correctIndex: 0,
    explanation: 'Use $\\sin 2x = 2\\sin x\\cos x$ and $1 - \\cos 2x = 1 - (1 - 2\\sin^2 x) = 2\\sin^2 x$, so the quotient is $\\frac{2\\sin x\\cos x}{2\\sin^2 x} = \\frac{\\cos x}{\\sin x} = \\cot x$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'ti-ent-7b',
    question: 'If $\\sin x + \\cos x = \\frac{7}{5}$, what is the value of $\\sin 2x$?',
    options: ['$\\frac{14}{5}$', '$\\frac{49}{25}$', '$\\frac{24}{25}$', '$\\frac{74}{25}$'],
    correctIndex: 2,
    explanation: 'Square both sides: $\\sin^2 x + 2\\sin x\\cos x + \\cos^2 x = \\frac{49}{25}$, so $1 + \\sin 2x = \\frac{49}{25}$ and $\\sin 2x = \\frac{24}{25}$. Doubling $\\frac{7}{5}$ to get $\\frac{14}{5}$ confuses $\\sin 2x$ with $2\\sin x$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Pythagorean Identities' },
    { partNumber: 2, partTitle: 'Reciprocal & Quotient Identities' },
    { partNumber: 3, partTitle: 'Even-Odd & Cofunction Identities' },
    { partNumber: 4, partTitle: 'Sum & Difference Formulas' },
    { partNumber: 5, partTitle: 'Double-Angle Identities' },
    { partNumber: 6, partTitle: 'Verifying Identities' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
