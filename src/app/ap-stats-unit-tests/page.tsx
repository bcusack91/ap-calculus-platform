import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_STATISTICS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-statistics'

export const metadata: Metadata = {
  title: 'AP Statistics Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Statistics unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-stats-unit-tests' },
  openGraph: {
    title: 'AP Statistics Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Statistics. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-stats-unit-tests',
  },
}

export default function APStatsUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_STATISTICS_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
        accentBlock: 'border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-200',
      }}
    />
  )
}
