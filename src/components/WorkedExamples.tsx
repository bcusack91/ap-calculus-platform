'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface WorkedStep {
  label: string
  content: string
  hint?: string
}

interface WorkedExampleProps {
  title: string
  problem: string
  steps: WorkedStep[]
  finalAnswer: string
  commonMistake?: string
}

export function WorkedExample({ title, problem, steps, finalAnswer, commonMistake }: WorkedExampleProps) {
  const [revealedSteps, setRevealedSteps] = useState<number>(0)

  return (
    <div className="my-6 rounded-lg border-2 border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/10 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-3">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>📝</span> Worked Example: {title}
        </h3>
      </div>

      <div className="p-5">
        <div className="mb-4 bg-white dark:bg-gray-900 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
          <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">Problem:</span>
          <div className="mt-1 prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {escapeCurrencyMath(problem)}
            </ReactMarkdown>
          </div>
        </div>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={i}>
              {i < revealedSteps ? (
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-green-200 dark:border-green-700 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-green-800 dark:text-green-300 text-sm">{step.label}</span>
                  </div>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {escapeCurrencyMath(step.content)}
                    </ReactMarkdown>
                  </div>
                  {step.hint && (
                    <p className="mt-2 text-xs text-amber-700 dark:text-amber-400 italic">
                      💡 {step.hint}
                    </p>
                  )}
                </div>
              ) : i === revealedSteps ? (
                <button
                  onClick={() => setRevealedSteps(revealedSteps + 1)}
                  className="w-full text-left bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-dashed border-amber-300 dark:border-amber-600 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-amber-700 dark:text-amber-400 text-sm">
                      {step.label}
                    </span>
                    <span className="ml-auto text-amber-500 group-hover:text-amber-700 text-sm">
                      Click to reveal →
                    </span>
                  </div>
                </button>
              ) : (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 opacity-50">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-500 text-sm">{step.label}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {revealedSteps >= steps.length && (
          <div className="mt-4 space-y-3 animate-in fade-in duration-300">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-2 border-green-300 dark:border-green-700">
              <span className="font-bold text-green-800 dark:text-green-300">✅ Final Answer:</span>
              <div className="mt-1 prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {escapeCurrencyMath(finalAnswer)}
                </ReactMarkdown>
              </div>
            </div>

            {commonMistake && (
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-700">
                <span className="font-bold text-red-800 dark:text-red-300">⚠️ Common Mistake:</span>
                <p className="mt-1 text-sm text-red-700 dark:text-red-400">{commonMistake}</p>
              </div>
            )}

            <button
              onClick={() => setRevealedSteps(0)}
              className="text-sm text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300"
            >
              🔄 Hide steps and try again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
