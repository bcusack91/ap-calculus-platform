import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Daily Question | Study Mondo",
  description: "Practice a new AP Chemistry question every day. Free daily AP Chem prep covering reactions, equilibrium, thermodynamics, and more.",
  path: "/ap-chem-daily-question",
})

export default function APChemDailyQuestionLayout({ children }: { children: React.ReactNode }) {
  return children
}
