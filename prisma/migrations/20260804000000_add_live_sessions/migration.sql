-- Live class sessions (conference + webcast) and their chat messages.
-- Additive only; safe to re-run (IF NOT EXISTS everywhere).

CREATE TABLE IF NOT EXISTS "LiveSession" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'LIVE',
    "roomName" TEXT NOT NULL,
    "streamVideoId" TEXT,
    "mutedUserIds" JSONB,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    CONSTRAINT "LiveSession_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "LiveSessionMessage" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LiveSessionMessage_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "LiveSession_classroomId_status_idx" ON "LiveSession"("classroomId", "status");
CREATE INDEX IF NOT EXISTS "LiveSession_status_idx" ON "LiveSession"("status");
CREATE INDEX IF NOT EXISTS "LiveSessionMessage_sessionId_createdAt_idx" ON "LiveSessionMessage"("sessionId", "createdAt");

DO $$ BEGIN
  ALTER TABLE "LiveSession" ADD CONSTRAINT "LiveSession_classroomId_fkey"
    FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE "LiveSessionMessage" ADD CONSTRAINT "LiveSessionMessage_sessionId_fkey"
    FOREIGN KEY ("sessionId") REFERENCES "LiveSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
