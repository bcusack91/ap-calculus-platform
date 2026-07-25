import { precalcQuestionBank } from '@/data/competitive-questions/precalc-bank'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * Precalculus unit tests. The competitive bank carries 27 topics × 10 questions
 * tagged by `topicSlug`; UNIT_TOPICS groups them into the six units a standard
 * precalculus course is taught in, and the adapter stamps the `domain` the
 * unit-test engine filters on.
 */

const UNIT_TOPICS: Record<string, string[]> = {
  functions: [
    'composite-functions', 'inverse-functions', 'transformations-of-functions',
    'piecewise-functions', 'rates-of-change',
  ],
  'polynomial-rational': [
    'polynomial-functions-end-behavior', 'polynomial-zeros-multiplicity',
    'polynomial-division', 'rational-functions-asymptotes',
    'complex-numbers-fundamental-theorem',
  ],
  'exponential-log': [
    'exponential-functions-growth-decay', 'exponential-models-applications',
    'logarithmic-functions-properties', 'logarithmic-equations', 'natural-log-and-e',
  ],
  trigonometry: [
    'trigonometric-ratios-unit-circle', 'graphs-of-sine-and-cosine',
    'inverse-trig-functions', 'trig-identities-pythagorean', 'law-of-sines-and-cosines',
  ],
  'vectors-matrices-polar': [
    'vectors-in-two-dimensions', 'matrices-and-determinants',
    'systems-of-equations-matrices', 'parametric-equations-motion', 'polar-coordinates-graphs',
  ],
  sequences: ['sequences-and-series', 'arithmetic-geometric-sequences'],
}

export const PRECALCULUS_UNITS: UnitDef[] = [
  { id: 'functions', unitNumber: 1, name: 'Unit 1: Functions & Transformations', shortName: 'Functions', description: 'Composition, inverses, transformations, piecewise functions, and rates of change.', topicSlugs: UNIT_TOPICS.functions, exam_weight: 'Core', color: 'from-fuchsia-500 to-purple-500', icon: '🔗' },
  { id: 'polynomial-rational', unitNumber: 2, name: 'Unit 2: Polynomial & Rational Functions', shortName: 'Polynomial & Rational', description: 'End behavior, zeros and multiplicity, division, asymptotes, complex zeros.', topicSlugs: UNIT_TOPICS['polynomial-rational'], exam_weight: 'Core', color: 'from-purple-500 to-violet-500', icon: '📉' },
  { id: 'exponential-log', unitNumber: 3, name: 'Unit 3: Exponential & Logarithmic Functions', shortName: 'Exponential & Log', description: 'Growth and decay, log properties, solving log equations, and e.', topicSlugs: UNIT_TOPICS['exponential-log'], exam_weight: 'Core', color: 'from-violet-500 to-indigo-500', icon: '📈' },
  { id: 'trigonometry', unitNumber: 4, name: 'Unit 4: Trigonometry', shortName: 'Trigonometry', description: 'Unit circle, sine and cosine graphs, inverse trig, identities, and the laws of sines/cosines.', topicSlugs: UNIT_TOPICS.trigonometry, exam_weight: 'Core', color: 'from-indigo-500 to-blue-500', icon: '📐' },
  { id: 'vectors-matrices-polar', unitNumber: 5, name: 'Unit 5: Vectors, Matrices, Parametric & Polar', shortName: 'Vectors & Matrices', description: 'Two-dimensional vectors, matrices and determinants, parametric motion, polar graphs.', topicSlugs: UNIT_TOPICS['vectors-matrices-polar'], exam_weight: 'Core', color: 'from-blue-500 to-cyan-500', icon: '🧭' },
  { id: 'sequences', unitNumber: 6, name: 'Unit 6: Sequences & Series', shortName: 'Sequences', description: 'Arithmetic and geometric sequences, and series.', topicSlugs: UNIT_TOPICS.sequences, exam_weight: 'Core', color: 'from-cyan-500 to-teal-500', icon: '🔢' },
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
