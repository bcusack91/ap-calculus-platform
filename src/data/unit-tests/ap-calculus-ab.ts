import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_CALCULUS_AB_UNITS: UnitDef[] = [
  { id: 'limits', unitNumber: 1, name: 'Unit 1: Limits & Continuity', shortName: 'Limits', description: 'Limits algebraically and graphically, continuity, and the IVT.', topicSlugs: ['limits'], exam_weight: '10–12%', color: 'from-blue-500 to-cyan-500', icon: '📐' },
  { id: 'differentiation', unitNumber: 2, name: 'Unit 2–3: Differentiation', shortName: 'Differentiation', description: 'Power, product, quotient, chain rules; implicit & inverse derivatives.', topicSlugs: ['differentiation'], exam_weight: '20–24%', color: 'from-indigo-500 to-purple-500', icon: '∂' },
  { id: 'applications-derivatives', unitNumber: 3, name: 'Unit 4–5: Applications of Differentiation', shortName: 'Apps of Derivatives', description: 'Related rates, optimization, MVT, curve sketching, and motion problems.', topicSlugs: ['applications-derivatives'], exam_weight: '25–30%', color: 'from-purple-500 to-pink-500', icon: '📈' },
  { id: 'integration', unitNumber: 4, name: 'Unit 6: Integration & Accumulation', shortName: 'Integration', description: 'Antiderivatives, Riemann sums, FTC, u-substitution, and integration techniques.', topicSlugs: ['integration'], exam_weight: '17–20%', color: 'from-emerald-500 to-teal-500', icon: '∫' },
  { id: 'diffeq', unitNumber: 5, name: 'Unit 7: Differential Equations', shortName: 'Differential Equations', description: 'Slope fields, separable ODEs, exponential growth & decay.', topicSlugs: ['diffeq'], exam_weight: '6–12%', color: 'from-amber-500 to-orange-500', icon: '🌀' },
  { id: 'applications-integration', unitNumber: 6, name: 'Unit 8: Applications of Integration', shortName: 'Apps of Integration', description: 'Average value, area between curves, volumes of revolution, and motion.', topicSlugs: ['applications-integration'], exam_weight: '10–15%', color: 'from-rose-500 to-pink-500', icon: '🧮' },
]

export const AP_CALCULUS_AB_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-calculus-ab',
  courseHubHref: '/ap-calculus-ab',
  courseTitle: 'AP Calculus AB',
  unitTestRoute: '/ap-calcab-unit-tests',
  units: AP_CALCULUS_AB_UNITS,
  pool: calcABQuestionPool,
}
