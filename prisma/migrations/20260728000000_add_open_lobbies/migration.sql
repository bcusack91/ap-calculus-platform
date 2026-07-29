-- Open-lobby matchmaking: publicly discoverable lobbies alongside the MMR queue.
-- All changes are additive (new nullable/defaulted columns + indexes).

ALTER TABLE "CompetitiveLobby" ADD COLUMN IF NOT EXISTS "isPublic" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "CompetitiveLobby" ADD COLUMN IF NOT EXISTS "topicSlug" TEXT;
ALTER TABLE "CompetitiveLobby" ADD COLUMN IF NOT EXISTS "gameMode" TEXT;

ALTER TABLE "TeacherLobby" ADD COLUMN IF NOT EXISTS "studentHosted" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "TeacherLobby" ADD COLUMN IF NOT EXISTS "isPublic" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "TeacherLobby" ADD COLUMN IF NOT EXISTS "maxPlayers" INTEGER;
ALTER TABLE "TeacherLobby" ADD COLUMN IF NOT EXISTS "format" TEXT;

CREATE INDEX IF NOT EXISTS "CompetitiveLobby_isPublic_status_idx" ON "CompetitiveLobby"("isPublic", "status");
CREATE INDEX IF NOT EXISTS "TeacherLobby_isPublic_status_idx" ON "TeacherLobby"("isPublic", "status");

-- Host-chosen question difficulty (easy | medium | hard); null = mixed/default.
ALTER TABLE "CompetitiveLobby" ADD COLUMN IF NOT EXISTS "difficulty" TEXT;
ALTER TABLE "TeacherLobby" ADD COLUMN IF NOT EXISTS "difficulty" TEXT;
