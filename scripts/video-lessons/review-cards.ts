/**
 * Store a video lesson's review decks (src/data/video-lesson-flashcards) as
 * Flashcard rows on the lesson's topic, tagged `videoDeck = "<key>:<video>"`,
 * so a student's spaced-repetition deck can take them a module at a time
 * (src/lib/video-lesson-cards.ts).
 *
 * Idempotent. A card is matched by its deck and front: a changed back is
 * updated in place; a card no longer in its deck is deleted when no student
 * has it, and otherwise left alone (reported) so nobody's review history is
 * lost. Called by sync-lesson.ts for every live video, and runnable on its own:
 *
 *   npx tsx scripts/video-lessons/sync-review-cards.ts                     # dry run, local
 *   SEED_DB=prod APPLY=1 npx tsx scripts/video-lessons/sync-review-cards.ts
 */
import type { PrismaClient } from '@prisma/client'
import { reviewCardsFor } from '../../src/data/video-lesson-flashcards'
import { videoDeckKey } from '../../src/lib/video-lesson-core'

export async function syncReviewCards(
  prisma: PrismaClient,
  opts: { topicSlug: string; lessonKey: string; videos: number[]; apply: boolean },
): Promise<{ created: number; updated: number; deleted: number; kept: number }> {
  const topic = await prisma.topic.findUnique({ where: { slug: opts.topicSlug }, select: { id: true } })
  if (!topic) throw new Error(`topic ${opts.topicSlug} is not in this database`)
  const tally = { created: 0, updated: 0, deleted: 0, kept: 0 }
  for (const video of opts.videos) {
    const deck = reviewCardsFor(opts.lessonKey, video) ?? []
    const key = videoDeckKey(opts.lessonKey, video)
    const rows = await prisma.flashcard.findMany({
      where: { topicId: topic.id, videoDeck: key },
      select: { id: true, front: true, back: true, _count: { select: { progress: true } } },
      orderBy: { createdAt: 'asc' },
    })
    const byFront = new Map(rows.map((r) => [r.front, r]))
    const fronts = new Set(deck.map((c) => c.front))
    for (const card of deck) {
      const row = byFront.get(card.front)
      if (!row) {
        tally.created++
        if (opts.apply) await prisma.flashcard.create({ data: { topicId: topic.id, front: card.front, back: card.back, videoDeck: key, isPremium: false } })
      } else if (row.back !== card.back) {
        tally.updated++
        if (opts.apply) await prisma.flashcard.update({ where: { id: row.id }, data: { back: card.back } })
      }
    }
    for (const row of rows) {
      if (fronts.has(row.front)) continue
      if (row._count.progress === 0) {
        tally.deleted++
        if (opts.apply) await prisma.flashcard.delete({ where: { id: row.id } })
      } else {
        tally.kept++
        console.log(`  ${key}: card no longer in the deck but in ${row._count.progress} student deck(s), left in place: ${row.front.slice(0, 80)}`)
      }
    }
  }
  console.log(`Review cards ${opts.lessonKey} (videos ${opts.videos.join(', ')}): ${tally.created} to create, ${tally.updated} to update, ${tally.deleted} to delete, ${tally.kept} retired but kept${opts.apply ? '' : ' (dry run)'}`)
  return tally
}
