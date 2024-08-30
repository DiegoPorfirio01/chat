import { type ClassValue, clsx } from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
