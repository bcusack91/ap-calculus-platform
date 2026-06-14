import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "SAT Grid-In Practice | Study Mondo",
  description: "Practice free-response SAT math grid-in questions with instant feedback and detailed explanations.",
  path: "/sat-grid-in",
})

export default function SATGridInLayout({ children }: { children: React.ReactNode }) {
  return children
}
