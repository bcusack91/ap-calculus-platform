'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { LessonRecorder, recordingSupport, type RecorderMode, type RecorderState } from '@/lib/lesson-recorder'

/**
 * Teacher-only "Record lesson" control for a live session (src/lib/lesson-recorder.ts):
 * records the slides or whiteboard (whichever the teacher is working in) with
 * the teacher's camera and voice, and downloads the file on Stop.
 */

const fmt = (ms: number) => {
  const s = Math.floor(ms / 1000)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const ss = String(s % 60).padStart(2, '0')
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`
}

const SHOWING_LABEL = { slides: 'slides', board: 'whiteboard', camera: 'you (no slides or board open)' } as const
const MODES: { value: RecorderMode; label: string }[] = [
  { value: 'auto', label: 'Auto' },
  { value: 'slides', label: 'Slides' },
  { value: 'board', label: 'Board' },
]

export default function LessonRecorderControls({
  classroomId,
  classroomName,
  callInTab = false,
  onPopOut,
}: {
  classroomId: string
  classroomName: string
  /** The live video is still on this page — capturing it is the heaviest part of recording. */
  callInTab?: boolean
  onPopOut?: () => void
}) {
  const recRef = useRef<LessonRecorder | null>(null)
  const [state, setState] = useState<RecorderState | null>(null)
  const [support] = useState(() => recordingSupport())
  const status = state?.status ?? 'idle'
  const active = status === 'recording' || status === 'paused' || status === 'saving'

  // Leaving mid-recording would lose it: ask first. Release devices on unmount.
  useEffect(() => {
    if (status !== 'recording' && status !== 'paused') return
    const warn = (e: BeforeUnloadEvent) => { e.preventDefault() }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [status])
  useEffect(() => () => recRef.current?.teardown(), [])

  const start = () => {
    const d = new Date()
    const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}`
    const fileBase = `${classroomName.replace(/[\\/:*?"<>|]+/g, ' ').trim() || 'Class'} lesson ${stamp}`
    const rec = new LessonRecorder({ fileBase, onState: setState })
    recRef.current = rec
    void rec.start()
  }

  if (!support.ok) {
    return (
      <span className="text-xs text-gray-500 dark:text-gray-400" title={support.reason}>
        Recording: Chrome or Edge on a computer
      </span>
    )
  }

  if (!active) {
    return (
      <div className="flex flex-col items-end gap-1">
        <button
          onClick={start}
          disabled={status === 'starting'}
          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-400 hover:text-red-600 disabled:opacity-60 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          title="Records the slides or whiteboard with your camera and voice. When the browser asks what to share, pick this tab."
        >
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden />
          {status === 'starting' ? 'Choose “This tab” to start…' : 'Record lesson'}
        </button>
        {state?.error && <p className="max-w-xs text-right text-xs text-red-600 dark:text-red-400">{state.error}</p>}
        {!state?.error && state?.lastSaved && (
          <p className="max-w-sm text-right text-xs text-gray-600 dark:text-gray-400">
            Saved to your Downloads as “{state.lastSaved}”. Upload it to YouTube as Unlisted, then add the link under{' '}
            <Link href={`/teacher/classroom/${classroomId}?tab=work&view=recordings`} target="_blank" className="font-medium text-accent hover:underline">
              Recordings
            </Link>
            .
          </p>
        )}
      </div>
    )
  }

  const rec = recRef.current!
  return (
    <div className="flex flex-col items-end gap-1">
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-1.5 dark:border-red-900 dark:bg-red-950/40">
      <span className="inline-flex items-center gap-1.5 text-sm font-bold tabular-nums text-red-700 dark:text-red-300" role="status">
        <span className={`h-2.5 w-2.5 rounded-full bg-red-600 ${status === 'recording' ? 'animate-pulse' : ''}`} aria-hidden />
        {status === 'saving' ? 'Saving…' : status === 'paused' ? `Paused ${fmt(state!.elapsedMs)}` : `REC ${fmt(state!.elapsedMs)}`}
      </span>
      {status !== 'saving' && (
        <>
          <div role="group" aria-label="What the recording shows" className="inline-flex rounded-lg border border-red-200 bg-white p-0.5 dark:border-red-900 dark:bg-gray-900">
            {MODES.map((m) => (
              <button
                key={m.value}
                onClick={() => rec.setMode(m.value)}
                aria-pressed={state!.mode === m.value}
                className={`rounded-md px-2 py-0.5 text-xs font-semibold ${state!.mode === m.value ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300'}`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-red-700/80 dark:text-red-300/80">
            Showing {SHOWING_LABEL[state!.showing]}
            {state!.uncropped && ' · whole tab'}
          </span>
          <button
            onClick={() => (status === 'paused' ? rec.resume() : rec.pause())}
            className="rounded-lg border border-red-300 px-2.5 py-1 text-xs font-semibold text-red-700 hover:bg-red-100 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/40"
          >
            {status === 'paused' ? 'Resume' : 'Pause'}
          </button>
          <button
            onClick={() => void rec.stop()}
            className="rounded-lg bg-red-600 px-3 py-1 text-xs font-semibold text-white hover:bg-red-700"
          >
            Stop &amp; save
          </button>
        </>
      )}
    </div>
    {callInTab && onPopOut && status !== 'saving' && (
      <p className="max-w-sm text-right text-xs text-gray-600 dark:text-gray-400">
        Video lagging? Recording is much lighter with the call in its own window.{' '}
        <button onClick={onPopOut} className="font-semibold text-accent hover:underline">↗ Pop out the video</button>
      </p>
    )}
    </div>
  )
}
