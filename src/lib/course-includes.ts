/**
 * Course inclusion: one course's syllabus contains another's.
 *
 * AP Calculus BC is AP Calculus AB plus the BC-only topics, so a BC student
 * must see, study and get credit for every AB lesson. The schema is strictly
 * Topic -> Category -> Course (no join table), and Topic.slug is unique, so the
 * AB rows are shared, not copied: progress, exit attempts, entrance mastery,
 * plan clears and cards are keyed by topic and carry over between the courses
 * automatically. This module is the single place that knows which courses
 * include which, and how the combined course is laid out by CED unit.
 *
 * Pure and client-safe (no Prisma import): the course hub, the unit tests, the
 * qbank, the lesson UI and the server queries all read it. Server-only
 * resolution of a student's course lives in src/lib/study-course-server.ts.
 *
 * Inclusion is one-directional (AB never includes BC), so nothing BC-only leaks
 * into an AB student's views. Guard: tests/lib/course-includes.test.ts.
 */

export interface CourseInclude {
  /** Course slugs whose topics this course also contains. */
  includes: string[]
  /**
   * Topics of an included course that this course does NOT contain (owner
   * decision D2: the AB exam review targets the AB exam, so BC leaves it out).
   */
  excludeTopics: string[]
}

export const COURSE_INCLUDES: Record<string, CourseInclude> = {
  'ap-calculus-bc': {
    includes: ['ap-calculus-ab'],
    excludeTopics: ['ap-exam-review-calcab'],
  },
}

/** Display names of the fixed-layout courses (COURSE_UNIT_LAYOUT); client labels need no DB read. */
export const INCLUDE_COURSE_NAMES: Record<string, string> = {
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-precalculus': 'AP Precalculus',
}

/** `slug` followed by every course it includes (`ap-calculus-bc` -> [bc, ab]). */
export function coursesIn(slug: string): string[] {
  const inc = COURSE_INCLUDES[slug]
  return inc ? [slug, ...inc.includes] : [slug]
}

/** `slug` followed by every course that includes it (`ap-calculus-ab` -> [ab, bc]). */
export function coursesContaining(slug: string): string[] {
  const out = [slug]
  for (const [course, inc] of Object.entries(COURSE_INCLUDES)) {
    if (inc.includes.includes(slug)) out.push(course)
  }
  return out
}

/** True when `slug` includes another course's topics. */
export function hasIncludedCourses(slug: string): boolean {
  return coursesIn(slug).length > 1
}

/** Topic slugs of included courses that `slug` leaves out. */
export function excludedTopicsOf(slug: string): string[] {
  return COURSE_INCLUDES[slug]?.excludeTopics ?? []
}

/** Does course `courseSlug` contain the topic `topicSlug`, which belongs to `topicCourseSlug`? */
export function courseContainsTopic(courseSlug: string, topicCourseSlug: string, topicSlug: string): boolean {
  if (courseSlug === topicCourseSlug) return true
  if (!coursesIn(courseSlug).includes(topicCourseSlug)) return false
  return !excludedTopicsOf(courseSlug).includes(topicSlug)
}

/**
 * A Prisma `Topic` where-fragment for "the topics of this course", included
 * courses and exclusions applied. Spread or nest it wherever a topic filter
 * goes: `topic: courseTopicWhere(slug)`, `where: { ...courseTopicWhere(slug), ... }`.
 * For a course with no inclusions it is exactly the old
 * `{ category: { course: { slug } } }`.
 */
export function courseTopicWhere(slug: string): {
  category: { course: { slug: string | { in: string[] } } }
  slug?: { notIn: string[] }
} {
  const courses = coursesIn(slug)
  const excluded = excludedTopicsOf(slug)
  return {
    category: { course: { slug: courses.length === 1 ? courses[0] : { in: courses } } },
    ...(excluded.length > 0 ? { slug: { notIn: excluded } } : {}),
  }
}

/** courseTopicWhere for several courses at once (an OR of each). */
export function coursesTopicWhere(slugs: string[]): { OR: ReturnType<typeof courseTopicWhere>[] } {
  return { OR: [...new Set(slugs)].map(courseTopicWhere) }
}

// ---------------------------------------------------------------------------
// CED layout of the fixed-layout courses: AP Calculus AB/BC (owner decisions
// D1-D3, Oct 2026) and AP Precalculus (precalc-final PLAN.md, Oct 2026).
// ---------------------------------------------------------------------------

/** One Category in its canonical shape (the prisma/restructure-*.ts target). */
export interface CourseCategory {
  slug: string
  course: string
  order: number
  name: string
  /** Topic slugs in teaching (CED) order; Topic.order = index + 1. */
  topics: string[]
}
/** @deprecated name kept for the calculus callers; same shape as CourseCategory. */
export type CalcCategory = CourseCategory

/**
 * Every live calculus Category, in course order. Topic lists are in CED order.
 * Unit 1 is the 11 granular topics plus the hub lesson as the unit review (D3);
 * the AB exam-prep section stays (D1).
 */
export const CALC_CATEGORIES: CalcCategory[] = [
  {
    slug: 'calcab-limits-continuity',
    course: 'ap-calculus-ab',
    order: 1,
    name: 'Unit 1: Limits and Continuity',
    topics: [
      'what-is-a-limit',
      'one-sided-limits',
      'estimating-limits-graphs',
      'estimating-limits-tables',
      'direct-substitution-method',
      'factoring-method-limits',
      'rationalizing-technique-limits',
      'types-of-discontinuity',
      'continuity-introduction',
      'infinite-limits-vertical-asymptotes',
      'limits-at-infinity',
      'limits-continuity-calcab',
    ],
  },
  {
    slug: 'calcab-differentiation-fundamentals',
    course: 'ap-calculus-ab',
    order: 2,
    name: 'Unit 2: Differentiation: Definition and Fundamental Properties',
    topics: ['definition-of-derivative-calcab', 'basic-differentiation-rules-calcab', 'derivatives-of-exponential-functions'],
  },
  {
    slug: 'calcab-differentiation-composite',
    course: 'ap-calculus-ab',
    order: 3,
    name: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions',
    topics: ['chain-rule-calcab', 'implicit-differentiation', 'inverse-functions-derivatives-calcab'],
  },
  {
    slug: 'calcab-contextual-applications',
    course: 'ap-calculus-ab',
    order: 4,
    name: 'Unit 4: Contextual Applications of Differentiation',
    topics: ['particle-motion-calcab', 'related-rates', 'linearization-differentials-calcab', 'lhopitals-rule'],
  },
  {
    slug: 'calcab-applications-derivatives',
    course: 'ap-calculus-ab',
    order: 5,
    name: 'Unit 5: Analytical Applications of Differentiation',
    topics: ['theorem-applications-calcab', 'applications-of-derivatives-calcab', 'second-derivative-test', 'optimization-calcab'],
  },
  {
    slug: 'calcab-integration',
    course: 'ap-calculus-ab',
    order: 6,
    name: 'Unit 6: Integration and Accumulation of Change',
    topics: [
      'definite-integrals-calcab',
      'accumulation-functions-calcab',
      'antiderivatives-indefinite-integrals-calcab',
      'u-substitution-calcab',
    ],
  },
  {
    slug: 'calcab-differential-equations',
    course: 'ap-calculus-ab',
    order: 7,
    name: 'Unit 7: Differential Equations',
    topics: ['differential-equations-calcab', 'exponential-models-calcab'],
  },
  {
    slug: 'calcab-integration-applications',
    course: 'ap-calculus-ab',
    order: 8,
    name: 'Unit 8: Applications of Integration',
    topics: ['integration-applications-calcab', 'area-between-curves-calcab', 'volumes-of-revolution-calcab'],
  },
  {
    slug: 'calcab-exam-prep',
    course: 'ap-calculus-ab',
    order: 9,
    name: 'AP Exam Preparation',
    topics: ['tables-data-calcab', 'free-response-strategies-calcab', 'ap-exam-review-calcab'],
  },
  {
    slug: 'calcbc-advanced-integration',
    course: 'ap-calculus-bc',
    order: 6,
    name: 'Unit 6 (BC): Integration by Parts, Partial Fractions, Improper Integrals',
    topics: ['integration-by-parts-calcbc', 'partial-fractions-calcbc', 'improper-integrals-calcbc', 'advanced-integration-calcbc'],
  },
  {
    slug: 'calcbc-advanced-de',
    course: 'ap-calculus-bc',
    order: 7,
    name: 'Unit 7 (BC): Euler’s Method and Logistic Models',
    topics: ['euler-method-advanced-calcbc', 'logistic-models-calcbc'],
  },
  {
    slug: 'calcbc-arc-length',
    course: 'ap-calculus-bc',
    order: 8,
    name: 'Unit 8 (BC): Arc Length',
    topics: ['arc-length-surface-area-calcbc'],
  },
  {
    slug: 'calcbc-parametric-polar-vector',
    course: 'ap-calculus-bc',
    order: 9,
    name: 'Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions',
    topics: ['parametric-curves-calculus-calcbc', 'vector-valued-functions-calcbc', 'polar-calculus-calcbc'],
  },
  {
    slug: 'calcbc-sequences-series',
    course: 'ap-calculus-bc',
    order: 10,
    name: 'Unit 10: Infinite Sequences and Series',
    topics: [
      'infinite-sequences-calcbc',
      'infinite-series-calcbc',
      'alternating-series-calcbc',
      'convergence-tests-summary-calcbc',
      'taylor-maclaurin-series-calcbc',
      'lagrange-error-bound-calcbc',
      'power-series-calcbc',
      'series-applications-calcbc',
    ],
  },
  {
    slug: 'calcbc-exam-prep',
    course: 'ap-calculus-bc',
    order: 11,
    name: 'BC Exam Preparation',
    topics: ['bc-exam-strategies-calcbc', 'review-connections-calcbc'],
  },
]

/**
 * Calculus Categories retired by the Oct 2026 restructure (legacy duplicates of
 * the CED units), each with the live unit its /categories URL 308s to
 * (next.config.ts). prisma/restructure-calc.ts deletes them.
 */
export const RETIRED_CALC_CATEGORIES: Record<string, { course: string; redirect: string }> = {
  derivatives: { course: 'ap-calculus-ab', redirect: 'calcab-differentiation-fundamentals' },
  'applications-of-derivatives': { course: 'ap-calculus-ab', redirect: 'calcab-applications-derivatives' },
  integration: { course: 'ap-calculus-ab', redirect: 'calcab-integration' },
  'parametric-polar': { course: 'ap-calculus-bc', redirect: 'calcbc-parametric-polar-vector' },
  'sequences-series': { course: 'ap-calculus-bc', redirect: 'calcbc-sequences-series' },
  'power-taylor-series': { course: 'ap-calculus-bc', redirect: 'calcbc-sequences-series' },
  'calcbc-power-taylor': { course: 'ap-calculus-bc', redirect: 'calcbc-sequences-series' },
}

// ---------------------------------------------------------------------------
// AP Precalculus (precalc-final PLAN.md "Canonical layout", Oct 2026): the three
// assessed CED units plus exam prep. Unit 4 (parameters, vectors, matrices) is
// not on the exam and has no rows. Read by the hub, /categories, the competitive
// topics route, the teacher lobby and prisma/restructure-precalc.ts.
// ---------------------------------------------------------------------------

export const PRECALC_CATEGORIES: CourseCategory[] = [
  {
    slug: 'precalc-polynomial-rational',
    course: 'ap-precalculus',
    order: 1,
    name: 'Unit 1: Polynomial and Rational Functions',
    topics: [
      'rates-of-change-precalc', // 1.1-1.4
      'polynomial-functions-precalc', // 1.5-1.6, 1.10
      'fundamental-theorem-algebra', // 1.5 complex zeros
      'polynomial-division-remainder-theorem', // 1.11
      'rational-functions-precalc', // 1.7-1.9, 1.12
      'transformations-precalc', // 1.12
      'function-modeling-precalc', // 1.13-1.14 (NEW, Oct 2026; FRQ Q2)
    ],
  },
  {
    slug: 'precalc-exponential-logarithmic',
    course: 'ap-precalculus',
    order: 2,
    name: 'Unit 2: Exponential and Logarithmic Functions',
    topics: [
      'sequences-series-precalc', // 2.1-2.2
      'exponential-functions-precalc', // 2.3-2.5
      'function-composition-inverses-precalc', // 2.7-2.8
      'logarithmic-functions-precalc', // 2.9-2.13
      'exponential-logarithmic-modeling-precalc', // 2.6, 2.14-2.15 (NEW, Oct 2026)
    ],
  },
  {
    slug: 'precalc-trig-functions',
    course: 'ap-precalculus',
    order: 3,
    name: 'Unit 3: Trigonometric and Polar Functions',
    topics: [
      'the-unit-circle', // 3.2-3.3 recall + game (owner O6)
      'trigonometric-functions-precalc', // 3.1-3.4, 3.8
      'graphing-trig-functions', // 3.5-3.7 (FRQ Q3)
      'inverse-trig-functions-precalc', // 3.9
      'solving-trig-equations', // 3.10
      'trigonometric-identities-precalc', // 3.11-3.12
      'polar-coordinates-precalc', // 3.13-3.15
    ],
  },
  {
    slug: 'precalc-exam-prep',
    course: 'ap-precalculus',
    order: 4,
    name: 'AP Exam Preparation',
    // Wave 3 (PLAN.md G4), Oct 2026: the restructure creates these two rows.
    topics: [
      'precalc-frq-strategies', // the four 2027 FRQ roles (Q1-Q4)
      'precalc-exam-review', // cumulative Units 1-3 review, Part A/B pacing
    ],
  },
]

/** Canonical titles of the AP Precalculus topics (PLAN.md); the restructure applies them, the lobby displays them. */
export const PRECALC_TOPIC_TITLES: Record<string, string> = {
  'rates-of-change-precalc': 'Rates of Change',
  'polynomial-functions-precalc': 'Polynomial Functions',
  'fundamental-theorem-algebra': 'Complex Zeros and the Fundamental Theorem of Algebra',
  'polynomial-division-remainder-theorem': 'Polynomial Division and Equivalent Forms',
  'rational-functions-precalc': 'Rational Functions',
  'transformations-precalc': 'Transformations of Functions',
  'function-modeling-precalc': 'Function Model Selection and Construction',
  'sequences-series-precalc': 'Sequences',
  'exponential-functions-precalc': 'Exponential Functions',
  'function-composition-inverses-precalc': 'Function Composition and Inverses',
  'logarithmic-functions-precalc': 'Logarithmic Functions',
  'exponential-logarithmic-modeling-precalc': 'Exponential and Logarithmic Data Modeling and Semi-log Plots',
  'the-unit-circle': 'The Unit Circle',
  'trigonometric-functions-precalc': 'Trigonometric Functions',
  'graphing-trig-functions': 'Sinusoidal Functions and Modeling',
  'inverse-trig-functions-precalc': 'Inverse Trigonometric Functions',
  'solving-trig-equations': 'Solving Trigonometric Equations and Inequalities',
  'trigonometric-identities-precalc': 'Trigonometric Identities and Equivalent Forms',
  'polar-coordinates-precalc': 'Polar Coordinates and Polar Functions',
  'precalc-frq-strategies': 'Free-Response Strategies: the Four Question Types',
  'precalc-exam-review': 'AP Precalculus Exam Review',
}

/**
 * AP Precalculus Categories retired by the Oct 2026 restructure (the Jan-2026
 * duplicate units and the two non-CED groupings), each with the live unit its
 * /categories URL 308s to (next.config.ts). prisma/restructure-precalc.ts
 * deletes them once their rows are moved or retired.
 */
export const RETIRED_PRECALC_CATEGORIES: Record<string, { course: string; redirect: string }> = {
  'function-fundamentals': { course: 'ap-precalculus', redirect: 'precalc-polynomial-rational' },
  'polynomial-rational-functions': { course: 'ap-precalculus', redirect: 'precalc-polynomial-rational' },
  'exponential-logarithmic-functions': { course: 'ap-precalculus', redirect: 'precalc-exponential-logarithmic' },
  'precalc-function-analysis': { course: 'ap-precalculus', redirect: 'precalc-exponential-logarithmic' },
  'precalc-sequences-conics': { course: 'ap-precalculus', redirect: 'precalc-exponential-logarithmic' },
  'trigonometric-functions': { course: 'ap-precalculus', redirect: 'precalc-trig-functions' },
}

/** Every retired Category of a fixed-layout course (next.config.ts and the sitemap read this). */
export const RETIRED_COURSE_CATEGORIES: Record<string, { course: string; redirect: string }> = {
  ...RETIRED_CALC_CATEGORIES,
  ...RETIRED_PRECALC_CATEGORIES,
}

/** One section of a course hub: a CED unit (or exam prep) and its topics in order. */
export interface CourseUnitSection {
  /** Stable key: 'unit-6', 'exam-prep'. */
  key: string
  /** CED unit number, or null for exam prep. */
  unitNumber: number | null
  name: string
  /** Categories whose topics make up the section (owning course first). */
  categories: string[]
  /** Topic slugs in teaching order (AB topics first in a shared unit). */
  topics: string[]
}

const calcCategory = (slug: string): CalcCategory => {
  const c = CALC_CATEGORIES.find((x) => x.slug === slug)
  if (!c) throw new Error(`unknown calc category ${slug}`)
  return c
}

/** Unit names of the 10-unit BC CED (same strings as the BC unit tests). */
export const CALC_BC_UNIT_NAMES: Record<number, string> = {
  1: 'Unit 1: Limits and Continuity',
  2: 'Unit 2: Differentiation: Definition and Fundamental Properties',
  3: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions',
  4: 'Unit 4: Contextual Applications of Differentiation',
  5: 'Unit 5: Analytical Applications of Differentiation',
  6: 'Unit 6: Integration and Accumulation of Change',
  7: 'Unit 7: Differential Equations',
  8: 'Unit 8: Applications of Integration',
  9: 'Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions',
  10: 'Unit 10: Infinite Sequences and Series',
}

function buildBcLayout(): CourseUnitSection[] {
  const units: [number, string[]][] = [
    [1, ['calcab-limits-continuity']],
    [2, ['calcab-differentiation-fundamentals']],
    [3, ['calcab-differentiation-composite']],
    [4, ['calcab-contextual-applications']],
    [5, ['calcab-applications-derivatives']],
    [6, ['calcab-integration', 'calcbc-advanced-integration']],
    [7, ['calcab-differential-equations', 'calcbc-advanced-de']],
    [8, ['calcab-integration-applications', 'calcbc-arc-length']],
    [9, ['calcbc-parametric-polar-vector']],
    [10, ['calcbc-sequences-series']],
  ]
  const sections: CourseUnitSection[] = units.map(([n, cats]) => ({
    key: `unit-${n}`,
    unitNumber: n,
    name: CALC_BC_UNIT_NAMES[n],
    categories: cats,
    topics: cats.flatMap((c) => calcCategory(c).topics),
  }))
  // Exam prep: the BC section plus AB's tables and FRQ-strategy lessons (BC
  // FRQs share those formats); the AB exam review is left out (D2).
  const abPrep = calcCategory('calcab-exam-prep').topics.filter(
    (t) => !COURSE_INCLUDES['ap-calculus-bc'].excludeTopics.includes(t),
  )
  sections.push({
    key: 'exam-prep',
    unitNumber: null,
    name: 'BC Exam Preparation',
    categories: ['calcbc-exam-prep', 'calcab-exam-prep'],
    topics: [...abPrep, ...calcCategory('calcbc-exam-prep').topics],
  })
  return sections
}

/** An exam-prep Category is the one section without a CED unit number. */
const isExamPrepCategory = (c: CourseCategory) => /-exam-prep$/.test(c.slug)

/** One hub section per Category of `course`, in Category order (a course with no shared units). */
function buildCategoryLayout(course: string, categories: CourseCategory[]): CourseUnitSection[] {
  return categories
    .filter((c) => c.course === course)
    .map((c) => ({
      key: isExamPrepCategory(c) ? 'exam-prep' : `unit-${c.order}`,
      unitNumber: isExamPrepCategory(c) ? null : c.order,
      name: c.name,
      categories: [c.slug],
      topics: c.topics,
    }))
}

const COURSE_UNIT_LAYOUT: Record<string, CourseUnitSection[]> = {
  'ap-calculus-ab': buildCategoryLayout('ap-calculus-ab', CALC_CATEGORIES),
  'ap-calculus-bc': buildBcLayout(),
  'ap-precalculus': buildCategoryLayout('ap-precalculus', PRECALC_CATEGORIES),
}

/**
 * The hub layout of a course whose sections are fixed in code (the calculus
 * courses), or null for a course laid out by its DB Categories.
 */
export function courseCategoryLayout(slug: string): CourseUnitSection[] | null {
  return COURSE_UNIT_LAYOUT[slug] ?? null
}

/** Every topic slug a fixed layout lists, in order (null when none). */
export function courseLayoutTopics(slug: string): string[] | null {
  const layout = courseCategoryLayout(slug)
  return layout ? layout.flatMap((s) => s.topics) : null
}
