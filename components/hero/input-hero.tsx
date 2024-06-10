
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ArrowRight, MapPin } from 'lucide-react'


export const InputHero = () => {
  return (
    <div className='mx-auto 2xl:w-4/12 xl:w-7/12 lg:w-7/12 md:w-7/12 w-full relative'>
        <div className="absolute flex items-center justify-between w-full">
            <MapPin className='absolute text-[#F44322] xl:size-10 lg:size-7 md:size-5 size-4 lg:ml-8 md:ml-4 ml-4' />
            <Input 
            placeholder='Enter Delivery Address' 
            className='text-neutral-400 2xl:text-3xl 2xl:placeholder:text-3xl xl:text-2xl xl:placeholder:text-2xl lg:text-xl lg:placeholder:text-xl md:text-lg md:placeholder:text-lg font-[100] w-full 2xl:h-24 xl:h-20 lg:h-16 md:h-14 h-12 text-sm placeholder:text-sm  rounded-full 2xl:pl-24 lg:pl-20 pl-10 border-[#F44322] bg-white md:pl-[3rem]' />
            <Button 
            type='button' 
            className="2xl:px-4 2xl:py-10 lg:p-2 rounded-full bg-red-600 -ml-32 lg:mr-4 md:mr-3 mr-2">
                <ArrowRight className='text-white 2xl:size-12   xl:size-10 lg:size-7 md:size-5 size-4' />
            </Button>
        </div>
    </div>
  )
}
