/**
 * Entrance Quiz — Limits & Continuity (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Foundation of Calculus
  {
    id: 'lcc-ent-1a',
    question: 'Evaluate $\\lim_{h \\to 0} \\dfrac{(2+h)^3 - 8}{h}$.',
    options: ['$12$', '$8$', '$6$', '$0$'],
    correctIndex: 0,
    explanation: 'Substitution gives $\\frac{0}{0}$, so expand: $(2+h)^3 - 8 = 12h + 6h^2 + h^3$. Dividing by $h$ leaves $12 + 6h + h^2$, which approaches $12$.',
    partNumber: 1,
    partTitle: 'The Foundation of Calculus',
  },
  {
    id: 'lcc-ent-1b',
    question: 'Evaluate $\\lim_{x \\to 4} \\dfrac{x + 3}{(x - 4)^2}$.',
    options: ['$-\\infty$', '$0$', '$+\\infty$', '$7$'],
    correctIndex: 2,
    explanation: 'Substitution gives $\\frac{7}{0}$, a nonzero number over zero, so the limit is infinite. The denominator $(x-4)^2$ is positive on both sides and the numerator is near 7, so the quotient grows to $+\\infty$.',
    partNumber: 1,
    partTitle: 'The Foundation of Calculus',
  },
  // Part 2 — Mastering Limit Computation
  {
    id: 'lcc-ent-2a',
    question: 'Evaluate $\\lim_{x \\to 0} \\dfrac{x^2 + \\sin(5x)}{x}$.',
    options: ['$1$', '$0$', '$6$', '$5$'],
    correctIndex: 3,
    explanation: 'Split the fraction: $\\frac{x^2}{x} = x \\to 0$ and $\\frac{\\sin(5x)}{x} = 5 \\cdot \\frac{\\sin(5x)}{5x} \\to 5$. The sum is $5$; answering 1 forgets to match the argument $5x$.',
    partNumber: 2,
    partTitle: 'Mastering Limit Computation',
  },
  {
    id: 'lcc-ent-2b',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\dfrac{6x^2 - x}{3 - 2x^2}$.',
    options: ['$3$', '$-3$', '$-\\frac{1}{3}$', '$0$'],
    correctIndex: 1,
    explanation: 'The degrees are equal, so the limit is the ratio of leading coefficients: $\\frac{6}{-2} = -3$. Dropping the sign of $-2x^2$ gives $3$, and flipping the ratio gives $-\\frac{1}{3}$.',
    partNumber: 2,
    partTitle: 'Mastering Limit Computation',
  },
  // Part 3 — Left-Hand and Right-Hand Limits
  {
    id: 'lcc-ent-3a',
    question: 'Let $f(x) = \\begin{cases} x^2 - 1 & x < 2 \\\\ 2x & x \\ge 2 \\end{cases}$. Which statement about $\\lim_{x \\to 2} f(x)$ is true?',
    options: ['It equals 3', 'It equals 4', 'It does not exist', 'It equals $\\frac{7}{2}$'],
    correctIndex: 2,
    explanation: 'From the left, $x^2 - 1 \\to 3$; from the right, $2x \\to 4$. The one-sided limits differ, so the two-sided limit does not exist (4 is only the value $f(2)$).',
    partNumber: 3,
    partTitle: 'Left-Hand and Right-Hand Limits',
  },
  {
    id: 'lcc-ent-3b',
    question: 'Evaluate $\\lim_{x \\to 2^+} \\dfrac{x + 1}{2 - x}$.',
    options: ['$\\infty$', '$-3$', '$3$', '$-\\infty$'],
    correctIndex: 3,
    explanation: 'For $x$ slightly greater than 2, the numerator is near 3 and $2 - x$ is a small negative number, so the quotient decreases without bound to $-\\infty$.',
    partNumber: 3,
    partTitle: 'Left-Hand and Right-Hand Limits',
  },
  // Part 4 — Bounding Limits
  {
    id: 'lcc-ent-4a',
    question: 'Suppose $2x + 1 \\le f(x) \\le x^2 + 2$ for all $x$ near $1$. What is $\\lim_{x \\to 1} f(x)$?',
    options: ['$3$', '$2$', '$1$', '$4$'],
    correctIndex: 0,
    explanation: 'Both bounds approach the same value at $x = 1$: $2(1) + 1 = 3$ and $1^2 + 2 = 3$. By the Squeeze Theorem, $\\lim_{x \\to 1} f(x) = 3$.',
    partNumber: 4,
    partTitle: 'Bounding Limits',
  },
  {
    id: 'lcc-ent-4b',
    question: 'Evaluate $\\lim_{x \\to \\infty} \\dfrac{2x + \\sin x}{x}$.',
    options: ['$3$', '$2$', 'Does not exist', '$1$'],
    correctIndex: 1,
    explanation: 'Write it as $2 + \\frac{\\sin x}{x}$. Since $-\\frac{1}{x} \\le \\frac{\\sin x}{x} \\le \\frac{1}{x}$ and both bounds go to 0, the oscillating term vanishes and the limit is $2$.',
    partNumber: 4,
    partTitle: 'Bounding Limits',
  },
  // Part 5 — When Functions Behave Nicely
  {
    id: 'lcc-ent-5a',
    question: 'Let $f(x) = \\begin{cases} kx^2 - 1 & x < 3 \\\\ 2x + k & x \\ge 3 \\end{cases}$. For what value of $k$ is $f$ continuous at $x = 3$?',
    options: ['$\\frac{5}{8}$', '$\\frac{7}{10}$', '$1$', '$\\frac{7}{8}$'],
    correctIndex: 3,
    explanation: 'Continuity requires the one-sided limits to match $f(3)$: $9k - 1 = 6 + k$, so $8k = 7$ and $k = \\frac{7}{8}$.',
    partNumber: 5,
    partTitle: 'When Functions Behave Nicely',
  },
  {
    id: 'lcc-ent-5b',
    question: 'A function $g$ is continuous on $[0, 4]$ with $g(0) = 5$ and $g(4) = -1$. Which equation is guaranteed to have a solution in $(0, 4)$?',
    options: ['$g(x) = -2$', '$g(x) = 3$', '$g(x) = 5.5$', '$g(x) = -1.5$'],
    correctIndex: 1,
    explanation: 'The IVT guarantees every value between $g(4) = -1$ and $g(0) = 5$ is taken on $(0, 4)$. Only 3 lies in that range; $-2$, $5.5$ and $-1.5$ lie outside it.',
    partNumber: 5,
    partTitle: 'When Functions Behave Nicely',
  },
  // Part 6 — AP-Level Practice
  {
    id: 'lcc-ent-6a',
    question: 'Evaluate $\\lim_{x \\to -\\infty} \\dfrac{3x - 2}{\\sqrt{4x^2 + 1}}$.',
    options: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$-\\frac{3}{4}$', '$0$'],
    correctIndex: 1,
    explanation: 'For large negative $x$, $\\sqrt{4x^2} = 2|x| = -2x$, so the quotient behaves like $\\frac{3x}{-2x} = -\\frac{3}{2}$. Writing $\\sqrt{4x^2} = 2x$ gives the wrong sign.',
    partNumber: 6,
    partTitle: 'AP-Level Practice',
  },
  {
    id: 'lcc-ent-6b',
    question: 'Evaluate $\\lim_{x \\to 16} \\dfrac{x - 16}{\\sqrt{x} - 4}$.',
    options: ['$\\frac{1}{8}$', '$16$', '$8$', '$\\frac{1}{4}$'],
    correctIndex: 2,
    explanation: 'Multiply by the conjugate $\\sqrt{x} + 4$: the quotient becomes $\\frac{(x-16)(\\sqrt{x}+4)}{x-16} = \\sqrt{x} + 4$, which approaches $8$. The value $\\frac{1}{8}$ is the limit of the reciprocal expression.',
    partNumber: 6,
    partTitle: 'AP-Level Practice',
  },
  // Part 7 — Putting It All Together
  {
    id: 'lcc-ent-7a',
    question: 'A student uses the Intermediate Value Theorem to show that $f(c) = 0$ for some $c$ in $(1, 4)$, given $f(1) = -2$ and $f(4) = 3$. Which additional fact must the justification state?',
    options: ['$f$ is strictly increasing on $[1, 4]$', '$f\'(c) = 0$ for some $c$ in $(1, 4)$', '$f$ is continuous on $[1, 4]$', '$f$ is differentiable on the interval $(1, 4)$'],
    correctIndex: 2,
    explanation: 'The IVT requires continuity on the closed interval $[1, 4]$. Being increasing does not give continuity, and differentiability on the open interval says nothing about the endpoints.',
    partNumber: 7,
    partTitle: 'Putting It All Together',
  },
  {
    id: 'lcc-ent-7b',
    question: 'Let $f(x) = \\dfrac{x^2 - x - 6}{x - 3}$ for $x \\ne 3$ and $f(3) = 4$. Which statement is true at $x = 3$?',
    options: ['$f$ is continuous at $x = 3$', '$f$ has a jump discontinuity', '$f$ has an infinite discontinuity', '$f$ has a removable discontinuity'],
    correctIndex: 3,
    explanation: 'Factoring gives $\\frac{(x-3)(x+2)}{x-3} = x + 2 \\to 5$, so the limit exists but does not equal $f(3) = 4$. A finite limit that differs from the function value is a removable discontinuity.',
    partNumber: 7,
    partTitle: 'Putting It All Together',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Foundation of Calculus' },
    { partNumber: 2, partTitle: 'Mastering Limit Computation' },
    { partNumber: 3, partTitle: 'Left-Hand and Right-Hand Limits' },
    { partNumber: 4, partTitle: 'Bounding Limits' },
    { partNumber: 5, partTitle: 'When Functions Behave Nicely' },
    { partNumber: 6, partTitle: 'AP-Level Practice' },
    { partNumber: 7, partTitle: 'Putting It All Together' },
  ]
}
