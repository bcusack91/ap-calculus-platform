import { apPrecalcQuestionPool } from '@/data/exit-quizzes/ap-precalculus'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The three assessed units of the AP Precalculus CED (Unit 4 is not on the
 * exam). Arithmetic and geometric sequences (Topic 2.1) and composition and
 * inverses (2.7-2.8) are Unit 2, so they move out of the pool's
 * polynomial-rational domain. The pool's leftover `params-vectors-matrices`
 * domain holds only on-exam review items from Units 1-3; each joins its unit
 * by topic, so there is no separate cumulative test.
 */
export const AP_PRECALCULUS_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'sequences-series-precalc': 'exp-log',
    'sequences-arithmetic-geometric': 'exp-log',
    'function-composition-inverses-precalc': 'exp-log',
    'exponential-functions-precalc': 'exp-log',
    'logarithmic-functions-precalc': 'exp-log',
    'rational-functions-precalc': 'polynomial-rational',
    'rates-of-change-precalc': 'polynomial-rational',
    'polar-coordinates-precalc': 'trig-polar',
    'trigonometric-functions-precalc': 'trig-polar',
  },
}

export const AP_PRECALCULUS_UNITS: UnitDef[] = [
  {
    id: 'polynomial-rational',
    unitNumber: 1,
    name: 'Unit 1: Polynomial & Rational Functions',
    shortName: 'Polynomial & Rational',
    description: 'Rates of change, polynomial behavior and complex zeros, rational asymptotes and holes, transformations, and model selection.',
    topicSlugs: [
      'polynomial-functions-precalc',
      'rational-functions-precalc',
      'transformations-precalc',
      'rates-of-change-precalc',
    ],
    exam_weight: '30–40%',
    color: 'from-blue-500 to-indigo-500',
    icon: '📈',
  },
  {
    id: 'exp-log',
    unitNumber: 2,
    name: 'Unit 2: Exponential & Logarithmic Functions',
    shortName: 'Exponential & Logarithmic',
    description: 'Arithmetic and geometric sequences, exponential growth and decay, composition and inverses, logarithms, and semi-log models.',
    topicSlugs: ['sequences-series-precalc', 'exponential-functions-precalc', 'function-composition-inverses-precalc', 'logarithmic-functions-precalc'],
    exam_weight: '27–40%',
    color: 'from-indigo-500 to-purple-500',
    icon: '📊',
  },
  {
    id: 'trig-polar',
    unitNumber: 3,
    name: 'Unit 3: Trigonometric & Polar Functions',
    shortName: 'Trig & Polar',
    description: 'Unit-circle trigonometry, sinusoidal modeling, identities, inverse trig, and polar functions.',
    topicSlugs: [
      'trigonometric-functions-precalc',
      'trigonometric-identities-precalc',
      'inverse-trig-functions-precalc',
      'polar-coordinates-precalc',
    ],
    exam_weight: '30–35%',
    color: 'from-purple-500 to-pink-500',
    icon: '📐',
  },
]

export const AP_PRECALCULUS_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-precalculus',
  courseHubHref: '/ap-precalculus',
  courseTitle: 'AP Precalculus',
  unitTestRoute: '/ap-precalc-unit-tests',
  units: AP_PRECALCULUS_UNITS,
  pool: assignUnits(apPrecalcQuestionPool, AP_PRECALCULUS_UNIT_ASSIGNMENT),
}
