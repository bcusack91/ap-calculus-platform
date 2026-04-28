/**
 * Entrance Quiz — Estimating Limits from Tables
 *
 * 8 questions, 2 per lesson part.
 * Strictly scoped to the *table-based* method:
 *  - Why/when to use tables
 *  - Building a two-sided table
 *  - Reading DNE from tables (jump, blow-up, oscillation patterns)
 *  - Pitfalls (precision, oscillation traps, table-vs-proof)
 *
 * NOT covered here: graphical reading, algebraic factoring/rationalizing,
 * formal continuity tests.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Why use a numerical table?
  {
    id: 'elt-ent-1a',
    question: 'Which set of $x$-values is BEST for estimating $\\lim_{x \\to 3} f(x)$?',
    options: [
      '$\\{0, 1, 2\\}$',
      '$\\{2.9, 2.99, 2.999, 3.001, 3.01, 3.1\\}$',
      '$\\{3, 3, 3, 3\\}$',
      '$\\{2, 2.5, 4, 4.5\\}$',
    ],
    correctIndex: 1,
    explanation: 'Approach $a = 3$ from BOTH sides with values that get closer (powers of 10). Never include $x = 3$.',
    partNumber: 1,
    partTitle: 'Why use a numerical table?',
  },
  {
    id: 'elt-ent-1b',
    question: 'A table is MOST useful for estimating a limit when:',
    options: [
      'Direct substitution gives a clear number',
      'Direct substitution gives an indeterminate form like $0/0$',
      'The function is a polynomial',
      'The function equals 0 at $x = a$',
    ],
    correctIndex: 1,
    explanation: 'When substitution fails, a numerical table is a quick first estimate of what the function is approaching.',
    partNumber: 1,
    partTitle: 'Why use a numerical table?',
  },

  // Part 2 — Building a two-sided table
  {
    id: 'elt-ent-2a',
    question: 'Table for $\\lim_{x \\to 1} f(x)$: $f(0.99)=1.99$, $f(0.999)=1.999$, $f(1.001)=2.001$, $f(1.01)=2.01$. Best estimate?',
    options: ['$1$', '$2$', '$1.999$', 'DNE'],
    correctIndex: 1,
    explanation: 'Both sides settle on 2. The estimate is $L \\approx 2$.',
    partNumber: 2,
    partTitle: 'Building a Two-Sided Table',
  },
  {
    id: 'elt-ent-2b',
    question: 'A table shows outputs $0.49998, 0.499998, 0.500002, 0.50002$. The limit is best read as:',
    options: ['$0.5$', '$0.49998$', '$5$', 'DNE'],
    correctIndex: 0,
    explanation: 'The digits clearly converge on $1/2 = 0.5$ from both sides.',
    partNumber: 2,
    partTitle: 'Building a Two-Sided Table',
  },

  // Part 3 — Recognizing DNE from a table
  {
    id: 'elt-ent-3a',
    question: 'Table: $f(-0.01) = -1$, $f(-0.001) = -1$, $f(0.001) = 1$, $f(0.01) = 1$. Conclusion?',
    options: [
      'Limit equals 0',
      'Limit equals $-1$',
      'Limit DNE — jump from $-1$ to $+1$',
      'Limit equals 1',
    ],
    correctIndex: 2,
    explanation: 'Two finite, disagreeing one-sided limits — classic jump. Two-sided limit DNE.',
    partNumber: 3,
    partTitle: 'Recognizing DNE from a Table',
  },
  {
    id: 'elt-ent-3b',
    question: 'Table: $f(0.1)=100$, $f(0.01)=10000$, $f(-0.01)=10000$, $f(-0.1)=100$. This shows:',
    options: [
      'Limit equals 100',
      'Both sides blow up to $+\\infty$ — limit does not exist as a finite value',
      'Jump',
      'Oscillation',
    ],
    correctIndex: 1,
    explanation: 'Magnitudes grow by factor 100 as $|x|$ shrinks by factor 10 — unbounded growth on both sides. Like $1/x^2$.',
    partNumber: 3,
    partTitle: 'Recognizing DNE from a Table',
  },

  // Part 4 — Pitfalls
  {
    id: 'elt-ent-4a',
    question: 'A student computes $\\dfrac{1 - \\cos(10^{-9})}{(10^{-9})^2}$ on a calculator and gets 0. The likely explanation is:',
    options: [
      'The true limit is 0',
      'Catastrophic cancellation — finite precision rounded the numerator to 0',
      'The function blows up',
      'The function oscillates',
    ],
    correctIndex: 1,
    explanation: 'For very small $x$, $1 - \\cos x$ underflows in finite precision. The true limit is $1/2$.',
    partNumber: 4,
    partTitle: 'Common Pitfalls',
  },
  {
    id: 'elt-ent-4b',
    question: 'On the AP exam, a numerical table is sufficient to:',
    options: [
      'Prove the limit equals a specific value',
      'Estimate a limit and provide numerical evidence',
      'Replace algebraic justification entirely',
      'Find derivatives directly',
    ],
    correctIndex: 1,
    explanation: 'Tables provide estimates and evidence; for full credit on "find" / "justify" prompts, pair with algebra or theorems.',
    partNumber: 4,
    partTitle: 'Common Pitfalls',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Why use a numerical table?' },
    { partNumber: 2, partTitle: 'Building a Two-Sided Table' },
    { partNumber: 3, partTitle: 'Recognizing DNE from a Table' },
    { partNumber: 4, partTitle: 'Common Pitfalls' },
  ]
}
