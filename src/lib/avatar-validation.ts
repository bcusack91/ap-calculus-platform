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

export type ValidatedAvatarData = z.infer<typeof avatarDataSchema>

/** Maximum serialized size for an avatar payload (bytes). */
export const MAX_AVATAR_JSON_BYTES = 2048

/**
 * Validate an unknown avatar payload. Returns the parsed data or an error message.
 */
export function validateAvatarData(
  payload: unknown
): { ok: true; data: ValidatedAvatarData } | { ok: false; error: string } {
  try {
    if (Buffer.byteLength(JSON.stringify(payload) ?? '', 'utf8') > MAX_AVATAR_JSON_BYTES) {
      return { ok: false, error: 'Avatar data is too large' }
    }
  } catch {
    return { ok: false, error: 'Avatar data is not serializable' }
  }

  const result = avatarDataSchema.safeParse(payload)
  if (!result.success) {
    return { ok: false, error: 'Invalid avatar data' }
  }
  return { ok: true, data: result.data }
}
