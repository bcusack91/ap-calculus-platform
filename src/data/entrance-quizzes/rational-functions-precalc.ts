/**
 * Entrance Quiz — Rational Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What Is a Rational Function?
  {
    id: 'rfp-ent-1a',
    question: 'What is the domain of $f(x) = \\dfrac{x^2 - 9}{x^2 + x - 12}$?',
    options: [
      'All reals except $x = -4$',
      'All reals except $x = 3$ and $x = -3$',
      'All reals except $x = 4$ and $x = -3$',
      'All reals except $x = -4$ and $x = 3$',
    ],
    correctIndex: 3,
    explanation: 'The denominator factors as $(x + 4)(x - 3)$, which is zero at $x = -4$ and $x = 3$. The factor $(x - 3)$ also appears in the numerator, but canceling it does not put $x = 3$ back into the domain.',
    partNumber: 1,
    partTitle: 'What Is a Rational Function?',
  },
  {
    id: 'rfp-ent-1b',
    question: 'Which function has domain $(-\\infty, -2) \\cup (-2, \\infty)$?',
    options: [
      '$\\dfrac{x + 2}{x^2 + 4}$',
      '$\\dfrac{x - 2}{x^2 + 4x + 4}$',
      '$\\dfrac{x^2 - 4}{x - 2}$',
      '$\\dfrac{3x}{x^2 - 4}$',
    ],
    correctIndex: 1,
    explanation: 'The denominator $x^2 + 4x + 4 = (x + 2)^2$ is zero only at $x = -2$. The denominator $x^2 + 4$ is never zero, $x - 2$ excludes $2$, and $x^2 - 4$ excludes both $2$ and $-2$.',
    partNumber: 1,
    partTitle: 'What Is a Rational Function?',
  },

  // Part 2 — Vertical & Horizontal Asymptotes
  {
    id: 'rfp-ent-2a',
    question: 'What are the asymptotes of $f(x) = \\dfrac{6x^2 - x}{3x^2 + 5x - 2}$?',
    options: [
      'VAs $x = -\\frac{1}{3}$ and $x = 2$; HA $y = 2$',
      'VAs $x = \\frac{1}{3}$ and $x = -2$; HA $y = 2$',
      'VAs $x = \\frac{1}{3}$ and $x = -2$; HA $y = 0$',
      'VAs $x = 0$ and $x = \\frac{1}{6}$; HA $y = 2$',
    ],
    correctIndex: 1,
    explanation: 'The denominator is $(3x - 1)(x + 2)$, zero at $x = \\frac{1}{3}$ and $x = -2$, and neither is a zero of the numerator $x(6x - 1)$. The degrees are equal, so the HA is the ratio of leading coefficients, $y = \\frac{6}{3} = 2$.',
    partNumber: 2,
    partTitle: 'Vertical & Horizontal Asymptotes',
  },
  {
    id: 'rfp-ent-2b',
    question: 'Which function satisfies $\\lim_{x \\to \\infty} f(x) = -\\frac{1}{2}$?',
    options: [
      '$f(x) = \\dfrac{1 - x}{2x^2 + x}$',
      '$f(x) = \\dfrac{x^2 - 1}{2x^2 + x}$',
      '$f(x) = \\dfrac{1 - x^3}{2x^2 + x}$',
      '$f(x) = \\dfrac{1 - x^2}{2x^2 + x}$',
    ],
    correctIndex: 3,
    explanation: 'For $\\frac{1 - x^2}{2x^2 + x}$ the degrees are equal and the leading coefficients are $-1$ and $2$, so the horizontal asymptote is $y = -\\frac{1}{2}$. A lower-degree numerator gives $y = 0$, and a higher-degree numerator gives no horizontal asymptote.',
    partNumber: 2,
    partTitle: 'Vertical & Horizontal Asymptotes',
  },

  // Part 3 — Holes & Removable Discontinuities
  {
    id: 'rfp-ent-3a',
    question: 'Where is the hole in the graph of $f(x) = \\dfrac{x^2 + 2x - 8}{x^2 - 4}$?',
    options: [
      '$(2, 0)$',
      '$(2, \\frac{2}{3})$',
      '$\\left(2, \\frac{3}{2}\\right)$',
      '$(-4, 0)$',
    ],
    correctIndex: 2,
    explanation: '$f(x) = \\frac{(x + 4)(x - 2)}{(x - 2)(x + 2)} = \\frac{x + 4}{x + 2}$ for $x \\ne 2$. The hole is at $x = 2$ with height $\\frac{2 + 4}{2 + 2} = \\frac{3}{2}$. The point $(-4, 0)$ is the $x$-intercept, not the hole.',
    partNumber: 3,
    partTitle: 'Holes & Removable Discontinuities',
  },
  {
    id: 'rfp-ent-3b',
    question: 'Which function has a hole at $x = -1$ and a vertical asymptote at $x = 4$?',
    options: [
      '$\\dfrac{x - 4}{x^2 - 3x - 4}$',
      '$\\dfrac{x + 1}{x^2 + 3x - 4}$',
      '$\\dfrac{x + 1}{x^2 - 3x - 4}$',
      '$\\dfrac{x^2 - 1}{x^2 - 5x + 4}$',
    ],
    correctIndex: 2,
    explanation: '$x^2 - 3x - 4 = (x - 4)(x + 1)$, so $\\frac{x + 1}{(x - 4)(x + 1)}$ cancels $(x + 1)$ (hole at $x = -1$) and keeps $(x - 4)$ (VA at $x = 4$). With $x - 4$ on top the roles swap, and $\\frac{x^2 - 1}{x^2 - 5x + 4}$ has its hole at $x = 1$.',
    partNumber: 3,
    partTitle: 'Holes & Removable Discontinuities',
  },

  // Part 4 — Simplifying Rational Expressions
  {
    id: 'rfp-ent-4a',
    question: 'Which expression equals $\\dfrac{2x^2 - x + 3}{x - 1}$ for all $x \\ne 1$?',
    options: [
      '$2x - 3 + \\frac{6}{x - 1}$',
      '$2x + 1 - \\frac{4}{x - 1}$',
      '$2x + 1 + \\frac{4}{x + 1}$',
      '$2x + 1 + \\frac{4}{x - 1}$',
    ],
    correctIndex: 3,
    explanation: 'Synthetic division with $c = 1$ on $2, -1, 3$ gives $2, 1$ and remainder $4$, so the expression is $2x + 1 + \\frac{4}{x - 1}$. Check: $(2x + 1)(x - 1) + 4 = 2x^2 - x + 3$.',
    partNumber: 4,
    partTitle: 'Simplifying Rational Expressions',
  },
  {
    id: 'rfp-ent-4b',
    question: 'Let $f(x) = \\dfrac{x^2 - 6x + 9}{x^2 - 9}$. Which gives a simplified formula for $f$ and correctly describes the graph at $x = 3$?',
    options: [
      '$\\frac{x - 3}{x + 3}$; hole at $(3, 0)$',
      '$\\frac{x - 3}{x + 3}$; an $x$-intercept at $x = 3$',
      '$\\frac{x + 3}{x - 3}$; hole at $(-3, 0)$',
      '$\\frac{x - 3}{x + 3}$; hole at $(-3, 0)$',
    ],
    correctIndex: 0,
    explanation: '$f(x) = \\frac{(x - 3)^2}{(x - 3)(x + 3)} = \\frac{x - 3}{x + 3}$ for $x \\ne 3$. The original is undefined at $x = 3$, so the graph has a hole there at height $\\frac{0}{6} = 0$, not an $x$-intercept.',
    partNumber: 4,
    partTitle: 'Simplifying Rational Expressions',
  },

  // Part 5 — Graphing Rational Functions
  {
    id: 'rfp-ent-5a',
    question: 'What is the range of $f(x) = \\dfrac{2}{x - 3} - 4$?',
    options: [
      'All reals except $y = 3$',
      'All reals except $y = -4$',
      'All reals except $y = 4$',
      'All reals except $y = 2$',
    ],
    correctIndex: 1,
    explanation: 'This is $\\frac{1}{x}$ stretched by 2, shifted right 3 and down 4. The horizontal asymptote moves to $y = -4$, and $\\frac{2}{x - 3}$ is never $0$, so $f$ takes every value except $-4$. The value $3$ is the vertical asymptote, which limits the domain.',
    partNumber: 5,
    partTitle: 'Graphing Rational Functions',
  },
  {
    id: 'rfp-ent-5b',
    question: 'For $f(x) = \\dfrac{x + 1}{x(x - 2)}$, which describes the behavior just to the right of each vertical asymptote?',
    options: [
      '$\\lim_{x\\to 0^+} f(x) = +\\infty$ and $\\lim_{x\\to 2^+} f(x) = +\\infty$',
      '$\\lim_{x\\to 0^+} f(x) = -\\infty$ and $\\lim_{x\\to 2^+} f(x) = +\\infty$',
      '$\\lim_{x\\to 0^+} f(x) = +\\infty$ and $\\lim_{x\\to 2^+} f(x) = -\\infty$',
      '$\\lim_{x\\to 0^+} f(x) = -\\infty$ and $\\lim_{x\\to 2^+} f(x) = -\\infty$',
    ],
    correctIndex: 1,
    explanation: 'Just right of $0$, the numerator is near $1$, $x$ is a small positive number and $x - 2$ is near $-2$, so $f$ is a large negative number. Just right of $2$, the numerator is near $3$ and $x(x - 2)$ is a small positive number, so $f$ is large and positive.',
    partNumber: 5,
    partTitle: 'Graphing Rational Functions',
  },

  // Part 6 — Rational Zeros & Inequalities
  {
    id: 'rfp-ent-6a',
    question: 'What are the real zeros of $r(x) = \\dfrac{x^3 - 4x}{x^2 + 2x}$?',
    options: [
      '$x = 0$ and $x = 2$',
      '$x = 2$ only',
      '$x = 0$, $x = 2$ and $x = -2$',
      '$x = 2$ and $x = -2$',
    ],
    correctIndex: 1,
    explanation: '$r(x) = \\frac{x(x - 2)(x + 2)}{x(x + 2)}$. The numerator is zero at $0$, $2$ and $-2$, but $0$ and $-2$ also zero the denominator, so they are holes. Only $x = 2$ is a zero.',
    partNumber: 6,
    partTitle: 'Rational Zeros & Inequalities',
  },
  {
    id: 'rfp-ent-6b',
    question: 'Solve $\\dfrac{x^2 - x - 6}{x + 1} > 0$.',
    options: [
      '$(-2, -1) \\cup (3, \\infty)$',
      '$(-\\infty, -2) \\cup (-1, 3)$',
      '$(-\\infty, -2) \\cup (3, \\infty)$',
      '$[-2, -1) \\cup [3, \\infty)$',
    ],
    correctIndex: 0,
    explanation: 'The expression is $\\frac{(x - 3)(x + 2)}{x + 1}$ with critical values $-2$, $-1$ and $3$. Test points give the signs $-, +, -, +$ on the four intervals, so it is positive on $(-2, -1)$ and $(3, \\infty)$; the strict inequality leaves out the zeros $-2$ and $3$.',
    partNumber: 6,
    partTitle: 'Rational Zeros & Inequalities',
  },

  // Part 7 — Rational Functions — Full Synthesis
  {
    id: 'rfp-ent-7a',
    question: 'A rational function $f$ is a ratio of two quadratics. Its only vertical asymptote is $x = 1$, it has a hole at $x = -2$, its horizontal asymptote is $y = 2$, and its only $x$-intercept is $x = 3$. What is the $y$-coordinate of the hole?',
    options: ['$-\\frac{10}{3}$', '$0$', '$\\frac{10}{3}$', '$\\frac{5}{3}$'],
    correctIndex: 2,
    explanation: 'The conditions give $f(x) = \\frac{2(x - 3)(x + 2)}{(x - 1)(x + 2)}$, which simplifies to $\\frac{2(x - 3)}{x - 1}$ for $x \\ne -2$. At $x = -2$ this is $\\frac{2(-5)}{-3} = \\frac{10}{3}$; leaving out the factor 2 from the horizontal asymptote gives $\\frac{5}{3}$.',
    partNumber: 7,
    partTitle: 'Rational Functions — Full Synthesis',
  },
  {
    id: 'rfp-ent-7b',
    question: 'Which statement about $f(x) = \\dfrac{x^2 - 2x - 3}{x^2 - x - 6}$ is true?',
    options: [
      'The graph crosses the $x$-axis at $x = -1$ and $x = 3$',
      'The graph has a hole at $(3, \\frac{4}{5})$',
      'The graph has vertical asymptotes at $x = 3$ and $x = -2$',
      'The graph has $y$-intercept $(0, -\\frac{1}{2})$',
    ],
    correctIndex: 1,
    explanation: '$f(x) = \\frac{(x - 3)(x + 1)}{(x - 3)(x + 2)} = \\frac{x + 1}{x + 2}$ for $x \\ne 3$, so there is a hole at $x = 3$ with height $\\frac{4}{5}$. That leaves one VA ($x = -2$), one $x$-intercept ($x = -1$), the HA $y = 1$ and the $y$-intercept $(0, \\frac{1}{2})$.',
    partNumber: 7,
    partTitle: 'Rational Functions — Full Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Is a Rational Function?' },
    { partNumber: 2, partTitle: 'Vertical & Horizontal Asymptotes' },
    { partNumber: 3, partTitle: 'Holes & Removable Discontinuities' },
    { partNumber: 4, partTitle: 'Simplifying Rational Expressions' },
    { partNumber: 5, partTitle: 'Graphing Rational Functions' },
    { partNumber: 6, partTitle: 'Rational Zeros & Inequalities' },
    { partNumber: 7, partTitle: 'Rational Functions — Full Synthesis' },
  ]
}
