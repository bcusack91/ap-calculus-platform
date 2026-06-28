import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * GET  /api/teacher/classrooms/[id]/competitions — list scheduled competitions
 * POST /api/teacher/classrooms/[id]/competitions — schedule a competition
 */

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    const competitions = await prisma.scheduledCompetition.findMany({
      where: { classroomId: id },
      include: {
        participants: {
          include: {
            user: { select: { id: true, name: true, email: true, image: true } },
          },
          orderBy: { rank: 'asc' },
        },
        _count: { select: { participants: true } },
      },
      orderBy: { scheduledAt: 'desc' },
    })

    return NextResponse.json({ competitions })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]/competitions]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

  const { title, topicSlug, gameMode, scheduledAt, endsAt, duration } = await req.json()

  if (!title || !topicSlug || !scheduledAt || !endsAt) {
    return NextResponse.json(
      { error: 'Title, topicSlug, scheduledAt, and endsAt are required' },
      { status: 400 },
    )
  }

  const start = new Date(scheduledAt)
  const end = new Date(endsAt)

  if (end <= start) {
    return NextResponse.json({ error: 'End time must be after start time' }, { status: 400 })
  }

  const competition = await prisma.scheduledCompetition.create({
    data: {
      classroomId: id,
      title: title.trim(),
      topicSlug,
      gameMode: gameMode || 'SPEED_RACE',
      scheduledAt: start,
      endsAt: end,
      duration: duration || 600,
    },
  })

  return NextResponse.json({ competition }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/[id]/competitions]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
