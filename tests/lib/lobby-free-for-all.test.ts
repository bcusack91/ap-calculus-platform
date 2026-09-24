/**
 * Free-for-all is a real format, not a two-team game wearing a different name.
 *
 * The owner set up a free-for-all and got teams: the room page forced a
 * 2-team balance before Start, the teacher flow had no FFA option at all,
 * Chaos was only offered for duels and team games, nobody could see anyone
 * else's score during a match, and a finished match never closed — so the
 * room page bounced players back into /play and the leaderboard was
 * unreachable. Pure-logic checks plus a few source guards for the routes.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { isFreeForAll, lobbyTimeIsUp, rankPlayers, teamTotals, resultHeadline } from '@/lib/lobby-standings'

const repoFile = (p: string) => fs.readFileSync(path.join(process.cwd(), p), 'utf8')

const P = (id: string, score: number, team: number | null, correct = 0, answered = 0, isMe = false) => ({
  id,
  name: id,
  team,
  score,
  questionsCorrect: correct,
  questionsAnswered: answered,
  isMe,
})

describe('standings', () => {
  it('ranks by score with shared ranks on ties', () => {
    const ranked = rankPlayers([P('a', 300, 0), P('b', 500, 1), P('c', 300, 2), P('d', 100, 3)])
    expect(ranked.map((p) => [p.id, p.rank])).toEqual([
      ['b', 1],
      ['a', 2],
      ['c', 2],
      ['d', 4],
    ])
  })

  it('sums team totals highest first and marks the caller\'s team', () => {
    const totals = teamTotals([P('a', 100, 0, 1, 1), P('b', 400, 1, 4, 4), P('c', 200, 0, 2, 3), P('u', 900, null)], 2, 0)
    expect(totals).toEqual([
      { team: 1, score: 400, players: 1, answered: 4, isMine: false },
      { team: 0, score: 300, players: 2, answered: 4, isMine: true },
    ])
  })

  it('writes an honest headline for both formats', () => {
    const ffa = rankPlayers([P('me', 500, 0, 0, 0, true), P('x', 300, 1)])
    expect(resultHeadline({ ffa: true, ranked: ffa, teams: [], myTeam: 0 })).toBe('You won!')
    const lost = rankPlayers([P('me', 100, 0, 0, 0, true), P('x', 300, 1)])
    expect(resultHeadline({ ffa: true, ranked: lost, teams: [], myTeam: 0 })).toBe('x wins!')
    const teams = teamTotals([P('a', 100, 0), P('b', 400, 1)], 2, 0)
    expect(resultHeadline({ ffa: false, ranked: [], teams, myTeam: 0 })).toBe('Team 2 wins!')
    expect(resultHeadline({ ffa: false, ranked: [], teams, myTeam: 1 })).toBe('Your team won!')
  })

  it('knows a free-for-all from a team game and when time is up', () => {
    expect(isFreeForAll({ format: 'RACE_FFA' })).toBe(true)
    expect(isFreeForAll({ format: 'TEAM_2V2' })).toBe(false)
    expect(isFreeForAll({ format: null })).toBe(false)
    const t = 1_000_000
    expect(lobbyTimeIsUp({ status: 'IN_PROGRESS', endsAt: new Date(t - 1) }, t)).toBe(true)
    expect(lobbyTimeIsUp({ status: 'IN_PROGRESS', endsAt: new Date(t + 1) }, t)).toBe(false)
    expect(lobbyTimeIsUp({ status: 'CLOSED', endsAt: new Date(t - 1) }, t)).toBe(false)
    expect(lobbyTimeIsUp({ status: 'IN_PROGRESS', endsAt: null }, t)).toBe(false)
  })
})

describe('free-for-all reaches every surface', () => {
  it('teachers can create one, and start assigns sides for any host', () => {
    expect(repoFile('src/app/api/teacher/lobby/route.ts')).toContain("body?.format === 'RACE_FFA' ? 'RACE_FFA' : null")
    const start = repoFile('src/app/api/teacher/lobby/[id]/start/route.ts')
    expect(start).toContain("if (lobby.format === 'RACE_FFA') {")
    expect(start).not.toContain("lobby.studentHosted && lobby.format === 'RACE_FFA'")
    expect(repoFile('src/app/teacher/lobby/page.tsx')).toContain("key: 'RACE_FFA'")
  })

  it('the room page never demands a team balance for a free-for-all', () => {
    const room = repoFile('src/app/teacher/lobby/[id]/page.tsx')
    expect(room).toContain('const isFfa = isFreeForAll(lobby)')
    expect(room).toContain('(needsBalancing && unassigned.length > 0)')
    expect(room).toContain('!lobbyTimeIsUp(lobby)')
  })

  it('chaos can be chosen for student-hosted races and team battles', () => {
    const route = repoFile('src/app/api/competitive/open-lobbies/route.ts')
    expect(route).toContain("body?.gameMode === 'CHAOS' ? 'CHAOS' : 'competitive'")
    expect(route).toContain("body?.chaosIntensity === 'full' ? 'full' : 'gentle'")
    expect(route).not.toContain("gameMode: 'competitive',\n        numTeams: 2")
    expect(repoFile('src/app/competitive/lobbies/page.tsx')).toContain('gameMode: raceMode')
  })

  it('every player is sent the standings, and an expired match closes on read', () => {
    const play = repoFile('src/app/api/teacher/lobby/[id]/play/route.ts')
    expect(play).toContain('standings: rankPlayers(roster)')
    expect(play).toContain('closeIfTimeIsUp(stored)')
    expect(play).not.toContain('where: { userId: session.user.id }')
    expect(repoFile('src/app/api/teacher/lobby/[id]/route.ts')).toContain('closeIfTimeIsUp(stored)')
  })
})
