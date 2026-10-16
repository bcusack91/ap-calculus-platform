/**
 * Entrance Quiz — Limits at Infinity — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Limits at Infinity & Horizontal Asymptotes
  {
    id: 'lai-ent-1a',
    question: 'Which lines are horizontal asymptotes of $f(x) = 4 - e^{-x}$?',
    options: ['$y = 4$', '$y = 4$ and $y = 0$', '$y = 0$ and $y = -4$', '$y = 4$ and $y = -4$'],
    correctIndex: 0,
    explanation: 'As $x \\to \\infty$, $e^{-x} \\to 0$, so $f(x) \\to 4$. As $x \\to -\\infty$, $e^{-x} \\to \\infty$, so $f(x) \\to -\\infty$ and there is no asymptote on the left. The single horizontal asymptote is $y = 4$.',
    partNumber: 1,
    partTitle: 'Limits at Infinity & Horizontal Asymptotes',
  },
  {
    id: 'lai-ent-1b',
    question: 'A function satisfies $\\lim_{x \\to \\infty} f(x) = 2$ and $\\lim_{x \\to -\\infty} f(x) = -2$. Which could be $f$?',
    options: ['$\\frac{2x^2}{x^2 + 1}$', '$2 - 4e^{x}$', '$\\frac{2x - 1}{x + 3}$', '$\\frac{4}{\\pi}\\arctan x$'],
    correctIndex: 3,
    explanation: 'Since $\\arctan x \\to \\frac{\\pi}{2}$ on the right and $-\\frac{\\pi}{2}$ on the left, $\\frac{4}{\\pi}\\arctan x$ approaches $2$ and $-2$. Both rational choices approach 2 at both ends, and $2 - 4e^x$ goes to $-\\infty$ on the right.',
    partNumber: 1,
    partTitle: 'Limits at Infinity & Horizontal Asymptotes',
  },
  // Part 2 — Rational Functions Compare Degrees
  {
    id: 'lai-ent-2a',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\dfrac{(2x - 1)(3x + 4)}{5 - x^2}$.',
    options: ['$6$', '$0$', '$-6$', '$-\\frac{4}{5}$'],
    correctIndex: 2,
    explanation: 'The numerator expands to $6x^2 + \\ldots$ and the denominator has leading term $-x^2$. Equal degrees give the ratio of leading coefficients, $\\frac{6}{-1} = -6$; $-\\frac{4}{5}$ is the ratio of the constant terms, which is irrelevant at infinity.',
    partNumber: 2,
    partTitle: 'Rational Functions Compare Degrees',
  },
  {
    id: 'lai-ent-2b',
    question: 'Evaluate $\\lim_{x \\to -\\infty} \\dfrac{2x^3 - x}{x^2 + 4}$.',
    options: ['$\\infty$', '$2$', '$0$', '$-\\infty$'],
    correctIndex: 3,
    explanation: 'The numerator has higher degree, so the quotient is unbounded; it behaves like $\\frac{2x^3}{x^2} = 2x$, which goes to $-\\infty$ as $x \\to -\\infty$.',
    partNumber: 2,
    partTitle: 'Rational Functions Compare Degrees',
  },
  // Part 3 — Radicals at Infinity
  {
    id: 'lai-ent-3a',
    question: 'Evaluate $\\lim_{x \\to -\\infty} \\dfrac{\\sqrt{9x^2 - x}}{1 - 2x}$.',
    options: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$-\\frac{9}{2}$', '$-3$'],
    correctIndex: 0,
    explanation: 'For large negative $x$, $\\sqrt{9x^2} = 3|x| = -3x$, and the denominator behaves like $-2x$. The ratio is $\\frac{-3x}{-2x} = \\frac{3}{2}$, positive because both numerator and denominator are positive there.',
    partNumber: 3,
    partTitle: 'Radicals at Infinity',
  },
  {
    id: 'lai-ent-3b',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\dfrac{\\sqrt{x^3 + 1}}{x^2 - 5}$.',
    options: ['$+\\infty$', '$0$', '$-\\frac{1}{5}$', '$\\frac{3}{2}$'],
    correctIndex: 1,
    explanation: 'The numerator has effective degree $\\frac{3}{2}$ (it behaves like $x^{3/2}$), which is less than the denominator degree 2. Bottom-heavy means the quotient behaves like $x^{-1/2}$ and approaches 0.',
    partNumber: 3,
    partTitle: 'Radicals at Infinity',
  },
  // Part 4 — Exponentials, Logs, and DNE Cases
  {
    id: 'lai-ent-4a',
    question: 'Which limit fails to exist, not even as $+\\infty$ or $-\\infty$?',
    options: ['$\\lim_{x \\to \\infty} \\frac{\\cos x}{\\sqrt{x}}$', '$\\lim_{x \\to \\infty} \\frac{x^3}{e^x}$', '$\\lim_{x \\to \\infty} x\\cos x$', '$\\lim_{x \\to \\infty} \\frac{e^x}{x^3}$'],
    correctIndex: 2,
    explanation: 'The product $x\\cos x$ swings between ever larger positive and negative values, so it neither settles nor heads to one infinity. Bounded over growing gives 0, $\\frac{x^3}{e^x} \\to 0$, and $\\frac{e^x}{x^3} \\to +\\infty$.',
    partNumber: 4,
    partTitle: 'Exponentials, Logs, and DNE Cases',
  },
  {
    id: 'lai-ent-4b',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\dfrac{3e^x + x^4}{2e^x - \\ln x}$.',
    options: ['$+\\infty$', '$0$', '$3$', '$\\frac{3}{2}$'],
    correctIndex: 3,
    explanation: 'The exponential dominates both the polynomial and the logarithm. Dividing top and bottom by $e^x$ gives $\\frac{3 + x^4/e^x}{2 - (\\ln x)/e^x} \\to \\frac{3}{2}$.',
    partNumber: 4,
    partTitle: 'Exponentials, Logs, and DNE Cases',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Limits at Infinity & Horizontal Asymptotes' },
    { partNumber: 2, partTitle: 'Rational Functions Compare Degrees' },
    { partNumber: 3, partTitle: 'Radicals at Infinity' },
    { partNumber: 4, partTitle: 'Exponentials, Logs, and DNE Cases' },
  ]
}
