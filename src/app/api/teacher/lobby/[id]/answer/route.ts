import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/answer
//   Body: { questionIndex: number, selectedIndex: number }
//   Returns: { correct: boolean, correctAnswer: number, score, questionsAnswered, questionsCorrect }
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const body = await req.json().catch(() => ({}))
  const questionIndex = Number(body?.questionIndex)
  const selectedIndex = Number(body?.selectedIndex)
  if (!Number.isFinite(questionIndex) || questionIndex < 0) {
    return NextResponse.json({ error: 'Invalid questionIndex' }, { status: 400 })
  }
  if (!Number.isFinite(selectedIndex) || selectedIndex < 0) {
    return NextResponse.json({ error: 'Invalid selectedIndex' }, { status: 400 })
  }

  const lobby = await prisma.teacherLobby.findUnique({
    where: { id },
    select: {
      id: true,
      status: true,
      endsAt: true,
      questionPool: true,
    },
  })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.status !== 'IN_PROGRESS') {
    return NextResponse.json({ error: 'Match is not running' }, { status: 400 })
  }
  if (lobby.endsAt && new Date(lobby.endsAt).getTime() <= Date.now()) {
    return NextResponse.json({ error: 'Time expired', expired: true }, { status: 400 })
  }

  const pool = Array.isArray(lobby.questionPool) ? (lobby.questionPool as Array<{ correctAnswer: number }>) : []
  const q = pool[questionIndex]
  if (!q) {
    return NextResponse.json({ error: 'Out of questions' }, { status: 400 })
  }

  const participant = await prisma.teacherLobbyParticipant.findUnique({
    where: { lobbyId_userId: { lobbyId: id, userId } },
  })
  if (!participant) return NextResponse.json({ error: 'Not in lobby' }, { status: 403 })

  // Idempotent guard: only credit if this is the next-or-greater index
  // (prevents double-counting if the client retries the same submission).
  if (questionIndex < participant.lastQuestionIndex) {
    return NextResponse.json({
      correct: false,
      correctAnswer: q.correctAnswer,
      score: participant.score,
      questionsAnswered: participant.questionsAnswered,
      questionsCorrect: participant.questionsCorrect,
      duplicate: true,
    })
  }

  const correct = selectedIndex === q.correctAnswer
  const updated = await prisma.teacherLobbyParticipant.update({
    where: { id: participant.id },
    data: {
      questionsAnswered: { increment: 1 },
      questionsCorrect: correct ? { increment: 1 } : undefined,
      score: correct ? { increment: 100 } : undefined,
      lastQuestionIndex: questionIndex + 1,
    },
  })

  return NextResponse.json({
    correct,
    correctAnswer: q.correctAnswer,
    score: updated.score,
    questionsAnswered: updated.questionsAnswered,
    questionsCorrect: updated.questionsCorrect,
  })
}
