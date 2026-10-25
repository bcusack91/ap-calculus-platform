import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: 'ASVAB Score Predictor | AFQT Estimate | Study Mondo',
  description: 'Get an estimated AFQT percentile and subtest-by-subtest breakdown from your ASVAB quiz results and lesson progress.',
  path: '/asvab-score-predictor',
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
