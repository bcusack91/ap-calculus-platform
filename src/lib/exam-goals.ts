/**
 * Score goals + target colleges (ExamGoal rows). Pure config and validation;
 * the route is src/app/api/exam-goals/route.ts.
 */
import { z } from 'zod'
import { findCollege } from '@/data/college-score-ranges'

export type GoalCourse = 'sat' | 'mcat' | 'act' | 'psat'

export const GOAL_COURSES: Record<GoalCourse, { label: string; min: number; max: number; step: number; collegeRanges: 'sat' | 'act' | null }> = {
  sat: { label: 'SAT', min: 400, max: 1600, step: 10, collegeRanges: 'sat' },
  mcat: { label: 'MCAT', min: 472, max: 528, step: 1, collegeRanges: null },
  act: { label: 'ACT', min: 1, max: 36, step: 1, collegeRanges: 'act' },
  psat: { label: 'PSAT/NMSQT', min: 320, max: 1520, step: 10, collegeRanges: null },
}

export function isGoalCourse(v: unknown): v is GoalCourse {
  return typeof v === 'string' && Object.prototype.hasOwnProperty.call(GOAL_COURSES, v)
}

export const MAX_GOAL_COLLEGES = 12

/** A type alias (not an interface) so it stays assignable to Prisma's Json input. */
export type GoalCollege = {
  name: string
  /** The college's middle-50% range on this course's scale, when we know it. */
  low: number | null
  high: number | null
}

export const goalBodySchema = z
  .object({
    course: z.enum(['sat', 'mcat', 'act', 'psat']),
    targetScore: z.number().int(),
    colleges: z
      .array(z.object({ name: z.string().trim().min(1).max(100) }))
      .max(MAX_GOAL_COLLEGES)
      .optional(),
  })
  .superRefine((v, ctx) => {
    const cfg = GOAL_COURSES[v.course]
    if (v.targetScore < cfg.min || v.targetScore > cfg.max) {
      ctx.addIssue({ code: 'custom', path: ['targetScore'], message: `${cfg.label} goals run ${cfg.min}–${cfg.max}.` })
    }
  })

export type GoalBody = z.infer<typeof goalBodySchema>

/**
 * Normalize the submitted colleges: dedupe by name (case-insensitive), and take
 * each known college's range from the curated list — never from the client.
 * Free-text colleges keep no range.
 */
export function normalizeGoalColleges(course: GoalCourse, input: { name: string }[] | undefined): GoalCollege[] {
  const which = GOAL_COURSES[course].collegeRanges
  const seen = new Set<string>()
  const out: GoalCollege[] = []
  for (const item of input ?? []) {
    const name = item.name.trim().replace(/\s+/g, ' ')
    const key = name.toLowerCase()
    if (!name || seen.has(key)) continue
    seen.add(key)
    const known = findCollege(name)
    const range = known && which ? known[which] : null
    out.push({ name: known?.name ?? name, low: range?.low ?? null, high: range?.high ?? null })
  }
  return out
}

/** Read a stored colleges Json back into a clean list (tolerates old/odd shapes). */
export function parseStoredColleges(raw: unknown): GoalCollege[] {
  if (!Array.isArray(raw)) return []
  const out: GoalCollege[] = []
  for (const r of raw) {
    const o = r && typeof r === 'object' ? (r as Record<string, unknown>) : null
    if (!o || typeof o.name !== 'string' || !o.name.trim()) continue
    out.push({
      name: o.name,
      low: typeof o.low === 'number' ? o.low : null,
      high: typeof o.high === 'number' ? o.high : null,
    })
  }
  return out
}

export type RangeStanding = 'above' | 'within' | 'below' | 'unknown'

/** Where a score sits against a middle-50% range. */
export function rangeStanding(score: number | null, low: number | null, high: number | null): RangeStanding {
  if (score == null || low == null || high == null) return 'unknown'
  if (score > high) return 'above'
  if (score >= low) return 'within'
  return 'below'
}

/** 0–1 progress from the scale floor toward the goal. */
export function goalProgress(course: GoalCourse, current: number | null, target: number): number {
  if (current == null) return 0
  const { min } = GOAL_COURSES[course]
  if (target <= min) return 1
  return Math.max(0, Math.min(1, (current - min) / (target - min)))
}
