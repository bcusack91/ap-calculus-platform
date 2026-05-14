import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface Ctx { params: Promise<{ id: string }> }

// GET /api/teacher/lobby/[id]/play — student-facing match data while IN_PROGRESS
//   Returns: { endsAt, durationSec, status, questions: [{question, options}], myProgress: {...} }
//   The questions array intentionally excludes correctAnswer to avoid leaking answers.
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const lobby = await prisma.teacherLobby.findUnique({
    where: { id },
    include: {
      participants: {
        where: { userId: session.user.id },
        select: {
          id: true,
          team: true,
          score: true,
          questionsAnswered: true,
          questionsCorrect: true,
          lastQuestionIndex: true,
        },
      },
    },
  })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const isTeacher = lobby.teacherId === session.user.id
  const me = lobby.participants[0]
  if (!isTeacher && !me) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  if (lobby.status === 'OPEN') {
    return NextResponse.json({ status: lobby.status })
  }

  const pool = Array.isArray(lobby.questionPool)
    ? (lobby.questionPool as Array<{
        id: number | string
        question: string
        options: string[]
        topicSlug?: string
      }>)
    : []

  // Strip correctAnswer for student responses.
  const safeQuestions = pool.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    topicSlug: q.topicSlug,
  }))

  return NextResponse.json({
    status: lobby.status,
    endsAt: lobby.endsAt,
    startedAt: lobby.startedAt,
    durationSec: lobby.durationSec,
    questions: safeQuestions,
    myProgress: me ?? null,
  })
}
