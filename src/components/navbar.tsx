'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import AvatarDisplay from './AvatarDisplay'
import { AvatarData } from '@/types/avatar'

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null)

  const isPremium = session?.user?.role === 'PREMIUM'

  // Fetch user's avatar when logged in (cached in sessionStorage)
  useEffect(() => {
    if (session) {
      // Try to get from cache first
      const cached = sessionStorage.getItem('userAvatar')
      if (cached) {
        try {
          setAvatarData(JSON.parse(cached))
          return
        } catch (e) {
          // Invalid cache, fetch fresh
        }
      }
      
      // Fetch only if not cached
      fetch('/api/user/avatar')
        .then(res => res.json())
        .then(data => {
          setAvatarData(data.avatarData)
          // Cache for this session
          if (data.avatarData) {
            sessionStorage.setItem('userAvatar', JSON.stringify(data.avatarData))
          }
        })
        .catch(err => console.error('Error fetching avatar:', err))
    } else {
      setAvatarData(null)
      sessionStorage.removeItem('userAvatar')
    }
  }, [session])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex flex-1 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="inline-block align-middle" style={{ width: 32, height: 32 }}>
              {/* Mascot: Smiling Book SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
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
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/topics" className="transition-colors hover:text-foreground/80">
              Topics
            </Link>
            <Link href="/flashcards" className="transition-colors hover:text-foreground/80">
              Flashcards
            </Link>
            <Link href="/competitive" className="transition-colors hover:text-foreground/80 text-purple-600 dark:text-purple-400 font-semibold">
              🎮 Competitive
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
            <Link href="/search" className="transition-colors hover:text-foreground/80" title="Search">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </nav>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 transition-colors">
                  Dashboard
                </Link>
                {isPremium && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Premium
                  </span>
                )}
                <span className="text-sm text-gray-700 dark:text-gray-300">{session.user?.name || session.user?.email}</span>
                
                {/* Avatar - clickable to go to profile */}
                <Link 
                  href="/profile"
                  className="flex items-center hover:opacity-80 transition-opacity"
                  title="Edit Profile"
                >
                  <AvatarDisplay avatarData={avatarData} size={40} className="ring-2 ring-purple-500 dark:ring-purple-400 rounded-full" />
                </Link>
                
                <button
                  onClick={() => signOut()}
                  className="rounded-md px-4 py-2 text-sm font-medium hover:bg-accent bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Sign Out
                </button>
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
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/topics" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Topics
            </Link>
            <Link href="/flashcards" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Flashcards
            </Link>
            <Link href="/competitive" className="block px-3 py-2 text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-accent rounded-md">
              🎮 Competitive Mode
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Contact
            </Link>
            <Link href="/search" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              🔍 Search
            </Link>
            
            {/* Mobile Auth Section */}
            <div className="pt-4 border-t mt-2">
              {session ? (
                <div className="space-y-2">
                  <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-purple-600 dark:text-purple-400 hover:bg-accent rounded-md">
                    📊 Dashboard
                  </Link>
                  <Link href="/profile" className="flex items-center gap-3 px-3 py-2 hover:bg-accent rounded-md">
                    <AvatarDisplay avatarData={avatarData} size={40} className="ring-2 ring-purple-500 dark:ring-purple-400 rounded-full" />
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {session.user?.name || session.user?.email}
                    </div>
                  </Link>
                  <button
                    onClick={() => signOut()}
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
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md text-center"
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
  )
}
