import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'
import { buildQuestionPool, getCourseEntry } from '@/lib/teacher-lobby-courses'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/start — build question pool, set endsAt, mark IN_PROGRESS
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const lobby = await prisma.teacherLobby.findUnique({
    where: { id },
    include: { participants: true },
  })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.teacherId !== result.user!.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (lobby.status !== 'OPEN') {
    return NextResponse.json({ error: 'Lobby already started' }, { status: 400 })
  }
  if (!lobby.courseSlug) {
    return NextResponse.json(
      { error: 'Choose a course before starting the match.' },
      { status: 400 },
    )
  }
  if (!getCourseEntry(lobby.courseSlug)) {
    return NextResponse.json({ error: `Unsupported course: ${lobby.courseSlug}` }, { status: 400 })
  }

  const unassigned = lobby.participants.filter(p => p.team === null)
  if (unassigned.length > 0) {
    return NextResponse.json(
      { error: 'Balance teams before starting (some participants have no team).' },
      { status: 400 },
    )
  }
  if (lobby.participants.length === 0) {
    return NextResponse.json({ error: 'No participants in lobby.' }, { status: 400 })
  }

  const topicSlugs = Array.isArray(lobby.topicSlugs) ? (lobby.topicSlugs as string[]) : []
  const pool = buildQuestionPool(lobby.courseSlug, topicSlugs, 200)
  if (pool.length === 0) {
    return NextResponse.json(
      { error: 'No questions found for the chosen course/topics.' },
      { status: 400 },
    )
  }

  const startedAt = new Date()
  const endsAt = new Date(startedAt.getTime() + lobby.durationSec * 1000)

  await prisma.teacherLobbyParticipant.updateMany({
    where: { lobbyId: id },
    data: { score: 0, questionsAnswered: 0, questionsCorrect: 0, lastQuestionIndex: 0 },
  })

  const updated = await prisma.teacherLobby.update({
    where: { id },
    data: {
      status: 'IN_PROGRESS',
      startedAt,
      endsAt,
      questionPool: pool as object,
    },
  })
  return NextResponse.json({
    lobby: { id: updated.id, status: updated.status, endsAt: updated.endsAt },
  })
}
