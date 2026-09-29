/**
 * Needs Attention acknowledgements.
 *
 * The dashboard's Needs Attention list is recomputed from live data on every
 * load, so a teacher's "seen it" has to be remembered separately or the item
 * comes straight back. These are the rules for when a remembered dismissal
 * still hides a reason. Pure, so the rules are unit-tested.
 */

import { EXIT_QUIZ_PASS_FRACTION } from '@/lib/mastery'

export const INACTIVITY_REASON = 'no activity in 14 days'
/**
 * A rostered student who has never signed in (see student-activity.ts). Fixed
 * text, so a dismissal holds until they sign in, which clears the reason.
 */
export const NEVER_SIGNED_IN_REASON = 'has not signed in yet'
/** Signed in but has not studied anything since joining. */
export const NOT_STARTED_REASON = 'has not started any work yet'
/**
 * Grace period before an unclaimed or untouched account is flagged, so a
 * roster imported this morning does not fill the list on day one.
 */
export const NEW_MEMBER_GRACE_DAYS = 3

export type AttentionReason = { reason: string; weight: number }
export type AttentionEntry = {
  studentId: string
  studentName: string
  classroomId: string
  items: AttentionReason[]
}
export type Dismissal = { studentId: string; reason: string; dismissedAt: Date }

export type AttentionRow = {
  studentId: string
  studentName: string
  classroomId: string
  reasons: string[]
  severity: number
}

/**
 * Did a graded submission miss its assignment's bar? Both values are 0-1
 * fractions (the assignments route rejects a requiredScore above 1). The old
 * check multiplied only the score by 100 and compared it with the raw
 * fraction, so no student was ever flagged. With no bar set, the site-wide
 * pass mark applies.
 */
export function scoredBelowTarget(score: number | null, requiredScore: number | null): boolean {
  if (score === null) return false
  const bar = requiredScore ?? EXIT_QUIZ_PASS_FRACTION
  return score < bar - 1e-9
}

/**
 * Account-level reasons for rostered students, from their sign-in and study
 * activity (see student-activity.ts):
 *   - never signed in (a roster import nobody has claimed yet);
 *   - signed in but has not studied anything;
 *   - studied before but nothing in `inactiveDays`.
 * The first two wait out NEW_MEMBER_GRACE_DAYS after the student was added, so
 * importing a roster does not light the whole class up on day one. A student
 * in two of the teacher's classes is reported once.
 */
export function membershipAttention(
  members: { userId: string; classroomId: string; joinedAt: Date }[],
  activity: Map<string, { signedIn: boolean; lastActiveAt: Date | null }>,
  now: Date,
  inactiveDays = 14,
): { userId: string; classroomId: string; reason: string; weight: number }[] {
  const graceCutoff = now.getTime() - NEW_MEMBER_GRACE_DAYS * 24 * 60 * 60 * 1000
  const inactiveCutoff = now.getTime() - inactiveDays * 24 * 60 * 60 * 1000
  const seen = new Set<string>()
  const out: { userId: string; classroomId: string; reason: string; weight: number }[] = []
  for (const m of members) {
    if (seen.has(m.userId)) continue
    seen.add(m.userId)
    const a = activity.get(m.userId) ?? { signedIn: false, lastActiveAt: null }
    if (a.lastActiveAt) {
      if (a.lastActiveAt.getTime() < inactiveCutoff) {
        out.push({ userId: m.userId, classroomId: m.classroomId, reason: INACTIVITY_REASON, weight: 1 })
      }
      continue
    }
    if (m.joinedAt.getTime() > graceCutoff) continue
    out.push({
      userId: m.userId,
      classroomId: m.classroomId,
      reason: a.signedIn ? NOT_STARTED_REASON : NEVER_SIGNED_IN_REASON,
      weight: 1,
    })
  }
  return out
}

/**
 * Drops acknowledged reasons and any student left with none.
 *
 * Assignment reasons name the assignment, so a dismissal keyed on the text
 * hides exactly that problem and a new one still surfaces. Inactivity always
 * has the same text, so its dismissal only holds while it is the SAME quiet
 * spell: once the student is active after the dismissal, a later 14-day
 * silence is a new problem and shows again.
 */
export function applyDismissals(
  entries: AttentionEntry[],
  dismissals: Dismissal[],
  lastActivityByStudent: Map<string, Date>,
): AttentionRow[] {
  const byKey = new Map(dismissals.map((d) => [`${d.studentId}\u0000${d.reason}`, d]))
  const rows: AttentionRow[] = []
  for (const e of entries) {
    const kept = e.items.filter(({ reason }) => {
      const d = byKey.get(`${e.studentId}\u0000${reason}`)
      if (!d) return true
      if (reason === INACTIVITY_REASON) {
        const last = lastActivityByStudent.get(e.studentId)
        return !!last && last > d.dismissedAt
      }
      return false
    })
    if (kept.length === 0) continue
    rows.push({
      studentId: e.studentId,
      studentName: e.studentName,
      classroomId: e.classroomId,
      reasons: kept.map((k) => k.reason),
      severity: kept.reduce((s, k) => s + k.weight, 0),
    })
  }
  return rows
}
