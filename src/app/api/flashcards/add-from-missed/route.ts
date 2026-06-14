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

    // Fetch all requested topics (with their flashcards + example problems) in
    // a single query instead of one round-trip per slug.
    const topics = await prisma.topic.findMany({
      where: { slug: { in: slugs } },
      include: {
        flashcards: true,
        exampleProblems: true,
      },
    })

    // For topics that have no flashcards yet, auto-generate candidates and
    // batch-create them all in one query.
    const newFlashcards: {
      topicId: string
      front: string
      back: string
      hint?: string
      isPremium: boolean
    }[] = []
    const generatedTopicIds = new Set<string>()

    for (const topic of topics) {
      if (topic.flashcards.length > 0) continue

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
        generatedTopicIds.add(topic.id)
        for (const card of topFlashcards) {
          newFlashcards.push({
            topicId: topic.id,
            front: card.front,
            back: card.back,
            hint: card.hint,
            isPremium: false,
          })
        }
      }
    }

    if (newFlashcards.length > 0) {
      await prisma.flashcard.createMany({ data: newFlashcards })
    }

    // Collect every flashcard id we need to ensure progress for. Start from the
    // flashcards already loaded with each topic, then fetch the ids of any
    // freshly generated flashcards (createMany doesn't return rows).
    const flashcardIds: string[] = []
    for (const topic of topics) {
      for (const flashcard of topic.flashcards) {
        flashcardIds.push(flashcard.id)
      }
    }

    if (generatedTopicIds.size > 0) {
      const created = await prisma.flashcard.findMany({
        where: { topicId: { in: Array.from(generatedTopicIds) } },
        select: { id: true },
      })
      for (const flashcard of created) {
        flashcardIds.push(flashcard.id)
      }
    }

    let totalAdded = 0

    if (flashcardIds.length > 0) {
      // Fetch all existing progress rows for this user/flashcard set in one
      // query, then batch-create only the missing ones.
      const existing = await prisma.flashcardProgress.findMany({
        where: {
          userId: session.user.id,
          flashcardId: { in: flashcardIds },
        },
        select: { flashcardId: true },
      })
      const existingIds = new Set(existing.map(p => p.flashcardId))

      const now = new Date()
      const progressToCreate = flashcardIds
        .filter(id => !existingIds.has(id))
        .map(flashcardId => ({
          userId: session.user.id,
          flashcardId,
          easeFactor: 2.5,
          interval: 0,
          repetitions: 0,
          nextReview: now,
          lastReviewed: now,
          reviewCount: 0,
        }))

      if (progressToCreate.length > 0) {
        const result = await prisma.flashcardProgress.createMany({
          data: progressToCreate,
          skipDuplicates: true,
        })
        totalAdded = result.count
      }
    }

    return NextResponse.json({ success: true, flashcardsAdded: totalAdded })
  } catch (error) {
    console.error('Error adding flashcards from missed questions:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
