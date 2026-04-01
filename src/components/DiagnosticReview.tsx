'use client'

import { useState, useEffect } from 'react'
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy'

function renderLatex(text: string): string {
  try {
    let result = text.replace(/\$\$((?:[^$\\]|\\.)+)\$\$/g, (_match, latex) => {
      try { return renderKatexSync(latex.trim(), { displayMode: true }) }
      catch { return latex }
    })
    result = result.replace(/\$((?:[^$\\]|\\.)+)\$/g, (_match, latex) => {
      try { return renderKatexSync(latex.trim(), { displayMode: false }) }
      catch { return latex }
    })
    return result
  } catch {
    return text
  }
}

export interface ReviewQuestion {
  question: string
  options: string[]
  correctAnswer?: number
  correctIndex?: number
  explanation: string
  domain: string
}

function getCorrectAnswer(q: ReviewQuestion): number {
  return q.correctAnswer ?? q.correctIndex ?? 0
}

interface DiagnosticReviewProps {
  questions: ReviewQuestion[]
  answers: (number | null)[]
  domainNames?: Record<string, string>
  accentColor?: string
}

type FilterMode = 'missed' | 'all' | 'correct'

export default function DiagnosticReview({ questions, answers, domainNames, accentColor = 'purple' }: DiagnosticReviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState<FilterMode>('missed')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [katexReady, setKatexReady] = useState(false)

  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])

  const missedIndices: number[] = []
  const correctIndices: number[] = []
  const skippedIndices: number[] = []

  questions.forEach((q, i) => {
    if (answers[i] === null || answers[i] === undefined) {
      missedIndices.push(i)
      skippedIndices.push(i)
    } else if (answers[i] !== getCorrectAnswer(q)) {
      missedIndices.push(i)
    } else {
      correctIndices.push(i)
    }
  })

  const filteredIndices = filter === 'missed' ? missedIndices : filter === 'correct' ? correctIndices : questions.map((_, i) => i)

  if (!isOpen) {
    return (
      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">📝 Review Your Test</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {missedIndices.length > 0
                ? `You missed ${missedIndices.length} question${missedIndices.length > 1 ? 's' : ''} — review them with explanations`
                : 'Perfect score! Review all your answers'}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`rounded-xl bg-${accentColor}-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-${accentColor}-700`}
            style={{ backgroundColor: accentColor === 'purple' ? undefined : undefined }}
          >
            Review {missedIndices.length > 0 ? `${missedIndices.length} Missed` : 'All'} →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">📝 Test Review</h3>
        <button
          onClick={() => { setIsOpen(false); setExpandedIndex(null) }}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Collapse ↑
        </button>
      </div>

      {/* Filter tabs */}
      <div className="mb-4 flex gap-2">
        {([
          { key: 'missed' as FilterMode, label: `Missed (${missedIndices.length})` },
          { key: 'all' as FilterMode, label: `All (${questions.length})` },
          { key: 'correct' as FilterMode, label: `Correct (${correctIndices.length})` },
        ]).map(tab => (
          <button
            key={tab.key}
            onClick={() => { setFilter(tab.key); setExpandedIndex(null) }}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              filter === tab.key
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filteredIndices.length === 0 ? (
        <p className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {filter === 'missed' ? 'No questions missed — great job!' : 'No questions to show.'}
        </p>
      ) : (
        <div className="space-y-2">
          {filteredIndices.map(qi => {
            const q = questions[qi]
            const studentAnswer = answers[qi]
            const isCorrect = studentAnswer === getCorrectAnswer(q)
            const isSkipped = studentAnswer === null || studentAnswer === undefined
            const isExpanded = expandedIndex === qi

            return (
              <div
                key={qi}
                className={`rounded-xl border transition ${
                  isCorrect
                    ? 'border-green-200 dark:border-green-800'
                    : 'border-red-200 dark:border-red-800'
                }`}
              >
                {/* Question header — always visible */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : qi)}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left"
                >
                  <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isCorrect
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
                  }`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-500">Q{qi + 1}</span>
                      {domainNames && q.domain && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                          {domainNames[q.domain] ?? q.domain}
                        </span>
                      )}
                      {isSkipped && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                          Skipped
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-1 text-sm text-gray-800 dark:text-gray-200 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: katexReady ? renderLatex(q.question) : q.question }}
                    />
                  </div>
                  <span className="mt-1 shrink-0 text-gray-400 dark:text-gray-500">{isExpanded ? '▲' : '▼'}</span>
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="border-t border-gray-100 px-4 pb-4 pt-3 dark:border-gray-700">
                    <div className="space-y-1.5">
                      {q.options.map((opt, oi) => {
                        const isStudentChoice = studentAnswer === oi
                        const isCorrectOption = getCorrectAnswer(q) === oi
                        let optionClass = 'border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-300'
                        if (isCorrectOption) {
                          optionClass = 'border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-900/30 dark:text-green-300'
                        } else if (isStudentChoice && !isCorrectOption) {
                          optionClass = 'border-red-300 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300'
                        }

                        return (
                          <div
                            key={oi}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${optionClass}`}
                          >
                            <span className="font-bold">{String.fromCharCode(65 + oi)}.</span>
                            <span
                              className="flex-1"
                              dangerouslySetInnerHTML={{ __html: katexReady ? renderLatex(opt) : opt }}
                            />
                            {isCorrectOption && (
                              <span className="shrink-0 text-xs font-semibold text-green-600 dark:text-green-400">✓ Correct</span>
                            )}
                            {isStudentChoice && !isCorrectOption && (
                              <span className="shrink-0 text-xs font-semibold text-red-600 dark:text-red-400">Your answer</span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Explanation */}
                    <div className="mt-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                      <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">Explanation</p>
                      <p
                        className="text-sm text-blue-800 dark:text-blue-200"
                        dangerouslySetInnerHTML={{ __html: katexReady ? renderLatex(q.explanation) : q.explanation }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
