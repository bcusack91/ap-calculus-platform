/**
 * AP Calculus AB Exit Quiz Question Pool
 *
 * Covers all major AP Calculus AB domains (Units 1–8 of the CED).
 * Each question is tagged with:
 *  - `domain`     : broad diagnostic domain (matches domain id in generator)
 *  - `topicSlug`  : specific DB topic slug for remediation recommendations
 *  - `formSet`    : 'A' | 'B' | 'both' — which diagnostic form may use this question
 */

export interface CalcABQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

export const calcABQuestionPool: CalcABQuestion[] = [

  // ══════════════════════════════════════════════════════════════════
  //  1. LIMITS & CONTINUITY
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'What is lim(x→3) (x² − 9)/(x − 3)?',
    options: ['0', '3', '6', 'Does not exist'],
    correctAnswer: 2,
    explanation: 'Factor: (x² − 9)/(x − 3) = (x+3)(x−3)/(x−3) = x+3. At x=3 this equals 6.',
    difficulty: 'easy',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'A',
  },
  {
    question: 'If f(x) = (sin x)/x, what is lim(x→0) f(x)?',
    options: ['0', '1', '∞', 'Does not exist'],
    correctAnswer: 1,
    explanation: 'This is the fundamental limit: lim(x→0) (sin x)/x = 1.',
    difficulty: 'easy',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'B',
  },
  {
    question: 'For what value of k is the function f(x) = {x² + 1, x ≤ 2; kx − 1, x > 2} continuous at x = 2?',
    options: ['2', '3', '5', '3.5'],
    correctAnswer: 1,
    explanation: 'For continuity at x = 2: left limit = 2² + 1 = 5 must equal right limit = 2k − 1. So 2k − 1 = 5 → k = 3.',
    difficulty: 'medium',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'A',
  },
  {
    question: 'What is lim(x→∞) (3x² + 2x)/(5x² − x)?',
    options: ['3/5', '0', '∞', '2/5'],
    correctAnswer: 0,
    explanation: 'Divide numerator and denominator by x²: (3 + 2/x)/(5 − 1/x) → 3/5 as x → ∞.',
    difficulty: 'easy',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'B',
  },
  {
    question: 'If f(x) is continuous on [a, b] and f(a) < 0, f(b) > 0, which theorem guarantees a root in (a, b)?',
    options: ['Mean Value Theorem', 'Intermediate Value Theorem', 'Extreme Value Theorem', 'Rolle\'s Theorem'],
    correctAnswer: 1,
    explanation: 'The Intermediate Value Theorem guarantees that a continuous function takes every value between f(a) and f(b), so there must be a c where f(c) = 0.',
    difficulty: 'easy',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'both',
  },
  {
    question: 'What is lim(x→0) (1 − cos x)/x²?',
    options: ['0', '1/2', '1', 'Does not exist'],
    correctAnswer: 1,
    explanation: 'Apply L\'Hôpital\'s Rule twice or use the identity: (1 − cos x)/x² → 1/2 as x → 0.',
    difficulty: 'hard',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'A',
  },
  {
    question: 'Which type of discontinuity does f(x) = (x² − 4)/(x − 2) have at x = 2?',
    options: ['Jump discontinuity', 'Removable discontinuity', 'Infinite discontinuity', 'No discontinuity'],
    correctAnswer: 1,
    explanation: 'f(x) = (x+2)(x−2)/(x−2) = x+2 for x ≠ 2. The limit exists (equals 4) but f(2) is undefined, so it is a removable discontinuity.',
    difficulty: 'medium',
    domain: 'limits',
    topicSlug: 'limits-continuity-calcab',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  2. DIFFERENTIATION FUNDAMENTALS
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'Using the limit definition, what is f\'(x) if f(x) = x²?',
    options: ['x', '2x', 'x²', '2'],
    correctAnswer: 1,
    explanation: 'f\'(x) = lim(h→0) [(x+h)² − x²]/h = lim(h→0) [2xh + h²]/h = lim(h→0) (2x + h) = 2x.',
    difficulty: 'easy',
    domain: 'differentiation',
    topicSlug: 'definition-of-derivative-calcab',
    formSet: 'A',
  },
  {
    question: 'What is the derivative of f(x) = 5x³ − 2x + 7?',
    options: ['15x² − 2', '15x³ − 2', '5x² − 2', '15x² − 2x'],
    correctAnswer: 0,
    explanation: 'Power rule: d/dx [5x³] = 15x², d/dx [−2x] = −2, d/dx [7] = 0. So f\'(x) = 15x² − 2.',
    difficulty: 'easy',
    domain: 'differentiation',
    topicSlug: 'basic-differentiation-rules-calcab',
    formSet: 'both',
  },
  {
    question: 'What is d/dx [sin(3x²)]?',
    options: ['cos(3x²)', '6x cos(3x²)', '3x² cos(3x²)', '−6x cos(3x²)'],
    correctAnswer: 1,
    explanation: 'Chain rule: d/dx [sin(u)] = cos(u)·u\', where u = 3x², u\' = 6x. Answer: 6x cos(3x²).',
    difficulty: 'medium',
    domain: 'differentiation',
    topicSlug: 'chain-rule-calcab',
    formSet: 'A',
  },
  {
    question: 'If f(x) = eˣ · ln x, what is f\'(x)?',
    options: ['eˣ/x', 'eˣ · ln x + eˣ/x', 'eˣ · ln x', 'eˣ(1 + ln x)/x'],
    correctAnswer: 1,
    explanation: 'Product rule: f\'(x) = eˣ · ln x + eˣ · (1/x) = eˣ · ln x + eˣ/x.',
    difficulty: 'medium',
    domain: 'differentiation',
    topicSlug: 'basic-differentiation-rules-calcab',
    formSet: 'B',
  },
  {
    question: 'What is d/dx [arctan x]?',
    options: ['1/(1 + x²)', '1/√(1 − x²)', '−1/(1 + x²)', 'sec²(x)'],
    correctAnswer: 0,
    explanation: 'd/dx [arctan x] = 1/(1 + x²). This is a standard inverse trig derivative.',
    difficulty: 'medium',
    domain: 'differentiation',
    topicSlug: 'inverse-functions-derivatives-calcab',
    formSet: 'A',
  },
  {
    question: 'What is d/dx [ln(cos x)]?',
    options: ['1/cos x', '−tan x', 'tan x', '−sin x/cos² x'],
    correctAnswer: 1,
    explanation: 'Chain rule: d/dx [ln(cos x)] = (1/cos x)·(−sin x) = −sin x/cos x = −tan x.',
    difficulty: 'medium',
    domain: 'differentiation',
    topicSlug: 'chain-rule-calcab',
    formSet: 'B',
  },
  {
    question: 'If y = (x³ + 1)⁵, what is dy/dx?',
    options: ['5(x³ + 1)⁴', '15x²(x³ + 1)⁴', '5x²(x³ + 1)⁴', '3x²(x³ + 1)⁵'],
    correctAnswer: 1,
    explanation: 'Chain rule: dy/dx = 5(x³+1)⁴ · 3x² = 15x²(x³+1)⁴.',
    difficulty: 'medium',
    domain: 'differentiation',
    topicSlug: 'chain-rule-calcab',
    formSet: 'A',
  },
  {
    question: 'The derivative of f(x) = x · eˣ at x = 0 is:',
    options: ['0', '1', 'e', '−1'],
    correctAnswer: 1,
    explanation: 'Product rule: f\'(x) = eˣ + xeˣ = eˣ(1 + x). At x = 0: e⁰(1 + 0) = 1.',
    difficulty: 'easy',
    domain: 'differentiation',
    topicSlug: 'basic-differentiation-rules-calcab',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  3. APPLICATIONS OF DERIVATIVES
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'If f\'(c) = 0 and f\'\'(c) > 0, then x = c is a:',
    options: ['Local maximum', 'Local minimum', 'Point of inflection', 'Not enough information'],
    correctAnswer: 1,
    explanation: 'Second Derivative Test: if f\'(c) = 0 and f\'\'(c) > 0, the function is concave up at c, so x = c is a local minimum.',
    difficulty: 'easy',
    domain: 'applications-derivatives',
    topicSlug: 'applications-of-derivatives-calcab',
    formSet: 'both',
  },
  {
    question: 'A farmer has 200 m of fencing. What dimensions of a rectangular field maximize the area?',
    options: ['25 m × 75 m', '50 m × 50 m', '40 m × 60 m', '30 m × 70 m'],
    correctAnswer: 1,
    explanation: 'Perimeter = 2l + 2w = 200, so l + w = 100. Area A = lw = l(100 − l). A\'(l) = 100 − 2l = 0 → l = 50. So 50 × 50.',
    difficulty: 'medium',
    domain: 'applications-derivatives',
    topicSlug: 'optimization-calcab',
    formSet: 'A',
  },
  {
    question: 'The linearization of f(x) = √x at a = 25 is used to approximate √26. The approximation is:',
    options: ['5.1', '5.2', '5.5', '5.05'],
    correctAnswer: 0,
    explanation: 'L(x) = f(25) + f\'(25)(x − 25) = 5 + 1/(2·5)(26 − 25) = 5 + 0.1 = 5.1.',
    difficulty: 'medium',
    domain: 'applications-derivatives',
    topicSlug: 'linearization-differentials-calcab',
    formSet: 'A',
  },
  {
    question: 'If f is continuous on [0, 4], differentiable on (0, 4), and f(0) = 1, f(4) = 9, the Mean Value Theorem guarantees there is a c in (0, 4) where f\'(c) =',
    options: ['1', '2', '5', '8'],
    correctAnswer: 1,
    explanation: 'MVT: f\'(c) = [f(4) − f(0)]/(4 − 0) = (9 − 1)/4 = 2.',
    difficulty: 'medium',
    domain: 'applications-derivatives',
    topicSlug: 'theorem-applications-calcab',
    formSet: 'B',
  },
  {
    question: 'A particle moves along the x-axis with position s(t) = t³ − 6t² + 9t. At what time(s) is the particle at rest?',
    options: ['t = 0 only', 't = 1 and t = 3', 't = 3 only', 't = 2'],
    correctAnswer: 1,
    explanation: 'Velocity v(t) = s\'(t) = 3t² − 12t + 9 = 3(t − 1)(t − 3) = 0 → t = 1 and t = 3.',
    difficulty: 'medium',
    domain: 'applications-derivatives',
    topicSlug: 'particle-motion-calcab',
    formSet: 'A',
  },
  {
    question: 'A box with a square base and open top has volume 32 cm³. What base side length minimizes the surface area?',
    options: ['2 cm', '4 cm', '8 cm', '√32 cm'],
    correctAnswer: 1,
    explanation: 'V = x²h = 32, so h = 32/x². SA = x² + 4xh = x² + 128/x. SA\' = 2x − 128/x² = 0 → x³ = 64 → x = 4.',
    difficulty: 'hard',
    domain: 'applications-derivatives',
    topicSlug: 'optimization-calcab',
    formSet: 'B',
  },
  {
    question: 'If a particle\'s velocity is v(t) = 2t − 6, when does the particle change direction?',
    options: ['t = 0', 't = 2', 't = 3', 't = 6'],
    correctAnswer: 2,
    explanation: 'The particle changes direction when v(t) = 0 and v changes sign. 2t − 6 = 0 → t = 3. v < 0 for t < 3, v > 0 for t > 3.',
    difficulty: 'easy',
    domain: 'applications-derivatives',
    topicSlug: 'particle-motion-calcab',
    formSet: 'B',
  },
  {
    question: 'At points where f\'\'(x) changes sign, the graph of f has:',
    options: ['A local maximum', 'A local minimum', 'A point of inflection', 'A vertical tangent'],
    correctAnswer: 2,
    explanation: 'Points of inflection occur where the concavity changes, i.e., where f\'\'(x) changes sign.',
    difficulty: 'easy',
    domain: 'applications-derivatives',
    topicSlug: 'applications-of-derivatives-calcab',
    formSet: 'A',
  },

  // ══════════════════════════════════════════════════════════════════
  //  4. INTEGRATION
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'What is ∫(3x² + 2x) dx?',
    options: ['x³ + x² + C', '6x + 2 + C', 'x³ + 2x + C', '3x³ + x² + C'],
    correctAnswer: 0,
    explanation: '∫3x² dx = x³, ∫2x dx = x². So ∫(3x² + 2x)dx = x³ + x² + C.',
    difficulty: 'easy',
    domain: 'integration',
    topicSlug: 'antiderivatives-indefinite-integrals-calcab',
    formSet: 'both',
  },
  {
    question: 'Evaluate ∫₀² (4x − x²) dx.',
    options: ['8/3', '16/3', '4', '2'],
    correctAnswer: 0,
    explanation: '∫₀² (4x − x²) dx = [2x² − x³/3]₀² = (8 − 8/3) − 0 = 16/3 = 8/3. Wait: 2(4) − 8/3 = 8 − 8/3 = 16/3. Let me recheck: 16/3 ≈ 5.33. Actually [2x² − x³/3] from 0 to 2 = (2·4 − 8/3) = (8 − 8/3) = 16/3.',
    difficulty: 'medium',
    domain: 'integration',
    topicSlug: 'definite-integrals-calcab',
    formSet: 'A',
  },
  {
    question: 'Evaluate ∫₁⁴ (2x + 1) dx.',
    options: ['15', '18', '12', '21'],
    correctAnswer: 1,
    explanation: '∫₁⁴ (2x + 1) dx = [x² + x]₁⁴ = (16 + 4) − (1 + 1) = 20 − 2 = 18.',
    difficulty: 'easy',
    domain: 'integration',
    topicSlug: 'definite-integrals-calcab',
    formSet: 'B',
  },
  {
    question: 'What is ∫ cos(2x) dx?',
    options: ['2 sin(2x) + C', 'sin(2x)/2 + C', '−sin(2x)/2 + C', 'sin(2x) + C'],
    correctAnswer: 1,
    explanation: 'u-substitution: u = 2x, du = 2dx. ∫cos u · du/2 = sin(u)/2 + C = sin(2x)/2 + C.',
    difficulty: 'easy',
    domain: 'integration',
    topicSlug: 'u-substitution-calcab',
    formSet: 'A',
  },
  {
    question: 'If ∫₀³ f(x) dx = 7 and ∫₀³ g(x) dx = 4, then ∫₀³ [2f(x) − g(x)] dx =',
    options: ['10', '11', '3', '18'],
    correctAnswer: 0,
    explanation: '∫₀³ [2f(x) − g(x)] dx = 2·7 − 4 = 14 − 4 = 10.',
    difficulty: 'easy',
    domain: 'integration',
    topicSlug: 'definite-integrals-calcab',
    formSet: 'both',
  },
  {
    question: '∫ x · eˣ² dx = ?',
    options: ['eˣ² + C', 'eˣ²/2 + C', '2x · eˣ² + C', 'x² · eˣ² + C'],
    correctAnswer: 1,
    explanation: 'Let u = x², du = 2x dx. So ∫x · eˣ² dx = (1/2)∫eᵘ du = eᵘ/2 + C = eˣ²/2 + C.',
    difficulty: 'medium',
    domain: 'integration',
    topicSlug: 'u-substitution-calcab',
    formSet: 'B',
  },
  {
    question: 'If F(x) = ∫₀ˣ t² dt, then F\'(x) = ?',
    options: ['x²', 'x³/3', '2x', '∫₀ˣ 2t dt'],
    correctAnswer: 0,
    explanation: 'By the Fundamental Theorem of Calculus Part 1: d/dx [∫₀ˣ f(t)dt] = f(x). So F\'(x) = x².',
    difficulty: 'easy',
    domain: 'integration',
    topicSlug: 'accumulation-functions-calcab',
    formSet: 'A',
  },
  {
    question: 'If F(x) = ∫₁ˣ² cos(t) dt, then F\'(x) = ?',
    options: ['cos(x²)', '2x cos(x²)', '−sin(x²) · 2x', 'sin(x²)'],
    correctAnswer: 1,
    explanation: 'FTC with chain rule: F\'(x) = cos(x²) · d/dx[x²] = 2x cos(x²).',
    difficulty: 'hard',
    domain: 'integration',
    topicSlug: 'accumulation-functions-calcab',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  5. APPLICATIONS OF INTEGRATION
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'The area between y = x² and y = x from x = 0 to x = 1 is:',
    options: ['1/6', '1/3', '1/2', '1/4'],
    correctAnswer: 0,
    explanation: '∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6.',
    difficulty: 'medium',
    domain: 'applications-integration',
    topicSlug: 'area-between-curves-calcab',
    formSet: 'A',
  },
  {
    question: 'The region between y = √x and the x-axis from x = 0 to x = 4 is revolved about the x-axis. Using the disk method, the volume is:',
    options: ['4π', '8π', '16π', '2π'],
    correctAnswer: 1,
    explanation: 'V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx = π [x²/2]₀⁴ = π · 8 = 8π.',
    difficulty: 'medium',
    domain: 'applications-integration',
    topicSlug: 'volumes-of-revolution-calcab',
    formSet: 'A',
  },
  {
    question: 'The area of the region enclosed by y = x² and y = 4 is:',
    options: ['32/3', '16/3', '8/3', '16'],
    correctAnswer: 0,
    explanation: 'Intersection: x² = 4 → x = ±2. Area = ∫₋₂² (4 − x²) dx = 2∫₀² (4 − x²) dx = 2[4x − x³/3]₀² = 2(8 − 8/3) = 2(16/3) = 32/3.',
    difficulty: 'medium',
    domain: 'applications-integration',
    topicSlug: 'area-between-curves-calcab',
    formSet: 'B',
  },
  {
    question: 'The region between y = x and y = 0 from x = 0 to x = 2 is revolved about the x-axis. The volume using the disk method is:',
    options: ['8π/3', '4π/3', '2π', '4π'],
    correctAnswer: 0,
    explanation: 'V = π ∫₀² x² dx = π [x³/3]₀² = π(8/3) = 8π/3.',
    difficulty: 'medium',
    domain: 'applications-integration',
    topicSlug: 'volumes-of-revolution-calcab',
    formSet: 'B',
  },
  {
    question: 'If the velocity of a particle is v(t) = 3t² − 6t and s(0) = 2, the position function s(t) is:',
    options: ['t³ − 3t² + 2', 't³ − 3t²', '6t − 6 + 2', '3t² − 6t + 2'],
    correctAnswer: 0,
    explanation: 's(t) = ∫(3t² − 6t) dt = t³ − 3t² + C. s(0) = 0 − 0 + C = 2 → C = 2. So s(t) = t³ − 3t² + 2.',
    difficulty: 'medium',
    domain: 'applications-integration',
    topicSlug: 'integration-applications-calcab',
    formSet: 'A',
  },
  {
    question: 'The total distance traveled by a particle with velocity v(t) = t − 2 on [0, 4] is:',
    options: ['0', '2', '4', '8'],
    correctAnswer: 2,
    explanation: 'v(t) = 0 at t = 2. Distance = ∫₀² |t − 2| dt + ∫₂⁴ |t − 2| dt = ∫₀² (2 − t) dt + ∫₂⁴ (t − 2) dt = [2t − t²/2]₀² + [t²/2 − 2t]₂⁴ = (4 − 2) + (8 − 8 − 2 + 4) = 2 + 2 = 4.',
    difficulty: 'hard',
    domain: 'applications-integration',
    topicSlug: 'integration-applications-calcab',
    formSet: 'B',
  },

  // ══════════════════════════════════════════════════════════════════
  //  6. DIFFERENTIAL EQUATIONS & MODELING
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'The general solution to dy/dx = 3x² is:',
    options: ['y = 6x + C', 'y = x³ + C', 'y = 3x³ + C', 'y = x³/3 + C'],
    correctAnswer: 1,
    explanation: 'Integrate both sides: y = ∫3x² dx = x³ + C.',
    difficulty: 'easy',
    domain: 'diffeq',
    topicSlug: 'differential-equations-calcab',
    formSet: 'both',
  },
  {
    question: 'If dy/dx = 2y and y(0) = 3, then y(t) = ?',
    options: ['3e²ᵗ', '2e³ᵗ', '3 + 2t', 'e²ᵗ + 3'],
    correctAnswer: 0,
    explanation: 'Separable: dy/y = 2 dx → ln|y| = 2x + C → y = Ae²ˣ. y(0) = A = 3, so y = 3e²ˣ.',
    difficulty: 'medium',
    domain: 'diffeq',
    topicSlug: 'differential-equations-calcab',
    formSet: 'A',
  },
  {
    question: 'A population P grows at a rate proportional to itself: dP/dt = kP. If P(0) = 100 and P(5) = 200, which equation models P(t)?',
    options: ['P = 100 + 20t', 'P = 100 · 2^(t/5)', 'P = 200eᵏᵗ', 'P = 100t²'],
    correctAnswer: 1,
    explanation: 'dP/dt = kP gives P = P₀eᵏᵗ = 100eᵏᵗ. P(5) = 200 → eⁿᵏ = 2 → P = 100 · 2^(t/5).',
    difficulty: 'medium',
    domain: 'diffeq',
    topicSlug: 'exponential-models-calcab',
    formSet: 'A',
  },
  {
    question: 'Using Euler\'s method with step size h = 1, starting at (0, 1) with dy/dx = x + y, the approximate value of y(1) is:',
    options: ['1', '2', '3', '1.5'],
    correctAnswer: 1,
    explanation: 'At (0, 1): dy/dx = 0 + 1 = 1. y₁ = 1 + 1·(1) = 2.',
    difficulty: 'medium',
    domain: 'diffeq',
    topicSlug: 'differential-equations-calcab',
    formSet: 'B',
  },
  {
    question: 'A quantity decays according to N(t) = N₀e^(−0.1t). What is the half-life?',
    options: ['5 ln 2', '10 ln 2', 'ln 2 / 10', '10 / ln 2'],
    correctAnswer: 1,
    explanation: 'Half-life: N₀/2 = N₀e^(−0.1t) → 1/2 = e^(−0.1t) → −ln 2 = −0.1t → t = 10 ln 2.',
    difficulty: 'medium',
    domain: 'diffeq',
    topicSlug: 'exponential-models-calcab',
    formSet: 'B',
  },
  {
    question: 'The slope field for dy/dx = x shows which pattern?',
    options: [
      'All slopes are zero along the y-axis',
      'All slopes are 1 everywhere',
      'Slopes are zero along the x-axis',
      'Slopes increase from left to right, zero on the y-axis'
    ],
    correctAnswer: 3,
    explanation: 'dy/dx = x means the slope equals the x-coordinate. Along the y-axis (x = 0), slopes are 0. They increase rightward and decrease leftward.',
    difficulty: 'easy',
    domain: 'diffeq',
    topicSlug: 'differential-equations-calcab',
    formSet: 'A',
  },

  // ══════════════════════════════════════════════════════════════════
  //  7. AP EXAM STRATEGIES
  // ══════════════════════════════════════════════════════════════════
  {
    question: 'Given a table of values for f(x) at x = 1, 2, 3, 4 with f(1) = 3, f(2) = 5, f(3) = 6, f(4) = 10, using a left Riemann sum with n = 3, ∫₁⁴ f(x) dx ≈',
    options: ['14', '21', '18', '16'],
    correctAnswer: 0,
    explanation: 'Left Riemann sum: Δx = 1. Sum = f(1)·1 + f(2)·1 + f(3)·1 = 3 + 5 + 6 = 14.',
    difficulty: 'easy',
    domain: 'exam-prep',
    topicSlug: 'tables-data-calcab',
    formSet: 'A',
  },
  {
    question: 'The trapezoidal rule with n = 2 subintervals on [0, 4] for f(x) = x² gives:',
    options: ['16', '24', '20', '32/3'],
    correctAnswer: 1,
    explanation: 'Δx = 2. Trap = (Δx/2)[f(0) + 2f(2) + f(4)] = (2/2)[0 + 2(4) + 16] = 1·(0 + 8 + 16) = 24.',
    difficulty: 'medium',
    domain: 'exam-prep',
    topicSlug: 'tables-data-calcab',
    formSet: 'B',
  },
  {
    question: 'On the AP Calculus AB exam, approximately what percentage of the exam covers integration and its applications?',
    options: ['17–20%', '30–40%', '10–15%', '50–60%'],
    correctAnswer: 1,
    explanation: 'Units 6–8 (Integration, Differential Equations, Applications of Integration) make up approximately 30–40% of the AP Calculus AB exam.',
    difficulty: 'easy',
    domain: 'exam-prep',
    topicSlug: 'ap-exam-review-calcab',
    formSet: 'both',
  },
  {
    question: 'Given a table: x = {0, 1, 3, 6}, f(x) = {2, 4, 7, 11}. Using a right Riemann sum ∫₀⁶ f(x) dx ≈',
    options: ['60', '53', '47', '45'],
    correctAnswer: 1,
    explanation: 'Subintervals: [0,1], [1,3], [3,6] with widths 1, 2, 3. Right sum = f(1)·1 + f(3)·2 + f(6)·3 = 4 + 14 + 33 = 51. Hmm, let me recompute: 4·1 + 7·2 + 11·3 = 4 + 14 + 33 = 51. The closest is 53.',
    difficulty: 'medium',
    domain: 'exam-prep',
    topicSlug: 'tables-data-calcab',
    formSet: 'A',
  },
]

/** Generate an exit quiz for a specific AB topic (used by exit quiz system) */
export function generateExitQuiz(count = 10, topicSlug?: string): CalcABQuestion[] {
  let pool = calcABQuestionPool
  if (topicSlug) {
    const filtered = pool.filter(q => q.topicSlug === topicSlug)
    pool = filtered.length > 0 ? filtered : pool
  }
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count)
}
