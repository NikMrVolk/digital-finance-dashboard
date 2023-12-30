import moment from 'moment'

import MoneySum from '../MoneySum'
import PercentageChange from '../PercentageChange'

import AsideItem from '@/components/aside/AsideItem'
import DashboardCard from '@/components/UI/DashboardCard'
import { asideItems } from '@/mock/progressItems'

interface CustomTooltipProps {
    active: boolean
    payload: { value: number; payload: { date: number; count: number } }[]
    setShownTime: (value: number) => void
}

export function CustomTooltip({
    active,
    payload,
    setShownTime,
}: CustomTooltipProps): JSX.Element | null {
    if (active && payload && payload.length) {
        setShownTime(payload[0].payload.date)

        return (
            <DashboardCard className="flex gap-4 bg-customTooltip px-4 py-4">
                <AsideItem
                    imgSrc={asideItems[0].imgSrc}
                    imgAlt={asideItems[0].imgAlt}
                    classes={{
                        wrapper: 'w-10 h-10 tall:w-12 tall:h-12',
                        image: 'w-8 h-8 tall:w-10 tall:h-10',
                    }}
                />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2">
                        <MoneySum
                            amount={payload[0].value}
                            classes={{
                                money: 'text-sm tall:text-base',
                                currency: 'text-2xs tall:text-xs',
                            }}
                        />
                        <PercentageChange isGain percent={21} />
                    </div>
                    <div className="text-xs text-dashboardGray tall:text-sm">
                        {moment(payload[0].payload.date).format('DD MMM, HH:MM:SSA')}
                    </div>
                </div>
            </DashboardCard>
        )
    }

    setShownTime(0)

    return null
}
