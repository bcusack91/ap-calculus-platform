import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_CALCULUS_AB_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-calculus-ab'

export const metadata: Metadata = {
  title: 'AP Calculus AB Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Calculus AB unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calcab-unit-tests' },
  openGraph: {
    title: 'AP Calculus AB Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Calculus AB. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-calcab-unit-tests',
  },
}

export default function APCalcABUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_CALCULUS_AB_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
        accentBlock: 'border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-200',
      }}
    />
  )
}
