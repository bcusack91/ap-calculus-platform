/**
 * Entrance Quiz — Continuity Introduction
 * 8 questions, 2 per part. Strictly the continuity-introduction topic.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'ci-ent-1a',
    question: 'Which is NOT one of the three conditions for $f$ to be continuous at $a$?',
    options: [
      '$f(a)$ is defined',
      '$\\lim_{x \\to a} f(x)$ exists',
      '$\\lim_{x \\to a} f(x) = f(a)$',
      '$f\'(a)$ exists',
    ],
    correctIndex: 3,
    explanation: 'Differentiability is stronger than continuity, not part of the definition.',
    partNumber: 1,
    partTitle: 'Continuity Definition',
  },
  {
    id: 'ci-ent-1b',
    question: 'Is $f(x) = \\dfrac{x^2 - 1}{x - 1}$ continuous at $x = 1$?',
    options: ['Yes', 'No \u2014 $f(1)$ is undefined', 'Yes after simplification', 'It depends on the limit'],
    correctIndex: 1,
    explanation: '$f(1) = 0/0$ is undefined, so condition (1) fails. Discontinuous (removable).',
    partNumber: 1,
    partTitle: 'Continuity Definition',
  },

  // Part 2
  {
    id: 'ci-ent-2a',
    question: 'Where is $f(x) = \\dfrac{x + 2}{x^2 - 4}$ continuous?',
    options: ['All real $x$', 'All $x \\ne 0$', 'All $x \\ne \\pm 2$', '$x > 0$'],
    correctIndex: 2,
    explanation: 'Rational function — continuous wherever the denominator is nonzero.',
    partNumber: 2,
    partTitle: 'Continuity Catalog',
  },
  {
    id: 'ci-ent-2b',
    question: 'Where is $f(x) = \\sqrt{x + 1}$ continuous?',
    options: ['All real $x$', '$x \\ge -1$', '$x > -1$', '$x \\ne -1$'],
    correctIndex: 1,
    explanation: 'Defined and continuous on $[-1, \\infty)$ (right-continuous at $x = -1$).',
    partNumber: 2,
    partTitle: 'Continuity Catalog',
  },

  // Part 3
  {
    id: 'ci-ent-3a',
    question: 'For $f(x) = \\begin{cases} 2x + 1, & x \\le 1 \\\\ x^2 + k, & x > 1 \\end{cases}$, what value of $k$ makes $f$ continuous at $x = 1$?',
    options: ['$k = -1$', '$k = 0$', '$k = 2$', '$k = 3$'],
    correctIndex: 2,
    explanation: 'Left at 1: $3$. Right limit: $1 + k$. Set $1 + k = 3 \\Rightarrow k = 2$.',
    partNumber: 3,
    partTitle: 'Piecewise Continuity',
  },
  {
    id: 'ci-ent-3b',
    question: 'For continuity at the boundary $x = a$ of a piecewise function, what must hold?',
    options: [
      '$f$ must be linear',
      'Left and right pieces must agree at $a$',
      'The pieces must have the same slope',
      'The function must be polynomial',
    ],
    correctIndex: 1,
    explanation: 'Continuity = matching values at the boundary (no jump).',
    partNumber: 3,
    partTitle: 'Piecewise Continuity',
  },

  // Part 4
  {
    id: 'ci-ent-4a',
    question: 'IVT applies when $f$ is:',
    options: [
      'Continuous on $[a, b]$ (closed interval)',
      'Differentiable on $(a, b)$',
      'Polynomial only',
      'Bounded',
    ],
    correctIndex: 0,
    explanation: 'Continuity on the closed interval is IVT\'s only hypothesis.',
    partNumber: 4,
    partTitle: 'IVT',
  },
  {
    id: 'ci-ent-4b',
    question: 'Given $f(x) = x^3 - x - 1$ continuous on $[1, 2]$ with $f(1) = -1$ and $f(2) = 5$. IVT guarantees:',
    options: [
      '$f$ is increasing',
      'Exactly one root in $(1, 2)$',
      'At least one $c \\in (1, 2)$ with $f(c) = 0$',
      '$f$ has no roots there',
    ],
    correctIndex: 2,
    explanation: '$0$ is between $-1$ and $5$, so IVT gives at least one $c$ with $f(c) = 0$. (Doesn\'t guarantee uniqueness.)',
    partNumber: 4,
    partTitle: 'IVT',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Continuity Definition' },
    { partNumber: 2, partTitle: 'Continuity Catalog' },
    { partNumber: 3, partTitle: 'Piecewise Continuity' },
    { partNumber: 4, partTitle: 'IVT' },
  ]
}
