'use client'

interface QualityGateProps {
  currentAccuracy: number
  requiredAccuracy: number
  canAdvance: boolean
  reason: string
  onRetry: () => void
  onAdvance?: () => void
  sectionName: string
}

export default function QualityGate({
  currentAccuracy,
  requiredAccuracy,
  canAdvance,
  reason,
  onRetry,
  onAdvance,
  sectionName
}: QualityGateProps) {
  const percentage = (currentAccuracy / requiredAccuracy) * 100
  const gap = requiredAccuracy - currentAccuracy

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        
        {/* Header */}
        <div className={`${
          canAdvance 
            ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
            : 'bg-gradient-to-r from-yellow-500 to-orange-600'
        } p-8 text-white text-center`}>
          <div className="text-6xl mb-4">
            {canAdvance ? '✅' : '⚠️'}
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {canAdvance ? 'Quality Gate Passed!' : 'Quality Gate Check'}
          </h2>
          <p className="text-lg opacity-90">
            {reason}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          
          {/* Performance Metrics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
              <div className="text-sm text-blue-700 dark:text-blue-300 mb-2">Your Accuracy</div>
              <div className="text-4xl font-bold text-blue-900 dark:text-blue-100">
                {(currentAccuracy * 100).toFixed(0)}%
              </div>
            </div>
            <div className="bg-accent-subtle dark:bg-accent-light/20 rounded-lg p-6 text-center">
              <div className="text-sm text-accent-hover dark:text-accent-muted mb-2">Required</div>
              <div className="text-4xl font-bold text-accent-dark dark:text-accent-dark">
                {(requiredAccuracy * 100).toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progress to Target</span>
              <span>{Math.min(100, percentage).toFixed(0)}%</span>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  canAdvance 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                }`}
                style={{ width: `${Math.min(100, percentage)}%` }}
              />
            </div>
          </div>

          {!canAdvance && (
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="font-bold text-orange-900 dark:text-orange-200 mb-1">
                    Almost There!
                  </div>
                  <div className="text-sm text-orange-800 dark:text-orange-300">
                    You need {(gap * 100).toFixed(0)}% more accuracy to meet the quality standard for &quot;{sectionName}&quot;. 
                    This ensures you&apos;re ready for the next challenge!
                  </div>
                </div>
              </div>
            </div>
          )}

          {canAdvance && (
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <div className="font-bold text-green-900 dark:text-green-200 mb-1">
                    Excellent Work!
                  </div>
                  <div className="text-sm text-green-800 dark:text-green-300">
                    You&apos;ve demonstrated mastery of &quot;{sectionName}&quot;. You&apos;re ready to advance to the next section with confidence!
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={onRetry}
              className="flex-1 py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold rounded-lg transition-colors"
            >
              📚 More Practice
            </button>
            
            {canAdvance && onAdvance && (
              <button
                onClick={onAdvance}
                className="flex-1 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 Continue to Next Section
              </button>
            )}
          </div>

          {/* Six Sigma Context */}
          <div className="bg-accent-subtle dark:bg-accent-light/20 rounded-lg p-4 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📊</span>
              <div className="font-semibold text-accent-dark dark:text-accent-dark">
                Six Sigma Quality Standards
              </div>
            </div>
            <div className="text-accent-dark dark:text-accent-muted">
              Like in manufacturing, we use progressive quality gates to ensure each step builds a solid foundation. 
              Meeting these standards means you&apos;re ready for the next level of complexity!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
