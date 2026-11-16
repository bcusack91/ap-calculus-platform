/**
 * Idempotent prod migration: the daily card check (FlashcardCheckAttempt,
 * Classroom.cardCheckAfterReviews, the CARD_CHECK question source).
 *
 * Deploys do NOT migrate the production database, so this applies
 * prisma/migrations/20261116000000_flashcard_card_check by hand. Safe to
 * rerun. Each statement runs on its own (ALTER TYPE … ADD VALUE can't run in a
 * transaction). Run it BEFORE deploying: every Classroom query selects
 * cardCheckAfterReviews once the client is regenerated.
 *
 *   PROD=1 npx tsx scripts/apply-card-check-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261116000000_flashcard_card_check/migration.sql'), 'utf8')
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const t = await prisma.$queryRawUnsafe<{ n: bigint }[]>(`SELECT count(*) AS n FROM information_schema.tables WHERE table_name = 'FlashcardCheckAttempt'`)
  const c = await prisma.$queryRawUnsafe<{ n: bigint }[]>(`SELECT count(*) AS n FROM information_schema.columns WHERE table_name = 'Classroom' AND column_name = 'cardCheckAfterReviews'`)
  const e = await prisma.$queryRawUnsafe<{ n: bigint }[]>(`SELECT count(*) AS n FROM pg_enum e JOIN pg_type t ON t.oid = e.enumtypid WHERE t.typname = 'QuestionSource' AND e.enumlabel = 'CARD_CHECK'`)
  const ok = (r: { n: bigint }[]) => (Number(r[0]?.n ?? 0) ? 'ready' : 'MISSING')
  console.log(`card check: table ${ok(t)}, Classroom.cardCheckAfterReviews ${ok(c)}, CARD_CHECK ${ok(e)} (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
