-- Class match pools: a class's own matchmaking space opened from a live class.
CREATE TABLE IF NOT EXISTS "ClassMatchPool" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "liveSessionId" TEXT,
    "teacherId" TEXT NOT NULL,
    "topicSlug" TEXT NOT NULL,
    "matchTopicSlug" TEXT NOT NULL,
    "courseSlug" TEXT,
    "gameMode" "CompetitiveMode" NOT NULL DEFAULT 'SPEED_RACE',
    "ranked" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    CONSTRAINT "ClassMatchPool_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "ClassMatchPool_classroomId_status_idx" ON "ClassMatchPool"("classroomId", "status");

CREATE INDEX IF NOT EXISTS "ClassMatchPool_liveSessionId_idx" ON "ClassMatchPool"("liveSessionId");

-- Queue rows and matches remember the pool that owns them (null = public).
ALTER TABLE "MatchmakingQueue" ADD COLUMN IF NOT EXISTS "poolId" TEXT;

CREATE INDEX IF NOT EXISTS "MatchmakingQueue_poolId_idx" ON "MatchmakingQueue"("poolId");

ALTER TABLE "CompetitiveMatch" ADD COLUMN IF NOT EXISTS "poolId" TEXT;

CREATE INDEX IF NOT EXISTS "CompetitiveMatch_poolId_idx" ON "CompetitiveMatch"("poolId");

DO $$ BEGIN
  ALTER TABLE "ClassMatchPool" ADD CONSTRAINT "ClassMatchPool_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "ClassMatchPool" ADD CONSTRAINT "ClassMatchPool_liveSessionId_fkey" FOREIGN KEY ("liveSessionId") REFERENCES "LiveSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "MatchmakingQueue" ADD CONSTRAINT "MatchmakingQueue_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "ClassMatchPool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "CompetitiveMatch" ADD CONSTRAINT "CompetitiveMatch_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "ClassMatchPool"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
