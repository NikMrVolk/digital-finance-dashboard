'use client'

import { Circle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MAIN_ROUTE } from '@/utils/routs/routs'

export default function LogoLink() {
    const pathname = usePathname()

    return (
        <nav>
            <Link href={MAIN_ROUTE}>
                <Circle
                    color="rgb(255, 0, 50)"
                    className={`h-8 w-8 tall:h-10 tall:w-10 ${
                        pathname !== '/' ? 'opacity-80 hover:opacity-90 active:opacity-100' : ''
                    }`}
                />
            </Link>
        </nav>
    )
}
