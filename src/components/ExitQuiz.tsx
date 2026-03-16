'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy'
import 'katex/dist/katex.min.css'

interface ExitQuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category: string
  topicSlug?: string
}

interface ExitQuizProps {
  topicSlug: string
  topicTitle: string
  questions: ExitQuizQuestion[]
  onComplete: (score: number, total: number, passed: boolean, mustRedoUnit: boolean, wrongTopicSlugs?: string[]) => void
  onCancel: () => void
  previousAttempts: number
  lastScore: number | null
  mustRedoUnit: boolean // from last attempt
}

// Minimal LaTeX rendering using KaTeX (uses lazy-loaded module)
// The regex (?:[^$\\]|\\.)+ handles escaped dollar signs (\$) inside math
function renderLatex(text: string): string {
  try {
    // Replace display math $$...$$ first
    let result = text.replace(/\$\$((?:[^$\\]|\\.)+)\$\$/g, (_match, latex) => {
      try { return renderKatexSync(latex.trim(), { displayMode: true }) }
      catch { return latex }
    })
    // Then inline math $...$
    result = result.replace(/\$((?:[^$\\]|\\.)+)\$/g, (_match, latex) => {
      try { return renderKatexSync(latex.trim(), { displayMode: false }) }
      catch { return latex }
    })
    return result
  } catch {
    return text
  }
}

export default function ExitQuiz({
  topicSlug,
  topicTitle,
  questions,
  onComplete,
  onCancel,
  previousAttempts,
  lastScore,
  mustRedoUnit
}: ExitQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<{ questionId: string; selectedAnswer: number; correct: boolean }[]>([])
  const [quizComplete, setQuizComplete] = useState(false)
  const [startTime] = useState(Date.now())
  const [submitting, setSubmitting] = useState(false)
  const [katexReady, setKatexReady] = useState(false)
  void topicSlug // will be used by the submit API

  // Eagerly load KaTeX on mount
  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])

  const question = questions[currentQuestion]
  const totalQuestions = questions.length

  // Precompute rendered HTML for the current question
  const renderedQuestion = useMemo(() => renderLatex(question?.question || ''), [question?.question, katexReady])
  const renderedOptions = useMemo(
    () => (question?.options || []).map(o => renderLatex(o)),
    [question?.options, katexReady]
  )
  const renderedExplanation = useMemo(
    () => renderLatex(question?.explanation || ''),
    [question?.explanation, katexReady]
  )

  const handleSelectAnswer = (index: number) => {
    if (showExplanation) return // already answered
    setSelectedAnswer(index)
  }

  const handleConfirm = () => {
    if (selectedAnswer === null) return
    const correct = selectedAnswer === question.correctIndex
    setShowExplanation(true)
    setAnswers(prev => [...prev, {
      questionId: question.id,
      selectedAnswer,
      correct
    }])
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      // Quiz finished
      setQuizComplete(true)
    }
  }

  const score = useMemo(() => answers.filter(a => a.correct).length, [answers])
  const passThreshold = Math.ceil(totalQuestions * 0.7)
  const redoThreshold = Math.ceil(totalQuestions * 0.5)
  const passed = score >= passThreshold
  const quizMustRedoUnit = score < redoThreshold

  // Compute unique topic slugs where the student got wrong answers
  const wrongTopicSlugs = useMemo(() => {
    const wrongSlugs = new Set<string>()
    answers.forEach((a, i) => {
      if (!a.correct && questions[i]?.topicSlug) {
        wrongSlugs.add(questions[i].topicSlug!)
      }
    })
    return Array.from(wrongSlugs)
  }, [answers, questions])

  const submitResults = useCallback(async () => {
    if (submitting) return
    setSubmitting(true)
    try {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      await fetch('/api/exit-quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug,
          score,
          totalQuestions,
          passed,
          mustRedoUnit: quizMustRedoUnit,
          answers,
          timeSpent
        })
      })
    } catch (err) {
      console.error('Failed to submit exit quiz:', err)
    } finally {
      setSubmitting(false)
    }
  }, [submitting, startTime, topicSlug, score, totalQuestions, passed, quizMustRedoUnit, answers])

  useEffect(() => {
    if (quizComplete) {
      submitResults()
    }
  }, [quizComplete, submitResults])

  // ===== QUIZ COMPLETE SCREEN =====
  if (quizComplete) {
    const pct = Math.round((score / totalQuestions) * 100)
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">
            {passed ? '🎉' : quizMustRedoUnit ? '📚' : '🔄'}
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {passed ? 'Quiz Passed!' : 'Not Quite Yet'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            You scored <span className="font-bold text-2xl">{score}/{totalQuestions}</span> ({pct}%)
          </p>

          {/* Score breakdown bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-6 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                passed ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                quizMustRedoUnit ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                'bg-gradient-to-r from-yellow-500 to-amber-500'
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>

          {passed ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
              <p className="text-green-800 dark:text-green-300 font-semibold text-lg">
                ⚔️ Competitive mode for this section is now unlocked!
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                You can now challenge other students in SAT Linear Equations.
              </p>
            </div>
          ) : quizMustRedoUnit ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
              <p className="text-red-800 dark:text-red-300 font-semibold text-lg">
                You need to redo the unit before retaking this quiz.
              </p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                Score at least {redoThreshold}/{totalQuestions} to be able to retry the quiz directly, or {passThreshold}/{totalQuestions} to pass.
                Go through the lesson sections again to reinforce your understanding.
              </p>
            </div>
          ) : (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 mb-6">
              <p className="text-yellow-800 dark:text-yellow-300 font-semibold text-lg">
                You&apos;re close! You can retake the quiz immediately.
              </p>
              <p className="text-yellow-600 dark:text-yellow-400 text-sm mt-2">
                You need {passThreshold}/{totalQuestions} to pass. Review the explanations below and try again!
              </p>
            </div>
          )}

          {/* Answer Review */}
          <div className="text-left mt-8">
            <h3 className="text-lg font-bold mb-4">Review Your Answers</h3>
            <div className="space-y-4">
              {questions.map((q, i) => {
                const answer = answers[i]
                return (
                  <div key={i} className={`p-4 rounded-xl border ${
                    answer?.correct
                      ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                      : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
                  }`}>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">{answer?.correct ? '✅' : '❌'}</span>
                      <div className="flex-1">
                        <p className="font-medium" dangerouslySetInnerHTML={{ __html: renderLatex(q.question) }} />
                        {!answer?.correct && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1" dangerouslySetInnerHTML={{ __html: renderLatex(q.explanation) }} />
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            {passed ? (
              <button
                onClick={() => onComplete(score, totalQuestions, true, false, wrongTopicSlugs)}
                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg"
              >
                ⚔️ Go to Competitive Mode
              </button>
            ) : quizMustRedoUnit ? (
              <button
                onClick={() => onComplete(score, totalQuestions, false, true, wrongTopicSlugs)}
                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg"
              >
                📚 Redo the Unit
              </button>
            ) : (
              <button
                onClick={() => onComplete(score, totalQuestions, false, false, wrongTopicSlugs)}
                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-500 to-amber-500 text-white hover:from-yellow-600 hover:to-amber-600 shadow-lg"
              >
                🔄 Retake Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ===== INTRO SCREEN (attempt info) =====
  // This is shown briefly as part of the quiz flow header

  // ===== QUESTION SCREEN =====
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Exit Quiz — {topicTitle}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {previousAttempts > 0 && `Attempt #${previousAttempts + 1} • `}
              Score {passThreshold}/{totalQuestions} to unlock competitive mode
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm"
          >
            ✕ Cancel
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Question {currentQuestion + 1}/{totalQuestions}
          </span>
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + (showExplanation ? 1 : 0)) / totalQuestions) * 100}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">
            {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </span>
        </div>

        {/* Category tag */}
        <div className="mb-4">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
            {question.category}
          </span>
        </div>

        {/* Question */}
        <div
          className="text-lg font-medium text-gray-900 dark:text-white mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderedQuestion }}
        />

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((_, i) => {
            const isSelected = selectedAnswer === i
            const isCorrect = i === question.correctIndex
            let style = 'border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer'

            if (showExplanation) {
              if (isCorrect) {
                style = 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-500'
              } else if (isSelected && !isCorrect) {
                style = 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-500'
              } else {
                style = 'border-gray-200 dark:border-gray-700 opacity-50'
              }
            } else if (isSelected) {
              style = 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-500 ring-2 ring-purple-300 dark:ring-purple-600'
            }

            return (
              <button
                key={i}
                onClick={() => handleSelectAnswer(i)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${style}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    showExplanation && isCorrect ? 'bg-green-500 text-white' :
                    showExplanation && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                    isSelected ? 'bg-purple-500 text-white' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span
                    className="text-gray-900 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: renderedOptions[i] }}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`p-4 rounded-xl mb-6 ${
            answers[answers.length - 1]?.correct
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <p className="font-semibold mb-1">
              {answers[answers.length - 1]?.correct ? '✅ Correct!' : '❌ Incorrect'}
            </p>
            <p
              className="text-sm text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: renderedExplanation }}
            />
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end">
          {!showExplanation ? (
            <button
              onClick={handleConfirm}
              disabled={selectedAnswer === null}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
            >
              Confirm Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg"
            >
              {currentQuestion < totalQuestions - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
