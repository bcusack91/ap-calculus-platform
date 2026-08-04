/**
 * Applies the live-sessions migration.
 *
 *   Local:  npx tsx scripts/apply-live-sessions-migration.ts
 *   Prod:   PROD=1 npx tsx scripts/apply-live-sessions-migration.ts
 *
 * CAUTION: without an explicit override, Prisma Client auto-loads .env — which
 * is the PROD Neon URL in this repo. So local runs must load .env.local with
 * override:true; PROD=1 loads .env the same way. The SQL is fully idempotent
 * (IF NOT EXISTS / duplicate_object guards).
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const url = process.env.DATABASE_URL ?? ''
  console.log(`Applying to: ${url.replace(/:[^@/]+@/, ':***@').slice(0, 80)}`)
  const sql = readFileSync('prisma/migrations/20260804000000_add_live_sessions/migration.sql', 'utf8')
  // Strip comment LINES first (chunk-level filtering would drop statements that
  // merely START with a comment), then split. DO $$ blocks contain no ';' other
  // than statement ends here because each inner statement is single.
  const cleaned = sql.split('\n').filter(l => !l.trim().startsWith('--')).join('\n')
  const statements = cleaned.split(/;\s*(?=CREATE|DO|$)/).map(s => s.trim()).filter(Boolean)
  for (const st of statements) {
    await prisma.$executeRawUnsafe(st.endsWith('$$') ? st : st)
    console.log(`  ✓ ${st.slice(0, 60).replace(/\s+/g, ' ')}…`)
  }
  const t = await prisma.$queryRawUnsafe<{ table_name: string }[]>(
    `SELECT table_name FROM information_schema.tables WHERE table_name IN ('LiveSession','LiveSessionMessage')`)
  console.log(`Tables present: ${t.map(r => r.table_name).join(', ')}`)
}
main().finally(() => prisma.$disconnect())
