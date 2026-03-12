-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN "lessonPart" INTEGER;

-- Add index for better query performance
CREATE INDEX "Flashcard_topicId_lessonPart_idx" ON "Flashcard"("topicId", "lessonPart");
