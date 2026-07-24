'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { TrendingUp, Flame, BookOpen, Layers, ClipboardList, Trophy } from 'lucide-react'

interface Stats {
  topicsMastered: number; topicsCompleted: number; topicsInProgress: number
  quizzesTaken: number; quizAverage: number | null
  satTests: number; bestSat: number | null
  mcatSections: number; dailyChallenges: number
  flashcardsLearned: number; flashcardsDue: number
  currentStreak: number; longestStreak: number
}
interface CourseRow { name: string; slug: string; touched: number; mastered: number }
interface TimelineItem { kind: string; label: string; detail: string; at: string; href?: string }

const KIND_ICON: Record<string, string> = {
  quiz: '📝', sat: '📊', mcat: '🩺', daily: '⚡', topic: '📘',
}

function relative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const d = Math.floor(diff / 86400000)
  if (d === 0) return 'Today'
  if (d === 1) return 'Yesterday'
  if (d < 7) return `${d} days ago`
  if (d < 30) return `${Math.floor(d / 7)} wk ago`
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export default function ProgressPage() {
  const { status: authStatus } = useSession()
  const [stats, setStats] = useState<Stats | null>(null)
  const [courses, setCourses] = useState<CourseRow[]>([])
  const [timeline, setTimeline] = useState<TimelineItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (authStatus !== 'authenticated') { if (authStatus !== 'loading') setLoading(false); return }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/progress/summary')
        if (!res.ok) throw new Error('failed')
        const d = await res.json()
        if (cancelled) return
        setStats(d.stats); setCourses(d.courses || []); setTimeline(d.timeline || [])
      } catch { /* leave empty */ } finally { if (!cancelled) setLoading(false) }
    })()
    return () => { cancelled = true }
  }, [authStatus])

  if (authStatus === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-md mx-auto text-center rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8">
          <TrendingUp className="w-10 h-10 mx-auto mb-4 text-accent" aria-hidden />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your progress</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Sign in to see everything you’ve studied in one place.</p>
          <Link href="/auth/signin?callbackUrl=/progress" className="inline-block px-6 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors">Sign in</Link>
        </div>
      </div>
    )
  }

  const tiles = stats ? [
    { icon: <Trophy className="w-4 h-4" aria-hidden />, label: 'Topics mastered', value: stats.topicsMastered },
    { icon: <BookOpen className="w-4 h-4" aria-hidden />, label: 'In progress', value: stats.topicsInProgress },
    { icon: <ClipboardList className="w-4 h-4" aria-hidden />, label: 'Quizzes taken', value: stats.quizzesTaken, sub: stats.quizAverage !== null ? `${stats.quizAverage}% avg` : undefined },
    { icon: <Layers className="w-4 h-4" aria-hidden />, label: 'Cards learned', value: stats.flashcardsLearned, sub: stats.flashcardsDue > 0 ? `${stats.flashcardsDue} due` : undefined },
    { icon: <Flame className="w-4 h-4" aria-hidden />, label: 'Day streak', value: stats.currentStreak, sub: stats.longestStreak > 0 ? `best ${stats.longestStreak}` : undefined },
    ...(stats.bestSat ? [{ icon: <TrendingUp className="w-4 h-4" aria-hidden />, label: 'Best SAT', value: stats.bestSat, sub: `${stats.satTests} test${stats.satTests === 1 ? '' : 's'}` }] : []),
  ] : []

  const hasAny = stats && (stats.topicsMastered + stats.topicsInProgress + stats.quizzesTaken + stats.flashcardsLearned) > 0

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            <TrendingUp className="w-6 h-6 text-accent" aria-hidden /> My Progress
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Everything you’ve studied — lessons, quizzes, practice tests, flashcards — in one place.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" /></div>
        ) : !hasAny ? (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Nothing tracked yet</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Study a topic, take a quiz, or review flashcards and it’ll show up here.</p>
            <Link href="/courses" className="inline-flex items-center gap-1.5 text-accent font-medium hover:underline"><BookOpen className="w-4 h-4" aria-hidden /> Browse courses</Link>
          </div>
        ) : (
          <>
            {/* Headline stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {tiles.map((t) => (
                <div key={t.label} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">{t.icon} {t.label}</div>
                  <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{t.value.toLocaleString()}</div>
                  {t.sub && <div className="text-xs text-gray-400">{t.sub}</div>}
                </div>
              ))}
            </div>

            {/* Per-course */}
            {courses.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">By course</h2>
                <div className="space-y-2">
                  {courses.map((c) => {
                    const pct = c.touched > 0 ? Math.round((c.mastered / c.touched) * 100) : 0
                    return (
                      <Link key={c.slug} href={`/courses/${c.slug}`} className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-accent-muted transition-colors group">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white group-hover:text-accent truncate">{c.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{c.mastered}/{c.touched} mastered</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-all" style={{ width: `${pct}%` }} />
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Unified timeline */}
            {timeline.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Recent activity</h2>
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                  {timeline.map((item, i) => {
                    const inner = (
                      <div className="flex items-center gap-3 px-4 py-3">
                        <span className="text-lg flex-shrink-0" aria-hidden>{KIND_ICON[item.kind] ?? '•'}</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.detail}</div>
                        </div>
                        <span className="text-xs text-gray-400 flex-shrink-0">{relative(item.at)}</span>
                      </div>
                    )
                    return item.href
                      ? <Link key={i} href={item.href} className="block hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">{inner}</Link>
                      : <div key={i}>{inner}</div>
                  })}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}
