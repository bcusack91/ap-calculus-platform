/**
 * Idempotent prod migration: the ClassRecording table (lesson recordings a
 * teacher posts to a class as YouTube links).
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261013000000_class_recordings by hand. Safe to rerun.
 * Run it BEFORE deploying code that reads the table.
 *
 *   PROD=1 npx tsx scripts/apply-class-recordings-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261013000000_class_recordings/migration.sql'), 'utf8')
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const [{ n }] = await prisma.$queryRawUnsafe<{ n: number }[]>(
    `SELECT count(*)::int AS n FROM information_schema.tables WHERE table_name = 'ClassRecording'`,
  )
  console.log(`ClassRecording table ${n === 1 ? 'ready' : 'MISSING'} (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
