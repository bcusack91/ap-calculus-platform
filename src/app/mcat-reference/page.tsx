'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'
import 'katex/dist/katex.min.css'
import { MCAT_REFERENCE_SHEETS } from '@/data/mcat-reference-sheets'
import { InArticleAd } from '@/components/ad-banner'

const TABS: { key: string; label: string }[] = [
  { key: 'chem-phys', label: 'Chem/Phys' },
  { key: 'bio-biochem', label: 'Bio/Biochem' },
  { key: 'psych-soc', label: 'Psych/Soc' },
]

function RichItem({ text }: { text: string }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let m = true
    preloadKatex().then(() => { if (m) setReady(true) })
    return () => { m = false }
  }, [])
  const html = useMemo(
    () => renderRichText(text),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text, ready],
  )
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export default function MCATReferencePage() {
  const [tab, setTab] = useState('chem-phys')
  const sheet = MCAT_REFERENCE_SHEETS[tab]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container max-w-4xl py-12">
        <Link href="/mcat" className="text-sm text-blue-600 hover:underline dark:text-blue-400">← MCAT Prep</Link>
        <h1 className="mb-2 mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">MCAT High-Yield Reference Sheets</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          The equations, constants, and facts worth memorizing cold — organized by section. Use these for quick review and to build flashcards.
        </p>

        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Reference sheet section">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${tab === t.key ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{sheet.emoji} {sheet.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sheet.sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 font-bold text-gray-900 dark:text-white">{section.title}</h3>
              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {section.items.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    <RichItem text={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <InArticleAd />
        </div>
      </div>
    </div>
  )
}
