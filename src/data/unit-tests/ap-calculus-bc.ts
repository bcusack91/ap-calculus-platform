import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import { calcBCQuestionPool } from '@/data/exit-quizzes/ap-calculus-bc'
import { CALC_AB_UNIT_ASSIGNMENT } from '@/data/unit-tests/ap-calculus-ab'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef, type UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * The 10 units of the AP Calculus BC CED. BC includes everything in AB, so the
 * AB pool is filed by the AB rules (same unit ids for Units 1-8), and the BC
 * pool's extra domains join the CED unit that teaches them: integration by
 * parts, partial fractions and improper integrals are Unit 6, Euler's method
 * and logistic models Unit 7, and power and Taylor series Unit 10. Arc length
 * of y = f(x) is Unit 8 (Topic 8.13); parametric arc length stays in Unit 9.
 * Items about the exam itself (sub-scores, timing, rounding and calculator
 * notation rules) test no CED content and are left out.
 */
export const BC_UNIT_ASSIGNMENT: UnitAssignment = {
  domains: {
    'advanced-integration': 'integration',
    'advanced-diffeq': 'diffeq',
    'taylor-series': 'sequences-series',
  },
  stems: {
    'The arc length of $y = f(x)$ from $a$ to $b$ is:': 'applications-integration',
    'Arc length of $y = f(x)$ from $a$ to $b$:': 'applications-integration',
    'What is the length of the curve $y = 2x^{3/2}$': 'applications-integration',
    'The curve $x = \\dfrac{1}{3}y^3$ runs from': 'applications-integration',
    'The arc length of a curve $y = f(x)$ measured from': 'applications-integration',
    'Use a calculator. What is the length of the curve $y = x^3$': 'applications-integration',
    'Find the length of $y = \\dfrac{x^4}{8}': 'applications-integration',
    'On the BC exam, in addition to AB topics': null,
    'The BC exam awards a separate "AB sub-score"': null,
    'BC adds which topic NOT in AB?': null,
    'On the 2027 AP Calculus BC exam, the no-calculator': null,
    'A student\'s free-response answer reads "fnInt': null,
    'On a calculator-active free-response part, a student writes the correct definite integral': null,
  },
}

const POOL: UnitPoolQuestion[] = [
  ...assignUnits(calcABQuestionPool as UnitPoolQuestion[], CALC_AB_UNIT_ASSIGNMENT),
  ...assignUnits(calcBCQuestionPool as UnitPoolQuestion[], BC_UNIT_ASSIGNMENT),
]

export const AP_CALCULUS_BC_UNITS: UnitDef[] = [
  { id: 'limits', unitNumber: 1, name: 'Unit 1: Limits and Continuity', shortName: 'Limits', description: 'Limits from graphs, tables, and algebra; squeeze theorem; asymptotes; continuity and the IVT.', topicSlugs: ['limits-continuity-calcab', 'what-is-a-limit', 'continuity-introduction'], exam_weight: '4–7%', color: 'from-blue-500 to-cyan-500', icon: '📐' },
  { id: 'differentiation', unitNumber: 2, name: 'Unit 2: Differentiation: Definition and Fundamental Properties', shortName: 'Derivative Basics', description: 'The limit definition, differentiability, and the power, product, quotient, trig, exponential, and log rules.', topicSlugs: ['definition-of-derivative-calcab', 'basic-differentiation-rules-calcab', 'derivatives-exp-log-calcab'], exam_weight: '4–7%', color: 'from-indigo-500 to-purple-500', icon: '∂' },
  { id: 'differentiation-composite', unitNumber: 3, name: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions', shortName: 'Chain & Implicit', description: 'The chain rule, implicit differentiation, inverse and inverse trig derivatives, and higher-order derivatives.', topicSlugs: ['chain-rule-calcab', 'implicit-differentiation-calcab', 'inverse-functions-derivatives-calcab'], exam_weight: '4–7%', color: 'from-violet-500 to-fuchsia-500', icon: '🔗' },
  { id: 'applications-derivatives', unitNumber: 4, name: 'Unit 4: Contextual Applications of Differentiation', shortName: 'Rates in Context', description: 'Derivatives in context, straight-line motion, related rates, local linearity, and L’Hospital’s rule.', topicSlugs: ['related-rates-calcab', 'particle-motion-calcab', 'linearization-differentials-calcab'], exam_weight: '6–9%', color: 'from-purple-500 to-pink-500', icon: '🚗' },
  { id: 'analytical-applications', unitNumber: 5, name: 'Unit 5: Analytical Applications of Differentiation', shortName: 'Curve Analysis', description: 'The MVT and EVT, increasing and decreasing intervals, extrema, concavity, curve sketching, and optimization.', topicSlugs: ['theorem-applications-calcab', 'applications-of-derivatives-calcab', 'concavity-inflection-points-calcab', 'optimization-calcab'], exam_weight: '8–11%', color: 'from-fuchsia-500 to-rose-500', icon: '📈' },
  { id: 'integration', unitNumber: 6, name: 'Unit 6: Integration and Accumulation of Change', shortName: 'Integration', description: 'Riemann sums, the FTC, u-substitution, integration by parts, partial fractions, and improper integrals.', topicSlugs: ['definite-integrals-calcab', 'u-substitution-calcab', 'integration-by-parts-calcbc', 'partial-fractions-calcbc', 'improper-integrals-calcbc'], exam_weight: '17–20%', color: 'from-emerald-500 to-teal-500', icon: '∫' },
  { id: 'diffeq', unitNumber: 7, name: 'Unit 7: Differential Equations', shortName: 'Differential Equations', description: 'Slope fields, Euler’s method, separation of variables, exponential models, and logistic growth.', topicSlugs: ['differential-equations-calcab', 'exponential-models-calcab', 'euler-method-advanced-calcbc', 'logistic-models-calcbc'], exam_weight: '6–9%', color: 'from-amber-500 to-orange-500', icon: '🌀' },
  { id: 'applications-integration', unitNumber: 8, name: 'Unit 8: Applications of Integration', shortName: 'Apps of Integration', description: 'Average value, motion, area between curves, volumes by cross sections, discs, and washers, and arc length.', topicSlugs: ['integration-applications-calcab', 'area-between-curves-calcab', 'volumes-of-revolution-calcab', 'arc-length-surface-area-calcbc'], exam_weight: '6–9%', color: 'from-rose-500 to-pink-500', icon: '🧮' },
  { id: 'parametric-polar-vector', unitNumber: 9, name: 'Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions', shortName: 'Parametric & Polar', description: 'Derivatives and integrals of parametric, polar, and vector-valued functions; motion in the plane; polar area.', topicSlugs: ['parametric-curves-calculus-calcbc', 'polar-calculus-calcbc', 'vector-valued-functions-calcbc'], exam_weight: '11–12%', color: 'from-fuchsia-500 to-violet-500', icon: '🌐' },
  { id: 'sequences-series', unitNumber: 10, name: 'Unit 10: Infinite Sequences and Series', shortName: 'Series', description: 'Convergence tests, alternating series, power series, Taylor and Maclaurin series, and error bounds.', topicSlugs: ['infinite-series-calcbc', 'convergence-tests-summary-calcbc', 'power-series-calcbc', 'taylor-maclaurin-series-calcbc', 'lagrange-error-bound-calcbc'], exam_weight: '17–18%', color: 'from-cyan-500 to-blue-500', icon: '∑' },
]

export const AP_CALCULUS_BC_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-calculus-bc',
  courseHubHref: '/ap-calculus-bc',
  courseTitle: 'AP Calculus BC',
  unitTestRoute: '/ap-calcbc-unit-tests',
  units: AP_CALCULUS_BC_UNITS,
  pool: POOL,
}
