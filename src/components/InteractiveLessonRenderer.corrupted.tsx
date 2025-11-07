'use client'

import { useState, useRef, useEffect } from 'react'
import { unitCircleLessonData } from '@/data/interactive-lessons/unit-circle'
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
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())
  const [showPracticeMode, setShowPracticeMode] = useState(false)

  // Get lesson data based on topic
  const lessonData = topicSlug === 'the-unit-circle' ? unitCircleLessonData : null

  if (!lessonData) {
    return <div>No interactive lesson available</div>
  }

  // Show practice mode if requested
  if (showPracticeMode) {
    return <IndependentPracticeMode onBack={() => setShowPracticeMode(false)} />
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

// Square Root Input Component - shows √ with number underneath in a styled box
function SquareRootInput({ 
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
  const [hasSquareRoot, setHasSquareRoot] = useState(false)
  const [numberValue, setNumberValue] = useState('')

  // Parse existing value on mount or when value changes externally
  useEffect(() => {
    if (value.startsWith('√')) {
      setHasSquareRoot(true)
      setNumberValue(value.substring(1))
    } else {
      setHasSquareRoot(false)
      setNumberValue(value)
    }
  }, [value])

  const handleSquareRootClick = () => {
    if (!disabled && !hasSquareRoot) {
      setHasSquareRoot(true)
      onChange('√' + numberValue)
    }
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setNumberValue(newValue)
    if (hasSquareRoot) {
      onChange('√' + newValue)
    } else {
      onChange(newValue)
    }
  }

  const handleClear = () => {
    if (!disabled) {
      setHasSquareRoot(false)
      setNumberValue('')
      onChange('')
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {!hasSquareRoot ? (
        <div className="flex flex-col items-center gap-2">
          <div className={`w-20 h-20 flex items-center justify-center border-2 rounded-lg ${className}`}>
            <input
              ref={inputRef}
              type="text"
              value={numberValue}
              onChange={handleNumberChange}
              disabled={disabled}
              className="w-full h-full text-3xl text-center bg-transparent border-none outline-none focus:ring-0"
              placeholder="?"
            />
          </div>
          <button
            onClick={handleSquareRootClick}
            disabled={disabled}
            className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add √
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className={`relative w-20 h-20 flex items-center justify-center border-2 rounded-lg ${className}`}>
            {/* Square root symbol with overline */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="absolute left-1 top-1/2 -translate-y-1/2 text-4xl leading-none">√</span>
                <div className="absolute top-2 left-7 right-1 border-t-2 border-current"></div>
                <input
                  ref={inputRef}
                  type="text"
                  value={numberValue}
                  onChange={handleNumberChange}
                  disabled={disabled}
                  className="w-12 ml-7 text-2xl text-center bg-transparent border-none outline-none focus:ring-0"
                  placeholder="?"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleClear}
            disabled={disabled}
            className="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

// Fraction Input Component for Step 3
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
  const [numeratorHasSquareRoot, setNumeratorHasSquareRoot] = useState(false)
  const [numerator, setNumerator] = useState('')
  const [denominator, setDenominator] = useState('')

  // Parse existing value (e.g., "√2/2" or "1/2" or "0")
  useEffect(() => {
    if (value.includes('/')) {
      const [num, den] = value.split('/')
      if (num.startsWith('√')) {
        setNumeratorHasSquareRoot(true)
        setNumerator(num.substring(1))
      } else {
        setNumeratorHasSquareRoot(false)
        setNumerator(num)
      }
      setDenominator(den)
    } else {
      setNumeratorHasSquareRoot(false)
      setNumerator(value)
      setDenominator('')
    }
  }, [value])

  const handleSquareRootClick = () => {
    if (!disabled && !numeratorHasSquareRoot) {
      setNumeratorHasSquareRoot(true)
      updateValue(numerator, denominator, true)
    }
  }

  const updateValue = (num: string, den: string, hasRoot: boolean) => {
    if (den) {
      onChange((hasRoot ? '√' : '') + num + '/' + den)
    } else {
      onChange((hasRoot ? '√' : '') + num)
    }
  }

  const handleNumeratorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNum = e.target.value
    setNumerator(newNum)
    updateValue(newNum, denominator, numeratorHasSquareRoot)
  }

  const handleDenominatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDen = e.target.value
    setDenominator(newDen)
    updateValue(numerator, newDen, numeratorHasSquareRoot)
  }

  const handleClear = () => {
    if (!disabled) {
      setNumeratorHasSquareRoot(false)
      setNumerator('')
      setDenominator('')
      onChange('')
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center">
        {/* Numerator */}
        <div className="flex items-center gap-1 mb-1">
          {numeratorHasSquareRoot && <span className="text-2xl">√</span>}
          <input
            ref={inputRef}
            type="text"
            value={numerator}
            onChange={handleNumeratorChange}
            disabled={disabled}
            className={`w-16 h-12 text-xl text-center border-2 rounded ${className}`}
            placeholder="?"
          />
        </div>
        {/* Fraction bar */}
        <div className="w-20 border-t-2 border-gray-800 dark:border-gray-300"></div>
        {/* Denominator */}
        <input
          type="text"
          value={denominator}
          onChange={handleDenominatorChange}
          disabled={disabled}
          className={`w-16 h-12 text-xl text-center border-2 rounded mt-1 ${className}`}
          placeholder="?"
        />
      </div>
      <div className="flex gap-2">
        {!numeratorHasSquareRoot && (
          <button
            onClick={handleSquareRootClick}
            disabled={disabled}
            className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add √
          </button>
        )}
        <button
          onClick={handleClear}
          disabled={disabled}
          className="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear
        </button>
      </div>
    </div>
  )
}

// Independent Practice Mode Component
function IndependentPracticeMode({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [step0Answers, setStep0Answers] = useState(['', '', '', '', ''])
  const [step1Answers, setStep1Answers] = useState(['', '', '', '', '']) // Square root step
  const [step2Answers, setStep2Answers] = useState(['', '', '', '', '']) // Simplify step
  const [step3Answers, setStep3Answers] = useState(['', '', '', '', '']) // Divide by step
  const [step4Answers, setStep4Answers] = useState(['', '', '', '', '']) // Final simplify step
  const [step0Complete, setStep0Complete] = useState(false)
  const [step1Complete, setStep1Complete] = useState(false)
  const [step2Complete, setStep2Complete] = useState(false)
  const [step3Complete, setStep3Complete] = useState(false)
  const [step4Complete, setStep4Complete] = useState(false)

  // Refs for auto-focus
  const step0Refs = useRef<(HTMLInputElement | null)[]>([])
  const step1Refs = useRef<(HTMLInputElement | null)[]>([])
  const step2Refs = useRef<(HTMLInputElement | null)[]>([])
  const step3Refs = useRef<(HTMLInputElement | null)[]>([])
  const step4Refs = useRef<(HTMLInputElement | null)[]>([])

  const step0Correct = ['0', '1', '2', '3', '4']
  const step1Correct = ['√0', '√1', '√2', '√3', '√4'] // Square root of each
  const step2Correct = ['0', '1', '√2', '√3', '2'] // Simplified
  const step3Correct = ['2', '2', '2', '2', '2'] // Divide by
  const step4Correct = ['0', '1/2', '√2/2', '√3/2', '1'] // Final simplified

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
    // No auto-advance for step 1 since students need to add square roots
  }

  const handleStep2Change = (index: number, value: string) => {
    const newAnswers = [...step2Answers]
    newAnswers[index] = value
    setStep2Answers(newAnswers)
    // No auto-advance for step 2 since students may need to add square roots
  }

  const handleStep3Change = (index: number, value: string) => {
    const newAnswers = [...step3Answers]
    newAnswers[index] = value
    setStep3Answers(newAnswers)
    if (value && index < 4) {
      step3Refs.current[index + 1]?.focus()
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
    // No auto-advance for step 4 since students may need to add square roots and fractions
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
            <h2 className="text-2xl font-bold text-foreground">Step 2: Square Root</h2>
            {step1Complete && <span className="text-3xl">✅</span>}
            {currentStep < 1 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Take the square root of each number. Click "Add √" to insert the square root symbol.
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

        {/* Step 2: Simplify */}
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
            {step2Answers.map((answer, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  {step1Answers[i]} =
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
            ))}
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

        {/* Step 3: Divide By */}
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

        {/* Step 4: Final Simplify */}
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
            Write each fraction in simplified form. Use the "Add √" button for numerators that need it.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step4Answers.map((answer, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-lg mb-2 text-gray-600 dark:text-gray-400">
                  {step2Answers[i]}/{step3Answers[i]} =
                </div>
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
              </div>
            ))}
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
            <button
              onClick={onBack}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Return to Lesson
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
