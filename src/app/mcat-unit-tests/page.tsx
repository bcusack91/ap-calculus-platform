import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { MCAT_UNIT_TESTS_CONFIG } from '@/data/unit-tests/mcat'

export const metadata: Metadata = {
  title: 'MCAT Unit Tests | Study Mondo',
  description:
    'Drill any MCAT subject area — General Chemistry, Organic Chemistry, Physics, Biochemistry, Organ Systems, Psych/Soc, or CARS on its own. Each has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/mcat-unit-tests' },
  openGraph: {
    title: 'MCAT Unit Tests',
    description: 'Focused, section-by-section MCAT practice. 4 variations each.',
    url: 'https://www.studymondo.com/mcat-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function McatUnitTestsPage() {
  const units = await getUnitTestUnits(MCAT_UNIT_TESTS_CONFIG.courseSlug, MCAT_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...MCAT_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
        accentBlock: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200',
      }}
    />
  )
}
