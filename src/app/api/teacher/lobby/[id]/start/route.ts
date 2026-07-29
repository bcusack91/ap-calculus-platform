import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireLobbyHost } from '@/lib/teacher-auth'
import { buildQuestionPool, getCourseEntry } from '@/lib/teacher-lobby-courses'
import { snakeDraftTeams } from '@/lib/teacher-lobby'
import type { MatchTier } from '@/lib/competitive-utils'

interface Ctx { params: Promise<{ id: string }> }

// POST /api/teacher/lobby/[id]/start — build question pool, set endsAt, mark IN_PROGRESS
export async function POST(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  // Host-based guard: teachers for teacher lobbies, the student host for
  // student-hosted open lobbies. See requireLobbyHost.
  const result = await requireLobbyHost(id)
  if ('error' in result) return result.error
  const lobby = result.lobby
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

  if (lobby.participants.length === 0) {
    return NextResponse.json({ error: 'No participants in lobby.' }, { status: 400 })
  }

  // Student-hosted open lobbies assign teams automatically at start — there is
  // no separate "balance" step for a student host to forget.
  //   RACE_FFA  — every player is their own team (an individual leaderboard),
  //               so numTeams becomes the player count. Needs 2+ players.
  //   TEAM_2V2  — exactly 4 players, split 2v2 by the same MMR snake-draft the
  //               teacher flow uses, so the ranked ladder still makes casual
  //               teams fair.
  if (lobby.studentHosted && lobby.format === 'RACE_FFA') {
    if (lobby.participants.length < 2) {
      return NextResponse.json({ error: 'Need at least 2 players to start a race.' }, { status: 400 })
    }
    await Promise.all(
      lobby.participants.map((p, i) =>
        prisma.teacherLobbyParticipant.update({ where: { id: p.id }, data: { team: i } })
      )
    )
    await prisma.teacherLobby.update({
      where: { id },
      data: { numTeams: lobby.participants.length },
    })
  } else if (lobby.studentHosted && lobby.format === 'TEAM_2V2') {
    if (lobby.participants.length !== 4) {
      return NextResponse.json(
        { error: `2v2 starts with exactly 4 players (currently ${lobby.participants.length}).` },
        { status: 400 },
      )
    }
    const profiles = await prisma.competitiveProfile.findMany({
      where: { userId: { in: lobby.participants.map(p => p.userId) } },
      select: { userId: true, overallMMR: true },
    })
    const mmrByUser = new Map(profiles.map(pr => [pr.userId, pr.overallMMR]))
    const enriched = lobby.participants.map(p => ({
      ...p,
      mmrAtJoin: mmrByUser.get(p.userId) ?? p.mmrAtJoin,
    }))
    const assignment = snakeDraftTeams(enriched, 2)
    await Promise.all(
      Object.entries(assignment).map(([participantId, team]) =>
        prisma.teacherLobbyParticipant.update({ where: { id: participantId }, data: { team } })
      )
    )
  } else {
    const unassigned = lobby.participants.filter(p => p.team === null)
    if (unassigned.length > 0) {
      return NextResponse.json(
        { error: 'Balance teams before starting (some participants have no team).' },
        { status: 400 },
      )
    }
  }

  const topicSlugs = Array.isArray(lobby.topicSlugs) ? (lobby.topicSlugs as string[]) : []
  const tier = (['easy', 'medium', 'hard'].includes(lobby.difficulty ?? '')
    ? lobby.difficulty
    : undefined) as MatchTier | undefined
  const pool = await buildQuestionPool(lobby.courseSlug, topicSlugs, 200, tier)
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
