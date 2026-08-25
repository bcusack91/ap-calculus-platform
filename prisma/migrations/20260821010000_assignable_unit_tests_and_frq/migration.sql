-- Teachers could not assign unit tests or free-response practice, though both
-- were freely available to students. These two types are scoped to a COURSE
-- (and optionally a unit) rather than a topic slug, hence the new columns.
ALTER TYPE "AssignmentType" ADD VALUE IF NOT EXISTS 'UNIT_TEST';
ALTER TYPE "AssignmentType" ADD VALUE IF NOT EXISTS 'FRQ_PRACTICE';

ALTER TABLE "Assignment" ADD COLUMN IF NOT EXISTS "courseSlug" TEXT;
ALTER TABLE "Assignment" ADD COLUMN IF NOT EXISTS "unitId" TEXT;
