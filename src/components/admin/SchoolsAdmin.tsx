'use client'

import { useEffect, useState } from 'react'

interface School {
  id: string
  name: string
  district: string | null
  state: string | null
  _count: { classrooms: number; users: number }
}

export function SchoolsAdmin() {
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const load = () => {
    fetch('/api/admin/schools')
      .then((r) => r.json())
      .then((d) => setSchools(d.schools ?? []))
      .catch(() => setSchools([]))
      .finally(() => setLoading(false))
  }
  useEffect(load, [])

  const create = async () => {
    setSaving(true)
    setError('')
    try {
      const res = await fetch('/api/admin/schools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, district, state }),
      })
      const data = await res.json()
      if (!res.ok) setError(data.error || 'Could not create school.')
      else {
        setName(''); setDistrict(''); setState('')
        load()
      }
    } catch {
      setError('Could not create school.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Create schools and set their <span className="font-mono">district</span>. Teachers can then attach a class to
        a school when creating it, which populates the Districts rollup.
      </p>

      {/* Create form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">Add a school</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="School name"
            className="px-3 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm" />
          <input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="District (optional)"
            className="px-3 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm" />
          <input value={state} onChange={(e) => setState(e.target.value)} placeholder="State (optional)"
            className="px-3 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm" />
        </div>
        <div className="mt-3 flex items-center gap-3">
          <button onClick={create} disabled={saving || name.trim().length < 2}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50 text-sm">
            {saving ? 'Adding…' : 'Add school'}
          </button>
          {error && <span className="text-sm text-red-600 dark:text-red-400">{error}</span>}
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading schools…</div>
      ) : schools.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No schools yet. Add one above.</div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="py-3 px-4 font-semibold">School</th>
                <th className="py-3 px-4 font-semibold">District</th>
                <th className="py-3 px-4 font-semibold">State</th>
                <th className="py-3 px-4 font-semibold text-right">Classes</th>
                <th className="py-3 px-4 font-semibold text-right">Members</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((s) => (
                <tr key={s.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{s.name}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{s.district || <span className="text-gray-400">—</span>}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{s.state || <span className="text-gray-400">—</span>}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{s._count.classrooms}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{s._count.users}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
