import { prisma } from '@/lib/prisma'
import { getActiveStudyContext } from '@/lib/study-context'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'

export interface FlashcardUnlockResult {
  unlocked: boolean
  newCards: number
  totalActive: number
  totalCards: number
  topicTitle: string
}

const LOCKED: FlashcardUnlockResult = {
  unlocked: false,
  newCards: 0,
  totalActive: 0,
  totalCards: 0,
  topicTitle: '',
}

/**
 * THE flashcard unlock rule (owner decision, Aug 2026): a topic's cards join a
 * student's active deck once they have BOTH
 *   (a) done the lesson — completed the self-paced interactive lesson
 *       (TopicProgress COMPLETED/MASTERED), OR attended a live class session
 *       where this topic's slide deck was presented — and
 *   (b) submitted the topic's exit quiz (any score: students who failed need
 *       the cards most; a pass sets TopicProgress MASTERED anyway, so a cold
 *       pass also satisfies (a) — demonstrated mastery counts as the lesson).
 *
 * Nothing else unlocks cards: not diagnostic results, not partial lesson
 * progress. Call after exit-quiz submits and lesson-completion progress saves —
 * whichever half completes the pair fires the unlock. Idempotent; cards land in
 * the ACTIVE study context (class deck for class students).
 */
export async function maybeUnlockFlashcards(
  userId: string,
  topicSlug: string,
): Promise<FlashcardUnlockResult> {
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: {
      id: true,
      title: true,
      textContent: true,
      flashcards: { select: { id: true } },
      exampleProblems: { select: { question: true, solution: true } },
    },
  })
  if (!topic) return LOCKED

  // (b) exit quiz submitted?
  const quizAttempt = await prisma.exitQuizAttempt.findFirst({
    where: { userId, topicSlug },
    select: { id: true },
  })
  if (!quizAttempt) return LOCKED

  // (a) lesson done — self-paced completion, or in-class deck attendance.
  const progress = await prisma.topicProgress.findUnique({
    where: { userId_topicId: { userId, topicId: topic.id } },
    select: { status: true },
  })
  let lessonDone = progress?.status === 'COMPLETED' || progress?.status === 'MASTERED'
  if (!lessonDone) {
    const presented = await prisma.slideDeck.findFirst({
      where: { topicSlug, session: { attendance: { some: { userId } } } },
      select: { id: true },
    })
    lessonDone = presented !== null
  }
  if (!lessonDone) return LOCKED

  // Ensure the topic has cards (legacy topics without authored cards get
  // auto-generated ones, same generation the old paths used).
  let cardIds = topic.flashcards.map((f) => f.id)
  if (cardIds.length === 0) {
    const candidates = generateFlashcardsFromContent(topic.textContent)
    const problemText = topic.exampleProblems
      .map((p) => `${p.question}\n${p.solution}`)
      .join('\n\n')
    if (problemText) candidates.push(...generateFlashcardsFromContent(problemText))
    const top = getTopFlashcards(candidates, 8)
    if (top.length > 0) {
      await prisma.flashcard.createMany({
        data: top.map((card) => ({
          topicId: topic.id,
          front: card.front,
          back: card.back,
          hint: card.hint,
          isPremium: false,
        })),
      })
      const created = await prisma.flashcard.findMany({
        where: { topicId: topic.id },
        select: { id: true },
      })
      cardIds = created.map((f) => f.id)
    }
  }
  if (cardIds.length === 0) return LOCKED

  const context = await getActiveStudyContext(userId)
  const now = new Date()
  const created = await prisma.flashcardProgress.createMany({
    data: cardIds.map((flashcardId) => ({
      userId,
      flashcardId,
      context,
      easeFactor: 2.5,
      interval: 0,
      repetitions: 0,
      nextReview: now,
      lastReviewed: now,
      reviewCount: 0,
    })),
    skipDuplicates: true,
  })
  const totalActive = await prisma.flashcardProgress.count({
    where: { userId, context, flashcard: { topicId: topic.id } },
  })

  return {
    unlocked: true,
    newCards: created.count,
    totalActive,
    totalCards: cardIds.length,
    topicTitle: topic.title,
  }
}
