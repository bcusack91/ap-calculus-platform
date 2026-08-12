import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { asScene, mergeScenes, MAX_SCENE_BYTES, EMPTY_SCENE } from '@/lib/board-merge'
import { touchAttendance } from '@/lib/live-session'

interface Ctx { params: Promise<{ id: string }> }

/**
 * Whiteboards for a live session.
 *
 * GET  ?owner=class&rev=<n>     — class board + current board settings; the
 *                                 scene is omitted when rev hasn't advanced
 *                                 (cheap poll). Everyone in the session.
 * GET  ?owner=me&rev=<n>        — my own pad (students; teacher gets their own).
 * GET  ?owner=all&since=<iso>   — teacher only: every student pad, scenes only
 *                                 for boards updated after `since`.
 * PUT  { owner: 'class'|'me', scene } — merge-write a scene.
 *        class: teacher always; students only while boardMode is SHARED.
 *        me:    students while padsEnabled (teacher's own pad always).
 */

async function sessionAccess(sessionId: string, userId: string) {
  const live = await prisma.liveSession.findUnique({
    where: { id: sessionId },
    select: {
      id: true, status: true, boardMode: true, padsEnabled: true, classroomId: true,
      classroom: { select: { teacherId: true } },
    },
  })
  if (!live) return null
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { name: true, role: true } })
  const isTeacher =
    live.classroom.teacherId === userId ||
    user?.role === 'ADMIN' ||
    !!(await prisma.classroomCoTeacher.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { id: true },
    }))
  if (!isTeacher) {
    const member = await prisma.classroomMember.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { isActive: true },
    })
    if (!member?.isActive) return null
  }
  return { live, isTeacher, userName: user?.name || 'Student' }
}

export async function GET(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const access = await sessionAccess(id, session.user.id)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  const { live, isTeacher } = access
  if (live.status === 'LIVE') void touchAttendance(id, session.user.id)

  const owner = req.nextUrl.searchParams.get('owner') ?? 'class'
  const settings = { boardMode: live.boardMode, padsEnabled: live.padsEnabled, sessionStatus: live.status }

  if (owner === 'all') {
    if (!isTeacher) return NextResponse.json({ error: 'Teachers only' }, { status: 403 })
    const sinceParam = req.nextUrl.searchParams.get('since')
    const since = sinceParam ? new Date(sinceParam) : null
    const boards = await prisma.liveBoard.findMany({
      where: { sessionId: id, ownerKey: { not: 'class' } },
      orderBy: { updatedAt: 'desc' },
      select: { ownerKey: true, ownerName: true, rev: true, updatedAt: true, scene: true },
    })
    return NextResponse.json({
      ...settings,
      boards: boards.map(b => ({
        ownerKey: b.ownerKey,
        ownerName: b.ownerName,
        rev: b.rev,
        updatedAt: b.updatedAt,
        // Only ship scenes that changed since the caller's last poll — pads
        // with pasted images are heavy, and most are idle at any moment.
        scene: !since || isNaN(since.getTime()) || b.updatedAt > since ? b.scene : undefined,
      })),
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  }

  const ownerKey = owner === 'me' ? session.user.id : 'class'
  // Students only see the class board while it's turned on (the teacher may
  // prep it while OFF).
  if (ownerKey === 'class' && !isTeacher && live.boardMode === 'OFF') {
    return NextResponse.json({ ...settings, board: null }, { headers: { 'Cache-Control': 'private, no-store' } })
  }
  const board = await prisma.liveBoard.findUnique({
    where: { sessionId_ownerKey: { sessionId: id, ownerKey } },
    select: { rev: true, scene: true },
  })
  const knownRev = Number(req.nextUrl.searchParams.get('rev') ?? '-1')
  return NextResponse.json({
    ...settings,
    board: board
      ? { rev: board.rev, scene: board.rev > knownRev ? board.scene : undefined }
      : { rev: 0, scene: knownRev < 0 ? EMPTY_SCENE : undefined },
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id
  const access = await sessionAccess(id, userId)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  const { live, isTeacher, userName } = access
  if (live.status !== 'LIVE') return NextResponse.json({ error: 'This session has ended.' }, { status: 410 })

  const raw = await req.text()
  if (raw.length > MAX_SCENE_BYTES) {
    return NextResponse.json(
      { error: 'Board is too large to save — a pasted image is probably huge. Resize it before pasting.' },
      { status: 413 },
    )
  }
  let body: { owner?: string; scene?: unknown }
  try {
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const owner = body.owner === 'me' ? 'me' : body.owner === 'class' ? 'class' : null
  if (!owner) return NextResponse.json({ error: "owner must be 'class' or 'me'" }, { status: 400 })

  if (owner === 'class' && !isTeacher && live.boardMode !== 'SHARED') {
    return NextResponse.json({ error: 'The class board is view-only right now.' }, { status: 403 })
  }
  if (owner === 'me' && !isTeacher && !live.padsEnabled) {
    return NextResponse.json({ error: 'Student pads are currently off.' }, { status: 403 })
  }

  const ownerKey = owner === 'me' ? userId : 'class'
  const ownerName = owner === 'me' ? userName : 'Class board'
  const incoming = asScene(body.scene)

  // Read-merge-write. A concurrent PUT between our read and write can still
  // win the race, but merging is commutative and every client re-sends its
  // full local scene on the next tick, so the system self-heals — no locks.
  const existing = await prisma.liveBoard.findUnique({
    where: { sessionId_ownerKey: { sessionId: id, ownerKey } },
    select: { rev: true, scene: true },
  })
  const merged = existing ? mergeScenes(asScene(existing.scene), incoming) : incoming
  const saved = await prisma.liveBoard.upsert({
    where: { sessionId_ownerKey: { sessionId: id, ownerKey } },
    create: { sessionId: id, ownerKey, ownerName, scene: merged as object, rev: 1 },
    update: { scene: merged as object, rev: { increment: 1 } },
    select: { rev: true },
  })
  return NextResponse.json({ rev: saved.rev })
}
