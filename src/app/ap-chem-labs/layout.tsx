import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AP Chemistry Virtual Labs: Titration & Calorimetry | Study Mondo',
  description: 'Run free interactive AP Chemistry lab simulations. Practice titration curves and calorimetry to master experimental concepts and lab-based exam questions.',
  alternates: { canonical: 'https://www.studymondo.com/ap-chem-labs' },
}
export default function Layout({ children }: { children: React.ReactNode }) { return children }
