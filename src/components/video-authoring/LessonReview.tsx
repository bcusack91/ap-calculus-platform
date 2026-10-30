'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Check, CheckCircle2, ExternalLink, Undo2 } from 'lucide-react'
import { MathText } from '@/components/MathText'
import type { LessonStatus } from '@/lib/video-lesson-admin'
import { btn, card, field, fmtDuration, jsonFetch, label, StatusBadge, YouTubeEmbed } from './ui'

type ReviewClip = { id: string; title: string; providerId: string; durationSec: number; status: string; instructorId: string }
type ReviewQuestion = { question: string; options: string[]; correctAnswer: number; explanation: string; yield?: 'LOW' }
type ReviewStep = { clip: ReviewClip | null; clipId?: string; yield: string | null; questions: ReviewQuestion[] }
type ReviewData = {
  lesson: {
    id: string
    title: string
    topicSlug: string
    topicTitle: string
    courseSlug: string
    instructor: { id: string; name: string; slug: string; isActive: boolean }
    published: boolean
    version: number
    draftState: string | null
    reviewNote: string | null
    submittedAt: string | null
    status: LessonStatus
  }
  draft: { title: string; steps: ReviewStep[] } | null
  publishedSteps: ReviewStep[]
  issues: { path: string; message: string }[]
}

/**
 * Admin review of one video lesson: every clip embedded, every checkpoint
 * question with the key marked and its explanation, then Approve or Return
 * with a note. Shows the draft when there is one, otherwise the published
 * steps (for a lesson that is live).
 */
export function LessonReview({ lessonId, onBack, onChanged }: { lessonId: string; onBack: () => void; onChanged: () => void }) {
  const [data, setData] = useState<ReviewData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [note, setNote] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState<string | null>(null)

  const load = useCallback(async () => {
    const r = await jsonFetch<ReviewData>(`/api/admin/instructors/lessons/${lessonId}`)
    if (!r.ok) setError(r.data.error ?? 'Could not load the lesson')
    else setData(r.data)
  }, [lessonId])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- state is set after the fetch resolves
    void load()
  }, [load])

  const act = async (action: 'approve' | 'return') => {
    setBusy(true)
    setError(null)
    const r = await jsonFetch(`/api/admin/instructors/lessons/${lessonId}`, {
      method: 'POST',
      body: JSON.stringify({ action, note }),
    })
    setBusy(false)
    if (!r.ok) {
      const issues = r.data.issues?.map((i) => i.message).join(' ')
      setError([r.data.error, issues].filter(Boolean).join(' '))
      return
    }
    setDone(action === 'approve' ? 'Approved. Students now see this version.' : 'Returned to the instructor with your note.')
    setNote('')
    onChanged()
    void load()
  }

  if (!data) {
    return (
      <div className={card}>
        <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back
        </button>
        <p className="text-sm text-gray-500 dark:text-gray-400">{error ?? 'Loading…'}</p>
      </div>
    )
  }

  const { lesson } = data
  const showingDraft = !!data.draft
  const steps = showingDraft ? data.draft!.steps : data.publishedSteps
  const title = showingDraft ? data.draft!.title : lesson.title
  const totalSec = steps.reduce((n, s) => n + (s.clip?.durationSec ?? 0), 0)
  const canReview = lesson.draftState === 'SUBMITTED'

  return (
    <div className="space-y-4">
      <div className={card}>
        <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to the list
        </button>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title || 'Untitled lesson'}</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {lesson.instructor.name} · {lesson.topicTitle} · {lesson.courseSlug} · {steps.length} clip{steps.length === 1 ? '' : 's'}, {fmtDuration(totalSec)}
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {showingDraft ? (lesson.published ? `Revision of the live v${lesson.version}. Students keep v${lesson.version} until you approve.` : 'First version: not yet visible to students.') : `Live version v${lesson.version}.`}
              {lesson.submittedAt && canReview ? ` Submitted ${new Date(lesson.submittedAt).toLocaleString()}.` : ''}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={lesson.status} />
            {lesson.published && (
              <Link
                href={`/topics/${lesson.topicSlug}/video/${lesson.instructor.slug}`}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
              >
                Student page <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </Link>
            )}
          </div>
        </div>
        {!lesson.instructor.isActive && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
            This instructor is inactive, so students will not see the lesson even after approval.
          </p>
        )}
        {lesson.reviewNote && (
          <p className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            <span className="font-semibold">Your last note:</span> {lesson.reviewNote}
          </p>
        )}
        {data.issues.length > 0 && (
          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
            <p className="flex items-center gap-1.5 font-semibold"><AlertTriangle className="h-4 w-4" aria-hidden /> This draft cannot be approved yet</p>
            <ul className="mt-1 list-disc pl-5">
              {data.issues.map((i) => <li key={i.path + i.message}>{i.message}</li>)}
            </ul>
          </div>
        )}
      </div>

      {steps.map((s, i) => (
        <section key={`${s.clip?.id ?? s.clipId}-${i}`} className={card} aria-label={`Clip ${i + 1}`}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent-light px-2 py-0.5 text-xs font-bold text-accent-dark dark:bg-accent/30 dark:text-white">Clip {i + 1}</span>
            <h3 className="min-w-0 flex-1 font-semibold text-gray-900 dark:text-white">{s.clip?.title ?? 'Missing clip'}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">{fmtDuration(s.clip?.durationSec ?? 0)}</span>
            {s.yield === 'LOW' && <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">Low-yield clip</span>}
            {s.clip && s.clip.status !== 'APPROVED' && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">New clip</span>}
          </div>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {s.clip ? <YouTubeEmbed videoId={s.clip.providerId} title={s.clip.title} /> : <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-900" />}
            <ol className="space-y-4">
              {s.questions.map((q, qi) => (
                <li key={qi} className="rounded-xl border border-gray-200 p-3 dark:border-gray-700">
                  <div className="mb-2 flex items-start gap-2">
                    <span className="mt-0.5 text-xs font-bold text-gray-400">Q{qi + 1}</span>
                    <MathText text={q.question} className="min-w-0 flex-1 text-sm font-medium text-gray-900 dark:text-gray-100" />
                    {q.yield === 'LOW' && <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">Low-yield</span>}
                  </div>
                  <ul className="space-y-1">
                    {q.options.map((o, oi) => {
                      const correct = oi === q.correctAnswer
                      return (
                        <li
                          key={oi}
                          className={`flex items-start gap-2 rounded-lg px-2 py-1 text-sm ${correct ? 'bg-green-50 font-semibold text-green-900 dark:bg-green-950/40 dark:text-green-200' : 'text-gray-700 dark:text-gray-300'}`}
                        >
                          {correct ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" aria-label="Correct answer" /> : <span className="mt-0.5 h-4 w-4 shrink-0" />}
                          <MathText text={o} inline />
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-2 border-t border-gray-100 pt-2 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
                    <span className="font-semibold">Explanation: </span>
                    <MathText text={q.explanation} inline />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      {canReview && (
        <div className={`${card} space-y-3`}>
          {error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" className={btn.primary} disabled={busy || data.issues.length > 0} onClick={() => act('approve')}>
              <Check className="h-4 w-4" aria-hidden /> Approve and publish
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400">Publishes these steps and marks the new clips approved.</span>
          </div>
          <div>
            <label htmlFor="review-note" className={label}>Return with a note</label>
            <textarea id="review-note" rows={3} className={field} value={note} onChange={(e) => setNote(e.target.value)} placeholder="What should the instructor change?" />
            <button type="button" className={`${btn.secondary} mt-2`} disabled={busy || !note.trim()} onClick={() => act('return')}>
              <Undo2 className="h-4 w-4" aria-hidden /> Return to instructor
            </button>
          </div>
        </div>
      )}
      {done && <p role="status" className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-800 dark:bg-green-950/40 dark:text-green-200">{done}</p>}
      {!canReview && error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}
