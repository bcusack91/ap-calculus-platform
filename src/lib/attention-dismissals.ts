/**
 * Needs Attention acknowledgements.
 *
 * The dashboard's Needs Attention list is recomputed from live data on every
 * load, so a teacher's "seen it" has to be remembered separately or the item
 * comes straight back. These are the rules for when a remembered dismissal
 * still hides a reason. Pure, so the rules are unit-tested.
 */

export const INACTIVITY_REASON = 'no activity in 14 days'

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
