import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Calculus BC Daily Question | Study Mondo",
  description: "Practice a new AP Calculus BC question every day. Free daily AP Calc BC prep covering series, parametrics, polar, and advanced integration.",
  path: "/ap-calcbc-daily-question",
})

export default function APCalcBCDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
