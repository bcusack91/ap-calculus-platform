-- Additive only: server-side persistence for competitive cosmetics
-- (ownership + equipped + XP spend ledger), previously localStorage-only.
-- Safe to apply to prod at any time; code degrades gracefully until applied.
ALTER TABLE "CompetitiveProfile" ADD COLUMN     "cosmetics" JSONB;
