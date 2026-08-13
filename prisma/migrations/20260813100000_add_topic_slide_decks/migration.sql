-- Pre-generated per-topic slide decks. Additive; re-runnable.
CREATE TABLE IF NOT EXISTS "TopicSlideDeck" (
    "id" TEXT NOT NULL,
    "topicSlug" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slides" JSONB NOT NULL,
    "slideCount" INTEGER NOT NULL,
    "pollCount" INTEGER NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TopicSlideDeck_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "TopicSlideDeck_topicSlug_key" ON "TopicSlideDeck"("topicSlug");
CREATE INDEX IF NOT EXISTS "TopicSlideDeck_courseSlug_idx" ON "TopicSlideDeck"("courseSlug");
