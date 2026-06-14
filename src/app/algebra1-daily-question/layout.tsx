import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Algebra 1 Daily Question | Study Mondo",
  description: "Practice a new Algebra 1 question every day. Free daily algebra prep covering equations, inequalities, functions, and graphing.",
  path: "/algebra1-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
