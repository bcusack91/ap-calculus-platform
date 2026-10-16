/**
 * Entrance Quiz — Rational Inequalities — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Why Rational Inequalities Are Different
  {
    id: 'sri-ent-1a',
    question: 'Consider $\\dfrac{x^2 - 9}{x + 1} \\ge 0$. Which statement about the values $x = 3$, $x = -3$ and $x = -1$ is correct?',
    options: [
      '$-1$ can be a solution; $3$ and $-3$ never can',
      '$3$ and $-3$ can be solutions; $-1$ never can',
      'All three can be solutions because the inequality is $\\ge$',
      'None of the three values can ever be solutions',
    ],
    correctIndex: 1,
    explanation: 'At $x = \\pm 3$ the numerator is $0$, the fraction equals $0$, and $0 \\ge 0$ is true. At $x = -1$ the denominator is $0$, so the expression is undefined and can never satisfy the inequality, whatever the symbol.',
    partNumber: 1,
    partTitle: 'Why Rational Inequalities Are Different',
  },
  {
    id: 'sri-ent-1b',
    question: 'A student rewrites $\\dfrac{x + 3}{x - 2} < 0$ as $x + 3 < 0$ by multiplying both sides by $x - 2$. Which value of $x$ shows that the two inequalities are not equivalent?',
    options: [
      '$x = 1$',
      '$x = 3$',
      '$x = -3$',
      '$x = 5$',
    ],
    correctIndex: 0,
    explanation: 'At $x = 1$ the fraction is $\\frac{4}{-1} = -4 < 0$ (true), but $x + 3 = 4 < 0$ is false. Because $x - 2$ is negative there, multiplying by it should have flipped the inequality. At $3$, $-3$ and $5$ the two statements agree.',
    partNumber: 1,
    partTitle: 'Why Rational Inequalities Are Different',
  },

  // Part 2 — Finding Every Critical Number
  {
    id: 'sri-ent-2a',
    question: 'For $\\dfrac{x^2 + 2x - 8}{x^2 - 16} \\le 0$, what are the critical numbers, and which of them can be included in the solution?',
    options: [
      '$-4, 2, 4$; $-4$ and $2$ can be included',
      '$-4, 2, 4$; only $2$ can be included',
      '$2$ and $4$ only; $2$ can be included',
      '$-4, 2, 4$; all three can be included',
    ],
    correctIndex: 1,
    explanation: 'The expression is $\\frac{(x + 4)(x - 2)}{(x - 4)(x + 4)}$. Numerator zeros are $-4$ and $2$; denominator zeros are $4$ and $-4$. Since $-4$ zeros the denominator, it is undefined and excluded, leaving $2$ as the only includable critical number.',
    partNumber: 2,
    partTitle: 'Finding Every Critical Number',
  },
  {
    id: 'sri-ent-2b',
    question: 'What are all the real critical numbers of $\\dfrac{x(x^2 - 1)}{x^2 + 4} > 0$?',
    options: [
      '$-1, 0, 1$',
      '$-2, -1, 0, 1, 2$',
      '$-1, 0, 1, \\pm 2i$',
      '$-4, -1, 0, 1$',
    ],
    correctIndex: 0,
    explanation: 'The numerator $x(x - 1)(x + 1)$ is zero at $0$, $1$ and $-1$. The denominator $x^2 + 4$ is never zero for real $x$ (its zeros $\\pm 2i$ are not on the number line), so it adds no critical numbers.',
    partNumber: 2,
    partTitle: 'Finding Every Critical Number',
  },

  // Part 3 — The Sign-Chart Method
  {
    id: 'sri-ent-3a',
    question: 'What is the sign pattern of $\\dfrac{(x + 1)(x - 3)}{x - 1}$ on the intervals $(-\\infty, -1)$, $(-1, 1)$, $(1, 3)$ and $(3, \\infty)$, in that order?',
    options: [
      '$-, +, -, +$',
      '$+, -, +, -$',
      '$+, -, -, +$',
      '$-, -, +, +$',
    ],
    correctIndex: 0,
    explanation: 'Test points: $x = -2$ gives $\\frac{(-)(-)}{(-)} = -$; $x = 0$ gives $\\frac{(+)(-)}{(-)} = +$; $x = 2$ gives $\\frac{(+)(-)}{(+)} = -$; $x = 4$ gives $+$. Each critical number has multiplicity 1, so the sign alternates.',
    partNumber: 3,
    partTitle: 'The Sign-Chart Method',
  },
  {
    id: 'sri-ent-3b',
    question: 'Solve $\\dfrac{x - 4}{(x + 2)(x - 1)} < 0$.',
    options: [
      '$(-2, 1) \\cup (4, \\infty)$',
      '$(-\\infty, 4)$',
      '$(-\\infty, -2) \\cup (1, 4)$',
      '$(1, 4)$',
    ],
    correctIndex: 2,
    explanation: 'Critical numbers are $-2$, $1$ and $4$. Test points $-3, 0, 2, 5$ give the signs $-, +, -, +$, so the expression is negative on $(-\\infty, -2)$ and $(1, 4)$. All endpoints are open: the inequality is strict and $-2$, $1$ are undefined.',
    partNumber: 3,
    partTitle: 'The Sign-Chart Method',
  },

  // Part 4 — Endpoints & Writing the Solution
  {
    id: 'sri-ent-4a',
    question: 'The sign chart of $\\dfrac{x + 5}{x - 3}$ is $+, -, +$ across the critical numbers $-5$ and $3$. What is the solution of $\\dfrac{x + 5}{x - 3} \\ge 0$?',
    options: [
      '$(-\\infty, -5] \\cup [3, \\infty)$',
      '$(-\\infty, -5) \\cup (3, \\infty)$',
      '$(-\\infty, -5] \\cup (3, \\infty)$',
      '$[-5, 3)$',
    ],
    correctIndex: 2,
    explanation: 'Keep the positive intervals. The numerator zero $-5$ makes the fraction $0$, which satisfies $\\ge$, so it gets a bracket. The denominator zero $3$ is undefined, so it always gets a parenthesis.',
    partNumber: 4,
    partTitle: 'Endpoints & Writing the Solution',
  },
  {
    id: 'sri-ent-4b',
    question: 'Solve $\\dfrac{(x - 1)(x + 3)}{x - 5} \\ge 0$.',
    options: [
      '$[-3, 1] \\cup [5, \\infty)$',
      '$(-3, 1) \\cup (5, \\infty)$',
      '$(-\\infty, -3] \\cup [1, 5)$',
      '$[-3, 1] \\cup (5, \\infty)$',
    ],
    correctIndex: 3,
    explanation: 'Critical numbers $-3$, $1$ (zeros) and $5$ (undefined) give the signs $-, +, -, +$. Keep the nonnegative parts: $[-3, 1]$ with both zeros included, and $(5, \\infty)$ with $5$ excluded because it is undefined.',
    partNumber: 4,
    partTitle: 'Endpoints & Writing the Solution',
  },

  // Part 5 — Getting One Side to Zero
  {
    id: 'sri-ent-5a',
    question: 'A student solves $\\dfrac{x + 3}{x - 1} \\ge 2$ by multiplying both sides by $x - 1$, getting $x + 3 \\ge 2x - 2$ and then $x \\le 5$. Why is this method unreliable?',
    options: [
      'Both sides must be divided by $2$ before the fraction is cleared',
      'The value $x = 5$ makes the denominator equal to zero',
      'Multiplying by $x - 1$ always reverses the inequality',
      'The sign of $x - 1$ is unknown, so the inequality might need to flip',
    ],
    correctIndex: 3,
    explanation: 'Multiplying by $x - 1$ keeps the inequality only where $x - 1 > 0$; for $x < 1$ it would flip. The answer $x \\le 5$ wrongly includes values such as $x = 0$, where $\\frac{3}{-1} = -3$ is not at least 2, which is why you get one side to zero and use a sign chart instead (true solution $(1, 5]$).',
    partNumber: 5,
    partTitle: 'Getting One Side to Zero',
  },
  {
    id: 'sri-ent-5b',
    question: 'A shop\'s average cost per item for making $x$ items is $A(x) = \\dfrac{3x + 400}{x}$ dollars, for $x > 0$. For which $x$ is the average cost at most \\$5?',
    options: ['$(0, 200]$', '$[80, \\infty)$', '$[200, \\infty)$', '$[50, \\infty)$'],
    correctIndex: 2,
    explanation: '$\\frac{3x + 400}{x} - 5 = \\frac{400 - 2x}{x} \\le 0$. For $x > 0$ the denominator is positive, so we need $400 - 2x \\le 0$, that is $x \\ge 200$. On $(0, 200)$ the average cost is above \\$5.',
    partNumber: 5,
    partTitle: 'Getting One Side to Zero',
  },

  // Part 6 — Multiplicity & Repeated Factors
  {
    id: 'sri-ent-6a',
    question: 'Solve $\\dfrac{(x - 2)^2}{x + 1} > 0$.',
    options: [
      '$(-1, \\infty)$',
      '$(-1, 2) \\cup (2, \\infty)$',
      '$(-\\infty, -1) \\cup (2, \\infty)$',
      '$(2, \\infty)$',
    ],
    correctIndex: 1,
    explanation: 'The square is positive except at $x = 2$, where the fraction is $0$ (not $> 0$). So the sign matches $x + 1$: positive for $x > -1$. Remove $x = 2$, and the sign does not flip there because the multiplicity is even.',
    partNumber: 6,
    partTitle: 'Multiplicity & Repeated Factors',
  },
  {
    id: 'sri-ent-6b',
    question: 'Solve $\\dfrac{(x + 3)^2(x - 1)}{x - 4} \\le 0$.',
    options: [
      '$[1, 4)$',
      '$(-\\infty, -3] \\cup [1, 4)$',
      '$\\{-3\\} \\cup [1, 4)$',
      '$[-3, 4)$',
    ],
    correctIndex: 2,
    explanation: 'The signs are $+, +, -, +$ across $-3$, $1$, $4$: no flip at $-3$ (even multiplicity). The negative interval is $(1, 4)$; add the zeros $1$ and $-3$, where the fraction equals $0$, and exclude the undefined $4$.',
    partNumber: 6,
    partTitle: 'Multiplicity & Repeated Factors',
  },

  // Part 7 — Applications, Mixed Practice & Mastery Check
  {
    id: 'sri-ent-7a',
    question: 'A drug\'s concentration in the blood is $C(t) = \\dfrac{20t}{t^2 + 4}$ mg/L, where $t \\ge 0$ is in hours. For which $t$ is $C(t) \\ge 4$?',
    options: [
      '$1 \\le t \\le 4$',
      '$t \\ge 4$',
      '$0 \\le t \\le 1$ or $t \\ge 4$',
      '$2 \\le t \\le 8$',
    ],
    correctIndex: 0,
    explanation: 'The denominator is always positive, so $C(t) \\ge 4$ means $20t \\ge 4t^2 + 16$, or $t^2 - 5t + 4 \\le 0$. That is $(t - 1)(t - 4) \\le 0$, which holds for $1 \\le t \\le 4$.',
    partNumber: 7,
    partTitle: 'Applications, Mixed Practice & Mastery Check',
  },
  {
    id: 'sri-ent-7b',
    question: 'Solve $\\dfrac{(x - 4)(x + 1)}{x + 3} \\le 0$.',
    options: [
      '$(-\\infty, -3] \\cup [-1, 4]$',
      '$(-3, -1] \\cup [4, \\infty)$',
      '$[-1, 4]$',
      '$(-\\infty, -3) \\cup [-1, 4]$',
    ],
    correctIndex: 3,
    explanation: 'The critical numbers are $-3$, $-1$ and $4$, and the signs on the four intervals are $-, +, -, +$. The zeros $-1$ and $4$ satisfy $\\le 0$, but $x = -3$ makes the denominator zero, so it is excluded: $(-\\infty, -3) \\cup [-1, 4]$.',
    partNumber: 7,
    partTitle: 'Applications, Mixed Practice & Mastery Check',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Why Rational Inequalities Are Different' },
    { partNumber: 2, partTitle: 'Finding Every Critical Number' },
    { partNumber: 3, partTitle: 'The Sign-Chart Method' },
    { partNumber: 4, partTitle: 'Endpoints & Writing the Solution' },
    { partNumber: 5, partTitle: 'Getting One Side to Zero' },
    { partNumber: 6, partTitle: 'Multiplicity & Repeated Factors' },
    { partNumber: 7, partTitle: 'Applications, Mixed Practice & Mastery Check' },
  ]
}
