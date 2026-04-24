import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { AP_ENGLISH_LANG_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-english-language'

export const metadata: Metadata = {
  title: 'AP English Language Unit Tests | Study Mondo',
  description: 'Take a focused unit test on any AP English Language unit. 4 variations per unit so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-english-lang-unit-tests' },
  openGraph: {
    title: 'AP English Language Unit Tests',
    description: 'Focused unit-by-unit assessments for AP English Language. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-english-lang-unit-tests',
  },
}

export default function APEnglishLangUnitTestsPage() {
  return (
    <UnitTestsClient
      config={AP_ENGLISH_LANG_UNIT_TESTS_CONFIG}
      theme={{
        bgGradient: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
        accentBlock: 'border-indigo-200 bg-indigo-50 text-indigo-900 dark:border-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-200',
      }}
    />
  )
}
