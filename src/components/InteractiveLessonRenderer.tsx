'use client'

import { useState } from 'react'
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

// Fade-in Text Component with LaTeX support
function FadeInText({ content }: { content: string }) {
  // Check if content has LaTeX math
  const hasLatex = content.includes('$')
  
  if (hasLatex) {
    return (
      <div className="animate-fade-in">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </div>
    )
  }
  
  return (
    <div className="animate-fade-in">
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = () => {
    setShowFeedback(true)
    const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    }
  }

  const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} />
      
      <div className="flex gap-3 justify-center flex-wrap">
        {answers.map((answer, index) => (
          <input
            key={index}
            type="text"
            value={answer}
            onChange={(e) => {
              const newAnswers = [...answers]
              newAnswers[index] = e.target.value
              setAnswers(newAnswers)
              setShowFeedback(false)
            }}
            disabled={isComplete}
            className={`w-20 h-20 text-3xl text-center border-4 rounded-lg font-bold transition-all ${
              isComplete || (showFeedback && isCorrect)
                ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-white'
                : showFeedback && !isCorrect
                ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-gray-900 dark:text-white'
                : 'border-purple-300 focus:border-purple-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
            placeholder="?"
          />
        ))}
      </div>

      {!isComplete && (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Check Answer
          </button>
        </div>
      )}

      {showFeedback && (
        <div className={`text-center text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? '✓ Correct! Great job!' : '✗ Not quite. Try again!'}
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
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSubmit = () => {
    setShowFeedback(true)
    const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    }
  }

  const isCorrect = JSON.stringify(answers) === JSON.stringify(section.exercise.correctAnswers)

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} />
      
      <div className="space-y-4">
        {section.exercise.dropdowns.map((dropdown: any, index: number) => (
          <div key={index} className="flex items-center gap-4 justify-center">
            <span className="text-xl font-semibold">{dropdown.label}</span>
            <select
              value={answers[index]}
              onChange={(e) => {
                const newAnswers = [...answers]
                newAnswers[index] = e.target.value
                setAnswers(newAnswers)
                setShowFeedback(false)
              }}
              disabled={isComplete}
              className={`px-4 py-2 text-lg border-2 rounded-lg transition-all ${
                isComplete || (showFeedback && isCorrect)
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-gray-900 dark:text-white'
                  : showFeedback && !isCorrect
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/30 text-gray-900 dark:text-white'
                  : 'border-purple-300 focus:border-purple-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              <option value="">Select...</option>
              {dropdown.options.map((option: string) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {!isComplete && (
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Check Answer
          </button>
        </div>
      )}

      {showFeedback && (
        <div className={`text-center text-lg font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
          {isCorrect ? '✓ Correct! Excellent work!' : '✗ Not quite. Try again!'}
        </div>
      )}
    </div>
  )
}
