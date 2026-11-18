import { prisma } from '@/lib/prisma'
import { resolveUnlockContexts } from '@/lib/study-context'
import { effectiveDailyLimits } from '@/lib/flashcard-daily-limits'
import { lessonParts, partOfVideo, stepDone, videoDeckKey, type ProgressSteps, type VisibleStep } from '@/lib/video-lesson-core'
import { REVIEW_DECKS } from '@/data/video-lesson-flashcards'

/**
 * Video lesson review cards in the student's spaced-repetition deck (owner,
 * Nov 2026): a student learning a topic from its video lesson gets that
 * lesson's review cards one VIDEO at a time. Each time they finish a video
 * (every one of its sections watched and every checkpoint settled), that
 * video's cards join their deck: the concept video's cards as soon as the
 * concept video is done, the worked-examples video's cards after the examples.
 * (Until 2026-11-18 cards waited for both videos of a module.)
 *
 * The cards are the same decks the player offers before each recap
 * (src/data/video-lesson-flashcards), stored as Flashcard rows on the topic
 * with `videoDeck = "<lesson key>:<video>"` by the lesson sync
 * (scripts/video-lessons/review-cards.ts). They join decks only through this
 * file; the topic-wide unlock (lesson + exit quiz, flashcard-unlock.ts) skips
 * them, so live-class and text-lesson students' decks are unchanged.
 */

/** Finished source videos, with the module (1-based) they belong to. */
export type FinishedModule = { module: number; lessonKey: string; videos: number[] }

/** Every module of the lesson whose steps are all watched and answered. */
export function finishedModules(steps: readonly VisibleStep[], progress: ProgressSteps): FinishedModule[] {
  const parts = lessonParts(steps.map((s) => s.meta.video))
  const out: FinishedModule[] = []
  parts.forEach((part, k) => {
    if (part.videos.length === 0) return
    const lessonKey = steps[part.start]?.meta.lesson
    if (!lessonKey) return
    for (let i = part.start; i < part.end; i++) {
      const d = stepDone(steps[i], progress, steps[i - 1])
      if (!d.watched || !d.answered) return
    }
    out.push({ module: k + 1, lessonKey, videos: part.videos })
  })
  return out
}

/**
 * Every source video of the lesson whose steps are all watched and answered,
 * one entry per video (`videos` has that one video). This is what hands out
 * review cards.
 */
export function finishedVideos(steps: readonly VisibleStep[], progress: ProgressSteps): FinishedModule[] {
  const byVideo = new Map<number, { module: number; lessonKey: string; done: boolean }>()
  steps.forEach((step, i) => {
    const video = step.meta.video
    const lessonKey = step.meta.lesson
    if (video === null || !lessonKey) return
    const d = stepDone(step, progress, steps[i - 1])
    const cur = byVideo.get(video) ?? { module: partOfVideo(video), lessonKey, done: true }
    cur.done = cur.done && d.watched && d.answered
    byVideo.set(video, cur)
  })
  return [...byVideo.entries()]
    .filter(([, v]) => v.done)
    .sort(([a], [b]) => a - b)
    .map(([video, v]) => ({ module: v.module, lessonKey: v.lessonKey, videos: [video] }))
}

/** Videos finished in `after` that were not finished in `before`. */
export function newlyFinishedVideos(
  steps: readonly VisibleStep[],
  before: ProgressSteps,
  after: ProgressSteps,
): FinishedModule[] {
  const had = new Set(finishedVideos(steps, before).map((m) => m.videos[0]))
  return finishedVideos(steps, after).filter((m) => !had.has(m.videos[0]))
}

/** Modules finished in `after` that were not finished in `before`. */
export function newlyFinishedModules(
  steps: readonly VisibleStep[],
  before: ProgressSteps,
  after: ProgressSteps,
): FinishedModule[] {
  const had = new Set(finishedModules(steps, before).map((m) => m.module))
  return finishedModules(steps, after).filter((m) => !had.has(m.module))
}

/** Deck order: by video, then the card's place in its authored deck. */
export function deckOrder(cards: readonly { front: string; videoDeck: string | null }[]): Map<string, number> {
  const rank = new Map<string, number>()
  for (const c of cards) {
    const [lessonKey, v] = (c.videoDeck ?? '').split(':')
    const video = Number(v)
    const idx = REVIEW_DECKS[lessonKey]?.[video]?.findIndex((d) => d.front === c.front) ?? -1
    rank.set(`${c.videoDeck}|${c.front}`, video * 1000 + (idx === -1 ? 999 : idx))
  }
  return rank
}

export type ModuleCardsResult = { newCards: number; topicTitle: string }

/**
 * Add the review cards of these modules to the student's decks (the same decks
 * the topic unlock fills: personal, the topic's course mode when they have it,
 * an active class deck). Idempotent: cards already there are skipped.
 */
export async function unlockVideoModuleCards(
  userId: string,
  topic: { id: string; title: string },
  courseSlug: string | null,
  modules: readonly FinishedModule[],
): Promise<ModuleCardsResult | null> {
  const keys = modules.flatMap((m) => m.videos.map((v) => videoDeckKey(m.lessonKey, v)))
  if (keys.length === 0) return null
  const cards = await prisma.flashcard.findMany({
    where: { topicId: topic.id, videoDeck: { in: keys } },
    select: { id: true, front: true, videoDeck: true },
  })
  if (cards.length === 0) return null
  const rank = deckOrder(cards)
  const ordered = [...cards].sort((a, b) => (rank.get(`${a.videoDeck}|${a.front}`) ?? 0) - (rank.get(`${b.videoDeck}|${b.front}`) ?? 0))

  const [{ contexts, activeContext }, user] = await Promise.all([
    resolveUnlockContexts(userId, courseSlug),
    prisma.user.findUnique({ where: { id: userId }, select: { flashcardNewPerDay: true } }),
  ])
  const { newPerDay } = effectiveDailyLimits(user)
  const DAY_MS = 24 * 60 * 60 * 1000
  const now = new Date()
  const reportContext = contexts.includes(activeContext) ? activeContext : contexts[0]
  let newInActive = 0
  for (const ctx of contexts) {
    const res = await prisma.flashcardProgress.createMany({
      data: ordered.map((c, i) => ({
        userId,
        flashcardId: c.id,
        context: ctx,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReview: new Date(now.getTime() + Math.floor(i / newPerDay) * DAY_MS),
        lastReviewed: now,
        reviewCount: 0,
      })),
      skipDuplicates: true,
    })
    if (ctx === reportContext) newInActive = res.count
  }
  const label =
    modules.length === 1 && modules[0].videos.length === 1
      ? `Video ${modules[0].videos[0]} of ${topic.title}`
      : modules.length === 1
        ? `Module ${modules[0].module} of ${topic.title}`
        : topic.title
  return { newCards: newInActive, topicTitle: label }
}
