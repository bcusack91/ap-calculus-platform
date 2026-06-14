import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Organic Chemistry Daily Question | Study Mondo",
  description: "Practice a new Organic Chemistry question every day. Free daily OChem prep for reactions, mechanisms, and spectroscopy.",
  path: "/ochem-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
