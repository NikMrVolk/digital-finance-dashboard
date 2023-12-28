import { BookText, Settings, Star } from 'lucide-react'

import AsideItem from '../aside/AsideItem'
import StatisticTitle from '../common/titles/StatisticTitle'
import StatisticSwitchBtn from '../UI/StatisticSwitchBtn'

import MoneySum from './MoneySum'
import PercentageChange from './PercentageChange'

import { asideItems } from '@/mock/progressItems'

export default function Statistic() {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <StatisticTitle>Overview Statistic</StatisticTitle>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <AsideItem>
                        <BookText />
                    </AsideItem>
                    <AsideItem>
                        <Star />
                    </AsideItem>
                    <AsideItem>
                        <Settings />
                    </AsideItem>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-4">
                    <AsideItem
                        imgSrc={asideItems[0].imgSrc}
                        imgAlt={asideItems[0].imgAlt}
                        classes={{
                            wrapper: 'w-10 h-10 tall:w-16 tall:h-16',
                            image: 'w-10 h-10 tall:w-12 tall:h-12',
                        }}
                    />
                    <div className="flex flex-col gap-2">
                        <div className="text-dashboardGray">{asideItems[0].fullName}</div>
                        <div className="flex justify-between">
                            <MoneySum amount={28089} classes={{ money: 'text-2xl' }} />
                            <PercentageChange isGain percent={26} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 rounded-lg border border-stone-900 bg-black p-4">
                    <StatisticSwitchBtn>1D</StatisticSwitchBtn>
                    <StatisticSwitchBtn>1W</StatisticSwitchBtn>
                    <StatisticSwitchBtn isBright>1M</StatisticSwitchBtn>
                    <StatisticSwitchBtn>1Y</StatisticSwitchBtn>
                    <StatisticSwitchBtn>MAX</StatisticSwitchBtn>
                </div>
            </div>
        </div>
    )
}
