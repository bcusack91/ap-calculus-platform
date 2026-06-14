import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "Grade 8 Math Score Predictor | Study Mondo",
  description: "Get a projected Grade 8 Math readiness score based on your quiz performance and topic mastery.",
  path: "/grade8-math-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
