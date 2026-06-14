import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: Mechanics Score Predictor | Study Mondo",
  description: "Get a projected AP Physics C: Mechanics exam score based on your quiz performance and topic mastery.",
  path: "/ap-physics-c-mech-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
