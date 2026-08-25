/**
 * Course registry for the classroom "Class Plan" tab — the weekly loop where
 * students take a course diagnostic, study their personal recommendations as
 * homework, and the teacher teaches what the CLASS collectively needs.
 *
 * Every diagnostic stores DiagnosticTest rows whose `category` starts with the
 * prefix below (verified against each /api/<x>-diagnostic/history route) and
 * whose results JSON carries recommendedTopics [{slug, name, priority}] in the
 * shared shape — which is all the aggregation needs.
 *
 * `gated`: only the MCAT locks diagnostic retakes behind completing the
 * recommended modules (see /api/mcat-diagnostic/plan-status). For other
 * courses homework completion is shown as information, not a lock.
 */

export interface ClassPlanCourse {
  key: string
  label: string
  categoryPrefix: string
  gated?: boolean
  /** DB Course.slug — links class plans to the curriculum/slide-deck catalog. */
  courseSlug?: string
}

export const CLASS_PLAN_COURSES: ClassPlanCourse[] = [
  // Test prep
  { key: 'mcat', label: 'MCAT', categoryPrefix: 'mcat-full-diagnostic', gated: true, courseSlug: 'mcat-prep', },
  { key: 'sat', label: 'SAT', categoryPrefix: 'sat-full-diagnostic', courseSlug: 'sat-prep', },
  { key: 'act', label: 'ACT', categoryPrefix: 'act-diagnostic', courseSlug: 'act-prep', },
  // AP sciences & math
  { key: 'calcab', label: 'AP Calculus AB', categoryPrefix: 'calcab-diagnostic', courseSlug: 'ap-calculus-ab', },
  { key: 'calcbc', label: 'AP Calculus BC', categoryPrefix: 'calcbc-diagnostic', courseSlug: 'ap-calculus-bc', },
  { key: 'ap-precalculus', label: 'AP Precalculus', categoryPrefix: 'ap-precalculus-diagnostic', courseSlug: 'ap-precalculus', },
  { key: 'ap-stats', label: 'AP Statistics', categoryPrefix: 'ap-stats-diagnostic', courseSlug: 'ap-statistics', },
  { key: 'ap-bio', label: 'AP Biology', categoryPrefix: 'ap-bio-diagnostic', courseSlug: 'ap-biology', },
  { key: 'ap-chem', label: 'AP Chemistry', categoryPrefix: 'ap-chem-diagnostic', courseSlug: 'ap-chemistry', },
  { key: 'ap-physics1', label: 'AP Physics 1', categoryPrefix: 'ap-physics1-diagnostic', courseSlug: 'ap-physics-1', },
  { key: 'ap-physics2', label: 'AP Physics 2', categoryPrefix: 'ap-physics2-diagnostic', courseSlug: 'ap-physics-2', },
  { key: 'ap-physics-c-mech', label: 'AP Physics C: Mechanics', categoryPrefix: 'ap-physics-c-mech-diagnostic', courseSlug: 'ap-physics-c-mechanics', },
  { key: 'ap-physics-c-em', label: 'AP Physics C: E&M', categoryPrefix: 'ap-physics-c-em-diagnostic', courseSlug: 'ap-physics-c-em', },
  { key: 'ap-enviro', label: 'AP Environmental Science', categoryPrefix: 'ap-enviro-diagnostic', courseSlug: 'ap-environmental-science', },
  { key: 'ap-csa', label: 'AP Computer Science A', categoryPrefix: 'ap-csa-diagnostic', courseSlug: 'ap-computer-science-a', },
  { key: 'ap-csp', label: 'AP CS Principles', categoryPrefix: 'ap-csp-diagnostic', courseSlug: 'ap-computer-science-principles', },
  // AP humanities & social science
  { key: 'ap-english-lang', label: 'AP English Language', categoryPrefix: 'ap-english-lang-diagnostic', courseSlug: 'ap-english-language', },
  { key: 'ap-english-lit', label: 'AP English Literature', categoryPrefix: 'ap-english-lit-diagnostic', courseSlug: 'ap-english-literature', },
  { key: 'ap-us-history', label: 'AP US History', categoryPrefix: 'ap-us-history-diagnostic', courseSlug: 'ap-us-history', },
  { key: 'ap-world-history', label: 'AP World History', categoryPrefix: 'ap-world-history-diagnostic', courseSlug: 'ap-world-history', },
  { key: 'ap-us-gov', label: 'AP US Government', categoryPrefix: 'ap-us-gov-diagnostic', courseSlug: 'ap-us-government', },
  { key: 'ap-human-geo', label: 'AP Human Geography', categoryPrefix: 'ap-human-geo-diagnostic', courseSlug: 'ap-human-geography', },
  { key: 'ap-macro', label: 'AP Macroeconomics', categoryPrefix: 'ap-macro-diagnostic', courseSlug: 'ap-macroeconomics', },
  { key: 'ap-micro', label: 'AP Microeconomics', categoryPrefix: 'ap-micro-diagnostic', courseSlug: 'ap-microeconomics', },
  { key: 'ap-psych', label: 'AP Psychology', categoryPrefix: 'ap-psych-diagnostic', courseSlug: 'ap-psychology', },
  { key: 'ap-aas', label: 'AP African American Studies', categoryPrefix: 'ap-aas-diagnostic', courseSlug: 'ap-african-american-studies', },
  // Core math & other
  { key: 'prealgebra', label: 'Pre-Algebra', categoryPrefix: 'prealgebra-diagnostic', courseSlug: 'pre-algebra', },
  { key: 'algebra1', label: 'Algebra 1', categoryPrefix: 'algebra1-diagnostic', courseSlug: 'algebra-1', },
  { key: 'geometry', label: 'Geometry', categoryPrefix: 'geometry-diagnostic', courseSlug: 'geometry', },
  { key: 'algebra2', label: 'Algebra 2', categoryPrefix: 'algebra2-diagnostic', courseSlug: 'algebra-2', },
  { key: 'precalc', label: 'Precalculus', categoryPrefix: 'precalc-diagnostic' },
  { key: 'grade8-math', label: 'Grade 8 Math', categoryPrefix: 'grade8-math-diagnostic', courseSlug: 'grade-8-math', },
  { key: 'ochem', label: 'Organic Chemistry', categoryPrefix: 'ochem-diagnostic' },
]

/**
 * Diagnostic page routes that do not follow the `/<key>-diagnostic` convention.
 * Only one course differs, so this covers the stray rather than listing all 33.
 */
const DIAGNOSTIC_ROUTE_OVERRIDES: Record<string, string> = {
  'ap-aas': '/ap-african-american-studies-diagnostic',
}

/**
 * Where a course's diagnostic lives. Previously only SAT and MCAT were mapped,
 * so an assigned class diagnostic in any of the other 31 courses sent students
 * to /dashboard instead of the test they were told to take.
 */
export function diagnosticRouteForKey(key: string): string {
  return DIAGNOSTIC_ROUTE_OVERRIDES[key] ?? `/${key}-diagnostic`
}

export function classPlanCourse(key: string): ClassPlanCourse | null {
  return CLASS_PLAN_COURSES.find(c => c.key === key) ?? null
}

/** Map a DiagnosticTest.category to its course (prefix match). */
export function courseForCategory(category: string): ClassPlanCourse | null {
  // Longest prefix first so e.g. a hypothetical 'algebra1-…' never claims 'algebra…'.
  let best: ClassPlanCourse | null = null
  for (const c of CLASS_PLAN_COURSES) {
    if (category.startsWith(c.categoryPrefix) && (!best || c.categoryPrefix.length > best.categoryPrefix.length)) {
      best = c
    }
  }
  return best
}

/**
 * Human score label from a diagnostic's results JSON, shape-agnostic:
 * AP stores estimatedAPScore (1–5), SAT/ACT/MCAT store estimatedScore,
 * everything has percentage as a fallback.
 */
export function scoreLabelFromResults(results: unknown): string | null {
  if (!results || typeof results !== 'object') return null
  const r = results as { estimatedAPScore?: unknown; estimatedScore?: unknown; percentage?: unknown }
  if (typeof r.estimatedAPScore === 'number') return `${r.estimatedAPScore}/5`
  if (typeof r.estimatedScore === 'number') return `${r.estimatedScore}`
  if (typeof r.percentage === 'number') return `${r.percentage}%`
  return null
}
