'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import AvatarDisplay from '@/components/AvatarDisplay'
import { PRESET_AVATARS, AvatarData } from '@/types/avatar'

export default function SignUpPage() {
  const router = useRouter()
  const [step, setStep] = useState(1) // 1: account details, 2: avatar selection
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarData | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (step === 1) {
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
          avatarData: selectedAvatar 
        }),
      })

      const signupData = await signupResponse.json()

      if (!signupResponse.ok) {
        setError(signupData.error || 'Failed to create account')
        setIsLoading(false)
        return
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

      // Redirect to homepage
      router.push('/')
      router.refresh()
    } catch (err) {
      setError('An error occurred during sign up')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {step === 1 ? 'Create Account' : 'Choose Your Avatar'}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {step === 1 ? 'Start your learning journey today' : 'Pick an avatar that represents you'}
          </p>
          
          {/* Step indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className={`h-2 w-20 rounded-full ${step === 1 ? 'bg-purple-600' : 'bg-purple-200 dark:bg-purple-900'}`} />
            <div className={`h-2 w-20 rounded-full ${step === 2 ? 'bg-purple-600' : 'bg-purple-200 dark:bg-purple-900'}`} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30'
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
                  onClick={() => router.push('/profile')}
                  className="text-purple-600 dark:text-purple-400 hover:underline text-sm"
                >
                  Or customize your own avatar later →
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
                className="flex-1 px-6 py-3 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating account...' : step === 1 ? 'Next' : 'Create Account'}
            </button>
          </div>

          {step === 1 && (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <Link href="/auth/signin" className="text-purple-600 hover:text-purple-700 font-semibold">
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
