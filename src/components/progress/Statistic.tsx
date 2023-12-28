import { BookText, Settings, Star } from 'lucide-react'

import AsideItem from '../aside/AsideItem'
import StatisticTitle from '../common/titles/StatisticTitle'

export default function Statistic() {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between">
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
            <div></div>
        </div>
    )
}
