'use client'

import { useRouter } from 'next/navigation'

import { LOGIN_ROUTE } from '@/utils/routs/routs'

interface ClickLogOutWrapperProps {
    children?: React.ReactNode
}

export default function ClickLogOutWrapper({ children }: ClickLogOutWrapperProps) {
    const router = useRouter()

    const handleLogOut = () => {
        router.push(LOGIN_ROUTE)
    }

    return <div onClick={handleLogOut}>{children}</div>
}
