'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface ChainedStep {
  prompt: string
  options: string[]
  correctAnswer: number
  explanation: string
  hint?: string
  carriesForward?: string // explanation of how this feeds into next step
}

interface MultiStepProblemProps {
  title: string
  context: string
  steps: ChainedStep[]
  difficulty: 'medium' | 'hard' | 'expert'
}

export function MultiStepProblem({ title, context, steps, difficulty }: MultiStepProblemProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showHint, setShowHint] = useState(false)
  const [showResult, setShowResult] = useState<Record<number, boolean>>({})

  const diffColors = {
    medium: 'from-yellow-500 to-amber-500',
    hard: 'from-orange-500 to-red-500',
    expert: 'from-red-600 to-rose-600',
  }

  const handleAnswer = (stepIdx: number, optIdx: number) => {
    if (showResult[stepIdx]) return
    setAnswers((prev) => ({ ...prev, [stepIdx]: optIdx }))
  }

  const submitStep = (stepIdx: number) => {
    setShowResult((prev) => ({ ...prev, [stepIdx]: true }))
    setShowHint(false)
  }

  const isCorrect = (stepIdx: number) => answers[stepIdx] === steps[stepIdx].correctAnswer

  const canProceed = (stepIdx: number) => showResult[stepIdx] && isCorrect(stepIdx)

  const totalCorrect = Object.entries(showResult)
    .filter(([, shown]) => shown)
    .filter(([idx]) => isCorrect(Number(idx))).length

  const allDone = Object.keys(showResult).length === steps.length

  return (
    <div className="my-8 rounded-lg border-2 border-orange-300 dark:border-orange-700 overflow-hidden">
      <div className={`bg-gradient-to-r ${diffColors[difficulty]} text-white px-5 py-4`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span>🔗</span> Multi-Step Problem: {title}
            </h3>
            <p className="text-white/80 text-sm mt-0.5">{steps.length} linked steps</p>
          </div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm capitalize">
            {difficulty}
          </span>
        </div>
        {/* Progress */}
        <div className="mt-3 flex gap-1">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                showResult[i]
                  ? isCorrect(i) ? 'bg-green-400' : 'bg-red-400'
                  : i === currentStep ? 'bg-white/60' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 bg-orange-50 dark:bg-orange-900/10">
        {/* Context */}
        <div className="mb-5 bg-white dark:bg-gray-900 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
          <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1">CONTEXT:</p>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {context}
            </ReactMarkdown>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, stepIdx) => {
            if (stepIdx > currentStep) return null
            const selected = answers[stepIdx]
            const shown = showResult[stepIdx]
            const correct = shown && isCorrect(stepIdx)

            return (
              <div
                key={stepIdx}
                className={`bg-white dark:bg-gray-900 rounded-lg border-2 transition-colors ${
                  shown
                    ? correct ? 'border-green-300 dark:border-green-700' : 'border-red-300 dark:border-red-700'
                    : 'border-orange-200 dark:border-orange-700'
                } p-5`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                    shown ? (correct ? 'bg-green-600' : 'bg-red-600') : 'bg-orange-500'
                  }`}>
                    {stepIdx + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Step {stepIdx + 1} of {steps.length}
                  </span>
                </div>

                <div className="mb-3 prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {step.prompt}
                  </ReactMarkdown>
                </div>

                <div className="space-y-2">
                  {step.options.map((opt, oIdx) => {
                    let cls = 'border-gray-200 dark:border-gray-700 hover:border-orange-400'
                    if (shown) {
                      if (oIdx === step.correctAnswer)
                        cls = 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      else if (oIdx === selected)
                        cls = 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      else cls = 'border-gray-200 dark:border-gray-700 opacity-50'
                    } else if (oIdx === selected) {
                      cls = 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    }
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(stepIdx, oIdx)}
                        disabled={shown}
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

                {/* Hint */}
                {!shown && step.hint && (
                  <div className="mt-3">
                    {showHint && currentStep === stepIdx ? (
                      <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded border border-amber-200 dark:border-amber-700 text-sm text-amber-800 dark:text-amber-300">
                        💡 {step.hint}
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowHint(true)}
                        className="text-sm text-amber-600 hover:text-amber-800 dark:text-amber-400"
                      >
                        Need a hint?
                      </button>
                    )}
                  </div>
                )}

                {/* Submit */}
                {!shown && (
                  <div className="mt-3">
                    <button
                      onClick={() => submitStep(stepIdx)}
                      disabled={selected === undefined}
                      className="px-5 py-2 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Check Step {stepIdx + 1}
                    </button>
                  </div>
                )}

                {/* Result */}
                {shown && (
                  <div className={`mt-3 p-3 rounded text-sm ${
                    correct
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}>
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {step.explanation}
                      </ReactMarkdown>
                    </div>
                    {step.carriesForward && correct && stepIdx < steps.length - 1 && (
                      <p className="mt-2 text-xs italic opacity-75">
                        ➡️ {step.carriesForward}
                      </p>
                    )}
                  </div>
                )}

                {/* Next step button */}
                {canProceed(stepIdx) && stepIdx === currentStep && stepIdx < steps.length - 1 && (
                  <button
                    onClick={() => setCurrentStep(stepIdx + 1)}
                    className="mt-3 px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    Continue to Step {stepIdx + 2} →
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Final score */}
        {allDone && (
          <div className="mt-5 bg-white dark:bg-gray-900 rounded-lg p-5 border-2 border-orange-300 dark:border-orange-700 text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalCorrect === steps.length ? '🎉 Perfect!' : `${totalCorrect}/${steps.length} steps correct`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
