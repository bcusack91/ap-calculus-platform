'use client'

import { useState } from 'react'

interface CARSPassage {
  id: string
  title: string
  text: string
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    questionType: 'foundation' | 'reasoning' | 'application'
  }[]
}

interface MCATCARSPracticeProps {
  passages: CARSPassage[]
}

export function MCATCARSPractice({ passages }: MCATCARSPracticeProps) {
  const [currentPassage, setCurrentPassage] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [timerActive, setTimerActive] = useState(false)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  const passage = passages[currentPassage]
  if (!passage) return null

  const handleStart = () => {
    setTimerActive(true)
    const interval = setInterval(() => {
      setElapsedSeconds((s) => s + 1)
    }, 1000)
    // Store interval ID on window for cleanup
    ;(window as Record<string, unknown>).__carsTimer = interval
  }

  const handleSubmit = () => {
    setTimerActive(false)
    const timerId = (window as Record<string, unknown>).__carsTimer
    if (timerId) clearInterval(timerId as number)
    setShowResults(true)
  }

  const score = passage.questions.reduce(
    (acc, q, i) => acc + (answers[`${passage.id}-${i}`] === q.correctAnswer ? 1 : 0),
    0
  )

  const allAnswered = passage.questions.every(
    (_, i) => answers[`${passage.id}-${i}`] !== undefined
  )

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

  const typeLabel = {
    foundation: 'Foundations of Comprehension',
    reasoning: 'Reasoning Within the Text',
    application: 'Reasoning Beyond the Text',
  }

  return (
    <div className="my-8 rounded-lg border-2 border-rose-300 dark:border-rose-700 overflow-hidden">
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span>📖</span> MCAT CARS Practice
            </h3>
            <p className="text-rose-100 text-sm">
              Passage {currentPassage + 1} of {passages.length}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            {timerActive && (
              <span className="bg-rose-700 px-3 py-1 rounded-full font-mono">
                ⏱ {formatTime(elapsedSeconds)}
              </span>
            )}
            <span className="bg-rose-700 px-3 py-1 rounded-full">
              Target: ~10 min/passage
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 bg-rose-50 dark:bg-rose-900/10">
        {/* Passage selector */}
        {passages.length > 1 && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {passages.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentPassage(i)
                  setShowResults(false)
                  setElapsedSeconds(0)
                  setTimerActive(false)
                }}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  i === currentPassage
                    ? 'bg-rose-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border hover:bg-rose-100'
                }`}
              >
                Passage {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* Start timer prompt */}
        {!timerActive && !showResults && (
          <div className="mb-4 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-700 flex items-center justify-between">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              ⏱ Time yourself to practice under MCAT conditions (~10 minutes per passage)
            </p>
            <button
              onClick={handleStart}
              className="px-4 py-1 bg-amber-500 text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              Start Timer
            </button>
          </div>
        )}

        {/* Passage text */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-rose-200 dark:border-rose-700 mb-5 max-h-96 overflow-y-auto">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">{passage.title}</h4>
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {passage.text}
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {passage.questions.map((q, qIdx) => {
            const key = `${passage.id}-${qIdx}`
            const selected = answers[key]
            const isCorrect = selected === q.correctAnswer
            return (
              <div
                key={qIdx}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-rose-200 dark:border-rose-700"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300">
                    {typeLabel[q.questionType]}
                  </span>
                </div>
                <p className="font-medium text-gray-900 dark:text-white mb-3 text-sm">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    let cls = 'border-gray-200 dark:border-gray-700 hover:border-rose-400'
                    if (showResults) {
                      if (oIdx === q.correctAnswer) cls = 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      else if (oIdx === selected && !isCorrect) cls = 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    } else if (oIdx === selected) {
                      cls = 'border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                    }
                    return (
                      <button
                        key={oIdx}
                        onClick={() => {
                          if (!showResults) setAnswers((prev) => ({ ...prev, [key]: oIdx }))
                        }}
                        disabled={showResults}
                        className={`w-full text-left px-4 py-2 rounded-lg border-2 text-sm transition-colors ${cls}`}
                      >
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
                    <p>{q.explanation}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-5 flex items-center justify-between">
          {!showResults ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-6 py-2 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Answers
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">
                Score: {score}/{passage.questions.length}
              </span>
              {elapsedSeconds > 0 && (
                <span className="text-sm text-gray-500">
                  Time: {formatTime(elapsedSeconds)}
                  {elapsedSeconds > 600 && ' (over target)'}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
