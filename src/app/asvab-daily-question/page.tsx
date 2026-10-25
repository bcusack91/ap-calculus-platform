'use client'
// Page shell is platform-owned; B1 fills src/data/asvab-daily-question.ts (AsvabDailyQuestion shape).

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { shuffleOptions } from '@/lib/shuffle-options'
import { MathText } from '@/components/MathText'
import { InArticleAd } from '@/components/ad-banner'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'

interface DailyQ {
  topicSlug: string
  section: string
  question: { question: string; options: string[]; correctAnswer: number; explanation: string }
  dayNumber: number
}

// Subtest label -> card gradient (labels come from src/data/asvab-daily-question.ts).
const sectionColor: Record<string, string> = {
  'Word Knowledge': 'from-blue-500 to-indigo-500',
  'Paragraph Comprehension': 'from-indigo-500 to-violet-500',
  'Arithmetic Reasoning': 'from-green-500 to-emerald-500',
  'Mathematics Knowledge': 'from-teal-500 to-cyan-500',
}

function ASVABDailyQuestionPageInner() {
  const [questions, setQuestions] = useState<DailyQ[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    fetch('/api/asvab-daily-question')
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link href="/asvab" className="mb-4 inline-flex items-center gap-1 text-sm text-green-600 hover:underline dark:text-green-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            ASVAB
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">ASVAB — Question of the Day</h1>
          <p className="text-gray-600 dark:text-gray-400">A fresh ASVAB question every day, rotating through the subtests.</p>
          <p className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" /></div>
        ) : q ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className={`rounded-t-2xl bg-gradient-to-r ${sectionColor[q.section] ?? 'from-green-500 to-lime-500'} p-4 text-white`}>
                <span className="text-sm font-medium opacity-80">Today&apos;s ASVAB {q.section} Question</span>
              </div>
              <div className="p-6">
                <MathText text={q.question.question} className="mb-5 text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
                <div className="mb-5 space-y-2">
                  {q.question.options.map((opt, i) => {
                    let cls = 'w-full rounded-xl border px-4 py-3 text-left text-sm transition '
                    if (revealed) {
                      if (i === q.question.correctAnswer) cls += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600'
                      else if (i === selected && i !== q.question.correctAnswer) cls += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600'
                      else cls += 'border-gray-200 text-gray-500 dark:border-gray-600 dark:text-gray-400'
                    } else if (i === selected) cls += 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-500'
                    else cls += 'border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-green-500'
                    return (<button key={i} onClick={() => !revealed && setSelected(i)} disabled={revealed} className={cls}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span><MathText inline text={opt} /></button>)
                  })}
                </div>
                {!revealed ? (
                  <button onClick={() => setRevealed(true)} disabled={selected === null} className="w-full rounded-xl bg-gradient-to-r from-green-600 to-lime-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-40">Check Answer</button>
                ) : (
                  <div className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-700/50">
                    <div className="mb-1 font-semibold text-gray-900 dark:text-white">{selected === q.question.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}</div>
                    <MathText text={q.question.explanation} className="text-gray-600 dark:text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="mx-auto max-w-xl text-center text-gray-600 dark:text-gray-400">Daily ASVAB questions start soon. Check back tomorrow.</p>
        )}

        {/* In-article ad — below the question card, above the CTA. Self-manages
            premium/dev/consent/CLS and renders nothing when no slot is set. */}
        <div className="mx-auto my-10 max-w-2xl">
          <InArticleAd />
        </div>

        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Want more practice? Try a full diagnostic or explore all subtests.</p>
          <div className="flex justify-center gap-3">
            <Link href="/asvab-diagnostic" className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">Diagnostic Test</Link>
            <Link href="/asvab" className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">All ASVAB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ASVABDailyQuestionPage() {
  return (
    <>
      <ASVABDailyQuestionPageInner />
      <ToolPageSeoBody subjectName="ASVAB" />
    </>
  )
}
