import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { calculateMMRChange, getRankFromMMR } from '@/lib/competitive-utils';
import { answerSubmissionSchema, parseBody } from '@/lib/validations';
import type { Prisma } from '@prisma/client';

interface MatchGameData {
  questions?: Array<{ answerIndex?: number; options?: string[]; [key: string]: unknown }>;
  player1QuestionIndex?: number;
  player2QuestionIndex?: number;
  player1Answers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean }>;
  player2Answers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean }>;
  aiDifficulty?: 'easy' | 'medium' | 'hard';
  isPracticeMatch?: boolean;
}

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
    const body = await request.json();
    const parsed = parseBody(answerSubmissionSchema, body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const { questionIndex, answerIndex, isSecondAttempt: _isSecondAttempt, playerId } = parsed.data;
    void _isSecondAttempt;



    // Fetch match
    const match = await prisma.competitiveMatch.findUnique({
      where: { id: matchId },
      include: {
        player1: {
          include: {
            competitiveProfile: true,
          },
        },
        player2: {
          include: {
            competitiveProfile: true,
          },
        },
      },
    });

    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    // Verify user is a participant
    const actualPlayerId = playerId || session.user.id; // Use provided playerId or session user
    const isPlayer1 = match.player1Id === actualPlayerId;
    const isPlayer2 = match.player2Id === actualPlayerId;
    
    if (!isPlayer1 && !isPlayer2) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Verify match is still in progress
    if (match.status !== 'IN_PROGRESS') {
      return NextResponse.json({ error: 'Match is not in progress' }, { status: 400 });
    }

    // Parse current game data
    const gameData = (match.gameData && typeof match.gameData === 'object'
      ? match.gameData
      : {}) as MatchGameData;
    const questions = gameData?.questions || [];
    let player1QuestionIndex = gameData?.player1QuestionIndex ?? 0;
    let player2QuestionIndex = gameData?.player2QuestionIndex ?? 0;
    let player1Score = match.player1Score;
    let player2Score = match.player2Score;

    // Get the current question index for this player
    const playerQuestionIndex = isPlayer1 ? player1QuestionIndex : player2QuestionIndex;



    // Check if question index matches this player's current question
    if (questionIndex !== playerQuestionIndex) {
      return NextResponse.json({ error: 'Invalid question index' }, { status: 400 });
    }

    // Check answer
    const currentQuestion = questions[questionIndex];
    const isCorrect = answerIndex === currentQuestion.answerIndex;

    // Track this answer in the player's answer history
    const answerRecord = { questionIndex, answerIndex, correct: isCorrect };
    if (isPlayer1) {
      if (!gameData.player1Answers) gameData.player1Answers = [];
      gameData.player1Answers.push(answerRecord);
    } else {
      if (!gameData.player2Answers) gameData.player2Answers = [];
      gameData.player2Answers.push(answerRecord);
    }

    // ---- ACCURACY_CHALLENGE mode: scored by accuracy, 5-min timer ----
    const isAccuracyMode = match.gameMode === 'ACCURACY_CHALLENGE';
    const ACCURACY_TOTAL_QUESTIONS = questions.length; // Use actual question count
    const ACCURACY_TIME_LIMIT_MS = 5 * 60 * 1000; // 5 minutes

    if (isAccuracyMode) {
      // In accuracy mode: +1 for correct, no penalty for wrong
      if (isCorrect) {
        if (isPlayer1) player1Score += 1;
        else player2Score += 1;
      }
      // (wrong answers don't change score - score = correct count)

      // Advance question index (stop at total questions)
      if (isPlayer1) {
        player1QuestionIndex = player1QuestionIndex + 1;
      } else {
        player2QuestionIndex = player2QuestionIndex + 1;
      }

      const p1Answered = gameData.player1Answers?.length || 0;
      const p2Answered = gameData.player2Answers?.length || 0;
      const bothDone = p1Answered >= ACCURACY_TOTAL_QUESTIONS && p2Answered >= ACCURACY_TOTAL_QUESTIONS;

      // Check timer expiry
      const elapsed = match.startedAt ? Date.now() - new Date(match.startedAt).getTime() : 0;
      const timerExpired = elapsed >= ACCURACY_TIME_LIMIT_MS;

      const matchComplete = bothDone || timerExpired;

      if (matchComplete) {
        const p1Accuracy = p1Answered > 0 ? player1Score / p1Answered : 0;
        const p2Accuracy = p2Answered > 0 ? player2Score / p2Answered : 0;

        let winnerId: string | null = null;
        if (p1Accuracy > p2Accuracy) winnerId = match.player1Id;
        else if (p2Accuracy > p1Accuracy) winnerId = match.player2Id;
        else if (p1Answered > p2Answered) winnerId = match.player1Id;
        else if (p2Answered > p1Answered) winnerId = match.player2Id;
        // else tie: winnerId stays null

        const player1MMR = match.player1MMRBefore || match.player1.competitiveProfile?.unitCircleMMR || 1000;
        const player2MMR = match.player2MMRBefore || match.player2.competitiveProfile?.unitCircleMMR || 1000;
        const player1TotalMatches = match.player1.competitiveProfile?.totalMatches || 0;
        const player2TotalMatches = match.player2.competitiveProfile?.totalMatches || 0;
        const player1Won = winnerId === match.player1Id;
        const player2Won = winnerId === match.player2Id;
        const player1MMRChange = winnerId ? calculateMMRChange(player1MMR, player2MMR, player1Won, player1TotalMatches) : 0;
        const player2MMRChange = winnerId ? calculateMMRChange(player2MMR, player1MMR, player2Won, player2TotalMatches) : 0;
        const player1MMRAfter = player1MMR + player1MMRChange;
        const player2MMRAfter = player2MMR + player2MMRChange;

        await prisma.competitiveMatch.update({
          where: { id: matchId },
          data: {
            status: 'COMPLETED',
            winnerId,
            completedAt: new Date(),
            player1Score,
            player2Score,
            gameData: {
              ...gameData,
              questions,
              player1QuestionIndex,
              player2QuestionIndex,
            } as unknown as Prisma.InputJsonValue,
            player1MMRAfter,
            player2MMRAfter,
          },
        });

        if (match.player1.competitiveProfile) {
          await prisma.competitiveProfile.update({
            where: { userId: match.player1Id },
            data: {
              unitCircleMMR: player1MMRAfter,
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
          await prisma.competitiveProfile.update({
            where: { userId: match.player2Id },
            data: {
              unitCircleMMR: player2MMRAfter,
              overallMMR: player2MMRAfter,
              totalMatches: { increment: 1 },
              wins: player2Won ? { increment: 1 } : undefined,
              losses: player1Won ? { increment: 1 } : undefined,
              winStreak: player2Won ? { increment: 1 } : 0,
              bestWinStreak: player2Won && match.player2.competitiveProfile
                ? Math.max(match.player2.competitiveProfile.winStreak + 1, match.player2.competitiveProfile.bestWinStreak)
                : undefined,
              rank: getRankFromMMR(player2MMRAfter),
            },
          });
        }

        await prisma.mMRHistory.create({
          data: {
            userId: match.player1Id,
            matchId,
            topicSlug: match.topicSlug,
            mmrBefore: player1MMR,
            mmrAfter: player1MMRAfter,
            mmrChange: player1MMRChange,
            gameMode: match.gameMode,
            performance: JSON.stringify({ score: player1Score, totalAnswered: p1Answered, accuracy: p1Accuracy }),
          },
        });
        await prisma.mMRHistory.create({
          data: {
            userId: match.player2Id,
            matchId,
            topicSlug: match.topicSlug,
            mmrBefore: player2MMR,
            mmrAfter: player2MMRAfter,
            mmrChange: player2MMRChange,
            gameMode: match.gameMode,
            performance: JSON.stringify({ score: player2Score, totalAnswered: p2Answered, accuracy: p2Accuracy }),
          },
        });

        return NextResponse.json({
          correct: isCorrect,
          matchComplete: true,
          winnerId,
          finalScores: { player1: player1Score, player2: player2Score },
          mmrChange: isPlayer1 ? player1MMRChange : player2MMRChange,
          newMMR: isPlayer1 ? player1MMRAfter : player2MMRAfter,
          accuracy: {
            player1: { correct: player1Score, total: p1Answered, pct: Math.round(p1Accuracy * 100) },
            player2: { correct: player2Score, total: p2Answered, pct: Math.round(p2Accuracy * 100) },
          },
        });
      }

      // Match continues
      await prisma.competitiveMatch.update({
        where: { id: matchId },
        data: {
          player1Score,
          player2Score,
          gameData: {
            ...gameData,
            questions,
            player1QuestionIndex,
            player2QuestionIndex,
          } as unknown as Prisma.InputJsonValue,
        },
      });

      const myAnswered = isPlayer1 ? (gameData.player1Answers?.length || 0) : (gameData.player2Answers?.length || 0);
      return NextResponse.json({
        correct: isCorrect,
        matchComplete: false,
        currentScore: isPlayer1 ? player1Score : player2Score,
        opponentScore: isPlayer1 ? player2Score : player1Score,
        questionsAnswered: myAnswered,
        totalQuestions: ACCURACY_TOTAL_QUESTIONS,
      });
    }

    // ---- Standard SPEED_RACE mode (first to 10) ----
    // Award/deduct points - 1 point for correct, -1 for incorrect
    if (isCorrect) {
      if (isPlayer1) {
        player1Score += 1;
      } else {
        player2Score += 1;
      }
    } else {
      if (isPlayer1) {
        player1Score = Math.max(0, player1Score - 1); // Don't go below 0
      } else {
        player2Score = Math.max(0, player2Score - 1); // Don't go below 0
      }
    }

    // Check if either player has reached 10 points (winner!)
    const matchComplete = player1Score >= 10 || player2Score >= 10;
    let winnerId = match.winnerId;
    let completedAt = match.completedAt;

    // Advance this player to the next question
    if (isPlayer1) {
      player1QuestionIndex = (player1QuestionIndex + 1) % questions.length;
    } else {
      player2QuestionIndex = (player2QuestionIndex + 1) % questions.length;
    }

    if (matchComplete) {
      const newStatus = 'COMPLETED' as const;
      completedAt = new Date();
      
      // Determine winner based on who reached 10 first
      if (player1Score >= 10) {
        winnerId = match.player1Id;
      } else if (player2Score >= 10) {
        winnerId = match.player2Id;
      }

      // Calculate MMR changes
      const player1MMR = match.player1MMRBefore || match.player1.competitiveProfile?.unitCircleMMR || 1000;
      const player2MMR = match.player2MMRBefore || match.player2.competitiveProfile?.unitCircleMMR || 1000;

      const player1TotalMatches = match.player1.competitiveProfile?.totalMatches || 0;
      const player2TotalMatches = match.player2.competitiveProfile?.totalMatches || 0;

      const player1Won = winnerId === match.player1Id;
      const player2Won = winnerId === match.player2Id;

      const player1MMRChange = calculateMMRChange(player1MMR, player2MMR, player1Won, player1TotalMatches);
      const player2MMRChange = calculateMMRChange(player2MMR, player1MMR, player2Won, player2TotalMatches);

      const player1MMRAfter = player1MMR + player1MMRChange;
      const player2MMRAfter = player2MMR + player2MMRChange;

      // Update match with final data
      await prisma.competitiveMatch.update({
        where: { id: matchId },
        data: {
          status: newStatus,
          winnerId,
          completedAt,
          player1Score,
          player2Score,
          gameData: {
            questions,
            player1QuestionIndex,
            player2QuestionIndex,
            player1Answers: gameData.player1Answers || [],
            player2Answers: gameData.player2Answers || [],
            ...(gameData?.aiDifficulty && { aiDifficulty: gameData.aiDifficulty }),
            ...(gameData?.isPracticeMatch && { isPracticeMatch: gameData.isPracticeMatch }),
          } as unknown as Prisma.InputJsonValue,
          player1MMRAfter,
          player2MMRAfter,
        },
      });

      // Update both players' competitive profiles
      await prisma.competitiveProfile.update({
        where: { userId: match.player1Id },
        data: {
          unitCircleMMR: player1MMRAfter,
          overallMMR: player1MMRAfter, // For now, overall = unit circle
          totalMatches: { increment: 1 },
          wins: player1Won ? { increment: 1 } : undefined,
          losses: player2Won ? { increment: 1 } : undefined,
          winStreak: player1Won ? { increment: 1 } : 0,
          bestWinStreak: player1Won && match.player1.competitiveProfile ? 
            Math.max(match.player1.competitiveProfile.winStreak + 1, match.player1.competitiveProfile.bestWinStreak) : 
            undefined,
          rank: getRankFromMMR(player1MMRAfter),
        },
      });

      await prisma.competitiveProfile.update({
        where: { userId: match.player2Id },
        data: {
          unitCircleMMR: player2MMRAfter,
          overallMMR: player2MMRAfter,
          totalMatches: { increment: 1 },
          wins: player2Won ? { increment: 1 } : undefined,
          losses: player1Won ? { increment: 1 } : undefined,
          winStreak: player2Won ? { increment: 1 } : 0,
          bestWinStreak: player2Won && match.player2.competitiveProfile ? 
            Math.max(match.player2.competitiveProfile.winStreak + 1, match.player2.competitiveProfile.bestWinStreak) : 
            undefined,
          rank: getRankFromMMR(player2MMRAfter),
        },
      });

      // Create MMR history records
      await prisma.mMRHistory.create({
        data: {
          userId: match.player1Id,
          matchId,
          topicSlug: 'unit-circle',
          mmrBefore: player1MMR,
          mmrAfter: player1MMRAfter,
          mmrChange: player1MMRChange,
          gameMode: match.gameMode,
          performance: JSON.stringify({
            score: player1Score,
            totalQuestions: questions.length,
            accuracy: player1Score / questions.length,
          }),
        },
      });

      await prisma.mMRHistory.create({
        data: {
          userId: match.player2Id,
          matchId,
          topicSlug: 'unit-circle',
          mmrBefore: player2MMR,
          mmrAfter: player2MMRAfter,
          mmrChange: player2MMRChange,
          gameMode: match.gameMode,
          performance: JSON.stringify({
            score: player2Score,
            totalQuestions: questions.length,
            accuracy: player2Score / questions.length,
          }),
        },
      });

      return NextResponse.json({
        correct: isCorrect,
        matchComplete: true,
        winnerId,
        finalScores: { player1: player1Score, player2: player2Score },
        mmrChange: isPlayer1 ? player1MMRChange : player2MMRChange,
        newMMR: isPlayer1 ? player1MMRAfter : player2MMRAfter,
      });
    } else {
      // Match continues - just update scores and player's question index
      await prisma.competitiveMatch.update({
        where: { id: matchId },
        data: {
          player1Score,
          player2Score,
          gameData: {
            questions,
            player1QuestionIndex,
            player2QuestionIndex,
            player1Answers: gameData.player1Answers || [],
            player2Answers: gameData.player2Answers || [],
            ...(gameData?.aiDifficulty && { aiDifficulty: gameData.aiDifficulty }),
            ...(gameData?.isPracticeMatch && { isPracticeMatch: gameData.isPracticeMatch }),
          } as unknown as Prisma.InputJsonValue,
        },
      });

      return NextResponse.json({
        correct: isCorrect,
        matchComplete: false,
        currentScore: isPlayer1 ? player1Score : player2Score,
        opponentScore: isPlayer1 ? player2Score : player1Score,
      });
    }
  } catch (error) {
    console.error('Error submitting answer:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}