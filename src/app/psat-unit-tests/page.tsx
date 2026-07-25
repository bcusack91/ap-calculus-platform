import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { PSAT_UNIT_TESTS_CONFIG } from '@/data/unit-tests/psat'

export const metadata: Metadata = {
  title: 'PSAT/NMSQT Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any of the eight PSAT domains — Information & Ideas, Craft & Structure, Expression of Ideas, Conventions, Algebra, Advanced Math, Problem-Solving & Data, and Geometry & Trig. 4 variations per unit.',
  alternates: { canonical: 'https://www.studymondo.com/psat-unit-tests' },
  openGraph: {
    title: 'PSAT/NMSQT Unit Tests',
    description: 'Focused unit-by-unit assessments across all eight PSAT domains. 4 variations per unit.',
    url: 'https://www.studymondo.com/psat-unit-tests',
  },
}

export const revalidate = 300

export default async function PsatUnitTestsPage() {
  const units = await getUnitTestUnits(PSAT_UNIT_TESTS_CONFIG.courseSlug, PSAT_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...PSAT_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
        accentBlock: 'border-indigo-200 bg-indigo-50 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-200',
      }}
    />
  )
}
