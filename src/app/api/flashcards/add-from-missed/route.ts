import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'
import { resolveUnlockContexts } from '@/lib/study-context'

/**
 * POST /api/flashcards/add-from-missed
 * Manually add a topic's flashcards to the user's active deck.
 *
 * LEGACY (Aug 2026): no first-party flow calls this anymore. Diagnostic pages
 * and the lesson renderer used to push cards from here, but the owner's unlock
 * rule is now lesson-done + exit-quiz-submitted, enforced server-side in
 * src/lib/flashcard-unlock.ts. Do NOT re-wire diagnostics to this route.
 * Kept because it's harmless (auth'd, self-only) and useful for a future
 * explicit "add these cards" button.
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
      // Each card joins the decks ITS OWN course feeds (personal, that
      // course's study mode, an active class deck) — never another course's
      // mode, which mixed SAT cards into the MCAT deck and vice versa. Cards
      // here can span courses, so route them per course.
      const cards = await prisma.flashcard.findMany({
        where: { id: { in: flashcardIds } },
        select: { id: true, topic: { select: { category: { select: { course: { select: { slug: true } } } } } } },
      })
      const idsByCourse = new Map<string | null, string[]>()
      for (const card of cards) {
        const slug = card.topic?.category?.course?.slug ?? null
        idsByCourse.set(slug, [...(idsByCourse.get(slug) ?? []), card.id])
      }
      const contextsByCourse = new Map<string | null, string[]>()
      for (const slug of idsByCourse.keys()) {
        const { contexts } = await resolveUnlockContexts(session.user.id, slug)
        contextsByCourse.set(slug, contexts)
      }

      const existing = await prisma.flashcardProgress.findMany({
        where: {
          userId: session.user.id,
          flashcardId: { in: flashcardIds },
        },
        select: { flashcardId: true, context: true },
      })
      const existingKeys = new Set(existing.map(p => `${p.context}|${p.flashcardId}`))

      const now = new Date()
      const progressToCreate = [...idsByCourse].flatMap(([slug, ids]) =>
        (contextsByCourse.get(slug) ?? []).flatMap(context =>
          ids
            .filter(id => !existingKeys.has(`${context}|${id}`))
            .map(flashcardId => ({
              userId: session.user.id,
              flashcardId,
              context,
              easeFactor: 2.5,
              interval: 0,
              repetitions: 0,
              nextReview: now,
              lastReviewed: now,
              reviewCount: 0,
            })),
        ),
      )

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
