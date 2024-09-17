'use client'

import React, { useEffect, useState } from 'react'

const TransitionFadeIn = ({ children }: { children: React.ReactNode }) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(true)
  }, [])

  return (
    <div
      style={{
        opacity: hasLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {children}
    </div>
  )
}

export default TransitionFadeIn
