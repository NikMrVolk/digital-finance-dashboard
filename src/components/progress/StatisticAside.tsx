import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import AsideItem from '../aside/AsideItem'
import CheckBox from '../UI/CheckBox'
import StatisticButton from '../UI/StatisticButton'

import MoneySum from './MoneySum'
import CircleChart from './pieChart/СircleChart'

import { asideItems } from '@/mock/progressItems'
import { MAIN_ROUTE } from '@/utils/routs/routs'

const portfolioAmount = 8089

const initialValueForCheckBox = { value: '08 Nov - 17 Nov' }
const periodOfTimeForCheckBox = [
    { value: '18 Nov - 27 Nov' },
    { value: '28 Nov - 07 Dec' },
    { value: '08 Dec - 17 Dec' },
    { value: '18 Dec - 27 Dec' },
]

const footerStatisticElements = [
    {
        name: 'Prev Close',
        value: 17112,
        rightElement: (v: number) => (
            <MoneySum
                amount={v}
                classes={{
                    money: 'text-sm tall:text-sm',
                    wrapper: 'flex items-center',
                    currency: 'text-xs tall:text-xs',
                }}
            />
        ),
    },
    {
        name: '% Change',
        value: 26,
        rightElement: (v: number) => <span className="text-green-900">+{v}%</span>,
    },
    {
        name: 'Market Cap',
        value: 28,
        rightElement: (v: number) => (
            <span>
                <span className="inline-block -translate-y-1 pr-0.5 text-xs tall:text-xs">$</span>
                {v} M USD
            </span>
        ),
    },
    {
        name: 'PE Ratio',
        value: 14.28,
        rightElement: (v: number) => <span>{v}%</span>,
    },
]

export default function StatisticAside() {
    return (
        <div className="flex h-full flex-col items-center justify-between">
            <div className="flex items-center justify-center gap-2">
                <div>
                    <AsideItem
                        imgSrc={asideItems[0].imgSrc}
                        imgAlt={asideItems[0].imgAlt}
                        classes={{
                            wrapper: 'w-10 h-10 tall:w-12 tall:h-12',
                            image: 'w-8 h-8 tall:w-9 tall:h-9',
                        }}
                    />
                </div>
                <div className="text-sm tall:text-lg"> {asideItems[0].fullName}</div>
            </div>
            <div className="w-full rounded-3xl bg-gradient-to-r from-black via-gray-100 to-black">
                <div className="flex flex-col items-center justify-center gap-1.5 bg-black/75 px-8 py-1">
                    <div className="text-dashboardGray">My Portfolio</div>
                    <MoneySum
                        amount={portfolioAmount}
                        classes={{
                            money: 'text-xl tall:text-2xl',
                            currency: 'text-sm tall:text-base',
                        }}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 tall:text-lg">
                Official Website
                <Link href={MAIN_ROUTE}>
                    <ExternalLink className="hover:opacity-85 h-4 w-4 cursor-pointer text-orange-500 opacity-70 active:opacity-100" />
                </Link>
            </div>
            <CircleChart />
            <div className="w-full">
                <CheckBox
                    initialValue={initialValueForCheckBox}
                    elements={periodOfTimeForCheckBox}
                />
            </div>
            <ul className="flex w-full flex-col gap-2 text-sm text-dashboardGray">
                {footerStatisticElements.map(el => (
                    <li key={el.name} className="flex items-center justify-between">
                        {el.name} {el.rightElement(el.value)}
                    </li>
                ))}
            </ul>
            <StatisticButton className="mt-3 w-full">Sell Stock</StatisticButton>
            <StatisticButton isBright className="mt-2 w-full">
                Buy Stock
            </StatisticButton>
        </div>
    )
}
