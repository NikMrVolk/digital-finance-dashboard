'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Icon, { IconProps } from '@/lib/icon'
import { cn } from '@/lib/utils'

interface AsideLinkProps extends IconProps {
    href: string
    classes?: { wrapper?: string; icon?: string }
    isNotification?: boolean
}

export default function AsideLink({
    href,
    classes,
    name,
    isNotification,
    ...props
}: AsideLinkProps) {
    const pathname = usePathname()

    return (
        <li className={cn('relative', classes?.wrapper)}>
            <Link href={href}>
                {isNotification && (
                    <div className="absolute -right-0.5 -top-0.5 z-1 h-3.5 w-3.5 rounded-full border-2 border-black bg-amber-500" />
                )}
                <Icon
                    name={name}
                    className={cn(
                        `h-8 w-8 opacity-40 hover:opacity-80 active:opacity-100 hover:scale-110
                        ${pathname === href ? 'opacity-100 hover:opacity-100' : ''}`,
                        classes?.icon,
                    )}
                    {...props}
                />
            </Link>
        </li>
    )
}
