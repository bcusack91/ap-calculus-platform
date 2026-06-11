'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import FocusTrapDialog from '@/components/FocusTrapDialog'

interface DeleteAccountDialogProps {
  open: boolean
  onClose: () => void
}

/**
 * Confirmation dialog for permanent account deletion.
 *
 * Credentials accounts confirm with their current password; OAuth-only
 * accounts (no password) type "DELETE MY ACCOUNT" into the same field.
 * The server decides which form of evidence applies.
 */
export default function DeleteAccountDialog({ open, onClose }: DeleteAccountDialogProps) {
  const [confirmValue, setConfirmValue] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    if (submitting) return
    setConfirmValue('')
    setError(null)
    onClose()
  }

  const handleDelete = async () => {
    if (!confirmValue || submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const response = await fetch('/api/account/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        // Send the single field as both credentials — the server uses the
        // password for credentials accounts and the confirmation phrase for
        // OAuth-only accounts.
        body: JSON.stringify({ password: confirmValue, confirmation: confirmValue }),
      })

      if (response.ok) {
        // Account is gone — end the session and land on the homepage.
        await signOut({ callbackUrl: '/?accountDeleted=1' })
        return
      }

      const data = await response.json().catch(() => null)
      setError(data?.error || 'Failed to delete account. Please try again.')
      setSubmitting(false)
    } catch {
      setError('Something went wrong. Please check your connection and try again.')
      setSubmitting(false)
    }
  }

  return (
    <FocusTrapDialog open={open} onClose={handleClose} title="Delete account">
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-3">
          Delete account
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          This permanently deletes your account and all associated data — progress,
          quiz history, flashcard reviews, streaks, competitive stats, bookmarks,
          notes, and study plans. Any active premium subscription is canceled
          immediately. <strong>This cannot be undone.</strong>
        </p>

        <label
          htmlFor="delete-account-confirm"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
        >
          Current password
        </label>
        <input
          id="delete-account-confirm"
          type="password"
          autoComplete="current-password"
          value={confirmValue}
          onChange={(e) => setConfirmValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleDelete()
          }}
          disabled={submitting}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">
          Signed up with Google (no password)? Type{' '}
          <span className="font-mono font-semibold">DELETE MY ACCOUNT</span> instead.
        </p>

        {error && (
          <div
            role="alert"
            className="mb-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm"
          >
            {error}
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleClose}
            disabled={submitting}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={submitting || !confirmValue}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Deleting…' : 'Permanently delete account'}
          </button>
        </div>
      </div>
    </FocusTrapDialog>
  )
}
