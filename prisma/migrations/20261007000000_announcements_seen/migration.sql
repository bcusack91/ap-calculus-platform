-- When a student last saw their class's announcements (dashboard banner and
-- notification bell show newer ones). Nullable, additive.
ALTER TABLE "ClassroomMember" ADD COLUMN IF NOT EXISTS "announcementsSeenAt" TIMESTAMP(3);
