// @vitest-environment jsdom
/**
 * Becoming a teacher used to run through the STUDENT signup (avatar step and
 * all) and then a separate activation on /for-teachers. "I'm a teacher" now
 * creates the account, turns on teacher features in the same flow, skips the
 * avatar step and lands on /teacher. Also: a Premium account asking for
 * teacher features gets an explanation and next steps instead of a raw 409,
 * and a signed-in non-teacher who opens /teacher is sent to /for-teachers.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import fs from 'fs'
import path from 'path'

const searchParams = new Map<string, string>()
const push = vi.fn()
const signInMock = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push, replace: vi.fn(), refresh: vi.fn() }),
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

let fetchMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  searchParams.clear()
  push.mockReset()
  signInMock.mockReset().mockResolvedValue({ ok: true })
  fetchMock = vi.fn((url: string) =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(url === '/api/auth/signup' ? { user: { id: 'u1' } } : { success: true, role: 'TEACHER' }),
    } as Response),
  )
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

const fillForm = (birthYear = '1985') => {
  fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'Ms Rivera' } })
  fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'rivera@school.org' } })
  fireEvent.change(screen.getByLabelText('Birth Year'), { target: { value: birthYear } })
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'longpassword' } })
  fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'longpassword' } })
}

describe('teacher sign-up', () => {
  it('opens in teacher mode from ?role=teacher', () => {
    searchParams.set('role', 'teacher')
    render(<SignUpPage />)
    expect(screen.getByRole('heading', { level: 1, name: 'Create your free teacher account' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'I’m a teacher' })).toHaveAttribute('aria-checked', 'true')
    // Existing accounts activate on /for-teachers.
    for (const a of screen.getAllByRole('link', { name: 'Sign in' })) {
      expect(a.getAttribute('href')).toBe('/auth/signin?callbackUrl=%2Ffor-teachers')
    }
  })

  it('can be switched on from the normal sign-up page', () => {
    render(<SignUpPage />)
    fireEvent.click(screen.getByRole('radio', { name: 'I’m a teacher' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Create your free teacher account' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create teacher account' })).toBeInTheDocument()
  })

  it('requires the educator confirmation', async () => {
    searchParams.set('role', 'teacher')
    render(<SignUpPage />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: 'Create teacher account' }))
    expect(await screen.findByText('Please confirm you are a teacher or educator.')).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('refuses a teacher account for someone under 18', async () => {
    searchParams.set('role', 'teacher')
    render(<SignUpPage />)
    fillForm(String(new Date().getFullYear() - 15))
    fireEvent.click(screen.getByRole('checkbox'))
    fireEvent.click(screen.getByRole('button', { name: 'Create teacher account' }))
    expect(await screen.findByText(/Teacher accounts are for educators 18 or older/)).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('creates the account, activates teacher features, skips the avatar and lands on /teacher', async () => {
    searchParams.set('role', 'teacher')
    render(<SignUpPage />)
    fillForm()
    fireEvent.click(screen.getByRole('checkbox'))
    fireEvent.click(screen.getByRole('button', { name: 'Create teacher account' }))

    await waitFor(() => expect(push).toHaveBeenCalledWith('/teacher'))
    const urls = fetchMock.mock.calls.map((c) => c[0])
    expect(urls).toEqual(['/api/auth/signup', '/api/teacher/activate'])
    expect(JSON.parse(String((fetchMock.mock.calls[1][1] as RequestInit).body))).toEqual({ attest: true })
    // No avatar was sent — the avatar step never showed.
    expect(JSON.parse(String((fetchMock.mock.calls[0][1] as RequestInit).body)).avatarData).toBeUndefined()
    expect(screen.queryByText('Choose Your Avatar')).toBeNull()
    // Signed in again after activation so the session carries the TEACHER role.
    expect(signInMock).toHaveBeenCalledTimes(2)
  })

  it('sends Google teacher sign-ups to /for-teachers to finish activating', () => {
    searchParams.set('role', 'teacher')
    render(<SignUpPage />)
    fireEvent.click(screen.getByRole('button', { name: /Sign up with Google/ }))
    expect(signInMock).toHaveBeenCalledWith('google', { callbackUrl: '/for-teachers#activate' })
  })

  it('leaves the student flow on its avatar step', async () => {
    render(<SignUpPage />)
    fillForm('2010')
    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(await screen.findByText('Choose Your Avatar')).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('POST /api/teacher/activate for a Premium account', () => {
  it('explains the conflict and offers next steps instead of a bare error', async () => {
    vi.resetModules()
    vi.doMock('@/lib/auth', () => ({ auth: () => Promise.resolve({ user: { id: 'p1' } }) }))
    const update = vi.fn()
    vi.doMock('@/lib/prisma', () => ({
      prisma: { user: { findUnique: () => Promise.resolve({ role: 'PREMIUM' }), update } },
    }))
    const { POST } = await import('@/app/api/teacher/activate/route')
    const res = await POST(new Request('http://localhost/api/teacher/activate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attest: true }),
    }) as never)
    expect(res.status).toBe(409)
    const body = await res.json()
    expect(body.code).toBe('PREMIUM_ACCOUNT')
    expect(body.error).toMatch(/Premium/)
    expect(body.nextSteps.map((s: { href: string }) => s.href)).toEqual([
      expect.stringMatching(/^mailto:support@studymondo\.com/),
      '/auth/signup?role=teacher',
    ])
    expect(update).not.toHaveBeenCalled()
  })
})

describe('middleware teacher gate', () => {
  it('sends a signed-in non-teacher to /for-teachers, not silently to /dashboard', () => {
    const src = fs.readFileSync(path.join(process.cwd(), 'src/middleware.ts'), 'utf8')
    const gate = src.slice(src.indexOf("if (nextUrl.pathname.startsWith('/teacher'))"), src.indexOf("if (nextUrl.pathname.startsWith('/admin'))"))
    expect(gate).toContain("new URL('/for-teachers', nextUrl.origin)")
    expect(gate).not.toContain("'/dashboard'")
  })
})
