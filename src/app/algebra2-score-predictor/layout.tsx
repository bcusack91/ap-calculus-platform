import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Algebra 2 Score Predictor | Study Mondo",
  description: "Get a projected Algebra 2 readiness score based on your quiz performance and topic mastery.",
  path: "/algebra2-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
