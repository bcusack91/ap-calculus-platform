'use client'

import { useEffect, useState, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false)
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
      return () => cancelAnimationFrame(timer)
    }
  }, [pathname])

  return (
    <div
      className={`transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}
