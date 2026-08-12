-- Assigned class diagnostics + live-session attendance. Additive; re-runnable.

CREATE TABLE IF NOT EXISTS "ClassDiagnostic" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "courseKey" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "testData" JSONB NOT NULL,
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ClassDiagnostic_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "ClassDiagnostic_classroomId_courseKey_createdAt_idx" ON "ClassDiagnostic"("classroomId", "courseKey", "createdAt");

ALTER TABLE "DiagnosticTest" ADD COLUMN IF NOT EXISTS "classDiagnosticId" TEXT;
CREATE INDEX IF NOT EXISTS "DiagnosticTest_classDiagnosticId_idx" ON "DiagnosticTest"("classDiagnosticId");

CREATE TABLE IF NOT EXISTS "LiveSessionAttendance" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LiveSessionAttendance_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "LiveSessionAttendance_sessionId_userId_key" ON "LiveSessionAttendance"("sessionId", "userId");
CREATE INDEX IF NOT EXISTS "LiveSessionAttendance_sessionId_idx" ON "LiveSessionAttendance"("sessionId");

DO $$ BEGIN
  ALTER TABLE "ClassDiagnostic" ADD CONSTRAINT "ClassDiagnostic_classroomId_fkey"
    FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN
  ALTER TABLE "DiagnosticTest" ADD CONSTRAINT "DiagnosticTest_classDiagnosticId_fkey"
    FOREIGN KEY ("classDiagnosticId") REFERENCES "ClassDiagnostic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN
  ALTER TABLE "LiveSessionAttendance" ADD CONSTRAINT "LiveSessionAttendance_sessionId_fkey"
    FOREIGN KEY ("sessionId") REFERENCES "LiveSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
