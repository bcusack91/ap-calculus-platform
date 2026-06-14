import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Organic Chemistry Score Predictor | Study Mondo",
  description: "Get a projected Organic Chemistry score based on your quiz performance and topic mastery.",
  path: "/ochem-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
