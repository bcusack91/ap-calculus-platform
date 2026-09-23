/**
 * Read-only audit of the exam-yield rollout. Never writes.
 *
 *   PROD=1 npx tsx scripts/audit-flashcard-yield.ts
 *
 * Prints: label distribution per in-scope topic; labeled cards OUTSIDE scope
 * (must be 0); unlabeled cards INSIDE scope (must be 0 once applied); and,
 * for every student with MCAT progress rows, their queue counted both ways —
 * everything vs. served-only — so "due today 312 -> 197" can be seen for real
 * students without touching their data.
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'
import { loadScopedExport } from '../src/lib/flashcard-yield-artifact'
import { servedProgressWhere } from '../src/lib/flashcard-yield'

async function main() {
  const prisma = new PrismaClient()
  const scoped = [...loadScopedExport().keys()]

  const rows = await prisma.$queryRawUnsafe<{ slug: string; y: string | null; n: number }[]>(
    `select t.slug, f."examYield"::text as y, count(*)::int as n
       from "Flashcard" f join "Topic" t on t.id = f."topicId"
      where t.slug = any($1) group by 1, 2 order by 1, 2`,
    scoped,
  )
  const byTopic = new Map<string, Record<string, number>>()
  for (const r of rows) {
    const rec = byTopic.get(r.slug) ?? {}
    rec[r.y ?? 'NULL'] = r.n
    byTopic.set(r.slug, rec)
  }
  let unlabeledInScope = 0
  console.log('per-topic labels (H/M/L/unlabeled):')
  for (const slug of scoped.sort()) {
    const c = byTopic.get(slug) ?? {}
    unlabeledInScope += c.NULL ?? 0
    console.log(`  ${slug.padEnd(50)} ${c.HIGH ?? 0}/${c.MEDIUM ?? 0}/${c.LOW ?? 0}/${c.NULL ?? 0}`)
  }

  const stray = await prisma.flashcard.count({
    where: { examYield: { not: null }, topic: { slug: { notIn: scoped } } },
  })
  console.log(`\nlabeled cards outside scope: ${stray} (must be 0)`)
  console.log(`unlabeled cards inside scope: ${unlabeledInScope} (must be 0 once applied)`)

  // Students who hold MCAT cards: queue size with and without the filter.
  const students = await prisma.flashcardProgress.groupBy({
    by: ['userId', 'context'],
    where: { flashcard: { topic: { category: { course: { slug: 'mcat-prep' } } } } },
    _count: { _all: true },
  })
  console.log(`\nMCAT decks (student x context): ${students.length}`)
  const now = new Date()
  for (const s of students.slice(0, 40)) {
    const base = { userId: s.userId, context: s.context }
    const [dueAll, dueServed, newAll, newServed, learnedLow] = await Promise.all([
      prisma.flashcardProgress.count({ where: { ...base, reviewCount: { gt: 0 }, nextReview: { lte: now } } }),
      prisma.flashcardProgress.count({
        where: { ...base, reviewCount: { gt: 0 }, nextReview: { lte: now }, ...servedProgressWhere(false) },
      }),
      prisma.flashcardProgress.count({ where: { ...base, reviewCount: 0 } }),
      prisma.flashcardProgress.count({ where: { ...base, reviewCount: 0, ...servedProgressWhere(false) } }),
      prisma.flashcardProgress.count({ where: { ...base, reviewCount: { gt: 0 }, flashcard: { examYield: 'LOW' } } }),
    ])
    console.log(
      `  ${s.userId.slice(0, 8)}… ${s.context.padEnd(18)} due ${dueAll} -> ${dueServed}   new ${newAll} -> ${newServed}   already-learned LOW: ${learnedLow}`,
    )
  }
  if (students.length > 40) console.log(`  ... ${students.length - 40} more decks`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
