import { prisma } from '@/lib/prisma'
import { compareByYield } from '@/lib/flashcard-yield'
import { PERSONAL_CONTEXT, resolveUnlockContexts } from '@/lib/study-context'
import { generateFlashcardsFromContent, getTopFlashcards } from '@/lib/flashcard-generation'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'
import { effectiveDailyLimits } from '@/lib/flashcard-daily-limits'

/** A topic at or above this masteryLevel is "mastered" (progress/save sets MASTERED here too). */
export const MASTERY_THRESHOLD = 0.9

/** TopicProgress.masteredParts is Json — read it defensively. */
export function parseMasteredParts(value: unknown): number[] {
  if (!Array.isArray(value)) return []
  return value.filter(
    (n): n is number => typeof n === 'number' && Number.isFinite(n) && n >= 1,
  )
}

/**
 * Did this topic's mastery come from the ENTRANCE quiz rather than from
 * grinding through lesson parts?
 *
 * Why the distinction matters (bug, Sept 2026): `calculatePartMastery` in
 * InteractiveLessonRenderer reaches 1.0 the moment the LAST part's sections are
 * all marked complete, and the 3-section batch save / 60s autosave /
 * beforeunload beacon can all fire that while the exit-quiz overlay is still
 * open. TopicProgress flips to MASTERED, and a blanket "mastered ⇒ waive the
 * exit quiz" rule then handed out flashcards and cleared the diagnostic retake
 * gate for a student who never submitted the quiz. Lesson completion alone must
 * NOT satisfy either gate.
 *
 * The waiver exists for a genuinely different case (owner decision 2026-09-09):
 * a student who ACED the entrance quiz tests out of every part, so no
 * ExitQuizAttempt would ever exist and their cards would be locked forever.
 * That path — and only that path — writes TopicProgress.masteredParts (see
 * InteractiveLessonRenderer.handleEntranceQuizComplete), so the stored part
 * list is the distinguishing evidence. No schema change needed.
 *
 * "Aced" = every part of the lesson was tested out of. A partial test-out
 * (some parts mastered, the rest studied) is lesson work and still owes the
 * exit quiz. Authored entrance quizzes sometimes number parts beyond the
 * lesson's own part count (prod has masteredParts [1..7] on a 4-part lesson),
 * so coverage is checked as "parts 1..totalParts are all present", not by size.
 */
export function isEntranceMastery(input: {
  topicSlug: string
  masteryLevel?: number | null
  masteredParts?: unknown
}): boolean {
  if ((input.masteryLevel ?? 0) < MASTERY_THRESHOLD) return false
  const parts = new Set(parseMasteredParts(input.masteredParts))
  if (parts.size === 0) return false
  // Unknown lesson shape (no registered interactive lesson): a non-empty
  // masteredParts still means an entrance-quiz test-out, which is the case the
  // waiver is for — never lock those students out over a missing registry row.
  const totalParts = getInteractiveTopicConfig(input.topicSlug)?.parts.length ?? 0
  if (totalParts === 0) return true
  for (let part = 1; part <= totalParts; part++) {
    if (!parts.has(part)) return false
  }
  return true
}

export interface FlashcardUnlockResult {
  unlocked: boolean
  newCards: number
  totalActive: number
  totalCards: number
  topicTitle: string
}

const LOCKED: FlashcardUnlockResult = {
  unlocked: false,
  newCards: 0,
  totalActive: 0,
  totalCards: 0,
  topicTitle: '',
}

/**
 * THE flashcard unlock rule (owner decision, Aug 2026): a topic's cards join a
 * student's active deck once they have BOTH
 *   (a) done the lesson — completed the self-paced interactive lesson
 *       (TopicProgress COMPLETED/MASTERED), OR attended a live class session
 *       where this topic's slide deck was presented — and
 *   (b) submitted the topic's exit quiz (any score: students who failed need
 *       the cards most; a pass sets TopicProgress MASTERED anyway, so a cold
 *       pass also satisfies (a) — demonstrated mastery counts as the lesson).
 *
 * Nothing else unlocks cards: not diagnostic results, not partial lesson
 * progress, and (since Sept 2026) not finishing the lesson's last part while
 * the exit quiz sits unsubmitted — see isEntranceMastery for the one waiver.
 * Call after exit-quiz submits and lesson-completion progress saves —
 * whichever half completes the pair fires the unlock. Idempotent; cards land
 * in the decks `unlockTargetContexts` picks — personal, the topic's own course
 * mode, and an active class deck — never another course's study mode.
 */
export async function maybeUnlockFlashcards(
  userId: string,
  topicSlug: string,
): Promise<FlashcardUnlockResult> {
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: {
      id: true,
      title: true,
      textContent: true,
      flashcards: { select: { id: true, examYield: true, createdAt: true } },
      exampleProblems: { select: { question: true, solution: true } },
      category: { select: { course: { select: { slug: true } } } },
    },
  })
  if (!topic) return LOCKED

  // (b) exit quiz submitted? Topics with no quiz mapped at all are exempt —
  // requiring an ExitQuizAttempt a student can never produce would lock their
  // cards forever (26 MCAT topics dead-ended this way before their quizzes
  // were mapped); for quiz-less topics the lesson (a) alone unlocks.
  // Fetched up front: needed for both the entrance-mastery waiver in (b) and
  // the lesson check in (a).
  const progress = await prisma.topicProgress.findUnique({
    where: { userId_topicId: { userId, topicId: topic.id } },
    select: { status: true, masteryLevel: true, masteredParts: true },
  })

  // Entrance-mastery waiver (owner decision 2026-09-09), NARROWED Sept 2026:
  // only a student who aced the ENTRANCE quiz skips the exit quiz. Mastery that
  // merely came from finishing lesson parts does not — see isEntranceMastery.
  const entranceMastered = isEntranceMastery({
    topicSlug,
    masteryLevel: progress?.masteryLevel,
    masteredParts: progress?.masteredParts,
  })

  if (hasExitQuiz(topicSlug) && !entranceMastered) {
    const quizAttempt = await prisma.exitQuizAttempt.findFirst({
      where: { userId, topicSlug },
      select: { id: true },
    })
    if (!quizAttempt) return LOCKED
  }

  // (a) lesson done — self-paced completion, or in-class deck attendance.
  // (Entrance mastery sets status MASTERED, so it passes here by construction.)
  let lessonDone = progress?.status === 'COMPLETED' || progress?.status === 'MASTERED'
  if (!lessonDone) {
    const presented = await prisma.slideDeck.findFirst({
      where: { topicSlug, session: { attendance: { some: { userId } } } },
      select: { id: true },
    })
    lessonDone = presented !== null
  }
  if (!lessonDone) return LOCKED

  // Ensure the topic has cards (legacy topics without authored cards get
  // auto-generated ones, same generation the old paths used).
  let cards = topic.flashcards
  if (cards.length === 0) {
    const candidates = generateFlashcardsFromContent(topic.textContent)
    const problemText = topic.exampleProblems
      .map((p) => `${p.question}\n${p.solution}`)
      .join('\n\n')
    if (problemText) candidates.push(...generateFlashcardsFromContent(problemText))
    const top = getTopFlashcards(candidates, 8)
    if (top.length > 0) {
      await prisma.flashcard.createMany({
        data: top.map((card) => ({
          topicId: topic.id,
          front: card.front,
          back: card.back,
          hint: card.hint,
          isPremium: false,
        })),
      })
      cards = await prisma.flashcard.findMany({
        where: { topicId: topic.id },
        select: { id: true, examYield: true, createdAt: true },
      })
    }
  }
  if (cards.length === 0) return LOCKED
  // The drip below schedules by array index, and this query has no ORDER BY,
  // so the order used to be whatever Postgres returned. Now: high-yield cards
  // first, low-yield last (they are still enrolled, so opting in later needs
  // no backfill), and a deterministic tiebreak.
  const cardIds = [...cards].sort(compareByYield).map((f) => f.id)
  const servedCount = cards.filter((f) => f.examYield !== 'LOW').length

  const courseSlug = topic.category?.course?.slug ?? null
  // Which decks these cards belong in: always personal, the topic's OWN course
  // mode when the student has it, plus an active class deck. Never a different
  // course's mode — that mixed SAT cards into the MCAT deck and vice versa.
  const [{ contexts, activeContext }, user] = await Promise.all([
    resolveUnlockContexts(userId, courseSlug),
    prisma.user.findUnique({
      where: { id: userId },
      select: { flashcardNewPerDay: true },
    }),
  ])

  const now = new Date()
  // New-card throttle: a topic unlock used to schedule its whole deck (often
  // 60+ cards) due immediately. Drip instead — the first newPerDay due now,
  // the rest in daily waves — so a big unlock doesn't bury the review queue.
  // The rate is the STUDENT'S new-cards/day setting (default 100 — the old
  // hardcoded 20 stranded big unlocks: 71 MCAT cards, only 20 offered). The
  // stagger is a soft ordering hint anyway: the session builder pulls
  // never-reviewed cards with future nextReview forward up to the remaining
  // daily allowance (see src/lib/flashcard-daily-queue.ts), so cards dripped
  // under an older/lower rate are never stranded. Once reviewed, cards follow
  // the normal SRS schedule.
  const { newPerDay } = effectiveDailyLimits(user)
  const DAY_MS = 24 * 60 * 60 * 1000
  // The toast counts the deck the student will actually find these cards in:
  // the active one when it's a target, else the topic's course deck.
  const courseKey = courseSlug ? `course:${courseSlug}` : null
  const reportContext = contexts.includes(activeContext)
    ? activeContext
    : courseKey && contexts.includes(courseKey)
      ? courseKey
      : PERSONAL_CONTEXT
  let newInActive = 0
  for (const ctx of contexts) {
    const res = await prisma.flashcardProgress.createMany({
      data: cardIds.map((flashcardId, i) => ({
        userId,
        flashcardId,
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
    // The result (toast copy etc.) describes one deck — see reportContext.
    if (ctx === reportContext) newInActive = res.count
  }
  const totalActive = await prisma.flashcardProgress.count({
    where: { userId, context: reportContext, flashcard: { topicId: topic.id } },
  })

  return {
    unlocked: true,
    newCards: newInActive,
    totalActive,
    // What the student will actually find: low-yield cards are hidden by default.
    totalCards: servedCount,
    topicTitle: topic.title,
  }
}
