/**
 * Entrance Quiz — Infinite Limits & Vertical Asymptotes — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Notation and Meaning
  {
    id: 'ilv-ent-1a',
    question: 'Which statement, by itself, guarantees that the line $x = 3$ is a vertical asymptote of $f$?',
    options: ['$\\lim_{x \\to \\infty} f(x) = 3$', '$\\lim_{x \\to 3} f(x) = 0$', '$\\lim_{x \\to -\\infty} f(x) = 3$', '$\\lim_{x \\to 3^-} f(x) = -\\infty$'],
    correctIndex: 3,
    explanation: 'A vertical asymptote at $x = 3$ needs an infinite limit as $x$ approaches 3 from at least one side. The limits as $x \\to \\pm\\infty$ equal to 3 describe a horizontal asymptote $y = 3$ instead.',
    partNumber: 1,
    partTitle: 'Notation and Meaning',
  },
  {
    id: 'ilv-ent-1b',
    question: 'Let $g(x) = \\dfrac{-2}{(x + 1)^2}$. Which statement is correct?',
    options: ['$\\lim_{x \\to -1^+} g(x) = +\\infty$', '$\\lim_{x \\to -1^-} g(x) = +\\infty$', '$\\lim_{x \\to +\\infty} g(x) = -1$', '$\\lim_{x \\to -1} g(x) = -\\infty$'],
    correctIndex: 3,
    explanation: 'The numerator is $-2$ and $(x + 1)^2$ is a small positive number on both sides of $-1$, so $g(x)$ decreases without bound from both sides; the two-sided behavior is written $-\\infty$. As $x \\to +\\infty$, $g(x) \\to 0$, not $-1$.',
    partNumber: 1,
    partTitle: 'Notation and Meaning',
  },
  // Part 2 — Diagnosing Infinite Limits
  {
    id: 'ilv-ent-2a',
    question: 'Evaluate $\\lim_{x \\to 1^-} \\dfrac{x - 3}{x^2 - 1}$.',
    options: ['$+\\infty$', '$-\\infty$', '$1$', '$0$'],
    correctIndex: 0,
    explanation: 'The numerator approaches $-2$. For $x$ slightly less than 1, $x^2 - 1$ is a small negative number, so the quotient is negative over negative: it grows to $+\\infty$.',
    partNumber: 2,
    partTitle: 'Diagnosing Infinite Limits',
  },
  {
    id: 'ilv-ent-2b',
    question: 'Evaluate $\\lim_{x \\to 0^-} \\dfrac{e^x}{x^3}$.',
    options: ['$\\infty$', '$0$', '$-\\infty$', '$1$'],
    correctIndex: 2,
    explanation: 'The numerator approaches $e^0 = 1$, a positive number. For $x$ slightly less than 0, $x^3$ is a small negative number, so the quotient decreases without bound to $-\\infty$.',
    partNumber: 2,
    partTitle: 'Diagnosing Infinite Limits',
  },
  // Part 3 — Vertical Asymptotes
  {
    id: 'ilv-ent-3a',
    question: 'Which describes the graph of $f(x) = \\dfrac{x^2 - 3x}{x^2 - 9}$?',
    options: ['Asymptotes at both $x = 3$ and $x = -3$', 'A hole at $x = 3$ and an asymptote at $x = -3$', 'A hole at $x = -3$ and an asymptote at $x = 3$', 'Holes at both $x = 3$ and $x = -3$'],
    correctIndex: 1,
    explanation: 'Factor: $\\frac{x(x - 3)}{(x - 3)(x + 3)}$. The factor $x - 3$ cancels completely, leaving a hole at $x = 3$; at $x = -3$ the numerator is $9 \\ne 0$, so there is a vertical asymptote.',
    partNumber: 3,
    partTitle: 'Vertical Asymptotes',
  },
  {
    id: 'ilv-ent-3b',
    question: 'How many vertical asymptotes does $g(x) = \\dfrac{x + 2}{x^3 + 2x^2}$ have, and where?',
    options: ['One, at $x = 0$', 'Two, at $x = 0$ and $x = -2$', 'One, at $x = -2$', 'None, since every factor cancels'],
    correctIndex: 0,
    explanation: 'The denominator is $x^2(x + 2)$. The $x + 2$ cancels with the numerator (a hole at $x = -2$), leaving $\\frac{1}{x^2}$, which blows up at $x = 0$. So there is exactly one vertical asymptote.',
    partNumber: 3,
    partTitle: 'Vertical Asymptotes',
  },
  // Part 4 — Asymptotes Beyond Rationals
  {
    id: 'ilv-ent-4a',
    question: 'Evaluate $\\lim_{x \\to \\pi^-} \\cot x$.',
    options: ['$\\infty$', '$0$', '$1$', '$-\\infty$'],
    correctIndex: 3,
    explanation: 'Write $\\cot x = \\frac{\\cos x}{\\sin x}$. As $x \\to \\pi^-$, $\\cos x \\to -1$ while $\\sin x$ is a small positive number, so the quotient goes to $-\\infty$.',
    partNumber: 4,
    partTitle: 'Asymptotes Beyond Rationals',
  },
  {
    id: 'ilv-ent-4b',
    question: 'Evaluate $\\lim_{x \\to 3^+} \\dfrac{1}{\\ln(x - 2)}$.',
    options: ['$-\\infty$', '$0$', '$+\\infty$', '$1$'],
    correctIndex: 2,
    explanation: 'As $x \\to 3^+$, $x - 2 \\to 1^+$, so $\\ln(x - 2)$ is a small positive number. Its reciprocal grows to $+\\infty$, giving a vertical asymptote at $x = 3$.',
    partNumber: 4,
    partTitle: 'Asymptotes Beyond Rationals',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Notation and Meaning' },
    { partNumber: 2, partTitle: 'Diagnosing Infinite Limits' },
    { partNumber: 3, partTitle: 'Vertical Asymptotes' },
    { partNumber: 4, partTitle: 'Asymptotes Beyond Rationals' },
  ]
}
