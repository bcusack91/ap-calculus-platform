import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { checkAnswer, UNIT_CIRCLE_POSITIONS, calculateMMRChange, getRankFromMMR } from '@/lib/competitive-utils';
import { simulateAIAnswer, isAIOpponent } from '@/lib/ai-opponent';

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
    const { questionIndex, answerIndex, isSecondAttempt = false } = body;

    console.log('Answer submission:', { matchId, questionIndex, answerIndex, isSecondAttempt });

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
    const isPlayer1 = match.player1Id === session.user.id;
    const isPlayer2 = match.player2Id === session.user.id;
    
    if (!isPlayer1 && !isPlayer2) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Verify match is still in progress
    if (match.status !== 'IN_PROGRESS') {
      return NextResponse.json({ error: 'Match is not in progress' }, { status: 400 });
    }

    // Parse current game data
    const gameData = match.gameData as any;
    const questions = gameData?.questions || [];
    const currentQuestionIndex = gameData?.currentQuestionIndex || 0;
    let player1AnsweredCurrent = gameData?.player1AnsweredCurrent || false;
    let player2AnsweredCurrent = gameData?.player2AnsweredCurrent || false;
    let player1Score = match.player1Score;
    let player2Score = match.player2Score;

    console.log('Game data:', { currentQuestionIndex, questionIndex, questions: questions.length });

    // Check if question index matches
    if (questionIndex !== currentQuestionIndex) {
      return NextResponse.json({ error: 'Invalid question index' }, { status: 400 });
    }

    // Check if this player already answered the current question
    const alreadyAnswered = isPlayer1 ? player1AnsweredCurrent : player2AnsweredCurrent;
    
    if (alreadyAnswered) {
      console.log('Player already answered this question');
      return NextResponse.json({ error: 'Already answered this question' }, { status: 400 });
    }

    // Check answer
    const currentQuestion = questions[questionIndex];
    console.log('Checking answer:', { answerIndex, correctIndex: currentQuestion.answerIndex });
    const isCorrect = answerIndex === currentQuestion.answerIndex;

    console.log('Answer is correct:', isCorrect);

    // Mark that this player has answered the current question
    if (isPlayer1) {
      player1AnsweredCurrent = true;
    } else {
      player2AnsweredCurrent = true;
    }

    // Award/deduct points - 1 point for correct, -1 for incorrect
    if (isCorrect) {
      if (isPlayer1) {
        player1Score += 1;
      } else {
        player2Score += 1;
      }
      console.log('Points awarded: 1');
    } else {
      if (isPlayer1) {
        player1Score = Math.max(0, player1Score - 1); // Don't go below 0
      } else {
        player2Score = Math.max(0, player2Score - 1); // Don't go below 0
      }
      console.log('Points deducted: -1');
    }

    // Check if either player has reached 10 points (winner!)
    const matchComplete = player1Score >= 10 || player2Score >= 10;
    let winnerId = match.winnerId;
    let completedAt = match.completedAt;

    if (matchComplete) {
      const newStatus = 'COMPLETED' as const;
      completedAt = new Date();
      
      // Determine winner based on who reached 10 first
      if (player1Score >= 10) {
        winnerId = match.player1Id;
      } else if (player2Score >= 10) {
        winnerId = match.player2Id;
      }
      // Note: Both can't reach 10 in same turn due to turn-based nature

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
            currentQuestionIndex,
            player1AnsweredCurrent,
            player2AnsweredCurrent,
            ...(gameData?.aiDifficulty && { aiDifficulty: gameData.aiDifficulty }),
            ...(gameData?.isPracticeMatch && { isPracticeMatch: gameData.isPracticeMatch }),
          },
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
      // Match continues - check if both players answered and move to next question
      const bothAnswered = player1AnsweredCurrent && player2AnsweredCurrent;
      let newQuestionIndex = currentQuestionIndex;
      let flagsToSave = {
        player1AnsweredCurrent,
        player2AnsweredCurrent,
      };
      
      // Move to next question if both answered
      if (bothAnswered) {
        newQuestionIndex = currentQuestionIndex + 1;
        
        // If we've reached the end of questions, cycle back to start
        if (newQuestionIndex >= questions.length) {
          newQuestionIndex = 0;
        }
        
        // Reset answered flags for the new question
        flagsToSave.player1AnsweredCurrent = false;
        flagsToSave.player2AnsweredCurrent = false;
      }
      
      // Just update the match with new scores and possibly new question index
      await prisma.competitiveMatch.update({
        where: { id: matchId },
        data: {
          player1Score,
          player2Score,
          gameData: {
            questions,
            currentQuestionIndex: newQuestionIndex,
            player1AnsweredCurrent: flagsToSave.player1AnsweredCurrent,
            player2AnsweredCurrent: flagsToSave.player2AnsweredCurrent,
            ...(gameData?.aiDifficulty && { aiDifficulty: gameData.aiDifficulty }),
            ...(gameData?.isPracticeMatch && { isPracticeMatch: gameData.isPracticeMatch }),
          },
        },
      });

      // If opponent is AI and hasn't answered this question yet, simulate AI answer
      const opponentAnsweredCurrent = isPlayer1 ? flagsToSave.player2AnsweredCurrent : flagsToSave.player1AnsweredCurrent;
      const isOpponentAI = isAIOpponent(
        isPlayer1 ? match.player2Id : match.player1Id,
        isPlayer1 ? match.player2.email : match.player1.email
      )

      if (isOpponentAI && !opponentAnsweredCurrent) {
        // Schedule AI answer asynchronously (don't await - let it happen in background)
        const aiDifficulty = gameData?.aiDifficulty || 'medium'
        const correctAnswerIndex = questions[currentQuestionIndex].answerIndex
        
        setTimeout(async () => {
          try {
            const aiAnswer = simulateAIAnswer(
              currentQuestionIndex,
              correctAnswerIndex,
              aiDifficulty,
              UNIT_CIRCLE_POSITIONS.length
            )

            if (aiAnswer.shouldAnswer && aiAnswer.answerIndex !== null) {
              // Re-fetch latest match state
              const latestMatch = await prisma.competitiveMatch.findUnique({
                where: { id: matchId }
              })

              if (!latestMatch || latestMatch.status !== 'IN_PROGRESS') return

              const latestGameData = latestMatch.gameData as any
              const latestQuestionIndex = latestGameData?.currentQuestionIndex || 0
              
              // Only answer if we're still on the same question
              if (latestQuestionIndex !== currentQuestionIndex) return
              
              // Check if AI hasn't already answered
              const aiAnsweredFlag = isPlayer1 ? latestGameData?.player2AnsweredCurrent : latestGameData?.player1AnsweredCurrent
              if (aiAnsweredFlag) return

              // Calculate AI score change
              let aiScore = isPlayer1 ? latestMatch.player2Score : latestMatch.player1Score
              if (aiAnswer.isCorrect) {
                aiScore += 1
              } else {
                aiScore = Math.max(0, aiScore - 1)
              }

              // Update scores and mark AI as answered
              const newP1Score = isPlayer1 ? latestMatch.player1Score : aiScore
              const newP2Score = isPlayer1 ? aiScore : latestMatch.player2Score
              const newP1AnsweredCurrent = isPlayer1 ? latestGameData?.player1AnsweredCurrent : true
              const newP2AnsweredCurrent = isPlayer1 ? true : latestGameData?.player2AnsweredCurrent

              // Check if both players have now answered
              const bothAnsweredNow = newP1AnsweredCurrent && newP2AnsweredCurrent
              let nextQuestionIndex = latestQuestionIndex
              let nextP1AnsweredCurrent = newP1AnsweredCurrent
              let nextP2AnsweredCurrent = newP2AnsweredCurrent
              
              if (bothAnsweredNow) {
                // Move to next question and reset flags
                nextQuestionIndex = (latestQuestionIndex + 1) % questions.length
                nextP1AnsweredCurrent = false
                nextP2AnsweredCurrent = false
              }

              await prisma.competitiveMatch.update({
                where: { id: matchId },
                data: {
                  player1Score: newP1Score,
                  player2Score: newP2Score,
                  gameData: {
                    ...latestGameData,
                    currentQuestionIndex: nextQuestionIndex,
                    player1AnsweredCurrent: nextP1AnsweredCurrent,
                    player2AnsweredCurrent: nextP2AnsweredCurrent,
                  },
                },
              })
            }
          } catch (error) {
            console.error('Error processing AI answer:', error)
          }
        }, 800) // Small delay before AI answers (800ms minimum)
      }

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