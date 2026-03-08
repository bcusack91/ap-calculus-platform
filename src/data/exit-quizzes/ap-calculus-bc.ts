/**
 * AP Calculus BC Exit Quiz Question Pool
 *
 * The AP Calculus BC exam covers ALL AB content plus BC-exclusive topics:
 * advanced integration, parametric/polar/vector calculus, sequences & series,
 * power/Taylor series, and advanced differential equations.
 *
 * The diagnostic uses questions from BOTH the AB pool (for foundational content)
 * and this pool (for BC-exclusive content).
 *
 * Each question is tagged with:
 *  - `domain`    : broad diagnostic domain
 *  - `topicSlug` : specific DB topic slug for remediation
 *  - `formSet`   : 'A' | 'B' | 'both'
 */

export interface CalcBCQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

export const calcBCQuestionPool: CalcBCQuestion[] = [

  // ══════════════════════════════════════════════════════════════════
  //  1. ADVANCED INTEGRATION TECHNIQUES (BC-exclusive)
  // ══════════════════════════════════════════════════════════════════
  {
    question: '∫ x · eˣ dx = ?',
    options: ['xeˣ − eˣ + C', 'xeˣ + eˣ + C', 'eˣ(x + 1) + C', 'x²eˣ/2 + C'],
    correctAnswer: 0,
    explanation: 'Integration by parts: u = x, dv = eˣ dx. du = dx, v = eˣ. ∫x·eˣ dx = xeˣ − ∫eˣ dx = xeˣ − eˣ + C.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'integration-by-parts-calcbc',
    formSet: 'A',
  },
  {
    question: '∫ x · sin x dx = ?',
    options: ['−x cos x + sin x + C', 'x cos x − sin x + C', '−x cos x − sin x + C', 'x sin x + cos x + C'],
    correctAnswer: 0,
    explanation: 'IBP: u = x, dv = sin x dx → du = dx, v = −cos x. ∫x sin x dx = −x cos x + ∫cos x dx = −x cos x + sin x + C.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'integration-by-parts-calcbc',
    formSet: 'B',
  },
  {
    question: '∫ 1/(x² − 1) dx can be evaluated using:',
    options: ['u-substitution', 'Partial fractions', 'Trig substitution', 'Integration by parts'],
    correctAnswer: 1,
    explanation: '1/(x² − 1) = 1/[(x−1)(x+1)] which decomposes via partial fractions: A/(x−1) + B/(x+1).',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'partial-fractions-calcbc',
    formSet: 'both',
  },
  {
    question: '∫ (3x + 1)/((x + 1)(x − 2)) dx uses partial fractions. What is A + B if 3x+1 = A(x−2) + B(x+1)?',
    options: ['3', '2', '1', '4'],
    correctAnswer: 0,
    explanation: 'Set x = 2: 7 = 3B → B = 7/3. Set x = −1: −2 = −3A → A = 2/3. A + B = 2/3 + 7/3 = 3.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'partial-fractions-calcbc',
    formSet: 'A',
  },
  {
    question: 'Does ∫₁^∞ 1/x² dx converge or diverge? If it converges, what is its value?',
    options: ['Diverges', 'Converges to 1', 'Converges to 2', 'Converges to 1/2'],
    correctAnswer: 1,
    explanation: '∫₁^∞ x⁻² dx = [−1/x]₁^∞ = 0 − (−1) = 1. The integral converges to 1.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'improper-integrals-calcbc',
    formSet: 'A',
  },
  {
    question: '∫₁^∞ 1/√x dx:',
    options: ['Converges to 2', 'Converges to 1', 'Diverges', 'Converges to 1/2'],
    correctAnswer: 2,
    explanation: '∫₁^∞ x^(−1/2) dx = [2√x]₁^∞ = ∞. Since p = 1/2 < 1, the p-integral diverges.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'improper-integrals-calcbc',
    formSet: 'B',
  },
  {
    question: '∫ ln x dx = ?',
    options: ['x ln x − x + C', 'x ln x + x + C', '1/x + C', 'ln x/x + C'],
    correctAnswer: 0,
    explanation: 'IBP: u = ln x, dv = dx → du = dx/x, v = x. ∫ln x dx = x ln x − ∫x·(1/x) dx = x ln x − x + C.',
    difficulty: 'medium',
    domain: 'advanced-integration',
    topicSlug: 'integration-by-parts-calcbc',
    formSet: 'B',
  },
  {
    question: 'Which technique is best for ∫ 1/(x² + 4) dx?',
    options: ['Partial fractions', 'u-substitution with u = x² + 4', 'Trig substitution or arctan formula', 'Integration by parts'],
    correctAnswer: 2,
    explanation: '∫1/(x² + a²) dx = (1/a) arctan(x/a) + C. This uses the arctan integration formula.',
    difficulty: 'easy',
    domain: 'advanced-integration',
    topicSlug: 'advanced-integration-calcbc',
    formSet: 'A',
  },

  // ══════════════════════════════════════════════════════════════════
  //  2. PARAMETRIC, POLAR & VECTOR CALCULUS (BC-exclusive)
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'For the parametric curve x = t², y = t³, what is dy/dx?',
    options: ['3t²/2t = 3t/2', '2t/3t²', 't', '3t²'],
    correctAnswer: 0,
    explanation: 'dy/dx = (dy/dt)/(dx/dt) = 3t²/(2t) = 3t/2.',
    difficulty: 'medium',
    domain: 'parametric-polar-vector',
    topicSlug: 'parametric-curves-calculus-calcbc',
    formSet: 'A',
  },
  {
    question: 'The area enclosed by the polar curve r = 2 cos θ is:',
    options: ['π', '2π', '4π', 'π/2'],
    correctAnswer: 0,
    explanation: 'r = 2 cos θ is a circle of radius 1. Area = (1/2)∫₀^π (2cos θ)² dθ = (1/2)∫₀^π 4cos²θ dθ = 2∫₀^π (1+cos 2θ)/2 dθ = ∫₀^π (1+cos 2θ)dθ = π.',
    difficulty: 'hard',
    domain: 'parametric-polar-vector',
    topicSlug: 'polar-calculus-calcbc',
    formSet: 'A',
  },
  {
    question: 'If r(t) = ⟨cos t, sin t⟩, what is the speed |r\'(t)|?',
    options: ['0', '1', 'cos t + sin t', '√2'],
    correctAnswer: 1,
    explanation: 'r\'(t) = ⟨−sin t, cos t⟩. |r\'(t)| = √(sin²t + cos²t) = 1.',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'vector-valued-functions-calcbc',
    formSet: 'both',
  },
  {
    question: 'The arc length of the parametric curve x = 3t, y = 4t for 0 ≤ t ≤ 2 is:',
    options: ['5', '10', '25', '7'],
    correctAnswer: 1,
    explanation: 'ds = √((dx/dt)² + (dy/dt)²) dt = √(9 + 16) dt = 5 dt. Length = ∫₀² 5 dt = 10.',
    difficulty: 'medium',
    domain: 'parametric-polar-vector',
    topicSlug: 'arc-length-surface-area-calcbc',
    formSet: 'A',
  },
  {
    question: 'For the polar curve r = 1 + cos θ (cardioid), the curve passes through the origin when:',
    options: ['θ = 0', 'θ = π/2', 'θ = π', 'θ = 2π'],
    correctAnswer: 2,
    explanation: 'r = 0 when 1 + cos θ = 0 → cos θ = −1 → θ = π.',
    difficulty: 'easy',
    domain: 'parametric-polar-vector',
    topicSlug: 'polar-calculus-calcbc',
    formSet: 'B',
  },
  {
    question: 'If a particle has position r(t) = ⟨t², t³⟩, the acceleration vector at t = 1 is:',
    options: ['⟨2, 3⟩', '⟨2, 6⟩', '⟨1, 3⟩', '⟨4, 9⟩'],
    correctAnswer: 1,
    explanation: 'r\'(t) = ⟨2t, 3t²⟩, r\'\'(t) = ⟨2, 6t⟩. At t = 1: a = ⟨2, 6⟩.',
    difficulty: 'medium',
    domain: 'parametric-polar-vector',
    topicSlug: 'vector-valued-functions-calcbc',
    formSet: 'B',
  },
  {
    question: 'The area inside r = 3 sin θ and outside r = 1 + sin θ requires:',
    options: [
      'Finding intersection points and integrating the difference of r² values',
      'Just integrating r = 3 sin θ from 0 to π',
      'Using rectangular coordinates only',
      'No integration — it can be computed geometrically'
    ],
    correctAnswer: 0,
    explanation: 'For area between polar curves: A = (1/2)∫[r₁² − r₂²] dθ over the appropriate interval determined by intersection points.',
    difficulty: 'medium',
    domain: 'parametric-polar-vector',
    topicSlug: 'polar-calculus-calcbc',
    formSet: 'A',
  },

  // ══════════════════════════════════════════════════════════════════
  //  3. SEQUENCES & SERIES (BC-exclusive)
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'The series Σ(n=1 to ∞) 1/n is:',
    options: ['Convergent', 'Divergent', 'Conditionally convergent', 'Absolutely convergent'],
    correctAnswer: 1,
    explanation: 'The harmonic series Σ1/n diverges. This is a fundamental result (p-series with p = 1).',
    difficulty: 'easy',
    domain: 'sequences-series',
    topicSlug: 'infinite-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'Does the series Σ(n=1 to ∞) 1/n² converge? If so, what type of series is it?',
    options: ['Diverges', 'Converges — p-series with p = 2 > 1', 'Converges — geometric series', 'Converges — telescoping series'],
    correctAnswer: 1,
    explanation: 'Σ1/n² is a p-series with p = 2 > 1, so it converges (to π²/6, though that value is not needed for the test).',
    difficulty: 'easy',
    domain: 'sequences-series',
    topicSlug: 'infinite-series-calcbc',
    formSet: 'A',
  },
  {
    question: 'The sum of the geometric series Σ(n=0 to ∞) (1/3)ⁿ is:',
    options: ['1/2', '3/2', '3', '1/3'],
    correctAnswer: 1,
    explanation: 'Geometric series Σrⁿ (n=0 to ∞) = 1/(1−r) when |r| < 1. Here r = 1/3: S = 1/(1 − 1/3) = 3/2.',
    difficulty: 'easy',
    domain: 'sequences-series',
    topicSlug: 'infinite-series-calcbc',
    formSet: 'B',
  },
  {
    question: 'Which convergence test is most appropriate for Σ(n=1 to ∞) n!/nⁿ?',
    options: ['Comparison test', 'Ratio test', 'Integral test', 'Alternating series test'],
    correctAnswer: 1,
    explanation: 'When factorials appear, the Ratio Test is typically the best choice. aₙ₊₁/aₙ → 1/e < 1, so it converges.',
    difficulty: 'medium',
    domain: 'sequences-series',
    topicSlug: 'convergence-tests-summary-calcbc',
    formSet: 'A',
  },
  {
    question: 'The alternating series Σ(n=1 to ∞) (−1)ⁿ⁺¹/n:',
    options: ['Diverges', 'Converges absolutely', 'Converges conditionally', 'Neither converges nor diverges'],
    correctAnswer: 2,
    explanation: 'Σ(−1)ⁿ⁺¹/n is the alternating harmonic series. It converges by the Alternating Series Test, but Σ1/n diverges, so it converges conditionally.',
    difficulty: 'medium',
    domain: 'sequences-series',
    topicSlug: 'alternating-series-calcbc',
    formSet: 'A',
  },
  {
    question: 'If {aₙ} is a sequence with aₙ = (3n² + 1)/(n² − 2), then lim(n→∞) aₙ = ?',
    options: ['0', '1', '3', '∞'],
    correctAnswer: 2,
    explanation: 'Divide by n²: (3 + 1/n²)/(1 − 2/n²) → 3/1 = 3 as n → ∞.',
    difficulty: 'easy',
    domain: 'sequences-series',
    topicSlug: 'infinite-sequences-calcbc',
    formSet: 'B',
  },
  {
    question: 'By the Alternating Series Estimation Theorem, if Σ(−1)ⁿ⁺¹ bₙ has been computed through the 5th partial sum, the error is at most:',
    options: ['b₅', 'b₆', 'b₁ + b₂ + ... + b₅', 'b₅ − b₆'],
    correctAnswer: 1,
    explanation: 'The Alternating Series Estimation Theorem states the error is at most |bₙ₊₁|, the first omitted term. After 5 terms, the error ≤ b₆.',
    difficulty: 'medium',
    domain: 'sequences-series',
    topicSlug: 'alternating-series-calcbc',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  4. POWER SERIES & TAYLOR/MACLAURIN (BC-exclusive)
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'The Maclaurin series for eˣ is:',
    options: [
      'Σ xⁿ/n for n=0 to ∞',
      'Σ xⁿ/n! for n=0 to ∞',
      'Σ (−1)ⁿxⁿ/n! for n=0 to ∞',
      'Σ xⁿ for n=0 to ∞'
    ],
    correctAnswer: 1,
    explanation: 'eˣ = Σ(n=0 to ∞) xⁿ/n! = 1 + x + x²/2! + x³/3! + ... This is a fundamental series.',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'both',
  },
  {
    question: 'The radius of convergence for Σ(n=0 to ∞) xⁿ/n! is:',
    options: ['0', '1', 'e', '∞'],
    correctAnswer: 3,
    explanation: 'The ratio test gives |x|/(n+1) → 0 for any x. The series converges for all x, so R = ∞.',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'power-series-calcbc',
    formSet: 'A',
  },
  {
    question: 'The third-degree Taylor polynomial for sin x centered at 0 is:',
    options: ['x − x²/2 + x³/6', 'x − x³/6', 'x + x³/6', '1 − x²/2'],
    correctAnswer: 1,
    explanation: 'sin x = x − x³/3! + x⁵/5! − ... The third-degree polynomial is x − x³/6.',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'A',
  },
  {
    question: 'Using the Lagrange error bound, the error |Rₙ(x)| for a Taylor polynomial of degree n is at most:',
    options: [
      'M|x − a|ⁿ/n!',
      'M|x − a|ⁿ⁺¹/(n + 1)!',
      '|f⁽ⁿ⁾(a)|·|x − a|ⁿ/n!',
      'The (n+1)th term of the series'
    ],
    correctAnswer: 1,
    explanation: 'Lagrange Error Bound: |Rₙ(x)| ≤ M|x − a|ⁿ⁺¹/(n+1)! where M is the max of |f⁽ⁿ⁺¹⁾(c)| between a and x.',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'lagrange-error-bound-calcbc',
    formSet: 'both',
  },
  {
    question: 'The Maclaurin series for 1/(1 − x) is:',
    options: ['Σ xⁿ for n=0 to ∞, |x| < 1', 'Σ (−x)ⁿ for n=0 to ∞', 'Σ nxⁿ for n=0 to ∞', '1 + x + x² (finite)'],
    correctAnswer: 0,
    explanation: '1/(1−x) = Σ(n=0 to ∞) xⁿ = 1 + x + x² + x³ + ... for |x| < 1. This is the geometric series.',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'B',
  },
  {
    question: 'The interval of convergence for Σ(n=1 to ∞) xⁿ/n is:',
    options: ['(−1, 1)', '[−1, 1)', '(−1, 1]', '[−1, 1]'],
    correctAnswer: 1,
    explanation: 'Ratio test: R = 1. At x = 1: Σ1/n diverges. At x = −1: Σ(−1)ⁿ/n converges (alternating). So IOC = [−1, 1).',
    difficulty: 'hard',
    domain: 'taylor-series',
    topicSlug: 'power-series-calcbc',
    formSet: 'B',
  },
  {
    question: 'If f(x) has the Maclaurin series Σ aₙxⁿ, then f\'(0) equals:',
    options: ['a₀', 'a₁', '2a₂', 'a₁ · 1!'],
    correctAnswer: 1,
    explanation: 'In a Maclaurin series, aₙ = f⁽ⁿ⁾(0)/n!. So a₁ = f\'(0)/1! = f\'(0).',
    difficulty: 'easy',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'A',
  },
  {
    question: 'The Taylor series for cos x centered at 0, up to the x⁴ term, is:',
    options: ['1 − x²/2 + x⁴/24', '1 + x²/2 − x⁴/24', 'x − x³/6 + x⁵/120', '1 − x²/2 + x⁴/4'],
    correctAnswer: 0,
    explanation: 'cos x = 1 − x²/2! + x⁴/4! − ... = 1 − x²/2 + x⁴/24.',
    difficulty: 'medium',
    domain: 'taylor-series',
    topicSlug: 'taylor-maclaurin-series-calcbc',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  5. ADVANCED DIFFERENTIAL EQUATIONS (BC-exclusive)
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'Using Euler\'s method with step size h = 0.5, starting at (0, 1) with dy/dx = y, the approximate y(1) is:',
    options: ['2', '2.25', '2.5', 'e'],
    correctAnswer: 1,
    explanation: 'Step 1: y(0.5) ≈ 1 + 0.5(1) = 1.5. Step 2: y(1) ≈ 1.5 + 0.5(1.5) = 2.25.',
    difficulty: 'medium',
    domain: 'advanced-diffeq',
    topicSlug: 'euler-method-advanced-calcbc',
    formSet: 'A',
  },
  {
    question: 'The logistic differential equation is dP/dt = kP(1 − P/L). The carrying capacity is:',
    options: ['k', 'P', 'L', 'kP'],
    correctAnswer: 2,
    explanation: 'In the logistic model dP/dt = kP(1 − P/L), L is the carrying capacity — the maximum sustainable population.',
    difficulty: 'easy',
    domain: 'advanced-diffeq',
    topicSlug: 'logistic-models-calcbc',
    formSet: 'both',
  },
  {
    question: 'For the logistic equation dP/dt = 0.5P(1 − P/100), at what value of P is the growth rate maximum?',
    options: ['0', '25', '50', '100'],
    correctAnswer: 2,
    explanation: 'Maximum growth rate occurs at P = L/2. Here L = 100, so maximum growth is at P = 50.',
    difficulty: 'medium',
    domain: 'advanced-diffeq',
    topicSlug: 'logistic-models-calcbc',
    formSet: 'A',
  },
  {
    question: 'In Euler\'s method, decreasing the step size h will generally:',
    options: [
      'Increase accuracy but require more steps',
      'Decrease accuracy but run faster',
      'Have no effect on accuracy',
      'Always give the exact answer'
    ],
    correctAnswer: 0,
    explanation: 'Smaller step sizes produce more accurate approximations because the linear approximation is better over shorter intervals, but require more computational steps.',
    difficulty: 'easy',
    domain: 'advanced-diffeq',
    topicSlug: 'euler-method-advanced-calcbc',
    formSet: 'B',
  },
  {
    question: 'If a population follows the logistic model with L = 500, k = 0.1, and P(0) = 50, what does P approach as t → ∞?',
    options: ['0', '50', '250', '500'],
    correctAnswer: 3,
    explanation: 'In the logistic model, the population approaches the carrying capacity L = 500 as t → ∞.',
    difficulty: 'easy',
    domain: 'advanced-diffeq',
    topicSlug: 'logistic-models-calcbc',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  6. BC EXAM PREPARATION
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'Which of the following topics is tested on BC but NOT on AB?',
    options: ['Volumes of revolution', 'Integration by parts', 'L\'Hôpital\'s Rule', 'Fundamental Theorem of Calculus'],
    correctAnswer: 1,
    explanation: 'Integration by parts is a BC-exclusive topic. Volumes of revolution, L\'Hôpital\'s Rule, and the FTC are all on both AB and BC.',
    difficulty: 'easy',
    domain: 'bc-exam-prep',
    topicSlug: 'bc-exam-strategies-calcbc',
    formSet: 'both',
  },
  {
    question: 'A BC student who correctly answers all AB-content questions on the AP exam will also receive:',
    options: ['Only a BC score', 'Both BC and AB subscore', 'An AB score only', 'No subscore'],
    correctAnswer: 1,
    explanation: 'The AP Calculus BC exam reports a BC score and an AB subscore based on the AB-content portion of the exam.',
    difficulty: 'easy',
    domain: 'bc-exam-prep',
    topicSlug: 'bc-exam-strategies-calcbc',
    formSet: 'A',
  },
  {
    question: 'Which series should you be able to write from memory for the AP BC exam?',
    options: [
      'Only eˣ',
      'eˣ, sin x, cos x, and 1/(1−x)',
      'Every Taylor series in the textbook',
      'None — a formula sheet is provided'
    ],
    correctAnswer: 1,
    explanation: 'You should memorize the Maclaurin series for eˣ, sin x, cos x, and 1/(1−x). No formula sheet is provided on the AP exam.',
    difficulty: 'easy',
    domain: 'bc-exam-prep',
    topicSlug: 'review-connections-calcbc',
    formSet: 'B',
  },
]

/** Generate an exit quiz for a specific BC topic (used by exit quiz system) */
export function generateExitQuiz(topicSlug: string) {
  const questions = calcBCQuestionPool
    .filter(q => q.topicSlug === topicSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map(q => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }))

  return { topicSlug, questions }
}
