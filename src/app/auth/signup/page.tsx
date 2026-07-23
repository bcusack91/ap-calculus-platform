'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import AvatarDisplay from '@/components/AvatarDisplay'
import { PRESET_AVATARS, AvatarData } from '@/types/avatar'
import { trackSignUp } from '@/lib/analytics'

function SignUpForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const rawCallback = searchParams?.get('callbackUrl') ?? ''
  const safeCallback =
    rawCallback.startsWith('/') && !rawCallback.startsWith('//')
      ? rawCallback
      : '/'
  const [step, setStep] = useState(1) // 1: account details, 2: avatar selection
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleContinue = async () => {
    setError('')

    if (step === 1) {
      if (!name.trim()) {
        setError('Full name is required')
        return
      }

      if (!email.trim()) {
        setError('Email is required')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address')
        return
      }

      const yr = Number(birthYear)
      const thisYear = new Date().getFullYear()
      if (!birthYear || !Number.isFinite(yr) || yr < 1900 || yr > thisYear) {
        setError('Please enter your birth year')
        return
      }

      if (!password) {
        setError('Password is required')
        return
      }

      if (!confirmPassword) {
        setError('Please confirm your password')
        return
      }

      // Validation for step 1
      if (password !== confirmPassword) {
        setError('Passwords do not match')
        return
      }

      if (password.length < 8) {
        setError('Password must be at least 8 characters')
        return
      }

      // Move to avatar selection
      setStep(2)
      return
    }

    // Step 2: Create account with avatar
    if (!selectedAvatar) {
      setError('Please select an avatar')
      return
    }
    await createAccount(selectedAvatar)
  }

  // Creates the account (avatar optional — the "skip" path passes null so
  // skipping no longer navigates away and destroys the signup).
  const createAccount = async (avatar: AvatarData | null) => {
    setError('')
    setIsLoading(true)

    try {
      // Create account
      const signupResponse = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          name,
          birthYear,
          avatarData: avatar ?? undefined
        }),
      })

      const signupData = await signupResponse.json()

      if (!signupResponse.ok) {
        setError(signupData.error || 'Failed to create account')
        setIsLoading(false)
        return
      }

      // Apply child-directed treatment immediately (the API also sets this
      // cookie server-side; setting it here covers the current page session).
      if (new Date().getFullYear() - Number(birthYear) < 13) {
        document.cookie = `mondo_u13=1; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`
      }

      // Auto-login after signup
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Account created but login failed. Please sign in manually.')
        setIsLoading(false)
        return
      }

      trackSignUp('credentials')

      // If the user was heading somewhere specific, honor it; otherwise send new
      // users through the guided onboarding wizard (course pick + first topic)
      // instead of dropping them back on the homepage.
      router.push(safeCallback !== '/' ? safeCallback : '/onboarding')
      router.refresh()
    } catch {
      setError('An error occurred during sign up')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            {step === 1 ? 'Create Account' : 'Choose Your Avatar'}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {step === 1 ? 'Start your learning journey today' : 'Pick an avatar that represents you'}
          </p>
          
          {/* Step indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className={`h-2 w-20 rounded-full ${step === 1 ? 'bg-accent' : 'bg-accent-light dark:bg-accent-light'}`} />
            <div className={`h-2 w-20 rounded-full ${step === 2 ? 'bg-accent' : 'bg-accent-light dark:bg-accent-light'}`} />
          </div>
        </div>

        <form noValidate onSubmit={(e) => { e.preventDefault(); handleContinue() }} className="mt-8 space-y-6">
          {step === 1 ? (
            // Step 1: Account Details
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Birth Year
                </label>
                <input
                  id="birthYear"
                  name="birthYear"
                  type="number"
                  inputMode="numeric"
                  min={1900}
                  max={new Date().getFullYear()}
                  required
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="e.g. 2012"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Helps us keep younger learners safe (limits ads & tracking for under-13s).
                </p>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Minimum 8 characters
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>
          ) : (
            // Step 2: Avatar Selection
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {PRESET_AVATARS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setSelectedAvatar({ ...preset.data, isPreset: true, preset: preset.id })}
                    className={`p-4 rounded-xl border-4 transition-all hover:scale-105 ${
                      selectedAvatar?.preset === preset.id
                        ? 'border-accent bg-accent-subtle dark:bg-accent-light/30'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                    }`}
                  >
                    <AvatarDisplay avatarData={{ ...preset.data, isPreset: true, preset: preset.id }} size={80} className="mx-auto mb-2" />
                    <p className="text-2xl text-center mb-1">{preset.emoji}</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                      {preset.name}
                    </p>
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => createAccount(null)}
                  disabled={isLoading}
                  className="text-accent dark:text-accent-muted hover:underline text-sm disabled:opacity-50"
                >
                  Skip for now — create my account →
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 px-6 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-all"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating account...' : step === 1 ? 'Next' : 'Create Account'}
            </button>
          </div>

          {step === 1 && (
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">or</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  trackSignUp('google')
                  signIn('google', { callbackUrl: safeCallback })
                }}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium text-gray-700 dark:text-gray-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </button>
              <p className="text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  href={
                    safeCallback && safeCallback !== '/'
                      ? `/auth/signin?callbackUrl=${encodeURIComponent(safeCallback)}`
                      : '/auth/signin'
                  }
                  className="text-accent hover:text-accent-hover font-semibold"
                >
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SignUpForm />
    </Suspense>
  )
}
