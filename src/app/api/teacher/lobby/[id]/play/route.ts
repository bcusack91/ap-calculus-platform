import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { pruneEffects } from '@/lib/chaos-powerups'
import { emptyLobbyChaos, type LobbyPlayerChaos } from '@/lib/lobby-chaos'
import { closeIfTimeIsUp } from '@/lib/lobby-expiry'
import { isFreeForAll, rankPlayers, teamTotals } from '@/lib/lobby-standings'

interface Ctx { params: Promise<{ id: string }> }

// GET /api/teacher/lobby/[id]/play — student-facing match data while IN_PROGRESS
//   Returns: { endsAt, durationSec, status, format, numTeams, questions: [{question, options}],
//             myProgress: {...}, standings: [...], teamTotals: [...] }
//   `standings` ranks every player (name, team, score) and `teamTotals` sums
//   them per side, so a player can see where they stand without leaving the
//   match. Names only — no emails, no one else's inventory.
//   In CHAOS lobbies also returns { chaos: { intensity, inventory, effects, ... } } for
//   the caller only — inventories are private, and effects are how an attack
//   reaches its victim (this GET is the delivery channel).
//   ?light=1 omits the question bank (the play page polls this way once it has
//   the questions, so a 30-player room is not re-downloading 200 questions
//   every few seconds).
//   The questions array intentionally excludes correctAnswer to avoid leaking answers.
export async function GET(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const light = req.nextUrl.searchParams.get('light') === '1'

  const stored = await prisma.teacherLobby.findUnique({
    where: { id },
    include: {
      participants: {
        orderBy: { joinedAt: 'asc' },
        select: {
          id: true,
          userId: true,
          team: true,
          score: true,
          questionsAnswered: true,
          questionsCorrect: true,
          lastQuestionIndex: true,
          user: { select: { name: true } },
        },
      },
    },
  })
  if (!stored) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  // A match whose timer has run out is over, whether or not the host clicked End.
  const lobby = await closeIfTimeIsUp(stored)

  const isTeacher = lobby.teacherId === session.user.id
  const me = lobby.participants.find((p) => p.userId === session.user!.id) ?? null
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
  const safeQuestions = light
    ? undefined
    : pool.map(q => ({
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
    const mine = await prisma.teacherLobbyParticipant.findUnique({
      where: { id: me.id },
      select: { powerUps: true },
    })
    const stored: LobbyPlayerChaos = {
      ...emptyLobbyChaos(),
      ...((mine?.powerUps as LobbyPlayerChaos | null) ?? {}),
    }
    chaos = {
      ...stored,
      effects: pruneEffects(stored.effects, Date.now()),
      intensity: lobby.chaosIntensity,
    }
  }

  const roster = lobby.participants.map((p) => ({
    id: p.id,
    name: p.user.name || 'Student',
    team: p.team,
    score: p.score,
    questionsCorrect: p.questionsCorrect,
    questionsAnswered: p.questionsAnswered,
    isMe: me?.id === p.id,
  }))
  const ffa = isFreeForAll(lobby)

  return NextResponse.json({
    status: lobby.status,
    endsAt: lobby.endsAt,
    startedAt: lobby.startedAt,
    durationSec: lobby.durationSec,
    gameMode: lobby.gameMode,
    format: lobby.format,
    numTeams: lobby.numTeams,
    ...(safeQuestions ? { questions: safeQuestions } : {}),
    myProgress: me
      ? {
          id: me.id,
          team: me.team,
          score: me.score,
          questionsAnswered: me.questionsAnswered,
          questionsCorrect: me.questionsCorrect,
          lastQuestionIndex: me.lastQuestionIndex,
        }
      : null,
    standings: rankPlayers(roster),
    teamTotals: ffa ? [] : teamTotals(roster, lobby.numTeams, me?.team),
    chaos,
  })
}
