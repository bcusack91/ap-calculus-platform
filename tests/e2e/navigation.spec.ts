import { test, expect } from '@playwright/test'

test.describe('Course browsing', () => {
  test('course page loads with categories', async ({ page }) => {
    await page.goto('/topics')
    // Click on the first course link that's visible
    const courseLink = page.locator('a[href^="/courses/"]').first()
    await expect(courseLink).toBeVisible()
    await courseLink.click()
    // Course page should have a heading
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })
})

test.describe('Topic page', () => {
  test('topic page renders content', async ({ page }) => {
    await page.goto('/topics')
    // Find a topic link
    const topicLink = page.locator('a[href^="/topics/"]').first()
    if (await topicLink.isVisible()) {
      await topicLink.click()
      // Topic page should show content or a heading
      await expect(page.locator('h1').first()).toBeVisible()
    }
  })
})

test.describe('Contact page', () => {
  test('contact form is visible', async ({ page }) => {
    await page.goto('/contact')
    const form = page.locator('form').first()
    await expect(form).toBeVisible()
  })
})

test.describe('Flashcards page', () => {
  test('flashcards page loads', async ({ page }) => {
    await page.goto('/flashcards')
    await expect(page).toHaveTitle(/Study Mondo/)
    // Should have some content
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible()
  })
})
