'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AchievementGallery } from '@/components/AchievementGallery'
import { MilestonesList } from '@/components/MilestoneCelebrations'

export default function AchievementsPage() {
  const { status } = useSession()
  const router = useRouter()
  const [unlockedIds, setUnlockedIds] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<'achievements' | 'milestones'>('achievements')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/achievements')
      return
    }
    if (status === 'authenticated') {
      fetch('/api/achievements')
        .then((r) => r.ok ? r.json() : null)
        .then((d) => {
          if (d?.achievements) {
            setUnlockedIds(
              d.achievements.filter((a: { unlocked: boolean }) => a.unlocked).map((a: { id: string }) => a.id)
            )
          }
        })
        .catch(() => {})
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            ← Dashboard
          </Link>
        </div>
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Achievements & Milestones
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your progress and celebrate what you&apos;ve accomplished
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          {(['achievements', 'milestones'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow'
              }`}
            >
              {tab === 'achievements' ? '🏆 Achievements' : '🎯 Milestones'}
            </button>
          ))}
        </div>

        {activeTab === 'achievements' && <AchievementGallery unlockedIds={unlockedIds} />}
        {activeTab === 'milestones' && <MilestonesList />}
      </div>
    </div>
  )
}
