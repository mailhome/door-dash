'use client'


import { cn } from "@/lib/utils"
import { Navbar } from "../navbar/navbar"
import { WidthWrapper } from "../width-wrapper"
import { HeroLogin } from "./hero-login"
import { InputHero } from "./input-hero"
import { UseScrollTop } from "@/hooks/use-scroll-top"
import Logo from "../logo"


export const Hero = () => {
  const scrolled = UseScrollTop()
  return (
    <div className="w-full md:h-screen h-[90vh] bg-[#F44322]">
        <div className="w-full h-full">
          <WidthWrapper className="w-full h-full">
            <div className={cn("", scrolled ? 'hidden' : 'block')}> 
              <Navbar />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center 2xl:gap-y-16 xl:gap-x-12 md:gap-y-8 gap-y-6 md:h-full md:py-0 py-20 sm:py-10">
              <h1 className="text-white font-[500] 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-center">
                Discover restaurants and more near you.
              </h1>
              <InputHero />
              <HeroLogin />
            </div>
          </WidthWrapper>
        </div>
    </div>
  )
}
