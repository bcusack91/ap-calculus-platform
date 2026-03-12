import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * POST /api/teacher/classrooms/join — student joins a classroom by code
 * Body: { joinCode: "ABC123" }
 */
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

  const { joinCode } = await req.json()

  if (!joinCode || typeof joinCode !== 'string') {
    return NextResponse.json({ error: 'Join code is required' }, { status: 400 })
  }

  const classroom = await prisma.classroom.findUnique({
    where: { joinCode: joinCode.toUpperCase().trim() },
    include: { teacher: { select: { name: true } } },
  })

  if (!classroom || !classroom.isActive) {
    return NextResponse.json({ error: 'Invalid or inactive class code' }, { status: 404 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  // Check if already a member
  const existing = await prisma.classroomMember.findUnique({
    where: { classroomId_userId: { classroomId: classroom.id, userId: user.id } },
  })

  if (existing) {
    if (existing.isActive) {
      return NextResponse.json({ error: 'Already a member of this class' }, { status: 409 })
    }
    // Re-activate
    await prisma.classroomMember.update({
      where: { id: existing.id },
      data: { isActive: true },
    })
    return NextResponse.json({
      success: true,
      classroom: { name: classroom.name, teacher: classroom.teacher?.name },
    })
  }

  await prisma.classroomMember.create({
    data: {
      classroomId: classroom.id,
      userId: user.id,
    },
  })

  return NextResponse.json({
    success: true,
    classroom: { name: classroom.name, teacher: classroom.teacher?.name },
  })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/join]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
