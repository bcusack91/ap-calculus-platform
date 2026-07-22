/**
 * Chaos Mode power-ups — shared between the server (drop rolls in the answer
 * route, effect application in the powerup route) and the client (inventory
 * bar + effect overlays). No server-only imports: this module must stay
 * client-safe.
 *
 * Design: Mario Kart-style rubber-banding. Every answered question rolls for
 * an item; the TRAILING player rolls more often and from a stronger table, so
 * comebacks stay possible and nobody snowballs. Attacks are brief visual
 * chaos on the opponent's screen; self items help you directly. Chaos Mode is
 * unranked (no MMR / assignment impact), so none of this touches fairness of
 * the ranked queues.
 */

export type PowerUpId =
  | 'ink-splat'
  | 'screen-flip'
  | 'slippery'
  | 'fog'
  | 'shield'
  | 'fifty-fifty'
  | 'double-points';

export type PowerUpKind = 'attack' | 'self';

export interface PowerUpDef {
  id: PowerUpId;
  kind: PowerUpKind;
  name: string;
  icon: string;
  description: string;
  /** Visual-effect duration for attacks (ms). Self items are instant. */
  durationMs?: number;
}

export const POWER_UPS: Record<PowerUpId, PowerUpDef> = {
  'ink-splat': {
    id: 'ink-splat',
    kind: 'attack',
    name: 'Ink Splat',
    icon: '🖋️',
    description: "Splatters ink across your opponent's screen for 4 seconds.",
    durationMs: 4000,
  },
  'screen-flip': {
    id: 'screen-flip',
    kind: 'attack',
    name: 'Flip',
    icon: '🙃',
    description: "Turns your opponent's screen upside down for 3 seconds.",
    durationMs: 3000,
  },
  slippery: {
    id: 'slippery',
    kind: 'attack',
    name: 'Slippery Answers',
    icon: '🌀',
    description: "Your opponent's answer choices keep sliding around for 3 seconds.",
    durationMs: 3000,
  },
  fog: {
    id: 'fog',
    kind: 'attack',
    name: 'Fog',
    icon: '🌫️',
    description: "Blurs your opponent's question for 2.5 seconds.",
    durationMs: 2500,
  },
  shield: {
    id: 'shield',
    kind: 'self',
    name: 'Shield',
    icon: '🛡️',
    description: 'Blocks the next attack thrown at you.',
  },
  'fifty-fifty': {
    id: 'fifty-fifty',
    kind: 'self',
    name: '50/50',
    icon: '⚖️',
    description: 'Removes two wrong answers on your current question.',
  },
  'double-points': {
    id: 'double-points',
    kind: 'self',
    name: 'Double Points',
    icon: '⚡',
    description: 'Your next correct answer counts double.',
  },
};

/** An attack effect applied to a player, delivered via gameData polling. */
export interface ActiveEffect {
  id: string; // unique per activation (for client de-dupe)
  type: PowerUpId;
  from: string; // attacker display name
  startedAt: number; // epoch ms (server clock)
  durationMs: number;
}

export interface PlayerPowerUpState {
  inventory: PowerUpId[];
  effects: ActiveEffect[];
  shield?: boolean;
  doubleNext?: boolean;
  /** 50/50: wrong options grayed out for a specific question (self-visible only). */
  fiftyFifty?: { questionIndex: number; eliminated: number[] };
}

export interface PowerUpsState {
  player1: PlayerPowerUpState;
  player2: PlayerPowerUpState;
}

export const MAX_INVENTORY = 2;

export const emptyPlayerPowerUps = (): PlayerPowerUpState => ({ inventory: [], effects: [] });

/**
 * Roll for an item drop after answering a question.
 * `deficit` = opponentScore − myScore (positive when trailing).
 *
 * Drop chance: 35% base, +10% per point behind (max 80%); capped at 25% when
 * leading. Weight tables shift Mario Kart-style: far behind → heavy-hitters
 * (ink, flip, double points, 50/50); leading → mild utility only.
 */
export function rollPowerUpDrop(deficit: number, rng: () => number = Math.random): PowerUpId | null {
  const chance = deficit > 0
    ? Math.min(0.35 + 0.10 * deficit, 0.8)
    : deficit === 0 ? 0.35 : 0.25;
  if (rng() >= chance) return null;

  let table: Array<[PowerUpId, number]>;
  if (deficit >= 3) {
    // Far behind: comeback kit.
    table = [
      ['ink-splat', 22], ['screen-flip', 18], ['double-points', 20],
      ['fifty-fifty', 20], ['slippery', 12], ['shield', 8],
    ];
  } else if (deficit >= 1) {
    // Slightly behind: balanced.
    table = [
      ['ink-splat', 14], ['screen-flip', 12], ['double-points', 12],
      ['fifty-fifty', 14], ['slippery', 18], ['fog', 16], ['shield', 14],
    ];
  } else {
    // Even or leading: mild utility, no heavy hitters.
    table = [
      ['fog', 35], ['slippery', 25], ['shield', 30], ['fifty-fifty', 10],
    ];
  }

  const total = table.reduce((s, [, w]) => s + w, 0);
  let r = rng() * total;
  for (const [id, w] of table) {
    r -= w;
    if (r < 0) return id;
  }
  return table[table.length - 1][0];
}

/** Effects still visually active at `now`. */
export function activeEffects(effects: ActiveEffect[] | undefined, now: number): ActiveEffect[] {
  return (effects || []).filter((e) => e.startedAt + e.durationMs > now);
}

/** Drop expired effects so gameData doesn't grow unboundedly. */
export function pruneEffects(effects: ActiveEffect[] | undefined, now: number): ActiveEffect[] {
  return activeEffects(effects, now);
}
