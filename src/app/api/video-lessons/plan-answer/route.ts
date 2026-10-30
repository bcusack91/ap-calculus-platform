import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { lookupShortLink } from '@/data/video-short-links'
import { getShotList } from '@/data/video-shot-lists'
import { shuffledQuestion } from '@/lib/video-lesson-core'
import { questionKey, optionKey } from '@/lib/question-key'
import { recordQuestions } from '@/lib/study-tracking'

/**
 * POST /api/video-lessons/plan-answer { code, questionIndex, chosenIndex, durationMs? }
 *   → { correct, correctIndex, explanation }
 *
 * Grades a checkpoint question on the short-link questions page
 * (/v/<code>/questions), which serves a clip's questions from its recording
 * plan before the video lesson is approved. Open to everyone (the questions
 * are the free hook from YouTube); a signed-in student's answer is logged as
 * a VIDEO_CHECK answer so misses reach their mistake log.
 */
const bodySchema = z.object({
  code: z.string().min(1).max(40),
  questionIndex: z.number().int().min(0).max(9),
  chosenIndex: z.number().int().min(0).max(3),
  durationMs: z.number().int().min(0).max(3_600_000).optional(),
})

export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid answer' }, { status: 400 })
  const { code, questionIndex, chosenIndex, durationMs } = parsed.data
  const link = lookupShortLink(code)
  const plan = link ? await getShotList(link.topicSlug) : null
  const q = link && plan ? plan.clips[link.clip - 1]?.checkpoint[questionIndex] : undefined
  if (!link || !plan || !q) return NextResponse.json({ error: 'Question not found' }, { status: 404 })

  const shown = shuffledQuestion(q)
  const correct = chosenIndex === shown.correctIndex

  const session = await auth()
  if (session?.user?.id) {
    await recordQuestions(session.user.id, [{
      source: 'VIDEO_CHECK',
      topicSlug: link.topicSlug,
      courseSlug: plan.courseSlug,
      questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer }),
      answered: 1,
      correct: correct ? 1 : 0,
      durationMs: durationMs ?? null,
      attemptKind: 'video-check',
      attemptId: `plan:${link.code}`,
      itemIndex: questionIndex,
      chosenIndex,
      chosenKey: optionKey(shown.options[chosenIndex] ?? ''),
    }])
  }

  return NextResponse.json({ correct, correctIndex: shown.correctIndex, explanation: q.explanation })
}
