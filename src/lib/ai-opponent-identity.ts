import type { DiceBearAvatarData, DiceBearStyleId } from '@/types/avatar'

/**
 * A fresh disguise for the AI practice bot, so each match feels like a new
 * opponent rather than the same "AI Practice Bot".
 *
 * SERVER-ONLY: this dynamically imports @dicebear (via avatar-styles) to bake
 * the SVG, exactly like the user avatar route. Import it only from route
 * handlers — never from a client component.
 *
 * The identity is stored per-match in gameData at creation time, NOT on the
 * shared bot user record (which many concurrent matches share). The match GET
 * swaps it in for the bot's slot.
 */

// Gender-neutral first names + a last initial → lots of plausible combos.
const FIRST_NAMES = [
  'Alex', 'Jordan', 'Sam', 'Taylor', 'Casey', 'Riley', 'Jamie', 'Morgan',
  'Avery', 'Quinn', 'Cameron', 'Skyler', 'Drew', 'Reese', 'Parker', 'Rowan',
  'Charlie', 'Emerson', 'Finley', 'Harper', 'Kai', 'Logan', 'Noah', 'Sage',
  'Blake', 'Devon', 'Elliot', 'Frankie', 'Gray', 'Hayden', 'Jesse', 'Lane',
  'Marlowe', 'Nico', 'Oakley', 'Peyton', 'River', 'Shiloh', 'Tatum', 'Wren',
]
// Skip visually ambiguous initials (I, O, Q, U) for cleaner display.
const LAST_INITIALS = 'ABCDEFGHJKLMNPRSTVWXYZ'.split('')

// Human-ish DiceBear styles only — a robot or emoji face would give away that
// the opponent isn't a person, which is the opposite of the goal here.
const AI_STYLES: DiceBearStyleId[] = ['adventurer', 'big-smile', 'lorelei', 'micah', 'open-peeps']

const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)]

export interface AIOpponentIdentity {
  name: string
  avatar: DiceBearAvatarData
}

/** Generate a random name + DiceBear avatar for one AI practice match. */
export async function makeRandomAIIdentity(): Promise<AIOpponentIdentity> {
  const { generateAvatarSvg, styleSupportsEmotion } = await import('@/lib/avatar-styles')

  const style = pick(AI_STYLES)
  const seed = Math.random().toString(36).slice(2, 12)
  const base = { style, seed }

  const avatar: DiceBearAvatarData = {
    v: 2,
    style,
    seed,
    svg: generateAvatarSvg(base),
    // Expression variants so the bot genuinely smiles/frowns on its answers,
    // just like a real player's avatar (styles that can't express omit these).
    ...(styleSupportsEmotion(style)
      ? {
          svgHappy: generateAvatarSvg({ ...base, emotion: 'happy' }),
          svgSad: generateAvatarSvg({ ...base, emotion: 'sad' }),
        }
      : {}),
  }

  return { name: `${pick(FIRST_NAMES)} ${pick(LAST_INITIALS)}.`, avatar }
}
