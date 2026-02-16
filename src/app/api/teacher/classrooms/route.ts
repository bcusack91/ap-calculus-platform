import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher, generateJoinCode } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/classrooms — list teacher's classrooms
 * POST /api/teacher/classrooms — create a new classroom
 */

export async function GET() {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const classrooms = await prisma.classroom.findMany({
    where: { teacherId: result.user!.id },
    include: {
      _count: { select: { members: true, assignments: true, competitions: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ classrooms })
}

export async function POST(req: NextRequest) {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const { name, description, subject, grade, schoolId } = await req.json()

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Classroom name is required (min 2 characters)' }, { status: 400 })
  }

  // Generate unique join code
  let joinCode = generateJoinCode()
  let attempts = 0
  while (attempts < 10) {
    const existing = await prisma.classroom.findUnique({ where: { joinCode } })
    if (!existing) break
    joinCode = generateJoinCode()
    attempts++
  }

  const classroom = await prisma.classroom.create({
    data: {
      name: name.trim(),
      description: description?.trim() || null,
      subject: subject?.trim() || null,
      grade: grade?.trim() || null,
      teacherId: result.user!.id,
      schoolId: schoolId || null,
      joinCode,
    },
    include: {
      _count: { select: { members: true } },
    },
  })

  return NextResponse.json({ classroom }, { status: 201 })
}
