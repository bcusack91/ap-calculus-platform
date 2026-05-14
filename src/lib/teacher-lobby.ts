// MMR-balanced team formation helpers for teacher lobbies.

export interface ParticipantWithMMR {
  id: string
  userId: string
  mmrAtJoin: number
}

/**
 * Snake-draft team assignment by MMR.
 * Sort participants descending by MMR, then assign in pattern
 *   round 0: 0, 1, 2, ..., K-1
 *   round 1: K-1, K-2, ..., 0
 *   round 2: 0, 1, ..., K-1
 * etc. This minimises team-MMR variance for K >= 2.
 *
 * Returns a map of participantId -> team index (0..K-1).
 */
export function snakeDraftTeams(
  participants: ParticipantWithMMR[],
  numTeams: number,
): Record<string, number> {
  if (numTeams < 2) throw new Error('numTeams must be >= 2')
  const sorted = [...participants].sort((a, b) => b.mmrAtJoin - a.mmrAtJoin)
  const assignment: Record<string, number> = {}
  for (let i = 0; i < sorted.length; i++) {
    const round = Math.floor(i / numTeams)
    const positionInRound = i % numTeams
    const team = round % 2 === 0 ? positionInRound : numTeams - 1 - positionInRound
    assignment[sorted[i].id] = team
  }
  return assignment
}

/**
 * Compute a quality summary for a team split: array of {team, count, totalMMR, avgMMR}.
 */
export function summarizeTeams(
  participants: ParticipantWithMMR[],
  assignment: Record<string, number>,
  numTeams: number,
): { team: number; count: number; totalMMR: number; avgMMR: number }[] {
  const out = Array.from({ length: numTeams }, (_, t) => ({
    team: t,
    count: 0,
    totalMMR: 0,
    avgMMR: 0,
  }))
  for (const p of participants) {
    const t = assignment[p.id]
    if (t === undefined) continue
    out[t].count += 1
    out[t].totalMMR += p.mmrAtJoin
  }
  for (const row of out) {
    row.avgMMR = row.count > 0 ? Math.round(row.totalMMR / row.count) : 0
  }
  return out
}

/**
 * Generate an unambiguous 6-character lobby code.
 */
export function generateTeacherLobbyCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export function normalizeTeacherLobbyCode(raw: string): string {
  return raw.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6)
}
