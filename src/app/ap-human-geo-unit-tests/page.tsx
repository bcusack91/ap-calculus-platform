import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_HUMAN_GEO_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-human-geography'

export const metadata: Metadata = {
  title: 'AP Human Geography Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Human Geography unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-human-geo-unit-tests' },
  openGraph: {
    title: 'AP Human Geography Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Human Geography. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-human-geo-unit-tests',
  },
}

export default function APHumanGeoUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_HUMAN_GEO_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
        accentBlock: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200',
      }}
    />
  )
}
