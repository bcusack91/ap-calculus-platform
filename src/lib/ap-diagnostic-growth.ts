/**
 * One student's AP diagnostic growth per course, for the teacher's student
 * report and study report: the first sitting ever, the latest sitting, and
 * the change between them as a band ("up about 1, range 0 to +2"), never a
 * bare point (src/lib/ap-score-band.ts).
 *
 * Every AP course in CLASS_PLAN_COURSES counts (diagnostic v1 forms and v2
 * alike: both categories start with the course prefix). AP practice exams are
 * not diagnostics and are left out.
 */
import { prisma } from '@/lib/prisma'
import { CLASS_PLAN_COURSES, courseForCategory } from '@/lib/class-plan-config'
import { apBandLabel, apGrowthBand, apSittingOf, type ApGrowthBand } from '@/lib/ap-score-band'

const AP_COURSES = CLASS_PLAN_COURSES.filter((c) => c.courseSlug?.startsWith('ap-'))

export interface ApSittingSummary {
  id: string
  takenAt: string
  /** "3–4/5", or "4/5" when the band is one score. */
  label: string
  score: number
}

export interface ApCourseGrowth {
  courseKey: string
  course: string
  sittings: number
  first: ApSittingSummary
  latest: ApSittingSummary
  /** First → latest, as a band. Null with one sitting, or when a sitting lacks question counts. */
  growth: ApGrowthBand | null
}

type Row = { id: string; category: string; createdAt: Date; results: unknown }

/** Group a student's diagnostic rows by AP course and band first → latest. Newest course activity first. */
export function apCourseGrowth(rows: Row[]): ApCourseGrowth[] {
  const byCourse = new Map<string, { label: string; rows: Row[] }>()
  for (const r of rows) {
    const course = courseForCategory(r.category)
    if (!course || !AP_COURSES.some((c) => c.key === course.key)) continue
    if (!apSittingOf(r.results)) continue
    const entry = byCourse.get(course.key) ?? { label: course.label, rows: [] }
    entry.rows.push(r)
    byCourse.set(course.key, entry)
  }
  const out: ApCourseGrowth[] = []
  for (const [courseKey, { label, rows: list }] of byCourse) {
    list.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
    const firstRow = list[0]
    const latestRow = list[list.length - 1]
    const first = apSittingOf(firstRow.results)!
    const latest = apSittingOf(latestRow.results)!
    const summary = (r: Row, s: typeof first): ApSittingSummary => ({
      id: r.id,
      takenAt: r.createdAt.toISOString(),
      label: apBandLabel(s),
      score: s.score,
    })
    out.push({
      courseKey,
      course: label,
      sittings: list.length,
      first: summary(firstRow, first),
      latest: summary(latestRow, latest),
      growth: list.length >= 2 ? apGrowthBand(first, latest) : null,
    })
  }
  return out.sort((a, b) => b.latest.takenAt.localeCompare(a.latest.takenAt))
}

/** Load and band every AP diagnostic sitting of one student. */
export async function loadApDiagnosticGrowth(userId: string): Promise<ApCourseGrowth[]> {
  const rows = await prisma.diagnosticTest.findMany({
    where: { userId, OR: AP_COURSES.map((c) => ({ category: { startsWith: c.categoryPrefix } })) },
    orderBy: { createdAt: 'asc' },
    take: 200,
    select: { id: true, category: true, createdAt: true, results: true },
  })
  return apCourseGrowth(rows ?? [])
}
