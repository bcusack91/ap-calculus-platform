-- Lesson recordings posted to a class (YouTube links).
CREATE TABLE IF NOT EXISTS "ClassRecording" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ClassRecording_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "ClassRecording_classroomId_createdAt_idx" ON "ClassRecording"("classroomId", "createdAt");

DO $$ BEGIN
  ALTER TABLE "ClassRecording" ADD CONSTRAINT "ClassRecording_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
