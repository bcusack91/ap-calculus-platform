import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { mutedList } from '@/lib/live-session'

interface Ctx { params: Promise<{ id: string }> }

const MAX_BODY = 500
const MIN_INTERVAL_MS = 1500 // simple per-user flood guard

/** teacher/co-teacher/admin or active member; returns null when unauthorized. */
async function sessionAccess(sessionId: string, userId: string) {
  const live = await prisma.liveSession.findUnique({
    where: { id: sessionId },
    select: { id: true, status: true, mutedUserIds: true, classroomId: true, teacherId: true, classroom: { select: { teacherId: true } } },
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

/**
 * GET /api/live-sessions/[id]/messages?after=<ISO timestamp>
 * Poll endpoint (~4s). Students receive visible messages only; the teacher
 * also receives hidden ones (flagged) so moderation is reviewable.
 */
export async function GET(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const access = await sessionAccess(id, session.user.id)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })

  const afterParam = req.nextUrl.searchParams.get('after')
  const after = afterParam ? new Date(afterParam) : null

  const messages = await prisma.liveSessionMessage.findMany({
    where: {
      sessionId: id,
      ...(access.isTeacher ? {} : { hidden: false }),
      ...(after && !isNaN(after.getTime()) ? { createdAt: { gt: after } } : {}),
    },
    orderBy: { createdAt: 'asc' },
    take: 200,
    select: { id: true, userId: true, userName: true, body: true, hidden: true, createdAt: true },
  })

  return NextResponse.json({
    messages,
    sessionStatus: access.live.status,
    youAreMuted: mutedList(access.live.mutedUserIds).includes(session.user.id),
  }, { headers: { 'Cache-Control': 'private, no-store' } })
}

/** POST — send a chat message. */
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id
  const access = await sessionAccess(id, userId)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })
  if (access.live.status !== 'LIVE') {
    return NextResponse.json({ error: 'This session has ended.' }, { status: 410 })
  }
  if (!access.isTeacher && mutedList(access.live.mutedUserIds).includes(userId)) {
    return NextResponse.json({ error: 'You have been muted by the teacher.' }, { status: 403 })
  }

  const body = ((await req.json().catch(() => ({})))?.body ?? '').toString().trim()
  if (!body) return NextResponse.json({ error: 'Empty message' }, { status: 400 })
  if (body.length > MAX_BODY) {
    return NextResponse.json({ error: `Keep messages under ${MAX_BODY} characters.` }, { status: 400 })
  }

  const lastMine = await prisma.liveSessionMessage.findFirst({
    where: { sessionId: id, userId },
    orderBy: { createdAt: 'desc' },
    select: { createdAt: true },
  })
  if (lastMine && Date.now() - lastMine.createdAt.getTime() < MIN_INTERVAL_MS) {
    return NextResponse.json({ error: 'Sending too fast — give it a second.' }, { status: 429 })
  }

  const message = await prisma.liveSessionMessage.create({
    data: { sessionId: id, userId, userName: access.userName, body },
    select: { id: true, userId: true, userName: true, body: true, hidden: true, createdAt: true },
  })
  return NextResponse.json({ message })
}
