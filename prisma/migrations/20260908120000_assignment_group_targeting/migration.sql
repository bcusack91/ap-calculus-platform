-- AlterTable
ALTER TABLE "Assignment" ADD COLUMN     "groupId" TEXT;

-- CreateIndex
CREATE INDEX "Assignment_groupId_idx" ON "Assignment"("groupId");

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "ClassroomGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

