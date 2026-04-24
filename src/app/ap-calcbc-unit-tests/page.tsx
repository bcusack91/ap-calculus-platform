import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_CALCULUS_BC_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-calculus-bc'

export const metadata: Metadata = {
  title: 'AP Calculus BC Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Calculus BC unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-calcbc-unit-tests' },
  openGraph: {
    title: 'AP Calculus BC Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Calculus BC. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-calcbc-unit-tests',
  },
}

export default function APCalcBCUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_CALCULUS_BC_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-fuchsia-100 px-4 py-1.5 text-sm font-semibold text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
        accentBlock: 'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900 dark:border-fuchsia-800 dark:bg-fuchsia-900/20 dark:text-fuchsia-200',
      }}
    />
  )
}
