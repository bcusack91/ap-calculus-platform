import { algebra1QuestionBank } from '@/data/competitive-questions/algebra1-bank'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * Algebra 1 unit tests.
 *
 * Unlike the AP courses (which have a purpose-built exit-quiz pool tagged with a
 * `domain`), Algebra 1's ~900 questions live in the competitive bank tagged only
 * by `topicSlug`. UNIT_TOPICS below groups those slugs into the eight units a
 * standard Algebra 1 course is taught in, and the adapter stamps each question
 * with the matching `domain` the unit-test engine filters on.
 */

const UNIT_TOPICS: Record<string, string[]> = {
  'linear-equations': [
    'solving-linear-equations-algebra1',
    'linear-inequalities-algebra1',
    'absolute-value-algebra1',
    'compound-absolute-value-inequalities-alg1',
    'word-problems-linear-algebra1',
  ],
  'linear-functions': [
    'slope-intercept-form-algebra1',
    'graphing-linear-equations-algebra1',
    'functions-basics-algebra1',
    'domain-range-algebra1',
  ],
  systems: ['solving-systems-algebra1', 'graphing-systems-algebra1'],
  polynomials: [
    'exponent-rules-algebra1',
    'polynomial-operations-algebra1',
    'multiplying-polynomials-algebra1',
    'factoring-algebra1',
  ],
  quadratics: [
    'solving-quadratics-algebra1',
    'quadratic-formula-detailed-algebra1',
    'completing-the-square',
    'graphing-quadratics-algebra1',
  ],
  'radicals-exponentials': [
    'simplifying-radicals-alg1',
    'radical-operations-algebra1',
    'exponential-growth-decay-alg1',
    'arithmetic-geometric-sequences-alg1',
  ],
  proportions: ['ratios-rates-algebra1', 'proportions-algebra1', 'percent-problems-algebra1'],
  statistics: [
    'mean-median-mode-algebra1',
    'box-plots',
    'outliers-in-data',
    'linear-regression-correlation-alg1',
  ],
}

export const ALGEBRA_1_UNITS: UnitDef[] = [
  { id: 'linear-equations', unitNumber: 1, name: 'Unit 1: Solving Equations & Inequalities', shortName: 'Equations', description: 'Multi-step equations, inequalities, absolute value, and word problems.', topicSlugs: UNIT_TOPICS['linear-equations'], exam_weight: 'Core', color: 'from-sky-500 to-blue-500', icon: '⚖️' },
  { id: 'linear-functions', unitNumber: 2, name: 'Unit 2: Linear Functions & Graphing', shortName: 'Linear Functions', description: 'Slope-intercept form, graphing lines, function notation, domain and range.', topicSlugs: UNIT_TOPICS['linear-functions'], exam_weight: 'Core', color: 'from-blue-500 to-indigo-500', icon: '📈' },
  { id: 'systems', unitNumber: 3, name: 'Unit 3: Systems of Equations', shortName: 'Systems', description: 'Solving systems by substitution, elimination, and graphing.', topicSlugs: UNIT_TOPICS.systems, exam_weight: 'Core', color: 'from-indigo-500 to-violet-500', icon: '🔀' },
  { id: 'polynomials', unitNumber: 4, name: 'Unit 4: Exponents & Polynomials', shortName: 'Polynomials', description: 'Exponent rules, polynomial arithmetic, multiplying, and factoring.', topicSlugs: UNIT_TOPICS.polynomials, exam_weight: 'Core', color: 'from-violet-500 to-purple-500', icon: '🧮' },
  { id: 'quadratics', unitNumber: 5, name: 'Unit 5: Quadratic Equations', shortName: 'Quadratics', description: 'Factoring, the quadratic formula, completing the square, and parabolas.', topicSlugs: UNIT_TOPICS.quadratics, exam_weight: 'Core', color: 'from-purple-500 to-fuchsia-500', icon: '📐' },
  { id: 'radicals-exponentials', unitNumber: 6, name: 'Unit 6: Radicals & Exponential Functions', shortName: 'Radicals & Exponentials', description: 'Simplifying radicals, radical operations, exponential growth/decay, sequences.', topicSlugs: UNIT_TOPICS['radicals-exponentials'], exam_weight: 'Core', color: 'from-fuchsia-500 to-pink-500', icon: '√' },
  { id: 'proportions', unitNumber: 7, name: 'Unit 7: Ratios, Proportions & Percents', shortName: 'Proportions', description: 'Ratios and rates, proportional reasoning, and percent problems.', topicSlugs: UNIT_TOPICS.proportions, exam_weight: 'Core', color: 'from-pink-500 to-rose-500', icon: '⅗' },
  { id: 'statistics', unitNumber: 8, name: 'Unit 8: Data & Statistics', shortName: 'Statistics', description: 'Measures of center, box plots, outliers, and lines of best fit.', topicSlugs: UNIT_TOPICS.statistics, exam_weight: 'Core', color: 'from-rose-500 to-orange-500', icon: '📊' },
]

/** topicSlug → unit id, inverted once at module load. */
const DOMAIN_BY_SLUG = new Map<string, string>()
for (const [unitId, slugs] of Object.entries(UNIT_TOPICS)) {
  for (const s of slugs) DOMAIN_BY_SLUG.set(s, unitId)
}

/** Bank questions stamped with the `domain` the engine filters on. */
const pool: UnitPoolQuestion[] = algebra1QuestionBank
  .filter((q) => DOMAIN_BY_SLUG.has(q.topicSlug))
  .map((q) => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    domain: DOMAIN_BY_SLUG.get(q.topicSlug)!,
    topicSlug: q.topicSlug,
  }))

export const ALGEBRA_1_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'algebra-1',
  courseHubHref: '/courses/algebra-1',
  courseTitle: 'Algebra 1',
  unitTestRoute: '/algebra1-unit-tests',
  units: ALGEBRA_1_UNITS,
  pool,
}
