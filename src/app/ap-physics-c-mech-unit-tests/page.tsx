import type { Metadata } from 'next'
import UnitTestsClient from '@/components/UnitTestsClient'
import { getUnitTestUnits } from '@/lib/content-store'
import { AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG } from '@/data/unit-tests/ap-physics-c-mechanics'

export const metadata: Metadata = {
  title: 'AP Physics C: Mechanics Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any AP Physics C: Mechanics unit. Each unit has 4 different test variations so you can retake until you master it.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics-c-mech-unit-tests' },
  openGraph: {
    title: 'AP Physics C: Mechanics Unit Tests',
    description: 'Focused unit-by-unit assessments for AP Physics C: Mechanics. 4 variations per unit.',
    url: 'https://www.studymondo.com/ap-physics-c-mech-unit-tests',
  },
}

// ISR: cache the rendered page but pick up content-store edits within the window.
export const revalidate = 300

export default async function APPhysicsCMechUnitTestsPage() {
  const units = await getUnitTestUnits(
    AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG.courseSlug,
    AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG.units
  )
  return (
    <UnitTestsClient
      config={{ ...AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG, units }}
      theme={{
        bgGradient: 'bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
        badgeClass: 'bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
        accentBlock: 'border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-900/20 dark:text-slate-200',
      }}
    />
  )
}
