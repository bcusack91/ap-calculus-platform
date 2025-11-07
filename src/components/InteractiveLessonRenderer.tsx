'use client'

import { useState, useRef, useEffect } from 'react'
import { unitCircleLessonData } from '@/data/interactive-lessons/unit-circle'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface Section {
  id: string
  type: 'text' | 'input-boxes' | 'dropdown-select' | 'multiple-choice'
  content: string
  exercise?: any
}

interface InteractiveLessonRendererProps {
  topicSlug: string
}

export default function InteractiveLessonRenderer({ topicSlug }: InteractiveLessonRendererProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())

  // Get lesson data based on topic
  const lessonData = topicSlug === 'the-unit-circle' ? unitCircleLessonData : null

  if (!lessonData) {
    return <div>No interactive lesson available</div>
  }

  const { sections } = lessonData
  const currentSection = sections[currentSectionIndex]
  const progress = ((completedSections.size) / sections.length) * 100

  const handleNext = () => {
    // Mark current section as complete when moving to next
    if (!completedSections.has(currentSectionIndex)) {
      setCompletedSections(prev => new Set([...prev, currentSectionIndex]))
    }
    
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSectionComplete = () => {
    setCompletedSections(prev => new Set([...prev, currentSectionIndex]))
  }

  const isCurrentSectionComplete = completedSections.has(currentSectionIndex)

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm text-gray-600 text-center">
        Section {currentSectionIndex + 1} of {sections.length} • {Math.round(progress)}% Complete
      </div>

      {/* Current Section Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-purple-200 dark:border-purple-700 min-h-[400px]">
        <SectionRenderer 
          section={currentSection} 
          onComplete={handleSectionComplete}
          isComplete={isCurrentSectionComplete}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentSectionIndex === 0}
          className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSectionIndex 
                  ? 'bg-purple-600 w-8' 
                  : completedSections.has(index)
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSectionIndex === sections.length - 1}
          className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

// Section Renderer Component
function SectionRenderer({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: Section
  onComplete: () => void
  isComplete: boolean
}) {
  if (section.type === 'text') {
    return (
      <div className="prose prose-lg max-w-none">
        <FadeInText content={section.content} />
      </div>
    )
  }

  if (section.type === 'input-boxes') {
    return (
      <InputBoxExercise 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  if (section.type === 'dropdown-select') {
    return (
      <DropdownExercise 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  return <div>Unknown section type</div>
}

// Fade-in Text Component with LaTeX support and better typography
function FadeInText({ content }: { content: string }) {
  // Check if content has LaTeX math
  const hasLatex = content.includes('$')
  
  if (hasLatex) {
    return (
      <div className="animate-fade-in prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            p: ({ children }) => <p className="text-xl leading-relaxed mb-4">{children}</p>,
            strong: ({ children }) => <strong className="text-2xl font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
            ul: ({ children }) => <ul className="space-y-3 text-lg ml-6">{children}</ul>,
            li: ({ children }) => <li className="text-lg">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg text-xl font-semibold">
                {children}
              </blockquote>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    )
  }
  
  return (
    <div className="animate-fade-in prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="text-xl leading-relaxed mb-4">{children}</p>,
          strong: ({ children }) => <strong className="text-2xl font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

// Input Box Exercise Component with auto-focus, hints, and better feedback
function InputBoxExercise({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: any
  onComplete: () => void
  isComplete: boolean
}) {
  const [answers, setAnswers] = useState<string[]>(Array(section.exercise.boxes).fill(''))
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleSubmit = () => {
    const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    } else if (!isCorrect) {
      setAttempts(prev => prev + 1)
      
      if (attempts === 0) {
        setShowHint(true)
      } else if (attempts >= 2) {
        setShowAnswer(true)
      }
    }
  }

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
    setShowHint(false)
    
    // Auto-focus next input if value entered
    if (value && index < section.exercise.boxes - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)

  return (
    <div className="space-y-8">
      <FadeInText content={section.content} />
      
      <div className="flex gap-4 justify-center flex-wrap">
        {answers.map((answer, index) => (
          <input
            key={index}
            ref={el => { inputRefs.current[index] = el }}
            type="text"
            value={answer}
            onChange={(e) => handleInputChange(index, e.target.value)}
            disabled={isComplete || showAnswer}
            autoFocus={index === 0}
            className={`w-24 h-24 text-4xl text-center border-4 rounded-xl font-bold transition-all shadow-lg ${
              isComplete || (showAnswer && !isComplete)
                ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-white'
                : showAnswer && !isCorrect
                ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-gray-900 dark:text-white'
                : 'border-purple-400 dark:border-purple-600 focus:border-purple-600 dark:focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800'
            }`}
            placeholder="?"
          />
        ))}
      </div>

      {!isComplete && !showAnswer && (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-10 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Check Answer
          </button>
        </div>
      )}

      {showHint && attempts === 1 && !isCorrect && (
        <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
            💡 Hint: You're counting from 0 to 4. Start with 0 in the first box, then 1, then 2, and so on!
          </p>
        </div>
      )}

      {showHint && attempts === 2 && !isCorrect && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200">
            💡 Stronger Hint: The sequence is: 0, 1, 2, 3, 4. Fill them in from left to right!
          </p>
        </div>
      )}

      {showAnswer && !isCorrect && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg space-y-3">
          <p className="text-xl font-bold text-green-900 dark:text-green-200">
            ✓ Answer: {section.exercise.correctAnswers.join(', ')}
          </p>
          <p className="text-lg text-green-800 dark:text-green-300">
            Explanation: We're simply counting whole numbers from 0 to 4 in order. These are the numbers we'll use to build our unit circle values!
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            Continue to Next Step →
          </button>
        </div>
      )}

      {isCorrect && (
        <div className="text-center text-2xl font-bold text-green-600 dark:text-green-400 animate-bounce">
          ✓ Perfect! You got it! 🎉
        </div>
      )}
    </div>
  )
}

// Dropdown Exercise Component with randomized options and individual validation
function DropdownExercise({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: any
  onComplete: () => void
  isComplete: boolean
}) {
  const [answers, setAnswers] = useState<string[]>(Array(section.exercise.dropdowns.length).fill(''))
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  // Randomize options for each dropdown once on mount
  const [randomizedOptions] = useState(() => 
    section.exercise.dropdowns.map((dropdown: any) => {
      const shuffled = [...dropdown.options].sort(() => Math.random() - 0.5)
      return shuffled
    })
  )

  const handleSubmit = () => {
    setSubmitted(true)
    const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    } else if (!isCorrect) {
      setAttempts(prev => prev + 1)
      
      if (attempts === 0) {
        setShowHint(true)
      } else if (attempts >= 2) {
        setShowAnswer(true)
      }
    }
  }

  const isFullyCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)
  const getInputStatus = (index: number) => {
    if (!submitted) return 'default'
    if (isComplete || showAnswer) return 'correct'
    return answers[index] === section.exercise.correctAnswers[index] ? 'correct' : 'incorrect'
  }

  return (
    <div className="space-y-8">
      <FadeInText content={section.content} />
      
      <div className="space-y-5">
        {section.exercise.dropdowns.map((dropdown: any, index: number) => {
          const status = getInputStatus(index)
          return (
            <div key={index} className="flex items-center gap-6 justify-center text-xl">
              <span className="font-bold text-lg">{dropdown.label}</span>
              <select
                value={answers[index]}
                onChange={(e) => {
                  const newAnswers = [...answers]
                  newAnswers[index] = e.target.value
                  setAnswers(newAnswers)
                  setSubmitted(false)
                  setShowHint(false)
                }}
                disabled={isComplete || showAnswer}
                className={`px-6 py-3 text-xl border-3 rounded-xl transition-all font-semibold shadow-md ${
                  status === 'correct'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-white'
                    : status === 'incorrect'
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-gray-900 dark:text-white'
                    : 'border-purple-400 dark:border-purple-600 focus:border-purple-600 dark:focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <option value="">Select...</option>
                {randomizedOptions[index].map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {submitted && status === 'correct' && (
                <span className="text-green-600 dark:text-green-400 text-2xl">✓</span>
              )}
              {submitted && status === 'incorrect' && (
                <span className="text-red-600 dark:text-red-400 text-2xl">✗</span>
              )}
            </div>
          )
        })}
      </div>

      {!isComplete && !showAnswer && (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-10 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Check Answer
          </button>
        </div>
      )}

      {showHint && attempts === 1 && !isFullyCorrect && (
        <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
            💡 Hint: Remember, only √0, √1, and √4 are perfect squares. The others (√2 and √3) stay under the radical!
          </p>
        </div>
      )}

      {showHint && attempts === 2 && !isFullyCorrect && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200">
            💡 Stronger Hint: √0 = 0, √1 = 1, and √4 = 2. The rest don't simplify!
          </p>
        </div>
      )}

      {showAnswer && !isFullyCorrect && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg space-y-4">
          <p className="text-xl font-bold text-green-900 dark:text-green-200">
            ✓ Correct Answers:
          </p>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-300">
            {section.exercise.dropdowns.map((dropdown: any, idx: number) => (
              <li key={idx}>
                <strong>{dropdown.label}</strong> {section.exercise.correctAnswers[idx]}
              </li>
            ))}
          </ul>
          <p className="text-lg text-green-800 dark:text-green-300">
            Explanation: A perfect square is a number that equals some whole number times itself. Since 0² = 0, 1² = 1, and 2² = 4, those simplify. But there's no whole number that squares to 2 or 3, so they stay under the radical.
          </p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            Continue to Next Step →
          </button>
        </div>
      )}

      {isFullyCorrect && submitted && (
        <div className="text-center text-2xl font-bold text-green-600 dark:text-green-400 animate-bounce">
          ✓ Excellent work! All correct! 🎉
        </div>
      )}
    </div>
  )
}
