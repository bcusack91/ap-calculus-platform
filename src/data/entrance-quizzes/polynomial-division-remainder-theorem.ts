/**
 * Entrance Quiz — Polynomial Division and Equivalent Forms (AP Precalculus, CED 1.11) — 10 questions (2 per lesson part, 5 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Long Division and Equivalent Forms
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
    partTitle: 'Long Division and Equivalent Forms',
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
    partTitle: 'Long Division and Equivalent Forms',
  },

  // Part 2 — The Factor Theorem
  {
    id: 'pdr-ent-2a',
    question: 'For what value of $k$ is $x - 2$ a factor of $p(x) = 2x^3 + kx^2 - 7x + 6$?',
    options: ['$-1$', '$-8$', '$2$', '$-2$'],
    correctIndex: 3,
    explanation: 'By the Factor Theorem, $x - 2$ is a factor exactly when $p(2) = 0$: $16 + 4k - 14 + 6 = 4k + 8 = 0$, so $k = -2$. Setting $p(-2) = 0$ instead tests the factor $x + 2$ and gives $k = -1$.',
    partNumber: 2,
    partTitle: 'The Factor Theorem',
  },
  {
    id: 'pdr-ent-2b',
    question: 'A polynomial $p$ satisfies $p(-4) = 0$, $p(1) = 6$ and $p(3) = 0$. Which quadratic must be a factor of $p(x)$?',
    options: [
      '$x^2 + x - 12$',
      '$x^2 - x - 12$',
      '$x^2 - 7x + 12$',
      '$x^2 + 3x - 4$',
    ],
    correctIndex: 0,
    explanation: 'The zeros $-4$ and $3$ give the factors $(x + 4)$ and $(x - 3)$, whose product is $x^2 + x - 12$. Since $p(1) = 6 \\ne 0$, $(x - 1)$ is not a factor, which rules out $x^2 + 3x - 4$.',
    partNumber: 2,
    partTitle: 'The Factor Theorem',
  },

  // Part 3 — Finding All the Zeros from a Known Factor
  {
    id: 'pdr-ent-3a',
    question: 'Given that $x = -2$ is a zero of $p(x) = 3x^3 + 4x^2 - 5x - 2$, what are all the zeros of $p$?',
    options: [
      '$-2, \\frac{1}{3}, 1$',
      '$-2, -3, 1$',
      '$-2, -\\frac{1}{3}, 1$',
      '$2, -\\frac{1}{3}, 1$',
    ],
    correctIndex: 2,
    explanation: 'Long division by $x + 2$ gives the quotient $3x^2 - 2x - 1 = (3x + 1)(x - 1)$ with remainder $0$. Setting the factors to zero gives $x = -\\frac{1}{3}$ and $x = 1$, along with $x = -2$.',
    partNumber: 3,
    partTitle: 'Finding All the Zeros from a Known Factor',
  },
  {
    id: 'pdr-ent-3b',
    question: 'The polynomial $p(x) = x^4 - x^3 - 7x^2 + x + 6$ has zeros at $x = 1$ and $x = -1$. What are its other two zeros?',
    options: [
      '$x = 3$ and $x = -2$',
      '$x = -3$ and $x = 2$',
      '$x = 6$ and $x = -1$',
      '$x = 3$ and $x = 2$',
    ],
    correctIndex: 0,
    explanation: 'Dividing out $(x - 1)(x + 1) = x^2 - 1$ (or dividing by each linear factor in turn) leaves $x^2 - x - 6 = (x - 3)(x + 2)$, so the other zeros are $3$ and $-2$.',
    partNumber: 3,
    partTitle: 'Finding All the Zeros from a Known Factor',
  },

  // Part 4 — Division, Rational Functions and Slant Asymptotes
  {
    id: 'pdr-ent-4a',
    question: 'Which expression equals $\\dfrac{x^3 + 2x - 1}{x^2 + 1}$?',
    options: [
      '$x + \\frac{3x - 1}{x^2 + 1}$',
      '$x + \\frac{x - 1}{x^2 + 1}$',
      '$x^2 + \\frac{x - 1}{x^2 + 1}$',
      '$x + 1 + \\frac{x - 2}{x^2 + 1}$',
    ],
    correctIndex: 1,
    explanation: '$x^3 \\div x^2 = x$, and subtracting $x(x^2 + 1) = x^3 + x$ leaves $x - 1$, whose degree is less than 2, so the division stops. Adding $x$ instead of subtracting it gives the wrong remainder $3x - 1$.',
    partNumber: 4,
    partTitle: 'Division, Rational Functions and Slant Asymptotes',
  },
  {
    id: 'pdr-ent-4b',
    question: 'As $x \\to \\pm\\infty$, the graph of $f(x) = \\dfrac{2x^2 + 5x - 1}{x + 3}$ approaches which line?',
    options: [
      '$y = 2x$',
      '$y = x - 1$',
      '$y = 2x - 1$',
      '$y = 2$',
    ],
    correctIndex: 2,
    explanation: 'Long division gives $2x^2 + 5x - 1 = (x + 3)(2x - 1) + 2$, so $f(x) = 2x - 1 + \\frac{2}{x + 3}$. The fraction goes to $0$, so $\\lim_{x \\to \\pm\\infty}[f(x) - (2x - 1)] = 0$ and the slant asymptote is $y = 2x - 1$. The line $y = 2x$ keeps only the ratio of leading terms.',
    partNumber: 4,
    partTitle: 'Division, Rational Functions and Slant Asymptotes',
  },

  // Part 5 — Mixed Practice and Mastery Check
  {
    id: 'pdr-ent-5a',
    question: 'Which equals $\\dfrac{3x^2 + 5x - 1}{x + 2}$ for $x \\neq -2$?',
    options: [
      '$3x + 11 + \\dfrac{21}{x+2}$',
      '$3x - 1 - \\dfrac{1}{x+2}$',
      '$3x - 1 + \\dfrac{1}{x+2}$',
      '$3x + 5 - \\dfrac{1}{x+2}$',
    ],
    correctIndex: 2,
    explanation: 'Long division: $(x + 2)(3x - 1) = 3x^2 + 5x - 2$, so the remainder is $-1 - (-2) = 1$ and $\\frac{3x^2 + 5x - 1}{x + 2} = 3x - 1 + \\frac{1}{x + 2}$. A quotient of $3x + 11$ divides as if by $x - 2$, $3x + 5$ copies the numerator coefficient, and a remainder of $-1$ subtracts the constants in the wrong order.',
    partNumber: 5,
    partTitle: 'Mixed Practice and Mastery Check',
  },
  {
    id: 'pdr-ent-5b',
    question: 'The polynomial $p(x) = x^3 + ax^2 + bx - 6$ satisfies $p(1) = 0$ and $p(-1) = -4$. What are all the zeros of $p$?',
    options: [
      '$-1, 2, 3$',
      '$1, -2, -3$',
      '$1, 2, 3$',
      '$1, -2, 3$',
    ],
    correctIndex: 1,
    explanation: '$p(1) = 1 + a + b - 6 = 0$ and $p(-1) = -1 + a - b - 6 = -4$, so $a + b = 5$ and $a - b = 3$, giving $a = 4$, $b = 1$. Since $p(1) = 0$, $(x - 1)$ is a factor; long division of $x^3 + 4x^2 + x - 6$ by $x - 1$ gives $x^2 + 5x + 6 = (x + 2)(x + 3)$, so the zeros are $1$, $-2$ and $-3$.',
    partNumber: 5,
    partTitle: 'Mixed Practice and Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Long Division and Equivalent Forms' },
    { partNumber: 2, partTitle: 'The Factor Theorem' },
    { partNumber: 3, partTitle: 'Finding All the Zeros from a Known Factor' },
    { partNumber: 4, partTitle: 'Division, Rational Functions and Slant Asymptotes' },
    { partNumber: 5, partTitle: 'Mixed Practice and Mastery Check' },
  ]
}
