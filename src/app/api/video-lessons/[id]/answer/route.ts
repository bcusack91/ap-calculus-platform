import { NextResponse } from 'next/server'
import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { loadPublishedLessonById } from '@/lib/video-lessons-server'
import { isLessonComplete, parseProgressSteps, parseQuestions, shuffledQuestion, visibleSteps, type StoredStep } from '@/lib/video-lesson-core'
import { questionKey, optionKey } from '@/lib/question-key'
import { recordQuestions } from '@/lib/study-tracking'
import { applyLessonProgress, flashcardUnlockPayload } from '@/lib/lesson-progress'

/**
 * POST /api/video-lessons/[id]/answer { clipId, questionIndex, chosenIndex }
 *   → { correct, correctIndex, explanation, complete, completedNow, flashcards? }
 *
 * Grades one checkpoint question on the server (the page never receives the
 * key). chosenIndex is in the displayed (shuffled) order. A checkpoint can be
 * answered before the clip is watched here: students arriving from a short
 * link in a YouTube video (/v/<code>) usually watched it there. Finishing the
 * lesson still needs every clip watched on StudyMondo (isLessonComplete).
 * Every attempt is logged as a VIDEO_CHECK answer, so misses
 * reach the student's mistake log and the teacher's study report; the first
 * attempt is what the checkpoint score counts.
 */

const bodySchema = z.object({
  clipId: z.string().min(1).max(64),
  questionIndex: z.number().int().min(0).max(9),
  chosenIndex: z.number().int().min(0).max(3),
  durationMs: z.number().int().min(0).max(3_600_000).optional(),
})

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id
  const { id } = await params
  const parsed = bodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid answer' }, { status: 400 })
  const { clipId, questionIndex, chosenIndex, durationMs } = parsed.data

  const lesson = await loadPublishedLessonById(id)
  if (!lesson) return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
  const step = lesson.steps.find((s) => s.clipId === clipId)
  const q = step ? parseQuestions(step.questions)[questionIndex] : undefined
  if (!step || !q) return NextResponse.json({ error: 'Question not found' }, { status: 400 })

  const shown = shuffledQuestion(q)
  const correct = chosenIndex === shown.correctIndex

  const result = await prisma.$transaction(async (tx) => {
    await tx.$queryRaw`SELECT id FROM "VideoLessonProgress" WHERE "userId" = ${userId} AND "lessonId" = ${lesson.id} FOR UPDATE`
    const row = await tx.videoLessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      select: { steps: true, completedAt: true },
    })
    const steps = parseProgressSteps(row?.steps)
    const prev = steps[clipId] ?? {}
    const before = prev.answered?.[String(questionIndex)]
    const attempts = (before?.attempts ?? (before ? 1 : 0)) + 1
    steps[clipId] = {
      ...prev,
      answered: {
        ...prev.answered,
        // Keep a first-attempt-correct record; later attempts only add a count.
        [String(questionIndex)]: { correct: before ? before.correct || correct : correct, at: new Date().toISOString(), attempts },
      },
    }
    const user = await tx.user.findUnique({ where: { id: userId }, select: { lessonIncludeLowYield: true } })
    const complete = isLessonComplete(visibleSteps(lesson.steps as StoredStep[], !!user?.lessonIncludeLowYield), steps)
    const completedNow = complete && !row?.completedAt
    await tx.videoLessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId: lesson.id } },
      update: { steps: steps as Prisma.InputJsonValue, lastClipId: clipId, lessonVersion: lesson.version, ...(completedNow ? { completedAt: new Date() } : {}) },
      create: { userId, lessonId: lesson.id, steps: steps as Prisma.InputJsonValue, lastClipId: clipId, lessonVersion: lesson.version, ...(completedNow ? { completedAt: new Date() } : {}) },
    })
    return { complete, completedNow, firstAttempt: attempts === 1 }
  })

  await recordQuestions(userId, [{
    source: 'VIDEO_CHECK',
    topicSlug: lesson.topicSlug,
    courseSlug: lesson.courseSlug,
    questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer }),
    answered: 1,
    correct: correct ? 1 : 0,
    durationMs: durationMs ?? null,
    attemptKind: 'video-check',
    attemptId: lesson.id,
    itemIndex: questionIndex,
    chosenIndex,
    chosenKey: optionKey(shown.options[chosenIndex] ?? ''),
  }])

  let flashcards: ReturnType<typeof flashcardUnlockPayload>
  if (result.completedNow) {
    const topic = await prisma.topic.findUnique({ where: { slug: lesson.topicSlug }, select: { id: true, slug: true } })
    if (topic) {
      const { unlock } = await applyLessonProgress({ userId, topic, masteryLevel: 0, status: 'COMPLETED', isPartCompletion: true })
      flashcards = flashcardUnlockPayload(unlock)
    }
  }

  return NextResponse.json({
    correct,
    correctIndex: shown.correctIndex,
    explanation: q.explanation,
    complete: result.complete,
    completedNow: result.completedNow,
    ...(flashcards ? { flashcards } : {}),
  })
}
