-- AlterEnum
ALTER TYPE "ExamYield" ADD VALUE 'ULTRA_HIGH' BEFORE 'HIGH';

-- AlterTable
ALTER TABLE "User" ADD COLUMN "flashcardIncludeMediumYield" BOOLEAN NOT NULL DEFAULT true;
