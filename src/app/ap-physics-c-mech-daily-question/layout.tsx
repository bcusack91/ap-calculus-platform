import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics C: Mechanics Daily Question | Study Mondo",
  description: "Practice a new AP Physics C: Mechanics question every day. Free daily physics prep covering motion, forces, energy, momentum, and rotation.",
  path: "/ap-physics-c-mech-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
