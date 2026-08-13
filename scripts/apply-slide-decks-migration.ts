/**
 * Applies the slide-decks migration.
 *   Local:  npx tsx scripts/apply-slide-decks-migration.ts
 *   Prod:   PROD=1 npx tsx scripts/apply-slide-decks-migration.ts
 * (Prisma Client auto-loads .env = PROD in this repo, so the local path must
 * override with .env.local — see apply-live-sessions-migration.ts.)
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const url = process.env.DATABASE_URL ?? ''
  console.log(`Applying to: ${url.replace(/:[^@/]+@/, ':***@').slice(0, 80)}`)
  const sql = readFileSync('prisma/migrations/20260813000000_add_slide_decks/migration.sql', 'utf8')
  const cleaned = sql.split('\n').filter(l => !l.trim().startsWith('--')).join('\n')
  const statements = cleaned.split(/;\s*(?=ALTER|CREATE|DO|$)/).map(s => s.trim()).filter(Boolean)
  for (const st of statements) {
    await prisma.$executeRawUnsafe(st)
    console.log(`  ✓ ${st.slice(0, 60).replace(/\s+/g, ' ')}…`)
  }
  const tables = await prisma.$queryRawUnsafe<{ table_name: string }[]>(
    `SELECT table_name FROM information_schema.tables WHERE table_name IN ('SlideDeck','SlideResponse')`)
  console.log(`Tables: ${tables.map(t => t.table_name).join(', ')}`)
}
main().finally(() => prisma.$disconnect())
