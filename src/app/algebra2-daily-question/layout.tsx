import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Algebra 2 Daily Question | Study Mondo",
  description: "Practice a new Algebra 2 question every day. Free daily Algebra 2 prep covering quadratics, polynomials, logarithms, and more.",
  path: "/algebra2-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
