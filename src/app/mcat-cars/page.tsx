'use client'

import { useState } from 'react'
import Link from 'next/link'
import MCATPassageRunner from '@/components/MCATPassageRunner'
import { CARS_PASSAGES } from '@/data/mcat/passages'
import { countQuestions, type MCATPassage } from '@/data/mcat/types'

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
              <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{p.passageText.replace(/[#*]/g, '').slice(0, 110)}…</p>
              <p className="mt-2 text-xs font-medium text-gray-400">{p.questions.length} questions</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
