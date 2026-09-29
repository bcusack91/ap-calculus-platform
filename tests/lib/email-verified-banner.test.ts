/**
 * "Verify your email to secure your account" stayed up after the owner
 * verified (2026-09-29). Two causes:
 *  1. The dashboard banner reads the login token's copy of emailVerified. The
 *     verify page refreshes the token only in the browser that opened the
 *     emailed link; everywhere else the copy was re-read at most every
 *     5 minutes. A token without a verified email is now re-checked after
 *     30 seconds, like a missing birth year.
 *  2. The account signs in with Google, which had already verified the
 *     address — Google sign-ups are now created verified, and existing ones
 *     are marked verified at their next Google sign-in. Microsoft is left
 *     out on purpose: some Entra accounts can set their own email claim.
 */
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { shouldRefreshFromDb, NULL_RECHECK_MS, REFRESH_AFTER_MS } from '@/lib/auth-token-refresh'

const now = 10_000_000
const verified = new Date('2026-09-29T21:17:39Z')

describe('a token without a verified email is re-checked soon', () => {
  it('re-reads after the short window while emailVerified is null', () => {
    expect(shouldRefreshFromDb({ lastRefreshed: now - NULL_RECHECK_MS - 1, birthYear: 1990, emailVerified: null }, undefined, now)).toBe(true)
    expect(shouldRefreshFromDb({ lastRefreshed: now - 1000, birthYear: 1990, emailVerified: null }, undefined, now)).toBe(false)
  })

  it('leaves a complete, fresh token alone until the normal refresh', () => {
    expect(shouldRefreshFromDb({ lastRefreshed: now - NULL_RECHECK_MS - 1, birthYear: 1990, emailVerified: verified }, undefined, now)).toBe(false)
    expect(shouldRefreshFromDb({ lastRefreshed: now - REFRESH_AFTER_MS - 1, birthYear: 1990, emailVerified: verified }, undefined, now)).toBe(true)
  })
})

describe('Google sign-ins count as verified', () => {
  const auth = fs.readFileSync(path.join(process.cwd(), 'src/lib/auth.ts'), 'utf8')

  it('new Google accounts are created with emailVerified from Google', () => {
    expect(auth).toContain('emailVerified: profile.email_verified ? new Date() : null')
  })

  it('existing Google accounts are marked verified at sign-in, Google only', () => {
    expect(auth).toContain("account.provider === 'google' &&")
    expect(auth).toContain('?.email_verified === true')
    expect(auth).toContain('data: { emailVerified: new Date() }')
  })
})
