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
}

export const CLASS_PLAN_COURSES: ClassPlanCourse[] = [
  // Test prep
  { key: 'mcat', label: 'MCAT', categoryPrefix: 'mcat-full-diagnostic', gated: true },
  { key: 'sat', label: 'SAT', categoryPrefix: 'sat-full-diagnostic' },
  { key: 'act', label: 'ACT', categoryPrefix: 'act-diagnostic' },
  // AP sciences & math
  { key: 'calcab', label: 'AP Calculus AB', categoryPrefix: 'calcab-diagnostic' },
  { key: 'calcbc', label: 'AP Calculus BC', categoryPrefix: 'calcbc-diagnostic' },
  { key: 'ap-precalculus', label: 'AP Precalculus', categoryPrefix: 'ap-precalculus-diagnostic' },
  { key: 'ap-stats', label: 'AP Statistics', categoryPrefix: 'ap-stats-diagnostic' },
  { key: 'ap-bio', label: 'AP Biology', categoryPrefix: 'ap-bio-diagnostic' },
  { key: 'ap-chem', label: 'AP Chemistry', categoryPrefix: 'ap-chem-diagnostic' },
  { key: 'ap-physics1', label: 'AP Physics 1', categoryPrefix: 'ap-physics1-diagnostic' },
  { key: 'ap-physics2', label: 'AP Physics 2', categoryPrefix: 'ap-physics2-diagnostic' },
  { key: 'ap-physics-c-mech', label: 'AP Physics C: Mechanics', categoryPrefix: 'ap-physics-c-mech-diagnostic' },
  { key: 'ap-physics-c-em', label: 'AP Physics C: E&M', categoryPrefix: 'ap-physics-c-em-diagnostic' },
  { key: 'ap-enviro', label: 'AP Environmental Science', categoryPrefix: 'ap-enviro-diagnostic' },
  { key: 'ap-csa', label: 'AP Computer Science A', categoryPrefix: 'ap-csa-diagnostic' },
  { key: 'ap-csp', label: 'AP CS Principles', categoryPrefix: 'ap-csp-diagnostic' },
  // AP humanities & social science
  { key: 'ap-english-lang', label: 'AP English Language', categoryPrefix: 'ap-english-lang-diagnostic' },
  { key: 'ap-english-lit', label: 'AP English Literature', categoryPrefix: 'ap-english-lit-diagnostic' },
  { key: 'ap-us-history', label: 'AP US History', categoryPrefix: 'ap-us-history-diagnostic' },
  { key: 'ap-world-history', label: 'AP World History', categoryPrefix: 'ap-world-history-diagnostic' },
  { key: 'ap-us-gov', label: 'AP US Government', categoryPrefix: 'ap-us-gov-diagnostic' },
  { key: 'ap-human-geo', label: 'AP Human Geography', categoryPrefix: 'ap-human-geo-diagnostic' },
  { key: 'ap-macro', label: 'AP Macroeconomics', categoryPrefix: 'ap-macro-diagnostic' },
  { key: 'ap-micro', label: 'AP Microeconomics', categoryPrefix: 'ap-micro-diagnostic' },
  { key: 'ap-psych', label: 'AP Psychology', categoryPrefix: 'ap-psych-diagnostic' },
  { key: 'ap-aas', label: 'AP African American Studies', categoryPrefix: 'ap-aas-diagnostic' },
  // Core math & other
  { key: 'prealgebra', label: 'Pre-Algebra', categoryPrefix: 'prealgebra-diagnostic' },
  { key: 'algebra1', label: 'Algebra 1', categoryPrefix: 'algebra1-diagnostic' },
  { key: 'geometry', label: 'Geometry', categoryPrefix: 'geometry-diagnostic' },
  { key: 'algebra2', label: 'Algebra 2', categoryPrefix: 'algebra2-diagnostic' },
  { key: 'precalc', label: 'Precalculus', categoryPrefix: 'precalc-diagnostic' },
  { key: 'grade8-math', label: 'Grade 8 Math', categoryPrefix: 'grade8-math-diagnostic' },
  { key: 'ochem', label: 'Organic Chemistry', categoryPrefix: 'ochem-diagnostic' },
]

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
