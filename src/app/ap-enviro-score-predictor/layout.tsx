import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Environmental Science Score Predictor | Study Mondo",
  description: "Predict your AP Environmental Science score from practice performance. Turn your MCQ and free-response accuracy across all APES units into a projected 1-5 score.",
  path: "/ap-enviro-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
