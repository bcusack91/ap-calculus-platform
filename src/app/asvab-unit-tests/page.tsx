import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { ASVAB_UNIT_TESTS_CONFIG } from '@/data/unit-tests/asvab'

export const metadata: Metadata = {
  title: 'ASVAB Unit Tests | Practice Each Subtest | Study Mondo',
  description:
    'Drill one ASVAB subtest at a time: Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning, Mathematics Knowledge and the technical subtests, with several test variations each.',
  alternates: { canonical: 'https://www.studymondo.com/asvab-unit-tests' },
  openGraph: {
    title: 'ASVAB Unit Tests',
    description: 'Focused, subtest-by-subtest ASVAB practice.',
    url: 'https://www.studymondo.com/asvab-unit-tests',
  },
}

export const revalidate = 300

export default async function AsvabUnitTestsPage() {
  const units = await getUnitTestUnits(ASVAB_UNIT_TESTS_CONFIG.courseSlug, ASVAB_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...ASVAB_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-green-50 via-white to-lime-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300',
        accentBlock: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200',
      }}
    />
  )
}
