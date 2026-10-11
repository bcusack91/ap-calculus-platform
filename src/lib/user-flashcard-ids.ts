/**
 * Student-made flashcards (UserFlashcard) — pure, client-safe helpers shared
 * by the API routes, the review surfaces and the offline cache.
 *
 * Own cards ride in the same review queues as site cards, so every own-card
 * id that leaves the server is namespaced with OWN_CARD_PREFIX ('u:<id>').
 * A site Flashcard id is a cuid and never contains ':', so the two can never
 * collide in a queue, in the pending-return list, in the offline cache, or in
 * FlashcardReviewLog.flashcardId (which has no foreign key).
 */

export const OWN_CARD_PREFIX = 'u:'

/** Longest front/back a student can save. */
export const USER_CARD_MAX_TEXT = 2000
/** Longest optional hint. */
export const USER_CARD_MAX_HINT = 1000
/** Most cards one student can keep. */
export const USER_CARD_CAP = 2000

/** Topic label shown on own cards in the review session. */
export const OWN_CARD_TOPIC_TITLE = 'My card'

export type UserCardOrigin = 'manual' | 'mistake'

export function ownCardId(rawId: string): string {
  return `${OWN_CARD_PREFIX}${rawId}`
}

export function isOwnCardId(id: string | null | undefined): boolean {
  return typeof id === 'string' && id.startsWith(OWN_CARD_PREFIX) && id.length > OWN_CARD_PREFIX.length
}

/** The UserFlashcard primary key inside a 'u:<id>' card id, or null. */
export function rawOwnCardId(id: string): string | null {
  return isOwnCardId(id) ? id.slice(OWN_CARD_PREFIX.length) : null
}

/**
 * Spread own cards evenly through the site queue (Bresenham-style), so a
 * session mixes them in rather than front- or back-loading them. Order
 * within each list is preserved. Pure.
 */
export function interleaveCards<T>(site: T[], own: T[]): T[] {
  if (own.length === 0) return site.slice()
  if (site.length === 0) return own.slice()
  const total = site.length + own.length
  const out: T[] = []
  let s = 0
  let o = 0
  for (let k = 0; k < total; k++) {
    const ownShareSoFar = Math.round(((k + 1) * own.length) / total)
    const takeOwn = s >= site.length || (o < own.length && ownShareSoFar > o)
    if (takeOwn) out.push(own[o++])
    else out.push(site[s++])
  }
  return out
}

/**
 * Neutralize HTML tag openers in student-written text for surfaces that
 * render through renderRichText + innerHTML (which does not escape). Only
 * `<` directly followed by a letter, '/', '!' or '?' is escaped, so math like
 * `a < b` is untouched.
 */
export function escapeTagOpeners(text: string): string {
  return text.replace(/<(?=[A-Za-z/!?])/g, '&lt;')
}
