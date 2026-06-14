import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Calculus AB Daily Question | Study Mondo",
  description: "Practice a new AP Calculus AB question every day. Free daily AP Calc AB prep covering limits, derivatives, integrals, and applications.",
  path: "/ap-calcab-daily-question",
})

export default function APCalcABDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
