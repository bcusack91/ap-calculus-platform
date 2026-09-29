import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { recordQuestions } from '@/lib/study-tracking'

export const dynamic = 'force-dynamic'

/** One request never carries more than this (an entrance quiz is ~10-20). */
const MAX_ROWS = 60

const rowSchema = z
  .object({
    // Only the CLIENT-graded sources. Everything else (exit quiz, diagnostics,
    // practice, full-length, daily, competitive) is recorded by its own submit
    // route from the server's grading, so a client can't post those here.
    source: z.enum(['ENTRANCE', 'LESSON']),
    topicSlug: z.string().min(1).max(200),
    questionKey: z.string().max(200).optional(),
    answered: z.number().int().min(1).max(50),
    correct: z.number().int().min(0),
    durationMs: z.number().int().min(0).max(60 * 60 * 1000).optional(),
  })
  .refine((r) => r.correct <= r.answered, { message: 'correct cannot exceed answered', path: ['correct'] })

const bodySchema = z.object({ rows: z.array(rowSchema).min(1).max(MAX_ROWS) })

/**
 * POST /api/activity/questions — answered questions graded in the browser
 * (entrance quizzes, in-lesson question sections) for the teacher's
 * per-student report. Fire-and-forget from the client.
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
  if (!parsed.success) return NextResponse.json({ error: 'Invalid question activity payload' }, { status: 400 })

  await recordQuestions(userId, parsed.data.rows)
  return NextResponse.json({ ok: true })
}
