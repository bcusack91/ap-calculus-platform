/**
 * Idempotent prod migration: Flashcard.examYield (four tiers) + the two
 * User yield preferences.
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20260923000000_flashcard_exam_yield by hand. Safe to rerun.
 *
 *   PROD=1 npx tsx scripts/apply-flashcard-yield-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.$executeRawUnsafe(`
    DO $$ BEGIN
      CREATE TYPE "ExamYield" AS ENUM ('HIGH', 'MEDIUM', 'LOW');
    EXCEPTION WHEN duplicate_object THEN NULL; END $$`)
  // Four-tier pass (2026-09-24): ULTRA_HIGH ahead of HIGH so enum order stays
  // the sort order; ADD VALUE cannot run inside a transaction, and $executeRawUnsafe
  // sends it as its own statement.
  await prisma.$executeRawUnsafe(`ALTER TYPE "ExamYield" ADD VALUE IF NOT EXISTS 'ULTRA_HIGH' BEFORE 'HIGH'`)
  await prisma.$executeRawUnsafe(`ALTER TABLE "Flashcard" ADD COLUMN IF NOT EXISTS "examYield" "ExamYield"`)
  await prisma.$executeRawUnsafe(
    `ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "flashcardIncludeMediumYield" BOOLEAN NOT NULL DEFAULT true`,
  )
  await prisma.$executeRawUnsafe(
    `ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "flashcardIncludeLowYield" BOOLEAN NOT NULL DEFAULT false`,
  )
  await prisma.$executeRawUnsafe(
    `CREATE INDEX IF NOT EXISTS "Flashcard_topicId_examYield_idx" ON "Flashcard"("topicId", "examYield")`,
  )
  const [{ labeled }] = await prisma.$queryRawUnsafe<{ labeled: number }[]>(
    `SELECT count(*)::int AS labeled FROM "Flashcard" WHERE "examYield" IS NOT NULL`,
  )
  console.log(`examYield ready (${process.env.PROD ? 'PROD' : 'local'}); cards already labeled: ${labeled}`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
