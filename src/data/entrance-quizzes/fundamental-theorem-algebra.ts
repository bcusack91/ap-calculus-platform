/**
 * Entrance Quiz — The Fundamental Theorem of Algebra & Factoring — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Zeros, Factors & the Connection Between Them
  {
    id: 'fta-ent-1a',
    question: 'Which statement means the same thing as "$x = 5$ is a zero of the polynomial $p$"?',
    options: [
      '$(x + 5)$ is a factor of $p(x)$',
      'The graph of $p$ passes through $(0, 5)$',
      '$p(5) = 0$',
      'Dividing $p(x)$ by $x - 5$ leaves remainder $5$',
    ],
    correctIndex: 2,
    explanation: 'A zero is an input that makes the output $0$, so $p(5) = 0$. The matching factor is $(x - 5)$, not $(x + 5)$, and the matching point is $(5, 0)$; dividing by $x - 5$ would leave remainder $0$.',
    partNumber: 1,
    partTitle: 'Zeros, Factors & the Connection Between Them',
  },
  {
    id: 'fta-ent-1b',
    question: 'Which polynomial has zeros exactly at $x = 0$, $x = -\\frac{1}{2}$ and $x = 3$?',
    options: [
      '$(2x + 1)(x - 3)$',
      '$x(x + 2)(x - 3)$',
      '$x(2x + 1)(x - 3)$',
      '$x(x - 2)(x + 3)$',
    ],
    correctIndex: 2,
    explanation: 'Each zero gives a factor: $0 \\to x$, $-\\frac{1}{2} \\to (2x + 1)$ (since $2x + 1 = 0$ at $x = -\\frac{1}{2}$), and $3 \\to (x - 3)$. The factor $(x + 2)$ would put a zero at $-2$ instead.',
    partNumber: 1,
    partTitle: 'Zeros, Factors & the Connection Between Them',
  },

  // Part 2 — Core Factoring Techniques
  {
    id: 'fta-ent-2a',
    question: 'What is the complete factorization of $3x^3 - 12x^2 - 36x$?',
    options: [
      '$3x(x - 6)(x + 2)$',
      '$3x(x + 6)(x - 2)$',
      '$3(x - 6)(x + 2)$',
      '$x(x - 6)(x + 2)$',
    ],
    correctIndex: 0,
    explanation: 'The GCF is $3x$: $3x(x^2 - 4x - 12)$. Two numbers with product $-12$ and sum $-4$ are $-6$ and $2$, so the result is $3x(x - 6)(x + 2)$.',
    partNumber: 2,
    partTitle: 'Core Factoring Techniques',
  },
  {
    id: 'fta-ent-2b',
    question: 'What are the real zeros of $p(x) = x^4 - 5x^2 - 36$?',
    options: [
      '$x = \\pm 2$ only',
      '$x = \\pm 3$ and $x = \\pm 2$',
      '$x = \\pm 9$ and $x = -4$',
      '$x = \\pm 3$ only',
    ],
    correctIndex: 3,
    explanation: 'With $u = x^2$, $u^2 - 5u - 36 = (u - 9)(u + 4)$, so $p(x) = (x^2 - 9)(x^2 + 4)$. The factor $x^2 - 9$ gives $x = \\pm 3$; $x^2 + 4 = 0$ has only the non-real solutions $\\pm 2i$.',
    partNumber: 2,
    partTitle: 'Core Factoring Techniques',
  },

  // Part 3 — Zeros from Graphs, Tables & a Known Factor
  {
    id: 'fta-ent-3a',
    question: 'The graph of a cubic $p$ crosses the $x$-axis only at $x = -1$, $x = 2$ and $x = 4$, and its $y$-intercept is $-16$. Which is $p(x)$?',
    options: [
      '$2(x + 1)(x - 2)(x - 4)$',
      '$-2(x + 1)(x - 2)(x - 4)$',
      '$(x + 1)(x - 2)(x - 4)$',
      '$2(x - 1)(x + 2)(x + 4)$',
    ],
    correctIndex: 1,
    explanation: 'The intercepts give $p(x) = a(x + 1)(x - 2)(x - 4)$, and $p(0) = a(1)(-2)(-4) = 8a = -16$, so $a = -2$. The version $2(x - 1)(x + 2)(x + 4)$ also has $y$-intercept $-16$, but its zeros are $1$, $-2$ and $-4$.',
    partNumber: 3,
    partTitle: 'Zeros from Graphs, Tables & a Known Factor',
  },
  {
    id: 'fta-ent-3b',
    question: 'A cubic $p$ has these values: $p(-2) = 0$, $p(-1) = 8$, $p(0) = 6$, $p(1) = 0$, $p(2) = -4$, $p(3) = 0$. Which is $p(x)$?',
    options: [
      '$-(x + 2)(x - 1)(x - 3)$',
      '$2(x + 2)(x - 1)(x - 3)$',
      '$(x + 2)(x - 1)(x - 3)^2$',
      '$(x + 2)(x - 1)(x - 3)$',
    ],
    correctIndex: 3,
    explanation: 'The outputs of $0$ give zeros $-2$, $1$ and $3$, so $p(x) = a(x + 2)(x - 1)(x - 3)$. Then $p(0) = 6a = 6$ gives $a = 1$. The squared version has degree 4, so it is not a cubic.',
    partNumber: 3,
    partTitle: 'Zeros from Graphs, Tables & a Known Factor',
  },

  // Part 4 — Synthetic Division & Peeling Off Factors
  {
    id: 'fta-ent-4a',
    question: 'Given that $x = 5$ is a zero of $p(x) = x^3 - 6x^2 + 3x + 10$, what is the complete factorization of $p(x)$?',
    options: [
      '$(x - 5)(x - 2)(x + 1)$',
      '$(x + 5)(x + 2)(x - 1)$',
      '$(x - 5)(x + 2)(x - 1)$',
      '$(x - 5)(x - 1)(x - 2)$',
    ],
    correctIndex: 0,
    explanation: 'Synthetic division by $x - 5$ on $1, -6, 3, 10$ gives $1, -1, -2$ with remainder $0$, so the quotient is $x^2 - x - 2 = (x - 2)(x + 1)$.',
    partNumber: 4,
    partTitle: 'Synthetic Division & Peeling Off Factors',
  },
  {
    id: 'fta-ent-4b',
    question: 'Synthetic division of a cubic $p(x)$ by $x + 2$ produces the bottom row $1, -3, 5, -4$. Which conclusion is correct?',
    options: [
      '$p(2) = -4$; quotient $x^2 - 3x + 5$',
      '$p(-2) = 0$; quotient $x^2 - 3x + 5$',
      '$p(2) = 4$; quotient $x^2 - 3x + 5$',
      '$p(-2) = -4$; quotient $x^2 - 3x + 5$',
    ],
    correctIndex: 3,
    explanation: 'Dividing by $x + 2$ uses $c = -2$. The last entry is the remainder, which equals $p(-2) = -4$, and the other entries give the quotient $x^2 - 3x + 5$. A nonzero remainder means $x + 2$ is not a factor.',
    partNumber: 4,
    partTitle: 'Synthetic Division & Peeling Off Factors',
  },

  // Part 5 — The Fundamental Theorem of Algebra
  {
    id: 'fta-ent-5a',
    question: 'Counting multiplicity, how many complex zeros does $p(x) = (x^2 + 4)(x - 1)^3(x + 2)$ have, and how many of them are non-real?',
    options: [
      '$6$ in all; $2$ non-real',
      '$4$ in all; $0$ non-real',
      '$6$ in all; $4$ non-real',
      '$3$ in all; $1$ non-real',
    ],
    correctIndex: 0,
    explanation: 'The degree is $2 + 3 + 1 = 6$, so there are exactly 6 zeros counting multiplicity. The zeros of $x^2 + 4$ are $\\pm 2i$ (2 non-real); the other 4 are $1$ (three times) and $-2$.',
    partNumber: 5,
    partTitle: 'The Fundamental Theorem of Algebra',
  },
  {
    id: 'fta-ent-5b',
    question: 'A degree-5 polynomial with real coefficients crosses the $x$-axis at $x = 1$, where that zero has multiplicity 1, and touches the axis at $x = -2$, where that zero has multiplicity 2. It has no other real zeros. How many non-real zeros does it have?',
    options: ['Four', 'Zero', 'Two', 'Three'],
    correctIndex: 2,
    explanation: 'By the Fundamental Theorem of Algebra there are 5 zeros counting multiplicity. The real ones account for $1 + 2 = 3$, so $5 - 3 = 2$ are non-real (a conjugate pair).',
    partNumber: 5,
    partTitle: 'The Fundamental Theorem of Algebra',
  },

  // Part 6 — Complex Conjugate Roots & Building Polynomials
  {
    id: 'fta-ent-6a',
    question: 'A degree-4 polynomial $p$ with real coefficients and leading coefficient 1 has zeros $3i$ and $1 + i$. Which is $p(x)$?',
    options: [
      '$(x^2 + 9)(x^2 - 2x + 2)$',
      '$(x^2 - 9)(x^2 - 2x + 2)$',
      '$(x^2 + 9)(x^2 + 2x + 2)$',
      '$(x^2 + 3)(x^2 - 2x + 2)$',
    ],
    correctIndex: 0,
    explanation: 'The conjugates $-3i$ and $1 - i$ are also zeros. Then $(x - 3i)(x + 3i) = x^2 + 9$ and $(x - 1 - i)(x - 1 + i) = (x - 1)^2 + 1 = x^2 - 2x + 2$.',
    partNumber: 6,
    partTitle: 'Complex Conjugate Roots & Building Polynomials',
  },
  {
    id: 'fta-ent-6b',
    question: 'A degree-4 polynomial with real coefficients has $2 + i$ as a zero and $3$ as a zero of multiplicity 1. Which must be true of its remaining two zeros, counting multiplicity?',
    options: [
      'Both are non-real numbers',
      'One is $2 - i$ and the other is real',
      'One is $-2 - i$ and the other is real',
      'One is $2 - i$ and the other is non-real',
    ],
    correctIndex: 1,
    explanation: 'Real coefficients force the conjugate $2 - i$ to be a zero. That leaves one zero; if it were non-real its conjugate would also be needed, making 5 zeros for a degree-4 polynomial, so it must be real.',
    partNumber: 6,
    partTitle: 'Complex Conjugate Roots & Building Polynomials',
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'fta-ent-7a',
    question: 'Given that $p(-3) = 0$ for $p(x) = x^3 + x^2 - 7x - 3$, what are all the zeros of $p$?',
    options: [
      '$-3, -1 \\pm \\sqrt{2}$',
      '$-3, 1 \\pm \\sqrt{2}$',
      '$-3, 1 \\pm 2\\sqrt{2}$',
      '$-3, 1 \\pm i\\sqrt{2}$',
    ],
    correctIndex: 1,
    explanation: 'Synthetic division by $x + 3$ gives the quotient $x^2 - 2x - 1$. The quadratic formula gives $x = \\frac{2 \\pm \\sqrt{4 + 4}}{2} = \\frac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
  {
    id: 'fta-ent-7b',
    question: 'The polynomial $p$ has real coefficients, leading coefficient 1 and the least possible degree, a zero at $x = 2$ of multiplicity 2, and a zero at $x = -i$. What is $p(0)$?',
    options: ['$-4$', '$4i$', '$-2$', '$4$'],
    correctIndex: 3,
    explanation: 'The conjugate $i$ must also be a zero, so $p(x) = (x - 2)^2(x + i)(x - i) = (x - 2)^2(x^2 + 1)$. Then $p(0) = (4)(1) = 4$. Leaving out the conjugate gives $4i$.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Zeros, Factors & the Connection Between Them' },
    { partNumber: 2, partTitle: 'Core Factoring Techniques' },
    { partNumber: 3, partTitle: 'Zeros from Graphs, Tables & a Known Factor' },
    { partNumber: 4, partTitle: 'Synthetic Division & Peeling Off Factors' },
    { partNumber: 5, partTitle: 'The Fundamental Theorem of Algebra' },
    { partNumber: 6, partTitle: 'Complex Conjugate Roots & Building Polynomials' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
