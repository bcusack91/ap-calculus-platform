/**
 * A student's tests a teacher can open question by question: diagnostics,
 * MCAT and ACT full-lengths, SAT/PSAT practice tests and cycle unit tests,
 * newest first. Each links to the shared review page in teacher mode
 * (/review/<kind>/<id>?class=…&student=…), whose API re-checks access.
 *
 * Only attempts the review page can rebuild are listed: a diagnostic needs its
 * stored question copy (results.review); SAT practice tests need per-question
 * answers (saved since the answer log, Oct 2026).
 */
import { prisma } from '@/lib/prisma'
import { courseForCategory, scoreLabelFromResults } from '@/lib/class-plan-config'
import { UNIT_TEST_COURSES, isUnitTestCourse } from '@/lib/unit-test-courses'
import { diagnosticPathForCategory } from '@/lib/diagnostic-attempt-scores'
import { ACT_FL_CATEGORY } from '@/lib/act-full-length-server'
import { isPsatAttemptFormat } from '@/lib/sat-attempt-format'
import type { ReviewKind } from '@/lib/question-resolver'
import { AP_PRACTICE_CATEGORY_PREFIX } from '@/lib/ap-practice-exams'

export interface ReviewableAttempt {
  kind: ReviewKind
  id: string
  title: string
  takenAt: string
  score: string | null
  href: string
}

const MCAT_FL_CATEGORY = 'mcat-full-length'
const PER_SOURCE = 25

const asRecord = (v: unknown): Record<string, unknown> | null =>
  v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null

const ACRONYMS = new Set(['mcat', 'psat'])

/** "mcat-full-diagnostic" → "MCAT diagnostic", from the page the attempt belongs to. */
function diagnosticTitle(category: string): string {
  const slug = diagnosticPathForCategory(category).slice(1).replace(/-diagnostic$/, '')
  const name = slug
    .split('-')
    .map((p) => (p.length <= 3 || ACRONYMS.has(p) ? p.toUpperCase() : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(' ')
  return `${name} diagnostic`
}

/** A diagnostic's results kept a copy of its questions, so it can be reviewed. */
export function hasStoredReview(results: unknown): boolean {
  const questions = asRecord(asRecord(results)?.review)?.questions
  return Array.isArray(questions) && questions.length > 0
}

export function teacherReviewHref(kind: ReviewKind, id: string, classroomId: string, studentId: string): string {
  return `/review/${kind}/${id}?class=${encodeURIComponent(classroomId)}&student=${encodeURIComponent(studentId)}`
}

export async function listReviewableAttempts(studentId: string, classroomId: string): Promise<ReviewableAttempt[]> {
  const [diagnostics, satTests, unitTests] = await Promise.all([
    prisma.diagnosticTest.findMany({
      where: { userId: studentId },
      orderBy: { createdAt: 'desc' },
      take: PER_SOURCE,
      select: { id: true, category: true, results: true, createdAt: true },
    }),
    prisma.satTestAttempt.findMany({
      where: { userId: studentId },
      orderBy: { completedAt: 'desc' },
      take: PER_SOURCE,
      select: { id: true, testNumber: true, totalScore: true, format: true, answers: true, completedAt: true },
    }),
    prisma.mcatUnitTest.findMany({
      where: { userId: studentId, completedAt: { not: null } },
      orderBy: { completedAt: 'desc' },
      take: PER_SOURCE,
      select: { id: true, diagnosticId: true, correct: true, total: true, percentage: true, passed: true, completedAt: true },
    }),
  ])

  const out: ReviewableAttempt[] = []
  const href = (kind: ReviewKind, id: string) => teacherReviewHref(kind, id, classroomId, studentId)

  for (const d of diagnostics) {
    const r = asRecord(d.results) ?? {}
    if (d.category === MCAT_FL_CATEGORY) {
      if (!asRecord(r.answers)) continue
      const total = typeof r.total === 'number' && r.total >= 472 && r.total <= 528 ? `${r.total}` : null
      out.push({
        kind: 'mcat-fl', id: d.id, takenAt: d.createdAt.toISOString(),
        title: `MCAT full-length${typeof r.form === 'number' ? ` · Form ${r.form}` : ''}`,
        score: scoreLabelFromResults(d.results) ?? total,
        href: href('mcat-fl', d.id),
      })
    } else if (d.category.startsWith(AP_PRACTICE_CATEGORY_PREFIX)) {
      out.push({
        kind: 'ap-practice', id: d.id, takenAt: d.createdAt.toISOString(),
        title: `${typeof r.subject === 'string' ? r.subject : 'AP'} practice exam`,
        score: typeof r.estimatedAPScore === 'number' ? `${r.estimatedAPScore}/5 · ${r.percentage}%` : null,
        href: href('ap-practice', d.id),
      })
    } else if (d.category === ACT_FL_CATEGORY) {
      out.push({
        kind: 'act-fl', id: d.id, takenAt: d.createdAt.toISOString(),
        title: `ACT full-length${typeof r.form === 'number' ? ` · Form ${r.form}` : ''}`,
        score: typeof r.composite === 'number' ? `Composite ${r.composite}` : null,
        href: href('act-fl', d.id),
      })
    } else {
      if (!hasStoredReview(d.results)) continue
      out.push({
        kind: 'diagnostic', id: d.id, takenAt: d.createdAt.toISOString(),
        title: diagnosticTitle(d.category),
        score: scoreLabelFromResults(d.results),
        href: href('diagnostic', d.id),
      })
    }
  }

  for (const s of satTests) {
    // Older attempts stored only totals; the review needs one record per question.
    const answers = Array.isArray(s.answers) ? s.answers : []
    if (!answers.some((a) => typeof asRecord(a)?.questionId === 'string')) continue
    out.push({
      kind: 'sat-practice', id: s.id, takenAt: s.completedAt.toISOString(),
      title: `${isPsatAttemptFormat(s.format) ? 'PSAT' : 'SAT'} practice test ${s.testNumber}`,
      score: `${s.totalScore}`,
      href: href('sat-practice', s.id),
    })
  }

  if (unitTests.length) {
    const cycles = await prisma.diagnosticTest.findMany({
      where: { id: { in: [...new Set(unitTests.map((u) => u.diagnosticId))] } },
      select: { id: true, category: true },
    })
    const courseOf = new Map(cycles.map((c) => [c.id, diagnosticTitle(c.category).replace(/ diagnostic$/, '')]))
    // AP calls it the "cycle test" (AP also has per-unit unit tests).
    const nameOf = new Map(cycles.map((c) => {
      const key = courseForCategory(c.category)?.key ?? ''
      return [c.id, isUnitTestCourse(key) ? UNIT_TEST_COURSES[key].testName : 'unit test']
    }))
    for (const u of unitTests) {
      out.push({
        kind: 'unit-test', id: u.id, takenAt: (u.completedAt ?? new Date(0)).toISOString(),
        title: `${courseOf.get(u.diagnosticId) ?? 'Cycle'} ${nameOf.get(u.diagnosticId) ?? 'unit test'}`,
        score: `${u.percentage ?? 0}% (${u.correct ?? 0}/${u.total})${u.passed ? ' · passed' : ''}`,
        href: href('unit-test', u.id),
      })
    }
  }

  return out.sort((a, b) => b.takenAt.localeCompare(a.takenAt))
}
