import { Camera, Copy, User } from 'lucide-react'

import BlockWrapper from '@/components/common/wrappers/BlockWrapper'
import DashboardCard from '@/components/UI/DashboardCard'

export default function ProfilePage() {
    return (
        <BlockWrapper className="h-full">
            <DashboardCard className="h-full">
                <div className="flex gap-4">
                    <div className="relative flex h-18 w-18 items-center justify-center overflow-hidden rounded-full border duration-300 hover:border-white/50">
                        <User className="h-full w-full" />
                        <div className="absolute top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black opacity-0 duration-300 hover:bg-black/50 hover:opacity-100">
                            <Camera className="h-2/4 w-2/4" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-3xl">nick</div>
                        <div className="flex cursor-pointer gap-2 duration-300 hover:text-red-500">
                            <Copy /> <p>id</p>
                        </div>
                    </div>
                </div>
            </DashboardCard>
        </BlockWrapper>
    )
}
