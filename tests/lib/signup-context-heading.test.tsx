// @vitest-environment jsdom
/**
 * The diagnostic sign-up wall says what the account is for, and its
 * "Already have an account? Sign in" link keeps the callback and context.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

const searchParams = new Map<string, string>()
const signInMock = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), refresh: vi.fn() }),
  useSearchParams: () => ({ get: (k: string) => searchParams.get(k) ?? null }),
}))
vi.mock('next-auth/react', () => ({ signIn: (...a: unknown[]) => signInMock(...a) }))
vi.mock('next/link', () => ({
  default: ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))
vi.mock('@/lib/analytics', () => ({ trackSignUp: vi.fn(), trackLogin: vi.fn() }))
vi.mock('@/components/AvatarDisplay', () => ({ default: () => null }))

import SignUpPage from '@/app/auth/signup/page'
import SignInPage from '@/app/auth/signin/page'

beforeEach(() => {
  searchParams.clear()
  signInMock.mockReset()
})
afterEach(cleanup)

describe('sign-up page context', () => {
  it('shows the contextual heading for reason=diagnostic', () => {
    searchParams.set('callbackUrl', '/calcab-diagnostic')
    searchParams.set('reason', 'diagnostic')
    searchParams.set('label', 'AP Calculus AB')
    render(<SignUpPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Create a free account to take the AP Calculus AB diagnostic' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/It takes 30 seconds\. Your results and study plan are saved/)).toBeInTheDocument()
    const signInLinks = screen.getAllByRole('link', { name: 'Sign in' })
    expect(signInLinks.length).toBeGreaterThan(0)
    for (const a of signInLinks) {
      expect(a.getAttribute('href')).toBe('/auth/signin?callbackUrl=%2Fcalcab-diagnostic&reason=diagnostic&label=AP%20Calculus%20AB')
    }
  })

  it('keeps the default heading with no reason', () => {
    render(<SignUpPage />)
    expect(screen.getByRole('heading', { level: 1, name: 'Create Account' })).toBeInTheDocument()
  })

  it('Google sign-up returns to the callback, or to onboarding by default', () => {
    searchParams.set('callbackUrl', '/calcab-diagnostic')
    render(<SignUpPage />)
    screen.getByRole('button', { name: /Sign up with Google/ }).click()
    expect(signInMock).toHaveBeenCalledWith('google', { callbackUrl: '/calcab-diagnostic' })
    cleanup()
    searchParams.clear()
    signInMock.mockReset()
    render(<SignUpPage />)
    screen.getByRole('button', { name: /Sign up with Google/ }).click()
    expect(signInMock).toHaveBeenCalledWith('google', { callbackUrl: '/onboarding' })
  })
})

describe('sign-in page context', () => {
  it('replaces "Welcome Back" with the matching heading', () => {
    searchParams.set('callbackUrl', '/calcab-diagnostic')
    searchParams.set('reason', 'diagnostic')
    searchParams.set('label', 'AP Calculus AB')
    render(<SignInPage />)
    expect(screen.getByRole('heading', { level: 1, name: 'Sign in to take the AP Calculus AB diagnostic' })).toBeInTheDocument()
    expect(screen.queryByText('Welcome Back')).toBeNull()
    expect(screen.getByRole('link', { name: 'Sign up' }).getAttribute('href')).toBe(
      '/auth/signup?callbackUrl=%2Fcalcab-diagnostic&reason=diagnostic&label=AP%20Calculus%20AB',
    )
  })
})
