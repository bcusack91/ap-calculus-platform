/**
 * Entrance Quiz — Polynomial End Behavior — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Degree & Leading Coefficient
  {
    id: 'pea-ent-1a',
    question: 'What are the degree and the leading coefficient of $f(x) = 6 + 2x^3 - 5x^4 + x$?',
    options: [
      'Degree $4$, leading coefficient $6$',
      'Degree $3$, leading coefficient $2$',
      'Degree $4$, leading coefficient $-5$',
      'Degree $4$, leading coefficient $5$',
    ],
    correctIndex: 2,
    explanation: 'The highest power is $x^4$, and its coefficient is $-5$. The term written first ($6$) is the constant term, not the leading term, and the sign belongs to the coefficient.',
    partNumber: 1,
    partTitle: 'Degree & Leading Coefficient',
  },
  {
    id: 'pea-ent-1b',
    question: 'What are the degree and the leading coefficient of $g(x) = (3 - 2x)(x^2 + 4)(x + 1)^2$?',
    options: [
      'Degree $5$, leading coefficient $-2$',
      'Degree $4$, leading coefficient $-2$',
      'Degree $5$, leading coefficient $3$',
      'Degree $5$, leading coefficient $2$',
    ],
    correctIndex: 0,
    explanation: 'Multiply the highest-power terms of the factors: $(-2x)(x^2)(x^2) = -2x^5$, so the degree is $5$ and the leading coefficient is $-2$. Degrees add when factors multiply; multiplying the exponents $1 \\cdot 2 \\cdot 2$ gives the wrong degree $4$.',
    partNumber: 1,
    partTitle: 'Degree & Leading Coefficient',
  },

  // Part 2 — End Behavior Rules
  {
    id: 'pea-ent-2a',
    question: 'Which function satisfies $f(x) \\to +\\infty$ as $x \\to -\\infty$ and $f(x) \\to -\\infty$ as $x \\to \\infty$?',
    options: [
      '$f(x) = x^5 - 4x^2$',
      '$f(x) = 4x^2 - x^5$',
      '$f(x) = 4x^5 - x^4$',
      '$f(x) = x - 4x^6$',
    ],
    correctIndex: 1,
    explanation: 'Rising on the left and falling on the right requires odd degree with a negative leading coefficient. The leading term of $4x^2 - x^5$ is $-x^5$. The function $x - 4x^6$ has even degree, so both of its ends fall.',
    partNumber: 2,
    partTitle: 'End Behavior Rules',
  },
  {
    id: 'pea-ent-2b',
    question: 'Let $h(x) = -0.01x^4 + 100x^3$. What happens to $h(x)$ as $x \\to \\infty$?',
    options: ['$h(x) \\to \\infty$', '$h(x) \\to 0$', '$h(x) \\to -\\infty$', '$h(x) \\to 100$'],
    correctIndex: 2,
    explanation: 'Only the leading term $-0.01x^4$ matters for large $x$: even degree with a negative coefficient, so $h(x) \\to -\\infty$. The $100x^3$ term is larger at first but is eventually overtaken by the $x^4$ term.',
    partNumber: 2,
    partTitle: 'End Behavior Rules',
  },

  // Part 3 — Zeros & Multiplicity
  {
    id: 'pea-ent-3a',
    question: 'At which zeros does the graph of $f(x) = x^2(x + 3)^3(x - 5)$ cross the $x$-axis?',
    options: [
      '$x = 0$ and $x = 5$',
      '$x = -3$ and $x = 5$',
      '$x = 3$ and $x = -5$',
      '$x = 0$, $x = -3$ and $x = 5$',
    ],
    correctIndex: 1,
    explanation: 'The graph crosses at zeros of odd multiplicity: $x = -3$ (multiplicity 3) and $x = 5$ (multiplicity 1). At $x = 0$ the multiplicity is 2, so the graph bounces there.',
    partNumber: 3,
    partTitle: 'Zeros & Multiplicity',
  },
  {
    id: 'pea-ent-3b',
    question: 'How does the graph of $f(x) = (2x - 1)^2(x + 4)$ behave at its zeros?',
    options: [
      'Bounces at $x = -\\frac{1}{2}$, crosses at $x = 4$',
      'Crosses at $x = \\frac{1}{2}$, bounces at $x = -4$',
      'Bounces at $x = 1$, crosses at $x = -4$',
      'Bounces at $x = \\frac{1}{2}$, crosses at $x = -4$',
    ],
    correctIndex: 3,
    explanation: '$2x - 1 = 0$ gives $x = \\frac{1}{2}$, with multiplicity 2 (even), so the graph bounces there. $x + 4 = 0$ gives $x = -4$, multiplicity 1 (odd), so the graph crosses.',
    partNumber: 3,
    partTitle: 'Zeros & Multiplicity',
  },

  // Part 4 — Turning Points
  {
    id: 'pea-ent-4a',
    question: 'The graph of a polynomial has exactly 4 turning points. What is the smallest possible degree of the polynomial?',
    options: ['$3$', '$4$', '$5$', '$6$'],
    correctIndex: 2,
    explanation: 'A degree-$n$ polynomial has at most $n - 1$ turning points, so $n - 1 \\ge 4$ and $n \\ge 5$. A degree-4 polynomial allows at most 3 turning points.',
    partNumber: 4,
    partTitle: 'Turning Points',
  },
  {
    id: 'pea-ent-4b',
    question: 'Which description could fit the graph of a degree-3 polynomial?',
    options: [
      'Rises on the left, falls on the right, 2 turning points',
      'Rises on the left, rises on the right, 2 turning points',
      'Falls on the left, rises on the right, 3 turning points',
      'Falls on the left, falls on the right, 1 turning point',
    ],
    correctIndex: 0,
    explanation: 'Odd degree means the two ends go in opposite directions, and degree 3 allows at most $3 - 1 = 2$ turning points. Ends that both rise or both fall need even degree, and 3 turning points need degree at least 4.',
    partNumber: 4,
    partTitle: 'Turning Points',
  },

  // Part 5 — Sketching Polynomials
  {
    id: 'pea-ent-5a',
    question: 'Which description matches the graph of $f(x) = -(x - 2)(x + 1)^2$?',
    options: [
      'Falls on the left, bounces at $x = -1$, crosses at $x = 2$',
      'Rises on the left, bounces at $x = -1$, crosses at $x = 2$',
      'Rises on the left, crosses at $x = -1$, bounces at $x = 2$',
      'Rises on the left, bounces at $x = 1$, crosses at $x = -2$',
    ],
    correctIndex: 1,
    explanation: 'The leading term is $-x^3$ (odd degree, negative), so the graph rises on the left and falls on the right. The squared factor puts a bounce at $x = -1$, and the single factor $(x - 2)$ gives a crossing at $x = 2$.',
    partNumber: 5,
    partTitle: 'Sketching Polynomials',
  },
  {
    id: 'pea-ent-5b',
    question: 'When sketching $g(x) = x(x - 3)^2(x + 2)$, where does the graph lie for $0 < x < 3$?',
    options: [
      'Below, then above the $x$-axis',
      'Above the $x$-axis',
      'Above, then below the $x$-axis',
      'Beneath the $x$-axis',
    ],
    correctIndex: 1,
    explanation: 'There are no zeros strictly between $0$ and $3$, so one test point decides the sign: $g(1) = 1(4)(3) = 12 > 0$. The graph stays above the axis on that whole interval and touches down at $x = 3$, a bounce.',
    partNumber: 5,
    partTitle: 'Sketching Polynomials',
  },

  // Part 6 — Problem-Solving Workshop
  {
    id: 'pea-ent-6a',
    question: 'Which statement about $f(x) = 3x^4 - 12x^2$ is true?',
    options: [
      'It bounces at $x = 0$ and crosses at $x = \\pm 2$',
      'It crosses at $x = 0$ and bounces at $x = \\pm 2$',
      'It bounces at $x = 0$ and crosses at $x = \\pm 4$',
      'It crosses at $x = 0$ and crosses at $x = \\pm 2$',
    ],
    correctIndex: 0,
    explanation: '$f(x) = 3x^2(x^2 - 4) = 3x^2(x - 2)(x + 2)$. The zero $x = 0$ has multiplicity 2 (bounce), and $x = 2$ and $x = -2$ each have multiplicity 1 (cross).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pea-ent-6b',
    question: 'For $f(x) = -(x + 1)^2(x - 3)^2$, on which set is $f(x) > 0$?',
    options: [
      'It is never positive',
      'Only on $(-1, 3)$',
      'On $(-\\infty, -1)$ and $(3, \\infty)$',
      'Everywhere except $-1$ and $3$',
    ],
    correctIndex: 0,
    explanation: 'Both zeros have even multiplicity, so the graph bounces at each and never changes sign. The leading coefficient is negative, so $f(x) \\le 0$ everywhere and is never positive.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7 — Review & Applications
  {
    id: 'pea-ent-7a',
    question: 'An open box made from a sheet of cardboard has volume $V(x) = x(10 - 2x)(8 - 2x)$. Written as a polynomial, what are the degree and the leading coefficient of $V$?',
    options: [
      'Degree $3$, leading coefficient $-4$',
      'Degree $3$, leading coefficient $4$',
      'Degree $3$, leading coefficient $80$',
      'Degree $2$, leading coefficient $-4$',
    ],
    correctIndex: 1,
    explanation: 'The leading term is $x \\cdot (-2x) \\cdot (-2x) = 4x^3$, so the degree is $3$ and the leading coefficient is $4$. The two negative signs cancel; $80$ is the product of the constants, which only shows up in the $x$ term.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'pea-ent-7b',
    question: 'A degree-5 polynomial $p$ has a positive leading coefficient, a zero at $x = -2$ with multiplicity 2, and a zero at $x = 1$ with multiplicity 3. It has no other zeros. Which is true?',
    options: [
      '$p(0) > 0$ and $p$ bounces at $x = -2$',
      '$p(0) < 0$ and $p$ crosses at $x = -2$',
      '$p(0) > 0$ and $p$ bounces at $x = 1$',
      '$p(0) < 0$ and $p$ bounces at $x = -2$',
    ],
    correctIndex: 3,
    explanation: 'Even multiplicity at $x = -2$ means a bounce. With $p(x) = a(x + 2)^2(x - 1)^3$ and $a > 0$, $p(0) = a(4)(-1) = -4a < 0$.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Degree & Leading Coefficient' },
    { partNumber: 2, partTitle: 'End Behavior Rules' },
    { partNumber: 3, partTitle: 'Zeros & Multiplicity' },
    { partNumber: 4, partTitle: 'Turning Points' },
    { partNumber: 5, partTitle: 'Sketching Polynomials' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
