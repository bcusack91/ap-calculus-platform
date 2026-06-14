import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Full-Length Practice Exam — Free 4-Section Simulation | Study Mondo",
  description: "Take a free, passage-based MCAT full-length practice exam across all four sections, scored on the 472–528 scale. Two interchangeable forms with two-pane passage reading and answer explanations.",
  path: "/mcat-full-length",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
