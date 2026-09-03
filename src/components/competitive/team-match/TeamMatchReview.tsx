'use client'

import { Check, X, Lightbulb } from 'lucide-react'

export interface ReviewQuestion {
  id: number
  question?: string
  prompt?: string
  options?: string[]
  answerIndex?: number
  explanation?: string
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface ReviewAnswer {
  questionIndex: number
  answerIndex: number
  correct: boolean
}

export interface AnswerSummary {
  /** Last answer per question index (players cycle through the bank, so dedupe keeps the final attempt). */
  answersByQuestion: Map<number, ReviewAnswer>
  totalAnswered: number
  totalCorrect: number
  missedCount: number
  /** Longest consecutive-correct run, computed over the chronological answer list. */
  bestStreak: number
}

/**
 * Summarize a player's chronological answer history for the post-match review.
 * Mirrors the 1v1 match page's dedupe: keep only the LAST answer per question
 * index, since team battles wrap around the question bank.
 */
export function summarizeAnswers(answers: ReviewAnswer[]): AnswerSummary {
  const answersByQuestion = new Map<number, ReviewAnswer>()
  let bestStreak = 0
  let currentStreak = 0
  for (const a of answers) {
    answersByQuestion.set(a.questionIndex, a)
    currentStreak = a.correct ? currentStreak + 1 : 0
    if (currentStreak > bestStreak) bestStreak = currentStreak
  }
  const values = Array.from(answersByQuestion.values())
  const totalCorrect = values.filter(a => a.correct).length
  return {
    answersByQuestion,
    totalAnswered: values.length,
    totalCorrect,
    missedCount: values.length - totalCorrect,
    bestStreak,
  }
}

/**
 * Post-match question review for team battles. Visual patterns mirror the 1v1
 * match review (green/red status cards, option highlighting, explanation box).
 * `renderMath` is the page's KaTeX helper (returns an HTML string).
 */
export default function TeamMatchReview({
  questions,
  summary,
  renderMath,
}: {
  questions: ReviewQuestion[]
  summary: AnswerSummary
  renderMath: (text: string) => string
}) {
  const { answersByQuestion, totalAnswered, totalCorrect, missedCount } = summary

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Match Review
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        You answered {totalCorrect} out of {totalAnswered} unique questions correctly.
        {missedCount > 0 && ' Review the ones you missed below.'}
      </p>

      <div className="space-y-4">
        {questions.map((question, qIdx) => {
          const answer = answersByQuestion.get(qIdx)
          if (!answer) return null // Player never saw this question

          const wasCorrect = answer.correct

          return (
            <div
              key={qIdx}
              className={`rounded-xl border-2 p-4 sm:p-5 transition-all ${
                wasCorrect
                  ? 'border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10'
                  : 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10'
              }`}
            >
              {/* Question header */}
              <div className="flex items-start gap-3 mb-3">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  wasCorrect
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {wasCorrect
                    ? <Check className="w-4 h-4" aria-hidden="true" />
                    : <X className="w-4 h-4" aria-hidden="true" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Question {qIdx + 1}
                    {question.difficulty && (
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        question.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                        question.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                        'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                      }`}>
                        {question.difficulty}
                      </span>
                    )}
                  </p>
                  <h3
                    className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white overflow-x-auto"
                    dangerouslySetInnerHTML={{ __html: renderMath(question.question || question.prompt || '') }}
                  />
                </div>
              </div>

              {/* Options: highlight correct answer + the player's wrong pick */}
              {question.options && (
                <div className="ml-4 sm:ml-11 space-y-2 mb-3">
                  {question.options.map((option, optIdx) => {
                    const isUserAnswer = answer.answerIndex === optIdx
                    const isCorrectAnswer = question.answerIndex === optIdx

                    return (
                      <div
                        key={optIdx}
                        className={`flex items-center gap-3 p-3 rounded-lg text-sm ${
                          isCorrectAnswer
                            ? 'bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700'
                            : isUserAnswer && !wasCorrect
                            ? 'bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700'
                            : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                          isCorrectAnswer
                            ? 'border-green-500 text-green-600 dark:text-green-400'
                            : isUserAnswer && !wasCorrect
                            ? 'border-red-500 text-red-600 dark:text-red-400'
                            : 'border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-400'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <div
                          className="flex-1 min-w-0 overflow-x-auto text-gray-900 dark:text-white"
                          dangerouslySetInnerHTML={{ __html: renderMath(option) }}
                        />
                        {isCorrectAnswer && (
                          <span className="flex-shrink-0 inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-semibold">
                            <Check className="w-4 h-4" aria-hidden="true" /> Correct
                          </span>
                        )}
                        {isUserAnswer && !wasCorrect && (
                          <span className="flex-shrink-0 text-red-600 dark:text-red-400 text-sm font-semibold">
                            Your answer
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Explanation (missed questions only, matching the 1v1 review) */}
              {question.explanation && !wasCorrect && (
                <div className="ml-4 sm:ml-11 p-4 bg-accent-subtle dark:bg-accent-light/20 rounded-lg border border-accent-muted/40 dark:border-accent/40">
                  <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-hover dark:text-accent-muted mb-1">
                    <Lightbulb className="w-4 h-4" aria-hidden="true" /> Explanation
                  </p>
                  <div
                    className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto"
                    dangerouslySetInnerHTML={{ __html: renderMath(question.explanation) }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
