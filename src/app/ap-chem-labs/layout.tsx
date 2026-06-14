import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/tool-metadata'
export const metadata: Metadata = toolMetadata({
  title: "AP Chemistry Virtual Labs: Titration & Calorimetry | Study Mondo",
  description: "Run free interactive AP Chemistry lab simulations. Practice titration curves and calorimetry to master experimental concepts and lab-based exam questions.",
  path: "/ap-chem-labs",
})
export default function Layout({ children }: { children: React.ReactNode }) { return children }
