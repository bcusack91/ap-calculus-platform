-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN "flashcardSetId" TEXT;

-- CreateIndex
CREATE INDEX "Assignment_flashcardSetId_idx" ON "Assignment"("flashcardSetId");

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_flashcardSetId_fkey" FOREIGN KEY ("flashcardSetId") REFERENCES "FlashcardSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
