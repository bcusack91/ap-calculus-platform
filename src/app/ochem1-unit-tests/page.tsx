import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { OCHEM_1_UNIT_TESTS_CONFIG } from '@/data/unit-tests/organic-chemistry-1'

export const metadata: Metadata = {
  title: 'Organic Chemistry 1 Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Organic Chemistry 1 unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ochem1-unit-tests' },
  openGraph: {
    title: 'Organic Chemistry 1 Unit Tests',
    description: 'Focused unit-by-unit assessments for Organic Chemistry 1. 4 variations per unit.',
    url: 'https://www.studymondo.com/ochem1-unit-tests',
  },
}

export const revalidate = 300

export default async function Ochem1UnitTestsPage() {
  const units = await getUnitTestUnits(OCHEM_1_UNIT_TESTS_CONFIG.courseSlug, OCHEM_1_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...OCHEM_1_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
        accentBlock: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200',
      }}
    />
  )
}
