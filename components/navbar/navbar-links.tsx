'use client'

export const NavbarLinks = () => {
  return (
    <div className='flex items-center justify-center 2xl:gap-x-10 xl:gap-x-8 lg:gap-x-8 gap-x-4'>
        <div 
        onClick = {() => {}}
        className="bg-white border-[1px] text-black 
        2xl:py-3 xl:py-2 lg:px-8 px-4 font-[500] 2xl:text-3xl xl:text-2xl rounded-full shadow-sm hover:bg-neutral-300 hover:text-white cursor-pointer">
            Sign In
        </div>
        <div 
        onClick = {() => {}}
        className="hover:bg-[#FF2C02]/80 border-[2px] 2xl:py-3 xl:py-2 lg:px-8 px-4 font-[300] 2xl:text-3xl xl:text-2xl  rounded-full shadow-sm bg-[#FF2C02] text-white cursor-pointer">
            Sign Up
        </div>
    </div>
  )
}
