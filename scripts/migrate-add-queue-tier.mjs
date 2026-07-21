/**
 * One-off idempotent prod DDL: add MatchmakingQueue.tier (nullable text).
 * Uses the project's Prisma client (DATABASE_URL from .env). Safe to re-run.
 *   node scripts/migrate-add-queue-tier.mjs
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
try {
  const before = await prisma.$queryRawUnsafe(
    `SELECT column_name FROM information_schema.columns WHERE table_name='MatchmakingQueue' AND column_name='tier'`
  )
  console.log('tier column present before:', before.length > 0)
  await prisma.$executeRawUnsafe(`ALTER TABLE "MatchmakingQueue" ADD COLUMN IF NOT EXISTS "tier" TEXT`)
  const after = await prisma.$queryRawUnsafe(
    `SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name='MatchmakingQueue' AND column_name='tier'`
  )
  console.log('tier column present after:', after.length > 0, JSON.stringify(after[0] ?? {}))
} finally {
  await prisma.$disconnect()
}
