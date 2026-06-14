import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Human Geography Score Predictor | Study Mondo",
  description: "Predict your AP Human Geography score from your practice results. Convert multiple-choice and free-response performance into a projected 1-5 exam score instantly.",
  path: "/ap-human-geo-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
