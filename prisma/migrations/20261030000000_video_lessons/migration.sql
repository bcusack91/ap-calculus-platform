-- Video lessons: instructors, clips, lessons, steps, student progress and
-- instructor choice; VIDEO surface and VIDEO_CHECK question source.
-- Idempotent (IF NOT EXISTS / duplicate_object guards) so the prod apply
-- script can rerun safely. Each blank-line-separated statement runs alone:
-- ALTER TYPE ... ADD VALUE cannot run inside a transaction.

-- AlterEnum
ALTER TYPE "ActivitySurface" ADD VALUE IF NOT EXISTS 'VIDEO';

-- AlterEnum
ALTER TYPE "QuestionSource" ADD VALUE IF NOT EXISTS 'VIDEO_CHECK';

-- AlterTable
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "preferredLessonFormat" TEXT NOT NULL DEFAULT 'TEXT';

-- CreateTable
CREATE TABLE IF NOT EXISTS "Instructor" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "headline" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "photoUrl" TEXT,
    "userId" TEXT,
    "courses" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "VideoClip" (
    "id" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'YOUTUBE',
    "providerId" TEXT NOT NULL,
    "durationSec" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "VideoClip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "VideoLesson" (
    "id" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    "topicSlug" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "version" INTEGER NOT NULL DEFAULT 0,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "draft" JSONB,
    "draftState" TEXT,
    "submittedAt" TIMESTAMP(3),
    "reviewNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "VideoLesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "VideoLessonStep" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "clipId" TEXT NOT NULL,
    "yield" "ExamYield",
    "questions" JSONB NOT NULL DEFAULT '[]',
    CONSTRAINT "VideoLessonStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "VideoLessonProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "lessonVersion" INTEGER NOT NULL DEFAULT 0,
    "steps" JSONB NOT NULL DEFAULT '{}',
    "lastClipId" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "VideoLessonProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "UserInstructorChoice" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "UserInstructorChoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Instructor_slug_key" ON "Instructor"("slug");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Instructor_userId_key" ON "Instructor"("userId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "VideoClip_instructorId_status_idx" ON "VideoClip"("instructorId", "status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "VideoLesson_topicSlug_published_idx" ON "VideoLesson"("topicSlug", "published");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "VideoLesson_draftState_idx" ON "VideoLesson"("draftState");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "VideoLesson_instructorId_topicSlug_key" ON "VideoLesson"("instructorId", "topicSlug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "VideoLessonStep_clipId_idx" ON "VideoLessonStep"("clipId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "VideoLessonStep_lessonId_order_key" ON "VideoLessonStep"("lessonId", "order");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "VideoLessonProgress_lessonId_idx" ON "VideoLessonProgress"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "VideoLessonProgress_userId_lessonId_key" ON "VideoLessonProgress"("userId", "lessonId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "UserInstructorChoice_userId_courseSlug_key" ON "UserInstructorChoice"("userId", "courseSlug");

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "VideoClip" ADD CONSTRAINT "VideoClip_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "VideoLesson" ADD CONSTRAINT "VideoLesson_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "VideoLessonStep" ADD CONSTRAINT "VideoLessonStep_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "VideoLesson"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "VideoLessonStep" ADD CONSTRAINT "VideoLessonStep_clipId_fkey" FOREIGN KEY ("clipId") REFERENCES "VideoClip"("id") ON DELETE RESTRICT ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "VideoLessonProgress" ADD CONSTRAINT "VideoLessonProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "VideoLessonProgress" ADD CONSTRAINT "VideoLessonProgress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "VideoLesson"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "UserInstructorChoice" ADD CONSTRAINT "UserInstructorChoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AddForeignKey
DO $$ BEGIN ALTER TABLE "UserInstructorChoice" ADD CONSTRAINT "UserInstructorChoice_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
