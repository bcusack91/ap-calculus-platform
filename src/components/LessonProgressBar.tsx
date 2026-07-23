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
    <>
      {/* Fixed bar — always flush below navbar */}
      <div
        className="fixed top-16 left-0 right-0 z-30 backdrop-blur-md border-b py-1.5 px-4 bg-white/95 dark:bg-gray-900/95 border-accent-light/60 dark:border-accent-hover/40 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
      >
        <div className="max-w-4xl mx-auto">
          {/* Step counter and title */}
          <div className="flex justify-between items-center mb-1 text-xs">
            <span className="text-gray-500 dark:text-gray-400">
              Section {currentStep + 1} of {totalSteps}
              {partNumber && totalParts && totalParts > 1 && (
                <span className="ml-2 text-accent dark:text-accent-muted font-medium">
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
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden h-1.5">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #9333ea, #ec4899)',
              }}
            />
          </div>
        </div>
      </div>
      {/* Spacer to prevent content from hiding behind the fixed bar */}
      <div className="h-10" />
    </>
  )
}
