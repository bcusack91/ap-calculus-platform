'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isPremium = session?.user?.role === 'PREMIUM'

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
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>

        {/* Auth Section - Hidden for free launch */}
        <div className="flex items-center space-x-4">
          {/* Temporarily hidden for free tier launch
          {session ? (
            <div className="flex items-center space-x-4">
              {isPremium && (
                <span className="hidden md:inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                  Premium
                </span>
              )}
              <span className="hidden md:inline text-sm">{session.user?.name || session.user?.email}</span>
              <button
                onClick={() => signOut()}
                className="rounded-md px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => signIn()}
                className="rounded-md px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                Sign In
              </button>
              <Link
                href="/premium"
                className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
              >
                Get Premium
              </Link>
            </div>
          )}
          */}

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
            <Link href="/about" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">
              Contact
            </Link>
            {/* Temporarily hidden for free tier launch
            {isPremium && (
              <>
                <Link href="/adaptive-learning" className="block px-3 py-2 text-base font-medium text-purple-600 hover:bg-accent rounded-md">
                  Adaptive Learning
                </Link>
                <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-purple-600 hover:bg-accent rounded-md">
                  Dashboard
                </Link>
              </>
            )}
            {!isPremium && (
              <Link href="/premium" className="block px-3 py-2 text-base font-medium text-purple-600 hover:bg-accent rounded-md">
                Go Premium ⭐
              </Link>
            )}
            */}
          </div>
        </div>
      )}
    </nav>
  )
}
