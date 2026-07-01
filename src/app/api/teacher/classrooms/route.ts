import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher, generateJoinCode } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/classrooms — list teacher's classrooms
 * POST /api/teacher/classrooms — create a new classroom
 */

export async function GET() {
  try {
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
  } catch (error) {
    console.error('[GET /api/teacher/classrooms]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const result = await requireTeacher()
    if ('error' in result && result.error) return result.error

  const { name, description, subject, grade, section, schoolId } = await req.json()

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Classroom name is required (min 2 characters)' }, { status: 400 })
  }

  // Validate the optional school so a bad id returns a clean 400 rather than a
  // 500 from the FK constraint. (Schools are admin-seeded; teachers self-select.)
  if (schoolId) {
    const school = await prisma.school.findUnique({ where: { id: schoolId }, select: { id: true } })
    if (!school) {
      return NextResponse.json({ error: 'Unknown school.' }, { status: 400 })
    }
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
      section: section?.trim() || null,
      teacherId: result.user!.id,
      schoolId: schoolId || null,
      joinCode,
    },
    include: {
      _count: { select: { members: true } },
    },
  })

  return NextResponse.json({ classroom }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
