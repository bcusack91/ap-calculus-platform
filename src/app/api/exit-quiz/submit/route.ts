import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordAssignmentCompletion } from '@/lib/assignment-autocomplete'
import { maybeUnlockFlashcards } from '@/lib/flashcard-unlock'
import { regradeExitQuiz, regradeExitQuizSeeded } from '@/lib/exit-quiz-regrade'
import { touchDailyStreak } from '@/lib/streak'
import { MASTERY_LEVEL_ON_EXIT_PASS, EXIT_QUIZ_PASS_FRACTION, EXIT_QUIZ_REDO_FRACTION } from '@/lib/mastery'
import { satBankSlugsForCourseTopic } from '@/lib/sat-topic-map'

// Bounded payload: quizzes are 10 questions (score = number correct), but allow
// headroom up to 100. answers mirrors the client shape
// { questionId, selectedAnswer, correct } (extra small fields tolerated).
const submitSchema = z.object({
  topicSlug: z.string().min(1).max(200),
  score: z.number().int().min(0).max(100),
  totalQuestions: z.number().int().min(1).max(100),
  passed: z.boolean().optional().default(false),
  mustRedoUnit: z.boolean().optional().default(false),
  variant: z.number().int().min(1).max(10).optional(),
  // Generation seed + difficulty tier the client used. When present, the server
  // regenerates the identical quiz and grades authoritatively (no client trust).
  seed: z.number().int().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  timeSpent: z.number().int().min(0).max(36000).optional().default(0),
  answers: z
    .array(
      z.object({
        questionId: z.union([z.string().max(200), z.number()]).optional(),
        selectedAnswer: z.union([z.number(), z.string().max(500)]).optional(),
        correct: z.boolean().optional(),
      })
    )
    .max(100)
    .optional()
    .default([]),
}).refine((d) => d.score <= d.totalQuestions, {
  message: 'score cannot exceed totalQuestions',
  path: ['score'],
})

/**
 * POST /api/exit-quiz/submit
 * Submit exit quiz results and handle unlock logic.
 */
export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const parsed = submitSchema.safeParse(await request.json())
    if (!parsed.success) {
      const message = parsed.error.issues
        .map((i) => `${i.path.join('.')}: ${i.message}`)
        .join('; ')
      return NextResponse.json({ error: message }, { status: 400 })
    }
    const { topicSlug, score: rawScore, totalQuestions, answers, timeSpent, variant, seed, difficulty } = parsed.data
    const userId = session.user.id

    // Pass/fail and mastery are decided HERE, not by the client. These gate MASTERED
    // status + competitive unlock + assignment auto-grading, so nothing client-sent
    // can be trusted: the client's `passed`/`mustRedoUnit` are ignored, and the
    // per-answer `correct` booleans are RE-GRADED server-side against the real
    // question bank whenever the question can be resolved (regradeExitQuiz reproduces
    // the client's seeded option shuffle and compares to the bank's correct answer).
    // Only answers whose questionId can't be resolved fall back to the client value,
    // and we warn once per request when that happens.
    const answers_ = answers || []
    let score: number
    if (answers_.length > 0) {
      // Preferred path: the client sent the generation seed, so regenerate the
      // exact quiz and grade authoritatively. Falls through to the probe-based
      // regrade if seeding isn't available or reproduces no key.
      const seeded = typeof seed === 'number'
        ? await regradeExitQuizSeeded(topicSlug, answers_, seed, totalQuestions, difficulty)
        : null
      const regrade = seeded ?? (await regradeExitQuiz(topicSlug, answers_))
      if (regrade.resolvedCount > 0) {
        // At least one question graded from the bank — trust the server count.
        score = Math.min(regrade.score, totalQuestions)
      } else {
        // Nothing resolvable (bank not found or non-reproducible ids) — preserve the
        // legacy behavior: use the client's per-answer booleans, else the raw score.
        const answerCorrect = answers_.filter((a) => a.correct === true).length
        const hasScoredAnswers = answers_.some((a) => typeof a.correct === 'boolean')
        score = hasScoredAnswers
          ? Math.min(answerCorrect, totalQuestions)
          : Math.min(Math.max(0, rawScore), totalQuestions)
      }
      if (regrade.usedFallback) {
        console.warn(
          `[exit-quiz/submit] regrade fell back to client-asserted correctness for ` +
            `${regrade.unresolvedCount}/${answers_.length} answers (topicSlug=${topicSlug}); ` +
            `question bank could not be resolved for those questions`,
        )
      }
    } else {
      // No per-question answers submitted — nothing to regrade; use the raw score.
      score = Math.min(Math.max(0, rawScore), totalQuestions)
    }
    const passed = score >= Math.ceil(totalQuestions * EXIT_QUIZ_PASS_FRACTION)
    const mustRedoUnit = score < Math.ceil(totalQuestions * EXIT_QUIZ_REDO_FRACTION)

    // Idempotency guard. A client bug once re-POSTed the same completed result
    // once per round-trip until the user navigated away, writing thousands of
    // duplicate rows per quiz and inflating every engagement metric roughly
    // 100x. The client is fixed, but this table is the source of truth for
    // analytics, mastery and streaks, so the server refuses to record the same
    // user + topic + score again within a short window rather than trusting any
    // client to behave. A genuine retake takes far longer than 30 seconds.
    const duplicate = await prisma.exitQuizAttempt.findFirst({
      where: {
        userId,
        topicSlug,
        score,
        totalQuestions,
        startedAt: { gte: new Date(Date.now() - 30_000) },
      },
      select: { id: true },
    })
    if (duplicate) {
      return NextResponse.json({ ok: true, attemptId: duplicate.id, deduplicated: true })
    }

    // All writes (attempt + streak + unlock/progress or flashcards) commit or
    // roll back together so a partial failure can't leave inconsistent state.
    const result = await prisma.$transaction(async (tx) => {
      // Save the attempt
      const attempt = await tx.exitQuizAttempt.create({
        data: {
          userId,
          topicSlug,
          score,
          totalQuestions,
          passed: !!passed,
          mustRedoUnit: !!mustRedoUnit,
          variant: typeof variant === 'number' ? variant : 1,
          answers: answers || [],
          timeSpent: timeSpent || 0,
        }
      })

      // Submitting an exit quiz is study activity — advance the daily streak
      await touchDailyStreak(tx, userId)

      // If passed, unlock competitive mode for the relevant category
      if (passed) {
        // Map topic slugs to competitive category slugs. SAT topics resolve to
        // the SAT bank category keys ('sat-math' / 'sat-reading' / the two
        // punctuation banks) via the shared sat-topic-map — the same keys
        // unlock-check gates on. (The old inline map pointed SAT topics at
        // nonexistent categories like 'advanced-math'.)
        const categories: string[] = satBankSlugsForCourseTopic(topicSlug) ?? []

        // Ensure user has a CompetitiveProfile
        await tx.competitiveProfile.upsert({
          where: { userId },
          update: { competitiveModeUnlocked: true },
          create: {
            userId,
            competitiveModeUnlocked: true,
            overallMMR: 1000,
          }
        })

        // Also update topic progress to COMPLETED/MASTERED
        const topic = await tx.topic.findUnique({
          where: { slug: topicSlug },
          select: { id: true }
        })

        if (topic) {
          await tx.topicProgress.upsert({
            where: {
              userId_topicId: {
                userId,
                topicId: topic.id,
              }
            },
            update: {
              status: 'MASTERED',
              masteryLevel: MASTERY_LEVEL_ON_EXIT_PASS,
              completedAt: new Date(),
            },
            create: {
              userId,
              topicId: topic.id,
              status: 'MASTERED',
              masteryLevel: MASTERY_LEVEL_ON_EXIT_PASS,
              completedAt: new Date(),
            }
          })
        }

        return {
          attempt,
          passed: true as const,
          unlockedCategories: categories,
          message: 'Competitive mode unlocked!'
        }
      }

      return {
        attempt,
        passed: false as const,
        mustRedoUnit: !!mustRedoUnit,
        message: mustRedoUnit
          ? 'Score below 5/10. You must redo the unit before retaking the quiz.'
          : 'Score 5-6/10. You can retake the quiz immediately.'
      }
    })

    // Record per-question performance metrics that feed the Six Sigma analytics
    // dashboard. Best-effort and OUTSIDE the transaction: a metrics failure must
    // never roll back (or fail) the quiz submission. problemType = topicSlug so the
    // per-type breakdown reads as a per-topic breakdown in the aggregate view.
    try {
      const scored = (answers || []).filter((a) => typeof a.correct === 'boolean')
      if (scored.length > 0) {
        const perQuestionMs = timeSpent > 0 ? Math.round((timeSpent * 1000) / scored.length) : 0
        await prisma.factoringPerformanceMetrics.createMany({
          data: scored.map((a) => ({
            userId,
            sessionId: result.attempt.id,
            problemType: topicSlug,
            lessonPart: typeof variant === 'number' ? variant : 1,
            isCorrect: a.correct as boolean,
            attemptNumber: 1,
            timeToAnswer: perQuestionMs,
            hintsUsed: 0,
            problemDifficulty: 'MEDIUM',
            problemComplexity: 1,
          })),
        })
      }
    } catch (metricsError) {
      console.error('exit-quiz metrics write failed (non-fatal):', metricsError)
    }

    // Auto-record classroom-assignment submissions from this result. `score` is the
    // server-verified value computed above (re-graded against the question bank where
    // the questions resolve; client-asserted only for unresolved questions), so this
    // is the same authoritative number that gates MASTERED status and competitive
    // unlocks. Completes both QUIZ and INTERACTIVE_LESSON assignments on this topic
    // (lessons culminate in the exit quiz). Best-effort.
    await recordAssignmentCompletion({
      userId,
      topicSlug,
      types: ['QUIZ', 'INTERACTIVE_LESSON'],
      score: totalQuestions > 0 ? score / totalQuestions : 0,
    })

    // Flashcard unlock rule: lesson done (self-paced or in-class) + exit quiz
    // submitted. Submitting the quiz may complete the pair, so check here.
    // Best-effort — an unlock failure must never fail the submission.
    let flashcards: { newCards: number; totalActive: number; topicTitle: string } | undefined
    try {
      const unlock = await maybeUnlockFlashcards(userId, topicSlug)
      if (unlock.unlocked && unlock.newCards > 0) {
        flashcards = {
          newCards: unlock.newCards,
          totalActive: unlock.totalActive,
          topicTitle: unlock.topicTitle,
        }
      }
    } catch (unlockError) {
      console.error('exit-quiz flashcard unlock failed (non-fatal):', unlockError)
    }

    return NextResponse.json({ ...result, flashcards })

  } catch (error) {
    console.error('Error submitting exit quiz:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
