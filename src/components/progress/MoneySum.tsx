import { cn } from '@/lib/utils'
import { numberFormat } from '@/utils/format/numberFormat'

interface MoneySumProps {
    amount: number
    classes?: { wrapper?: string; currency?: string; money?: string }
}

export default function MoneySum({ amount, classes }: MoneySumProps) {
    return (
        <div className={cn('flex gap-1', classes?.wrapper)}>
            <span
                className={cn(
                    '-translate-y-1 text-base font-medium text-dashboardGray tall:text-lg',
                    classes?.currency,
                )}
            >
                $
            </span>
            <span className={cn('text-2xl tall:text-3xl', classes?.money)}>
                {numberFormat(amount)}
            </span>
        </div>
    )
}
