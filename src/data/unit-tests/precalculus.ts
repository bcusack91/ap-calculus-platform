import { precalcQuestionBank } from '@/data/competitive-questions/precalc-bank'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * Precalculus (non-AP surface) unit tests. The competitive bank carries ~10
 * questions per bank topic tagged by `topicSlug`; UNIT_TOPICS groups them into
 * the three AP Precalculus exam units (precalc-final PLAN.md, Oct 2026) and the
 * adapter stamps the `domain` the unit-test engine filters on. The bank's Unit 4
 * topics (vectors, matrices, parametric equations) and the Law of Sines/Cosines
 * are not on the exam and are no longer served ("not on the exam = not in the
 * program"). Each unit's `topicSlugs` are the canonical lesson slugs.
 */

const UNIT_TOPICS: Record<string, string[]> = {
  'polynomial-rational': [
    'rates-of-change', 'transformations-of-functions', 'piecewise-functions',
    'polynomial-functions-end-behavior', 'polynomial-zeros-multiplicity', 'polynomial-division',
    'complex-numbers-fundamental-theorem', 'rational-functions-asymptotes',
  ],
  'exp-log': [
    'sequences-and-series', 'arithmetic-geometric-sequences',
    'exponential-functions-growth-decay', 'exponential-models-applications',
    'composite-functions', 'inverse-functions',
    'logarithmic-functions-properties', 'logarithmic-equations', 'natural-log-and-e',
  ],
  'trig-polar': [
    'trigonometric-ratios-unit-circle', 'graphs-of-sine-and-cosine',
    'inverse-trig-functions', 'trig-identities-pythagorean', 'polar-coordinates-graphs',
  ],
}

export const PRECALCULUS_UNITS: UnitDef[] = [
  {
    id: 'polynomial-rational', unitNumber: 1, name: 'Unit 1: Polynomial and Rational Functions', shortName: 'Polynomial & Rational',
    description: 'Rates of change, transformations and piecewise models, polynomial zeros and end behavior, division, complex zeros, and rational asymptotes.',
    topicSlugs: ['rates-of-change-precalc', 'polynomial-functions-precalc', 'fundamental-theorem-algebra', 'polynomial-division-remainder-theorem', 'rational-functions-precalc', 'transformations-precalc', 'function-modeling-precalc'],
    exam_weight: '30–40%', color: 'from-fuchsia-500 to-purple-500', icon: '📉',
  },
  {
    id: 'exp-log', unitNumber: 2, name: 'Unit 2: Exponential and Logarithmic Functions', shortName: 'Exponential & Log',
    description: 'Sequences, exponential growth and decay, composition and inverses, logarithms, log equations, and e.',
    topicSlugs: ['sequences-series-precalc', 'exponential-functions-precalc', 'function-composition-inverses-precalc', 'logarithmic-functions-precalc', 'exponential-logarithmic-modeling-precalc'],
    exam_weight: '27–40%', color: 'from-violet-500 to-indigo-500', icon: '📈',
  },
  {
    id: 'trig-polar', unitNumber: 3, name: 'Unit 3: Trigonometric and Polar Functions', shortName: 'Trig & Polar',
    description: 'Unit circle, sine and cosine graphs, inverse trig, identities, and polar graphs.',
    topicSlugs: ['the-unit-circle', 'trigonometric-functions-precalc', 'graphing-trig-functions', 'inverse-trig-functions-precalc', 'solving-trig-equations', 'trigonometric-identities-precalc', 'polar-coordinates-precalc'],
    exam_weight: '30–35%', color: 'from-indigo-500 to-blue-500', icon: '📐',
  },
]

const DOMAIN_BY_SLUG = new Map<string, string>()
for (const [unitId, slugs] of Object.entries(UNIT_TOPICS)) for (const s of slugs) DOMAIN_BY_SLUG.set(s, unitId)

const pool: UnitPoolQuestion[] = precalcQuestionBank
  .filter((q) => DOMAIN_BY_SLUG.has(q.topicSlug))
  .map((q) => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer,
    explanation: q.explanation, domain: DOMAIN_BY_SLUG.get(q.topicSlug)!, topicSlug: q.topicSlug,
  }))

export const PRECALCULUS_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'precalculus',
  courseHubHref: '/precalculus',
  courseTitle: 'Precalculus',
  unitTestRoute: '/precalc-unit-tests',
  units: PRECALCULUS_UNITS,
  pool,
  // No `precalculus` course row exists, so per-topic review links would 404.
  reviewHrefBase: '/precalculus',
}
