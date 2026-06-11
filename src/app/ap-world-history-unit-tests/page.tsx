import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_WORLD_HISTORY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-world-history'

export const metadata: Metadata = {
  title: 'AP World History Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP World History unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-world-history-unit-tests' },
  openGraph: {
    title: 'AP World History Unit Tests',
    description: 'Focused unit-by-unit assessments for AP World History. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-world-history-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function APWorldHistoryUnitTestsPage() {
  const units = await getUnitTestUnits(AP_WORLD_HISTORY_UNIT_TESTS_CONFIG.courseSlug, AP_WORLD_HISTORY_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...AP_WORLD_HISTORY_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
        accentBlock: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200',
      }}
    />
  )
}
