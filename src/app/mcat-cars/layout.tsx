import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT CARS Practice — Free Full-Length Passages | Study Mondo",
  description: "Free MCAT CARS practice with full-length humanities and social-science passages and answer explanations. Build the timed passage reps the Critical Analysis & Reasoning Skills section demands.",
  path: "/mcat-cars",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
