import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Score Predictor | Study Mondo",
  description: "Get a projected AP Physics 1 exam score based on your quiz performance and topic mastery.",
  path: "/ap-physics1-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
