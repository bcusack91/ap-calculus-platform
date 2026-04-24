import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_PHYSICS2_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-physics-2'

export const metadata: Metadata = {
  title: 'AP Physics 2 Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Physics 2 unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics2-unit-tests' },
  openGraph: {
    title: 'AP Physics 2 Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Physics 2. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-physics2-unit-tests',
  },
}

export default function APPhysics2UnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_PHYSICS2_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
        accentBlock: 'border-orange-200 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-900/20 dark:text-orange-200',
      }}
    />
  )
}
