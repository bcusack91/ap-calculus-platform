'use client'

interface EstimatedTimeProps {
  parts?: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

const difficultyConfig = {
  beginner: { label: 'Beginner', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: '🟢', minutesPerPart: 5 },
  intermediate: { label: 'Intermediate', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: '🔵', minutesPerPart: 7 },
  advanced: { label: 'Advanced', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', icon: '🟠', minutesPerPart: 10 },
  expert: { label: 'Expert', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: '🔴', minutesPerPart: 12 },
}

export default function TopicMeta({ parts = 7, difficulty = 'intermediate' }: EstimatedTimeProps) {
  const config = difficultyConfig[difficulty]
  const totalMinutes = parts * config.minutesPerPart

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        ⏱️ ~{totalMinutes} min
      </span>
      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.icon} {config.label}
      </span>
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
        📖 {parts} parts
      </span>
    </div>
  )
}
