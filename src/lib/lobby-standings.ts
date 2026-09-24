/**
 * Class-lobby standings, shared by the /play payload and the room page.
 *
 * A lobby is either a team game (numTeams sides, MMR snake-drafted) or a
 * free-for-all (format RACE_FFA: every player is their own "team", assigned at
 * start so the Chaos engine's team-keyed targeting keeps working). Everything
 * that used to say "Team N" regardless now asks `isFreeForAll` first.
 */

export type StandingsParticipant = {
  id: string
  name: string
  team: number | null
  score: number
  questionsCorrect: number
  questionsAnswered: number
  isMe?: boolean
}

export type RankedPlayer = StandingsParticipant & { rank: number }
export type TeamTotal = { team: number; score: number; players: number; answered: number; isMine?: boolean }

export function isFreeForAll(lobby: { format?: string | null }): boolean {
  return lobby.format === 'RACE_FFA'
}

/** The match is over once the timer has run out, whether or not anyone closed it. */
export function lobbyTimeIsUp(
  lobby: { status: string; endsAt: Date | string | null | undefined },
  now: number = Date.now(),
): boolean {
  if (lobby.status !== 'IN_PROGRESS' || !lobby.endsAt) return false
  return new Date(lobby.endsAt).getTime() <= now
}

/** Players by score, ties broken by accuracy then name so the order is stable between polls. */
export function rankPlayers(participants: StandingsParticipant[]): RankedPlayer[] {
  const sorted = [...participants].sort(
    (a, b) =>
      b.score - a.score ||
      b.questionsCorrect - a.questionsCorrect ||
      a.questionsAnswered - b.questionsAnswered ||
      a.name.localeCompare(b.name),
  )
  // Equal scores share a rank (1, 1, 3), the way a class leaderboard reads.
  let rank = 0
  return sorted.map((p, i) => {
    if (i === 0 || p.score !== sorted[i - 1].score) rank = i + 1
    return { ...p, rank }
  })
}

/** Per-team totals, highest first. Unassigned players count toward no team. */
export function teamTotals(participants: StandingsParticipant[], numTeams: number, myTeam?: number | null): TeamTotal[] {
  const totals: TeamTotal[] = Array.from({ length: Math.max(0, numTeams) }, (_, team) => ({
    team,
    score: 0,
    players: 0,
    answered: 0,
    isMine: myTeam === team,
  }))
  for (const p of participants) {
    if (p.team === null || p.team === undefined || !totals[p.team]) continue
    totals[p.team].score += p.score
    totals[p.team].players += 1
    totals[p.team].answered += p.questionsAnswered
  }
  return totals.sort((a, b) => b.score - a.score || a.team - b.team)
}

/** A short, honest headline for the end screen. */
export function resultHeadline(opts: {
  ffa: boolean
  ranked: RankedPlayer[]
  teams: TeamTotal[]
  myTeam: number | null | undefined
}): string {
  const { ffa, ranked, teams, myTeam } = opts
  if (ffa) {
    if (ranked.length === 0) return 'Match over!'
    const me = ranked.find((p) => p.isMe)
    const leaders = ranked.filter((p) => p.rank === 1)
    if (me && me.rank === 1) return leaders.length > 1 ? 'You tied for first!' : 'You won!'
    return leaders.length > 1 ? `${leaders.map((p) => p.name).join(' & ')} tied for first` : `${leaders[0].name} wins!`
  }
  const withPlayers = teams.filter((t) => t.players > 0)
  if (withPlayers.length === 0) return 'Match over!'
  const top = withPlayers[0].score
  const winners = withPlayers.filter((t) => t.score === top)
  if (winners.length > 1) return winners.some((t) => t.team === myTeam) ? 'Your team tied for first!' : 'Tied match!'
  return winners[0].team === myTeam ? 'Your team won!' : `Team ${winners[0].team + 1} wins!`
}
