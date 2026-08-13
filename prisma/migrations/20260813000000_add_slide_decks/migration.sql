-- In-class slide presentations. Additive; re-runnable.

CREATE TABLE IF NOT EXISTS "SlideDeck" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "topicSlug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slides" JSONB NOT NULL,
    "currentSlide" INTEGER NOT NULL DEFAULT 0,
    "revealed" JSONB,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SlideDeck_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "SlideDeck_sessionId_status_idx" ON "SlideDeck"("sessionId", "status");

CREATE TABLE IF NOT EXISTS "SlideResponse" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "slideIndex" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "answerIndex" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SlideResponse_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "SlideResponse_deckId_slideIndex_userId_key" ON "SlideResponse"("deckId", "slideIndex", "userId");
CREATE INDEX IF NOT EXISTS "SlideResponse_deckId_slideIndex_idx" ON "SlideResponse"("deckId", "slideIndex");

DO $$ BEGIN
  ALTER TABLE "SlideDeck" ADD CONSTRAINT "SlideDeck_sessionId_fkey"
    FOREIGN KEY ("sessionId") REFERENCES "LiveSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN
  ALTER TABLE "SlideResponse" ADD CONSTRAINT "SlideResponse_deckId_fkey"
    FOREIGN KEY ("deckId") REFERENCES "SlideDeck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
