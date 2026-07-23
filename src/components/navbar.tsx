'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffectiveRole } from '@/lib/use-effective-role'
import { useState, useEffect, useRef, useCallback } from 'react'
import ThemeToggle from './ThemeToggle'
import { AvatarData } from '@/types/avatar'
import { NavMobileMenu } from './NavMobileMenu'
import { NavUserMenu } from './NavUserMenu'
import { NotificationBell } from './NotificationBell'

import { courseMeta, sectionOrder, getCourseHref } from '@/data/course-metadata'

interface CourseLink {
  slug: string
  name: string
  icon: string | null
}

/**
 * Static course list — mirrors the seeded DB courses (slug → display name) so the
 * Courses dropdown renders instantly and keeps working even if JS fetches fail.
 * Icons and sections come from the shared course metadata.
 */
const STATIC_COURSE_NAMES: Record<string, string> = {
  'grade-4-math': 'Grade 4 Math',
  'grade-5-math': 'Grade 5 Math',
  'grade-6-math': 'Grade 6 Math',
  'grade-7-math': 'Grade 7 Math',
  'grade-8-math': 'Grade 8 Math',
  'pre-algebra': 'Pre-Algebra',
  'algebra-1': 'Algebra 1',
  'geometry': 'Geometry',
  'algebra-2': 'Algebra 2',
  'ap-precalculus': 'AP Precalculus',
  'ap-calculus-ab': 'AP Calculus AB',
  'ap-calculus-bc': 'AP Calculus BC',
  'ap-statistics': 'AP Statistics',
  'ap-physics-1': 'AP Physics 1',
  'ap-physics-2': 'AP Physics 2',
  'ap-physics-c-mechanics': 'AP Physics C: Mechanics',
  'ap-physics-c-em': 'AP Physics C: Electricity & Magnetism',
  'ap-chemistry': 'AP Chemistry',
  'ap-biology': 'AP Biology',
  'ap-psychology': 'AP Psychology',
  'organic-chemistry': 'Organic Chemistry',
  'organic-chemistry-1': 'Organic Chemistry 1',
  'organic-chemistry-2': 'Organic Chemistry 2',
  'ap-environmental-science': 'AP Environmental Science',
  'ap-human-geography': 'AP Human Geography',
  'ap-us-government': 'AP United States Government and Politics',
  'ap-world-history': 'AP World History: Modern',
  'ap-us-history': 'AP United States History',
  'ap-macroeconomics': 'AP Macroeconomics',
  'ap-microeconomics': 'AP Microeconomics',
  'ap-african-american-studies': 'AP African American Studies',
  'ap-english-literature': 'AP English Literature and Composition',
  'ap-english-language': 'AP English Language and Composition',
  'ap-computer-science-a': 'AP Computer Science A',
  'ap-computer-science-principles': 'AP Computer Science Principles',
  'sat-prep': 'SAT Prep',
  'act-prep': 'ACT Prep',
  'mcat-prep': 'MCAT Prep',
}

const STATIC_COURSES: CourseLink[] = Object.entries(STATIC_COURSE_NAMES).map(([slug, name]) => ({
  slug,
  name,
  icon: courseMeta[slug]?.icon ?? null,
}))

/** Arrow-key navigation inside dropdown menus */
function useDropdownKeyNav(containerRef: React.RefObject<HTMLDivElement | null>, isOpen: boolean) {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen || !containerRef.current) return
    const items = containerRef.current.querySelectorAll<HTMLElement>('a, button:not([aria-haspopup])')
    if (items.length === 0) return

    const idx = Array.from(items).indexOf(document.activeElement as HTMLElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      items[(idx + 1) % items.length].focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      items[(idx - 1 + items.length) % items.length].focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      items[0].focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      items[items.length - 1].focus()
    }
  }, [isOpen, containerRef])

  return handleKeyDown
}

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [moreOpen, setMoreOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const coursesRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)

  const coursesKeyNav = useDropdownKeyNav(coursesRef, coursesOpen)
  const moreKeyNav = useDropdownKeyNav(moreRef, moreOpen)

  // isPremium honors an admin "View as…" override; teacher/admin stay on the real role.
  const isPremium = useEffectiveRole().isPremium
  const isTeacher = session?.user?.role === 'TEACHER' || session?.user?.role === 'ADMIN'
  const isAdmin = session?.user?.role === 'ADMIN'

  // Courses render synchronously from static metadata — only the avatar is dynamic.
  // Fetch it for signed-in users, cached in sessionStorage with TTL.
  useEffect(() => {
    if (!session) return
    const cacheKey = 'navData-auth'
    const cached = sessionStorage.getItem(cacheKey)
    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        // Use cached data if under 30 minutes old
        if (parsed._ts && Date.now() - parsed._ts < 30 * 60 * 1000) {
          if (parsed.avatarData) {
            const timeoutId = setTimeout(() => setAvatarData(parsed.avatarData), 0)
            return () => clearTimeout(timeoutId)
          }
          return
        }
      } catch { /* fetch fresh */ }
    }

    fetch('/api/navbar')
      .then(res => res.json())
      .then(data => {
        if (data.avatarData) setAvatarData(data.avatarData)
        sessionStorage.setItem(cacheKey, JSON.stringify({ avatarData: data.avatarData ?? null, _ts: Date.now() }))
      })
      .catch(err => console.error('Error fetching navbar data:', err))
  }, [session])

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setCoursesOpen(false)
        setExpandedSection(null)
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setCoursesOpen(false)
        setMoreOpen(false)
        setUserMenuOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const chevronSvg = (open: boolean) => (
    <svg className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )

  return (
    <header role="banner" className="sticky top-0 z-50">
    <nav aria-label="Main navigation" className="w-full border-b bg-white dark:bg-gray-950">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex flex-1 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-block align-middle" style={{ width: 32, height: 32 }}>
              {/* Mascot: Smiling Book SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
                <rect width="32" height="32" rx="7" fill="url(#g)"/>
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#2563EB"/>
                  </linearGradient>
                </defs>
                <rect x="7" y="10" width="18" height="12" rx="2.5" fill="#fff" stroke="#7C3AED" strokeWidth="1.2"/>
                <rect x="9" y="12" width="14" height="8" rx="1.5" fill="#e0e7ff"/>
                <path d="M9 12 Q16 14.5 23 12" fill="none" stroke="#7C3AED" strokeWidth="0.7"/>
                <ellipse cx="13" cy="16" rx="1.2" ry="1.5" fill="#7C3AED"/>
                <ellipse cx="19" cy="16" rx="1.2" ry="1.5" fill="#7C3AED"/>
                <path d="M13.5 19 Q16 20.8 18.5 19" stroke="#7C3AED" strokeWidth="0.7" fill="none"/>
              </svg>
            </span>
            <span className="text-xl font-bold">Study Mondo</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 text-sm font-medium">
            <Link href="/topics" className="transition-colors hover:text-foreground/80">
              Topics
            </Link>
            <Link href="/for-teachers" className="transition-colors hover:text-foreground/80">
              For Teachers
            </Link>

            {/* Courses Dropdown */}
            <div ref={coursesRef} className="relative" onKeyDown={coursesKeyNav}>
              <button
                onClick={() => { setCoursesOpen(!coursesOpen); setMoreOpen(false); setUserMenuOpen(false) }}
                className="transition-colors hover:text-foreground/80 flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={coursesOpen}
              >
                Courses
                {chevronSvg(coursesOpen)}
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50 max-h-[70vh] overflow-y-auto">
                  {(() => {
                    // Group courses by section from courseMeta
                    const grouped: Record<string, CourseLink[]> = {}
                    for (const course of STATIC_COURSES) {
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
                      <>
                        {testPrepCourses.length > 0 && (
                          <div className="px-2 pb-2 mb-2 border-b border-gray-100 dark:border-gray-700">
                            <div className="px-2 py-1 text-xs font-bold uppercase tracking-wide text-accent dark:text-accent-muted">
                              Test Prep
                            </div>
                            {testPrepCourses.map(course => (
                              <Link
                                key={course.slug}
                                href={getCourseHref(course.slug)}
                                className="flex items-center gap-2 px-2 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 hover:text-accent-hover dark:hover:text-accent-muted transition-colors"
                                onClick={() => { setCoursesOpen(false); setExpandedSection(null) }}
                              >
                                <span>{course.icon || '📚'}</span>
                                {course.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {sectionOrder
                          .filter(s => s !== 'Test Prep' && grouped[s]?.length)
                          .map(section => (
                            <div key={section}>
                              <button
                                className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                                aria-expanded={expandedSection === section}
                              >
                                {section}
                                <svg className={`h-3 w-3 transition-transform ${expandedSection === section ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {expandedSection === section && grouped[section].map(course => (
                                <Link
                                  key={course.slug}
                                  href={getCourseHref(course.slug)}
                                  className="flex items-center gap-2 pl-6 pr-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 hover:text-accent-hover dark:hover:text-accent-muted transition-colors"
                                  onClick={() => { setCoursesOpen(false); setExpandedSection(null) }}
                                >
                                  <span>{course.icon || '📚'}</span>
                                  {course.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                      </>
                    )
                  })()}
                </div>
              )}
            </div>

            <Link href="/flashcards" className="transition-colors hover:text-foreground/80">
              Flashcards
            </Link>
            <Link href="/competitive" className="transition-colors hover:text-foreground/80 text-accent dark:text-accent-muted font-semibold">
              🎮 Competitive
            </Link>
            {/* More Dropdown */}
            <div ref={moreRef} className="relative" onKeyDown={moreKeyNav}>
              <button
                onClick={() => { setMoreOpen(!moreOpen); setCoursesOpen(false); setExpandedSection(null); setUserMenuOpen(false) }}
                className="transition-colors hover:text-foreground/80 flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                More
                {chevronSvg(moreOpen)}
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link href="/leaderboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    🏆 Leaderboard
                  </Link>
                  <Link href="/study-groups" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    👥 Study Groups
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    ℹ️ About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    ✉️ Contact
                  </Link>
                </div>
              )}
            </div>

            <Link href="/search" className="transition-colors hover:text-foreground/80" title="Search" aria-label="Search">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            {session ? (
              /* User Menu Dropdown */
              <>
                <NotificationBell />
                <NavUserMenu
                session={session}
                avatarData={avatarData}
                isPremium={isPremium}
                isTeacher={isTeacher}
                isAdmin={isAdmin}
                isOpen={userMenuOpen}
                onToggle={() => { setUserMenuOpen(!userMenuOpen); setCoursesOpen(false); setExpandedSection(null); setMoreOpen(false) }}
                onClose={() => setUserMenuOpen(false)}
              />
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth/signin"
                  className="rounded-md px-4 py-2 text-sm font-medium hover:bg-accent bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent to-accent-secondary text-white hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <NavMobileMenu
          session={session}
          courses={STATIC_COURSES}
          avatarData={avatarData}
          isTeacher={isTeacher}
          isAdmin={isAdmin}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
    </header>
  )
}