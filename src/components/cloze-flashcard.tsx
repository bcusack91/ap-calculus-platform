'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'
import { detectCloze } from '@/lib/cloze-utils'
import { ClozeText } from '@/components/cloze-text'

interface ClozeFlashcardProps {
  front: string
  back: string
  hint?: string
  topicTitle: string
  onRate: (rating: 'again' | 'hard' | 'good' | 'easy') => void
  intervals?: { again: string; hard: string; good: string; easy: string }
  reviewing: boolean
}

export function ClozeFlashcard({ front, back, hint, topicTitle, onRate, reviewing, intervals }: ClozeFlashcardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [showHint, setShowHint] = useState(false)
  
  const clozeData = detectCloze(front)
  
  if (!clozeData.isCloze) {
    // Not a cloze card, shouldn't happen
    return null
  }
  
  // Render cloze with blanks or revealed answers (ClozeText renders revealed
  // deletions through the math pipeline — deletions may hold LaTeX)
  const renderCloze = () => (
    <div className="text-xl text-gray-900 leading-relaxed">
      <ClozeText text={front} revealed={isRevealed} />
    </div>
  )
  
  return (
    <div className="max-w-3xl mx-auto">
      {/* Cloze Card */}
      <div className="mb-8">
        <div className="border-2 border-accent-muted rounded-xl p-10 bg-gradient-to-br from-accent-subtle to-blue-50 min-h-[350px] flex flex-col justify-center">
          <div className="text-sm text-accent-dark font-semibold mb-6">COMPLETE THE SENTENCE</div>
          
          {renderCloze()}
          
          {!isRevealed && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsRevealed(true)}
                className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors"
              >
                Show Answer
              </button>
            </div>
          )}
          
          {isRevealed && (
            <div className="mt-8 p-4 bg-white border border-green-300 rounded-lg">
              <div className="text-sm text-green-900 font-semibold mb-2">EXPLANATION</div>
              <div className="text-sm prose prose-green max-w-none text-gray-900">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {escapeCurrencyMath(formatFlashcardContent(back))}
                </ReactMarkdown>
              </div>
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-600 text-center">
            <span className="font-semibold">Topic:</span> {topicTitle}
          </div>
        </div>
      </div>

      {/* Hint */}
      {hint && !isRevealed && (
        <div className="mb-6">
          {!showHint ? (
            <button
              onClick={() => setShowHint(true)}
              className="text-sm text-accent-dark hover:underline font-semibold"
            >
              💡 Show Hint
            </button>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-sm text-yellow-900 font-semibold mb-2">💡 HINT</div>
              <div className="text-sm prose prose-yellow max-w-none text-gray-900">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {escapeCurrencyMath(formatFlashcardContent(hint))}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rating Buttons - Show after reveal. Times = the real schedule each
          rating would produce for this card (grow as the card matures). */}
      {isRevealed && (
        <div className="grid grid-cols-4 gap-3">
          {([
            { key: 'again', label: 'Again', time: intervals?.again ?? '1m', cls: 'bg-red-100 hover:bg-red-200 border-red-300 text-red-900' },
            { key: 'hard', label: 'Hard', time: intervals?.hard ?? '3m', cls: 'bg-orange-100 hover:bg-orange-200 border-orange-300 text-orange-900' },
            { key: 'good', label: 'Good', time: intervals?.good ?? '5m', cls: 'bg-green-100 hover:bg-green-200 border-green-300 text-green-900' },
            { key: 'easy', label: 'Easy', time: intervals?.easy ?? '1d', cls: 'bg-blue-100 hover:bg-blue-200 border-blue-300 text-blue-900' },
          ] as const).map((b) => (
            <button
              key={b.key}
              onClick={() => onRate(b.key)}
              disabled={reviewing}
              className={`px-4 py-6 rounded-lg border-2 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${b.cls}`}
            >
              <div className="text-sm mb-1">{b.label}</div>
              <div className="text-xs opacity-75">{b.time}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
