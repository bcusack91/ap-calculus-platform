'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { COURSE_COUNT, TOPIC_COUNT_LABEL } from '@/lib/site-stats'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { InArticleAd } from '@/components/ad-banner'
import { trackSearch } from '@/lib/analytics'

interface SearchResult {
  type: 'course' | 'category' | 'topic'
  title: string
  description: string
  href: string
  context: string
}

const RECENT_SEARCHES_KEY = 'studymondo_recent_searches'
const MAX_RECENT = 5

function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY) || '[]')
  } catch { return [] }
}

function saveRecentSearch(q: string) {
  const recent = getRecentSearches().filter((s) => s !== q)
  recent.unshift(q)
  localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(recent.slice(0, MAX_RECENT)))
}

function clearRecentSearches() {
  localStorage.removeItem(RECENT_SEARCHES_KEY)
}

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showRecent, setShowRecent] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setRecentSearches(getRecentSearches())
  }, [])

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
      const searchResults: SearchResult[] = data.results || []
      setResults(searchResults)
      setSearched(true)
      saveRecentSearch(q.trim())
      setRecentSearches(getRecentSearches())
      trackSearch(q.trim(), searchResults.length)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (initialQuery) doSearch(initialQuery)
  }, [initialQuery, doSearch])

  useEffect(() => {
    const timer = setTimeout(() => { doSearch(query) }, 300)
    return () => clearTimeout(timer)
  }, [query, doSearch])

  // Reset highlight when results change
  useEffect(() => { setHighlightIndex(-1) }, [results])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightIndex((prev) => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightIndex((prev) => Math.max(prev - 1, -1))
    } else if (e.key === 'Enter' && highlightIndex >= 0 && results[highlightIndex]) {
      e.preventDefault()
      router.push(results[highlightIndex].href)
    } else if (e.key === 'Escape') {
      setShowRecent(false)
      inputRef.current?.blur()
    }
  }

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightIndex >= 0 && resultsRef.current) {
      const items = resultsRef.current.querySelectorAll('[data-result-item]')
      items[highlightIndex]?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlightIndex])

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

  // Highlight matching text in results
  const highlightMatch = (text: string, q: string) => {
    if (!q || q.length < 2) return text
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-700/50 text-inherit rounded-sm px-0.5">{part}</mark> : part
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Search</h1>

          {/* Search Input with keyboard nav hint */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowRecent(true)}
              onBlur={() => setTimeout(() => setShowRecent(false), 200)}
              placeholder="Search courses, topics, categories..."
              className="w-full pl-12 pr-12 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-800 dark:text-white shadow-sm"
              autoFocus
              role="combobox"
              aria-expanded={results.length > 0}
              aria-haspopup="listbox"
              aria-controls="search-results-listbox"
              aria-activedescendant={highlightIndex >= 0 ? `search-result-${highlightIndex}` : undefined}
              aria-label="Search study materials"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
              {query && !loading && (
                <button
                  onClick={() => { setQuery(''); setResults([]); setSearched(false); inputRef.current?.focus() }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {loading && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent" />
              )}
            </div>

            {/* Recent Searches Dropdown */}
            {showRecent && !searched && recentSearches.length > 0 && query.length < 2 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Searches</span>
                  <button
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => { clearRecentSearches(); setRecentSearches([]) }}
                    className="text-xs text-gray-500 hover:text-red-500 dark:text-gray-400 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                {recentSearches.map((s, i) => (
                  <button
                    key={i}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => { setQuery(s); doSearch(s); setShowRecent(false) }}
                    className="w-full text-left px-4 py-2.5 hover:bg-accent-subtle dark:hover:bg-accent-light/20 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <svg className="h-4 w-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Keyboard navigation hint */}
          {searched && results.length > 0 && (
            <div className="flex items-center gap-3 mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-[10px] font-mono">↑↓</kbd>
                navigate
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-[10px] font-mono ml-2">↵</kbd>
                open
              </span>
            </div>
          )}

          {/* Results */}
          {searched && !loading && (
            <div ref={resultsRef} id="search-results-listbox" role="listbox" aria-label="Search results">
              {results.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">😕</div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-sm text-gray-400 dark:text-gray-400">Try different keywords or check your spelling</p>
                </div>
              )}

              <div className="space-y-3">
                {results.map((result, i) => (
                  <Link
                    key={`${result.type}-${result.href}-${i}`}
                    href={result.href}
                    data-result-item
                    id={`search-result-${i}`}
                    role="option"
                    aria-selected={highlightIndex === i}
                    className={`block bg-white dark:bg-gray-800 border rounded-xl p-5 hover:shadow-md transition-all group ${
                      highlightIndex === i
                        ? 'border-accent-muted dark:border-accent ring-2 ring-accent-light dark:ring-accent-light shadow-md'
                        : 'border-gray-200 dark:border-gray-700 hover:border-accent-muted dark:hover:border-accent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{typeIcon(result.type)}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-muted transition-colors truncate">
                            {highlightMatch(result.title, query)}
                          </h3>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex-shrink-0">
                            {typeLabel(result.type)}
                          </span>
                        </div>
                        {result.context && (
                          <p className="text-xs text-accent dark:text-accent-muted mb-1">{result.context}</p>
                        )}
                        {result.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{highlightMatch(result.description, query)}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Ad after search results */}
          {searched && results.length > 0 && (
            <div className="mt-6">
              <InArticleAd />
            </div>
          )}

          {/* Initial state */}
          {!searched && !loading && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Search across {COURSE_COUNT} courses and {TOPIC_COUNT_LABEL} topics
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-400">
                Start typing to find study materials instantly
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
        <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
          <div className="container py-12">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Search</h1>
              <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-14 rounded-xl" />
            </div>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
