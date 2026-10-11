-- Competitive batch 2 (Oct 2026): answer-share stats, question bank sessions,
-- student flashcards, exam goals. All additive.

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "chosenKey" TEXT;

CREATE INDEX IF NOT EXISTS "QuestionActivity_questionKey_idx" ON "QuestionActivity"("questionKey");

CREATE TABLE IF NOT EXISTS "QbankSession" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "course" TEXT NOT NULL,
  "mode" TEXT NOT NULL,
  "filters" JSONB NOT NULL,
  "items" JSONB NOT NULL,
  "answers" JSONB,
  "flags" JSONB,
  "timings" JSONB,
  "timeLimitSec" INTEGER,
  "correct" INTEGER,
  "total" INTEGER NOT NULL,
  "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" TIMESTAMP(3),
  CONSTRAINT "QbankSession_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "QbankSession_userId_course_startedAt_idx" ON "QbankSession"("userId", "course", "startedAt");

CREATE TABLE IF NOT EXISTS "UserFlashcard" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "courseSlug" TEXT NOT NULL DEFAULT '',
  "topicSlug" TEXT NOT NULL DEFAULT '',
  "front" TEXT NOT NULL,
  "back" TEXT NOT NULL,
  "hint" TEXT,
  "origin" TEXT NOT NULL DEFAULT 'manual',
  "easeFactor" DOUBLE PRECISION NOT NULL DEFAULT 2.5,
  "interval" INTEGER NOT NULL DEFAULT 0,
  "isMinuteInterval" BOOLEAN NOT NULL DEFAULT false,
  "repetitions" INTEGER NOT NULL DEFAULT 0,
  "nextReview" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "lastReviewed" TIMESTAMP(3),
  "reviewCount" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "UserFlashcard_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "UserFlashcard_userId_nextReview_idx" ON "UserFlashcard"("userId", "nextReview");

CREATE INDEX IF NOT EXISTS "UserFlashcard_userId_courseSlug_idx" ON "UserFlashcard"("userId", "courseSlug");

CREATE TABLE IF NOT EXISTS "ExamGoal" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "course" TEXT NOT NULL,
  "targetScore" INTEGER NOT NULL,
  "colleges" JSONB,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ExamGoal_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "ExamGoal_userId_course_key" ON "ExamGoal"("userId", "course");

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'QbankSession_userId_fkey') THEN
    ALTER TABLE "QbankSession" ADD CONSTRAINT "QbankSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'UserFlashcard_userId_fkey') THEN
    ALTER TABLE "UserFlashcard" ADD CONSTRAINT "UserFlashcard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'ExamGoal_userId_fkey') THEN
    ALTER TABLE "ExamGoal" ADD CONSTRAINT "ExamGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
