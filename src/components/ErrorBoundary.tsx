'use client'

import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <ErrorState
          title="Something went wrong"
          message={this.state.error?.message || 'An unexpected error occurred'}
          onRetry={() => this.setState({ hasError: false, error: null })}
        />
      )
    }
    return this.props.children
  }
}

interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
  icon?: string
  className?: string
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  onRetry,
  icon = '😓',
  className = '',
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-12 px-4 ${className}`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-sm"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

interface EmptyStateProps {
  title: string
  message?: string
  icon?: string
  action?: { label: string; href: string }
  className?: string
}

export function EmptyState({
  title,
  message,
  icon = '📭',
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-12 px-4 ${className}`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h2>
      {message && <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-md">{message}</p>}
      {action && (
        <a
          href={action.href}
          className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-sm"
        >
          {action.label}
        </a>
      )}
    </div>
  )
}

export function LoadingState({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600 mb-4" />
      <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>
    </div>
  )
}
