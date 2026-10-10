import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordQuestions } from '@/lib/study-tracking'
import { mcatPracticeRows } from '@/lib/question-activity-rows'
import { resolveMcatPracticeRefs } from '@/lib/question-sources/mcat'

/** A section never has more questions than this; bounds a hostile payload. */
const MAX_ANSWERS = 100

/**
 * The stored per-question answers: { questionIndex, selected, correct, ref }.
 * `ref` (pool:<slug>:<id> | mcatpsg:<passageId>:<i>) is what lets the server
 * re-resolve the question for the answer log and the review page.
 */
function sanitizeAnswers(raw: unknown): { questionIndex: number; selected: number | null; correct: number | null; ref?: string }[] {
  if (!Array.isArray(raw)) return []
  return raw.slice(0, MAX_ANSWERS).map((a, i) => {
    const r = (a && typeof a === 'object' ? a : {}) as Record<string, unknown>
    const int = (v: unknown) => (typeof v === 'number' && Number.isInteger(v) ? v : null)
    return {
      questionIndex: int(r.questionIndex) ?? i,
      selected: int(r.selected),
      correct: int(r.correct),
      ...(typeof r.ref === 'string' && r.ref.length <= 400 ? { ref: r.ref } : {}),
    }
  })
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const {
      sectionId,
      sectionName,
      score,
      maxScore,
      percentage,
      correct,
      total,
      timeSpent,
    } = body
    const answers = sanitizeAnswers(body.answers)

    if (!sectionId || typeof percentage !== 'number') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Idempotency guard (same class of bug as the exit-quiz submission loop,
    // fixed in dbf64d31): a re-POST of an identical just-submitted result must
    // not create a second attempt. A genuine retake of a full section cannot
    // happen within 30 seconds.
    const duplicate = await prisma.mcatTestAttempt.findFirst({
      where: {
        userId: session.user.id,
        sectionId,
        percentage,
        startedAt: { gte: new Date(Date.now() - 30_000) },
      },
      select: { id: true },
    })
    if (duplicate) {
      return NextResponse.json({ success: true, attemptId: duplicate.id, deduplicated: true })
    }

    const attempt = await prisma.mcatTestAttempt.create({
      data: {
        userId: session.user.id,
        sectionId,
        sectionName: sectionName ?? sectionId,
        score: score ?? 0,
        maxScore: maxScore ?? 132,
        percentage,
        correct: correct ?? 0,
        total: total ?? 0,
        timeSpent: timeSpent ?? 0,
        answers,
        completed: true,
        completedAt: new Date(),
      },
    })

    // Teacher report + answer log: one PRACTICE row per question. Each ref is
    // re-resolved from the bank (never trusting client text or keys); a
    // question that can't be re-resolved keeps the old grading and stays out
    // of the answer log (see mcatPracticeRows).
    let resolved: Awaited<ReturnType<typeof resolveMcatPracticeRefs>> = []
    try {
      resolved = await resolveMcatPracticeRefs(answers.map((a) => a.ref))
    } catch (err) {
      console.error('[mcat-practice/submit] ref resolution failed (ignored):', err)
    }
    await recordQuestions(
      session.user.id,
      mcatPracticeRows({ sectionId, sectionName, correct, total, timeSpent, answers }, resolved, { attemptId: attempt.id }),
    )

    return NextResponse.json({ success: true, attemptId: attempt.id })
  } catch (error) {
    console.error('MCAT practice submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
