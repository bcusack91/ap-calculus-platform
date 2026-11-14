'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, BookOpen, CheckCircle2, Circle, Layers, Lock, PlayCircle, Printer, RotateCcw, SkipForward, Users, XCircle } from 'lucide-react'
import VideoPlayer, { type VideoPlayerHandle } from './VideoPlayer'
import { PreferVideoToggle } from './PreferVideoToggle'
import ReviewFlashcards from './ReviewFlashcards'
import { InstructorAvatar } from './InstructorAvatar'
import { MathText } from '@/components/MathText'
import { LessonFigure } from '@/components/lesson/LessonFigure'
import { useActivitySurface } from '@/hooks/useActivitySurface'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { addPlayback, isClipWatched, mergeRanges, watchedFraction, type WatchRange } from '@/lib/video-watch'
import { PART_NOUN, type ProgressSteps, type ReviewCard, type StudentQuestion, type StudentStep } from '@/lib/video-lesson-core'

/**
 * The student video-lesson player (/topics/<slug>/video/<instructor>).
 *
 * Clips play in order. A clip is a whole short video or ONE SECTION of a
 * longer one; sections are listed under the video they came from. A clip
 * unlocks once the one before it is watched (≥90% of real, contiguous
 * playback; seeking ahead plays but doesn't count) and its checkpoint is
 * settled. A section with no question runs straight into the next one.
 *
 * Checkpoints are graded on the server (the page never has the key):
 * - a multiple-choice miss sends the student back through the section, then
 *   asks again; a second miss reveals the answer and explanation;
 * - a worked example's problem section ends on "pause and try it", and the
 *   student types an answer for each part. Every part right earns a green
 *   check and the solution may be skipped; any miss plays the solution
 *   section, which is the explanation.
 *
 * Watch time is saved about every 15 s while playing and on pause, end, clip
 * change and page hide; the server caps claims by wall time, so saves send
 * only what that budget allows and keep the rest for the next one. Finishing
 * every clip and checkpoint completes the lesson (TopicProgress COMPLETED on
 * the server); credit comes from the topic's exit quiz.
 *
 * Before a video's "Remember" section the student works through that video's
 * flashcards (`step.reviewCards`). The run is REQUIRED: the recap clip opens
 * once every card is marked "Got it" (saved as `cardsDone` on the clip's
 * progress). A recap already started before this rule is left alone. The
 * cards reopen, optionally, from the Flashcards button under the video, and
 * the last end screen offers the whole lesson's cards before the exit quiz.
 *
 * A lesson cut from YouTube videos is shown one PART per page (a concept
 * video and its worked examples; students see it called a "Module"). `steps` are then only this part's
 * sections; the part navigator links the others, a part opens once every
 * part before it is done, and a part's end screen leads to the next part
 * (the last part's leads to the exit quiz).
 */

/** One part (page) of the lesson, for the navigator. */
export type PartNav = {
  title: string
  videoTitles: string[]
  sections: number
  minutes: number
  /** Finished, as of page load (the current part's state is live). */
  done: boolean
  href: string
}

export type VideoLessonPlayerProps = {
  lessonId: string
  topicSlug: string
  topicTitle: string
  title: string
  instructor: { name: string; headline: string; photoUrl: string | null }
  /** This part's steps (all of them when the lesson has one part). */
  steps: StudentStep[]
  parts?: PartNav[]
  partIndex?: number
  /** This part is finished (open on its end screen). Defaults to initiallyComplete. */
  partInitiallyComplete?: boolean
  initialProgress: ProgressSteps
  initialIndex: number
  initiallyComplete: boolean
  /** The instructor picker, when there's more than one instructor to choose. */
  pickerHref: string | null
  readHref: string
  /** The lesson's printable note sheets for this module, when the topic has them. */
  notesHref?: string | null
  exitQuizHref: string | null
  /** Every review flashcard of the lesson: offered on the last end screen, before the exit quiz. */
  allReviewCards?: ReviewCard[]
  /** Arrived from a short link (/v/<code>): open this clip's checkpoint straight away. */
  openCheckpointOnLoad?: boolean
}

type AnswerState = { correct: boolean; attempts: number; settled: boolean; exempt?: boolean }
type Answered = Record<string, Record<string, AnswerState>>
type Phase = 'video' | 'checkpoint' | 'done' | 'cards'
type Result =
  | { kind: 'choice'; correct: boolean; reveal: boolean; correctIndex: number | null; explanation: string; chosen: number }
  | { kind: 'numeric'; correct: boolean; parts: { correct: boolean; expected: string }[]; explanation: string }
type Flashcards = { newCards: number; topicTitle?: string }

const SAVE_EVERY_MS = 15_000
/** Client-side claim budget: a little under the server's 2.1× speed + 12 s slack. */
const BUDGET_SPEED = 2
const BUDGET_SLACK_S = 8

const round1 = (n: number) => Math.round(n * 10) / 10

function fmtClock(s: number): string {
  const total = Math.max(0, Math.round(s))
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

/** Parts of `local` not covered by `server` (both merged and sorted). */
function uncovered(local: WatchRange[], server: WatchRange[]): WatchRange[] {
  const out: WatchRange[] = []
  for (const [a, b] of local) {
    let cur = a
    for (const [s, e] of server) {
      if (e <= cur) continue
      if (s >= b) break
      if (s > cur) out.push([cur, Math.min(s, b)])
      cur = Math.max(cur, e)
      if (cur >= b) break
    }
    if (cur < b) out.push([cur, b])
  }
  return out
}

/** What one save may send: the server's ranges plus new playback, earliest first, up to `budget` seconds. */
function rangesWithinBudget(server: WatchRange[], local: WatchRange[], budget: number, duration: number): { send: WatchRange[]; leftover: boolean } {
  const srv = mergeRanges(server, duration)
  const fresh = uncovered(mergeRanges(local, duration), srv)
  const taken: WatchRange[] = []
  let left = Math.max(0, budget)
  let leftover = false
  for (const [a, b] of fresh) {
    if (left <= 0) {
      leftover = true
      break
    }
    const len = b - a
    if (len <= left) {
      taken.push([a, b])
      left -= len
    } else {
      taken.push([a, a + left])
      left = 0
      leftover = true
    }
  }
  return { send: mergeRanges([...srv, ...taken], duration).map(([a, b]) => [round1(a), round1(b)] as WatchRange), leftover }
}

/** A question needs no further attempt: right, numeric answered once, or a choice missed twice (revealed). */
function settledFor(q: StudentQuestion, correct: boolean, attempts: number): boolean {
  return correct || q.kind === 'numeric' || attempts >= 2
}

function initialAnswered(steps: StudentStep[], progress: ProgressSteps): Answered {
  const out: Answered = {}
  for (const s of steps) {
    for (const q of s.questions) {
      const a = progress[s.clipId]?.answered?.[String(q.index)]
      if (!a) continue
      const attempts = a.attempts ?? 1
      ;(out[s.clipId] ??= {})[String(q.index)] = { correct: !!a.correct, attempts, settled: !!a.exempt || settledFor(q, !!a.correct, attempts), ...(a.exempt && !a.correct ? { exempt: true } : {}) }
    }
  }
  return out
}

function initialRanges(steps: StudentStep[], progress: ProgressSteps): Record<string, WatchRange[]> {
  const out: Record<string, WatchRange[]> = {}
  for (const s of steps) out[s.clipId] = mergeRanges(progress[s.clipId]?.ranges ?? [], s.durationSec)
  return out
}

/** Pick up mid-clip: the end of the stretch watched from the start, if the clip isn't done yet. */
function resumeAt(ranges: WatchRange[], duration: number): number {
  if (isClipWatched(ranges, duration)) return 0
  const first = ranges[0]
  if (first && first[0] <= 2 && first[1] > 5 && first[1] < duration - 5) return Math.max(0, first[1] - 2)
  return 0
}

/** The steps grouped under the video they came from (one group when clips are whole videos). */
function groupSteps(steps: StudentStep[]): { key: string; title: string | null; items: { step: StudentStep; i: number }[] }[] {
  const groups: { key: string; title: string | null; items: { step: StudentStep; i: number }[] }[] = []
  steps.forEach((step, i) => {
    const key = step.video === null ? 'all' : `v${step.video}`
    let g = groups[groups.length - 1]
    if (!g || g.key !== key) {
      g = { key, title: step.video === null ? null : step.videoTitle ?? `Video ${step.video}`, items: [] }
      groups.push(g)
    }
    g.items.push({ step, i })
  })
  return groups
}

export default function VideoLessonPlayer({
  lessonId,
  topicSlug,
  topicTitle,
  title,
  instructor,
  steps,
  parts = [],
  partIndex = 0,
  partInitiallyComplete,
  initialProgress,
  initialIndex,
  initiallyComplete,
  pickerHref,
  readHref,
  notesHref = null,
  exitQuizHref,
  allReviewCards = [],
  openCheckpointOnLoad = false,
}: VideoLessonPlayerProps) {
  const [index, setIndex] = useState(() => Math.min(Math.max(initialIndex, 0), Math.max(steps.length - 1, 0)))
  const [ranges, setRanges] = useState(() => initialRanges(steps, initialProgress))
  const [answered, setAnswered] = useState<Answered>(() => initialAnswered(steps, initialProgress))
  const router = useRouter()
  /** Recap clips whose flashcards are finished (kept in a ref too: saves read it). */
  const cardsDoneRef = useRef(new Set<string>(steps.filter((s) => !!initialProgress[s.clipId]?.cardsDone).map((s) => s.clipId)))
  /**
   * A recap's flashcards must be finished before its clip plays. A recap whose
   * clip was already started (before this rule, or with the cards done) is not gated.
   */
  const cardsRequiredFor = (s: StudentStep | undefined, rg: WatchRange[]) =>
    !!s?.reviewCards?.length && !cardsDoneRef.current.has(s.clipId) && rg.length === 0
  const [phase, setPhase] = useState<Phase>(() => {
    if ((partInitiallyComplete ?? initiallyComplete) && !openCheckpointOnLoad) return 'done'
    const s = steps[Math.min(Math.max(initialIndex, 0), Math.max(steps.length - 1, 0))]
    return cardsRequiredFor(s, s ? mergeRanges(initialProgress[s.clipId]?.ranges ?? [], s.durationSec) : []) ? 'cards' : 'video'
  })
  /** Flashcards opened by the student from the button (optional), and where to go back to. */
  const [cardsAsked, setCardsAsked] = useState(false)
  const cardsReturnRef = useRef<'video' | 'checkpoint' | 'done'>('video')
  const [playing, setPlaying] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const [skipNotice, setSkipNotice] = useState(false)
  const [complete, setComplete] = useState(initiallyComplete)
  const [flashcards, setFlashcards] = useState<Flashcards | null>(null)

  // Checkpoint card
  const [qPos, setQPos] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [values, setValues] = useState<string[]>([])
  const [result, setResult] = useState<Result | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [answerError, setAnswerError] = useState<string | null>(null)
  const [reviewing, setReviewing] = useState(false)
  const shownAtRef = useRef(0)
  /** After "Rewatch this section": the question to come back to when the clip ends. */
  const retryRef = useRef<number | null>(null)

  const playerRef = useRef<VideoPlayerHandle>(null)
  const checkpointRef = useRef<HTMLDivElement>(null)
  const endRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  // Save bookkeeping (refs: read by timers and unload handlers).
  const rangesRef = useRef(ranges)
  const answeredRef = useRef(answered)
  const serverRef = useRef<Record<string, WatchRange[]>>(initialRanges(steps, initialProgress))
  const dirtyRef = useRef(new Set<string>())
  const activeRef = useRef({ seconds: 0, lastTick: null as number | null })
  const lastSaveAtRef = useRef(0)
  const chainRef = useRef<Promise<void>>(Promise.resolve())
  const indexRef = useRef(index)

  useEffect(() => {
    lastSaveAtRef.current = Date.now()
  }, [])

  const step = steps[index]

  /** A solution section may be skipped when the problem before it was solved fully on the first try. */
  const solutionSkippable = useCallback(
    (i: number, ans: Answered) => {
      const s = steps[i]
      const prev = steps[i - 1]
      if (!s || s.role !== 'solution' || !prev || prev.role !== 'problem') return false
      const numeric = prev.questions.filter((q) => q.kind === 'numeric')
      return numeric.length > 0 && numeric.every((q) => {
        const a = ans[prev.clipId]?.[String(q.index)]
        return !!a?.correct && a.attempts === 1
      })
    },
    [steps],
  )
  const stepIsDoneWith = useCallback(
    (i: number, rg: Record<string, WatchRange[]>, ans: Answered) => {
      const s = steps[i]
      if (!s) return false
      const watched = isClipWatched(rg[s.clipId] ?? [], s.durationSec) || solutionSkippable(i, ans)
      return watched && s.questions.every((q) => !!ans[s.clipId]?.[String(q.index)]?.settled)
    },
    [steps, solutionSkippable],
  )
  const stepIsDone = useCallback((i: number) => stepIsDoneWith(i, ranges, answered), [stepIsDoneWith, ranges, answered])
  const unlocked = (i: number) => steps.slice(0, i).every((_, k) => stepIsDone(k))
  const allDone = steps.length > 0 && steps.every((_, i) => stepIsDone(i))

  useActivitySurface(
    phase === 'cards' ? { surface: 'FLASHCARDS', topicSlug } : playing ? { surface: 'VIDEO', topicSlug, timed: true } : { surface: 'VIDEO', topicSlug },
  )

  const applyRanges = (next: Record<string, WatchRange[]>) => {
    rangesRef.current = next
    setRanges(next)
  }
  const applyAnswered = (fn: (prev: Answered) => Answered) => {
    answeredRef.current = fn(answeredRef.current)
    setAnswered(answeredRef.current)
  }

  /** Send dirty clips' new watch time (and active seconds). Chained, or direct with keepalive on page hide. */
  const save = useCallback(
    (keepalive = false): Promise<void> => {
      const run = async () => {
        const clips = [...dirtyRef.current]
        const active = Math.min(3600, Math.floor(activeRef.current.seconds))
        if (clips.length === 0 && active < 1) return
        const current = steps[indexRef.current]
        const targets = clips.length ? clips : current ? [current.clipId] : []
        if (targets.length === 0) return
        dirtyRef.current.clear()
        activeRef.current.seconds -= active
        let budget = ((Date.now() - lastSaveAtRef.current) / 1000) * BUDGET_SPEED + BUDGET_SLACK_S
        let activeLeft = active
        for (const clipId of targets) {
          const s = steps.find((x) => x.clipId === clipId)
          if (!s) continue
          const { send, leftover } = rangesWithinBudget(serverRef.current[clipId] ?? [], rangesRef.current[clipId] ?? [], budget, s.durationSec)
          lastSaveAtRef.current = Date.now()
          budget = BUDGET_SLACK_S
          try {
            const res = await fetch(`/api/video-lessons/${encodeURIComponent(lessonId)}/progress`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ clipId, ranges: send, ...(activeLeft > 0 ? { activeSeconds: activeLeft } : {}), ...(cardsDoneRef.current.has(clipId) ? { cardsDone: true } : {}) }),
              keepalive,
            })
            if (!res.ok) throw new Error(String(res.status))
            activeLeft = 0
            const body = await res.json()
            const server = mergeRanges(Array.isArray(body?.watchedRanges) ? body.watchedRanges : [], s.durationSec)
            serverRef.current = { ...serverRef.current, [clipId]: server }
            const merged = mergeRanges([...(rangesRef.current[clipId] ?? []), ...server], s.durationSec)
            if (!keepalive) applyRanges({ ...rangesRef.current, [clipId]: merged })
            if (leftover || body?.accepted === false) dirtyRef.current.add(clipId)
            if (body?.complete) setComplete(true)
            if (body?.flashcards?.newCards) setFlashcards({ newCards: body.flashcards.newCards, topicTitle: body.flashcards.topicTitle })
          } catch {
            dirtyRef.current.add(clipId)
          }
        }
        if (activeLeft > 0) activeRef.current.seconds += activeLeft
      }
      if (keepalive) return run()
      chainRef.current = chainRef.current.then(run, run)
      return chainRef.current
    },
    [lessonId, steps],
  )

  // Page hide / tab switch / leaving the page: flush what's unsaved.
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') void save(true)
    }
    const onPageHide = () => void save(true)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
      void save(true)
    }
  }, [save])

  // Bring the checkpoint card into view on phones (it sits below the video).
  useEffect(() => {
    if (phase === 'checkpoint') checkpointRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [phase, qPos])

  // Moving on to another section (after a checkpoint, the flashcards, a skip,
  // or a click in the section list) brings the video back to the top of the
  // screen: the student was just reading a card below it. Not on first load.
  const videoShownRef = useRef({ index, phase })
  useEffect(() => {
    const prev = videoShownRef.current
    videoShownRef.current = { index, phase }
    if (phase !== 'video' || (prev.index === index && prev.phase === 'video')) return
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [index, phase])

  // A finished part's end screen (with "Next part") replaces a card further down the page: bring it into view.
  const loadedRef = useRef(false)
  useEffect(() => {
    if (!loadedRef.current) {
      loadedRef.current = true
      return
    }
    if (phase === 'done') endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [phase])

  const handleProgress = (clipId: string, duration: number, from: number, to: number) => {
    const now = Date.now()
    const a = activeRef.current
    if (a.lastTick !== null) a.seconds += Math.min(2, Math.max(0, (now - a.lastTick) / 1000))
    a.lastTick = now
    const prev = rangesRef.current[clipId] ?? []
    const next = addPlayback(prev, from, to, duration)
    let crossed = false
    if (JSON.stringify(next) !== JSON.stringify(prev)) {
      applyRanges({ ...rangesRef.current, [clipId]: next })
      dirtyRef.current.add(clipId)
      // Bank the 90% mark at once, so the checkpoint (graded against the server's copy) is ready.
      crossed = !isClipWatched(prev, duration) && isClipWatched(next, duration)
    }
    if (crossed || now - lastSaveAtRef.current >= SAVE_EVERY_MS) void save()
  }

  const handlePlayingChange = (next: boolean) => {
    setPlaying(next)
    if (next) {
      activeRef.current.lastTick = Date.now()
      setSkipNotice(false)
    } else {
      activeRef.current.lastTick = null
      void save()
    }
  }

  const firstOpenQuestion = (s: StudentStep) => s.questions.findIndex((q) => !answeredRef.current[s.clipId]?.[String(q.index)]?.settled)

  const resetCard = () => {
    setSelected(null)
    setValues([])
    setResult(null)
    setAnswerError(null)
    shownAtRef.current = Date.now()
  }

  const openCheckpoint = (from?: number) => {
    if (!step) return
    playerRef.current?.pause()
    const open = firstOpenQuestion(step)
    setReviewing(open === -1 && from === undefined)
    setQPos(from ?? Math.max(0, open))
    resetCard()
    setPhase('checkpoint')
    void save()
  }

  // A short link from a YouTube video lands on the clip's checkpoint: the
  // student usually watched the clip on YouTube already. Once, on load.
  const openedFromLinkRef = useRef(false)
  useEffect(() => {
    if (!openCheckpointOnLoad || openedFromLinkRef.current) return
    openedFromLinkRef.current = true
    openCheckpoint()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCheckpointOnLoad])

  /** Move to step i without the unlock check (the caller just made it reachable). */
  const advanceTo = (i: number, play: boolean) => {
    void save()
    retryRef.current = null
    indexRef.current = i
    setIndex(i)
    setAutoPlay(play)
    setSkipNotice(false)
    resetCard()
    // Arriving at a recap: its flashcards come first, until they are finished.
    const s = steps[i]
    if (cardsRequiredFor(s, s ? rangesRef.current[s.clipId] ?? [] : [])) {
      cardsReturnRef.current = 'video'
      setCardsAsked(false)
      setPlaying(false)
      activeRef.current.lastTick = null
      setPhase('cards')
      return
    }
    setPhase('video')
  }

  /** The Flashcards button on a recap section: open the cards, then come back to where the student was. */
  const openCards = () => {
    if (!step?.reviewCards?.length) return
    playerRef.current?.pause()
    void save()
    cardsReturnRef.current = phase === 'checkpoint' ? 'checkpoint' : 'video'
    setCardsAsked(true)
    setPlaying(false)
    activeRef.current.lastTick = null
    setPhase('cards')
  }
  /** The last end screen: the whole lesson's cards before the exit quiz. */
  const openAllCards = () => {
    cardsReturnRef.current = 'done'
    setCardsAsked(true)
    setPhase('cards')
  }
  /** Every card of the recap's deck marked "Got it": record it, so the recap opens (and stays open on reload). */
  const completeCards = () => {
    if (!step?.reviewCards?.length || cardsReturnRef.current === 'done') return
    cardsDoneRef.current.add(step.clipId)
    dirtyRef.current.add(step.clipId)
    void save()
  }
  const closeCards = () => {
    const back = cardsReturnRef.current
    if (back === 'done' && exitQuizHref) {
      router.push(exitQuizHref)
      return
    }
    // After the offer the recap starts playing; reopened mid-section it waits for the student.
    setAutoPlay(back === 'video' && !cardsAsked)
    if (back === 'checkpoint') shownAtRef.current = Date.now()
    setPhase(back)
  }

  const handleEnded = (clipId: string, duration: number) => {
    void save()
    if (!isClipWatched(rangesRef.current[clipId] ?? [], duration)) {
      setSkipNotice(true)
      return
    }
    setSkipNotice(false)
    // A section with nothing to ask runs straight on.
    if (step && step.questions.length === 0 && retryRef.current === null && index + 1 < steps.length) {
      advanceTo(index + 1, true)
      return
    }
    openCheckpoint(retryRef.current ?? undefined)
    retryRef.current = null
  }

  const goTo = (i: number, play: boolean) => {
    if (i < 0 || i >= steps.length || !unlocked(i)) return
    advanceTo(i, play)
  }

  const submitAnswer = async () => {
    if (!step || submitting) return
    const q = step.questions[qPos]
    if (!q) return
    const payload: Record<string, unknown> = { clipId: step.clipId, questionIndex: q.index, durationMs: Math.min(3_600_000, Date.now() - shownAtRef.current) }
    if (q.kind === 'numeric') {
      if (q.parts.some((_, i) => !(values[i] ?? '').trim())) return
      payload.values = q.parts.map((_, i) => (values[i] ?? '').trim().slice(0, 60))
    } else {
      if (selected === null) return
      payload.chosenIndex = selected
    }
    setSubmitting(true)
    setAnswerError(null)
    const post = () =>
      fetch(`/api/video-lessons/${encodeURIComponent(lessonId)}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    try {
      let res = await post()
      if (res.status === 409) {
        // The server hasn't banked this clip's watch time yet: flush, then retry once.
        dirtyRef.current.add(step.clipId)
        await save()
        res = await post()
      }
      if (res.status === 409) {
        setAnswerError('Your watch time is still saving. Keep watching for a few more seconds, then try again.')
        return
      }
      if (!res.ok) {
        setAnswerError('That answer didn’t go through. Check your connection and try again.')
        return
      }
      const body = await res.json()
      const correct = !!body.correct
      const attempts = Number(body.attempts) || 1
      if (q.kind === 'numeric') {
        setResult({
          kind: 'numeric',
          correct,
          parts: q.parts.map((_, i) => ({ correct: !!body.parts?.[i]?.correct, expected: String(body.parts?.[i]?.expected ?? '') })),
          explanation: String(body.explanation ?? ''),
        })
      } else {
        setResult({
          kind: 'choice',
          correct,
          reveal: !!body.reveal,
          correctIndex: typeof body.correctIndex === 'number' ? body.correctIndex : null,
          explanation: String(body.explanation ?? ''),
          chosen: selected ?? 0,
        })
      }
      applyAnswered((prev) => {
        const before = prev[step.clipId]?.[String(q.index)]
        const everCorrect = before ? before.correct || correct : correct
        return {
          ...prev,
          [step.clipId]: {
            ...prev[step.clipId],
            [String(q.index)]: { correct: everCorrect, attempts, settled: settledFor(q, everCorrect, attempts) },
          },
        }
      })
      if (body.complete) setComplete(true)
      if (body.flashcards?.newCards) setFlashcards({ newCards: body.flashcards.newCards, topicTitle: body.flashcards.topicTitle })
    } catch {
      setAnswerError('That answer didn’t go through. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const continueAfterQuestion = () => {
    if (!step) return
    if (qPos + 1 < step.questions.length) {
      setQPos(qPos + 1)
      resetCard()
      return
    }
    finishCheckpoint()
  }

  const finishCheckpoint = () => {
    if (index + 1 < steps.length) {
      // The answer just recorded unlocks the next clip; go directly.
      advanceTo(index + 1, true)
    } else {
      void save()
      setPhase('done')
    }
  }

  const rewatch = () => {
    retryRef.current = qPos
    setResult(null)
    setSelected(null)
    setValues([])
    setPhase('video')
    playerRef.current?.seekTo(0)
    playerRef.current?.play()
  }

  /** After a worked example: the next step is its solution clip. */
  const nextIsSolution = !!step && steps[index + 1]?.role === 'solution'
  /** The question on screen is the step's last one (a problem may ask parts a–b, then c). */
  const lastInStep = !!step && qPos + 1 >= step.questions.length
  /** Every numeric question of this problem right on the first try: the solution may be skipped. */
  const stepSolvedFirstTry = nextIsSolution && solutionSkippable(index + 1, answered)
  const skipSolution = () => {
    if (index + 2 < steps.length) advanceTo(index + 2, true)
    else {
      void save()
      setPhase('done')
    }
  }

  // ── Derived display values ──
  const clipsWatched = steps.filter((_, i) => isClipWatched(ranges[steps[i].clipId] ?? [], steps[i].durationSec) || solutionSkippable(i, answered)).length
  let scoreCorrect = 0
  let scoreTotal = 0
  for (const s of steps) {
    for (const q of s.questions) {
      const a = answered[s.clipId]?.[String(q.index)]
      if (a?.exempt) continue
      scoreTotal++
      if (a?.correct && a.attempts === 1) scoreCorrect++
    }
  }
  // Parts: the current part's "done" is live; a part opens once every part before it is done.
  const multiPart = parts.length > 1
  const partLiveDone = (k: number) => (k === partIndex ? allDone : parts[k]?.done ?? false)
  const partOpen = (k: number) => parts.slice(0, k).every((_, j) => partLiveDone(j))
  const nextPart = multiPart && partIndex + 1 < parts.length ? parts[partIndex + 1] : null
  const lessonDone = complete || (allDone && parts.every((p, k) => k === partIndex || p.done))
  const [leaving, setLeaving] = useState(false)
  const goToPart = async (href: string) => {
    if (leaving) return
    setLeaving(true)
    // Bank the last watch time first, so the next page sees this part as finished.
    await save()
    router.push(href)
  }

  const curRanges = step ? ranges[step.clipId] ?? [] : []
  const curPct = step ? Math.round(watchedFraction(curRanges, step.durationSec) * 100) : 0
  const curWatched = step ? isClipWatched(curRanges, step.durationSec) : false
  const curQuestion = step?.questions[qPos]
  const groups = groupSteps(steps)
  const sectioned = groups.some((g) => g.title !== null)
  const stepLabel = (i: number) => {
    const g = groups.find((x) => x.items.some((it) => it.i === i))
    const n = g ? g.items.findIndex((it) => it.i === i) + 1 : i + 1
    return sectioned ? `Section ${n} of ${g?.items.length ?? steps.length}` : `Clip ${i + 1} of ${steps.length}`
  }

  if (!step) {
    return <p className="py-10 text-center text-gray-600 dark:text-gray-400">This video lesson has no clips yet.</p>
  }

  const header = (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <Link href={`/topics/${topicSlug}`} className="text-gray-500 hover:text-accent dark:text-gray-400">
          {topicTitle}
        </Link>
        <span className="flex-1" />
        {pickerHref && (
          <Link href={pickerHref} className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
            <Users className="h-4 w-4" aria-hidden /> Change instructor
          </Link>
        )}
        {notesHref && (
          <Link href={notesHref} target="_blank" className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
            <Printer className="h-4 w-4" aria-hidden /> Print notes
          </Link>
        )}
        <Link href={readHref} className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
          <BookOpen className="h-4 w-4" aria-hidden /> Read instead
        </Link>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <InstructorAvatar name={instructor.name} photoUrl={instructor.photoUrl} />
        <div className="min-w-0">
          <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white sm:text-2xl">{title}</h1>
          <p className="truncate text-sm text-gray-600 dark:text-gray-400">
            {instructor.name}
            {instructor.headline ? ` · ${instructor.headline}` : ''}
          </p>
        </div>
      </div>
      {multiPart && (
        <nav aria-label={`Lesson ${PART_NOUN.toLowerCase()}s`} className="mt-4">
          <ol className="flex flex-wrap gap-2">
            {parts.map((p, k) => {
              const current = k === partIndex
              const done = partLiveDone(k)
              const open = partOpen(k)
              const Icon = done ? CheckCircle2 : !open ? Lock : current ? PlayCircle : Circle
              const body = (
                <>
                  <Icon
                    className={`mt-0.5 h-5 w-5 shrink-0 ${done ? 'text-green-600 dark:text-green-400' : current ? 'text-accent dark:text-accent-muted' : 'text-gray-400 dark:text-gray-500'}`}
                    aria-hidden
                  />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{PART_NOUN} {k + 1}</span>
                    <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">{p.title}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      {p.videoTitles.length} {p.videoTitles.length === 1 ? 'video' : 'videos'} · {p.minutes} min
                      {done ? ' · done' : !open ? ' · locked' : ''}
                    </span>
                  </span>
                </>
              )
              const cls = `flex h-full items-start gap-2.5 rounded-xl border px-3 py-2 text-left transition-colors ${
                current
                  ? 'border-accent-muted bg-accent-subtle dark:border-accent-hover dark:bg-accent-light/20'
                  : open
                    ? 'border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800'
                    : 'cursor-not-allowed border-gray-200 opacity-50 dark:border-gray-700'
              }`
              return (
                <li key={p.href} className="min-w-[10rem] flex-1">
                  {current ? (
                    <div aria-current="page" className={cls}>{body}</div>
                  ) : open ? (
                    <button type="button" onClick={() => void goToPart(p.href)} className={`w-full ${cls}`}>{body}</button>
                  ) : (
                    <div aria-disabled="true" className={cls}>{body}</div>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      )}
    </div>
  )

  const clipList = (
    <nav aria-label={sectioned ? 'Sections' : 'Clips'} className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <p className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {steps.length} {sectioned ? 'sections' : 'clips'} · {Math.max(1, Math.round(steps.reduce((n, s) => n + s.durationSec, 0) / 60))} min
      </p>
      {groups.map((g) => (
        <div key={g.key} className="mt-1">
          {g.title && <p className="px-3 pb-1 pt-2 text-sm font-semibold text-gray-800 dark:text-gray-200">{g.title}</p>}
          <ol className="space-y-1">
            {g.items.map(({ step: s, i }, n) => {
              const done = stepIsDone(i)
              const open = unlocked(i)
              const current = i === index && phase !== 'done'
              const skipped = !isClipWatched(ranges[s.clipId] ?? [], s.durationSec) && solutionSkippable(i, answered)
              const pct = Math.round(watchedFraction(ranges[s.clipId] ?? [], s.durationSec) * 100)
              const Icon = done ? CheckCircle2 : !open ? Lock : current ? PlayCircle : Circle
              return (
                <li key={s.clipId}>
                  <button
                    type="button"
                    onClick={() => goTo(i, true)}
                    disabled={!open}
                    aria-current={current ? 'step' : undefined}
                    className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                      current
                        ? 'bg-accent-subtle ring-1 ring-accent-muted dark:bg-accent-light/20 dark:ring-accent-hover'
                        : open
                          ? 'hover:bg-gray-50 dark:hover:bg-gray-800'
                          : 'cursor-not-allowed opacity-50'
                    }`}
                  >
                    <Icon
                      className={`mt-0.5 h-5 w-5 shrink-0 ${done ? 'text-green-600 dark:text-green-400' : current ? 'text-accent dark:text-accent-muted' : 'text-gray-400 dark:text-gray-500'}`}
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        {n + 1}. {s.title}
                      </span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">
                        {fmtClock(s.durationSec)}
                        {s.questions.length > 0 ? ` · ${s.questions.length === 1 ? '1 question' : `${s.questions.length} questions`}` : ''}
                        {s.reviewCards?.length ? ` · ${s.reviewCards.length} flashcards first` : ''}
                        {!done && pct > 0 ? ` · ${pct}% watched` : ''}
                        {!open ? ' · locked' : ''}
                        {done ? (skipped ? ' · skipped, solved' : ' · done') : ''}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      ))}
    </nav>
  )

  const primaryBtn = 'inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover'
  const secondaryBtn = 'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'

  const endScreen = (
    <div ref={endRef} className="scroll-mt-20 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8" data-testid="video-lesson-end">
      <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-600 dark:text-green-400" aria-hidden />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {nextPart ? (allDone ? `${PART_NOUN} ${partIndex + 1} complete: ${parts[partIndex].title}` : 'Almost there') : lessonDone ? 'Video lesson complete' : 'Almost there'}
      </h2>
      {nextPart && !allDone && (
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">Finish every section in this {PART_NOUN.toLowerCase()} to open {PART_NOUN} {partIndex + 2}.</p>
      )}
      <div className="mx-auto mt-5 grid max-w-sm grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {clipsWatched}/{steps.length}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{sectioned ? 'sections watched' : 'clips watched'}</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {scoreCorrect}/{scoreTotal}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">checkpoints right first try</p>
        </div>
      </div>
      {flashcards && (
        <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2 rounded-xl bg-accent-subtle px-4 py-2 text-sm text-accent-dark dark:bg-accent-light/20 dark:text-accent-muted">
          <Layers className="h-4 w-4 shrink-0" aria-hidden />
          {flashcards.newCards} new flashcard{flashcards.newCards === 1 ? '' : 's'} unlocked{flashcards.topicTitle ? ` for ${flashcards.topicTitle}` : ''}.
        </p>
      )}
      {nextPart ? (
        <>
          <button
            type="button"
            onClick={() => void goToPart(nextPart.href)}
            disabled={!allDone || leaving}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Next: {PART_NOUN} {partIndex + 2} · {nextPart.title} <ArrowRight className="h-5 w-5" aria-hidden />
          </button>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400">
            {nextPart.videoTitles.join(' and ')} · {nextPart.minutes} min
          </p>
        </>
      ) : exitQuizHref ? (
        <>
          <Link
            href={exitQuizHref}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Take the exit quiz <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400">
            You get credit for {topicTitle} by scoring {TOPIC_CLEAR_PERCENT}% or higher on the exit quiz.
          </p>
          {allReviewCards.length > 0 && (
            <div className="mx-auto mt-4 max-w-md rounded-xl bg-accent-subtle p-4 dark:bg-accent-light/20">
              <p className="text-sm text-gray-700 dark:text-gray-300">Want the equations fresh first? Run through this lesson&apos;s flashcards, then take the quiz.</p>
              <button type="button" onClick={openAllCards} className={`mt-3 w-full sm:w-auto ${secondaryBtn} bg-white dark:bg-gray-900`}>
                <Layers className="h-4 w-4" aria-hidden /> Study the flashcards first · {allReviewCards.length}
              </button>
            </div>
          )}
        </>
      ) : (
        <Link
          href={`/topics/${topicSlug}`}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-accent-hover"
        >
          Back to {topicTitle} <ArrowRight className="h-5 w-5" aria-hidden />
        </Link>
      )}
      <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        <button type="button" onClick={() => setPhase('video')} className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
          <RotateCcw className="h-4 w-4" aria-hidden /> Rewatch a {sectioned ? 'section' : 'clip'}
        </button>
        <Link href={readHref} className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
          <BookOpen className="h-4 w-4" aria-hidden /> Read the lesson
        </Link>
      </div>
    </div>
  )

  const optionClass = (i: number) => {
    if (result && result.kind === 'choice') {
      if (result.reveal && i === result.correctIndex) return 'border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/20'
      if (i === result.chosen) return result.correct ? 'border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-900/20'
      return 'border-gray-200 opacity-70 dark:border-gray-700'
    }
    return selected === i
      ? 'border-accent bg-accent-subtle dark:border-accent-muted dark:bg-accent-light/20'
      : 'border-gray-200 hover:border-accent-muted dark:border-gray-700 dark:hover:border-accent-hover'
  }


  const choiceCard = (q: Extract<StudentQuestion, { kind: 'choice' }>) => {
    const r = result && result.kind === 'choice' ? result : null
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">
          Checkpoint · Question {qPos + 1} of {step.questions.length}
        </p>
        <MathText text={q.question} className="mt-2 text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg" />
        {q.figure && (
          <div className="mt-3">
            <LessonFigure figure={q.figure} />
          </div>
        )}
        <fieldset className="mt-4 space-y-2" disabled={!!r || submitting}>
          <legend className="sr-only">Choose an answer</legend>
          {q.options.map((opt, i) => (
            <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-3 py-2.5 transition-colors ${optionClass(i)}`}>
              <input
                type="radio"
                name={`cp-${step.clipId}-${q.index}`}
                className="mt-1 h-4 w-4 shrink-0 accent-accent"
                checked={selected === i}
                onChange={() => setSelected(i)}
              />
              <MathText text={opt} inline className="min-w-0 flex-1 text-sm text-gray-800 dark:text-gray-200 sm:text-base" />
              {r && r.reveal && i === r.correctIndex && <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" aria-label="Correct answer" />}
              {r && i === r.chosen && !r.correct && <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" aria-label="Your answer" />}
            </label>
          ))}
        </fieldset>
        {answerError && <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">{answerError}</p>}
        {r ? (
          <div className="mt-4" aria-live="polite">
            {r.correct ? (
              <p className="font-semibold text-green-700 dark:text-green-400">Correct!</p>
            ) : r.reveal ? (
              <p className="font-semibold text-red-700 dark:text-red-400">Not quite. Here&apos;s the answer.</p>
            ) : (
              <p className="font-semibold text-red-700 dark:text-red-400">Not quite. Watch this section again, then try once more.</p>
            )}
            {r.reveal && r.explanation && <MathText text={r.explanation} className="mt-1 text-sm text-gray-700 dark:text-gray-300" />}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              {!r.correct && !r.reveal ? (
                <button type="button" onClick={rewatch} className={primaryBtn}>
                  <RotateCcw className="h-4 w-4" aria-hidden /> Rewatch this section
                </button>
              ) : (
                <>
                  {!r.correct && (
                    <button type="button" onClick={rewatch} className={secondaryBtn}>
                      <RotateCcw className="h-4 w-4" aria-hidden /> Rewatch this section
                    </button>
                  )}
                  <button type="button" onClick={continueAfterQuestion} className={primaryBtn}>
                    Continue <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={submitAnswer}
              disabled={selected === null || submitting}
              className="w-full rounded-xl bg-accent px-6 py-2.5 font-semibold text-white hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {submitting ? 'Checking…' : 'Submit'}
            </button>
          </div>
        )}
      </div>
    )
  }

  const numericCard = (q: Extract<StudentQuestion, { kind: 'numeric' }>) => {
    const r = result && result.kind === 'numeric' ? result : null
    const filled = q.parts.every((_, i) => (values[i] ?? '').trim().length > 0)
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">Your turn · type your answers</p>
        <MathText text={q.question} className="mt-2 text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg" />
        {q.figure && (
          <div className="mt-3">
            <LessonFigure figure={q.figure} />
          </div>
        )}
        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault()
            void submitAnswer()
          }}
        >
          <fieldset className="space-y-3" disabled={!!r || submitting}>
            <legend className="sr-only">Answers</legend>
            {q.parts.map((p, i) => {
              const pr = r?.parts[i]
              const ring = pr ? (pr.correct ? 'border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-900/20') : 'border-gray-200 dark:border-gray-700'
              return (
                <div key={p.label} className={`rounded-xl border-2 px-3 py-2.5 ${ring}`}>
                  <label htmlFor={`np-${step.clipId}-${q.index}-${i}`} className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    ({p.label}) <MathText text={p.prompt} inline />
                  </label>
                  <div className="mt-1.5 flex items-center gap-2">
                    <input
                      id={`np-${step.clipId}-${q.index}-${i}`}
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      spellCheck={false}
                      placeholder="e.g. 1.6e-2 or 1.6 × 10^-2"
                      value={values[i] ?? ''}
                      onChange={(e) => setValues((v) => q.parts.map((_, k) => (k === i ? e.target.value : v[k] ?? '')))}
                      className="w-full max-w-xs rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-muted dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                    {p.unit && <span className="text-sm text-gray-600 dark:text-gray-400">{p.unit}</span>}
                    {pr && (pr.correct ? <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" aria-label="Correct" /> : <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" aria-label="Incorrect" />)}
                  </div>
                  {pr && !pr.correct && (
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      Answer: <span className="font-semibold">{pr.expected}</span>
                    </p>
                  )}
                </div>
              )
            })}
          </fieldset>
          {answerError && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{answerError}</p>}
          {r ? (
            <div aria-live="polite">
              {r.correct ? (
                <p className="font-semibold text-green-700 dark:text-green-400">All correct. Nice work.</p>
              ) : (
                <p className="font-semibold text-red-700 dark:text-red-400">
                  Not quite. {nextIsSolution ? (lastInStep ? 'Watch the full solution next.' : 'Keep going — the full solution plays after the last part.') : ''}
                </p>
              )}
              {(!r.correct || !nextIsSolution) && r.explanation && <MathText text={r.explanation} className="mt-1 text-sm text-gray-700 dark:text-gray-300" />}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                {/* A problem section may hold several numeric questions (parts
                    a–b, then c): the solution choice comes only after the LAST
                    one, and skipping needs every question right first time. */}
                {nextIsSolution && lastInStep ? (
                  stepSolvedFirstTry ? (
                    <>
                      <button type="button" onClick={() => advanceTo(index + 1, true)} className={secondaryBtn}>
                        <PlayCircle className="h-4 w-4" aria-hidden /> Watch the solution anyway
                      </button>
                      <button type="button" onClick={skipSolution} className={primaryBtn}>
                        <SkipForward className="h-4 w-4" aria-hidden /> Skip the solution
                      </button>
                    </>
                  ) : (
                    <button type="button" onClick={() => advanceTo(index + 1, true)} className={primaryBtn}>
                      <PlayCircle className="h-4 w-4" aria-hidden /> Watch the solution
                    </button>
                  )
                ) : (
                  <button type="button" onClick={continueAfterQuestion} className={primaryBtn}>
                    Continue <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!filled || submitting}
                className="w-full rounded-xl bg-accent px-6 py-2.5 font-semibold text-white hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {submitting ? 'Checking…' : 'Check my answers'}
              </button>
            </div>
          )}
        </form>
      </div>
    )
  }

  const checkpointCard = (
    <div ref={checkpointRef} className="mt-4 scroll-mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6" data-testid="video-checkpoint">
      {reviewing || step.questions.length === 0 ? (
        <div className="text-center">
          <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600 dark:text-green-400" aria-hidden />
          <p className="font-semibold text-gray-900 dark:text-white">
            {step.questions.length === 0 ? (sectioned ? 'Section finished' : 'Clip finished') : 'Checkpoint done'}
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            {step.questions.length > 0 && (
              <button type="button" onClick={() => openCheckpoint(0)} className={secondaryBtn}>
                Answer again
              </button>
            )}
            <button type="button" onClick={finishCheckpoint} className={primaryBtn}>
              {index + 1 < steps.length ? (sectioned ? 'Next section' : 'Next clip') : nextPart ? `Finish this ${PART_NOUN.toLowerCase()}` : 'Finish'} <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      ) : curQuestion ? (
        curQuestion.kind === 'numeric' ? numericCard(curQuestion) : choiceCard(curQuestion)
      ) : null}
    </div>
  )

  const statusBar = (
    <div className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {stepLabel(index)}: {step.title}
          {sectioned && step.videoTitle ? <span className="font-normal text-gray-500 dark:text-gray-400"> · {step.videoTitle}</span> : null}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" aria-hidden>
            <div className={`h-full rounded-full ${curWatched ? 'bg-green-500' : 'bg-accent'}`} style={{ width: `${curPct}%` }} />
          </div>
          <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">{curPct}% watched</span>
        </div>
        {skipNotice ? (
          <p className="mt-1.5 text-xs text-amber-700 dark:text-amber-400" role="status">
            You skipped part of this {sectioned ? 'section' : 'clip'}. Watch at least 90% of it for it to count toward finishing the lesson.
          </p>
        ) : !curWatched ? (
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
            {step.role === 'problem'
              ? 'When the problem is up, pause, work it out, then type your answers.'
              : `${step.questions.length > 0 ? 'Answer the checkpoint any time. ' : ''}Watch at least 90% for this ${sectioned ? 'section' : 'clip'} to count; skipping ahead doesn’t count.`}
          </p>
        ) : null}
      </div>
      {!!step.reviewCards?.length && (
        <button
          type="button"
          onClick={openCards}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
        >
          <Layers className="h-4 w-4" aria-hidden /> Flashcards · {step.reviewCards.length}
        </button>
      )}
      {phase === 'video' && (
        <button
          type="button"
          onClick={() => openCheckpoint(retryRef.current ?? undefined)}
          disabled={!curWatched && step.questions.length === 0}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 dark:disabled:bg-gray-700 dark:disabled:text-gray-400 sm:w-auto"
        >
          {step.role === 'problem' ? 'Enter my answers' : step.questions.length > 0 ? 'Checkpoint' : 'Next'} <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      )}
    </div>
  )

  return (
    <div>
      {header}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          {phase === 'done' ? (
            endScreen
          ) : phase === 'cards' && cardsReturnRef.current === 'done' && allReviewCards.length > 0 ? (
            <ReviewFlashcards key="all" cards={allReviewCards} videoTitle={title} continueTo="the exit quiz" startStudying onContinue={closeCards} />
          ) : phase === 'cards' && step.reviewCards?.length ? (
            <ReviewFlashcards
              key={`${step.clipId}-${cardsAsked ? 'asked' : 'offer'}`}
              cards={step.reviewCards}
              videoTitle={step.videoTitle}
              continueTo={cardsReturnRef.current === 'checkpoint' ? 'the questions' : 'the recap'}
              startStudying={cardsAsked}
              required={!cardsAsked && !cardsDoneRef.current.has(step.clipId)}
              onComplete={completeCards}
              doneNote="You can open these cards again with the Flashcards button under the video."
              onContinue={closeCards}
            />
          ) : (
            <>
              <div ref={videoRef} className="scroll-mt-20">
              <VideoPlayer
                ref={playerRef}
                provider={step.provider}
                providerId={step.providerId}
                title={step.title}
                startAt={resumeAt(curRanges, step.durationSec)}
                autoPlay={autoPlay}
                onProgress={(from, to) => handleProgress(step.clipId, step.durationSec, from, to)}
                onEnded={() => handleEnded(step.clipId, step.durationSec)}
                onPlayingChange={handlePlayingChange}
              />
              </div>
              {statusBar}
              {phase === 'checkpoint' && checkpointCard}
            </>
          )}
        </div>
        <div className="space-y-4">
          {clipList}
          {complete && phase !== 'done' && exitQuizHref && (
            <Link
              href={exitQuizHref}
              className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 font-semibold text-white shadow hover:bg-accent-hover"
            >
              Take the exit quiz <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
          <PreferVideoToggle />
        </div>
      </div>
    </div>
  )
}
