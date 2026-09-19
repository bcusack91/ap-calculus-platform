/**
 * The Desmos calculator link appears on SAT Math surfaces and nowhere else.
 *
 * The Digital SAT supplies a built-in Desmos graphing calculator on Math only,
 * so these two public pages are the cheapest end-to-end proof: grid-ins are
 * always Math, and the daily question page renders a Math card and a Reading &
 * Writing card side by side — the link must be on the first and not the second.
 *
 * Needs a local dev server on :3000; self-skips otherwise.
 */
import { test, expect, type APIRequestContext } from '@playwright/test'

const BASE = 'http://localhost:3000'
const DESMOS = 'a[href="https://www.desmos.com/calculator"]'

async function up(request: APIRequestContext): Promise<boolean> {
  try {
    return (await request.get(`${BASE}/`, { timeout: 60_000 })).ok()
  } catch {
    return false
  }
}

test.describe('SAT Desmos calculator link', () => {
  test.beforeAll(async ({ request }) => {
    test.skip(!(await up(request)), 'local dev server not running')
  })

  test('grid-in practice offers it, opening in a new tab', async ({ page }) => {
    await page.goto('/sat-grid-in')
    const link = page.locator(DESMOS).first()
    await expect(link).toBeVisible({ timeout: 90_000 })
    await expect(link).toHaveAttribute('target', '_blank')
    // rel must carry noopener: the new tab gets no handle back to the test page.
    expect(await link.getAttribute('rel')).toContain('noopener')
    await expect(link).toHaveAccessibleName(/opens in a new tab/i)
  })

  test('the daily Math question offers it and Reading & Writing does not', async ({ page }) => {
    await page.goto('/sat-daily-question')
    // Both cards render side by side. Walk up from each heading to its own
    // card root (the nearest rounded-2xl ancestor) — a plain hasText filter
    // matches every nested div and every shared ancestor of both cards.
    const cardOf = (heading: string) =>
      page.getByText(heading, { exact: true }).locator('xpath=ancestor::div[contains(@class,"rounded-2xl")][1]')
    const mathCard = cardOf("Today's Math Question")
    const rwCard = cardOf("Today's Reading & Writing Question")
    await expect(mathCard).toBeVisible({ timeout: 90_000 })
    await expect(mathCard.locator(DESMOS)).toHaveCount(1)
    await expect(rwCard).toBeVisible()
    await expect(rwCard.locator(DESMOS)).toHaveCount(0)
  })
})
