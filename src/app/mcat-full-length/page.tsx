'use client'

import { useState } from 'react'
import Link from 'next/link'
import MCATPassageRunner from '@/components/MCATPassageRunner'
import { InArticleAd } from '@/components/ad-banner'
import { FULL_LENGTH_FORMS, FULL_LENGTH_MINUTES } from '@/data/mcat/full-length'
import { MCAT_SECTION_ORDER, MCAT_SECTION_META } from '@/data/mcat/types'

export default function MCATFullLengthPage() {
  const [started, setStarted] = useState(false)
  const [form, setForm] = useState<1 | 2>(1)
  const fl = FULL_LENGTH_FORMS[form - 1]

  if (started) {
    return (
      <MCATPassageRunner
        passages={fl.passages}
        mode="exam"
        title={`MCAT Full-Length · Form ${form}`}
        backHref="/mcat"
        backLabel="MCAT Prep"
        timeLimitMinutes={FULL_LENGTH_MINUTES}
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
          A passage-based, four-section simulation scored on the 472–528 scale. {fl.questionCount} questions across {fl.passages.length} passages and discrete sets.
        </p>

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
            <div key={meta.id} className={`flex items-center justify-between px-5 py-3 ${i > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''}`}>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{meta.short}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{meta.name}</p>
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{count} Q</span>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          <p className="font-semibold">Before you start</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-amber-800 dark:text-amber-300">
            <li>The timer runs {Math.floor(FULL_LENGTH_MINUTES / 60)}h {FULL_LENGTH_MINUTES % 60}m and auto-submits at zero — block out the time or submit early.</li>
            <li>Two-pane layout: passage on the left, questions on the right. Use <strong>strike</strong> to eliminate options.</li>
            <li>Some items are marked <em>draft</em> (AI-authored, pending expert review) — weigh those keys accordingly.</li>
          </ul>
        </div>

        <button onClick={() => setStarted(true)} className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl">
          Start Form {form}
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">Prefer shorter sets? Try <Link href="/mcat-cars" className="text-blue-600 hover:underline dark:text-blue-400">CARS passage practice</Link> or <Link href="/mcat-practice" className="text-blue-600 hover:underline dark:text-blue-400">single-section drills</Link>.</p>

        <div className="mt-10">
          <InArticleAd />
        </div>
      </div>
    </div>
  )
}
