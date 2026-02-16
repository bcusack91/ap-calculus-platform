'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface SearchResult {
  type: 'course' | 'category' | 'topic'
  title: string
  description: string
  href: string
  context: string
}

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const doSearch = useCallback(async (q: string) => {
    if (q.trim().length < 2) {
      setResults([])
      setSearched(false)
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`)
      const data = await res.json()
      setResults(data.results || [])
      setSearched(true)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  // Search on initial load if query param exists
  useEffect(() => {
    if (initialQuery) {
      doSearch(initialQuery)
    }
  }, [initialQuery, doSearch])

  // Debounced search as user types
  useEffect(() => {
    const timer = setTimeout(() => {
      doSearch(query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query, doSearch])

  const typeIcon = (type: string) => {
    switch (type) {
      case 'course': return '📚'
      case 'category': return '📂'
      case 'topic': return '📄'
      default: return '🔍'
    }
  }

  const typeLabel = (type: string) => {
    switch (type) {
      case 'course': return 'Course'
      case 'category': return 'Category'
      case 'topic': return 'Topic'
      default: return type
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search</h1>

          {/* Search Input */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, topics, categories..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
              autoFocus
            />
            {loading && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600" />
              </div>
            )}
          </div>

          {/* Results */}
          {searched && !loading && (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                {results.length === 0
                  ? `No results found for "${query}"`
                  : `Found ${results.length} result${results.length !== 1 ? 's' : ''}`}
              </p>

              <div className="space-y-3">
                {results.map((result, i) => (
                  <Link
                    key={`${result.type}-${result.href}-${i}`}
                    href={result.href}
                    className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-purple-300 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{typeIcon(result.type)}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                            {result.title}
                          </h3>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 flex-shrink-0">
                            {typeLabel(result.type)}
                          </span>
                        </div>
                        {result.context && (
                          <p className="text-xs text-purple-600 mb-1">{result.context}</p>
                        )}
                        {result.description && (
                          <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Initial state */}
          {!searched && !loading && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500">
                Search across 24 courses and 700+ topics
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container py-12">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Search</h1>
              <div className="animate-pulse bg-gray-200 h-14 rounded-xl" />
            </div>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
