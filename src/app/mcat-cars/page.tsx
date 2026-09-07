'use client'

import { useState } from 'react'
import Link from 'next/link'
import MCATPassageRunner from '@/components/MCATPassageRunner'
import { InArticleAd } from '@/components/ad-banner'
import { plainTextPreview } from '@/lib/render-rich-text'
// Leaf imports (not the passages barrel) so the science banks don't ship to this
// client page — only the CARS passages it actually renders.
import { CARS_HUMANITIES_PASSAGES } from '@/data/mcat/passages/cars-humanities'
import { CARS_SOCIAL_SCIENCE_PASSAGES } from '@/data/mcat/passages/cars-social-science'
import { CARS_PHILOSOPHY_PASSAGES } from '@/data/mcat/passages/cars-philosophy'
import { CARS_ETHICS_PASSAGES } from '@/data/mcat/passages/cars-ethics'
import { CARS_LITERATURE_PASSAGES } from '@/data/mcat/passages/cars-literature'
import { CARS_ARTS_PASSAGES } from '@/data/mcat/passages/cars-arts'
import { CARS_HISTORY_PASSAGES } from '@/data/mcat/passages/cars-history'
import { CARS_SOCIAL_THEORY_PASSAGES } from '@/data/mcat/passages/cars-social-theory'
import { CARS_POLITICS_PASSAGES } from '@/data/mcat/passages/cars-politics'
import { CARS_ECONOMICS_PASSAGES } from '@/data/mcat/passages/cars-economics'
import { CARS_CULTURE_PASSAGES } from '@/data/mcat/passages/cars-culture'
import { CARS_LANGUAGE_ED_PASSAGES } from '@/data/mcat/passages/cars-language-education'
import { countQuestions, MCAT_SECTION_META, type MCATPassage } from '@/data/mcat/types'

const CARS_PASSAGES: MCATPassage[] = [
  ...CARS_HUMANITIES_PASSAGES,
  ...CARS_SOCIAL_SCIENCE_PASSAGES,
  ...CARS_PHILOSOPHY_PASSAGES,
  ...CARS_ETHICS_PASSAGES,
  ...CARS_LITERATURE_PASSAGES,
  ...CARS_ARTS_PASSAGES,
  ...CARS_HISTORY_PASSAGES,
  ...CARS_SOCIAL_THEORY_PASSAGES,
  ...CARS_POLITICS_PASSAGES,
  ...CARS_ECONOMICS_PASSAGES,
  ...CARS_CULTURE_PASSAGES,
  ...CARS_LANGUAGE_ED_PASSAGES,
]

const CARS_META = MCAT_SECTION_META.cars

export default function MCATCarsPage() {
  // null = library grid; otherwise the runner for that selection.
  const [run, setRun] = useState<{ passages: MCATPassage[]; timed: boolean } | null>(null)
  // Soft 10-min/passage pacing stopwatch, applied to untimed practice launches.
  const [pacingOn, setPacingOn] = useState(false)

  /**
   * Assemble a full AAMC-length timed CARS section (53 Q · 90 min): rotate the
   * passage order from a random start so retakes draw a different set, then
   * greedily pack whole passages up to the official count. Passage selection
   * only — authored question/option order is never shuffled.
   */
  function launchTimed() {
    const offset = Math.floor(Math.random() * CARS_PASSAGES.length)
    const rotated = [...CARS_PASSAGES.slice(offset), ...CARS_PASSAGES.slice(0, offset)]
    const chosen: MCATPassage[] = []
    let count = 0
    for (const p of rotated) {
      if (count >= CARS_META.questions) break
      if (count + p.questions.length <= CARS_META.questions) {
        chosen.push(p)
        count += p.questions.length
      }
    }
    setRun({ passages: chosen, timed: true })
  }

  if (run) {
    return run.timed ? (
      <MCATPassageRunner
        passages={run.passages}
        mode="exam"
        title="CARS Timed Section"
        backHref="/mcat-cars"
        backLabel="CARS passages"
        timeLimitMinutes={CARS_META.minutes}
      />
    ) : (
      <MCATPassageRunner
        passages={run.passages}
        mode="practice"
        title="MCAT CARS Practice"
        backHref="/mcat-cars"
        backLabel="CARS passages"
        pacing={pacingOn}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <Link href="/mcat" className="text-sm text-blue-600 hover:underline dark:text-blue-400">← MCAT Prep</Link>
          <h1 className="mb-3 mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">MCAT CARS Practice</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {CARS_PASSAGES.length} full-length passages ({countQuestions(CARS_PASSAGES)} questions) across humanities and social sciences — the timed passage reps the CARS section is built on. Practice one at a time with explanations, or run the whole set.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => setRun({ passages: CARS_PASSAGES, timed: false })} className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg">
              Practice all {CARS_PASSAGES.length} passages
            </button>
            <button
              onClick={launchTimed}
              className="rounded-xl border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-gray-400 hover:shadow dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500"
            >
              Timed section — {CARS_META.questions} Q · {CARS_META.minutes} min
            </button>
          </div>
          {/* CARS lives and dies on per-passage pacing: ~10 min per passage. Soft
              target only — a visible stopwatch and an over-pace nudge, no cutoff. */}
          <button
            onClick={() => setPacingOn((v) => !v)}
            role="switch"
            aria-checked={pacingOn}
            className={`mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold transition ${pacingOn ? 'border-purple-400 bg-purple-100 text-purple-700 dark:border-purple-600 dark:bg-purple-900/30 dark:text-purple-300' : 'border-gray-300 bg-white text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}
          >
            <span className={`inline-block h-2 w-2 rounded-full ${pacingOn ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'}`} aria-hidden="true" />
            Pacing stopwatch: {pacingOn ? 'on' : 'off'} — 10:00/passage soft target
          </button>
          <p className="mt-3 text-xs text-amber-600 dark:text-amber-400">CARS answer keys are inherently interpretive — every item is marked <em>draft</em> pending expert review.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARS_PASSAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setRun({ passages: [p], timed: false })}
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <span className="mb-2 inline-block rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold capitalize text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                {p.discipline}
              </span>
              <h3 className="mb-1 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white">{p.title}</h3>
              <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{plainTextPreview(p.passageText).slice(0, 110)}…</p>
              <p className="mt-2 text-xs font-medium text-gray-400">{p.questions.length} questions</p>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <InArticleAd />
        </div>
      </div>
    </div>
  )
}
