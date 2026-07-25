import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { GRADE_8_UNIT_TESTS_CONFIG } from '@/data/unit-tests/grade-8-math'

export const metadata: Metadata = {
  title: 'Grade 8 Math Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Grade 8 Math unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/grade8-math-unit-tests' },
  openGraph: {
    title: 'Grade 8 Math Unit Tests',
    description: 'Focused unit-by-unit assessments for Grade 8 Math. 4 variations per unit.',
    url: 'https://www.studymondo.com/grade8-math-unit-tests',
  },
}

export const revalidate = 300

export default async function Grade8MathUnitTestsPage() {
  const units = await getUnitTestUnits(GRADE_8_UNIT_TESTS_CONFIG.courseSlug, GRADE_8_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...GRADE_8_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
        accentBlock: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200',
      }}
    />
  )
}
