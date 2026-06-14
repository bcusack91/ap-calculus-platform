import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { calculateMMRChange, getRankFromMMR } from '@/lib/competitive-utils';
import type { Prisma } from '@prisma/client';

interface MatchGameData {
  questions?: Array<{ answerIndex?: number; [key: string]: unknown }>;
  player1Answers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean }>;
  player2Answers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean }>;
  player1QuestionIndex?: number;
  player2QuestionIndex?: number;
  isPracticeMatch?: boolean;
  [key: string]: unknown;
}

// Force-complete an accuracy challenge match when timer expires
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: matchId } = await params;

    const match = await prisma.competitiveMatch.findUnique({
      where: { id: matchId },
      include: {
        player1: { include: { competitiveProfile: true } },
        player2: { include: { competitiveProfile: true } },
      },
    });

    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    // Only participants can complete
    if (match.player1Id !== session.user.id && match.player2Id !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Already completed
    if (match.status === 'COMPLETED') {
      return NextResponse.json({ status: 'already_completed' });
    }

    // Only for accuracy challenge
    if (match.gameMode !== 'ACCURACY_CHALLENGE') {
      return NextResponse.json({ error: 'Not an accuracy match' }, { status: 400 });
    }

    // Verify timer actually expired (with 5s grace period)
    const ACCURACY_TIME_LIMIT_MS = 5 * 60 * 1000;
    const elapsed = match.startedAt ? Date.now() - new Date(match.startedAt).getTime() : 0;
    if (elapsed < ACCURACY_TIME_LIMIT_MS - 5000) {
      return NextResponse.json({ error: 'Timer has not expired' }, { status: 400 });
    }

    const gameData = (match.gameData && typeof match.gameData === 'object'
      ? match.gameData
      : {}) as MatchGameData;

    const p1Answered = gameData.player1Answers?.length || 0;
    const p2Answered = gameData.player2Answers?.length || 0;
    const p1Correct = gameData.player1Answers?.filter(a => a.correct).length || 0;
    const p2Correct = gameData.player2Answers?.filter(a => a.correct).length || 0;
    const p1Accuracy = p1Answered > 0 ? p1Correct / p1Answered : 0;
    const p2Accuracy = p2Answered > 0 ? p2Correct / p2Answered : 0;

    let winnerId: string | null = null;
    if (p1Accuracy > p2Accuracy) winnerId = match.player1Id;
    else if (p2Accuracy > p1Accuracy) winnerId = match.player2Id;
    else if (p1Answered > p2Answered) winnerId = match.player1Id;
    else if (p2Answered > p1Answered) winnerId = match.player2Id;

    const player1MMR = match.player1MMRBefore || match.player1.competitiveProfile?.overallMMR || 1000;
    const player2MMR = match.player2MMRBefore || match.player2.competitiveProfile?.overallMMR || 1000;
    const player1TotalMatches = match.player1.competitiveProfile?.totalMatches || 0;
    const player2TotalMatches = match.player2.competitiveProfile?.totalMatches || 0;
    const player1Won = winnerId === match.player1Id;
    const player2Won = winnerId === match.player2Id;
    const player1MMRChange = winnerId ? calculateMMRChange(player1MMR, player2MMR, player1Won, player1TotalMatches) : 0;
    const player2MMRChange = winnerId ? calculateMMRChange(player2MMR, player1MMR, player2Won, player2TotalMatches) : 0;
    const player1MMRAfter = player1MMR + player1MMRChange;
    const player2MMRAfter = player2MMR + player2MMRChange;

    const isPracticeMatch = gameData.isPracticeMatch === true;

    // All writes happen inside ONE transaction with a row lock + an in-tx
    // status re-check (#3). Two clients can both fire /complete when the timer
    // expires; without this each would read status='IN_PROGRESS', then both
    // would increment wins/losses and create duplicate MMRHistory rows (double
    // counting). FOR UPDATE serialises them and the re-check makes the second
    // one a no-op. Mirrors async-challenge/[id] and match/[id]/answer.
    try {
      await prisma.$transaction(async (tx) => {
        await tx.$queryRaw`SELECT id FROM "CompetitiveMatch" WHERE id = ${matchId} FOR UPDATE`;

        const current = await tx.competitiveMatch.findUnique({
          where: { id: matchId },
          select: { status: true },
        });
        if (!current || current.status === 'COMPLETED') {
          throw Object.assign(new Error('Match already completed'), { code: 'ALREADY_COMPLETED' });
        }

        await tx.competitiveMatch.update({
          where: { id: matchId },
          data: {
            status: 'COMPLETED',
            winnerId,
            completedAt: new Date(),
            player1Score: p1Correct,
            player2Score: p2Correct,
            gameData: { ...gameData } as unknown as Prisma.InputJsonValue,
            player1MMRAfter,
            player2MMRAfter,
          },
        });

        // Practice (vs-AI) matches finalize the RECORD only — never touch
        // ranked stats / MMR history (#2/#3): win-farming guard.
        if (!isPracticeMatch) {
          if (match.player1.competitiveProfile) {
            await tx.competitiveProfile.update({
              where: { userId: match.player1Id },
              data: {
                overallMMR: player1MMRAfter,
                totalMatches: { increment: 1 },
                wins: player1Won ? { increment: 1 } : undefined,
                losses: player2Won ? { increment: 1 } : undefined,
                winStreak: player1Won ? { increment: 1 } : 0,
                bestWinStreak: player1Won
                  ? Math.max(match.player1.competitiveProfile.winStreak + 1, match.player1.competitiveProfile.bestWinStreak)
                  : undefined,
                rank: getRankFromMMR(player1MMRAfter),
              },
            });
          }

          if (match.player2.competitiveProfile) {
            await tx.competitiveProfile.update({
              where: { userId: match.player2Id },
              data: {
                overallMMR: player2MMRAfter,
                totalMatches: { increment: 1 },
                wins: player2Won ? { increment: 1 } : undefined,
                losses: player1Won ? { increment: 1 } : undefined,
                winStreak: player2Won ? { increment: 1 } : 0,
                bestWinStreak: player2Won
                  ? Math.max(match.player2.competitiveProfile.winStreak + 1, match.player2.competitiveProfile.bestWinStreak)
                  : undefined,
                rank: getRankFromMMR(player2MMRAfter),
              },
            });
          }

          await tx.mMRHistory.create({
            data: {
              userId: match.player1Id,
              matchId,
              topicSlug: match.topicSlug,
              mmrBefore: player1MMR,
              mmrAfter: player1MMRAfter,
              mmrChange: player1MMRChange,
              gameMode: match.gameMode,
              performance: JSON.stringify({ score: p1Correct, totalAnswered: p1Answered, accuracy: p1Accuracy }),
            },
          });
          await tx.mMRHistory.create({
            data: {
              userId: match.player2Id,
              matchId,
              topicSlug: match.topicSlug,
              mmrBefore: player2MMR,
              mmrAfter: player2MMRAfter,
              mmrChange: player2MMRChange,
              gameMode: match.gameMode,
              performance: JSON.stringify({ score: p2Correct, totalAnswered: p2Answered, accuracy: p2Accuracy }),
            },
          });
        }
      }, { timeout: 15000 });
    } catch (txError) {
      // Lost the race — another request already completed this match. Report it
      // as already-completed rather than 500 (idempotent from the caller's view).
      if (txError && typeof txError === 'object' && 'code' in txError && txError.code === 'ALREADY_COMPLETED') {
        return NextResponse.json({ status: 'already_completed' });
      }
      throw txError;
    }

    return NextResponse.json({ status: 'completed', winnerId });
  } catch (error) {
    console.error('Error completing match:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
