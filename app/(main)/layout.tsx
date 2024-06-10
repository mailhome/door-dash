'use client'

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { UseScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";


type Props = {
    children: React.ReactNode;
}

const MainLayout = ({
    children
}: Props) => {
  const scrolled = UseScrollTop()
  return (
    <div className="min-h-screen flex flex-col">
      <div className={cn("w-full", scrolled ? 'block fixed top-0 z-50 bg-background border-b shadow-sm' : 'hidden')}>
        <Navbar />
      </div>
        <div className="flex flex-1 flex-col items-center justify-start">
            { children }
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout