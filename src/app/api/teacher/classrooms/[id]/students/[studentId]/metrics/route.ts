import { NextRequest, NextResponse } from 'next/server'
import { requireStudentInClassroom } from '@/lib/teacher-auth'
import { loadStudentMetrics, METRICS_RANGES, type MetricsRange } from '@/lib/student-metrics'

export const dynamic = 'force-dynamic'

/**
 * GET /api/teacher/classrooms/[id]/students/[studentId]/metrics?range=7d|30d|90d|all&scope=all|class
 *
 * One student's study report: active time, flashcards (ratings, time,
 * retention, backlog), questions by source, weakest areas, lessons, weekly
 * targets and — for MCAT students — section-score trend and pacing.
 * `scope=class` limits to work stamped with this class; the default is
 * everything the student did (owner decision 2026-09-29).
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string; studentId: string }> }) {
  const { id: classroomId, studentId } = await params
  const access = await requireStudentInClassroom(classroomId, studentId)
  if ('error' in access) return access.error

  const sp = req.nextUrl.searchParams
  const rangeParam = sp.get('range') ?? '7d'
  const range: MetricsRange = (METRICS_RANGES as readonly string[]).includes(rangeParam) ? (rangeParam as MetricsRange) : '7d'
  const scope = sp.get('scope') === 'class' ? 'class' : 'all'

  try {
    const metrics = await loadStudentMetrics(studentId, { range, classroomId: scope === 'class' ? classroomId : null })
    return NextResponse.json(
      { student: access.student, classroom: { id: access.classroom.id, name: access.classroom.name }, metrics },
      { headers: { 'Cache-Control': 'private, no-store' } },
    )
  } catch (err) {
    console.error('[student metrics] failed:', err)
    return NextResponse.json({ error: 'Could not load this report' }, { status: 500 })
  }
}
