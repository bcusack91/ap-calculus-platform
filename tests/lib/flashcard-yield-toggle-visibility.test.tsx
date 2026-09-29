// @vitest-environment jsdom
/**
 * The medium/low-yield toggles only show for a student with MCAT cards — the
 * MCAT is the only course whose cards carry exam-yield tiers, so for everyone
 * else the toggles changed nothing and just raised questions. Also guards the
 * brand rule: no third-party flashcard-app name ("Anki-style pacing") in UI.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import FlashcardDailyLimits, { shouldShowYieldToggles } from '@/components/FlashcardDailyLimits'

function mockSettings(body: Record<string, unknown>) {
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => ({ ok: true, json: async () => body }) as unknown as Response),
  )
}

const BASE = { newPerDay: null, maxReviewsPerDay: null, includeMediumYield: true, includeLowYield: false }

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('shouldShowYieldToggles', () => {
  it('shows only when the student has yield-tiered (MCAT) cards', () => {
    expect(shouldShowYieldToggles({ hasYieldCards: true })).toBe(true)
    expect(shouldShowYieldToggles({ hasYieldCards: false })).toBe(false)
  })
  it('hides for an older payload without the flag, or no payload', () => {
    expect(shouldShowYieldToggles({})).toBe(false)
    expect(shouldShowYieldToggles(null)).toBe(false)
    expect(shouldShowYieldToggles(undefined)).toBe(false)
  })
})

describe('FlashcardDailyLimits', () => {
  it('hides the yield toggles for a student with no MCAT cards', async () => {
    const fetchSpy = vi.fn(async () => ({ ok: true, json: async () => ({ ...BASE, hasYieldCards: false }) }) as unknown as Response)
    vi.stubGlobal('fetch', fetchSpy)
    render(<FlashcardDailyLimits />)
    await waitFor(() => expect(fetchSpy).toHaveBeenCalled())
    // let the settings response land
    await screen.findByLabelText('New cards per day')
    await new Promise((r) => setTimeout(r, 0))
    expect(screen.queryByLabelText(/medium-yield/i)).toBeNull()
    expect(screen.queryByLabelText(/low-yield/i)).toBeNull()
  })

  it('shows them for a student with MCAT cards', async () => {
    mockSettings({ ...BASE, hasYieldCards: true })
    render(<FlashcardDailyLimits />)
    expect(await screen.findByLabelText(/Include medium-yield MCAT cards/i)).toBeChecked()
    expect(screen.getByLabelText(/Include low-yield MCAT cards/i)).not.toBeChecked()
  })

  it('never names a third-party flashcard app', async () => {
    mockSettings({ ...BASE, hasYieldCards: true })
    const { container } = render(<FlashcardDailyLimits />)
    await screen.findByLabelText(/medium-yield/i)
    expect(container.textContent).not.toMatch(/anki/i)
  })
})
