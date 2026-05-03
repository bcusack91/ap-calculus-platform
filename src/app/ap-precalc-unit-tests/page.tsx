import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_PRECALCULUS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-precalculus'

export const metadata: Metadata = {
  title: 'AP Precalculus Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any AP Precalculus unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-precalc-unit-tests' },
  openGraph: {
    title: 'AP Precalculus Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Precalculus. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-precalc-unit-tests',
  },
}

export default function APPrecalcUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_PRECALCULUS_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient:
          'bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass:
          'bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        accentBlock:
          'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200',
      }}
    />
  )
}
