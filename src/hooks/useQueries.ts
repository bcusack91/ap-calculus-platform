'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// ─── Generic Fetcher ───────────────────────────────────────────────────
async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `Request failed: ${res.status}`)
  }
  return res.json()
}

// ─── Dashboard ─────────────────────────────────────────────────────────
interface DashboardData {
  overview: {
    topicsStarted: number
    topicsCompleted: number
    topicsMastered: number
    topicsInProgress: number
    totalTimeSpentMinutes: number
    totalFlashcards: number
    dueFlashcards: number
  }
  streak: { current: number; longest: number; lastActive: string | null }
  courseProgress: {
    name: string; slug: string; total: number
    completed: number; mastered: number; inProgress: number
  }[]
  recentActivity: {
    topicTitle: string; topicSlug: string; courseName: string
    status: string; masteryLevel: number; lastAccessed: string
  }[]
}

export function useDashboard() {
  return useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: () => fetcher('/api/dashboard'),
    staleTime: 30_000,
  })
}

// ─── Bookmarks ─────────────────────────────────────────────────────────
interface Bookmark {
  id: string
  topicSlug: string
  title: string
  part: number
  createdAt: string
}

export function useBookmarks() {
  return useQuery<{ bookmarks: Bookmark[] }>({
    queryKey: ['bookmarks'],
    queryFn: () => fetcher('/api/bookmarks'),
  })
}

export function useRemoveBookmark() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async ({ topicSlug, part }: { topicSlug: string; part: number }) => {
      const res = await fetch('/api/bookmarks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug, part }),
      })
      if (!res.ok) throw new Error('Failed to remove bookmark')
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['bookmarks'] }),
  })
}

// ─── Study Plans ───────────────────────────────────────────────────────
export function useStudyPlans() {
  return useQuery({
    queryKey: ['study-plans'],
    queryFn: () => fetcher<{ plans: unknown[] }>('/api/study-plans'),
  })
}

// ─── Challenges ────────────────────────────────────────────────────────
export function useChallenges() {
  return useQuery({
    queryKey: ['challenges'],
    queryFn: () => fetcher<{ challenges: unknown[] }>('/api/challenges'),
    refetchInterval: 60_000, // Auto-refresh every minute
  })
}

// ─── Achievements ──────────────────────────────────────────────────────
export function useAchievements() {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: () => fetcher<{
      achievements: unknown[]
      totalUnlocked: number
      totalAchievements: number
    }>('/api/achievements'),
  })
}

// ─── Progress Charts ───────────────────────────────────────────────────
export function useProgressCharts() {
  return useQuery({
    queryKey: ['progress-charts'],
    queryFn: () => fetcher('/api/progress/charts'),
    staleTime: 60_000,
  })
}

// ─── Flashcard Session ─────────────────────────────────────────────────
export function useFlashcardSession(topicSlug?: string) {
  const url = topicSlug
    ? `/api/flashcards/session?topicSlug=${encodeURIComponent(topicSlug)}`
    : '/api/flashcards/session'
  return useQuery({
    queryKey: ['flashcard-session', topicSlug],
    queryFn: () => fetcher(url),
  })
}

// ─── Notes ─────────────────────────────────────────────────────────────
export function useNotes(topicSlug?: string) {
  return useQuery({
    queryKey: ['notes', topicSlug],
    queryFn: () => fetcher(topicSlug ? `/api/notes?topicSlug=${topicSlug}` : '/api/notes'),
  })
}

export function useSaveNote() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: async ({ topicSlug, content }: { topicSlug: string; content: string }) => {
      const res = await fetch('/api/notes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug, content }),
      })
      if (!res.ok) throw new Error('Failed to save note')
      return res.json()
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({ queryKey: ['notes', variables.topicSlug] })
      qc.invalidateQueries({ queryKey: ['notes', undefined] })
    },
  })
}

// ─── Search ────────────────────────────────────────────────────────────
export function useSearch(query: string) {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => fetcher(`/api/search?q=${encodeURIComponent(query)}`),
    enabled: query.length >= 2,
    staleTime: 120_000,
  })
}
