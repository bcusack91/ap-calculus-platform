/**
 * Idempotent prod migration: the answer log (QuestionActivity chosen option,
 * attempt, flag), exit-quiz generation inputs, SAT routing columns and the
 * UNIT_TEST / MISTAKE_REVIEW question sources.
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261011000000_answer_log by hand. Safe to rerun. Each
 * statement runs on its own: ALTER TYPE … ADD VALUE can't run inside a
 * transaction. Run it BEFORE deploying code that reads these columns —
 * QuestionActivity, ExitQuizAttempt and SatTestAttempt queries select them.
 *
 *   PROD=1 npx tsx scripts/apply-answer-log-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261011000000_answer_log/migration.sql'), 'utf8')
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const cols = await prisma.$queryRawUnsafe<{ table_name: string; column_name: string }[]>(
    `SELECT table_name, column_name FROM information_schema.columns
     WHERE (table_name = 'QuestionActivity' AND column_name IN ('attemptKind','attemptId','itemIndex','chosenIndex','chosenText','flagged'))
        OR (table_name = 'ExitQuizAttempt' AND column_name IN ('seed','difficulty','includeLowYield'))
        OR (table_name = 'SatTestAttempt' AND column_name IN ('format','rwTier','mathTier','scoringVersion'))`,
  )
  const enumVals = await prisma.$queryRawUnsafe<{ v: string }[]>(
    `SELECT e.enumlabel AS v FROM pg_enum e JOIN pg_type t ON t.oid = e.enumtypid WHERE t.typname = 'QuestionSource'`,
  )
  const hasEnums = ['UNIT_TEST', 'MISTAKE_REVIEW'].every((x) => enumVals.some((e) => e.v === x))
  console.log(`answer log: ${cols.length}/13 columns, enum values ${hasEnums ? 'ready' : 'MISSING'} (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
