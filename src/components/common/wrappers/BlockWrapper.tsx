import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface BlockWrapperProps {
    children: ReactNode
    className?: string
}

export default function BlockWrapper({ children, className }: BlockWrapperProps) {
    return <div className={cn('px-10', className)}>{children}</div>
}
