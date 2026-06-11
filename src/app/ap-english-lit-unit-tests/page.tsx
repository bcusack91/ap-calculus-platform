import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_ENGLISH_LIT_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-english-literature'

export const metadata: Metadata = {
  title: 'AP English Literature Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP English Literature unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lit-unit-tests' },
  openGraph: {
    title: 'AP English Literature Unit Tests',
    description: 'Focused unit-by-unit assessments for AP English Literature. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-english-lit-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function APEnglishLitUnitTestsPage() {
  const units = await getUnitTestUnits(AP_ENGLISH_LIT_UNIT_TESTS_CONFIG.courseSlug, AP_ENGLISH_LIT_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...AP_ENGLISH_LIT_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
        accentBlock: 'border-violet-200 bg-violet-50 text-violet-900 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-200',
      }}
    />
  )
}
