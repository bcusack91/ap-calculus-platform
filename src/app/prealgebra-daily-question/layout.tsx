import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Pre-Algebra Daily Question | Study Mondo",
  description: "Practice a new Pre-Algebra question every day. Free daily practice for arithmetic, equations, and ratios.",
  path: "/prealgebra-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
