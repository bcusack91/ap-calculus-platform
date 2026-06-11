import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_US_GOV_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-us-government'

export const metadata: Metadata = {
  title: 'AP US Government Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP US Government unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-gov-unit-tests' },
  openGraph: {
    title: 'AP US Government Unit Tests',
    description: 'Focused unit-by-unit assessments for AP US Government. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-us-gov-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function APUSGovUnitTestsPage() {
  const units = await getUnitTestUnits(AP_US_GOV_UNIT_TESTS_CONFIG.courseSlug, AP_US_GOV_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...AP_US_GOV_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        accentBlock: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200',
      }}
    />
  )
}
