'use client'

/**
 * An AP full-length practice exam page with its forms (src/lib/ap-practice-exams.ts).
 *
 * One form: exactly FullLengthPracticeExam, as before. More than one: the
 * start screen gets a form picker showing each form's status (not started,
 * in progress on this device, or completed with the latest estimated score),
 * and the picked form loads from /api/ap-practice/form (form 1 is rendered by
 * the page itself). The picked form is kept in the URL hash (#form-2), so a
 * refresh, or the review page's back link, returns to it and its sitting
 * resumes from its own device slot.
 */
import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Circle, Loader2, PlayCircle } from 'lucide-react'
import FullLengthPracticeExam, { type FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { apProgressKey, peekApExamProgress } from '@/lib/ap-practice-runner'
import {
  apPracticeFormFromHash,
  apPracticeFormHash,
  apPracticeSittingId,
  type ApPracticeFormStatus,
} from '@/lib/ap-practice-forms'

export interface ApPracticeExamProps {
  examKey: string
  /** The exam's forms, form 1 first (from apPracticeForms). */
  forms: { form: number; label: string }[]
  /** Form 1, as the page loaded it from the content store. */
  initialConfig: FullLengthExamConfig
}

type Sitting = 'in-progress' | 'unsaved' | null

function readSittings(examKey: string, forms: readonly { form: number }[]): Record<number, Sitting> {
  const out: Record<number, Sitting> = {}
  for (const { form } of forms) {
    let peek = null
    try {
      peek = peekApExamProgress(localStorage.getItem(apProgressKey(apPracticeSittingId(examKey, form))), Date.now())
    } catch {
      peek = null
    }
    out[form] = peek ? (peek.phase === 'final-results' ? 'unsaved' : 'in-progress') : null
  }
  return out
}

export default function ApPracticeExam({ examKey, forms, initialConfig }: ApPracticeExamProps) {
  if (forms.length <= 1) return <FullLengthPracticeExam {...initialConfig} examKey={examKey} />
  return <MultiFormExam examKey={examKey} forms={forms} initialConfig={initialConfig} />
}

function MultiFormExam({ examKey, forms, initialConfig }: ApPracticeExamProps) {
  const [selected, setSelected] = useState(1)
  const [configs, setConfigs] = useState<Record<number, FullLengthExamConfig>>({ 1: initialConfig })
  const [loadError, setLoadError] = useState<number | null>(null)
  const [statuses, setStatuses] = useState<ApPracticeFormStatus[] | null>(null)
  const [sittings, setSittings] = useState<Record<number, Sitting>>({})
  const [refresh, setRefresh] = useState(0)

  const valid = useCallback((f: number | null): f is number => f !== null && forms.some((x) => x.form === f), [forms])

  // The form named in the URL hash (a refresh, or the review page's back link).
  useEffect(() => {
    const fromHash = () => {
      const f = apPracticeFormFromHash(window.location.hash)
      setSelected(valid(f) ? f : 1)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [valid])

  // Load a picked form that the page didn't render.
  useEffect(() => {
    if (configs[selected]) return
    let live = true
    fetch(`/api/ap-practice/form?examKey=${encodeURIComponent(examKey)}&form=${selected}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: { config?: FullLengthExamConfig }) => {
        if (!live) return
        if (d.config) setConfigs((c) => ({ ...c, [selected]: d.config as FullLengthExamConfig }))
        else setLoadError(selected)
      })
      .catch(() => live && setLoadError(selected))
    return () => {
      live = false
    }
  }, [selected, configs, examKey])

  // Saved attempts per form (signed in), and sittings on this device.
  useEffect(() => {
    let live = true
    fetch(`/api/ap-practice/history?examKey=${encodeURIComponent(examKey)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { forms?: ApPracticeFormStatus[] } | null) => live && setStatuses(Array.isArray(d?.forms) ? d.forms : []))
      .catch(() => live && setStatuses([]))
    return () => {
      live = false
    }
  }, [examKey, refresh])
  useEffect(() => {
    const read = () => setSittings(readSittings(examKey, forms))
    read()
    window.addEventListener('storage', read)
    return () => window.removeEventListener('storage', read)
  }, [examKey, forms, selected, refresh])

  const pick = useCallback((f: number) => {
    setLoadError(null)
    setSelected(f)
    try {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${apPracticeFormHash(f)}`)
    } catch { /* the form still switches */ }
  }, [])

  const onAttemptSaved = useCallback(() => setRefresh((n) => n + 1), [])

  const picker = useMemo(
    () => (
      <FormPicker
        forms={forms}
        selected={selected}
        statuses={statuses}
        sittings={sittings}
        loading={!configs[selected] && loadError !== selected}
        onPick={pick}
      />
    ),
    [forms, selected, statuses, sittings, configs, loadError, pick],
  )

  const config = configs[selected]
  if (!config) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="container py-8 sm:py-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{initialConfig.subject} Full Practice Exam</h1>
            {picker}
            {loadError === selected && (
              <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300" role="alert">
                This form could not be loaded.{' '}
                <button type="button" onClick={() => { setLoadError(null); setConfigs((c) => ({ ...c })) }} className="font-semibold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
                  Try again
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
  return (
    <FullLengthPracticeExam
      key={selected}
      {...config}
      examKey={examKey}
      form={selected}
      formPicker={picker}
      onAttemptSaved={onAttemptSaved}
    />
  )
}

function FormPicker({
  forms,
  selected,
  statuses,
  sittings,
  loading,
  onPick,
}: {
  forms: { form: number; label: string }[]
  selected: number
  statuses: ApPracticeFormStatus[] | null
  sittings: Record<number, Sitting>
  loading: boolean
  onPick: (form: number) => void
}) {
  return (
    <section className="mt-6" aria-labelledby="ap-form-picker">
      <h2 id="ap-form-picker" className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Choose a practice form
      </h2>
      <div className="grid gap-3 sm:grid-cols-3" role="radiogroup" aria-labelledby="ap-form-picker">
        {forms.map(({ form, label }) => {
          const on = form === selected
          const status = statuses?.find((s) => s.form === form)
          const sitting = sittings[form]
          const latest = status?.latest
          let Icon = Circle
          let line = 'Not started'
          if (sitting === 'in-progress') {
            Icon = PlayCircle
            line = 'In progress on this device'
          } else if (sitting === 'unsaved') {
            Icon = PlayCircle
            line = 'Finished, not saved yet'
          } else if (latest) {
            Icon = CheckCircle2
            line = `Completed${latest.estimatedAPScore !== null ? ` · ${latest.estimatedAPScore}/5` : ''}${latest.percentage !== null ? ` (${latest.percentage}%)` : ''}`
          } else if (statuses === null) {
            line = 'Checking…'
          }
          return (
            <div
              key={form}
              className={`rounded-xl border p-4 transition ${
                on
                  ? 'border-accent bg-accent-subtle dark:bg-gray-800'
                  : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-500'
              }`}
            >
              <button
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => onPick(form)}
                className="flex w-full items-start gap-3 rounded text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              >
                {on && loading ? (
                  <Loader2 className="mt-0.5 h-5 w-5 shrink-0 animate-spin text-accent" aria-hidden />
                ) : (
                  <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${on ? 'text-accent' : 'text-gray-400 dark:text-gray-500'}`} aria-hidden />
                )}
                <span className="min-w-0">
                  <span className="block font-semibold text-gray-900 dark:text-gray-100">{label}</span>
                  <span className="block text-sm text-gray-600 dark:text-gray-300">{line}</span>
                  {status && status.attempts > 1 && (
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      {status.attempts} attempts{status.bestAPScore !== null ? ` · best ${status.bestAPScore}/5` : ''}
                    </span>
                  )}
                </span>
              </button>
              {latest && (
                <Link
                  href={`/review/ap-practice/${latest.id}`}
                  className="mt-2 inline-block rounded text-xs font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
                >
                  Review last attempt
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
