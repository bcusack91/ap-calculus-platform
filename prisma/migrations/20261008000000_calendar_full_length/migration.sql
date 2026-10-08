-- Study calendar + full-length readiness (Oct 2026). All additive.

ALTER TABLE "StudyTask" ADD COLUMN IF NOT EXISTS "autoDueDate" TIMESTAMP(3);

ALTER TABLE "StudyTask" ADD COLUMN IF NOT EXISTS "sourceKey" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS "StudyTask_planId_sourceKey_key" ON "StudyTask"("planId", "sourceKey");

CREATE TABLE IF NOT EXISTS "ExternalExamScore" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "course" TEXT NOT NULL,
  "source" TEXT NOT NULL,
  "totalScore" INTEGER NOT NULL,
  "sectionScores" JSONB,
  "takenAt" TIMESTAMP(3) NOT NULL,
  "note" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ExternalExamScore_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "ExternalExamScore_userId_course_takenAt_idx" ON "ExternalExamScore"("userId", "course", "takenAt");

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'ExternalExamScore_userId_fkey') THEN
    ALTER TABLE "ExternalExamScore" ADD CONSTRAINT "ExternalExamScore_userId_fkey"
      FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
