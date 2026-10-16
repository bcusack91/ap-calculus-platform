import { apPrecalcQuestionPool } from '@/data/exit-quizzes/ap-precalculus'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_PRECALCULUS_UNITS: UnitDef[] = [
  {
    id: 'polynomial-rational',
    unitNumber: 1,
    name: 'Unit 1: Polynomial & Rational Functions',
    shortName: 'Polynomial & Rational',
    description: 'Rates of change, polynomial behavior, rational asymptotes & holes, function composition, transformations, and sequences.',
    topicSlugs: [
      'polynomial-functions-precalc',
      'rational-functions-precalc',
      'function-composition-inverses-precalc',
      'transformations-precalc',
      'sequences-series-precalc',
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
    description: 'Exponential growth/decay, logarithm properties, equation solving, and continuous-compounding models.',
    topicSlugs: ['exponential-functions-precalc', 'logarithmic-functions-precalc'],
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
  {
    // The id is the pool's domain key (kept so saved results still match). CED
    // Unit 4 is not assessed, so its topics retired in Oct 2026; the items left
    // in this domain are on-exam mixed review (see exit-quizzes/ap-precalculus.ts).
    id: 'params-vectors-matrices',
    unitNumber: 4,
    name: 'Cumulative Review: Units 1–3',
    shortName: 'Cumulative Review',
    description: 'Mixed review across the three assessed units: rates of change, rational functions, exponentials and logarithms, sequences, inverses, trig values, and polar functions.',
    topicSlugs: [
      'rates-of-change-precalc',
      'function-composition-inverses-precalc',
      'sequences-series-precalc',
      'polar-coordinates-precalc',
    ],
    exam_weight: 'Mixed review of Units 1–3',
    color: 'from-emerald-500 to-green-500',
    icon: '🧮',
  },
]

export const AP_PRECALCULUS_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-precalculus',
  courseHubHref: '/ap-precalculus',
  courseTitle: 'AP Precalculus',
  unitTestRoute: '/ap-precalc-unit-tests',
  units: AP_PRECALCULUS_UNITS,
  pool: apPrecalcQuestionPool,
}
