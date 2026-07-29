import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateLobbyCode } from '@/lib/lobby-codes'
import { generateTeacherLobbyCode } from '@/lib/teacher-lobby'
import { getCourseEntry } from '@/lib/teacher-lobby-courses'

/**
 * Open-lobby matchmaking — the browsable alternative to the MMR queue.
 *
 * The ranked queue only pairs students who picked the same topic at the same
 * moment, which needs liquidity the site does not have yet. Open lobbies invert
 * it: a host advertises a game and it stays visible until someone joins, so two
 * students online in the same hour can find each other. The queue is untouched;
 * this sits beside it.
 *
 * Formats and the engine each one runs on:
 *   DUEL_1V1  — CompetitiveLobby (the friend-challenge engine). Creates a real
 *               CompetitiveMatch on start, so duels are RANKED like any lobby
 *               match today.
 *   TEAM_2V2  — TeacherLobby engine, studentHosted, capped at 4. Teams are
 *               MMR-snake-drafted at start, so the ladder keeps casual games
 *               fair without putting rating on the line.
 *   RACE_FFA  — TeacherLobby engine, studentHosted, 2–8 players, everyone
 *               their own team. Casual.
 *
 * GET  — list public joinable lobbies (both kinds), pruning stale ones.
 * POST — create one: { format, topicSlug?, gameMode?, courseSlug?, topicSlugs?,
 *        durationSec?, name?, maxPlayers? }
 */

const STALE_MS = 2 * 60 * 60 * 1000 // lobbies idle this long are pruned from discovery

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const cutoff = new Date(Date.now() - STALE_MS)

  // Prune-on-read keeps abandoned lobbies from accumulating as OPEN rows.
  await prisma.competitiveLobby.updateMany({
    where: { isPublic: true, status: 'WAITING', createdAt: { lt: cutoff } },
    data: { status: 'CLOSED', closedAt: new Date() },
  })
  await prisma.teacherLobby.updateMany({
    where: { isPublic: true, studentHosted: true, status: 'OPEN', createdAt: { lt: cutoff } },
    data: { status: 'CLOSED', closedAt: new Date() },
  })

  const [duels, races] = await Promise.all([
    prisma.competitiveLobby.findMany({
      where: { isPublic: true, status: 'WAITING', guestId: null, createdAt: { gte: cutoff } },
      include: { host: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
    prisma.teacherLobby.findMany({
      where: { isPublic: true, studentHosted: true, status: 'OPEN', createdAt: { gte: cutoff } },
      include: {
        teacher: { select: { id: true, name: true } },
        participants: { select: { userId: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
  ])

  // Host MMR on duel listings lets joiners self-select an even opponent —
  // discovery replaces the queue's pairing, so surface what the queue would
  // have used.
  const hostIds = duels.map((d) => d.hostId)
  const profiles = hostIds.length
    ? await prisma.competitiveProfile.findMany({
        where: { userId: { in: hostIds } },
        select: { userId: true, overallMMR: true },
      })
    : []
  const mmrByUser = new Map(profiles.map((p) => [p.userId, p.overallMMR]))

  return NextResponse.json({
    lobbies: [
      ...duels.map((d) => ({
        kind: 'duel' as const,
        format: 'DUEL_1V1' as const,
        id: d.id,
        code: d.code,
        hostName: d.host.name || 'Student',
        hostMMR: mmrByUser.get(d.hostId) ?? 1000,
        isMine: d.hostId === session.user!.id,
        topicSlug: d.topicSlug,
        gameMode: d.gameMode || 'SPEED_RACE',
        players: 1,
        maxPlayers: 2,
        createdAt: d.createdAt.toISOString(),
        joinHref: `/competitive/lobby/${d.code}`,
      })),
      ...races.map((r) => ({
        kind: 'race' as const,
        format: (r.format || 'RACE_FFA') as 'TEAM_2V2' | 'RACE_FFA',
        id: r.id,
        code: r.joinCode,
        hostName: r.teacher.name || 'Student',
        isMine: r.teacherId === session.user!.id,
        courseSlug: r.courseSlug,
        courseName: r.courseSlug ? (getCourseEntry(r.courseSlug)?.name ?? r.courseSlug) : null,
        topicSlugs: Array.isArray(r.topicSlugs) ? (r.topicSlugs as string[]) : [],
        durationSec: r.durationSec,
        players: r.participants.length,
        maxPlayers: r.maxPlayers ?? 8,
        createdAt: r.createdAt.toISOString(),
        joinHref: `/teacher/lobby/${r.id}`,
      })),
    ].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id
  const body = await req.json().catch(() => ({}))
  const format = typeof body?.format === 'string' ? body.format : ''

  if (format === 'DUEL_1V1') {
    const topicSlug = typeof body?.topicSlug === 'string' && body.topicSlug ? body.topicSlug : null
    const gameMode = typeof body?.gameMode === 'string' && body.gameMode ? body.gameMode : 'SPEED_RACE'
    if (!topicSlug) {
      return NextResponse.json({ error: 'Pick a subject for your duel' }, { status: 400 })
    }

    // Hosting a public lobby is an invited-play surface, like the private
    // lobby and async challenges — auto-unlock mirrors those flows.
    await prisma.competitiveProfile.upsert({
      where: { userId },
      update: { competitiveModeUnlocked: true },
      create: { userId, competitiveModeUnlocked: true },
    })

    let code = generateLobbyCode()
    for (let i = 0; i < 5; i++) {
      const exists = await prisma.competitiveLobby.findUnique({ where: { code } })
      if (!exists) break
      code = generateLobbyCode()
    }
    const lobby = await prisma.competitiveLobby.create({
      data: { code, hostId: userId, isPublic: true, topicSlug, gameMode, status: 'WAITING' },
    })
    return NextResponse.json({ kind: 'duel', code: lobby.code, href: `/competitive/lobby/${lobby.code}` })
  }

  if (format === 'TEAM_2V2' || format === 'RACE_FFA') {
    const courseSlug = typeof body?.courseSlug === 'string' && body.courseSlug ? body.courseSlug : null
    if (!courseSlug || !getCourseEntry(courseSlug)) {
      return NextResponse.json({ error: 'Pick a course for your race' }, { status: 400 })
    }
    const topicSlugs = Array.isArray(body?.topicSlugs)
      ? (body.topicSlugs as unknown[]).filter((x): x is string => typeof x === 'string' && x.length > 0)
      : []
    const durationSec = Math.max(120, Math.min(30 * 60, Math.floor(Number(body?.durationSec) || 300)))
    const requestedMax = Math.floor(Number(body?.maxPlayers) || 0)
    const maxPlayers = format === 'TEAM_2V2' ? 4 : Math.max(2, Math.min(8, requestedMax || 8))
    const name =
      (typeof body?.name === 'string' && body.name.trim().slice(0, 60)) ||
      (format === 'TEAM_2V2' ? '2v2 Team Battle' : 'Free-for-All Race')

    let joinCode = generateTeacherLobbyCode()
    for (let i = 0; i < 5; i++) {
      const exists = await prisma.teacherLobby.findUnique({ where: { joinCode } })
      if (!exists) break
      joinCode = generateTeacherLobbyCode()
    }

    // The host plays too — created as the first participant, unlike teacher
    // lobbies where the host only referees.
    const profile = await prisma.competitiveProfile.upsert({
      where: { userId },
      update: { competitiveModeUnlocked: true },
      create: { userId, competitiveModeUnlocked: true },
    })

    const lobby = await prisma.teacherLobby.create({
      data: {
        joinCode,
        teacherId: userId,
        name,
        courseSlug,
        topicSlugs,
        durationSec,
        gameMode: 'competitive',
        numTeams: 2,
        studentHosted: true,
        isPublic: true,
        maxPlayers,
        format,
        status: 'OPEN',
        participants: {
          create: { userId, mmrAtJoin: profile.overallMMR },
        },
      },
    })
    return NextResponse.json({ kind: 'race', id: lobby.id, href: `/teacher/lobby/${lobby.id}` })
  }

  return NextResponse.json({ error: 'Unknown format' }, { status: 400 })
}
