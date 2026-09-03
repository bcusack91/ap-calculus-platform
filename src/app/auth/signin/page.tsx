'use client'

import { Suspense, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { trackLogin } from '@/lib/analytics'
import { pendingJoinUrl } from '@/lib/pending-join'

function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Honor `callbackUrl` so users following shared links (e.g.
  // /competitive/async/<id>) return to where they started after sign-in.
  // Only allow same-origin internal paths to avoid open-redirects.
  const rawCallback = searchParams?.get('callbackUrl') ?? ''
  const safeCallback =
    rawCallback.startsWith('/') && !rawCallback.startsWith('//')
      ? rawCallback
      : '/'

  // With no explicit callback, honor a pending class-join intent (persisted as
  // a cookie by /join-class) so students who detoured through auth still land
  // back in the join flow instead of on the homepage/dashboard. Resolved at
  // click time — cookies aren't readable during prerender.
  const resolveDestination = () => {
    if (safeCallback !== '/') return safeCallback
    return pendingJoinUrl() ?? safeCallback
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email.trim() || !password) {
      setError('Email and password are required')
      setIsLoading(false)
      return
    }

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
        setIsLoading(false)
        return
      }

      trackLogin('credentials')

      // Redirect back to the page the user originally tried to access.
      router.push(resolveDestination())
      router.refresh()
    } catch {
      setError('An error occurred during sign in')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-subtle to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={() => {
            trackLogin('google')
            signIn('google', { callbackUrl: resolveDestination() })
          }}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-gray-700 dark:text-gray-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Microsoft Entra SSO — shown only when configured (district Microsoft tenants). */}
        {process.env.NEXT_PUBLIC_MICROSOFT_SSO_ENABLED === 'true' && (
          <button
            type="button"
            onClick={() => {
              trackLogin('microsoft-entra-id')
              signIn('microsoft-entra-id', { callbackUrl: resolveDestination() })
            }}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-gray-700 dark:text-gray-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 23 23" aria-hidden="true">
              <path fill="#f25022" d="M1 1h10v10H1z" />
              <path fill="#7fba00" d="M12 1h10v10H12z" />
              <path fill="#00a4ef" d="M1 12h10v10H1z" />
              <path fill="#ffb900" d="M12 12h10v10H12z" />
            </svg>
            Continue with Microsoft
          </button>
        )}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white dark:bg-gray-800 text-gray-500">or sign in with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-4">
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
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-accent hover:text-accent-hover font-medium">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                href={
                  safeCallback && safeCallback !== '/'
                    ? `/auth/signup?callbackUrl=${encodeURIComponent(safeCallback)}`
                    : '/auth/signup'
                }
                className="text-accent hover:text-accent-hover font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SignInForm />
    </Suspense>
  )
}
