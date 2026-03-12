'use client'

interface CalculatorBadgeProps {
  allowed: boolean
  compact?: boolean
}

export function CalculatorBadge({ allowed, compact }: CalculatorBadgeProps) {
  if (compact) {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
          allowed
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
        }`}
        title={allowed ? 'Calculator allowed' : 'No calculator'}
      >
        {allowed ? '🖩' : '🚫🖩'}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
        allowed
          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-700'
          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-700'
      }`}
    >
      {allowed ? '🖩 Calculator Allowed' : '🚫 No Calculator'}
    </span>
  )
}

interface DifficultyRatingProps {
  difficulty: 'easy' | 'medium' | 'hard' | 'expert'
  showLabel?: boolean
}

export function DifficultyRating({ difficulty, showLabel = true }: DifficultyRatingProps) {
  const config = {
    easy: { dots: 1, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30', label: 'Easy', textColor: 'text-green-700 dark:text-green-300' },
    medium: { dots: 2, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30', label: 'Medium', textColor: 'text-yellow-700 dark:text-yellow-300' },
    hard: { dots: 3, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30', label: 'Hard', textColor: 'text-orange-700 dark:text-orange-300' },
    expert: { dots: 4, color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30', label: 'Expert', textColor: 'text-red-700 dark:text-red-300' },
  }[difficulty]

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded ${config.bg}`}>
      <span className="flex gap-0.5">
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={`w-2 h-2 rounded-full ${
              n <= config.dots ? config.color.replace('text-', 'bg-') : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </span>
      {showLabel && (
        <span className={`text-xs font-medium ${config.textColor}`}>
          {config.label}
        </span>
      )}
    </span>
  )
}
