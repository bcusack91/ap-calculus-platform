// @vitest-environment jsdom
/**
 * Main navigation (UX plan Phase 1, item 6).
 *
 * Guarded here:
 *   - Signed-out visitors see a compact "Sign up" in the mobile header (not
 *     only in the hidden-below-md auth block), and Sign In / Sign Up sit at the
 *     TOP of the mobile menu instead of under ~40 course links.
 *   - Signed-in users get "Dashboard" as the first text nav item (desktop and
 *     the top of the mobile menu).
 *   - Competitive is secondary: same styling as the other items, no accent.
 *   - "Topics" is gone; the Courses dropdown's first item is "All courses".
 *   - Students in an active class get "My Class" → /assignments; teachers keep
 *     "My Classes" → /teacher.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor, within, cleanup, act } from '@testing-library/react'

type MockSession = { user: { id: string; role: string; name: string; email: string } } | null
let mockSession: MockSession = null

vi.mock('next-auth/react', () => ({
  useSession: () => ({ data: mockSession, status: mockSession ? 'authenticated' : 'unauthenticated' }),
  signOut: vi.fn(),
}))
vi.mock('next/navigation', () => ({ usePathname: () => '/' }))
vi.mock('@/components/NotificationBell', () => ({ NotificationBell: () => null }))
vi.mock('@/components/ThemeToggle', () => ({ default: () => null }))
vi.mock('@/components/ViewAsToggle', () => ({ ViewAsToggle: () => null }))

import { Navbar } from '@/components/navbar'

const student = (): MockSession => ({ user: { id: 'u-student', role: 'FREE', name: 'Ava', email: 'ava@example.com' } })
const teacher = (): MockSession => ({ user: { id: 'u-teacher', role: 'TEACHER', name: 'Ms T', email: 't@example.com' } })

let fetchMock: ReturnType<typeof vi.fn>
const mockNavbarApi = (inClass: boolean) => {
  fetchMock = vi.fn(async () => ({ json: async () => ({ avatarData: null, inClass, courses: [] }) }))
  vi.stubGlobal('fetch', fetchMock)
}

/** Text of the top-level desktop nav items, in order. */
const desktopItems = () => {
  const desktop = screen.getByRole('navigation', { name: 'Main navigation' })
    .querySelector('div.hidden.md\\:flex') as HTMLElement
  return Array.from(desktop.children)
    .map(el => (el.tagName === 'A' ? el : el.querySelector('button'))?.textContent?.trim() ?? '')
    .filter(Boolean)
}

/** Let the /api/navbar fetch resolve and its state updates flush. */
const settle = async () => {
  await waitFor(() => expect(fetchMock).toHaveBeenCalled())
  await act(async () => { await Promise.resolve() })
}

beforeEach(() => {
  sessionStorage.clear()
  mockSession = null
  mockNavbarApi(false)
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('Navbar — signed out', () => {
  it('shows Sign up in the mobile header and no Dashboard', () => {
    render(<Navbar />)
    const headerSignup = screen.getByTestId('mobile-header-signup')
    expect(headerSignup).toHaveAttribute('href', '/auth/signup')
    expect(headerSignup.className).toContain('md:hidden')
    // Not inside the desktop-only auth block
    expect(headerSignup.closest('.hidden')).toBeNull()

    expect(screen.queryByRole('link', { name: 'Dashboard' })).toBeNull()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('renames Topics to a Courses dropdown whose first item is All courses', () => {
    render(<Navbar />)
    expect(desktopItems()).toEqual(['Courses', 'For Teachers', 'Flashcards', 'Competitive', 'More'])
    expect(screen.queryByRole('link', { name: 'Topics' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Courses' }))
    const links = screen.getAllByRole('link')
    const allCourses = screen.getByRole('link', { name: 'All courses' })
    expect(allCourses).toHaveAttribute('href', '/topics')
    // First link inside the dropdown panel
    const panel = allCourses.closest('div.absolute') as HTMLElement
    expect(within(panel).getAllByRole('link')[0]).toBe(allCourses)
    expect(links.length).toBeGreaterThan(5)
  })

  it('puts Sign In / Sign Up at the top of the mobile menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = document.querySelector('div.md\\:hidden.border-t') as HTMLElement
    const menuLinks = within(menu).getAllByRole('link')
    expect(menuLinks[0]).toHaveTextContent('Sign In')
    expect(menuLinks[1]).toHaveTextContent('Sign Up')
  })
})

describe('Navbar — signed in', () => {
  it('shows Dashboard first and Competitive without the accent highlight', async () => {
    mockSession = student()
    mockNavbarApi(false)
    render(<Navbar />)

    await waitFor(() => expect(desktopItems()).toContain('For Teachers'))
    const items = desktopItems()
    expect(items[0]).toBe('Dashboard')
    expect(items).toEqual(['Dashboard', 'Courses', 'For Teachers', 'Flashcards', 'Competitive', 'More'])
    expect(items).not.toContain('My Class')

    const competitive = screen.getByRole('link', { name: 'Competitive' })
    expect(competitive.className).not.toContain('text-accent ')
    expect(competitive.className).not.toContain('font-semibold')
    expect(competitive.querySelector('svg')).toBeNull()
    expect(competitive.className).toBe(screen.getByRole('link', { name: 'Flashcards' }).className)

    expect(screen.queryByTestId('mobile-header-signup')).toBeNull()
  })

  it('shows Dashboard at the top of the mobile menu (not the bottom)', async () => {
    mockSession = student()
    render(<Navbar />)
    await settle()
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const menu = document.querySelector('div.md\\:hidden.border-t') as HTMLElement
    const menuLinks = within(menu).getAllByRole('link')
    expect(menuLinks[0]).toHaveTextContent('Dashboard')
    expect(menuLinks[0]).toHaveAttribute('href', '/dashboard')
    expect(within(menu).getAllByRole('link', { name: /Dashboard/ })).toHaveLength(1)
    expect(within(menu).queryByRole('link', { name: 'Sign In' })).toBeNull()
  })

  it('adds My Class → /assignments for a student in an active class', async () => {
    mockSession = student()
    mockNavbarApi(true)
    render(<Navbar />)

    await waitFor(() => expect(desktopItems()).toContain('My Class'))
    expect(desktopItems()).toEqual(['Dashboard', 'My Class', 'Courses', 'Flashcards', 'Competitive', 'More'])
    expect(screen.getByRole('link', { name: 'My Class' })).toHaveAttribute('href', '/assignments')
    expect(fetchMock).toHaveBeenCalledWith('/api/navbar')

    // Avatar menu carries My Class too
    fireEvent.click(screen.getByRole('button', { name: 'User menu' }))
    const menu = screen.getByRole('menu')
    expect(within(menu).getByRole('link', { name: /Dashboard/ })).toHaveAttribute('href', '/dashboard')
    expect(within(menu).getByRole('link', { name: /My Class/ })).toHaveAttribute('href', '/assignments')
  })

  it('reuses the per-session cache instead of refetching', async () => {
    mockSession = student()
    sessionStorage.setItem('navData-auth', JSON.stringify({ uid: 'u-student', avatarData: null, inClass: true, _ts: Date.now() }))
    render(<Navbar />)
    await waitFor(() => expect(desktopItems()).toContain('My Class'))
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('ignores a cache written for a different user', async () => {
    mockSession = student()
    mockNavbarApi(false)
    sessionStorage.setItem('navData-auth', JSON.stringify({ uid: 'someone-else', avatarData: null, inClass: true, _ts: Date.now() }))
    render(<Navbar />)
    await waitFor(() => expect(desktopItems()).toContain('For Teachers'))
    expect(desktopItems()).not.toContain('My Class')
    expect(fetchMock).toHaveBeenCalled()
  })

  it('keeps My Classes → /teacher for teachers', async () => {
    mockSession = teacher()
    render(<Navbar />)
    await settle()
    expect(desktopItems()).toEqual(['Dashboard', 'My Classes', 'Courses', 'Flashcards', 'Competitive', 'More'])
    expect(screen.getByRole('link', { name: 'My Classes' })).toHaveAttribute('href', '/teacher')
  })
})
