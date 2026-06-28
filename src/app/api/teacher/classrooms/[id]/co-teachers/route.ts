import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomOwner, requireClassroomAccess } from '@/lib/teacher-auth'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * GET /api/teacher/classrooms/[id]/co-teachers
 * List co-teachers. Owner or an existing co-teacher may view.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const result = await requireClassroomAccess(classroomId)
    if ('error' in result) return result.error

    const coTeachers = await prisma.classroomCoTeacher.findMany({
      where: { classroomId },
      include: { user: { select: { id: true, name: true, email: true } } },
      orderBy: { addedAt: 'asc' },
    })

    return NextResponse.json({ coTeachers, isOwner: result.isOwner })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]/co-teachers]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST /api/teacher/classrooms/[id]/co-teachers  { email }
 * Add a co-teacher by email. Owner only. Target must already have a
 * teacher (or admin) account.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const result = await requireClassroomOwner(classroomId)
    if ('error' in result) return result.error

    const body = await req.json().catch(() => ({}))
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const target = await prisma.user.findFirst({
      where: { email: { equals: email, mode: 'insensitive' } },
      select: { id: true, name: true, email: true, role: true },
    })
    if (!target) {
      return NextResponse.json(
        { error: 'No account found with that email. The co-teacher needs a teacher account first.' },
        { status: 404 }
      )
    }
    if (target.role !== 'TEACHER' && target.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'That account is not a teacher account, so it can’t be added as a co-teacher.' },
        { status: 400 }
      )
    }
    if (target.id === result.classroom.teacherId) {
      return NextResponse.json({ error: 'That teacher already owns this class.' }, { status: 400 })
    }

    await prisma.classroomCoTeacher.upsert({
      where: { classroomId_userId: { classroomId, userId: target.id } },
      update: {},
      create: { classroomId, userId: target.id },
    })

    // Guard: if this teacher had ever joined the class as a STUDENT (by code),
    // deactivate that membership so they can't appear in the student roster /
    // analytics while also being a co-teacher.
    await prisma.classroomMember.updateMany({
      where: { classroomId, userId: target.id, isActive: true },
      data: { isActive: false },
    })

    return NextResponse.json({
      success: true,
      coTeacher: { user: { id: target.id, name: target.name, email: target.email } },
    })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/[id]/co-teachers]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
