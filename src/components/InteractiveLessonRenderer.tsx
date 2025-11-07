'use client'

import { useState, useRef, useEffect } from 'react'
import { unitCircleLessonData, unitCircleAnglesLessonData } from '@/data/interactive-lessons/unit-circle'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

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
  const [lessonPart, setLessonPart] = useState<1 | 2>(1) // Track which part of the lesson
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())
  const [showPracticeMode, setShowPracticeMode] = useState(false)

  // Get lesson data based on topic and part
  const lessonData = topicSlug === 'the-unit-circle' 
    ? (lessonPart === 1 ? unitCircleLessonData : unitCircleAnglesLessonData)
    : null

  if (!lessonData) {
    return <div>No interactive lesson available</div>
  }

  // Show practice mode if requested
  if (showPracticeMode) {
    // Use different practice mode for Part 2
    if (lessonPart === 2) {
      return (
        <Part2PracticeMode 
          onBack={() => setShowPracticeMode(false)} 
          onComplete={() => {
            setShowPracticeMode(false)
            // Could add more logic here for what happens after Part 2 practice
          }}
        />
      )
    }
    
    // Part 1 practice mode (counting method)
    return (
      <IndependentPracticeMode 
        onBack={() => setShowPracticeMode(false)} 
        onComplete={() => {
          setShowPracticeMode(false)
          setLessonPart(2) // Move to part 2 after completing practice
          setCurrentSectionIndex(0)
          setCompletedSections(new Set())
        }}
      />
    )
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
    } else {
      // On final page, mark as 100% complete
      setCompletedSections(new Set(sections.map((_, i) => i)))
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
  
  // Check if current section requires completion before proceeding
  const currentSectionRequiresCompletion = 
    currentSection.type === 'input-boxes' || currentSection.type === 'dropdown-select'
  
  // Disable Next button if it's an exercise that hasn't been completed
  const canProceedToNext = !currentSectionRequiresCompletion || isCurrentSectionComplete

  return (
    <div className="space-y-6">
      {/* Part Indicator */}
      {lessonPart === 2 && (
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200">
            📚 Part 2: Angles & Patterns
          </span>
        </div>
      )}
      
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
          isLastSection={currentSectionIndex === sections.length - 1}
          onStartPractice={() => setShowPracticeMode(true)}
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
          disabled={currentSectionIndex === sections.length - 1 || !canProceedToNext}
          className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
        >
          Next →
        </button>
      </div>
      
      {/* Show hint if exercise not completed */}
      {currentSectionRequiresCompletion && !isCurrentSectionComplete && (
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          💡 Complete the exercise above to continue
        </div>
      )}
    </div>
  )
}

// Section Renderer Component
function SectionRenderer({ 
  section, 
  onComplete, 
  isComplete,
  isLastSection,
  onStartPractice
}: { 
  section: Section
  onComplete: () => void
  isComplete: boolean
  isLastSection?: boolean
  onStartPractice?: () => void
}) {
  if (section.type === 'text') {
    return (
      <div className="prose prose-lg max-w-none">
        <FadeInText content={section.content} />
        {isLastSection && onStartPractice && (
          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={onStartPractice}
              className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🎯 Practice Independently
            </button>
          </div>
        )}
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

// Sine Table Component
function SineTable() {
  const data = [
    { angle: '0°', value: '0' },
    { angle: '30°', value: '\\frac{1}{2}' },
    { angle: '45°', value: '\\frac{\\sqrt{2}}{2}' },
    { angle: '60°', value: '\\frac{\\sqrt{3}}{2}' },
    { angle: '90°', value: '1' },
  ]

  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl">
        <thead className="bg-gradient-to-r from-purple-600 to-purple-800">
          <tr>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              θ (theta)
            </th>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              sin(θ)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gradient-to-b from-purple-500 to-purple-700">
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.angle}
              </td>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.value === '0' || row.value === '1' ? (
                  row.value
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: typeof window !== 'undefined' && (window as any).katex
                        ? (window as any).katex.renderToString(row.value, { throwOnError: false })
                        : row.value
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Cosine Table Component
function CosineTable() {
  const data = [
    { angle: '0°', value: '1' },
    { angle: '30°', value: '\\frac{\\sqrt{3}}{2}' },
    { angle: '45°', value: '\\frac{\\sqrt{2}}{2}' },
    { angle: '60°', value: '\\frac{1}{2}' },
    { angle: '90°', value: '0' },
  ]

  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl">
        <thead className="bg-gradient-to-r from-pink-600 to-red-600">
          <tr>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              θ (theta)
            </th>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              cos(θ)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gradient-to-b from-pink-500 to-red-600">
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.angle}
              </td>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.value === '0' || row.value === '1' ? (
                  row.value
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: typeof window !== 'undefined' && (window as any).katex
                        ? (window as any).katex.renderToString(row.value, { throwOnError: false })
                        : row.value
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Fade-in Text Component with LaTeX support
function FadeInText({ content }: { content: string }) {
  const hasLatex = content.includes('$')
  const hasSineTable = content.includes('[SINE_TABLE]')
  const hasCosineTable = content.includes('[COSINE_TABLE]')
  
  // If content has tables, split and render
  if (hasSineTable || hasCosineTable) {
    const parts = content.split(/(\[SINE_TABLE\]|\[COSINE_TABLE\])/)
    
    return (
      <div className="animate-fade-in prose prose-lg max-w-none">
        {parts.map((part, index) => {
          if (part === '[SINE_TABLE]') {
            return <SineTable key={index} />
          } else if (part === '[COSINE_TABLE]') {
            return <CosineTable key={index} />
          } else if (part.trim()) {
            return (
              <ReactMarkdown
                key={index}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  p: ({ children }) => <p className="text-xl leading-relaxed mb-4">{children}</p>,
                  strong: ({ children }) => <strong className="text-2xl font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
                  ul: ({ children }) => <ul className="space-y-3 text-lg ml-6">{children}</ul>,
                  li: ({ children }) => <li className="text-lg">{children}</li>,
                }}
              >
                {part}
              </ReactMarkdown>
            )
          }
          return null
        })}
      </div>
    )
  }
  
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

// Input Box Exercise Component
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
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleSubmit = () => {
    setHasSubmitted(true)
    const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    } else if (!isCorrect) {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setShowHint(true)
      
      if (newAttempts >= 3) {
        setShowAnswer(true)
        // Mark as complete after showing answer (3 attempts)
        setTimeout(() => {
          onComplete()
        }, 500)
      }
    }
  }

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
    
    // Auto-advance to next input only if all correct answers are single-digit
    const hasMultiDigitAnswers = section.exercise.correctAnswers.some((ans: string) => ans.length > 1)
    if (value && index < section.exercise.boxes - 1 && !hasMultiDigitAnswers) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} />
      
      <div className="flex gap-4 justify-center flex-wrap">
        {Array.from({ length: section.exercise.boxes }).map((_, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type="text"
            value={answers[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="w-20 h-20 text-3xl text-center border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            disabled={isComplete || showAnswer}
            placeholder="?"
          />
        ))}
      </div>

      {!isComplete && !showAnswer && (
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-lg transition-colors"
        >
          Check Answer
        </button>
      )}

      {showHint && attempts === 1 && !isCorrect && (
        <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
            💡 Hint: {section.exercise.hint1 || 'Try again!'}
          </p>
        </div>
      )}

      {showHint && attempts === 2 && !isCorrect && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200">
            💡 Hint: {section.exercise.hint2 || 'One more try!'}
          </p>
        </div>
      )}

      {showAnswer && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-green-900 dark:text-green-200 mb-3">
            ✓ Answer: {section.exercise.correctAnswers.join(', ')}
          </p>
          <p className="text-lg text-green-800 dark:text-green-300">
            {section.exercise.explanation || ''}
          </p>
        </div>
      )}

      {isCorrect && hasSubmitted && (
        <div className="text-center text-2xl font-bold text-green-600 dark:text-green-400 animate-bounce">
          ✓ Perfect! 🎉
        </div>
      )}
    </div>
  )
}

// Dropdown Exercise Component
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
  const [randomizedOptions] = useState(() => 
    section.exercise.dropdowns.map((dropdown: any) => 
      [...dropdown.options].sort(() => Math.random() - 0.5)
    )
  )
  const [attempts, setAttempts] = useState(0)
  const [validated, setValidated] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleSubmit = () => {
    setValidated(true)
    const isCorrect = section.exercise.correctAnswers.every((correctAnswer: string, index: number) => 
      answers[index] === correctAnswer
    )
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    } else if (!isCorrect) {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setShowHint(true)
      
      if (newAttempts >= 3) {
        setShowAnswer(true)
        // Mark as complete after showing answer (3 attempts)
        setTimeout(() => {
          onComplete()
        }, 500)
      }
    }
  }

  const isFullyCorrect = validated && section.exercise.correctAnswers.every((correctAnswer: string, index: number) => 
    answers[index] === correctAnswer
  )

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} />
      
      <div className="space-y-4">
        {section.exercise.dropdowns.map((dropdown: any, index: number) => {
          const isCorrect = answers[index] === section.exercise.correctAnswers[index]
          const showFeedback = validated && answers[index]
          
          return (
            <div key={index} className="flex items-center gap-4">
              <span className="text-xl font-semibold">{dropdown.label}:</span>
              <select
                value={answers[index]}
                onChange={(e) => {
                  const newAnswers = [...answers]
                  newAnswers[index] = e.target.value
                  setAnswers(newAnswers)
                  setValidated(false)
                }}
                className={`px-4 py-2 text-lg border-2 rounded-lg focus:ring-2 ${
                  showFeedback
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-300'
                } focus:ring-purple-200`}
                disabled={isComplete || showAnswer}
              >
                <option value="">Select...</option>
                {randomizedOptions[index].map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {showFeedback && (
                <span className="text-2xl">
                  {isCorrect ? '✓' : '✗'}
                </span>
              )}
            </div>
          )
        })}
      </div>

      {!isComplete && !showAnswer && (
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-lg transition-colors"
        >
          Check Answers
        </button>
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
            💡 Hint: √4 = 2 because 2² = 4. But √2 and √3 cannot be simplified further!
          </p>
        </div>
      )}

      {showAnswer && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-green-900 dark:text-green-200 mb-3">
            ✓ Correct answers:
          </p>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-300">
            {section.exercise.dropdowns.map((dropdown: any, index: number) => (
              <li key={index}>
                {dropdown.label}: <strong>{section.exercise.correctAnswers[index]}</strong>
              </li>
            ))}
          </ul>
          {section.exercise.explanation && (
            <p className="text-lg text-green-800 dark:text-green-300 mt-4">
              {section.exercise.explanation}
            </p>
          )}
        </div>
      )}

      {isFullyCorrect && (
        <div className="text-center text-2xl font-bold text-green-600 dark:text-green-400 animate-bounce">
          ✓ Excellent work! All correct! 🎉
        </div>
      )}
    </div>
  )
}

// Square Root Input Component - Khan Academy style
function SquareRootInput({ 
  value, 
  onChange, 
  disabled, 
  className,
  inputRef,
  hint
}: { 
  value: string
  onChange: (value: string) => void
  disabled: boolean
  className?: string
  inputRef?: (el: HTMLInputElement | null) => void
  hint?: string
}) {
  // Convert internal format (√n) to display format (sqrt(n))
  const displayValue = value.replace(/√(\d+)/g, 'sqrt($1)')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value
    // Convert sqrt(n) to √n format
    input = input.replace(/sqrt\((\d+)\)/g, '√$1')
    // Also handle just typing sqrt without parentheses
    input = input.replace(/sqrt(\d+)/g, '√$1')
    onChange(input)
  }

  // Generate LaTeX for rendering
  const getLatex = () => {
    if (!value) return ''
    // Convert √n to \sqrt{n}
    return value.replace(/√(\d+)/g, '\\sqrt{$1}')
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* KaTeX rendered preview */}
      <div className={`min-w-[5rem] min-h-[5rem] flex items-center justify-center border-2 rounded-lg p-2 ${className}`}>
        {value ? (
          <span 
            className="katex-display text-2xl"
            dangerouslySetInnerHTML={{ 
              __html: typeof window !== 'undefined' && (window as any).katex 
                ? (window as any).katex.renderToString(getLatex(), { throwOnError: false, displayMode: false })
                : value
            }}
          />
        ) : (
          <span className="text-3xl text-gray-400">?</span>
        )}
      </div>
      
      {/* Text input - Khan Academy style */}
      <input
        ref={inputRef}
        type="text"
        value={displayValue}
        onChange={handleChange}
        disabled={disabled}
        className="w-24 h-8 text-sm text-center border-2 rounded focus:ring-2 focus:ring-blue-500 px-2"
        placeholder="e.g. sqrt(2)"
      />
    </div>
  )
}

// Fraction Input Component - Khan Academy style
function FractionInput({
  value,
  onChange,
  disabled,
  className,
  inputRef
}: {
  value: string
  onChange: (value: string) => void
  disabled: boolean
  className?: string
  inputRef?: (el: HTMLInputElement | null) => void
}) {
  // Convert display format: √2/2 -> sqrt(2)/2
  const displayValue = value.replace(/√(\d+)/g, 'sqrt($1)')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value
    // Convert sqrt(n) to √n format
    input = input.replace(/sqrt\((\d+)\)/g, '√$1')
    // Also handle just typing sqrt without parentheses
    input = input.replace(/sqrt(\d+)/g, '√$1')
    onChange(input)
  }

  // Generate LaTeX for rendering
  const getLatex = () => {
    if (!value) return ''
    
    // Handle fractions
    if (value.includes('/')) {
      const [num, den] = value.split('/')
      // Convert √n to \sqrt{n} in numerator
      const numLatex = num.replace(/√(\d+)/g, '\\sqrt{$1}')
      return `\\frac{${numLatex}}{${den}}`
    }
    
    // Handle just square roots
    return value.replace(/√(\d+)/g, '\\sqrt{$1}')
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* KaTeX rendered preview */}
      <div className={`min-w-[6rem] min-h-[5rem] flex items-center justify-center border-2 rounded-lg p-2 ${className}`}>
        {value ? (
          <span 
            className="katex-display text-2xl"
            dangerouslySetInnerHTML={{ 
              __html: typeof window !== 'undefined' && (window as any).katex 
                ? (window as any).katex.renderToString(getLatex(), { throwOnError: false, displayMode: false })
                : value
            }}
          />
        ) : (
          <span className="text-3xl text-gray-400">?</span>
        )}
      </div>
      
      {/* Text input - Khan Academy style */}
      <input
        ref={inputRef}
        type="text"
        value={displayValue}
        onChange={handleChange}
        disabled={disabled}
        className="w-32 h-8 text-sm text-center border-2 rounded focus:ring-2 focus:ring-blue-500 px-2"
        placeholder="e.g. sqrt(2)/2"
      />
      <div className="text-xs text-gray-500">Type: 1/2 or sqrt(2)/2</div>
    </div>
  )
}

// Independent Practice Mode Component
function IndependentPracticeMode({ onBack, onComplete }: { onBack: () => void, onComplete?: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [step0Answers, setStep0Answers] = useState(['', '', '', '', ''])
  const [step1Answers, setStep1Answers] = useState(['', '', '', '', ''])
  const [step2Answers, setStep2Answers] = useState(['', '', '', '', ''])
  const [step3Answers, setStep3Answers] = useState(['', '', '', '', ''])
  const [step4Answers, setStep4Answers] = useState(['', '', '', '', ''])
  const [step0Complete, setStep0Complete] = useState(false)
  const [step1Complete, setStep1Complete] = useState(false)
  const [step2Complete, setStep2Complete] = useState(false)
  const [step3Complete, setStep3Complete] = useState(false)
  const [step4Complete, setStep4Complete] = useState(false)

  const step0Refs = useRef<(HTMLInputElement | null)[]>([])
  const step1Refs = useRef<(HTMLInputElement | null)[]>([])
  const step2Refs = useRef<(HTMLInputElement | null)[]>([])
  const step3Refs = useRef<(HTMLInputElement | null)[]>([])
  const step4Refs = useRef<(HTMLInputElement | null)[]>([])

  const step0Correct = ['0', '1', '2', '3', '4']
  const step1Correct = ['√0', '√1', '√2', '√3', '√4']
  const step2Correct = ['0', '1', '√2', '√3', '2']
  const step3Correct = ['2', '2', '2', '2', '2']
  const step4Correct = ['0', '1/2', '√2/2', '√3/2', '1']

  const handleStep0Change = (index: number, value: string) => {
    const newAnswers = [...step0Answers]
    newAnswers[index] = value
    setStep0Answers(newAnswers)
    if (value && index < 4) {
      step0Refs.current[index + 1]?.focus()
    }
  }

  const handleStep1Change = (index: number, value: string) => {
    const newAnswers = [...step1Answers]
    newAnswers[index] = value
    setStep1Answers(newAnswers)
  }

  const handleStep2Change = (index: number, value: string) => {
    const newAnswers = [...step2Answers]
    newAnswers[index] = value
    setStep2Answers(newAnswers)
  }

  const handleStep3Change = (index: number, value: string) => {
    const newAnswers = [...step3Answers]
    newAnswers[index] = value
    setStep3Answers(newAnswers)
    if (value && index < 4) {
      step3Refs.current[index + 1]?.focus()
    }
  }

  const handleStep4Change = (index: number, value: string) => {
    const newAnswers = [...step4Answers]
    newAnswers[index] = value
    setStep4Answers(newAnswers)
  }

  const validateStep0 = () => {
    const isCorrect = step0Answers.every((ans, i) => ans.trim() === step0Correct[i])
    if (isCorrect) {
      setStep0Complete(true)
      setCurrentStep(1)
      setTimeout(() => step1Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep1 = () => {
    const isCorrect = step1Answers.every((ans, i) => ans.trim() === step1Correct[i])
    if (isCorrect) {
      setStep1Complete(true)
      setCurrentStep(2)
      setTimeout(() => step2Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep2 = () => {
    const isCorrect = step2Answers.every((ans, i) => ans.trim() === step2Correct[i])
    if (isCorrect) {
      setStep2Complete(true)
      setCurrentStep(3)
      setTimeout(() => step3Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep3 = () => {
    const isCorrect = step3Answers.every((ans, i) => ans.trim() === step3Correct[i])
    if (isCorrect) {
      setStep3Complete(true)
      setCurrentStep(4)
      setTimeout(() => step4Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep4 = () => {
    const isCorrect = step4Answers.every((ans, i) => ans.trim() === step4Correct[i])
    if (isCorrect) {
      setStep4Complete(true)
    }
    return isCorrect
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-foreground font-semibold transition-colors"
        >
          ← Back to Lesson
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          🎯 Independent Practice
        </h1>

        <p className="text-xl text-center mb-12 text-foreground">
          Complete all 5 steps to master the counting method!
        </p>

        {/* Step 0: Count */}
        <div className={`mb-8 p-8 rounded-xl border-2 ${step0Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 1: Count</h2>
            {step0Complete && <span className="text-3xl">✅</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">Count from 0 to 4:</p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step0Answers.map((answer, i) => (
              <input
                key={i}
                ref={(el) => { step0Refs.current[i] = el }}
                type="text"
                value={answer}
                onChange={(e) => handleStep0Change(i, e.target.value)}
                disabled={step0Complete}
                className={`w-20 h-20 text-3xl text-center border-2 rounded-lg ${
                  step0Complete
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="?"
              />
            ))}
          </div>
          {!step0Complete && (
            <button
              onClick={validateStep0}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 1
            </button>
          )}
        </div>

        {/* Step 1: Square Root */}
        <div className={`mb-8 p-8 rounded-xl border-2 ${
          currentStep < 1 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
          step1Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
          'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 2: Square Root (Don't Simplify Yet!)</h2>
            {step1Complete && <span className="text-3xl">✅</span>}
            {currentStep < 1 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Take the square root of each number. Don't simplify - just put each number under a square root.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step1Answers.map((answer, i) => (
              <SquareRootInput
                key={i}
                value={answer}
                onChange={(value) => handleStep1Change(i, value)}
                disabled={currentStep < 1 || step1Complete}
                className={
                  step1Complete
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                    : currentStep >= 1
                    ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                    : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                }
                inputRef={(el) => { step1Refs.current[i] = el }}
                hint="sqrt(n)"
              />
            ))}
          </div>
          {currentStep >= 1 && !step1Complete && (
            <button
              onClick={validateStep1}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 2
            </button>
          )}
        </div>

        {/* Step 2: Simplify - Only show after Step 1 is complete */}
        {step1Complete && (
          <div className={`mb-8 p-8 rounded-xl border-2 ${
            currentStep < 2 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
            step2Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 3: Simplify</h2>
            {step2Complete && <span className="text-3xl">✅</span>}
            {currentStep < 2 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Simplify each square root if possible. Use "Add √" for values that can't be simplified.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step2Answers.map((answer, i) => {
              // Convert √n to LaTeX for rendering
              const getLatex = (value: string) => {
                if (!value) return ''
                return value.replace(/√(\d+)/g, '\\sqrt{$1}')
              }
              
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="text-lg text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
                    <span 
                      dangerouslySetInnerHTML={{ 
                        __html: typeof window !== 'undefined' && (window as any).katex 
                          ? (window as any).katex.renderToString(getLatex(step1Answers[i]), { throwOnError: false, displayMode: false })
                          : step1Answers[i]
                      }}
                    />
                    <span>=</span>
                  </div>
                  <SquareRootInput
                    value={answer}
                    onChange={(value) => handleStep2Change(i, value)}
                    disabled={currentStep < 2 || step2Complete}
                    className={
                      step2Complete
                        ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                        : currentStep >= 2
                        ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                        : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                    }
                    inputRef={(el) => { step2Refs.current[i] = el }}
                  />
                </div>
              )
            })}
          </div>
          {currentStep >= 2 && !step2Complete && (
            <button
              onClick={validateStep2}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 3
            </button>
          )}
          </div>
        )}

        {/* Step 3: Divide By - Only show after Step 2 is complete */}
        {step2Complete && (
          <div className={`mb-8 p-8 rounded-xl border-2 ${
            currentStep < 3 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
            step3Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 4: Divide By</h2>
            {step3Complete && <span className="text-3xl">✅</span>}
            {currentStep < 3 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">What should you divide each value by?</p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step3Answers.map((answer, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-2xl text-gray-600 dark:text-gray-400 mb-2">
                  {step2Answers[i]}
                </div>
                <div className="w-20 border-t-2 border-gray-800 dark:border-gray-300"></div>
                <input
                  ref={(el) => { step3Refs.current[i] = el }}
                  type="text"
                  value={answer}
                  onChange={(e) => handleStep3Change(i, e.target.value)}
                  disabled={currentStep < 3 || step3Complete}
                  className={`w-20 h-20 text-3xl text-center border-2 rounded-lg ${
                    step3Complete
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                      : currentStep >= 3
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                      : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="?"
                />
              </div>
            ))}
          </div>
          {currentStep >= 3 && !step3Complete && (
            <button
              onClick={validateStep3}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 4
            </button>
          )}
        </div>
        )}

        {/* Step 4: Final Simplify - Only show after Step 3 is complete */}
        {step3Complete && (
          <div className={`mb-8 p-8 rounded-xl border-2 ${
            currentStep < 4 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
            step4Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 5: Simplify</h2>
            {step4Complete && <span className="text-3xl">✅</span>}
            {currentStep < 4 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Write each value in simplified form. Some will be whole numbers, others will be fractions.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step4Answers.map((answer, i) => {
              // For i=0 (0/2=0) and i=4 (2/2=1), use simple input
              // For i=1,2,3, use FractionInput
              const needsFraction = i === 1 || i === 2 || i === 3
              
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="text-lg mb-2 text-gray-600 dark:text-gray-400">
                    {step2Answers[i]}/{step3Answers[i]} =
                  </div>
                  {needsFraction ? (
                    <FractionInput
                      value={answer}
                      onChange={(value) => handleStep4Change(i, value)}
                      disabled={currentStep < 4 || step4Complete}
                      className={
                        step4Complete
                          ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                          : currentStep >= 4
                          ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                          : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                      }
                      inputRef={(el) => { step4Refs.current[i] = el }}
                    />
                  ) : (
                    <input
                      ref={(el) => { step4Refs.current[i] = el }}
                      type="text"
                      value={answer}
                      onChange={(e) => handleStep4Change(i, e.target.value)}
                      disabled={currentStep < 4 || step4Complete}
                      className={`w-20 h-20 text-3xl text-center border-2 rounded-lg ${
                        step4Complete
                          ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                          : currentStep >= 4
                          ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                          : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="?"
                    />
                  )}
                </div>
              )
            })}
          </div>
          {currentStep >= 4 && !step4Complete && (
            <button
              onClick={validateStep4}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 5
            </button>
          )}
          </div>
        )}

        {/* Completion Message */}
        {step4Complete && (
          <div className="text-center p-12 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl border-2 border-green-500">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Perfect! You've mastered it!
            </h2>
            <p className="text-xl text-foreground mb-6">
              You've successfully completed all 5 steps of the counting method!
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={onBack}
                className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
              >
                Return to Lesson
              </button>
              {onComplete && (
                <button
                  onClick={onComplete}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Continue to Part 2 →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Part 2 Independent Practice Mode - Fill in the table row by row
function Part2PracticeMode({ onBack, onComplete }: { onBack: () => void, onComplete?: () => void }) {
  const [currentRow, setCurrentRow] = useState<'theta' | 'sine' | 'cosine' | 'complete'>('theta')
  const [thetaAnswers, setThetaAnswers] = useState(['', '', '', '', ''])
  const [sineAnswers, setSineAnswers] = useState(['', '', '', '', ''])
  const [cosineAnswers, setCosineAnswers] = useState(['', '', '', '', ''])
  
  const thetaRefs = useRef<(HTMLInputElement | null)[]>([])
  const sineRefs = useRef<(HTMLInputElement | null)[]>([])
  const cosineRefs = useRef<(HTMLInputElement | null)[]>([])

  const thetaCorrect = ['0', '30', '45', '60', '90']
  const sineCorrect = ['0', '1/2', '√2/2', '√3/2', '1']
  const cosineCorrect = ['1', '√3/2', '√2/2', '1/2', '0']

  const normalizeAnswer = (answer: string): string => {
    let normalized = answer.trim().toLowerCase()
    // Convert sqrt(n) to √n
    normalized = normalized.replace(/sqrt\((\d+)\)/g, '√$1')
    normalized = normalized.replace(/sqrt(\d+)/g, '√$1')
    // Remove spaces
    normalized = normalized.replace(/\s/g, '')
    // Handle degree symbol
    normalized = normalized.replace(/°/g, '')
    return normalized
  }

  // Convert input to KaTeX LaTeX format
  const toLatex = (value: string): string => {
    if (!value) return ''
    let latex = value
    // Convert √n to \sqrt{n}
    latex = latex.replace(/√(\d+)/g, '\\sqrt{$1}')
    // Convert sqrt(n) to \sqrt{n}
    latex = latex.replace(/sqrt\((\d+)\)/g, '\\sqrt{$1}')
    // Convert fractions like 1/2 to \frac{1}{2}
    latex = latex.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}')
    // Handle √2/2 format
    latex = latex.replace(/√(\d+)\/(\d+)/g, '\\frac{\\sqrt{$1}}{$2}')
    latex = latex.replace(/\\sqrt\{(\d+)\}\/(\d+)/g, '\\frac{\\sqrt{$1}}{$2}')
    return latex
  }

  const checkRow = (rowType: 'theta' | 'sine' | 'cosine') => {
    let answers: string[]
    let correct: string[]
    
    if (rowType === 'theta') {
      answers = thetaAnswers
      correct = thetaCorrect
    } else if (rowType === 'sine') {
      answers = sineAnswers
      correct = sineCorrect
    } else {
      answers = cosineAnswers
      correct = cosineCorrect
    }

    const isCorrect = answers.every((answer, index) => 
      normalizeAnswer(answer) === normalizeAnswer(correct[index])
    )

    if (isCorrect) {
      // Move to next row
      if (rowType === 'theta') {
        setCurrentRow('sine')
      } else if (rowType === 'sine') {
        setCurrentRow('cosine')
      } else {
        setCurrentRow('complete')
      }
    } else {
      alert('Not quite right. Check your answers and try again!')
    }
  }

  const handleThetaChange = (index: number, value: string) => {
    const newAnswers = [...thetaAnswers]
    newAnswers[index] = value
    setThetaAnswers(newAnswers)
    
    // Auto-advance for single or double digit numbers
    if (value.length >= 1 && index < 4) {
      // For 0, 30, 45, 60, 90 - advance after 1-2 digits
      if (value.length === 2 || (value === '0' && index === 0)) {
        thetaRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleSineChange = (index: number, value: string) => {
    const newAnswers = [...sineAnswers]
    newAnswers[index] = value
    setSineAnswers(newAnswers)
  }

  const handleCosineChange = (index: number, value: string) => {
    const newAnswers = [...cosineAnswers]
    newAnswers[index] = value
    setCosineAnswers(newAnswers)
  }

  const resetPractice = () => {
    setCurrentRow('theta')
    setThetaAnswers(['', '', '', '', ''])
    setSineAnswers(['', '', '', '', ''])
    setCosineAnswers(['', '', '', '', ''])
    // Focus first input after a brief delay
    setTimeout(() => {
      thetaRefs.current[0]?.focus()
    }, 100)
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Complete the Unit Circle Table
          </h1>
          <p className="text-xl text-foreground">
            Fill in each row of the table for the first quadrant angles
          </p>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-xl">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600">
              <tr>
                <th className="px-4 py-4 text-left text-white text-lg font-bold border-r border-white/30">
                  
                </th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">1st</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">2nd</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">3rd</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">4th</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold">5th</th>
              </tr>
            </thead>
            <tbody>
              {/* Theta Row */}
              <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-b-2 border-gray-300 dark:border-gray-600">
                <td className="px-4 py-6 font-bold text-lg text-purple-700 dark:text-purple-400 border-r border-gray-300 dark:border-gray-600">
                  θ (theta)
                </td>
                {[0, 1, 2, 3, 4].map((i) => (
                  <td key={i} className="px-4 py-6 text-center border-r border-gray-200 dark:border-gray-700">
                    {currentRow === 'theta' ? (
                      <input
                        ref={(el) => { thetaRefs.current[i] = el }}
                        type="text"
                        value={thetaAnswers[i]}
                        onChange={(e) => handleThetaChange(i, e.target.value)}
                        className="w-20 h-16 text-center text-xl font-bold border-2 border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="?"
                      />
                    ) : (
                      <div className="w-20 h-16 mx-auto flex items-center justify-center text-xl font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                        {thetaCorrect[i]}°
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Sine Row */}
              <tr className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b-2 border-gray-300 dark:border-gray-600">
                <td className="px-4 py-6 font-bold text-lg text-purple-700 dark:text-purple-400 border-r border-gray-300 dark:border-gray-600">
                  sin(θ)
                </td>
                {[0, 1, 2, 3, 4].map((i) => (
                  <td key={i} className="px-4 py-6 text-center border-r border-gray-200 dark:border-gray-700">
                    {currentRow === 'sine' ? (
                      <div className="flex flex-col items-center gap-2">
                        {/* KaTeX Preview */}
                        <div className="w-24 h-12 flex items-center justify-center border-2 border-purple-300 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                          {sineAnswers[i] ? (
                            <span
                              className="text-lg"
                              dangerouslySetInnerHTML={{
                                __html: typeof window !== 'undefined' && (window as any).katex
                                  ? (window as any).katex.renderToString(toLatex(sineAnswers[i]), { throwOnError: false })
                                  : sineAnswers[i]
                              }}
                            />
                          ) : (
                            <span className="text-2xl text-gray-400">?</span>
                          )}
                        </div>
                        {/* Input */}
                        <input
                          ref={(el) => { sineRefs.current[i] = el }}
                          type="text"
                          value={sineAnswers[i]}
                          onChange={(e) => handleSineChange(i, e.target.value)}
                          className="w-24 h-10 text-center text-sm border-2 border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. 1/2"
                        />
                      </div>
                    ) : currentRow === 'cosine' || currentRow === 'complete' ? (
                      <div className="w-24 h-16 mx-auto flex items-center justify-center text-lg font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: typeof window !== 'undefined' && (window as any).katex
                              ? (window as any).katex.renderToString(toLatex(sineCorrect[i]), { throwOnError: false })
                              : sineCorrect[i]
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-2xl">🔒</div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Cosine Row */}
              <tr className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20">
                <td className="px-4 py-6 font-bold text-lg text-purple-700 dark:text-purple-400 border-r border-gray-300 dark:border-gray-600">
                  cos(θ)
                </td>
                {[0, 1, 2, 3, 4].map((i) => (
                  <td key={i} className="px-4 py-6 text-center border-r border-gray-200 dark:border-gray-700">
                    {currentRow === 'cosine' ? (
                      <div className="flex flex-col items-center gap-2">
                        {/* KaTeX Preview */}
                        <div className="w-24 h-12 flex items-center justify-center border-2 border-purple-300 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                          {cosineAnswers[i] ? (
                            <span
                              className="text-lg"
                              dangerouslySetInnerHTML={{
                                __html: typeof window !== 'undefined' && (window as any).katex
                                  ? (window as any).katex.renderToString(toLatex(cosineAnswers[i]), { throwOnError: false })
                                  : cosineAnswers[i]
                              }}
                            />
                          ) : (
                            <span className="text-2xl text-gray-400">?</span>
                          )}
                        </div>
                        {/* Input */}
                        <input
                          ref={(el) => { cosineRefs.current[i] = el }}
                          type="text"
                          value={cosineAnswers[i]}
                          onChange={(e) => handleCosineChange(i, e.target.value)}
                          className="w-24 h-10 text-center text-sm border-2 border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500"
                          placeholder="e.g. 1/2"
                        />
                      </div>
                    ) : currentRow === 'complete' ? (
                      <div className="w-24 h-16 mx-auto flex items-center justify-center text-lg font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: typeof window !== 'undefined' && (window as any).katex
                              ? (window as any).katex.renderToString(toLatex(cosineCorrect[i]), { throwOnError: false })
                              : cosineCorrect[i]
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-2xl">🔒</div>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Check Row Button */}
        {currentRow !== 'complete' && (
          <div className="text-center mt-8">
            <button
              onClick={() => checkRow(currentRow)}
              className="px-12 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Check {currentRow === 'theta' ? 'θ' : currentRow === 'sine' ? 'sin(θ)' : 'cos(θ)'} Row
            </button>
          </div>
        )}

        {/* Completion Message */}
        {currentRow === 'complete' && (
          <div className="text-center p-12 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl border-2 border-green-500 mt-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Excellent! You've completed the table!
            </h2>
            <p className="text-xl text-foreground mb-6">
              You've successfully filled in all the unit circle values for the first quadrant!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={resetPractice}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
              >
                🔄 Try Again
              </button>
              <button
                onClick={onBack}
                className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
              >
                Return to Lesson
              </button>
              {onComplete && (
                <button
                  onClick={onComplete}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Continue →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back Button (always visible) */}
        {currentRow !== 'complete' && (
          <div className="text-center mt-6">
            <button
              onClick={onBack}
              className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
            >
              ← Back to Lesson
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
