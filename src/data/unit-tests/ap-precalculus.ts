import { apPrecalcQuestionPool } from '@/data/exit-quizzes/ap-precalculus'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The three assessed units of the AP Precalculus CED (Unit 4 is not on the
 * exam and has no unit test). Unit ids are stored in every saved attempt and in
 * the prod `unit-test-units` row, so they stay; names and topic lists follow
 * the canonical layout in precalc-final PLAN.md (src/lib/course-includes.ts).
 *
 * Every exit-pool item is filed by its `topicSlug`, so a pool item still tagged
 * with a retired twin slug (the content agents retag them to the canonical slug
 * over time) lands in the same unit as the canonical slug. Sequences (2.1–2.2)
 * and composition/inverses (2.7–2.8) are Unit 2 even where the pool files them
 * under its polynomial-rational domain; the pool's leftover
 * `params-vectors-matrices` domain holds only on-exam Unit 1–3 review items,
 * each of which joins its unit by topic.
 */
export const AP_PRECALCULUS_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    // Unit 1 — canonical
    'rates-of-change-precalc': 'polynomial-rational',
    'polynomial-functions-precalc': 'polynomial-rational',
    'fundamental-theorem-algebra': 'polynomial-rational',
    'polynomial-division-remainder-theorem': 'polynomial-rational',
    'rational-functions-precalc': 'polynomial-rational',
    'transformations-precalc': 'polynomial-rational',
    'function-modeling-precalc': 'polynomial-rational',
    // Unit 1 — retired twins still present in the pool
    'rates-of-change': 'polynomial-rational',
    'polynomial-functions-end-behavior': 'polynomial-rational',
    'polynomial-functions-end-behavior-precalc': 'polynomial-rational',
    'solving-polynomial-inequalities': 'polynomial-rational',
    'rational-functions-asymptotes': 'polynomial-rational',
    'rational-functions-asymptotes-precalc': 'polynomial-rational',
    'solving-rational-inequalities': 'polynomial-rational',
    'complex-numbers': 'polynomial-rational',
    'function-transformations': 'polynomial-rational',
    'transformations-functions-precalc': 'polynomial-rational',
    'piecewise-functions': 'polynomial-rational',
    // Unit 2 — canonical
    'sequences-series-precalc': 'exp-log',
    'exponential-functions-precalc': 'exp-log',
    'function-composition-inverses-precalc': 'exp-log',
    'logarithmic-functions-precalc': 'exp-log',
    'exponential-logarithmic-modeling-precalc': 'exp-log',
    // Unit 2 — retired twins
    'sequences-arithmetic-geometric': 'exp-log',
    'composite-inverse-functions': 'exp-log',
    'exponential-functions-modeling-precalc': 'exp-log',
    'exponential-functions-growth-decay': 'exp-log',
    'logarithmic-exponential-models': 'exp-log',
    'logarithmic-functions': 'exp-log',
    'logarithmic-functions-equations-precalc': 'exp-log',
    'solving-exponential-logarithmic-equations': 'exp-log',
    // Unit 3 — canonical
    'the-unit-circle': 'trig-polar',
    'trigonometric-functions-precalc': 'trig-polar',
    'graphing-trig-functions': 'trig-polar',
    'inverse-trig-functions-precalc': 'trig-polar',
    'solving-trig-equations': 'trig-polar',
    'trigonometric-identities-precalc': 'trig-polar',
    'polar-coordinates-precalc': 'trig-polar',
    // Unit 3 — retired twins
    'degrees-and-radians': 'trig-polar',
    'negative-and-coterminal-angles': 'trig-polar',
    'unit-circle-radian-measure': 'trig-polar',
    'trigonometric-identities': 'trig-polar',
    'sum-difference-identities': 'trig-polar',
    'double-half-angle-identities': 'trig-polar',
    'inverse-trig-functions': 'trig-polar',
    'polar-coordinates': 'trig-polar',
  },
  // Anything the topic map misses files by the pool's own domain; the retired
  // Unit 4 domain label only ever held Unit 3 polar items and Unit 1–2 review.
  domains: { 'params-vectors-matrices': 'trig-polar' },
}

export const AP_PRECALCULUS_UNITS: UnitDef[] = [
  {
    id: 'polynomial-rational',
    unitNumber: 1,
    name: 'Unit 1: Polynomial and Rational Functions',
    shortName: 'Polynomial & Rational',
    description: 'Rates of change, polynomial zeros and end behavior, complex zeros, polynomial division and equivalent forms, rational asymptotes and holes, transformations, and model selection.',
    topicSlugs: [
      'rates-of-change-precalc',
      'polynomial-functions-precalc',
      'fundamental-theorem-algebra',
      'polynomial-division-remainder-theorem',
      'rational-functions-precalc',
      'transformations-precalc',
      'function-modeling-precalc',
    ],
    exam_weight: '30–40%',
    color: 'from-blue-500 to-indigo-500',
    icon: '📈',
  },
  {
    id: 'exp-log',
    unitNumber: 2,
    name: 'Unit 2: Exponential and Logarithmic Functions',
    shortName: 'Exponential & Logarithmic',
    description: 'Arithmetic and geometric sequences, exponential functions and growth models, composition and inverses, logarithms and their equations, and semi-log data modeling.',
    topicSlugs: [
      'sequences-series-precalc',
      'exponential-functions-precalc',
      'function-composition-inverses-precalc',
      'logarithmic-functions-precalc',
      'exponential-logarithmic-modeling-precalc',
    ],
    exam_weight: '27–40%',
    color: 'from-indigo-500 to-purple-500',
    icon: '📊',
  },
  {
    id: 'trig-polar',
    unitNumber: 3,
    name: 'Unit 3: Trigonometric and Polar Functions',
    shortName: 'Trig & Polar',
    description: 'The unit circle, trigonometric functions, sinusoidal modeling, inverse trig, trigonometric equations and inequalities, identities, and polar functions.',
    topicSlugs: [
      'the-unit-circle',
      'trigonometric-functions-precalc',
      'graphing-trig-functions',
      'inverse-trig-functions-precalc',
      'solving-trig-equations',
      'trigonometric-identities-precalc',
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
