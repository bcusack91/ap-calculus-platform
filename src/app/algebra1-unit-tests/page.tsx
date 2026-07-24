import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { ALGEBRA_1_UNIT_TESTS_CONFIG } from '@/data/unit-tests/algebra-1'

export const metadata: Metadata = {
  title: 'Algebra 1 Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Algebra 1 unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/algebra1-unit-tests' },
  openGraph: {
    title: 'Algebra 1 Unit Tests',
    description: 'Focused unit-by-unit assessments for Algebra 1. 4 variations per unit.',
    url: 'https://www.studymondo.com/algebra1-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function Algebra1UnitTestsPage() {
  const units = await getUnitTestUnits(ALGEBRA_1_UNIT_TESTS_CONFIG.courseSlug, ALGEBRA_1_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...ALGEBRA_1_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
        accentBlock: 'border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-800 dark:bg-sky-900/20 dark:text-sky-200',
      }}
    />
  )
}
