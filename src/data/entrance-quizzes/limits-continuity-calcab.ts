/**
 * Entrance Quiz — Limits & Continuity (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Understanding Limits
  {
    id: 'lc-ent-1a',
    question: 'What does $\\lim_{x \\to 3} f(x) = 7$ mean?',
    options: ['$f(3) = 7$', 'As $x$ approaches 3, $f(x)$ approaches 7', '$f(x)$ equals 7 for all $x$ near 3', 'The function is defined at $x = 3$'],
    correctIndex: 1,
    explanation: 'A limit describes the value $f(x)$ approaches as $x$ gets arbitrarily close to 3, regardless of whether $f(3)$ exists or equals 7.',
    partNumber: 1,
    partTitle: 'Understanding Limits',
  },
  {
    id: 'lc-ent-1b',
    question: 'Evaluate: $\\lim_{x \\to 2} (3x + 1)$',
    options: ['$5$', '$6$', '$7$', '$8$'],
    correctIndex: 2,
    explanation: 'For a polynomial, substitute directly: $3(2) + 1 = 7$.',
    partNumber: 1,
    partTitle: 'Understanding Limits',
  },
  // Part 2: Evaluating Limits Algebraically
  {
    id: 'lc-ent-2a',
    question: 'Evaluate: $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$',
    options: ['$0$', '$4$', '$8$', 'Does not exist'],
    correctIndex: 2,
    explanation: 'Factor: $\\frac{(x-4)(x+4)}{x-4} = x + 4$. As $x \\to 4$, this equals $8$.',
    partNumber: 2,
    partTitle: 'Evaluating Limits Algebraically',
  },
  {
    id: 'lc-ent-2b',
    question: 'Which technique resolves a $\\frac{0}{0}$ indeterminate form?',
    options: ['Set the limit equal to 0', 'Factor and cancel', 'The limit does not exist', 'Multiply by $x$'],
    correctIndex: 1,
    explanation: 'When direct substitution gives $\\frac{0}{0}$, factoring, rationalizing, or other algebraic techniques can simplify the expression.',
    partNumber: 2,
    partTitle: 'Evaluating Limits Algebraically',
  },
  // Part 3: One-Sided Limits
  {
    id: 'lc-ent-3a',
    question: 'If $\\lim_{x \\to 2^-} f(x) = 5$ and $\\lim_{x \\to 2^+} f(x) = 3$, what is $\\lim_{x \\to 2} f(x)$?',
    options: ['$5$', '$3$', '$4$', 'Does not exist'],
    correctIndex: 3,
    explanation: 'A two-sided limit exists only if both one-sided limits are equal. Since $5 \\neq 3$, the limit does not exist.',
    partNumber: 3,
    partTitle: 'One-Sided Limits',
  },
  {
    id: 'lc-ent-3b',
    question: '$\\lim_{x \\to 0^+} \\frac{1}{x}$ equals:',
    options: ['$0$', '$1$', '$+\\infty$', '$-\\infty$'],
    correctIndex: 2,
    explanation: 'As $x$ approaches $0$ from the right (positive side), $\\frac{1}{x}$ grows without bound toward $+\\infty$.',
    partNumber: 3,
    partTitle: 'One-Sided Limits',
  },
  // Part 4: The Squeeze Theorem
  {
    id: 'lc-ent-4a',
    question: 'The Squeeze Theorem states that if $g(x) \\leq f(x) \\leq h(x)$ near $c$ and $\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$, then:',
    options: ['$f(c) = L$', '$\\lim_{x \\to c} f(x) = L$', '$f(x) = L$ for all $x$', 'The limit does not exist'],
    correctIndex: 1,
    explanation: 'The Squeeze Theorem guarantees that $f(x)$ is "squeezed" to the same limit $L$.',
    partNumber: 4,
    partTitle: 'The Squeeze Theorem',
  },
  {
    id: 'lc-ent-4b',
    question: 'What is $\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right)$?',
    options: ['$1$', 'Does not exist', '$0$', '$-1$'],
    correctIndex: 2,
    explanation: 'Since $-x^2 \\leq x^2 \\sin(1/x) \\leq x^2$ and both bounds approach 0, the Squeeze Theorem gives limit = 0.',
    partNumber: 4,
    partTitle: 'The Squeeze Theorem',
  },
  // Part 5: Continuity & IVT
  {
    id: 'lc-ent-5a',
    question: 'A function $f$ is continuous at $x = a$ if:',
    options: [
      '$f(a)$ is defined, $\\lim_{x \\to a} f(x)$ exists, and $\\lim_{x \\to a} f(x) = f(a)$',
      '$f(a)$ is defined',
      'The graph has no sharp corners at $x = a$',
      '$f$ is differentiable at $x = a$',
    ],
    correctIndex: 0,
    explanation: 'Continuity at a point requires all three conditions: the function value exists, the limit exists, and they are equal.',
    partNumber: 5,
    partTitle: 'Continuity & the Intermediate Value Theorem',
  },
  {
    id: 'lc-ent-5b',
    question: 'The Intermediate Value Theorem guarantees a value $c$ in $[a,b]$ where $f(c) = k$ provided:',
    options: ['$f$ is differentiable on $[a,b]$', '$f$ is continuous on $[a,b]$ and $k$ is between $f(a)$ and $f(b)$', '$f$ is increasing on $[a,b]$', '$f(a) = f(b)$'],
    correctIndex: 1,
    explanation: 'The IVT requires continuity on the closed interval and that $k$ lies between $f(a)$ and $f(b)$.',
    partNumber: 5,
    partTitle: 'Continuity & the Intermediate Value Theorem',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'lc-ent-6a',
    question: 'Evaluate: $\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{5x^2 - 2}$',
    options: ['$0$', '$\\frac{3}{5}$', '$\\infty$', '$\\frac{1}{2}$'],
    correctIndex: 1,
    explanation: 'When the degrees are equal, the limit is the ratio of leading coefficients: $\\frac{3}{5}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'lc-ent-6b',
    question: 'Evaluate: $\\lim_{x \\to 0} \\frac{\\sin x}{x}$',
    options: ['$0$', '$\\infty$', '$1$', 'Does not exist'],
    correctIndex: 2,
    explanation: 'This is a fundamental limit in calculus: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: Review & AP Exam Applications
  {
    id: 'lc-ent-7a',
    question: 'Which type of discontinuity does $f(x) = \\frac{x^2 - 1}{x - 1}$ have at $x = 1$?',
    options: ['Jump discontinuity', 'Removable discontinuity', 'Infinite discontinuity', 'No discontinuity'],
    correctIndex: 1,
    explanation: '$f(x) = \\frac{(x-1)(x+1)}{x-1} = x + 1$ for $x \\neq 1$. The limit exists ($= 2$) but $f(1)$ is undefined — a removable (hole) discontinuity.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'lc-ent-7b',
    question: 'If $f$ is continuous on $[0, 5]$, $f(0) = -3$, and $f(5) = 4$, the IVT guarantees a root in:',
    options: ['$(0, 5)$', '$[0, 5]$ only if $f$ is differentiable', 'No interval — more information needed', '$(-3, 4)$'],
    correctIndex: 0,
    explanation: 'Since $f$ is continuous and $f(0) < 0 < f(5)$, the IVT guarantees $f(c) = 0$ for some $c$ in $(0, 5)$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding Limits' },
    { partNumber: 2, partTitle: 'Evaluating Limits Algebraically' },
    { partNumber: 3, partTitle: 'One-Sided Limits' },
    { partNumber: 4, partTitle: 'The Squeeze Theorem' },
    { partNumber: 5, partTitle: 'Continuity & the Intermediate Value Theorem' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
