import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth/auth.service'
import { QueryKeys } from '@/utils/constants'
import { LOGIN_ROUTE } from '@/utils/routs/routs'

export const useLogOut = () => {
    const { push } = useRouter()

    const { mutate: logOut, isPending } = useMutation({
        mutationKey: [QueryKeys.LOG_OUT],
        mutationFn: () => authService.logout(),
        onSuccess() {
            push(LOGIN_ROUTE)
        },
    })

    return {
        logOut,
        isPending,
    }
}
