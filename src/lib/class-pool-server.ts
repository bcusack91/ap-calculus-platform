/**
 * Class match pools — database side. Pure pairing rules live in class-pool.ts.
 *
 * Concurrency: every pairing pass (tickPool) runs in one transaction that
 * first takes the pool row with `FOR UPDATE SKIP LOCKED`. Only one pass per
 * pool can run at a time, and a second caller (two joins at once, a join
 * racing the 2 s polls) skips instead of queueing behind it — the next poll
 * pairs whatever it left. Claimed queue rows are deleted inside the same
 * transaction and the delete count is checked, so a player who left mid-pass
 * rolls the pass back rather than being dropped into a match.
 */
import type { ClassMatchPool, CompetitiveMode, Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions, matchQuestionCount, SPEED_RACE_POOL_SIZE } from '@/lib/competitive-utils'
import { paceMatchQuestions } from '@/lib/bot-pacing-server'
import { teamBattleMatchData } from '@/lib/team-match-create'
import { publicDisplayName } from '@/lib/display-name'
import { isAIOpponent } from '@/lib/ai-opponent'
import { lessonCompetitiveAlias } from '@/lib/class-pool-topic'
import { sweepStaleMatchesForUser } from '@/app/api/competitive/_lib/sweep-stale-matches'
import {
  botOfferFor,
  isPoolMode,
  planPoolPairings,
  POOL_SETTLE_MS,
  POOL_STALE_WAIT_MS,
  type PoolMode,
  type PoolWaiter,
} from '@/lib/class-pool'

export type PoolRole = 'teacher' | 'student'

/** Teacher (owner, co-teacher, admin) or active member of the class — else null. */
export async function classroomRole(
  classroomId: string,
  userId: string,
  userRole: string | null | undefined,
): Promise<PoolRole | null> {
  const classroom = await prisma.classroom.findUnique({ where: { id: classroomId }, select: { teacherId: true } })
  if (!classroom) return null
  if (classroom.teacherId === userId || userRole === 'ADMIN') return 'teacher'
  const co = await prisma.classroomCoTeacher.findUnique({
    where: { classroomId_userId: { classroomId, userId } },
    select: { id: true },
  })
  if (co) return 'teacher'
  const member = await prisma.classroomMember.findUnique({
    where: { classroomId_userId: { classroomId, userId } },
    select: { isActive: true },
  })
  return member?.isActive ? 'student' : null
}

export async function closePool(poolId: string): Promise<void> {
  await prisma.$transaction([
    prisma.classMatchPool.updateMany({ where: { id: poolId, status: 'OPEN' }, data: { status: 'CLOSED', closedAt: new Date() } }),
    prisma.matchmakingQueue.deleteMany({ where: { poolId } }),
  ])
}

/** Close every open pool tied to a live session (the session ended). */
export async function closePoolsForSession(liveSessionId: string): Promise<number> {
  const open = await prisma.classMatchPool.findMany({ where: { liveSessionId, status: 'OPEN' }, select: { id: true } })
  for (const p of open) await closePool(p.id)
  return open.length
}

/** A pool whose live session has ended closes itself on the next read. */
export async function autoCloseIfSessionEnded(pool: ClassMatchPool): Promise<ClassMatchPool> {
  if (pool.status !== 'OPEN' || !pool.liveSessionId) return pool
  const live = await prisma.liveSession.findUnique({ where: { id: pool.liveSessionId }, select: { status: true } })
  if (live && live.status === 'LIVE') return pool
  await closePool(pool.id)
  return { ...pool, status: 'CLOSED', closedAt: new Date() }
}

/* ------------------------------------------------------------------------ */
/* Matches                                                                   */
/* ------------------------------------------------------------------------ */

interface TeamGameData {
  isTeamBattle?: boolean
  team1?: { players?: string[]; score?: number }
  team2?: { players?: string[]; score?: number }
  isPracticeMatch?: boolean
  aiName?: string
}

type PoolMatchRow = {
  id: string
  player1Id: string
  player2Id: string
  gameMode: CompetitiveMode
  status: string
  player1Score: number
  player2Score: number
  winnerId: string | null
  player1MMRBefore: number
  player1MMRAfter: number
  player2MMRBefore: number
  player2MMRAfter: number
  startedAt: Date
  completedAt: Date | null
  gameData: Prisma.JsonValue
}

/** [side1 players, side2 players] of a pool match (team matches carry 4). */
export function matchSides(m: Pick<PoolMatchRow, 'player1Id' | 'player2Id' | 'gameData'>): [string[], string[]] {
  const gd = (m.gameData ?? {}) as TeamGameData
  if (gd.isTeamBattle && gd.team1?.players && gd.team2?.players) return [gd.team1.players, gd.team2.players]
  return [[m.player1Id], [m.player2Id]]
}

/** Each listed user's opponents in their most recent pool match. */
function lastOpponents(matches: PoolMatchRow[], userIds: string[]): Map<string, string[]> {
  const out = new Map<string, string[]>()
  const wanted = new Set(userIds)
  // matches arrive newest first
  for (const m of matches) {
    const [a, b] = matchSides(m)
    for (const [mine, theirs] of [[a, b], [b, a]] as const) {
      for (const u of mine) if (wanted.has(u) && !out.has(u)) out.set(u, [...theirs])
    }
  }
  return out
}

type RawExec = Pick<typeof prisma, '$queryRaw'>

/**
 * A pool's matches with only the gameData fields the roster needs, pulled out
 * in SQL: a match's gameData carries its whole question set (~20 KB), and the
 * pool is polled every 2 s by every player, so the full JSON must never ride
 * along. Newest first.
 */
async function loadPoolMatches(db: RawExec, poolId: string, opts: { liveTeamOnly?: boolean; limit?: number } = {}): Promise<PoolMatchRow[]> {
  const limit = opts.limit ?? 40
  const rows = opts.liveTeamOnly
    ? await db.$queryRaw<RawPoolMatch[]>`
        SELECT id, "player1Id", "player2Id", "gameMode"::text AS "gameMode", status::text AS status, "player1Score", "player2Score", "winnerId",
               "player1MMRBefore", "player1MMRAfter", "player2MMRBefore", "player2MMRAfter", "startedAt", "completedAt",
               ("gameData"->>'isTeamBattle') = 'true' AS "isTeam",
               "gameData"->'team1'->'players' AS "t1", ("gameData"->'team1'->>'score')::int AS "t1Score",
               "gameData"->'team2'->'players' AS "t2", ("gameData"->'team2'->>'score')::int AS "t2Score",
               ("gameData"->>'isPracticeMatch') = 'true' AS "practice", "gameData"->>'aiName' AS "aiName"
        FROM "CompetitiveMatch"
        WHERE "poolId" = ${poolId} AND status = 'IN_PROGRESS' AND "gameMode" = 'TEAM_BATTLE'
        ORDER BY "startedAt" DESC LIMIT ${limit}`
    : await db.$queryRaw<RawPoolMatch[]>`
        SELECT id, "player1Id", "player2Id", "gameMode"::text AS "gameMode", status::text AS status, "player1Score", "player2Score", "winnerId",
               "player1MMRBefore", "player1MMRAfter", "player2MMRBefore", "player2MMRAfter", "startedAt", "completedAt",
               ("gameData"->>'isTeamBattle') = 'true' AS "isTeam",
               "gameData"->'team1'->'players' AS "t1", ("gameData"->'team1'->>'score')::int AS "t1Score",
               "gameData"->'team2'->'players' AS "t2", ("gameData"->'team2'->>'score')::int AS "t2Score",
               ("gameData"->>'isPracticeMatch') = 'true' AS "practice", "gameData"->>'aiName' AS "aiName"
        FROM "CompetitiveMatch"
        WHERE "poolId" = ${poolId}
        ORDER BY "startedAt" DESC LIMIT ${limit}`
  return rows.map((r) => ({
    id: r.id,
    player1Id: r.player1Id,
    player2Id: r.player2Id,
    gameMode: r.gameMode as CompetitiveMode,
    status: r.status,
    player1Score: r.player1Score,
    player2Score: r.player2Score,
    winnerId: r.winnerId,
    player1MMRBefore: r.player1MMRBefore,
    player1MMRAfter: r.player1MMRAfter,
    player2MMRBefore: r.player2MMRBefore,
    player2MMRAfter: r.player2MMRAfter,
    startedAt: new Date(r.startedAt),
    completedAt: r.completedAt ? new Date(r.completedAt) : null,
    gameData: {
      ...(r.isTeam ? { isTeamBattle: true, team1: { players: r.t1 ?? [], score: r.t1Score ?? 0 }, team2: { players: r.t2 ?? [], score: r.t2Score ?? 0 } } : {}),
      ...(r.practice ? { isPracticeMatch: true } : {}),
      ...(r.aiName ? { aiName: r.aiName } : {}),
    },
  }))
}

interface RawPoolMatch {
  id: string
  player1Id: string
  player2Id: string
  gameMode: string
  status: string
  player1Score: number
  player2Score: number
  winnerId: string | null
  player1MMRBefore: number
  player1MMRAfter: number
  player2MMRBefore: number
  player2MMRAfter: number
  startedAt: Date | string
  completedAt: Date | string | null
  isTeam: boolean | null
  t1: string[] | null
  t1Score: number | null
  t2: string[] | null
  t2Score: number | null
  practice: boolean | null
  aiName: string | null
}

class PoolRaceError extends Error {}

/**
 * One pairing pass. Returns the ids of matches it created (empty when nothing
 * paired, the pool is closed, or another pass holds the pool).
 */
export async function tickPool(poolId: string, now: number = Date.now()): Promise<string[]> {
  // Cheap pre-check outside any transaction (every poll lands here): nothing
  // to do unless two are waiting and someone has settled.
  const [waitingCount, settledCount] = await Promise.all([
    prisma.matchmakingQueue.count({ where: { poolId } }),
    prisma.matchmakingQueue.count({ where: { poolId, joinedAt: { lte: new Date(now - POOL_SETTLE_MS) } } }),
  ])
  if (waitingCount < 2 || settledCount === 0) return []
  try {
    return await prisma.$transaction(async (tx) => {
      const locked = await tx.$queryRaw<Array<{ id: string; status: string; gameMode: string; matchTopicSlug: string }>>`
        SELECT id, status, "gameMode", "matchTopicSlug" FROM "ClassMatchPool" WHERE id = ${poolId} FOR UPDATE SKIP LOCKED
      `
      const pool = locked[0]
      if (!pool || pool.status !== 'OPEN' || !isPoolMode(pool.gameMode)) return []
      const mode: PoolMode = pool.gameMode

      await tx.matchmakingQueue.deleteMany({ where: { poolId, joinedAt: { lt: new Date(now - POOL_STALE_WAIT_MS) } } })
      const rows = await tx.matchmakingQueue.findMany({ where: { poolId }, orderBy: { joinedAt: 'asc' } })
      if (rows.length < 2) return []

      // Anyone already playing (e.g. started a bot elsewhere) isn't free.
      const ids = rows.map((r) => r.userId)
      const busy = await tx.competitiveMatch.findMany({
        where: { status: 'IN_PROGRESS', OR: [{ player1Id: { in: ids } }, { player2Id: { in: ids } }] },
        select: { player1Id: true, player2Id: true },
      })
      const busyIds = new Set(busy.flatMap((b) => [b.player1Id, b.player2Id]))

      const recent = await loadPoolMatches(tx, poolId, { limit: 60 })
      const lastOpp = lastOpponents(recent, ids)
      const waiting: PoolWaiter[] = rows
        .filter((r) => !busyIds.has(r.userId))
        .map((r) => ({ userId: r.userId, mmr: r.mmr, joinedAt: r.joinedAt.getTime(), lastOpponents: lastOpp.get(r.userId) }))
      const plan = planPoolPairings(waiting, mode, now)
      if (plan.pairs.length === 0 && plan.teams.length === 0) return []

      const claim = async (userIds: string[]) => {
        const del = await tx.matchmakingQueue.deleteMany({ where: { poolId, userId: { in: userIds } } })
        if (del.count !== userIds.length) throw new PoolRaceError('a paired player left mid-pass')
      }

      const created: string[] = []
      for (const [a, b] of plan.pairs) {
        await claim([a.userId, b.userId])
        const drawn = await generateMatchQuestions(matchQuestionCount(mode), pool.matchTopicSlug, [])
        const { questions, pacing } = await paceMatchQuestions(drawn, pool.matchTopicSlug, mode)
        const m = await tx.competitiveMatch.create({
          data: {
            player1Id: a.userId,
            player2Id: b.userId,
            gameMode: mode,
            topicSlug: pool.matchTopicSlug,
            player1MMRBefore: a.mmr,
            player2MMRBefore: b.mmr,
            player1MMRAfter: a.mmr,
            player2MMRAfter: b.mmr,
            player1Score: 0,
            player2Score: 0,
            status: 'IN_PROGRESS',
            startedAt: new Date(),
            poolId,
            gameData: {
              questions,
              player1QuestionIndex: 0,
              player2QuestionIndex: 0,
              ...pacing,
            } as unknown as Prisma.InputJsonValue,
          },
          select: { id: true },
        })
        created.push(m.id)
      }
      for (const g of plan.teams) {
        await claim([...g.team1, ...g.team2].map((p) => p.userId))
        const drawn = await generateMatchQuestions(SPEED_RACE_POOL_SIZE, pool.matchTopicSlug, [])
        const { questions, pacing } = await paceMatchQuestions(drawn, pool.matchTopicSlug, 'TEAM_BATTLE')
        const m = await tx.competitiveMatch.create({
          data: teamBattleMatchData({
            team1: g.team1,
            team2: g.team2,
            topicSlug: pool.matchTopicSlug,
            questions,
            pacing,
            poolId,
          }),
          select: { id: true },
        })
        created.push(m.id)
      }
      return created
    }, { timeout: 20_000, maxWait: 5_000 })
  } catch (err) {
    if (err instanceof PoolRaceError) return []
    throw err
  }
}

/* ------------------------------------------------------------------------ */
/* Join / leave                                                              */
/* ------------------------------------------------------------------------ */

/** The user's live match, if any: { id, poolId, isTeam }. Team members who aren't a lead are found via their pool's matches. */
export async function activeMatchFor(userId: string, poolId?: string) {
  const direct = await prisma.competitiveMatch.findFirst({
    where: { status: 'IN_PROGRESS', OR: [{ player1Id: userId }, { player2Id: userId }] },
    orderBy: { startedAt: 'desc' },
    select: { id: true, poolId: true, gameMode: true },
  })
  if (direct) return { id: direct.id, poolId: direct.poolId, isTeam: direct.gameMode === 'TEAM_BATTLE' }
  if (!poolId) return null
  const teamMatches = await loadPoolMatches(prisma, poolId, { liveTeamOnly: true })
  for (const m of teamMatches) {
    const [a, b] = matchSides(m)
    if (a.includes(userId) || b.includes(userId)) return { id: m.id, poolId, isTeam: true }
  }
  return null
}

export type JoinResult =
  | { status: 'waiting' }
  | { status: 'matched'; matchId: string; isTeam: boolean }
  | { status: 'closed' }
  | { status: 'in_other_match'; matchId: string; isTeam: boolean }

export async function joinPool(pool: ClassMatchPool, userId: string): Promise<JoinResult> {
  if (pool.status !== 'OPEN') return { status: 'closed' }

  // Teachers and students who never played get a profile at the default MMR.
  const profile = await prisma.competitiveProfile.upsert({
    where: { userId },
    update: {},
    create: { userId, competitiveModeUnlocked: true },
    select: { overallMMR: true },
  })

  await sweepStaleMatchesForUser(userId)
  const live = await activeMatchFor(userId, pool.id)
  if (live) {
    return live.poolId === pool.id
      ? { status: 'matched', matchId: live.id, isTeam: live.isTeam }
      : { status: 'in_other_match', matchId: live.id, isTeam: live.isTeam }
  }

  const existing = await prisma.matchmakingQueue.findUnique({ where: { userId }, select: { id: true, poolId: true } })
  if (!existing || existing.poolId !== pool.id) {
    // One queue row per user: joining the class pool replaces a public-queue
    // (or another pool's) entry.
    if (existing) await prisma.matchmakingQueue.deleteMany({ where: { id: existing.id } })
    try {
      await prisma.matchmakingQueue.create({
        data: {
          userId,
          poolId: pool.id,
          topicSlug: pool.matchTopicSlug,
          mmr: profile.overallMMR,
          gameMode: pool.gameMode,
          tier: null,
        },
      })
    } catch (err) {
      // A double-click raced us to the row: it's there either way.
      if ((err as { code?: string }).code !== 'P2002') throw err
    }
  }

  await tickPool(pool.id)
  const after = await activeMatchFor(userId, pool.id)
  if (after?.poolId === pool.id) return { status: 'matched', matchId: after.id, isTeam: after.isTeam }
  return { status: 'waiting' }
}

export async function leavePool(poolId: string, userId: string): Promise<void> {
  await prisma.matchmakingQueue.deleteMany({ where: { poolId, userId } })
}

/* ------------------------------------------------------------------------ */
/* State                                                                     */
/* ------------------------------------------------------------------------ */

export interface PoolPlayerView {
  id: string
  name: string
  isBot?: boolean
  isTeacher?: boolean
}

export interface PoolMatchView {
  id: string
  mode: CompetitiveMode
  status: 'live' | 'done'
  sides: [PoolPlayerView[], PoolPlayerView[]]
  scores: [number, number]
  /** 0 or 1 = that side won; null = in play or a draw. */
  winnerSide: 0 | 1 | null
  /** Per-player MMR change (1v1 ranked only). */
  mmrDelta?: [number, number]
  practice: boolean
  startedAt: string
  completedAt: string | null
}

export interface PoolStateView {
  pool: {
    id: string
    classroomId: string
    liveSessionId: string | null
    topicSlug: string
    topicTitle: string
    matchTopicSlug: string
    courseSlug: string | null
    courseName: string | null
    /** 'course' = the lesson has no competitive set; questions come from the whole course. */
    scope: 'topic' | 'course'
    gameMode: CompetitiveMode
    ranked: boolean
    status: string
    createdAt: string
  }
  role: PoolRole
  serverNow: number
  waiting: Array<PoolPlayerView & { mmr?: number; waitedMs: number }>
  matches: PoolMatchView[]
  counts: { members: number; waiting: number; playing: number; finished: number }
  me: {
    state: 'waiting' | 'in_match' | 'idle'
    matchId?: string
    isTeam?: boolean
    waitedMs?: number
    botOffer?: boolean
  }
}

export function poolScope(pool: Pick<ClassMatchPool, 'topicSlug' | 'matchTopicSlug'>): 'topic' | 'course' {
  return pool.matchTopicSlug === pool.topicSlug || pool.matchTopicSlug === lessonCompetitiveAlias(pool.topicSlug) ? 'topic' : 'course'
}

export async function poolTitles(pool: Pick<ClassMatchPool, 'topicSlug' | 'courseSlug'>) {
  const [topic, course] = await Promise.all([
    prisma.topic.findUnique({ where: { slug: pool.topicSlug }, select: { title: true } }),
    pool.courseSlug ? prisma.course.findUnique({ where: { slug: pool.courseSlug }, select: { name: true } }) : null,
  ])
  const pretty = pool.topicSlug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  return { topicTitle: topic?.title ?? pretty, courseName: course?.name ?? null }
}

export async function buildPoolState(
  pool: ClassMatchPool,
  viewer: { id: string; role: PoolRole },
  now: number = Date.now(),
): Promise<PoolStateView> {
  const [titles, queue, matches, members, classroom] = await Promise.all([
    poolTitles(pool),
    prisma.matchmakingQueue.findMany({
      where: { poolId: pool.id },
      orderBy: { joinedAt: 'asc' },
      select: { userId: true, mmr: true, joinedAt: true, user: { select: { name: true } } },
    }),
    loadPoolMatches(prisma, pool.id, { limit: 40 }),
    prisma.classroomMember.findMany({
      where: { classroomId: pool.classroomId, isActive: true },
      select: { userId: true, nickname: true },
    }),
    prisma.classroom.findUnique({ where: { id: pool.classroomId }, select: { teacherId: true, coTeachers: { select: { userId: true } } } }),
  ])

  const teacherIds = new Set([classroom?.teacherId, ...(classroom?.coTeachers.map((c) => c.userId) ?? [])].filter(Boolean) as string[])
  const nickname = new Map(members.map((m) => [m.userId, m.nickname]))

  // Names for every player in the listed matches (team matches carry 4).
  const playerIds = new Set<string>()
  for (const m of matches) for (const side of matchSides(m)) side.forEach((id) => playerIds.add(id))
  const users = await prisma.user.findMany({
    where: { id: { in: [...playerIds] } },
    select: { id: true, name: true, email: true },
  })
  const userById = new Map(users.map((u) => [u.id, u]))
  const isTeacherView = viewer.role === 'teacher'
  const nameOf = (id: string, rawName: string | null | undefined): string => {
    const nick = nickname.get(id)
    if (nick) return nick
    if (isTeacherView) return rawName?.trim() || 'Student'
    return publicDisplayName(rawName, 'Classmate')
  }
  const player = (id: string, aiName?: string): PoolPlayerView => {
    const u = userById.get(id)
    if (u && isAIOpponent(u.id, u.email)) return { id, name: aiName || u.name || 'Practice bot', isBot: true }
    return { id, name: nameOf(id, u?.name), ...(teacherIds.has(id) ? { isTeacher: true } : {}) }
  }

  const matchViews: PoolMatchView[] = matches.map((m) => {
    const gd = (m.gameData ?? {}) as TeamGameData
    const [s1, s2] = matchSides(m)
    const isTeam = !!gd.isTeamBattle
    const scores: [number, number] = isTeam && m.status !== 'COMPLETED'
      ? [gd.team1?.score ?? 0, gd.team2?.score ?? 0]
      : [m.player1Score, m.player2Score]
    const winnerSide = m.status === 'COMPLETED' && m.winnerId
      ? (m.winnerId === m.player1Id ? 0 : m.winnerId === m.player2Id ? 1 : null)
      : null
    const ranked = !gd.isPracticeMatch && m.gameMode !== 'CHAOS' && !isTeam
    return {
      id: m.id,
      mode: m.gameMode,
      status: m.status === 'COMPLETED' || m.status === 'CANCELLED' ? 'done' : 'live',
      sides: [s1.map((id) => player(id, gd.aiName)), s2.map((id) => player(id, gd.aiName))],
      scores,
      winnerSide,
      ...(ranked && m.status === 'COMPLETED'
        ? { mmrDelta: [m.player1MMRAfter - m.player1MMRBefore, m.player2MMRAfter - m.player2MMRBefore] as [number, number] }
        : {}),
      practice: !!gd.isPracticeMatch,
      startedAt: m.startedAt.toISOString(),
      completedAt: m.completedAt?.toISOString() ?? null,
    }
  })

  const live = matchViews.filter((m) => m.status === 'live')
  const mine = queue.find((q) => q.userId === viewer.id)
  const myLive = live.find((m) => m.sides.some((s) => s.some((p) => p.id === viewer.id)))
  const mode = pool.gameMode as PoolMode
  const me: PoolStateView['me'] = myLive
    ? { state: 'in_match', matchId: myLive.id, isTeam: myLive.mode === 'TEAM_BATTLE' }
    : mine
      ? {
          state: 'waiting',
          waitedMs: now - mine.joinedAt.getTime(),
          botOffer: botOfferFor({ userId: mine.userId, joinedAt: mine.joinedAt.getTime() }, queue.length, mode, now),
        }
      : { state: 'idle' }

  return {
    pool: {
      id: pool.id,
      classroomId: pool.classroomId,
      liveSessionId: pool.liveSessionId,
      topicSlug: pool.topicSlug,
      topicTitle: titles.topicTitle,
      matchTopicSlug: pool.matchTopicSlug,
      courseSlug: pool.courseSlug,
      courseName: titles.courseName,
      scope: poolScope(pool),
      gameMode: pool.gameMode,
      ranked: pool.ranked,
      status: pool.status,
      createdAt: pool.createdAt.toISOString(),
    },
    role: viewer.role,
    serverNow: now,
    waiting: queue.map((q) => ({
      id: q.userId,
      name: nameOf(q.userId, q.user.name),
      ...(teacherIds.has(q.userId) ? { isTeacher: true } : {}),
      // MMR is the teacher's to see; classmates just see who is waiting.
      ...(isTeacherView ? { mmr: q.mmr } : {}),
      waitedMs: now - q.joinedAt.getTime(),
    })),
    matches: matchViews,
    counts: {
      members: members.length,
      waiting: queue.length,
      playing: live.reduce((n, m) => n + m.sides.flat().filter((p) => !p.isBot).length, 0),
      finished: matchViews.filter((m) => m.status === 'done').length,
    },
    me,
  }
}
