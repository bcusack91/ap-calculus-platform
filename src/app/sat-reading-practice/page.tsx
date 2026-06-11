'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { SAT_PASSAGES, type ReadingPassage } from '@/data/sat-passages'

type GenreFilter = 'all' | ReadingPassage['genre']

const GENRES: { value: GenreFilter; label: string; icon: string }[] = [
  { value: 'all', label: 'All', icon: '📚' },
  { value: 'literary', label: 'Literary', icon: '📖' },
  { value: 'social-science', label: 'Social Science', icon: '🏛️' },
  { value: 'natural-science', label: 'Natural Science', icon: '🔬' },
  { value: 'historical', label: 'Historical', icon: '📜' },
]

const GENRE_LABEL: Record<ReadingPassage['genre'], string> = {
  literary: 'Literary',
  'social-science': 'Social Science',
  'natural-science': 'Natural Science',
  historical: 'Historical',
}

export default function SatReadingPracticePage() {
  const [genre, setGenre] = useState<GenreFilter>('all')
  const [active, setActive] = useState<ReadingPassage | null>(null)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)

  const passages = useMemo(
    () => (genre === 'all' ? SAT_PASSAGES : SAT_PASSAGES.filter((p) => p.genre === genre)),
    [genre],
  )

  function open(p: ReadingPassage) {
    setActive(p)
    setAnswers({})
    setChecked(false)
  }

  if (active) {
    const correctCount = active.questions.filter((q, i) => answers[i] === q.correctAnswer).length
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container max-w-3xl py-10">
          <button onClick={() => setActive(null)} className="mb-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
            ← Back to passages
          </button>
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {GENRE_LABEL[active.genre]}
          </span>
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{active.title}</h1>

          <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 leading-relaxed text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <ReactMarkdown>{active.text}</ReactMarkdown>
            </div>
          </div>

          {active.questions.map((q, qi) => {
            const picked = answers[qi]
            return (
              <div key={qi} className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-3 font-semibold text-gray-900 dark:text-white">
                  {active.questions.length > 1 ? `${qi + 1}. ` : ''}
                  {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => {
                    const isPicked = picked === oi
                    const isCorrect = oi === q.correctAnswer
                    const cls = checked
                      ? isCorrect
                        ? 'border-green-400 bg-green-50 dark:border-green-500 dark:bg-green-900/20'
                        : isPicked
                          ? 'border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900/20'
                          : 'border-gray-200 dark:border-gray-700'
                      : isPicked
                        ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20'
                        : 'border-gray-200 hover:border-blue-300 dark:border-gray-700'
                    return (
                      <button
                        key={oi}
                        disabled={checked}
                        onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                        className={`flex w-full items-start gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition ${cls}`}
                      >
                        <span className="font-bold text-gray-500">{String.fromCharCode(65 + oi)}</span>
                        <span className="text-gray-800 dark:text-gray-200">{opt}</span>
                      </button>
                    )
                  })}
                </div>
                {checked && (
                  <p className="mt-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 dark:bg-gray-900/40 dark:text-gray-300">
                    <span className="font-semibold">Explanation: </span>
                    {q.explanation}
                  </p>
                )}
              </div>
            )
          })}

          {!checked ? (
            <button
              onClick={() => setChecked(true)}
              disabled={Object.keys(answers).length < active.questions.length}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50"
            >
              Check answers
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {correctCount}/{active.questions.length} correct
              </p>
              <button onClick={() => { setChecked(false); setAnswers({}) }} className="rounded-xl border-2 border-blue-500 px-5 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20">
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <Link href="/sat" className="mb-4 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            SAT Prep
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">SAT Reading Practice</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {SAT_PASSAGES.length} passages across four genres — practice the Digital SAT Reading &amp; Writing skills passage by passage.
          </p>
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {GENRES.map((g) => (
            <button
              key={g.value}
              onClick={() => setGenre(g.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                genre === g.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {g.icon} {g.label}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {passages.map((p) => (
            <button
              key={p.id}
              onClick={() => open(p)}
              className="group rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                {GENRE_LABEL[p.genre]}
              </span>
              <h3 className="mb-1 font-bold text-gray-900 group-hover:text-blue-600 dark:text-white">{p.title}</h3>
              <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{p.text.slice(0, 120)}…</p>
              <p className="mt-2 text-xs font-medium text-gray-400">
                {p.questions.length} question{p.questions.length === 1 ? '' : 's'}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
