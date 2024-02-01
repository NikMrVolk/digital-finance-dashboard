'use client'

import { LogOut } from 'lucide-react'
import { ClipLoader } from 'react-spinners'

import AsideItem from './AsideItem'

import { useLogOut } from '@/hooks/auth/useLogOut'

export default function AsideExit() {
    const { logOut, isPending } = useLogOut()

    return (
        <div
            onClick={() => {
                logOut()
            }}
        >
            <AsideItem>
                {!isPending && <LogOut className="h-4 w-4 opacity-60 tall:h-6 tall:w-6" />}
                <ClipLoader color="#7c807e" size={20} loading={isPending} />
            </AsideItem>
        </div>
    )
}
