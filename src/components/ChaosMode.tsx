'use client';

/**
 * Chaos Mode client pieces: the floating power-up inventory bar, the ink-splat
 * overlay, and small helpers. Effects arrive via the match page's 500ms
 * gameData polling and are rendered by the match page using these building
 * blocks. Gameplay effects always apply regardless of prefers-reduced-motion —
 * only decorative animation is suppressed (via Tailwind motion-reduce:
 * variants), so reduced-motion players are neither immune to attacks nor
 * shown a placeholder instead of the real effect.
 */

import { useEffect, useMemo, useState } from 'react';
import { POWER_UPS, type ActiveEffect, type PowerUpId } from '@/lib/chaos-powerups';

/** Re-render ticker while any effect is live so overlays expire on time. */
export function useChaosNow(effects: ActiveEffect[] | undefined): number {
  const [now, setNow] = useState(() => Date.now());
  const anyActive = (effects || []).some((e) => e.startedAt + e.durationMs > now);
  useEffect(() => {
    if (!anyActive) return;
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, [anyActive]);
  return now;
}

// Deterministic pseudo-random blob placement per effect id (stable across renders).
function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Ink blobs covering the play area; pointer-events-none so play continues. */
export function InkSplatOverlay({ effect, now }: { effect: ActiveEffect; now: number }) {
  const blobs = useMemo(() => {
    const seed = hashStr(effect.id);
    const rand = (i: number) => ((Math.imul(seed + i * 2654435761, 1103515245) >>> 8) % 1000) / 1000;
    return Array.from({ length: 5 }, (_, i) => ({
      left: 5 + rand(i * 3) * 70,
      top: 5 + rand(i * 3 + 1) * 65,
      size: 90 + rand(i * 3 + 2) * 130,
      rotate: rand(i * 7) * 360,
    }));
  }, [effect.id]);

  // Fade out over the final second.
  const remaining = effect.startedAt + effect.durationMs - now;
  const opacity = Math.max(0, Math.min(1, remaining / 1000));

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" style={{ opacity }} aria-hidden>
      {blobs.map((b, i) => (
        <svg
          key={i}
          viewBox="0 0 100 100"
          className="absolute"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: b.size,
            height: b.size,
            transform: `rotate(${b.rotate}deg)`,
          }}
        >
          <path
            d="M50 8 C68 4 88 16 90 34 C92 48 84 52 88 64 C92 78 78 92 62 90 C50 88 48 94 38 92 C22 90 8 78 12 62 C15 52 8 46 12 34 C16 18 34 12 50 8 Z"
            fill="#1e1b4b"
            opacity="0.92"
          />
          <circle cx="20" cy="20" r="7" fill="#1e1b4b" opacity="0.9" />
          <circle cx="84" cy="76" r="5" fill="#1e1b4b" opacity="0.9" />
        </svg>
      ))}
    </div>
  );
}

/** Floating inventory bar. Renders nothing when the player holds no items and no status buffs. */
export function PowerUpBar({
  inventory,
  shield,
  doubleNext,
  disabled,
  onUse,
}: {
  inventory: PowerUpId[];
  shield?: boolean;
  doubleNext?: boolean;
  disabled?: boolean;
  onUse: (id: PowerUpId) => void;
}) {
  if (inventory.length === 0 && !shield && !doubleNext) return null;
  return (
    // Sits above the iPhone home indicator — without the safe-area inset the
    // bar tucks under it on notched devices and the buttons get hard to tap.
    <div
      className="fixed left-1/2 -translate-x-1/2 z-30"
      style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur rounded-full shadow-xl border border-accent-light dark:border-accent-light px-3 py-2">
        {shield && (
          <span className="text-lg" title="Shield armed — blocks the next attack">🛡️</span>
        )}
        {doubleNext && (
          <span className="text-lg animate-pulse motion-reduce:animate-none" title="Double points armed — next correct answer counts twice">⚡</span>
        )}
        {(shield || doubleNext) && inventory.length > 0 && (
          <span className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
        )}
        {inventory.map((id, i) => {
          const def = POWER_UPS[id];
          return (
            <button
              key={`${id}-${i}`}
              onClick={() => onUse(id)}
              disabled={disabled}
              title={`${def.name}: ${def.description}`}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-light to-blue-100 dark:from-accent-light/50 dark:to-blue-900/50 border-2 border-accent-muted dark:border-accent-hover text-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform motion-reduce:transition-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {def.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Lightweight toast stack for drops / incoming attacks. */
export interface ChaosToast {
  id: string;
  text: string;
}

export function ChaosToasts({ toasts }: { toasts: ChaosToast[] }) {
  if (toasts.length === 0) return null;
  return (
    // top-24 on mobile clears the sticky battle HUD (which occupies roughly the
    // first 88px); md+ has no mobile HUD, so it can sit higher.
    <div className="fixed top-24 md:top-16 left-1/2 -translate-x-1/2 z-40 space-y-2 pointer-events-none flex flex-col items-center w-full px-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-gray-900/90 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg animate-bounce motion-reduce:animate-none max-w-full text-center"
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}
