'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2, Circle, Layers, Lock, PlayCircle, RotateCcw, Users, XCircle } from 'lucide-react'
import VideoPlayer, { type VideoPlayerHandle } from './VideoPlayer'
import { PreferVideoToggle } from './PreferVideoToggle'
import { InstructorAvatar } from './InstructorAvatar'
import { MathText } from '@/components/MathText'
import { useActivitySurface } from '@/hooks/useActivitySurface'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { addPlayback, isClipWatched, mergeRanges, watchedFraction, type WatchRange } from '@/lib/video-watch'
import type { ProgressSteps, StudentStep } from '@/lib/video-lesson-core'

/**
 * The student video-lesson player (/topics/<slug>/video/<instructor>).
 *
 * Clips play in order. A clip unlocks once the one before it is watched
 * (≥90% of real, contiguous playback; seeking ahead plays but doesn't count)
 * and its checkpoint is answered. Each checkpoint question is graded on the
 * server (the page never has the key); a miss offers a rewatch, never a
 * gate. Watch time is saved about every 15 s while playing and on pause,
 * end, clip change and page hide; the server caps claims by wall time, so
 * saves send only what that budget allows and keep the rest for the next
 * one. Finishing every clip and checkpoint completes the lesson (TopicProgress
 * COMPLETED on the server); credit comes from the topic's exit quiz.
 */

export type VideoLessonPlayerProps = {
  lessonId: string
  topicSlug: string
  topicTitle: string
  title: string
  instructor: { name: string; headline: string; photoUrl: string | null }
  steps: StudentStep[]
  initialProgress: ProgressSteps
  initialIndex: number
  initiallyComplete: boolean
  /** The instructor picker, when there's more than one instructor to choose. */
  pickerHref: string | null
  readHref: string
  exitQuizHref: string | null
}

type Answered = Record<string, Record<string, { correct: boolean; attempts: number }>>
type Phase = 'video' | 'checkpoint' | 'done'
type Result = { correct: boolean; correctIndex: number; explanation: string; chosen: number }
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

function initialAnswered(progress: ProgressSteps): Answered {
  const out: Answered = {}
  for (const [clipId, p] of Object.entries(progress)) {
    for (const [idx, a] of Object.entries(p.answered ?? {})) {
      ;(out[clipId] ??= {})[idx] = { correct: !!a.correct, attempts: a.attempts ?? 1 }
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

export default function VideoLessonPlayer({
  lessonId,
  topicSlug,
  topicTitle,
  title,
  instructor,
  steps,
  initialProgress,
  initialIndex,
  initiallyComplete,
  pickerHref,
  readHref,
  exitQuizHref,
}: VideoLessonPlayerProps) {
  const [index, setIndex] = useState(() => Math.min(Math.max(initialIndex, 0), Math.max(steps.length - 1, 0)))
  const [ranges, setRanges] = useState(() => initialRanges(steps, initialProgress))
  const [answered, setAnswered] = useState<Answered>(() => initialAnswered(initialProgress))
  const [phase, setPhase] = useState<Phase>(initiallyComplete ? 'done' : 'video')
  const [playing, setPlaying] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const [skipNotice, setSkipNotice] = useState(false)
  const [complete, setComplete] = useState(initiallyComplete)
  const [flashcards, setFlashcards] = useState<Flashcards | null>(null)

  // Checkpoint card
  const [qPos, setQPos] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [answerError, setAnswerError] = useState<string | null>(null)
  const [reviewing, setReviewing] = useState(false)
  const shownAtRef = useRef(0)
  /** After "Rewatch this clip": the question to come back to when the clip ends. */
  const retryRef = useRef<number | null>(null)

  const playerRef = useRef<VideoPlayerHandle>(null)
  const checkpointRef = useRef<HTMLDivElement>(null)

  // Save bookkeeping (refs: read by timers and unload handlers).
  const rangesRef = useRef(ranges)
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
  const stepIsDone = useCallback(
    (s: StudentStep) => isClipWatched(ranges[s.clipId] ?? [], s.durationSec) && s.questions.every((q) => !!answered[s.clipId]?.[String(q.index)]),
    [ranges, answered],
  )
  const unlocked = (i: number) => steps.slice(0, i).every(stepIsDone)
  const allDone = steps.length > 0 && steps.every(stepIsDone)

  useActivitySurface(playing ? { surface: 'VIDEO', topicSlug, timed: true } : { surface: 'VIDEO', topicSlug })

  const applyRanges = (next: Record<string, WatchRange[]>) => {
    rangesRef.current = next
    setRanges(next)
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
              body: JSON.stringify({ clipId, ranges: send, ...(activeLeft > 0 ? { activeSeconds: activeLeft } : {}) }),
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

  const firstOpenQuestion = (s: StudentStep) => {
    const i = s.questions.findIndex((q) => !answered[s.clipId]?.[String(q.index)])
    return i
  }

  const openCheckpoint = (from?: number) => {
    if (!step) return
    playerRef.current?.pause()
    const open = firstOpenQuestion(step)
    setReviewing(open === -1 && from === undefined)
    setQPos(from ?? Math.max(0, open))
    setSelected(null)
    setResult(null)
    setAnswerError(null)
    shownAtRef.current = Date.now()
    setPhase('checkpoint')
    void save()
  }

  const handleEnded = (clipId: string, duration: number) => {
    void save()
    if (isClipWatched(rangesRef.current[clipId] ?? [], duration)) {
      setSkipNotice(false)
      openCheckpoint(retryRef.current ?? undefined)
      retryRef.current = null
    } else {
      setSkipNotice(true)
    }
  }

  const goTo = (i: number, play: boolean) => {
    if (i < 0 || i >= steps.length || !unlocked(i)) return
    void save()
    retryRef.current = null
    indexRef.current = i
    setIndex(i)
    setAutoPlay(play)
    setPhase('video')
    setSkipNotice(false)
    setResult(null)
    setSelected(null)
  }

  const submitAnswer = async () => {
    if (!step || selected === null || submitting) return
    const q = step.questions[qPos]
    if (!q) return
    setSubmitting(true)
    setAnswerError(null)
    const post = () =>
      fetch(`/api/video-lessons/${encodeURIComponent(lessonId)}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clipId: step.clipId, questionIndex: q.index, chosenIndex: selected, durationMs: Math.min(3_600_000, Date.now() - shownAtRef.current) }),
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
      setResult({ correct: !!body.correct, correctIndex: Number(body.correctIndex), explanation: String(body.explanation ?? ''), chosen: selected })
      setAnswered((prev) => {
        const before = prev[step.clipId]?.[String(q.index)]
        return {
          ...prev,
          [step.clipId]: {
            ...prev[step.clipId],
            [String(q.index)]: before ? { correct: before.correct || !!body.correct, attempts: before.attempts + 1 } : { correct: !!body.correct, attempts: 1 },
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
      setSelected(null)
      setResult(null)
      setAnswerError(null)
      shownAtRef.current = Date.now()
      return
    }
    finishCheckpoint()
  }

  const finishCheckpoint = () => {
    if (index + 1 < steps.length) {
      // The answer just recorded unlocks the next clip; unlocked() reads last render, so go directly.
      void save()
      retryRef.current = null
      indexRef.current = index + 1
      setIndex(index + 1)
      setAutoPlay(true)
      setPhase('video')
      setResult(null)
      setSelected(null)
    } else {
      void save()
      setPhase('done')
    }
  }

  const rewatch = () => {
    retryRef.current = qPos
    setResult(null)
    setSelected(null)
    setPhase('video')
    playerRef.current?.seekTo(0)
    playerRef.current?.play()
  }

  // ── Derived display values ──
  const clipsWatched = steps.filter((s) => isClipWatched(ranges[s.clipId] ?? [], s.durationSec)).length
  let scoreCorrect = 0
  let scoreTotal = 0
  for (const s of steps) {
    for (const q of s.questions) {
      scoreTotal++
      const a = answered[s.clipId]?.[String(q.index)]
      if (a?.correct && a.attempts === 1) scoreCorrect++
    }
  }
  const curRanges = step ? ranges[step.clipId] ?? [] : []
  const curPct = step ? Math.round(watchedFraction(curRanges, step.durationSec) * 100) : 0
  const curWatched = step ? isClipWatched(curRanges, step.durationSec) : false
  const curQuestion = step?.questions[qPos]

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
    </div>
  )

  const clipList = (
    <nav aria-label="Clips" className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <p className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {steps.length} clips · {Math.max(1, Math.round(steps.reduce((n, s) => n + s.durationSec, 0) / 60))} min
      </p>
      <ol className="space-y-1">
        {steps.map((s, i) => {
          const done = stepIsDone(s)
          const open = unlocked(i)
          const current = i === index && phase !== 'done'
          const pct = Math.round(watchedFraction(ranges[s.clipId] ?? [], s.durationSec) * 100)
          const Icon = done ? CheckCircle2 : !open ? Lock : current ? PlayCircle : Circle
          return (
            <li key={s.clipId}>
              <button
                type="button"
                onClick={() => goTo(i, true)}
                disabled={!open}
                aria-current={current ? 'step' : undefined}
                className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
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
                    {i + 1}. {s.title}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {fmtClock(s.durationSec)}
                    {!done && pct > 0 ? ` · ${pct}% watched` : ''}
                    {!open ? ' · locked' : ''}
                    {done ? ' · done' : ''}
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )

  const endScreen = (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8" data-testid="video-lesson-end">
      <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-600 dark:text-green-400" aria-hidden />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{complete || allDone ? 'Video lesson complete' : 'Almost there'}</h2>
      <div className="mx-auto mt-5 grid max-w-sm grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {clipsWatched}/{steps.length}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">clips watched</p>
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
      {exitQuizHref ? (
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
          <RotateCcw className="h-4 w-4" aria-hidden /> Rewatch a clip
        </button>
        <Link href={readHref} className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
          <BookOpen className="h-4 w-4" aria-hidden /> Read the lesson
        </Link>
      </div>
    </div>
  )

  const optionClass = (i: number) => {
    if (result) {
      if (i === result.correctIndex) return 'border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/20'
      if (i === result.chosen) return 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-900/20'
      return 'border-gray-200 opacity-70 dark:border-gray-700'
    }
    return selected === i
      ? 'border-accent bg-accent-subtle dark:border-accent-muted dark:bg-accent-light/20'
      : 'border-gray-200 hover:border-accent-muted dark:border-gray-700 dark:hover:border-accent-hover'
  }

  const checkpointCard = (
    <div ref={checkpointRef} className="mt-4 scroll-mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6" data-testid="video-checkpoint">
      {reviewing || step.questions.length === 0 ? (
        <div className="text-center">
          <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600 dark:text-green-400" aria-hidden />
          <p className="font-semibold text-gray-900 dark:text-white">
            {step.questions.length === 0 ? 'Clip finished' : 'Checkpoint done'}
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            {step.questions.length > 0 && (
              <button
                type="button"
                onClick={() => openCheckpoint(0)}
                className="rounded-xl border-2 border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Answer again
              </button>
            )}
            <button type="button" onClick={finishCheckpoint} className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover">
              {index + 1 < steps.length ? 'Next clip' : 'Finish'} <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      ) : curQuestion ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">
            Checkpoint · Question {qPos + 1} of {step.questions.length}
          </p>
          <MathText text={curQuestion.question} className="mt-2 text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg" />
          <fieldset className="mt-4 space-y-2" disabled={!!result || submitting}>
            <legend className="sr-only">Choose an answer</legend>
            {curQuestion.options.map((opt, i) => (
              <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-3 py-2.5 transition-colors ${optionClass(i)}`}>
                <input
                  type="radio"
                  name={`cp-${step.clipId}-${curQuestion.index}`}
                  className="mt-1 h-4 w-4 shrink-0 accent-accent"
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                />
                <MathText text={opt} inline className="min-w-0 flex-1 text-sm text-gray-800 dark:text-gray-200 sm:text-base" />
                {result && i === result.correctIndex && <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" aria-label="Correct answer" />}
                {result && i === result.chosen && !result.correct && <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" aria-label="Your answer" />}
              </label>
            ))}
          </fieldset>
          {answerError && <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">{answerError}</p>}
          {result ? (
            <div className="mt-4" aria-live="polite">
              <p className={`font-semibold ${result.correct ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                {result.correct ? 'Correct!' : 'Not quite.'}
              </p>
              {result.explanation && (
                <MathText text={result.explanation} className="mt-1 text-sm text-gray-700 dark:text-gray-300" />
              )}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                {!result.correct && (
                  <button
                    type="button"
                    onClick={rewatch}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden /> Rewatch this clip
                  </button>
                )}
                <button
                  type="button"
                  onClick={continueAfterQuestion}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover"
                >
                  Continue <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
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
      ) : null}
    </div>
  )

  const statusBar = (
    <div className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          Clip {index + 1} of {steps.length}: {step.title}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700" aria-hidden>
            <div className={`h-full rounded-full ${curWatched ? 'bg-green-500' : 'bg-accent'}`} style={{ width: `${curPct}%` }} />
          </div>
          <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">{curPct}% watched</span>
        </div>
        {skipNotice ? (
          <p className="mt-1.5 text-xs text-amber-700 dark:text-amber-400" role="status">
            You skipped part of this clip. Watch at least 90% of it to unlock the checkpoint.
          </p>
        ) : !curWatched ? (
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">Watch at least 90% to unlock the checkpoint. Skipping ahead doesn&apos;t count.</p>
        ) : null}
      </div>
      {phase === 'video' && (
        <button
          type="button"
          onClick={() => openCheckpoint(retryRef.current ?? undefined)}
          disabled={!curWatched}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 dark:disabled:bg-gray-700 dark:disabled:text-gray-400 sm:w-auto"
        >
          {step.questions.length > 0 ? 'Checkpoint' : 'Next'} <ArrowRight className="h-4 w-4" aria-hidden />
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
          ) : (
            <>
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
