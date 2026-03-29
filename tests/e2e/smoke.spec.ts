import { test, expect } from '@playwright/test'

test.describe('Smoke Routes', () => {
  test('diagnostic page renders', async ({ page }) => {
    await page.goto('/sat-diagnostic')
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('daily question page renders', async ({ page }) => {
    await page.goto('/grade8-math-daily-question')
    await expect(page.locator('text=Question of the Day')).toBeVisible()
  })

  test('content page renders', async ({ page }) => {
    await page.goto('/topics')
    const topicLink = page.locator('a[href^="/topics/"]').first()
    if (await topicLink.count()) {
      await topicLink.click()
      await expect(page.locator('h1').first()).toBeVisible()
      return
    }

    await page.goto('/hubs/ap-calculus-ab-limits-continuity')
    await expect(page.locator('h1').first()).toBeVisible()
  })
})
