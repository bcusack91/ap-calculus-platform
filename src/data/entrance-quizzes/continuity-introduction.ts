/**
 * Entrance Quiz — Introduction to Continuity — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Continuity Definition
  {
    id: 'cin-ent-1a',
    question: 'Let $f(x) = \\dfrac{x^2 + x - 2}{x - 1}$ for $x \\ne 1$ and $f(1) = 3$. Which of the three continuity conditions fails at $x = 1$?',
    options: ['The limit at $x = 1$ does not exist', '$f(1)$ is not defined', 'None of them', 'The limit does not equal $f(1)$'],
    correctIndex: 2,
    explanation: 'For $x \\ne 1$, $f(x) = x + 2$, so $\\lim_{x \\to 1} f(x) = 3$. Since $f(1) = 3$ is defined and equals the limit, all three conditions hold and $f$ is continuous at $x = 1$.',
    partNumber: 1,
    partTitle: 'Continuity Definition',
  },
  {
    id: 'cin-ent-1b',
    question: 'Let $h(x) = \\dfrac{|x - 3|}{x - 3}$ for $x \\ne 3$ and $h(3) = 1$. Which statement explains why $h$ is discontinuous at $x = 3$?',
    options: ['$h(3)$ is undefined', '$\\lim_{x \\to 3} h(x)$ does not exist', '$\\lim_{x \\to 3} h(x) = 0$, which differs from $h(3)$', '$\\lim_{x \\to 3} h(x) = -1$, which differs from $h(3)$'],
    correctIndex: 1,
    explanation: 'The left-hand limit is $-1$ and the right-hand limit is $1$, so the two-sided limit does not exist and condition 2 fails. The value $h(3) = 1$ is defined, and the limit is not 0 (averaging the sides is not valid).',
    partNumber: 1,
    partTitle: 'Continuity Definition',
  },
  // Part 2 — Continuity Catalog
  {
    id: 'cin-ent-2a',
    question: 'On which set is $f(x) = \\dfrac{\\ln(x + 2)}{x - 1}$ continuous?',
    options: ['$(-2, \\infty)$', '$[-2, 1) \\cup (1, \\infty)$', '$(-2, 1) \\cup (1, \\infty)$', '$(-\\infty, 1) \\cup (1, \\infty)$'],
    correctIndex: 2,
    explanation: 'The logarithm needs $x + 2 > 0$, so $x > -2$ (not $x = -2$, where $\\ln 0$ is undefined), and the denominator needs $x \\ne 1$. A quotient of continuous functions is continuous wherever both conditions hold.',
    partNumber: 2,
    partTitle: 'Continuity Catalog',
  },
  {
    id: 'cin-ent-2b',
    question: 'On which interval is $g(x) = \\sqrt{4 - e^x}$ continuous?',
    options: ['$(-\\infty, \\ln 4]$', '$(-\\infty, 4]$', '$[\\ln 4, \\infty)$', '$(-\\infty, 2]$'],
    correctIndex: 0,
    explanation: 'The composition is continuous wherever the radicand is nonnegative: $4 - e^x \\ge 0$ means $e^x \\le 4$, so $x \\le \\ln 4$. At $x = \\ln 4$ it is continuous from the left.',
    partNumber: 2,
    partTitle: 'Continuity Catalog',
  },
  // Part 3 — Piecewise Continuity
  {
    id: 'cin-ent-3a',
    question: 'Let $f(x) = \\begin{cases} \\sqrt{x + 5} & x < 4 \\\\ kx - 5 & x \\ge 4 \\end{cases}$. What value of $k$ makes $f$ continuous at $x = 4$?',
    options: ['$-\\frac{1}{2}$', '$\\frac{3}{4}$', '$\\frac{7}{2}$', '$2$'],
    correctIndex: 3,
    explanation: 'The left piece approaches $\\sqrt{9} = 3$ and the right piece gives $4k - 5$ at $x = 4$. Setting $4k - 5 = 3$ gives $k = 2$; forgetting the square root (using 9) gives $\\frac{7}{2}$.',
    partNumber: 3,
    partTitle: 'Piecewise Continuity',
  },
  {
    id: 'cin-ent-3b',
    question: 'Let $f(x) = \\begin{cases} ax + 3 & x < 1 \\\\ x^2 + b & 1 \\le x \\le 2 \\\\ 5x - a & x > 2 \\end{cases}$. Which values make $f$ continuous everywhere?',
    options: ['$a = 4$ and $b = 2$', '$a = 2$ and $b = 4$', '$a = -2$ and $b = 0$', '$a = 3$ and $b = 3$'],
    correctIndex: 1,
    explanation: 'At $x = 1$: $a + 3 = 1 + b$, so $a - b = -2$. At $x = 2$: $4 + b = 10 - a$, so $a + b = 6$. Solving gives $a = 2$ and $b = 4$.',
    partNumber: 3,
    partTitle: 'Piecewise Continuity',
  },
  // Part 4 — Continuity on Intervals & IVT
  {
    id: 'cin-ent-4a',
    question: 'For which function does the Intermediate Value Theorem guarantee a zero in the interval $(0, 2)$?',
    options: ['$\\frac{1}{x - 1}$', '$e^x - \\frac{1}{2}$', '$x^2 - 3x + 1$', '$\\frac{x}{2} + \\cos x$'],
    correctIndex: 2,
    explanation: 'The polynomial is continuous on $[0, 2]$ with values $1$ at $x = 0$ and $-1$ at $x = 2$, so it must equal 0 in between. The first changes sign only across its discontinuity at $x = 1$, and the other two are positive at both endpoints.',
    partNumber: 4,
    partTitle: 'Continuity on Intervals & IVT',
  },
  {
    id: 'cin-ent-4b',
    question: 'Is $f(x) = \\sqrt{9 - x^2}$ continuous on the closed interval $[-3, 3]$?',
    options: ['No, since $f$ has no left limit at $x = -3$', 'No, since $f(3) = 0$ and $f(-3) = 0$', 'No, since $f\'(x)$ is undefined at $x = \\pm 3$', 'Yes, using one-sided limits at $x = \\pm 3$'],
    correctIndex: 3,
    explanation: 'Continuity on a closed interval requires continuity inside plus right-continuity at $-3$ and left-continuity at $3$, and both one-sided limits equal $f(\\pm 3) = 0$. A missing outside limit or derivative at an endpoint does not matter.',
    partNumber: 4,
    partTitle: 'Continuity on Intervals & IVT',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Continuity Definition' },
    { partNumber: 2, partTitle: 'Continuity Catalog' },
    { partNumber: 3, partTitle: 'Piecewise Continuity' },
    { partNumber: 4, partTitle: 'Continuity on Intervals & IVT' },
  ]
}
