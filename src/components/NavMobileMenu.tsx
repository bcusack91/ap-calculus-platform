'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import AvatarDisplay from './AvatarDisplay'
import type { AvatarData } from '@/types/avatar'
import type { Session } from 'next-auth'

interface CourseLink {
  slug: string
  name: string
  icon: string | null
}

interface NavMobileMenuProps {
  session: Session | null
  courses: CourseLink[]
  avatarData: AvatarData | null
  isTeacher: boolean
  isAdmin: boolean
  onClose: () => void
}

export function NavMobileMenu({ session, courses, avatarData, isTeacher, isAdmin, onClose }: NavMobileMenuProps) {
  return (
    <div className="md:hidden border-t" role="menu" aria-label="Mobile navigation">
      <div className="space-y-1 px-4 pb-3 pt-2">
        <Link href="/topics" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
          Topics
        </Link>
        {/* Mobile Courses List */}
        <div className="px-3 py-2">
          <div className="text-base font-medium text-gray-500 dark:text-gray-400 mb-1">Courses</div>
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="block pl-4 py-1.5 text-sm hover:bg-accent rounded-md"
              onClick={onClose}
            >
              {course.icon || '📚'} {course.name}
            </Link>
          ))}
        </div>
        <Link href="/flashcards" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
          Flashcards
        </Link>
        <Link href="/competitive" className="block px-3 py-2 text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-accent rounded-md" onClick={onClose}>
          🎮 Competitive Mode
        </Link>
        <Link href="/leaderboard" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
          🏆 Leaderboard
        </Link>
        <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-amber-600 dark:text-amber-400 hover:bg-accent rounded-md" onClick={onClose}>
          💎 Pricing
        </Link>
        <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
          About
        </Link>
        <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
          Contact
        </Link>
        <Link href="/search" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
          🔍 Search
        </Link>
        
        {/* Mobile Auth Section */}
        <div className="pt-4 border-t mt-2">
          {session ? (
            <div className="space-y-2">
              <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-accent rounded-md" onClick={onClose}>
                📊 Dashboard
              </Link>
              <Link href="/profile" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={onClose}>
                👤 Profile
              </Link>
              {isTeacher && (
                <Link href="/teacher" className="block px-3 py-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:bg-accent rounded-md" onClick={onClose}>
                  🏫 Teacher Dashboard
                </Link>
              )}
              {isAdmin && (
                <Link href="/admin" className="block px-3 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:bg-accent rounded-md" onClick={onClose}>
                  🛡️ Admin Panel
                </Link>
              )}
              <Link href="/profile" className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-md" onClick={onClose}>
                <AvatarDisplay avatarData={avatarData} size={40} className="ring-2 ring-purple-500 dark:ring-purple-400 rounded-full" />
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {session.user?.name || session.user?.email}
                </div>
              </Link>
              <button
                onClick={() => { onClose(); signOut() }}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                href="/auth/signin"
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md"
                onClick={onClose}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md text-center"
                onClick={onClose}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
