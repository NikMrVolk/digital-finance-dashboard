import { cn } from '@/lib/utils'

interface StatisticButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    isBright?: boolean
}

const colors: { bright: string; dull: string } = {
    bright: `bg-statisticButton/90 hover:bg-statisticButton/95 active:bg-statisticButton`,
    dull: `border border-statisticButton/90 bg-black text-statisticButton/90 hover:border-statisticButton/95 
            hover:text-statisticButton/95 active:border-statisticButton active:text-statisticButton`,
}

export default function StatisticButton({
    children,
    className,
    onClick,
    isBright = false,
}: StatisticButtonProps) {
    return (
        <button
            className={cn(
                `rounded-2xl px-5 py-2 active:translate-y-px ${
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
