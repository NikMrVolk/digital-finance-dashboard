import Image from 'next/image'

import { cn } from '@/lib/utils'

export interface AsideItemProps {
    isRouteInclude?: boolean
    bgSelectedColors?: string
    bgUnselectedColors?: string
    children?: React.ReactNode
    imgSrc: string
    imgAlt: string
    classes?: { wrapper?: string; image?: string }
}

export default function AsideItem({
    isRouteInclude = false,
    imgSrc,
    imgAlt,
    bgSelectedColors = '',
    bgUnselectedColors = 'bg-gray-300/5 hover:bg-gray-300/20 active:bg-gray-300/30',
    children,
    classes = { wrapper: '', image: '' },
}: AsideItemProps) {
    return (
        <li
            className={cn(
                `flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-neutral-900 hover:scale-110 tall:h-9 tall:w-9 ${
                    isRouteInclude ? bgSelectedColors : bgUnselectedColors
                }`,
                classes.wrapper,
            )}
        >
            {children ? (
                children
            ) : (
                <Image
                    src={imgSrc}
                    width={25}
                    height={25}
                    alt={imgAlt}
                    className={cn('', classes.image)}
                />
            )}
        </li>
    )
}
