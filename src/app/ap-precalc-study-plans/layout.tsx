import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Precalculus Study Plans | Study Mondo",
  description: "Ready-made AP Precalculus study plans that schedule polynomial, trigonometric, and exponential functions plus practice into a day-by-day calendar before the exam.",
  path: "/ap-precalc-study-plans",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
