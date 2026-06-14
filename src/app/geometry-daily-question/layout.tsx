import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Geometry Daily Question | Study Mondo",
  description: "Practice a new geometry question every day. Free daily geometry prep covering shapes, proofs, area, volume, and transformations.",
  path: "/geometry-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
