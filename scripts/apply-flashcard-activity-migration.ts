/**
 * Idempotent prod migration: FlashcardDailyActivity table.
 *   PROD=1 npx tsx scripts/apply-flashcard-activity-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "FlashcardDailyActivity" (
      "id" TEXT NOT NULL,
      "userId" TEXT NOT NULL,
      "day" DATE NOT NULL,
      "reviews" INTEGER NOT NULL DEFAULT 0,
      CONSTRAINT "FlashcardDailyActivity_pkey" PRIMARY KEY ("id")
    )`)
  await prisma.$executeRawUnsafe(`CREATE UNIQUE INDEX IF NOT EXISTS "FlashcardDailyActivity_userId_day_key" ON "FlashcardDailyActivity"("userId", "day")`)
  await prisma.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS "FlashcardDailyActivity_userId_day_idx" ON "FlashcardDailyActivity"("userId", "day")`)
  await prisma.$executeRawUnsafe(`
    DO $$ BEGIN
      ALTER TABLE "FlashcardDailyActivity" ADD CONSTRAINT "FlashcardDailyActivity_userId_fkey"
        FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$`)
  console.log('FlashcardDailyActivity ready')
  await prisma.$disconnect()
}
main()
