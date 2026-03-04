import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Study Mondo/)
  })

  test('navigation links are visible', async ({ page }) => {
    await page.goto('/')
    // Topics link should be visible
    const topicsLink = page.locator('a[href="/topics"]').first()
    await expect(topicsLink).toBeVisible()
  })

  test('skip to content link works', async ({ page }) => {
    await page.goto('/')
    // Tab to skip link
    await page.keyboard.press('Tab')
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeFocused()
  })
})

test.describe('Topics page', () => {
  test('loads course list', async ({ page }) => {
    await page.goto('/topics')
    // Should have multiple course sections
    const headings = page.locator('h2, h3')
    const count = await headings.count()
    expect(count).toBeGreaterThan(0)
  })
})

test.describe('Search', () => {
  test('search page accepts input', async ({ page }) => {
    await page.goto('/search')
    const searchInput = page.locator('input[type="text"], input[type="search"]').first()
    await expect(searchInput).toBeVisible()
    await searchInput.fill('calculus')
  })
})
