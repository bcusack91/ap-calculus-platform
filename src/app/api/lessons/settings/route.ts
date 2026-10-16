import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { apTrackForUser } from '@/lib/ap-track-server'

/**
 * Interactive-lesson settings (owner request 2026-10-02).
 *
 * GET   /api/lessons/settings[?courseSlug=] → { includeLowYield, apTrack? }
 * PATCH /api/lessons/settings { includeLowYield: boolean } → { includeLowYield }
 *
 * includeLowYield: show the passages and quiz questions tagged low-yield
 * (src/lib/lesson-yield.ts). Off by default, like flashcards' low tier, and
 * independent of the flashcard checkbox.
 *
 * apTrack: the student's AP difficulty track in `courseSlug` (src/lib/ap-track.ts)
 * — the lesson draws its gating exit quiz at the track's mix. Left out for a
 * course without tracks. Served here because every lesson already loads this.
 */
export async function GET(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const courseSlug = new URL(request.url).searchParams.get('courseSlug')
  const [user, apTrack] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: { lessonIncludeLowYield: true },
    }),
    apTrackForUser(session.user.id, courseSlug).catch(() => null),
  ])
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({
    includeLowYield: user.lessonIncludeLowYield,
    ...(apTrack ? { apTrack: { track: apTrack.track, label: apTrack.label, mix: apTrack.mix ?? null } } : {}),
  })
}

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json().catch(() => null)
  if (typeof body?.includeLowYield !== 'boolean') {
    return NextResponse.json({ error: 'includeLowYield must be true or false' }, { status: 400 })
  }
  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: { lessonIncludeLowYield: body.includeLowYield },
    select: { lessonIncludeLowYield: true },
  })
  return NextResponse.json({ includeLowYield: user.lessonIncludeLowYield })
}
