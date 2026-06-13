'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import AvatarDisplay from './AvatarDisplay'
import { ViewAsToggle } from './ViewAsToggle'
import type { AvatarData } from '@/types/avatar'
import type { Session } from 'next-auth'
import { useRef, useCallback } from 'react'

interface NavUserMenuProps {
  session: Session
  avatarData: AvatarData | null
  isPremium: boolean
  isTeacher: boolean
  isAdmin: boolean
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export function NavUserMenu({ session, avatarData, isPremium, isTeacher, isAdmin, isOpen, onToggle, onClose }: NavUserMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen || !menuRef.current) return
    const items = menuRef.current.querySelectorAll<HTMLElement>('a, button:not([aria-haspopup])')
    if (items.length === 0) return
    const idx = Array.from(items).indexOf(document.activeElement as HTMLElement)
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length].focus() }
    else if (e.key === 'ArrowUp') { e.preventDefault(); items[(idx - 1 + items.length) % items.length].focus() }
    else if (e.key === 'Home') { e.preventDefault(); items[0].focus() }
    else if (e.key === 'End') { e.preventDefault(); items[items.length - 1].focus() }
  }, [isOpen])

  return (
    <div ref={menuRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 rounded-full pl-3 pr-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[120px] truncate">
          {session.user?.name || session.user?.email}
        </span>
        {isPremium && (
          <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 dark:from-purple-900 dark:to-blue-900 dark:text-purple-200">
            ✨ PRO
          </span>
        )}
        <AvatarDisplay avatarData={avatarData} size={34} className="ring-2 ring-purple-500 dark:ring-purple-400 rounded-full" />
      </button>
      {isOpen && (
        <div role="menu" className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
          {/* User info header */}
          <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{session.user?.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{session.user?.email}</p>
          </div>

          <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={onClose}>
            📊 Dashboard
          </Link>
          <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={onClose}>
            👤 Profile
          </Link>

          {isTeacher && (
            <>
              <div className="my-1 border-t border-gray-100 dark:border-gray-700" />
              <Link href="/teacher" className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors" onClick={onClose}>
                🏫 Teacher Dashboard
              </Link>
            </>
          )}
          {isAdmin && (
            <Link href="/admin" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors" onClick={onClose}>
              🛡️ Admin Panel
            </Link>
          )}

          {isAdmin && <ViewAsToggle />}

          <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

          <button
            onClick={() => { onClose(); signOut() }}
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            🚪 Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
