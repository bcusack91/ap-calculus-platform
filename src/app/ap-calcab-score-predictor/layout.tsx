import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Calculus AB Score Predictor | Study Mondo",
  description: "Get a projected AP Calculus AB exam score based on your quiz performance and topic mastery.",
  path: "/ap-calcab-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
