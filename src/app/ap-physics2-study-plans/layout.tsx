import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 2 Study Plans | Study Mondo",
  description: "Pre-built AP Physics 2 study plans that schedule fluids, thermodynamics, electromagnetism, and modern physics plus FRQ practice into a day-by-day exam calendar.",
  path: "/ap-physics2-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
