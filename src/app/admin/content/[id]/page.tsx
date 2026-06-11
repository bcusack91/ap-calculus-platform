'use client'

import { useEffect, useState, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface ContentItem {
  id: string
  type: string
  courseSlug: string
  key: string
  payload: unknown
  status: string
  version: number
  updatedAt: string
}

const STATUSES = ['PUBLISHED', 'DRAFT', 'ARCHIVED']

export default function EditContentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [item, setItem] = useState<ContentItem | null>(null)
  const [payloadText, setPayloadText] = useState('')
  const [status, setStatus] = useState('DRAFT')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/admin/content/${id}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('Failed to load'))))
      .then((data) => {
        const it = data.item as ContentItem
        setItem(it)
        setPayloadText(JSON.stringify(it.payload, null, 2))
        setStatus(it.status)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  async function save() {
    setError(null)
    setNotice(null)
    let payload: unknown
    try {
      payload = JSON.parse(payloadText)
    } catch {
      setError('Payload is not valid JSON — fix it before saving.')
      return
    }
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/content/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload, status }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Save failed')
      } else {
        setItem(data.item)
        setNotice(`Saved (version ${data.item.version}).`)
      }
    } finally {
      setSaving(false)
    }
  }

  async function remove() {
    if (!confirm('Delete this content item? Consumers will fall back to the static source.')) return
    setSaving(true)
    const res = await fetch(`/api/admin/content/${id}`, { method: 'DELETE' })
    if (res.ok) router.push('/admin/content')
    else {
      setError('Delete failed')
      setSaving(false)
    }
  }

  if (loading) return <div className="container py-10 text-gray-500">Loading…</div>
  if (error && !item) return <div className="container py-10 text-red-600">{error}</div>
  if (!item) return null

  return (
    <div className="container max-w-3xl py-10">
      <Link href="/admin/content" className="mb-4 inline-block text-sm text-purple-600 hover:underline dark:text-purple-400">
        ← Back to content
      </Link>
      <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">Edit content</h1>
      <p className="mb-6 font-mono text-sm text-gray-500">
        {item.type} / {item.courseSlug} / {item.key} · v{item.version}
      </p>

      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mb-6 rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Payload (JSON)</label>
      <textarea
        value={payloadText}
        onChange={(e) => setPayloadText(e.target.value)}
        spellCheck={false}
        className="h-96 w-full rounded-lg border border-gray-300 p-3 font-mono text-xs dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
      />

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      {notice && <p className="mt-3 text-sm text-green-600">{notice}</p>}

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={save}
          disabled={saving}
          className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
        <button
          onClick={remove}
          disabled={saving}
          className="rounded-lg border border-red-300 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50 dark:border-red-700 dark:hover:bg-red-900/20"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
