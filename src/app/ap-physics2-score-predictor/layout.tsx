import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 2 Score Predictor | Study Mondo",
  description: "Get a projected AP Physics 2 exam score based on your quiz performance and topic mastery.",
  path: "/ap-physics2-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
