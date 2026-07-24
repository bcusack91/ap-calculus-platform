import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { parseBody } from '@/lib/validations';
import { publicDisplayName } from '@/lib/display-name';
import {
  POWER_UPS,
  emptyPlayerPowerUps,
  pruneEffects,
  type PowerUpId,
  type PowerUpsState,
} from '@/lib/chaos-powerups';
import type { Prisma } from '@prisma/client';

const powerUpUseSchema = z.object({
  powerUpId: z.enum([
    'ink-splat',
    'screen-flip',
    'slippery',
    'fog',
    'earthquake',
    'blackout',
    'chaos-storm',
    'shield',
    'reflect',
    'fifty-fifty',
    'double-points',
  ]),
  // Only honored in AI practice matches (lets the client fire the bot's items,
  // mirroring the answer route's playerId rule).
  playerId: z.string().optional(),
});

interface MatchGameData {
  questions?: Array<{ answerIndex?: number; options?: string[] }>;
  player1QuestionIndex?: number;
  player2QuestionIndex?: number;
  isPracticeMatch?: boolean;
  powerUps?: PowerUpsState;
  [key: string]: unknown;
}

/**
 * Use a Chaos Mode power-up. Server-authoritative: validates mode + ownership
 * inside the same row-locked transaction pattern as the answer route, consumes
 * the item, and applies the effect:
 *  - attacks   → appended to the OPPONENT's active effects (delivered by their
 *                next 500ms poll) unless their shield eats it
 *  - shield    → arms the player's shield
 *  - 50/50     → returns two wrong option indices for the player's CURRENT question
 *  - double    → next correct answer scores 2 (consumed by the answer route)
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: matchId } = await params;
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const parsed = parseBody(powerUpUseSchema, body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const { powerUpId, playerId } = parsed.data;

    const result = await prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT id FROM "CompetitiveMatch" WHERE id = ${matchId} FOR UPDATE`;

      const match = await tx.competitiveMatch.findUnique({
        where: { id: matchId },
        select: {
          id: true,
          status: true,
          gameMode: true,
          player1Id: true,
          player2Id: true,
          player1: { select: { name: true } },
          player2: { select: { name: true } },
          gameData: true,
        },
      });
      if (!match) return { error: 'Match not found', status: 404 };
      if (match.gameMode !== 'CHAOS') return { error: 'Power-ups are only available in Chaos Mode', status: 400 };
      if (match.status !== 'IN_PROGRESS') return { error: 'Match is not in progress', status: 400 };

      const gameData = (match.gameData && typeof match.gameData === 'object'
        ? match.gameData
        : {}) as MatchGameData;

      // Bind to the authenticated user except for the practice-match bot.
      const actualPlayerId = (playerId && gameData.isPracticeMatch) ? playerId : session.user.id;
      const isPlayer1 = match.player1Id === actualPlayerId;
      const isPlayer2 = match.player2Id === actualPlayerId;
      if (!isPlayer1 && !isPlayer2) return { error: 'Unauthorized', status: 403 };

      if (!gameData.powerUps) {
        gameData.powerUps = { player1: emptyPlayerPowerUps(), player2: emptyPlayerPowerUps() };
      }
      const mine = isPlayer1 ? gameData.powerUps.player1 : gameData.powerUps.player2;
      const theirs = isPlayer1 ? gameData.powerUps.player2 : gameData.powerUps.player1;

      const idx = mine.inventory.indexOf(powerUpId as PowerUpId);
      if (idx === -1) return { error: "You don't have that power-up", status: 400 };
      mine.inventory.splice(idx, 1);

      const def = POWER_UPS[powerUpId as PowerUpId];
      const now = Date.now();
      let outcome: 'applied' | 'blocked' | 'reflected' = 'applied';
      let fiftyFifty: { questionIndex: number; eliminated: number[] } | null = null;

      const myName = isPlayer1
        ? publicDisplayName(match.player1.name, 'Opponent')
        : publicDisplayName(match.player2.name, 'Opponent');
      const theirName = isPlayer1
        ? publicDisplayName(match.player2.name, 'Opponent')
        : publicDisplayName(match.player1.name, 'Opponent');
      const makeEffect = (from: string) => ({
        id: `${powerUpId}-${now}-${Math.random().toString(36).slice(2, 8)}`,
        type: def.id,
        from,
        startedAt: now,
        durationMs: def.durationMs ?? 3000,
      });

      if (def.kind === 'attack') {
        if (theirs.shield) {
          // Shield eats the attack.
          theirs.shield = false;
          outcome = 'blocked';
        } else if (theirs.reflect) {
          // Reflect bounces it straight back onto the attacker's own screen.
          theirs.reflect = false;
          mine.effects = [...pruneEffects(mine.effects, now), makeEffect(theirName)];
          outcome = 'reflected';
        } else {
          theirs.effects = [...pruneEffects(theirs.effects, now), makeEffect(myName)];
        }
      } else if (powerUpId === 'shield') {
        mine.shield = true;
      } else if (powerUpId === 'reflect') {
        mine.reflect = true;
      } else if (powerUpId === 'double-points') {
        mine.doubleNext = true;
      } else if (powerUpId === 'fifty-fifty') {
        // Eliminate two wrong options on the player's CURRENT question.
        const qIdx = (isPlayer1 ? gameData.player1QuestionIndex : gameData.player2QuestionIndex) ?? 0;
        const q = gameData.questions?.[qIdx];
        const optionCount = q?.options?.length ?? 0;
        const correct = q?.answerIndex;
        if (!q || typeof correct !== 'number' || optionCount < 3) {
          // Can't apply (e.g. unit-circle question) — refund the item.
          mine.inventory.push('fifty-fifty');
          return { error: "50/50 can't be used on this question", status: 400 };
        }
        const wrong = Array.from({ length: optionCount }, (_, i) => i).filter((i) => i !== correct);
        // Shuffle and keep two.
        for (let i = wrong.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [wrong[i], wrong[j]] = [wrong[j], wrong[i]];
        }
        fiftyFifty = { questionIndex: qIdx, eliminated: wrong.slice(0, 2).sort((a, b) => a - b) };
        mine.fiftyFifty = fiftyFifty;
      }

      // Prune my expired effects too, so gameData stays small.
      mine.effects = pruneEffects(mine.effects, now);

      await tx.competitiveMatch.update({
        where: { id: matchId },
        data: { gameData: gameData as unknown as Prisma.InputJsonValue },
      });

      return {
        data: {
          used: powerUpId,
          outcome,
          inventory: mine.inventory,
          ...(fiftyFifty ? { fiftyFifty } : {}),
        },
        status: 200,
      };
    }, { timeout: 15000 });

    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }
    return NextResponse.json(result.data, { status: result.status });
  } catch (error) {
    console.error(`Error using power-up (match ${matchId}):`, error);
    return NextResponse.json({ error: 'Failed to use power-up' }, { status: 500 });
  }
}
