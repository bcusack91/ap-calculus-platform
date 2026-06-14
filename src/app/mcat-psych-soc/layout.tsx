import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Psych/Soc Passage Practice — Free Study-Based Passages | Study Mondo",
  description: "Free MCAT Psychological, Social & Biological Foundations of Behavior practice with research-study passages and full answer explanations across psychology, sociology, and the biological basis of behavior.",
  path: "/mcat-psych-soc",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
