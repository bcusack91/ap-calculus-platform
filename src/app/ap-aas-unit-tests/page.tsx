import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_AAS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-african-american-studies'

export const metadata: Metadata = {
  title: 'AP African American Studies Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP AAS unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-aas-unit-tests' },
  openGraph: {
    title: 'AP African American Studies Unit Tests',
    description: 'Focused unit-by-unit assessments for AP African American Studies. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-aas-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function APAASUnitTestsPage() {
  const units = await getUnitTestUnits(AP_AAS_UNIT_TESTS_CONFIG.courseSlug, AP_AAS_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...AP_AAS_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-yellow-100 px-4 py-1.5 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
        accentBlock: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200',
      }}
    />
  )
}
