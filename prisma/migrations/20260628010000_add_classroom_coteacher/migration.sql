-- CreateTable
-- Co-teachers: teachers (other than the owner) granted access to a classroom.
-- Kept separate from ClassroomMember so it never pollutes student queries.
CREATE TABLE "ClassroomCoTeacher" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassroomCoTeacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClassroomCoTeacher_classroomId_userId_key" ON "ClassroomCoTeacher"("classroomId", "userId");

-- CreateIndex
CREATE INDEX "ClassroomCoTeacher_userId_idx" ON "ClassroomCoTeacher"("userId");

-- AddForeignKey
ALTER TABLE "ClassroomCoTeacher" ADD CONSTRAINT "ClassroomCoTeacher_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomCoTeacher" ADD CONSTRAINT "ClassroomCoTeacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
