/**
 * Entrance Quiz — Review & Connections (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Connecting Derivatives & Integrals
  { id: 'rc-ent-1a', question: 'The Fundamental Theorem of Calculus connects:', options: ['Limits and continuity', 'Differentiation and integration', 'Series and sequences', 'Vectors and scalars'], correctIndex: 1, explanation: 'FTC links derivatives and integrals as inverse operations.', partNumber: 1, partTitle: 'Connecting Derivatives & Integrals' },
  { id: 'rc-ent-1b', question: 'If $F\'(x) = f(x)$, then $\\int_a^b f(x)\\,dx =$', options: ['$f(b)$', '$F(b) - F(a)$', '$F\'(b) - F\'(a)$', '$f(b) - f(a)$'], correctIndex: 1, explanation: 'FTC Part 2: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.', partNumber: 1, partTitle: 'Connecting Derivatives & Integrals' },

  // Part 2: Series & Function Approximation
  { id: 'rc-ent-2a', question: 'Taylor series connect to derivatives because the coefficients are:', options: ['Random constants', '$\\frac{f^{(n)}(a)}{n!}$', 'Always $1$', 'The integrals of $f$'], correctIndex: 1, explanation: 'Each coefficient encodes the $n$th derivative at the center.', partNumber: 2, partTitle: 'Series & Function Approximation' },
  { id: 'rc-ent-2b', question: 'A Taylor polynomial of degree $n$ matches $f$ and its first $n$ derivatives at:', options: ['Every point', 'The center $x = a$', 'The endpoints', 'Infinitely many points'], correctIndex: 1, explanation: '$T_n$ and $f$ agree through the $n$th derivative at $x = a$.', partNumber: 2, partTitle: 'Series & Function Approximation' },

  // Part 3: Parametric Polar & Vector Connections
  { id: 'rc-ent-3a', question: 'Parametric, polar, and vector representations all describe:', options: ['Only straight lines', 'Curves in the plane (or space) using different coordinate systems', 'Only circles', 'Only series'], correctIndex: 1, explanation: 'They are different ways to represent curves.', partNumber: 3, partTitle: 'Parametric Polar & Vector Connections' },
  { id: 'rc-ent-3b', question: 'Speed for parametric and vector motion is computed the same way:', options: ['True: $|\\vec{v}| = \\sqrt{(x\')^2 + (y\')^2}$', 'False: they use different formulas', 'Only for circles', 'Only in polar'], correctIndex: 0, explanation: 'Speed = magnitude of velocity vector, regardless of representation.', partNumber: 3, partTitle: 'Parametric Polar & Vector Connections' },

  // Part 4: Differential Equations & Modeling
  { id: 'rc-ent-4a', question: 'Differential equations model situations where:', options: ['The answer is known', 'The rate of change depends on current state', 'Nothing changes', 'Derivatives don\'t exist'], correctIndex: 1, explanation: 'DEs express how a quantity changes based on its current value.', partNumber: 4, partTitle: 'Differential Equations & Modeling' },
  { id: 'rc-ent-4b', question: 'The logistic model extends the exponential model by adding:', options: ['A derivative', 'A carrying capacity', 'A constant', 'An integral'], correctIndex: 1, explanation: 'Logistic adds the limiting factor $(1 - P/L)$.', partNumber: 4, partTitle: 'Differential Equations & Modeling' },

  // Part 5: Cross-Topic Problem Solving
  { id: 'rc-ent-5a', question: 'A problem that combines integration and series might ask you to:', options: ['Only factor polynomials', 'Evaluate an integral by substituting a Taylor series', 'Only take derivatives', 'Only graph'], correctIndex: 1, explanation: 'Series representation enables integration of non-elementary functions.', partNumber: 5, partTitle: 'Cross-Topic Problem Solving' },
  { id: 'rc-ent-5b', question: 'Connecting arc length (parametric) to series: you might need to:', options: ['Only find $R$', 'Set up arc length integral and approximate with a Taylor polynomial', 'Only graph', 'Use only u-substitution'], correctIndex: 1, explanation: 'Arc length integrals often need numerical/series approximation.', partNumber: 5, partTitle: 'Cross-Topic Problem Solving' },

  // Part 6: Problem-Solving Workshop
  { id: 'rc-ent-6a', question: 'The \'big picture\' of BC calculus is that everything connects through:', options: ['Memorization', 'Limits — the foundation of derivatives, integrals, and series', 'Only algebra', 'Only geometry'], correctIndex: 1, explanation: 'Limits underpin derivatives (limit of difference quotient), integrals (limit of Riemann sums), and series (limit of partial sums).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'rc-ent-6b', question: 'When a problem seems unfamiliar, the best approach is:', options: ['Panic', 'Identify what type of problem it is (rate, accumulation, series, etc.) and apply known techniques', 'Guess', 'Skip it'], correctIndex: 1, explanation: 'Classify the problem type, then apply the appropriate calculus tools.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Comprehensive Final Review
  { id: 'rc-ent-7a', question: 'A well-prepared BC student should be able to:', options: ['Only do multiple choice', 'Solve problems combining multiple calculus concepts', 'Only do computational problems', 'Only memorize formulas'], correctIndex: 1, explanation: 'The exam tests the ability to connect and apply concepts.', partNumber: 7, partTitle: 'Comprehensive Final Review' },
  { id: 'rc-ent-7b', question: 'The most common source of errors on the BC exam is:', options: ['Calculator issues', 'Careless algebra and sign errors', 'Not knowing any calculus', 'Writing too much'], correctIndex: 1, explanation: 'Careful algebra and attention to signs are essential.', partNumber: 7, partTitle: 'Comprehensive Final Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Connecting Derivatives & Integrals' },
    { partNumber: 2, partTitle: 'Series & Function Approximation' },
    { partNumber: 3, partTitle: 'Parametric Polar & Vector Connections' },
    { partNumber: 4, partTitle: 'Differential Equations & Modeling' },
    { partNumber: 5, partTitle: 'Cross-Topic Problem Solving' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Comprehensive Final Review' },
  ]
}
