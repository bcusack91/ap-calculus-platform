import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Biology Daily Question | Study Mondo",
  description: "Practice a new AP Biology question every day. Free daily AP Bio prep covering evolution, ecology, genetics, cell biology, and more.",
  path: "/ap-bio-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
