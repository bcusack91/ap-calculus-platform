/**
 * Applies the study-contexts migration.
 *   Local:  npx tsx scripts/apply-study-contexts-migration.ts
 *   Prod:   PROD=1 npx tsx scripts/apply-study-contexts-migration.ts
 * (Prisma auto-loads .env = PROD here, so local must override with .env.local.)
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const url = process.env.DATABASE_URL ?? ''
  console.log(`Applying to: ${url.replace(/:[^@/]+@/, ':***@').slice(0, 80)}`)
  const sql = readFileSync('prisma/migrations/20260806000000_add_study_contexts/migration.sql', 'utf8')
  const cleaned = sql.split('\n').filter(l => !l.trim().startsWith('--')).join('\n')
  for (const st of cleaned.split(';').map(s => s.trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(st)
    console.log(`  ✓ ${st.slice(0, 70).replace(/\s+/g, ' ')}…`)
  }
  const idx = await prisma.$queryRawUnsafe<{ indexname: string }[]>(
    `SELECT indexname FROM pg_indexes WHERE tablename = 'FlashcardProgress'`)
  console.log(`Indexes: ${idx.map(i => i.indexname).join(', ')}`)
  const n = await prisma.$queryRawUnsafe<{ n: bigint }[]>(
    `SELECT count(*) AS n FROM "FlashcardProgress" WHERE "context" <> 'personal'`)
  console.log(`Non-personal rows (expect 0 fresh after migration): ${n[0].n}`)
}
main().finally(() => prisma.$disconnect())
