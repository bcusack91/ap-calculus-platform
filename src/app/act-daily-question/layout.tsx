import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "ACT Daily Question | Study Mondo",
  description: "Practice a new ACT question every day. Free daily ACT prep rotating through English, Math, Reading, and Science.",
  path: "/act-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
