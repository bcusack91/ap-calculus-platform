/**
 * Export a course's live flashcard deck to committed JSON seeds — the source
 * of truth for cards that were imported (import-card-seeds.ts) from
 * agent-authored files that never landed in git. One file per category under
 * prisma/flashcard-exports/<course>/, deterministically sorted (topic slug,
 * then front) so re-exports diff cleanly. Restore with
 * scripts/restore-flashcards.ts.
 *   PROD=1 [COURSE=mcat-prep] npx tsx scripts/export-flashcards.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

export type ExportedCard = {
  topicSlug: string
  front: string
  back: string
  hint?: string
  lessonPart?: number
  isPremium?: boolean
}

async function main() {
  const prisma = new PrismaClient()
  const courseSlug = process.env.COURSE ?? 'mcat-prep'
  const course = await prisma.course.findUnique({
    where: { slug: courseSlug },
    select: {
      categories: {
        orderBy: { order: 'asc' },
        select: {
          slug: true,
          topics: {
            select: {
              slug: true,
              flashcards: { select: { front: true, back: true, hint: true, lessonPart: true, isPremium: true } },
            },
          },
        },
      },
    },
  })
  if (!course) { console.error(`course not found: ${courseSlug}`); process.exit(1) }

  const outDir = path.join(__dirname, '..', 'prisma', 'flashcard-exports', courseSlug)
  fs.mkdirSync(outDir, { recursive: true })

  let total = 0, cloze = 0
  for (const category of course.categories) {
    const cards: ExportedCard[] = []
    for (const topic of category.topics) {
      for (const f of topic.flashcards) {
        cards.push({
          topicSlug: topic.slug,
          front: f.front,
          back: f.back,
          ...(f.hint ? { hint: f.hint } : {}),
          ...(f.lessonPart != null ? { lessonPart: f.lessonPart } : {}),
          ...(f.isPremium ? { isPremium: true } : {}),
        })
        if (f.front.includes('{{') || f.back.includes('{{')) cloze++
      }
    }
    cards.sort((a, b) => a.topicSlug.localeCompare(b.topicSlug) || a.front.localeCompare(b.front) || a.back.localeCompare(b.back))
    const file = path.join(outDir, `${category.slug}.json`)
    fs.writeFileSync(file, JSON.stringify(cards, null, 1) + '\n')
    total += cards.length
    console.log(`${cards.length}\t${category.slug}.json (${category.topics.length} topics)`)
  }
  console.log(`\nexported ${total} cards (${cloze} cloze) → ${path.relative(process.cwd(), outDir)}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
