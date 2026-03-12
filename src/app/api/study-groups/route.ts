import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { randomBytes } from 'crypto'

// GET: List user's study groups
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const memberships = await prisma.classroomMember.findMany({
      where: { userId: session.user.id },
      include: {
        classroom: {
          select: {
            id: true,
            name: true,
            code: true,
            teacher: { select: { name: true, image: true } },
            _count: { select: { members: true } },
          },
        },
      },
    })

    const groups = memberships.map(m => ({
      id: m.classroom.id,
      name: m.classroom.name,
      code: m.classroom.code,
      memberCount: m.classroom._count.members,
      creatorName: m.classroom.teacher.name,
      role: m.role,
    }))

    return NextResponse.json({ groups })
  } catch (error) {
    console.error('[study-groups] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// POST: Create a study group (uses Classroom model with STUDY_GROUP type)
export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, subject } = body

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name is required (min 2 chars)' }, { status: 400 })
    }

    const code = randomBytes(3).toString('hex').toUpperCase()

    const classroom = await prisma.classroom.create({
      data: {
        name: name.trim().slice(0, 100),
        code,
        teacherId: session.user.id,
        subject: subject ?? null,
        members: {
          create: {
            userId: session.user.id,
            role: 'TEACHER',
          },
        },
      },
    })

    return NextResponse.json({
      group: {
        id: classroom.id,
        name: classroom.name,
        code: classroom.code,
      },
    })
  } catch (error) {
    console.error('[study-groups] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
