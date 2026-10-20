-- Teacher override of a student's AP difficulty track, per course (src/lib/ap-track.ts).
CREATE TABLE IF NOT EXISTS "ApTrackOverride" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "track" TEXT NOT NULL,
    "setById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ApTrackOverride_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "ApTrackOverride_userId_courseSlug_key" ON "ApTrackOverride"("userId", "courseSlug");

CREATE INDEX IF NOT EXISTS "ApTrackOverride_setById_idx" ON "ApTrackOverride"("setById");

DO $$ BEGIN
  ALTER TABLE "ApTrackOverride" ADD CONSTRAINT "ApTrackOverride_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "ApTrackOverride" ADD CONSTRAINT "ApTrackOverride_setById_fkey" FOREIGN KEY ("setById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
