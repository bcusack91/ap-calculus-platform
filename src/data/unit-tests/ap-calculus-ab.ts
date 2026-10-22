import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import { assignUnits, isDroppedByAssignment, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 8 units of the AP Calculus AB CED.
 *
 * The exit pool files Units 2 and 3 under one `differentiation` domain and
 * Units 4 and 5 under one `applications-derivatives` domain, so topics split
 * them. Its `exam-prep` domain (tables, FRQ strategy, mixed review) holds
 * content items from every unit, so each one is filed under the unit it tests
 * rather than in a cumulative test; the two items about the exam itself
 * (reference sheet, calculator rules) test no CED content and are left out.
 *
 * Calc BC reuses these rules and unit ids for its Units 1-8.
 */
export const CALC_AB_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'definition-of-derivative-calcab': 'differentiation',
    'basic-differentiation-rules-calcab': 'differentiation',
    'derivatives-exp-log-calcab': 'differentiation',
    'chain-rule-calcab': 'differentiation-composite',
    'implicit-differentiation-calcab': 'differentiation-composite',
    'inverse-functions-derivatives-calcab': 'differentiation-composite',
    'related-rates-calcab': 'applications-derivatives',
    'particle-motion-calcab': 'applications-derivatives',
    'linearization-differentials-calcab': 'applications-derivatives',
    // CED 4.7 L'Hospital's Rule (AB topic, promoted Oct 2026).
    'lhopitals-rule': 'applications-derivatives',
    'theorem-applications-calcab': 'analytical-applications',
    'concavity-inflection-points-calcab': 'analytical-applications',
    'optimization-calcab': 'analytical-applications',
    'applications-of-derivatives-calcab': 'analytical-applications',
    // exam-prep: table items are mostly Riemann and trapezoidal sums (Unit 6).
    'tables-data-calcab': 'integration',
  },
  stems: {
    // derivatives-exp-log-calcab items that test a later unit
    '$\\dfrac{d}{dx}\\left[ e^{3x} \\right]': 'differentiation-composite',
    '$\\dfrac{d}{dx}\\left[ \\ln(x^2 + 1) \\right]': 'differentiation-composite',
    '$\\dfrac{d}{dx}\\left[ e^{\\sin x} \\right]': 'differentiation-composite',
    '$\\dfrac{d}{dx}\\left[ \\ln|\\cos x| \\right]': 'differentiation-composite',
    'What is $\\dfrac{d}{dx}\\left[3^{x^2}\\right]$': 'differentiation-composite',
    'If $f(x) = x^3 + x + 1$ and $g = f^{-1}$': 'differentiation-composite',
    'For $f(x) = \\ln x + x$, what is $(f^{-1})\'(1)$': 'differentiation-composite',
    'At what value of $x$ does $f(x) = x e^{-2x}$ have a relative maximum': 'analytical-applications',
    'Where does $f(x) = x e^{-x}$ have its absolute maximum': 'analytical-applications',
    'For $f(x) = x \\ln x$ with $x > 0$, what is the minimum value': 'analytical-applications',
    'A quantity grows according to $y = Ce^{kt}$': 'diffeq',
    'A substance decays according to $\\dfrac{dy}{dt} = -0.2y$': 'diffeq',
    // exam-prep: tables-data-calcab items that are not Riemann sums
    'The table shows $f\'(x)$': 'analytical-applications',
    'The table gives $h(t)$ (height in meters)': 'differentiation',
    'A table gives $f(2) = 7$, $f(5) = 13$': 'differentiation',
    'A table gives $f(0) = 4$, $f(3) = 10$': 'differentiation',
    'A differentiable function $g$ has $g(1) = 4$, $g(4) = -2$': 'analytical-applications',
    'A table gives $f\'(1) = 5$, $f\'(3) = 3$': 'analytical-applications',
    // exam-prep: free-response-strategies-calcab
    'By the Mean Value Theorem, if $f$ is continuous on $[2, 6]$': 'analytical-applications',
    'If $f$ is twice differentiable with $f(3) = 5$': 'analytical-applications',
    'If $f\'$ changes from negative to positive at $x = c$': 'analytical-applications',
    'If $\\displaystyle\\int_0^6 f(x)\\,dx = 10$': 'integration',
    'If $f(x) = x^3 - 6x^2 + 9x + 2$, the values of $x$': 'analytical-applications',
    'If $g\'(x) = \\dfrac{x}{x^2 + 1}$ and $g(0) = 5$': 'integration',
    'Which theorem guarantees a value $c$ in $(a,b)$': 'analytical-applications',
    'The position of a particle is given by $s(t) = t^3 - 6t^2 + 9t$': 'applications-derivatives',
    'If $f$ is continuous on $[0,4]$ and $\\int_0^4 f(x)\\,dx = 20$': 'applications-integration',
    'The Extreme Value Theorem states': 'analytical-applications',
    'If the graph of $f\'$ crosses the $x$-axis': 'analytical-applications',
    'Given $f(2) = 3$ and $f\'(2) = -4$, the tangent-line approximation': 'applications-derivatives',
    'If $\\dfrac{d}{dx}\\left[\\int_0^x f(t)\\,dt\\right] = \\sin(x^2)$': 'integration',
    'A particle has velocity $v(t) = 4 - 2t$ on $[0, 5]$': 'applications-integration',
    'If $f\'(x) = 0$ at $x = 2$ and $f\'\'(2) = 0$': 'analytical-applications',
    'A table gives a car\'s velocity $v(t)$': 'integration',
    'An FRQ states that $f$ is decreasing on $[0, 6]$': 'integration',
    'An FRQ gives $\\dfrac{dy}{dx} = 2xy$': 'diffeq',
    'Region $R$ is bounded by $y = x^2$ and $y = 2x$': 'applications-integration',
    'For the region between $y = x^2$ and $y = 4$': 'applications-integration',
    // exam-prep hard items (calc-final wave, Oct 2026)
    'Water flows into a tank at $R(t)$ and out at $D(t)$ gallons': 'applications-integration',
    'An FRQ gives a water temperature $W(t)$': 'applications-integration',
    'If $\\int_1^4 f(x)\\,dx = 6$, what is $\\displaystyle\\int_0^1 f(3x + 1)': 'integration',
    'What is the particular solution of $\\dfrac{dy}{dx} = \\dfrac{x}{y}$': 'diffeq',
    'A differentiable function $f$ has $f\'(x) = (x - 1)^2(x - 3)$': 'analytical-applications',
    // exam-prep: ap-exam-review-calcab
    'Which reference material does the AP Calculus exam provide': null,
    'When the AP exam allows a calculator, you may': null,
    'For an FRQ asking "Justify your answer,"': 'analytical-applications',
    'A common AP justification phrase for "the function is continuous"': 'limits',
    'If $f\'(c) = 0$ and $f\'$ changes from $+$ to $-$ at $c$': 'analytical-applications',
    'The Fundamental Theorem of Calculus, Part 2, states': 'integration',
    'For "use a Riemann sum to approximate': 'integration',
    'For an exponential growth model $\\dfrac{dP}{dt} = kP$': 'diffeq',
    'The average value of $f$ on $[a,b]$ is:': 'applications-integration',
    'A particle\'s velocity is $v(t)$ on $[a, b]$. Total DISTANCE': 'applications-integration',
    'What is $\\lim_{x \\to 0} \\dfrac{\\sin(4x)}{2x}$': 'limits',
    'What is $\\dfrac{d}{dx}\\left[x^2 e^{3x}\\right]$': 'differentiation-composite',
    'For the curve $x^2 + xy + y^2 = 7$': 'differentiation-composite',
    'What is the absolute minimum value of $f(x) = x^3 - 12x$ on $[0, 3]$': 'analytical-applications',
    'If $\\dfrac{dy}{dt} = 0.3y$ and $y(0) = 20$': 'diffeq',
  },
}

/**
 * Items about the AP exam itself (null stem rules above). The v1 diagnostic
 * leaves them out too, so a form never spends a slot on exam trivia.
 */
export function isCalcAbExamTrivia(question: string): boolean {
  return isDroppedByAssignment(question, CALC_AB_UNIT_ASSIGNMENT)
}

export const AP_CALCULUS_AB_UNITS: UnitDef[] = [
  { id: 'limits', unitNumber: 1, name: 'Unit 1: Limits and Continuity', shortName: 'Limits', description: 'Limits from graphs, tables, and algebra; squeeze theorem; asymptotes; continuity and the IVT.', topicSlugs: ['limits-continuity-calcab', 'what-is-a-limit', 'continuity-introduction'], exam_weight: '10–12%', color: 'from-blue-500 to-cyan-500', icon: '📐' },
  { id: 'differentiation', unitNumber: 2, name: 'Unit 2: Differentiation: Definition and Fundamental Properties', shortName: 'Derivative Basics', description: 'The limit definition, differentiability, and the power, product, quotient, trig, exponential, and log rules.', topicSlugs: ['definition-of-derivative-calcab', 'basic-differentiation-rules-calcab', 'derivatives-exp-log-calcab'], exam_weight: '10–12%', color: 'from-indigo-500 to-purple-500', icon: '∂' },
  { id: 'differentiation-composite', unitNumber: 3, name: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions', shortName: 'Chain & Implicit', description: 'The chain rule, implicit differentiation, inverse and inverse trig derivatives, and higher-order derivatives.', topicSlugs: ['chain-rule-calcab', 'implicit-differentiation-calcab', 'inverse-functions-derivatives-calcab'], exam_weight: '9–13%', color: 'from-violet-500 to-fuchsia-500', icon: '🔗' },
  { id: 'applications-derivatives', unitNumber: 4, name: 'Unit 4: Contextual Applications of Differentiation', shortName: 'Rates in Context', description: 'Derivatives in context, straight-line motion, related rates, local linearity, and L’Hospital’s rule.', topicSlugs: ['related-rates-calcab', 'particle-motion-calcab', 'linearization-differentials-calcab', 'lhopitals-rule'], exam_weight: '10–15%', color: 'from-purple-500 to-pink-500', icon: '🚗' },
  { id: 'analytical-applications', unitNumber: 5, name: 'Unit 5: Analytical Applications of Differentiation', shortName: 'Curve Analysis', description: 'The MVT and EVT, increasing and decreasing intervals, extrema, concavity, curve sketching, and optimization.', topicSlugs: ['theorem-applications-calcab', 'applications-of-derivatives-calcab', 'concavity-inflection-points-calcab', 'optimization-calcab'], exam_weight: '15–18%', color: 'from-fuchsia-500 to-rose-500', icon: '📈' },
  { id: 'integration', unitNumber: 6, name: 'Unit 6: Integration and Accumulation of Change', shortName: 'Integration', description: 'Riemann and trapezoidal sums, accumulation functions, both parts of the FTC, antiderivatives, and u-substitution.', topicSlugs: ['definite-integrals-calcab', 'accumulation-functions-calcab', 'antiderivatives-indefinite-integrals-calcab', 'u-substitution-calcab'], exam_weight: '17–20%', color: 'from-emerald-500 to-teal-500', icon: '∫' },
  { id: 'diffeq', unitNumber: 7, name: 'Unit 7: Differential Equations', shortName: 'Differential Equations', description: 'Modeling with differential equations, slope fields, separation of variables, and exponential growth and decay.', topicSlugs: ['differential-equations-calcab', 'exponential-models-calcab'], exam_weight: '6–12%', color: 'from-amber-500 to-orange-500', icon: '🌀' },
  { id: 'applications-integration', unitNumber: 8, name: 'Unit 8: Applications of Integration', shortName: 'Apps of Integration', description: 'Average value, motion and accumulation, area between curves, and volumes by cross sections, discs, and washers.', topicSlugs: ['integration-applications-calcab', 'area-between-curves-calcab', 'volumes-of-revolution-calcab'], exam_weight: '10–15%', color: 'from-rose-500 to-pink-500', icon: '🧮' },
]

export const AP_CALCULUS_AB_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-calculus-ab',
  courseHubHref: '/ap-calculus-ab',
  courseTitle: 'AP Calculus AB',
  unitTestRoute: '/ap-calcab-unit-tests',
  units: AP_CALCULUS_AB_UNITS,
  pool: assignUnits(calcABQuestionPool, CALC_AB_UNIT_ASSIGNMENT),
}
