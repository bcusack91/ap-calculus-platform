'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const STATUSES = ['DRAFT', 'PUBLISHED', 'ARCHIVED']

export default function NewContentPage() {
  const router = useRouter()
  const [type, setType] = useState('')
  const [courseSlug, setCourseSlug] = useState('')
  const [key, setKey] = useState('')
  const [status, setStatus] = useState('DRAFT')
  const [payloadText, setPayloadText] = useState('{\n  \n}')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function create() {
    setError(null)
    let payload: unknown
    try {
      payload = JSON.parse(payloadText)
    } catch {
      setError('Payload is not valid JSON.')
      return
    }
    if (!type || !courseSlug || !key) {
      setError('Type, course slug, and key are all required.')
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, courseSlug, key, status, payload }),
      })
      const data = await res.json()
      if (!res.ok) setError(data.error || 'Create failed')
      else router.push(`/admin/content/${data.item.id}`)
    } finally {
      setSaving(false)
    }
  }

  const field = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white'

  return (
    <div className="container max-w-3xl py-10">
      <Link href="/admin/content" className="mb-4 inline-block text-sm text-purple-600 hover:underline dark:text-purple-400">
        ← Back to content
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">New content item</h1>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
          <input value={type} onChange={(e) => setType(e.target.value)} placeholder="e.g. frq" className={field} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Course slug</label>
          <input value={courseSlug} onChange={(e) => setCourseSlug(e.target.value)} placeholder="e.g. ap-macro" className={field} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Key</label>
          <input value={key} onChange={(e) => setKey(e.target.value)} placeholder="stable id" className={field} />
        </div>
      </div>

      <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className={`mb-4 ${field}`}>
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Payload (JSON)</label>
      <textarea
        value={payloadText}
        onChange={(e) => setPayloadText(e.target.value)}
        spellCheck={false}
        className="h-72 w-full rounded-lg border border-gray-300 p-3 font-mono text-xs dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
      />

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button
        onClick={create}
        disabled={saving}
        className="mt-6 rounded-lg bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
      >
        {saving ? 'Creating…' : 'Create'}
      </button>
    </div>
  )
}
