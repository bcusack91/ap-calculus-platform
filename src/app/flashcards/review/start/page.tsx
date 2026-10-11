'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { NextStudyStepButton } from '@/components/StudyPlanNextUp'
import { FLASHCARD_UNLOCK_RULE, topicFlashcardBrowseHref } from '@/lib/flashcard-links'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import { previewIntervals, formatIntervalShort } from '@/lib/spaced-repetition'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'
import { detectCloze } from '@/lib/cloze-utils'
import { ClozeFlashcard } from '@/components/cloze-flashcard'
import { formatTimeUntil } from '@/lib/format-due-time'
import { releaseDue, returnsThisSession, scheduleReturn, type PendingCard } from '@/lib/flashcard-session-queue'
import { signUpUrl } from '@/lib/auth-redirect'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'
import { useCardShownTimer } from '@/hooks/useCardShownTimer'
import { useIncludeOwnCards } from '@/hooks/useIncludeOwnCards'
import { RefreshCw, WifiOff } from 'lucide-react'
import {
  OFFLINE_PACK_SIZE,
  PACK_MAX_AGE_MS,
  applyLocalRating,
  filterOfflineCards,
  mergeServerProgress,
  newRatingId,
  nextOfflineDueAt,
  offlineDueCards,
  syncQueuedRatings,
} from '@/lib/flashcard-offline-queue'
import {
  deleteQueuedRatings,
  enqueueRating,
  listQueuedRatings,
  loadPack,
  offlineStoreAvailable,
  savePack,
  updatePackCard,
  warmOfflineShell,
} from '@/lib/flashcard-offline-store'

const cardId = (c: FlashcardProgress) => c.flashcard.id

interface Flashcard {
  id: string
  front: string
  back: string
  hint?: string
  topic: {
    title: string
    slug: string
  }
}

interface FlashcardProgress {
  id: string
  /** A student-made card (id 'u:<id>'), scheduled on its own SRS columns. */
  own?: boolean
  easeFactor: number
  interval: number
  repetitions: number
  isMinuteInterval?: boolean
  nextReview: Date | string
  reviewCount: number
  flashcard: Flashcard
}

interface ReviewStats {
  total: number
  due: number
  new: number
  review: number
  /** Due review cards held back by the max-reviews-per-day daily limit. */
  reviewsBeyondLimit?: number
  /** Cards that come back later in the student's local day (learning steps). */
  dueLaterToday: number
  /** ISO timestamp of the next upcoming card, or null when none scheduled. */
  nextDueAt: string | null
  /** Topic-filtered sessions only: this topic's cards already in the deck. */
  filteredTotal?: number
  /** Student-made cards: how many exist / are due now (main + own-only sessions). */
  ownTotal?: number
  ownDue?: number
  /** Whether own cards are mixed into this batch. */
  ownIncluded?: boolean
}

function prettifySlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

/**
 * The rated spaced-repetition session. `?topic=<slug>` limits it to one
 * topic's unlocked cards — every "study these cards" link on the site
 * (topic pages, study plan, assignments, catalog) lands here, so ratings are
 * recorded and the study-plan "rate this topic's cards first" hold releases.
 */
export default function FlashcardReviewPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-10">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            <p className="mt-4 text-muted-foreground">Loading your flashcards...</p>
          </div>
        </div>
      }
    >
      <FlashcardReviewSession />
    </Suspense>
  )
}

function FlashcardReviewSession() {
  const { data: session, status, update: refetchSession } = useSession()
  const userId = session?.user?.id ?? null
  const searchParams = useSearchParams()
  const topicSlug = searchParams.get('topic')?.trim() || null
  // "Review my cards" (from /flashcards/mine): only the student's own cards.
  const ownOnly = !topicSlug && searchParams.get('mine') === '1'
  const [includeOwn, setIncludeOwn] = useIncludeOwnCards()
  const [cards, setCards] = useState<FlashcardProgress[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<ReviewStats | null>(null)
  const [reviewComplete, setReviewComplete] = useState(false)
  const [reviewing, setReviewing] = useState(false)
  // Cards rated into a minute-scale learning step (e.g. "Again" → 1m). They
  // come back mid-batch as soon as they're due, instead of after the batch.
  const [pending, setPending] = useState<PendingCard<FlashcardProgress>[]>([])
  // Visible time on the current card, sent with its rating for the review log.
  const cardShownMs = useCardShownTimer(cards[currentIndex])

  // ── Offline review ────────────────────────────────────────────────────
  // `offline` = this session is serving the IndexedDB pack and queueing
  // ratings; `offlineNoPack` = offline with nothing cached on this device.
  const [offline, setOffline] = useState(false)
  const [offlineNoPack, setOfflineNoPack] = useState(false)
  const [queuedCount, setQueuedCount] = useState(0)
  const [syncing, setSyncing] = useState(false)
  const [offlineNotice, setOfflineNotice] = useState<string | null>(null)
  const offlineRef = useRef(false)
  const packOwnerRef = useRef<string | null>(null)
  const packSavedAtRef = useRef(0)
  const syncingRef = useRef(false)
  const offlineNoPackRef = useRef(false)
  useEffect(() => { offlineRef.current = offline }, [offline])
  useEffect(() => { offlineNoPackRef.current = offlineNoPack }, [offlineNoPack])

  const refreshQueuedCount = useCallback(async () => {
    const owner = userId ?? packOwnerRef.current
    const rows = await listQueuedRatings()
    setQueuedCount(owner ? rows.filter((r) => r.userId === owner).length : rows.length)
  }, [userId])

  /** Serve the session from the cached pack (offline). */
  const loadOfflineCards = useCallback(async () => {
    const pack = await loadPack()
    setOffline(true)
    setPending([])
    setCurrentIndex(0)
    setIsFlipped(false)
    setShowHint(false)
    if (!pack || (userId && pack.userId !== userId)) {
      setOfflineNoPack(true)
      setCards([])
      setStats(null)
      setReviewComplete(true)
      setLoading(false)
      return
    }
    packOwnerRef.current = pack.userId
    setOfflineNoPack(false)
    const now = Date.now()
    const scoped = filterOfflineCards(pack.cards, { topicSlug, ownOnly, includeOwn })
    const due = offlineDueCards(scoped, now)
    const endOfDay = new Date(now)
    endOfDay.setHours(23, 59, 59, 999)
    const laterToday = scoped.filter((c) => {
      const t = new Date(c.nextReview).getTime()
      return c.reviewCount > 0 && t > now && t <= endOfDay.getTime()
    }).length
    const nextDue = nextOfflineDueAt(scoped, now)
    const fresh = due.filter((c) => c.reviewCount === 0).length
    setCards(due as FlashcardProgress[])
    setStats({
      total: scoped.length,
      due: due.length,
      new: fresh,
      review: due.length - fresh,
      dueLaterToday: laterToday,
      nextDueAt: nextDue ? new Date(nextDue).toISOString() : null,
      filteredTotal: scoped.length,
    })
    setReviewComplete(due.length === 0)
    setLoading(false)
    void refreshQueuedCount()
  }, [userId, topicSlug, ownOnly, includeOwn, refreshQueuedCount])

  /** Cache the next OFFLINE_PACK_SIZE due cards (site + own) for offline use. */
  const refreshPack = useCallback(async (force = false) => {
    if (!userId) return
    if (!force && Date.now() - packSavedAtRef.current < PACK_MAX_AGE_MS) return
    if (!(await offlineStoreAvailable())) return
    try {
      const res = await fetch(`/api/flashcards/review?tzOffset=${new Date().getTimezoneOffset()}&own=1&limit=${OFFLINE_PACK_SIZE}`)
      if (!res.ok) return
      const data = await res.json()
      if (!Array.isArray(data.cards)) return
      if (await savePack({ userId, savedAt: Date.now(), cards: data.cards })) {
        packSavedAtRef.current = Date.now()
        packOwnerRef.current = userId
      }
    } catch {
      /* offline pack is best-effort */
    }
  }, [userId])

  const loadDueCards = useCallback(async () => {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      await loadOfflineCards()
      return
    }
    let response: Response
    try {
      const params = new URLSearchParams({ tzOffset: String(new Date().getTimezoneOffset()) })
      if (topicSlug) params.set('topicSlug', topicSlug)
      else if (ownOnly) params.set('ownOnly', '1')
      else params.set('own', includeOwn ? '1' : '0')
      response = await fetch(`/api/flashcards/review?${params}`)
    } catch {
      // Network down (navigator.onLine can lie): fall back to the cache.
      await loadOfflineCards()
      return
    }
    try {
      if (!response.ok) throw new Error('Failed to load flashcards')

      const data = await response.json()
      setOffline(false)
      setOfflineNoPack(false)
      setCards(data.cards)
      setStats(data.stats)
      // A fresh fetch already includes every card that is due now, and the
      // server re-serves not-yet-due learning cards once they are.
      setPending([])
      setCurrentIndex(0)
      setIsFlipped(false)
      setShowHint(false)

      // Cards may COME BACK due while the student sits on the completion
      // screen (learning steps), so completeness must track the fetch result
      // in both directions.
      setReviewComplete(data.cards.length === 0)
      void refreshPack()
    } catch (error) {
      console.error('Error loading flashcards:', error)
    } finally {
      setLoading(false)
    }
  }, [topicSlug, ownOnly, includeOwn, loadOfflineCards, refreshPack])

  /** Send ratings queued offline. Resolves false when anything is left unsent. */
  const syncNow = useCallback(async (): Promise<boolean> => {
    if (!userId || syncingRef.current) return false
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return false
    syncingRef.current = true
    setSyncing(true)
    try {
      const result = await syncQueuedRatings(userId, {
        list: listQueuedRatings,
        remove: deleteQueuedRatings,
        post: async (body) => {
          try {
            const res = await fetch('/api/flashcards/sync', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            })
            if (!res.ok) return null
            const data = await res.json()
            return Array.isArray(data?.results) ? data.results : null
          } catch {
            return null
          }
        },
      })
      if (result.sent > 0) packSavedAtRef.current = 0 // server state moved on: re-cache
      return !result.failed && result.remaining === 0
    } finally {
      syncingRef.current = false
      setSyncing(false)
      void refreshQueuedCount()
    }
  }, [userId, refreshQueuedCount])

  // Signed in: flush anything rated offline FIRST, so the queue we fetch
  // reflects it. Signed out while the network is down (next-auth can't reach
  // its session endpoint offline): serve the cached pack.
  useEffect(() => {
    if (status === 'authenticated') {
      let cancelled = false
      void (async () => {
        await syncNow()
        if (!cancelled) await loadDueCards()
      })()
      return () => { cancelled = true }
    }
    if (status === 'unauthenticated') {
      if (typeof navigator !== 'undefined' && navigator.onLine === false) void loadOfflineCards()
      else setLoading(false)
    }
  }, [status, syncNow, loadDueCards, loadOfflineCards])

  // Connectivity changes: going offline switches ratings to the queue;
  // coming back syncs, then resumes live ratings with the same queue.
  useEffect(() => {
    const goOffline = () => {
      void offlineStoreAvailable().then((ok) => { if (ok) setOffline(true) })
    }
    const goOnline = () => {
      // Opened offline, next-auth couldn't load the session: fetch it now;
      // once it's authenticated the effect above syncs and reloads.
      if (!userId) {
        void refetchSession()
        return
      }
      void syncNow().then((done) => {
        if (done) {
          setOffline(false)
          setOfflineNotice(null)
          if (offlineNoPackRef.current) void loadDueCards()
        }
      })
    }
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [syncNow, loadDueCards, userId, refetchSession])

  // Ask the service worker to keep this page + its chunks for offline use
  // (after lazy chunks like KaTeX have loaded).
  useEffect(() => {
    const t = window.setTimeout(warmOfflineShell, 4000)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => { void refreshQueuedCount() }, [refreshQueuedCount])

  // On the completion screen, tick every 20s so the "next card in N minutes"
  // countdown stays fresh — and automatically pull the queue again once the
  // next card's due time arrives, so students never think they're done when
  // learning-step cards are about to return.
  const nextDueAt = stats?.nextDueAt ?? null
  const [nowTick, setNowTick] = useState(() => Date.now())
  useEffect(() => {
    if (!reviewComplete || !nextDueAt) return
    const interval = setInterval(() => setNowTick(Date.now()), 20000)
    return () => clearInterval(interval)
  }, [reviewComplete, nextDueAt])
  useEffect(() => {
    if (!reviewComplete || !nextDueAt) return
    if (new Date(nextDueAt).getTime() <= nowTick) loadDueCards()
  }, [nowTick, reviewComplete, nextDueAt, loadDueCards])

  /**
   * After a rating: hold a card that landed on a learning step, slot in
   * every held card that has come due so it's the very next card, and move
   * on (refetching when the batch is finished).
   */
  async function advance(nextPending: PendingCard<FlashcardProgress>[]) {
    const released = releaseDue(cards, currentIndex, nextPending, cardId)
    setPending(released.pending)
    setCards(released.queue)

    if (currentIndex < released.queue.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
      setShowHint(false)
    } else {
      // Batch finished — the queue serves 50 at a time, so refetch; only an
      // empty refetch means genuinely caught up (loadDueCards sets it).
      setLoading(true)
      await loadDueCards()
    }
  }

  /** Rate without the network: schedule locally, queue for sync. */
  async function rateOffline(card: FlashcardProgress, rating: 'again' | 'hard' | 'good' | 'easy') {
    const owner = userId ?? packOwnerRef.current
    const now = Date.now()
    const tzOffset = new Date().getTimezoneOffset()
    const local = applyLocalRating(card, rating, now, tzOffset)
    const saved = owner
      ? await enqueueRating({
          id: newRatingId(),
          userId: owner,
          cardId: card.flashcard.id,
          rating,
          at: now,
          durationMs: cardShownMs(),
          tzOffset,
        })
      : false
    if (!saved) {
      setOfflineNotice('This browser can’t save reviews offline, so that rating wasn’t recorded. Reconnect to keep reviewing.')
      return
    }
    setOfflineNotice(null)
    await updatePackCard(owner!, local.card)
    setQueuedCount((n) => n + 1)
    const updated = local.card as FlashcardProgress
    const nextPending = returnsThisSession(local.isMinuteInterval, local.interval)
      ? scheduleReturn(pending, updated, local.interval, cardId)
      : pending
    await advance(nextPending)
  }

  async function handleRating(rating: 'again' | 'hard' | 'good' | 'easy') {
    if (reviewing) return // Prevent double-clicks
    
    setReviewing(true)
    const currentCard = cards[currentIndex]
    
    try {
      if (offlineRef.current) {
        await rateOffline(currentCard, rating)
        return
      }

      let response: Response
      try {
        response = await fetch('/api/flashcards/review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            flashcardId: currentCard.flashcard.id,
            rating,
            tzOffset: new Date().getTimezoneOffset(),
            durationMs: cardShownMs(),
          })
        })
      } catch (networkError) {
        // Connection dropped mid-session: keep going offline when we can.
        if (await offlineStoreAvailable()) {
          setOffline(true)
          await rateOffline(currentCard, rating)
          return
        }
        throw networkError
      }

      if (!response.ok) throw new Error('Failed to submit review')
      const result = await response.json().catch(() => null)

      let nextPending = pending
      const p = result?.progress
      if (p) {
        // Keep the offline copy of this card in step with the server.
        if (userId) void updatePackCard(userId, mergeServerProgress(currentCard, p))
      }
      if (p && returnsThisSession(p.isMinuteInterval, result.interval)) {
        const updated: FlashcardProgress = {
          ...currentCard,
          easeFactor: p.easeFactor,
          interval: p.interval,
          repetitions: p.repetitions,
          isMinuteInterval: p.isMinuteInterval,
          reviewCount: p.reviewCount,
          nextReview: p.nextReview,
        }
        nextPending = scheduleReturn(pending, updated, result.interval, cardId)
      }
      await advance(nextPending)
    } catch (error) {
      console.error('Error submitting review:', error)
    } finally {
      setReviewing(false)
    }
  }

  const offlineBanner = offline ? (
    <div role="status" className="mb-4 flex items-start gap-2 rounded-lg border border-amber-300 dark:border-amber-600/60 bg-amber-50 dark:bg-amber-900/20 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
      <WifiOff className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span>
        <strong>Offline</strong>
        {queuedCount > 0
          ? ` — ${queuedCount} review${queuedCount === 1 ? '' : 's'} will sync when you reconnect.`
          : ' — reviewing cards saved on this device. Your ratings sync when you reconnect.'}
      </span>
    </div>
  ) : queuedCount > 0 && userId ? (
    <div role="status" className="mb-4 flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
      <RefreshCw className={`h-4 w-4 shrink-0 ${syncing ? 'animate-spin' : ''}`} aria-hidden />
      <span>
        {syncing
          ? `Syncing ${queuedCount} offline review${queuedCount === 1 ? '' : 's'}…`
          : `${queuedCount} offline review${queuedCount === 1 ? '' : 's'} waiting to sync.`}
      </span>
      {!syncing && (
        <button
          type="button"
          onClick={() => { void syncNow() }}
          className="font-semibold text-accent-dark dark:text-accent-muted underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
        >
          Sync now
        </button>
      )}
    </div>
  ) : null

  const noticeBanner = offlineNotice ? (
    <p role="alert" className="mb-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm text-red-700 dark:text-red-300">
      {offlineNotice}
    </p>
  ) : null

  // The "Include my own cards" toggle: main session only, once the student
  // has made at least one card.
  const showOwnToggle = !topicSlug && !ownOnly && !offline && (stats?.ownTotal ?? 0) > 0
  const ownToggle = showOwnToggle ? (
    <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
      <input
        type="checkbox"
        checked={includeOwn}
        onChange={(e) => setIncludeOwn(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 accent-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
      />
      Include my own cards
      {includeOwn && (stats?.ownDue ?? 0) > 0 && (
        <span className="text-xs text-gray-500 dark:text-gray-400">({stats!.ownDue} due)</span>
      )}
    </label>
  ) : null

  if (status === 'loading' || loading) {
    return (
      <div className="container py-10">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          <p className="mt-4 text-muted-foreground">Loading your flashcards...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated' && !offline) {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Save your flashcard progress</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Create a free account (or sign in) to review flashcards with spaced repetition and keep your progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={signUpUrl({ callbackUrl: topicSlug ? `/flashcards/review/start?topic=${encodeURIComponent(topicSlug)}` : '/flashcards/review/start', reason: 'generic' })}
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover"
            >
              Create a free account
            </Link>
            {topicSlug && (
              <Link
                href={topicFlashcardBrowseHref(topicSlug)}
                className="inline-block px-6 py-3 bg-card border border-accent text-accent-dark rounded-lg font-semibold hover:bg-accent-subtle"
              >
                Browse these cards without an account
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Offline with nothing cached on this device.
  if (offline && offlineNoPack) {
    return (
      <div className="container py-10 px-4">
        <div className="max-w-2xl mx-auto text-center bg-card border border-card-border rounded-xl p-8 sm:p-10">
          <WifiOff className="mx-auto mb-4 h-10 w-10 text-gray-400" aria-hidden />
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">You&apos;re offline</h1>
          <p className="text-muted-foreground mb-6">
            No flashcards are saved on this device yet. Open this page once while you&apos;re connected and your next {OFFLINE_PACK_SIZE} due cards will be ready for offline review.
          </p>
          <button
            type="button"
            onClick={() => { setLoading(true); void loadDueCards() }}
            className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  // "Review my cards" with no cards made yet.
  if (ownOnly && (reviewComplete || cards.length === 0) && stats && (stats.ownTotal ?? stats.total) === 0) {
    return (
      <div className="container py-10 px-4">
        <div className="max-w-2xl mx-auto text-center bg-card border border-card-border rounded-xl p-8 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">You haven&apos;t made any cards yet</h1>
          <p className="text-muted-foreground mb-6">Write your own flashcards and they&apos;ll be reviewed here with spaced repetition.</p>
          <Link href="/flashcards/mine" className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2">
            Make a flashcard
          </Link>
        </div>
      </div>
    )
  }

  // Nothing unlocked (for this topic, or at all): say HOW cards get into the
  // deck and point at the next study step, instead of a misleading
  // "All Caught Up!". Own cards count toward the deck when they're included.
  const ownInDeck = stats?.ownIncluded ? stats?.ownTotal ?? 0 : 0
  const deckSize = topicSlug ? stats?.filteredTotal : ownOnly ? stats?.total : (stats?.total ?? 0) + ownInDeck
  if (!ownOnly && (reviewComplete || cards.length === 0) && stats && deckSize === 0) {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center bg-card border-2 border-accent-light dark:border-accent/40 rounded-xl p-10">
            <div className="text-6xl mb-4">🎴</div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              {topicSlug ? `${prettifySlug(topicSlug)}: no cards in your deck yet` : 'Your deck is empty — for now'}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {FLASHCARD_UNLOCK_RULE}{' '}
              <HelpLink article={HELP_ARTICLES.flashcardsLocked} label="Why are my flashcards locked?" />
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {topicSlug ? (
                <>
                  <Link
                    href={`/topics/${topicSlug}/interactive`}
                    className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover"
                  >
                    Start this topic&apos;s lesson →
                  </Link>
                  <Link
                    href={topicFlashcardBrowseHref(topicSlug)}
                    className="px-6 py-3 bg-card border border-accent text-accent-dark rounded-lg font-semibold hover:bg-accent-subtle"
                  >
                    Browse the cards
                  </Link>
                </>
              ) : (
                <NextStudyStepButton />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (reviewComplete || cards.length === 0) {
    const moreToday = stats?.dueLaterToday ?? 0
    const nextDueLabel = stats?.nextDueAt ? formatTimeUntil(stats.nextDueAt, new Date(nowTick)) : null
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto">
          {offlineBanner}
          {noticeBanner}
          {ownToggle && <div className="mb-4 flex justify-end">{ownToggle}</div>}
          <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/40 dark:to-blue-950/40 border-2 border-green-300 dark:border-green-700 rounded-xl p-12">
            <div className="text-6xl mb-4">{moreToday > 0 ? '⏳' : '🎉'}</div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {moreToday > 0
                ? 'Done for now — but not for today!'
                : topicSlug
                  ? 'This topic’s cards are done for now!'
                  : ownOnly
                    ? 'Your cards are done for now!'
                    : 'All Caught Up!'}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {moreToday > 0
                ? 'You’ve cleared everything due right now. Spaced repetition brings cards back after a short wait — that second look is where the learning sticks.'
                : topicSlug
                  ? 'You’ve rated every card due in this topic. Keep going with your next topic.'
                  : 'You’ve reviewed all your due flashcards. Great work!'}
            </p>

            {moreToday > 0 && (
              <div className="mb-8 rounded-xl border-2 border-amber-300 dark:border-amber-600/60 bg-amber-50 dark:bg-amber-900/20 p-5 max-w-md mx-auto">
                <div className="text-2xl font-bold text-amber-800 dark:text-amber-300">
                  {moreToday} card{moreToday === 1 ? '' : 's'} still due later today
                </div>
                {nextDueLabel && (
                  <div className="mt-1 text-amber-800 dark:text-amber-300">
                    Next card {nextDueLabel} — this page will bring it up automatically.
                  </div>
                )}
                <button
                  onClick={() => { setLoading(true); loadDueCards() }}
                  className="mt-4 px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold"
                >
                  Check for due cards now
                </button>
              </div>
            )}

            {moreToday === 0 && nextDueLabel && (
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Your next review is {nextDueLabel}.
              </p>
            )}

            {(stats?.reviewsBeyondLimit ?? 0) > 0 && (
              <p className="mb-6 text-sm text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-600/60 rounded-lg px-4 py-3 max-w-md mx-auto">
                {stats!.reviewsBeyondLimit} more review{stats!.reviewsBeyondLimit === 1 ? '' : 's'} waiting beyond today&apos;s limit — they&apos;re first in line tomorrow, or raise your daily limits on the{' '}
                <Link href="/flashcards/review" className="underline font-semibold">review dashboard</Link>.
              </p>
            )}

            {stats && (
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                <div className="bg-card rounded-lg p-4 border border-card-border">
                  <div className="text-3xl font-bold text-accent">{stats.total}</div>
                  <div className="text-sm text-muted-foreground">Total Cards</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-card-border">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">{moreToday}</div>
                  <div className="text-sm text-muted-foreground">Coming Up Today</div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextStudyStepButton fallbackLabel="Continue learning" />
              {topicSlug ? (
                <Link
                  href="/flashcards/review/start"
                  className="px-6 py-3 bg-card border border-accent text-accent-dark rounded-lg font-semibold hover:bg-accent-subtle"
                >
                  Review all my due cards
                </Link>
              ) : (
                <Link
                  href="/flashcards"
                  className="px-6 py-3 bg-card border border-accent text-accent-dark rounded-lg font-semibold hover:bg-accent-subtle"
                >
                  Browse All Flashcards
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentCard = cards[currentIndex]
  const progress = Math.round(((currentIndex) / cards.length) * 100)
  const isClozeCard = detectCloze(currentCard.flashcard.front).isCloze

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link href="/flashcards/review" className="text-accent hover:underline mb-2 inline-block">
            ← Back to Review Dashboard
          </Link>
          <h1 className="text-3xl font-bold mb-2">
            {topicSlug
              ? `Flashcard Review: ${cards[0]?.flashcard.topic.title || prettifySlug(topicSlug)}`
              : ownOnly
                ? 'Review: My cards'
                : 'Flashcard Review'}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="text-muted-foreground">
              Card {currentIndex + 1} of {cards.length} • {(stats?.due || 0) + (stats?.ownIncluded ? stats?.ownDue ?? 0 : 0)} cards due {topicSlug ? 'in this topic' : 'today'}
            </p>
            {ownToggle}
          </div>
        </div>

        {offlineBanner}
        {noticeBanner}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-accent to-accent-secondary h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Render Cloze or Regular Flashcard */}
        {isClozeCard ? (
          <ClozeFlashcard
            front={currentCard.flashcard.front}
            back={currentCard.flashcard.back}
            hint={currentCard.flashcard.hint}
            topicTitle={currentCard.flashcard.topic.title}
            onRate={handleRating}
            reviewing={reviewing}
            intervals={previewIntervals(
              currentCard.easeFactor,
              currentCard.interval,
              currentCard.repetitions,
              currentCard.isMinuteInterval ?? false,
            )}
          />
        ) : (
          <>
            {/* Regular Flashcard */}
            <div className="mb-8">
              {/* Both faces sit in the SAME grid cell (not absolute), so the
                  container's height is always the TALLER face — a long answer
                  pushes everything below it (hint, rating buttons) further
                  down instead of overflowing a fixed 350px box and painting
                  over the Again/Hard/Good/Easy buttons. */}
              <div
                onClick={() => !isFlipped && setIsFlipped(true)}
                className={`cursor-pointer perspective-1000 ${!isFlipped ? 'hover:scale-105' : ''} transition-transform duration-200`}
              >
                <div
                  className={`grid w-full transition-all duration-500 preserve-3d`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                  }}
                >
                  {/* Front */}
                  <div
                    className={`col-start-1 row-start-1 w-full backface-hidden ${
                      isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="border-2 border-accent-muted rounded-xl p-10 bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-accent-light/20 dark:to-blue-900/20 min-h-[350px] h-full flex flex-col justify-center">
                      <div className="text-sm text-accent-dark font-semibold mb-4">QUESTION{currentCard.own ? ' · MY CARD' : ''}</div>
                      <div className="text-xl prose dark:prose-invert prose-purple max-w-none text-foreground">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {escapeCurrencyMath(formatFlashcardContent(currentCard.flashcard.front))}
                        </ReactMarkdown>
                      </div>
                      <div className="mt-8 text-sm text-muted-foreground text-center italic">
                        Click to reveal answer
                      </div>
                    </div>
                  </div>

              {/* Back */}
              <div
                className={`col-start-1 row-start-1 w-full backface-hidden ${
                  isFlipped ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="border-2 border-green-300 dark:border-green-700 rounded-xl p-10 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 min-h-[350px] h-full flex flex-col justify-center">
                  <div className="text-sm text-green-900 dark:text-green-300 font-semibold mb-4">ANSWER</div>
                  <div className="text-xl prose dark:prose-invert prose-green max-w-none text-foreground">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {escapeCurrencyMath(formatFlashcardContent(currentCard.flashcard.back))}
                    </ReactMarkdown>
                  </div>
                  <div className="mt-8 text-sm text-muted-foreground text-center">
                    <span className="font-semibold">Topic:</span> {currentCard.flashcard.topic.title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hint */}
          {currentCard.flashcard.hint && !isFlipped && (
            <div className="mt-4">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-sm text-accent-dark hover:underline font-semibold"
                >
                  💡 Show Hint
                </button>
              ) : (
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <div className="text-sm text-yellow-900 dark:text-yellow-200 font-semibold mb-2">💡 HINT</div>
                  <div className="text-sm prose dark:prose-invert prose-yellow max-w-none text-foreground">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {escapeCurrencyMath(formatFlashcardContent(currentCard.flashcard.hint || ''))}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rating Buttons. Times are the REAL schedule each
            rating would produce for this card's current state (they grow as
            the card matures), not static labels. */}
        {isFlipped && (() => {
          const preview = previewIntervals(
            currentCard.easeFactor,
            currentCard.interval,
            currentCard.repetitions,
            currentCard.isMinuteInterval ?? false,
          )
          const buttons = [
            { key: 'again' as const, label: 'Again', time: preview.again, cls: 'bg-red-100 hover:bg-red-200 border-red-300 text-red-900 dark:bg-red-950/50 dark:hover:bg-red-900/60 dark:border-red-700 dark:text-red-200' },
            { key: 'hard' as const, label: 'Hard', time: preview.hard, cls: 'bg-orange-100 hover:bg-orange-200 border-orange-300 text-orange-900 dark:bg-orange-950/50 dark:hover:bg-orange-900/60 dark:border-orange-700 dark:text-orange-200' },
            { key: 'good' as const, label: 'Good', time: preview.good, cls: 'bg-green-100 hover:bg-green-200 border-green-300 text-green-900 dark:bg-green-950/50 dark:hover:bg-green-900/60 dark:border-green-700 dark:text-green-200' },
            { key: 'easy' as const, label: 'Easy', time: preview.easy, cls: 'bg-blue-100 hover:bg-blue-200 border-blue-300 text-blue-900 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 dark:border-blue-700 dark:text-blue-200' },
          ]
          return (
            <div className="grid grid-cols-4 gap-3">
              {buttons.map((b) => (
                <button
                  key={b.key}
                  onClick={() => handleRating(b.key)}
                  disabled={reviewing}
                  className={`px-4 py-6 rounded-lg border-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${b.cls}`}
                >
                  <div className="text-sm mb-1">{b.label}</div>
                  <div className="text-xs opacity-75">{b.time}</div>
                </button>
              ))}
            </div>
          )
        })()}
          </>
        )}

        {/* Instructions */}
        {!isFlipped && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>How it works:</strong> Study the question, then click to reveal the answer. 
              Rate your recall — each answer schedules the card&apos;s next review at the right moment.
            </p>
          </div>
        )}

        {isFlipped && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Rate your recall:</strong>
            </p>
            <ul className="text-sm text-blue-900 dark:text-blue-200 mt-2 space-y-1 ml-4">
              <li>• <strong>Again:</strong> Completely forgot - see it again soon</li>
              <li>• <strong>Hard:</strong> Remembered with difficulty</li>
              <li>• <strong>Good:</strong> Correct response with some thought</li>
              <li>• <strong>Easy:</strong> Perfect recall, no hesitation</li>
            </ul>
          </div>
        )}

        {/* Card Stats */}
        <div className="mt-6 p-4 bg-card border border-card-border rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-foreground">Reviews</div>
              <div className="text-muted-foreground">{currentCard.reviewCount}</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Ease</div>
              <div className="text-muted-foreground">{(currentCard.easeFactor * 100).toFixed(0)}%</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Interval</div>
              <div className="text-muted-foreground">{formatIntervalShort(currentCard.interval, currentCard.isMinuteInterval ?? false)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
