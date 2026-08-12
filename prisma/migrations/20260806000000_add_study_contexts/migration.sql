-- Per-context flashcard decks (study modes). Additive; existing rows land in
-- the 'personal' context, preserving every user's current deck untouched.

ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "studyContext" TEXT NOT NULL DEFAULT 'personal';
ALTER TABLE "FlashcardProgress" ADD COLUMN IF NOT EXISTS "context" TEXT NOT NULL DEFAULT 'personal';

-- Uniqueness now includes the context (same card, independent deck per mode).
DROP INDEX IF EXISTS "FlashcardProgress_userId_flashcardId_key";
CREATE UNIQUE INDEX IF NOT EXISTS "FlashcardProgress_userId_flashcardId_context_key"
  ON "FlashcardProgress"("userId", "flashcardId", "context");
CREATE INDEX IF NOT EXISTS "FlashcardProgress_userId_context_nextReview_idx"
  ON "FlashcardProgress"("userId", "context", "nextReview");
