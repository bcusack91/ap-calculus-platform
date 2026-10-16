/**
 * Entrance Quiz — Types of Discontinuity — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Removable Discontinuities
  {
    id: 'tod-ent-1a',
    question: 'Let $f(x) = \\dfrac{x^2 + 2x - 15}{x - 3}$ for $x \\ne 3$. What value should be assigned to $f(3)$ to remove the discontinuity?',
    options: ['$8$', '$-8$', '$15$', '$-2$'],
    correctIndex: 0,
    explanation: 'Factor: $\\frac{(x - 3)(x + 5)}{x - 3} = x + 5$ for $x \\ne 3$, so the limit at 3 is $8$. Defining $f(3) = 8$ fills the hole and makes $f$ continuous there.',
    partNumber: 1,
    partTitle: 'Removable Discontinuities',
  },
  {
    id: 'tod-ent-1b',
    question: 'Which function has a removable discontinuity at $x = -1$?',
    options: ['$\\frac{x^2 - 2}{x + 1}$', '$\\frac{x^2 - 1}{x + 1}$', '$\\frac{x + 1}{(x + 1)^2}$', '$\\frac{|x + 1|}{x + 1}$'],
    correctIndex: 1,
    explanation: 'Since $x^2 - 1 = (x - 1)(x + 1)$, that quotient equals $x - 1$ for $x \\ne -1$ and has a finite limit, $-2$: a hole. The others give nonzero over zero (infinite) or one-sided limits of $-1$ and $1$ (a jump).',
    partNumber: 1,
    partTitle: 'Removable Discontinuities',
  },
  // Part 2 — Jump Discontinuities
  {
    id: 'tod-ent-2a',
    question: 'Let $f(x) = \\begin{cases} 4 - x^2 & x < 2 \\\\ 2x - 1 & x \\ge 2 \\end{cases}$. Which describes $f$ at $x = 2$?',
    options: ['An infinite discontinuity', 'A removable hole at $y = 3$', 'A jump of size 3', 'No discontinuity at all'],
    correctIndex: 2,
    explanation: 'The left-hand limit is $4 - 4 = 0$ and the right-hand limit is $2(2) - 1 = 3$. Both are finite but unequal, so there is a jump of size $|3 - 0| = 3$.',
    partNumber: 2,
    partTitle: 'Jump Discontinuities',
  },
  {
    id: 'tod-ent-2b',
    question: 'On the graph of $f$, the left arm ends in an open circle at $(-1, -3)$ and the right arm begins with a closed dot at $(-1, 2)$. Which is correct at $x = -1$?',
    options: ['Jump, with $f(-1) = -3$', 'Removable, with $f(-1) = 2$', 'Removable, with $f(-1) = -3$', 'Jump, with $f(-1) = 2$'],
    correctIndex: 3,
    explanation: 'The one-sided limits are $-3$ and $2$, finite but different, so the discontinuity is a jump. The closed dot gives the function value, $f(-1) = 2$.',
    partNumber: 2,
    partTitle: 'Jump Discontinuities',
  },
  // Part 3 — Infinite Discontinuities
  {
    id: 'tod-ent-3a',
    question: 'Classify the discontinuities of $f(x) = \\dfrac{x - 2}{x^2 - 5x + 6}$.',
    options: ['Removable at 2, infinite at 3', 'Infinite at 2, removable at 3', 'Infinite at both 2 and 3', 'Removable at both 2 and 3'],
    correctIndex: 0,
    explanation: 'The denominator is $(x - 2)(x - 3)$. The factor $x - 2$ cancels, leaving $\\frac{1}{x - 3}$: a finite limit at 2 (a hole) and nonzero over zero at 3 (an infinite discontinuity).',
    partNumber: 3,
    partTitle: 'Infinite Discontinuities',
  },
  {
    id: 'tod-ent-3b',
    question: 'Why can the discontinuity of $g(x) = \\dfrac{3}{(x + 4)^2}$ at $x = -4$ not be removed by redefining $g(-4)$?',
    options: ['The one-sided limits are finite but unequal', 'No finite value is approached near $x = -4$', 'The function is not defined at $x = -4$', 'Both one-sided limits equal $-\\infty$'],
    correctIndex: 1,
    explanation: 'Both one-sided limits are $+\\infty$, so there is no finite limit for a new value of $g(-4)$ to match. Being undefined at a point is not the obstacle; holes are undefined too and can be removed.',
    partNumber: 3,
    partTitle: 'Infinite Discontinuities',
  },
  // Part 4 — Mixed Practice
  {
    id: 'tod-ent-4a',
    question: 'Let $f(x) = \\begin{cases} \\dfrac{x^2 - 4}{x - 2} & x < 2 \\\\ 4 & x = 2 \\\\ \\dfrac{1}{x - 3} & x > 2 \\end{cases}$. Classify the discontinuities at $x = 2$ and $x = 3$.',
    options: ['Removable at 2, infinite at 3', 'Continuous at 2, infinite at 3', 'Jump at 2, infinite at 3', 'Jump at 2, removable at 3'],
    correctIndex: 2,
    explanation: 'At $x = 2$ the left piece approaches $2 + 2 = 4$ but the right piece approaches $\\frac{1}{-1} = -1$, a jump. At $x = 3$ the right piece is nonzero over zero, an infinite discontinuity.',
    partNumber: 4,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'tod-ent-4b',
    question: 'A function satisfies $\\lim_{x \\to a} f(x) = 7$ and $f(a) = 2$. Which classification and fix are correct?',
    options: ['Jump; it cannot be fixed', 'Infinite; it cannot be fixed', 'Removable; redefine the limit as 2', 'Removable; redefine the value at $a$ as 7'],
    correctIndex: 3,
    explanation: 'A finite two-sided limit that differs from the function value is a removable discontinuity. It is fixed by changing the single value $f(a)$ to 7; the limit itself is determined by nearby values and cannot be changed.',
    partNumber: 4,
    partTitle: 'Mixed Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Removable Discontinuities' },
    { partNumber: 2, partTitle: 'Jump Discontinuities' },
    { partNumber: 3, partTitle: 'Infinite Discontinuities' },
    { partNumber: 4, partTitle: 'Mixed Practice' },
  ]
}
