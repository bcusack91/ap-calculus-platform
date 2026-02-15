import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | Study Mondo',
  description: 'Sign in to your Study Mondo account',
  alternates: {
    canonical: 'https://www.studymondo.com/auth/signin',
  },
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
