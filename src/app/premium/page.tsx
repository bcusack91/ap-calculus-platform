'use client'

// Temporarily hidden for free tier launch - redirect to homepage
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PremiumPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/')
  }, [router])
  
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-muted-foreground">Redirecting to home page...</p>
      </div>
    </div>
  )
}
