'use client'

import { useState } from 'react'

interface Application {
  title: string
  field: string
  description: string
  example: string
}

interface RealWorldApplicationsProps {
  topic: string
  applications: Application[]
}

export function RealWorldApplications({ topic, applications }: RealWorldApplicationsProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const fieldEmoji: Record<string, string> = {
    Engineering: '⚙️',
    Medicine: '🏥',
    Finance: '💰',
    Physics: '🔬',
    Technology: '💻',
    Biology: '🧬',
    Environment: '🌍',
    Architecture: '🏗️',
    Sports: '⚽',
    Music: '🎵',
    Space: '🚀',
    Chemistry: '⚗️',
    Business: '📊',
    Art: '🎨',
    Transportation: '🚗',
    Agriculture: '🌾',
    Construction: '🏗️',
    Cooking: '🍳',
    Navigation: '🧭',
    Astronomy: '🌟',
  }

  return (
    <div className="my-6 rounded-lg border-2 border-emerald-300 dark:border-emerald-700 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-5 py-3">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>🌍</span> Real-World Applications: {topic}
        </h3>
        <p className="text-emerald-100 text-sm mt-0.5">
          See how this math is used in the real world
        </p>
      </div>

      <div className="p-4 space-y-3 bg-emerald-50 dark:bg-emerald-900/10">
        {applications.map((app, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-lg border border-emerald-200 dark:border-emerald-700 overflow-hidden"
          >
            <button
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{fieldEmoji[app.field] || '📐'}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {app.title}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">{app.field}</p>
                </div>
              </div>
              <span className={`text-gray-400 transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {expandedIdx === i && (
              <div className="px-4 pb-4 space-y-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">{app.description}</p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 border border-emerald-200 dark:border-emerald-700">
                  <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                    💡 Example:
                  </p>
                  <p className="text-sm text-emerald-700 dark:text-emerald-400">{app.example}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
