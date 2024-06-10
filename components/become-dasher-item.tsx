import {  MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


type Props = {
    imgSrc: string;
    label:string;
    href: string;
    desc: string;
    alt: string;
    linkLabel: string
}

export const BecomeDasherItem = ({
    imgSrc,
    label,
    href,
    desc,
    alt,
    linkLabel
}: Props) => {
  return (
    <div className="">
    <div className="hidden md:flex items-center justify-between flex-col h-fit 2xl:gap-y-10 xl:gap-y-6 lg:gap-x-6 md:gap-y-4 gap-y-3">
        <div className="relative 2xl:w-[400px] 2xl:h-[400px] xl:w-[200px] xl:h-[200px] lg:w-[150px] lg:h-[150px] md:h-[100px] md:w-[100px] w-[100px] h-[100px]">
            <Image 
            alt={alt} 
            src={imgSrc} 
            fill
            className="absolute" />
        </div>
        <h1 className="text-black 2xl:text-5xl xl:text-3xl lg:text-xl md:text-md text-md text-center font-[500]">
            {label}
        </h1>
        <h1 className="text-black font-[300] 2xl:text-4xl xl:text-xl lg:text-md text-sm text-center">
            {desc}
        </h1>
        <Link href={href} className="font-[500] 2xl:text-3xl xl:text-xl lg:text-md text-xs hover:underline underline-offset-2 decoration-inherit
        text-[#FF431E] hover:text-[#FF431E]/90 flex items-center justify-center gap-x-2 ">
            {linkLabel}
            <MoveRight className="md:size-6 size-4" />
        </Link>
    </div>
    <div className="md:hidden grid grid-cols-3 gap-x-5">
        <div className="relative w-[100px] h-[100px] col-span-1">
            <Image 
            alt={alt} 
            src={imgSrc} 
            fill
            className="absolute" />
        </div>
        <div className="flex items-start justify-start flex-col h-fit w-full gap-y-2 col-span-2">
        <h1 className="text-black 2xl:text-5xl xl:text-3xl lg:text-xl md:text-md text-sm text-center font-[500]">
            {label}
        </h1>
        <h1 className="text-black font-[300] 2xl:text-4xl xl:text-xl lg:text-md text-xs md:text-center text-left">
            {desc}
        </h1>
        <Link href={href} className="font-[500] 2xl:text-3xl xl:text-xl lg:text-md text-xs hover:underline underline-offset-2 decoration-inherit
        text-[#FF431E] hover:text-[#FF431E]/90 flex items-center justify-center gap-x-2">
            {linkLabel}
            <MoveRight className="md:size-6 size-4" />
        </Link>
        </div>
        </div>
    </div>
  )
}
