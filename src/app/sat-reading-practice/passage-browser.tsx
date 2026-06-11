'use client'

/**
 * Interactive SAT reading passage browser.
 *
 * Deliberately does NOT import `@/data/sat-passages` (the full ~83 KB bank) —
 * it receives a lightweight summary list as serialized props from the server
 * page and fetches one full passage on demand from /api/sat-passages?id=…
 * when the student opens it. react-markdown was dropped entirely: the passage
 * bank contains no markdown syntax (verified — plain prose only), so the text
 * is rendered as plain paragraphs.
 */

import { useState } from 'react'

export interface PassageSummary {
  id: string
  title: string
  genre: 'literary' | 'social-science' | 'natural-science' | 'historical'
  excerpt: string
  questionCount: number
}

interface PassageQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  skill: string
}

interface FullPassage {
  id: string
  title: string
  genre: PassageSummary['genre']
  text: string
  questions: PassageQuestion[]
}

type GenreFilter = 'all' | PassageSummary['genre']

const GENRES: { value: GenreFilter; label: string; icon: string }[] = [
  { value: 'all', label: 'All', icon: '📚' },
  { value: 'literary', label: 'Literary', icon: '📖' },
  { value: 'social-science', label: 'Social Science', icon: '🏛️' },
  { value: 'natural-science', label: 'Natural Science', icon: '🔬' },
  { value: 'historical', label: 'Historical', icon: '📜' },
]

const GENRE_LABEL: Record<PassageSummary['genre'], string> = {
  literary: 'Literary',
  'social-science': 'Social Science',
  'natural-science': 'Natural Science',
  historical: 'Historical',
}

export function PassageBrowser({ passages }: { passages: PassageSummary[] }) {
  const [genre, setGenre] = useState<GenreFilter>('all')
  const [active, setActive] = useState<FullPassage | null>(null)
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)

  const visible = genre === 'all' ? passages : passages.filter((p) => p.genre === genre)

  async function open(id: string) {
    setLoadingId(id)
    setLoadError(null)
    try {
      const res = await fetch(`/api/sat-passages?id=${encodeURIComponent(id)}`)
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      const data = (await res.json()) as { passage: FullPassage }
      setActive(data.passage)
      setAnswers({})
      setChecked(false)
    } catch {
      setLoadError('Could not load that passage. Please try again.')
    } finally {
      setLoadingId(null)
    }
  }

  if (active) {
    const correctCount = active.questions.filter((q, i) => answers[i] === q.correctAnswer).length
    return (
      <div className="container max-w-3xl pb-10">
        <button onClick={() => setActive(null)} className="mb-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
          ← Back to passages
        </button>
        <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {GENRE_LABEL[active.genre]}
        </span>
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{active.title}</h2>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 leading-relaxed text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {active.text
              .split(/\n+/)
              .filter((para) => para.trim().length > 0)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
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
                      <span className="flex-1 text-gray-800 dark:text-gray-200">{opt}</span>
                      {/* Not color-only: icon + visually-hidden text per option after checking */}
                      {checked && isCorrect && (
                        <>
                          <span aria-hidden="true" className="font-bold text-green-600 dark:text-green-400">✓</span>
                          <span className="sr-only">Correct{isPicked ? ' — your answer' : ' answer'}</span>
                        </>
                      )}
                      {checked && isPicked && !isCorrect && (
                        <>
                          <span aria-hidden="true" className="font-bold text-red-600 dark:text-red-400">✗</span>
                          <span className="sr-only">Incorrect — your answer</span>
                        </>
                      )}
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

        {/* Persistent live region so screen readers announce the score when it appears */}
        <div aria-live="polite">
          {checked && (
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {correctCount}/{active.questions.length} correct
            </p>
          )}
        </div>

        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={Object.keys(answers).length < active.questions.length}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50"
          >
            Check answers
          </button>
        ) : (
          <div className="mt-3 flex items-center gap-4">
            <button onClick={() => { setChecked(false); setAnswers({}) }} className="rounded-xl border-2 border-blue-500 px-5 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20">
              Try again
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container pb-12">
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

      {loadError && (
        <p role="alert" className="mx-auto mb-6 max-w-3xl rounded-lg bg-red-50 p-3 text-center text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
          {loadError}
        </p>
      )}

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <button
            key={p.id}
            onClick={() => open(p.id)}
            disabled={loadingId !== null}
            className="group rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:shadow-lg disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800"
          >
            <span className="mb-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {GENRE_LABEL[p.genre]}
            </span>
            <h3 className="mb-1 font-bold text-gray-900 group-hover:text-blue-600 dark:text-white">{p.title}</h3>
            <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{p.excerpt}…</p>
            <p className="mt-2 text-xs font-medium text-gray-400">
              {loadingId === p.id
                ? 'Loading…'
                : `${p.questionCount} question${p.questionCount === 1 ? '' : 's'}`}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
