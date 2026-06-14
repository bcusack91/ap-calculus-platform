import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "MCAT Score Predictor | Study Mondo",
  description: "Get a projected MCAT score based on your quiz performance and topic mastery.",
  path: "/mcat-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
