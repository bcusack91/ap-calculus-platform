/**
 * Entrance Quiz — Infinite Series (Convergence Tests) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Integral Test
  {
    id: 'ser-ent-1a',
    question: 'By the integral test, for which $p > 0$ does $\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^p}$ converge?',
    options: ['$p > \\frac{1}{2}$', '$p > 1$', '$p \\ge 1$', '$p \\ge 2$'],
    correctIndex: 1,
    explanation: 'With $u = \\ln x$, $\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^p} = \\int_{\\ln 2}^{\\infty} \\frac{du}{u^p}$, which converges exactly when $p > 1$. At $p = 1$ the integral is $\\ln(\\ln x) \\to \\infty$, so $p \\ge 1$ includes a divergent case.',
    partNumber: 1,
    partTitle: 'The Integral Test',
  },
  {
    id: 'ser-ent-1b',
    question: 'Why can the integral test not be applied directly to $\\sum_{n=1}^{\\infty} \\frac{2 + \\sin n}{n^2}$?',
    options: [
      'The function $\\frac{2+\\sin x}{x^2}$ is not decreasing',
      'Some of the terms of the series are negative',
      'The function is not continuous for $x \\ge 1$',
      'The integral $\\int_1^{\\infty} \\frac{2+\\sin x}{x^2}\\,dx$ diverges',
    ],
    correctIndex: 0,
    explanation: 'The integral test needs a positive, continuous, decreasing function, and the $\\sin x$ term makes this one rise and fall. The terms are all positive (since $2 + \\sin n \\ge 1$), the function is continuous, and the integral actually converges; the series converges by comparison with $\\frac{3}{n^2}$.',
    partNumber: 1,
    partTitle: 'The Integral Test',
  },

  // Part 2 — Direct & Limit Comparison Tests
  {
    id: 'ser-ent-2a',
    question: 'Which statement about $\\sum_{n=1}^{\\infty} \\frac{2n + 3}{\\sqrt{n^5 + 1}}$ is correct?',
    options: [
      'Diverges, by LCT with $\\frac{1}{n}$',
      'Converges, by LCT with $\\frac{1}{n^{5/2}}$',
      'Converges, by LCT with $\\frac{1}{n^{3/2}}$',
      'Diverges, by the $n$th term test',
    ],
    correctIndex: 2,
    explanation: 'The dominant terms give $\\frac{2n}{n^{5/2}} = \\frac{2}{n^{3/2}}$, and $\\frac{a_n}{1/n^{3/2}} \\to 2$, a finite positive limit, so the series converges with $\\sum \\frac{1}{n^{3/2}}$. Comparing with $\\frac{1}{n^{5/2}}$ gives a limit of $\\infty$, which proves nothing, and the terms do tend to $0$.',
    partNumber: 2,
    partTitle: 'Direct & Limit Comparison Tests',
  },
  {
    id: 'ser-ent-2b',
    question: 'Which comparison correctly proves that $\\sum_{n=1}^{\\infty} \\frac{1}{3^n + n}$ converges?',
    options: [
      'Compare with $\\sum \\frac{1}{n}$, a larger divergent series',
      'Compare with $\\sum \\frac{1}{4^n}$, a smaller convergent series',
      'Compare with $\\sum \\frac{1}{n}$ using the limit comparison test',
      'Compare with $\\sum \\frac{1}{3^n}$, a larger convergent series',
    ],
    correctIndex: 3,
    explanation: 'Since $0 < \\frac{1}{3^n + n} < \\frac{1}{3^n}$ and the geometric series $\\sum \\frac{1}{3^n}$ converges, the direct comparison test gives convergence. Being smaller than a divergent series or larger than a convergent one proves nothing, and the limit against $\\frac{1}{n}$ is $0$ with a divergent series, which is inconclusive.',
    partNumber: 2,
    partTitle: 'Direct & Limit Comparison Tests',
  },

  // Part 3 — The Ratio Test
  {
    id: 'ser-ent-3a',
    question: 'What does the ratio test give for $\\sum_{n=1}^{\\infty} \\frac{(n!)^2}{(2n)!}$?',
    options: [
      '$L = \\frac{1}{4}$, converges',
      '$L = 4$, diverges',
      '$L = 1$, inconclusive',
      '$L = \\frac{1}{2}$, converges',
    ],
    correctIndex: 0,
    explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2}{(2n+2)(2n+1)} = \\frac{n+1}{2(2n+1)} \\to \\frac{1}{4} < 1$, so the series converges. Inverting the ratio gives $4$, and $\\frac{1}{2}$ drops one of the two factors from $(2n+2)!$.',
    partNumber: 3,
    partTitle: 'The Ratio Test',
  },
  {
    id: 'ser-ent-3b',
    question: 'For which series is the ratio test inconclusive?',
    options: [
      '$\\sum \\frac{n^2}{2^n}$',
      '$\\sum \\frac{n^2+1}{n^4}$',
      '$\\sum \\frac{3^n}{n!}$',
      '$\\sum \\frac{n!}{n^n}$',
    ],
    correctIndex: 1,
    explanation: 'For a rational function of $n$ such as $\\frac{n^2+1}{n^4}$, the ratio of consecutive terms tends to $1$, so the test says nothing (the series converges by comparison with $\\frac{1}{n^2}$). The others give $L = \\frac{1}{2}$, $0$, and $\\frac{1}{e}$.',
    partNumber: 3,
    partTitle: 'The Ratio Test',
  },

  // Part 4 — Types of Convergence
  {
    id: 'ser-ent-4a',
    question: 'How does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{2n + 5}$ behave?',
    options: [
      'Converges absolutely',
      'Diverges',
      'Converges conditionally',
      'Converges absolutely, by the ratio test',
    ],
    correctIndex: 2,
    explanation: 'The absolute values $\\frac{1}{2n+5}$ behave like $\\frac{1}{2n}$, so $\\sum |a_n|$ diverges by limit comparison with $\\frac{1}{n}$. The terms decrease to $0$, so the alternating series test gives convergence: conditional convergence. The ratio test gives $L = 1$ here.',
    partNumber: 4,
    partTitle: 'Types of Convergence',
  },
  {
    id: 'ser-ent-4b',
    question: 'How does $\\sum_{n=1}^{\\infty} (-1)^n \\frac{n+1}{n}$ behave?',
    options: [
      'Converges conditionally',
      'Converges absolutely',
      'Converges by the AST',
      'Diverges',
    ],
    correctIndex: 3,
    explanation: 'The terms have size $\\frac{n+1}{n} \\to 1$, so they do not approach $0$ and the series diverges by the $n$th term test. The alternating series test needs the terms to shrink to $0$, so it does not apply.',
    partNumber: 4,
    partTitle: 'Types of Convergence',
  },

  // Part 5 — Convergence Test Strategy
  {
    id: 'ser-ent-5a',
    question: 'Which test decides $\\sum_{n=1}^{\\infty} \\frac{4n^2 - 1}{n^3 + 2n}$ most directly?',
    options: [
      'Limit comparison with $\\frac{1}{n}$',
      'Ratio test',
      'Alternating series test',
      'Divergence test',
    ],
    correctIndex: 0,
    explanation: 'The terms behave like $\\frac{4n^2}{n^3} = \\frac{4}{n}$, and the limit comparison with $\\frac{1}{n}$ gives $4$, so the series diverges with the harmonic series. The ratio test gives $L = 1$, the terms tend to $0$ so the divergence test is silent, and the series does not alternate.',
    partNumber: 5,
    partTitle: 'Convergence Test Strategy',
  },
  {
    id: 'ser-ent-5b',
    question: 'What is the correct conclusion for $\\sum_{n=1}^{\\infty} \\frac{5^n}{n^2 \\cdot 4^n}$?',
    options: [
      'Converges, since the ratio limit is $\\frac{4}{5}$',
      'Diverges, since the ratio limit is $\\frac{5}{4}$',
      'Converges, by comparison with $\\frac{1}{n^2}$',
      'Inconclusive, since the ratio limit is $1$',
    ],
    correctIndex: 1,
    explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{5}{4} \\cdot \\frac{n^2}{(n+1)^2} \\to \\frac{5}{4} > 1$, so the series diverges (its terms actually grow). The factor $\\left(\\frac{5}{4}\\right)^n$ makes the terms larger than $\\frac{1}{n^2}$, so that comparison fails.',
    partNumber: 5,
    partTitle: 'Convergence Test Strategy',
  },

  // Part 6 — Practice Workshop
  {
    id: 'ser-ent-6a',
    question: 'Which statement about $\\sum_{n=1}^{\\infty} \\frac{3 + (-1)^n}{n^2}$ is correct?',
    options: [
      'Diverges, since the terms do not decrease',
      'Converges, by the alternating series test',
      'Converges, by comparison with $\\frac{4}{n^2}$',
      'Diverges, since $(-1)^n$ has no limit',
    ],
    correctIndex: 2,
    explanation: 'Every term satisfies $0 < \\frac{3 + (-1)^n}{n^2} \\le \\frac{4}{n^2}$, and $\\sum \\frac{4}{n^2}$ converges, so the series converges. The terms are all positive, so the series is not alternating, and decreasing terms are not required for convergence.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'ser-ent-6b',
    question: 'What does the ratio test give for $\\sum_{n=1}^{\\infty} \\frac{n^n}{n!}$?',
    options: [
      'Converges, $L = \\frac{1}{e}$',
      'Inconclusive, $L = 1$',
      'Converges, $L = 0$',
      'Diverges, $L = e$',
    ],
    correctIndex: 3,
    explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{n+1}}{(n+1)!} \\cdot \\frac{n!}{n^n} = \\left(\\frac{n+1}{n}\\right)^n \\to e > 1$, so the series diverges. The value $\\frac{1}{e}$ belongs to the reciprocal series $\\sum \\frac{n!}{n^n}$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'ser-ent-7a',
    question: 'Which series converges conditionally?',
    options: [
      '$\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{\\ln n}$',
      '$\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{n^3}$',
      '$\\sum_{n=2}^{\\infty} (-1)^n\\frac{n}{n+5}$',
      '$\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{2^n}$',
    ],
    correctIndex: 0,
    explanation: 'The terms $\\frac{1}{\\ln n}$ decrease to $0$, so the alternating series converges, but $\\frac{1}{\\ln n} > \\frac{1}{n}$, so $\\sum \\frac{1}{\\ln n}$ diverges. The $n^3$ and $2^n$ series converge absolutely, and $\\frac{n}{n+5} \\to 1$ makes that series diverge.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ser-ent-7b',
    question: 'Which is a complete justification that $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 4}$ converges?',
    options: [
      'The terms go to $0$, so the series converges',
      'The ratio test gives $L = 1$, so it converges',
      'Positive terms below $\\frac{1}{n^2}$, a convergent $p$-series',
      'Positive terms below $\\frac{1}{n}$, which is a divergent $p$-series',
    ],
    correctIndex: 2,
    explanation: 'Direct comparison needs positive terms below the terms of a known convergent series: $0 < \\frac{1}{n^2+4} < \\frac{1}{n^2}$ and $\\sum \\frac{1}{n^2}$ converges ($p = 2$). Terms going to $0$ is not enough, $L = 1$ is inconclusive, and being below a divergent series proves nothing.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Integral Test' },
    { partNumber: 2, partTitle: 'Direct & Limit Comparison Tests' },
    { partNumber: 3, partTitle: 'The Ratio Test' },
    { partNumber: 4, partTitle: 'Types of Convergence' },
    { partNumber: 5, partTitle: 'Convergence Test Strategy' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
