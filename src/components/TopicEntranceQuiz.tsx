'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import 'katex/dist/katex.min.css'
import type { EntranceQuizQuestion } from '@/data/entrance-quizzes'
import { shuffleOptions } from '@/lib/shuffle-options'
import ReferenceSheetModal from './ReferenceSheetModal'
import { hasReferenceSheet } from '@/data/ap-reference-sheets'
import ScratchPad from '@/components/ScratchPad'

interface TopicEntranceQuizProps {
  topicTitle: string
  topicSlug: string
  courseSlug?: string
  questions: EntranceQuizQuestion[]
  partTitles: { partNumber: number; partTitle: string }[]
  onComplete: (masteredParts: Set<number>, destination?: 'dashboard' | 'course' | 'competitive') => void
  onCancel: () => void
}

function renderLatex(text: string): string {
  return renderRichText(text)
}

export default function TopicEntranceQuiz({
  topicTitle,
  topicSlug,
  courseSlug,
  questions,
  partTitles,
  onComplete,
  onCancel,
}: TopicEntranceQuizProps) {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'results'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<{ questionId: string; selectedAnswer: number; correct: boolean; partNumber: number }[]>([])
  const [katexReady, setKatexReady] = useState(false)
  const [showReference, setShowReference] = useState(false)
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>>(new Set())

  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])

  const question = questions[currentQuestion]
  const totalQuestions = questions.length

  // Shuffle options so the correct answer position is randomized
  const shuffled = useMemo(
    () => question ? shuffleOptions(question.options, question.correctIndex, question.id + question.question) : { options: [], correctIndex: 0 },
    [question]
  )

  const renderedQuestion = useMemo(() => renderLatex(question?.question || ''), [question?.question, katexReady]) // eslint-disable-line react-hooks/exhaustive-deps
  const renderedOptions = useMemo(
    () => shuffled.options.map(o => renderLatex(o)),
    [shuffled.options, katexReady] // eslint-disable-line react-hooks/exhaustive-deps
  )
  const renderedExplanation = useMemo(
    () => renderLatex(question?.explanation || ''),
    [question?.explanation, katexReady] // eslint-disable-line react-hooks/exhaustive-deps
  )

  // Compute results per part
  const partResults = useMemo(() => {
    const map = new Map<number, { correct: number; total: number; title: string }>()
    for (const pt of partTitles) {
      map.set(pt.partNumber, { correct: 0, total: 0, title: pt.partTitle })
    }
    for (const a of answers) {
      const entry = map.get(a.partNumber)
      if (entry) {
        entry.total++
        if (a.correct) entry.correct++
      }
    }
    return map
  }, [answers, partTitles])

  const masteredParts = useMemo(() => {
    const mastered = new Set<number>()
    partResults.forEach((result, partNum) => {
      if (result.total > 0 && result.correct === result.total) {
        mastered.add(partNum)
      }
    })
    return mastered
  }, [partResults])

  const handleConfirm = useCallback(() => {
    if (selectedAnswer === null) return
    const correct = selectedAnswer === shuffled.correctIndex
    setAnswers(prev => [...prev, {
      questionId: question.id,
      selectedAnswer,
      correct,
      partNumber: question.partNumber,
    }])
    setShowExplanation(true)
  }, [selectedAnswer, question, shuffled.correctIndex])

  const handleGuessing = useCallback(() => {
    setAnswers(prev => [...prev, {
      questionId: question.id,
      selectedAnswer: -1,
      correct: false,
      partNumber: question.partNumber,
    }])
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setEliminatedOptions(new Set())
    } else {
      setPhase('results')
    }
  }, [question, currentQuestion, totalQuestions])

  const handleNext = useCallback(() => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setEliminatedOptions(new Set())
    } else {
      setPhase('results')
    }
  }, [currentQuestion, totalQuestions])

  const toggleEliminate = useCallback((idx: number) => {
    if (showExplanation) return
    setEliminatedOptions(prev => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        next.add(idx)
        // Deselect if currently selected
        if (selectedAnswer === idx) setSelectedAnswer(null)
      }
      return next
    })
  }, [showExplanation, selectedAnswer])

  const handleFinish = useCallback((destination?: 'dashboard' | 'course' | 'competitive') => {
    onComplete(masteredParts, destination)
  }, [onComplete, masteredParts])

  // ── Intro Screen ──
  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{topicTitle}</h2>
          <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">Entrance Quiz</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            This quiz has <strong>{totalQuestions} questions</strong> covering all {partTitles.length} parts of this lesson.
            If you get all questions correct for a specific part, you&apos;ll be able to <strong>skip</strong> that part entirely.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">Parts covered:</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {partTitles.map(pt => (
                <li key={pt.partNumber} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center">
                    {pt.partNumber}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: renderLatex(pt.partTitle) }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={onCancel}
              className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Start Lesson Instead
            </button>
            <button
              onClick={() => setPhase('quiz')}
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Take Entrance Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Quiz Screen ──
  if (phase === 'quiz' && question) {
    const score = answers.filter(a => a.correct).length
    const optionLetters = ['A', 'B', 'C', 'D']

    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {score}/{answers.length} correct
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + (showExplanation ? 1 : 0)) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Part badge */}
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
              Part {question.partNumber}: <span dangerouslySetInnerHTML={{ __html: renderLatex(question.partTitle) }} />
            </span>
          </div>

          {/* Reference material & tools */}
          <div className="flex gap-2 mb-4">
            {courseSlug && hasReferenceSheet(courseSlug) && (
              <button
                onClick={() => setShowReference(true)}
                className="text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                📋 Reference Sheet
              </button>
            )}
            <ScratchPad storageKey={`entrance-quiz-${topicSlug}`} />
          </div>
          <ReferenceSheetModal open={showReference} onClose={() => setShowReference(false)} courseSlug={courseSlug} />

          {/* Question */}
          <div
            className="text-lg font-semibold text-gray-900 dark:text-white mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderedQuestion }}
          />

          {/* Options */}
          <div className="space-y-3 mb-6">
            {renderedOptions.map((optionHtml, idx) => {
              const isEliminated = eliminatedOptions.has(idx)
              let borderColor = 'border-gray-200 dark:border-gray-700'
              let bgColor = 'bg-white dark:bg-gray-800'
              let textColor = 'text-gray-900 dark:text-white'

              if (showExplanation) {
                if (idx === shuffled.correctIndex) {
                  borderColor = 'border-green-500'
                  bgColor = 'bg-green-50 dark:bg-green-900/20'
                  textColor = 'text-green-800 dark:text-green-200'
                } else if (idx === selectedAnswer && idx !== shuffled.correctIndex) {
                  borderColor = 'border-red-500'
                  bgColor = 'bg-red-50 dark:bg-red-900/20'
                  textColor = 'text-red-800 dark:text-red-200'
                }
              } else if (idx === selectedAnswer) {
                borderColor = 'border-purple-500'
                bgColor = 'bg-purple-50 dark:bg-purple-900/20'
              }

              return (
                <div key={idx} className="relative group">
                  <button
                    onClick={() => !showExplanation && !isEliminated && setSelectedAnswer(idx)}
                    disabled={showExplanation || isEliminated}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${borderColor} ${bgColor} ${textColor} ${
                      !showExplanation && !isEliminated ? 'hover:border-purple-400 cursor-pointer' : 'cursor-default'
                    } ${isEliminated && !showExplanation ? 'opacity-45 line-through decoration-2 decoration-gray-400 dark:decoration-gray-500' : ''}`}
                  >
                    <span className="font-semibold mr-2">{optionLetters[idx]}.</span>
                    <span dangerouslySetInnerHTML={{ __html: optionHtml }} />
                  </button>
                  {/* Eliminate / restore button */}
                  {!showExplanation && (
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleEliminate(idx) }}
                      title={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all text-xs font-bold ${
                        isEliminated
                          ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-500'
                          : 'bg-transparent text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 dark:hover:text-red-400'
                      }`}
                    >
                      ✕
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`p-4 rounded-xl mb-4 ${
              answers[answers.length - 1]?.correct
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <p className={`font-semibold text-sm mb-1 ${
                answers[answers.length - 1]?.correct
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }`}>
                {answers[answers.length - 1]?.correct ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <div
                className="text-sm text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: renderedExplanation }}
              />
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-3">
            {!showExplanation ? (
              <>
                <button
                  onClick={handleGuessing}
                  className="flex-1 py-3 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  I Would Be Guessing
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={selectedAnswer === null}
                  className="flex-1 py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Confirm Answer
                </button>
              </>
            ) : (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                {currentQuestion < totalQuestions - 1 ? 'Next Question →' : 'See Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ── Results Screen ──
  const totalCorrect = answers.filter(a => a.correct).length
  const partsToStudy = partTitles.filter(pt => !masteredParts.has(pt.partNumber))

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Score header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">
            {masteredParts.size === partTitles.length ? '🎉' : masteredParts.size > 0 ? '💪' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Entrance Quiz Complete!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {totalCorrect} / {totalQuestions} correct
          </p>
        </div>

        {/* Per-part breakdown */}
        <div className="space-y-3 mb-8">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide">
            Results by Part
          </h3>
          {partTitles.map(pt => {
            const result = partResults.get(pt.partNumber)
            if (!result) return null
            const mastered = masteredParts.has(pt.partNumber)

            return (
              <div
                key={pt.partNumber}
                className={`flex items-center justify-between p-3 rounded-xl border-2 ${
                  mastered
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                    : 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    mastered
                      ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200'
                      : 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                  }`}>
                    {pt.partNumber}
                  </span>
                  <span className={`font-medium text-sm ${
                    mastered
                      ? 'text-green-800 dark:text-green-200'
                      : 'text-amber-800 dark:text-amber-200'
                  }`} dangerouslySetInnerHTML={{ __html: renderLatex(pt.partTitle) }} />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${
                    mastered ? 'text-green-700 dark:text-green-300' : 'text-amber-700 dark:text-amber-300'
                  }`}>
                    {result.correct}/{result.total}
                  </span>
                  <span className="text-base">
                    {mastered ? '✅' : '📖'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary message */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
          {masteredParts.size === partTitles.length ? (
            <p className="text-center text-green-700 dark:text-green-300 font-semibold">
              🎉 You mastered all parts! You can skip the entire lesson.
            </p>
          ) : masteredParts.size > 0 ? (
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong className="text-green-700 dark:text-green-300">✅ {masteredParts.size} part{masteredParts.size > 1 ? 's' : ''} mastered</strong> — you&apos;ll skip {masteredParts.size > 1 ? 'those' : 'that'} and focus on the remaining {partsToStudy.length} part{partsToStudy.length > 1 ? 's' : ''}:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                {partsToStudy.map(pt => (
                  <li key={pt.partNumber}>📖 Part {pt.partNumber}: <span dangerouslySetInnerHTML={{ __html: renderLatex(pt.partTitle) }} /></li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">
              You&apos;ll go through all {partTitles.length} parts of the lesson. Don&apos;t worry — each part builds on the last!
            </p>
          )}
        </div>

        {/* Action buttons */}
        {masteredParts.size === partTitles.length ? (
          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-2">
              <p className="text-green-700 dark:text-green-300 font-semibold text-center">
                🏆 This topic is now marked as mastered!
              </p>
            </div>
            <button
              onClick={() => handleFinish('competitive')}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-colors shadow-lg"
            >
              ⚔️ Enter Competitive Mode
            </button>
            <button
              onClick={() => handleFinish('course')}
              className="w-full py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg"
            >
              📚 Return to {courseSlug ? courseSlug.replace(/-/g, ' ').replace(/\bap\b/g, 'AP').replace(/\b\w/g, l => l.toUpperCase()) : 'Course'}
            </button>
            <button
              onClick={() => handleFinish('dashboard')}
              className="w-full py-3 rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              🏠 Return to Dashboard
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleFinish()}
            className="w-full py-3 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg"
          >
            {masteredParts.size > 0
              ? <span>Start with Part {partsToStudy[0]?.partNumber}: <span dangerouslySetInnerHTML={{ __html: renderLatex(partsToStudy[0]?.partTitle || '') }} /> →</span>
              : 'Start Lesson →'
            }
          </button>
        )}
      </div>
    </div>
  )
}
