/**
 * Seed flashcards into topics that have none.
 *
 * SAFETY: only inserts into topics whose flashcard count is currently ZERO, so
 * re-running never duplicates and never touches hand-authored content. Verify
 * first with scripts/verify-seed-flashcards.ts.
 *
 * Usage:
 *   npx tsx scripts/seed-flashcards.ts                   # dry run, local
 *   SEED_DB=prod npx tsx scripts/seed-flashcards.ts      # dry run, prod
 *   SEED_DB=prod APPLY=1 npx tsx scripts/seed-flashcards.ts
 */
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(process.cwd(), process.env.SEED_DB === 'prod' ? '.env' : '.env.local'), override: true })

import { PrismaClient } from '@prisma/client'
import { SEED_FLASHCARDS } from '../src/data/flashcards'

const prisma = new PrismaClient()
const APPLY = process.env.APPLY === '1'

async function main() {
  const label = process.env.SEED_DB === 'prod' ? 'PROD' : 'LOCAL'
  console.log(`[${label}] ${APPLY ? 'APPLYING' : 'DRY RUN'}\n`)

  const slugs = Object.keys(SEED_FLASHCARDS)
  const topics = await prisma.topic.findMany({
    where: { slug: { in: slugs } },
    select: { id: true, slug: true, _count: { select: { flashcards: true } } },
  })
  const bySlug = new Map(topics.map((t) => [t.slug, t]))

  let inserted = 0
  let skippedNonEmpty = 0
  let missing = 0

  for (const [slug, cards] of Object.entries(SEED_FLASHCARDS)) {
    const topic = bySlug.get(slug)
    if (!topic) { missing++; console.log(`  (missing topic) ${slug}`); continue }
    if (topic._count.flashcards > 0) {
      skippedNonEmpty++
      console.log(`  (already has ${topic._count.flashcards}) ${slug}`)
      continue
    }
    if (APPLY) {
      await prisma.flashcard.createMany({
        data: cards.map((c) => ({
          topicId: topic.id,
          front: c.front,
          back: c.back,
          ...(c.hint ? { hint: c.hint } : {}),
        })),
      })
    }
    inserted += cards.length
  }

  console.log(`\n${APPLY ? 'Inserted' : 'Would insert'}: ${inserted} cards`)
  console.log(`Skipped (already had cards): ${skippedNonEmpty}`)
  console.log(`Missing topics: ${missing}`)

  if (APPLY) {
    const remaining = await prisma.topic.count({ where: { flashcards: { none: {} } } })
    console.log(`Topics still without flashcards: ${remaining}`)
  }
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
