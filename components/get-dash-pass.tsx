import React from 'react'
import { ContentPropsReverse } from './content-wrapper-reverse'

export const GetDashPass = () => {
  return (
    <div className="2xl::mt-60 xl:py-20 bg-[#FEF1EE]">
    <ContentPropsReverse 
        mainHeader='DashPass is delivery for less.'
        subHeader=''
        desc= 'Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it&rsquo;s free for 30 days.'
        linkHref='/get-dashpass'
        linkLabel='Get DashPass'
        src='/dashpass-image.avif'
        srcAlt='Everything you crave, delivered' />
    </div>
  )
}
