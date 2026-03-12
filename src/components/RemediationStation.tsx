'use client'

import { useState, useEffect } from 'react'
import { RemediationPath, RemediationStep } from '@/utils/remediation-engine'

interface RemediationStationProps {
  remediationPath: RemediationPath
  onComplete: () => void
  onSkip?: () => void
}

export default function RemediationStation({
  remediationPath,
  onComplete,
  onSkip
}: RemediationStationProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Array<{
    stepIndex: number
    score?: number
    timeSpent?: number
  }>>([])
  const [startTime, setStartTime] = useState(0)
  const [elapsedMinutes, setElapsedMinutes] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStartTime(Date.now())
    }, 0)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (startTime <= 0) return
    const interval = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - startTime) / 60000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime])
  
  const currentStep = remediationPath.steps[currentStepIndex]
  const progress = ((currentStepIndex + 1) / remediationPath.steps.length) * 100

  const handleStepComplete = (score?: number) => {
    const now = Date.now()
    const timeSpent = startTime > 0 ? (now - startTime) / 60000 : 0 // Convert to minutes
    
    setCompletedSteps([
      ...completedSteps,
      {
        stepIndex: currentStepIndex,
        score,
        timeSpent
      }
    ])
    
    if (currentStepIndex < remediationPath.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      setStartTime(now)
      setElapsedMinutes(0)
    } else {
      // All steps completed
      onComplete()
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'foundational': return 'red'
      case 'intensive': return 'orange'
      case 'medium': return 'yellow'
      case 'light': return 'blue'
      default: return 'gray'
    }
  }

  const getLevelGradient = (level: string) => {
    const gradients: Record<string, string> = {
      red: 'from-red-500 to-red-600',
      orange: 'from-orange-500 to-orange-600',
      yellow: 'from-yellow-500 to-yellow-600',
      blue: 'from-blue-500 to-blue-600',
      gray: 'from-gray-500 to-gray-600',
    }
    return gradients[getLevelColor(level)] || gradients.gray
  }

  const getLevelEmoji = (level: string) => {
    switch (level) {
      case 'foundational': return '🔧'
      case 'intensive': return '⚙️'
      case 'medium': return '🔨'
      case 'light': return '✨'
      default: return '🛠️'
    }
  }

  const emoji = getLevelEmoji(remediationPath.level)

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className={`bg-gradient-to-r ${getLevelGradient(remediationPath.level)} p-6 text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{emoji}</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">
                Rework Station - {remediationPath.level.charAt(0).toUpperCase() + remediationPath.level.slice(1)} Level
              </h2>
              <p className="text-lg opacity-90">
                {remediationPath.reason}
              </p>
            </div>
            {!remediationPath.mustComplete && onSkip && (
              <button
                onClick={onSkip}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                Skip (Not Recommended)
              </button>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm opacity-90">
              <span>Step {currentStepIndex + 1} of {remediationPath.steps.length}</span>
              <span>Est. Time Remaining: {remediationPath.estimatedTime - elapsedMinutes} min</span>
            </div>
            <div className="bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <RemediationStepRenderer
            step={currentStep}
            onComplete={handleStepComplete}
          />
        </div>

        {/* Footer Info */}
        {remediationPath.preventAdvancement && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-t-2 border-yellow-500 p-4">
            <div className="flex items-center gap-3 text-yellow-800 dark:text-yellow-200">
              <span className="text-2xl">🚫</span>
              <div>
                <div className="font-bold">Advancement Blocked</div>
                <div className="text-sm">
                  You must complete this remediation to continue to the next section.
                  This ensures you have the foundation needed for success.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function RemediationStepRenderer({
  step,
  onComplete
}: {
  step: RemediationStep
  onComplete: (score?: number) => void
}) {
  const [timeSpent, setTimeSpent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1)
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const renderStepContent = () => {
    switch (step.type) {
      case 'video':
        return <VideoStep step={step} onComplete={onComplete} />
      
      case 'interactive-demo':
        return <InteractiveDemoStep step={step} onComplete={onComplete} />
      
      case 'guided-practice':
        return <GuidedPracticeStep step={step} onComplete={onComplete} />
      
      case 'mini-quiz':
        return <MiniQuizStep step={step} onComplete={onComplete} />
      
      case 'reflection':
        return <ReflectionStep step={step} onComplete={onComplete} timeSpent={timeSpent} />
      
      default:
        return <div>Unknown step type</div>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-2xl">
          {getStepIcon(step.type)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            ⏱️ Estimated time: {step.duration} minutes
          </p>
        </div>
      </div>

      {renderStepContent()}

      {step.successCriteria && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
          <div className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
            Success Criteria
          </div>
          <div className="text-blue-800 dark:text-blue-300">
            {step.successCriteria.type === 'quiz-score' && (
              <>Need {(step.successCriteria.threshold * 100).toFixed(0)}% to pass</>
            )}
            {step.successCriteria.type === 'time-spent' && (
              <>Spend at least {step.successCriteria.threshold} minutes</>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function VideoStep({ step, onComplete }: { step: RemediationStep; onComplete: () => void }) {
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        {/* Placeholder for video player */}
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">🎥</div>
            <div className="text-xl">Video Player</div>
            <div className="text-sm opacity-75 mt-2">{step.content}</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          onComplete()
        }}
        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
      >
        ✓ I&apos;ve Watched and Understood
      </button>
    </div>
  )
}

function InteractiveDemoStep({ step, onComplete }: { step: RemediationStep; onComplete: () => void }) {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 border-2 border-dashed border-purple-300 dark:border-purple-700">
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <div className="text-xl font-semibold mb-2">{step.title}</div>
          <div className="text-gray-600 dark:text-gray-400">{step.content}</div>
        </div>
        {/* Interactive demo would go here */}
      </div>

      <button
        onClick={() => onComplete()}
        className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors"
      >
        ✓ Complete Demo
      </button>
    </div>
  )
}

function GuidedPracticeStep({ step, onComplete }: { step: RemediationStep; onComplete: (score: number) => void }) {
  const [currentProblem, setCurrentProblem] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])

  const totalProblems = 3

  const handleAnswer = (isCorrect: boolean) => {
    setAnswers([...answers, isCorrect])
    
    if (currentProblem < totalProblems - 1) {
      setCurrentProblem(currentProblem + 1)
    } else {
      // All problems done
      const finalScore = [...answers, isCorrect].filter(a => a).length / totalProblems
      
      if (step.successCriteria && finalScore >= step.successCriteria.threshold) {
        onComplete(finalScore)
      } else {
        // Need to retry
        alert(`You got ${(finalScore * 100).toFixed(0)}%, but need ${(step.successCriteria!.threshold * 100).toFixed(0)}%. Let's try again!`)
        setCurrentProblem(0)
        setAnswers([])
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-purple-200 dark:border-purple-700 p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Problem {currentProblem + 1} of {totalProblems}
        </div>
        
        {/* Problem would render here */}
        <div className="text-xl font-mono mb-6 text-center py-8 bg-gray-50 dark:bg-gray-900 rounded">
          Practice Problem {currentProblem + 1}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
          >
            ✓ Correct
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
          >
            ✗ Incorrect
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {Array.from({ length: totalProblems }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded ${
              i < answers.length
                ? answers[i]
                  ? 'bg-green-500'
                  : 'bg-red-500'
                : i === currentProblem
                ? 'bg-purple-300 animate-pulse'
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function MiniQuizStep({ step, onComplete }: { step: RemediationStep; onComplete: (score: number) => void }) {
  const [score, setScore] = useState<number | null>(null)

  const handleQuizComplete = (quizScore: number) => {
    setScore(quizScore)
    
    if (step.successCriteria && quizScore >= step.successCriteria.threshold) {
      setTimeout(() => onComplete(quizScore), 1500)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">📝</div>
        <div className="text-xl font-semibold mb-2">Checkpoint Quiz</div>
        <div className="text-gray-600 dark:text-gray-400 mb-6">
          {step.content}
        </div>

        {score === null ? (
          <button
            onClick={() => handleQuizComplete(0.8)} // Simulated score
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors"
          >
            Start Quiz
          </button>
        ) : (
          <div>
            <div className={`text-4xl font-bold mb-4 ${
              score >= (step.successCriteria?.threshold || 0.8) ? 'text-green-600' : 'text-red-600'
            }`}>
              {(score * 100).toFixed(0)}%
            </div>
            {score >= (step.successCriteria?.threshold || 0.8) ? (
              <div className="text-green-600 dark:text-green-400 font-semibold">
                ✅ Passed! Moving to next step...
              </div>
            ) : (
              <div>
                <div className="text-red-600 dark:text-red-400 font-semibold mb-4">
                  ❌ Need {((step.successCriteria?.threshold || 0.8) * 100).toFixed(0)}% to pass
                </div>
                <button
                  onClick={() => setScore(null)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function ReflectionStep({ 
  step, 
  onComplete, 
  timeSpent 
}: { 
  step: RemediationStep
  onComplete: () => void
  timeSpent: number
}) {
  const [reflection, setReflection] = useState('')
  const minTime = step.successCriteria?.threshold || 2

  return (
    <div className="space-y-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
        <div className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-200">
          {step.content}
        </div>
        
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-40 p-4 rounded-lg border-2 border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Time spent: {timeSpent} min {timeSpent < minTime && `(${minTime - timeSpent} min remaining)`}
        </div>
        
        <button
          onClick={() => onComplete()}
          disabled={timeSpent < minTime}
          className={`px-8 py-3 font-bold rounded-lg transition-colors ${
            timeSpent >= minTime
              ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          {timeSpent >= minTime ? '✓ Continue' : '⏳ Spend More Time'}
        </button>
      </div>
    </div>
  )
}

function getStepIcon(type: string): string {
  switch (type) {
    case 'video': return '🎥'
    case 'interactive-demo': return '🎮'
    case 'guided-practice': return '📝'
    case 'mini-quiz': return '✓'
    case 'reflection': return '💭'
    default: return '📚'
  }
}
