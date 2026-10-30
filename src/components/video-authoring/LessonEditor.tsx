'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowUp, Lightbulb, Play, Plus, Save, Send, Trash2, X } from 'lucide-react'
import { MathText } from '@/components/MathText'
import { MAX_QUESTIONS_PER_STEP, MAX_STEPS } from '@/lib/video-lesson-core'
import { validateDraftForApproval, type LessonStatus, type QuestionSuggestion } from '@/lib/video-lesson-admin'
import { ShotListPanel } from './ShotListPanel'
import { btn, card, ClipStatusBadge, field, fieldError, fmtDuration, jsonFetch, label, StatusBadge, YouTubeEmbed } from './ui'
import { NewClipForm, type AuthoringClip } from './NewClipForm'

type QuestionDraft = { question: string; options: string[]; correctAnswer: number; explanation: string; yield?: 'LOW' }
type StepDraft = { key: string; clipId: string; yield: 'LOW' | null; questions: QuestionDraft[] }
type LessonMeta = {
  id: string
  instructorId: string
  topicSlug: string
  topicTitle: string
  courseSlug: string
  title: string
  published: boolean
  version: number
  draftState: string | null
  reviewNote: string | null
  status: LessonStatus
}
type Issue = { path: string; message: string }

let keySeq = 0
const newKey = () => `s${++keySeq}`
const emptyQuestion = (): QuestionDraft => ({ question: '', options: ['', '', '', ''], correctAnswer: 0, explanation: '' })
const isBlank = (q: QuestionDraft) => !q.question.trim() && q.options.every((o) => !o.trim()) && !q.explanation.trim()

function toPayload(title: string, steps: StepDraft[]) {
  return {
    title,
    steps: steps.map((s) => ({
      clipId: s.clipId,
      yield: s.yield,
      questions: s.questions.map((q) => ({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, ...(q.yield === 'LOW' ? { yield: 'LOW' as const } : {}) })),
    })),
  }
}

/**
 * The lesson editor: title, ordered clips (add from the library or a new
 * link, reorder, mark low-yield), 1–3 checkpoint questions per clip (written
 * here or taken from the topic's lesson and deck), Save draft and Submit for
 * review. Editing a published lesson only changes the draft; students keep the
 * published version until an admin approves.
 */
export function LessonEditor({ lessonId, query, courseName, onBack, onChanged }: { lessonId: string; query: string; courseName?: (slug: string) => string; onBack: () => void; onChanged: () => void }) {
  const [meta, setMeta] = useState<LessonMeta | null>(null)
  const [title, setTitle] = useState('')
  const [steps, setSteps] = useState<StepDraft[]>([])
  const [clips, setClips] = useState<Record<string, AuthoringClip>>({})
  const [library, setLibrary] = useState<AuthoringClip[]>([])
  const [suggestions, setSuggestions] = useState<QuestionSuggestion[] | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])
  const [message, setMessage] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null)
  const [busy, setBusy] = useState(false)
  const [addMode, setAddMode] = useState<'none' | 'library' | 'new'>('none')
  const [pickFor, setPickFor] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [savedJson, setSavedJson] = useState('')

  const load = useCallback(async () => {
    const r = await jsonFetch<{ lesson: LessonMeta; editable: { title: string; steps: Omit<StepDraft, 'key'>[] }; clips: AuthoringClip[] }>(
      `/api/teacher/video-lessons/lessons/${lessonId}`,
    )
    if (!r.ok) {
      setMessage({ kind: 'error', text: r.data.error ?? 'Could not load the lesson' })
      return
    }
    setMeta(r.data.lesson)
    const t = r.data.editable.title ?? ''
    const s = (r.data.editable.steps ?? []).map((x) => ({
      key: newKey(),
      clipId: x.clipId,
      yield: x.yield === 'LOW' ? ('LOW' as const) : null,
      questions: (x.questions ?? []).map((q) => ({ ...q, options: [0, 1, 2, 3].map((i) => q.options?.[i] ?? '') })),
    }))
    setTitle(t)
    setSteps(s)
    setClips((prev) => ({ ...prev, ...Object.fromEntries(r.data.clips.map((c) => [c.id, c])) }))
    setSavedJson(JSON.stringify(toPayload(t, s)))
  }, [lessonId])

  const loadLibrary = useCallback(async () => {
    const r = await jsonFetch<{ clips: AuthoringClip[] }>(`/api/teacher/video-lessons/clips${query}`)
    if (r.ok) {
      setLibrary(r.data.clips)
      setClips((prev) => ({ ...prev, ...Object.fromEntries(r.data.clips.map((c) => [c.id, c])) }))
    }
  }, [query])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- state is set after the fetch resolves
    void load()
    void loadLibrary()
  }, [load, loadLibrary])

  useEffect(() => {
    if (!meta) return
    const sep = query ? '&' : '?'
    jsonFetch<{ suggestions: QuestionSuggestion[] }>(`/api/teacher/video-lessons/suggestions${query}${sep}topic=${encodeURIComponent(meta.topicSlug)}`).then((r) =>
      setSuggestions(r.ok ? r.data.suggestions : []),
    )
  }, [meta, query])

  const payload = useMemo(() => toPayload(title, steps), [title, steps])
  const dirty = meta !== null && JSON.stringify(payload) !== savedJson
  const issueAt = useMemo(() => new Map(issues.map((i) => [i.path, i.message])), [issues])
  const usedQuestions = useMemo(() => new Set(steps.flatMap((s) => s.questions.map((q) => q.question.trim()))), [steps])
  const totalSec = steps.reduce((n, s) => n + (clips[s.clipId]?.durationSec ?? 0), 0)

  // Warn before leaving with unsaved edits.
  useEffect(() => {
    if (!dirty) return
    const h = (e: BeforeUnloadEvent) => { e.preventDefault() }
    window.addEventListener('beforeunload', h)
    return () => window.removeEventListener('beforeunload', h)
  }, [dirty])

  const updateStep = (key: string, fn: (s: StepDraft) => StepDraft) => setSteps((all) => all.map((s) => (s.key === key ? fn(s) : s)))
  const updateQuestion = (key: string, qi: number, fn: (q: QuestionDraft) => QuestionDraft) =>
    updateStep(key, (s) => ({ ...s, questions: s.questions.map((q, i) => (i === qi ? fn(q) : q)) }))
  const move = (i: number, d: -1 | 1) =>
    setSteps((all) => {
      const j = i + d
      if (j < 0 || j >= all.length) return all
      const next = [...all]
      ;[next[i], next[j]] = [next[j], next[i]]
      return next
    })
  const addStep = (clip: AuthoringClip) => {
    setClips((p) => ({ ...p, [clip.id]: clip }))
    setSteps((all) => [...all, { key: newKey(), clipId: clip.id, yield: null, questions: [emptyQuestion()] }])
    setAddMode('none')
  }
  const applySuggestion = (key: string, s: QuestionSuggestion) => {
    updateStep(key, (st) => {
      const q: QuestionDraft = { question: s.question, options: [...s.options], correctAnswer: s.correctAnswer, explanation: s.explanation, ...(s.yield === 'LOW' ? { yield: 'LOW' as const } : {}) }
      const blank = st.questions.findIndex(isBlank)
      if (blank >= 0) return { ...st, questions: st.questions.map((x, i) => (i === blank ? q : x)) }
      if (st.questions.length >= MAX_QUESTIONS_PER_STEP) return st
      return { ...st, questions: [...st.questions, q] }
    })
    setPickFor(null)
  }

  const save = async (): Promise<boolean> => {
    setBusy(true)
    setMessage(null)
    const r = await jsonFetch<{ lesson: { status: LessonStatus; draftState: string | null; reviewNote: string | null } }>(
      `/api/teacher/video-lessons/lessons/${lessonId}`,
      { method: 'PUT', body: JSON.stringify({ draft: payload }) },
    )
    setBusy(false)
    if (!r.ok) {
      setIssues(r.data.issues ?? [])
      setMessage({ kind: 'error', text: r.data.error ?? 'Could not save' })
      return false
    }
    setSavedJson(JSON.stringify(payload))
    setMeta((m) => (m ? { ...m, status: r.data.lesson.status, draftState: r.data.lesson.draftState, reviewNote: r.data.lesson.reviewNote } : m))
    onChanged()
    return true
  }

  const onSave = async () => {
    if (await save()) setMessage({ kind: 'ok', text: 'Draft saved.' })
  }

  const onSubmit = async () => {
    if (!meta) return
    const check = validateDraftForApproval(
      payload,
      new Map(Object.values(clips).map((c) => [c.id, { id: c.id, instructorId: meta.instructorId, durationSec: c.durationSec, status: c.status }])),
      meta.instructorId,
    )
    if (!check.ok) {
      setIssues(check.issues)
      setMessage({ kind: 'error', text: 'Fix the highlighted items, then submit again.' })
      return
    }
    setIssues([])
    if (!(await save())) return
    setBusy(true)
    const r = await jsonFetch<{ lesson: { status: LessonStatus; draftState: string | null } }>(`/api/teacher/video-lessons/lessons/${lessonId}/submit`, { method: 'POST' })
    setBusy(false)
    if (!r.ok) {
      setIssues(r.data.issues ?? [])
      setMessage({ kind: 'error', text: r.data.error ?? 'Could not submit' })
      return
    }
    setMeta((m) => (m ? { ...m, status: r.data.lesson.status, draftState: r.data.lesson.draftState } : m))
    setMessage({ kind: 'ok', text: 'Submitted. The site owner will review it; you will see the result here.' })
    onChanged()
  }

  if (!meta) {
    return (
      <div className={card}>
        <BackButton onBack={onBack} />
        <p className="text-sm text-gray-500 dark:text-gray-400">{message?.text ?? 'Loading…'}</p>
      </div>
    )
  }

  const inLesson = new Set(steps.map((s) => s.clipId))
  const available = library.filter((c) => c.status !== 'ARCHIVED' && !inLesson.has(c.id))
  const err = (path: string) => issueAt.get(path)

  return (
    <div className="space-y-4">
      <div className={card}>
        <BackButton onBack={() => { if (!dirty || confirm('Leave without saving your changes?')) onBack() }} />
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{courseName?.(meta.courseSlug) ?? meta.courseSlug} · {meta.topicTitle}</p>
            <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{steps.length} clip{steps.length === 1 ? '' : 's'} · {fmtDuration(totalSec)} total</p>
          </div>
          <StatusBadge status={meta.status} />
        </div>
        {meta.status.kind === 'returned' && (
          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
            <span className="font-semibold">Returned with a note:</span> {meta.reviewNote}
          </div>
        )}
        {meta.status.kind === 'submitted' && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
            Waiting for review. Saving a change takes it out of the queue until you submit again.
          </p>
        )}
        {meta.published && (
          <p className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            Students see published version {meta.version}. Your changes go live only after they are approved.
          </p>
        )}
        <div className="mt-4">
          <label htmlFor="lesson-title" className={label}>Lesson title</label>
          <input id="lesson-title" className={`${field} ${err('title') ? fieldError : ''}`} value={title} onChange={(e) => setTitle(e.target.value)} maxLength={200} />
          {err('title') && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{err('title')}</p>}
        </div>
        {err('steps') && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{err('steps')}</p>}
      </div>

      <ShotListPanel topicSlug={meta.topicSlug} query={query} />

      {steps.map((s, i) => {
        const clip = clips[s.clipId]
        const base = `steps.${i}`
        return (
          <section key={s.key} className={card} aria-label={`Clip ${i + 1}`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent-light px-2 py-0.5 text-xs font-bold text-accent-dark dark:bg-accent/30 dark:text-white">Clip {i + 1}</span>
              <h3 className="min-w-0 flex-1 break-words font-semibold text-gray-900 dark:text-white">{clip?.title ?? 'Unknown clip'}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">{fmtDuration(clip?.durationSec ?? 0)}</span>
              {clip && <ClipStatusBadge status={clip.status} />}
              <div className="flex gap-1">
                <button type="button" className={btn.icon} aria-label="Preview clip" onClick={() => setPreview(preview === s.key ? null : s.key)}><Play className="h-4 w-4" aria-hidden /></button>
                <button type="button" className={btn.icon} aria-label="Move clip up" disabled={i === 0} onClick={() => move(i, -1)}><ArrowUp className="h-4 w-4" aria-hidden /></button>
                <button type="button" className={btn.icon} aria-label="Move clip down" disabled={i === steps.length - 1} onClick={() => move(i, 1)}><ArrowDown className="h-4 w-4" aria-hidden /></button>
                <button
                  type="button"
                  className={btn.icon}
                  aria-label="Remove clip from lesson"
                  onClick={() => { if (confirm('Remove this clip and its questions from the lesson? The clip stays in your library.')) setSteps((all) => all.filter((x) => x.key !== s.key)) }}
                >
                  <Trash2 className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
            {err(`${base}.clipId`) && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{err(`${base}.clipId`)}</p>}
            {preview === s.key && clip && <div className="mt-3 max-w-xl"><YouTubeEmbed videoId={clip.providerId} title={clip.title} /></div>}
            <label className="mt-3 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="accent-accent" checked={s.yield === 'LOW'} onChange={(e) => updateStep(s.key, (x) => ({ ...x, yield: e.target.checked ? 'LOW' : null }))} />
              Low-yield clip (hidden unless the student includes low-yield details)
            </label>

            <div className="mt-4 space-y-4">
              {s.questions.map((q, qi) => {
                const qb = `${base}.questions.${qi}`
                return (
                  <fieldset key={qi} className="rounded-xl border border-gray-200 p-3 dark:border-gray-700">
                    <legend className="px-1 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Question {qi + 1}</legend>
                    <div className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <label className="sr-only" htmlFor={`${s.key}-q${qi}`}>Question</label>
                        <textarea
                          id={`${s.key}-q${qi}`}
                          rows={2}
                          className={`${field} ${err(`${qb}.question`) ? fieldError : ''}`}
                          value={q.question}
                          onChange={(e) => updateQuestion(s.key, qi, (x) => ({ ...x, question: e.target.value }))}
                          placeholder="Question (LaTeX in $…$ works)"
                        />
                        {err(`${qb}.question`) && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{err(`${qb}.question`)}</p>}
                      </div>
                      <button
                        type="button"
                        className={btn.icon}
                        aria-label={`Remove question ${qi + 1}`}
                        disabled={s.questions.length <= 1}
                        onClick={() => updateStep(s.key, (x) => ({ ...x, questions: x.questions.filter((_, j) => j !== qi) }))}
                      >
                        <X className="h-4 w-4" aria-hidden />
                      </button>
                    </div>
                    <div className="mt-2 space-y-2" role="radiogroup" aria-label="Answer choices; select the correct one">
                      {q.options.map((o, oi) => (
                        <div key={oi} className="flex items-center gap-2">
                          <input
                            type="radio"
                            className="h-4 w-4 shrink-0 accent-green-600"
                            name={`${s.key}-q${qi}-correct`}
                            checked={q.correctAnswer === oi}
                            onChange={() => updateQuestion(s.key, qi, (x) => ({ ...x, correctAnswer: oi }))}
                            aria-label={`Choice ${String.fromCharCode(65 + oi)} is correct`}
                          />
                          <input
                            className={`${field} ${q.correctAnswer === oi ? 'border-green-500 dark:border-green-600' : ''} ${err(`${qb}.options.${oi}`) ? fieldError : ''}`}
                            value={o}
                            onChange={(e) => updateQuestion(s.key, qi, (x) => ({ ...x, options: x.options.map((v, j) => (j === oi ? e.target.value : v)) }))}
                            placeholder={`Choice ${String.fromCharCode(65 + oi)}`}
                            aria-label={`Choice ${String.fromCharCode(65 + oi)}`}
                          />
                        </div>
                      ))}
                      {[0, 1, 2, 3].some((oi) => err(`${qb}.options.${oi}`)) && <p className="text-xs text-red-600 dark:text-red-400">Fill in every answer choice.</p>}
                      <p className="text-xs text-gray-500 dark:text-gray-400">Select the correct answer. Choices are shuffled for students.</p>
                    </div>
                    <div className="mt-2">
                      <label className="sr-only" htmlFor={`${s.key}-e${qi}`}>Explanation</label>
                      <textarea
                        id={`${s.key}-e${qi}`}
                        rows={2}
                        className={`${field} ${err(`${qb}.explanation`) ? fieldError : ''}`}
                        value={q.explanation}
                        onChange={(e) => updateQuestion(s.key, qi, (x) => ({ ...x, explanation: e.target.value }))}
                        placeholder="Explanation shown after the student answers"
                      />
                      {err(`${qb}.explanation`) && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{err(`${qb}.explanation`)}</p>}
                    </div>
                    <label className="mt-2 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        className="accent-accent"
                        checked={q.yield === 'LOW'}
                        onChange={(e) => updateQuestion(s.key, qi, (x) => {
                          const { yield: _y, ...rest } = x
                          return e.target.checked ? { ...rest, yield: 'LOW' } : rest
                        })}
                      />
                      Low-yield question
                    </label>
                  </fieldset>
                )
              })}
              {err(`${base}.questions`) && <p className="text-sm text-red-600 dark:text-red-400">{err(`${base}.questions`)}</p>}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className={btn.secondary}
                  disabled={s.questions.length >= MAX_QUESTIONS_PER_STEP}
                  onClick={() => updateStep(s.key, (x) => ({ ...x, questions: [...x.questions, emptyQuestion()] }))}
                >
                  <Plus className="h-4 w-4" aria-hidden /> Add question
                </button>
                <button
                  type="button"
                  className={btn.secondary}
                  disabled={s.questions.length >= MAX_QUESTIONS_PER_STEP && !s.questions.some(isBlank)}
                  onClick={() => setPickFor(pickFor === s.key ? null : s.key)}
                  aria-expanded={pickFor === s.key}
                >
                  <Lightbulb className="h-4 w-4" aria-hidden /> Use a suggestion
                </button>
              </div>
              {pickFor === s.key && (
                <SuggestionPicker suggestions={suggestions} used={usedQuestions} onPick={(sg) => applySuggestion(s.key, sg)} onClose={() => setPickFor(null)} />
              )}
            </div>
          </section>
        )
      })}

      <div className={card}>
        {addMode === 'none' && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Add a clip:</span>
            <button type="button" className={btn.secondary} disabled={steps.length >= MAX_STEPS} onClick={() => setAddMode('library')}>From your library</button>
            <button type="button" className={btn.secondary} disabled={steps.length >= MAX_STEPS} onClick={() => setAddMode('new')}><Plus className="h-4 w-4" aria-hidden /> New clip</button>
            {steps.length >= MAX_STEPS && <span className="text-xs text-gray-500">A lesson holds up to {MAX_STEPS} clips.</span>}
          </div>
        )}
        {addMode === 'library' && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">Add from your library</h3>
              <button type="button" className={btn.icon} aria-label="Close" onClick={() => setAddMode('none')}><X className="h-4 w-4" aria-hidden /></button>
            </div>
            {available.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No other clips yet. Add a new clip instead.</p>
            ) : (
              <ul className="max-h-80 divide-y divide-gray-100 overflow-y-auto dark:divide-gray-700">
                {[...available].sort((a, b) => Number(b.status === 'APPROVED') - Number(a.status === 'APPROVED')).map((c) => (
                  <li key={c.id} className="flex flex-wrap items-center gap-2 py-2">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">{c.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{fmtDuration(c.durationSec)}{c.tags.length ? ` · ${c.tags.join(', ')}` : ''}</p>
                    </div>
                    <ClipStatusBadge status={c.status} />
                    <button type="button" className={btn.secondary} onClick={() => addStep(c)}>Add</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {addMode === 'new' && (
          <div>
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">New clip</h3>
            <NewClipForm query={query} onCancel={() => setAddMode('none')} onCreated={(c) => { setLibrary((l) => [c, ...l]); addStep(c) }} />
          </div>
        )}
      </div>

      <div className="sticky bottom-0 z-10 -mx-4 border-t border-gray-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95 sm:mx-0 sm:rounded-2xl sm:border">
        {message && (
          <p role={message.kind === 'error' ? 'alert' : 'status'} className={`mb-2 text-sm ${message.kind === 'error' ? 'text-red-600 dark:text-red-400' : 'text-green-700 dark:text-green-400'}`}>
            {message.text}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={btn.secondary} disabled={busy || !dirty} onClick={onSave}><Save className="h-4 w-4" aria-hidden /> Save draft</button>
          <button type="button" className={btn.primary} disabled={busy || (meta.draftState === 'SUBMITTED' && !dirty)} onClick={onSubmit}><Send className="h-4 w-4" aria-hidden /> Submit for review</button>
          <span className="text-xs text-gray-500 dark:text-gray-400">{dirty ? 'Unsaved changes' : 'All changes saved'}</span>
        </div>
      </div>
    </div>
  )
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
      <ArrowLeft className="h-4 w-4" aria-hidden /> All lessons
    </button>
  )
}

function SuggestionPicker({ suggestions, used, onPick, onClose }: { suggestions: QuestionSuggestion[] | null; used: Set<string>; onPick: (s: QuestionSuggestion) => void; onClose: () => void }) {
  const [q, setQ] = useState('')
  const shown = (suggestions ?? []).filter((s) => !q || s.question.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="rounded-xl border border-accent-muted bg-accent-subtle p-3 dark:border-accent-dark dark:bg-gray-900">
      <div className="mb-2 flex items-center gap-2">
        <input className={field} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search suggestions…" aria-label="Search suggestions" />
        <button type="button" className={btn.icon} aria-label="Close suggestions" onClick={onClose}><X className="h-4 w-4" aria-hidden /></button>
      </div>
      <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">From this topic&apos;s lesson and slide deck. Already reviewed; edit freely after adding.</p>
      {suggestions === null ? (
        <p className="text-sm text-gray-500">Loading…</p>
      ) : shown.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No suggestions for this topic.</p>
      ) : (
        <ul className="max-h-96 space-y-2 overflow-y-auto">
          {shown.map((s, i) => {
            const isUsed = used.has(s.question.trim())
            return (
              <li key={i} className="rounded-lg border border-gray-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <MathText text={s.question} className="text-sm text-gray-900 dark:text-gray-100" />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {s.source}{s.yield === 'LOW' ? ' · low-yield' : ''} · answer: <MathText text={s.options[s.correctAnswer]} inline />
                    </p>
                  </div>
                  <button type="button" className={btn.secondary} disabled={isUsed} onClick={() => onPick(s)}>{isUsed ? 'Added' : 'Use'}</button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
