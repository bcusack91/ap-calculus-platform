import type { Metadata } from 'next'
import APPhysics1UnitTestsClient from './ui'

export const metadata: Metadata = {
  title: 'AP Physics 1 Unit Tests | Study Mondo',
  description:
    'Take a focused unit test on any AP Physics 1 unit. Each unit has 4 different test variations so you can retake until you master it. Narrower than the full diagnostic, broader than a single topic.',
  alternates: { canonical: 'https://www.studymondo.com/ap-physics1-unit-tests' },
  openGraph: {
    title: 'AP Physics 1 Unit Tests',
    description:
      'Focused unit-by-unit assessments for AP Physics 1. 4 variations per unit so you can keep retaking until you master each unit.',
    url: 'https://www.studymondo.com/ap-physics1-unit-tests',
  },
}

export default function APPhysics1UnitTestsPage() {
  return <APPhysics1UnitTestsClient />
}
