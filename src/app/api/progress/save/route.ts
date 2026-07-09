import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'
import { progressSaveSchema, parseBody } from '@/lib/validations'
import { invalidateCache, dashboardCacheKey } from '@/lib/redis'
import { touchDailyStreak } from '@/lib/streak'
import { recordAssignmentStarted } from '@/lib/assignment-autocomplete'

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const parsed = parseBody(progressSaveSchema, body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error },
        { status: 400 }
      )
    }
    const { topicSlug, topicId, lessonPart, completedSections, masteryLevel, timeSpent, isPartCompletion, variant, failedExitParts, masteredParts } = parsed.data

    if (!topicSlug && !topicId) {
      return NextResponse.json(
        { error: 'Topic slug or ID is required' },
        { status: 400 }
      )
    }

    let topic
    // Always verify the topic exists in the database, even if topicId is provided.
    // Trusting a client-supplied ID without verification could allow saving
    // progress against non-existent or unauthorized topics.
    if (topicId) {
      topic = await prisma.topic.findUnique({
        where: { id: topicId },
        select: { id: true },
      })
    } else {
      // Get topic ID from slug (fallback)
      topic = await prisma.topic.findUnique({
        where: { slug: topicSlug },
        select: { id: true },
      })
    }

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      )
    }

    // Calculate status based on progress
    let status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED' = 'IN_PROGRESS'

    if (masteryLevel >= 0.9) {
      status = 'MASTERED'
    } else if (masteryLevel >= 0.6) {
      status = 'COMPLETED'
    } else if ((lessonPart !== undefined && lessonPart > 1) || (completedSections && completedSections.length > 0)) {
      status = 'IN_PROGRESS'
    } else {
      status = 'NOT_STARTED'
    }

    const topicDbId = topic.id
    const userId = session.user.id

    // All progress + flashcard writes commit or roll back together. The
    // never-downgrade resolution happens INSIDE the transaction behind a row
    // lock, so two concurrent saves can't both read stale state and clobber
    // each other's status/mastery.
    const txResult = await prisma.$transaction(async (tx) => {
      // Lock the existing progress row (if any) so concurrent saves serialize.
      // If no row exists yet, the unique (userId, topicId) constraint makes the
      // racing upserts safe at the DB level.
      await tx.$queryRaw`SELECT id FROM "TopicProgress" WHERE "userId" = ${userId} AND "topicId" = ${topicDbId} FOR UPDATE`

      // Never downgrade mastery or status — resolve against the locked row
      const existing = await tx.topicProgress.findUnique({
        where: {
          userId_topicId: {
            userId,
            topicId: topicDbId,
          }
        },
        select: { masteryLevel: true, status: true }
      })

      const statusRank = { NOT_STARTED: 0, IN_PROGRESS: 1, COMPLETED: 2, MASTERED: 3 } as const
      const effectiveMastery = existing
        ? Math.max(masteryLevel || 0, existing.masteryLevel || 0)
        : (masteryLevel || 0)
      const effectiveStatus = existing && statusRank[existing.status as keyof typeof statusRank] > statusRank[status]
        ? existing.status as typeof status
        : status

      // Upsert topic progress. timeSpent is a CUMULATIVE total (the dashboard
      // sums it across topics) — increment it rather than overwriting it with
      // just this session's delta.
      const progress = await tx.topicProgress.upsert({
        where: {
          userId_topicId: {
            userId,
            topicId: topicDbId,
          }
        },
        update: {
          masteryLevel: effectiveMastery,
          status: effectiveStatus,
          lastAccessed: new Date(),
          timeSpent: { increment: timeSpent || 0 },
          completedAt: effectiveStatus === 'COMPLETED' || effectiveStatus === 'MASTERED' ? new Date() : null,
          ...(variant !== undefined && { variant }),
          ...(failedExitParts !== undefined && { failedExitParts }),
          ...(masteredParts !== undefined && { masteredParts }),
        },
        create: {
          userId,
          topicId: topicDbId,
          masteryLevel: effectiveMastery,
          status: effectiveStatus,
          timeSpent: timeSpent || 0,
          completedAt: effectiveStatus === 'COMPLETED' || effectiveStatus === 'MASTERED' ? new Date() : null,
          ...(variant !== undefined && { variant }),
          ...(failedExitParts !== undefined && { failedExitParts }),
          ...(masteredParts !== undefined && { masteredParts }),
        }
      })

      // Saving progress is study activity — advance the daily streak
      await touchDailyStreak(tx, userId)

      // 🎴 AUTO-GENERATE/INITIALIZE FLASHCARDS as user progresses through topic
      let flashcardsCreated = false
      let flashcardCount = 0
      let flashcardTopicTitle = ''
      let totalActiveFlashcards = 0
      let totalFlashcards = 0

      // Initialize flashcards ONLY when completing a part, not during progress checkpoints
      // This prevents flashcards from appearing when navigating between sections
      const shouldInitializeFlashcards = (
        isPartCompletion && (
          status === 'COMPLETED' ||
          status === 'MASTERED' ||
          (status === 'IN_PROGRESS' && lessonPart && lessonPart >= 1)
        )
      )

      if (shouldInitializeFlashcards) {
        // Get the full topic with content
        const fullTopic = await tx.topic.findUnique({
          where: { id: topicDbId },
          select: {
            id: true,
            title: true,
            textContent: true,
            flashcards: {
              select: { id: true, lessonPart: true },
            },
            exampleProblems: {
              select: { question: true, solution: true },
            },
          },
        })

        if (fullTopic && fullTopic.flashcards.length === 0) {
          // Generate flashcards from content
          const candidates = generateFlashcardsFromContent(fullTopic.textContent)

          // Also analyze example problems
          const problemText = fullTopic.exampleProblems
            .map(p => `${p.question}\n${p.solution}`)
            .join('\n\n')

          if (problemText) {
            const problemCandidates = generateFlashcardsFromContent(problemText)
            candidates.push(...problemCandidates)
          }

          // Get top flashcards
          const topFlashcards = getTopFlashcards(candidates, 8)

          if (topFlashcards.length > 0) {
            // Create flashcards, then initialize progress in a batch
            const createdFlashcards: { id: string }[] = []
            for (const card of topFlashcards) {
              const fc = await tx.flashcard.create({
                data: {
                  topicId: fullTopic.id,
                  front: card.front,
                  back: card.back,
                  hint: card.hint,
                  isPremium: false,
                },
                select: { id: true },
              })
              createdFlashcards.push(fc)
            }

            await tx.flashcardProgress.createMany({
              data: createdFlashcards.map((fc) => ({
                userId,
                flashcardId: fc.id,
                easeFactor: 2.5,
                interval: 0,
                repetitions: 0,
                nextReview: new Date(),
                lastReviewed: new Date(),
                reviewCount: 0,
              })),
            })

            flashcardsCreated = true
            flashcardCount = topFlashcards.length
            flashcardTopicTitle = fullTopic.title
          }
        } else if (fullTopic && fullTopic.flashcards.length > 0) {
          // LESSON PART-BASED INITIALIZATION: Only initialize flashcards tagged for completed parts
          // This ensures flashcards match the actual content covered

          // Determine which flashcards to initialize based on lesson part and MASTERED/COMPLETED status
          let flashcardsToConsider: typeof fullTopic.flashcards = []

          if (status === 'MASTERED' || status === 'COMPLETED') {
            // When topic is completed/mastered, initialize ALL flashcards (regardless of lessonPart tag)
            flashcardsToConsider = fullTopic.flashcards

          } else if (lessonPart) {
            // During progress: ONLY initialize flashcards tagged for completed parts
            // Cards without lessonPart tags will NOT be initialized during progress
            flashcardsToConsider = fullTopic.flashcards.filter(fc =>
              fc.lessonPart !== null && fc.lessonPart !== undefined && fc.lessonPart <= lessonPart
            )

          } else {
            // No lesson part specified, use all flashcards
            flashcardsToConsider = fullTopic.flashcards
          }

          // Check how many are already initialized
          const existingProgress = await tx.flashcardProgress.findMany({
            where: {
              userId,
              flashcard: {
                topicId: fullTopic.id
              }
            },
            select: {
              flashcardId: true
            }
          })

          const initializedIds = new Set(existingProgress.map(p => p.flashcardId))

          // Find flashcards that should be active but aren't yet initialized
          const uninitializedCards = flashcardsToConsider.filter(fc => !initializedIds.has(fc.id))

          // Store total counts for notification
          totalActiveFlashcards = initializedIds.size
          totalFlashcards = fullTopic.flashcards.length

          if (uninitializedCards.length > 0) {
            // Initialize all cards in a single batch query
            await tx.flashcardProgress.createMany({
              data: uninitializedCards.map((flashcard) => ({
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

            flashcardsCreated = true
            flashcardCount = uninitializedCards.length
            flashcardTopicTitle = fullTopic.title
            totalActiveFlashcards = initializedIds.size + uninitializedCards.length

          } else if (initializedIds.size > 0) {
            // Even if no new cards added, show notification about existing cards
            flashcardsCreated = true
            flashcardCount = 0 // No new cards
            flashcardTopicTitle = fullTopic.title

          }
        }
      }

      return {
        progress,
        flashcardsCreated,
        flashcardCount,
        flashcardTopicTitle,
        totalActiveFlashcards,
        totalFlashcards,
      }
    })

    const { progress, flashcardsCreated, flashcardCount, flashcardTopicTitle, totalActiveFlashcards, totalFlashcards } = txResult

    // Progress changed — drop the user's cached dashboard so their next
    // dashboard load reflects this update immediately rather than after the TTL.
    await invalidateCache(dashboardCacheKey(session.user.id))

    // Mark matching classroom assignments IN_PROGRESS (never COMPLETED — the
    // client-reported masteryLevel is untrusted; completion + score are recorded
    // server-side from the exit-quiz submit). Best-effort.
    if (topicSlug) {
      await recordAssignmentStarted({
        userId: session.user.id,
        topicSlug,
        types: ['INTERACTIVE_LESSON', 'QUIZ'],
      })
    }

    return NextResponse.json({
      success: true,
      progress: {
        status: progress.status,
        masteryLevel: progress.masteryLevel,
      },
      flashcards: flashcardsCreated ? {
        created: true,
        newCards: flashcardCount, // Number of NEW cards just added
        totalActive: totalActiveFlashcards, // Total cards now available
        totalPossible: totalFlashcards, // Total cards in topic
        topicTitle: flashcardTopicTitle
      } : undefined
    })
  } catch (error) {
    console.error('Progress save error:', error)
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    )
  }
}
