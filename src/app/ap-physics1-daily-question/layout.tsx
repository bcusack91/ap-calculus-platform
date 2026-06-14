import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'

export const metadata: Metadata = toolMetadata({
  title: "AP Physics 1 Daily Question | Study Mondo",
  description: "Practice a new AP Physics 1 question every day. Free daily physics prep covering kinematics, forces, energy, waves, and circuits.",
  path: "/ap-physics1-daily-question",
})

export default function Layout({ children }: { children: React.ReactNode }) { return children }
