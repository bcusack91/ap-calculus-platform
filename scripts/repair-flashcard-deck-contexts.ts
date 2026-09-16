import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

/**
 * Repair decks that hold another course's cards.
 *
 * Until the routing fix, unlocks wrote into whatever study mode was ACTIVE, so
 * SAT work done while "MCAT Prep" was selected filed SAT cards into the MCAT
 * deck (and vice versa). This moves each stray row to a deck where it belongs,
 * preferring to keep its review history:
 *   1. its own course deck, when the student has that deck and lacks the card
 *   2. else personal, when personal lacks the card
 *   3. else delete the stray row (a proper deck already holds that card)
 * Then it backfills personal — the "everything" deck — with every card the
 * student has earned in any deck.
 *
 *   npx tsx scripts/repair-flashcard-deck-contexts.ts [email]            # dry run
 *   NODE_ENV=production PROD=1 npx tsx scripts/repair-flashcard-deck-contexts.ts [email] --apply
 */
const prisma = new PrismaClient()
const APPLY = process.argv.includes('--apply')
const DAY_MS = 24 * 60 * 60 * 1000

async function main() {
  const email = process.argv.slice(2).find((a) => !a.startsWith('--'))
  const users = await prisma.user.findMany({
    // Anyone with a non-personal deck: course modes can hold strays, and class
    // decks hold cards personal ("everything") may be missing.
    where: email ? { email } : { flashcardProgress: { some: { NOT: { context: 'personal' } } } },
    select: { id: true, email: true, studyContext: true, flashcardNewPerDay: true },
  })
  console.log(`${APPLY ? 'APPLY' : 'DRY RUN'} — ${users.length} user(s)\n`)

  let totalMoved = 0, totalDeleted = 0, totalPersonal = 0
  for (const user of users) {
    const rows = await prisma.flashcardProgress.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        context: true,
        flashcardId: true,
        reviewCount: true,
        flashcard: { select: { topic: { select: { category: { select: { course: { select: { slug: true } } } } } } } },
      },
    })
    if (rows.length === 0) continue

    const decks = new Set(rows.map((r) => r.context))
    if (user.studyContext) decks.add(user.studyContext)
    // (deck, flashcardId) pairs that exist, updated as we move rows.
    const held = new Set(rows.map((r) => `${r.context}|${r.flashcardId}`))

    const moves: { id: string; to: string; reviewed: boolean }[] = []
    const deletes: string[] = []
    for (const row of rows) {
      const deckCourse = row.context.startsWith('course:') ? row.context.slice('course:'.length) : null
      if (!deckCourse) continue
      const cardCourse = row.flashcard.topic?.category?.course?.slug ?? null
      if (cardCourse === deckCourse) continue // correctly filed

      const ownDeck = cardCourse ? `course:${cardCourse}` : null
      if (ownDeck && decks.has(ownDeck) && !held.has(`${ownDeck}|${row.flashcardId}`)) {
        moves.push({ id: row.id, to: ownDeck, reviewed: row.reviewCount > 0 })
        held.delete(`${row.context}|${row.flashcardId}`)
        held.add(`${ownDeck}|${row.flashcardId}`)
      } else if (!held.has(`personal|${row.flashcardId}`)) {
        moves.push({ id: row.id, to: 'personal', reviewed: row.reviewCount > 0 })
        held.delete(`${row.context}|${row.flashcardId}`)
        held.add(`personal|${row.flashcardId}`)
      } else {
        deletes.push(row.id)
        held.delete(`${row.context}|${row.flashcardId}`)
      }
    }

    // Personal = everything the student has earned anywhere.
    const missingFromPersonal = [...new Set(
      rows.map((r) => r.flashcardId).filter((id) => !held.has(`personal|${id}`)),
    )]

    if (moves.length === 0 && deletes.length === 0 && missingFromPersonal.length === 0) continue
    const movedReviewed = moves.filter((m) => m.reviewed).length
    console.log(`  ${user.email}`)
    console.log(`    move ${moves.length} stray row(s) (${movedReviewed} with review history), delete ${deletes.length}, add ${missingFromPersonal.length} to personal`)

    if (APPLY) {
      for (const move of moves) {
        await prisma.flashcardProgress.update({ where: { id: move.id }, data: { context: move.to } })
      }
      if (deletes.length > 0) {
        await prisma.flashcardProgress.deleteMany({ where: { id: { in: deletes } } })
      }
      if (missingFromPersonal.length > 0) {
        // Stagger like an unlock does, so a big backfill doesn't all come due at once.
        const newPerDay = Math.max(1, user.flashcardNewPerDay ?? 100)
        const now = new Date()
        await prisma.flashcardProgress.createMany({
          data: missingFromPersonal.map((flashcardId, i) => ({
            userId: user.id,
            flashcardId,
            context: 'personal',
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: new Date(now.getTime() + Math.floor(i / newPerDay) * DAY_MS),
            lastReviewed: now,
            reviewCount: 0,
          })),
          skipDuplicates: true,
        })
      }
    }
    totalMoved += moves.length; totalDeleted += deletes.length; totalPersonal += missingFromPersonal.length
  }

  console.log(`\n${APPLY ? 'applied' : 'would apply'}: ${totalMoved} moved, ${totalDeleted} deleted, ${totalPersonal} added to personal`)
}

main().finally(() => prisma.$disconnect())
