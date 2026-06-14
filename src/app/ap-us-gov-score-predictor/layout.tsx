import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP US Government Score Predictor | Study Mondo",
  description: "Predict your AP US Government and Politics score from practice performance. Turn your MCQ and free-response accuracy into a projected 1-5 exam score in seconds.",
  path: "/ap-us-gov-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
