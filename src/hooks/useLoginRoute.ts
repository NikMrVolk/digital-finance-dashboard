import { usePathname } from 'next/navigation'

import { LOGIN_ROUTE } from '@/utils/routs/routs'

export const useLoginRoute = () => {
    const pathname = usePathname()

    const isLogin = pathname.includes(LOGIN_ROUTE)

    return { isLogin }
}
