import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: matchId } = await params;

    // Fetch match with player details
    const match = await prisma.competitiveMatch.findUnique({
      where: { id: matchId },
      include: {
        player1: {
          select: {
            id: true,
            name: true,
            avatarData: true,
          },
        },
        player2: {
          select: {
            id: true,
            name: true,
            avatarData: true,
          },
        },
      },
    });

    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    // Verify user is a participant
    if (match.player1Id !== session.user.id && match.player2Id !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Parse game data from JSON
    const gameData = match.gameData as any;

    // Format response
    const response = {
      match: {
        id: match.id,
        player1Id: match.player1Id,
        player2Id: match.player2Id,
        player1Name: match.player1.name || 'Player 1',
        player2Name: match.player2.name || 'Player 2',
        player1Avatar: match.player1.avatarData,
        player2Avatar: match.player2.avatarData,
        currentQuestionIndex: gameData?.currentQuestionIndex || 0,
        questions: gameData?.questions || [],
        player1Score: match.player1Score,
        player2Score: match.player2Score,
        player1Answers: gameData?.player1Answers || [],
        player2Answers: gameData?.player2Answers || [],
        status: match.status,
        winnerId: match.winnerId,
        startedAt: match.startedAt?.toISOString(),
        completedAt: match.completedAt?.toISOString(),
        player1MMRBefore: match.player1MMRBefore,
        player2MMRBefore: match.player2MMRBefore,
        player1MMRAfter: match.player1MMRAfter,
        player2MMRAfter: match.player2MMRAfter,
      },
      currentUserId: session.user.id,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching match state:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
