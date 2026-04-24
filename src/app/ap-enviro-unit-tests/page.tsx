import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_ENVIRO_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-environmental-science'

export const metadata: Metadata = {
  title: 'AP Environmental Science Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Environmental Science unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-enviro-unit-tests' },
  openGraph: {
    title: 'AP Environmental Science Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Environmental Science. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-enviro-unit-tests',
  },
}

export default function APEnviroUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_ENVIRO_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-lime-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-lime-100 px-4 py-1.5 text-sm font-semibold text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
        accentBlock: 'border-lime-200 bg-lime-50 text-lime-900 dark:border-lime-800 dark:bg-lime-900/20 dark:text-lime-200',
      }}
    />
  )
}
