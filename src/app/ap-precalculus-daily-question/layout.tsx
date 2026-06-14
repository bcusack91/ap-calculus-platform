import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Precalculus Daily Question | Study Mondo",
  description: "Practice a new AP Precalculus question every day. Free daily AP Precalculus prep.",
  path: "/ap-precalculus-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
