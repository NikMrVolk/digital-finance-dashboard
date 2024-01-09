'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface AsideLinkProps {
    href: string
    classes?: { wrapper?: string; icon?: string }
    isNotification?: boolean
    children: React.ReactNode
}

export default function AsideLink({ href, classes, isNotification, children }: AsideLinkProps) {
    const pathname = usePathname()

    return (
        <li className={cn('relative', classes?.wrapper)}>
            <Link href={href}>
                {isNotification && (
                    <div
                        className="absolute -right-0.5 -top-0.5 z-1 h-2.5 w-2.5 rounded-full border-2 border-black 
                    bg-amber-500 tall:h-3.5 tall:w-3.5"
                    />
                )}
                <div
                    className={cn(
                        `h-6 w-6 opacity-40 hover:scale-110 hover:opacity-80 active:opacity-100 tall:h-8 tall:w-8
                        ${pathname === href ? 'opacity-100 hover:opacity-100' : ''}`,
                        classes?.icon,
                    )}
                >
                    {children}
                </div>
            </Link>
        </li>
    )
}
