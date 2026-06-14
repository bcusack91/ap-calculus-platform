import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'
import { touchDailyStreak } from '@/lib/streak'
import { MASTERY_LEVEL_ON_EXIT_PASS } from '@/lib/mastery'

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
    const { topicSlug, score, totalQuestions, passed, mustRedoUnit, answers, timeSpent, variant } = parsed.data
    const userId = session.user.id

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
        // Map topic slugs to competitive category slugs
        const topicToCategoryMap: Record<string, string[]> = {
          'sat-linear-equations-inequalities': ['algebra'],
          'sat-quadratic-equations': ['algebra'],
          'sat-functions': ['advanced-math'],
          'sat-exponents-radicals': ['advanced-math'],
          'sat-ratios-proportions-percents': ['problem-solving'],
          'sat-statistics-data-interpretation': ['problem-solving'],
          'sat-exponential-functions': ['advanced-math'],
          'sat-circles': ['additional-topics'],
          'sat-complex-numbers': ['advanced-math'],
        }

        const categories = topicToCategoryMap[topicSlug] || []

        // Ensure user has a CompetitiveProfile
        await tx.competitiveProfile.upsert({
          where: { userId },
          update: { competitiveModeUnlocked: true },
          create: {
            userId,
            competitiveModeUnlocked: true,
            unitCircleMMR: 1000,
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

      // Not passed — seed flashcards for review
      const topic = await tx.topic.findUnique({
        where: { slug: topicSlug },
        include: { flashcards: true, exampleProblems: true },
      })

      if (topic) {
        // Auto-generate flashcards if none exist
        if (topic.flashcards.length === 0) {
          const candidates = generateFlashcardsFromContent(topic.textContent)
          const problemText = topic.exampleProblems
            .map(p => `${p.question}\n${p.solution}`)
            .join('\n\n')
          if (problemText) {
            candidates.push(...generateFlashcardsFromContent(problemText))
          }
          const topFlashcards = getTopFlashcards(candidates, 8)
          for (const card of topFlashcards) {
            const fc = await tx.flashcard.create({
              data: {
                topicId: topic.id,
                front: card.front,
                back: card.back,
                hint: card.hint,
                isPremium: false,
              },
            })
            topic.flashcards.push(fc as typeof topic.flashcards[number])
          }
        }

        // Add FlashcardProgress entries for the user (skipDuplicates keeps the
        // old upsert-with-empty-update semantics: existing rows are untouched)
        if (topic.flashcards.length > 0) {
          await tx.flashcardProgress.createMany({
            data: topic.flashcards.map((flashcard) => ({
              userId,
              flashcardId: flashcard.id,
              easeFactor: 2.5,
              interval: 0,
              repetitions: 0,
              nextReview: new Date(),
              lastReviewed: new Date(),
              reviewCount: 0,
            })),
            skipDuplicates: true,
          })
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

    return NextResponse.json(result)

  } catch (error) {
    console.error('Error submitting exit quiz:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
