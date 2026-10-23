/**
 * Idempotent prod migration: the ApTrackOverride table (a teacher's placement
 * of a student in an AP difficulty track, per course — src/lib/ap-track.ts).
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261020000000_ap_track_override by hand. Safe to rerun.
 * Run it BEFORE deploying code that reads the table — apTrackForUser queries
 * it on every lesson load and exit-quiz submission in the AP track courses.
 *
 *   npx tsx scripts/apply-ap-track-override-migration.ts          # local Docker DB (.env.local)
 *   PROD=1 npx tsx scripts/apply-ap-track-override-migration.ts   # production (.env)
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  // Without PROD=1 this must only ever reach the local Docker database.
  const host = new URL(process.env.DATABASE_URL ?? '').hostname
  if (!process.env.PROD && host !== 'localhost' && host !== '127.0.0.1') {
    throw new Error(`Refusing to run without PROD=1 against a non-local database (${host})`)
  }
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261020000000_ap_track_override/migration.sql'), 'utf8')
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const [{ n }] = await prisma.$queryRawUnsafe<{ n: number }[]>(
    `SELECT count(*)::int AS n FROM information_schema.tables WHERE table_name = 'ApTrackOverride'`,
  )
  const [{ idx }] = await prisma.$queryRawUnsafe<{ idx: number }[]>(
    `SELECT count(*)::int AS idx FROM pg_indexes WHERE tablename = 'ApTrackOverride' AND indexname IN ('ApTrackOverride_userId_courseSlug_key', 'ApTrackOverride_setById_idx')`,
  )
  console.log(`ApTrackOverride table ${n === 1 ? 'ready' : 'MISSING'}, ${idx}/2 indexes (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
