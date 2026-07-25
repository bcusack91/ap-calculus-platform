import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { PRE_ALGEBRA_UNIT_TESTS_CONFIG } from '@/data/unit-tests/pre-algebra'

export const metadata: Metadata = {
  title: 'Pre-Algebra Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Pre-Algebra unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/prealgebra-unit-tests' },
  openGraph: {
    title: 'Pre-Algebra Unit Tests',
    description: 'Focused unit-by-unit assessments for Pre-Algebra. 4 variations per unit.',
    url: 'https://www.studymondo.com/prealgebra-unit-tests',
  },
}

export const revalidate = 300

export default async function PreAlgebraUnitTestsPage() {
  const units = await getUnitTestUnits(PRE_ALGEBRA_UNIT_TESTS_CONFIG.courseSlug, PRE_ALGEBRA_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...PRE_ALGEBRA_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-lime-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-lime-100 px-4 py-1.5 text-sm font-semibold text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
        accentBlock: 'border-lime-200 bg-lime-50 text-lime-900 dark:border-lime-800 dark:bg-lime-900/20 dark:text-lime-200',
      }}
    />
  )
}
