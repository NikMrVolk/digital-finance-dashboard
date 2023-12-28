import AsideItem from '../aside/AsideItem'
import StatisticTitle from '../common/titles/StatisticTitle'

import Icon from '@/lib/icon'

export default function Statistic() {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between">
                <div>
                    <StatisticTitle>Overview Statistic</StatisticTitle>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <AsideItem>
                        <Icon name="book-text" />
                    </AsideItem>
                    <AsideItem>
                        <Icon name="star" />
                    </AsideItem>
                    <AsideItem>
                        <Icon name="settings" />
                    </AsideItem>
                </div>
            </div>
            <div></div>
        </div>
    )
}
