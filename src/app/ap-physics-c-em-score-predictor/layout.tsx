import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: E&M Score Predictor | Study Mondo",
  description: "Get a projected AP Physics C: Electricity and Magnetism exam score based on your quiz performance and topic mastery.",
  path: "/ap-physics-c-em-score-predictor",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
