-- Teacher placement override for the SAT Core Skills track.
-- 'core-skills' forces the track on, 'regular' forces it off, NULL = automatic
-- placement from the student's diagnostic score (see core-skills-modules.ts).
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "satTrackOverride" TEXT;
