import Icon from '@/lib/icon'

interface PercentageChangeProps {
    isGain: boolean
    percent: number
}

export default function PercentageChange({ isGain, percent }: PercentageChangeProps) {
    return (
        <div
            className={`flex items-center justify-center gap-1 text-xs ${
                isGain ? 'text-green-800' : 'text-red-800'
            }`}
        >
            {isGain ? (
                <Icon name="chevron-up" className="h-4 w-4" />
            ) : (
                <Icon name="chevron-down" className="h-4 w-4" />
            )}
            <span>
                {isGain ? '+' : '-'}
                {percent}%
            </span>
        </div>
    )
}
