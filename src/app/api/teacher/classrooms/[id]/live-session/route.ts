import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { makeRoomName, parseYouTubeVideoId } from '@/lib/live-session'

interface Ctx { params: Promise<{ id: string }> }

/** GET — this classroom's current live session, if any (teacher view). */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const session = await prisma.liveSession.findFirst({
    where: { classroomId: id, status: 'LIVE' },
    orderBy: { startedAt: 'desc' },
    select: { id: true, mode: true, startedAt: true },
  })
  return NextResponse.json({ session })
}

/**
 * POST — start a live session for this classroom.
 * body: { mode: 'CONFERENCE' } or { mode: 'WEBCAST', streamUrl: <YouTube URL> }
 * Starting a new session ends any session already live for the classroom, so a
 * crashed browser never strands students on a dead "join" banner.
 */
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error
  const { user, classroom } = access

  const body = await req.json().catch(() => ({}))
  const mode = body?.mode
  if (mode !== 'CONFERENCE' && mode !== 'WEBCAST') {
    return NextResponse.json({ error: 'mode must be CONFERENCE or WEBCAST' }, { status: 400 })
  }

  let streamVideoId: string | null = null
  if (mode === 'WEBCAST') {
    streamVideoId = typeof body?.streamUrl === 'string' ? parseYouTubeVideoId(body.streamUrl) : null
    if (!streamVideoId) {
      return NextResponse.json(
        { error: 'Paste your YouTube live link (e.g. https://youtube.com/live/…) — we could not read a video id from that.' },
        { status: 400 },
      )
    }
  }

  await prisma.liveSession.updateMany({
    where: { classroomId: id, status: 'LIVE' },
    data: { status: 'ENDED', endedAt: new Date() },
  })

  const session = await prisma.liveSession.create({
    data: {
      classroomId: id,
      teacherId: user!.id,
      mode,
      roomName: makeRoomName(classroom.name),
      streamVideoId,
    },
    select: { id: true, mode: true, startedAt: true },
  })
  return NextResponse.json({ session })
}

/** DELETE — end the classroom's live session. */
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const ended = await prisma.liveSession.updateMany({
    where: { classroomId: id, status: 'LIVE' },
    data: { status: 'ENDED', endedAt: new Date() },
  })
  return NextResponse.json({ ended: ended.count })
}
