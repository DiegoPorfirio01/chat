import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import ErrorImage from '@/public/images/error.svg'
import { useLocale } from 'next-intl'

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-250px)] w-full flex-col items-center justify-center">
      <Image src={ErrorImage} width={500} height={500} alt="" />
      <Link href={'/'}>
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
