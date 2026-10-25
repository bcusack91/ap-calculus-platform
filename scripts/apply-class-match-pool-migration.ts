/**
 * Idempotent migration: class match pools — the ClassMatchPool table plus a
 * nullable poolId on MatchmakingQueue and CompetitiveMatch (each indexed).
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261025000000_class_match_pool by hand. Every statement is
 * IF NOT EXISTS / duplicate-guarded, so it is safe to rerun. Run it BEFORE
 * deploying code that reads these columns: the public queue filters on
 * MatchmakingQueue.poolId, so without the column every queue join fails.
 *
 * DRY RUN by default (prints the target and what is missing; writes nothing):
 *   npx tsx scripts/apply-class-match-pool-migration.ts            # local, dry run
 *   npx tsx scripts/apply-class-match-pool-migration.ts --apply    # local, apply
 *   PROD=1 npx tsx scripts/apply-class-match-pool-migration.ts --apply   # production
 *
 * Guard: without PROD=1 it refuses any database that is not on localhost, and
 * with PROD=1 it refuses anything that is not a Neon host.
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

const APPLY = process.argv.includes('--apply')
const MIGRATION = join(__dirname, '../prisma/migrations/20261025000000_class_match_pool/migration.sql')

async function state(prisma: PrismaClient) {
  const [{ table }] = await prisma.$queryRawUnsafe<{ table: number }[]>(
    `SELECT count(*)::int AS table FROM information_schema.tables WHERE table_name = 'ClassMatchPool'`,
  )
  const cols = await prisma.$queryRawUnsafe<{ t: string }[]>(
    `SELECT table_name AS t FROM information_schema.columns WHERE column_name = 'poolId' AND table_name IN ('MatchmakingQueue', 'CompetitiveMatch')`,
  )
  return { table: table === 1, queuePoolId: cols.some((c) => c.t === 'MatchmakingQueue'), matchPoolId: cols.some((c) => c.t === 'CompetitiveMatch') }
}

async function main() {
  const url = process.env.DIRECT_URL || process.env.DATABASE_URL
  if (!url) throw new Error('No DATABASE_URL / DIRECT_URL')
  const host = new URL(url).hostname
  const local = host === 'localhost' || host === '127.0.0.1'
  if (!process.env.PROD && !local) throw new Error(`Refusing: ${host} is not local (set PROD=1 to target production)`)
  if (process.env.PROD && !host.endsWith('.neon.tech')) throw new Error(`Refusing: PROD=1 but ${host} is not a Neon host`)

  const prisma = new PrismaClient({ datasources: { db: { url } } })
  try {
    const statements = readFileSync(MIGRATION, 'utf8')
      .split(/\n\s*\n/)
      .map((s) => s.replace(/^--.*$/gm, '').trim())
      .filter(Boolean)
    console.log(`Target: ${host} (${process.env.PROD ? 'PROD' : 'local'}) — ${APPLY ? 'APPLY' : 'dry run'}`)
    console.log('Before:', await state(prisma))
    if (!APPLY) {
      console.log(`${statements.length} idempotent statements would run. Re-run with --apply to execute.`)
      return
    }
    for (const stmt of statements) await prisma.$executeRawUnsafe(stmt)
    const after = await state(prisma)
    console.log('After: ', after)
    if (!after.table || !after.queuePoolId || !after.matchPoolId) process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
