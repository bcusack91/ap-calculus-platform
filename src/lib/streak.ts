import { randomUUID } from 'crypto'
import type { Prisma } from '@prisma/client'

/**
 * Atomically advance a user's daily streak.
 *
 * Background: every DailyStreak reference in src/ was a READ (streak/status,
 * dashboard, cron/streak-reminder, achievements, weekly digest…) — nothing ever
 * wrote the row, so streaks could never advance. This helper is the single
 * write path, called from study-activity endpoints (progress/save and
 * exit-quiz/submit) inside their transactions.
 *
 * Semantics (all date math in UTC, comparing calendar days):
 *   - First ever activity            → row created with currentStreak = 1
 *   - Same UTC day as lastActiveDate → no-op (streak unchanged, timestamp bumped)
 *   - Exactly 1 day later            → currentStreak + 1
 *   - Exactly 2 days later           → "streak freeze" grace: committed students
 *                                      (currentStreak >= 7) get ONE missed day
 *                                      forgiven and the streak continues with
 *                                      currentStreak + 1. Below 7, no grace.
 *   - Anything larger (or weird)     → reset to 1
 *   - longestStreak = GREATEST(longestStreak, new currentStreak)
 *
 * Implemented as a single INSERT ... ON CONFLICT ... DO UPDATE so concurrent
 * submissions cannot lose updates (the row is locked for the duration of the
 * statement, and first-touch races collapse into the upsert).
 *
 * Note on raw SQL: DailyStreak.id uses @default(cuid()) and updatedAt uses
 * @updatedAt — both are Prisma-client-side defaults that raw SQL bypasses, so
 * we supply an id and set "updatedAt" explicitly. lastActiveDate/createdAt are
 * timestamp(3) columns storing UTC wall time, hence NOW() AT TIME ZONE 'UTC'.
 *
 * @param tx     A Prisma transaction client (call inside $transaction so the
 *               streak write commits/rolls back with the triggering activity).
 * @param userId The user whose streak to touch.
 */
export async function touchDailyStreak(
  tx: Prisma.TransactionClient,
  userId: string
): Promise<void> {
  const id = randomUUID()
  await tx.$executeRaw`
    INSERT INTO "DailyStreak"
      ("id", "userId", "currentStreak", "longestStreak", "lastActiveDate", "createdAt", "updatedAt")
    VALUES
      (${id}, ${userId}, 1, 1, NOW() AT TIME ZONE 'UTC', NOW() AT TIME ZONE 'UTC', NOW() AT TIME ZONE 'UTC')
    ON CONFLICT ("userId") DO UPDATE SET
      "currentStreak" = CASE
        -- Same UTC day: repeat activity, streak unchanged
        WHEN (NOW() AT TIME ZONE 'UTC')::date - "DailyStreak"."lastActiveDate"::date <= 0
          THEN "DailyStreak"."currentStreak"
        -- Consecutive UTC day: advance
        WHEN (NOW() AT TIME ZONE 'UTC')::date - "DailyStreak"."lastActiveDate"::date = 1
          THEN "DailyStreak"."currentStreak" + 1
        -- One missed day ("streak freeze"): only granted at currentStreak >= 7
        WHEN (NOW() AT TIME ZONE 'UTC')::date - "DailyStreak"."lastActiveDate"::date = 2
             AND "DailyStreak"."currentStreak" >= 7
          THEN "DailyStreak"."currentStreak" + 1
        -- Bigger gap: streak broken, start over
        ELSE 1
      END,
      "longestStreak" = GREATEST(
        "DailyStreak"."longestStreak",
        CASE
          WHEN (NOW() AT TIME ZONE 'UTC')::date - "DailyStreak"."lastActiveDate"::date <= 0
            THEN "DailyStreak"."currentStreak"
          WHEN (NOW() AT TIME ZONE 'UTC')::date - "DailyStreak"."lastActiveDate"::date = 1
            THEN "DailyStreak"."currentStreak" + 1
          WHEN (NOW() AT TIME ZONE 'UTC')::date - "DailyStreak"."lastActiveDate"::date = 2
               AND "DailyStreak"."currentStreak" >= 7
            THEN "DailyStreak"."currentStreak" + 1
          ELSE 1
        END
      ),
      "lastActiveDate" = NOW() AT TIME ZONE 'UTC',
      "updatedAt" = NOW() AT TIME ZONE 'UTC'
  `
}

/** Whole-calendar-day difference between two instants, measured in UTC. */
function utcDayDiff(from: Date, to: Date): number {
  const fromUtc = Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate())
  const toUtc = Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), to.getUTCDate())
  return Math.round((toUtc - fromUtc) / 86_400_000)
}

/**
 * The streak to *display* for a stored DailyStreak row, given the current time.
 *
 * `DailyStreak.currentStreak` is only rewritten when a study activity fires
 * (see touchDailyStreak). Between sessions the stored number goes stale: a user
 * who lets a streak lapse keeps seeing the old value until their next session
 * resets it. Reads must therefore decay it themselves, using the SAME UTC
 * calendar-day definition and grace window as the write path:
 *
 *   - active today or yesterday (diff <= 1)          → still alive, show stored
 *   - exactly 2 days ago AND stored streak >= 7      → "streak freeze" grace,
 *                                                       still alive, show stored
 *   - anything older (or missing lastActiveDate)     → broken, show 0
 *
 * @param row An object with the persisted streak fields (or null/undefined).
 * @param now Reference time; defaults to new Date(). Pass-through aids testing.
 */
export function displayStreak(
  row: { currentStreak: number; lastActiveDate: Date | null } | null | undefined,
  now: Date = new Date()
): number {
  if (!row || row.currentStreak <= 0 || !row.lastActiveDate) return 0
  const daysSince = utcDayDiff(new Date(row.lastActiveDate), now)
  if (daysSince <= 1) return row.currentStreak
  if (daysSince === 2 && row.currentStreak >= 7) return row.currentStreak
  return 0
}
