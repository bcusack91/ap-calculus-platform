-- CreateEnum
CREATE TYPE "ExamYield" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN "examYield" "ExamYield";
ALTER TABLE "User" ADD COLUMN "flashcardIncludeLowYield" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Flashcard_topicId_examYield_idx" ON "Flashcard"("topicId", "examYield");
