'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect, useRef } from 'react'
import AvatarDisplay from './AvatarDisplay'
import ThemeToggle from './ThemeToggle'
import { AvatarData } from '@/types/avatar'

interface CourseLink {
  slug: string
  name: string
  icon: string | null
}

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [courses, setCourses] = useState<CourseLink[]>([])
  const coursesRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const isPremium = session?.user?.role === 'PREMIUM'
  const isTeacher = session?.user?.role === 'TEACHER' || session?.user?.role === 'ADMIN'
  const isAdmin = session?.user?.role === 'ADMIN'

  // Fetch navbar data (courses + avatar) in a single request, cached in sessionStorage
  useEffect(() => {
    const cacheKey = session ? 'navData-auth' : 'navData-anon'
    const cached = sessionStorage.getItem(cacheKey)
    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        const timeoutId = setTimeout(() => {
          setCourses(parsed.courses ?? [])
          if (parsed.avatarData) setAvatarData(parsed.avatarData)
        }, 0)
        return () => clearTimeout(timeoutId)
      } catch { /* fetch fresh */ }
    }

    fetch('/api/navbar')
      .then(res => res.json())
      .then(data => {
        setCourses(data.courses ?? [])
        if (data.avatarData) setAvatarData(data.avatarData)
        sessionStorage.setItem(cacheKey, JSON.stringify(data))
      })
      .catch(err => console.error('Error fetching navbar data:', err))
  }, [session])

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setCoursesOpen(false)
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
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
    <header role="banner">
    <nav aria-label="Main navigation" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                <path d="M9 12 Q16 16 23 12" fill="none" stroke="#7C3AED" strokeWidth="0.7"/>
                <ellipse cx="13" cy="17" rx="1.2" ry="1.5" fill="#7C3AED"/>
                <ellipse cx="19" cy="17" rx="1.2" ry="1.5" fill="#7C3AED"/>
                <path d="M14.5 20 Q16 21.5 17.5 20" stroke="#7C3AED" strokeWidth="0.7" fill="none"/>
              </svg>
            </span>
            <span className="text-xl font-bold">Study Mondo</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5 text-sm font-medium" role="menubar">
            <Link href="/topics" className="transition-colors hover:text-foreground/80">
              Topics
            </Link>

            {/* Courses Dropdown */}
            <div ref={coursesRef} className="relative">
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      onClick={() => setCoursesOpen(false)}
                    >
                      <span>{course.icon || '📚'}</span>
                      {course.name}
                    </Link>
                  ))}
                  {courses.length === 0 && (
                    <div className="px-4 py-2 text-sm text-gray-500">Loading...</div>
                  )}
                </div>
              )}
            </div>

            <Link href="/flashcards" className="transition-colors hover:text-foreground/80">
              Flashcards
            </Link>
            <Link href="/competitive" className="transition-colors hover:text-foreground/80 text-purple-600 dark:text-purple-400 font-semibold">
              🎮 Competitive
            </Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-amber-600 dark:text-amber-400 font-semibold">
              💎 Pricing
            </Link>

            {/* More Dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => { setMoreOpen(!moreOpen); setCoursesOpen(false); setUserMenuOpen(false) }}
                className="transition-colors hover:text-foreground/80 flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                More
                {chevronSvg(moreOpen)}
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                  <Link href="/leaderboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    🏆 Leaderboard
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={() => setMoreOpen(false)}>
                    ℹ️ About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={() => setMoreOpen(false)}>
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
              <div ref={userMenuRef} className="relative">
                <button
                  onClick={() => { setUserMenuOpen(!userMenuOpen); setCoursesOpen(false); setMoreOpen(false) }}
                  className="flex items-center gap-2 rounded-full pl-3 pr-1 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-haspopup="true"
                  aria-expanded={userMenuOpen}
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
                {userMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50">
                    {/* User info header */}
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{session.user?.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{session.user?.email}</p>
                    </div>

                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={() => setUserMenuOpen(false)}>
                      📊 Dashboard
                    </Link>
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors" onClick={() => setUserMenuOpen(false)}>
                      👤 Profile
                    </Link>

                    {isTeacher && (
                      <>
                        <div className="my-1 border-t border-gray-100 dark:border-gray-700" />
                        <Link href="/teacher" className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors" onClick={() => setUserMenuOpen(false)}>
                          🏫 Teacher Dashboard
                        </Link>
                      </>
                    )}
                    {isAdmin && (
                      <Link href="/admin" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors" onClick={() => setUserMenuOpen(false)}>
                        🛡️ Admin Panel
                      </Link>
                    )}

                    <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

                    {!isPremium && (
                      <Link href="/pricing" className="flex items-center gap-2 px-4 py-2 text-sm text-amber-600 dark:text-amber-400 font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors" onClick={() => setUserMenuOpen(false)}>
                        💎 Upgrade to Premium
                      </Link>
                    )}

                    <button
                      onClick={() => { setUserMenuOpen(false); signOut() }}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      🚪 Sign Out
                    </button>
                  </div>
                )}
              </div>
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
                  className="rounded-md px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
        <div className="md:hidden border-t" role="menu" aria-label="Mobile navigation">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/topics" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {course.icon || '📚'} {course.name}
                </Link>
              ))}
            </div>
            <Link href="/flashcards" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Flashcards
            </Link>
            <Link href="/competitive" className="block px-3 py-2 text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              🎮 Competitive Mode
            </Link>
            <Link href="/leaderboard" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              🏆 Leaderboard
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-amber-600 dark:text-amber-400 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              💎 Pricing
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/search" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
              🔍 Search
            </Link>
            
            {/* Mobile Auth Section */}
            <div className="pt-4 border-t mt-2">
              {session ? (
                <div className="space-y-2">
                  <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    📊 Dashboard
                  </Link>
                  <Link href="/profile" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    👤 Profile
                  </Link>
                  {isTeacher && (
                    <Link href="/teacher" className="block px-3 py-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                      🏫 Teacher Dashboard
                    </Link>
                  )}
                  {isAdmin && (
                    <Link href="/admin" className="block px-3 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                      🛡️ Admin Panel
                    </Link>
                  )}
                  <Link href="/profile" className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    <AvatarDisplay avatarData={avatarData} size={40} className="ring-2 ring-purple-500 dark:ring-purple-400 rounded-full" />
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {session.user?.name || session.user?.email}
                    </div>
                  </Link>
                  <button
                    onClick={() => { setMobileMenuOpen(false); signOut() }}
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
    </header>
  )
}