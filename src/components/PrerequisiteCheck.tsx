'use client'

import { useState } from 'react'

interface PrereqQuestion {
  question: string
  options: string[]
  correctAnswer: number
  topicToReview?: string
  topicSlug?: string
}

interface PrerequisiteCheckProps {
  title: string
  description: string
  questions: PrereqQuestion[]
  onPass?: () => void
}

export function PrerequisiteCheck({ title, description, questions, onPass }: PrerequisiteCheckProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
  }

  const score = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0),
    0
  )
  const passed = score >= Math.ceil(questions.length * 0.7)
  const allAnswered = questions.every((_, i) => answers[i] !== undefined)

  const handleSubmit = () => {
    setSubmitted(true)
    if (passed && onPass) onPass()
  }

  const weakAreas = submitted
    ? questions
        .filter((q, i) => answers[i] !== q.correctAnswer && q.topicToReview)
        .map((q) => ({ topic: q.topicToReview!, slug: q.topicSlug }))
    : []

  return (
    <div className="my-6 rounded-lg border-2 border-sky-300 dark:border-sky-700 overflow-hidden">
      <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-5 py-3">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>🔍</span> Prerequisite Check: {title}
        </h3>
        <p className="text-sky-100 text-sm mt-0.5">{description}</p>
      </div>

      <div className="p-5 bg-sky-50 dark:bg-sky-900/10 space-y-4">
        {questions.map((q, qIdx) => {
          const selected = answers[qIdx]
          const isCorrect = selected === q.correctAnswer
          return (
            <div
              key={qIdx}
              className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-sky-200 dark:border-sky-700"
            >
              <p className="font-medium text-gray-900 dark:text-white mb-3 text-sm">
                {qIdx + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  let cls = 'border-gray-200 dark:border-gray-700 hover:border-sky-400 cursor-pointer'
                  if (submitted) {
                    if (oIdx === q.correctAnswer)
                      cls = 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    else if (oIdx === selected && !isCorrect)
                      cls = 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    else cls = 'border-gray-200 dark:border-gray-700 opacity-50'
                  } else if (oIdx === selected) {
                    cls = 'border-sky-500 bg-sky-50 dark:bg-sky-900/20'
                  }
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={submitted}
                      className={`w-full text-left px-3 py-2 rounded border-2 text-sm transition-colors ${cls}`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {submitted && !isCorrect && q.topicToReview && (
                <p className="mt-2 text-xs text-amber-700 dark:text-amber-400">
                  📖 Review: {q.topicSlug ? (
                    <a href={`/topics/${q.topicSlug}`} className="underline hover:text-amber-900">
                      {q.topicToReview}
                    </a>
                  ) : q.topicToReview}
                </p>
              )}
            </div>
          )
        })}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-6 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Check Prerequisites
          </button>
        ) : (
          <div className={`rounded-lg p-4 ${
            passed
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700'
              : 'bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700'
          }`}>
            <p className="font-bold text-lg">
              {passed ? '✅ Ready to proceed!' : '📖 Review recommended'}
            </p>
            <p className="text-sm mt-1">
              Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
            </p>
            {!passed && weakAreas.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium mb-1">Topics to review first:</p>
                <ul className="space-y-1">
                  {weakAreas.map((area, i) => (
                    <li key={i} className="text-sm">
                      {area.slug ? (
                        <a href={`/topics/${area.slug}`} className="text-sky-600 hover:underline">
                          → {area.topic}
                        </a>
                      ) : (
                        <span>→ {area.topic}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
