import { categories, doing_business, footer_nav, get_to_know_us, let_us_help_you } from "@/config"
import { WidthWrapper } from "../width-wrapper"
import Link from "next/link"

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bottom-0 bg-[#191919] w-full lg:py-20">
        <WidthWrapper>
          <div className="flex start flex-col justify-start text-neutral-300 xl:gap-y-28 md:gap-y-10 w-full">
            <div className="">
              <h1 className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg text-sm 2xl:my-10 xl:my-10 my-6">
                Popular Categories
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  2xl:gap-y-7 lg:gap-y-3 xl:text-lg md:gap-y-5 lg:text-sm text-xs lg:gap-x-28 w-full">
                {categories.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="2xl:text-2xl xl:text-xl lg:text-sm text-xs capitalize hover:underline underline-offset-2 decoration-neutral-300">
                      {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-start 2xl:flex-row 2xl:justify-between xl:justify-between lg:justify-between lg:flex-row flex-col gap-y-10 w-full md:justify-start">
              <div className="flex items-start lg:justify-evenly justify-start 2xl:gap-x-60 xl:gap-x-20 md:gap-x-10 gap-x-5 w-full">
                <div className="flex flex-col items-start justify-start lg:gap-y-10 gap-y-2">
                  <h2 className="2xl:text-3xl xl:text-xl lg:text-xl md:text-md text-sm">
                    Get to Know Us
                  </h2>
                  <div className="flex flex-col items-start justify-start lg:gap-y-5 gap-y-2">
                    {get_to_know_us.map((item) => (
                      <Link 
                      key={item.href}
                      href={item.href} 
                      className="2xl:text-2xl xl:text-xl lg:text-base text-xs capitalize hover:underline underline-offset-2 decoration-neutral-300">
                        {item.labal}
                      </Link>
                    ))}
                  </div>
                </div>


                <div className="flex flex-col items-start justify-start lg:gap-y-10 gap-y-5">
                  <h2 className="2xl:text-3xl xl:text-xl lg:text-xl md:text-lg text-md">
                    Let Us Help You
                  </h2>
                  <div className="flex flex-col items-start justify-start lg:gap-y-5 gap-y-2">
                    {let_us_help_you.map((item) => (
                      <Link 
                      key={item.href}
                      href={item.href} 
                      className="2xl:text-2xl xl:text-xl lg:text-base text-xs capitalize hover:underline underline-offset-2 decoration-neutral-300">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start lg:gap-y-10 gap-y-5">
                  <h2 className="2xl:text-3xl xl:text-xl lg:text-xl md:text-lg text-md ">
                    Doing Business
                  </h2>
                  <div className="flex flex-col items-start justify-start lg:gap-y-5 gap-y-2 text-sm">
                    {doing_business.map((item) => (
                      <Link 
                      key={item.href}
                      href={item.href} 
                      className="2xl:text-2xl xl:text-xl lg:text-base text-xs hover:underline underline-offset-2 decoration-neutral-300">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex lg:items-end flex-col lg:justify-end gap-y-10 w-full">
                <div className="2xl:h-36 2xl:w-[380px] xl:h-24 xl:w-[300px] lg:h-24 lg:w-[230px] bg-neutral-800 flex items-center justify-left px-4 gap-x-2 rounded-2xl hover:bg-neutral-800/50 cursor-pointer">
                  <FaApple className="2xl:size-20 xl:size-14" />
                  <div className="flex flex-col items-start justify-start gap-y-1">
                    <h3 className="uppercase xl:text-lg text-xs">
                        Available Store
                    </h3>
                    <h1 className="2xl:text-5xl xl:text-3xl text-3xl 2xl:tracking-tighter xl:tracking-tighter">
                        App Store
                    </h1>
                  </div>
                </div>

                <div className="2xl:h-36 2xl:w-[380px] xl:h-24 xl:w-[300px] bg-neutral-800 flex items-center justify-left px-4 2xl:gap-x-6 xl:gap-x-2 rounded-2xl  lg:h-24 lg:w-[230px] hover:bg-neutral-800/50 cursor-pointer">
                  <IoLogoGooglePlaystore className="2xl:size-20 xl:size-14 " />
                  <div className="flex flex-col items-start justify-start 2xl:gap-y-1 gap-y-0">
                    <h3 className="uppercase xl:text-lg text-xs">
                        Android app on
                    </h3>
                    <h1 className="2xl:text-5xl xl:text-3xl text-3xl 2xl:tracking-tighter xl:tracking-tighter">
                        Google Play
                    </h1>
                  </div>
                </div>
              </div>
            </div>


            <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex items-center justify-start w-full gap-y-10">
              <div className="relative 2xl:h-28 2xl:w-28 xl:h-20 xl:w-20 lg:w-16 lg:h-16 md:w-16 md:h-16 ">
                <Image 
                  src="/logo-white.png" 
                  alt="Logo" 
                  fill
                  className="absolute" />
              </div>

              <div className="flex items-center justify-start lg:gap-x-5 ">
                {footer_nav.map((item) => (
                  <Link 
                  key={item.href}
                  href={item.href} 
                  className="hover:underline capitalize 2xl:text-xl xl:text-lg lg:text-md text-xs ">
                    {item.label}
                  </Link>
                ))}
                <div className="2xl:text-xl xl:text-lg lg:text-md text-sm ml-20">
                © 2024 DoorDash
              </div>
              </div>
              </div>

              <div className="flex items-center justify-center gap"></div>

              
            </div>
          </div>
        </WidthWrapper>
    </div>
  )
}
