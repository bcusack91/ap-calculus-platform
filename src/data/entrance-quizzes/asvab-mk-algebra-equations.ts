/**
 * Entrance Quiz — Linear Equations and Inequalities (ASVAB Mathematics Knowledge) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Numbers and scenarios differ from the lesson checks, the exit pool and the competitive bank.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Algebra on the ASVAB: Expressions and Substitution
  {
    id: 'mk-algebra-equations-ent-1a',
    question: 'If $a = 7$, what is the value of $20 - 2a$?',
    options: ['$34$', '$-6$', '$6$', '$13$'],
    correctIndex: 2,
    explanation: '$20 - 2(7) = 20 - 14 = 6$. Adding gives $34$, reversing the subtraction gives $-6$, and forgetting to double $a$ gives $13$.',
    partNumber: 1,
    partTitle: 'Algebra on the ASVAB: Expressions and Substitution',
  },
  {
    id: 'mk-algebra-equations-ent-1b',
    question: 'Which expression is equal to $9y + 4 - 3y - 10$?',
    options: ['$6y - 6$', '$12y - 6$', '$6y + 14$', '$6y + 6$'],
    correctIndex: 0,
    explanation: 'Combine like terms: $9y - 3y = 6y$ and $4 - 10 = -6$, giving $6y - 6$. Adding the $3y$ gives $12y$, and losing the negative on $10$ gives $+14$.',
    partNumber: 1,
    partTitle: 'Algebra on the ASVAB: Expressions and Substitution',
  },
  // Part 2 — Solving Linear Equations
  {
    id: 'mk-algebra-equations-ent-2a',
    question: 'Solve for $x$: $3x - 11 = 16$',
    options: ['$\\frac{5}{3}$', '$9$', '$27$', '$\\frac{16}{3}$'],
    correctIndex: 1,
    explanation: 'Add $11$: $3x = 27$. Divide by $3$: $x = 9$. Subtracting $11$ instead gives $\\frac{5}{3}$, and stopping at $3x = 27$ gives $27$.',
    partNumber: 2,
    partTitle: 'Solving Linear Equations',
  },
  {
    id: 'mk-algebra-equations-ent-2b',
    question: 'Solve for $x$: $4(x + 2) = x + 23$',
    options: ['$7$', '$\\frac{31}{5}$', '$3$', '$5$'],
    correctIndex: 3,
    explanation: 'Distribute: $4x + 8 = x + 23$. Subtract $x$ and $8$: $3x = 15$, so $x = 5$. Writing $4x + 2$ (distributing to $x$ only) gives $3x = 21$, or $7$.',
    partNumber: 2,
    partTitle: 'Solving Linear Equations',
  },
  // Part 3 — Turning Words into Equations
  {
    id: 'mk-algebra-equations-ent-3a',
    question: 'Which expression means "two less than the product of $6$ and a number"?',
    options: ['$6(n - 2)$', '$2 - 6n$', '$6n - 2$', '$\\frac{6}{n} - 2$'],
    correctIndex: 2,
    explanation: 'The product of $6$ and a number is $6n$; two less than that is $6n - 2$. Writing $2 - 6n$ reverses the "less than" order.',
    partNumber: 3,
    partTitle: 'Turning Words into Equations',
  },
  {
    id: 'mk-algebra-equations-ent-3b',
    question: 'The sum of two consecutive integers is $63$. What is the smaller integer?',
    options: ['$31$', '$32$', '$30$', '$31.5$'],
    correctIndex: 0,
    explanation: '$n + (n + 1) = 63$, so $2n = 62$ and $n = 31$. The pair is $31$ and $32$; $31.5$ is the average, not an integer.',
    partNumber: 3,
    partTitle: 'Turning Words into Equations',
  },
  // Part 4 — Linear Inequalities
  {
    id: 'mk-algebra-equations-ent-4a',
    question: 'Solve: $2x + 5 \\le 17$',
    options: ['$x \\ge 6$', '$x \\le 11$', '$x \\le 4$', '$x \\le 6$'],
    correctIndex: 3,
    explanation: 'Subtract $5$: $2x \\le 12$. Divide by positive $2$: $x \\le 6$, with no flip. Adding $5$ instead of subtracting gives $x \\le 11$.',
    partNumber: 4,
    partTitle: 'Linear Inequalities',
  },
  {
    id: 'mk-algebra-equations-ent-4b',
    question: 'Solve: $-4x > 28$',
    options: ['$x > -7$', '$x < -7$', '$x < 7$', '$x > 7$'],
    correctIndex: 1,
    explanation: 'Divide by $-4$ and flip the sign: $x < -7$. Forgetting to flip gives $x > -7$. Check: $x = -8$ gives $32 > 28$ ✓.',
    partNumber: 4,
    partTitle: 'Linear Inequalities',
  },
  // Part 5 — Systems of Two Equations
  {
    id: 'mk-algebra-equations-ent-5a',
    question: 'Which pair $(x, y)$ is the solution of $x + y = 12$ and $x - y = 2$?',
    options: ['$(5, 7)$', '$(8, 4)$', '$(7, 5)$', '$(6, 6)$'],
    correctIndex: 2,
    explanation: 'Add the equations: $2x = 14$, so $x = 7$ and $y = 5$. The pair $(5, 7)$ reverses the order and gives $x - y = -2$; the others add to $12$ but fail the second equation.',
    partNumber: 5,
    partTitle: 'Systems of Two Equations',
  },
  {
    id: 'mk-algebra-equations-ent-5b',
    question: 'If $y = 2x + 1$ and $x + y = 13$, what is the value of $x$?',
    options: ['$4$', '$9$', '$6$', '$\\frac{14}{3}$'],
    correctIndex: 0,
    explanation: 'Substitute: $x + 2x + 1 = 13$, so $3x = 12$ and $x = 4$. The value $9$ is $y$, and adding the $1$ to $13$ instead of subtracting it gives $3x = 14$, or $\\frac{14}{3}$.',
    partNumber: 5,
    partTitle: 'Systems of Two Equations',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'mk-algebra-equations-ent-6a',
    question: 'If $2x + 9 = 21$, what is the value of $2x - 9$?',
    options: ['$6$', '$12$', '$3$', '$-3$'],
    correctIndex: 2,
    explanation: '$2x = 12$, so $2x - 9 = 3$. The value $6$ is $x$ and $12$ is $2x$: both are answers to a question that was not asked.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'mk-algebra-equations-ent-6b',
    question: 'A student starts solving $12 - 3(x - 1) = 6$ by writing $12 - 3x - 3 = 6$. What is the error?',
    options: [
      'The product $-3 \\cdot (-1)$ is $+3$, not $-3$',
      'The $12$ should also be multiplied by $-3$',
      'The $6$ must be moved to the left side first',
      'There is no error; this first step is right'
    ],
    correctIndex: 0,
    explanation: 'Distributing $-3$ over $x - 1$ gives $-3x + 3$. The correct line is $12 - 3x + 3 = 6$, so $15 - 3x = 6$ and $x = 3$. The $12$ is outside the parentheses, so it is not multiplied.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'mk-algebra-equations-ent-7a',
    question: 'Solve for $x$: $5 - (2x - 3) = 14$',
    options: ['$-6$', '$-3$', '$3$', '$6$'],
    correctIndex: 1,
    explanation: 'The minus sign changes both signs inside: $5 - 2x + 3 = 14$, so $8 - 2x = 14$, $-2x = 6$ and $x = -3$. Leaving $-3$ inside as $-3$ gives $2 - 2x = 14$, or $-6$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'mk-algebra-equations-ent-7b',
    question: 'If $2x + y = 10$ and $x - y = 5$, what is the value of $y$?',
    options: ['$5$', '$-5$', '$\\frac{5}{3}$', '$0$'],
    correctIndex: 3,
    explanation: 'Add the equations: $3x = 15$, so $x = 5$. Then $5 - y = 5$ gives $y = 0$. Check: $10 + 0 = 10$ ✓. The value $5$ is $x$.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Algebra on the ASVAB: Expressions and Substitution' },
    { partNumber: 2, partTitle: 'Solving Linear Equations' },
    { partNumber: 3, partTitle: 'Turning Words into Equations' },
    { partNumber: 4, partTitle: 'Linear Inequalities' },
    { partNumber: 5, partTitle: 'Systems of Two Equations' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
