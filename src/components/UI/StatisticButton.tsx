import { memo } from 'react'

import { cn } from '@/lib/utils'

export interface StatisticButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    isBright?: boolean
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
}

const colors = {
    bright: `bg-statisticButton/90 hover:bg-statisticButton/95 active:bg-statisticButton`,
    dull: `border border-statisticButton/90 bg-black text-statisticButton/90 hover:border-statisticButton/95 
            hover:text-statisticButton/95 active:border-statisticButton active:text-statisticButton`,
    dullDisabled:
        'border-gray-600 text-gray-600 hover:border-gray-600 hover:text-gray-600 active:border-gray-600 active:text-gray-600',
}

export default memo(function StatisticButton({
    children,
    className,
    onClick,
    isBright = false,
    type = 'button',
    disabled = false,
}: StatisticButtonProps) {
    return (
        <button
            className={cn(
                `rounded-xl px-5 py-1.5 text-sm  tall:py-2 tall:text-base ${
                    isBright ? colors.bright : colors.dull
                } ${disabled ? colors.dullDisabled : 'active:translate-y-px'}`,
                className,
            )}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
})
