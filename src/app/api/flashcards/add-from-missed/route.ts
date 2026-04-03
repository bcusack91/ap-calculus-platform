import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'

/**
 * POST /api/flashcards/add-from-missed
 * Add flashcards to a user's deck when they miss questions on
 * SAT/ACT diagnostic tests, entrance quizzes, or exit quizzes.
 *
 * Body: { topicSlugs: string[] }
 */
export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { topicSlugs } = body

    if (!Array.isArray(topicSlugs) || topicSlugs.length === 0) {
      return NextResponse.json({ error: 'topicSlugs array is required' }, { status: 400 })
    }

    // Cap the number of slugs to prevent abuse
    const slugs = topicSlugs.slice(0, 50).filter(
      (s): s is string => typeof s === 'string' && s.length > 0 && s.length < 200
    )

    let totalAdded = 0

    for (const slug of slugs) {
      // Find the topic
      const topic = await prisma.topic.findUnique({
        where: { slug },
        include: {
          flashcards: true,
          exampleProblems: true,
        },
      })

      if (!topic) continue

      // If no flashcards exist for this topic, auto-generate them
      if (topic.flashcards.length === 0) {
        const candidates = generateFlashcardsFromContent(topic.textContent)

        const problemText = topic.exampleProblems
          .map(p => `${p.question}\n${p.solution}`)
          .join('\n\n')

        if (problemText) {
          const problemCandidates = generateFlashcardsFromContent(problemText)
          candidates.push(...problemCandidates)
        }

        const topFlashcards = getTopFlashcards(candidates, 8)

        if (topFlashcards.length > 0) {
          for (const card of topFlashcards) {
            const flashcard = await prisma.flashcard.create({
              data: {
                topicId: topic.id,
                front: card.front,
                back: card.back,
                hint: card.hint,
                isPremium: false,
              },
            })
            topic.flashcards.push(flashcard as typeof topic.flashcards[number])
          }
        }
      }

      // Create FlashcardProgress entries for each flashcard the user doesn't already have
      for (const flashcard of topic.flashcards) {
        const existing = await prisma.flashcardProgress.findUnique({
          where: {
            userId_flashcardId: {
              userId: session.user.id,
              flashcardId: flashcard.id,
            },
          },
        })

        if (!existing) {
          await prisma.flashcardProgress.create({
            data: {
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
          totalAdded++
        }
      }
    }

    return NextResponse.json({ success: true, flashcardsAdded: totalAdded })
  } catch (error) {
    console.error('Error adding flashcards from missed questions:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
