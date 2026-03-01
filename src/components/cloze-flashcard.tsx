'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'
import { detectCloze } from '@/lib/cloze-utils'

interface ClozeFlashcardProps {
  front: string
  back: string
  hint?: string
  topicTitle: string
  onRate: (rating: 'again' | 'hard' | 'good' | 'easy') => void
  reviewing: boolean
}

export function ClozeFlashcard({ front, back, hint, topicTitle, onRate, reviewing }: ClozeFlashcardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [showHint, setShowHint] = useState(false)
  
  const clozeData = detectCloze(front)
  
  if (!clozeData.isCloze) {
    // Not a cloze card, shouldn't happen
    return null
  }
  
  // Render cloze with blanks or revealed answers
  const renderCloze = () => {
    if (!clozeData.parts) return null
    
    return (
      <div className="text-xl text-gray-900 leading-relaxed">
        {clozeData.parts.map((part, index) => {
          if (!part.isCloze) {
            // Regular text - render with markdown support
            return (
              <span key={index} className="prose prose-purple max-w-none inline">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {formatFlashcardContent(part.text)}
                </ReactMarkdown>
              </span>
            )
          } else if (isRevealed) {
            // Revealed answer - show in green
            return (
              <span
                key={index}
                className="font-bold text-green-700 bg-green-100 px-2 py-1 rounded animate-pulse"
              >
                {part.text}
              </span>
            )
          } else {
            // Blank - show placeholder
            const blankLength = Math.max(part.text.length * 8, 80)
            return (
              <span
                key={index}
                className="inline-block border-b-2 border-dashed border-purple-400 mx-1"
                style={{ minWidth: `${blankLength}px`, height: '1.5rem' }}
              />
            )
          }
        })}
      </div>
    )
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      {/* Cloze Card */}
      <div className="mb-8">
        <div className="border-2 border-purple-300 rounded-xl p-10 bg-gradient-to-br from-purple-50 to-blue-50 min-h-[350px] flex flex-col justify-center">
          <div className="text-sm text-purple-900 font-semibold mb-6">COMPLETE THE SENTENCE</div>
          
          {renderCloze()}
          
          {!isRevealed && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsRevealed(true)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
                  {formatFlashcardContent(back)}
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
              className="text-sm text-purple-900 hover:underline font-semibold"
            >
              💡 Show Hint
            </button>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-sm text-yellow-900 font-semibold mb-2">💡 HINT</div>
              <div className="text-sm prose prose-yellow max-w-none text-gray-900">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {formatFlashcardContent(hint)}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rating Buttons - Show after reveal */}
      {isRevealed && (
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => onRate('again')}
            disabled={reviewing}
            className="px-4 py-6 rounded-lg bg-red-100 hover:bg-red-200 border-2 border-red-300 text-red-900 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-sm mb-1">Again</div>
            <div className="text-xs opacity-75">1 min</div>
          </button>
          <button
            onClick={() => onRate('hard')}
            disabled={reviewing}
            className="px-4 py-6 rounded-lg bg-orange-100 hover:bg-orange-200 border-2 border-orange-300 text-orange-900 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-sm mb-1">Hard</div>
            <div className="text-xs opacity-75">3 min</div>
          </button>
          <button
            onClick={() => onRate('good')}
            disabled={reviewing}
            className="px-4 py-6 rounded-lg bg-green-100 hover:bg-green-200 border-2 border-green-300 text-green-900 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-sm mb-1">Good</div>
            <div className="text-xs opacity-75">5 min</div>
          </button>
          <button
            onClick={() => onRate('easy')}
            disabled={reviewing}
            className="px-4 py-6 rounded-lg bg-blue-100 hover:bg-blue-200 border-2 border-blue-300 text-blue-900 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="text-sm mb-1">Easy</div>
            <div className="text-xs opacity-75">1 day</div>
          </button>
        </div>
      )}
    </div>
  )
}
