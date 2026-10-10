import { NextResponse } from 'next/server'
import type { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordQuestions } from '@/lib/study-tracking'
import { buildSatForm, type SatTestFormat } from '@/data/sat-practice/test-generator'
import { gradeSatPractice, normalizeSatResponses, storedSatAnswers } from '@/lib/sat-practice-grading'
import { satPracticeRows } from '@/lib/sat-practice-rows'

/** Scoring version written by this route: server-graded, routing-aware curve. */
const SCORING_VERSION = 2

/**
 * POST /api/sat-practice/submit — the server is authoritative. It rebuilds the
 * form (buildSatForm / routedModule2, the builders the runner uses), grades
 * each answer by question id, derives each section's Module 2 route from its
 * Module 1, checks the submitted Module 2 is the routed one (the pre-built
 * module = it started before the swap, scored unrouted), and scores on that
 * route's curve. Client scores and tallies are ignored.
 */
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { testNumber, timeSpent } = body ?? {}

    if (typeof testNumber !== 'number' || !Number.isInteger(testNumber) || testNumber < 1 || testNumber > 100) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    // Older bundles sent no format: a full test has 54 R&W questions, a mini 27.
    const format: SatTestFormat =
      body.format === 'full' || body.format === 'mini'
        ? body.format
        : Number(body.rwTotal) > 27
          ? 'full'
          : 'mini'

    const form = await buildSatForm(testNumber, format)
    const responses = normalizeSatResponses(body, form.sections.map((s) => s.id))
    const grade = await gradeSatPractice({ testNumber, format, responses })

    // Idempotency guard (same class of bug as the exit-quiz submission loop,
    // fixed in dbf64d31): a re-POST of an identical just-submitted result must
    // not create a second attempt. A genuine retake of a full-length test
    // cannot happen within 30 seconds.
    const duplicate = await prisma.satTestAttempt.findFirst({
      where: {
        userId: session.user.id,
        testNumber,
        totalScore: grade.totalScore,
        startedAt: { gte: new Date(Date.now() - 30_000) },
      },
      select: { id: true },
    })
    const scores = {
      rwScore: grade.rwScore,
      mathScore: grade.mathScore,
      totalScore: grade.totalScore,
      rwCorrect: grade.rw.m1Correct + grade.rw.m2Correct,
      rwTotal: grade.rw.m1Total + grade.rw.m2Total,
      mathCorrect: grade.math.m1Correct + grade.math.m2Correct,
      mathTotal: grade.math.m1Total + grade.math.m2Total,
      rwTier: grade.rw.tier,
      mathTier: grade.math.tier,
    }
    if (duplicate) {
      return NextResponse.json({ success: true, attemptId: duplicate.id, deduplicated: true, ...scores })
    }

    const seconds = Number(timeSpent)
    const attempt = await prisma.satTestAttempt.create({
      data: {
        userId: session.user.id,
        testNumber,
        rwScore: scores.rwScore,
        mathScore: scores.mathScore,
        totalScore: scores.totalScore,
        rwCorrect: scores.rwCorrect,
        rwTotal: scores.rwTotal,
        mathCorrect: scores.mathCorrect,
        mathTotal: scores.mathTotal,
        timeSpent: Number.isFinite(seconds) ? Math.max(0, Math.min(Math.round(seconds), 6 * 60 * 60)) : 0,
        weakAreas: grade.weakAreas.join(', ') || undefined,
        strengths: grade.strengths.join(', ') || undefined,
        // Per-question answers in item order (the review page rebuilds the
        // questions from testNumber/format/tiers via buildSatForm).
        answers: storedSatAnswers(grade.items) as unknown as Prisma.InputJsonValue,
        format,
        rwTier: grade.rw.tier,
        mathTier: grade.math.tier,
        scoringVersion: SCORING_VERSION,
        completed: true,
        completedAt: new Date(),
      },
    })

    // Teacher report + answer log: one PRACTICE row per question, graded above.
    await recordQuestions(session.user.id, satPracticeRows(grade.items, { attemptId: attempt.id }))

    return NextResponse.json({ success: true, attemptId: attempt.id, ...scores })
  } catch (error) {
    console.error('SAT practice test submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
