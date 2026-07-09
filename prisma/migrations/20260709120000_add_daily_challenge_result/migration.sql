-- Server-tracked daily challenge completions (one row per user per day).
CREATE TABLE "DailyChallengeResult"("id" TEXT NOT NULL,"userId" TEXT NOT NULL,"day" DATE NOT NULL,"score" INTEGER NOT NULL,"total" INTEGER NOT NULL,"completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,CONSTRAINT "DailyChallengeResult_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "DailyChallengeResult_userId_day_key" ON "DailyChallengeResult"("userId","day");
ALTER TABLE "DailyChallengeResult" ADD CONSTRAINT "DailyChallengeResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
