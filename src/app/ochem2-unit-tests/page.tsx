import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { OCHEM_2_UNIT_TESTS_CONFIG } from '@/data/unit-tests/organic-chemistry-2'

export const metadata: Metadata = {
  title: 'Organic Chemistry 2 Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Organic Chemistry 2 unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ochem2-unit-tests' },
  openGraph: {
    title: 'Organic Chemistry 2 Unit Tests',
    description: 'Focused unit-by-unit assessments for Organic Chemistry 2. 4 variations per unit.',
    url: 'https://www.studymondo.com/ochem2-unit-tests',
  },
}

export const revalidate = 300

export default async function Ochem2UnitTestsPage() {
  const units = await getUnitTestUnits(OCHEM_2_UNIT_TESTS_CONFIG.courseSlug, OCHEM_2_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...OCHEM_2_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
        accentBlock: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200',
      }}
    />
  )
}
