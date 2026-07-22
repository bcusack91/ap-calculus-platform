import { createAvatar } from '@dicebear/core';
import {
  adventurer,
  bigSmile,
  lorelei,
  micah,
  openPeeps,
  bottts,
  funEmoji,
} from '@dicebear/collection';
import type { DiceBearStyleId } from '@/types/avatar';

/**
 * Curated DiceBear style allowlist for v2 avatars.
 *
 * IMPORTANT: import this module only where generation happens — the avatar API
 * route (server) and the AvatarBuilder (via dynamic import). Display surfaces
 * (navbar, leaderboard, match) render the stored SVG and must NOT pull
 * @dicebear into their bundles.
 *
 * Licenses: @dicebear code is MIT; artwork varies per style. CC-BY styles are
 * credited in the AvatarBuilder footer (title / author / source / license).
 */
type DiceBearStyle = Parameters<typeof createAvatar>[0];

export const DICEBEAR_STYLES: Record<
  DiceBearStyleId,
  { label: string; icon: string; style: DiceBearStyle; attribution: string | null }
> = {
  adventurer: {
    label: 'Adventurer',
    icon: '🧭',
    style: adventurer as DiceBearStyle,
    attribution: '"Adventurer" by Lisa Wischofsky (CC BY 4.0)',
  },
  'big-smile': {
    label: 'Big Smile',
    icon: '😄',
    style: bigSmile as DiceBearStyle,
    attribution: '"Custom Avatar" by Ashley Seo (CC BY 4.0)',
  },
  lorelei: {
    label: 'Lorelei',
    icon: '🎨',
    style: lorelei as DiceBearStyle,
    attribution: null, // CC0
  },
  micah: {
    label: 'Micah',
    icon: '🕶️',
    style: micah as DiceBearStyle,
    attribution: '"Avatar Illustration System" by Micah Lanier (CC BY 4.0)',
  },
  'open-peeps': {
    label: 'Open Peeps',
    icon: '✏️',
    style: openPeeps as DiceBearStyle,
    attribution: null, // CC0
  },
  bottts: {
    label: 'Robots',
    icon: '🤖',
    style: bottts as DiceBearStyle,
    attribution: '"Bottts" by Pablo Stanley',
  },
  'fun-emoji': {
    label: 'Fun Emoji',
    icon: '🥳',
    style: funEmoji as DiceBearStyle,
    attribution: '"Fun Emoji Set" by Davis Uche (CC BY 4.0)',
  },
};

/** Generate the SVG for a validated v2 avatar. Deterministic per (style, seed, bg). */
export function generateAvatarSvg(params: {
  style: DiceBearStyleId;
  seed: string;
  backgroundColor?: string;
}): string {
  const entry = DICEBEAR_STYLES[params.style];
  return createAvatar(entry.style, {
    seed: params.seed,
    ...(params.backgroundColor ? { backgroundColor: [params.backgroundColor] } : {}),
  }).toString();
}
