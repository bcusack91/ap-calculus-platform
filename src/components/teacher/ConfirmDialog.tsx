'use client'

import { useState } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { AlertTriangle } from 'lucide-react'

export interface ConfirmRequest {
  title: string
  message: string
  confirmLabel?: string
  /** Red styling for destructive actions (remove, archive). */
  danger?: boolean
  onConfirm: () => void | Promise<void>
}

/**
 * Accessible replacement for bare `confirm()` — focus-trapped, Escape to
 * cancel, and it awaits the action so the confirm button can show progress.
 *
 * Usage: keep a `ConfirmRequest | null` in state; render this once and set the
 * state wherever a confirm() used to be.
 */
export default function ConfirmDialog({
  request,
  onClose,
}: {
  request: ConfirmRequest | null
  onClose: () => void
}) {
  const [busy, setBusy] = useState(false)

  const run = async () => {
    if (!request) return
    setBusy(true)
    try {
      await request.onConfirm()
      onClose()
    } finally {
      setBusy(false)
    }
  }

  return (
    <FocusTrapDialog open={!!request} onClose={busy ? () => {} : onClose} title={request?.title ?? 'Confirm'}>
      {request && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            {request.danger && (
              <span className="mt-0.5 shrink-0 text-red-500 dark:text-red-400">
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              </span>
            )}
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{request.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{request.message}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              disabled={busy}
              className="flex-1 px-5 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={run}
              disabled={busy}
              className={`flex-1 px-5 py-2.5 font-semibold rounded-xl text-white disabled:opacity-50 transition-all ${
                request.danger ? 'bg-red-600 hover:bg-red-700' : 'bg-accent hover:bg-accent-hover'
              }`}
            >
              {busy ? 'Working…' : request.confirmLabel ?? 'Confirm'}
            </button>
          </div>
        </div>
      )}
    </FocusTrapDialog>
  )
}
