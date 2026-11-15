/**
 * Store every section lesson's review decks as Flashcard rows (see
 * review-cards.ts) without touching the lessons themselves.
 *
 *   npx tsx scripts/video-lessons/sync-review-cards.ts                     # dry run, local
 *   APPLY=1 npx tsx scripts/video-lessons/sync-review-cards.ts             # local writes
 *   SEED_DB=prod APPLY=1 npx tsx scripts/video-lessons/sync-review-cards.ts
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'
import { LESSON as CIRC1 } from './circuits1-lesson'
import { LESSON as CIRC2 } from './circuits2-lesson'
import { syncReviewCards } from './review-cards'

const LESSONS = [CIRC1, CIRC2]

async function main() {
  const IS_PROD = process.env.SEED_DB === 'prod'
  const APPLY = process.env.APPLY === '1'
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:  ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host, '| mode:', APPLY ? 'APPLY' : 'dry run')
  if (APPLY && IS_PROD !== isNeon) throw new Error(`Refusing to write: SEED_DB=${process.env.SEED_DB ?? ''} but host is ${host}`)
  const prisma = new PrismaClient()
  for (const l of LESSONS) {
    await syncReviewCards(prisma, { topicSlug: l.topicSlug, lessonKey: l.key, videos: l.videos.map((v) => v.video), apply: APPLY })
  }
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
