'use client'

import { useState } from 'react'
import { WidthWrapper } from './width-wrapper'
import { top_chains, top_cities, top_cuisines } from '@/config';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Services = () => {
  const [cities, setCities ] = useState(true);
  const [cuisines, setCuisines ] = useState(false);
  const [chains, setChains ] = useState(false);

  const toggleCities = () => {
    setCities((value) =>!value);

  }

  const toggleCuisines = () => {
    setCuisines((value) =>!value);
  
}
  const toggleChains = () => {
    setChains((value) =>!value);
  }

  let topCities = (cuisines || chains || (cuisines && chains))

  return (
    <div className='hidden w-full mt-20 h-[40vh] py-20'>
        <WidthWrapper className='w-full'>
            <div className="w-full relative h-full">
                <div className="w-full flex items-center justify-evenly gap-x-16 text-3xl text-neutral-700 py-5 h-full">
                    <div 
                    onClick={toggleCities}
                    className={cn("cursor-pointer", cities && 'underline  decoration-neutral-700  underline-offset-8')}>
                        Top Cities
                    </div>
                    
                    <div
                     onClick={toggleCuisines} 
                     className={cn("cursor-pointer", cuisines && 'underline  decoration-neutral-700  underline-offset-8')} >
                        Top Cuisines
                    </div>

                    <div onClick={toggleChains} 
                     className={cn("cursor-pointer", chains && 'underline  decoration-neutral-700  underline-offset-8')} >
                        Top Chains
                    </div>
                </div>

                {cities && (
                    <div className={cn("absolute w-full top-20 py-10", cities ? "active" : null, topCities ? !cities : cities)}>
                        <div className="grid grid-cols-2 2xl:grid-cols-5 w-10/12 mx-auto gap-x-48 gap-y-10 text-neutral-700">
                        {top_cities.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href} 
                                className='2xl:text-3xl'>
                                {item.label}
                            </Link>
                        ))}
                        </div>
                    </div>
            )}

                {cuisines && (
                    <div className={cn("absolute w-full top-20 py-10", cuisines ? "active" : null, )}>
                        <div className="grid grid-cols-2 2xl:grid-cols-5 w-10/12 mx-auto gap-x-48 gap-y-10 text-neutral-700">
                        {top_cuisines.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href} 
                                className='2xl:text-3xl'>
                                {item.label}
                            </Link>

                        ))}
                        </div>
                    </div>
                ) }


                {chains && (
                    <div className={cn("absolute w-full top-20 py-10", cuisines ? "active" : null, !cities ? false : true)}>
                        <div className="grid grid-cols-2 2xl:grid-cols-5 w-10/12 mx-auto gap-x-48 gap-y-10 text-neutral-700">
                        {top_chains.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href} 
                                className='2xl:text-3xl'>
                                {item.label}
                            </Link>

                        ))}
                        </div>
                    </div>
                ) }

                
            </div>
        </WidthWrapper>
    </div>
  )
}
