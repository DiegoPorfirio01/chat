'use client'

import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState } from 'react'

import { marketingMenu } from '@/config/menus'

export const MarketingMenu = () => {
  return <SlideTabs />
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const t = useTranslations('marketing.menu')

  useEffect(() => {
    gsap.to('.cursor', {
      duration: 0.3,
      left: position.left,
      width: position.width,
      opacity: position.opacity,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }, [position])

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className="relative mx-auto hidden w-fit rounded-full border-2 border-black bg-white p-1 sm:flex"
    >
      {marketingMenu.map((item) => (
        <Tab key={item.href} setPosition={setPosition}>
          {t(item.title.toLocaleLowerCase())}
        </Tab>
      ))}
      <Cursor />
    </ul>
  )
}

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return

        const { width, left } = ref.current.getBoundingClientRect()
        const parentLeft =
          ref.current.parentElement.getBoundingClientRect().left

        setPosition({
          left: left - parentLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-1 md:text-base"
    >
      {children}
    </li>
  )
}

const Cursor = () => {
  return (
    <li className="cursor absolute z-0 h-7 rounded-full bg-black md:h-[32px]" />
  )
}
