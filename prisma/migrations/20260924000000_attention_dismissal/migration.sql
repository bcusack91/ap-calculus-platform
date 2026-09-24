-- CreateTable
CREATE TABLE "AttentionDismissal" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "dismissedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AttentionDismissal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttentionDismissal_teacherId_studentId_reason_key" ON "AttentionDismissal"("teacherId", "studentId", "reason");
CREATE INDEX "AttentionDismissal_teacherId_idx" ON "AttentionDismissal"("teacherId");

-- AddForeignKey
ALTER TABLE "AttentionDismissal" ADD CONSTRAINT "AttentionDismissal_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AttentionDismissal" ADD CONSTRAINT "AttentionDismissal_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
