'use client'

interface ProgressRingProps {
  percentage: number
  size?: number
  strokeWidth?: number
  color?: string
  bgColor?: string
  className?: string
  showLabel?: boolean
}

export default function ProgressRing({
  percentage,
  size = 48,
  strokeWidth = 5,
  color = '#8b5cf6',
  bgColor = '#e5e7eb',
  className = '',
  showLabel = true,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (Math.min(Math.max(percentage, 0), 100) / 100) * circumference

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
          className="dark:stroke-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {showLabel && (
        <span className="absolute text-[10px] font-bold text-gray-700 dark:text-gray-300">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  )
}
