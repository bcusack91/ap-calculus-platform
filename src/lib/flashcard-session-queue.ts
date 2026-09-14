/**
 * In-session return of learning-step cards, Anki-style.
 *
 * When a student rates a card "Again" (or any rating that lands on a
 * minute-scale learning step), the server schedules it a minute or so out.
 * The review surfaces fetch a fixed batch of due cards, so without this the
 * card would only come back after the whole batch (up to 50 cards) was done
 * and the queue refetched. Instead the surface holds the card as "pending"
 * and, after each rating, slots every pending card that has come due in
 * right after the card the student just finished — so it shows up next.
 *
 * Pure functions over a generic card type so both review surfaces
 * (/flashcards/review/start and the dashboard FlashcardStudySession) share
 * the logic and it can be unit-tested without React.
 */

export interface PendingCard<T> {
  card: T
  /** Client-clock epoch ms when the card is due again. */
  dueAt: number
}

/**
 * Only minute-scale learning steps come back within a session. Day-scale
 * intervals belong to a future day's queue.
 */
export function returnsThisSession(isMinuteInterval: boolean | undefined, intervalMinutes: number | undefined): boolean {
  return Boolean(isMinuteInterval) && typeof intervalMinutes === 'number' && Number.isFinite(intervalMinutes) && intervalMinutes >= 0
}

/**
 * Hold a card to return later in this session. Re-rating a card that is
 * already pending replaces its entry, so a card is never pending twice.
 * The due time comes from the interval, measured on the client clock, so
 * client/server clock skew can't make a card return early or late.
 */
export function scheduleReturn<T>(
  pending: PendingCard<T>[],
  card: T,
  intervalMinutes: number,
  idOf: (card: T) => string,
  now: number = Date.now(),
): PendingCard<T>[] {
  const id = idOf(card)
  return [
    ...pending.filter((p) => idOf(p.card) !== id),
    { card, dueAt: now + intervalMinutes * 60_000 },
  ].sort((a, b) => a.dueAt - b.dueAt)
}

/**
 * Move every pending card that is due (dueAt <= now) into the queue directly
 * after `afterIndex`, earliest-due first. Any later copy of the same card
 * already in the queue is dropped so the student never sees it twice in a row.
 */
export function releaseDue<T>(
  queue: T[],
  afterIndex: number,
  pending: PendingCard<T>[],
  idOf: (card: T) => string,
  now: number = Date.now(),
): { queue: T[]; pending: PendingCard<T>[] } {
  const due = pending.filter((p) => p.dueAt <= now).sort((a, b) => a.dueAt - b.dueAt)
  if (due.length === 0) return { queue, pending }

  const dueIds = new Set(due.map((p) => idOf(p.card)))
  const head = queue.slice(0, afterIndex + 1)
  const tail = queue.slice(afterIndex + 1).filter((c) => !dueIds.has(idOf(c)))
  return {
    queue: [...head, ...due.map((p) => p.card), ...tail],
    pending: pending.filter((p) => p.dueAt > now),
  }
}
