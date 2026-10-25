import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { UNIT_TEST_COURSES } from '@/lib/unit-test-courses'

export const metadata: Metadata = {
  title: 'ASVAB Unit Test | Study Mondo',
  description: 'A 25-question test on the topics your last ASVAB diagnostic recommended. The last step of your study cycle before your next diagnostic.',
  robots: { index: false, follow: false },
}

export default function AsvabUnitTestLayout({ children }: { children: React.ReactNode }) {
  // Built but switched off until its question pools are deep enough (unit-test-courses.ts).
  if (!UNIT_TEST_COURSES.asvab.enabled) notFound()
  return children
}
