import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";


type Props = {
    altSrc: string;
    src: string;
    heading: string;
    desc: string;
    linkLabel: string;
    linkHref: string;
}

export const DesirablesItem = ({
    altSrc,
    src,
    heading,
    desc,
    linkLabel,
    linkHref
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center 2xl:gap-y-12 xl:gap-y-5 gap-y-4 w-full h-full">
        <div className="relative w-full h-[40vh] 2xl:h-[60vh] xl:h-[40vh] lg:h-[30vh] md:h-[30vh] ">
            <Image 
            src={src}
            alt={altSrc} 
            fill
            className="absolute"
            />
        </div>
        <h1 className="text-center font-[700] 2xl:text-6xl xl:text-4xl lg:text-3xl text-xl">
            {heading}
        </h1>
        <p className="text-center 2xl:text-3xl xl:text-xl lg:text-lg text-sm md:w-10/12">
            {desc}
        </p>
        <Link href={linkHref}>
            <Button className="md:px-8 text-white bg-[#D91400] hover:bg-[#D91400]/90 font-[500] md:py-3 2xl:h-16 xl:h-12 md:h-8 h-6 text-sm 2xl:text-3xl xl:text-xl rounded-full py-4 xl:mt-0 2xl:mt-0 mt-4">
                {linkLabel}
        </Button>
    </Link>
    </div>
  )
}
