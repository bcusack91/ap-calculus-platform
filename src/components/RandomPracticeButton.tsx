'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface RandomPracticeProps {
  courseSlug?: string
  label?: string
}

export default function RandomPracticeButton({ courseSlug, label = 'Random Practice' }: RandomPracticeProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const goRandom = async () => {
    setLoading(true)
    try {
      const params = courseSlug ? `?course=${encodeURIComponent(courseSlug)}` : ''
      const res = await fetch(`/api/random-topic${params}`)
      if (res.ok) {
        const data = await res.json()
        router.push(`/topics/${data.slug}`)
        return
      }
    } catch { /* silent */ }
    setLoading(false)
  }

  return (
    <button
      onClick={goRandom}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50"
    >
      🎲 {loading ? 'Loading...' : label}
    </button>
  )
}
