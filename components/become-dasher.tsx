import { become_dasher } from "@/config"
import { WidthWrapper } from "./width-wrapper"
import { BecomeDasherItem } from "./become-dasher-item"


export const BecomeDasher = () => {
  return (
    <div className="w-full h-[70vh]">
        <div className="flex items-center justify-center w-full h-full flex-col">
            <WidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 md:w-full w-11/12 mx-auto items-center justify-center lg:gap-x-40 gap-x-10 md:mt-0 mt-20 gap-y-10">
                    {become_dasher.map((item) => (
                        <BecomeDasherItem 
                        key = {item.href} 
                        imgSrc = {item.imgSrc} 
                        label = {item.label} 
                        href = {item.href} 
                        desc = {item.description}
                        alt = {item.alt}
                        linkLabel = {item.linkLabel}  />
                    ))}
                </div>
            </WidthWrapper>
        </div>
    </div>
  )
}
