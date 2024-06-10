'use client'

import { UseScrollTop } from "@/hooks/use-scroll-top"
import Logo from "../logo"
import { WidthWrapper } from "../width-wrapper"
import { NavbarLinks } from "./navbar-links"
import { cn } from "@/lib/utils"


export const Navbar = () => {
  const scrolled = UseScrollTop();

  return (
    <div className={cn("w-full")}>
      <WidthWrapper className="md:py-8 py-2">
        <div className={cn("flex items-center justify-end 2xl:gap-x-[20vw] xl:gap-x-[10vw] lg:gap-x-[10vw] gap-x-[10vw]", scrolled && "md:justify-between justify-end")}>
          <Logo />
          <NavbarLinks />
        </div>
      </WidthWrapper>
    </div>
  )
}
