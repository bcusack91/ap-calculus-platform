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

/**
 * Per-style option overrides that make an avatar genuinely change expression,
 * rather than keeping one face and slapping a 🎉 next to it.
 *
 * Only styles whose option values are SEMANTICALLY NAMED are listed. Adventurer
 * and Open Peeps expose opaque values (`variant01`…`variant30`) or no mouth
 * option at all, so there is no safe way to pick a smile without guessing —
 * those styles fall back to the animated reaction in AvatarDisplay instead.
 */
const EMOTION_OPTIONS: Partial<
  Record<DiceBearStyleId, { happy: Record<string, string[]>; sad: Record<string, string[]> }>
> = {
  'big-smile': {
    happy: { mouth: ['openedSmile'], eyes: ['cheery'] },
    sad: { mouth: ['openSad'], eyes: ['sad'] },
  },
  lorelei: {
    happy: { mouth: ['happy01'] },
    sad: { mouth: ['sad01'] },
  },
  micah: {
    happy: { mouth: ['laughing'], eyes: ['smiling'] },
    sad: { mouth: ['sad'], eyes: ['eyes'] },
  },
  bottts: {
    happy: { mouth: ['smile01'], eyes: ['happy'] },
    sad: { mouth: ['bite'], eyes: ['dizzy'] },
  },
  'fun-emoji': {
    happy: { mouth: ['wideSmile'], eyes: ['cute'] },
    sad: { mouth: ['sad'], eyes: ['tearDrop'] },
  },
};

/** True when this style can render a real happy/sad face. */
export function styleSupportsEmotion(style: DiceBearStyleId): boolean {
  return !!EMOTION_OPTIONS[style];
}

/**
 * Generate the SVG for a validated v2 avatar. Deterministic per
 * (style, seed, bg, emotion).
 *
 * `emotion` overrides the mouth/eyes so the stored variant is a genuinely
 * different face. Returns the neutral avatar for styles that cannot express.
 */
export function generateAvatarSvg(params: {
  style: DiceBearStyleId;
  seed: string;
  backgroundColor?: string;
  emotion?: 'neutral' | 'happy' | 'sad';
}): string {
  const entry = DICEBEAR_STYLES[params.style];
  const emotion = params.emotion ?? 'neutral';
  const overrides =
    emotion === 'neutral' ? undefined : EMOTION_OPTIONS[params.style]?.[emotion];
  return createAvatar(entry.style, {
    seed: params.seed,
    ...(params.backgroundColor ? { backgroundColor: [params.backgroundColor] } : {}),
    ...(overrides ?? {}),
  }).toString();
}
