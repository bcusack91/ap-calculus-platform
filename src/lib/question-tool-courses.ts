/**
 * The courses that have the question tools: the mistake log (/<course>/mistakes)
 * and the question bank (/<course>/qbank). Pure and light, so client
 * components can import it.
 *
 * Test prep keeps its short keys ('mcat', 'sat', 'act'), whose answers are
 * logged under the course slugs 'mcat-prep', 'sat-prep' and 'act-prep'. An AP
 * course's key IS its DB course slug ('ap-chemistry'), because every AP
 * surface (diagnostic, exit quiz, unit tests, cycle test, practice exam)
 * already logs its answers under that slug. So the tool URLs are
 * /ap-chemistry/mistakes and /ap-chemistry/qbank.
 */
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'

export const TEST_PREP_TOOL_COURSES = ['mcat', 'sat', 'act'] as const
export type TestPrepToolCourse = (typeof TEST_PREP_TOOL_COURSES)[number]

/**
 * Every AP course with a diagnostic, by DB slug. All 23 have exit pools filed
 * under CED units by their unit-test config, with every item's topic resolving
 * to a production topic (tests/lib/ap-question-tools.test.ts).
 */
export const AP_TOOL_COURSES = [
  'ap-calculus-ab',
  'ap-calculus-bc',
  'ap-precalculus',
  'ap-statistics',
  'ap-biology',
  'ap-chemistry',
  'ap-physics-1',
  'ap-physics-2',
  'ap-physics-c-mechanics',
  'ap-physics-c-em',
  'ap-environmental-science',
  'ap-computer-science-a',
  'ap-computer-science-principles',
  'ap-english-language',
  'ap-english-literature',
  'ap-us-history',
  'ap-world-history',
  'ap-us-government',
  'ap-human-geography',
  'ap-macroeconomics',
  'ap-microeconomics',
  'ap-psychology',
  'ap-african-american-studies',
] as const
export type ApToolCourse = (typeof AP_TOOL_COURSES)[number]

export type ToolCourse = TestPrepToolCourse | ApToolCourse
export const TOOL_COURSES: readonly ToolCourse[] = [...TEST_PREP_TOOL_COURSES, ...AP_TOOL_COURSES]

export function isApToolCourse(c: unknown): c is ApToolCourse {
  return typeof c === 'string' && (AP_TOOL_COURSES as readonly string[]).includes(c)
}

export function isToolCourse(c: unknown): c is ToolCourse {
  return typeof c === 'string' && (TOOL_COURSES as readonly string[]).includes(c)
}

const TEST_PREP_SLUG: Record<TestPrepToolCourse, string> = { mcat: 'mcat-prep', sat: 'sat-prep', act: 'act-prep' }
const TEST_PREP_LABEL: Record<TestPrepToolCourse, string> = { mcat: 'MCAT', sat: 'SAT', act: 'ACT' }

/** The DB course slug a tool course's answers are logged under. */
export function toolCourseSlug(c: ToolCourse): string {
  return isApToolCourse(c) ? c : TEST_PREP_SLUG[c]
}

/** 'MCAT', 'SAT', 'ACT', or the AP course's name ('AP Chemistry'). */
export function toolCourseLabel(c: ToolCourse): string {
  if (!isApToolCourse(c)) return TEST_PREP_LABEL[c]
  return CLASS_PLAN_COURSES.find((p) => p.courseSlug === c)?.label ?? c
}

/** The course hub the tool pages link back to (AP CS Principles' hub path differs from its slug). */
export function toolCourseHubHref(c: ToolCourse): string {
  return c === 'ap-computer-science-principles' ? '/ap-cs-principles' : `/${c}`
}

/** The back link's label: "MCAT Prep", or the AP course's name. */
export function toolCourseHubLabel(c: ToolCourse): string {
  return isApToolCourse(c) ? toolCourseLabel(c) : `${toolCourseLabel(c)} Prep`
}

/** The mistake log and question bank pages. */
export const mistakesHref = (c: ToolCourse) => `/${c}/mistakes`
export const qbankHref = (c: ToolCourse) => `/${c}/qbank`

/** The tool course a hub page shows links for (CourseStudyPlan's courseKey / courseSlug), or null. */
export function toolCourseFor(courseKey: string, courseSlug?: string | null): ToolCourse | null {
  if (courseKey === 'mcat' || courseKey === 'sat' || courseKey === 'act') return courseKey
  if (isApToolCourse(courseSlug)) return courseSlug
  const slug = CLASS_PLAN_COURSES.find((p) => p.key === courseKey)?.courseSlug
  return isApToolCourse(slug) ? slug : null
}

/**
 * Seconds per multiple-choice question at exam pace (May 2027 formats, from
 * ap-phase1-pipeline/AP-2027-FORMATS.md): the MCQ section's minutes / its
 * question count, rounded.
 */
export const AP_SECONDS_PER_QUESTION: Record<ApToolCourse, number> = {
  'ap-calculus-ab': 143, // 42 in 100 min
  'ap-calculus-bc': 143,
  'ap-precalculus': 150, // 42 in 105 min
  'ap-statistics': 129, // 42 in 90 min
  'ap-biology': 90, // 60 in 90 min
  'ap-chemistry': 90, // 60 in 90 min
  'ap-physics-1': 121, // 42 in 85 min
  'ap-physics-2': 121,
  'ap-physics-c-mechanics': 121,
  'ap-physics-c-em': 121,
  'ap-environmental-science': 68, // 80 in 90 min
  'ap-computer-science-a': 129, // 42 in 90 min
  'ap-computer-science-principles': 103, // 70 in 120 min
  'ap-english-language': 80, // 45 in 60 min
  'ap-english-literature': 65, // 55 in 60 min
  'ap-us-history': 60, // 55 in 55 min
  'ap-world-history': 60,
  'ap-us-government': 87, // 55 in 80 min
  'ap-human-geography': 60, // 60 in 60 min
  'ap-macroeconomics': 70, // 60 in 70 min
  'ap-microeconomics': 70,
  'ap-psychology': 72, // 75 in 90 min
  'ap-african-american-studies': 70, // 60 in 70 min
}
