-- CreateTable
CREATE TABLE "ClassroomGroup" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassroomGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassroomGroupMember" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "ClassroomGroupMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClassroomGroup_classroomId_idx" ON "ClassroomGroup"("classroomId");

-- CreateIndex
CREATE UNIQUE INDEX "ClassroomGroup_classroomId_name_key" ON "ClassroomGroup"("classroomId", "name");

-- CreateIndex
CREATE INDEX "ClassroomGroupMember_memberId_idx" ON "ClassroomGroupMember"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "ClassroomGroupMember_groupId_memberId_key" ON "ClassroomGroupMember"("groupId", "memberId");

-- AddForeignKey
ALTER TABLE "ClassroomGroup" ADD CONSTRAINT "ClassroomGroup_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomGroupMember" ADD CONSTRAINT "ClassroomGroupMember_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "ClassroomGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomGroupMember" ADD CONSTRAINT "ClassroomGroupMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "ClassroomMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

