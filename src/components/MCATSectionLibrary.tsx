'use client'

import { useState } from 'react'
import Link from 'next/link'
import MCATPassageRunner from '@/components/MCATPassageRunner'
import { InArticleAd } from '@/components/ad-banner'
import { plainTextPreview } from '@/lib/render-rich-text'
import { countQuestions, type MCATPassage } from '@/data/mcat/types'

/**
 * Passage-practice library for a science MCAT section (Chem/Phys, Bio/Biochem,
 * Psych/Soc). Mirrors the CARS library: a grid of passage cards (plus a discrete
 * set), each opening the two-pane MCATPassageRunner in untimed practice mode.
 * The same banks feed the full-length exam; this surfaces them for targeted reps.
 */
export default function MCATSectionLibrary({
  sectionShort,
  sectionName,
  title,
  passages,
  discretes,
  accent,
}: {
  sectionShort: string
  sectionName: string
  title: string
  passages: MCATPassage[]
  /** Optional synthetic "Discrete Questions" passage built from the section's discretes. */
  discretes: MCATPassage | null
  accent: { from: string; to: string; chipBg: string; chipText: string; hover: string }
}) {
  const [selection, setSelection] = useState<MCATPassage[] | null>(null)

  const all = discretes ? [...passages, discretes] : passages
  const totalQ = countQuestions(all)

  if (selection) {
    return (
      <MCATPassageRunner
        passages={selection}
        mode="practice"
        title={title}
        backHref={`/mcat-${sectionShort}`}
        backLabel={`${sectionName} passages`}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <Link href="/mcat" className="text-sm text-blue-600 hover:underline dark:text-blue-400">← MCAT Prep</Link>
          <h1 className="mb-3 mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">{title}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {passages.length} experimental passages ({totalQ} questions) across {sectionName} disciplines — the passage-based reps this section is built on. Practice one at a time with full explanations, or run the whole set.
          </p>
          <button
            onClick={() => setSelection(all)}
            className={`mt-5 rounded-xl bg-gradient-to-r ${accent.from} ${accent.to} px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg`}
          >
            Practice all {passages.length} passages
          </button>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelection([p])}
              className={`group rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 ${accent.hover}`}
            >
              <span className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${accent.chipBg} ${accent.chipText}`}>
                {p.discipline}
              </span>
              <h3 className="mb-1 font-bold text-gray-900 dark:text-white">{p.title}</h3>
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
