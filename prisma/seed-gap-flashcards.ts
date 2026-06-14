/**
 * Seeds the flashcard decks authored into prisma/_gap-cards/batch-*.ts (one
 * export `batchCards` each) for previously zero-card topics. Idempotent: for
 * each topic it removes any existing cards whose fronts match this batch, then
 * inserts. Skips slugs not present in the DB (logged). Run with:
 *   ALLOW_PROD=1 npx tsx prisma/seed-gap-flashcards.ts
 */
import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

interface Card { front: string; back: string; hint?: string }
interface Entry { slug: string; cards: Card[] }

async function main() {
  const dir = path.join(__dirname, '_gap-cards')
  if (!fs.existsSync(dir)) { console.error('no _gap-cards dir'); return }
  const files = fs.readdirSync(dir).filter((f) => f.startsWith('batch-') && f.endsWith('.ts')).sort()
  console.log(`Reading ${files.length} batch files…`)

  let topicsDone = 0
  let cardsAdded = 0
  const notFound: string[] = []
  const badFiles: string[] = []

  for (const f of files) {
    let mod: { batchCards?: Entry[] }
    try {
      mod = await import(path.join(dir, f))
    } catch (e) {
      badFiles.push(`${f}: ${String((e as Error).message).slice(0, 80)}`)
      continue
    }
    const batch = mod.batchCards
    if (!Array.isArray(batch)) { badFiles.push(`${f}: no batchCards export`); continue }
    for (const entry of batch) {
      if (!entry?.slug || !Array.isArray(entry.cards) || entry.cards.length === 0) continue
      const topic = await prisma.topic.findFirst({ where: { slug: entry.slug }, select: { id: true } })
      if (!topic) { notFound.push(entry.slug); continue }
      const fronts = entry.cards.map((c) => c.front)
      await prisma.flashcard.deleteMany({ where: { topicId: topic.id, front: { in: fronts } } })
      await prisma.flashcard.createMany({
        data: entry.cards.map((c) => ({ topicId: topic.id, front: c.front, back: c.back, hint: c.hint ?? null })),
      })
      topicsDone++
      cardsAdded += entry.cards.length
    }
  }

  console.log(`\n✅ Seeded ${cardsAdded} cards across ${topicsDone} topics.`)
  if (notFound.length) console.log(`⚠️  ${notFound.length} slugs not found: ${notFound.slice(0, 25).join(', ')}${notFound.length > 25 ? '…' : ''}`)
  if (badFiles.length) console.log(`⚠️  ${badFiles.length} unreadable batch files:\n  ${badFiles.join('\n  ')}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
