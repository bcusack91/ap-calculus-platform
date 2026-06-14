import { toolMetadata } from '@/lib/tool-metadata'
import { Metadata } from 'next'

export const metadata: Metadata = toolMetadata({
  title: "Sign In | Study Mondo",
  description: "Sign in to your Study Mondo account",
  path: "/auth/signin",
})

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
