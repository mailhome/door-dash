import React from 'react'
import { WidthWrapper } from './width-wrapper'
import { DesirablesItem } from './desirables-item'

export const DashPassDesirables = () => {
  return (
    <div className='2xl::mt-60 xl:py-20 py-10 w-full h-fit bg-[#FEF1EE]'>
        <WidthWrapper className='py-5 h-full w-full'>
            <div className="flex items-center justify-start gap-y-16 h-full flex-col w-full">
                <h1 className='2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-[700] 2xl:w-5/12 xl:w-8/12 mx-auto text-center xl:mb-10'>
                    Helping you with to-dos and gifting
                </h1>
                <div className="md:grid md:grid-cols-2 2xl:gap-y-40 xl:gap-x-24 lg:gap-x-16 2xl:gap-x-40 xl:gap-y-24 lg:gap-y-16 md:gap-x-10 md:gap-y-10 md:w-full  flex flex-col items-center justify-evenly gap-x-10 gap-y-10 md:mb-0 -mt-10">
                    <DesirablesItem 
                    altSrc='Return Packages from Home'
                    src='/package-pickup.png'
                    heading='Return Packages from Home'
                    desc='Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.' 
                    linkHref='/package-pickup'
                    linkLabel='Try Package Pickup' />

                    <DesirablesItem 
                    altSrc='Flowers for any occasion'
                    src='/flowers.png'
                    heading='Flowers for any occasion'
                    desc='Shop hand-picked and thoughtfully-arranged blooms from florists near you.' 
                    linkHref='/send-flowers'
                    linkLabel='Send flowers' />

                    <DesirablesItem 
                    altSrc='Restock the minibar'
                    src='/alcohol.png'
                    heading='Restock the minibar'
                    desc='Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne, and wine delivered fast.*' 
                    linkHref='/Shop-alcohol'
                    linkLabel='Shop alcohol' />

                    <DesirablesItem 
                    altSrc='What your pets need, and want'
                    src='/pet_supplies_desktop.png'
                    heading='What your pets need, and want'
                    desc='Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.' 
                    linkHref='/get-pet-supplies'
                    linkLabel='Get Pet Supplies' />
                </div>
            </div>
        </WidthWrapper>
    </div>
  )
}
