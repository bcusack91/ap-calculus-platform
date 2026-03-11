'use client'

import { usePreferences } from './PreferencesProvider'
import type { ColorScheme } from './PreferencesProvider'

const schemes: { id: ColorScheme; label: string; colors: [string, string] }[] = [
  { id: 'default', label: 'Purple', colors: ['#9333ea', '#2563eb'] },
  { id: 'ocean', label: 'Ocean', colors: ['#0284c7', '#0891b2'] },
  { id: 'forest', label: 'Forest', colors: ['#16a34a', '#059669'] },
  { id: 'sunset', label: 'Sunset', colors: ['#ea580c', '#d97706'] },
  { id: 'rose', label: 'Rose', colors: ['#e11d48', '#db2777'] },
]

export default function ColorSchemeSelector() {
  const { preferences, updatePreference } = usePreferences()

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Color Scheme
      </h3>
      <div className="flex gap-3 flex-wrap">
        {schemes.map((scheme) => {
          const isActive = preferences.colorScheme === scheme.id
          return (
            <button
              key={scheme.id}
              onClick={() => updatePreference('colorScheme', scheme.id)}
              className={`group flex flex-col items-center gap-1.5 rounded-xl px-3 py-2.5 transition-all ${
                isActive
                  ? 'bg-gray-100 dark:bg-gray-700 ring-2 ring-accent-ring ring-offset-2 ring-offset-white dark:ring-offset-gray-900'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              aria-label={`${scheme.label} color scheme`}
              aria-pressed={isActive}
            >
              <div
                className="h-8 w-8 rounded-full shadow-sm transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${scheme.colors[0]} 0%, ${scheme.colors[1]} 100%)`,
                }}
              />
              <span className={`text-xs font-medium ${
                isActive
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {scheme.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
