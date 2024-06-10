import React from 'react'
import { WidthWrapper } from './width-wrapper'
import { ContentProps } from './content-wrapper'

export const UnlockDashers = () => {
  return (
    <div className="w-full py-10">
        <WidthWrapper>
            <div className="w-full flex flex-col items-center justify-center gap-y-20">
                <p className='font-[700] 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-3xl text-2xl leading-[40px]'>
                    Unlocking opportunity for  <br /> Dashers and businesses
                </p>
                <div className='w-full'>
                    <ContentProps 
                    mainHeader='Sign up to dash and get paid'
                    subHeader=''
                    desc= 'Deliver with the #1 Food and Drink App in the U.S., set your own schedule, and start earning cash anytime, anywhere.'
                    linkHref='/become-a-dasher'
                    linkLabel='Become a Dasher'
                    src='/become-dasher.avif'
                    srcAlt='Sign up to dash and get paid'
                      />
                </div>
            </div>
        </WidthWrapper>
    </div>
  )
}
