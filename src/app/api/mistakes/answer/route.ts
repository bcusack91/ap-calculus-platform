import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { resolveItem } from '@/lib/question-resolver'
import { recordQuestions } from '@/lib/study-tracking'
import { isQuestionKey } from '@/lib/question-key'
import { CORRECT_TO_RETIRE } from '@/lib/mistake-log'
import { gradeGridIn } from '@/data/sat-grid-in'
import { MISTAKE_COURSES, isMistakeCourse, mistakeStateFor } from '@/lib/mistakes-server'

export const dynamic = 'force-dynamic'

const bodySchema = z.object({
  course: z.string(),
  sessionId: z.string().min(8).max(100),
  position: z.number().int().min(0).max(100),
  questionKey: z.string(),
  origin: z.object({ attemptKind: z.string().max(40), attemptId: z.string().min(1).max(100), itemIndex: z.number().int().min(0).max(1000) }),
  chosenIndex: z.number().int().min(0).max(10).nullable(),
  /** A typed answer, for grid-in questions. */
  chosenText: z.string().trim().max(20).optional(),
  durationMs: z.number().int().min(0).max(60 * 60 * 1000).optional(),
})

/**
 * POST /api/mistakes/answer — grade one re-quiz answer on the server (the
 * question is rebuilt from the attempt it was missed in), log it under the
 * question's ORIGINAL key (so an item edited since still retires), and say
 * whether it just retired from the log.
 */
export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success || !isMistakeCourse(parsed.data.course) || !isQuestionKey(parsed.data.questionKey)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const { course, sessionId, position, questionKey, origin, chosenIndex, chosenText, durationMs } = parsed.data
  try {
    // The origin must be one of THIS student's misses of THIS question.
    const state = await mistakeStateFor(userId, course as 'mcat' | 'sat', questionKey)
    if (!state || state.origin.attemptId !== origin.attemptId || state.origin.itemIndex !== origin.itemIndex) {
      return NextResponse.json({ error: 'That question is not in your mistake log.' }, { status: 404 })
    }
    // One answer per re-quiz question: re-posting the same position can't
    // retire an item on its own.
    const already = await prisma.questionActivity.findFirst({
      where: { userId, attemptKind: 'mistake-review', attemptId: sessionId, itemIndex: position },
      select: { id: true },
    })
    if (already) return NextResponse.json({ error: 'You already answered this question in this re-quiz.' }, { status: 409 })
    const item = await resolveItem(origin, userId)
    if (!item) return NextResponse.json({ error: 'That question is no longer available.' }, { status: 410 })
    const correct = item.gridIn
      ? !!chosenText && gradeGridIn({ correctAnswer: item.gridIn.correctAnswer, acceptableAnswers: item.gridIn.acceptableAnswers ?? [], tolerance: item.gridIn.tolerance ?? 0 }, chosenText)
      : chosenIndex !== null && chosenIndex === item.correctIndex
    await recordQuestions(userId, [{
      source: 'MISTAKE_REVIEW',
      courseSlug: MISTAKE_COURSES[course as 'mcat' | 'sat'],
      topicSlug: item.topicSlug ?? state.topicSlug,
      discipline: item.discipline ?? state.discipline,
      questionKey,
      answered: 1,
      correct: correct ? 1 : 0,
      durationMs: durationMs ?? null,
      attemptKind: 'mistake-review',
      attemptId: sessionId,
      itemIndex: position,
      chosenIndex: item.gridIn ? null : chosenIndex,
      chosenText: item.gridIn ? chosenText || null : null,
    }])
    const after = await mistakeStateFor(userId, course as 'mcat' | 'sat', questionKey)
    return NextResponse.json({
      correct,
      correctIndex: item.correctIndex,
      ...(item.gridIn ? { acceptedAnswer: item.gridIn.correctAnswer } : {}),
      explanation: item.explanation,
      correctSince: after?.correctSince ?? 0,
      retireAfter: CORRECT_TO_RETIRE,
      retired: !!after?.retired,
    })
  } catch (err) {
    console.error('[POST /api/mistakes/answer]', err)
    return NextResponse.json({ error: 'Could not grade that answer' }, { status: 500 })
  }
}
