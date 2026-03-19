/**
 * Entrance Quiz — Lagrange Error Bound (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Taylor Polynomial Remainder
  {
    id: 'le-ent-1a',
    question: 'The Taylor polynomial remainder $R_n(x)$ represents:',
    options: ['The sum of the series', 'The error between $f(x)$ and $T_n(x)$', 'The $n$th derivative', 'The radius of convergence'],
    correctIndex: 1,
    explanation: '$R_n(x) = f(x) - T_n(x)$ is the error.',
    partNumber: 1,
    partTitle: 'Taylor Polynomial Remainder',
  },
  {
    id: 'le-ent-1b',
    question: 'The exact remainder involves an unknown point $c$ between $a$ and $x$ in:',
    options: ['$R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$', '$R_n(x) = f(x)$', '$R_n(x) = T_n(x)$', '$R_n(x) = 0$'],
    correctIndex: 0,
    explanation: 'Lagrange form of the remainder.',
    partNumber: 1,
    partTitle: 'Taylor Polynomial Remainder',
  },

  // Part 2: Lagrange Error Bound Formula
  {
    id: 'le-ent-2a',
    question: 'The Lagrange error bound states $|R_n(x)| \\leq$',
    options: ['$\\frac{M}{n!}|x-a|^n$', '$\\frac{M}{(n+1)!}|x-a|^{n+1}$', '$M|x-a|$', '$\\frac{|x-a|^n}{n}$'],
    correctIndex: 1,
    explanation: '$|R_n| \\leq \\frac{M}{(n+1)!}|x-a|^{n+1}$ where $M = \\max|f^{(n+1)}|$.',
    partNumber: 2,
    partTitle: 'Lagrange Error Bound Formula',
  },
  {
    id: 'le-ent-2b',
    question: 'The value $M$ in the error bound is:',
    options: ['The maximum of $|f(x)|$', 'The maximum of $|f^{(n+1)}(c)|$ on the interval between $a$ and $x$', 'Always $1$', 'The $n$th derivative at $a$'],
    correctIndex: 1,
    explanation: '$M$ bounds the $(n+1)$th derivative on the relevant interval.',
    partNumber: 2,
    partTitle: 'Lagrange Error Bound Formula',
  },

  // Part 3: Finding the Maximum of |f^(n+1)|
  {
    id: 'le-ent-3a',
    question: 'For $f(x) = e^x$, all derivatives equal $e^x$. On $[0, 1]$, $M =$',
    options: ['$1$', '$e$', '$e^2$', '$0$'],
    correctIndex: 1,
    explanation: '$|f^{(n+1)}(c)| = e^c \\leq e^1 = e$ on $[0,1]$.',
    partNumber: 3,
    partTitle: 'Finding the Maximum of $|f^{(n+1)}|$',
  },
  {
    id: 'le-ent-3b',
    question: 'For $f(x) = \\sin x$, the bound on any derivative is:',
    options: ['$0$', '$1$', '$\\infty$', '$\\pi$'],
    correctIndex: 1,
    explanation: 'All derivatives of $\\sin x$ are $\\pm \\sin x$ or $\\pm \\cos x$, bounded by $1$.',
    partNumber: 3,
    partTitle: 'Finding the Maximum of $|f^{(n+1)}|$',
  },

  // Part 4: Applying the Error Bound
  {
    id: 'le-ent-4a',
    question: 'Using $T_4(x)$ for $e^x$ at $a = 0$, the error at $x = 0.5$ is at most:',
    options: ['$\\frac{e \\cdot (0.5)^5}{5!} \\approx 0.00071$', '$\\frac{(0.5)^4}{4!}$', '$0.5$', '$e/5$'],
    correctIndex: 0,
    explanation: '$|R_4| \\leq \\frac{e \\cdot 0.5^5}{120} \\approx 0.00071$.',
    partNumber: 4,
    partTitle: 'Applying the Error Bound',
  },
  {
    id: 'le-ent-4b',
    question: 'Using $T_3(x) = x - \\frac{x^3}{6}$ for $\\sin x$, the error at $x = 0.1$ is bounded by:',
    options: ['$\\frac{(0.1)^5}{120}$', '$\\frac{(0.1)^4}{24}$', '$\\frac{(0.1)^3}{6}$', '$(0.1)^2$'],
    correctIndex: 1,
    explanation: '$|R_3| \\leq \\frac{M(0.1)^4}{4!}$. For $\\sin x$, $M = 1$. So $|R_3| \\leq \\frac{(0.1)^4}{24} \\approx 4.17 \\times 10^{-6}$.',
    partNumber: 4,
    partTitle: 'Applying the Error Bound',
  },

  // Part 5: Error Bound with Specific Functions
  {
    id: 'le-ent-5a',
    question: 'For the alternating series $\\sum (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$ (which is $\\sin x$), the error bound from AST gives:',
    options: ['The same bound as Lagrange', 'A tighter bound (first omitted term)', 'A looser bound', 'No bound'],
    correctIndex: 1,
    explanation: 'For alternating Taylor series, the AST error bound is often tighter.',
    partNumber: 5,
    partTitle: 'Error Bound with Specific Functions',
  },
  {
    id: 'le-ent-5b',
    question: 'When should you use the Lagrange error bound vs. the alternating series error bound?',
    options: ['Always use Lagrange', 'Use AST for alternating series if applicable; Lagrange for non-alternating', 'They are identical', 'Neither is needed on the exam'],
    correctIndex: 1,
    explanation: 'AST is simpler when the series alternates; Lagrange works for any Taylor series.',
    partNumber: 5,
    partTitle: 'Error Bound with Specific Functions',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'le-ent-6a',
    question: 'Find $n$ such that $|R_n(1)| < 0.001$ for $e^x$ at $a = 0$:',
    options: ['$n = 5$', '$n = 6$', '$n = 7$', '$n = 4$'],
    correctIndex: 1,
    explanation: '$\\frac{e}{(n+1)!} < 0.001$. $(n+1)! > 2718$. $7! = 5040 > 2718$. So $n = 6$: $\\frac{e}{5040} \\approx 0.00054 < 0.001$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'le-ent-6b',
    question: 'The Lagrange error bound is an upper bound, meaning the actual error is:',
    options: ['Exactly equal to the bound', 'Less than or equal to the bound', 'Greater than the bound', 'Unknown'],
    correctIndex: 1,
    explanation: 'The bound is a maximum — the actual error may be smaller.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'le-ent-7a',
    question: 'On the AP BC exam, Lagrange error bound problems typically ask you to:',
    options: ['Prove a series diverges', 'Find $n$ or show the polynomial approximation is within a given tolerance', 'Evaluate an infinite series exactly', 'Find the radius of convergence'],
    correctIndex: 1,
    explanation: 'Common: show $|f(x) - T_n(x)| < \\epsilon$ for given $n$ or find minimum $n$.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'le-ent-7b',
    question: 'The key formula to memorize is:',
    options: ['$|R_n(x)| \\leq \\frac{M \\cdot |x-a|^{n+1}}{(n+1)!}$', '$|R_n| = |f(x)|$', '$|R_n| = \\frac{1}{n}$', '$|R_n| \\leq M|x-a|$'],
    correctIndex: 0,
    explanation: 'This formula is essential for BC exam success.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Taylor Polynomial Remainder' },
    { partNumber: 2, partTitle: 'Lagrange Error Bound Formula' },
    { partNumber: 3, partTitle: 'Finding the Maximum of $|f^{(n+1)}|$' },
    { partNumber: 4, partTitle: 'Applying the Error Bound' },
    { partNumber: 5, partTitle: 'Error Bound with Specific Functions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
