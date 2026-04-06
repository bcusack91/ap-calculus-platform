import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'

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

    const body = await request.json()
    const { topicSlug, score, totalQuestions, passed, mustRedoUnit, answers, timeSpent, variant } = body

    if (!topicSlug || score === undefined || !totalQuestions) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save the attempt
    const attempt = await prisma.exitQuizAttempt.create({
      data: {
        userId: session.user.id,
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
      await prisma.competitiveProfile.upsert({
        where: { userId: session.user.id },
        update: { competitiveModeUnlocked: true },
        create: {
          userId: session.user.id,
          competitiveModeUnlocked: true,
          unitCircleMMR: 1000,
          overallMMR: 1000,
        }
      })

      // Also update topic progress to COMPLETED/MASTERED
      const topic = await prisma.topic.findUnique({
        where: { slug: topicSlug },
        select: { id: true }
      })

      if (topic) {
        await prisma.topicProgress.upsert({
          where: {
            userId_topicId: {
              userId: session.user.id,
              topicId: topic.id,
            }
          },
          update: {
            status: 'MASTERED',
            masteryLevel: 1.0,
            completedAt: new Date(),
          },
          create: {
            userId: session.user.id,
            topicId: topic.id,
            status: 'MASTERED',
            masteryLevel: 1.0,
            completedAt: new Date(),
          }
        })
      }

      return NextResponse.json({
        attempt,
        passed: true,
        unlockedCategories: categories,
        message: 'Competitive mode unlocked!'
      })
    }

    // Add flashcards when quiz is not passed
    if (!passed) {
      try {
        const topic = await prisma.topic.findUnique({
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
              const fc = await prisma.flashcard.create({
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

          // Add FlashcardProgress entries for the user
          for (const flashcard of topic.flashcards) {
            await prisma.flashcardProgress.upsert({
              where: {
                userId_flashcardId: {
                  userId: session.user.id,
                  flashcardId: flashcard.id,
                },
              },
              update: {},
              create: {
                userId: session.user.id,
                flashcardId: flashcard.id,
                easeFactor: 2.5,
                interval: 0,
                repetitions: 0,
                nextReview: new Date(),
                lastReviewed: new Date(),
                reviewCount: 0,
              },
            })
          }
        }
      } catch (e) {
        console.error('Error adding flashcards from exit quiz:', e)
      }
    }

    return NextResponse.json({
      attempt,
      passed: false,
      mustRedoUnit: !!mustRedoUnit,
      message: mustRedoUnit
        ? 'Score below 5/10. You must redo the unit before retaking the quiz.'
        : 'Score 5-6/10. You can retake the quiz immediately.'
    })

  } catch (error) {
    console.error('Error submitting exit quiz:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
