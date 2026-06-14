-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_categoryId_fkey";

-- AlterTable
ALTER TABLE "CompetitiveProfile" DROP COLUMN "derivativesMMR",
DROP COLUMN "integralsMMR",
DROP COLUMN "limitsMMR",
DROP COLUMN "unitCircleMMR";

-- AlterTable
ALTER TABLE "TopicProgress" ADD COLUMN     "masteredParts" JSONB;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "birthYear" INTEGER;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

