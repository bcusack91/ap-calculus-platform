/**
 * Seed the SAT vocabulary deck (src/data/flashcards/sat-vocabulary.ts) as
 * Flashcard rows on the 'sat-vocabulary-context' topic. Idempotent:
 *
 *   - each word's card has a stable id (sat-vocab-<word>); re-running updates
 *     it in place, never duplicates it;
 *   - an older hand-made card on the topic for the same word (e.g. the legacy
 *     "Bolster" card from prisma/add-flashcards-sat-vocab.ts) is UPGRADED in
 *     place instead of duplicated, so students keep its review history;
 *   - other cards on the topic are left alone.
 *
 * The cards unlock like any topic's cards (src/lib/flashcard-unlock.ts): when
 * a student has done the topic's lesson and submitted its exit quiz. Students
 * who unlocked the topic BEFORE this seed only get the new cards on their next
 * unlock event; pass --enroll to re-run the unlock rule now for every student
 * who already has progress on the topic's cards (it re-checks the rule, so it
 * never enrolls anyone who hasn't earned them).
 *
 *   npx tsx scripts/seed-sat-vocabulary.ts                 # local DB (.env.local)
 *   npx tsx scripts/seed-sat-vocabulary.ts --dry-run       # report only
 *   npx tsx scripts/seed-sat-vocabulary.ts --enroll        # + enroll already-unlocked students
 *   PROD=1 npx tsx scripts/seed-sat-vocabulary.ts --dry-run
 *   PROD=1 npx tsx scripts/seed-sat-vocabulary.ts          # production (owner OK first)
 *
 * Refuses to touch a non-localhost database unless PROD=1 is set.
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'
import {
  SAT_VOCABULARY,
  SAT_VOCAB_TOPIC_SLUG,
  satVocabCard,
  satVocabCardId,
  vocabHeadword,
} from '../src/data/flashcards/sat-vocabulary'

const DRY = process.argv.includes('--dry-run')
const ENROLL = process.argv.includes('--enroll')

async function main() {
  const url = process.env.DATABASE_URL ?? ''
  const host = url.replace(/^[^@]*@/, '').replace(/\/.*$/, '')
  if (!process.env.PROD && !/^(localhost|127\.0\.0\.1)(:|$)/.test(host)) {
    throw new Error(`Refusing to run: DATABASE_URL is not local (${host}) and PROD is not set`)
  }
  console.log(`${DRY ? 'DRY RUN' : 'APPLY'} against ${process.env.PROD ? 'PRODUCTION' : 'local'} (${host})\n`)

  const prisma = new PrismaClient()
  try {
    const topic = await prisma.topic.findUnique({ where: { slug: SAT_VOCAB_TOPIC_SLUG }, select: { id: true, title: true } })
    if (!topic) throw new Error(`Topic '${SAT_VOCAB_TOPIC_SLUG}' not found — seed the SAT topics first.`)

    const existing = await prisma.flashcard.findMany({ where: { topicId: topic.id }, select: { id: true, front: true } })
    const byId = new Map(existing.map((c) => [c.id, c]))
    const legacyByWord = new Map<string, string>()
    for (const c of existing) {
      if (c.id.startsWith('sat-vocab-')) continue
      const hw = vocabHeadword(c.front)
      if (hw && !legacyByWord.has(hw)) legacyByWord.set(hw, c.id)
    }

    let created = 0
    let updated = 0
    let adopted = 0
    for (const item of SAT_VOCABULARY) {
      const card = satVocabCard(item)
      const stableId = satVocabCardId(item.word)
      const data = { front: card.front, back: card.back, hint: null }
      if (byId.has(stableId)) {
        updated++
        if (!DRY) await prisma.flashcard.update({ where: { id: stableId }, data })
        continue
      }
      const legacyId = legacyByWord.get(item.word.toLowerCase())
      if (legacyId) {
        adopted++
        if (!DRY) await prisma.flashcard.update({ where: { id: legacyId }, data })
        continue
      }
      created++
      if (!DRY) await prisma.flashcard.create({ data: { id: stableId, topicId: topic.id, ...data } })
    }

    console.log(`Topic: ${topic.title} (${SAT_VOCAB_TOPIC_SLUG})`)
    console.log(`Deck words: ${SAT_VOCABULARY.length}`)
    console.log(`${DRY ? 'Would create' : 'Created'}: ${created}`)
    console.log(`${DRY ? 'Would update' : 'Updated'} (already seeded): ${updated}`)
    console.log(`${DRY ? 'Would upgrade' : 'Upgraded'} legacy cards for the same word: ${adopted}`)
    console.log(`Other cards left untouched: ${existing.length - updated - adopted}`)

    if (ENROLL) {
      const learners = await prisma.flashcardProgress.findMany({
        where: { flashcard: { topicId: topic.id } },
        distinct: ['userId'],
        select: { userId: true },
      })
      console.log(`\nStudents with progress on this topic: ${learners.length}`)
      if (!DRY && learners.length) {
        // Imported here so the shared prisma client is built after dotenv ran.
        // That client reloads .env.local unless NODE_ENV=production (see
        // src/lib/load-env.ts), so a PROD run must say so or enroll would hit
        // the local database.
        if (process.env.PROD) (process.env as Record<string, string>).NODE_ENV = 'production'
        const { maybeUnlockFlashcards } = await import('../src/lib/flashcard-unlock')
        let enrolled = 0
        for (const { userId } of learners) {
          const r = await maybeUnlockFlashcards(userId, SAT_VOCAB_TOPIC_SLUG)
          if (r.unlocked && r.newCards > 0) enrolled++
        }
        console.log(`Students who received new cards: ${enrolled}`)
      }
    }
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
