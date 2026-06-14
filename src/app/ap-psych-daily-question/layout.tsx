import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Psychology Daily Question | Study Mondo",
  description: "Practice a new AP Psychology question every day. Free daily AP Psych prep covering all 11 units from biology to social psychology.",
  path: "/ap-psych-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
