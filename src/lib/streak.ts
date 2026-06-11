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
