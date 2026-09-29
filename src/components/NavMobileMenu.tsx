'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import AvatarDisplay from './AvatarDisplay'
import { Trophy, Search, Users, Info, Mail, CreditCard, LayoutGrid, User, Shield, LogOut, CircleHelp } from 'lucide-react'
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
  /** Signed-in student in an active class — shows "My Class" (→ /assignments). */
  isClassStudent?: boolean
  /** Show the "For Teachers" marketing link (signed out / non-class students). */
  showForTeachers?: boolean
  onClose: () => void
}

export function NavMobileMenu({ session, courses, avatarData, isTeacher, isAdmin, isClassStudent = false, showForTeachers = !session, onClose }: NavMobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const linkClass = (href: string) =>
    `block px-3 py-2 text-base rounded-md hover:bg-accent-subtle dark:hover:bg-accent-light/30 ${
      isActive(href) ? 'font-semibold text-accent dark:text-accent-muted' : 'font-medium text-gray-700 dark:text-gray-200'
    }`

  // Lock body scroll while the menu panel is open (this component only mounts when open)
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

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
    <div className="md:hidden border-t max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
      <div className="space-y-1 px-4 pb-3 pt-2">
        {/* Signed-out: account actions first, not buried under 40 courses */}
        {!session && (
          <div className="grid grid-cols-2 gap-2 pb-3 mb-1 border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/auth/signin"
              className="block px-3 py-2 text-base font-medium text-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
              onClick={onClose}
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="block px-3 py-2 text-base font-medium text-center rounded-md bg-gradient-to-r from-accent to-accent-secondary text-white hover:from-accent-hover hover:to-accent-secondary-hover"
              onClick={onClose}
            >
              Sign Up
            </Link>
          </div>
        )}
        {/* Signed-in: the next study step comes first */}
        {session && (
          <Link href="/dashboard" className={linkClass('/dashboard')} onClick={onClose}>
            Dashboard
          </Link>
        )}
        {session && isTeacher && (
          <Link href="/teacher" className={linkClass('/teacher')} onClick={onClose}>
            My Classes
          </Link>
        )}
        {session && !isTeacher && isClassStudent && (
          <Link href="/assignments" className={linkClass('/assignments')} onClick={onClose}>
            My Class
          </Link>
        )}
        {/* Mobile Courses List — categorized */}
        <div className="px-3 py-2">
          <div className="text-base font-medium text-gray-500 dark:text-gray-400 mb-1">Courses</div>
          <Link
            href="/topics"
            className={`flex items-center gap-2 pl-4 py-2.5 mb-1 text-sm rounded-md hover:bg-accent-subtle dark:hover:bg-accent-light/30 ${
              isActive('/topics') ? 'font-semibold text-accent dark:text-accent-muted' : 'font-semibold text-gray-900 dark:text-gray-100'
            }`}
            onClick={onClose}
          >
            <LayoutGrid className="w-4 h-4 text-accent dark:text-accent-muted" aria-hidden /> All courses
          </Link>
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
        {showForTeachers && (
          <Link href="/for-teachers" className={linkClass('/for-teachers')} onClick={onClose}>
            For Teachers
          </Link>
        )}
        <Link href="/flashcards" className={linkClass('/flashcards')} onClick={onClose}>
          Flashcards
        </Link>
        <Link href="/competitive" className={linkClass('/competitive')} onClick={onClose}>
          Competitive
        </Link>
        <Link href="/leaderboard" className={linkClass('/leaderboard')} onClick={onClose}>
          <Trophy className="inline w-4 h-4 mr-1.5 -mt-0.5 text-amber-500" aria-hidden /> Leaderboard
        </Link>
        <Link href="/study-groups" className={linkClass('/study-groups')} onClick={onClose}>
          <Users className="inline w-4 h-4 mr-1.5 -mt-0.5 text-accent" aria-hidden /> Study Groups
        </Link>
        <Link href="/pricing" className={linkClass('/pricing')} onClick={onClose}>
          <CreditCard className="inline w-4 h-4 mr-1.5 -mt-0.5 text-accent" aria-hidden /> Pricing
        </Link>
        <Link href="/help" className={linkClass('/help')} onClick={onClose}>
          <CircleHelp className="inline w-4 h-4 mr-1.5 -mt-0.5 text-accent" aria-hidden /> Help &amp; getting started
        </Link>
        <Link href="/about" className={linkClass('/about')} onClick={onClose}>
          <Info className="inline w-4 h-4 mr-1.5 -mt-0.5 text-accent" aria-hidden /> About
        </Link>
        <Link href="/contact" className={linkClass('/contact')} onClick={onClose}>
          <Mail className="inline w-4 h-4 mr-1.5 -mt-0.5 text-accent" aria-hidden /> Contact
        </Link>
        <Link href="/search" className={linkClass('/search')} onClick={onClose}>
          <Search className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden /> Search
        </Link>
        
        {/* Mobile account section (signed in) */}
        {session && (
          <div className="pt-4 border-t mt-2 space-y-2">
            <Link href="/profile" className="block px-3 py-2 text-base font-medium hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
              <User className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden /> Profile
            </Link>
            {isAdmin && (
              <Link href="/admin" className="block px-3 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:bg-accent-subtle dark:hover:bg-accent-light/30 rounded-md" onClick={onClose}>
                <Shield className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden /> Admin Panel
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
              <LogOut className="inline w-4 h-4 mr-1.5 -mt-0.5" aria-hidden /> Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
