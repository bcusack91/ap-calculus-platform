import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Pre-Calculus Daily Question | Study Mondo",
  description: "Practice a new Pre-Calculus question every day. Free daily Pre-Calculus prep covering functions, trigonometry, logs, and sequences.",
  path: "/precalc-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
