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
import { countQuestions, type MCATPassage } from '@/data/mcat/types'

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

export default function MCATCarsPage() {
  // null = library grid; array = practice runner for that selection
  const [selection, setSelection] = useState<MCATPassage[] | null>(null)

  if (selection) {
    return (
      <MCATPassageRunner
        passages={selection}
        mode="practice"
        title="MCAT CARS Practice"
        backHref="/mcat-cars"
        backLabel="CARS passages"
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
          <button onClick={() => setSelection(CARS_PASSAGES)} className="mt-5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg">
            Practice all {CARS_PASSAGES.length} passages
          </button>
          <p className="mt-3 text-xs text-amber-600 dark:text-amber-400">CARS answer keys are inherently interpretive — every item is marked <em>draft</em> pending expert review.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARS_PASSAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelection([p])}
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
