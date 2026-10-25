import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isPoolMode, POOL_MODE_LABELS } from '@/lib/class-pool'
import { resolvePoolTopic } from '@/lib/class-pool-topic'
import {
  autoCloseIfSessionEnded,
  classroomRole,
  closePool,
  joinPool,
  poolScope,
  poolTitles,
} from '@/lib/class-pool-server'

/**
 * Class match pools — a class's own matchmaking space, opened from a live class.
 *
 * GET  /api/competitive/class-pool?sessionId=<live session> (or ?classroomId=)
 *   → the class's open pool (or null) for the student banner / teacher panel.
 *     Teachers also get `suggestion`: the topic of the session's current or
 *     most recent slide deck, to default the topic picker.
 * POST /api/competitive/class-pool  { classroomId, liveSessionId?, topicSlug,
 *   courseSlug?, gameMode, joinAsPlayer? } → teacher/co-teacher opens a pool
 *   (closing any other open pool of that class).
 */

async function resolveClassroom(req: NextRequest): Promise<{ classroomId: string; liveSessionId: string | null } | null> {
  const sessionId = req.nextUrl.searchParams.get('sessionId')
  if (sessionId) {
    const live = await prisma.liveSession.findUnique({ where: { id: sessionId }, select: { classroomId: true } })
    return live ? { classroomId: live.classroomId, liveSessionId: sessionId } : null
  }
  const classroomId = req.nextUrl.searchParams.get('classroomId')
  return classroomId ? { classroomId, liveSessionId: null } : null
}

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const target = await resolveClassroom(req)
  if (!target) return NextResponse.json({ error: 'Class not found' }, { status: 404 })
  const role = await classroomRole(target.classroomId, session.user.id, session.user.role)
  if (!role) return NextResponse.json({ error: 'You are not in this class.' }, { status: 403 })

  let pool = await prisma.classMatchPool.findFirst({
    where: { classroomId: target.classroomId, status: 'OPEN' },
    orderBy: { createdAt: 'desc' },
  })
  if (pool) pool = await autoCloseIfSessionEnded(pool)
  const open = pool && pool.status === 'OPEN' ? pool : null

  let summary = null
  if (open) {
    const [titles, waiting, mine] = await Promise.all([
      poolTitles(open),
      prisma.matchmakingQueue.count({ where: { poolId: open.id } }),
      prisma.matchmakingQueue.findFirst({ where: { poolId: open.id, userId: session.user.id }, select: { id: true } }),
    ])
    summary = {
      id: open.id,
      topicTitle: titles.topicTitle,
      courseName: titles.courseName,
      scope: poolScope(open),
      gameMode: open.gameMode,
      waiting,
      youAreWaiting: !!mine,
    }
  }

  let suggestion: { topicSlug: string; title: string; courseSlug: string | null } | null = null
  if (role === 'teacher' && target.liveSessionId) {
    const deck = await prisma.slideDeck.findFirst({
      where: { sessionId: target.liveSessionId },
      orderBy: [{ status: 'asc' }, { createdAt: 'desc' }], // 'ACTIVE' sorts before 'ENDED'
      select: { topicSlug: true, title: true },
    })
    if (deck) {
      const topic = await prisma.topic.findUnique({
        where: { slug: deck.topicSlug },
        select: { title: true, category: { select: { course: { select: { slug: true } } } } },
      })
      suggestion = { topicSlug: deck.topicSlug, title: topic?.title ?? deck.title, courseSlug: topic?.category.course.slug ?? null }
    }
  }

  return NextResponse.json({ pool: summary, role, suggestion }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json().catch(() => ({}))
  const classroomId = typeof body?.classroomId === 'string' ? body.classroomId : ''
  const topicSlug = typeof body?.topicSlug === 'string' ? body.topicSlug.trim() : ''
  const gameMode = body?.gameMode ?? 'SPEED_RACE'
  if (!classroomId || !topicSlug || topicSlug.length > 200) {
    return NextResponse.json({ error: 'Pick a class and a topic.' }, { status: 400 })
  }
  if (!isPoolMode(gameMode)) return NextResponse.json({ error: 'Unknown game mode' }, { status: 400 })

  const role = await classroomRole(classroomId, session.user.id, session.user.role)
  if (role !== 'teacher') return NextResponse.json({ error: 'Only this class’s teachers can start a class match.' }, { status: 403 })

  let liveSessionId: string | null = null
  if (typeof body?.liveSessionId === 'string' && body.liveSessionId) {
    const live = await prisma.liveSession.findUnique({ where: { id: body.liveSessionId }, select: { classroomId: true, status: true } })
    if (!live || live.classroomId !== classroomId) return NextResponse.json({ error: 'Live session not found' }, { status: 404 })
    if (live.status !== 'LIVE') return NextResponse.json({ error: 'This live session has ended.' }, { status: 409 })
    liveSessionId = body.liveSessionId
  }

  // The topic's own course wins over what the client sent (BC classes present AB topics).
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: { category: { select: { course: { select: { slug: true } } } } },
  })
  const courseSlug = topic?.category.course.slug ?? (typeof body?.courseSlug === 'string' && body.courseSlug ? body.courseSlug : null)
  const resolved = await resolvePoolTopic(topicSlug, courseSlug)
  if (resolved.scope === 'none' || !resolved.matchTopicSlug) {
    return NextResponse.json(
      { error: 'This course has no competitive questions yet, so a class match can’t start on it.' },
      { status: 422 },
    )
  }

  // One open pool per class: starting a new one closes the old one (its
  // in-progress matches finish normally).
  const previous = await prisma.classMatchPool.findMany({ where: { classroomId, status: 'OPEN' }, select: { id: true } })
  for (const p of previous) await closePool(p.id)

  const pool = await prisma.classMatchPool.create({
    data: {
      classroomId,
      liveSessionId,
      teacherId: session.user.id,
      topicSlug,
      matchTopicSlug: resolved.matchTopicSlug,
      courseSlug,
      gameMode,
      ranked: true, // owner ruling 2026-10-25: class matches count toward MMR (Chaos stays unranked)
    },
  })

  const joined = body?.joinAsPlayer === true ? await joinPool(pool, session.user.id) : null
  return NextResponse.json({
    pool: { id: pool.id, scope: resolved.scope, gameMode, modeLabel: POOL_MODE_LABELS[gameMode].label },
    joined,
  })
}
