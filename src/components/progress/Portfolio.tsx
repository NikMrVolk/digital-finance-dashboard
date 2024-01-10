import StatisticTitle from '../common/titles/StatisticTitle'
import StatisticButton from '../UI/StatisticButton'

import MoneySum from './MoneySum'
import PercentageChange from './PercentageChange'

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
            <div className="mb-4 flex justify-between">
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
                            <h3 className="text-sm text-dashboardGray tall:text-base">{title}</h3>
                            <PercentageChange percent={percent} isGain={isGain} />
                        </div>
                        <MoneySum amount={amount} />
                    </div>
                ))}
                C
            </div>
        </div>
    )
}
