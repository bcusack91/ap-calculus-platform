'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { InArticleAd } from '@/components/ad-banner'

/**
 * #196: Auto-Graded AP FRQ with Rubrics
 * Free-response questions with point-by-point scoring rubrics
 */

interface RubricItem {
  points: number
  description: string
  keywords: string[]
}

interface FRQ {
  id: string
  subject: string
  year: string
  questionNumber: number
  prompt: string
  parts: {
    label: string
    prompt: string
    maxPoints: number
    rubric: RubricItem[]
    sampleAnswer: string
  }[]
  totalPoints: number
}

const SAMPLE_FRQS: FRQ[] = [
  {
    id: 'calc-frq-1',
    subject: 'AP Calculus AB',
    year: '2024 Practice',
    questionNumber: 2,
    prompt: 'Let $f$ be the function defined by $f(x) = x^3 - 6x^2 + 9x + 1$ for all real numbers $x$.',
    totalPoints: 9,
    parts: [
      {
        label: '(a)',
        prompt: 'Find all critical points of $f$. Justify your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Finds f\'(x) = 3x² - 12x + 9', keywords: ['3x^2', '12x', 'derivative', "f'"] },
          { points: 1, description: 'Sets f\'(x) = 0 and factors correctly', keywords: ['= 0', 'factor', '3(x-1)(x-3)', 'x²-4x+3'] },
          { points: 1, description: 'States critical points x = 1 and x = 3', keywords: ['x = 1', 'x = 3', 'x=1', 'x=3'] },
        ],
        sampleAnswer: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x-1)(x-3). Setting f'(x) = 0, we get x = 1 and x = 3. These are the critical points since f'(x) = 0 at these values.",
      },
      {
        label: '(b)',
        prompt: 'Determine whether $f$ has a relative maximum, relative minimum, or neither at each critical point. Justify your answer.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Uses first or second derivative test', keywords: ['first derivative', 'second derivative', 'sign change', 'f"', "f''"] },
          { points: 1, description: 'Correctly identifies x = 1 as relative maximum', keywords: ['x = 1', 'x=1', 'maximum', 'max'] },
          { points: 1, description: 'Correctly identifies x = 3 as relative minimum', keywords: ['x = 3', 'x=3', 'minimum', 'min'] },
        ],
        sampleAnswer: "f''(x) = 6x - 12. At x=1: f''(1) = -6 < 0, so x=1 is a relative maximum. At x=3: f''(3) = 6 > 0, so x=3 is a relative minimum.",
      },
      {
        label: '(c)',
        prompt: 'Find the absolute maximum value of $f$ on the interval $[0, 4]$.',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Evaluates f at critical points and endpoints', keywords: ['f(0)', 'f(1)', 'f(3)', 'f(4)'] },
          { points: 1, description: 'Correctly computes f(0)=1, f(1)=5, f(3)=1, f(4)=5', keywords: ['= 5', '= 1'] },
          { points: 1, description: 'States the absolute maximum is 5 at x = 1 (and x = 4)', keywords: ['5', 'absolute maximum', 'maximum value'] },
        ],
        sampleAnswer: "Evaluating f at critical points and endpoints: f(0) = 1, f(1) = 1 - 6 + 9 + 1 = 5, f(3) = 27 - 54 + 27 + 1 = 1, f(4) = 64 - 96 + 36 + 1 = 5. The absolute maximum value is 5, occurring at both x = 1 and x = 4.",
      },
    ],
  },
]

function gradeResponse(response: string, rubric: RubricItem[]): { pointsEarned: number; breakdown: { earned: boolean; item: RubricItem }[] } {
  const lower = response.toLowerCase()
  const breakdown = rubric.map(item => {
    const earned = item.keywords.some(kw => lower.includes(kw.toLowerCase()))
    return { earned, item }
  })
  return { pointsEarned: breakdown.filter(b => b.earned).reduce((s, b) => s + b.item.points, 0), breakdown }
}

export function AutoGradedFRQ({ frqs = SAMPLE_FRQS }: { frqs?: FRQ[] }) {
  const [currentFRQ] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, ReturnType<typeof gradeResponse>>>({})
  const [showSample, setShowSample] = useState<Record<string, boolean>>({})

  const frq = frqs[currentFRQ]

  const handleGrade = (partLabel: string, rubric: RubricItem[]) => {
    const key = `${frq.id}-${partLabel}`
    const response = responses[key] || ''
    if (!response.trim()) return
    setResults(prev => ({ ...prev, [key]: gradeResponse(response, rubric) }))
  }

  const totalEarned = frq.parts.reduce((s, p) => {
    const key = `${frq.id}-${p.label}`
    return s + (results[key]?.pointsEarned || 0)
  }, 0)

  const allGraded = frq.parts.every(p => results[`${frq.id}-${p.label}`])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">📝 AP Free Response Practice</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{frq.subject} • {frq.year} • Question {frq.questionNumber}</p>
        </div>
        {allGraded && (
          <div className={`text-lg font-bold px-3 py-1 rounded-lg ${totalEarned >= frq.totalPoints * 0.7 ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : totalEarned >= frq.totalPoints * 0.4 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
            {totalEarned}/{frq.totalPoints}
          </div>
        )}
      </div>

      <div className="mb-5 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
          components={{ p: ({ children }) => <p className="text-sm text-gray-800 dark:text-gray-200">{children}</p> }}>
          {frq.prompt}
        </ReactMarkdown>
      </div>

      {/* Ad — after the prompt, before the response/grading area */}
      <InArticleAd />

      <div className="space-y-6">
        {frq.parts.map(part => {
          const key = `${frq.id}-${part.label}`
          const result = results[key]
          return (
            <div key={part.label} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
                    components={{ p: ({ children }) => <p className="text-sm font-medium text-gray-900 dark:text-white"><strong>{part.label}</strong> {children}</p> }}>
                    {part.prompt}
                  </ReactMarkdown>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{part.maxPoints} pts</span>
              </div>

              <textarea
                value={responses[key] || ''}
                onChange={(e) => setResponses(prev => ({ ...prev, [key]: e.target.value }))}
                placeholder="Write your response here..."
                rows={4}
                className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none mb-2"
                maxLength={1000}
                disabled={!!result}
              />

              {!result ? (
                <button onClick={() => handleGrade(part.label, part.rubric)}
                  className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                  disabled={!(responses[key] || '').trim()}>
                  Grade Part {part.label}
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-sm ${result.pointsEarned === part.maxPoints ? 'text-green-600' : result.pointsEarned > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {result.pointsEarned}/{part.maxPoints} points
                    </span>
                  </div>
                  <div className="space-y-1">
                    {result.breakdown.map((b, i) => (
                      <div key={i} className={`text-xs flex items-start gap-2 p-2 rounded ${b.earned ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                        <span>{b.earned ? '✅' : '❌'}</span>
                        <span className={b.earned ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                          ({b.item.points} pt) {b.item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setShowSample(prev => ({ ...prev, [key]: !prev[key] }))}
                    className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                    {showSample[key] ? 'Hide' : 'Show'} Sample Answer
                  </button>
                  {showSample[key] && (
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-xs text-gray-700 dark:text-gray-300">
                      {part.sampleAnswer}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
