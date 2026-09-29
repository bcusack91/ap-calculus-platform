-- CreateEnum
CREATE TYPE "FlashcardRating" AS ENUM ('AGAIN', 'HARD', 'GOOD', 'EASY');

-- CreateEnum
CREATE TYPE "ActivitySurface" AS ENUM ('LESSON', 'ENTRANCE_QUIZ', 'EXIT_QUIZ', 'FLASHCARDS', 'DIAGNOSTIC', 'PRACTICE_TEST', 'FULL_LENGTH', 'COMPETITIVE', 'OTHER');

-- CreateEnum
CREATE TYPE "QuestionSource" AS ENUM ('ENTRANCE', 'LESSON', 'EXIT', 'DIAGNOSTIC', 'PRACTICE', 'FULL_LENGTH', 'DAILY', 'COMPETITIVE');

-- CreateTable
CREATE TABLE "FlashcardReviewLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "flashcardId" TEXT NOT NULL,
    "context" TEXT NOT NULL DEFAULT 'personal',
    "classroomId" TEXT NOT NULL DEFAULT '',
    "courseSlug" TEXT NOT NULL DEFAULT '',
    "rating" "FlashcardRating" NOT NULL,
    "durationMs" INTEGER,
    "wasNew" BOOLEAN NOT NULL DEFAULT false,
    "intervalBefore" INTEGER NOT NULL DEFAULT 0,
    "reviewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlashcardReviewLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActiveTimeDaily" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "day" DATE NOT NULL,
    "surface" "ActivitySurface" NOT NULL,
    "courseSlug" TEXT NOT NULL DEFAULT '',
    "classroomId" TEXT NOT NULL DEFAULT '',
    "seconds" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActiveTimeDaily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionActivity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "source" "QuestionSource" NOT NULL,
    "topicSlug" TEXT NOT NULL DEFAULT '',
    "courseSlug" TEXT NOT NULL DEFAULT '',
    "discipline" TEXT NOT NULL DEFAULT '',
    "classroomId" TEXT NOT NULL DEFAULT '',
    "questionKey" TEXT NOT NULL DEFAULT '',
    "answered" INTEGER NOT NULL DEFAULT 1,
    "correct" INTEGER NOT NULL DEFAULT 0,
    "durationMs" INTEGER,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FlashcardReviewLog_userId_reviewedAt_idx" ON "FlashcardReviewLog"("userId", "reviewedAt");

-- CreateIndex
CREATE INDEX "FlashcardReviewLog_classroomId_reviewedAt_idx" ON "FlashcardReviewLog"("classroomId", "reviewedAt");

-- CreateIndex
CREATE INDEX "ActiveTimeDaily_userId_day_idx" ON "ActiveTimeDaily"("userId", "day");

-- CreateIndex
CREATE INDEX "ActiveTimeDaily_classroomId_day_idx" ON "ActiveTimeDaily"("classroomId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveTimeDaily_userId_day_surface_courseSlug_classroomId_key" ON "ActiveTimeDaily"("userId", "day", "surface", "courseSlug", "classroomId");

-- CreateIndex
CREATE INDEX "QuestionActivity_userId_answeredAt_idx" ON "QuestionActivity"("userId", "answeredAt");

-- CreateIndex
CREATE INDEX "QuestionActivity_classroomId_answeredAt_idx" ON "QuestionActivity"("classroomId", "answeredAt");

-- AddForeignKey
ALTER TABLE "FlashcardReviewLog" ADD CONSTRAINT "FlashcardReviewLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveTimeDaily" ADD CONSTRAINT "ActiveTimeDaily_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionActivity" ADD CONSTRAINT "QuestionActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

