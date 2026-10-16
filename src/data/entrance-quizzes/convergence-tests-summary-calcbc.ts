/**
 * Entrance Quiz — The Master Convergence Test Guide — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Overview of All Tests
  {
    id: 'cts-ent-1a',
    question: 'Which test settles $\\sum_{n=1}^{\\infty} (-1)^n \\frac{3n}{n + 4}$ immediately?',
    options: ['Divergence test', 'Alternating series test', 'Ratio test', 'Limit comparison test'],
    correctIndex: 0,
    explanation: 'The terms have size $\\frac{3n}{n+4} \\to 3$, so they do not approach $0$ and the series diverges by the divergence test. The alternating series test needs terms shrinking to $0$, the ratio test gives $L = 1$, and limit comparison needs positive terms.',
    partNumber: 1,
    partTitle: 'Overview of All Tests',
  },
  {
    id: 'cts-ent-1b',
    question: 'What is $\\sum_{n=1}^{\\infty} 4\\left(-\\frac{3}{5}\\right)^n$?',
    options: ['$\\frac{5}{2}$', '$-6$', '$-\\frac{3}{2}$', '$10$'],
    correctIndex: 2,
    explanation: 'The series is geometric with first term $4\\left(-\\frac{3}{5}\\right) = -\\frac{12}{5}$ and ratio $-\\frac{3}{5}$, so the sum is $\\frac{-12/5}{1 + 3/5} = -\\frac{3}{2}$. Starting at $n = 0$ gives $\\frac{5}{2}$, and ignoring the negative ratio gives $-6$ or $10$.',
    partNumber: 1,
    partTitle: 'Overview of All Tests',
  },

  // Part 2 — Direct & Limit Comparison
  {
    id: 'cts-ent-2a',
    question: 'Which argument correctly decides $\\sum_{n=1}^{\\infty} \\frac{n + \\sqrt{n}}{n^3 + 2}$?',
    options: [
      'LCT with $\\frac{1}{n}$ gives $L = 1$, so it diverges',
      'LCT with $\\frac{1}{n^2}$ gives $L = 1$, so it converges',
      'LCT with $\\frac{1}{n^3}$ gives $L = \\infty$, so it converges',
      'DCT against $\\frac{1}{n^3}$ shows that it converges',
    ],
    correctIndex: 1,
    explanation: 'The dominant terms give $\\frac{n}{n^3} = \\frac{1}{n^2}$, and $\\frac{a_n}{1/n^2} = \\frac{n^3 + n^{5/2}}{n^3 + 2} \\to 1$, so the series converges with $\\sum \\frac{1}{n^2}$. Against $\\frac{1}{n}$ the limit is $0$, a limit of $\\infty$ proves nothing, and $a_n$ is larger than $\\frac{1}{n^3}$, so that direct comparison fails.',
    partNumber: 2,
    partTitle: 'Direct & Limit Comparison',
  },
  {
    id: 'cts-ent-2b',
    question: 'Which comparison correctly shows that $\\sum_{n=3}^{\\infty} \\frac{\\ln n}{n}$ diverges?',
    options: [
      '$\\frac{\\ln n}{n} < \\frac{1}{\\sqrt{n}}$ eventually, and $\\sum \\frac{1}{\\sqrt{n}}$ diverges',
      '$\\frac{\\ln n}{n} \\to 0$, and $\\sum \\frac{1}{n}$ diverges',
      '$\\frac{\\ln n}{n} < 1$, and $\\sum 1$ diverges',
      '$\\frac{\\ln n}{n} > \\frac{1}{n}$ for $n \\ge 3$, and $\\sum \\frac{1}{n}$ diverges',
    ],
    correctIndex: 3,
    explanation: 'For $n \\ge 3$, $\\ln n > 1$, so the terms are larger than those of the divergent harmonic series, and direct comparison gives divergence. Being smaller than a divergent series proves nothing, and terms tending to $0$ never decide divergence.',
    partNumber: 2,
    partTitle: 'Direct & Limit Comparison',
  },

  // Part 3 — When Other Tests Fail
  {
    id: 'cts-ent-3a',
    question: 'Using the integral test, what happens to $\\sum_{n=2}^{\\infty} \\frac{n}{n^2 + 4}$?',
    options: [
      'Diverges, since $\\frac{1}{2}\\ln(x^2+4) \\to \\infty$',
      'Converges, since $\\frac{1}{2}\\arctan(\\frac{x}{2})$ stays bounded',
      'Converges, since the terms decrease to $0$',
      'Diverges, since the terms do not decrease',
    ],
    correctIndex: 0,
    explanation: 'The function $\\frac{x}{x^2+4}$ is positive and decreasing for $x \\ge 2$, and $\\int \\frac{x}{x^2+4}\\,dx = \\frac{1}{2}\\ln(x^2 + 4)$, which grows without bound, so the series diverges. The arctangent belongs to $\\frac{1}{x^2+4}$, and terms decreasing to $0$ do not guarantee convergence.',
    partNumber: 3,
    partTitle: 'When Other Tests Fail',
  },
  {
    id: 'cts-ent-3b',
    question: 'A function $f$ is positive, continuous, and decreasing on $[1, \\infty)$, with $\\int_1^{\\infty} f(x)\\,dx = 2$. What can be said about $\\sum_{n=1}^{\\infty} f(n)$?',
    options: [
      'The series converges to exactly $2$',
      'The series converges to a sum less than $2$',
      'The series converges, but its sum need not be $2$',
      'No conclusion, since only the integral is known',
    ],
    correctIndex: 2,
    explanation: 'The integral test says the series converges because the integral does, but it does not give the sum. In fact the sum is larger than $2$, since the rectangles $f(1), f(2), \\ldots$ on $[n, n+1]$ lie above the decreasing curve.',
    partNumber: 3,
    partTitle: 'When Other Tests Fail',
  },

  // Part 4 — Three Categories
  {
    id: 'cts-ent-4a',
    question: 'How does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{\\sqrt{n^3 + 1}}$ behave?',
    options: [
      'Absolutely convergent',
      'Conditionally convergent',
      'Divergent',
      'Absolutely convergent, by the ratio test',
    ],
    correctIndex: 1,
    explanation: 'The absolute values behave like $\\frac{n}{n^{3/2}} = \\frac{1}{\\sqrt{n}}$, so $\\sum |a_n|$ diverges. The terms decrease to $0$ (from $n = 2$ on), so the alternating series test gives convergence: conditional. The ratio test gives $L = 1$.',
    partNumber: 4,
    partTitle: 'Three Categories',
  },
  {
    id: 'cts-ent-4b',
    question: 'How does $\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n^3}$ behave?',
    options: [
      'Conditionally convergent',
      'Divergent, since $\\sin n$ has no limit',
      'Not testable, since the signs are irregular',
      'Absolutely convergent',
    ],
    correctIndex: 3,
    explanation: 'Since $\\left|\\frac{\\sin n}{n^3}\\right| \\le \\frac{1}{n^3}$ and $\\sum \\frac{1}{n^3}$ converges, $\\sum |a_n|$ converges by direct comparison, so the series converges absolutely. Irregular signs do not matter once the absolute values form a convergent series.',
    partNumber: 4,
    partTitle: 'Three Categories',
  },

  // Part 5 — Test Selection Under Pressure
  {
    id: 'cts-ent-5a',
    question: 'On a free-response question, which response about $\\sum_{n=1}^{\\infty} \\frac{2^n}{n!}$ earns full credit?',
    options: [
      'The ratio limit $\\lim \\frac{2}{n+1} = 0 < 1$ gives convergence',
      'The series converges because factorials grow much faster than $2^n$',
      'The terms approach $0$, so the series converges by the divergence test',
      'By the ratio test it converges, since $\\frac{2^{n+1}}{2^n} = 2$',
    ],
    correctIndex: 0,
    explanation: 'Full credit identifies the ratio test, computes the limit correctly, compares it with $1$, and concludes. A growth-rate remark is not a test, the divergence test can never show convergence, and the ratio must include the factorials.',
    partNumber: 5,
    partTitle: 'Test Selection Under Pressure',
  },
  {
    id: 'cts-ent-5b',
    question: 'For $\\sum_{n=1}^{\\infty} \\frac{(x - 2)^n}{n \\cdot 3^n}$, the ratio test gives convergence for $|x - 2| < 3$. What must still be done to find the interval of convergence?',
    options: [
      'Nothing more, since the interval is $(-1, 5)$',
      'Check that the series converges at $x = 2$',
      'Test $x = -1$ and $x = 5$ separately',
      'Test $x = -3$ and $x = 3$ separately',
    ],
    correctIndex: 2,
    explanation: 'The ratio test says nothing at the endpoints $x = 2 \\pm 3$, so each must be tested on its own (here $x = -1$ gives a convergent alternating harmonic series and $x = 5$ gives the divergent harmonic series). The values $\\pm 3$ are the radius, not the endpoints.',
    partNumber: 5,
    partTitle: 'Test Selection Under Pressure',
  },

  // Part 6 — Mixed Practice
  {
    id: 'cts-ent-6a',
    question: 'What does the ratio test give for $\\sum_{n=1}^{\\infty} \\frac{(n+2)!}{n! \\cdot 4^n}$?',
    options: [
      'Diverges, $L = 4$',
      'Converges, $L = \\frac{1}{4}$',
      'Inconclusive, $L = 1$',
      'Diverges, $L = \\infty$',
    ],
    correctIndex: 1,
    explanation: 'Since $\\frac{(n+2)!}{n!} = (n+2)(n+1)$, the ratio of consecutive terms is $\\frac{(n+3)(n+2)}{(n+2)(n+1)} \\cdot \\frac{1}{4} \\to \\frac{1}{4} < 1$, so the series converges. The polynomial factors tend to $1$; only the $4^n$ decides the limit.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'cts-ent-6b',
    question: 'How does $\\sum_{n=1}^{\\infty} \\frac{\\cos(\\pi n)}{n^{1/3}}$ behave?',
    options: [
      'Absolutely convergent',
      'Divergent, since $\\cos(\\pi n)$ has no limit',
      'Divergent, since $p = \\frac{1}{3} < 1$',
      'Conditionally convergent',
    ],
    correctIndex: 3,
    explanation: 'Because $\\cos(\\pi n) = (-1)^n$, this is the alternating series $\\sum \\frac{(-1)^n}{n^{1/3}}$, which converges by the alternating series test. Its absolute values form a $p$-series with $p = \\frac{1}{3} \\le 1$, which diverges, so the convergence is conditional.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },

  // Part 7 — Final Assessment
  {
    id: 'cts-ent-7a',
    question: 'How many of these series converge: $\\sum \\frac{1}{n^{1.1}}$, $\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}$, $\\sum \\frac{(-1)^n}{\\sqrt{n}}$, and $\\sum \\frac{n!}{2^n}$?',
    options: ['$2$', '$1$', '$3$', '$4$'],
    correctIndex: 0,
    explanation: 'The $p$-series with $p = 1.1 > 1$ converges, and the alternating series converges by the alternating series test. The integral test shows $\\sum \\frac{1}{n\\ln n}$ diverges, and $\\frac{n!}{2^n} \\to \\infty$, so the last diverges. That is two.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'cts-ent-7b',
    question: 'Which statement about $\\sum_{n=1}^{\\infty} \\frac{\\arctan n}{n^2}$ is correct?',
    options: [
      'Diverges, since $\\arctan n \\to \\frac{\\pi}{2} \\ne 0$',
      'Converges, by the ratio test, with $L = 1$',
      'Converges, since $a_n < \\frac{\\pi}{2n^2}$',
      'Diverges, by comparison with $\\frac{1}{n}$',
    ],
    correctIndex: 2,
    explanation: 'The terms are positive and bounded by $\\frac{\\pi}{2} \\cdot \\frac{1}{n^2}$, the terms of a convergent series, so direct comparison gives convergence. The terms themselves go to $0$ (the numerator, not the term, approaches $\\frac{\\pi}{2}$), and $L = 1$ is inconclusive.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Overview of All Tests' },
    { partNumber: 2, partTitle: 'Direct & Limit Comparison' },
    { partNumber: 3, partTitle: 'When Other Tests Fail' },
    { partNumber: 4, partTitle: 'Three Categories' },
    { partNumber: 5, partTitle: 'Test Selection Under Pressure' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
