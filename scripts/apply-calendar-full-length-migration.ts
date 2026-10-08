/**
 * Idempotent prod migration: the study calendar's scheduler columns on
 * StudyTask (autoDueDate, sourceKey) and the ExternalExamScore table (AAMC /
 * College Board scores entered by hand).
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261008000000_calendar_full_length by hand. Safe to rerun.
 * Run it BEFORE deploying code that reads these — every StudyTask query
 * selects the new columns.
 *
 *   PROD=1 npx tsx scripts/apply-calendar-full-length-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261008000000_calendar_full_length/migration.sql'), 'utf8')
  // Statements are separated by blank lines; the DO $$ block contains `;`
  // so it must not be split on semicolons.
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const [{ cols }] = await prisma.$queryRawUnsafe<{ cols: number }[]>(
    `SELECT count(*)::int AS cols FROM information_schema.columns WHERE table_name = 'StudyTask' AND column_name IN ('autoDueDate', 'sourceKey')`,
  )
  const [{ rows }] = await prisma.$queryRawUnsafe<{ rows: number }[]>(`SELECT count(*)::int AS rows FROM "ExternalExamScore"`)
  console.log(`StudyTask columns ${cols === 2 ? 'ready' : 'MISSING'}; ExternalExamScore ready, rows: ${rows} (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
