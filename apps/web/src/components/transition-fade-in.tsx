'use client'

import { usePathname } from 'next/navigation'
import React, { type ReactNode, useEffect, useState } from 'react'

const TransitionFadeIn = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsVisible(false) // Hide initially
    const timer = setTimeout(() => setIsVisible(true), 100) // Delay to see transition

    return () => clearTimeout(timer) // Cleanup timer on unmount or pathname change
  }, [pathname])

  return (
    <div
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}

export default TransitionFadeIn
