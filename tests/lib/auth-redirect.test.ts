/**
 * The sign-up wall helper: logged-out visitors to a diagnostic, FRQ or
 * competitive page are sent to a contextual sign-UP page (not "Welcome Back"),
 * and the callback survives so they land back where they started.
 */
import { describe, it, expect } from 'vitest'
import {
  authContextCopy,
  authReasonForPath,
  safeCallbackUrl,
  sanitizeAuthLabel,
  signInUrl,
  signUpUrl,
} from '@/lib/auth-redirect'

describe('signUpUrl', () => {
  it('builds the documented URL shape', () => {
    expect(signUpUrl({ callbackUrl: '/calcab-diagnostic', reason: 'diagnostic', label: 'AP Calculus AB' })).toBe(
      '/auth/signup?callbackUrl=%2Fcalcab-diagnostic&reason=diagnostic&label=AP%20Calculus%20AB',
    )
  })

  it('round-trips callbackUrl (including its own query string) and label through URLSearchParams', () => {
    const url = signUpUrl({ callbackUrl: '/competitive/join?code=ABC123&x=1', reason: 'competitive', label: 'AP Physics C: E&M' })
    const params = new URL(url, 'https://studymondo.com').searchParams
    expect(params.get('callbackUrl')).toBe('/competitive/join?code=ABC123&x=1')
    expect(params.get('reason')).toBe('competitive')
    expect(params.get('label')).toBe('AP Physics C: E&M')
    expect(url.startsWith('/auth/signup?')).toBe(true)
  })

  it('drops unsafe callbacks (open-redirect shapes) but keeps the rest', () => {
    for (const bad of ['https://evil.com', '//evil.com', '/\\evil.com', 'javascript:alert(1)']) {
      expect(signUpUrl({ callbackUrl: bad, reason: 'diagnostic' })).toBe('/auth/signup?reason=diagnostic')
    }
  })

  it('omits empty parts and a bare "/" callback', () => {
    expect(signUpUrl()).toBe('/auth/signup')
    expect(signUpUrl({ callbackUrl: '/' })).toBe('/auth/signup')
  })

  it('ignores unknown reasons and junk labels', () => {
    // @ts-expect-error — an unknown reason from an untyped caller
    expect(signUpUrl({ callbackUrl: '/x', reason: 'phish' })).toBe('/auth/signup?callbackUrl=%2Fx')
    expect(signUpUrl({ callbackUrl: '/x', label: '<script>' })).toBe('/auth/signup?callbackUrl=%2Fx')
  })

  it('signInUrl carries the same context to the sign-in page', () => {
    expect(signInUrl({ callbackUrl: '/ap-bio-frq', reason: 'frq', label: 'AP Biology' })).toBe(
      '/auth/signin?callbackUrl=%2Fap-bio-frq&reason=frq&label=AP%20Biology',
    )
  })
})

describe('safeCallbackUrl / sanitizeAuthLabel', () => {
  it('accepts internal paths only', () => {
    expect(safeCallbackUrl('/dashboard?tab=plan')).toBe('/dashboard?tab=plan')
    expect(safeCallbackUrl('//evil.com')).toBeNull()
    expect(safeCallbackUrl(null)).toBeNull()
  })

  it('accepts course names, rejects long or odd text', () => {
    expect(sanitizeAuthLabel(' Pre-Algebra ')).toBe('Pre-Algebra')
    expect(sanitizeAuthLabel('x'.repeat(61))).toBeNull()
    expect(sanitizeAuthLabel('Visit evil.com now!!')).toBeNull()
  })
})

describe('authReasonForPath', () => {
  it('maps protected paths to a reason', () => {
    expect(authReasonForPath('/competitive/ranked')).toBe('competitive')
    expect(authReasonForPath('/competitive')).toBe('competitive')
    expect(authReasonForPath('/dashboard')).toBe('generic')
    expect(authReasonForPath('/profile/settings')).toBe('generic')
  })
})

describe('authContextCopy', () => {
  it('gives the diagnostic sign-up heading and value prop', () => {
    expect(authContextCopy('signup', 'diagnostic', 'AP Calculus AB')).toEqual({
      heading: 'Create a free account to take the AP Calculus AB diagnostic',
      subheading: 'It takes 30 seconds. Your results and study plan are saved to your account.',
    })
  })

  it('gives a matching sign-in heading instead of "Welcome Back"', () => {
    expect(authContextCopy('signin', 'diagnostic', 'MCAT')?.heading).toBe('Sign in to take the MCAT diagnostic')
  })

  it('returns null with no reason so the default copy stays', () => {
    expect(authContextCopy('signup', null)).toBeNull()
    expect(authContextCopy('signin', 'bogus')).toBeNull()
  })

  it('falls back to a label-free heading for a junk label', () => {
    expect(authContextCopy('signup', 'diagnostic', '<b>x</b>')?.heading).toBe('Create a free account to take the diagnostic')
  })
})
