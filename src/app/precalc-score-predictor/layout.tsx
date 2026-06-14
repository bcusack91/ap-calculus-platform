import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Pre-Calculus Score Predictor | Study Mondo",
  description: "Get a projected Pre-Calculus readiness score based on your quiz performance and topic mastery.",
  path: "/precalc-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
