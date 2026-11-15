-- Video lesson review cards: which lesson video a card belongs to ("<lesson key>:<video>").
ALTER TABLE "Flashcard" ADD COLUMN IF NOT EXISTS "videoDeck" TEXT;
CREATE INDEX IF NOT EXISTS "Flashcard_topicId_videoDeck_idx" ON "Flashcard"("topicId", "videoDeck");
