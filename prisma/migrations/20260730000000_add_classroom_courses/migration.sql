-- Classroom-course association (Khan-style): assignment pickers filter to these.
CREATE TABLE IF NOT EXISTS "ClassroomCourse" (
  "id" TEXT NOT NULL,
  "classroomId" TEXT NOT NULL,
  "courseSlug" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ClassroomCourse_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ClassroomCourse_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS "ClassroomCourse_classroomId_courseSlug_key" ON "ClassroomCourse"("classroomId", "courseSlug");
CREATE INDEX IF NOT EXISTS "ClassroomCourse_classroomId_idx" ON "ClassroomCourse"("classroomId");
