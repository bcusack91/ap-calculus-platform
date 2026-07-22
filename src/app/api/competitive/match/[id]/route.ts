import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { isAIOpponent } from '@/lib/ai-opponent';
import { publicDisplayName } from '@/lib/display-name';
import { sweepStaleMatchById, STALE_MATCH_MS } from '../../_lib/sweep-stale-matches';

interface MatchGameData {
  player1QuestionIndex?: number;
  player2QuestionIndex?: number;
  questions?: Array<Record<string, unknown>>;
  isPracticeMatch?: boolean;
  powerUps?: unknown;
  [key: string]: unknown;
}

// Fields on a question that reveal the answer. These must never be sent to the
// client for a real (ranked) match — the opponent polls the same endpoint and
// could read the key straight out of the JSON to auto-win. We only keep them
// for AI practice matches, where the "opponent" is a client-side bot that needs
// the answer to simulate moves and where no real MMR is at stake.
function stripAnswerFields(
  questions: Array<Record<string, unknown>>
): Array<Record<string, unknown>> {
  return questions.map((q) => {
    if (!q || typeof q !== 'object') return q;
    const { answerIndex: _ai, correctAnswer: _ca, explanation: _ex, ...safe } = q;
    void _ai;
    void _ca;
    void _ex;
    return safe;
  });
}

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

    const matchInclude = {
      player1: {
        select: {
          id: true,
          name: true,
          email: true,
          avatarData: true,
        },
      },
      player2: {
        select: {
          id: true,
          name: true,
          email: true,
          avatarData: true,
        },
      },
    } as const;

    // Fetch match with player details
    let match = await prisma.competitiveMatch.findUnique({
      where: { id: matchId },
      include: matchInclude,
    });

    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    // Verify user is a participant
    if (match.player1Id !== session.user.id && match.player2Id !== session.user.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Abandoned-match sweep: if this match has been IN_PROGRESS past the stale
    // threshold (a player disconnected and never finished it), finalize it here
    // — COMPLETED, no winner, no MMR — so it doesn't linger and block requeueing.
    // The sweep is race-safe (locked transaction + re-check); if it actually
    // transitioned the match, re-read so the response reflects the final state.
    if (
      match.status === 'IN_PROGRESS' &&
      match.startedAt &&
      Date.now() - new Date(match.startedAt).getTime() >= STALE_MATCH_MS
    ) {
      const swept = await sweepStaleMatchById(matchId);
      if (swept) {
        const refreshed = await prisma.competitiveMatch.findUnique({
          where: { id: matchId },
          include: matchInclude,
        });
        if (refreshed) match = refreshed;
      }
    }

    // Parse game data from JSON
    const gameData = (match.gameData && typeof match.gameData === 'object'
      ? match.gameData
      : {}) as MatchGameData;

    // For real (ranked) matches that are still IN_PROGRESS, scrub the
    // answer-revealing fields from every question before they leave the server.
    // The opponent hits this same GET endpoint, so anything we ship here is
    // readable by them. We keep the answers when:
    //   - the match is COMPLETED (review screen needs them; nothing left to cheat), or
    //   - it's an AI practice match (client-side bot needs them; no MMR at stake).
    const rawQuestions = Array.isArray(gameData?.questions) ? gameData.questions : [];
    const isPracticeMatch = gameData?.isPracticeMatch === true;
    const matchOver = match.status === 'COMPLETED';
    const safeQuestions = (isPracticeMatch || matchOver)
      ? rawQuestions
      : stripAnswerFields(rawQuestions);

    // The opponent's per-question answer history (player1Answers/player2Answers)
    // does NOT contain the correct index — only what was submitted — so it is
    // safe to forward. But `gameData.questions` would re-expose the answers, so
    // overwrite it with the scrubbed copy in the forwarded gameData too.
    const safeGameData = { ...gameData, questions: safeQuestions };

    // CHAOS: a player's 50/50 result (two eliminated WRONG indices) is answer
    // intel for a question the OTHER player may later see (both cycle the same
    // pool) — scrub it from the copy of powerUps sent to their opponent.
    // (Everything else in powerUps — inventories, effects, shields — is fair
    // for both sides to see.)
    if (!matchOver && safeGameData.powerUps && typeof safeGameData.powerUps === 'object') {
      const pu = safeGameData.powerUps as {
        player1?: { fiftyFifty?: unknown };
        player2?: { fiftyFifty?: unknown };
      };
      const viewerIsPlayer1 = session.user.id === match.player1Id;
      safeGameData.powerUps = {
        ...pu,
        player1: pu.player1 && !viewerIsPlayer1 ? { ...pu.player1, fiftyFifty: undefined } : pu.player1,
        player2: pu.player2 && viewerIsPlayer1 ? { ...pu.player2, fiftyFifty: undefined } : pu.player2,
      } as typeof safeGameData.powerUps;
    }

    // Format response
    const response = {
      match: {
        id: match.id,
        player1Id: match.player1Id,
        player2Id: match.player2Id,
        // Stranger matchups: never expose a full real name to a ranked opponent.
        // First-name + last-initial only (publicDisplayName); emails never leak.
        player1Name: publicDisplayName(match.player1.name, 'Player 1'),
        player2Name: publicDisplayName(match.player2.name, 'Player 2'),
        // Booleans instead of raw emails (#6): the client only needs to know
        // whether each side is an AI bot (to drive the local bot simulation).
        // Leaking a stranger's email to their ranked opponent is not acceptable.
        player1IsAI: isAIOpponent(match.player1Id, match.player1.email),
        player2IsAI: isAIOpponent(match.player2Id, match.player2.email),
        player1Avatar: match.player1.avatarData,
        player2Avatar: match.player2.avatarData,
        player1QuestionIndex: gameData?.player1QuestionIndex ?? 0,
        player2QuestionIndex: gameData?.player2QuestionIndex ?? 0,
        questions: safeQuestions,
        player1Score: match.player1Score,
        player2Score: match.player2Score,
        gameData: safeGameData, // Include gameData (answers scrubbed for ranked) for AI difficulty
        gameMode: match.gameMode,
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
