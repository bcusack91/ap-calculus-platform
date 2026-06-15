'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { InArticleAd } from '@/components/ad-banner'

interface FRQPart {
  label: string
  prompt: string
  points: number
  rubric: string[]
  sampleResponse: string
}

interface FRQPracticeProps {
  examYear?: string
  questionNumber?: number
  title: string
  stimulus: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation?: string
  calculatorAllowed?: boolean
}

export function FRQPractice({
  examYear,
  questionNumber,
  title,
  stimulus,
  parts,
  totalPoints,
  timeRecommendation,
  calculatorAllowed,
}: FRQPracticeProps) {
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [showRubric, setShowRubric] = useState<Record<string, boolean>>({})
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})

  const handleResponse = (partLabel: string, value: string) => {
    setResponses((prev) => ({ ...prev, [partLabel]: value }))
  }

  return (
    <div className="my-8 rounded-lg border-2 border-indigo-300 dark:border-indigo-600 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-5 py-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">📝</span>
              <h3 className="font-bold text-lg">
                Free-Response Practice
                {examYear && questionNumber && (
                  <span className="ml-2 text-indigo-200 text-sm">
                    ({examYear} #{questionNumber})
                  </span>
                )}
              </h3>
            </div>
            <p className="text-indigo-100 text-sm">{title}</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="bg-indigo-700 px-3 py-1 rounded-full">
              {totalPoints} points
            </span>
            {timeRecommendation && (
              <span className="bg-indigo-700 px-3 py-1 rounded-full">
                ⏱ {timeRecommendation}
              </span>
            )}
            {calculatorAllowed !== undefined && (
              <span className={`px-3 py-1 rounded-full ${calculatorAllowed ? 'bg-green-700' : 'bg-red-700'}`}>
                {calculatorAllowed ? '🖩 Calculator OK' : '🚫 No Calculator'}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 bg-indigo-50 dark:bg-indigo-900/10">
        {/* Stimulus */}
        <div className="mb-6 bg-white dark:bg-gray-900 rounded-lg p-5 border border-indigo-200 dark:border-indigo-700">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {escapeCurrencyMath(stimulus)}
            </ReactMarkdown>
          </div>
        </div>

        {/* Ad — after the prompt/stimulus, before the response areas */}
        <InArticleAd />

        {/* Parts */}
        <div className="space-y-6">
          {parts.map((part) => (
            <div
              key={part.label}
              className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-indigo-200 dark:border-indigo-700"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    {part.label}
                  </span>
                  <span className="text-sm text-indigo-600 dark:text-indigo-400">
                    ({part.points} {part.points === 1 ? 'point' : 'points'})
                  </span>
                </h4>
              </div>

              <div className="mb-3 prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {escapeCurrencyMath(part.prompt)}
                </ReactMarkdown>
              </div>

              <textarea
                value={responses[part.label] || ''}
                onChange={(e) => handleResponse(part.label, e.target.value)}
                placeholder="Write your response here..."
                className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-y text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />

              <div className="flex gap-3 mt-3">
                <button
                  onClick={() =>
                    setShowRubric((prev) => ({ ...prev, [part.label]: !prev[part.label] }))
                  }
                  className="text-sm px-4 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800/50 transition-colors font-medium"
                >
                  {showRubric[part.label] ? 'Hide Rubric' : 'Show Scoring Rubric'}
                </button>
                <button
                  onClick={() =>
                    setShowSample((prev) => ({ ...prev, [part.label]: !prev[part.label] }))
                  }
                  className="text-sm px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors font-medium"
                >
                  {showSample[part.label] ? 'Hide Sample' : 'Show Sample Response'}
                </button>
              </div>

              {showRubric[part.label] && (
                <div className="mt-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                  <h5 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2 text-sm">
                    Scoring Rubric:
                  </h5>
                  <ul className="space-y-1">
                    {part.rubric.map((criterion, i) => (
                      <li key={i} className="text-sm text-indigo-700 dark:text-indigo-400 flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {showSample[part.label] && (
                <div className="mt-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-sm">
                    Sample Response:
                  </h5>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {escapeCurrencyMath(part.sampleResponse)}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
