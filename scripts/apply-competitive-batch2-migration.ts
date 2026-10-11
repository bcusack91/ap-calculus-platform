/**
 * Idempotent prod migration, competitive batch 2: QuestionActivity.chosenKey
 * (answer-share stats) + a questionKey index, and the QbankSession,
 * UserFlashcard and ExamGoal tables.
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261012000000_competitive_batch2 by hand. Safe to rerun;
 * statements run one at a time (the DO $$ block stays whole). Run it BEFORE
 * deploying code that reads these — QuestionActivity queries select chosenKey.
 *
 *   PROD=1 npx tsx scripts/apply-competitive-batch2-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261012000000_competitive_batch2/migration.sql'), 'utf8')
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const tables = await prisma.$queryRawUnsafe<{ t: string }[]>(
    `SELECT table_name AS t FROM information_schema.tables WHERE table_name IN ('QbankSession','UserFlashcard','ExamGoal')`,
  )
  const [{ n }] = await prisma.$queryRawUnsafe<{ n: number }[]>(
    `SELECT count(*)::int AS n FROM information_schema.columns WHERE table_name = 'QuestionActivity' AND column_name = 'chosenKey'`,
  )
  console.log(`competitive batch 2: ${tables.length}/3 tables, chosenKey ${n === 1 ? 'ready' : 'MISSING'} (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
