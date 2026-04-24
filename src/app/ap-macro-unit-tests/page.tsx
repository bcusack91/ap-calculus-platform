import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_MACRO_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-macroeconomics'

export const metadata: Metadata = {
  title: 'AP Macroeconomics Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Macroeconomics unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-macro-unit-tests' },
  openGraph: {
    title: 'AP Macroeconomics Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Macroeconomics. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-macro-unit-tests',
  },
}

export default function APMacroUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_MACRO_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300',
        accentBlock: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200',
      }}
    />
  )
}
