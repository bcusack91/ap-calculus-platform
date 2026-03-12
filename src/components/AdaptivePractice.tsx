'use client'

import { useState, useCallback } from 'react'

interface AdaptiveQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 1 | 2 | 3 | 4 | 5
  skill: string
}

interface AdaptivePracticeProps {
  subject: string
  questionPool: AdaptiveQuestion[]
  initialDifficulty?: number
}

export function AdaptivePractice({
  subject,
  questionPool,
  initialDifficulty = 3,
}: AdaptivePracticeProps) {
  const [currentDifficulty, setCurrentDifficulty] = useState(initialDifficulty)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [history, setHistory] = useState<{ correct: boolean; difficulty: number }[]>([])
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set())

  const getNextQuestion = useCallback(
    (difficulty: number): AdaptiveQuestion | null => {
      const available = questionPool
        .filter((q) => !usedIds.has(q.id) && Math.abs(q.difficulty - difficulty) <= 1)
        .sort((a, b) => Math.abs(a.difficulty - difficulty) - Math.abs(b.difficulty - difficulty))
      return available[0] || null
    },
    [questionPool, usedIds]
  )

  const currentQuestion = questionIdx === 0 && usedIds.size === 0
    ? questionPool.find((q) => q.difficulty === currentDifficulty) || questionPool[0]
    : getNextQuestion(currentDifficulty)

  if (!currentQuestion) {
    const score = history.filter((h) => h.correct).length
    return (
      <div className="my-6 rounded-lg border-2 border-purple-300 dark:border-purple-700 p-6 bg-purple-50 dark:bg-purple-900/10 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Practice Complete!
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Score: {score}/{history.length} ({Math.round((score / history.length) * 100)}%)
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Final difficulty level: {currentDifficulty}/5
        </p>
      </div>
    )
  }

  const handleAnswer = () => {
    if (selected === null) return
    const correct = selected === currentQuestion.correctAnswer
    setShowResult(true)

    const newHistory = [...history, { correct, difficulty: currentQuestion.difficulty }]
    setHistory(newHistory)

    // Adaptive algorithm: adjust difficulty based on recent performance
    const recent = newHistory.slice(-3)
    const recentCorrect = recent.filter((h) => h.correct).length

    let newDiff = currentDifficulty
    if (recentCorrect >= 3 && currentDifficulty < 5) newDiff = currentDifficulty + 1
    else if (recentCorrect >= 2 && currentDifficulty < 5) newDiff = Math.min(currentDifficulty + 0.5, 5)
    else if (recentCorrect === 0 && currentDifficulty > 1) newDiff = currentDifficulty - 1
    else if (recentCorrect <= 1 && currentDifficulty > 1) newDiff = Math.max(currentDifficulty - 0.5, 1)

    setCurrentDifficulty(Math.round(newDiff))
  }

  const nextQuestion = () => {
    setUsedIds((prev) => new Set(prev).add(currentQuestion.id))
    setSelected(null)
    setShowResult(false)
    setQuestionIdx((i) => i + 1)
  }

  const difficultyLabel = ['', 'Easy', 'Below Average', 'Medium', 'Hard', 'Expert'][currentQuestion.difficulty]
  const difficultyColor = ['', 'text-green-600', 'text-blue-600', 'text-yellow-600', 'text-orange-600', 'text-red-600'][currentQuestion.difficulty]

  return (
    <div className="my-6 rounded-lg border-2 border-purple-300 dark:border-purple-700 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-5 py-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <span>🎯</span> Adaptive {subject} Practice
          </h3>
          <div className="flex items-center gap-3 text-sm">
            <span>Q{history.length + 1}</span>
            <span>
              {history.filter((h) => h.correct).length}/{history.length} correct
            </span>
          </div>
        </div>
        {/* Difficulty bar */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-purple-200">Difficulty:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={`w-6 h-2 rounded-full ${
                  n <= currentQuestion.difficulty
                    ? 'bg-white'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-purple-200">{difficultyLabel}</span>
        </div>
      </div>

      <div className="p-5 bg-purple-50 dark:bg-purple-900/10">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold ${difficultyColor}`}>
              {difficultyLabel}
            </span>
            <span className="text-xs text-gray-500">• {currentQuestion.skill}</span>
          </div>

          <p className="font-medium text-gray-900 dark:text-white mb-4">
            {currentQuestion.question}
          </p>

          <div className="space-y-2">
            {currentQuestion.options.map((opt, oIdx) => {
              let cls = 'border-gray-200 dark:border-gray-700 hover:border-purple-400 cursor-pointer'
              if (showResult) {
                if (oIdx === currentQuestion.correctAnswer)
                  cls = 'border-green-500 bg-green-50 dark:bg-green-900/20'
                else if (oIdx === selected && oIdx !== currentQuestion.correctAnswer)
                  cls = 'border-red-500 bg-red-50 dark:bg-red-900/20'
                else cls = 'border-gray-200 dark:border-gray-700 opacity-50'
              } else if (oIdx === selected) {
                cls = 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
              }
              return (
                <button
                  key={oIdx}
                  onClick={() => !showResult && setSelected(oIdx)}
                  disabled={showResult}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm transition-colors ${cls}`}
                >
                  <span className="font-medium text-gray-500 mr-2">
                    {String.fromCharCode(65 + oIdx)}.
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>

          {showResult && (
            <div className={`mt-4 p-4 rounded-lg text-sm ${
              selected === currentQuestion.correctAnswer
                ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
            }`}>
              <p className="font-semibold mb-1">
                {selected === currentQuestion.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
              </p>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            {!showResult ? (
              <button
                onClick={handleAnswer}
                disabled={selected === null}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Next Question →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
