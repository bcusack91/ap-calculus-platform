import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { PRECALCULUS_UNIT_TESTS_CONFIG } from '@/data/unit-tests/precalculus'

export const metadata: Metadata = {
  title: 'Precalculus Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Precalculus unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/precalc-unit-tests' },
  openGraph: {
    title: 'Precalculus Unit Tests',
    description: 'Focused unit-by-unit assessments for Precalculus. 4 variations per unit.',
    url: 'https://www.studymondo.com/precalc-unit-tests',
  },
}

export const revalidate = 300

export default async function PrecalcUnitTestsPage() {
  const units = await getUnitTestUnits(
    PRECALCULUS_UNIT_TESTS_CONFIG.courseSlug,
    PRECALCULUS_UNIT_TESTS_CONFIG.units
  )
  return (
    <UnitTestsClient
      config={{ ...PRECALCULUS_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-fuchsia-100 px-4 py-1.5 text-sm font-semibold text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
        accentBlock: 'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900 dark:border-fuchsia-800 dark:bg-fuchsia-900/20 dark:text-fuchsia-200',
      }}
    />
  )
}
