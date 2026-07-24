import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { SAT_UNIT_TESTS_CONFIG } from '@/data/unit-tests/sat'

export const metadata: Metadata = {
  title: 'SAT Unit Tests | Study Mondo',
  description:
    'Drill any SAT domain — Algebra, Advanced Math, Problem-Solving, Geometry, or any Reading &amp; Writing domain on its own. Each has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/sat-unit-tests' },
  openGraph: {
    title: 'SAT Unit Tests',
    description: 'Focused, section-by-section SAT practice. 4 variations each.',
    url: 'https://www.studymondo.com/sat-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function SatUnitTestsPage() {
  const units = await getUnitTestUnits(SAT_UNIT_TESTS_CONFIG.courseSlug, SAT_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...SAT_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        accentBlock: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200',
      }}
    />
  )
}
