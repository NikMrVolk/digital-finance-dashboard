import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import Portfolio from '@/components/progress/Portfolio'
import Statistic from '@/components/progress/Statistic'
import StatisticAside from '@/components/progress/StatisticAside'
import DashboardCard from '@/components/UI/DashboardCard'

export default function Progress() {
    return (
        <BlockWrapper className="grid h-full grid-cols-progressContainer gap-6">
            <div className="flex flex-col gap-6">
                <DashboardCard>
                    <Portfolio />
                </DashboardCard>
                <DashboardCard className="h-full">
                    <Statistic />
                </DashboardCard>
            </div>
            <DashboardCard>
                <StatisticAside />
            </DashboardCard>
        </BlockWrapper>
    )
}
