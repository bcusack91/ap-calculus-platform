import { NextResponse } from 'next/server'
import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { loadPublishedLessonById } from '@/lib/video-lessons-server'
import { isLessonComplete, isRecapSection, mergeClipRanges, parseProgressSteps, stepMeta, visibleSteps, type StoredStep } from '@/lib/video-lesson-core'
import { reviewCardsFor } from '@/data/video-lesson-flashcards'
import { newlyWatchedSeconds } from '@/lib/video-watch'
import { applyLessonProgress, flashcardUnlockPayload } from '@/lib/lesson-progress'

/**
 * POST /api/video-lessons/[id]/progress
 *   { clipId, ranges: [[start, end], ...], activeSeconds?, cardsDone? }
 *   → { watchedRanges, complete, completedNow, cardsRequired?, flashcards? }
 *
 * Merges the clip's newly played ranges into the student's progress. Claims
 * are capped by wall time since the last save (allowing up to 2× playback
 * speed), so a forged request can't mark a clip watched instantly. A recap
 * section with review flashcards banks no watch time until the student has
 * finished the cards (`cardsDone: true`, stored on the clip's progress); a
 * recap already started before that rule is left alone. When every
 * visible step is watched and answered, the lesson completes: TopicProgress
 * becomes COMPLETED (mastery untouched, so the text lesson keeps its place)
 * and the flashcard unlock runs. Credit still comes from the exit quiz.
 */

const bodySchema = z.object({
  clipId: z.string().min(1).max(64),
  ranges: z.array(z.tuple([z.number().finite(), z.number().finite()])).max(400),
  activeSeconds: z.number().int().min(0).max(3600).optional(),
  cardsDone: z.literal(true).optional(),
})

/** Playback-speed allowance (YouTube offers up to 2×) plus slack for save timing. */
const SPEED_ALLOWANCE = 2.1
const SLACK_S = 12

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id
  const { id } = await params
  const parsed = bodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid progress' }, { status: 400 })
  const { clipId, ranges, activeSeconds, cardsDone } = parsed.data

  const lesson = await loadPublishedLessonById(id)
  if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  const step = lesson.steps.find((s) => s.clipId === clipId)
  if (!step) return NextResponse.json({ error: 'Clip is not in this lesson' }, { status: 400 })
  const topic = await prisma.topic.findUnique({ where: { slug: lesson.topicSlug }, select: { id: true, slug: true } })

  const result = await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "VideoLessonProgress" WHERE "userId" = ${userId} AND "lessonId" = ${lesson.id} FOR UPDATE`
    const row = await tx.videoLessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      select: { steps: true, completedAt: true, updatedAt: true },
    })
    const steps = parseProgressSteps(row?.steps)
    const prev = steps[clipId]
    const duration = step.clip.durationSec

    // Cap what this save may newly claim by the wall time since the last one.
    const elapsedS = row ? (Date.now() - row.updatedAt.getTime()) / 1000 : 30
    const claimed = newlyWatchedSeconds(prev?.ranges ?? [], ranges, duration)
    const accepted = claimed <= elapsedS * SPEED_ALLOWANCE + SLACK_S
    // A recap with a flashcard deck: no watch time until the cards are finished.
    const meta = stepMeta(step.clip.tags)
    const hasDeck = meta.lesson !== null && meta.video !== null && isRecapSection(meta.section) && (reviewCardsFor(meta.lesson, meta.video)?.length ?? 0) > 0
    const cardsDoneAt = prev?.cardsDone ?? (cardsDone && hasDeck ? new Date().toISOString() : undefined)
    const cardsRequired = hasDeck && !cardsDoneAt && (prev?.ranges ?? []).length === 0
    const merged = accepted && !cardsRequired ? mergeClipRanges(prev, ranges, duration) : prev?.ranges ?? []
    steps[clipId] = { ...prev, ranges: merged, ...(cardsDoneAt ? { cardsDone: cardsDoneAt } : {}) }

    const user = await tx.user.findUnique({ where: { id: userId }, select: { lessonIncludeLowYield: true } })
    const complete = isLessonComplete(visibleSteps(lesson.steps as StoredStep[], !!user?.lessonIncludeLowYield), steps)
    const completedNow = complete && !row?.completedAt
    await tx.videoLessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      update: { steps: steps as Prisma.InputJsonValue, lastClipId: clipId, lessonVersion: lesson.version, ...(completedNow ? { completedAt: new Date() } : {}) },
      create: { userId, lessonId: lesson.id, steps: steps as Prisma.InputJsonValue, lastClipId: clipId, lessonVersion: lesson.version, ...(completedNow ? { completedAt: new Date() } : {}) },
    })
    return { merged, complete, completedNow, accepted, cardsRequired }
  })

  // Topic progress: time always; COMPLETED once the whole lesson is done.
  let flashcards: ReturnType<typeof flashcardUnlockPayload>
  if (topic && (result.completedNow || (activeSeconds ?? 0) > 0)) {
    const { unlock } = await applyLessonProgress({
      userId,
      topic,
      masteryLevel: 0,
      status: result.completedNow ? 'COMPLETED' : 'IN_PROGRESS',
      timeSpent: activeSeconds ?? 0,
      isPartCompletion: result.completedNow,
    })
    flashcards = flashcardUnlockPayload(unlock)
  }

  return NextResponse.json({
    watchedRanges: result.merged,
    accepted: result.accepted,
    ...(result.cardsRequired ? { cardsRequired: true } : {}),
    complete: result.complete,
    completedNow: result.completedNow,
    ...(flashcards ? { flashcards } : {}),
  })
}
