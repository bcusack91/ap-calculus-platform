import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_PSYCHOLOGY_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-psychology'

export const metadata: Metadata = {
  title: 'AP Psychology Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP Psychology unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-psych-unit-tests' },
  openGraph: {
    title: 'AP Psychology Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Psychology. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-psych-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window (#10).
export const revalidate = 300

export default async function APPsychUnitTestsPage() {
  const units = await getUnitTestUnits(AP_PSYCHOLOGY_UNIT_TESTS_CONFIG.courseSlug, AP_PSYCHOLOGY_UNIT_TESTS_CONFIG.units)
  return (
    <UnitTestsClient
      config={{ ...AP_PSYCHOLOGY_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-pink-100 px-4 py-1.5 text-sm font-semibold text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
        accentBlock: 'border-pink-200 bg-pink-50 text-pink-900 dark:border-pink-800 dark:bg-pink-900/20 dark:text-pink-200',
      }}
    />
  )
}
