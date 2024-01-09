import { ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/lib/utils'

interface PercentageChangeProps {
    isGain: boolean
    percent: number
    classes?: { wrapper?: string; arrow?: string }
}

export default function PercentageChange({
    isGain,
    percent,
    classes = { wrapper: '', arrow: '' },
}: PercentageChangeProps) {
    return (
        <div
            className={cn(
                `flex items-center justify-center gap-1 text-xs ${
                    isGain ? 'text-green-800' : 'text-red-800'
                }`,
                classes.wrapper,
            )}
        >
            {isGain ? (
                <ChevronUp className={cn('h-4 w-4', classes.arrow)} />
            ) : (
                <ChevronDown className={cn('h-4 w-4', classes.arrow)} />
            )}
            <span>
                {isGain ? '+' : '-'}
                {percent}%
            </span>
        </div>
    )
}
