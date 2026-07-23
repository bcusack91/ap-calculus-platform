'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import AvatarDisplay from './AvatarDisplay'
import { Gamepad2, Trophy, Search } from 'lucide-react'
import type { AvatarData } from '@/types/avatar'
import type { Session } from 'next-auth'
import { courseMeta, sectionOrder, getCourseHref } from '@/data/course-metadata'

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
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  // Group courses by section
  const grouped: Record<string, CourseLink[]> = {}
  for (const course of courses) {
    const meta = courseMeta[course.slug]
    const section = meta?.section ?? 'Other'
    if (!grouped[section]) grouped[section] = []
    grouped[section].push(course)
  }

  const testPrepOrder = ['sat-prep', 'act-prep', 'mcat-prep']
  const testPrepCourses = (grouped['Test Prep'] ?? [])
    .slice()
    .sort((a, b) => {
      const ai = testPrepOrder.indexOf(a.slug)
      const bi = testPrepOrder.indexOf(b.slug)
      const aRank = ai === -1 ? 999 : ai
      const bRank = bi === -1 ? 999 : bi
      if (aRank !== bRank) return aRank - bRank
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="md:hidden border-t max-h-[calc(100vh-3.5rem)] overflow-y-auto overscroll-contain">
      <div className="space-y-1 px-4 pb-3 pt-2">
        <Link href="/topics" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          Topics
        </Link>
        <Link href="/for-teachers" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          For Teachers
        </Link>
        {/* Mobile Courses List — categorized */}
        <div className="px-3 py-2">
          <div className="text-base font-medium text-gray-500 dark:text-gray-400 mb-1">Courses</div>
          {testPrepCourses.length > 0 && (
            <div className="mb-2 rounded-md border border-accent-light dark:border-accent-light/50 p-2">
              <div className="px-2 py-1 text-xs font-bold uppercase tracking-wide text-accent dark:text-accent-muted">
                Test Prep
              </div>
              {testPrepCourses.map(course => (
                <Link
                  key={course.slug}
                  href={getCourseHref(course.slug)}
                  className="block pl-4 py-2.5 text-sm hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md"
                  onClick={onClose}
                >
                  {course.icon || '📚'} {course.name}
                </Link>
              ))}
            </div>
          )}

          {sectionOrder.filter(s => s !== 'Test Prep' && grouped[s]?.length).map(section => (
            <div key={section}>
              <button
                className="flex items-center justify-between w-full pl-4 pr-2 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md"
                onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                aria-expanded={expandedSection === section}
              >
                {section}
                <svg className={`h-3 w-3 transition-transform ${expandedSection === section ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === section && grouped[section].map(course => (
                <Link
                  key={course.slug}
                  href={getCourseHref(course.slug)}
                  className="block pl-8 py-2.5 text-sm hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md"
                  onClick={onClose}
                >
                  {course.icon || '📚'} {course.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Link href="/flashcards" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          Flashcards
        </Link>
        <Link href="/competitive" className="block px-3 py-2 text-base font-medium text-accent dark:text-accent-muted hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          <Gamepad2 className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden /> Competitive Mode
        </Link>
        <Link href="/leaderboard" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          <Trophy className="inline w-4 h-4 mr-1.5 -mt-0.5 text-amber-500" aria-hidden /> Leaderboard
        </Link>
        <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          About
        </Link>
        <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          Contact
        </Link>
        <Link href="/search" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
          <Search className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden /> Search
        </Link>
        
        {/* Mobile Auth Section */}
        <div className="pt-4 border-t mt-2">
          {session ? (
            <div className="space-y-2">
              <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-accent dark:text-accent-muted hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
                📊 Dashboard
              </Link>
              <Link href="/profile" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
                👤 Profile
              </Link>
              {isTeacher && (
                <Link href="/teacher" className="block px-3 py-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
                  🏫 Teacher Dashboard
                </Link>
              )}
              {isAdmin && (
                <Link href="/admin" className="block px-3 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
                  🛡️ Admin Panel
                </Link>
              )}
              <Link href="/profile" className="flex items-center gap-3 px-3 py-2 hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
                <AvatarDisplay avatarData={avatarData} size={40} className="ring-2 ring-accent dark:ring-accent-muted rounded-full" />
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {session.user?.name || session.user?.email}
                </div>
              </Link>
              <button
                onClick={() => { onClose(); signOut() }}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                href="/auth/signin"
                className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md"
                onClick={onClose}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-accent to-accent-secondary text-white rounded-md text-center"
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
