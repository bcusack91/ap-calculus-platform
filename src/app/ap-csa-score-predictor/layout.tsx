import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Computer Science A Score Predictor | Study Mondo",
  description: "Estimate your AP Computer Science A score from your practice results. Turn multiple-choice and free-response Java performance into a projected 1-5 exam score.",
  path: "/ap-csa-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
