import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { GEOMETRY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/geometry'

export const metadata: Metadata = {
  title: 'Geometry Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any Geometry unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/geometry-unit-tests' },
  openGraph: {
    title: 'Geometry Unit Tests',
    description: 'Focused unit-by-unit assessments for Geometry. 4 variations per unit.',
    url: 'https://www.studymondo.com/geometry-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function GeometryUnitTestsPage() {
  const units = await getUnitTestUnits(GEOMETRY_UNIT_TESTS_CONFIG.courseSlug, GEOMETRY_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...GEOMETRY_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
        accentBlock: 'border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-900/20 dark:text-rose-200',
      }}
    />
  )
}
