import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "SAT Score Predictor | Study Mondo",
  description: "Predict your SAT score based on your study progress, quiz performance, and practice test history.",
  path: "/sat-score-predictor",
})

export default function SATScorePredictorLayout({ children }: { children: React.ReactNode }) {
  return children
}
