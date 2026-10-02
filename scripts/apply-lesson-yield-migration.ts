/**
 * Idempotent prod migration: User.lessonIncludeLowYield, the per-student
 * "Include low-yield details" setting for interactive lessons.
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261002000000_lesson_low_yield by hand. Safe to rerun.
 * Run it BEFORE deploying code that selects the column.
 *
 *   PROD=1 npx tsx scripts/apply-lesson-yield-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.$executeRawUnsafe(
    `ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "lessonIncludeLowYield" BOOLEAN NOT NULL DEFAULT false`,
  )
  const [{ optedIn }] = await prisma.$queryRawUnsafe<{ optedIn: number }[]>(
    `SELECT count(*)::int AS "optedIn" FROM "User" WHERE "lessonIncludeLowYield" = true`,
  )
  console.log(`lessonIncludeLowYield ready (${process.env.PROD ? 'PROD' : 'local'}); students opted in: ${optedIn}`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
