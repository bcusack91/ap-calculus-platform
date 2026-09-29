'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffectiveRole } from '@/lib/use-effective-role'
import { useState, useEffect, useRef, useCallback } from 'react'
import ThemeToggle from './ThemeToggle'
import { Trophy, Users, Info, Mail, CreditCard, LayoutGrid } from 'lucide-react'
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

/** Shared dropdown chevron — rotates when its menu/section is open */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

/** sessionStorage key for the signed-in navbar bootstrap (avatar + class membership). */
const NAV_CACHE_KEY = 'navData-auth'
const NAV_CACHE_TTL_MS = 30 * 60 * 1000
/** A "not in a class" answer expires sooner, so a freshly joined class shows "My Class" quickly. */
const NAV_CACHE_NOT_IN_CLASS_TTL_MS = 5 * 60 * 1000

interface NavCache {
  uid?: string
  avatarData?: AvatarData | null
  inClass?: boolean | null
  _ts?: number
}

function readNavCache(): NavCache | null {
  try {
    const raw = sessionStorage.getItem(NAV_CACHE_KEY)
    return raw ? (JSON.parse(raw) as NavCache) : null
  } catch {
    return null
  }
}

function writeNavCache(next: NavCache) {
  try {
    sessionStorage.setItem(NAV_CACHE_KEY, JSON.stringify({ ...next, _ts: Date.now() }))
  } catch { /* storage unavailable — non-fatal */ }
}

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
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null)
  // Is this signed-in student an active member of a class? null = not known yet
  // (render neither "My Class" nor "For Teachers" until it is, so the slot
  // never flips from one to the other).
  const [inClass, setInClass] = useState<boolean | null>(null)
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

  // Courses render synchronously from static metadata — only the avatar and the
  // class-membership flag are dynamic. Fetch them for signed-in users, cached in
  // sessionStorage (per user) with a TTL.
  const userId = session?.user?.id
  useEffect(() => {
    if (!userId) return
    const cached = readNavCache()
    if (cached && cached.uid === userId && cached._ts && typeof cached.inClass === 'boolean') {
      const ttl = cached.inClass ? NAV_CACHE_TTL_MS : NAV_CACHE_NOT_IN_CLASS_TTL_MS
      if (Date.now() - cached._ts < ttl) {
        const timeoutId = setTimeout(() => {
          setAvatarData(cached.avatarData ?? null)
          setInClass(cached.inClass ?? false)
        }, 0)
        return () => clearTimeout(timeoutId)
      }
    }

    let cancelled = false
    fetch('/api/navbar')
      .then(res => res.json())
      .then(data => {
        if (cancelled) return
        const nextInClass = data.inClass === true
        if (data.avatarData) setAvatarData(data.avatarData)
        setInClass(nextInClass)
        writeNavCache({ uid: userId, avatarData: data.avatarData ?? null, inClass: nextInClass })
      })
      .catch(err => {
        console.error('Error fetching navbar data:', err)
        if (!cancelled) setInClass(false)
      })
    return () => { cancelled = true }
  }, [userId])

  // Update the top-right avatar the instant it's changed on the profile page,
  // rather than waiting out the 30-minute sessionStorage cache. The profile save
  // dispatches 'avatar-updated' with the freshly stored avatarData.
  useEffect(() => {
    const onAvatarUpdated = (e: Event) => {
      const next = (e as CustomEvent).detail ?? null
      setAvatarData(next)
      // Keep the cached class-membership flag; only the avatar changed.
      const cached = readNavCache()
      writeNavCache({ ...cached, avatarData: next })
    }
    window.addEventListener('avatar-updated', onAvatarUpdated)
    return () => window.removeEventListener('avatar-updated', onAvatarUpdated)
  }, [])

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const activeTopClass = 'text-accent font-semibold underline underline-offset-8 decoration-2'
  const idleTopClass = 'text-gray-700 dark:text-gray-300 transition-colors hover:text-accent'
  const topLinkClass = (href: string) => (isActive(href) ? activeTopClass : idleTopClass)

  // Primary nav slots. Signed-in users get Dashboard first; the class slot is
  // "My Classes" for teachers and "My Class" for students in an active class.
  const isClassStudent = !!session && !isTeacher && inClass === true
  // "For Teachers" is marketing: signed-out visitors and signed-in non-class
  // students. Hidden while membership is still unknown (no swap flicker).
  const showForTeachers = !session || (!isTeacher && inClass === false)
  const coursesActive = isActive('/topics') || isActive('/courses')

  return (
    <header role="banner" className="sticky top-0 z-50">
    <nav aria-label="Main navigation" className="w-full border-b bg-white dark:bg-gray-950">
      <div className="container flex h-16 items-center">
        <div className="mr-2 md:mr-4 flex flex-1 items-center justify-between">
          <Link href="/" className="mr-2 md:mr-6 flex items-center space-x-2">
            <span className="inline-block align-middle" style={{ width: 32, height: 32 }}>
              {/* Mascot: Smiling Book SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
                <rect width="32" height="32" rx="7" fill="url(#brandGradNav)"/>
                <defs>
                  <linearGradient id="brandGradNav" x1="0" x2="1" y1="0" y2="1">
                    {/* CSS vars are invalid in SVG presentation ATTRIBUTES (browsers
                        fall back to black stops) — they only work as CSS properties. */}
                    <stop offset="0%" style={{ stopColor: 'var(--accent)' }}/>
                    <stop offset="100%" style={{ stopColor: 'var(--accent-secondary)' }}/>
                  </linearGradient>
                </defs>
                <rect x="7" y="10" width="18" height="12" rx="2.5" fill="#fff" stroke="var(--accent)" strokeWidth="1.2"/>
                <rect x="9" y="12" width="14" height="8" rx="1.5" fill="#e0e7ff"/>
                <path d="M9 12 Q16 14.5 23 12" fill="none" stroke="var(--accent)" strokeWidth="0.7"/>
                <ellipse cx="13" cy="16" rx="1.2" ry="1.5" fill="var(--accent)"/>
                <ellipse cx="19" cy="16" rx="1.2" ry="1.5" fill="var(--accent)"/>
                <path d="M13.5 19 Q16 20.8 18.5 19" stroke="var(--accent)" strokeWidth="0.7" fill="none"/>
              </svg>
            </span>
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">Study Mondo</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 text-sm font-medium">
            {session && (
              <Link href="/dashboard" className={topLinkClass('/dashboard')}>
                Dashboard
              </Link>
            )}
            {session && isTeacher && (
              <Link href="/teacher" className={topLinkClass('/teacher')}>
                My Classes
              </Link>
            )}
            {isClassStudent && (
              <Link href="/assignments" className={topLinkClass('/assignments')}>
                My Class
              </Link>
            )}

            {/* Courses Dropdown */}
            <div ref={coursesRef} className="relative" onKeyDown={coursesKeyNav}>
              <button
                onClick={() => { setCoursesOpen(!coursesOpen); setMoreOpen(false); setUserMenuOpen(false) }}
                className={`${coursesActive ? 'text-accent font-semibold' : 'text-gray-700 dark:text-gray-300'} transition-colors hover:text-accent flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded={coursesOpen}
              >
                Courses
                <Chevron open={coursesOpen} />
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
                        <div className="px-2 pb-2 mb-2 border-b border-gray-100 dark:border-gray-700">
                          <Link
                            href="/topics"
                            className="flex items-center gap-2 px-2 py-2 text-sm font-semibold rounded-md text-gray-900 dark:text-gray-100 hover:bg-accent-subtle dark:hover:bg-accent-light/30 hover:text-accent-hover dark:hover:text-accent-muted transition-colors"
                            onClick={() => { setCoursesOpen(false); setExpandedSection(null) }}
                          >
                            <LayoutGrid className="w-4 h-4 text-accent dark:text-accent-muted" aria-hidden />
                            All courses
                          </Link>
                        </div>
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
                                <Chevron open={expandedSection === section} />
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

            {showForTeachers && (
              <Link href="/for-teachers" className={topLinkClass('/for-teachers')}>
                For Teachers
              </Link>
            )}
            <Link href="/flashcards" className={topLinkClass('/flashcards')}>
              Flashcards
            </Link>
            {/* Secondary: same weight as every other item (no accent / icon). */}
            <Link href="/competitive" className={topLinkClass('/competitive')}>
              Competitive
            </Link>
            {/* More Dropdown */}
            <div ref={moreRef} className="relative" onKeyDown={moreKeyNav}>
              <button
                onClick={() => { setMoreOpen(!moreOpen); setCoursesOpen(false); setExpandedSection(null); setUserMenuOpen(false) }}
                className="text-gray-700 dark:text-gray-300 transition-colors hover:text-accent flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                More
                <Chevron open={moreOpen} />
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link href="/leaderboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    <Trophy className="w-4 h-4 text-amber-500" aria-hidden /> Leaderboard
                  </Link>
                  <Link href="/study-groups" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    <Users className="w-4 h-4 text-accent" aria-hidden /> Study Groups
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    <CreditCard className="w-4 h-4 text-accent" aria-hidden /> Pricing
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    <Info className="w-4 h-4 text-accent" aria-hidden /> About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    <Mail className="w-4 h-4 text-accent" aria-hidden /> Contact
                  </Link>
                </div>
              )}
            </div>

            <Link href="/search" className={isActive('/search') ? 'text-accent' : 'text-gray-700 dark:text-gray-300 transition-colors hover:text-accent'} title="Search" aria-label="Search">
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
                isClassStudent={isClassStudent}
                isOpen={userMenuOpen}
                onToggle={() => { setUserMenuOpen(!userMenuOpen); setCoursesOpen(false); setExpandedSection(null); setMoreOpen(false) }}
                onClose={() => setUserMenuOpen(false)}
              />
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth/signin"
                  className="rounded-md px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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

          {/* Mobile: compact Sign up next to the hamburger for signed-out visitors */}
          {!session && (
            <Link
              href="/auth/signup"
              className="md:hidden shrink-0 whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm font-semibold bg-gradient-to-r from-accent to-accent-secondary text-white hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
              data-testid="mobile-header-signup"
            >
              Sign up
            </Link>
          )}

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
          isClassStudent={isClassStudent}
          showForTeachers={showForTeachers}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
    </header>
  )
}