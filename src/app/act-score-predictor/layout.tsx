import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "ACT Score Predictor | Study Mondo",
  description: "Get a projected ACT composite score based on your quiz performance, topic mastery, and practice test results.",
  path: "/act-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
