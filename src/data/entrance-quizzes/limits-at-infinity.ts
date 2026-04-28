/**
 * Entrance Quiz — Limits at Infinity (canonical Unit 1 topic)
 * 8 questions, 2 per part. Strictly end-behavior / horizontal-asymptote scope.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'lai-ent-1a',
    question: '$\\lim_{x \\to \\infty} \\dfrac{1}{x^3}$ equals:',
    options: ['$0$', '$1$', '$\\infty$', 'DNE'],
    correctIndex: 0,
    explanation: 'Constant over a power of $x$ that grows without bound → 0.',
    partNumber: 1,
    partTitle: 'Limits at Infinity & Horizontal Asymptotes',
  },
  {
    id: 'lai-ent-1b',
    question: 'A horizontal asymptote $y = L$ of $f$ corresponds to:',
    options: ['$f(L) = 0$', '$\\lim_{x \\to a} f = L$ for some $a$', '$\\lim_{x \\to \\infty} f = L$ or $\\lim_{x \\to -\\infty} f = L$', 'A vertical line'],
    correctIndex: 2,
    explanation: 'Horizontal asymptotes describe end behavior — finite limits as $x \\to \\pm\\infty$.',
    partNumber: 1,
    partTitle: 'Limits at Infinity & Horizontal Asymptotes',
  },

  // Part 2
  {
    id: 'lai-ent-2a',
    question: '$\\lim_{x \\to \\infty} \\dfrac{6x^2 + 1}{3x^2 - 5x}$ equals:',
    options: ['$0$', '$1/2$', '$2$', '$\\infty$'],
    correctIndex: 2,
    explanation: 'Equal degrees (both 2): ratio of leading coefficients $6/3 = 2$.',
    partNumber: 2,
    partTitle: 'Rational Functions Compare Degrees',
  },
  {
    id: 'lai-ent-2b',
    question: '$\\lim_{x \\to \\infty} \\dfrac{4x + 1}{x^2 + 7}$ equals:',
    options: ['$0$', '$4$', '$1/7$', 'DNE'],
    correctIndex: 0,
    explanation: 'Bottom-heavier (degree 1 < degree 2) → 0.',
    partNumber: 2,
    partTitle: 'Rational Functions Compare Degrees',
  },

  // Part 3
  {
    id: 'lai-ent-3a',
    question: '$\\lim_{x \\to \\infty} \\dfrac{\\sqrt{4x^2 + 9}}{x}$ equals:',
    options: ['$0$', '$1$', '$2$', '$4$'],
    correctIndex: 2,
    explanation: 'Square root has effective degree 1: $\\sqrt{4x^2} = 2x$ for large positive $x$. Ratio $\\to 2$.',
    partNumber: 3,
    partTitle: 'Radicals at Infinity',
  },
  {
    id: 'lai-ent-3b',
    question: '$\\lim_{x \\to -\\infty} \\dfrac{\\sqrt{x^2 + 1}}{x}$ equals:',
    options: ['$1$', '$-1$', '$0$', 'DNE'],
    correctIndex: 1,
    explanation: '$\\sqrt{x^2} = |x| = -x$ when $x < 0$. So ratio $\\to -x/x = -1$.',
    partNumber: 3,
    partTitle: 'Radicals at Infinity',
  },

  // Part 4
  {
    id: 'lai-ent-4a',
    question: '$\\lim_{x \\to \\infty} \\dfrac{\\ln x}{x}$ equals:',
    options: ['$0$', '$1$', '$\\infty$', 'DNE'],
    correctIndex: 0,
    explanation: 'Logs grow slower than any positive power of $x$, so the ratio $\\to 0$.',
    partNumber: 4,
    partTitle: 'Exponentials, Logs, and DNE Cases',
  },
  {
    id: 'lai-ent-4b',
    question: '$\\lim_{x \\to \\infty} \\cos x$ equals:',
    options: ['$0$', '$1$', '$-1$', 'DNE — oscillates'],
    correctIndex: 3,
    explanation: '$\\cos x$ never settles; it keeps oscillating between $-1$ and $1$.',
    partNumber: 4,
    partTitle: 'Exponentials, Logs, and DNE Cases',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Limits at Infinity & Horizontal Asymptotes' },
    { partNumber: 2, partTitle: 'Rational Functions Compare Degrees' },
    { partNumber: 3, partTitle: 'Radicals at Infinity' },
    { partNumber: 4, partTitle: 'Exponentials, Logs, and DNE Cases' },
  ]
}
