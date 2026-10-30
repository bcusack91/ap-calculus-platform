import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { parseYouTubeVideoId } from '@/lib/live-session'
import { normalizeTags, parseDurationSec } from '@/lib/video-lesson-admin'
import { clipSelect, noStore, requireInstructorCaller } from '@/lib/video-lesson-authoring'

/**
 * GET  /api/teacher/video-lessons/clips[?status=APPROVED|DRAFT|ARCHIVED][&instructorId=]
 *      — the instructor's clips (default: everything not archived). The
 *      Clip library tab asks for APPROVED clips to reuse across topics/courses.
 * POST { title, url, durationSec, tags[] } — add a YouTube clip. A link the
 *      instructor already added is rejected (one clip per video).
 */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const r = await requireInstructorCaller(sp.get('instructorId'))
  if ('error' in r) return r.error
  const status = sp.get('status')
  const where =
    status === 'APPROVED' || status === 'DRAFT' || status === 'ARCHIVED'
      ? { instructorId: r.instructor.id, status }
      : sp.get('all') === '1'
        ? { instructorId: r.instructor.id }
        : { instructorId: r.instructor.id, status: { not: 'ARCHIVED' } }
  const clips = await prisma.videoClip.findMany({ where, orderBy: { createdAt: 'desc' }, take: 500, select: clipSelect })
  return NextResponse.json({ clips }, { headers: noStore })
}

export async function POST(req: NextRequest) {
  const r = await requireInstructorCaller(req.nextUrl.searchParams.get('instructorId'))
  if ('error' in r) return r.error
  const body = (await req.json().catch(() => ({}))) as { title?: unknown; url?: unknown; durationSec?: unknown; tags?: unknown }
  const title = typeof body.title === 'string' ? body.title.trim().slice(0, 200) : ''
  const providerId = typeof body.url === 'string' ? parseYouTubeVideoId(body.url) : null
  const durationSec = parseDurationSec(body.durationSec)
  if (!title) return NextResponse.json({ error: 'Give the clip a title.', field: 'title' }, { status: 400 })
  if (!providerId) return NextResponse.json({ error: 'Paste a YouTube link, e.g. https://youtu.be/…', field: 'url' }, { status: 400 })
  if (!durationSec) {
    return NextResponse.json({ error: 'The clip needs its length. Preview it to read it, or type it in.', field: 'durationSec' }, { status: 400 })
  }

  const dup = await prisma.videoClip.findFirst({
    where: { instructorId: r.instructor.id, provider: 'YOUTUBE', providerId },
    select: { id: true, title: true, status: true },
  })
  if (dup) {
    const msg = dup.status === 'ARCHIVED'
      ? `You already added this video as "${dup.title}" and archived it. Restore it from the clip library.`
      : `You already added this video as "${dup.title}".`
    return NextResponse.json({ error: msg, field: 'url', clipId: dup.id }, { status: 409 })
  }

  const clip = await prisma.videoClip.create({
    data: { instructorId: r.instructor.id, title, provider: 'YOUTUBE', providerId, durationSec, tags: normalizeTags(body.tags) },
    select: clipSelect,
  })
  return NextResponse.json({ clip }, { status: 201, headers: noStore })
}
