'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Icon from '@/lib/icon'

export default function LogoLink() {
    const pathname = usePathname()

    return (
        <nav>
            <Link href="/">
                <Icon
                    name="circle"
                    color="rgb(255, 0, 50)"
                    className={`h-10 w-10 ${
                        pathname !== '/' ? 'opacity-80 hover:opacity-90 active:opacity-100' : ''
                    }`}
                />
            </Link>
        </nav>
    )
}
