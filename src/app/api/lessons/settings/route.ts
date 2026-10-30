import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { apTrackForUser } from '@/lib/ap-track-server'

/**
 * Interactive-lesson settings (owner request 2026-10-02).
 *
 * GET   /api/lessons/settings[?courseSlug=] → { includeLowYield, preferredFormat, apTrack? }
 * PATCH /api/lessons/settings { includeLowYield?: boolean, preferredFormat?: 'TEXT' | 'VIDEO' }
 *       → { includeLowYield, preferredFormat }
 *
 * preferredFormat: how study-plan links open a topic — the interactive text
 * lesson, or an approved instructor's video lesson when the topic has one
 * (src/lib/video-lessons-server.ts).
 *
 * includeLowYield: show the passages and quiz questions tagged low-yield
 * (src/lib/lesson-yield.ts). Off by default, like flashcards' low tier, and
 * independent of the flashcard checkbox.
 *
 * apTrack: the student's AP difficulty track in `courseSlug` (src/lib/ap-track.ts)
 * — the lesson draws its gating exit quiz at the track's mix. A teacher's
 * override beats the diagnostic (`source: 'teacher'`). Left out for a course
 * without tracks. Served here because every lesson already loads this, and
 * re-read by the lesson when the submit route refuses a stale mix.
 */
export async function GET(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const courseSlug = new URL(request.url).searchParams.get('courseSlug')
  const [user, apTrack] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: { lessonIncludeLowYield: true, preferredLessonFormat: true },
    }),
    apTrackForUser(session.user.id, courseSlug).catch(() => null),
  ])
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({
    includeLowYield: user.lessonIncludeLowYield,
    preferredFormat: user.preferredLessonFormat === 'VIDEO' ? 'VIDEO' : 'TEXT',
    ...(apTrack ? { apTrack: { track: apTrack.track, label: apTrack.label, mix: apTrack.mix ?? null, source: apTrack.source } } : {}),
  })
}

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json().catch(() => null)
  const hasLow = typeof body?.includeLowYield === 'boolean'
  const hasFormat = body?.preferredFormat === 'TEXT' || body?.preferredFormat === 'VIDEO'
  if (!hasLow && !hasFormat) {
    return NextResponse.json({ error: "Send includeLowYield (true or false) or preferredFormat ('TEXT' or 'VIDEO')" }, { status: 400 })
  }
  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      ...(hasLow ? { lessonIncludeLowYield: body.includeLowYield as boolean } : {}),
      ...(hasFormat ? { preferredLessonFormat: body.preferredFormat as string } : {}),
    },
    select: { lessonIncludeLowYield: true, preferredLessonFormat: true },
  })
  return NextResponse.json({
    includeLowYield: user.lessonIncludeLowYield,
    preferredFormat: user.preferredLessonFormat === 'VIDEO' ? 'VIDEO' : 'TEXT',
  })
}
