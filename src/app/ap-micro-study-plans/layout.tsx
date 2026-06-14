import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Microeconomics Study Plans | Study Mondo",
  description: "Pre-built AP Microeconomics study plans that organize supply, demand, and market structure units plus FRQ graphing into a clear day-by-day schedule before the exam.",
  path: "/ap-micro-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
