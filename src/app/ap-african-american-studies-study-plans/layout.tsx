import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP African American Studies Study Plans | Study Mondo",
  description: "Pre-built AP African American Studies study plans that schedule every unit, source analysis, and review session into a day-by-day calendar from now through exam day.",
  path: "/ap-african-american-studies-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
