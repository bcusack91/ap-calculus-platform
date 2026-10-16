/**
 * Entrance Quiz — Rational Functions and Asymptotes — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Meet the Rational Function
  {
    id: 'raa-ent-1a',
    question: 'Which of these is a rational function?',
    options: [
      '$\\dfrac{x + 1}{\\sqrt{x} + 3}$',
      '$\\dfrac{2^x - 1}{x^2 + 1}$',
      '$\\dfrac{x^2 + 1}{|x| - 2}$',
      '$\\dfrac{x^3 - 2}{4x}$',
    ],
    correctIndex: 3,
    explanation: 'A rational function is a polynomial divided by a polynomial, and $x^3 - 2$ and $4x$ are both polynomials. The others contain a square root, an exponential $2^x$, or an absolute value, none of which is a polynomial.',
    partNumber: 1,
    partTitle: 'Meet the Rational Function',
  },
  {
    id: 'raa-ent-1b',
    question: 'Which $x$-values are excluded from the domain of $f(x) = \\dfrac{x^2 - 4}{x^2 - 5x + 4}$?',
    options: [
      '$x = 2$ and $x = -2$',
      '$x = -1$ and $x = -4$',
      '$x = 1$ and $x = 4$',
      '$x = 1$, $x = 4$, $x = 2$ and $x = -2$',
    ],
    correctIndex: 2,
    explanation: 'Only the denominator restricts the domain: $x^2 - 5x + 4 = (x - 1)(x - 4)$ is zero at $x = 1$ and $x = 4$. The numerator\'s zeros, $\\pm 2$, are allowed inputs where $f$ equals $0$.',
    partNumber: 1,
    partTitle: 'Meet the Rational Function',
  },

  // Part 2 — Vertical Asymptotes & Holes
  {
    id: 'raa-ent-2a',
    question: 'Which describes the graph of $f(x) = \\dfrac{x^2 - 3x}{x^2 - 9}$ at the zeros of its denominator?',
    options: [
      'VAs at $x = 3$ and $x = -3$',
      'Hole at $(3, 0)$ and VA $x = -3$',
      'Hole at $(-3, 0)$ and VA $x = 3$',
      'Hole at $(3, \\frac{1}{2})$ and VA $x = -3$',
    ],
    correctIndex: 3,
    explanation: '$f(x) = \\frac{x(x - 3)}{(x - 3)(x + 3)} = \\frac{x}{x + 3}$ for $x \\ne 3$. The canceled factor gives a hole at $x = 3$ with height $\\frac{3}{6} = \\frac{1}{2}$, and $(x + 3)$ remains, giving a vertical asymptote at $x = -3$.',
    partNumber: 2,
    partTitle: 'Vertical Asymptotes & Holes',
  },
  {
    id: 'raa-ent-2b',
    question: 'What are the coordinates of the hole in the graph of $f(x) = \\dfrac{x^2 + 5x + 6}{x + 3}$?',
    options: [
      '$(-3, -1)$',
      '$(-3, 0)$',
      '$(-2, 0)$',
      '$(3, 5)$',
    ],
    correctIndex: 0,
    explanation: '$f(x) = \\frac{(x + 2)(x + 3)}{x + 3} = x + 2$ for $x \\ne -3$. The hole is at $x = -3$, and its height comes from the simplified form: $-3 + 2 = -1$. The point $(-2, 0)$ is the $x$-intercept.',
    partNumber: 2,
    partTitle: 'Vertical Asymptotes & Holes',
  },

  // Part 3 — Horizontal Asymptotes (The Degree Test)
  {
    id: 'raa-ent-3a',
    question: 'Which function has the horizontal asymptote $y = 0$?',
    options: [
      '$\\dfrac{2x + 7}{x^2 - 6x}$',
      '$\\dfrac{5x^2}{x^2 + 3}$',
      '$\\dfrac{x^3 - 1}{x^2}$',
      '$\\dfrac{4x - 1}{3x + 2}$',
    ],
    correctIndex: 0,
    explanation: 'A horizontal asymptote at $y = 0$ needs a lower-degree numerator: $\\frac{2x + 7}{x^2 - 6x}$ is degree 1 over degree 2. The equal-degree functions have asymptotes $y = 5$ and $y = \\frac{4}{3}$, and $\\frac{x^3 - 1}{x^2}$ has none.',
    partNumber: 3,
    partTitle: 'Horizontal Asymptotes (The Degree Test)',
  },
  {
    id: 'raa-ent-3b',
    question: 'The graph of $f(x) = \\dfrac{2x^2 - 3x}{x^2 + 1}$ has horizontal asymptote $y = 2$. At what $x$-value does the graph cross this asymptote?',
    options: [
      '$x = -\\frac{3}{2}$',
      '$x = \\frac{2}{3}$',
      '$x = -\\frac{2}{3}$',
      '$x = 0$ and $x = \\frac{3}{2}$',
    ],
    correctIndex: 2,
    explanation: 'Solve $f(x) = 2$: $2x^2 - 3x = 2(x^2 + 1)$, so $-3x = 2$ and $x = -\\frac{2}{3}$. The values $0$ and $\\frac{3}{2}$ solve $f(x) = 0$, the $x$-intercepts.',
    partNumber: 3,
    partTitle: 'Horizontal Asymptotes (The Degree Test)',
  },

  // Part 4 — Slant (Oblique) Asymptotes
  {
    id: 'raa-ent-4a',
    question: 'What is the slant asymptote of $f(x) = \\dfrac{2x^2 - 5x + 1}{x - 3}$?',
    options: [
      '$y = 2x - 11$',
      '$y = 2x + 1 + \\frac{4}{x - 3}$',
      '$y = 2x + 1$',
      '$y = 2x$',
    ],
    correctIndex: 2,
    explanation: 'Synthetic division with $c = 3$ on $2, -5, 1$ gives $2, 1$ with remainder $4$, so $f(x) = 2x + 1 + \\frac{4}{x - 3}$. The remainder term goes to $0$, so the asymptote is the quotient line $y = 2x + 1$.',
    partNumber: 4,
    partTitle: 'Slant (Oblique) Asymptotes',
  },
  {
    id: 'raa-ent-4b',
    question: 'Which function has the slant asymptote $y = x - 2$?',
    options: [
      '$\\dfrac{x^2 - 2}{x - 1}$',
      '$\\dfrac{x^2 - 3x + 5}{x - 1}$',
      '$\\dfrac{x^2 - 2x}{x + 1}$',
      '$\\dfrac{x^2 - 2}{x}$',
    ],
    correctIndex: 1,
    explanation: 'Dividing $x^2 - 3x + 5$ by $x - 1$ gives $x - 2$ with remainder $3$, so the graph approaches $y = x - 2$. The function $\\frac{x^2 - 2}{x - 1}$ approaches $y = x + 1$; $\\frac{x^2 - 2x}{x + 1}$ approaches $y = x - 3$, and $\\frac{x^2 - 2}{x}$ approaches $y = x$.',
    partNumber: 4,
    partTitle: 'Slant (Oblique) Asymptotes',
  },

  // Part 5 — Intercepts & Sign Analysis
  {
    id: 'raa-ent-5a',
    question: 'What are the intercepts of the graph of $f(x) = \\dfrac{x^2 - 1}{x^2 + 2x - 3}$?',
    options: [
      '$x$-intercepts $\\pm 1$; $y$-intercept $\\frac{1}{3}$',
      '$x$-intercept $-1$; $y$-intercept $\\frac{1}{3}$',
      '$x$-intercept $-1$; $y$-intercept $-\\frac{1}{3}$',
      '$x$-intercept $1$; $y$-intercept $\\frac{1}{3}$',
    ],
    correctIndex: 1,
    explanation: '$f(x) = \\frac{(x - 1)(x + 1)}{(x - 1)(x + 3)}$. The numerator zero $x = 1$ also zeros the denominator, so it is a hole; only $x = -1$ is an intercept. And $f(0) = \\frac{-1}{-3} = \\frac{1}{3}$.',
    partNumber: 5,
    partTitle: 'Intercepts & Sign Analysis',
  },
  {
    id: 'raa-ent-5b',
    question: 'For $g(x) = \\dfrac{x - 2}{(x + 1)(x - 5)}$, on which intervals is $g(x) > 0$?',
    options: [
      '$(-1, 2)$ and $(5, \\infty)$',
      '$(-\\infty, -1)$ and $(2, 5)$',
      '$(-1, 2)$ only',
      '$(2, \\infty)$ only',
    ],
    correctIndex: 0,
    explanation: 'Mark the zero $x = 2$ and the asymptotes $x = -1$ and $x = 5$, then test a point in each interval: the signs are $-, +, -, +$. So $g > 0$ on $(-1, 2)$ and on $(5, \\infty)$.',
    partNumber: 5,
    partTitle: 'Intercepts & Sign Analysis',
  },

  // Part 6 — Putting It All Together: Sketching the Graph
  {
    id: 'raa-ent-6a',
    question: 'Which statement about the graph of $h(x) = \\dfrac{3x}{x + 2}$ is true?',
    options: [
      'It has a hole at $x = -2$ and the asymptote $y = 3$',
      'It passes through the origin and $h(x) \\to \\infty$ as $x \\to -2^+$',
      'It passes through the origin and $h(x) \\to -\\infty$ as $x \\to -2^+$',
      'It has the asymptotes $x = 2$ and $y = 3$',
    ],
    correctIndex: 2,
    explanation: '$h(0) = 0$, so the graph passes through the origin. Just right of $x = -2$, the numerator is near $-6$ and the denominator is a small positive number, so $h(x) \\to -\\infty$. Nothing cancels, so $x = -2$ is an asymptote, not a hole.',
    partNumber: 6,
    partTitle: 'Putting It All Together: Sketching the Graph',
  },
  {
    id: 'raa-ent-6b',
    question: 'For $f(x) = \\dfrac{2x^2 - 2x - 4}{x^2 - 4}$, which gives the $x$-intercept(s), the $y$-intercept and the hole?',
    options: [
      '$x$-int $-1$, $y$-int $1$, hole $(2, \\frac{3}{2})$',
      '$x$-int $-1$, $y$-int $1$, hole $(-2, \\frac{1}{2})$',
      '$x$-int $-1$, $y$-int $-1$, hole $(2, \\frac{3}{2})$',
      '$x$-ints $-1$ and $2$, $y$-int $1$, hole $(2, 0)$',
    ],
    correctIndex: 0,
    explanation: '$f(x) = \\frac{2(x - 2)(x + 1)}{(x - 2)(x + 2)} = \\frac{2(x + 1)}{x + 2}$ for $x \\ne 2$. The $x$-intercept is $-1$, $f(0) = \\frac{-4}{-4} = 1$, and the hole is at $x = 2$ with height $\\frac{2(3)}{4} = \\frac{3}{2}$. The factor $(x + 2)$ does not cancel, so $x = -2$ is a vertical asymptote.',
    partNumber: 6,
    partTitle: 'Putting It All Together: Sketching the Graph',
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'raa-ent-7a',
    question: 'Which function has a vertical asymptote at $x = 2$, a hole at $x = -1$, and a slant asymptote?',
    options: [
      '$\\dfrac{(x + 1)(x + 3)}{(x + 1)(x - 2)}$',
      '$\\dfrac{(x + 1)(x^2 + 1)}{(x + 1)(x - 2)}$',
      '$\\dfrac{(x - 1)(x + 1)}{(x - 1)(x - 2)}$',
      '$\\dfrac{x^2 + 1}{(x + 1)(x - 2)}$',
    ],
    correctIndex: 1,
    explanation: 'Canceling $(x + 1)$ leaves a hole at $x = -1$ and $\\frac{x^2 + 1}{x - 2}$, which is degree 2 over degree 1 (a slant asymptote) with a vertical asymptote at $x = 2$. The other two-factor ratios simplify to degree 1 over degree 1, which gives a horizontal asymptote.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
  {
    id: 'raa-ent-7b',
    question: 'Which describes the graph of $f(x) = \\dfrac{x^2 + x - 12}{x - 3}$?',
    options: [
      'A slant asymptote $y = x + 4$ and a VA at $x = 3$',
      'The line $y = x + 4$ with a hole at $(-4, 0)$',
      'The line $y = x + 4$ with a hole at $(3, 7)$',
      'A slant asymptote $y = x + 4$ and a hole at $(3, 7)$',
    ],
    correctIndex: 2,
    explanation: '$f(x) = \\frac{(x + 4)(x - 3)}{x - 3} = x + 4$ for $x \\ne 3$, so the graph is that line with one point missing at $(3, 7)$. There is no asymptote: the division has remainder $0$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Meet the Rational Function' },
    { partNumber: 2, partTitle: 'Vertical Asymptotes & Holes' },
    { partNumber: 3, partTitle: 'Horizontal Asymptotes (The Degree Test)' },
    { partNumber: 4, partTitle: 'Slant (Oblique) Asymptotes' },
    { partNumber: 5, partTitle: 'Intercepts & Sign Analysis' },
    { partNumber: 6, partTitle: 'Putting It All Together: Sketching the Graph' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
