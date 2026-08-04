import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { mutedList } from '@/lib/live-session'

interface Ctx { params: Promise<{ id: string }> }

/**
 * POST /api/live-sessions/[id]/moderate — teacher-only chat moderation.
 * body: { action: 'hide'|'unhide', messageId } or { action: 'mute'|'unmute', userId }
 */
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const live = await prisma.liveSession.findUnique({
    where: { id },
    select: { id: true, classroomId: true, mutedUserIds: true, classroom: { select: { teacherId: true } } },
  })
  if (!live) return NextResponse.json({ error: 'Session not found' }, { status: 404 })

  const user = await prisma.user.findUnique({ where: { id: userId }, select: { role: true } })
  const isTeacher =
    live.classroom.teacherId === userId ||
    user?.role === 'ADMIN' ||
    !!(await prisma.classroomCoTeacher.findUnique({
      where: { classroomId_userId: { classroomId: live.classroomId, userId } },
      select: { id: true },
    }))
  if (!isTeacher) return NextResponse.json({ error: 'Teachers only' }, { status: 403 })

  const body = await req.json().catch(() => ({}))
  const action = body?.action

  if (action === 'hide' || action === 'unhide') {
    const messageId = String(body?.messageId ?? '')
    const updated = await prisma.liveSessionMessage.updateMany({
      where: { id: messageId, sessionId: id },
      data: { hidden: action === 'hide' },
    })
    if (updated.count === 0) return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'mute' || action === 'unmute') {
    const target = String(body?.userId ?? '')
    if (!target) return NextResponse.json({ error: 'userId required' }, { status: 400 })
    const current = new Set(mutedList(live.mutedUserIds))
    if (action === 'mute') current.add(target)
    else current.delete(target)
    await prisma.liveSession.update({
      where: { id },
      data: { mutedUserIds: [...current] },
    })
    return NextResponse.json({ ok: true, muted: [...current] })
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
