/*
  Warnings:

  - Added the required column `courseId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "icon" TEXT,
    "color" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");

-- Insert AP Calculus course
INSERT INTO "Course" ("id", "slug", "name", "description", "order", "icon", "color", "createdAt", "updatedAt")
VALUES (
  'ap-calculus-ab-bc',
  'ap-calculus-ab-bc',
  'AP Calculus AB/BC',
  'Comprehensive coverage of AP Calculus AB and BC topics including limits, derivatives, integrals, series, and more.',
  1,
  '∫',
  'purple',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- AlterTable - Add courseId column as nullable first
ALTER TABLE "Category" ADD COLUMN "courseId" TEXT;

-- Update all existing categories to reference AP Calculus course
UPDATE "Category" SET "courseId" = 'ap-calculus-ab-bc';

-- Now make courseId required
ALTER TABLE "Category" ALTER COLUMN "courseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

