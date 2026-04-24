import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_MICRO_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-microeconomics'

export const metadata: Metadata = {
  title: 'AP Microeconomics Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Microeconomics unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-micro-unit-tests' },
  openGraph: {
    title: 'AP Microeconomics Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Microeconomics. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-micro-unit-tests',
  },
}

export default function APMicroUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_MICRO_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
        accentBlock: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200',
      }}
    />
  )
}
