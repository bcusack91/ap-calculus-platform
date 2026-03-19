/**
 * Entrance Quiz — Alternating Series (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Alternating Series Definition
  {
    id: 'as-ent-1a',
    question: 'An alternating series has terms that:',
    options: ['Are all positive', 'Alternate in sign', 'Are all negative', 'Are increasing'],
    correctIndex: 1,
    explanation: 'Signs alternate: $+, -, +, -, \\ldots$ or $-, +, -, +, \\ldots$',
    partNumber: 1,
    partTitle: 'Alternating Series Definition',
  },
  {
    id: 'as-ent-1b',
    question: 'The general form of an alternating series is:',
    options: ['$\\sum a_n$', '$\\sum (-1)^n b_n$ where $b_n > 0$', '$\\sum |a_n|$', '$\\sum n^{-1}$'],
    correctIndex: 1,
    explanation: '$\\sum (-1)^n b_n$ or $\\sum (-1)^{n+1} b_n$ with $b_n > 0$.',
    partNumber: 1,
    partTitle: 'Alternating Series Definition',
  },

  // Part 2: Alternating Series Test (AST)
  {
    id: 'as-ent-2a',
    question: 'The Alternating Series Test requires: (1) $b_n > 0$, (2) $b_{n+1} \\leq b_n$, and (3):',
    options: ['$b_n \\to \\infty$', '$\\lim b_n = 0$', '$b_n$ is increasing', '$b_n > 1$'],
    correctIndex: 1,
    explanation: 'The terms must decrease to zero.',
    partNumber: 2,
    partTitle: 'Alternating Series Test (AST)',
  },
  {
    id: 'as-ent-2b',
    question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ converges by AST because:',
    options: ['$1/n$ is increasing', '$1/n$ is decreasing and $\\to 0$', 'The terms are positive', 'The partial sums are bounded'],
    correctIndex: 1,
    explanation: '$b_n = 1/n$: decreasing and $\\to 0$. AST applies.',
    partNumber: 2,
    partTitle: 'Alternating Series Test (AST)',
  },

  // Part 3: Absolute vs Conditional Convergence
  {
    id: 'as-ent-3a',
    question: 'A series converges absolutely if:',
    options: ['$\\sum a_n$ converges', '$\\sum |a_n|$ converges', '$|a_n| \\to 0$', '$a_n > 0$ for all $n$'],
    correctIndex: 1,
    explanation: 'Absolute convergence: the series of absolute values converges.',
    partNumber: 3,
    partTitle: 'Absolute vs Conditional Convergence',
  },
  {
    id: 'as-ent-3b',
    question: '$\\sum \\frac{(-1)^n}{n}$ is:',
    options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent', 'Neither'],
    correctIndex: 1,
    explanation: '$\\sum 1/n$ diverges but $\\sum (-1)^n/n$ converges. Conditional.',
    partNumber: 3,
    partTitle: 'Absolute vs Conditional Convergence',
  },

  // Part 4: Alternating Series Error Bound
  {
    id: 'as-ent-4a',
    question: 'The alternating series error bound states: $|S - S_N| \\leq$',
    options: ['$b_N$', '$b_{N+1}$', '$S_N$', '$\\frac{b_N}{2}$'],
    correctIndex: 1,
    explanation: 'The error is at most the first omitted term $b_{N+1}$.',
    partNumber: 4,
    partTitle: 'Alternating Series Error Bound',
  },
  {
    id: 'as-ent-4b',
    question: 'For $\\sum \\frac{(-1)^n}{n!}$, the error after 4 terms is at most:',
    options: ['$\\frac{1}{5!} = \\frac{1}{120}$', '$\\frac{1}{4!} = \\frac{1}{24}$', '$\\frac{1}{3!}$', '$\\frac{1}{6!}$'],
    correctIndex: 0,
    explanation: 'First omitted term is the 5th: $b_5 = \\frac{1}{5!} = \\frac{1}{120}$.',
    partNumber: 4,
    partTitle: 'Alternating Series Error Bound',
  },

  // Part 5: Rearrangement & Absolute Convergence
  {
    id: 'as-ent-5a',
    question: 'If a series converges absolutely, then it:',
    options: ['Also converges (conditionally or otherwise)', 'May diverge', 'Only converges conditionally', 'Cannot be rearranged'],
    correctIndex: 0,
    explanation: 'Absolute convergence implies convergence.',
    partNumber: 5,
    partTitle: 'Rearrangement & Absolute Convergence',
  },
  {
    id: 'as-ent-5b',
    question: 'A conditionally convergent series can be rearranged to sum to:',
    options: ['Only its original sum', 'Any real number (Riemann rearrangement theorem)', 'Only zero', 'Only integers'],
    correctIndex: 1,
    explanation: "Riemann's theorem: rearrangements can give any sum or diverge.",
    partNumber: 5,
    partTitle: 'Rearrangement & Absolute Convergence',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'as-ent-6a',
    question: 'How many terms of $\\sum \\frac{(-1)^{n+1}}{n^3}$ are needed for error $< 0.001$?',
    options: ['$n = 10$', '$n = 7$', '$n = 100$', '$n = 5$'],
    correctIndex: 0,
    explanation: 'Need $\\frac{1}{(N+1)^3} < 0.001$. $(N+1)^3 > 1000$. $N+1 > 10$. $N = 10$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'as-ent-6b',
    question: 'The alternating harmonic series $\\sum \\frac{(-1)^{n+1}}{n}$ converges to:',
    options: ['$1$', '$\\ln 2$', '$e$', '$\\pi/4$'],
    correctIndex: 1,
    explanation: 'This famous sum equals $\\ln 2$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'as-ent-7a',
    question: 'On the AP BC exam, the alternating series error bound is commonly used to:',
    options: ['Prove divergence', 'Determine how many terms give a desired accuracy', 'Find exact sums', "Apply L'Hôpital's Rule"],
    correctIndex: 1,
    explanation: 'Key application: find $N$ such that the partial sum is within a given tolerance.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'as-ent-7b',
    question: 'If asked whether a series is absolutely or conditionally convergent, test:',
    options: ['$\\sum a_n$ only', '$\\sum |a_n|$ first — if it converges then absolute; if not check $\\sum a_n$', 'Only the ratio test', 'The integral of $a_n$'],
    correctIndex: 1,
    explanation: 'Check absolute values first, then the original series.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Alternating Series Definition' },
    { partNumber: 2, partTitle: 'Alternating Series Test (AST)' },
    { partNumber: 3, partTitle: 'Absolute vs Conditional Convergence' },
    { partNumber: 4, partTitle: 'Alternating Series Error Bound' },
    { partNumber: 5, partTitle: 'Rearrangement & Absolute Convergence' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
