import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Environmental Science Daily Question | Study Mondo",
  description: "A new AP Environmental Science practice question every day on ecosystems, pollution, and sustainability, each with a clear explanation to keep your APES prep sharp.",
  path: "/ap-enviro-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
