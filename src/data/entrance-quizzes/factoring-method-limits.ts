/**
 * Entrance Quiz — Factoring Method for Limits — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The 0/0 Trigger
  {
    id: 'fml-ent-1a',
    question: 'When finding $\\lim_{x \\to 1} \\dfrac{(x - 1)(x + 5)}{x - 1}$, why is it valid to cancel the factor $x - 1$?',
    options: ['Both expressions equal 6 when $x = 1$', 'A limit only uses the value at $x = 1$', 'The factor $x - 1$ is nonzero at $x = 1$', 'The two expressions agree for every $x \\ne 1$'],
    correctIndex: 3,
    explanation: 'For every $x \\ne 1$ the original expression equals $x + 5$, and a limit depends only on values near 1, never at 1. So both have the same limit, 6, even though the original is undefined at $x = 1$.',
    partNumber: 1,
    partTitle: 'The 0/0 Trigger',
  },
  {
    id: 'fml-ent-1b',
    question: 'Evaluate $\\lim_{x \\to 6} \\dfrac{x^2 - 36}{6 - x}$.',
    options: ['$12$', '$0$', '$-6$', '$-12$'],
    correctIndex: 3,
    explanation: 'Substitution gives $\\frac{0}{0}$. Since $6 - x = -(x - 6)$, the expression is $\\frac{(x - 6)(x + 6)}{-(x - 6)} = -(x + 6)$, which approaches $-12$. Missing the sign flip gives 12.',
    partNumber: 1,
    partTitle: 'The 0/0 Trigger',
  },
  // Part 2 — The Factoring Toolbox
  {
    id: 'fml-ent-2a',
    question: 'Evaluate $\\lim_{x \\to 3/2} \\dfrac{4x^2 - 9}{2x - 3}$.',
    options: ['$6$', '$12$', '$\\frac{9}{2}$', '$-6$'],
    correctIndex: 0,
    explanation: 'Difference of squares: $4x^2 - 9 = (2x - 3)(2x + 3)$. Cancelling leaves $2x + 3$, which equals $3 + 3 = 6$ at $x = \\frac{3}{2}$.',
    partNumber: 2,
    partTitle: 'The Factoring Toolbox',
  },
  {
    id: 'fml-ent-2b',
    question: 'Evaluate $\\lim_{x \\to -4} \\dfrac{x^2 + x - 12}{x^2 + 4x}$.',
    options: ['$-\\frac{7}{4}$', '$\\frac{1}{4}$', '$\\frac{7}{4}$', '$0$'],
    correctIndex: 2,
    explanation: 'Factor: $\\frac{(x + 4)(x - 3)}{x(x + 4)} = \\frac{x - 3}{x}$. At $x = -4$ this is $\\frac{-7}{-4} = \\frac{7}{4}$.',
    partNumber: 2,
    partTitle: 'The Factoring Toolbox',
  },
  // Part 3 — Worked Examples — Workflow
  {
    id: 'fml-ent-3a',
    question: 'Evaluate $\\lim_{x \\to 2} \\dfrac{x^2 - 4x + 4}{x^2 - x - 2}$.',
    options: ['$\\frac{1}{3}$', '$0$', '$\\frac{4}{3}$', 'Does not exist'],
    correctIndex: 1,
    explanation: 'Factor: $\\frac{(x - 2)^2}{(x - 2)(x + 1)} = \\frac{x - 2}{x + 1}$. Substituting now gives $\\frac{0}{3} = 0$, a perfectly good limit value.',
    partNumber: 3,
    partTitle: 'Worked Examples — Workflow',
  },
  {
    id: 'fml-ent-3b',
    question: 'Evaluate $\\lim_{x \\to 3} \\dfrac{x - 3}{x^2 - 6x + 9}$.',
    options: ['$0$', '$\\frac{1}{6}$', 'Does not exist', '$1$'],
    correctIndex: 2,
    explanation: 'Cancelling one factor gives $\\frac{1}{x - 3}$, which is now nonzero over zero. It goes to $-\\infty$ from the left and $+\\infty$ from the right, so the limit does not exist.',
    partNumber: 3,
    partTitle: 'Worked Examples — Workflow',
  },
  // Part 4 — Beyond Quadratics
  {
    id: 'fml-ent-4a',
    question: 'Evaluate $\\lim_{x \\to 1} \\dfrac{x^3 - 1}{x^2 + x - 2}$.',
    options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$', '$1$'],
    correctIndex: 3,
    explanation: 'Difference of cubes: $x^3 - 1 = (x - 1)(x^2 + x + 1)$, and $x^2 + x - 2 = (x - 1)(x + 2)$. The quotient becomes $\\frac{x^2 + x + 1}{x + 2} \\to \\frac{3}{3} = 1$.',
    partNumber: 4,
    partTitle: 'Beyond Quadratics',
  },
  {
    id: 'fml-ent-4b',
    question: 'Evaluate $\\lim_{x \\to 2} \\dfrac{x^3 - 2x^2 + 3x - 6}{x - 2}$.',
    options: ['$7$', '$4$', '$3$', '$11$'],
    correctIndex: 0,
    explanation: 'Group: $x^2(x - 2) + 3(x - 2) = (x - 2)(x^2 + 3)$. Cancelling leaves $x^2 + 3$, which approaches $4 + 3 = 7$.',
    partNumber: 4,
    partTitle: 'Beyond Quadratics',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The 0/0 Trigger' },
    { partNumber: 2, partTitle: 'The Factoring Toolbox' },
    { partNumber: 3, partTitle: 'Worked Examples — Workflow' },
    { partNumber: 4, partTitle: 'Beyond Quadratics' },
  ]
}
