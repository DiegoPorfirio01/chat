'use client'

import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import { marketingReviewUsers } from '@/config/app'

import { Card } from '../ui/card'

gsap.registerPlugin(Draggable)

export const UsersReviewCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden">
      <h2 className="relative z-0 text-[20vw] font-black md:text-[200px]">
        <span className="text-customBlue">Chat Lucy.</span>
      </h2>
      <CardsDraggable />
    </section>
  )
}

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min

const CardsDraggable = () => {
  const containerRef = useRef(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Update container size on mount and when the window is resized
    const handleResize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize() // Set initial size
    window.addEventListener('resize', handleResize) // Add resize event listener

    return () => {
      window.removeEventListener('resize', handleResize) // Cleanup listener
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const cards = gsap.utils.toArray('.drag-elements')

      cards.forEach((card: unknown) => {
        Draggable.create(card as HTMLElement, {
          bounds: container,
          onDragStart() {
            gsap.to(card!, { zIndex: 100 })
          },
          onDragEnd() {
            gsap.to(card!, { zIndex: 0 })
          },
        })
      })
    }
  }, [containerSize]) // Dependency array ensures this runs after containerSize is updated

  const getCardPosition = (index: number) => {
    if (!containerSize.width || !containerSize.height) {
      return { translateX: '0px', translateY: '0px' }
    }

    const angle = (index / marketingReviewUsers.length) * 2 * Math.PI
    const radius = 150 // Ajuste o raio para a área de 800px ao redor do centro
    const { width: containerWidth, height: containerHeight } = containerSize
    const cardWidth = 150 // Defina a largura do card
    const cardHeight = 150 // Defina a altura do card

    const centerX = containerWidth / 2
    const centerY = containerHeight / 2

    const translateX = centerX + radius * Math.cos(angle) - cardWidth / 2
    const translateY = centerY + radius * Math.sin(angle) - cardHeight / 2

    // Limite as posições para garantir que o card não saia do container
    const boundedTranslateX = Math.min(
      Math.max(translateX, centerX - radius - cardWidth / 2),
      centerX + radius - cardWidth / 2,
    )

    const boundedTranslateY = Math.min(
      Math.max(translateY, centerY - radius - cardHeight / 2),
      centerY + radius - cardHeight / 2,
    )

    return {
      translateX: `${boundedTranslateX}px`,
      translateY: `${boundedTranslateY}px`,
    }
  }

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {marketingReviewUsers.map((review, index) => {
        const { translateX, translateY } = getCardPosition(index)
        return (
          <CardD
            className="drag-elements p-6"
            key={index}
            translateX={translateX}
            translateY={translateY}
          >
            <p className="text-lg text-foreground">{review.quote}</p>
            <div className="mt-4">
              <Image
                src={review.avatarUrl}
                alt={review.name}
                width={48}
                height={48}
                className="mx-auto rounded-full"
              />
              <div className="mt-2 text-foreground">{review.name}</div>
            </div>
          </CardD>
        )
      })}
    </div>
  )
}

const CardD = ({
  className,
  children,
  translateX,
  translateY,
}: {
  className: string
  children: React.ReactNode
  translateX: string
  translateY: string
}) => {
  const rotate = `${getRandomValue(-10, 10)}deg`

  return (
    <Card
      style={{
        transform: `rotate(${rotate}) translate(${translateX}, ${translateY})`,
        transition: 'transform 0.3s ease',
        position: 'absolute',
        maxWidth: `${getRandomValue(180, 450)}px`,
        maxHeight: `${getRandomValue(280, 750)}px`,
      }}
      className={className}
    >
      {children}
    </Card>
  )
}
