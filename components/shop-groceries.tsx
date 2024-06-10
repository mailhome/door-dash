import React from 'react'
import { WidthWrapper } from './width-wrapper'
import Link from 'next/link'
import { Button } from './ui/button'

export const ShopGroceries = () => {
  return (
    <div className='w-full md:h-[80vh] h-[60vh] bg-[url("/get-dash.jpg")]  bg-top bg-cover my-20'>
        <div className="bg-black/60 w-full h-full">
            <WidthWrapper className='h-full'>
                    <div className="flex flex-col items-center justify-center 2xl:gap-y-14 xl:gap-y-8 lg:gap-y-7 md:gap-y-8 gap-y-4 lg:w-5/12 md:w-8/12 w-10/12 mx-auto text-white h-full">
                        <h1 className='font-[700] 2xl:text-7xl xl:text-5xl lg:text-3xl text-2xl text-center'>
                             Get grocery and convenience store essentials
                        </h1>
                        <h3 className='font-[500] text-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg text-md'>
                            Grocery delivery, exactly how you want it.
                        </h3>
                        <p className='font-[300] 2xl:text-3xl xl:text-xl lg:text-md md:text-sm text-xs text-center'>
                         Shop from home and fill your cart with fresh produce, frozen entrees, deli delights, and more.
                        </p>
                        <Link href='/shop-groceries' className='mt-4'>
                            <Button className='md:px-8 text-white bg-[#D91400] hover:bg-[#D91400]/90 font-[500] md:py-3 2xl:h-16 xl:h-12 md:h-8 h-6 text-sm 2xl:text-3xl xl:text-xl rounded-full py-4'>
                                Shop Groceries
                            </Button>
                        </Link>
                </div>
            </WidthWrapper>
        </div>
    </div>
  )
}
