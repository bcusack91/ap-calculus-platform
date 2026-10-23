/**
 * Entrance Quiz — Polynomial Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Degree, Leading Term & End Behavior
  {
    id: 'pfp-ent-1a',
    question: 'Which describes the end behavior of $f(x) = (2 - x)(x + 1)^2(3x - 1)$?',
    options: [
      '$\\lim_{x\\to-\\infty} f(x) = +\\infty$ and $\\lim_{x\\to\\infty} f(x) = +\\infty$',
      '$\\lim_{x\\to-\\infty} f(x) = -\\infty$ and $\\lim_{x\\to\\infty} f(x) = +\\infty$',
      '$\\lim_{x\\to-\\infty} f(x) = -\\infty$ and $\\lim_{x\\to\\infty} f(x) = -\\infty$',
      '$\\lim_{x\\to-\\infty} f(x) = +\\infty$ and $\\lim_{x\\to\\infty} f(x) = -\\infty$',
    ],
    correctIndex: 2,
    explanation: 'The leading term is the product of the leading terms of the factors: $(-x)(x^2)(3x) = -3x^4$. Even degree with a negative leading coefficient means both ends go to $-\\infty$.',
    partNumber: 1,
    partTitle: 'Degree, Leading Term & End Behavior',
  },
  {
    id: 'pfp-ent-1b',
    question: 'The graph of a polynomial $p$ rises to the left, rises to the right, and has exactly 3 turning points. Which could be the leading term of $p$?',
    options: ['$-4x^6$', '$3x^2$', '$2x^5$', '$\\frac{1}{2}x^4$'],
    correctIndex: 3,
    explanation: 'Both ends up requires even degree and a positive leading coefficient, and 3 turning points requires degree at least 4, so $\\frac{1}{2}x^4$ works. $3x^2$ allows at most 1 turning point, and $-4x^6$ falls on both ends.',
    partNumber: 1,
    partTitle: 'Degree, Leading Term & End Behavior',
  },

  // Part 2 — Finding Zeros & Writing in Factored Form
  {
    id: 'pfp-ent-2a',
    question: 'What are all the zeros of $p(x) = 2x^3 + x^2 - 6x$?',
    options: [
      '$x = 0, -3, 2$',
      '$x = 0, \\frac{3}{2}, -2$',
      '$x = \\frac{3}{2}, -2$',
      '$x = 0, 3, -2$',
    ],
    correctIndex: 1,
    explanation: 'Factor out $x$, then factor the quadratic: $p(x) = x(2x^2 + x - 6) = x(2x - 3)(x + 2)$, so the zeros are $0$, $\\frac{3}{2}$ and $-2$. Dropping the common factor $x$ loses the zero at $0$.',
    partNumber: 2,
    partTitle: 'Finding Zeros & Writing in Factored Form',
  },
  {
    id: 'pfp-ent-2b',
    question: 'What are all the real zeros of $p(x) = x^3 - 4x^2 + x$?',
    options: [
      '$x = 0, 2 \\pm 2\\sqrt{3}$',
      '$x = 0, 2 \\pm \\sqrt{5}$',
      '$x = 0, 2 \\pm \\sqrt{3}$',
      '$x = 0, -2 \\pm \\sqrt{3}$',
    ],
    correctIndex: 2,
    explanation: '$p(x) = x(x^2 - 4x + 1)$. The quadratic formula gives $x = \\frac{4 \\pm \\sqrt{16 - 4}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$, together with $x = 0$.',
    partNumber: 2,
    partTitle: 'Finding Zeros & Writing in Factored Form',
  },

  // Part 3 — Crossing, Bouncing & Flattening
  {
    id: 'pfp-ent-3a',
    question: 'For $f(x) = -(x + 2)^2(x - 1)(x - 4)^3$, on which interval(s) is $f(x) > 0$?',
    options: [
      '$(-2, 1)$ and $(4, \\infty)$',
      '$(4, \\infty)$ only',
      '$(-\\infty, -2)$ and $(1, 4)$',
      '$(1, 4)$ only',
    ],
    correctIndex: 3,
    explanation: 'The leading term is $-x^6$, so $f < 0$ far to the left. The sign stays negative through the bounce at $x = -2$ (even multiplicity), turns positive after the crossing at $x = 1$, and turns negative again after the crossing at $x = 4$. So $f > 0$ only on $(1, 4)$.',
    partNumber: 3,
    partTitle: 'Crossing, Bouncing & Flattening',
  },
  {
    id: 'pfp-ent-3b',
    question: 'A polynomial $g$ has zeros only at $x = -2$, $x = 0$ and $x = 3$. Also $g(-3) = 5$, $g(-1) = -2$, $g(1) = -4$ and $g(4) = 6$. Which zero(s) must have even multiplicity?',
    options: ['$x = -2$ only', '$x = 0$ only', '$x = -2$ and $x = 3$', '$x = 0$ and $x = 3$'],
    correctIndex: 1,
    explanation: 'The sign changes across $x = -2$ (positive to negative) and across $x = 3$ (negative to positive), so those zeros have odd multiplicity. The sign stays negative on both sides of $x = 0$, so $g$ bounces there: even multiplicity.',
    partNumber: 3,
    partTitle: 'Crossing, Bouncing & Flattening',
  },

  // Part 4 — Long Division, Equivalent Forms & the Factor Theorem
  {
    id: 'pfp-ent-4a',
    question: 'Which equivalent form shows that $(x - 1)$ is NOT a factor of $p(x) = 2x^3 - x^2 + 3$?',
    options: ['$p(x) = (x-1)(2x^2 + x + 1)$', '$p(x) = (x-1)(2x^2 - 3x + 3)$', '$p(x) = (x-1)(2x^2 + x + 1) + 4$', '$p(x) = (x+1)(2x^2 - 3x + 3)$'],
    correctIndex: 2,
    explanation: 'Multiply back: $(x-1)(2x^2 + x + 1) = 2x^3 - x^2 - 1$, and adding $4$ gives $2x^3 - x^2 + 3$. The nonzero remainder $4 = p(1)$ means $(x - 1)$ is not a factor. The other forms either claim an exact division that does not multiply back to $p(x)$ or use the wrong divisor.',
    partNumber: 4,
    partTitle: 'Long Division, Equivalent Forms & the Factor Theorem',
  },
  {
    id: 'pfp-ent-4b',
    question: 'Which expression equals $\\dfrac{2x^3 + x^2 - 5x + 4}{x + 2}$?',
    options: [
      '$2x^2 - 3x + 1 + \\frac{2}{x + 2}$',
      '$2x^2 + 5x + 5 + \\frac{14}{x + 2}$',
      '$2x^2 - 3x + 1 - \\frac{2}{x + 2}$',
      '$2x^2 - 3x + 1 + \\frac{2}{x - 2}$',
    ],
    correctIndex: 0,
    explanation: 'Synthetic division with $c = -2$ on $2, 1, -5, 4$ gives $2, -3, 1$ with remainder $2$, so the result is $2x^2 - 3x + 1 + \\frac{2}{x + 2}$. Using $c = 2$ gives $2x^2 + 5x + 5$ with remainder $14$, which is division by $x - 2$.',
    partNumber: 4,
    partTitle: 'Long Division, Equivalent Forms & the Factor Theorem',
  },

  // Part 5 — Complex Conjugate Pairs & Even/Odd Polynomials
  {
    id: 'pfp-ent-5a',
    question: 'A polynomial with real coefficients has degree 5. Counting multiplicity, which number of real zeros is impossible for it?',
    options: ['$1$', '$3$', '$4$', '$5$'],
    correctIndex: 2,
    explanation: 'There are 5 zeros in all, and the non-real ones come in conjugate pairs, so the number of non-real zeros is even ($0$, $2$ or $4$). The real count is then $5$, $3$ or $1$; $4$ real zeros would leave a single unpaired non-real zero.',
    partNumber: 5,
    partTitle: 'Complex Conjugate Pairs & Even/Odd Polynomials',
  },
  {
    id: 'pfp-ent-5b',
    question: 'A polynomial $p$ is an odd function and $p(1) = 4$. Which must be true?',
    options: [
      '$p(-1) = 4$ and $p(0) = 0$',
      '$p(-1) = -4$ and $p(0) = 4$',
      '$p(-1) = 4$ and $p(0) = -4$',
      '$p(-1) = -4$ and $p(0) = 0$',
    ],
    correctIndex: 3,
    explanation: 'Odd means $p(-x) = -p(x)$, so $p(-1) = -4$, and $p(0) = -p(0)$ forces $p(0) = 0$. The condition $p(-1) = 4$ describes an even function.',
    partNumber: 5,
    partTitle: 'Complex Conjugate Pairs & Even/Odd Polynomials',
  },

  // Part 6 — Constructing Polynomials from Given Information
  {
    id: 'pfp-ent-6a',
    question: 'A degree-4 polynomial $p$ bounces off the $x$-axis at $x = 1$, crosses it at $x = -2$ and $x = 3$, and has $p(0) = -12$. Which is $p(x)$?',
    options: [
      '$-2(x - 1)^2(x + 2)(x - 3)$',
      '$2(x - 1)^2(x + 2)(x - 3)$',
      '$2(x + 1)^2(x - 2)(x + 3)$',
      '$2(x - 1)(x + 2)^2(x - 3)$',
    ],
    correctIndex: 1,
    explanation: 'Bounce at $1$ gives $(x - 1)^2$; crossings give $(x + 2)$ and $(x - 3)$. Then $p(0) = a(1)(2)(-3) = -6a = -12$, so $a = 2$. The version with $(x + 1)^2(x - 2)(x + 3)$ also has $p(0) = -12$ but puts the zeros at $-1$, $2$ and $-3$.',
    partNumber: 6,
    partTitle: 'Constructing Polynomials from Given Information',
  },
  {
    id: 'pfp-ent-6b',
    question: 'A degree-3 polynomial $p$ with real coefficients has zeros $x = -3$ and $x = 1 + 2i$, and $p(0) = 30$. Which is $p(x)$?',
    options: [
      '$2(x + 3)(x^2 + 2x + 5)$',
      '$6(x + 3)(x^2 - 2x + 5)$',
      '$2(x + 3)(x^2 - 2x - 3)$',
      '$2(x + 3)(x^2 - 2x + 5)$',
    ],
    correctIndex: 3,
    explanation: 'The conjugate $1 - 2i$ is also a zero, and $(x - 1 - 2i)(x - 1 + 2i) = (x - 1)^2 + 4 = x^2 - 2x + 5$. Then $p(0) = a(3)(5) = 15a = 30$ gives $a = 2$.',
    partNumber: 6,
    partTitle: 'Constructing Polynomials from Given Information',
  },

  // Part 7 — Putting It All Together
  {
    id: 'pfp-ent-7a',
    question: 'Given that $x = 3$ is a zero of $p(x) = x^3 - 5x^2 + 11x - 15$, what are all the zeros of $p$?',
    options: [
      '$x = 3, 1 \\pm 2i$',
      '$x = 3, -1 \\pm 2i$',
      '$x = 3, 1 \\pm \\sqrt{6}$',
      '$x = -3, 1 \\pm 2i$',
    ],
    correctIndex: 0,
    explanation: 'Synthetic division by $x - 3$ gives the quotient $x^2 - 2x + 5$ with remainder $0$. Its discriminant is $4 - 20 = -16$, so $x = \\frac{2 \\pm 4i}{2} = 1 \\pm 2i$.',
    partNumber: 7,
    partTitle: 'Putting It All Together',
  },
  {
    id: 'pfp-ent-7b',
    question: 'A polynomial $f$ of least degree rises to the left, falls to the right, bounces off the $x$-axis at $x = -1$, crosses it at $x = 2$, and has $y$-intercept $4$. What is $f(3)$?',
    options: ['$32$', '$-32$', '$40$', '$4$'],
    correctIndex: 1,
    explanation: 'Least degree gives $f(x) = a(x + 1)^2(x - 2)$, and $f(0) = -2a = 4$ gives $a = -2$, which matches the falling right end. Then $f(3) = -2(16)(1) = -32$.',
    partNumber: 7,
    partTitle: 'Putting It All Together',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Degree, Leading Term & End Behavior' },
    { partNumber: 2, partTitle: 'Finding Zeros & Writing in Factored Form' },
    { partNumber: 3, partTitle: 'Crossing, Bouncing & Flattening' },
    { partNumber: 4, partTitle: 'Long Division, Equivalent Forms & the Factor Theorem' },
    { partNumber: 5, partTitle: 'Complex Conjugate Pairs & Even/Odd Polynomials' },
    { partNumber: 6, partTitle: 'Constructing Polynomials from Given Information' },
    { partNumber: 7, partTitle: 'Putting It All Together' },
  ]
}
