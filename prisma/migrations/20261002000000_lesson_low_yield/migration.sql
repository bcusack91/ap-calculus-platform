-- Interactive lessons: per-student "Include low-yield details" (hidden by default).
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "lessonIncludeLowYield" BOOLEAN NOT NULL DEFAULT false;
