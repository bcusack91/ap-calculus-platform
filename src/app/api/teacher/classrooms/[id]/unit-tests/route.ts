import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { loadClassUnitTests, loadUnitTestLessonScores } from '@/lib/class-unit-tests'
import { MCAT_UNIT_TEST_PASS_PERCENT } from '@/lib/mcat-unit-test'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET /api/teacher/classrooms/[id]/unit-tests — cycle unit-test results for
 * the Engagement tab: per student, each cycle's sittings (score, pass, date).
 *
 * ?student=<userId> returns that student's per-lesson scores instead, keyed by
 * sitting, for the expanded row.
 */
export async function GET(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const members = await prisma.classroomMember.findMany({
    where: { classroomId: id, isActive: true },
    select: { userId: true, nickname: true, user: { select: { name: true } } },
  })
  const headers = { 'Cache-Control': 'private, no-store' }

  const studentId = req.nextUrl.searchParams.get('student')
  if (studentId) {
    if (!members.some((m) => m.userId === studentId)) {
      return NextResponse.json({ error: 'Student not in this class' }, { status: 404 })
    }
    return NextResponse.json({ userId: studentId, lessons: await loadUnitTestLessonScores(studentId) }, { headers })
  }

  const cycles = await loadClassUnitTests(members.map((m) => m.userId))
  const students = members
    .map((m) => ({
      userId: m.userId,
      name: m.nickname || m.user.name || 'Student',
      cycles: cycles.get(m.userId) ?? [],
    }))
    .sort((a, b) => a.name.localeCompare(b.name))

  return NextResponse.json({ passPercent: MCAT_UNIT_TEST_PASS_PERCENT, students }, { headers })
}
