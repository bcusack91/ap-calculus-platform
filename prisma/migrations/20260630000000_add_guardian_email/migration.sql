-- AlterTable
-- Optional parent/guardian email for weekly progress digests. Opt-out is handled
-- via the existing EmailSubscriber table (keyed by email), so no extra column.
ALTER TABLE "User" ADD COLUMN "guardianEmail" TEXT;
