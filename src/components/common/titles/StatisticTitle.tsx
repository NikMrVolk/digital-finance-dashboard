import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface StatisticTitleProps {
    children: ReactNode
    className?: string
}

export default function StatisticTitle({ children, className }: StatisticTitleProps) {
    return <h2 className={cn('text-xl tall:text-2xl', className)}>{children}</h2>
}
