import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * Accessibility tests using axe-core.
 * Run with: npx playwright test tests/e2e/accessibility.spec.ts
 * Requires: npm install -D @axe-core/playwright
 */

const pages = [
  { name: 'home', path: '/' },
  { name: 'topics', path: '/topics' },
  { name: 'search', path: '/search' },
  { name: 'contact', path: '/contact' },
  { name: 'signup', path: '/auth/signup' },
  { name: 'signin', path: '/auth/signin' },
  { name: 'sat', path: '/sat' },
  { name: 'leaderboard', path: '/leaderboard' },
  { name: 'privacy', path: '/privacy' },
  { name: 'pricing', path: '/pricing' },
]

test.describe('Accessibility', () => {
  for (const { name, path } of pages) {
    test(`${name} page has no critical or serious a11y violations`, async ({ page }) => {
      await page.goto(path)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze()

      const criticalOrSerious = results.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      )
      expect(criticalOrSerious).toEqual([])
    })
  }
})
