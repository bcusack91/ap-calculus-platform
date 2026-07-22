import { z } from 'zod'

/**
 * Strict schema for user avatarData (stored as JSON on User.avatarData and
 * republished on the public leaderboard). Mirrors the legitimate shape used
 * by src/types/avatar.ts + src/components/AvatarDisplay.tsx / AvatarBuilder.tsx.
 */
export const avatarDataSchema = z
  .object({
    skinTone: z.enum(['light', 'medium-light', 'medium', 'medium-dark', 'dark']),
    hairStyle: z.enum(['short', 'medium', 'long', 'curly', 'bald']),
    hairColor: z.enum(['black', 'brown', 'blonde', 'red', 'gray']),
    eyeColor: z.enum(['brown', 'blue', 'green', 'hazel']),
    faceShape: z.enum(['round', 'oval', 'square']),
    accessory: z.enum(['none', 'glasses', 'sunglasses']).optional(),
    isPreset: z.boolean().optional(),
    preset: z.enum(['cat', 'dog', 'panda', 'fox', 'koala', 'owl']).optional(),
  })
  .strict()

/**
 * v2 avatars: DiceBear params only. Clients NEVER submit SVG — the server
 * generates it from these validated params (the stored SVG is republished on
 * the public leaderboard, so accepting client SVG would be an XSS vector).
 */
export const diceBearAvatarSchema = z
  .object({
    v: z.literal(2),
    style: z.enum([
      'adventurer',
      'big-smile',
      'lorelei',
      'micah',
      'open-peeps',
      'bottts',
      'fun-emoji',
    ]),
    seed: z.string().regex(/^[A-Za-z0-9 _.\-]{1,64}$/, 'Invalid seed'),
    backgroundColor: z.string().regex(/^[0-9a-fA-F]{6}$/).optional(),
  })
  .strict()

export type ValidatedAvatarData = z.infer<typeof avatarDataSchema>
export type ValidatedDiceBearAvatar = z.infer<typeof diceBearAvatarSchema>

/** Maximum serialized size for an avatar payload (bytes). */
export const MAX_AVATAR_JSON_BYTES = 2048

/**
 * Validate an unknown avatar payload (legacy v1 face/preset OR v2 DiceBear
 * params). Returns the parsed data or an error message.
 */
export function validateAvatarData(
  payload: unknown
):
  | { ok: true; kind: 'v1'; data: ValidatedAvatarData }
  | { ok: true; kind: 'v2'; data: ValidatedDiceBearAvatar }
  | { ok: false; error: string } {
  try {
    if (Buffer.byteLength(JSON.stringify(payload) ?? '', 'utf8') > MAX_AVATAR_JSON_BYTES) {
      return { ok: false, error: 'Avatar data is too large' }
    }
  } catch {
    return { ok: false, error: 'Avatar data is not serializable' }
  }

  if (payload && typeof payload === 'object' && (payload as { v?: unknown }).v === 2) {
    const v2 = diceBearAvatarSchema.safeParse(payload)
    if (!v2.success) {
      return { ok: false, error: 'Invalid avatar data' }
    }
    return { ok: true, kind: 'v2', data: v2.data }
  }

  const result = avatarDataSchema.safeParse(payload)
  if (!result.success) {
    return { ok: false, error: 'Invalid avatar data' }
  }
  return { ok: true, kind: 'v1', data: result.data }
}
