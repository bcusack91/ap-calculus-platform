import { prisma } from '@/lib/prisma'

/**
 * Has a student ever signed in, and when did they last study?
 *
 * There is no login timestamp (sessions are JWTs), so "signed in" is inferred:
 *   - a password means they created the account themselves (and were signed in
 *     by the signup flow);
 *   - an OAuth Account row means they signed in with Google or Microsoft;
 *   - any study activity means they were signed in to do it.
 * A roster-imported student is pre-created with neither a password nor an
 * Account row, so until they claim the account they read "Never signed in".
 *
 * "Last active" is the newest timestamp across the study tables the teacher
 * surfaces already read: lessons, exit quizzes, diagnostics and flashcards.
 */

export interface StudentActivity {
  signedIn: boolean
  lastActiveAt: Date | null
}

export interface ActivityRows {
  withPassword: string[]
  withAccount: string[]
  /** [userId, timestamp] pairs from any activity table; nulls are ignored. */
  activity: [string, Date | null | undefined][]
}

/** Pure merge of the rows below, so the inference rules are unit-tested. */
export function summarizeActivity(userIds: string[], rows: ActivityRows): Map<string, StudentActivity> {
  const hasCredential = new Set([...rows.withPassword, ...rows.withAccount])
  const latest = new Map<string, Date>()
  for (const [userId, at] of rows.activity) {
    if (!at) continue
    const prev = latest.get(userId)
    if (!prev || at > prev) latest.set(userId, at)
  }
  const out = new Map<string, StudentActivity>()
  for (const id of userIds) {
    const lastActiveAt = latest.get(id) ?? null
    out.set(id, { signedIn: hasCredential.has(id) || lastActiveAt !== null, lastActiveAt })
  }
  return out
}

export async function studentActivity(userIds: string[]): Promise<Map<string, StudentActivity>> {
  const ids = [...new Set(userIds)]
  if (ids.length === 0) return new Map()
  const inIds = { in: ids }
  const [withPassword, withAccount, topics, exits, diagnostics, cards] = await Promise.all([
    prisma.user.findMany({ where: { id: inIds, password: { not: null } }, select: { id: true } }),
    prisma.account.findMany({ where: { userId: inIds }, select: { userId: true }, distinct: ['userId'] }),
    prisma.topicProgress.groupBy({ by: ['userId'], where: { userId: inIds }, _max: { lastAccessed: true } }),
    prisma.exitQuizAttempt.groupBy({ by: ['userId'], where: { userId: inIds }, _max: { completedAt: true } }),
    prisma.diagnosticTest.groupBy({ by: ['userId'], where: { userId: inIds }, _max: { createdAt: true } }),
    prisma.flashcardDailyActivity.groupBy({ by: ['userId'], where: { userId: inIds }, _max: { day: true } }),
  ])
  return summarizeActivity(ids, {
    withPassword: withPassword.map((u) => u.id),
    withAccount: withAccount.map((a) => a.userId),
    activity: [
      ...topics.map((r): [string, Date | null] => [r.userId, r._max.lastAccessed]),
      ...exits.map((r): [string, Date | null] => [r.userId, r._max.completedAt]),
      ...diagnostics.map((r): [string, Date | null] => [r.userId, r._max.createdAt]),
      ...cards.map((r): [string, Date | null] => [r.userId, r._max.day]),
    ],
  })
}
