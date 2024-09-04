'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState } from 'react'

import { marketingMenu, menuMobile } from '@/config/menus'

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
  const locale = useLocale()
  const pathname = usePathname()

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
      className="relative mb-3 flex w-fit rounded-full border-2 border-black bg-white p-0.5 sm:mb-0"
    >
      <div className="hidden sm:flex">
        {marketingMenu.map((item) => (
          <Tab
            key={item.href}
            setPosition={setPosition}
            isActive={pathname === `/${locale}${item.href}`}
          >
            <Link href={`/${locale}${item.href}`}>
              {t(item.title.toLocaleLowerCase())}
            </Link>
          </Tab>
        ))}
      </div>
      <div className="flex sm:hidden">
        {menuMobile.map((item) => (
          <Tab
            key={item.href}
            setPosition={setPosition}
            isActive={pathname === `/${locale}${item.href}`}
          >
            <Link href={`/${locale}${item.href}`}>
              {t(item.title.toLocaleLowerCase())}
            </Link>
          </Tab>
        ))}
      </div>
      <Cursor />
    </ul>
  )
}

const Tab = ({
  children,
  setPosition,
  isActive,
}: {
  children: React.ReactNode
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >
  isActive: boolean
}) => {
  const ref = useRef(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return
        const { width, left } = (
          ref.current as HTMLElement
        ).getBoundingClientRect()
        const parentElement = (ref.current as HTMLElement).parentElement
        const parentLeft = parentElement
          ? parentElement.getBoundingClientRect().left
          : 0

        setPosition({
          left: left - parentLeft,
          width,
          opacity: 0.5,
        })
      }}
      style={{
        position: 'relative',
        zIndex: 10,
        display: 'block',
        cursor: 'pointer',
        textTransform: 'uppercase',
        backgroundColor: isActive ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        color: 'black',
        borderRadius: '9999px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
      className="px-4 py-1.5"
    >
      {children}
    </li>
  )
}

const Cursor = () => {
  return (
    <li
      className="cursor absolute z-0 h-8 rounded-full bg-black md:h-[32px]"
      style={{ transition: 'all 0.3s ease' }}
    />
  )
}
