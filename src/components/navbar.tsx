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
            <span className="text-xl font-bold">📐 Calculus Hub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/topics" className="transition-colors hover:text-foreground/80">
              Topics
            </Link>
            <Link href="/flashcards" className="transition-colors hover:text-foreground/80">
              Flashcards
            </Link>
            {isPremium && (
              <>
                <Link href="/adaptive-learning" className="transition-colors hover:text-foreground/80 text-purple-600">
                  Adaptive Learning
                </Link>
                <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-purple-600">
                  Dashboard
                </Link>
              </>
            )}
            {!isPremium && (
              <Link href="/premium" className="transition-colors hover:text-foreground/80 text-purple-600 font-semibold">
                Go Premium ⭐
              </Link>
            )}
          </nav>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
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
          </div>
        </div>
      )}
    </nav>
  )
}
