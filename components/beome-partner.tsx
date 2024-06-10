import React from 'react'
import { ContentPropsReverse } from './content-wrapper-reverse'

export const BecomePartner= () => {
  return (
    <div className="2xl::mt-60 xl:py-20 bg-[#FEF1EE]">
    <ContentPropsReverse 
        mainHeader='Grow your business with DoorDash'
        subHeader=''
        desc= 'Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales.'
        linkHref='/beome-a-partner'
        linkLabel='Become a Partner'
        src='/work-with-dashpass.avif'
        srcAlt='Grow your business with DoorDash' />
    </div>
  )
}
