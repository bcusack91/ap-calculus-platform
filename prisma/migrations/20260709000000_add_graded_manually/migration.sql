-- Manual-grade flag: auto-grading must never overwrite a teacher-entered grade.
ALTER TABLE "AssignmentSubmission" ADD COLUMN "gradedManually" BOOLEAN NOT NULL DEFAULT false;
