'use client'

interface LessonProgressBarProps {
  currentStep: number
  totalSteps: number
  completedSteps: Set<number>
  lessonTitle?: string
  partNumber?: number
  totalParts?: number
}

export default function LessonProgressBar({
  currentStep,
  totalSteps,
  completedSteps,
  lessonTitle,
  partNumber,
  totalParts,
}: LessonProgressBarProps) {
  const progress = totalSteps > 0 ? (completedSteps.size / totalSteps) * 100 : 0

  return (
    <div className="sticky top-16 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-purple-100 dark:border-purple-800/40 px-4 py-3 shadow-sm">
      <div className="container mx-auto">
        {/* Top row: step counter and title */}
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-500 dark:text-gray-400">
            Section {currentStep + 1} of {totalSteps}
            {partNumber && totalParts && totalParts > 1 && (
              <span className="ml-2 text-purple-600 dark:text-purple-400 font-medium">
                · Part {partNumber}/{totalParts}
              </span>
            )}
          </span>
          {lessonTitle && (
            <span className="font-medium text-gray-700 dark:text-gray-300 truncate ml-4 max-w-[50%] text-right">
              {lessonTitle}
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #9333ea, #ec4899)',
            }}
          />
        </div>

        {/* Step dots (visible on larger screens) */}
        <div className="hidden sm:flex justify-between mt-2 gap-0.5">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                i === currentStep
                  ? 'bg-purple-600 dark:bg-purple-400'
                  : completedSteps.has(i)
                    ? 'bg-green-400 dark:bg-green-500'
                    : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
