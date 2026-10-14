import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'
import { parseYouTubeVideoId } from '@/lib/live-session'

type Ctx = { params: Promise<{ id: string }> }
const headers = { 'Cache-Control': 'private, no-store' }

/**
 * Lesson recordings for a class (ClassRecording): the teacher records in a
 * live session, uploads the file to YouTube as unlisted and posts the link.
 *
 * GET    — teacher, co-teacher, admin, or an active member of the class.
 * POST   { title, url } — teaching access only.
 * DELETE ?recordingId=… — teaching access only.
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id: classroomId } = await params
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const teaching = await requireClassroomAccess(classroomId)
  if ('error' in teaching) {
    const member = await prisma.classroomMember.findUnique({
      where: { classroomId_userId: { classroomId, userId } },
      select: { isActive: true },
    })
    if (!member?.isActive) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const recordings = await prisma.classRecording.findMany({
    where: { classroomId },
    orderBy: { createdAt: 'desc' },
    take: 100,
    select: { id: true, title: true, videoId: true, createdAt: true },
  })
  return NextResponse.json({ recordings }, { headers })
}

export async function POST(req: NextRequest, { params }: Ctx) {
  const { id: classroomId } = await params
  const access = await requireClassroomAccess(classroomId)
  if ('error' in access) return access.error

  const body = (await req.json().catch(() => ({}))) as { title?: unknown; url?: unknown }
  const title = typeof body.title === 'string' ? body.title.trim().slice(0, 200) : ''
  const videoId = typeof body.url === 'string' ? parseYouTubeVideoId(body.url) : null
  if (!title) return NextResponse.json({ error: 'Give the recording a title.' }, { status: 400 })
  if (!videoId) return NextResponse.json({ error: 'Paste a YouTube link, e.g. https://youtu.be/…' }, { status: 400 })

  const recording = await prisma.classRecording.create({
    data: { classroomId, authorId: access.user.id, title, videoId },
    select: { id: true, title: true, videoId: true, createdAt: true },
  })
  return NextResponse.json({ recording }, { status: 201, headers })
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  const { id: classroomId } = await params
  const access = await requireClassroomAccess(classroomId)
  if ('error' in access) return access.error
  const recordingId = req.nextUrl.searchParams.get('recordingId')
  if (!recordingId) return NextResponse.json({ error: 'recordingId required' }, { status: 400 })
  const { count } = await prisma.classRecording.deleteMany({ where: { id: recordingId, classroomId } })
  if (count === 0) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ deleted: recordingId }, { headers })
}
