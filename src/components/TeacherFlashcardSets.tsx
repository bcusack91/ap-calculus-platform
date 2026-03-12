'use client'

import { useState } from 'react'

/**
 * #199: Teacher-Created Flashcard Sets
 * Teachers can create, manage, and share custom flashcard sets
 */

interface Flashcard {
  id: string
  front: string
  back: string
}

interface FlashcardSet {
  id: string
  title: string
  subject: string
  cards: Flashcard[]
  createdAt: string
  shareCode: string
}

function generateShareCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  const arr = new Uint8Array(6)
  crypto.getRandomValues(arr)
  for (let i = 0; i < 6; i++) code += chars[arr[i] % chars.length]
  return code
}

const SUBJECTS = ['AP Calculus', 'AP Chemistry', 'AP Biology', 'Algebra 1', 'Algebra 2', 'Geometry', 'AP Statistics', 'AP Physics', 'SAT Math', 'Other']

export function TeacherFlashcardSets() {
  const [sets, setSets] = useState<FlashcardSet[]>([
    {
      id: 'demo-1',
      title: 'Derivative Rules',
      subject: 'AP Calculus',
      createdAt: '2025-01-14',
      shareCode: 'DRVT42',
      cards: [
        { id: 'c1', front: 'Power Rule', back: 'd/dx [xⁿ] = nxⁿ⁻¹' },
        { id: 'c2', front: 'Product Rule', back: 'd/dx [f·g] = f\'g + fg\'' },
        { id: 'c3', front: 'Chain Rule', back: 'd/dx [f(g(x))] = f\'(g(x)) · g\'(x)' },
      ],
    },
  ])
  const [view, setView] = useState<'list' | 'create' | 'edit'>('list')
  const [editingSet, setEditingSet] = useState<FlashcardSet | null>(null)
  const [newTitle, setNewTitle] = useState('')
  const [newSubject, setNewSubject] = useState(SUBJECTS[0])
  const [newCards, setNewCards] = useState<Flashcard[]>([{ id: '1', front: '', back: '' }])
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const startCreate = () => {
    setNewTitle('')
    setNewSubject(SUBJECTS[0])
    setNewCards([{ id: '1', front: '', back: '' }])
    setView('create')
  }

  const startEdit = (set: FlashcardSet) => {
    setEditingSet(set)
    setNewTitle(set.title)
    setNewSubject(set.subject)
    setNewCards([...set.cards])
    setView('edit')
  }

  const addCard = () => {
    setNewCards(prev => [...prev, { id: Date.now().toString(), front: '', back: '' }])
  }

  const updateCard = (id: string, field: 'front' | 'back', value: string) => {
    setNewCards(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c))
  }

  const removeCard = (id: string) => {
    setNewCards(prev => prev.filter(c => c.id !== id))
  }

  const saveSet = () => {
    if (!newTitle.trim()) return
    const validCards = newCards.filter(c => c.front.trim() && c.back.trim())
    if (validCards.length === 0) return

    if (view === 'edit' && editingSet) {
      setSets(prev => prev.map(s => s.id === editingSet.id ? { ...s, title: newTitle.trim(), subject: newSubject, cards: validCards } : s))
    } else {
      const newSet: FlashcardSet = {
        id: Date.now().toString(),
        title: newTitle.trim(),
        subject: newSubject,
        cards: validCards,
        createdAt: new Date().toISOString().split('T')[0],
        shareCode: generateShareCode(),
      }
      setSets(prev => [newSet, ...prev])
    }
    setView('list')
    setEditingSet(null)
  }

  const deleteSet = (id: string) => {
    setSets(prev => prev.filter(s => s.id !== id))
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  if (view === 'create' || view === 'edit') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{view === 'edit' ? '✏️ Edit' : '➕ Create'} Flashcard Set</h2>
          <button onClick={() => { setView('list'); setEditingSet(null) }} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">← Back</button>
        </div>

        <div className="space-y-3 mb-4">
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Set title..." maxLength={80}
            className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <select value={newSubject} onChange={(e) => setNewSubject(e.target.value)}
            className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Cards ({newCards.length})</h3>
        <div className="space-y-2 mb-4 max-h-[400px] overflow-y-auto">
          {newCards.map((card, i) => (
            <div key={card.id} className="flex gap-2 items-start p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <span className="text-xs text-gray-400 pt-2 w-5">{i + 1}.</span>
              <div className="flex-1 space-y-1">
                <input value={card.front} onChange={(e) => updateCard(card.id, 'front', e.target.value)} placeholder="Front (term/question)" maxLength={200}
                  className="w-full px-2 py-1.5 text-xs border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                <input value={card.back} onChange={(e) => updateCard(card.id, 'back', e.target.value)} placeholder="Back (definition/answer)" maxLength={500}
                  className="w-full px-2 py-1.5 text-xs border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              {newCards.length > 1 && (
                <button onClick={() => removeCard(card.id)} className="text-red-400 hover:text-red-600 text-xs pt-2">✕</button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button onClick={addCard} className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">+ Add Card</button>
          <button onClick={saveSet}
            className="px-4 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={!newTitle.trim() || newCards.filter(c => c.front.trim() && c.back.trim()).length === 0}>
            💾 Save Set
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">🗂️ My Flashcard Sets</h2>
        <button onClick={startCreate} className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">+ New Set</button>
      </div>

      {sets.length === 0 ? (
        <p className="text-center text-gray-400 dark:text-gray-500 py-8 text-sm">No flashcard sets yet. Create one to get started!</p>
      ) : (
        <div className="space-y-3">
          {sets.map(set => (
            <div key={set.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{set.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{set.subject} • {set.cards.length} cards • Created {set.createdAt}</p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => startEdit(set)} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400">Edit</button>
                  <button onClick={() => deleteSet(set.id)} className="text-xs px-2 py-1 bg-red-50 dark:bg-red-900/20 rounded hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500">Delete</button>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-gray-400">Share code:</span>
                <code className="text-xs font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-400">{set.shareCode}</code>
                <button onClick={() => copyCode(set.shareCode)} className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                  {copiedCode === set.shareCode ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Preview first 3 cards */}
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                {set.cards.slice(0, 3).map(card => (
                  <div key={card.id} className="flex-shrink-0 w-40 p-2 bg-gray-50 dark:bg-gray-700/50 rounded text-[10px]">
                    <p className="font-medium text-gray-900 dark:text-white truncate">{card.front}</p>
                    <p className="text-gray-500 dark:text-gray-400 truncate mt-0.5">{card.back}</p>
                  </div>
                ))}
                {set.cards.length > 3 && (
                  <div className="flex-shrink-0 w-20 p-2 bg-gray-50 dark:bg-gray-700/50 rounded flex items-center justify-center text-[10px] text-gray-400">
                    +{set.cards.length - 3} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
