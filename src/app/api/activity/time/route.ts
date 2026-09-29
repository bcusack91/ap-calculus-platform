import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ACTIVITY_SURFACES, clampSegments } from '@/lib/activity-surface'
import { courseSlugsForTopics, resolveClassroomId, studentLocalDay } from '@/lib/study-tracking'
import type { ActivitySurface } from '@prisma/client'

export const dynamic = 'force-dynamic'

/** One flush never carries more than this (the client sends every ~60 s). */
const MAX_PER_FLUSH_SECONDS = 10 * 60
/** Slack over wall time for clock skew and request latency. */
const WALL_SLACK_SECONDS = 30

const slug = z.string().max(200).regex(/^[a-z0-9][a-z0-9-]*$/i)
const bodySchema = z.object({
  segments: z
    .array(
      z.object({
        surface: z.enum(ACTIVITY_SURFACES as [ActivitySurface, ...ActivitySurface[]]),
        topicSlug: slug.optional(),
        courseSlug: slug.optional(),
        seconds: z.number().int().min(1).max(3600),
      }),
    )
    .min(1)
    .max(20),
  tzOffset: z.number().int().min(-14 * 60).max(14 * 60).optional(),
})

/**
 * POST /api/activity/time — active study seconds from ActiveTimeTracker.
 *
 * Seconds are clamped to the wall time since this student's last recorded
 * update (two visible tabs, or a retried send, can't count the same minute
 * twice) and to MAX_PER_FLUSH_SECONDS, then added to ActiveTimeDaily for the
 * student's local day. Accepts sendBeacon bodies (any content type).
 */
export async function POST(request: Request) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let raw: unknown
  try {
    raw = JSON.parse(await request.text())
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  const parsed = bodySchema.safeParse(raw)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid activity payload' }, { status: 400 })

  const now = new Date()
  try {
    const last = await prisma.activeTimeDaily.aggregate({ where: { userId }, _max: { updatedAt: true } })
    const lastAt = last._max.updatedAt
    const sinceLast = lastAt ? Math.floor((now.getTime() - lastAt.getTime()) / 1000) + WALL_SLACK_SECONDS : MAX_PER_FLUSH_SECONDS
    const allowed = Math.max(0, Math.min(MAX_PER_FLUSH_SECONDS, sinceLast))
    const segments = clampSegments(parsed.data.segments, allowed)
    if (!segments.length) return NextResponse.json({ ok: true, recorded: 0 })

    const [classroomId, courses] = await Promise.all([
      resolveClassroomId(userId),
      courseSlugsForTopics(segments.filter((s) => !s.courseSlug && s.topicSlug).map((s) => s.topicSlug!)),
    ])
    const day = studentLocalDay(now, parsed.data.tzOffset)

    // Merge segments that land on the same row, then one upsert per row.
    const rows = new Map<string, { surface: ActivitySurface; courseSlug: string; seconds: number }>()
    for (const s of segments) {
      const courseSlug = s.courseSlug || (s.topicSlug ? courses.get(s.topicSlug) ?? '' : '')
      const k = `${s.surface}|${courseSlug}`
      const row = rows.get(k) ?? { surface: s.surface, courseSlug, seconds: 0 }
      row.seconds += s.seconds
      rows.set(k, row)
    }
    await prisma.$transaction(
      [...rows.values()].map((r) =>
        prisma.activeTimeDaily.upsert({
          where: {
            userId_day_surface_courseSlug_classroomId: { userId, day, surface: r.surface, courseSlug: r.courseSlug, classroomId },
          },
          create: { userId, day, surface: r.surface, courseSlug: r.courseSlug, classroomId, seconds: r.seconds },
          update: { seconds: { increment: r.seconds } },
        }),
      ),
    )
    return NextResponse.json({ ok: true, recorded: segments.reduce((n, s) => n + s.seconds, 0) })
  } catch (err) {
    console.error('[activity/time] failed:', err)
    return NextResponse.json({ error: 'Could not record activity' }, { status: 500 })
  }
}
