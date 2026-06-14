import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Environmental Science Study Plans | Study Mondo",
  description: "Ready-made AP Environmental Science study plans that schedule every APES unit, data analysis, and free-response practice into a day-by-day calendar before the exam.",
  path: "/ap-enviro-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
