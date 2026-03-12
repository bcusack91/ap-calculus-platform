'use client'

import { useState, useEffect } from 'react'

const SIZES = [
  { label: 'S', value: 14 },
  { label: 'M', value: 16 },
  { label: 'L', value: 18 },
  { label: 'XL', value: 20 },
]

export default function FontSizeAdjuster() {
  const [size, setSize] = useState(() => {
    if (typeof window === 'undefined') return 16
    const saved = localStorage.getItem('preferred-font-size')
    if (saved) {
      const parsed = parseInt(saved, 10)
      if (parsed >= 12 && parsed <= 24) return parsed
    }
    return 16
  })

  useEffect(() => {
    document.documentElement.style.setProperty('--content-font-size', `${size}px`)
  }, [size])

  const changeSize = (newSize: number) => {
    setSize(newSize)
    localStorage.setItem('preferred-font-size', String(newSize))
    document.documentElement.style.setProperty('--content-font-size', `${newSize}px`)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 dark:text-gray-400">Aa</span>
      <div className="flex border rounded-lg dark:border-gray-600 overflow-hidden">
        {SIZES.map(s => (
          <button
            key={s.value}
            onClick={() => changeSize(s.value)}
            className={`px-2.5 py-1 text-xs font-medium transition-colors ${
              size === s.value
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label={`Font size ${s.label}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
