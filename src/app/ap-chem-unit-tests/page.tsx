import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_CHEMISTRY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-chemistry'

export const metadata: Metadata = {
  title: 'AP Chemistry Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any AP Chemistry unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-unit-tests' },
  openGraph: {
    title: 'AP Chemistry Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Chemistry. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-chem-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function APChemUnitTestsPage() {
  const units = await getUnitTestUnits(AP_CHEMISTRY_UNIT_TESTS_CONFIG.courseSlug, AP_CHEMISTRY_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...AP_CHEMISTRY_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
        accentBlock: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200',
      }}
    />
  )
}
