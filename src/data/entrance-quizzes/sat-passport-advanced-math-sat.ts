/**
 * Entrance Quiz — SAT Passport to Advanced Math (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Nonlinear Equations ───────────────────
  {
    id: 'spam-ent-1a',
    question:
      'What are the solutions to the equation $x^{2}$ − 5x + 6 = 0?',
    options: [
      'x = 2 and x = 3',
      'x = −2 and x = −3',
      'x = 1 and x = 6',
      'x = −1 and x = −6',
    ],
    correctIndex: 0,
    explanation:
      'Factor: $x^{2}$ − 5x + 6 = (x − 2)(x − 3) = 0. Setting each factor equal to zero gives x = 2 and x = 3. Check: 4 − 10 + 6 = 0 ✓ and 9 − 15 + 6 = 0 ✓.',
    partNumber: 1,
    partTitle: 'Nonlinear Equations',
  },
  {
    id: 'spam-ent-1b',
    question:
      'Which value of x satisfies both $x^{2}$ = 49 and x < 0?',
    options: [
      'x = 7',
      'x = −7',
      'x = 49',
      'x = −49',
    ],
    correctIndex: 1,
    explanation:
      '$x^{2}$ = 49 has two solutions: x = 7 and x = −7. The constraint x < 0 eliminates x = 7, leaving x = −7.',
    partNumber: 1,
    partTitle: 'Nonlinear Equations',
  },

  // ── Part 2: Polynomial Operations ────────────────
  {
    id: 'spam-ent-2a',
    question:
      'What is the product of (2x + 3)(x − 4)?',
    options: [
      '$2x^{2}$ − 5x − 12',
      '$2x^{2}$ + 5x − 12',
      '$2x^{2}$ − 8x − 12',
      '$2x^{2}$ − 5x + 12',
    ],
    correctIndex: 0,
    explanation:
      'Using FOIL: (2x)(x) + (2x)(−4) + (3)(x) + (3)(−4) = $2x^{2}$ − 8x + 3x − 12 = $2x^{2}$ − 5x − 12.',
    partNumber: 2,
    partTitle: 'Polynomial Operations',
  },
  {
    id: 'spam-ent-2b',
    question:
      'When the polynomial $3x^{3}$ − $2x^{2}$ + 5x − 1 is divided by (x − 1), what is the remainder?',
    options: [
      '0',
      '5',
      '3',
      '−1',
    ],
    correctIndex: 1,
    explanation:
      'By the Remainder Theorem, the remainder when dividing by (x − 1) is f(1) = $3(1)^{3}$ − $2(1)^{2}$ + 5(1) − 1 = 3 − 2 + 5 − 1 = 5.',
    partNumber: 2,
    partTitle: 'Polynomial Operations',
  },

  // ── Part 3: Rational Expressions ──────────────────
  {
    id: 'spam-ent-3a',
    question:
      'Simplify: $\\dfrac{x^2 - 9}{x^2 - x - 6}$',
    options: [
      '$\\dfrac{x - 3}{x - 3}$',
      '$\\dfrac{x + 3}{x + 2}$',
      '$\\dfrac{x - 3}{x + 2}$',
      '$\\dfrac{x + 3}{x - 2}$',
    ],
    correctIndex: 1,
    explanation:
      'Factor numerator: $x^{2}$ − 9 = (x + 3)(x − 3). Factor denominator: $x^{2}$ − x − 6 = (x − 3)(x + 2). Cancel (x − 3): result = (x + 3)/(x + 2), valid for $x \\ne 3$ and $x \\ne -2$.',
    partNumber: 3,
    partTitle: 'Rational Expressions',
  },
  {
    id: 'spam-ent-3b',
    question:
      'For what value(s) of x is the expression $\\dfrac{2x}{x^2 - 4}$ undefined?',
    options: [
      'x = 0 only',
      'x = 2 only',
      'x = −2 only',
      'x = 2 and x = −2',
    ],
    correctIndex: 3,
    explanation:
      'A rational expression is undefined when its denominator equals zero. $x^{2}$ − 4 = 0 → (x + 2)(x − 2) = 0 → x = 2 or x = −2. Both values must be excluded from the domain.',
    partNumber: 3,
    partTitle: 'Rational Expressions',
  },

  // ── Part 4: Function Manipulation ────────────────
  {
    id: 'spam-ent-4a',
    question:
      'If f(x) = $2x^{2}$ − 3x + 1, what is f(−2)?',
    options: [
      '3',
      '11',
      '15',
      '−3',
    ],
    correctIndex: 2,
    explanation:
      'f(−2) = $2(-2)^{2}$ − 3(−2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15.',
    partNumber: 4,
    partTitle: 'Function Manipulation',
  },
  {
    id: 'spam-ent-4b',
    question:
      'If f(x) = 3x + 2 and g(x) = $x^{2}$, what is f(g(x))?',
    options: [
      '$3x^{2}$ + 2',
      '$(3x + 2)^{2}$',
      '$3x^{3}$ + $2x^{2}$',
      '3x + $2x^{2}$',
    ],
    correctIndex: 0,
    explanation:
      'f(g(x)) means substitute g(x) into f: $f(x^{2})$ = $3(x^{2})$ + 2 = $3x^{2}$ + 2. This is function composition—replace every x in f(x) with g(x).',
    partNumber: 4,
    partTitle: 'Function Manipulation',
  },

  // ── Part 5: Advanced Quadratics ───────────────────
  {
    id: 'spam-ent-5a',
    question:
      'Using the quadratic formula, what are the solutions to $2x^{2}$ + 3x − 5 = 0?',
    options: [
      'x = 1 and x = −2.5',
      'x = −1 and x = 2.5',
      'x = 5 and x = −1',
      'x = 1 and x = 2.5',
    ],
    correctIndex: 0,
    explanation:
      'a = 2, b = 3, c = −5. Discriminant: $b^{2}$ − 4ac = 9 + 40 = 49. x = $(-3 \\pm 7)/4$. So x = (−3 + 7)/4 = 1 or x = (−3 − 7)/4 = −10/4 = −2.5.',
    partNumber: 5,
    partTitle: 'Advanced Quadratics',
  },
  {
    id: 'spam-ent-5b',
    question:
      'The parabola y = $(x - 3)^{2}$ + 4 has its vertex at which point?',
    options: [
      '(3, 4)',
      '(−3, 4)',
      '(3, −4)',
      '(−3, −4)',
    ],
    correctIndex: 0,
    explanation:
      'Vertex form is y = $a(x - h)^{2}$ + k, where (h, k) is the vertex. Here h = 3 and k = 4, so the vertex is at (3, 4). The parabola opens upward since a = 1 > 0.',
    partNumber: 5,
    partTitle: 'Advanced Quadratics',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'spam-ent-6a',
    question:
      'If x + 1/x = 5, what is the value of $x^{2}$ + $1/x^{2}$?',
    options: [
      '23',
      '25',
      '27',
      '21',
    ],
    correctIndex: 0,
    explanation:
      'Square both sides of x + 1/x = 5: $(x + 1/x)^{2}$ = $x^{2}$ + 2 + $1/x^{2}$ = 25. Therefore $x^{2}$ + $1/x^{2}$ = 25 − 2 = 23.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'spam-ent-6b',
    question:
      'A function is defined by f(x) = $ax^{2}$ + bx + c where $a \\ne 0$. If the function has exactly one real root, which must be true about the discriminant?',
    options: [
      '$b^{2}$ − 4ac > 0',
      '$b^{2}$ − 4ac < 0',
      '$b^{2}$ − 4ac = 0',
      '$b^{2}$ − 4ac = 1',
    ],
    correctIndex: 2,
    explanation:
      'The discriminant $b^{2}$ − 4ac determines the number of real roots: if > 0, two distinct real roots; if = 0, exactly one real root (a repeated root); if < 0, no real roots. Exactly one real root requires $b^{2}$ − 4ac = 0.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'spam-ent-7a',
    question:
      'The equation y = $x^{2}$ − 6x + 5 can be rewritten in vertex form as y = $(x - 3)^{2}$ − 4. What does this tell you about the graph?',
    options: [
      'The parabola opens downward with vertex at (3, 4).',
      'The parabola opens upward with vertex at (3, −4) and x-intercepts at x = 1 and x = 5.',
      'The parabola opens upward with vertex at (−3, 4).',
      'The parabola opens downward with x-intercepts at x = −1 and x = −5.',
    ],
    correctIndex: 1,
    explanation:
      'In vertex form y = $(x - 3)^{2}$ − 4: a = 1 > 0 means opens upward; vertex is at (3, −4). Setting y = 0: $(x - 3)^{2}$ = 4 → x − 3 = $\\pm 2$ → x = 5 or x = 1. All of these features are captured in option B.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'spam-ent-7b',
    question:
      'Which expression is equivalent to $(x^{2} - 4)/(x - 2)$ for $x \\ne 2$?',
    options: [
      'x − 2',
      'x + 2',
      '$x^{2}$',
      '(x + 2)(x − 2)',
    ],
    correctIndex: 1,
    explanation:
      'Factor the numerator: $x^{2}$ − 4 = (x + 2)(x − 2). Cancel (x − 2) from numerator and denominator (valid for $x \\ne 2$): result = x + 2.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Nonlinear Equations' },
    { partNumber: 2, partTitle: 'Polynomial Operations' },
    { partNumber: 3, partTitle: 'Rational Expressions' },
    { partNumber: 4, partTitle: 'Function Manipulation' },
    { partNumber: 5, partTitle: 'Advanced Quadratics' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
