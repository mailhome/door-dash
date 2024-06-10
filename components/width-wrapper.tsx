import { cn } from '@/lib/utils';
import React from 'react'


type Props = {
    children: React.ReactNode;
    className?: string;
}

export const WidthWrapper = ({
    children,
    className
}: Props) => {
  return (
    <div className={cn('2xl:max-w-[2500px] container px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20', className)}>
        { children }
    </div>
  )
}
