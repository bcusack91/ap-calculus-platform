import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Psychology Score Predictor | Study Mondo",
  description: "Get a projected AP Psychology exam score based on your quiz performance and topic mastery.",
  path: "/ap-psych-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
