import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { pruneEffects } from '@/lib/chaos-powerups'
import { emptyLobbyChaos, type LobbyPlayerChaos } from '@/lib/lobby-chaos'

interface Ctx { params: Promise<{ id: string }> }

// GET /api/teacher/lobby/[id]/play — student-facing match data while IN_PROGRESS
//   Returns: { endsAt, durationSec, status, questions: [{question, options}], myProgress: {...} }
//   In CHAOS lobbies also returns { chaos: { intensity, inventory, effects, ... } } for
//   the caller only — inventories are private, and effects are how an attack
//   reaches its victim (this GET is the delivery channel).
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
          powerUps: true,
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

  // Chaos state is per-caller and never includes anyone else's inventory.
  // Expired effects are pruned on read so a student who was offline during a
  // 3-second attack does not get hit by it when they come back.
  let chaos: (LobbyPlayerChaos & { intensity: string }) | null = null
  if (lobby.gameMode === 'CHAOS' && me) {
    const stored: LobbyPlayerChaos = {
      ...emptyLobbyChaos(),
      ...((me.powerUps as LobbyPlayerChaos | null) ?? {}),
    }
    chaos = {
      ...stored,
      effects: pruneEffects(stored.effects, Date.now()),
      intensity: lobby.chaosIntensity,
    }
  }

  const { powerUps: _omit, ...myProgress } = (me ?? {}) as Record<string, unknown>

  return NextResponse.json({
    status: lobby.status,
    endsAt: lobby.endsAt,
    startedAt: lobby.startedAt,
    durationSec: lobby.durationSec,
    gameMode: lobby.gameMode,
    questions: safeQuestions,
    myProgress: me ? myProgress : null,
    chaos,
  })
}
