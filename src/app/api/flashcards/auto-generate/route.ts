import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'

/**
 * POST /api/flashcards/auto-generate
 * Auto-generate flashcards for a topic after completing practice/quiz
 */
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { topicId, triggerType } = body // triggerType: 'quiz' | 'practice' | 'manual'

    if (!topicId) {
      return NextResponse.json(
        { error: 'Topic ID is required' },
        { status: 400 }
      )
    }

    // Get the topic with its content
    const topic = await prisma.topic.findUnique({
      where: { id: topicId },
      include: {
        flashcards: true,
        exampleProblems: true,
      }
    })

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      )
    }

    // Check if flashcards already exist for this topic
    if (topic.flashcards.length > 0) {
      // Initialize progress for existing flashcards
      for (const flashcard of topic.flashcards) {
        await prisma.flashcardProgress.upsert({
          where: {
            userId_flashcardId: {
              userId: session.user.id,
              flashcardId: flashcard.id
            }
          },
          create: {
            userId: session.user.id,
            flashcardId: flashcard.id,
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: new Date(),
            lastReviewed: new Date(),
            reviewCount: 0
          },
          update: {} // Don't overwrite if already exists
        })
      }

      return NextResponse.json({
        message: 'Flashcards already exist for this topic',
        flashcards: topic.flashcards,
        newlyCreated: false
      })
    }

    // Generate flashcards from topic content
    const candidates = generateFlashcardsFromContent(topic.textContent)
    
    // Also analyze example problems for additional concepts
    const problemText = topic.exampleProblems
      .map(p => `${p.question}\n${p.solution}`)
      .join('\n\n')
    
    if (problemText) {
      const problemCandidates = generateFlashcardsFromContent(problemText)
      candidates.push(...problemCandidates)
    }

    // Get top flashcards
    const topFlashcards = getTopFlashcards(candidates, 8)

    // Create flashcards in database
    const createdFlashcards = await Promise.all(
      topFlashcards.map(async (card) => {
        const flashcard = await prisma.flashcard.create({
          data: {
            topicId: topic.id,
            front: card.front,
            back: card.back,
            hint: card.hint,
            isPremium: false
          }
        })

        // Initialize progress for the user
        await prisma.flashcardProgress.create({
          data: {
            userId: session.user.id,
            flashcardId: flashcard.id,
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: new Date(),
            lastReviewed: new Date(),
            reviewCount: 0
          }
        })

        return flashcard
      })
    )

    return NextResponse.json({
      message: `Successfully created ${createdFlashcards.length} flashcards`,
      flashcards: createdFlashcards,
      newlyCreated: true,
      topicTitle: topic.title
    })

  } catch (error) {
    console.error('Error auto-generating flashcards:', error)
    return NextResponse.json(
      { error: 'Failed to generate flashcards' },
      { status: 500 }
    )
  }
}
