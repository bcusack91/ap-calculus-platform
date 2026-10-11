import { NextResponse } from 'next/server'
import type { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordQuestions } from '@/lib/study-tracking'
import { buildExamForm, PSAT_FORM_COUNT, type SatExam, type SatTestFormat } from '@/data/sat-practice/test-generator'
import { PSAT_FULL_FORMAT, scoringVersionForForm } from '@/lib/sat-attempt-format'
import {
  gradeSatPractice,
  normalizeSatResponses,
  satSubmissionFormVersion,
  storedSatAnswers,
} from '@/lib/sat-practice-grading'
import { satPracticeRows } from '@/lib/sat-practice-rows'

/**
 * POST /api/sat-practice/submit — the server is authoritative. It rebuilds the
 * form (buildSatForm / routedModule2, the builders the runner uses), grades
 * each answer by question id, derives each section's Module 2 route from its
 * Module 1, checks the submitted Module 2 is the routed one (the pre-built
 * module = it started before the swap, scored unrouted), and scores on that
 * route's curve. Client scores and tallies are ignored.
 *
 * `exam: 'psat'` grades an adaptive PSAT/NMSQT form (buildPsatForm, tests 1-3)
 * on the PSAT routed curves (160-760) and stores format 'psat-full', which
 * keeps PSAT attempts out of every SAT score reader (see sat-attempt-format).
 *
 * Form version: new tests are built at form v2 and stored as scoringVersion
 * 3. A test started on v1 (before the v2 deploy) is recognised by its
 * question ids, graded against v1 and stored as scoringVersion 2, so its
 * review rebuilds the form it was actually taken on.
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
    const exam: SatExam = body.exam === 'psat' || body.format === PSAT_FULL_FORMAT ? 'psat' : 'sat'
    if (exam === 'psat' && testNumber > PSAT_FORM_COUNT) {
      return NextResponse.json({ error: 'Unknown PSAT practice test' }, { status: 400 })
    }
    // Older bundles sent no format: a full test has 54 R&W questions, a mini 27.
    const format: SatTestFormat =
      exam === 'psat'
        ? 'full'
        : body.format === 'full' || body.format === 'mini'
          ? body.format
          : Number(body.rwTotal) > 27
            ? 'full'
            : 'mini'
    const storedFormat = exam === 'psat' ? PSAT_FULL_FORMAT : format

    // Section ids are the same on every form version.
    const form = await buildExamForm(exam, testNumber, format)
    const responses = normalizeSatResponses(body, form.sections.map((s) => s.id))
    const formVersion = await satSubmissionFormVersion({
      testNumber,
      format,
      exam,
      responses,
      // The runner says which version it built; older bundles say nothing.
      preferred: body.formVersion === 1 || body.formVersion === 2 ? body.formVersion : undefined,
    })
    const grade = await gradeSatPractice({ testNumber, format, exam, responses, formVersion })

    // Idempotency guard (same class of bug as the exit-quiz submission loop,
    // fixed in dbf64d31): a re-POST of an identical just-submitted result must
    // not create a second attempt. A genuine retake of a full-length test
    // cannot happen within 30 seconds.
    const duplicate = await prisma.satTestAttempt.findFirst({
      where: {
        userId: session.user.id,
        testNumber,
        format: storedFormat,
        totalScore: grade.totalScore,
        startedAt: { gte: new Date(Date.now() - 30_000) },
      },
      select: { id: true },
    })
    const scores = {
      exam,
      format: storedFormat,
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
        // questions from testNumber/format/tiers and the form version that
        // scoringVersion records, via buildExamForm).
        answers: storedSatAnswers(grade.items) as unknown as Prisma.InputJsonValue,
        format: storedFormat,
        rwTier: grade.rw.tier,
        mathTier: grade.math.tier,
        scoringVersion: scoringVersionForForm(grade.formVersion),
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
