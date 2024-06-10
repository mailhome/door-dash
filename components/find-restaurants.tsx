import React from 'react'
import { ContentProps } from './content-wrapper'

export const FindRestaurants = () => {
  return (
    <ContentProps 
      mainHeader='Everything you crave, delivered.'
      subHeader='Your favorite local restaurants'
      desc= 'Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you&rsquo;ve been meaning to try.'
      linkHref='/find-restaurants'
      linkLabel='Find restaurants'
      src='/enjoy.avif'
      srcAlt='Everything you crave, delivered'
    /> 

  )
}
