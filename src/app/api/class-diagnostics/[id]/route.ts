import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET /api/class-diagnostics/[id] — the frozen test payload for an assigned
 * class diagnostic. Access: active members of the classroom (and its
 * teachers). The diagnostic pages load this when opened with ?assigned=<id>.
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const diagnostic = await prisma.classDiagnostic.findUnique({
    where: { id },
    select: {
      id: true, courseKey: true, title: true, testData: true, dueDate: true, classroomId: true,
      classroom: { select: { name: true, teacherId: true } },
    },
  })
  if (!diagnostic) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const isTeacher =
    diagnostic.classroom.teacherId === userId ||
    !!(await prisma.classroomCoTeacher.findUnique({
      where: { classroomId_userId: { classroomId: diagnostic.classroomId, userId } },
      select: { id: true },
    }))
  if (!isTeacher) {
    const member = await prisma.classroomMember.findUnique({
      where: { classroomId_userId: { classroomId: diagnostic.classroomId, userId } },
      select: { isActive: true },
    })
    if (!member?.isActive) {
      return NextResponse.json({ error: 'You are not enrolled in this class.' }, { status: 403 })
    }
  }

  const myAttempt = await prisma.diagnosticTest.findFirst({
    where: { userId, classDiagnosticId: id },
    orderBy: { createdAt: 'asc' },
    select: { id: true, createdAt: true },
  })

  return NextResponse.json({
    diagnostic: {
      id: diagnostic.id,
      courseKey: diagnostic.courseKey,
      title: diagnostic.title,
      dueDate: diagnostic.dueDate,
      classroomName: diagnostic.classroom.name,
      testData: diagnostic.testData,
      alreadyTakenAt: myAttempt?.createdAt ?? null,
    },
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}
