'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { shuffleOptions } from '@/lib/shuffle-options'
import { InArticleAd } from '@/components/ad-banner'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'

interface DailyQ {
  topicSlug: string
  question: { question: string; options: string[]; correctAnswer: number; explanation: string }
  dayNumber: number
}

function APBioDailyQuestionPageInner() {
  const [questions, setQuestions] = useState<DailyQ[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    fetch('/api/ap-bio-daily-question')
      .then(r => r.json())
      .then(data => {
        const qs = (data.questions ?? []).map((dq: DailyQ) => {
          const s = shuffleOptions(dq.question.options, dq.question.correctAnswer, dq.question.question)
          return { ...dq, question: { ...dq.question, options: s.options, correctAnswer: s.correctIndex } }
        })
        setQuestions(qs)
      })
      .finally(() => setLoading(false))
  }, [])

  const q = questions[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link href="/ap-biology" className="mb-4 inline-flex items-center gap-1 text-sm text-green-600 hover:underline dark:text-green-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            AP Biology
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">AP Biology — Question of the Day</h1>
          <p className="text-gray-600 dark:text-gray-400">A fresh biology question every day. Build your AP Bio knowledge one concept at a time!</p>
          <p className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" /></div>
        ) : q ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="rounded-t-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white">
                <span className="text-sm font-medium opacity-80">Today&apos;s Biology Question</span>
              </div>
              <div className="p-6">
                <p className="mb-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{q.question.question}</p>
                <div className="mb-5 space-y-2">
                  {q.question.options.map((opt, i) => {
                    let cls = 'w-full rounded-xl border px-4 py-3 text-left text-sm transition '
                    if (revealed) {
                      if (i === q.question.correctAnswer) cls += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600'
                      else if (i === selected && i !== q.question.correctAnswer) cls += 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-600'
                      else cls += 'border-gray-200 text-gray-500 dark:border-gray-600 dark:text-gray-400'
                    } else if (i === selected) cls += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-500'
                    else cls += 'border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-green-500'
                    return (<button key={i} onClick={() => !revealed && setSelected(i)} disabled={revealed} className={cls}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}</button>)
                  })}
                </div>
                {!revealed ? (
                  <button onClick={() => setRevealed(true)} disabled={selected === null} className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-40">Check Answer</button>
                ) : (
                  <div className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-700/50">
                    <div className="mb-1 font-semibold text-gray-900 dark:text-white">{selected === q.question.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}</div>
                    <p className="text-gray-600 dark:text-gray-400">{q.question.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        {/* In-article ad — below the question card, above the CTA. Self-manages
            premium/dev/consent/CLS and renders nothing when no slot is set. */}
        <div className="mx-auto my-10 max-w-2xl">
          <InArticleAd />
        </div>

        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Want more practice? Try a full diagnostic or explore all topics.</p>
          <div className="flex justify-center gap-3">
            <Link href="/ap-bio-diagnostic" className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">Diagnostic Test</Link>
            <Link href="/ap-biology" className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">All Bio Topics</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function APBioDailyQuestionPage() {
  return (
    <>
      <APBioDailyQuestionPageInner />
      <ToolPageSeoBody subjectName="AP Biology" />
    </>
  )
}
