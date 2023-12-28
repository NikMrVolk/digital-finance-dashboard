import { StatisticButtonProps } from './StatisticButton'

import { cn } from '@/lib/utils'

const colors: { bright: string; dull: string } = {
    bright: `bg-statisticButton/90 hover:bg-statisticButton/95 active:bg-statisticButton`,
    dull: `bg-black/90 text-dashboardGray/90 hover:bg-black/95 hover:text-dashboardGray/95 
        active:bg-black active:text-dashboardGray border border-stone-900`,
}

export default function StatisticSwitchBtn({
    children,
    className = '',
    onClick,
    isBright,
}: StatisticButtonProps) {
    return (
        <button
            className={cn(
                `rounded-xl px-5 py-2 text-xs active:translate-y-px ${
                    isBright ? colors.bright : colors.dull
                }`,
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
