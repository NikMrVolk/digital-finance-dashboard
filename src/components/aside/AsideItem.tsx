import Image from 'next/image'

export interface AsideItemProps {
    isRouteInclude?: boolean
    bgSelectedColors?: string
    bgUnselectedColors?: string
    children?: React.ReactNode
    imgSrc: string
    imgAlt: string
}

export default function AsideItem({
    isRouteInclude = false,
    imgSrc,
    imgAlt,
    bgSelectedColors = '',
    bgUnselectedColors = 'bg-gray-300/5 hover:bg-gray-300/20 active:bg-gray-300/30',
    children,
}: AsideItemProps) {
    return (
        <li
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-neutral-900 hover:scale-110 ${
                isRouteInclude ? bgSelectedColors : bgUnselectedColors
            }`}
        >
            {children ? children : <Image src={imgSrc} width={25} height={25} alt={imgAlt} />}
        </li>
    )
}
