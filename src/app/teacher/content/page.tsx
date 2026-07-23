'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface TopicItem {
  slug: string
  title: string
  description: string | null
  category: { name: string; course: { name: string; slug: string } }
}

export default function TeacherContentPage() {
  const { data: _session, status } = useSession()
  const router = useRouter()
  const [topics, setTopics] = useState<TopicItem[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('all')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
    if (status === 'authenticated') {
      fetchTopics()
    }
  }, [status, router])

  const fetchTopics = async () => {
    try {
      const res = await fetch('/api/teacher/content')
      if (res.ok) {
        const data = await res.json()
        const allTopics: TopicItem[] = []
        for (const course of data.courses || []) {
          for (const cat of course.categories || []) {
            for (const topic of cat.topics || []) {
              allTopics.push({
                slug: topic.slug,
                title: topic.title,
                description: topic.description,
                category: { name: cat.name, course: { name: course.name, slug: course.slug } },
              })
            }
          }
        }
        setTopics(allTopics)
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }

  const courseNames = useMemo(() => {
    const set = new Set(topics.map((t) => t.category.course.name))
    return Array.from(set).sort()
  }, [topics])

  const filtered = useMemo(() => {
    let list = topics
    if (selectedCourse !== 'all') {
      list = list.filter((t) => t.category.course.name === selectedCourse)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.category.name.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q))
      )
    }
    return list
  }, [topics, selectedCourse, search])

  // Group by course > category
  const grouped = useMemo(() => {
    const map: Record<string, Record<string, TopicItem[]>> = {}
    for (const t of filtered) {
      const course = t.category.course.name
      const cat = t.category.name
      if (!map[course]) map[course] = {}
      if (!map[course][cat]) map[course][cat] = []
      map[course][cat].push(t)
    }
    return map
  }, [filtered])

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-8">
          <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6" />
          <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/teacher" className="text-sm text-blue-600 hover:underline">← Teacher Dashboard</Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">📖 Content Library</h1>
        <p className="text-gray-500 mb-6">Browse all available topics to preview content and create assignments.</p>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by course"
          >
            <option value="all">All Courses ({topics.length} topics)</option>
            {courseNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-4">{filtered.length} topics found</p>

        {/* Grouped Content */}
        {Object.entries(grouped).map(([courseName, categories]) => (
          <div key={courseName} className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              {courseName}
            </h2>
            {Object.entries(categories).map(([catName, catTopics]) => (
              <div key={catName} className="mb-6 ml-4">
                <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">{catName}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {catTopics.map((topic) => (
                    <div key={topic.slug} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all group">
                      <Link href={`/topics/${topic.slug}`} className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors block mb-1">
                        {topic.title}
                      </Link>
                      {topic.description && (
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2">{topic.description}</p>
                      )}
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/topics/${topic.slug}`}
                          className="text-xs text-blue-600 hover:underline"
                          target="_blank"
                        >
                          Preview →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="text-xs text-gray-400 font-mono">{topic.slug}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-gray-500">No topics match your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
