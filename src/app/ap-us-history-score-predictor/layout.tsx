import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP US History Score Predictor | Study Mondo",
  description: "Predict your AP US History score from your practice performance. Convert MCQ, SAQ, DBQ, and LEQ results across all APUSH periods into a projected 1-5 exam score.",
  path: "/ap-us-history-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
