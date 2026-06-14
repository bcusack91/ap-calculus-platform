import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Macroeconomics Score Predictor | Study Mondo",
  description: "Predict your AP Macroeconomics score from practice performance. Turn your multiple-choice and free-response graphing accuracy into a projected 1-5 exam score fast.",
  path: "/ap-macro-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
