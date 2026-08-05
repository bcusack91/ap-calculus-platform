-- Whiteboards for live class sessions. Additive; safe to re-run.

ALTER TABLE "LiveSession" ADD COLUMN IF NOT EXISTS "boardMode" TEXT NOT NULL DEFAULT 'OFF';
ALTER TABLE "LiveSession" ADD COLUMN IF NOT EXISTS "padsEnabled" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS "LiveBoard" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "ownerKey" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "scene" JSONB NOT NULL,
    "rev" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "LiveBoard_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "LiveBoard_sessionId_ownerKey_key" ON "LiveBoard"("sessionId", "ownerKey");
CREATE INDEX IF NOT EXISTS "LiveBoard_sessionId_updatedAt_idx" ON "LiveBoard"("sessionId", "updatedAt");

DO $$ BEGIN
  ALTER TABLE "LiveBoard" ADD CONSTRAINT "LiveBoard_sessionId_fkey"
    FOREIGN KEY ("sessionId") REFERENCES "LiveSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
