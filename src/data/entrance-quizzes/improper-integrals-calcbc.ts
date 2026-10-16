/**
 * Entrance Quiz — Improper Integrals — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Infinite Limits of Integration
  {
    id: 'ii-ent-1a',
    question: 'What is $\\int_2^{\\infty} \\frac{4}{x^3}\\,dx$?',
    options: ['$\\frac{1}{2}$', '$1$', '$2$', 'Diverges'],
    correctIndex: 0,
    explanation: 'An antiderivative is $-\\frac{2}{x^2}$, so the integral is $\\lim_{t \\to \\infty}\\left(-\\frac{2}{t^2} + \\frac{2}{4}\\right) = \\frac{1}{2}$. Forgetting to divide by 2 in the antiderivative gives $1$, and $2$ uses the lower limit $1$ instead of $2$.',
    partNumber: 1,
    partTitle: 'Infinite Limits of Integration',
  },
  {
    id: 'ii-ent-1b',
    question: 'What is $\\int_1^{\\infty} xe^{-x^2}\\,dx$?',
    options: ['$\\frac{1}{e}$', '$\\frac{e}{2}$', '$\\frac{1}{2e}$', 'Diverges'],
    correctIndex: 2,
    explanation: 'An antiderivative is $-\\frac{1}{2}e^{-x^2}$, so the integral is $\\lim_{t \\to \\infty}\\left(-\\frac{1}{2}e^{-t^2}\\right) + \\frac{1}{2}e^{-1} = \\frac{1}{2e}$. Dropping the $\\frac{1}{2}$ gives $\\frac{1}{e}$, and the integrand decays far too fast to diverge.',
    partNumber: 1,
    partTitle: 'Infinite Limits of Integration',
  },

  // Part 2 — Discontinuous Integrands (Type II)
  {
    id: 'ii-ent-2a',
    question: 'What is $\\int_0^8 x^{-1/3}\\,dx$?',
    options: ['$\\frac{8}{3}$', '$6$', 'Diverges', '$\\frac{3}{2}$'],
    correctIndex: 1,
    explanation: 'The integrand blows up at $x = 0$, so use $\\lim_{t \\to 0^+}\\left[\\frac{3}{2}x^{2/3}\\right]_t^8 = \\frac{3}{2}(4) - 0 = 6$. Since $p = \\frac{1}{3} < 1$, it converges. Using $\\frac{2}{3}$ instead of $\\frac{3}{2}$ gives $\\frac{8}{3}$.',
    partNumber: 2,
    partTitle: 'Discontinuous Integrands (Type II)',
  },
  {
    id: 'ii-ent-2b',
    question: 'Which statement about $\\int_0^3 \\frac{1}{(x - 2)^2}\\,dx$ is correct?',
    options: [
      'It equals $-\\frac{3}{2}$ by the Fundamental Theorem',
      'It equals $\\frac{3}{2}$ after taking absolute values',
      'It converges, since $(x - 2)^2$ is never negative',
      'It diverges, since the piece just right of $x = 2$ is infinite',
    ],
    correctIndex: 3,
    explanation: 'The integrand has a vertical asymptote at $x = 2$, inside the interval, so the integral must be split there; $\\int_2^3 \\frac{dx}{(x-2)^2} = \\lim_{t \\to 2^+}\\left(\\frac{1}{t-2} - 1\\right) = \\infty$. Applying the Fundamental Theorem across the asymptote gives the impossible negative value $-\\frac{3}{2}$.',
    partNumber: 2,
    partTitle: 'Discontinuous Integrands (Type II)',
  },

  // Part 3 — Convergence vs. Divergence
  {
    id: 'ii-ent-3a',
    question: 'Split at $x = 1$, the integral $\\int_0^{\\infty} \\frac{1}{x^p}\\,dx$ becomes a Type II piece and a Type I piece. For which $p > 0$ does the whole integral converge?',
    options: ['For no value of $p$', 'For $p > 1$', 'For $p < 1$', 'Only for $p = 1$'],
    correctIndex: 0,
    explanation: 'The piece on $[0, 1]$ converges only when $p < 1$, and the piece on $[1, \\infty)$ converges only when $p > 1$. No $p$ satisfies both, and $p = 1$ makes both pieces diverge.',
    partNumber: 3,
    partTitle: 'Convergence vs. Divergence',
  },
  {
    id: 'ii-ent-3b',
    question: 'What is $\\int_0^1 \\frac{1}{x^{3/4}}\\,dx$?',
    options: ['$\\frac{4}{7}$', 'Diverges', '$4$', '$-4$'],
    correctIndex: 2,
    explanation: 'This is a Type II $p$-integral with $p = \\frac{3}{4} < 1$, so it converges: $\\lim_{t \\to 0^+}\\left[4x^{1/4}\\right]_t^1 = 4$. On $[0, 1]$ the rule is the reverse of the Type I rule, and $\\frac{4}{7}$ comes from raising the exponent to $\\frac{7}{4}$ instead of $\\frac{1}{4}$.',
    partNumber: 3,
    partTitle: 'Convergence vs. Divergence',
  },

  // Part 4 — Two-Sided Integrals & Substitution
  {
    id: 'ii-ent-4a',
    question: 'What is $\\int_{-\\infty}^{\\infty} \\frac{1}{x^2 + 4}\\,dx$?',
    options: ['$\\pi$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi}{4}$', '$2\\pi$'],
    correctIndex: 1,
    explanation: 'Split at $0$. An antiderivative is $\\frac{1}{2}\\arctan\\frac{x}{2}$, and each half equals $\\frac{1}{2} \\cdot \\frac{\\pi}{2} = \\frac{\\pi}{4}$, so the total is $\\frac{\\pi}{2}$. Leaving out the $\\frac{1}{2}$ gives $\\pi$, and $\\frac{\\pi}{4}$ is only one half.',
    partNumber: 4,
    partTitle: 'Two-Sided Integrals & Substitution',
  },
  {
    id: 'ii-ent-4b',
    question: 'What is $\\int_1^{\\infty} \\frac{e^{-\\sqrt{x}}}{\\sqrt{x}}\\,dx$?',
    options: ['$\\frac{1}{e}$', '$\\frac{1}{2e}$', 'Diverges', '$\\frac{2}{e}$'],
    correctIndex: 3,
    explanation: 'With $u = \\sqrt{x}$, $du = \\frac{dx}{2\\sqrt{x}}$ and the bounds become $1$ to $\\infty$, so the integral is $2\\int_1^{\\infty} e^{-u}\\,du = \\frac{2}{e}$. Forgetting the factor 2 gives $\\frac{1}{e}$, and using $\\frac{1}{2}$ instead gives $\\frac{1}{2e}$.',
    partNumber: 4,
    partTitle: 'Two-Sided Integrals & Substitution',
  },

  // Part 5 — Special Results & AP Patterns
  {
    id: 'ii-ent-5a',
    question: 'The unbounded region under $y = e^{-x}$ for $x \\ge 0$ is revolved about the $x$-axis. What is the volume of the solid?',
    options: ['$\\frac{\\pi}{2}$', '$\\pi$', '$2\\pi$', 'Infinite'],
    correctIndex: 0,
    explanation: 'Disks give $V = \\pi\\int_0^{\\infty} e^{-2x}\\,dx = \\pi \\cdot \\frac{1}{2} = \\frac{\\pi}{2}$. Forgetting to square the radius gives $\\pi$, and an unbounded region can still have a finite volume.',
    partNumber: 5,
    partTitle: 'Special Results & AP Patterns',
  },
  {
    id: 'ii-ent-5b',
    question: 'Let $R$ be the region under $y = x^{-3/4}$ for $x \\ge 1$. What are the area of $R$ and the volume when $R$ is revolved about the $x$-axis?',
    options: [
      'Area $4$ and volume $2\\pi$',
      'Infinite area and infinite volume',
      'Infinite area, but volume $2\\pi$',
      'Area $4$, but infinite volume',
    ],
    correctIndex: 2,
    explanation: 'The area is $\\int_1^{\\infty} x^{-3/4}\\,dx$ with $p = \\frac{3}{4} \\le 1$, so it diverges. The volume is $\\pi\\int_1^{\\infty} x^{-3/2}\\,dx = \\pi \\cdot \\frac{1}{1/2} = 2\\pi$, finite because squaring the radius raises the power above 1. The value $4$ uses the Type II formula $\\frac{1}{1-p}$.',
    partNumber: 5,
    partTitle: 'Special Results & AP Patterns',
  },

  // Part 6 — Practice Workshop
  {
    id: 'ii-ent-6a',
    question: 'What is $\\int_0^2 \\frac{1}{(x - 1)^{2/3}}\\,dx$?',
    options: ['$3$', 'Diverges', '$0$', '$6$'],
    correctIndex: 3,
    explanation: 'Split at the asymptote $x = 1$. An antiderivative is $3(x - 1)^{1/3}$, and each half converges to $3$ because $p = \\frac{2}{3} < 1$, so the total is $6$. The value $3$ is only one half, and the integrand is positive, so the halves cannot cancel to $0$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'ii-ent-6b',
    question: 'What is $\\int_0^{\\infty} \\frac{1}{x^2 + 3x + 2}\\,dx$?',
    options: ['$-\\ln 2$', '$\\ln 2$', '$\\frac{1}{2}$', 'Diverges'],
    correctIndex: 1,
    explanation: 'Partial fractions give $\\frac{1}{x+1} - \\frac{1}{x+2}$, so an antiderivative is $\\ln\\frac{x+1}{x+2}$. As $t \\to \\infty$ this goes to $\\ln 1 = 0$, and at $0$ it is $\\ln\\frac{1}{2}$, so the value is $0 - \\ln\\frac{1}{2} = \\ln 2$. The integrand is positive, so a negative answer is impossible, and $\\frac{1}{2}$ evaluates the decomposed integrand instead of its antiderivative.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'ii-ent-7a',
    question: 'What is $\\int_{-\\infty}^{0} xe^{x}\\,dx$?',
    options: ['$1$', '$0$', '$-1$', 'Diverges'],
    correctIndex: 2,
    explanation: 'Integration by parts gives the antiderivative $(x - 1)e^x$, which is $-1$ at $x = 0$ and tends to $0$ as $x \\to -\\infty$ because $e^x$ shrinks faster than $x$ grows. So the value is $-1$, negative because $x < 0$ on the whole interval.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ii-ent-7b',
    question: 'Which improper integral converges?',
    options: [
      '$\\int_0^1 \\frac{dx}{\\sqrt[3]{x}}$',
      '$\\int_1^{\\infty} \\frac{dx}{\\sqrt[3]{x}}$',
      '$\\int_0^1 \\frac{dx}{x^3}$',
      '$\\int_0^{\\infty} \\frac{dx}{x^2}$',
    ],
    correctIndex: 0,
    explanation: 'On $[0, 1]$ the integrand $x^{-1/3}$ has $p = \\frac{1}{3} < 1$, so it converges to $\\frac{3}{2}$. The same integrand diverges on $[1, \\infty)$, $x^{-3}$ diverges on $[0, 1]$, and $\\int_0^{\\infty} x^{-2}\\,dx$ fails on its piece near $0$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Infinite Limits of Integration' },
    { partNumber: 2, partTitle: 'Discontinuous Integrands (Type II)' },
    { partNumber: 3, partTitle: 'Convergence vs. Divergence' },
    { partNumber: 4, partTitle: 'Two-Sided Integrals & Substitution' },
    { partNumber: 5, partTitle: 'Special Results & AP Patterns' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
