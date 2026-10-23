/**
 * Entrance Quiz — Complex Zeros and the Fundamental Theorem of Algebra (AP Precalculus, CED 1.5) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Absorbs the on-exam quadratic / conjugate items of the retired complex-numbers entrance quiz.
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
      '$p(5) = 0$, so $(x - 5)$ is a factor of $p(x)$',
      '$p(0) = 5$, so $(x - 5)$ is a factor of $p(x)$',
    ],
    correctIndex: 2,
    explanation: 'A zero is an input that makes the output $0$, so $p(5) = 0$, and by the Factor Theorem $(x - 5)$ is then a factor. The factor $(x + 5)$ belongs to the zero $-5$; the point $(0, 5)$ and the value $p(0) = 5$ describe the $y$-intercept, not a zero.',
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
    explanation: 'Each zero gives a factor: $0 \\to x$, $-\\frac{1}{2} \\to (2x + 1)$ (since $2x + 1 = 0$ at $x = -\\frac{1}{2}$), and $3 \\to (x - 3)$. Leaving out the factor $x$ loses the zero $0$, and the factor $(x + 2)$ would put a zero at $-2$ instead.',
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
    explanation: 'The GCF is $3x$: $3x(x^2 - 4x - 12)$. Two numbers with product $-12$ and sum $-4$ are $-6$ and $2$, so the result is $3x(x - 6)(x + 2)$. Swapping the signs inside the factors gives a sum of $+4$, and dropping the $x$ or the $3$ loses part of the GCF.',
    partNumber: 2,
    partTitle: 'Core Factoring Techniques',
  },
  {
    id: 'fta-ent-2b',
    question: 'What are the real zeros of $p(x) = x^4 - 5x^2 - 36$?',
    options: [
      '$x = \\pm 2$ only',
      '$x = \\pm 3, \\pm 2$',
      '$x = 9$ and $x = -4$',
      '$x = \\pm 3$ only',
    ],
    correctIndex: 3,
    explanation: 'With $u = x^2$, $u^2 - 5u - 36 = (u - 9)(u + 4)$, so $p(x) = (x^2 - 9)(x^2 + 4)$. The factor $x^2 - 9$ gives $x = \\pm 3$; $x^2 + 4 = 0$ has only the non-real solutions $\\pm 2i$, so $\\pm 2$ are not zeros, and $9$ and $-4$ are values of $u$, not of $x$.',
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
    explanation: 'The outputs of $0$ give zeros $-2$, $1$ and $3$, so $p(x) = a(x + 2)(x - 1)(x - 3)$. Then $p(0) = 6a = 6$ gives $a = 1$. The squared version has degree 4, so it is not a cubic, and $a = 2$ or $a = -1$ would give $p(0) = 12$ or $-6$.',
    partNumber: 3,
    partTitle: 'Zeros from Graphs, Tables & a Known Factor',
  },

  // Part 4 — Dividing Out a Known Factor
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
    explanation: 'Long division of $p(x)$ by $(x - 5)$ gives the quotient $x^2 - x - 2$ with remainder $0$, and $x^2 - x - 2 = (x - 2)(x + 1)$. Check: $p(-1) = -1 - 6 - 3 + 10 = 0$. The factor $(x - 1)$ would need $p(1) = 0$, but $p(1) = 8$.',
    partNumber: 4,
    partTitle: 'Dividing Out a Known Factor',
  },
  {
    id: 'fta-ent-4b',
    question: 'Given $p(x) = (x + 2)(x^2 - 3x + 5) - 4$, which is true?',
    options: [
      '$p(-2) = 0$',
      '$(x + 2)$ is a factor',
      '$p(-2) = -4$',
      '$p(2) = -4$',
    ],
    correctIndex: 2,
    explanation: 'Substituting $x = -2$ makes the first product $0$, so $p(-2) = 0 - 4 = -4$. Because $p(-2) \\ne 0$, the Factor Theorem says $(x + 2)$ is not a factor. At $x = 2$ the product is $(4)(4 - 6 + 5) = 12$, so $p(2) = 8$.',
    partNumber: 4,
    partTitle: 'Dividing Out a Known Factor',
  },

  // Part 5 — The Fundamental Theorem of Algebra, Multiplicity & Non-Real Zeros
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
    explanation: 'The degree is $2 + 3 + 1 = 6$, so there are exactly 6 zeros counting multiplicity. The zeros of $x^2 + 4$ are $\\pm 2i$ (2 non-real); the other 4 are $1$ (three times) and $-2$. Counting only distinct real zeros gives $3$, and non-real zeros always come in an even number.',
    partNumber: 5,
    partTitle: 'The Fundamental Theorem of Algebra, Multiplicity & Non-Real Zeros',
  },
  {
    id: 'fta-ent-5b',
    question: 'How many $x$-intercepts does the graph of $y = 3x^2 - 2x + 4$ have?',
    options: [
      'Two, because the discriminant is $52$',
      'None, because the discriminant is $-44$',
      'One, because the discriminant is $0$',
      'Two, because the discriminant is $44$',
    ],
    correctIndex: 1,
    explanation: 'The discriminant is $(-2)^2 - 4(3)(4) = 4 - 48 = -44 < 0$, so both zeros are non-real (a conjugate pair) and the graph never meets the $x$-axis. Adding $48$ instead of subtracting gives $52$, and dropping the sign gives $44$; both would wrongly predict two intercepts.',
    partNumber: 5,
    partTitle: 'The Fundamental Theorem of Algebra, Multiplicity & Non-Real Zeros',
  },

  // Part 6 — Conjugate Pairs & Building Polynomials from Zeros
  {
    id: 'fta-ent-6a',
    question: 'A degree-4 polynomial $p$ with real coefficients and leading coefficient 1 has zeros $3i$ and $1 + i$. Which is $p(x)$?',
    options: [
      '$(x^2 - 9)(x^2 - 2x + 2)$',
      '$(x^2 + 9)(x^2 + 2x + 2)$',
      '$(x^2 + 3)(x^2 - 2x + 2)$',
      '$(x^2 + 9)(x^2 - 2x + 2)$',
    ],
    correctIndex: 3,
    explanation: 'The conjugates $-3i$ and $1 - i$ are also zeros. Then $(x - 3i)(x + 3i) = x^2 + 9$ and $(x - 1 - i)(x - 1 + i) = (x - 1)^2 + 1 = x^2 - 2x + 2$. The factor $x^2 - 9$ has the real zeros $\\pm 3$, $x^2 + 3$ has zeros $\\pm i\\sqrt{3}$, and $x^2 + 2x + 2$ has zeros $-1 \\pm i$.',
    partNumber: 6,
    partTitle: 'Conjugate Pairs & Building Polynomials from Zeros',
  },
  {
    id: 'fta-ent-6b',
    question: 'Given that $2 + i$ is a zero of $p(x) = x^3 - 3x^2 + x + 5$, what are the other two zeros?',
    options: [
      '$-2 - i$ and $-1$',
      '$2 - i$ and $-1$',
      '$2 - i$ and $-5$',
      '$-2 + i$ and $-1$',
    ],
    correctIndex: 1,
    explanation: 'Real coefficients force the conjugate $2 - i$ to be a zero, and $(x - 2 - i)(x - 2 + i) = x^2 - 4x + 5$. Long division gives $p(x) = (x^2 - 4x + 5)(x + 1)$, so the third zero is $-1$ (check: $p(-1) = -1 - 3 - 1 + 5 = 0$, while $p(-5) \\ne 0$).',
    partNumber: 6,
    partTitle: 'Conjugate Pairs & Building Polynomials from Zeros',
  },

  // Part 7 — Mixed Practice & Mastery Check
  {
    id: 'fta-ent-7a',
    question: 'What are the solutions of $2x^2 - 4x + 5 = 0$?',
    options: [
      '$2 \\pm \\sqrt{6}\\,i$',
      '$-1 \\pm \\frac{\\sqrt{6}}{2}i$',
      '$1 \\pm \\frac{\\sqrt{6}}{2}i$',
      '$1 \\pm \\frac{\\sqrt{6}}{4}i$',
    ],
    correctIndex: 2,
    explanation: 'The discriminant is $16 - 40 = -24$, so $x = \\frac{4 \\pm \\sqrt{-24}}{4} = \\frac{4 \\pm 2i\\sqrt{6}}{4} = 1 \\pm \\frac{\\sqrt{6}}{2}i$. Dividing by $2$ instead of $2a = 4$ gives $2 \\pm \\sqrt{6}\\,i$, forgetting that $-b = +4$ gives a real part of $-1$, and leaving $\\sqrt{24}$ as $\\sqrt{6}$ gives the $\\frac{\\sqrt{6}}{4}$ version.',
    partNumber: 7,
    partTitle: 'Mixed Practice & Mastery Check',
  },
  {
    id: 'fta-ent-7b',
    question: 'The polynomial $p$ has real coefficients, leading coefficient 1 and the least possible degree, a zero at $x = 2$ of multiplicity 2, and a zero at $x = -i$. What is $p(0)$?',
    options: ['$-4$', '$4i$', '$-2$', '$4$'],
    correctIndex: 3,
    explanation: 'The conjugate $i$ must also be a zero, so $p(x) = (x - 2)^2(x + i)(x - i) = (x - 2)^2(x^2 + 1)$. Then $p(0) = (4)(1) = 4$. Leaving out the conjugate gives $(x - 2)^2(x + i)$ with $p(0) = 4i$, and using $(x - 2)$ once gives $-2$.',
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
    { partNumber: 4, partTitle: 'Dividing Out a Known Factor' },
    { partNumber: 5, partTitle: 'The Fundamental Theorem of Algebra, Multiplicity & Non-Real Zeros' },
    { partNumber: 6, partTitle: 'Conjugate Pairs & Building Polynomials from Zeros' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
