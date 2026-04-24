import { calcABQuestionPool } from '@/data/exit-quizzes/ap-calculus-ab'
import { calcBCQuestionPool } from '@/data/exit-quizzes/ap-calculus-bc'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

// BC includes everything in AB plus four BC-only units. Combine pools so
// students drilling AB-aligned units (Unit 1–8) get the full AB bank, and
// BC-only units (Unit 9–10 in our mapping) draw from the BC pool.
const COMBINED_POOL: UnitPoolQuestion[] = [
  ...(calcABQuestionPool as UnitPoolQuestion[]),
  ...(calcBCQuestionPool as UnitPoolQuestion[]),
]

export const AP_CALCULUS_BC_UNITS: UnitDef[] = [
  { id: 'limits', unitNumber: 1, name: 'Unit 1: Limits & Continuity', shortName: 'Limits', description: 'Limits algebraically and graphically, continuity, and the IVT.', topicSlugs: ['limits'], exam_weight: '4–7%', color: 'from-blue-500 to-cyan-500', icon: '📐' },
  { id: 'differentiation', unitNumber: 2, name: 'Unit 2–3: Differentiation', shortName: 'Differentiation', description: 'Power, product, quotient, chain rules; implicit & inverse derivatives.', topicSlugs: ['differentiation'], exam_weight: '9–13%', color: 'from-indigo-500 to-purple-500', icon: '∂' },
  { id: 'applications-derivatives', unitNumber: 3, name: 'Unit 4–5: Applications of Differentiation', shortName: 'Apps of Derivatives', description: 'Related rates, optimization, MVT, curve sketching, and motion.', topicSlugs: ['applications-derivatives'], exam_weight: '13–20%', color: 'from-purple-500 to-pink-500', icon: '📈' },
  { id: 'integration', unitNumber: 4, name: 'Unit 6: Integration & Accumulation', shortName: 'Integration', description: 'Antiderivatives, Riemann sums, FTC, u-substitution, and integration techniques.', topicSlugs: ['integration'], exam_weight: '17–20%', color: 'from-emerald-500 to-teal-500', icon: '∫' },
  { id: 'diffeq', unitNumber: 5, name: 'Unit 7: Differential Equations', shortName: 'Differential Equations', description: 'Slope fields, separable ODEs, Euler\u2019s method, and logistic growth.', topicSlugs: ['diffeq'], exam_weight: '6–9%', color: 'from-amber-500 to-orange-500', icon: '🌀' },
  { id: 'applications-integration', unitNumber: 6, name: 'Unit 8: Applications of Integration', shortName: 'Apps of Integration', description: 'Area, volumes of revolution, arc length, and motion problems.', topicSlugs: ['applications-integration'], exam_weight: '6–9%', color: 'from-rose-500 to-pink-500', icon: '🧮' },
  { id: 'parametric-polar-vector', unitNumber: 7, name: 'Unit 9: Parametric, Polar & Vector Functions', shortName: 'Parametric & Polar', description: 'Derivatives & integrals of parametric, polar, and vector-valued functions.', topicSlugs: ['parametric-polar-vector'], exam_weight: '11–12%', color: 'from-fuchsia-500 to-violet-500', icon: '🌐' },
  { id: 'sequences-series', unitNumber: 8, name: 'Unit 10: Infinite Sequences & Series', shortName: 'Series', description: 'Convergence tests, power series, Taylor & Maclaurin series, error bounds.', topicSlugs: ['sequences-series'], exam_weight: '17–18%', color: 'from-cyan-500 to-blue-500', icon: '∑' },
]

export const AP_CALCULUS_BC_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-calculus-bc',
  courseHubHref: '/ap-calculus-bc',
  courseTitle: 'AP Calculus BC',
  unitTestRoute: '/ap-calcbc-unit-tests',
  units: AP_CALCULUS_BC_UNITS,
  pool: COMBINED_POOL,
}
