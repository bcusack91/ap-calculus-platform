import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Microeconomics Score Predictor | Study Mondo",
  description: "Predict your AP Microeconomics score from your practice results. Convert multiple-choice and free-response performance on markets and graphs into a 1-5 exam score.",
  path: "/ap-micro-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
