import Link from "next/link";
import { WidthWrapper } from "./width-wrapper"
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
    mainHeader: string;
    subHeader: string;
    desc: string;
    linkLabel: string;
    linkHref: string;
    src: string;
    srcAlt: string;
}

export const ContentPropsReverse = ({
    mainHeader,
    subHeader,
    desc,
    linkLabel,
    linkHref,
    src,
    srcAlt,
}: Props) => {
  return (
    <div className="w-full py-8">
        <WidthWrapper className="">
            <div className={cn("flex flex-col-reverse justify-center md:grid lg:grid-cols-3 md:grid-cols-4 gap-x-10 items-center md:justify-between gap-y-8")}>
                <div className="lg:col-span-2 md:col-span-2 relative 2xl:w-full 2xl:h-[70vh] xl:h-[60vh] xl:w-full lg:h-[60vh] md:h-[50vh] h-[50vh] flex items-center justify-end w-full mx-auto">
                    <Image 
                    src={src}
                    alt={srcAlt}
                    fill 
                    className="absolute object-center object-cover" />
                </div>

                <div className="lg:col-span-1 md:col-span-2 flex flex-col items-start justify-start  xl:gap-y-10 lg:gap-y-4 md:gap-y-4 gap-y-4 w-full md:w-auto">
                    <h1 className="font-[700] 2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl text-left">
                        {mainHeader}
                    </h1>
                    <h2 className="font-[500] xl:text-3xl lg:text-2xl md:text-md text-md">
                        {subHeader}
                    </h2>
                    <p className="font-[400] 2xl:text-3xl xl:text-lg lg:text-md md:text-sm text-sm w-full text-left ">
                        {desc}
                    </p>
                    <Link href={linkHref}>
                        <Button className="md:px-8 text-white bg-[#D91400] hover:bg-[#D91400]/90 font-[500] md:py-3 2xl:h-16 xl:h-12 md:h-8 h-6 text-sm 2xl:text-3xl xl:text-xl rounded-full py-4">
                            {linkLabel}
                        </Button>
                    </Link>
                </div>
                
            </div>
        </WidthWrapper>
    </div>
  )
}
