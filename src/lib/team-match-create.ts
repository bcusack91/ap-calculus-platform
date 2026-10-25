import type { Prisma } from '@prisma/client'

/**
 * The CompetitiveMatch create payload for a live (human) Team Battle 2v2 —
 * shared by the public team queue and class match pools so both build exactly
 * the gameData shape team-match/[id] reads. Team data lives in gameData;
 * player1Id/player2Id are the two team leads and the MMR columns hold team
 * averages (per-player MMRs in gameData.playerMMRs drive the per-player
 * update when the match ends).
 */
export interface TeamBattlePlayer {
  userId: string
  mmr: number
}

export function teamBattleMatchData(opts: {
  team1: readonly [TeamBattlePlayer, TeamBattlePlayer]
  team2: readonly [TeamBattlePlayer, TeamBattlePlayer]
  topicSlug: string
  questions: unknown[]
  pacing: object
  tier?: string
  poolId?: string
}): Prisma.CompetitiveMatchUncheckedCreateInput {
  const { team1, team2, topicSlug, questions, pacing, tier, poolId } = opts
  const team1AvgMMR = Math.round((team1[0].mmr + team1[1].mmr) / 2)
  const team2AvgMMR = Math.round((team2[0].mmr + team2[1].mmr) / 2)
  const team = (t: readonly [TeamBattlePlayer, TeamBattlePlayer]) => ({
    players: [t[0].userId, t[1].userId],
    score: 0,
    questionIndices: { [t[0].userId]: 0, [t[1].userId]: 0 },
    answers: { [t[0].userId]: [], [t[1].userId]: [] },
  })
  return {
    player1Id: team1[0].userId,
    player2Id: team2[0].userId,
    gameMode: 'TEAM_BATTLE',
    topicSlug,
    player1MMRBefore: team1AvgMMR,
    player2MMRBefore: team2AvgMMR,
    player1MMRAfter: team1AvgMMR,
    player2MMRAfter: team2AvgMMR,
    player1Score: 0,
    player2Score: 0,
    status: 'IN_PROGRESS',
    startedAt: new Date(),
    ...(poolId ? { poolId } : {}),
    gameData: {
      isTeamBattle: true,
      questions,
      team1: team(team1),
      team2: team(team2),
      playerMMRs: Object.fromEntries([...team1, ...team2].map((p) => [p.userId, p.mmr])),
      ...pacing,
      player1QuestionIndex: 0,
      player2QuestionIndex: 0,
      ...(tier ? { tier } : {}),
    } as unknown as Prisma.InputJsonValue,
  }
}
