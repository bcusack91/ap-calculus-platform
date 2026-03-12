'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

const ERROR_MESSAGES: Record<string, { title: string; description: string }> = {
  Configuration: {
    title: 'Server Configuration Error',
    description: 'There is a problem with the server configuration. Please contact support if this persists.',
  },
  AccessDenied: {
    title: 'Access Denied',
    description: 'You do not have permission to sign in. Please try a different account.',
  },
  Verification: {
    title: 'Verification Error',
    description: 'The verification token has expired or has already been used. Please try signing in again.',
  },
  OAuthSignin: {
    title: 'Google Sign-In Error',
    description: 'Could not start the Google sign-in process. Please try again.',
  },
  OAuthCallback: {
    title: 'Google Sign-In Error',
    description: 'There was a problem completing the Google sign-in. Please try again.',
  },
  OAuthCreateAccount: {
    title: 'Account Creation Error',
    description: 'Could not create your account via Google. Please try signing up with email instead.',
  },
  EmailCreateAccount: {
    title: 'Account Creation Error',
    description: 'Could not create your account. Please try again.',
  },
  Callback: {
    title: 'Sign-In Error',
    description: 'There was a problem during sign-in. Please try again.',
  },
  OAuthAccountNotLinked: {
    title: 'Account Already Exists',
    description: 'An account with this email already exists using a different sign-in method. Please sign in with the method you originally used.',
  },
  SessionRequired: {
    title: 'Session Required',
    description: 'Please sign in to access this page.',
  },
  Default: {
    title: 'Sign-In Error',
    description: 'An unexpected error occurred during sign-in. Please try again.',
  },
}

function AuthErrorContent() {
  const searchParams = useSearchParams()
  const errorCode = searchParams.get('error') || 'Default'
  const errorInfo = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.Default

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
        {/* Error icon */}
        <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {errorInfo.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {errorInfo.description}
          </p>
        </div>

        {errorCode !== 'Default' && (
          <p className="text-xs text-gray-400 dark:text-gray-400">
            Error code: {errorCode}
          </p>
        )}

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/auth/signin"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="w-full px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  )
}
