-- Chaos Mode for teacher class competitions.
--
-- Both columns are additive with safe defaults, so existing lobbies are
-- untouched: gameMode stays "competitive" and powerUps stays NULL until a
-- teacher actually starts a Chaos match.
--
-- powerUps lives on the PARTICIPANT rather than the lobby so thirty students
-- answering at once each write their own row instead of queueing behind a
-- single row lock on one shared JSON blob.
--
-- Applied manually to production Neon on 2026-09-21 (CI's migrate deploy only
-- ever runs against a throwaway database; see the two-DB workflow).
ALTER TABLE "TeacherLobby"
  ADD COLUMN IF NOT EXISTS "chaosIntensity" TEXT NOT NULL DEFAULT 'gentle';

ALTER TABLE "TeacherLobbyParticipant"
  ADD COLUMN IF NOT EXISTS "powerUps" JSONB;
