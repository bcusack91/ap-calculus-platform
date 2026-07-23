// Avatar customization types

export type AvatarEmotion = 'neutral' | 'happy' | 'sad';

export interface AvatarData {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  eyeColor: string;
  faceShape: string;
  accessory?: string;
  // Preset avatars use emojis
  isPreset?: boolean;
  preset?: string;
}

// ---- v2: DiceBear-illustrated avatars ------------------------------------
// Professionally drawn styles generated locally via @dicebear (no network
// calls). Clients only ever submit {v, style, seed, backgroundColor}; the
// SERVER generates and stores the `svg` (never accepted from clients — the
// stored SVG is republished on the leaderboard, so it must stay trusted).

export const DICEBEAR_STYLE_IDS = [
  'adventurer',
  'big-smile',
  'lorelei',
  'micah',
  'open-peeps',
  'bottts',
  'fun-emoji',
] as const;
export type DiceBearStyleId = (typeof DICEBEAR_STYLE_IDS)[number];

export interface DiceBearAvatarData {
  v: 2;
  style: DiceBearStyleId;
  seed: string;
  /** 6-digit hex WITHOUT '#', e.g. 'b6e3f4'. Omitted = transparent. */
  backgroundColor?: string;
  /** Server-generated SVG markup (trusted). */
  svg?: string;
  /**
   * Server-generated expression variants — the SAME avatar with a smiling or
   * downcast face. Present only for styles whose options are semantically
   * named (see EMOTION_OPTIONS in avatar-styles.ts); styles that cannot express
   * omit these and fall back to an animated reaction on the neutral face.
   */
  svgHappy?: string;
  svgSad?: string;
}

export type AnyAvatarData = AvatarData | DiceBearAvatarData;

export function isDiceBearAvatar(
  d: AnyAvatarData | null | undefined
): d is DiceBearAvatarData {
  return !!d && (d as DiceBearAvatarData).v === 2;
}

/** Soft pastel backgrounds offered in the builder (hex without '#'). */
export const AVATAR_BACKGROUNDS = [
  'b6e3f4', // sky
  'c0aede', // lavender
  'd1d4f9', // periwinkle
  'ffd5dc', // pink
  'ffdfbf', // peach
  'c8f7c5', // mint
  'fff3b0', // lemon
] as const;

/** Fun starter seeds shown as one-tap presets in the builder. */
export const AVATAR_SEED_PRESETS = [
  'Comet', 'Nova', 'Pixel', 'Ace', 'Luna', 'Turbo', 'Echo', 'Mochi',
] as const;

export const AVATAR_OPTIONS = {
  skinTones: [
    { id: 'light', color: '#FFE0BD' },
    { id: 'medium-light', color: '#F1C27D' },
    { id: 'medium', color: '#C68642' },
    { id: 'medium-dark', color: '#8D5524' },
    { id: 'dark', color: '#5C4033' },
  ],
  hairStyles: [
    { id: 'short', label: 'Short' },
    { id: 'medium', label: 'Medium' },
    { id: 'long', label: 'Long' },
    { id: 'curly', label: 'Curly' },
    { id: 'bald', label: 'Bald' },
  ],
  hairColors: [
    { id: 'black', color: '#2C2C2C' },
    { id: 'brown', color: '#6F4E37' },
    { id: 'blonde', color: '#F5DEB3' },
    { id: 'red', color: '#A52A2A' },
    { id: 'gray', color: '#808080' },
  ],
  eyeColors: [
    { id: 'brown', color: '#6F4E37' },
    { id: 'blue', color: '#4169E1' },
    { id: 'green', color: '#228B22' },
    { id: 'hazel', color: '#8E7618' },
  ],
  faceShapes: [
    { id: 'round', label: 'Round' },
    { id: 'oval', label: 'Oval' },
    { id: 'square', label: 'Square' },
  ],
  accessories: [
    { id: 'none', label: 'None' },
    { id: 'glasses', label: 'Glasses' },
    { id: 'sunglasses', label: 'Sunglasses' },
  ],
};

export const DEFAULT_AVATAR: AvatarData = {
  skinTone: 'medium-light',
  hairStyle: 'short',
  hairColor: 'brown',
  eyeColor: 'brown',
  faceShape: 'oval',
  accessory: 'none',
};

// Preset animal-themed avatars for quick selection
export const PRESET_AVATARS: { id: string; name: string; emoji: string; data: AvatarData }[] = [
  {
    id: 'cat',
    name: 'Cat',
    emoji: '🐱',
    data: {
      skinTone: 'light',
      hairStyle: 'curly',
      hairColor: 'blonde',
      eyeColor: 'green',
      faceShape: 'round',
      accessory: 'none',
    },
  },
  {
    id: 'dog',
    name: 'Dog',
    emoji: '🐶',
    data: {
      skinTone: 'medium-light',
      hairStyle: 'medium',
      hairColor: 'brown',
      eyeColor: 'brown',
      faceShape: 'oval',
      accessory: 'none',
    },
  },
  {
    id: 'panda',
    name: 'Panda',
    emoji: '🐼',
    data: {
      skinTone: 'light',
      hairStyle: 'short',
      hairColor: 'black',
      eyeColor: 'brown',
      faceShape: 'round',
      accessory: 'none',
    },
  },
  {
    id: 'fox',
    name: 'Fox',
    emoji: '🦊',
    data: {
      skinTone: 'medium-light',
      hairStyle: 'medium',
      hairColor: 'red',
      eyeColor: 'hazel',
      faceShape: 'oval',
      accessory: 'none',
    },
  },
  {
    id: 'koala',
    name: 'Koala',
    emoji: '🐨',
    data: {
      skinTone: 'medium',
      hairStyle: 'curly',
      hairColor: 'gray',
      eyeColor: 'brown',
      faceShape: 'round',
      accessory: 'none',
    },
  },
  {
    id: 'owl',
    name: 'Owl',
    emoji: '🦉',
    data: {
      skinTone: 'medium',
      hairStyle: 'short',
      hairColor: 'brown',
      eyeColor: 'hazel',
      faceShape: 'oval',
      accessory: 'glasses',
    },
  },
];
