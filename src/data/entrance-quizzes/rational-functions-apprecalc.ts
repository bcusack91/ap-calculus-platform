/**
 * Entrance Quiz — Rational Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Domain Restrictions
  {
    id: 'rfa-ent-1a',
    question: 'Which values are excluded from the domain of $f(x) = \\dfrac{x + 5}{x^2 - 3x - 10}$?',
    options: [
      '$x = -5$ only',
      '$x = -5$ and $x = 2$',
      '$x = 5$ and $x = -2$',
      '$x = 5$, $x = -2$ and $x = -5$',
    ],
    correctIndex: 2,
    explanation: 'The denominator factors as $(x - 5)(x + 2)$, which is zero at $x = 5$ and $x = -2$. The numerator\'s zero, $x = -5$, is an $x$-intercept and does not restrict the domain.',
    partNumber: 1,
    partTitle: 'Domain Restrictions',
  },
  {
    id: 'rfa-ent-1b',
    question: 'Which function is defined for every real number $x$?',
    options: [
      '$\\dfrac{1}{x^2 + 1}$',
      '$\\dfrac{x^2 + 1}{x - 1}$',
      '$\\dfrac{x + 1}{x^2 - 1}$',
      '$\\dfrac{x^2 + x}{x^2}$',
    ],
    correctIndex: 0,
    explanation: 'The denominator $x^2 + 1$ is at least $1$ for every real $x$, so it is never zero. The other denominators are zero at $x = 1$, at $x = \\pm 1$, and at $x = 0$.',
    partNumber: 1,
    partTitle: 'Domain Restrictions',
  },

  // Part 2 — Vertical Asymptotes
  {
    id: 'rfa-ent-2a',
    question: 'Where are the vertical asymptotes of $f(x) = \\dfrac{x - 1}{x^2 + 4x - 5}$?',
    options: [
      '$x = -5$ and $x = 1$',
      '$x = 5$ and $x = -1$',
      'There are none',
      '$x = -5$ only',
    ],
    correctIndex: 3,
    explanation: '$x^2 + 4x - 5 = (x + 5)(x - 1)$. The factor $(x - 1)$ cancels with the numerator, giving a hole at $x = 1$, so the only vertical asymptote is $x = -5$.',
    partNumber: 2,
    partTitle: 'Vertical Asymptotes',
  },
  {
    id: 'rfa-ent-2b',
    question: 'How does $g(x) = \\dfrac{3}{(x - 2)^2}$ behave as $x$ approaches $2$?',
    options: [
      '$g(x) \\to -\\infty$ from both sides',
      '$g(x) \\to -\\infty$ from the left and $\\infty$ from the right',
      '$g(x) \\to \\infty$ from both sides',
      '$g(x) \\to 0$ from both sides',
    ],
    correctIndex: 2,
    explanation: 'Near $x = 2$ the denominator $(x - 2)^2$ is a tiny positive number on both sides, and the numerator is $3$, so $g(x)$ grows without bound through positive values from both sides.',
    partNumber: 2,
    partTitle: 'Vertical Asymptotes',
  },

  // Part 3 — Horizontal Asymptotes
  {
    id: 'rfa-ent-3a',
    question: 'What is the horizontal asymptote of $f(x) = \\dfrac{5 - 4x^2}{2x^2 + 7x}$?',
    options: ['$y = 2$', '$y = \\frac{5}{2}$', '$y = 0$', '$y = -2$'],
    correctIndex: 3,
    explanation: 'The degrees are equal, so the horizontal asymptote is the ratio of the leading coefficients: $\\frac{-4}{2} = -2$. The leading term of the numerator is $-4x^2$, not the first-written $5$.',
    partNumber: 3,
    partTitle: 'Horizontal Asymptotes',
  },
  {
    id: 'rfa-ent-3b',
    question: 'Which function has the horizontal asymptote $y = 3$?',
    options: [
      '$\\dfrac{3x + 1}{x^2 - 2}$',
      '$\\dfrac{6x^2 - 1}{2x^2 + x}$',
      '$\\dfrac{3x^3}{x^2 + 1}$',
      '$\\dfrac{x^2 + 3}{x^2 - 3}$',
    ],
    correctIndex: 1,
    explanation: 'For $\\frac{6x^2 - 1}{2x^2 + x}$ the degrees are equal and $\\frac{6}{2} = 3$. The first function has a lower-degree numerator ($y = 0$), the third a higher-degree numerator (no HA), and the last has leading coefficients $1$ and $1$ ($y = 1$).',
    partNumber: 3,
    partTitle: 'Horizontal Asymptotes',
  },

  // Part 4 — Holes in Graphs
  {
    id: 'rfa-ent-4a',
    question: 'Where is the hole in the graph of $f(x) = \\dfrac{x^2 + x - 6}{x^2 - 5x + 6}$?',
    options: ['$(2, 5)$', '$(-3, 0)$', '$(2, -5)$', '$(2, 0)$'],
    correctIndex: 2,
    explanation: '$f(x) = \\frac{(x + 3)(x - 2)}{(x - 2)(x - 3)} = \\frac{x + 3}{x - 3}$ for $x \\ne 2$. The hole is at $x = 2$, with height $\\frac{2 + 3}{2 - 3} = -5$.',
    partNumber: 4,
    partTitle: 'Holes in Graphs',
  },
  {
    id: 'rfa-ent-4b',
    question: 'Which describes the graph of $g(x) = \\dfrac{x(x + 4)}{x^2(x + 4)}$ at $x = -4$ and at $x = 0$?',
    options: [
      'Holes at $x = -4$ and at $x = 0$',
      'A hole at $x = -4$ and a VA at $x = 0$',
      'VAs at $x = -4$ and at $x = 0$',
      'A VA at $x = 0$ only',
    ],
    correctIndex: 1,
    explanation: 'Canceling $x$ and $(x + 4)$ leaves $\\frac{1}{x}$ for $x \\ne 0, -4$. The factor $(x + 4)$ cancels completely, so $x = -4$ is a hole; one factor of $x$ remains in the denominator, so $x = 0$ is a vertical asymptote (VA).',
    partNumber: 4,
    partTitle: 'Holes in Graphs',
  },

  // Part 5 — Graphing Rational Functions
  {
    id: 'rfa-ent-5a',
    question: 'What are the intercepts of the graph of $f(x) = \\dfrac{2x - 6}{x + 3}$?',
    options: [
      '$x$-intercept $3$, $y$-intercept $-2$',
      '$x$-intercept $3$, $y$-intercept $2$',
      '$x$-intercept $-3$, $y$-intercept $-2$',
      '$x$-intercept $3$, $y$-intercept $-6$',
    ],
    correctIndex: 0,
    explanation: 'The numerator $2x - 6$ is zero at $x = 3$ (the denominator is $6$ there), and $f(0) = \\frac{-6}{3} = -2$. The value $-3$ is the vertical asymptote, not an intercept.',
    partNumber: 5,
    partTitle: 'Graphing Rational Functions',
  },
  {
    id: 'rfa-ent-5b',
    question: 'For $h(x) = \\dfrac{x + 1}{x - 2}$, which describes the graph for $x > 2$?',
    options: [
      'Above $y = 1$, with $h(x) \\to \\infty$ as $x \\to 2^+$',
      'Below $y = 1$, with $h(x) \\to -\\infty$ as $x \\to 2^+$',
      'Above $y = 1$, with $h(x) \\to -\\infty$ as $x \\to 2^+$',
      'Below $y = 0$, with $h(x) \\to -\\infty$ as $x \\to 2^+$',
    ],
    correctIndex: 0,
    explanation: 'Rewrite $h(x) = 1 + \\frac{3}{x - 2}$. For $x > 2$ the fraction is positive, so the graph lies above the asymptote $y = 1$, and it blows up to $+\\infty$ as $x$ approaches $2$ from the right.',
    partNumber: 5,
    partTitle: 'Graphing Rational Functions',
  },

  // Part 6 — Problem-Solving Workshop
  {
    id: 'rfa-ent-6a',
    question: 'Which list of features is correct for $f(x) = \\dfrac{x^2 - 9}{x^2 + x - 6}$?',
    options: [
      'VAs at $x = -3$ and $x = 2$; HA $y = 1$',
      'Hole at $x = 2$; VA at $x = -3$; HA $y = 1$',
      'Hole at $x = -3$; VA at $x = 2$; HA $y = 0$',
      'Hole at $x = -3$; VA at $x = 2$; HA $y = 1$',
    ],
    correctIndex: 3,
    explanation: '$f(x) = \\frac{(x - 3)(x + 3)}{(x + 3)(x - 2)}$. The factor $(x + 3)$ cancels (hole at $x = -3$), $(x - 2)$ remains (VA at $x = 2$), and the equal degrees give HA $y = \\frac{1}{1} = 1$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'rfa-ent-6b',
    question: 'A shop\'s average cost per item for making $x$ items is $C(x) = \\dfrac{500 + 2x}{x}$ dollars. As $x$ grows very large, what value does $C(x)$ approach?',
    options: ['\\$250', '\\$0', '\\$500', '\\$2'],
    correctIndex: 3,
    explanation: 'The numerator and denominator both have degree 1, so $C(x)$ approaches the ratio of leading coefficients, $\\frac{2}{1} = 2$. Equivalently, $C(x) = \\frac{500}{x} + 2$ and $\\frac{500}{x} \\to 0$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7 — Review & Applications
  {
    id: 'rfa-ent-7a',
    question: 'Which describes the graph of $f(x) = \\dfrac{2x^2 - 8}{x - 2}$?',
    options: [
      'The line $y = 2x + 4$ with a vertical asymptote at $x = 2$',
      'The line $y = 2x + 4$ with a hole at $(2, 0)$',
      'The line $y = 2x - 4$ with a hole at $(2, 0)$',
      'The line $y = 2x + 4$ with a hole at $(2, 8)$',
    ],
    correctIndex: 3,
    explanation: '$f(x) = \\frac{2(x - 2)(x + 2)}{x - 2} = 2x + 4$ for $x \\ne 2$. The canceled factor leaves a hole at $x = 2$, with height $2(2) + 4 = 8$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'rfa-ent-7b',
    question: 'A function of the form $f(x) = \\dfrac{ax + b}{x + c}$ has a vertical asymptote at $x = -3$, a horizontal asymptote at $y = 2$, and an $x$-intercept at $x = 1$. Which is $f(x)$?',
    options: [
      '$\\dfrac{2x + 2}{x - 3}$',
      '$\\dfrac{2x - 2}{x + 3}$',
      '$\\dfrac{x - 1}{x + 3}$',
      '$\\dfrac{2x - 1}{x + 3}$',
    ],
    correctIndex: 1,
    explanation: 'The VA gives the denominator $x + 3$, the HA gives $a = 2$, and the $x$-intercept needs $2(1) + b = 0$, so $b = -2$. The function $\\frac{2x - 1}{x + 3}$ has its $x$-intercept at $\\frac{1}{2}$ instead.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Domain Restrictions' },
    { partNumber: 2, partTitle: 'Vertical Asymptotes' },
    { partNumber: 3, partTitle: 'Horizontal Asymptotes' },
    { partNumber: 4, partTitle: 'Holes in Graphs' },
    { partNumber: 5, partTitle: 'Graphing Rational Functions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
