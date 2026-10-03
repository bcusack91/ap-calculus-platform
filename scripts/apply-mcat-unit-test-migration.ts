/**
 * Idempotent prod migration: the McatUnitTest table (the MCAT cycle's
 * customized unit test that unlocks the next diagnostic).
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261003000000_mcat_unit_test by hand. Safe to rerun.
 * Run it BEFORE deploying code that reads the table — plan-status queries it
 * on every MCAT dashboard load.
 *
 *   PROD=1 npx tsx scripts/apply-mcat-unit-test-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261003000000_mcat_unit_test/migration.sql'), 'utf8')
  // Statements are separated by blank lines; the DO $$ block contains `;`
  // so it must not be split on semicolons.
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const [{ rows }] = await prisma.$queryRawUnsafe<{ rows: number }[]>(`SELECT count(*)::int AS rows FROM "McatUnitTest"`)
  console.log(`McatUnitTest ready (${process.env.PROD ? 'PROD' : 'local'}); rows: ${rows}`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
