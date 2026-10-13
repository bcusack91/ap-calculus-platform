import { NextResponse } from 'next/server'
import { requireStudentInClassroom } from '@/lib/teacher-auth'
import { listReviewableAttempts } from '@/lib/teacher-review-attempts'

export const dynamic = 'force-dynamic'

/**
 * GET /api/teacher/classrooms/[id]/students/[studentId]/attempts — the
 * student's diagnostics, full-lengths, practice tests and unit tests that can
 * be reviewed question by question, newest first, each with its teacher-view
 * review link. Owner / co-teacher / admin of the class, ACTIVE members only.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ id: string; studentId: string }> }) {
  const { id: classroomId, studentId } = await params
  const access = await requireStudentInClassroom(classroomId, studentId)
  if ('error' in access) return access.error
  try {
    const attempts = await listReviewableAttempts(studentId, classroomId)
    return NextResponse.json({ attempts }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[teacher attempts] failed:', err)
    return NextResponse.json({ error: 'Could not load tests' }, { status: 500 })
  }
}
