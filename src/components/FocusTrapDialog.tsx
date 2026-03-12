'use client'

import { ReactNode } from 'react'
import { useFocusTrap, useEscapeKey } from '@/lib/accessibility'

interface FocusTrapDialogProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  title: string
  className?: string
}

/**
 * Accessible dialog/modal wrapper with focus trapping and Escape key support.
 */
export default function FocusTrapDialog({ open, onClose, children, title, className }: FocusTrapDialogProps) {
  const containerRef = useFocusTrap(open)
  useEscapeKey(onClose, open)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto ${className || 'max-w-lg w-full mx-4'}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 z-10"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {children}
      </div>
    </div>
  )
}
