/**
 * Entrance Quiz — Polynomial Division & the Remainder Theorem — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Long Division of Polynomials
  {
    id: 'pdr-ent-1a',
    question: 'What are the quotient and remainder when $6x^2 - 7x - 2$ is divided by $2x - 3$?',
    options: [
      '$3x + 1$, remainder $-5$',
      '$3x + 1$, remainder $1$',
      '$3x - 8$, remainder $-26$',
      '$3x + 1$, remainder $\\frac{1}{2}$',
    ],
    correctIndex: 1,
    explanation: '$6x^2 \\div 2x = 3x$; subtracting $3x(2x - 3) = 6x^2 - 9x$ leaves $2x - 2$. Then $2x \\div 2x = 1$; subtracting $2x - 3$ leaves $1$. Check: $(2x - 3)(3x + 1) + 1 = 6x^2 - 7x - 2$.',
    partNumber: 1,
    partTitle: 'Long Division of Polynomials',
  },
  {
    id: 'pdr-ent-1b',
    question: 'When $p(x)$ is divided by $x^2 + 1$, the quotient is $2x - 3$ and the remainder is $x + 4$. What is $p(x)$?',
    options: [
      '$2x^3 - 3x^2 + 2x - 3$',
      '$2x^3 - 3x^2 + x - 7$',
      '$2x^3 - 3x^2 + x + 1$',
      '$2x^3 - 3x^2 + 3x + 1$',
    ],
    correctIndex: 3,
    explanation: 'By the division algorithm, $p(x) = (x^2 + 1)(2x - 3) + (x + 4) = 2x^3 - 3x^2 + 2x - 3 + x + 4 = 2x^3 - 3x^2 + 3x + 1$. Leaving off the remainder gives $2x^3 - 3x^2 + 2x - 3$.',
    partNumber: 1,
    partTitle: 'Long Division of Polynomials',
  },

  // Part 2 — Synthetic Division (the Shortcut)
  {
    id: 'pdr-ent-2a',
    question: 'Use synthetic division to divide $3x^4 - 5x^2 + x - 2$ by $x + 2$. What are the quotient and remainder?',
    options: [
      '$3x^3 - 6x^2 + 7x - 13$, remainder $24$',
      '$3x^2 - 11x + 23$, remainder $-48$',
      '$3x^3 + 6x^2 + 7x + 15$, remainder $28$',
      '$3x^4 - 6x^3 + 7x^2 - 13x$, remainder $24$',
    ],
    correctIndex: 0,
    explanation: 'Use $c = -2$ and the coefficients $3, 0, -5, 1, -2$ (with $0$ for the missing $x^3$ term). The bottom row is $3, -6, 7, -13, 24$. Skipping the placeholder gives $3x^2 - 11x + 23$, and using $c = 2$ gives the row ending in $28$.',
    partNumber: 2,
    partTitle: 'Synthetic Division (the Shortcut)',
  },
  {
    id: 'pdr-ent-2b',
    question: 'Synthetic division of a cubic $p(x)$ by $x - 3$ produces the bottom row $2, -1, 4, 0$. Which equation is true?',
    options: [
      '$p(x) = (x + 3)(2x^2 - x + 4)$',
      '$p(x) = (x - 3)(2x^3 - x^2 + 4x)$',
      '$p(x) = (x - 3)(2x^2 - x + 4)$',
      '$p(x) = (x - 3)(2x^2 - x) + 4$',
    ],
    correctIndex: 2,
    explanation: 'The bottom row lists the quotient coefficients (one degree lower than the cubic) followed by the remainder: quotient $2x^2 - x + 4$, remainder $0$. The divisor was $x - 3$, so $p(x) = (x - 3)(2x^2 - x + 4)$.',
    partNumber: 2,
    partTitle: 'Synthetic Division (the Shortcut)',
  },

  // Part 3 — The Remainder Theorem
  {
    id: 'pdr-ent-3a',
    question: 'When $p(x) = x^4 - 2x^3 + kx - 5$ is divided by $x + 1$, the remainder is $-10$. What is $k$?',
    options: ['$-4$', '$8$', '$-12$', '$12$'],
    correctIndex: 1,
    explanation: 'By the Remainder Theorem, $p(-1) = -10$: $1 + 2 - k - 5 = -10$, so $-2 - k = -10$ and $k = 8$. Using $p(1)$ instead gives $k - 6 = -10$, or $k = -4$.',
    partNumber: 3,
    partTitle: 'The Remainder Theorem',
  },
  {
    id: 'pdr-ent-3b',
    question: 'Dividing a polynomial $p(x)$ by $x - 2$ leaves remainder $5$, and dividing it by $x + 1$ leaves remainder $-4$. Which two points must lie on the graph of $p$?',
    options: [
      '$(-2, 5)$ and $(1, -4)$',
      '$(5, 2)$ and $(-4, -1)$',
      '$(2, 0)$ and $(-1, 0)$',
      '$(2, 5)$ and $(-1, -4)$',
    ],
    correctIndex: 3,
    explanation: 'The remainder on division by $x - c$ equals $p(c)$. So $p(2) = 5$ and, since $x + 1 = x - (-1)$, $p(-1) = -4$. The points are $(2, 5)$ and $(-1, -4)$.',
    partNumber: 3,
    partTitle: 'The Remainder Theorem',
  },

  // Part 4 — The Factor Theorem
  {
    id: 'pdr-ent-4a',
    question: 'For what value of $k$ is $x - 2$ a factor of $p(x) = 2x^3 + kx^2 - 7x + 6$?',
    options: ['$-1$', '$-8$', '$2$', '$-2$'],
    correctIndex: 3,
    explanation: 'By the Factor Theorem, $x - 2$ is a factor exactly when $p(2) = 0$: $16 + 4k - 14 + 6 = 4k + 8 = 0$, so $k = -2$. Setting $p(-2) = 0$ instead tests the factor $x + 2$ and gives $k = -1$.',
    partNumber: 4,
    partTitle: 'The Factor Theorem',
  },
  {
    id: 'pdr-ent-4b',
    question: 'A polynomial $p$ satisfies $p(-4) = 0$, $p(1) = 6$ and $p(3) = 0$. Which quadratic must be a factor of $p(x)$?',
    options: [
      '$x^2 + x - 12$',
      '$x^2 - x - 12$',
      '$x^2 - 7x + 12$',
      '$x^2 + 3x - 4$',
    ],
    correctIndex: 0,
    explanation: 'The zeros $-4$ and $3$ give the factors $(x + 4)$ and $(x - 3)$, whose product is $x^2 + x - 12$. Since $p(1) = 6 \\ne 0$, $(x - 1)$ is not a factor, which rules out $x^2 + 3x - 4$.',
    partNumber: 4,
    partTitle: 'The Factor Theorem',
  },

  // Part 5 — Finding All the Zeros
  {
    id: 'pdr-ent-5a',
    question: 'Given that $x = -2$ is a zero of $p(x) = 3x^3 + 4x^2 - 5x - 2$, what are all the zeros of $p$?',
    options: [
      '$-2, \\frac{1}{3}, 1$',
      '$-2, -3, 1$',
      '$-2, -\\frac{1}{3}, 1$',
      '$2, -\\frac{1}{3}, 1$',
    ],
    correctIndex: 2,
    explanation: 'Synthetic division by $x + 2$ gives the quotient $3x^2 - 2x - 1 = (3x + 1)(x - 1)$ with remainder $0$. Setting the factors to zero gives $x = -\\frac{1}{3}$ and $x = 1$, along with $x = -2$.',
    partNumber: 5,
    partTitle: 'Finding All the Zeros',
  },
  {
    id: 'pdr-ent-5b',
    question: 'The polynomial $p(x) = x^4 - x^3 - 7x^2 + x + 6$ has zeros at $x = 1$ and $x = -1$. What are its other two zeros?',
    options: [
      '$x = 3$ and $x = -2$',
      '$x = -3$ and $x = 2$',
      '$x = 6$ and $x = -1$',
      '$x = 3$ and $x = 2$',
    ],
    correctIndex: 0,
    explanation: 'Dividing out $(x - 1)(x + 1) = x^2 - 1$ (or dividing synthetically by each factor in turn) leaves $x^2 - x - 6 = (x - 3)(x + 2)$, so the other zeros are $3$ and $-2$.',
    partNumber: 5,
    partTitle: 'Finding All the Zeros',
  },

  // Part 6 — Division, Rational Functions & Slant Asymptotes
  {
    id: 'pdr-ent-6a',
    question: 'Which expression equals $\\dfrac{x^3 + 2x - 1}{x^2 + 1}$?',
    options: [
      '$x + \\frac{3x - 1}{x^2 + 1}$',
      '$x + \\frac{x - 1}{x^2 + 1}$',
      '$x^2 + \\frac{x - 1}{x^2 + 1}$',
      '$x + 1 + \\frac{x - 2}{x^2 + 1}$',
    ],
    correctIndex: 1,
    explanation: '$x^3 \\div x^2 = x$, and subtracting $x(x^2 + 1) = x^3 + x$ leaves $x - 1$, whose degree is less than 2, so the division stops. Adding $x$ instead of subtracting it gives the wrong remainder $3x - 1$.',
    partNumber: 6,
    partTitle: 'Division, Rational Functions & Slant Asymptotes',
  },
  {
    id: 'pdr-ent-6b',
    question: 'As $x \\to \\pm\\infty$, the graph of $f(x) = \\dfrac{2x^2 + 5x - 1}{x + 3}$ approaches which line?',
    options: [
      '$y = 2x$',
      '$y = x - 1$',
      '$y = 2x - 1$',
      '$y = 2$',
    ],
    correctIndex: 2,
    explanation: 'Synthetic division with $c = -3$ on $2, 5, -1$ gives $2, -1$ with remainder $2$, so $f(x) = 2x - 1 + \\frac{2}{x + 3}$. The fraction goes to $0$, leaving the slant asymptote $y = 2x - 1$. The line $y = 2x$ keeps only the ratio of leading terms.',
    partNumber: 6,
    partTitle: 'Division, Rational Functions & Slant Asymptotes',
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'pdr-ent-7a',
    question: 'The polynomial $p(x) = x^3 + ax^2 + bx - 6$ leaves remainder $0$ when divided by $x - 1$ and remainder $-4$ when divided by $x + 1$. What are all the zeros of $p$?',
    options: [
      '$1, -2, -3$',
      '$-1, 2, 3$',
      '$1, 2, 3$',
      '$1, -2, 3$',
    ],
    correctIndex: 0,
    explanation: '$p(1) = a + b - 5 = 0$ and $p(-1) = a - b - 7 = -4$, so $a + b = 5$ and $a - b = 3$, giving $a = 4$, $b = 1$. Dividing $x^3 + 4x^2 + x - 6$ by $x - 1$ leaves $x^2 + 5x + 6 = (x + 2)(x + 3)$, so the zeros are $1$, $-2$ and $-3$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
  {
    id: 'pdr-ent-7b',
    question: 'A cubic $p$ has $p(2) = 0$, and dividing $p(x)$ by $x + 1$ leaves remainder $6$. Which must be true?',
    options: [
      '$(x + 2)$ is a factor and $p(1) = 6$',
      '$(x - 2)$ is a factor and $p(1) = 6$',
      '$(x - 2)$ is a factor and $p(6) = 1$',
      '$(x - 2)$ is a factor and $p(-1) = 6$',
    ],
    correctIndex: 3,
    explanation: 'By the Factor Theorem, $p(2) = 0$ means $(x - 2)$ is a factor. By the Remainder Theorem, the remainder on division by $x + 1 = x - (-1)$ is $p(-1)$, so $p(-1) = 6$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Long Division of Polynomials' },
    { partNumber: 2, partTitle: 'Synthetic Division (the Shortcut)' },
    { partNumber: 3, partTitle: 'The Remainder Theorem' },
    { partNumber: 4, partTitle: 'The Factor Theorem' },
    { partNumber: 5, partTitle: 'Finding All the Zeros' },
    { partNumber: 6, partTitle: 'Division, Rational Functions & Slant Asymptotes' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
