'use client';

import { UseScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  const scrolled = UseScrollTop()
  return (
    <Link href= "/" 
    className="hidden items-center md:flex justify-center gap-x-2">
        <div className='2xl:h-14 2xl:w-20 xl:w-20  xl:h-14 lg:h-10 lg:w-16 h-8 w-14 relative '>
            <Image 
            src={scrolled ? "/logo-orange.png" : "/logo-white.png"}
            alt='Logo'
            fill 
            className='absolute' 
            />
        </div>
        <p className={cn('text-white font-black 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl uppercase', scrolled && "text-[#F44322] font-bold")}>
            Doordash
        </p>
    </Link>
  )
}

export default Logo