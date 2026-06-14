import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP African American Studies Score Predictor | Study Mondo",
  description: "Predict your AP African American Studies score from your practice performance. Convert MCQ and document-based accuracy into a projected 1-5 exam score instantly.",
  path: "/ap-african-american-studies-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
