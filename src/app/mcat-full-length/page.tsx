'use client'

import { useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import MCATPassageRunner from '@/components/MCATPassageRunner'
import { InArticleAd } from '@/components/ad-banner'
import { FULL_LENGTH_FORMS } from '@/data/mcat/full-length'
import { MCAT_SECTION_ORDER, MCAT_SECTION_META } from '@/data/mcat/types'

/** Break lengths between sections (after S1 / S2 / S3) — mirrors the runner. */
const BREAKS = [10, 30, 10]

/** localStorage key the runner persists sectioned progress under, per form. */
const progressKey = (form: 1 | 2) => `mcat-fl-progress-v1:form-${form}`

/* Saved-progress detection as an external store: localStorage is client-only,
 * so the server snapshot is always "none" and the client snapshot re-reads on
 * every render (string-valued, so unchanged reads are cheap no-ops). Same-tab
 * discards notify via a custom event; other tabs via the native storage event. */
const PROGRESS_CHANGE_EVENT = 'mcat-fl-progress-change'
function subscribeProgress(cb: () => void) {
  window.addEventListener('storage', cb)
  window.addEventListener(PROGRESS_CHANGE_EVENT, cb)
  return () => {
    window.removeEventListener('storage', cb)
    window.removeEventListener(PROGRESS_CHANGE_EVENT, cb)
  }
}
function readProgressSnapshot(): string {
  try {
    return ([1, 2] as const).filter((f) => localStorage.getItem(progressKey(f)) !== null).join(',')
  } catch {
    return ''
  }
}
const serverProgressSnapshot = () => ''

export default function MCATFullLengthPage() {
  const [started, setStarted] = useState(false)
  const [form, setForm] = useState<1 | 2>(1)
  const inProgressStr = useSyncExternalStore(subscribeProgress, readProgressSnapshot, serverProgressSnapshot)
  const inProgress = inProgressStr === '' ? [] : (inProgressStr.split(',').map(Number) as (1 | 2)[])
  const fl = FULL_LENGTH_FORMS[form - 1]

  if (started) {
    return (
      <MCATPassageRunner
        passages={fl.passages}
        mode="exam"
        title={`MCAT Full-Length · Form ${form}`}
        backHref="/mcat"
        backLabel="MCAT Prep"
        sectioned
        form={form}
      />
    )
  }

  const bySection = MCAT_SECTION_ORDER.map((s) => ({
    meta: MCAT_SECTION_META[s],
    count: fl.passages.filter((p) => p.section === s).reduce((n, p) => n + p.questions.length, 0),
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container max-w-2xl py-12">
        <Link href="/mcat" className="text-sm text-blue-600 hover:underline dark:text-blue-400">← MCAT Prep</Link>
        <h1 className="mb-3 mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">Full-Length Practice Exam</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          The real exam structure: four separately-timed sections in AAMC order with breaks between, scored on the 472–528 scale. {fl.questionCount} questions across {fl.passages.length} passages and discrete sets.
        </p>

        {/* Resume a mid-exam session that survived a reload/close. */}
        {inProgress.length > 0 && (
          <div className="mb-5 rounded-2xl border-2 border-accent-muted bg-accent-subtle p-4">
            <p className="mb-2 text-sm font-bold text-accent-dark">Exam in progress</p>
            <p className="mb-3 text-xs text-muted-foreground">
              You have a saved full-length mid-exam. Section clocks kept running while you were away.
            </p>
            <div className="flex flex-wrap gap-2">
              {inProgress.map((f) => (
                <span key={f} className="inline-flex gap-2">
                  <button
                    onClick={() => { setForm(f); setStarted(true) }}
                    className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-accent-hover"
                  >
                    Resume Form {f}
                  </button>
                  <button
                    onClick={() => {
                      try { localStorage.removeItem(progressKey(f)) } catch { /* noop */ }
                      window.dispatchEvent(new Event(PROGRESS_CHANGE_EVENT))
                    }}
                    className="rounded-xl border border-accent-muted px-4 py-2.5 text-sm font-semibold text-accent-hover transition hover:bg-accent-light"
                  >
                    Discard
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Form selector — two interchangeable full-lengths for retakes */}
        <div className="mb-5 inline-flex rounded-xl border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800" role="group" aria-label="Choose full-length form">
          {([1, 2] as const).map((f) => (
            <button
              key={f}
              onClick={() => setForm(f)}
              aria-pressed={form === f}
              className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition ${form === f ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
            >
              Form {f}
            </button>
          ))}
        </div>

        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          {bySection.map(({ meta, count }, i) => (
            <div key={meta.id}>
              {i > 0 && (
                <div className="border-t border-gray-100 bg-gray-50 px-5 py-1.5 text-center text-[11px] font-medium text-gray-400 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-500">
                  {BREAKS[i - 1]}-minute break
                </div>
              )}
              <div className={`flex items-center justify-between px-5 py-3 ${i > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''}`}>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{meta.short}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{meta.name}</p>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{count} Q · {meta.minutes} min</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          <p className="font-semibold">Before you start</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-amber-800 dark:text-amber-300">
            <li>Each section has its own hard timer and auto-submits at 0:00 — once a section ends you <strong>cannot go back to it</strong>, just like the real exam.</li>
            <li>Timed breaks between sections (10 min, 30-min mid-exam, 10 min) — resume early whenever you&apos;re ready.</li>
            <li>Your progress saves automatically: reloading resumes where you left off, but section clocks keep running while you&apos;re away.</li>
            <li>Two-pane layout: passage on the left, questions on the right. Use <strong>strike</strong> to eliminate options and <strong>flag</strong> to mark passages.</li>
            <li>Some items are marked <em>draft</em> (AI-authored, pending expert review) — weigh those keys accordingly.</li>
          </ul>
        </div>

        <button onClick={() => setStarted(true)} className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">
          Start Form {form}
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">Not ready for the full sit? Try a <Link href="/mcat-chem-phys" className="text-blue-600 hover:underline dark:text-blue-400">timed single section</Link>, <Link href="/mcat-cars" className="text-blue-600 hover:underline dark:text-blue-400">CARS passage practice</Link>, or <Link href="/mcat-practice" className="text-blue-600 hover:underline dark:text-blue-400">single-section drills</Link>.</p>

        <div className="mt-10">
          <InArticleAd />
        </div>
      </div>
    </div>
  )
}
