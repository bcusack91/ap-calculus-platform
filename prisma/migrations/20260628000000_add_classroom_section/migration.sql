-- AlterTable
-- Additive, nullable label for teachers with multiple sections (e.g. "Period 3").
-- Already applied to production directly (db-push-managed); this file keeps the
-- migration history in sync for fresh/dev/CI environments.
ALTER TABLE "Classroom" ADD COLUMN "section" TEXT;
