'use client'

import { useState, useEffect, useCallback } from 'react'
import { parseFlashcardInput } from '@/lib/flashcard-parse'

/**
 * Teacher-created flashcard sets — real, persisted (FlashcardSet model).
 * Three ways to build a set: generate with AI, import from pasted text / CSV
 * (Quizlet/Knowt style), or enter cards manually. Sets are the teacher's own
 * (never global content) and are studyable/shareable via /flashcard-sets/[id].
 */

interface Card {
  front: string
  back: string
}
interface SetSummary {
  id: string
  title: string
  subject: string | null
  source: string
  updatedAt: string
  _count: { cards: number }
  classroom: { id: string; name: string } | null
}

const SUBJECTS = [
  'AP Calculus', 'AP Chemistry', 'AP Biology', 'Algebra 1', 'Algebra 2', 'Geometry',
  'AP Statistics', 'AP Physics', 'SAT', 'ACT', 'MCAT', 'Other',
]

type Mode = 'choose' | 'ai' | 'import' | 'manual'

export function TeacherFlashcardSets() {
  const [sets, setSets] = useState<SetSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<'list' | 'create'>('list')
  const [mode, setMode] = useState<Mode>('choose')

  // Builder state (shared across modes)
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [cards, setCards] = useState<Card[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Assign-to-class
  const [classrooms, setClassrooms] = useState<{ id: string; name: string }[]>([])
  const [assignFor, setAssignFor] = useState<string | null>(null)
  const [assignMsg, setAssignMsg] = useState<Record<string, string>>({})

  // AI inputs
  const [aiTopic, setAiTopic] = useState('')
  const [aiCount, setAiCount] = useState('12')
  const [generating, setGenerating] = useState(false)

  // Import input
  const [pasteText, setPasteText] = useState('')

  const load = useCallback(async () => {
    try {
      const r = await fetch('/api/teacher/flashcard-sets')
      if (r.ok) setSets((await r.json()).sets || [])
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => { load() }, [load])

  const resetBuilder = () => {
    setTitle(''); setSubject(''); setCards([]); setError('')
    setAiTopic(''); setAiCount('12'); setPasteText(''); setMode('choose')
  }

  const chooseMode = (m: Mode) => {
    setMode(m); setError('')
    if (m === 'manual' && cards.length === 0) setCards([{ front: '', back: '' }, { front: '', back: '' }])
  }

  const runGenerate = async () => {
    if (!aiTopic.trim()) return
    setGenerating(true); setError('')
    try {
      const r = await fetch('/api/teacher/flashcard-sets/generate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: aiTopic, subject, count: parseInt(aiCount) || 12 }),
      })
      const d = await r.json().catch(() => ({}))
      if (r.ok && Array.isArray(d.cards)) {
        setCards(d.cards)
        if (!title.trim()) setTitle(aiTopic.trim())
      } else {
        setError(d.error || 'Generation failed. Please try again.')
      }
    } catch {
      setError('Generation failed. Please try again.')
    } finally {
      setGenerating(false)
    }
  }

  const runImport = () => {
    const { cards: parsed, errors } = parseFlashcardInput(pasteText)
    setCards(parsed)
    setError(
      errors.length
        ? `${errors.length} line(s) skipped — each card needs a term and a definition separated by a tab or comma.`
        : '',
    )
  }

  const updateCard = (i: number, field: keyof Card, val: string) =>
    setCards((c) => c.map((x, idx) => (idx === i ? { ...x, [field]: val } : x)))
  const removeCard = (i: number) => setCards((c) => c.filter((_, idx) => idx !== i))

  const save = async () => {
    const clean = cards.map((c) => ({ front: c.front.trim(), back: c.back.trim() })).filter((c) => c.front && c.back)
    if (!title.trim()) { setError('Give the set a title.'); return }
    if (clean.length === 0) { setError('Add at least one complete card (front and back).'); return }
    setSaving(true); setError('')
    try {
      const source = mode === 'ai' ? 'AI' : mode === 'import' ? 'IMPORT' : 'MANUAL'
      const r = await fetch('/api/teacher/flashcard-sets', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, subject, source, cards: clean }),
      })
      if (r.ok) { resetBuilder(); setView('list'); load() }
      else { const d = await r.json().catch(() => ({})); setError(d.error || 'Save failed.') }
    } finally {
      setSaving(false)
    }
  }

  const deleteSet = async (id: string, setTitle: string) => {
    if (!confirm(`Delete "${setTitle}"? This can't be undone.`)) return
    const r = await fetch(`/api/teacher/flashcard-sets/${id}`, { method: 'DELETE' })
    if (r.ok) setSets((s) => s.filter((x) => x.id !== id))
  }

  const copyLink = (id: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/flashcard-sets/${id}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1800)
  }

  const openAssign = async (setId: string) => {
    setAssignFor((cur) => (cur === setId ? null : setId))
    if (classrooms.length === 0) {
      const r = await fetch('/api/teacher/classrooms')
      if (r.ok) {
        const data = await r.json()
        setClassrooms((data.classrooms || []).map((c: { id: string; name: string }) => ({ id: c.id, name: c.name })))
      }
    }
  }

  const assignToClass = async (set: SetSummary, classroomId: string) => {
    setAssignFor(null)
    setAssignMsg((m) => ({ ...m, [set.id]: 'Assigning…' }))
    try {
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/assignments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Studying flashcards is repeatable — don't cap re-studies at one attempt.
        body: JSON.stringify({ title: `Flashcards: ${set.title}`, type: 'FLASHCARD_REVIEW', flashcardSetId: set.id, maxAttempts: 9999 }),
      })
      setAssignMsg((m) => ({ ...m, [set.id]: r.ok ? '✓ Assigned to class' : 'Assign failed' }))
    } catch {
      setAssignMsg((m) => ({ ...m, [set.id]: 'Assign failed' }))
    }
    setTimeout(() => setAssignMsg((m) => { const n = { ...m }; delete n[set.id]; return n }), 2800)
  }

  // ── Create view ──────────────────────────────────────────────────────────
  if (view === 'create') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">New flashcard set</h2>
          <button onClick={() => { resetBuilder(); setView('list') }} className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">← Cancel</button>
        </div>

        {mode === 'choose' && (
          <div className="grid sm:grid-cols-3 gap-4">
            {([
              ['ai', '✨', 'Generate with AI', 'Pick a topic — Claude drafts the cards for you to review.'],
              ['import', '📋', 'Import / paste', 'Paste from Quizlet or a spreadsheet (term, definition per line).'],
              ['manual', '✏️', 'Create manually', 'Type each card yourself.'],
            ] as [Mode, string, string, string][]).map(([m, icon, label, desc]) => (
              <button key={m} onClick={() => chooseMode(m)} className="text-left p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 bg-white dark:bg-gray-800 transition-all">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-gray-900 dark:text-white">{label}</div>
                <div className="text-xs text-gray-500 mt-1">{desc}</div>
              </button>
            ))}
          </div>
        )}

        {mode === 'ai' && (
          <div className="space-y-3 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="grid sm:grid-cols-[1fr,auto] gap-3">
              <input value={aiTopic} onChange={(e) => setAiTopic(e.target.value)} placeholder="Topic, e.g. Limits and continuity" className="px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white" />
              <input type="number" min={3} max={40} value={aiCount} onChange={(e) => setAiCount(e.target.value)} title="Number of cards" className="w-24 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white" />
            </div>
            <button onClick={runGenerate} disabled={generating || !aiTopic.trim()} className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-50">
              {generating ? 'Generating…' : '✨ Generate cards'}
            </button>
            <p className="text-xs text-gray-400">Review and edit everything before saving — AI can make mistakes.</p>
          </div>
        )}

        {mode === 'import' && (
          <div className="space-y-3 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Paste cards — one per line, term and definition separated by a tab or comma</label>
            <textarea value={pasteText} onChange={(e) => setPasteText(e.target.value)} rows={6} placeholder={'derivative\tinstantaneous rate of change\nintegral, area under a curve'} className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl font-mono text-sm dark:bg-gray-700 dark:text-white" />
            <button onClick={runImport} disabled={!pasteText.trim()} className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-50">Preview cards</button>
          </div>
        )}

        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

        {(cards.length > 0 || mode === 'manual') && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Set title *" className="px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white" />
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl dark:bg-gray-700 dark:text-white">
                <option value="">Subject (optional)</option>
                {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cards.length} card{cards.length !== 1 ? 's' : ''}</span>
                <button onClick={() => setCards((c) => [...c, { front: '', back: '' }])} className="text-sm text-purple-600 hover:text-purple-800 font-medium">+ Add card</button>
              </div>
              {cards.map((c, i) => (
                <div key={i} className="grid grid-cols-[1fr,1fr,auto] gap-2 items-start">
                  <textarea value={c.front} onChange={(e) => updateCard(i, 'front', e.target.value)} rows={2} placeholder="Front (term)" className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm dark:bg-gray-700 dark:text-white" />
                  <textarea value={c.back} onChange={(e) => updateCard(i, 'back', e.target.value)} rows={2} placeholder="Back (definition)" className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm dark:bg-gray-700 dark:text-white" />
                  <button onClick={() => removeCard(i)} className="px-2 py-1 text-red-500 hover:text-red-700" title="Remove">✕</button>
                </div>
              ))}
            </div>

            <button onClick={save} disabled={saving} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50">
              {saving ? 'Saving…' : 'Save set'}
            </button>
          </div>
        )}
      </div>
    )
  }

  // ── List view ────────────────────────────────────────────────────────────
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Flashcard sets</h2>
        <button onClick={() => { resetBuilder(); setView('create') }} className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 text-sm">+ New set</button>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading…</div>
      ) : sets.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-3">🗂️</div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">No flashcard sets yet</h3>
          <p className="text-gray-500 mt-1">Generate one with AI, import your existing cards, or create them by hand.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sets.map((s) => (
            <div key={s.id} className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white truncate">{s.title}</h4>
                    <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">{s.source}</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {s._count.cards} card{s._count.cards !== 1 ? 's' : ''}{s.subject ? ` · ${s.subject}` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => openAssign(s.id)} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700">Assign</button>
                  <a href={`/flashcard-sets/${s.id}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Study</a>
                  <button onClick={() => copyLink(s.id)} className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">{copiedId === s.id ? 'Copied!' : 'Copy link'}</button>
                  <button onClick={() => deleteSet(s.id, s.title)} className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">Delete</button>
                </div>
              </div>
              {assignFor === s.id && (
                <div className="mt-3 flex items-center gap-2">
                  <select
                    defaultValue=""
                    onChange={(e) => { if (e.target.value) assignToClass(s, e.target.value) }}
                    className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  >
                    <option value="" disabled>Assign to a class…</option>
                    {classrooms.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                  {classrooms.length === 0 && <span className="text-xs text-gray-400">You have no classes yet.</span>}
                </div>
              )}
              {assignMsg[s.id] && <p className="mt-2 text-xs text-green-600 dark:text-green-400">{assignMsg[s.id]}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
