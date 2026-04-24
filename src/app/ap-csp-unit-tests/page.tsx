import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_CSP_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-cs-principles'

export const metadata: Metadata = {
  title: 'AP CS Principles Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP CSP big idea. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-csp-unit-tests' },
  openGraph: {
    title: 'AP CS Principles Unit Tests',
    description: 'Focused unit-by-unit assessments for AP CSP. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-csp-unit-tests',
  },
}

export default function APCSPUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_CSP_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
        accentBlock: 'border-teal-200 bg-teal-50 text-teal-900 dark:border-teal-800 dark:bg-teal-900/20 dark:text-teal-200',
      }}
    />
  )
}
