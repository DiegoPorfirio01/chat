'use client'

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useLocale, useTranslations } from 'next-intl';
import { marketingMenu, menuMobile } from '@/config/menus';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MarketingMenu = () => {
  return (
    <SlideTabs />
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const t = useTranslations('marketing.menu');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    gsap.to('.cursor', {
      duration: 0.3,
      left: position.left,
      width: position.width,
      opacity: position.opacity,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, [position]);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="w-fit mb-3 sm:mb-0 rounded-full border-2 border-black bg-white p-0.5 flex relative"
    >
      <div className='hidden sm:flex'>
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
      <div className='sm:hidden flex'>
        {menuMobile.map((item) => (
          <Tab
            key={item.href}
            setPosition={setPosition}
            isActive={pathname === `/${locale}${item.href}`}
          > 
            <Link href={`/${locale}${item.href}`}
            >
              {t(item.title.toLocaleLowerCase())}
            </Link>
          </Tab>
        ))}
      </div>
      <Cursor />
    </ul>
  );
};

const Tab = ({ children, setPosition, isActive }) => {
  const ref = useRef(null);

  return (
    <li 
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width, left } = ref.current.getBoundingClientRect();
        const parentLeft = ref.current.parentElement.getBoundingClientRect().left;

        setPosition({
          left: left - parentLeft,
          width,
          opacity: 0.5,
        });
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
      className="py-1.5 px-4"
    >
      {children}
    </li>
  );
};

const Cursor = () => {
  return (
    <li
      className="cursor absolute z-0 h-8 rounded-full bg-black md:h-[32px]"
      style={{ transition: 'all 0.3s ease' }}
    />
  );
};