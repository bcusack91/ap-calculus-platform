import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Precalculus Score Predictor | Study Mondo",
  description: "Get a projected AP Precalculus score based on your quiz performance and topic mastery.",
  path: "/ap-precalculus-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
