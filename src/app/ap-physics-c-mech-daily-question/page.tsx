'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface DailyQ {
  topicSlug: string
  question: { question: string; options: string[]; correctAnswer: number; explanation: string }
  dayNumber: number
}

export default function APPhysicsCMechDailyQuestionPage() {
  const [questions, setQuestions] = useState<DailyQ[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    fetch('/api/ap-physics-c-mech-daily-question')
      .then(r => r.json())
      .then(data => setQuestions(data.questions ?? []))
      .finally(() => setLoading(false))
  }, [])

  const q = questions[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link href="/courses/ap-physics-c-mechanics" className="mb-4 inline-flex items-center gap-1 text-sm text-slate-600 hover:underline dark:text-slate-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            AP Physics C: Mechanics
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">AP Physics C: Mechanics - Question of the Day</h1>
          <p className="text-gray-600 dark:text-gray-400">A fresh mechanics question every day. Master motion, forces, energy, momentum, and rotation one problem at a time.</p>
          <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-600" /></div>
        ) : q ? (
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="rounded-t-2xl bg-gradient-to-r from-slate-600 to-blue-600 p-4 text-white">
                <span className="text-sm font-medium opacity-80">Today&apos;s Physics C: Mechanics Question</span>
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
                    } else if (i === selected) cls += 'border-slate-500 bg-slate-50 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300 dark:border-slate-500'
                    else cls += 'border-gray-200 text-gray-700 hover:border-slate-300 hover:bg-slate-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-slate-500'
                    return (<button key={i} onClick={() => !revealed && setSelected(i)} disabled={revealed} className={cls}><span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>{opt}</button>)
                  })}
                </div>
                {!revealed ? (
                  <button onClick={() => setRevealed(true)} disabled={selected === null} className="w-full rounded-xl bg-gradient-to-r from-slate-600 to-blue-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-40">Check Answer</button>
                ) : (
                  <div className="rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-700/50">
                    <div className="mb-1 font-semibold text-gray-900 dark:text-white">{selected === q.question.correctAnswer ? 'Correct!' : 'Incorrect'}</div>
                    <p className="text-gray-600 dark:text-gray-400">{q.question.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mx-auto mt-10 max-w-md text-center">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Want more AP Physics C: Mechanics practice?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/ap-physics-c-mech-diagnostic" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900/30 dark:text-slate-400">Diagnostic Test</Link>
            <Link href="/ap-physics-c-mech-score-predictor" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900/30 dark:text-slate-400">Score Predictor</Link>
            <Link href="/courses/ap-physics-c-mechanics" className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900/30 dark:text-slate-400">All Topics</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
