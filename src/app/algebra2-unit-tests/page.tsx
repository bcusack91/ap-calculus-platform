import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { ALGEBRA_2_UNIT_TESTS_CONFIG } from '@/data/unit-tests/algebra-2'

export const metadata: Metadata = {
  title: 'Algebra 2 Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Algebra 2 unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/algebra2-unit-tests' },
  openGraph: {
    title: 'Algebra 2 Unit Tests',
    description: 'Focused unit-by-unit assessments for Algebra 2. 4 variations per unit.',
    url: 'https://www.studymondo.com/algebra2-unit-tests',
  },
}

export const revalidate = 300

export default async function Algebra2UnitTestsPage() {
  const units = await getUnitTestUnits(ALGEBRA_2_UNIT_TESTS_CONFIG.courseSlug, ALGEBRA_2_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...ALGEBRA_2_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
        accentBlock: 'border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-200',
      }}
    />
  )
}
