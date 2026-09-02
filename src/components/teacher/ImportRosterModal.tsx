'use client'

import { useState } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { parseRoster, MAX_ROSTER_ROWS, type ParsedRosterRow } from '@/lib/roster-parse'
import { AlertTriangle, CheckCircle2, FileText, Upload } from 'lucide-react'

interface ImportSummary {
  totalRows: number
  added: number
  reactivated: number
  alreadyMembers: number
  newAccounts: number
  invalid: string[]
}

/**
 * CSV roster import with a review step: the pasted/uploaded text is parsed
 * client-side (with the same parser the API uses), the teacher sees exactly
 * which rows will be added and which lines will be skipped, and only then
 * confirms. Previously paste went straight to commit and invalid lines were
 * only counted, never shown.
 */
export default function ImportRosterModal({
  open,
  onClose,
  classroomId,
  joinCode,
  onImported,
}: {
  open: boolean
  onClose: () => void
  classroomId: string
  joinCode: string
  onImported: () => void
}) {
  const [step, setStep] = useState<'input' | 'preview' | 'done'>('input')
  const [text, setText] = useState('')
  const [rows, setRows] = useState<ParsedRosterRow[]>([])
  const [invalid, setInvalid] = useState<string[]>([])
  const [importing, setImporting] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<ImportSummary | null>(null)

  const reset = () => {
    setStep('input')
    setText('')
    setRows([])
    setInvalid([])
    setError('')
    setResult(null)
  }

  const close = () => {
    reset()
    onClose()
  }

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const txt = await file.text()
    setText((prev) => (prev ? `${prev}\n${txt}` : txt))
    e.target.value = ''
  }

  const buildPreview = () => {
    setError('')
    const parsed = parseRoster(text)
    if (parsed.rows.length === 0 && parsed.invalid.length === 0) {
      setError('Nothing to import — paste at least one line.')
      return
    }
    setRows(parsed.rows)
    setInvalid(parsed.invalid)
    setStep('preview')
  }

  const confirmImport = async () => {
    setImporting(true)
    setError('')
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/import-roster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Import failed')
      } else {
        setResult(data.summary)
        setStep('done')
        onImported()
      }
    } catch {
      setError('Import failed. Please try again.')
    } finally {
      setImporting(false)
    }
  }

  return (
    <FocusTrapDialog open={open} onClose={close} title="Import students">
      <div className="p-4 sm:p-8 max-w-lg">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Import students</h2>

        {step === 'input' && (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Paste a list of students or upload a CSV. One per line — just the email, or{' '}
              <span className="font-mono">name, email</span>. A header row is ignored. You&rsquo;ll review the
              list before anything is added.
            </p>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={7}
              placeholder={'Ada Lovelace, ada@school.org\nalan@school.org\nGrace Hopper, grace@school.org'}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white font-mono text-sm"
            />

            <div className="flex items-center gap-3 mt-3">
              <label className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                Upload CSV
                <input type="file" accept=".csv,text/csv,text/plain" onChange={onFile} className="hidden" />
              </label>
              <span className="text-xs text-gray-400">Up to {MAX_ROSTER_ROWS} students per import</span>
            </div>

            <div className="mt-4 rounded-lg border border-accent-light dark:border-accent-light/40 bg-accent-subtle dark:bg-accent-light/10 p-3 text-xs text-gray-600 dark:text-gray-300">
              Students you add this way can sign in with their <strong>school Google or Microsoft account</strong>{' '}
              using the same email. You can also just share the join code{' '}
              <span className="font-mono font-bold text-accent">{joinCode}</span>.
            </div>

            {error && (
              <div className="mt-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm" role="alert">
                {error}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={close}
                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={buildPreview}
                disabled={!text.trim()}
                className="flex-1 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Preview import
              </button>
            </div>
          </>
        )}

        {step === 'preview' && (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {rows.length > 0
                ? `${rows.length} student${rows.length !== 1 ? 's' : ''} will be added or re-added. Review the list, then confirm.`
                : 'No valid rows were found — go back and check the format.'}
            </p>

            {rows.length > 0 && (
              <div className="max-h-56 overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.email} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                        <td className="py-1.5 px-3 text-gray-900 dark:text-white">{r.name || <span className="text-gray-400">—</span>}</td>
                        <td className="py-1.5 px-3 font-mono text-xs text-gray-600 dark:text-gray-300">{r.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {invalid.length > 0 && (
              <div className="mt-3 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-3">
                <p className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                  {invalid.length} line{invalid.length !== 1 ? 's' : ''} will be skipped (no valid email)
                </p>
                <ul className="space-y-0.5 max-h-24 overflow-y-auto">
                  {invalid.map((line, i) => (
                    <li key={i} className="font-mono text-xs text-amber-700 dark:text-amber-300 truncate">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {rows.length > MAX_ROSTER_ROWS && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
                That&rsquo;s {rows.length} students — the limit is {MAX_ROSTER_ROWS} per import. Split the list and import in batches.
              </p>
            )}

            {error && (
              <div className="mt-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm" role="alert">
                {error}
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep('input')}
                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                Back
              </button>
              <button
                onClick={confirmImport}
                disabled={rows.length === 0 || rows.length > MAX_ROSTER_ROWS || importing}
                className="flex-1 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {importing
                  ? 'Importing…'
                  : `Add ${rows.length} student${rows.length !== 1 ? 's' : ''}`}
              </button>
            </div>
          </>
        )}

        {step === 'done' && result && (
          <>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-1.5 font-semibold text-green-700 dark:text-green-400 mb-1">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Import complete
              </p>
              <ul className="space-y-0.5">
                <li>
                  {result.added} added
                  {result.newAccounts > 0 ? ` (${result.newAccounts} new account${result.newAccounts !== 1 ? 's' : ''})` : ''}
                </li>
                {result.reactivated > 0 && <li>{result.reactivated} re-added</li>}
                {result.alreadyMembers > 0 && <li>{result.alreadyMembers} already in this class</li>}
              </ul>
            </div>

            {result.invalid.length > 0 && (
              <div className="mt-3 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-3">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">
                  {result.invalid.length} line{result.invalid.length !== 1 ? 's' : ''} skipped (no valid email)
                </p>
                <ul className="space-y-0.5 max-h-24 overflow-y-auto">
                  {result.invalid.map((line, i) => (
                    <li key={i} className="font-mono text-xs text-amber-700 dark:text-amber-300 truncate">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={reset}
                className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                <span className="inline-flex items-center gap-1.5 justify-center">
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Import more
                </span>
              </button>
              <button
                onClick={close}
                className="flex-1 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all"
              >
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </FocusTrapDialog>
  )
}
