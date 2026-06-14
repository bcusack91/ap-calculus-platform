import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Statistics Daily Question | Study Mondo",
  description: "Practice a new AP Statistics question every day. Free daily AP Stats prep covering probability, inference, regression, and experimental design.",
  path: "/ap-stats-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
