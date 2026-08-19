/**
 * Restore flashcards from prisma/flashcard-exports/ JSON (written by
 * scripts/export-flashcards.ts). Idempotent: a card is inserted only when its
 * topic has no card with the same front (trimmed, case-insensitive) — safe to
 * re-run, never overwrites or deletes. Also reports drift: live cards absent
 * from the export (i.e. the export is stale).
 *   PROD=1 [DRY_RUN=1] npx tsx scripts/restore-flashcards.ts prisma/flashcard-exports/mcat-prep
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import fs from 'fs'
import { globSync } from 'glob'
import { PrismaClient } from '@prisma/client'
import type { ExportedCard } from './export-flashcards'

const DRY = !!process.env.DRY_RUN

async function main() {
  const prisma = new PrismaClient()
  const dir = process.argv[2]
  if (!dir) { console.error('usage: npx tsx scripts/restore-flashcards.ts <export-dir>'); process.exit(1) }
  const files = globSync(`${dir}/*.json`).sort()
  if (!files.length) { console.error(`no .json files in ${dir}`); process.exit(1) }
  console.log('files:', files.map(f => f.split('/').pop()).join(', '))

  const byTopic = new Map<string, ExportedCard[]>()
  for (const file of files) {
    const cards: ExportedCard[] = JSON.parse(fs.readFileSync(file, 'utf8'))
    for (const c of cards) byTopic.set(c.topicSlug, [...(byTopic.get(c.topicSlug) ?? []), c])
  }

  let inserted = 0, present = 0, driftLive = 0
  const unknownTopics: string[] = []
  for (const [slug, cards] of [...byTopic.entries()].sort()) {
    const topic = await prisma.topic.findUnique({
      where: { slug },
      select: { id: true, flashcards: { select: { front: true } } },
    })
    if (!topic) { unknownTopics.push(slug); continue }
    const liveFronts = new Set(topic.flashcards.map(f => f.front.trim().toLowerCase()))
    const exportFronts = new Set(cards.map(c => c.front.trim().toLowerCase()))
    const missing = cards.filter(c => !liveFronts.has(c.front.trim().toLowerCase()))
    const extra = topic.flashcards.filter(f => !exportFronts.has(f.front.trim().toLowerCase()))
    if (extra.length) { driftLive += extra.length; console.log(`DRIFT ${slug}: ${extra.length} live card(s) not in export — re-run export-flashcards.ts`) }
    present += cards.length - missing.length
    if (missing.length) {
      console.log(`${DRY ? '[DRY] ' : ''}${slug}: inserting ${missing.length}/${cards.length}`)
      if (!DRY) {
        await prisma.flashcard.createMany({
          data: missing.map(c => ({
            topicId: topic.id,
            front: c.front,
            back: c.back,
            hint: c.hint ?? null,
            lessonPart: c.lessonPart ?? null,
            isPremium: c.isPremium ?? false,
          })),
        })
      }
      inserted += missing.length
    }
  }

  if (unknownTopics.length) console.log(`UNKNOWN TOPICS (seed topics first): ${unknownTopics.join(', ')}`)
  console.log(`\n${DRY ? '[DRY RUN] ' : ''}inserted: ${inserted}, already present: ${present}, topics: ${byTopic.size}, live-not-in-export: ${driftLive}`)
  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
