import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { ACT_UNIT_TESTS_CONFIG } from '@/data/unit-tests/act'

export const metadata: Metadata = {
  title: 'ACT Unit Tests | Study Mondo',
  description:
    'Drill one ACT section at a time — English, Math, Reading, or Science. Each section has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/act-unit-tests' },
  openGraph: {
    title: 'ACT Unit Tests',
    description: 'Focused, section-by-section ACT practice. 4 variations each.',
    url: 'https://www.studymondo.com/act-unit-tests',
  },
}

export const revalidate = 300

export default async function ActUnitTestsPage() {
  const units = await getUnitTestUnits(ACT_UNIT_TESTS_CONFIG.courseSlug, ACT_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...ACT_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300',
        accentBlock: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200',
      }}
    />
  )
}
