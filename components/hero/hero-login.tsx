'use client'


import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from '../ui/dialog'
import { User } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link'

export const HeroLogin = () => {
  return (
    <div className="lg:mt-20 md:mt-16 mt-12 md:w-fit w-ful  ">
        <Dialog>
            <DialogTrigger className='2xl:w-[30vh] xl:w-[24vw] lg:w-[28vw] md:w-[32vw] w-full border-[1px] border-[#f4a89a] rounded-full 2xl:h-16 xl:h-16 lg:h-16 md:h-12 h-12 bg-white hover:bg-[#F44322] cursor-pointer  text-neutral-700 md:font-[500] hover:text-white 2xl:text-2xl xl:text-xl lg:text-lg text-sm md:px-0 px-8 font-[300]'>
                <div className="flex items-center justify-center md:gap-x-2 gap-x-2">
                    <User className='size-8'/>
                    <p>Sign in for saved address</p>
                </div>
            </DialogTrigger>
            <DialogContent className='w-full'>
                <DialogHeader className='py-5 lg:space-y-10 space-y-4 2xl:text-xl xl:text-md lg:text-md text-xs font-thin text-neutral-900 w-full'>
                    <Input 
                    placeholder='Enter email to get started...'
                    className='py-5 2xl:h-16 2xl:placeholder:text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-md md:placeholder:text-md xl:placeholder:text-xl lg:placeholder:text-lg  shadow-md' />
                    <p className='text-center'>By clicking on any &quot;Continue&quot; button, you agree to DoorDash&rsquo;s <span className='text-blue-800 underline underline-offset-4'>Terms and Conditions</span> and <span className='text-blue-800 underline underline-offset-4'>Privacy Policy</span></p>
                </DialogHeader>
                <DialogDescription className='w-full'>
                    <div className='w-full lg:space-y-8 space-y-2'>
                        <Button className='w-full bg-[#F44322] hover:bg-[#F44322]/50 lg:h-12 h-8 2xl:text-2xl lg:text-xl text-md font-thin'>
                            Continue
                        </Button>
                        <div className="flex justify-center items-center gap-10 w-10/12 mx-auto lg:text-xl text-sm font-thin">
                            <Separator className='w-5/12' />
                            or
                            <Separator className='w-5/12' />
                        </div>
                        <div className="flex flex-col w-full justify-center items-center gap-y-3">
                            <Button 
                            className="w-full flex items-center justify-center 2xl:text-xl xl:text-lg text-black rounded-full bg-neutral-100 hover:bg-neutral-300/70 font-thin py-2 2xl:h-16 xl:h-12 2xl:gap-x-2 gap-x-3 text-xs ">
                                <FcGoogle className='2xl:size-8 xl:size-6 lg:size-5 md:size-3' />
                                Continue with Google
                            </Button>
                            <Button 
                            className="w-full flex items-center justify-center 2xl:text-xl xl:text-lg text-xs text-black rounded-full bg-neutral-100 hover:bg-neutral-300/70 font-thin py-2 2xl:h-16 xl:h-12 2xl:gap-x-2 gap-x-3">
                                <FaFacebook className='2xl:size-8 xl:size-6 lg:size-5 md:size-3  text-blue-600' />
                                Continue with Facebook
                            </Button>
                        </div>
                    </div>
                </DialogDescription>
                <DialogFooter className='pb-2 w-full '>
                    <Link 
                    href='#'
                    className='2xl:text-xl xl:text-lg lg:text-md text-xs font-light underline underline-offset-2 decoration-inherit w-full flex items-center justify-center hover:decoration-orange-600 hover:text-orange-500'>
                        Search Nearby
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}
