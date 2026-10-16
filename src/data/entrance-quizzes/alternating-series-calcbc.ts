/**
 * Entrance Quiz — Alternating Series — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Foundations
  {
    id: 'as-ent-1a',
    question: 'Which series satisfies all three conditions of the alternating series test?',
    options: [
      '$\\sum (-1)^n \\frac{n}{n+3}$',
      '$\\sum (-1)^n \\frac{n}{n^2+3}$',
      '$\\sum (-1)^n \\frac{2^n}{n^2}$',
      '$\\sum (-1)^n n$',
    ],
    correctIndex: 1,
    explanation: 'For $b_n = \\frac{n}{n^2+3}$, the terms are positive, decrease once $n \\ge 2$ (the derivative of $\\frac{x}{x^2+3}$ is $\\frac{3 - x^2}{(x^2+3)^2}$), and approach $0$. In the other series $b_n$ tends to $1$ or grows without bound, so the limit condition fails.',
    partNumber: 1,
    partTitle: 'Foundations',
  },
  {
    id: 'as-ent-1b',
    question: 'For which $n$ are the terms $b_n = \\frac{\\sqrt{n}}{n + 4}$ decreasing?',
    options: ['$n \\ge 4$', '$n \\ge 1$', '$n \\ge 16$', 'Never, since $b_n$ keeps increasing'],
    correctIndex: 0,
    explanation: 'With $f(x) = \\frac{\\sqrt{x}}{x+4}$, the quotient rule gives $f\'(x) = \\frac{4 - x}{2\\sqrt{x}(x+4)^2}$, which is negative for $x > 4$. So the terms rise up to $n = 4$ and then decrease, which is enough for the alternating series test.',
    partNumber: 1,
    partTitle: 'Foundations',
  },

  // Part 2 — The Alternating Series Remainder
  {
    id: 'as-ent-2a',
    question: 'The sum $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n \\cdot 2^n}$ is approximated by its first four terms. What is the alternating series error bound?',
    options: ['$\\frac{1}{64}$', '$\\frac{1}{32}$', '$\\frac{1}{160}$', '$\\frac{1}{192}$'],
    correctIndex: 2,
    explanation: 'The error is at most the first omitted term, $b_5 = \\frac{1}{5 \\cdot 2^5} = \\frac{1}{160}$. The value $\\frac{1}{64}$ is the last term used, $b_4$, and $\\frac{1}{192}$ is $b_6$.',
    partNumber: 2,
    partTitle: 'The Alternating Series Remainder',
  },
  {
    id: 'as-ent-2b',
    question: 'How many terms of $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{(2n+1)^2}$ guarantee an error less than $0.001$?',
    options: ['$14$', '$16$', '$31$', '$15$'],
    correctIndex: 3,
    explanation: 'After $N$ terms the error is at most $b_{N+1} = \\frac{1}{(2N+3)^2}$, which is below $0.001$ when $2N + 3 > \\sqrt{1000} \\approx 31.6$, that is $2N + 3 \\ge 33$, so $N = 15$. With $14$ terms the bound is $\\frac{1}{961}$, which is still too large.',
    partNumber: 2,
    partTitle: 'The Alternating Series Remainder',
  },

  // Part 3 — Classification of Alternating Series
  {
    id: 'as-ent-3a',
    question: 'The series $\\sum_{n=1}^{\\infty} \\frac{x^n}{\\sqrt{n} \\cdot 2^n}$ converges for $|x| < 2$. How does it behave at the endpoints?',
    options: [
      'Converges conditionally at $x = -2$ and diverges at $x = 2$',
      'Converges absolutely at both $x = -2$ and $x = 2$',
      'Diverges at $x = -2$, converges conditionally at $x = 2$',
      'Converges conditionally at both $x = -2$ and $x = 2$',
    ],
    correctIndex: 0,
    explanation: 'At $x = -2$ the series is $\\sum \\frac{(-1)^n}{\\sqrt{n}}$, which converges by the alternating series test but not absolutely. At $x = 2$ it is $\\sum \\frac{1}{\\sqrt{n}}$, a $p$-series with $p = \\frac{1}{2}$, which diverges.',
    partNumber: 3,
    partTitle: 'Classification of Alternating Series',
  },
  {
    id: 'as-ent-3b',
    question: 'For which values of $p$ does $\\sum_{n=1}^{\\infty} (-1)^n n^p$ diverge?',
    options: ['$p > 0$', '$p \\ge 0$', '$p > 1$', '$p \\ge 1$'],
    correctIndex: 1,
    explanation: 'The terms have size $n^p$, which does not approach $0$ when $p \\ge 0$ (at $p = 0$ the terms are $\\pm 1$), so the series diverges. For $p < 0$ the sizes decrease to $0$ and the alternating series test gives convergence. Leaving out $p = 0$ misses $\\sum (-1)^n$.',
    partNumber: 3,
    partTitle: 'Classification of Alternating Series',
  },

  // Part 4 — Alternating Series in Taylor/Maclaurin Context
  {
    id: 'as-ent-4a',
    question: 'The value $e^{-0.2}$ is approximated by $1 - 0.2 + \\frac{(0.2)^2}{2}$, the first three terms of its Maclaurin series. What is the alternating series error bound?',
    options: ['$\\frac{(0.2)^2}{2}$', '$\\frac{(0.2)^4}{24}$', '$\\frac{(0.2)^3}{6}$', '$(0.2)^3$'],
    correctIndex: 2,
    explanation: 'With $x = 0.2 > 0$, the series $\\sum \\frac{(-0.2)^n}{n!}$ alternates with decreasing terms, so the error is at most the first omitted term, $\\frac{(0.2)^3}{3!}$. The value $\\frac{(0.2)^2}{2}$ is the last term used, and $(0.2)^3$ forgets the factorial.',
    partNumber: 4,
    partTitle: 'Alternating Series in Taylor/Maclaurin Context',
  },
  {
    id: 'as-ent-4b',
    question: 'A Maclaurin polynomial for $\\ln(1 + x)$ is used to approximate $\\ln(0.5)$, that is, at $x = -0.5$. Which error bound can be used?',
    options: [
      'The alternating series bound, since the series alternates',
      'No bound, since $x = -0.5$ is outside the interval',
      'The alternating bound, using the first term left out',
      'The Lagrange bound, since every term has the same sign here',
    ],
    correctIndex: 3,
    explanation: 'The series $\\sum \\frac{(-1)^{n+1}x^n}{n}$ at $x = -0.5$ has terms $-\\frac{(0.5)^n}{n}$, all negative, so it does not alternate and the Lagrange bound is needed. The point $x = -0.5$ is inside the interval $-1 < x \\le 1$.',
    partNumber: 4,
    partTitle: 'Alternating Series in Taylor/Maclaurin Context',
  },

  // Part 5 — FRQ & MC Techniques
  {
    id: 'as-ent-5a',
    question: 'For $S = \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^3}$, does the partial sum $S_5$ lie above or below $S$?',
    options: [
      'Under $S$, since the last term used is negative',
      'Over $S$, since an odd number of terms were used',
      'Over $S$, as the very first term is negative too',
      'Exactly at $S$, since the series converges absolutely',
    ],
    correctIndex: 0,
    explanation: 'The partial sums move past $S$ each time, so the sign of the last term used decides: the fifth term is $-\\frac{1}{125}$, so $S_5$ lands below $S$. The rule "odd number of terms means overestimate" holds only when the first term is positive, and here it is negative.',
    partNumber: 5,
    partTitle: 'FRQ & MC Techniques',
  },
  {
    id: 'as-ent-5b',
    question: 'Which statement is a complete justification that $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\ln(n + 1)}$ converges?',
    options: [
      'The series alternates and its terms $\\frac{1}{\\ln(n+1)}$ approach $0$, so the AST applies',
      'The terms $\\frac{1}{\\ln(n+1)}$ are positive and decrease to $0$, so the AST applies',
      'The terms $\\frac{1}{\\ln(n+1)}$ are positive and decrease, so the AST applies',
      'The terms $\\frac{1}{\\ln(n+1)}$ are positive and decrease to $0$, so it converges absolutely',
    ],
    correctIndex: 1,
    explanation: 'Full credit verifies all three conditions of the alternating series test and then concludes. Leaving out "decreasing" or the limit of $0$ is incomplete, and the series does not converge absolutely because $\\sum \\frac{1}{\\ln(n+1)}$ diverges by comparison with the harmonic series.',
    partNumber: 5,
    partTitle: 'FRQ & MC Techniques',
  },

  // Part 6 — Mixed Practice
  {
    id: 'as-ent-6a',
    question: 'For $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{3^n}$, what are $S_3$ and its alternating series error bound?',
    options: [
      '$S_3 = \\frac{13}{27}$, error at most $\\frac{1}{81}$',
      '$S_3 = \\frac{7}{27}$, error at most $\\frac{1}{27}$',
      '$S_3 = \\frac{7}{27}$, error at most $\\frac{1}{81}$',
      '$S_3 = \\frac{7}{27}$, error at most $\\frac{1}{243}$',
    ],
    correctIndex: 2,
    explanation: '$S_3 = \\frac{1}{3} - \\frac{1}{9} + \\frac{1}{27} = \\frac{7}{27}$, and the error is at most the fourth term, $\\frac{1}{81}$. Adding every term gives $\\frac{13}{27}$, $\\frac{1}{27}$ is the last term used, and $\\frac{1}{243}$ skips a term.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'as-ent-6b',
    question: 'How does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n + \\ln n}$ behave?',
    options: [
      'Absolutely convergent, by comparison with $\\frac{1}{n^2}$',
      'Divergent, by limit comparison with $\\frac{1}{n}$',
      'Divergent, since $\\ln n$ grows without bound',
      'Conditionally convergent',
    ],
    correctIndex: 3,
    explanation: 'The sizes $\\frac{1}{n + \\ln n}$ are positive, decrease, and approach $0$, so the alternating series test gives convergence. Limit comparison with $\\frac{1}{n}$ shows only that the absolute series diverges, so the convergence is conditional; the terms are larger than $\\frac{1}{n^2}$, so that comparison fails.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },

  // Part 7 — Full Topic Review
  {
    id: 'as-ent-7a',
    question: 'The sum of $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2 + 1}$ is approximated by $S_3$. What is the alternating series error bound?',
    options: ['$\\frac{1}{17}$', '$\\frac{1}{10}$', '$\\frac{1}{26}$', '$\\frac{1}{16}$'],
    correctIndex: 0,
    explanation: 'The first omitted term is $b_4 = \\frac{1}{4^2 + 1} = \\frac{1}{17}$. The value $\\frac{1}{10}$ is the last term used, $\\frac{1}{26}$ is $b_5$, and $\\frac{1}{16}$ drops the $+1$.',
    partNumber: 7,
    partTitle: 'Full Topic Review',
  },
  {
    id: 'as-ent-7b',
    question: 'An alternating series satisfies all the conditions of the alternating series test and has sum $S$. Which statement is always true?',
    options: [
      'Its partial sums increase steadily toward $S$',
      'The error after $N$ terms equals $b_{N+1}$ exactly',
      'Consecutive partial sums bracket $S$',
      'It converges absolutely, since $b_n$ decreases to $0$',
    ],
    correctIndex: 2,
    explanation: 'Each new term overshoots and then corrects, so $S$ always lies between two consecutive partial sums, which is why the error is at most $b_{N+1}$ (not exactly $b_{N+1}$). The partial sums are not monotone, and $\\sum \\frac{(-1)^n}{n}$ meets the test without converging absolutely.',
    partNumber: 7,
    partTitle: 'Full Topic Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Foundations' },
    { partNumber: 2, partTitle: 'The Alternating Series Remainder' },
    { partNumber: 3, partTitle: 'Classification of Alternating Series' },
    { partNumber: 4, partTitle: 'Alternating Series in Taylor/Maclaurin Context' },
    { partNumber: 5, partTitle: 'FRQ & MC Techniques' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
    { partNumber: 7, partTitle: 'Full Topic Review' },
  ]
}
