import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'
import { progressSaveSchema, parseBody } from '@/lib/validations'

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
    const { topicSlug, topicId, lessonPart, completedSections, masteryLevel, timeSpent, isPartCompletion, variant, failedExitParts } = parsed.data
    
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

    // Upsert topic progress
    const progress = await prisma.topicProgress.upsert({
      where: {
        userId_topicId: {
          userId: session.user.id,
          topicId: topic.id,
        }
      },
      update: {
        masteryLevel: masteryLevel || 0,
        status,
        lastAccessed: new Date(),
        timeSpent: timeSpent || 0,
        completedAt: status === 'COMPLETED' || status === 'MASTERED' ? new Date() : null,
        ...(variant !== undefined && { variant }),
        ...(failedExitParts !== undefined && { failedExitParts }),
      },
      create: {
        userId: session.user.id,
        topicId: topic.id,
        masteryLevel: masteryLevel || 0,
        status,
        timeSpent: timeSpent || 0,
        completedAt: status === 'COMPLETED' || status === 'MASTERED' ? new Date() : null,
        ...(variant !== undefined && { variant }),
        ...(failedExitParts !== undefined && { failedExitParts }),
      }
    })

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
      try {
        
        // Get the full topic with content
        const fullTopic = await prisma.topic.findUnique({
          where: { id: topic.id },
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
            // Create flashcards in a single batch, then initialize progress in a batch
            const createdFlashcards = await prisma.$transaction(
              topFlashcards.map((card) =>
                prisma.flashcard.create({
                  data: {
                    topicId: fullTopic.id,
                    front: card.front,
                    back: card.back,
                    hint: card.hint,
                    isPremium: false,
                  },
                  select: { id: true },
                })
              )
            )

            await prisma.flashcardProgress.createMany({
              data: createdFlashcards.map((fc) => ({
                userId: session.user.id,
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
          const existingProgress = await prisma.flashcardProgress.findMany({
            where: {
              userId: session.user.id,
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
            await prisma.flashcardProgress.createMany({
              data: uninitializedCards.map((flashcard) => ({
                userId: session.user.id,
                flashcardId: flashcard.id,
                easeFactor: 2.5,
                interval: 0,
                repetitions: 0,
                nextReview: new Date(),
                lastReviewed: new Date(),
                reviewCount: 0,
              })),
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
      } catch (error) {
        // Don't fail the whole request if flashcard generation fails
        console.error('Failed to auto-generate flashcards:', error)
      }
    }

    // Store lesson part and completed sections in a separate storage
    // (Could add a JSON field to TopicProgress or use localStorage as cache)
    
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
