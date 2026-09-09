-- AlterTable
ALTER TABLE "User" ADD COLUMN     "flashcardMaxReviewsPerDay" INTEGER,
ADD COLUMN     "flashcardNewPerDay" INTEGER;

-- AlterTable
ALTER TABLE "FlashcardDailyActivity" ADD COLUMN     "newCards" INTEGER NOT NULL DEFAULT 0;

