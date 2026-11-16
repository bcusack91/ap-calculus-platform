-- Daily card check: the multiple-choice check on the flashcards reviewed that day.
ALTER TYPE "QuestionSource" ADD VALUE IF NOT EXISTS 'CARD_CHECK';

ALTER TABLE "Classroom" ADD COLUMN IF NOT EXISTS "cardCheckAfterReviews" INTEGER;

CREATE TABLE IF NOT EXISTS "FlashcardCheckAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "windowStart" TIMESTAMP(3) NOT NULL,
    "items" JSONB NOT NULL,
    "total" INTEGER NOT NULL,
    "correct" INTEGER,
    "overconfident" INTEGER,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    CONSTRAINT "FlashcardCheckAttempt_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "FlashcardCheckAttempt_userId_completedAt_idx" ON "FlashcardCheckAttempt"("userId", "completedAt");

CREATE INDEX IF NOT EXISTS "FlashcardCheckAttempt_userId_startedAt_idx" ON "FlashcardCheckAttempt"("userId", "startedAt");

DO $$ BEGIN
  ALTER TABLE "FlashcardCheckAttempt" ADD CONSTRAINT "FlashcardCheckAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
