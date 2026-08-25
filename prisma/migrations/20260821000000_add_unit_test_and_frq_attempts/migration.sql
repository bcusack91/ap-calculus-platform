-- Persist unit-test and free-response practice so teachers can see the work.
-- Both were previously ungraded and unstored: a student could complete every
-- unit test in a course, or write a dozen FRQs, and leave no trace at all.

CREATE TABLE IF NOT EXISTS "UnitTestAttempt" (
  "id"          TEXT NOT NULL,
  "userId"      TEXT NOT NULL,
  "courseSlug"  TEXT NOT NULL,
  "unitId"      TEXT NOT NULL,
  "unitTitle"   TEXT NOT NULL,
  "variant"     INTEGER NOT NULL DEFAULT 1,
  "correct"     INTEGER NOT NULL,
  "total"       INTEGER NOT NULL,
  "percentage"  INTEGER NOT NULL,
  "timeSpent"   INTEGER NOT NULL DEFAULT 0,
  "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "UnitTestAttempt_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "FrqAttempt" (
  "id"             TEXT NOT NULL,
  "userId"         TEXT NOT NULL,
  "courseSlug"     TEXT NOT NULL,
  "mode"           TEXT NOT NULL,
  "pointsEarned"   INTEGER NOT NULL,
  "pointsPossible" INTEGER NOT NULL,
  "frqCount"       INTEGER NOT NULL,
  "timeSpent"      INTEGER NOT NULL DEFAULT 0,
  "completedAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "FrqAttempt_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "UnitTestAttempt_userId_idx" ON "UnitTestAttempt"("userId");
CREATE INDEX IF NOT EXISTS "UnitTestAttempt_userId_courseSlug_idx" ON "UnitTestAttempt"("userId", "courseSlug");
CREATE INDEX IF NOT EXISTS "UnitTestAttempt_completedAt_idx" ON "UnitTestAttempt"("completedAt");
CREATE INDEX IF NOT EXISTS "FrqAttempt_userId_idx" ON "FrqAttempt"("userId");
CREATE INDEX IF NOT EXISTS "FrqAttempt_userId_courseSlug_idx" ON "FrqAttempt"("userId", "courseSlug");
CREATE INDEX IF NOT EXISTS "FrqAttempt_completedAt_idx" ON "FrqAttempt"("completedAt");

ALTER TABLE "UnitTestAttempt" DROP CONSTRAINT IF EXISTS "UnitTestAttempt_userId_fkey";
ALTER TABLE "UnitTestAttempt" ADD CONSTRAINT "UnitTestAttempt_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "FrqAttempt" DROP CONSTRAINT IF EXISTS "FrqAttempt_userId_fkey";
ALTER TABLE "FrqAttempt" ADD CONSTRAINT "FrqAttempt_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
