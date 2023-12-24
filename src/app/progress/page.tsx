import DashboardCard from '@/components/UI/DashboardCard'
import BlockWrapper from '@/components/wrappers/BlockWrapper'

export default function Progress() {
    return (
        <BlockWrapper className="grid h-full grid-cols-progressContainer gap-8">
            <div className="flex flex-col gap-8">
                <DashboardCard>123</DashboardCard>
                <DashboardCard className="h-full">
                    <div />
                </DashboardCard>
            </div>
            <DashboardCard>
                <div />
            </DashboardCard>
        </BlockWrapper>
    )
}
