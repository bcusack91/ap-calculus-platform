import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_US_HISTORY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-us-history'

export const metadata: Metadata = {
  title: 'AP US History Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP US History period. 4 variations per period so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-us-history-unit-tests' },
  openGraph: {
    title: 'AP US History Unit Tests',
    description: 'Focused period-by-period assessments for AP US History. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-us-history-unit-tests',
  },
}

export default function APUSHistoryUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_US_HISTORY_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300',
        accentBlock: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200',
      }}
    />
  )
}
