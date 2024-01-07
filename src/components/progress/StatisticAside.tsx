import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import AsideItem from '../aside/AsideItem'
import CheckBox from '../UI/CheckBox'

import MoneySum from './MoneySum'
import CircleChart from './pieChart/СircleChart'

import { asideItems } from '@/mock/progressItems'
import { MAIN_ROUTE } from '@/utils/routs/routs'

const amount = 8089

export default function StatisticAside() {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
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
                <div className="flex flex-col items-center justify-center gap-1.5 bg-black/75 px-8 py-2">
                    <div className="text-dashboardGray">My Portfolio</div>
                    <MoneySum
                        amount={amount}
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
            <CheckBox />
        </div>
    )
}
