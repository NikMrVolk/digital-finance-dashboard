import StatisticTitle from '../common/titles/StatisticTitle'
import StatisticButton from '../UI/StatisticButton'

import Icon from '@/lib/icon'
import { numberFormat } from '@/utils/format/numberFormat'

interface Portfolio {
    title: string
    percent: number
    isGain: boolean
    amount: number
}

const portfolio: Portfolio[] = [
    {
        title: 'My Balance',
        percent: 24,
        isGain: true,
        amount: 42069,
    },
    {
        title: 'Investment',
        percent: 28,
        isGain: true,
        amount: 20619,
    },
    {
        title: 'Total Gain',
        percent: 22,
        isGain: true,
        amount: 8664,
    },
    {
        title: 'Total Loss',
        percent: 20,
        isGain: false,
        amount: 1212,
    },
]

export default function Portfolio() {
    return (
        <div>
            <div className="mb-8 flex justify-between">
                <StatisticTitle>Overall Portfolio</StatisticTitle>

                <div className="flex gap-4">
                    <StatisticButton> Withdraw</StatisticButton>
                    <StatisticButton isBright> Deposit +</StatisticButton>
                </div>
            </div>
            <div className="flex items-center justify-between">
                {portfolio.map(({ title, percent, isGain, amount }) => (
                    <div key={title}>
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-dashboardGray">{title}</h3>
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
                        </div>
                        <div className="flex gap-1">
                            <span className="-translate-y-1 text-lg font-medium text-dashboardGray	">
                                $
                            </span>
                            <span className="text-3xl">{numberFormat(amount)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
