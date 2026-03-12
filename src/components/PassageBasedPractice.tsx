'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface PassageQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  skill: string
}

interface Passage {
  id: string
  title: string
  type: 'experiment' | 'data-analysis' | 'research-summary'
  introduction: string
  data?: string
  questions: PassageQuestion[]
}

interface PassageBasedPracticeProps {
  subject: 'ap-bio' | 'ap-chem' | 'ap-physics' | 'mcat'
  passages: Passage[]
}

export function PassageBasedPractice({ subject, passages }: PassageBasedPracticeProps) {
  const [currentPassage, setCurrentPassage] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const passage = passages[currentPassage]
  if (!passage) return null

  const subjectLabel = {
    'ap-bio': 'AP Biology',
    'ap-chem': 'AP Chemistry',
    'ap-physics': 'AP Physics',
    'mcat': 'MCAT',
  }[subject]

  const handleAnswer = (qIdx: number, optIdx: number) => {
    if (showResults) return
    setAnswers((prev) => ({ ...prev, [`${passage.id}-${qIdx}`]: optIdx }))
  }

  const score = passage.questions.reduce((acc, q, i) => {
    return acc + (answers[`${passage.id}-${i}`] === q.correctAnswer ? 1 : 0)
  }, 0)

  const allAnswered = passage.questions.every(
    (_, i) => answers[`${passage.id}-${i}`] !== undefined
  )

  return (
    <div className="my-8 rounded-lg border-2 border-teal-300 dark:border-teal-700 overflow-hidden">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span>🔬</span> {subjectLabel} Passage-Based Practice
            </h3>
            <p className="text-teal-100 text-sm mt-0.5">
              Passage {currentPassage + 1} of {passages.length}: {passage.title}
            </p>
          </div>
          <span className="bg-teal-700 px-3 py-1 rounded-full text-sm capitalize">
            {passage.type.replace(/-/g, ' ')}
          </span>
        </div>
      </div>

      <div className="p-5 bg-teal-50 dark:bg-teal-900/10">
        {/* Passage selector */}
        {passages.length > 1 && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {passages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentPassage(i)
                  setShowResults(false)
                }}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  i === currentPassage
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-teal-100'
                }`}
              >
                Passage {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Passage text */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-teal-200 dark:border-teal-700 mb-5">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {passage.introduction}
            </ReactMarkdown>
          </div>
          {passage.data && (
            <div className="mt-4 bg-gray-50 dark:bg-gray-800 rounded p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-gray-500 mb-2">DATA / TABLE:</p>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {passage.data}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {passage.questions.map((q, qIdx) => {
            const selected = answers[`${passage.id}-${qIdx}`]
            const isCorrect = selected === q.correctAnswer
            return (
              <div
                key={qIdx}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-teal-200 dark:border-teal-700"
              >
                <p className="font-medium text-gray-900 dark:text-white mb-3 text-sm">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">Q{qIdx + 1}.</span>{' '}
                  {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    let cls = 'border-gray-200 dark:border-gray-700 hover:border-teal-400'
                    if (showResults) {
                      if (oIdx === q.correctAnswer) cls = 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      else if (oIdx === selected && !isCorrect) cls = 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    } else if (oIdx === selected) {
                      cls = 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                    }
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(qIdx, oIdx)}
                        disabled={showResults}
                        className={`w-full text-left px-4 py-2 rounded-lg border-2 text-sm transition-colors ${cls}`}
                      >
                        <span className="font-medium text-gray-500 mr-2">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {showResults && (
                  <div className={`mt-3 p-3 rounded text-sm ${
                    isCorrect
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}>
                    <p className="font-semibold mb-1">{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</p>
                    <p>{q.explanation}</p>
                    <p className="mt-1 text-xs opacity-75">Skill: {q.skill}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Submit / Score */}
        <div className="mt-5 flex items-center justify-between">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={!allAnswered}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Check Answers
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Score: {score}/{passage.questions.length}
              </span>
              <button
                onClick={() => {
                  setAnswers({})
                  setShowResults(false)
                }}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                🔄 Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
