-- MCAT cycle unit test: one row per sitting (see McatUnitTest in schema.prisma).
CREATE TABLE IF NOT EXISTS "McatUnitTest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "diagnosticId" TEXT NOT NULL,
    "topicSlugs" JSONB NOT NULL,
    "questions" JSONB NOT NULL,
    "answers" JSONB,
    "correct" INTEGER,
    "total" INTEGER NOT NULL,
    "percentage" INTEGER,
    "passed" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    CONSTRAINT "McatUnitTest_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "McatUnitTest_userId_diagnosticId_idx" ON "McatUnitTest"("userId", "diagnosticId");

DO $$ BEGIN
    ALTER TABLE "McatUnitTest" ADD CONSTRAINT "McatUnitTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
