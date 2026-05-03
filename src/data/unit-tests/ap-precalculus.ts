import { apPrecalcQuestionPool } from '@/data/exit-quizzes/ap-precalculus'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_PRECALCULUS_UNITS: UnitDef[] = [
  {
    id: 'polynomial-rational',
    unitNumber: 1,
    name: 'Unit 1: Polynomial & Rational Functions',
    shortName: 'Polynomial & Rational',
    description: 'Polynomial behavior, rational asymptotes & holes, function composition, transformations, sequences, and systems.',
    topicSlugs: [
      'polynomial-functions-precalc',
      'rational-functions-precalc',
      'function-composition-inverses-precalc',
      'transformations-precalc',
      'sequences-series-precalc',
      'systems-of-equations-precalc',
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
    description: 'Unit-circle trigonometry, sinusoidal modeling, identities, inverse trig, the Laws of Sines/Cosines, polar curves, and conics.',
    topicSlugs: [
      'trigonometric-functions-precalc',
      'trigonometric-identities-precalc',
      'inverse-trig-functions-precalc',
      'law-of-sines-cosines-precalc',
      'polar-coordinates-precalc',
      'conic-sections-precalc',
    ],
    exam_weight: '30–35%',
    color: 'from-purple-500 to-pink-500',
    icon: '📐',
  },
  {
    id: 'params-vectors-matrices',
    unitNumber: 4,
    name: 'Unit 4: Functions Involving Parameters, Vectors & Matrices',
    shortName: 'Parametric · Vectors · Matrices',
    description: 'Parametric motion, 2-D vectors and dot products, matrix operations and linear transformations, plus an on-ramp to limits, continuity, and rates of change.',
    topicSlugs: [
      'parametric-equations-precalc',
      'vectors-two-dimensions-precalc',
      'matrices-precalc',
      'limits-introduction-precalc',
      'continuity-precalc',
      'rates-of-change-precalc',
    ],
    exam_weight: 'Not assessed on the AP exam · College credit only',
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
