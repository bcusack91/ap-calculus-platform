-- Answer log (Oct 2026): every answer with the option chosen, so attempts can
-- be reviewed and missed questions re-served. All additive.

ALTER TYPE "QuestionSource" ADD VALUE IF NOT EXISTS 'UNIT_TEST';

ALTER TYPE "QuestionSource" ADD VALUE IF NOT EXISTS 'MISTAKE_REVIEW';

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "attemptKind" TEXT;

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "attemptId" TEXT;

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "itemIndex" INTEGER;

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "chosenIndex" INTEGER;

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "chosenText" TEXT;

ALTER TABLE "QuestionActivity" ADD COLUMN IF NOT EXISTS "flagged" BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS "QuestionActivity_userId_courseSlug_answeredAt_idx" ON "QuestionActivity"("userId", "courseSlug", "answeredAt");

CREATE INDEX IF NOT EXISTS "QuestionActivity_attemptId_idx" ON "QuestionActivity"("attemptId");

ALTER TABLE "ExitQuizAttempt" ADD COLUMN IF NOT EXISTS "seed" INTEGER;

ALTER TABLE "ExitQuizAttempt" ADD COLUMN IF NOT EXISTS "difficulty" TEXT;

ALTER TABLE "ExitQuizAttempt" ADD COLUMN IF NOT EXISTS "includeLowYield" BOOLEAN;

ALTER TABLE "SatTestAttempt" ADD COLUMN IF NOT EXISTS "format" TEXT;

ALTER TABLE "SatTestAttempt" ADD COLUMN IF NOT EXISTS "rwTier" TEXT;

ALTER TABLE "SatTestAttempt" ADD COLUMN IF NOT EXISTS "mathTier" TEXT;

ALTER TABLE "SatTestAttempt" ADD COLUMN IF NOT EXISTS "scoringVersion" INTEGER NOT NULL DEFAULT 1;
